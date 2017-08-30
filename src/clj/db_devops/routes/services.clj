(ns db-devops.routes.services
  (:require [ring.util.http-response :refer :all]
            [compojure.api.sweet :refer :all]
            [compojure.api.upload :refer [TempFileUpload wrap-multipart-params]]
            [schema.core :as s]
            [compojure.api.meta :refer [restructure-param]]
            [db-devops.routes.services.checklist :as ck]
            [db-devops.routes.services.upgrade-api-client :as uac]
            [db-devops.routes.services.auth :as auth]
            [buddy.auth.accessrules :refer [restrict]]
            [buddy.auth :refer [authenticated?]]))

(defn admin?
  [request]
  (:admin (:identity request)))

(defn access-error [_ _]
  (unauthorized {:error "unauthorized"}))

(defn wrap-restricted [handler rule]
  (restrict handler {:handler  rule
                     :on-error access-error}))

(defmethod restructure-param :auth-rules
  [_ rule acc]
  (update-in acc [:middleware] conj [wrap-restricted rule]))

(defmethod restructure-param :current-user
  [_ binding acc]
  (update-in acc [:letks] into [binding `(:identity ~'+compojure-api-request+)]))

(defapi service-routes
  {:swagger {:ui   "/swagger-ui"
             :spec "/swagger.json"
             :data {:info {:version     "1.0.0"
                           :title       "数据库升级系统 API"
                           :description "数据库升级系统后端 API"}}}}

  (POST "/api/login" req
    :return auth/LoginResponse
    :body-params [userid :- s/Str
                  pass :- s/Str]
    :summary "user login handler"
    (auth/login userid pass req))

  (context "/admin" []
    :auth-rules admin?
    :tags ["admin"]

    (GET "/users/:screenname" []
      :path-params [screenname :- s/Str]
      :return auth/SearchResponse
      :summary "returns users with matching screennames"
      (auth/find-users screenname))

    (POST "/user" []
      :body-params [screenname :- s/Str
                    pass :- s/Str
                    pass-confirm :- s/Str
                    admin :- s/Bool
                    is-active :- s/Bool]
      (auth/register! {:screenname   screenname
                       :pass         pass
                       :pass-confirm pass-confirm
                       :admin        admin
                       :is-active    is-active}))

    (PUT "/user" []
      :body-params [user-id :- s/Int
                    screenname :- s/Str
                    pass :- (s/maybe s/Str)
                    pass-confirm :- (s/maybe s/Str)
                    admin :- s/Bool
                    is-active :- s/Bool]
      :return auth/LoginResponse
      (auth/update-user! {:user-id      user-id
                          :screenname   screenname
                          :pass         pass
                          :pass-confirm pass-confirm
                          :admin        admin
                          :is-active    is-active}))

    ;;checklist
    (GET "/checklist/:step" []
         :path-params [step :- s/Str]
         :return [ck/Checklist]
         :summary "list all checklist"
         (ck/all-checklist (keyword step)))

    (DELETE "/checklist/:step/:id" []
      :path-params [step :- s/Str id :- s/Int]
      :return s/Int
      :summary "delete the checklist with the given id"
      (ck/delete-checklist! (keyword step) {:id id}))

    (POST "/search-checklist/:step" []
          :path-params [step :- s/Str]
          :body-params [query :- s/Str
                        limit :- s/Int
                        offset :- s/Int]
          :return [ck/Checklist]
          :summary "search for checklist matching the query"
          (ck/search-checklist (keyword step) {:query  query
                                               :limit  limit
                                               :offset offset}))

    (GET "/checklist/:step/:id" []
      :path-params [step :- s/Str id :- s/Int]
      :return ck/Checklist
      :summary "returns the checklist with the given id"
      (ck/checklist (keyword step) {:id id}))

    (POST "/checklist/:step" []
          :current-user user
          :path-params [step :- s/Str]
          :body-params [cl :- (dissoc ck/Checklist :id)]
          :return ck/Checklist
          :summary "adds a new checklist"
          (ck/add-checklist! (keyword step) cl))

    (PUT "/checklist/:step" []
         :current-user user
         :path-params [step :- s/Str]
         :body-params [cl :- ck/Checklist]
         :return ck/Checklist
         :summary "update an existing checklist"
         (ck/update-checklist! (keyword step) cl)))


  (context "/api" []
    :auth-rules authenticated?
    :tags ["private"]

    (POST "/logout" []
      :return auth/LogoutResponse
      :summary "remove the user from the session"
      (auth/logout))

    ;;checklist
    (POST "/carry-out-checklist-by-cat" []
          :body-params [chosen-type :- ck/chosen-type
                        step :- s/Keyword
                        current-path :- ck/current-path
                        source :- ck/db-info
                        target :- ck/db-info]
          :return ck/ChecklistCarryOutResult
          :summary "list checklist by the given category"
          (ck/carry-out-checklist-by-cat {:chosen-type chosen-type :step step :current-path current-path :source source :target target}))

    (POST "/compute-checklist-cat-tree" []
          :body-params [chosen-type :- ck/chosen-type
                        step :- s/Keyword]
          :return ck/ChecklistCatTree
          :summary "compute the checklist category tree based on data"
          (ck/compute-checklist-cat-tree {:chosen-type chosen-type :step step}))

    ;; upgrade-api-client
    (POST "/upgrade-api-submit-operation-createdb" []
          :body-params [m :- uac/CreateDBRequest]
          :return s/Num
          :summary "Call upgrade api - submitOperation"
          (uac/call-upgrade-api :submitOperation m))

    (POST "/upgrade-api-submit-operation-createtsk" []
          :body-params [m :- uac/CreateTSKRequest]
          :return s/Num
          :summary "Call upgrade api - submitOperation"
          (uac/call-upgrade-api :submitOperation m))

    (POST "/upgrade-api-submit-operation-checkdb" []
          :body-params [m :- uac/CheckDBRequest]
          :return s/Num
          :summary "Call upgrade api - submitOperation"
          (uac/call-upgrade-api :submitOperation m))

    (POST "/upgrade-api-submit-operation-createtb" []
          :body-params [m :- uac/CreateTBRequest]
          :return s/Num
          :summary "Call upgrade api - submitOperation"
          (uac/call-upgrade-api :submitOperation m))

    (POST "/upgrade-api-submit-operation-initcdc" []
          :body-params [m :- uac/InitCDCRequest]
          :return s/Num
          :summary "Call upgrade api - submitOperation"
          (uac/call-upgrade-api :submitOperation m))

    (POST "/upgrade-api-submit-operation-freshnbu" []
          :body-params [m :- uac/FreshNBURequest]
          :return s/Num
          :summary "Call upgrade api - submitOperation"
          (uac/call-upgrade-api :submitOperation m))

    (POST "/upgrade-api-submit-operation-freshlocal" []
          :body-params [m :- uac/FreshLocalRequest]
          :return s/Num
          :summary "Call upgrade api - submitOperation"
          (uac/call-upgrade-api :submitOperation m))

    (POST "/upgrade-api-submit-operation-completefresh" []
          :body-params [m :- uac/CompleteFreshRequest]
          :return s/Num
          :summary "Call upgrade api - submitOperation"
          (uac/call-upgrade-api :submitOperation m))

    (POST "/upgrade-api-submit-operation-deletecdc" []
          :body-params [m :- uac/DeleteCDCRequest]
          :return s/Num
          :summary "Call upgrade api - submitOperation"
          (uac/call-upgrade-api :submitOperation m))

    (GET "/upgrade-api-get-tasks/:funcid" []
         :path-params [funcid :- uac/funcid]
         :return [uac/TaskInfo]
         :summary "Call upgrade api - submitOperation"
         (uac/call-upgrade-api :getTasks {:funcid funcid}))

    (GET "/upgrade-api-get-event-result/:taskid" []
         :path-params [taskid :- s/Num]
         :return (s/maybe s/Str)
         :summary "Call upgrade api - submitOperation"
         (uac/call-upgrade-api :getEventResult {:taskid taskid}))

    (GET "/upgrade-api-get-alias-records/:taskname" []
         :path-params [taskname :- s/Str]
         :return [uac/AliasRecord]
         :summary "Call upgrade api - submitOperation"
         (uac/call-upgrade-api :getAliasRecords {:taskname taskname}))

    (GET "/upgrade-api-get-all-tasknames" []
         :return [s/Str]
         :summary "Call upgrade api - submitOperation"
         (uac/call-upgrade-api :getAllTaskNames {}))

    (GET "/upgrade-api-delete-task/:taskname" []
         :path-params [taskname :- s/Str]
         :return s/Bool
         :summary "Call upgrade api - submitOperation"
         (uac/call-upgrade-api :deleteTask {:taskname taskname}))))
