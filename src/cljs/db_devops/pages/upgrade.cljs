(ns db-devops.pages.upgrade
  (:require [clojure.set :refer [difference rename-keys]]
            [reagent.core :as r]
            [re-frame.core :refer [dispatch subscribe]]
            [soda-ash.core :as sa]
            [db-devops.routes :refer [context-url href navigate! run-events]]
            [db-devops.datetime :as dt]
            [db-devops.attachments :refer [upload-form]]
            [db-devops.pages.common :refer [validation-modal confirm-modal main-content-layout panel-header]]
            [db-devops.routes :refer [href navigate!]]
            [db-devops.validation :as v]))

(defn choose-type-page []
  [:div])

(defn checklist-page []
  [:div])

(defn verify-page []
  [:div])

(defn upgrade-steps []
  (r/with-let [current-step (subscribe [:active-upgrade-step])]
    [sa/StepGroup
     {:ordered true
      :fluid true
      :size "tiny"}
     [sa/Step
      {:title "选择升级方案"
       :description "选择合适的升级方案"
       :completed false
       :active (boolean (= @current-step :choose-type))
       :on-click #(dispatch [:set-active-upgrade-step :choose-type])}]
     [sa/Step
      {:title "源／目标"
       :description "确认或者输入升级的源／目标"
       :completed false
       :active (boolean (= @current-step :source-target))
       :on-click #(dispatch [:set-active-upgrade-step :source-target])}]
     [sa/Step
      {:title "检查"
       :description "升级前执行的检查项"
       :completed false
       :active (boolean (= @current-step :checklist))
       :on-click #(dispatch [:set-active-upgrade-step :checklist])}]
     [sa/Step
      {:title "升级"
       :description "执行升级任务"
       :completed false
       :active (boolean (= @current-step :upgrade))
       :on-click #(dispatch [:set-active-upgrade-step :upgrade])}]
     [sa/Step
      {:title "校验"
       :description "校验以确保升级成功"
       :completed false
       :active (boolean (= @current-step :verify))
       :on-click #(dispatch [:set-active-upgrade-step :verify])}]]))

(defn upgrade-choose-type-panel []
  (r/with-let [choice (subscribe [:chosen-type])]
    [sa/Segment
     {:basic true
      :fluid true}
     [sa/ListSA
      {:selection true
       :bulleted true}
      [sa/ListItem
       {:active (boolean (:local @choice))
        :on-click #(dispatch [:set-chosen-type {:local true :cdc false :other false}])}
       [sa/ListHeader "本地升级"]
       [sa/ListContent "升级的数据库系统在本地，这是最简单的一种升级方案。"]]
      [sa/ListItem
       {:active (boolean (:cdc @choice))
        :on-click #(dispatch [:set-chosen-type {:local false :cdc true :other false}])}
       [sa/ListHeader "CDC升级"]
       [sa/ListContent "通过CDC对目标数据库进行升级，相对比较复杂的一种升级方案。"]]
      [sa/ListItem
       {:active (boolean (:other @choice))
        :on-click #(dispatch [:set-chosen-type {:local false :cdc false :other true}])}
       [sa/ListHeader "其它升级方案"]
       [sa/ListContent "其它升级方案，目前未知有何种方案，留待后用。"]]]
     [sa/Divider]
     [sa/ButtonGroup
      {:floated "left"}
      [sa/Button
       {:on-click #(dispatch [:set-active-page :home])} "取消"]]
     [sa/ButtonGroup
      {:floated "right"}
      [sa/Button
       {:on-click #(dispatch [:set-active-upgrade-step :source-target])} "下一步"]]]))

(defn upgrade-choose-source-target-panel []
  (r/with-let [choice (subscribe [:chosen-type])
               source-target (subscribe [:source-target])]
    [sa/Segment
     {:basic true
      :fluid true}
     [sa/Form
      [sa/Segment
       [sa/Grid
        [sa/GridRow
         [sa/Header "源数据库信息"]]
        [sa/GridRow {:columns 3}
         [sa/GridColumn
          [sa/FormField
           [sa/Label "机器名"]
           [sa/Input {:value (get-in @source-target [:source :machine])
                      :on-change #(dispatch [:set-source-target [:source-target :source] :machine (-> % .-target .-value)])}]]]
         [sa/GridColumn
          [sa/FormField
           [sa/Label "IP"]
           [sa/Input {:value (get-in @source-target [:source :ip])
                      :on-change #(dispatch [:set-source-target [:source-target :source] :ip (-> % .-target .-value)])}]]]
         [sa/GridColumn
          [sa/FormField
           [sa/Label "端口"]
           [sa/Input {:value (get-in @source-target [:source :port])
                      :on-change #(dispatch [:set-source-target [:source-target :source] :port (-> % .-target .-value)])}]]]]
        [sa/GridRow {:columns 3}
         [sa/GridColumn
          [sa/FormField
           [sa/Label "实例名"]
           [sa/Input {:value (get-in @source-target [:source :instance])
                      :on-change #(dispatch [:set-source-target [:source-target :source] :instance (-> % .-target .-value)])}]]]
         [sa/GridColumn
          [sa/FormField
           [sa/Label "数据库名"]
           [sa/Input {:value (get-in @source-target [:source :db])
                      :on-change #(dispatch [:set-source-target [:source-target :source] :db (-> % .-target .-value)])}]]]
         [sa/GridColumn
          [sa/FormField
           [sa/Label "数据库版本"]
           [sa/FormSelect
            {:value (get-in @source-target [:source :version])
             :on-change #(dispatch [:set-source-target [:source-target :source] :version (-> % .-target .-value)])
             :options (clj->js [{:key "9.5" :text "9.5" :value "9.5"} {:key "10.5" :text "10.5" :value "10.5"}])}]]]]]]
      (if (:cdc @choice)
        [sa/Segment
         [sa/Grid
          [sa/GridRow
           [sa/Header "目标数据库信息"]]
          [sa/GridRow {:columns 3}
           [sa/GridColumn
            [sa/FormField
             [sa/Label "机器名"]
             [sa/Input {:value (get-in @source-target [:target :machine])
                        :on-change #(dispatch [:set-source-target [:source-target :target] :machine (-> % .-target .-value)])}]]]
           [sa/GridColumn
            [sa/FormField
             [sa/Label "IP"]
             [sa/Input {:value (get-in @source-target [:target :ip])
                        :on-change #(dispatch [:set-source-target [:source-target :target] :ip (-> % .-target .-value)])}]]]
           [sa/GridColumn
            [sa/FormField
             [sa/Label "端口"]
             [sa/Input {:value (get-in @source-target [:target :port])
                        :on-change #(dispatch [:set-source-target [:source-target :target] :port (-> % .-target .-value)])}]]]]
          [sa/GridRow {:columns 3}
           [sa/GridColumn
            [sa/FormField
             [sa/Label "实例名"]
             [sa/Input {:value (get-in @source-target [:target :instance])
                        :on-change #(dispatch [:set-source-target [:source-target :target] :instance (-> % .-target .-value)])}]]]
           [sa/GridColumn
            [sa/FormField
             [sa/Label "数据库名"]
             [sa/Input {:value (get-in @source-target [:target :db])
                        :on-change #(dispatch [:set-source-target [:source-target :target] :db (-> % .-target .-value)])}]]]
           [sa/GridColumn
            [sa/FormField
             [sa/Label "数据库版本"]
             [sa/FormSelect
              {:value (get-in @source-target [:target :version])
               :on-change #(dispatch [:set-source-target [:source-target :target] :version (-> % .-target .-value)])
               :options (clj->js [{:key "9.5" :text "9.5" :value "9.5"} {:key "10.5" :text "10.5" :value "10.5"}])}]]]]]])]
     [sa/Divider]
     [sa/ButtonGroup
      {:floated "left"}
      [sa/Button
       {:on-click #(dispatch [:set-active-upgrade-step :choose-type])} "上一步"]]
     [sa/ButtonGroup
      {:floated "right"}
      [sa/Button
       {:on-click #(run-events [[:load-checklist] [:set-loading] [:set-active-upgrade-step :checklist]])} "下一步"]]]))

(defn checklist-table [to-display]
  (.log js/console "to-display within checklist-table")
  (.log js/console to-display)
  [sa/Table {:celled true}
   [sa/TableHeader
    [sa/TableRow
     [sa/TableHeaderCell {:rowSpan "2"} "检查项"]
     [sa/TableHeaderCell {:rowSpan "2"} "规则"]
     [sa/TableHeaderCell {:colSpan "2"} "当前值"]
     [sa/TableHeaderCell {:rowSpan "2"} "结果"]
     [sa/TableHeaderCell {:rowSpan "2"} "整改建议"]]]
   [sa/TableRow
    [sa/TableHeaderCell]
    [sa/TableHeaderCell]
    [sa/TableHeaderCell "源机器"]
    [sa/TableHeaderCell "目标机器"]
    [sa/TableHeaderCell]
    [sa/TableHeaderCell]]
   [sa/TableBody
    (for [cl to-display]
      ^{:key (:checklist-id cl)}
      [sa/TableRow
       [sa/TableCell (:title cl)]
       [sa/TableCell (get-in cl [:verify :rule-description])]
       [sa/TableCell "值"]
       [sa/TableCell "值"]
       [sa/TableCell {:positive true} "通过"]
       [sa/TableCell ""]])]])

(defn checklist-leaf [current-path {:keys [title path passed number-of-failure]}]
  [sa/MenuItem {:active (= path current-path) :color "blue" :on-click #(run-events [[:set-active-checklist-path path] [:load-checklist]])} [sa/Label {:circular true} [sa/Icon {:name (if passed "check" "x") :color (if passed "blue" "red")}] (if-not passed number-of-failure)] [sa/Icon {:name "triangle right"}] title])

(defn checklist-branch [current-path {:keys [title path sub-tree]}]
  (let [subtree (map (partial checklist-leaf current-path) sub-tree)]
    {:title title :content (r/as-component [sa/Grid [sa/GridColumn {:width 2}] [sa/GridColumn {:width 14} [sa/Menu {:vertical true :secondary true :pointing true :compact true :size "tiny"} subtree]]])}))

(defn build-checklist-tree [current-path tree-data]
  (map (partial checklist-branch current-path) tree-data))

(defn checklist-tree [path]
  (r/with-let [tree-data [{:title "AIX检查" :path [:aix-check] :sub-tree [{:title "系统配置" :path [:aix-check :system-config] :passed true} {:title "软件部署" :path [:aix-check :software-deployment] :passed true} {:title "系统参数" :path [:aix-check :system-parameter] :passed true}]}
                          {:title "用户检查" :path [:user-check] :sub-tree [{:title "用户配置" :path [:user-check :user-config] :passed true}]}
                          {:title "存储检查" :path [:storage-check] :sub-tree [{:title "存储配置" :path [:storage-check :storage-config] :passed true} {:title "文件系统" :path [:storage-check :filesystem] :passed true}]}
                          {:title "网络检查" :path [:network-check] :sub-tree [{:title "网络配置" :path [:network-check :network-config] :passed true} {:title "网卡接口参数" :path [:network-check :NIC-parameter] :passed true} {:title "网络性能" :path [:network-check :network-performance] :passed true}]}
                          {:title "应用检查" :path [:application-check] :sub-tree [{:title "应用连接" :path [:application-check :application-connection] :passed true} {:title "应用部署" :path [:application-check :application-deployment] :passed true} {:title "应用测试" :path [:application-check :application-test] :passed true}]}
                          {:title "DB检查" :path [:db-check] :sub-tree [{:title "DB备份" :path [:db-check :db-backup] :passed true} {:title "DB状态" :path [:db-check :db-status] :passed true} {:title "DB权限" :path [:db-check :db-privilege] :passed true}  {:title "环境变量" :path [:db-check :environment] :passed false :number-of-failure 5} {:title "实例参数" :path [:db-check :instance-config] :passed true} {:title "数据库参数" :path [:db-check :db-parameter] :passed true} {:title "HADR参数" :path [:db-check :hadr-config] :passed true}]}]]
    [sa/Accordion
     {:panels (build-checklist-tree path tree-data)}]))

(defn upgrade-checklist-panel []
  (r/with-let [choice (subscribe [:chosen-type])
               current-path (subscribe [:active-checklist-path])
               checklist (subscribe [:checklist])]
    (let [to-display (into [] (filter #(and (= (first @current-path) (:first-cat %))
                                            (= (second @current-path) (:second-cat %))) @checklist))]
      (.log js/console @current-path)
      (.log js/console @checklist)
      (.log js/console to-display)
      [sa/Segment
       {:basic true
        :fluid true}
       [sa/Grid
        [sa/GridColumn {:width 4}
         [checklist-tree @current-path]]
        [sa/GridColumn {:width 12}
         [checklist-table to-display]]]
       [sa/Divider]
       [sa/ButtonGroup
        {:floated "left"}
        [sa/Button
         {:on-click #(dispatch [:set-active-upgrade-step :source-target])} "上一步"]]
       [sa/ButtonGroup
        {:floated "right"}
        [sa/Button
         {:on-click identity} "显示全部结果"]
        [sa/ButtonOr]
        [sa/Button
         {:on-click identity} "只显示未通过结果"]
        [sa/ButtonOr]
        [sa/Button
         {:on-click identity} "重新检查"]
        [sa/ButtonOr]
        [sa/Button
         {:on-click #(dispatch [:set-active-upgrade-step :upgrade])} "下一步"]]])))

(defn upgrade-do-upgrade-panel []
  (r/with-let [choice (subscribe [:chosen-type])]
    [sa/Segment
     {:basic true
      :fluid true}
     [sa/Grid
      [sa/GridColumn {:width 4}
       [sa/Menu
        {:fluid true
         :vertical true
         :pointing true}
        [sa/MenuItem {:active true} "任务 #1"]
        [sa/MenuItem "任务 #2"]
        [sa/MenuItem "任务 #3"]
        [sa/MenuItem "任务 #4"]
        [sa/MenuItem "任务 #5"]
        [sa/MenuItem "任务 #6"]
        [sa/MenuItem "任务 #7"]
        [sa/MenuItem "任务 #8"]
        [sa/MenuItem "任务 #9"]]]
      [sa/GridColumn {:width 12}
       [sa/Segment
        [sa/Header "任务 #1"]
        [sa/Divider]
        [sa/Segment {:basic true}
         [sa/Input]
         [sa/Input]
         [sa/ButtonGroup {:floated "right"}
          [sa/Button "创建任务"]]]
        [sa/Header "实例"]
        [sa/Divider]
        [sa/Segment {:basic true}
         [sa/Table {:celled true}
          [sa/TableHeader
           [sa/TableRow
            [sa/TableHeaderCell "任务名"]
            [sa/TableHeaderCell "创建时间"]
            [sa/TableHeaderCell "状态"]]]
          [sa/TableBody
           [sa/TableRow
            [sa/TableCell "任务 #1 实例 #1"]
            [sa/TableCell "2017-05-23 12:00:00"]
            [sa/TableCell "未提交"]]]]
         [sa/ButtonGroup {:floated "right"}
          [sa/Button "提交"]]]
        [sa/Header "运行结果"]
        [sa/Divider]
        [sa/Segment {:basic true}
         [sa/Form
          [sa/TextArea]]]]]]
     [sa/Divider]
     [sa/ButtonGroup
      {:floated "left"}
      [sa/Button
       {:on-click #(dispatch [:set-active-upgrade-step :checklist])} "上一步"]]
     [sa/ButtonGroup
      {:floated "right"}
      [sa/Button
       {:on-click #(dispatch [:set-active-upgrade-step :verify])} "下一步"]]]))

(defn upgrade-verify-panel []
  (r/with-let [choice (subscribe [:chosen-type])]
    [sa/Segment
     {:basic true
      :fluid true}
     [sa/Table {:celled true}
      [sa/TableHeader
       [sa/TableRow
        [sa/TableHeaderCell "检查项"]
        [sa/TableHeaderCell "规则"]
        [sa/TableHeaderCell "当前值"]
        [sa/TableHeaderCell "结果"]]]
      [sa/TableBody
       [sa/TableRow
        [sa/TableCell "项目一"]
        [sa/TableCell "规则规则规则规则"]
        [sa/TableCell "值"]
        [sa/TableCell {:positive true} "通过"]]
       [sa/TableRow
        [sa/TableCell "项目二"]
        [sa/TableCell "规则规则"]
        [sa/TableCell 8]
        [sa/TableCell {:error true}
         [sa/Icon {:name "attention"}] "不满足"]]
       [sa/TableRow
        [sa/TableCell "项目二"]
        [sa/TableCell "规则规则"]
        [sa/TableCell 8]
        [sa/TableCell {:error true} "不满足"]]
       [sa/TableRow
        [sa/TableCell "项目二"]
        [sa/TableCell "规则规则"]
        [sa/TableCell 8]
        [sa/TableCell {:error true} "不满足"]]
       [sa/TableRow
        [sa/TableCell "项目二"]
        [sa/TableCell "规则规则"]
        [sa/TableCell 8]
        [sa/TableCell {:error true} "不满足"]]
       [sa/TableRow
        [sa/TableCell "项目二"]
        [sa/TableCell "规则规则"]
        [sa/TableCell 8]
        [sa/TableCell {:error true} "不满足"]]]]
     [sa/Divider]
     [sa/ButtonGroup
      {:floated "left"}
      [sa/Button
       {:on-click #(dispatch [:set-active-upgrade-step :upgrade])} "上一步"]]
     [sa/ButtonGroup
      {:floated "right"}
      [sa/Button
       {:on-click identity} "校验"]
      [sa/ButtonOr]
      [sa/Button
       {:on-click #(dispatch [:set-active-page :home])} "完成"]]]))

(defmulti steps (fn [step _] step))
(defmethod steps :choose-type [_ _] [upgrade-choose-type-panel])
(defmethod steps :source-target [_ _] [upgrade-choose-source-target-panel])
(defmethod steps :checklist [_ _] [upgrade-checklist-panel])
(defmethod steps :upgrade [_ _] [upgrade-do-upgrade-panel])
(defmethod steps :verify [_ _] [upgrade-verify-panel])
(defmethod steps :default [_ _] [:div])

(defn upgrade-panel []
  (r/with-let [upgrade-notification (subscribe [:selected-notification])
               active-step (subscribe [:active-upgrade-step])]
    [sa/Segment
     {:basic true}
     [panel-header "升级"]
     [sa/Divider]
     [upgrade-steps]
     (steps @active-step @upgrade-notification)]))

(defn upgrade-page []
  [main-content-layout upgrade-panel])
