(ns db-devops.pages.checklist-edit
  (:require [clojure.set :refer [difference rename-keys]]
            [reagent.core :as r]
            [re-frame.core :refer [dispatch subscribe]]
            [soda-ash.core :as sa]
            [db-devops.routes :refer [context-url href navigate! run-events]]
            [db-devops.datetime :as dt]
            [db-devops.pages.common :refer [validation-modal confirm-modal main-content-layout panel-header]]
            [db-devops.routes :refer [href navigate!]]
            [db-devops.validation :as v]
            [cuerdas.core :as clstr]))

(defn table-within-form [data-ratom]
  (when-let [inputs (get-in @data-ratom [:execute :input])]
    (r/with-let [new-command-line (r/atom {:name "" :command-line ""})]
      [sa/Table {:celled true}
       [sa/TableHeader
        [sa/TableRow
         [sa/TableHeaderCell
          {:col-span 3}
          [sa/Modal
           {:trigger (r/as-component [sa/Button "增加一个命令行参数"])}
           [sa/ModalHeader "增加一个命令行参数"]
           [sa/ModalContent
            [sa/FormField
             [sa/Label "输入参数名"]
             [:input {:value (:name @new-command-line)
                        :on-change #(swap! new-command-line assoc :name (-> % .-target .-value keyword))}]]
            [sa/FormField
             [sa/Label "调用脚本的命令行参数"]
             [:input {:value (:command-line @new-command-line)
                        :on-change #(swap! new-command-line assoc :command-line (-> % .-target .-value))}]]]
           [sa/ModalActions
            [sa/Button {:on-click #(swap! data-ratom assoc-in [:execute :input] (conj (get-in @data-ratom [:execute :input]) @new-command-line))} "增加"]]]]]]
       [sa/TableHeader
        [sa/TableRow
         [sa/TableHeaderCell "输入参数名"]
         [sa/TableHeaderCell "调用脚本时的命令行参数"]
         [sa/TableHeaderCell "操作"]]]
       [sa/TableBody
        (for [input inputs]
          ^{:key (:name input)} [sa/TableRow
                                 [sa/TableCell (:name input)]
                                 [sa/TableCell (:command-line input)]
                                 [sa/TableCell
                                  [sa/Button {:on-click #(swap! data-ratom assoc-in [:execute :input] (remove (fn [x] (= (:name input) (:name x))) (get-in @data-ratom [:execute :input])))} "删除"]]])]])))

(defn- convert-fn-extra-paras [xs]
  (into [] (map (fn [y] (if (clstr/numeric? y)
                          (clstr/parse-number y)
                          y)) (clstr/split xs ","))))

(defn checklist-edit-form [checklist]
  (r/with-let [step (name (:step checklist))
               edit-checklist (r/atom (-> checklist
                                          (dissoc :step)
                                          (dissoc :action)))
               verify-type-list (r/atom [:gt :lt :eq :ge :le :tf :compare-eq :compare-ge :compare-gt :compare-le :compare-lt :multi-part-ge :multi-part-gt :multi-part-le :multi-part-lt :compare-multi-part-ge :compare-multi-part-gt :compare-multi-part-le :compare-multi-part-lt :custom])]
    [sa/Segment
     {:basic true}
     [sa/Form
      [sa/Segment
       [sa/Grid
        [sa/GridRow
         [sa/Header "检查项信息"]]
        [sa/GridRow
         [sa/GridColumn {:width 5}
          [sa/FormField
           [sa/Label "标题"]
           [:input {:value (:title @edit-checklist)
                      :on-change #(swap! edit-checklist assoc :title (-> % .-target .-value))}]]]
         [sa/GridColumn {:width 6}
          [sa/FormField
           [sa/Label "描述"]
           [:input {:value (:description @edit-checklist)
                      :on-change #(swap! edit-checklist assoc :description (-> % .-target .-value))}]]]
         [sa/GridColumn {:width 5}
          [sa/FormField
           [sa/Label "所属方案"]
           [sa/Dropdown {:multiple true
                         :selection true
                         :disabled true
                         :default-value (:type @edit-checklist)
                         :options (map (fn [x] {:key (name x) :text (name x) :value x}) (:type @edit-checklist))
                         :on-change #(swap! edit-checklist assoc :type (-> %2 .-value))}]]]]
        [sa/GridRow
         [sa/GridColumn {:width 4}
          [sa/FormField
           [sa/Label "一级类别ID"]
           [:input {:value (:first-cat @edit-checklist)
                      :on-change #(swap! edit-checklist assoc :first-cat (-> % .-target .-value keyword))}]]]
         [sa/GridColumn {:width 4}
          [sa/FormField
           [sa/Label "一级类别title"]
           [:input {:value (:first-cat-label @edit-checklist)
                      :on-change #(swap! edit-checklist assoc :first-cat-label (-> % .-target .-value))}]]]
         [sa/GridColumn {:width 4}
          [sa/FormField
           [sa/Label "二级类别ID"]
           [:input {:value (:second-cat @edit-checklist)
                      :on-change #(swap! edit-checklist assoc :second-cat (-> % .-target .-value keyword))}]]]
         [sa/GridColumn {:width 4}
          [sa/FormField
           [sa/Label "二级类别title"]
           [:input {:value (:second-cat-label @edit-checklist)
                      :on-change #(swap! edit-checklist assoc :second-cat-label (-> % .-target .-value))}]]]]
        [sa/GridRow
         [sa/GridColumn
          [sa/FormField
           [sa/Label "执行脚本名"]
           [:input {:value (get-in  @edit-checklist [:execute :script-name])
                      :on-change #(swap! edit-checklist assoc-in [:execute :script-name] (-> % .-target .-value))}]]]]
        [sa/GridRow
         [sa/GridColumn {:width 16}
          [table-within-form edit-checklist]]]
        [sa/GridRow
         [sa/GridColumn
          [sa/FormField
           [sa/Label "脚本返回结果ID"]
           [:input {:value (get-in  @edit-checklist [:execute :output :field-path])
                      :on-change #(swap! edit-checklist assoc-in [:execute :output :field-path] (map keyword (-> % .-target .-value (clojure.string/split #" "))))}]]]]
        [sa/GridRow
         [sa/GridColumn {:width 4}
          [sa/FormField
           [sa/Label "校验类型"]
           [sa/Dropdown {:selection true
                         :default-value (get-in @edit-checklist [:verify :type])
                         :options (map (fn [x] {:key (name x) :text (name x) :value x}) @verify-type-list)
                         :on-change #(swap! edit-checklist assoc-in [:verify :type] (-> %2 .-value keyword))}]]]
         [sa/GridColumn {:width 4}
          [sa/FormField
           [sa/Label "校验函数额外参数"]
           [:input {:value (clstr/join "," (get-in  @edit-checklist [:verify :rule-fn-extra-paras]))
                    :on-change #(swap! edit-checklist assoc-in [:verify :rule-fn-extra-paras] (-> % .-target .-value convert-fn-extra-paras))}]]]
         [sa/GridColumn {:width 4}
          [sa/FormField
           [sa/Label "校验定制函数"]
           [:input {:value (get-in  @edit-checklist [:verify :rule-fn])
                      :on-change #(swap! edit-checklist assoc-in [:verify :rule-fn] (-> % .-target .-value))}]]]
         [sa/GridColumn {:width 4}
          [sa/FormField
           [sa/Label "校验规则描述"]
           [:input {:value (get-in  @edit-checklist [:verify :rule-description])
                      :on-change #(swap! edit-checklist assoc-in [:verify :rule-description] (-> % .-target .-value))}]]]]
        [sa/GridRow
         [sa/GridColumn
          [sa/FormField
           [sa/Label "合规建议"]
           [:input {:value (:comply-suggestion @edit-checklist)
                      :on-change #(swap! edit-checklist assoc :comply-suggestion (-> % .-target .-value))}]]]]]]]
     [sa/Divider]
     [sa/ButtonGroup
      {:floated "left"}
      [sa/Button
       {:on-click #(dispatch [:set-active-page :checklist-management])} "取消"]]
     [sa/ButtonGroup
      {:floated "right"}
      [sa/Button
       {:on-click #(if (:id checklist)
                     (run-events [[:save-checklist step  @edit-checklist] [:set-active-page :checklist-management]])
                     (run-events [[:create-checklist step  @edit-checklist] [:set-active-page :checklist-management]]))} "保存"]]]))

(defn checklist-edit-panel []
  (r/with-let [checklist (subscribe [:edit-checklist])]
    [sa/Segment
     {:basic true}
     [panel-header "编辑检查项"]
     [sa/Divider]
     [checklist-edit-form @checklist]]))

(defn checklist-edit-page []
  [main-content-layout checklist-edit-panel])
