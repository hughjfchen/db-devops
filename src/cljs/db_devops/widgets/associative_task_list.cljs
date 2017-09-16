(ns db-devops.widgets.associative-task-list
  (:require [cuerdas.core :as string]
            [reagent.core :as r]
            [re-frame.core :refer [dispatch subscribe reg-event-db]]
            [soda-ash.core :as sa]
            [db-devops.routes :refer [run-events]]))

(defn- compute-option [select-path a-task]
  (as-> a-task $
    (get-in $ select-path)
    {:key $ :text (str $) :value $}))

(defn- compute-options [tasks-atom select-path]
  (map (partial compute-option select-path) @tasks-atom))

(defn associative-task-list-ui
  ([events subs options]
   (r/with-let [tasks (subscribe subs)
                current-task (r/atom nil)
                {:keys [list-fields]} options]
     [sa/Grid
      [sa/GridRow {:columns 3}
       [sa/GridColumn
        [sa/Label "请选择任务"]
        [sa/Dropdown
         {:placeholder "请选择任务"
          :value (or (get-in @current-task (first list-fields)) "")
          :options (compute-options tasks (first list-fields))
          :on-change (fn [_ selected-option] (do
                                               (reset! current-task (some #(if (= (-> selected-option .-value) (get-in % (first list-fields))) %) @tasks))
                                               (run-events [[:associative-task-list-ui/current-task @current-task] [:get-task-alias-records (get-in @current-task (first list-fields))]])))}]]
       [sa/GridColumn
        [sa/Label "已执行步骤"]
        [sa/Input {:disabled true
                   :value (or (get-in @current-task (second list-fields)) "")}]]
       [sa/GridColumn
        [sa/Label "任务状态"]
        [sa/Input {:disabled true
                   :value (or (get-in @current-task (last list-fields)) "")}]]]]))
  ([events subs]
   (associative-task-list-ui events subs {:list-fields [[:TASKNAME] [:CURSTEP] [:PROCSTATUS]]})))


(reg-event-db
 :associative-task-list-ui/current-task
 (fn [db [_ current-task]]
   (assoc db :associative-task-list-ui/current-task current-task)))
