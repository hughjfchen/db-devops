(ns db-devops.pages.common
  (:require [reagent.core :as r]
            [re-frame.core :refer [dispatch subscribe]]
            [soda-ash.core :as sa]))

(defn loading-throbber
  []
  (let [loading? (subscribe [:loading?])]
    [sa/Segment
     [sa/Dimmer {:active @loading?}
      [sa/Loader "操作进行中。。。"]]]))

(defn error-modal []
  (when-let [error @(subscribe [:error])]
    [sa/Modal {:show (boolean error)}
     [sa/ModalHeader "出现错误"]
     [sa/ModalContent
      [:p error]]
     [sa/ModalActions
      [sa/Button
       {:on-click #(dispatch [:set-error] nil)}
       "确认"]]]))

(defn validation-modal [errors]
  [sa/Modal {:show (boolean @errors)}
   [sa/ModalHeader "缺少必填字段"]
   [sa/ModalContent
    [:ul
     (for [[_ error] @errors]
       ^{:key error}
       [:li error])]]
   [sa/ModalActions
    [sa/Button
     {:on-click #(reset! errors nil)}
     "关闭"]]])

(defn confirm-modal [title confirm-open? action action-label]
  [sa/Modal {:show @confirm-open?}
   [sa/ModalHeader title]
   [sa/ModalActions
    [sa/ButtonGroup
     [sa/Button
      {:on-click #(reset! confirm-open? false)}
      "取消"]
     [sa/Button
      {:on-click #(do
                   (reset! confirm-open? false)
                   (action))}
      action-label]]]])

(defn main-content-layout [main-panel]
  [sa/Grid
   [sa/GridRow] ; This is for top navbar
   [sa/GridRow
    [sa/GridColumn {:width 1}]
    [sa/GridColumn {:width 14}
     [main-panel]]
    [sa/GridColumn {:width 1}]]
   [sa/GridRow] ; This is for bottom footbar
   ])

(defn panel-header [header]
  [sa/Header
   {:size "huge"} header])

(defn ui-input-field [label value-atom value-path validate-fn validate-atom on-change-fn]
  [sa/FormField
   (when-not (clojure.string/blank? label) [sa/Label label])
   [:input {:value (get-in @value-atom value-path)
            :on-blur #(swap! validate-atom assoc value-path
                             (as-> @value-atom $
                               (validate-fn $)
                               (first $)
                               (get-in $ value-path)
                               (not-empty $)))
            :on-change on-change-fn}]
   (if (get @validate-atom value-path)
     [sa/Label {:color "red" :pointing true} (get @validate-atom value-path)])])
