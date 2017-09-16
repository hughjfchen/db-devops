(ns db-devops.pages.phase-one-panel
  (:require [clojure.set :refer [difference rename-keys]]
            [reagent.core :as r]
            [re-frame.core :refer [dispatch subscribe]]
            [soda-ash.core :as sa]
            [db-devops.routes :refer [context-url href navigate! run-events]]
            [db-devops.datetime :as dt]
            [db-devops.pages.common :refer [validation-modal confirm-modal main-content-layout panel-header ui-input-field]]
            [db-devops.routes :refer [href navigate!]]
            [db-devops.validation :as v]
            [db-devops.widgets.associative-task-list :refer [associative-task-list-ui]]
            [db-devops.widgets.task-output :refer [task-output-ui]]
            [db-devops.widgets.input-params-table :refer [input-params-table-ui]]))

(defn create-task-form []
  (r/with-let [task-info (r/atom {})
               alias-records (r/atom [])
               current-alias-record (r/atom {})
               v-errors (r/atom nil)]
    [sa/Segment
     [sa/Header "步骤 #1：制定升级任务"]
     [sa/Divider]
     [sa/Segment {:basic true}
      [ui-input-field "任务名 *" task-info [:POSTTASKNAME] v/validate-task-info v-errors #(swap! task-info assoc-in [:POSTTASKNAME] (-> % .-target .-value))]]
     [sa/Header "源数据库"]
     [sa/Divider]
     [sa/Segment {:basic true}
      [sa/Grid
       [sa/GridRow {:columns 3}
        [sa/GridColumn
         [ui-input-field "源主机名 *" current-alias-record [:SRCHOSTNAME] v/validate-current-alias-record v-errors #(swap! current-alias-record assoc-in [:SRCHOSTNAME] (-> % .-target .-value))]]
        [sa/GridColumn
         [ui-input-field "源实例 *" current-alias-record [:SRCINSTANCENAME] v/validate-current-alias-record v-errors #(swap! current-alias-record assoc-in [:SRCINSTANCENAME] (-> % .-target .-value))]]
        [sa/GridColumn
         [ui-input-field "源端口 *" current-alias-record [:SRCPORT] v/validate-current-alias-record v-errors #(swap! current-alias-record assoc-in [:SRCPORT] (-> % .-target .-value))]]]
       [sa/GridRow {:columns 3}
        [sa/GridColumn
         [ui-input-field "源主机IP *" current-alias-record [:SRCHOSTIP] v/validate-current-alias-record v-errors #(swap! current-alias-record assoc-in [:SRCHOSTIP] (-> % .-target .-value))]]
        [sa/GridColumn
         [ui-input-field "源库 *" current-alias-record [:SRCDBNAME] v/validate-current-alias-record v-errors #(swap! current-alias-record assoc-in [:SRCDBNAME] (-> % .-target .-value))]]]]]
     [sa/Header "目标数据库"]
     [sa/Divider]
     [sa/Segment {:basic true}
      [sa/Grid
       [sa/GridRow {:columns 3}
        [sa/GridColumn
         [ui-input-field "目标主机名 *" current-alias-record [:TGHOSTNAME] v/validate-current-alias-record v-errors #(swap! current-alias-record assoc-in [:TGHOSTNAME] (-> % .-target .-value))]]
        [sa/GridColumn
         [ui-input-field "目标实例 *" current-alias-record [:TGINSTANCENAME] v/validate-current-alias-record v-errors #(swap! current-alias-record assoc-in [:TGINSTANCENAME] (-> % .-target .-value))]]
        [sa/GridColumn
         [ui-input-field "目标端口 *" current-alias-record [:TGPORT] v/validate-current-alias-record v-errors #(swap! current-alias-record assoc-in [:TGPORT] (-> % .-target .-value))]]]
       [sa/GridRow {:columns 3}
        [sa/GridColumn
         [ui-input-field "目标主机IP *" current-alias-record [:TGHOSTIP] v/validate-current-alias-record v-errors #(swap! current-alias-record assoc-in [:TGHOSTIP] (-> % .-target .-value))]]
        [sa/GridColumn
         [ui-input-field "目标库 *" current-alias-record [:TGDBNAME] v/validate-current-alias-record v-errors #(swap! current-alias-record assoc-in [:TGDBNAME] (-> % .-target .-value))]]]
       [sa/GridRow {:columns 3}
        [sa/GridColumn]
        [sa/GridColumn]
        [sa/GridColumn
         [sa/Button
          {:icon true
           :floated "right"
           :circular true
           :on-click #(swap! alias-records conj @current-alias-record)}
          [sa/Icon {:name "plus"}]]]]]]
     [sa/Header "源、目标数据库"]
     [sa/Divider]
     [sa/Segment {:basic true}
      [input-params-table-ui alias-records [["源端口" :SRCPORT] ["源主机IP" :SRCHOSTIP] ["目标端口" :TGPORT] ["目标主机IP" :TGHOSTIP]] true]
      [sa/ButtonGroup {:floated "right"}
       [sa/Button {:on-click #(run-events [[:submit-operation :CreateTSK {:inputParam @task-info :inputParams @alias-records} ]])}"提交"]]]
     [task-output-ui [] [:task-output]]]))

(defn submit-operation-form [step label additional-columns]
  (r/with-let [current-task (subscribe [:associative-task-list-ui/current-task])
               alias-records (subscribe [:task-alias-records])]
    [sa/Segment
     [sa/Header label]
     [sa/Divider]
     [sa/Segment {:basic true}
      [associative-task-list-ui [] [:task-info]]]
     [sa/Header "源、目标数据库"]
     [sa/Divider]
     [sa/Segment {:basic true}
      [input-params-table-ui alias-records additional-columns false]
      [sa/ButtonGroup {:floated "right"}
       [sa/Button {:on-click #(run-events [[:submit-operation step {:inputParam @current-task :dbParams @alias-records} ]])}"提交"]]]
     [task-output-ui [] [:task-output]]]))

(defn make-db-input-column [column]
  (fn [row-cursor v-errors]
    [ui-input-field "" row-cursor column v/validate-current-alias-record v-errors #(swap! row-cursor assoc-in column (-> % .-target .-value))]))

(defn make-db-checkbox-column [checkboxes]
  (fn [row-cursor v-errors]
    (into [:div]
          (map (fn [cb]
                 [sa/Checkbox
                  {:label (:label cb)
                   :checked (boolean (get-in @row-cursor (:path cb)))
                   :on-change (fn [e] (swap! row-cursor update-in (:path cb) not))}]) checkboxes))))

(defn check-db-form []
  [submit-operation-form :CheckDB "步骤 #2：数据库适应性检查" [["模式名" (make-db-input-column [:SCHEMANAME])] ["排除表" (make-db-input-column [:EXTABLE])]]])

(defn init-cdc-form []
  [submit-operation-form :InitCDC "步骤 #3：CDC环境初始化" [["方向" (make-db-checkbox-column [{:label "正向" :path [:FORWARD]} {:label "反向" :path [:REVERSE]}])] ["模式名" (make-db-input-column [:SCHEMANAME])] ["排除表" (make-db-input-column [:EXTABLE])]]])

(defn fresh-nbu-form []
  [submit-operation-form :FreshNBU "步骤 #4A：开始外部刷新（NBU恢复）" []])

(defn fresh-local-form []
  [submit-operation-form :FreshLocal "步骤 #4B：开始外部刷新（本地恢复）" [["源文件路径" (make-db-input-column [:SRCFILEPATH])] ["目标文件路径" (make-db-input-column [:TGFILEPATH])]]])

(defn complete-fresh-form []
  [submit-operation-form :CompleteFresh "步骤 #5：完成外部刷新" [["overflow日志文件路径" (make-db-input-column [:OVERFLOWLOGPATH])]]])

(defmulti phase-one-form (fn [step _] step))
(defmethod phase-one-form :CreateTSK [_ _] [create-task-form])
(defmethod phase-one-form :CheckDB [_ _] [check-db-form])
(defmethod phase-one-form :InitCDC [_ _] [init-cdc-form])
(defmethod phase-one-form :FreshNBU [_ _] [fresh-nbu-form])
(defmethod phase-one-form :FreshLocal [_ _] [fresh-local-form])
(defmethod phase-one-form :CompleteFresh [_ _] [complete-fresh-form])
(defmethod phase-one-form :default [_ _] [:div])

(defn phase-one-panel-menu [active-step]
  [sa/Menu
   {:fluid true
    :vertical true
    :pointing true
    :size "tiny"}
   [sa/MenuItem {:active (= active-step :CreateTSK)
                 :on-click #(run-events [[:clear-all-output-poller] [:reset-task-output] [:set-active-phase-one-step :CreateTSK]])} "步骤 #1：制定升级任务"]
   [sa/MenuItem {:active (= active-step :CheckDB)
                 :on-click #(run-events [[:clear-all-output-poller] [:reset-task-output] [:set-active-phase-one-step :CheckDB] [:get-task-info :CheckDB]])} "步骤 #2：数据库适应性检查"]
   [sa/MenuItem {:active (= active-step :InitCDC)
                 :on-click #(run-events [[:clear-all-output-poller] [:reset-task-output] [:set-active-phase-one-step :InitCDC] [:get-task-info :InitCDC]])} "步骤 #3：CDC环境初始化"]
   [sa/MenuItem {:active (= active-step :FreshNBU)
                 :on-click #(run-events [[:clear-all-output-poller] [:reset-task-output] [:set-active-phase-one-step :FreshNBU] [:get-task-info :FreshNBU]])} "步骤 #4A：开始外部刷新（NBU恢复）"]
   [sa/MenuItem {:active (= active-step :FreshLocal)
                 :on-click #(run-events [[:clear-all-output-poller] [:reset-task-output] [:set-active-phase-one-step :FreshLocal] [:get-task-info :FreshLocal]])} "步骤 #4B：开始外部刷新（本地恢复）"]
   [sa/MenuItem {:active (= active-step :CompleteFresh)
                 :on-click #(run-events [[:clear-all-output-poller] [:reset-task-output] [:set-active-phase-one-step :CompleteFresh] [:get-task-info :CompleteFresh]])} "步骤 #5：完成外部刷新"]])

(defn phase-one-panel []
  (r/with-let [active-phase-one-step (subscribe [:active-phase-one-step])]
    [sa/Segment
     {:basic true}
     [sa/Grid
      [sa/GridColumn {:width 4}
       [phase-one-panel-menu @active-phase-one-step]]
      [sa/GridColumn {:width 12}
       [phase-one-form @active-phase-one-step]]]
     [sa/Divider]
     [sa/ButtonGroup
      {:floated "left"}
      [sa/Button
       {:on-click #(run-events [[:reset-failed-checklist] [:load-checklist] [:set-active-upgrade-step :checklist]])} "上一步"]]
     [sa/ButtonGroup
      {:floated "right"}
      [sa/Button
       {:on-click #(run-events [[:load-verification] [:set-active-upgrade-step :verify]])} "下一步"]]]))
