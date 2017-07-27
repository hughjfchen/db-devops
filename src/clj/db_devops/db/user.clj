(ns db-devops.db.user
  (:require [schema.core :as s]
            [mount.core :refer [defstate]]))

(def ALL-USER [{:user-id 1 :screenname "admin" :pass "bcrypt+sha512$e090e90f968a6635ef8a5dc77b770256$12$45b4a03ffc94a5f38d167e9e889490dc443329f3ea5705ea" :admin true :last-login #inst "2017-05-16T17:26:27.911-00:00" :is-active true :member-of [] :account-name "admin"}
               {:user-id 2 :screenname "hugh" :pass "bcrypt+sha512$be00fffebc3b946339335d04c4dd9f9a$12$dfc2831382859925325bb95e62a83567640817163adcb3ee" :admin true :is-active true :last-login #inst "2017-05-16T17:26:27.911-00:00" :member-of [] :account-name "hugh"}])


;; default user db

(defstate default-user :start identity)
