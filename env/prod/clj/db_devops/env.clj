(ns db-devops.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[db_devops started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[db_devops has shut down successfully]=-"))
   :middleware identity})
