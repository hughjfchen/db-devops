(ns user
  (:require [mount.core :as mount]
            [db-devops.figwheel :refer [start-fw stop-fw cljs]]
            db-devops.core))

(defn start []
  (mount/start-without #'db-devops.core/repl-server))

(defn stop []
  (mount/stop-except #'db-devops.core/repl-server))

(defn restart []
  (stop)
  (start))


