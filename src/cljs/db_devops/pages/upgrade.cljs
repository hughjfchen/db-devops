(ns db-devops.pages.upgrade
  (:require [clojure.set :refer [difference rename-keys]]
            [reagent.core :as r]
            [re-frame.core :refer [dispatch subscribe]]
            [soda-ash.core :as sa]
            [db-devops.routes :refer [context-url href navigate! run-events]]
            [db-devops.datetime :as dt]
            [db-devops.pages.common :refer [validation-modal confirm-modal main-content-layout panel-header]]
            [db-devops.pages.phase-one-panel :refer [phase-one-panel]]
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
    [sa/Segment
     {:basic true}
     [sa/StepGroup
      {:ordered true
       :size "tiny"
       :fluid true}
      [sa/Step
       {:title "选择升级方案"
        :description "选择合适的升级方案"
        :completed false
        :active (boolean (= @current-step :choose-type))
                                        ;:on-click #(dispatch [:set-active-upgrade-step :choose-type])
        }]
      [sa/Step
       {:title "输入参数"
        :description "输入升级方案需要用到的参数"
        :completed false
        :active (boolean (= @current-step :source-target))
                                        ;:on-click #(dispatch [:set-active-upgrade-step :source-target])
        }]
      [sa/Step
       {:title "检查"
        :description "升级前执行的检查项"
        :completed false
        :active (boolean (= @current-step :checklist))
                                        ;:on-click #(dispatch [:set-active-upgrade-step :checklist])
        }]
      [sa/Step
       {:title "升级"
        :description "执行升级任务"
        :completed false
        :active (boolean (= @current-step :upgrade))
                                        ;:on-click #(dispatch [:set-active-upgrade-step :upgrade])
        }]
      [sa/Step
       {:title "校验"
        :description "校验以确保升级成功"
        :completed false
        :active (boolean (= @current-step :verify))
                                        ;:on-click #(dispatch [:set-active-upgrade-step :verify])
        }]]]))

(defn upgrade-choose-type-panel []
  (r/with-let [choice (subscribe [:chosen-type])]
    [sa/Segment
     {:basic true}
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
       {:on-click #(run-events [[:reset-source-target] [:set-active-upgrade-step :source-target]])} "下一步"]]]))

(defn input-field-ui [label value-atom value-path validate-fn validate-atom on-change-fn]
  [sa/FormField
   [sa/Label (str label " *")]
   [:input {:placeholder label
            :value (get-in @value-atom value-path)
            :on-blur #(swap! validate-atom assoc value-path
                             (as-> @value-atom $
                               (validate-fn $)
                               (first $)
                               (get-in $ value-path)
                               (not-empty $)))
            :on-change on-change-fn}]
   (if (get @validate-atom value-path)
     [sa/Label {:color "red" :pointing true} (get @validate-atom value-path)])])

(defn upgrade-choose-source-target-panel []
  (r/with-let [choice (subscribe [:chosen-type])
               source-target (subscribe [:source-target])
               v-errors (r/atom nil)]
    [sa/Segment
     {:basic true}
     [sa/Form
      (if (:cdc @choice)
        [sa/Segment
         [sa/Grid
          [sa/GridRow
           [sa/Header "源数据库信息"]]
          [sa/GridRow {:columns 3}
           [sa/GridColumn
            [input-field-ui "机器名" source-target [:source :machine] v/validate-source-target v-errors #(dispatch [:set-source-target [:source-target :source] :machine (-> % .-target .-value)])]]
           [sa/GridColumn
            [input-field-ui "IP" source-target [:source :ip] v/validate-source-target v-errors #(dispatch [:set-source-target [:source-target :source] :ip (-> % .-target .-value)])]]
           [sa/GridColumn
            [input-field-ui "端口" source-target [:source :port] v/validate-source-target v-errors #(dispatch [:set-source-target [:source-target :source] :port (-> % .-target .-value)])]]]
          [sa/GridRow {:columns 3}
           [sa/GridColumn
            [input-field-ui "实例名" source-target [:source :instance] v/validate-source-target v-errors #(dispatch [:set-source-target [:source-target :source] :instance (-> % .-target .-value)])]]
           [sa/GridColumn
            [input-field-ui "数据库名" source-target [:source :db] v/validate-source-target v-errors #(dispatch [:set-source-target [:source-target :source] :db (-> % .-target .-value)])]]
           [sa/GridColumn
            [sa/FormField
             [sa/Label "数据库版本"]
             [sa/Dropdown
              {:selection true
               :placeholder "请选择数据库版本"
               :default-value (get-in @source-target [:source :version])
               :on-change #(dispatch [:set-source-target [:source-target :source] :version (-> %2 .-value)])
               :options [{:key "9.5" :text "9.5" :value "9.5"} {:key "9.7" :text "9.7" :value "9.7"} {:key "10.5" :text "10.5" :value "10.5"}]}]]]]]])
      [sa/Segment
       [sa/Grid
        [sa/GridRow
         [sa/Header "目标数据库信息"]]
        [sa/GridRow {:columns 3}
         [sa/GridColumn
          [input-field-ui "机器名" source-target [:target :machine] v/validate-source-target v-errors #(dispatch [:set-source-target [:source-target :target] :machine (-> % .-target .-value)])]]
         [sa/GridColumn
          [input-field-ui "IP" source-target [:target :ip] v/validate-source-target v-errors #(dispatch [:set-source-target [:source-target :target] :ip (-> % .-target .-value)])]]
         [sa/GridColumn
          [input-field-ui "端口" source-target [:target :port] v/validate-source-target v-errors #(dispatch [:set-source-target [:source-target :target] :port (-> % .-target .-value)])]]]
        [sa/GridRow {:columns 3}
         [sa/GridColumn
          [input-field-ui "实例名" source-target [:target :instance] v/validate-source-target v-errors #(dispatch [:set-source-target [:source-target :target] :instance (-> % .-target .-value)])]]
         [sa/GridColumn
          [input-field-ui "数据库名" source-target [:target :db] v/validate-source-target v-errors #(dispatch [:set-source-target [:source-target :target] :db (-> % .-target .-value)])]]
         [sa/GridColumn
          [sa/FormField
           [sa/Label "数据库版本 *"]
           [sa/Dropdown
            {:selection true
             :placeholder "请选择数据库版本"
             :default-value (get-in @source-target [:target :version])
             :on-change #(dispatch [:set-source-target [:source-target :target] :version (-> %2 .-value)])
             :options [{:key "9.5" :text "9.5" :value "9.5"} {:key "9.7" :text "9.7" :value "97"} {:key "10.5" :text "10.5" :value "10.5"}]}]]]]]]]
     [sa/Divider]
     [sa/ButtonGroup
      {:floated "left"}
      [sa/Button
       {:on-click #(dispatch [:set-active-upgrade-step :choose-type])} "上一步"]]
     [sa/ButtonGroup
      {:floated "right"}
      [sa/Button
       {:disabled (or (nil? @v-errors) (not-every? nil? (vals @v-errors)))
        :on-click #(do (reset! v-errors nil) (run-events [[:reset-failed-checklist] [:load-checklist] [:set-active-upgrade-step :checklist]]))} "下一步"]]]))

(defn ui-checklist-result-table [sub-v]
  (r/with-let [to-display (subscribe sub-v)]
    [sa/Table {:celled true :fixed true}
     [sa/TableHeader
      [sa/TableRow
       [sa/TableHeaderCell {:row-span "2"} "检查项"]
       [sa/TableHeaderCell {:row-span "2"} "规则"]
       [sa/TableHeaderCell {:col-span "2"} "当前值"]
       [sa/TableHeaderCell {:row-span "2"} "结果"]
       [sa/TableHeaderCell {:row-span "2"} "整改建议"]]
      [sa/TableRow
       [sa/TableHeaderCell "源机器"]
       [sa/TableHeaderCell "目标机器"]]]
     [sa/TableBody
      (for [cl @to-display]
        ^{:key (:id cl)}
        [sa/TableRow
         [sa/TableCell (:title cl)]
         [sa/TableCell (get-in cl [:verify :rule-description])]
         [sa/TableCell (str (get-in cl [:execute :output :result :source]))]
         [sa/TableCell (str (get-in cl [:execute :output :result :target]))]
         [sa/TableCell {:positive (get-in cl [:verify :result])
                        :negative (not (get-in cl [:verify :result]))}
          (if (get-in cl [:verify :result]) "通过" "不通过")]
         [sa/TableCell (:comply-suggestion cl)]])]]))

(defn ui-failed-result []
  [sa/Modal
   {:trigger (r/as-component [sa/Button "显示未通过结果"])}
   [ui-checklist-result-table [:failed-checklist]]])

(defn checklist-leaf [step leaf-click-fn current-path {:keys [title path]}]
  (let [result (subscribe [:checklist-result])]
    ^{:key (->> path (map name) (apply str) (str (name step)))}[sa/MenuItem {:active (= path current-path) :color "blue" :on-click (partial leaf-click-fn path)} (if (= current-path path) [sa/Label {:circular true} [sa/Icon {:name (if (get-in @result [:result :passed]) "check" "x") :color (if (get-in  @result [:result :passed]) "blue" "red")}] (if-not (get-in  @result [:result :passed]) (get-in @result [:result :number-of-failure]))] [sa/Label]) [sa/Icon {:name "triangle right"}] title]))

(defn checklist-branch [step leaf-click-fn current-path {:keys [title path sub-tree]}]
  (let [subtree (doall (map (partial checklist-leaf step leaf-click-fn current-path) sub-tree))]
    {:title title :content (r/as-component [sa/Grid [sa/GridColumn {:width 2}] [sa/GridColumn {:width 14} [sa/Menu {:vertical true :secondary true :pointing true :compact true :size "tiny"} subtree]]])}))

(defn build-checklist-tree [step leaf-click-fn current-path tree-data]
  (map (partial checklist-branch step leaf-click-fn current-path) tree-data))

(defn ui-checklist-tree [step leaf-click-fn tree-sub-vector current-path-sub-vector]
  (r/with-let [checklist-tree (subscribe tree-sub-vector)
               current-path (subscribe current-path-sub-vector)]
    (let [my-tree (build-checklist-tree step leaf-click-fn @current-path @checklist-tree)]
      [sa/Accordion
       {:panels my-tree}])))

(defn upgrade-checklist-panel []
  (r/with-let [path (subscribe [:active-checklist-path])]
    [sa/Segment
     {:basic true}
     [sa/Grid
      [sa/GridColumn {:width 4}
       [ui-checklist-tree :checklist (fn [apath] (run-events [[:set-active-checklist-path apath] [:load-checklist]])) [:checklist-tree] [:active-checklist-path]]]
      [sa/GridColumn {:width 12}
       [:span "当前检查路径："]
       [sa/Breadcrumb
        [sa/BreadcrumbSection {:active true} (name (first @path))]
        [sa/BreadcrumbDivider]
        [sa/BreadcrumbSection {:active true} (name (second @path))]]
       [ui-checklist-result-table [:checklist]]]]
     [sa/Divider]
     [sa/ButtonGroup
      {:floated "left"}
      [sa/Button
       {:on-click #(run-events [[:reset-source-target] [:set-active-upgrade-step :source-target]])} "上一步"]]
     [sa/ButtonGroup
      {:floated "right"}
      [ui-failed-result]
      [sa/ButtonOr]
      [sa/Button
       {:on-click #(run-events [[:reset-failed-checklist] [:set-active-upgrade-step :upgrade] [:set-active-phase-one-step :CreateTSK]])} "下一步"]]]))

(defn upgrade-verify-panel []
  (r/with-let [path (subscribe [:active-verify-path])]
    [sa/Segment
     {:basic true}
     [sa/Grid
      [sa/GridColumn {:width 4}
       [ui-checklist-tree :verification (fn [apath] (run-events [[:set-active-verify-path apath] [:load-verification]])) [:verification-tree] [:active-verify-path]]]
      [sa/GridColumn {:width 12}
       [:span "当前检查路径："]
       [sa/Breadcrumb
        [sa/BreadcrumbSection {:active true} (name (first @path))]
        [sa/BreadcrumbDivider]
        [sa/BreadcrumbSection {:active true} (name (second @path))]]
       [ui-checklist-result-table [:verification]]]]
     [sa/Divider]
     [sa/ButtonGroup
      {:floated "left"}
      [sa/Button
       {:on-click #(run-events [[:reset-failed-checklist] [:set-active-upgrade-step :upgrade]])} "上一步"]]
     [sa/ButtonGroup
      {:floated "right"}
      [ui-failed-result]
      [sa/ButtonOr]
      [sa/Button
       {:on-click #(run-events [[:reset-failed-checklist] [:set-active-page :home]])} "完成"]]]))

(defmulti steps (fn [step _] step))
(defmethod steps :choose-type [_ _] [upgrade-choose-type-panel])
(defmethod steps :source-target [_ _] [upgrade-choose-source-target-panel])
(defmethod steps :checklist [_ _] [upgrade-checklist-panel])
(defmethod steps :upgrade [_ _] [phase-one-panel])
(defmethod steps :verify [_ _] [upgrade-verify-panel])
(defmethod steps :default [_ _] [:div])

(defn upgrade-panel []
  (r/with-let [upgrade-notification (subscribe [:selected-notification])
               type (subscribe [:chosen-type])
               type-title-map {:cdc "CDC升级方案" :local "本地升级方案" :other "其它升级方案"}
               active-step (subscribe [:active-upgrade-step])]
    [sa/Segment
     {:basic true}
     [panel-header (str "升级" " - " (get type-title-map (some #(if (val %) (key %)) @type)))]
     [sa/Divider]
     [upgrade-steps]
     (steps @active-step @upgrade-notification)]))

(defn upgrade-page []
  [main-content-layout upgrade-panel])
