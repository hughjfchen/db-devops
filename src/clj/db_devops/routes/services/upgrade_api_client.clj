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

(def TaskInfo {:POSTTASKNAME s/Str
               :CURSTEP s/Str
               :PROCSTATUS s/Str
               :BACKUPSTATUS s/Str
               :RESTORESTATUS s/Str})

(def CreateDBRequest
  {:inputParams {:HOSTNAME s/Str
                 :USERINFO s/Str
                 :DBNAME s/Str
                 :DBDATA s/Str
                 :DISKLIST s/Str
                 :ItilID s/Str
                 :CODEPAGE s/Str
                 :CHECK s/Str
                 :DB2VER s/Str
                 :NODENUM s/Num
                 :SYS s/Bool
                 :FS s/Bool
                 :USER s/Bool
                 :INST s/Bool
                 :DBM s/Bool
                 :DB s/Bool
                 :INSTDB2PATH s/Str
                 :DB2PATH s/Str}
   :funcid funcid})

(def CreateTSKRequest
  {:inputParams [{:SRCHOSTNAME s/Str
                  :SRCINSTANCENAME s/Str
                  :SRCPORT s/Num
                  :SRCHOSTIP s/Str
                  :SRCDBNAME s/Str
                  :TGHOSTNAME s/Str
                  :TGINSTANCENAME s/Str
                  :TGPORT s/Num
                  :TGHOSTIP s/Str
                  :TGDBNAME s/Str}]
   :inputParam {:POSTTASKNAME s/Str}
   :funcid funcid})

(def CheckDBRequest
  {:inputParam TaskInfo
   :dbParams [AliasRecord]
   :funcid funcid})

(def CreateTBRequest
  {:inputParam TaskInfo
   :dbParams [AliasRecord]
   :funcid funcid})

(def InitCDCRequest
  {:inputParam TaskInfo
   :dbParams [(-> AliasRecord
                  (assoc :FORWARD s/Bool)
                  (assoc :REVERSE s/Bool))]
   :funcid funcid})

(def FreshNBURequest
  {:inputParam TaskInfo
   :dbParams [AliasRecord]
   :funcid funcid})

(def FreshLocalRequest
  {:inputParam TaskInfo
   :dbParams [AliasRecord]
   :funcid funcid})

(def CompleteFreshRequest
  {:inputParam TaskInfo
   :dbParams [AliasRecord]
   :funcid funcid})

(def DeleteCDCRequest
  {:inputParam TaskInfo
   :dbParams [AliasRecord]
   :funcid funcid})

(handler call-upgrade-api [api-key m]
         (ok (uac/call-upgrade-api api-key m)))
