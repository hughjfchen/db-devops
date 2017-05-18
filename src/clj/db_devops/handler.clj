(ns db-devops.handler
  (:require [compojure.core :refer [routes wrap-routes]]
            [db-devops.layout :refer [error-page]]
            [db-devops.routes.home :refer [home-routes]]
            [db-devops.routes.services :refer [service-routes]]
            [compojure.route :as route]
            [db-devops.env :refer [defaults]]
            [mount.core :as mount]
            [db-devops.middleware :as middleware]))

(mount/defstate init-app
                :start ((or (:init defaults) identity))
                :stop  ((or (:stop defaults) identity)))

(def app-routes
  (routes
    (wrap-routes #'home-routes middleware/wrap-csrf)
    #'service-routes
    (route/not-found
      (:body
        (error-page {:status 404
                     :title "page not found"})))))


(defn app [] (middleware/wrap-base #'app-routes))
