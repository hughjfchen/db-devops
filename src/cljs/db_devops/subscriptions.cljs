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

(reg-sub :chosen-type query)

(reg-sub :source-target query)

(reg-sub :checklist query)

(reg-sub :loading? query)

(reg-sub :user query)

(reg-sub :notifications query)

(reg-sub :statistics query)

(reg-sub :selected-notification query)

(reg-sub :issue query)

(reg-sub :issues query)

(reg-sub :error query)

(reg-sub :login-events query)

;;admin
(reg-sub :admin/users query)
