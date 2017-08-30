(ns db-devops.handlers.upgrade
  (:require [db-devops.attachments :refer [upload-file!]]
            [re-frame.core :refer [dispatch dispatch-sync reg-event-db reg-event-fx]]
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

(reg-event-fx
 :set-checklist
 (fn [cofx [_ checklist]]
   {:db (assoc (:db cofx) :checklist checklist)}))

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
          :handler       #(dispatch [:set-checklist (:checklist %)])
          :error-handler #(ajax-error %)})
   {:db (:db cofx)}))

(reg-event-db
 :set-verification
 (fn [db [_ verification]]
   (assoc db :verification verification)))

(reg-event-db
 :load-verification
 (fn [db _]
   (POST "/api/carry-out-checklist-by-cat"
         {:params {:chosen-type (some #(if (val %) (key %)) (:chosen-type db))
                   :step :verify
                   :current-path (:active-verify-path db)
                   :source (get-in db [:source-target :source])
                   :target (get-in db [:source-target :target])}
          :handler       #(dispatch [:set-verification (:checklist %)])
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

(reg-event-db
  :set-issue
  (fn [db [_ issue]]
    (assoc db :issue issue)))

(reg-event-db
  :close-issue
  (fn [db _]
    (dissoc db :issue)))

(reg-event-db
  :set-issues
  (fn [db [_ issues]]
    (assoc db :issues issues)))

(reg-event-db
  :load-all-issues
  (fn [db _]
    (GET "/api/issues"
         {:handler       #(dispatch [:set-issues (:issues %)])
          :error-handler #(ajax-error %)})
    db))

(reg-event-db
  :load-recent-issues
  (fn [db _]
    (GET "/api/recent-issues"
         {:handler       #(dispatch [:set-issues (:issues %)])
          :error-handler #(ajax-error %)})
    db))

(reg-event-db
  :load-most-viewed-issues
  (fn [db _]
    (GET "/api/issues-by-views/0/20"
         {:handler       #(dispatch [:set-issues (:issues %)])
          :error-handler #(ajax-error %)})
    db))

(reg-event-db
  :load-issues-for-tag
  (fn [db [_ tag]]
    (GET (str "/api/issues-by-tag/" tag)
         {:handler       #(dispatch [:set-issues (:issues %)])
          :error-handler #(ajax-error %)})
    db))

(reg-event-db
  :search-for-issues
  (fn [db [_ query]]
    (POST "/api/search-issues"
          {:params        {:query  query
                           :limit  10
                           :offset 0}
           :handler       #(dispatch [:set-issues (:issues %)])
           :error-handler #(ajax-error %)})
    db))

(reg-event-db
  :load-issue-detail
  (fn [db [_ support-issue-id]]
    (GET (str "/api/issue/" support-issue-id)
         {:handler       #(dispatch [:set-issue (:issue %)])
          :error-handler #(ajax-error %)})
    db))

(reg-event-db
  :load-and-view-issue
  (fn [db [_ support-issue-id]]
    (GET (str "/api/issue/" support-issue-id)
         {:handler       #(do
                           (dispatch-sync [:set-issue (:issue %)])
                           (dispatch [:set-active-page :view-issue]))
          :error-handler #(ajax-error %)})
    (dissoc db :issue)))

(reg-event-db
  :process-issue-save
  (fn [db issue]
    (assoc db :active-page :view-issue
              :issue issue)))

(reg-event-db
  :create-issue
  (fn [db [_ {:keys [title summary detail tags] :as issue}]]
    (POST "/api/issue"
          {:params        {:title   title
                           :summary summary
                           :detail  detail
                           :tags    (vec tags)}
           :handler       #(do
                            (dispatch [:load-tags] tags)
                            (dispatch-sync [:set-issue (assoc issue :support-issue-id %)])
                            (navigate! (str "/issue/" %)))
           :error-handler #(ajax-error %)})
    db))

(reg-event-db
  :save-issue
  (fn [db [_ {:keys [support-issue-id title summary detail tags] :as issue}]]
    (PUT "/api/issue"
         {:params        {:support-issue-id support-issue-id
                          :title            title
                          :summary          summary
                          :detail           detail
                          :tags             (vec tags)}
          :handler       #(do
                           (dispatch [:load-tags] tags)
                           (dispatch-sync [:set-issue issue])
                           (navigate! (str "/issue/" support-issue-id)))
          :error-handler #(ajax-error %)})
    db))

(reg-event-db
  :delete-issue
  (fn [db [_ support-issue-id]]
    (DELETE (str "/api/issue/" support-issue-id)
            {:handler       #(navigate! "/")
             :error-handler #(ajax-error %)})
    db))

(reg-event-db
  :attach-file
  (fn [db [_ filename]]
    (update-in db [:issue :files] conj filename)))

(reg-event-db
  :remove-file-from-issue
  (fn [db [_ filename]]
    (update-in db [:issue :files] #(remove #{filename} %))))

(reg-event-db
  :delete-file
  (fn [db [_ support-issue-id filename]]
    (DELETE (str "/api/file/" support-issue-id "/" filename)
            {:handler #(dispatch [:remove-file-from-issue filename])
             :error-handler #(ajax-error %)})
    db))
