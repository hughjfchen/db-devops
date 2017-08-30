(ns db-devops.subscriptions
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
  :db-state
  (fn [db _]
    db))

(defn query [db [event-id]]
  (event-id db))

(reg-sub :active-page query)

(reg-sub :active-upgrade-step query)

(reg-sub :active-checklist-path query)

(reg-sub :active-verify-path query)

(reg-sub :chosen-type query)

(reg-sub :source-target query)

(reg-sub :checklist-tree query)

(reg-sub :checklist-management query)

(reg-sub :checklist-step query)

(reg-sub :verification-tree query)

(reg-sub :checklist query)

(reg-sub :edit-checklist query)

(reg-sub :verification query)

(reg-sub :loading? query)

(reg-sub :user query)

(reg-sub :notifications query)

(reg-sub :statistics query)

(reg-sub :selected-notification query)

(reg-sub :error query)

(reg-sub :login-events query)

;;admin
(reg-sub :admin/users query)
