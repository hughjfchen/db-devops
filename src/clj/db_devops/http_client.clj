(ns db-devops.http-client
  (:require [clj-http.client :as client]
            [clojure.tools.logging :as log]
            [clojure.string :as cstr]
            [cheshire.core :refer :all]
            [db-devops.config :refer [env]]
            [db-devops.conditionhandling :refer :all]
            [db-devops.db.checklist :as dbcl]
            [mount.core :refer [defstate]]))

(def test-data {"get_aix_osinfo.py" "{\"nowtime\": \"2017-06-29 15.15.56\", \"numproc\": \"2\", \"pgspace\": \"1024\", \"memsize\": \"6144\", \"timezone\": \"Asia/Shanghai\", \"oslevel\": \"7100-02-07-1524\", \"clevel\": \"13.1.2.0\", \"jdklevel\": \"1.5.0\",
                                     \"hostinfo\": {\"9.110.188.188\": \"BP20NIM01\", \"9.110.188.202\": \"IMG-AIX71\", \"9.119.88.66\": \"VIPBJ02SP04L32\"},
                                     \"db2portinfo\": {\"DB2_db2inst1_1\": \"60001/tcp\", \"DB2_db2inst1_3\": \"60003/tcp\", \"DB2_db2inst1_2\": \"60002/tcp\", \"DB2_db2inst1_4\": \"60004/tcp\", \"DB2_db2inst1\": \"60000/tcp\", \"DB2_db2inst1_END\": \"60005/tcp\"}}"})

(defn fetch-test-data [cl]
  (let [script (get-in cl [:execute :script-name])]
    (get test-data script)))

(defn get-executor-service-url []
  (or
   (get-in env [:external-api :remote-executor :url])
   (env :executor-service-url)))

(defn api-action [req]
  (client/with-connection-pool {:timeout 10 :threads 4 :insecure? true :default-per-route 2}
    (when-some [resp1 (e! client/request req)]
      (if (contains? #{301 302 303 304} (:status resp1))
        (when-some [new-agent-url (get-in resp1 [:headers "Location"])]
          (e! client/request (assoc req :url new-agent-url))) resp1))))

(defstate http-client
  :start (get-executor-service-url)
  :stop identity)

(defn remote-exec [req]
  (log/debug "request sent to kanban API: " req)
  (when-some [rs (api-action req)]
    (log/debug "response received from kanban API: " rs)
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
  (or (get-in env [:external-api :remote-executor :auth-info])
      (env :auth-info)
      ["zjjglpt" "zjjglpt"]))

(defn gen-req-meta []
  {:method :post :basic-auth (get-user-info) :content-type :json :url (get-executor-service-url)})

(defn body-value [x] (assoc {} :body x))

(defn exam-script-return [x]
  (let [real-result (first (decode x true))]
    (if (= 0 (:returnCode real-result))
      (decode (first (:output real-result)) true))))

(defn call-checklist-script [checklist-by-cat m]
  (if (:dev env)
    (decode (fetch-test-data checklist-by-cat) true)
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
        (exam-script-return mxs)))))

;(call-checklist-script {:machine "chenjf" :ip "10.10.10.10" :port "50000" :instance "dbinst1" :db "mydb01" :version "9.5"} {:execute {:script-name "get_osinfo.py" :input [{:name :machine :command-line "-o"} {:name :instance :command-line "-i"} {:name :port :command-line "-p"}]}})
