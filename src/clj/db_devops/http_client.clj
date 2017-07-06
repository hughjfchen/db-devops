(ns db-devops.http-client
  (:require [clj-http.client :as client]
            [clojure.tools.logging :as log]
            [clojure.string :as cstr]
            [cheshire.core :refer :all]
            [db-devops.config :refer [env]]
            [db-devops.conditionhandling :refer :all]
            [db-devops.db.checklist :as dbcl]
            [mount.core :refer [defstate]]))

(defn get-executor-service-url []
  (or
   (get-in env [:external-api :remote-executor :url])
   (env :executor-service-url)))

(defn api-action [req]
  (client/with-connection-pool {:timeout 1 :threads 4 :insecure? true :default-per-route 2}
    (when-some [resp1 (e! client/request req)]
      (if (contains? #{301 302 303 304} (:status resp1))
        (when-some [new-agent-url (get-in resp1 [:headers "Location"])]
          (e! client/request (assoc req :url new-agent-url))) resp1))))

(defstate http-client
  :start (get-executor-service-url)
  :stop identity)

(defn remote-exec [req]
  (when-some [rs (api-action req)]
    (if (= (:status rs) 200)
      (:body rs)
      (log/error rs))))

(defn escape-str-param [s]
  (if (string? s) (str "'" s "'") s))

(defn req-arg-to-command-param [m x]
  (if-some [flag ((:name x) m)]
    (str (:command-line x) " " (escape-str-param flag))))

(defn join-params [m checklist-by-cat]
  (let [param (map (partial req-arg-to-command-param m) (get-in checklist-by-cat [:execute :input]))]
    (cstr/join " " param)))

(defn script-path [checklist-by-cat]
  (let [home (or (get-in env [:external-api :remote-executor :script-home])
                 (env :script-home))]
    (str home "/" (get-in checklist-by-cat [:execute :script-name]))))

(defn get-user-info []
  ["zjjglpt" "zjjglpt"])

(defn gen-req-meta []
  {:method :post :basic-auth (get-user-info) :content-type :json :as :json :url (get-executor-service-url)})

(defn body-value [x] (assoc {} :body x))

(defn exam-script-return [x]
  (log/info "return from script call: " x)
  (let [real-result (first x)]
    (if (= 0 (:returnCode real-result))
      (first (:output real-result)))))

(defn call-checklist-script [checklist-by-cat m]
  (let [script-path (script-path checklist-by-cat)
        paras (join-params m checklist-by-cat)]
    (as-> {} mxs
      (assoc mxs :shellParam paras)
      (assoc mxs :hostNames (:machine m))
      (assoc mxs :shellName script-path)
      (encode mxs)
      (body-value mxs)
      (merge (gen-req-meta) mxs)
      (remote-exec mxs)
      (exam-script-return mxs))))

;(call-checklist-script {:machine "chenjf" :ip "10.10.10.10" :port "50000" :instance "dbinst1" :db "mydb01" :version "9.5"} {:execute {:script-name "get_osinfo.py" :input [{:name :machine :command-line "-o"} {:name :instance :command-line "-i"} {:name :port :command-line "-p"}]}})
