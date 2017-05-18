(ns db-devops.routes.home
  (:require [db-devops.layout :as layout]
            [compojure.core :refer [defroutes GET]]))

(defn home-page []
  (layout/render "home.html"))

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/search/:query" [] (home-page))
  (GET "/users" [] (home-page))
  (GET "/create-issue" [] (home-page))
  (GET "/edit-issue" [] (home-page))
  (GET "/all-issues" [] (home-page))
  (GET "/recent-issues" [] (home-page))
  (GET "/most-viewed-issues" [] (home-page))
  (GET "/issue/:id" [] (home-page))
  (GET "/issues/:tag-id" [] (home-page)))

