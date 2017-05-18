(ns db-devops.pages.common
  (:require [reagent.core :as r]
            [re-frame.core :refer [dispatch subscribe]]
            [db-devops.bootstrap :as bs]))

(defn loading-throbber
  []
  (let [loading? (subscribe [:loading?])]
    (when @loading?
      [bs/Modal
       {:show true}
       [bs/Modal.Body
        [:div.spinner
         [:div.bounce1]
         [:div.bounce2]
         [:div.bounce3]]]])))

(defn error-modal []
  (when-let [error @(subscribe [:error])]
    [bs/Modal {:show (boolean error)}
     [bs/Modal.Header
      [bs/Modal.Title "出现错误"]]
     [bs/Modal.Body
      [:p error]]
     [bs/Modal.Footer
      [:button.btn.btn-sm.btn-danger
       {:on-click #(dispatch [:set-error] nil)}
       "确认"]]]))

(defn validation-modal [errors]
  [bs/Modal {:show (boolean @errors)}
   [bs/Modal.Header
    [bs/Modal.Title "缺少必填字段"]]
   [bs/Modal.Body
    [:ul
     (for [[_ error] @errors]
       ^{:key error}
       [:li error])]]
   [bs/Modal.Footer
    [:button.btn.btn-sm.btn-danger
     {:on-click #(reset! errors nil)}
     "关闭"]]])

(defn confirm-modal [title confirm-open? action action-label]
  [bs/Modal {:show @confirm-open?}
   [bs/Modal.Header
    [bs/Modal.Title title]]
   [bs/Modal.Footer
    [:div.btn-toolbar
     [:button.btn.btn-sm.btn-danger
      {:on-click #(reset! confirm-open? false)}
      "取消"]
     [:button.btn.btn-sm.btn-success
      {:on-click #(do
                   (reset! confirm-open? false)
                   (action))}
      action-label]]]])
