(ns db-devops.routes.services.upgrade-api-client
  (:require [db-devops.db.core :as db :refer [file-db]]
            [db-devops.verify-fn :as verify-fn :refer [predefined-verify-fn]]
            [db-devops.upgrade-api-client :as uac]
            [schema.core :as s]
            [clojure.tools.logging :as log]
            [ring.util.http-response :refer :all]
            [db-devops.routes.services.common :refer [handler]])
  (:import java.util.Date))

(def funcid (s/enum :CreateDB :CreateTSK :CreateTB :CheckDB :InitCDC :FreshNBU :FreshLocal :CompleteFresh :DeleteCDC))

(def user {(s/optional-key :user_id) s/Str
           (s/optional-key :user_name) s/Str})

(def AliasRecord {:RECORDID s/Num
                  :SRCHOSTNAME s/Str
                  :SRCHOSTIP s/Str
                  :SRCINSTANCENAME s/Str
                  :SRCDBNAME s/Str
                  :SRCPORT s/Num
                  :TGHOSTNAME s/Str
                  :TGHOSTIP s/Str
                  :TGINSTANCENAME s/Str
                  :TGDBNAME s/Str
                  :TGPORT s/Num
                  :TASKNAME s/Str
                  (s/optional-key :DIRECTION) (s/maybe s/Str)
                  (s/optional-key :OVERFLOWLOGPATH) (s/maybe s/Str)
                  (s/optional-key :EXTABLE) (s/maybe s/Str)
                  (s/optional-key :BACKUPTIMESTAMP) (s/maybe s/Str)
                  (s/optional-key :TGBACKUPDIR) (s/maybe s/Str)
                  (s/optional-key :COMPLETE_TIMESTAMP) (s/maybe s/Str)
                  (s/optional-key :SRCBACKUPDIR) (s/maybe s/Str)
                  (s/optional-key :SCHEMANAME) (s/maybe s/Str)
                  (s/optional-key :SRCFILEPATH) (s/maybe s/Str)
                  (s/optional-key :TGFILEPATH) (s/maybe s/Str)
                  (s/optional-key :DB2LEVEL) (s/maybe s/Str)
                  (s/optional-key :SRCVERSION) (s/maybe s/Str)})

(def TaskInfo {:TASKNAME s/Str
               (s/optional-key :POSTTASKNAME) s/Str
               :CURSTEP s/Str
               :PROCSTATUS s/Num
               :BACKUPSTATUS (s/maybe s/Str)
               :RESTORESTATUS (s/maybe s/Str)
               :USERID s/Str})

(def CreateDBRequest
  (-> {:inputParams {:HOSTNAME s/Str
                     :USERINFO s/Str
                     :DBNAME s/Str
                     :DBDATA s/Str
                     (s/optional-key :DISKLIST) s/Str
                     (s/optional-key :ItilID) s/Str
                     (s/optional-key :CODEPAGE) s/Str
                     (s/optional-key :CHECK) s/Str
                     (s/optional-key :DB2VER) s/Str
                     (s/optional-key :NODENUM) s/Num
                     :SYS s/Bool
                     :FS s/Bool
                     :USER s/Bool
                     :INST s/Bool
                     :DBM s/Bool
                     :DB s/Bool
                     (s/optional-key :DB2PATH) s/Str
                     (s/optional-key :INITDB2PATH) s/Str}
       :funcid funcid}
      (merge user)))

(def CreateTSKRequest
  (-> {:inputParams [{:SRCHOSTNAME s/Str
                      :SRCINSTANCENAME s/Str
                      :SRCPORT s/Str
                      :SRCHOSTIP s/Str
                      :SRCDBNAME s/Str
                      :TGHOSTNAME s/Str
                      :TGINSTANCENAME s/Str
                      :TGPORT s/Str
                      :TGHOSTIP s/Str
                      :TGDBNAME s/Str}]
       :inputParam {:POSTTASKNAME s/Str}
       :funcid funcid}
      (merge user)))

(def CheckDBRequest
  (-> {:inputParam TaskInfo
       :dbParams [AliasRecord]
       :funcid funcid}
      (merge user)))

(def CreateTBRequest
  (-> {:inputParam {:SRCHOSTNAME s/Str
                    :SRCINSTANCENAME s/Str
                    :SRCDBNAME s/Str
                    :TGHOSTNAME s/Str
                    :TGINSTANCENAME s/Str
                    :TGDBNAME s/Str}
       :funcid funcid}
      (merge user)))

(def InitCDCRequest
  (-> {:inputParam TaskInfo
       :dbParams [(-> AliasRecord
                      (assoc (s/optional-key :FORWARD) s/Bool)
                      (assoc (s/optional-key :REVERSE) s/Bool))]
       :funcid funcid}
      (merge user)))

(def FreshNBURequest
  (-> {:inputParam TaskInfo
       :dbParams [AliasRecord]
       :funcid funcid}
      (merge user)))

(def FreshLocalRequest
  (-> {:inputParam TaskInfo
       :dbParams [AliasRecord]
       :funcid funcid}
      (merge user)))

(def CompleteFreshRequest
  (-> {:inputParam TaskInfo
       :dbParams [AliasRecord]
       :funcid funcid}
      (merge user)))

(def DeleteCDCRequest
  (-> {:inputParam TaskInfo
       :dbParams [AliasRecord]
       :funcid funcid}
      (merge user)))

(handler call-upgrade-api [api-key m]
         (ok (uac/call-upgrade-api api-key m)))
