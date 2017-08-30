(ns db-devops.views
  (:require [reagent.core :as r]
            [re-frame.core :refer [dispatch subscribe]]
            [soda-ash.core :as sa]
            [db-devops.routes :refer [context-url href navigate! run-events]]
            [db-devops.pages.common :refer [loading-throbber error-modal]]
            [db-devops.pages.admin.users :refer [users-page]]
            [db-devops.pages.home :refer [home-page]]
            [db-devops.pages.issues :refer [edit-issue-page view-issue-page]]
            [db-devops.pages.upgrade :refer [choose-type-page checklist-page upgrade-page verify-page]]
            [db-devops.pages.checklist :refer [checklist-management-page]]
            [db-devops.pages.checklist-edit :refer [checklist-edit-page]]
            [db-devops.pages.auth :refer [login-page logout]]))

(defn upgrade-notifications []
  (r/with-let [upgrade-notifications (subscribe [:notifications])]
    [sa/MenuItem
     [sa/Label {:size "tiny" :color "red"} (count @upgrade-notifications)]
     [sa/Dropdown
      {:text "通知"
       :icon "announcement"}
      [sa/DropdownMenu
       [sa/DropdownItem
        {:on-click #(run-events [[:selected-notification ["db2test1" "db2_instance2"]] [:set-active-upgrade-step :choose-type] [:set-active-page :upgrade]])} "通知一 机器qqq上的数据库xxx需要升级"]
       [sa/DropdownItem
        {:on-click #(run-events [[:selected-notification ["localhost" "db2_instance1"]] [:set-active-upgrade-step :choose-type] [:set-active-page :upgrade]])} "通知二 机器kkk上的数据库yyy需要升级"]]]]))

(defn navbar [{:keys [admin screenname]}]
  [sa/Menu
   {:fixed "top"
    :borderless true
    :fluid true
    :inverted true}
   [sa/MenuItem
    [sa/Image {:src "/image/cmb_logo1.png" :size "small" :href (context-url "/")}]]
   [sa/MenuItem
    [sa/Header
     {:size "large" :inverted true} "数据库升级系统"]]
   [sa/MenuMenu
    {:position "right"}
    [sa/MenuItem
     {:on-click #(dispatch [:set-active-page :home])} "主页"]
    [sa/MenuItem
     {:on-click #(dispatch [:create-db])} "创建"]
    [sa/MenuItem
     {:on-click #(run-events [[:set-active-page :upgrade] [:set-active-upgrade-step :choose-type]])} "升级"]
    [sa/MenuItem
     {:on-click #(dispatch [:set-active-page :rollback])} "回退"]
    ;[upgrade-notifications]
    (when admin
      [sa/MenuItem
       [sa/Dropdown
        {:text "系统管理"}
        [sa/DropdownMenu
         [sa/DropdownItem
          {:on-click #(dispatch [:set-active-page :users])} "用户管理"]
         [sa/DropdownItem
          {:on-click #(run-events [[:load-checklist-management :checklist] [:set-active-page :checklist-management]])} "检查项管理"]
         [sa/DropdownItem
          {:on-click #(run-events [[:load-checklist-management :verify] [:set-active-page :checklist-management]])} "校验项管理"]]]])
    [sa/MenuItem
     [sa/Dropdown
      {:text screenname}
      [sa/DropdownMenu
       [sa/DropdownItem
        {:on-click identity} "修改密码"]
       [sa/DropdownItem
        {:on-click logout} "退出"]]]]]])

(defn footbar []
  [sa/Menu
   {:fixed "bottom"
    :borderless true
    :fluid true
    :size "tiny"
    :inverted true}
   [sa/MenuItem
    [sa/Container {:size "small" :textAlign "center"} "招商银行，2017"]]
   ])

(defmulti pages (fn [page _] page))
(defmethod pages :home [_ _] [home-page])
(defmethod pages :login [_ _] [login-page])
(defmethod pages :users [_ user]
  (if (:admin user)
    [users-page]
    (navigate! "/")))
(defmethod pages :edit-issue [_ _]
  (.scrollTo js/window 0 0)
  [edit-issue-page])
(defmethod pages :view-issue [_ _]
  (.scrollTo js/window 0 0)
  [upgrade-page])
(defmethod pages :choose-type [_ _]
  (.scrollTo js/window 0 0)
  [choose-type-page])
(defmethod pages :checklist [_ _]
  (.scrollTo js/window 0 0)
  [checklist-page])
(defmethod pages :checklist-management [_ _]
  ;(.scrollTo js/window 0 0)
  [checklist-management-page])
(defmethod pages :edit-checklist [_ _]
  [checklist-edit-page])
;(defmethod pages :verification-management [_ _]
;  (.scrollTo js/window 0 0)
;  [verification-management-page])
(defmethod pages :upgrade [_ _]
  ;(.scrollTo js/window 0 0)
  [upgrade-page])
(defmethod pages :verify [_ _]
  (.scrollTo js/window 0 0)
  [verify-page])
(defmethod pages :default [_ _] [:div])

(defn main-page []
  (r/with-let [active-page (subscribe [:active-page])
               user        (subscribe [:user])]
    (if @user
      [:div
       [navbar @user]
       [loading-throbber]
       [error-modal]
       (pages @active-page @user)
       [footbar]]
      (pages :login nil))))
