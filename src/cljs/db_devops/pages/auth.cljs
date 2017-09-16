(ns db-devops.pages.auth
  (:require [cuerdas.core :as string]
            [reagent.core :as r]
            [ajax.core :refer [POST]]
            [soda-ash.core :as sa]
            [re-frame.core :refer [dispatch subscribe]]))

(defn logged-in? []
  (boolean js/user))

(defn logout []
  (POST "/api/logout"
        {:handler (dispatch [:logout])}))

(defn login [params error on-close]
  (reset! error nil)
  (let [{:keys [userid pass]} @params]
    (if (or (clojure.string/blank? userid) (clojure.string/blank? pass))
      (reset! error "Username and password cannot be blank.")
      (POST "/api/login"
            {:params        {:userid userid :pass pass}
             :error-handler #(reset! error "Invalid username/password.")
             :handler       #(let [user (:user %)]
                              (on-close)
                              (dispatch [:login user])
                              (dispatch [:set-active-page :home]))}))))

(defn login-page []
  (r/with-let [user      (subscribe [:user])
               params    (r/atom nil)
               error     (r/atom nil)
               on-close  (fn []
                           (reset! params nil)
                           (reset! error nil))
               on-key-up (fn [e]
                           (if (= 13 (.-keyCode e))
                             (login params error on-close)))]
    (when-not @user
      [sa/Modal
       {:defaultOpen true
        :onClose on-close}
       [sa/ModalHeader "登录"]
       [sa/ModalContent
        (if @error
          [sa/Label @error])
        [sa/Form
         [sa/FormGroup
          [sa/FormField [sa/Label "用户名"]]
          [sa/FormField
           [:input.form-control
            {:type      "text"
             :value     (or (:userid @params) "")
             :on-change #(swap! params assoc :userid (-> % .-target .-value))
             :on-key-up on-key-up}]]]
         [sa/FormGroup
          [sa/FormField [sa/Label "密码"]]
          [sa/FormField
           [:input.form-control
            {:type      "password"
             :value     (or (:pass @params) "")
             :on-change #(swap! params assoc :pass (-> % .-target .-value))
             :on-key-up on-key-up}]]]]]
       [sa/ModalActions
        [sa/Button {:on-click #(login params error on-close)} "登录"]]])))
