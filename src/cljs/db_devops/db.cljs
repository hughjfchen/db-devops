(ns db-devops.db)

(def default-db
  {:user         (js->clj js/user :keywordize-keys true)
   :active-page  (when-not js/user :login)
   :active-upgrade-step :choose-type
   :chosen-type {:local false :cdc true :other false}
   :active-checklist-path [:aix-check :system-config]
   :source-target {:source {:machine "" :ip "" :port "" :instance "" :db "" :version "9.5"}
                   :target {:machine "" :ip "" :port "" :instance "" :db "" :version "10.5"}}
   :checklist-tree []
   :verification-tree []
   :active-verify-path [:db-check :db-status]
   :failed-checklist []
   :notifications []
   :selected-notification []
   :login-events []})
