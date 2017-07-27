(ns db-devops.db.verification
  (:require [schema.core :as s]
            [mount.core :refer [defstate]]))

(def ALL-VERIFICATION [])


;;; default verification db

(defstate default-verification :start identity)
