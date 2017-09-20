(ns db-devops.validation
  (:require [bouncer.core :as b]
            [bouncer.validators :as v]))

(defn format-validation-errors [errors]
  (->> errors
       first
       (map (fn [[k [v]]] [k v]))
       (into {})
       not-empty))

(defn validate-source-target [source-target]
  (b/validate
   source-target
   [:source :machine]   [[v/required :message "必填"]]
   [:source :ip] [[v/required :message "必填"] [v/matches #"^([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])$" :message "必须符合IP地址格式"]]
   [:source :port] [[v/required :message "必填"] [v/positive :message "必须正数"]]
   [:source :instance] [[v/required :message "必填"]]
   [:source :db] [[v/required :message "必填"]]
   [:target :machine] [[v/required :message "必填"]]
   [:target :ip] [[v/required :message "必填"] [v/matches #"^([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])$" :message "必须符合ip地址格式"]]
   [:target :port] [[v/required :message "必填"] [v/positive :message "必须正数"]]
   [:target :instance] [[v/required :message "必填"]]
   [:target :db] [[v/required :message "必填"]]))

(defn validate-db-info [db-info]
  (b/validate
   db-info
   [:inputParams :HOSTNAME]   [[v/required :message "必填"]]
   [:inputParams :USERINFO] [[v/required :message "必填"]]
   [:inputParams :NODENUM] [[v/required :message "必填"] [v/positive :message "必须正数"]]
   [:inputParams :DBNAME] [[v/required :message "必填"]]
   [:inputParams :DB2PATH] [[v/required :message "必填"]]
   [:inputParams :DBDATA] [[v/required :message "必填"] [v/positive :message "必须正数"]]
   [:inputParams :CODEPAGE] [[v/required :message "必填"] [v/positive :message "必须正数"]]
   [:inputParams :DB2VER] [[v/required :message "必填"] [v/matches #"V\d?.\d?.\d?" :message "必须符合格式：Vxx.xx.xx，其中x为数字"]]
   [:inputParams :INITDB2PATH] [[v/required :message "必填"]]))

(defn validate-tb-info [tb-info]
  (b/validate
   tb-info
   [:source :machine]   [[v/required :message "必填"]]
   [:source :ip] [[v/required :message "必填"] [v/matches #"^([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])$" :message "必须符合IP地址格式"]]
   [:source :port] [[v/required :message "必填"] [v/positive :message "必须正数"]]
   [:source :instance] [[v/required :message "必填"]]
   [:source :db] [[v/required :message "必填"]]
   [:target :machine] [[v/required :message "必填"]]
   [:target :ip] [[v/required :message "必填"] [v/matches #"^([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])$" :message "必须符合ip地址格式"]]
   [:target :port] [[v/required :message "必填"] [v/positive :message "必须正数"]]
   [:target :instance] [[v/required :message "必填"]]
   [:target :db] [[v/required :message "必填"]]))

(defn validate-task-info [task-info]
  (b/validate
   task-info
   [:POSTTASKNAME]   [[v/required :message "必填"]]))

(defn validate-current-alias-record [alias-records]
  (b/validate
   alias-records
   [:SRCHOSTNAME]   [[v/required :message "必填"]]
   [:SRCHOSTIP] [[v/required :message "必填"] [v/matches #"^([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])$" :message "必须符合IP地址格式"]]
   [:SRCPORT] [[v/required :message "必填"] [v/positive :message "必须正数"]]
   [:SRCINSTANCENAME] [[v/required :message "必填"]]
   [:SRCDBNAME] [[v/required :message "必填"]]
   [:TGHOSTNAME] [[v/required :message "必填"]]
   [:TGHOSTIP] [[v/required :message "必填"] [v/matches #"^([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])\.([01]?\d\d?|2[0-4]\d|25[0-5])$" :message "必须符合ip地址格式"]]
   [:TGPORT] [[v/required :message "必填"] [v/positive :message "必须正数"]]
   [:TGINSTANCENAME] [[v/required :message "必填"]]
   [:TGDBNAME] [[v/required :message "必填"]]
   [:SCHEMANAME] [[v/required :message "必填"]]
   [:SRCFILEPATH] [[v/required :message "必填"]]
   [:TGFILEPATH] [[v/required :message "必填"]]
   [:OVERFLOWLOGPATH] [[v/required :message "必填"]]))

(defn validate-issue [issue]
  (format-validation-errors
    (b/validate
      (fn [{:keys [path]}]
        ({[:title]   "Issue title is required"
          [:summary] "Issue summary is required"
          [:detail]  "Issue details are required"
          [:tags]    "Issue must have at least one tag"}
          path))
      issue
      :title v/required
      :summary v/required
      :detail v/required
      :tags [v/required [v/min-count 1]])))

(defn pass-matches? [pass-confirm pass]
  (= pass pass-confirm))

(defn validate-create-user [user]
  (format-validation-errors
    (b/validate
      (fn [{:keys [path]}]
        ({[:screenname]   "Screenname is required"
          [:pass]         "Password of 8+ characters is required"
          [:pass-confirm] "Password confirmation doesn't match"
          [:is-admin]     "You must specify whether the user is an admin"
          [:active]       "You must pecify whether the user is active"}
          path))
      user
      :pass [v/required [v/min-count 8]]
      :pass-confirm [[pass-matches? (:pass user)]]
      :screenname v/required
      :admin v/required
      :is-active v/required)))

(defn validate-update-user [user]
  (format-validation-errors
    (b/validate
      (fn [{:keys [path]}]
        ({[:screenname]   "Screenname is required"
          [:is-admin]     "You must specify whether the user is an admin"
          [:pass-confirm] "Password confirmation doesn't match"
          [:active]       "You must pecify whether the user is active"}
          path))
      user
      :screenname v/required
      :admin v/required
      :pass-confirm [[pass-matches? (:pass user)]]
      :is-active v/required)))
