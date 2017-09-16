(ns db-devops.pages.rollback
  (:require [clojure.set :refer [difference rename-keys]]
            [reagent.core :as r]
            [re-frame.core :refer [dispatch subscribe]]
            [soda-ash.core :as sa]
            [db-devops.routes :refer [context-url href navigate! run-events]]
            [db-devops.datetime :as dt]
            [db-devops.pages.common :refer [validation-modal confirm-modal main-content-layout panel-header]]
            [db-devops.routes :refer [href navigate!]]
            [db-devops.validation :as v]))

(defn rollback-panel []
  (r/with-let [checklist (subscribe [:edit-checklist])]
    [sa/Segment
     {:basic true}
     [panel-header "回退方案"]
     [sa/Divider]
     [:div]]))

(defn rollback-page []
  [main-content-layout rollback-panel])
