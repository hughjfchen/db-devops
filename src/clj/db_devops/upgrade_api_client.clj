(ns db-devops.upgrade-api-client
  (:require [clj-http.client :as client]
            [clojure.tools.logging :as log]
            [clojure.string :as cstr]
            [cheshire.core :refer :all]
            [db-devops.config :refer [env]]
            [db-devops.conditionhandling :refer :all]
            [mount.core :refer [defstate]]))

(defn get-upgrade-api-url []
  (or
   (get-in env [:external-api :upgrade-api :url])
   (env :upgrade-api-url)))

(defn api-action [req]
  (client/with-connection-pool {:timeout 10 :threads 4 :insecure? true :default-per-route 2}
    (when-some [resp1 (e! client/request req)]
      (if (contains? #{301 302 303 304} (:status resp1))
        (when-some [new-agent-url (get-in resp1 [:headers "Location"])]
          (e! client/request (assoc req :url new-agent-url))) resp1))))

(defstate upgrade-api-client
  :start (get-upgrade-api-url)
  :stop identity)

(defn remote-exec [req]
  (log/debug "request sent to upgrade API: " req)
  (when-some [rs (api-action req)]
    (log/debug "response received from upgrade API: " rs)
    (if (= (:status rs) 200)
      (as-> rs $
        (:body $))
      (log/error rs))))

(defn get-user-info []
  (or (get-in env [:external-api :upgrade-api :auth-info])
      (env :upgrade-api-auth-info)
      ["zjjglpt" "zjjglpt"]))

(defn gen-req-meta []
  {:basic-auth (get-user-info) :content-type :json})

(defmulti gen-api-req (fn [spec orig-req] (get-in spec [:http-req :method])))
(defmethod gen-api-req :post [spec orig-req]
  (as-> (:funcid orig-req) $
    (get spec $)
    (merge (dissoc orig-req :funcid) $)
    (encode $)
    {:body $}
    (assoc $ :method :post)
    (assoc $ :url (str (get-upgrade-api-url) (get-in spec [:http-req :uri])))))
(defmethod gen-api-req :get [spec orig-req]
  (log/debug orig-req)
  (as-> (get-in spec [:http-req :path-params]) $
    (map #(name (% orig-req)) $)
    (cstr/join "/" $)
    (str (get-upgrade-api-url) (get-in spec [:http-req :uri]) $)
    {:method :get :url $ :query-params (select-keys orig-req (get-in spec [:http-req :query-params]))}))

(defn convert-result [api-key result]
  (if (contains? #{:getTasks :getAliasRecords :getAllTaskNames :deleteTask} api-key)
    (decode result true)
    result))

(defn call-upgrade-api [api-key m]
  (as-> (get-in env [:external-api :upgrade-api :spec]) $
    (get $ api-key)
    (gen-api-req $ m)
    (merge (gen-req-meta) $)
    (remote-exec $)
    (convert-result api-key $)))

(comment
  (call-upgrade-api :getTasks {:funcid "CreateDB"})
  (call-upgrade-api :getTasks {:funcid "CreateTSK"})
  (call-upgrade-api :getTasks {:funcid "CheckDB"})
  (call-upgrade-api :getTasks {:funcid "CreateTB"})
  (call-upgrade-api :getTasks {:funcid "InitCDC"})
  (call-upgrade-api :getTasks {:funcid "FreshNBU"})
  (call-upgrade-api :getTasks {:funcid "FreshLocal"})
  (call-upgrade-api :getEventResult {:funcid "getTasks" :taskid "sadfd"})
  (call-upgrade-api :submitOperation {:funcid :CreateDB :inputParams {:inputParams {:HOSTNAME "a" :USERINFO "b" :DBNAME "db1" :DBDATA "" :DISKLIST "" :ItilID "" :CODEPAGE "1386" :CHECK "YES" :DB2VER "V10.5.5" :NODENUM 1 :SYS true :FS true :USER true :INST true :DBM true :DB true :INITDB2PATH "/home/neo/git/groot/DB2/initdb2.sh" :DB2PATH "/opt/IBM/db2/V10.5.5"}}})  )
;(call-upgrade-api :submitOperation {:user_id "ddd" :user_name "dddd" :funcid :CreateDB :inputParams {:inputParams {:HOSTNAME "a" :USERINFO "b" :DBNAME "db1" :DBDATA "" :DISKLIST "" :ItilID "" :CODEPAGE "1386" :CHECK "YES" :DB2VER "V10.5.5" :NODENUM 1 :SYS true :FS true :USER true :INST true :DBM true :DB true :INITDB2PATH "/home/neo/git/groot/DB2/initdb2.sh" :DB2PATH "/opt/IBM/db2/V10.5.5"}}})
