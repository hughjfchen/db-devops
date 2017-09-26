(ns db-devops.handlers.phase-one-api
  (:require [re-frame.core :refer [dispatch dispatch-sync reg-event-db reg-event-fx]]
            [db-devops.routes :refer [context-url navigate!]]
            [day8.re-frame.http-fx]
            [db-devops.effects]
            [db-devops.ajax :refer [ajax-error]]
            [ajax.core :as ajax :refer [DELETE GET POST PUT]]))


(reg-event-db
 :set-active-phase-one-step
 (fn [db [_ step]]
   (assoc db :active-phase-one-step step)))

(reg-event-db
 :set-task-output
 (fn [db [_ task-output]]
   (assoc db :task-output task-output)))

(reg-event-db
 :reset-task-output
 (fn [db _]
   (dissoc db :task-output)))

(defn- task->posttask [req]
  (or (and (contains? req :inputParam) (get-in req [:inputParam :TASKNAME]) (assoc-in req [:inputParam :POSTTASKNAME] (get-in req [:inputParam :TASKNAME]))) req))

(reg-event-db
 :submit-operation
 (fn [db [_ operation params]]
   (POST (str "/api/upgrade-api-submit-operation" "-" (clojure.string/lower-case (name operation)))
         {:params (as-> params $
                    (task->posttask $)
                    (assoc $ :user_id (get-in db [:user :screenname]))
                    (assoc $ :user_name (get-in db [:user :screenname]))
                    (assoc $ :funcid operation)
                    {:m $})
          :handler       #(dispatch [:start-output-poller operation %])
          :error-handler #(ajax-error %)})
   db))

(reg-event-fx
 :start-output-poller
 (fn [db [_ operation taskid]]
   {:interval {:action :start
               :id operation
               :frequency 2000
               :event [:load-task-output taskid]}}))

(reg-event-fx
 :stop-output-poller
 (fn [db [_ operation]]
   {:interval {:action :stop
               :id operation}}))

(reg-event-fx
 :clear-all-output-poller
 (fn [db _]
   {:interval {:action :clear-all}}))

(reg-event-db
 :load-task-output
 (fn [db [_ taskid]]
   (GET (str "/api/upgrade-api-get-event-result/" taskid)
        {:handler #(dispatch [:set-task-output %])
         :error-handler #(ajax-error %)})
   db))

(reg-event-db
 :get-all-task-names
 (fn [db _]
   (GET "/api/upgrade-api-get-all-tasknames"
        {:handler #(dispatch [:set-all-task-names %])
         :error-handler #(ajax-error %)})
   db))

(reg-event-db
 :set-all-task-names
 (fn [db [_ tasknames]]
   (assoc db :all-task-names tasknames)))

(reg-event-db
 :get-task-info
 (fn [db [_ funcid]]
   (GET (str "/api/upgrade-api-get-tasks/" (name funcid))
        {:params {:user_id (get-in db [:user :screenname])}
         :handler #(dispatch [:set-task-info %])
         :error-handler #(ajax-error %)})
   db))

(reg-event-db
 :set-task-info
 (fn [db [_ taskinfo]]
   (assoc db :task-info taskinfo)))

(reg-event-db
 :get-task-alias-records
 (fn [db [_ taskname]]
   (GET (str "/api/upgrade-api-get-alias-records/" taskname)
        {:handler #(dispatch [:set-task-alias-records %])
         :error-handler #(ajax-error %)})
   db))

(reg-event-db
 :set-task-alias-records
 (fn [db [_ taskdb]]
   (assoc db :task-alias-records taskdb)))

(reg-event-db
 :reset-task-alias-records
 (fn [db _]
   (dissoc db :task-alias-records)))

(reg-event-db
 :delete-task
 (fn [db [_ taskname]]
   (GET (str "/api/upgrade-api-delete-task/" taskname)
        {:handler #(dispatch [:set-delete-task-result %])
         :error-handler #(ajax-error %)})
   db))

(reg-event-db
 :set-delete-task-result
 (fn [db [_ result]]
   (assoc db :delete-task-result result)))

(reg-event-db
 :edit-alias-record-inline-input
 (fn [db [_ path value]]
   (assoc-in db (cons :task-alias-records path) value )))

(reg-event-db
 :edit-alias-record-inline-checkbox
 (fn [db [_ path]]
   (update-in db (cons :task-alias-records path) not)))
