(ns db-devops.widgets.task-output
  (:require [cuerdas.core :as string]
            [reagent.core :as r]
            [re-frame.core :refer [dispatch subscribe]]
            [soda-ash.core :as sa]))

(defn- task-failed? [failed-patten s] (re-matches (re-pattern failed-patten) s))
(defn- task-success? [success-patten s] (re-matches (re-pattern success-patten) s))
(defn- wrap-markup [failed-pattern success-patten s]
  (cond
    (task-failed? failed-pattern s) ^{:key (hash s)}[:p [:span {:style {:color "red"}} s]]
    (task-success? success-patten s) ^{:key (hash s)}[:p [:span {:style {:color "green"}} s]]
    :default ^{:key (hash s)}[:p s]))
(defn- break-into-lines [s]
  (clojure.string/split-lines s))

(defn- markup-output [failed-pattern success-pattern s]
  (map (partial wrap-markup failed-pattern success-pattern) (break-into-lines s)))

(defn task-output-ui
  ([events subs options]
   (r/with-let [output (subscribe subs)
                {:keys [failed-pattern success-pattern]} options]
     [sa/Message {:icon true
                  :hidden (nil? @output)}
      [sa/Icon {:name "circle notched"
                :loading true}]
      [sa/MessageContent
       [sa/MessageHeader "运行结果"]
       (into [:div {:style {:overflow "auto"}}] (markup-output failed-pattern success-pattern @output))]]))
  ([events subs]
   (task-output-ui events subs {:failed-pattern "(?i).*failed.*"
                                :success-pattern "(?i).*successfully.*"})))
