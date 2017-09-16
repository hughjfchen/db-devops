(ns db-devops.handlers.upgrade
  (:require [re-frame.core :refer [dispatch dispatch-sync reg-event-db reg-event-fx]]
            [db-devops.routes :refer [context-url navigate!]]
            [day8.re-frame.http-fx]
            [db-devops.ajax :refer [ajax-error]]
            [ajax.core :as ajax :refer [DELETE GET POST PUT]]))

(reg-event-db
 :selected-notification
 (fn [db [_ notification]]
   (assoc db :selected-notification notification)))

(reg-event-db
 :set-active-upgrade-step
 (fn [db [_ step]]
   (assoc db :active-upgrade-step step)))

(reg-event-db
 :set-active-checklist-path
 (fn [db [_ path]]
   (assoc db :active-checklist-path path)))

(reg-event-db
 :set-active-verify-path
 (fn [db [_ path]]
   (assoc db :active-verify-path path)))

(reg-event-db
 :set-chosen-type
 (fn [db [_ type]]
   (assoc db :chosen-type type)))

(reg-event-db
 :set-source-target
 (fn [db [_ path k v]]
   (update-in db path assoc k v)))

(reg-event-db
 :reset-source-target
 (fn [db [_ ]]
   (assoc db :source-target {})))

(reg-event-db
 :reset-failed-checklist
 (fn [db _]
   (assoc db :failed-checklist [])))

(defn failed-checklist [cl]
  (filter #(not (get-in % [:verify :result])) cl))

(reg-event-fx
 :set-checklist
 (fn [cofx [_ checklist path]]
   {:db (as-> (:db cofx) $
          (assoc $ :checklist (:checklist checklist))
          (assoc-in $ [:checklist-result :current-path] path)
          (update-in $ [:checklist-result :result] assoc :passed (:final-result checklist))
          (update-in $ [:checklist-result :result] assoc :number-of-failure (:number-of-failure checklist))
          (update-in $ [:failed-checklist] (comp distinct into) (failed-checklist (:checklist checklist))))}))

(reg-event-db
 :set-verification-tree
 (fn [db [_ checklist]]
   (-> (assoc db :verification-tree checklist)
       (assoc :active-verify-path (:path (first (:sub-tree (first checklist))))))))

(reg-event-db
 :load-verification-tree
 (fn [db _]
   (POST "/api/compute-checklist-cat-tree"
         {:params {:chosen-type (some #(if (val %) (key %)) (:chosen-type db))
                   :step :verify}
          :handler       #(dispatch [:set-verification-tree %])
          :error-handler #(ajax-error %)})
   db))

;(reg-event-db
; :set-checklist-tree
; (fn [db [_ checklist]]
;   (-> (assoc db :checklist-tree checklist)
;       (assoc :active-checklist-path (:path (:sub-tree (first checklist)))))))

(reg-event-fx
 :set-checklist-tree
 (fn [cofx [_ checklist]]
   {:db (-> (:db cofx)
            (assoc :checklist-tree checklist)
            (assoc :active-checklist-path (:path (first (:sub-tree (first checklist))))))}))

(reg-event-db
 :load-checklist-tree
 (fn [db _]
   (POST "/api/compute-checklist-cat-tree"
         {:params {:chosen-type (some #(if (val %) (key %)) (:chosen-type db))
                   :step :checklist}
          :handler       #(dispatch [:set-checklist-tree %])
          :error-handler #(ajax-error %)})
   db))

(reg-event-fx
 :load-checklist
 (fn [cofx [_ path]]
   (POST "/api/carry-out-checklist-by-cat"
         {:params {:chosen-type (some #(if (val %) (key %)) (:chosen-type (:db cofx)))
                   :step :checklist
                   :current-path (:active-checklist-path (:db cofx))
                   :source (get-in (:db cofx) [:source-target :source])
                   :target (get-in (:db cofx) [:source-target :target])}
          :handler       #(dispatch [:set-checklist % (:active-checklist-path (:db cofx))])
          :error-handler #(ajax-error %)})
   {:db (:db cofx)}))

(reg-event-db
 :set-verification
 (fn [db [_ verification path]]
   (as-> db $
     (assoc $ :verification (:checklist verification))
     (assoc-in $ [:checklist-result :current-path] path)
     (update-in $ [:checklist-result :result] assoc :passed (:final-result verification))
     (update-in $ [:checklist-result :result] assoc :number-of-failure (:number-of-failure verification))
     (update-in $ [:failed-checklist] (comp distinct into) (failed-checklist (:checklist verification))))))

(reg-event-db
 :load-verification
 (fn [db _]
   (POST "/api/carry-out-checklist-by-cat"
         {:params {:chosen-type (some #(if (val %) (key %)) (:chosen-type db))
                   :step :verify
                   :current-path (:active-verify-path db)
                   :source (get-in db [:source-target :source])
                   :target (get-in db [:source-target :target])}
          :handler       #(dispatch [:set-verification % (:active-verify-path db)])
          :error-handler #(ajax-error %)})
   db))

(reg-event-fx
 :bad-ajax-result
 (fn [{:keys [db]} [_ result]]
   {:db (assoc db :checklist-management result)}))

(reg-event-fx
 :set-checklist-management
 (fn [{:keys [db]} [_ step result]]
   {:db (assoc db :checklist-management (map #(merge {:step step :action ""} %) result))}))

(reg-event-db
 :load-checklist-management
 (fn [db [_ step]]
   (GET (str "/admin/checklist/" (name step))
        {:handler #(dispatch [:set-checklist-management step %])
         :error-handler #(ajax-error %)})
   (assoc db :checklist-step step)))

(reg-event-db
 :edit-checklist
 (fn [db [_ checklist]]
   (assoc db :edit-checklist checklist)))

(reg-event-db
 :finish-edit
 (fn [db [_ _]]
   (dissoc db :edit-checklist)))

(reg-event-db
 :save-checklist
 (fn [db [_ step cl]]
   (PUT (str "/admin/checklist/" step)
        {:params {:cl cl}
         :handler #(dispatch [:load-checklist-management step])
         :error-handler #(ajax-error %)})
   db))

(reg-event-db
 :create-checklist
 (fn [db [_ step cl]]
   (POST (str "/admin/checklist/" step)
         {:params {:cl cl}
          :handler #(dispatch [:load-checklist-management step])
          :error-handler #(ajax-error %)})
   db))

(reg-event-db
 :delete-checklist
 (fn [db [_ step id]]
   (DELETE (str "/admin/checklist/" step "/" id)
           {:handler #(dispatch [:load-checklist-management step])
            :error-handler #(ajax-error %)})
   db))
