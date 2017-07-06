(ns db-devops.pages.admin.users
  (:require [soda-ash.core :as sa]
            [re-frame.core :refer [dispatch subscribe]]
            [db-devops.key-events :refer [on-enter]]
            [db-devops.pages.common :refer [validation-modal]]
            [db-devops.validation :as v]
            [reagent.core :as r]))

(defn user-search []
  (r/with-let [search    (r/atom nil)
               do-search #(when-let [value (not-empty @search)]
                           (dispatch [:admin/search-for-users value]))]
    [sa/FormGroup
     [sa/FormGroup
      [sa/FormField
       {:type        "text"
        :class       "input-sm"
        :placeholder "Type in a user name to see their details"
        :on-change   #(reset! search (-> % .-target .-value))
        :on-key-down #(on-enter % do-search)}]
      [sa/FormGroup
       [:button.btn.btn-sm.btn-default
        {:on-click do-search}
        "Search"]]]]))

(defn control-buttons [user close-editor]
  (r/with-let [errors  (r/atom nil)
               user-id (:user-id @user)]
    [:div.row>div.col-sm-12
     [validation-modal errors]
     [:div.pull-right
      [:div.btn-toolbar
       [:button.btn.btn-sm.btn-danger
        {:on-click close-editor}
        "Cancel"]
       [:button.btn.btn-sm.btn-success
        {:pull-right true
         :on-click   #(let [new-user? (nil? user-id)]
                       (when-not (reset! errors
                                         ((if new-user?
                                            v/validate-create-user
                                            v/validate-update-user)
                                           @user))
                         (dispatch
                           [(if new-user?
                              :admin/create-user-profile
                              :admin/update-user-profile)
                            @user])
                         (close-editor)))}
        "Save"]]]]))

(defn field-group [label cursor type placeholder]
  [sa/FormGroup
   [sa/FormField
    {:class "col-lg-2"}
    label]
   [:div.col-lg-10
    [sa/FormField
     {:type        type
      :value       (or @cursor "")
      :on-change   #(reset! cursor (-> % .-target .-value))
      :placeholder placeholder}]]])

(defn edit-user [title user-map close-editor]
  (r/with-let [user (-> user-map
                        (dissoc :last-login)
                        (update :pass identity)
                        (update :pass-confirm identity)
                        (update :admin boolean)
                        (update :is-active boolean)
                        r/atom)]
    [:div.form-horizontal
     [:legend title]
     [field-group
      "Screen Name"
      (r/cursor user [:screenname])
      :text "Enter screen name for the user"]
     [field-group
      "Password"
      (r/cursor user [:pass])
      :password
      (if (:last-login user-map)
        "Enter the password for the user (leave empty to keep the existing password)"
        "Enter the password for the user")]
     [field-group
      "Confirm password"
      (r/cursor user [:pass-confirm])
      :password "Confirm the password for the user"]
     [sa/FormGroup
      [:span.col-lg-2]
      [:div.col-lg-10
       [sa/FormCheckbox
        {:checked   (boolean (:admin @user))
         :on-change #(swap! user update :admin not)}
        "Admin"]
       [sa/FormCheckbox
        {:checked   (boolean (:is-active @user))
         :on-change #(swap! user update :is-active not)}
        "Active"]]]
     [control-buttons user close-editor]]))

(defn user-info [user-map]
  (r/with-let [expanded? (r/atom false)]
    [sa/FormGroup
     (if @expanded?
       [edit-user "Edit User" user-map #(reset! expanded? false)]
       [:div
        [:span (:screenname user-map)]
        [:button.btn.btn-xs.btn-primary.pull-right
         {:on-click #(swap! expanded? not)}
         "Edit"]])]))

(defn user-list []
  (let [users (subscribe [:admin/users])]
    (when-not (empty? @users)
      [sa/FormGroup
       (for [user @users]
         ^{:key (:user-id user)}
         [user-info user])])))

(defn users-page []
  (r/with-let [show-new-user-form? (r/atom false)]
    (if @show-new-user-form?
      [:div.row
       [:div.col-sm-12
        [edit-user "Add User" {} #(reset! show-new-user-form? false)]]]
      [:div
       [:div.row
        [:div.col-sm-10 [user-search]]
        [:div.col-sm-2
         [:button.btn.btn-sm.btn-success.pull-right
          {:on-click #(reset! show-new-user-form? true)}
          "Add new user"]]]
       [user-list]])))
