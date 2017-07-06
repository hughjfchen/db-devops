(ns db-devops.pages.common
  (:require [reagent.core :as r]
            [re-frame.core :refer [dispatch subscribe]]
            [soda-ash.core :as sa]))

(defn loading-throbber
  []
  (let [loading? (subscribe [:loading?])]
    (when @loading?
      [sa/Modal
       {:show true}
       [sa/ModalContent
        [:div.spinner
         [:div.bounce1]
         [:div.bounce2]
         [:div.bounce3]]]])))

(defn error-modal []
  (when-let [error @(subscribe [:error])]
    [sa/Modal {:show (boolean error)}
     [sa/ModalHeader "出现错误"]
     [sa/ModalContent
      [:p error]]
     [sa/ModalActions
      [:button.btn.btn-sm.btn-danger
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
    [:button.btn.btn-sm.btn-danger
     {:on-click #(reset! errors nil)}
     "关闭"]]])

(defn confirm-modal [title confirm-open? action action-label]
  [sa/Modal {:show @confirm-open?}
   [sa/ModalHeader title]
   [sa/ModalActions
    [:div.btn-toolbar
     [:button.btn.btn-sm.btn-danger
      {:on-click #(reset! confirm-open? false)}
      "取消"]
     [:button.btn.btn-sm.btn-success
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
