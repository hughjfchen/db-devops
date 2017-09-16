(ns db-devops.pages.create-tb
  (:require [clojure.set :refer [difference rename-keys]]
            [reagent.core :as r]
            [re-frame.core :refer [dispatch subscribe]]
            [soda-ash.core :as sa]
            [db-devops.routes :refer [context-url href navigate! run-events]]
            [db-devops.datetime :as dt]
            [db-devops.pages.common :refer [validation-modal confirm-modal main-content-layout panel-header ui-input-field]]
            [db-devops.routes :refer [href navigate!]]
            [db-devops.validation :as v]
            [db-devops.widgets.task-output :refer [task-output-ui]]))


(defn create-tb-form []
  (r/with-let [tb-info (r/atom {})
               task-output (r/atom nil)
               v-errors (r/atom nil)]
    [sa/Segment
     {:basic true}
     [sa/Form
      [sa/Segment
       [sa/Grid
        [sa/GridRow
         [sa/Header "表信息"]]
        [sa/GridRow {:columns 3}
         [sa/GridColumn
          [ui-input-field "源主机名" tb-info [:inputParam :SRCHOSTNAME] v/validate-tb-info v-errors #(swap! tb-info assoc-in [:inputParam :SRCHOSTNAME] (-> % .-target .-value))]]
         [sa/GridColumn
          [ui-input-field "源实例" tb-info [:inputParam :SRCINSTANCENAME] v/validate-tb-info v-errors #(swap! tb-info assoc-in [:inputParam :SRCINSTANCENAME] (-> % .-target .-value))]]
         [sa/GridColumn
          [ui-input-field "源数据库名" tb-info [:inputParam :SRCDBNAME] v/validate-tb-info v-errors #(swap! tb-info assoc-in [:inputParam :SRCDBNAME] (-> % .-target .-value))]]]
        [sa/GridRow {:columns 3}
         [sa/GridColumn
          [ui-input-field "目标主机名" tb-info [:inputParam :TGHOSTNAME] v/validate-tb-info v-errors #(swap! tb-info assoc-in [:inputParam :TGHOSTNAME] (-> % .-target .-value))]]
         [sa/GridColumn
          [ui-input-field "目标实例" tb-info [:inputParam :TGINSTANCENAME] v/validate-tb-info v-errors #(swap! tb-info assoc-in [:inputParam :TGINSTANCENAME] (-> % .-target .-value))]]
         [sa/GridColumn
          [ui-input-field "目标数据库名" tb-info [:inputParam :TGDBNAME] v/validate-tb-info v-errors #(swap! tb-info assoc-in [:inputParam :TGDBNAME] (-> % .-target .-value))]]]
        [sa/GridRow
         [sa/GridColumn
          [task-output-ui [] [:task-output]]]]]]]
     [sa/Divider]
     [sa/ButtonGroup
      {:floated "left"}
      [sa/Button
       {:on-click #(run-events [[:stop-output-poller :CreateTB] [:reset-task-output] [:set-active-page :home]])} "关闭"]]
     [sa/ButtonGroup
      {:floated "right"}
      [sa/Button
       {:disabled (or (nil? @v-errors) (not-every? nil? (vals @v-errors)))
        :on-click #(do (reset! v-errors nil) (run-events [[:submit-operation :CreateTB @tb-info]]))} "创建"]]]))

(defn create-tb-panel []
  [sa/Segment
   {:basic true}
   [panel-header "创建表"]
   [sa/Divider]
   [create-tb-form]])

(defn create-tb-page []
  [main-content-layout create-tb-panel])
