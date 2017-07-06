(ns db-devops.db)

(def default-db
  {:user         (js->clj js/user :keywordize-keys true)
   :selected-tag "Recent"
   :active-page  (when-not js/user :login)
   :active-upgrade-step :choose-type
   :chosen-type {:local false :cdc true :other false}
   :active-checklist-path [:aix-check :system-config]
   :source-target {:source {:machine "" :ip "" :port "" :instance "" :db "" :version "9.5"}
                   :target {:machine "" :ip "" :port "" :instance "" :db "" :version "10.5"}}
   :checklists-loaded []
   :notifications []
   :selected-notification []
   :login-events []})
