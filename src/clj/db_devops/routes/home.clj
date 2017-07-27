(ns db-devops.routes.home
  (:require [db-devops.layout :as layout]
            [compojure.core :refer [defroutes GET]]))

(defn home-page []
  (layout/render "home.html"))

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/search/:query" [] (home-page))
  (GET "/users" [] (home-page)))
