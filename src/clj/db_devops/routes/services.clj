(ns db-devops.routes.services
  (:require [ring.util.http-response :refer :all]
            [compojure.api.sweet :refer :all]
            [compojure.api.upload :refer [TempFileUpload wrap-multipart-params]]
            [schema.core :as s]
            [compojure.api.meta :refer [restructure-param]]
            [db-devops.routes.services.attachments :as attachments]
            [db-devops.routes.services.issues :as issues]
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
                           :title       "Sample API"
                           :description "Sample Services"}}}}

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
                          :is-active    is-active})))

  (context "/api" []
    :auth-rules authenticated?
    :tags ["private"]

    (POST "/logout" []
      :return auth/LogoutResponse
      :summary "remove the user from the session"
      (auth/logout))

    ;;tags
    (GET "/tags" []
      :return issues/TagsResult
      :summary "list available tags"
      (issues/tags))

    (POST "/tag" []
      :body-params [tag :- s/Str]
      :return issues/TagResult
      :summary "add a new tag"
      (issues/add-tag! {:tag tag}))

    ;;issues
    (GET "/issues" []
      :return issues/IssueSummaryResults
      :summary "list all issues"
      (issues/all-issues))

    (GET "/recent-issues" []
      :return issues/IssueSummaryResults
      :summary "list 10 most recent issues"
      (issues/recent-issues 10))

    (GET "/issues-by-views/:offset/:limit" []
      :path-params [offset :- s/Int limit :- s/Int]
      :return issues/IssueSummaryResults
      :summary "list issues by views using the given offset and limit"
      (issues/issues-by-views {:offset offset :limit limit}))

    (GET "/issues-by-tag/:tag" []
      :path-params [tag :- s/Str]
      :return issues/IssueSummaryResults
      :summary "list issues by the given tag"
      (issues/issues-by-tag {:tag tag}))

    (DELETE "/issue/:id" []
      :path-params [id :- s/Int]
      :return s/Int
      :summary "delete the issue with the given id"
      (issues/delete-issue! {:support-issue-id id}))

    (POST "/search-issues" []
      :body-params [query :- s/Str
                    limit :- s/Int
                    offset :- s/Int]
      :return issues/IssueSummaryResults
      :summary "search for issues matching the query"
      (issues/search-issues {:query  query
                             :limit  limit
                             :offset offset}))

    (GET "/issue/:id" []
      :path-params [id :- s/Int]
      :return issues/IssueResult
      :summary "returns the issue with the given id"
      (issues/issue {:support-issue-id id}))

    (POST "/issue" []
      :current-user user
      :body-params [title :- s/Str
                    summary :- s/Str
                    detail :- s/Str
                    tags :- [s/Str]]
      :return s/Int
      :summary "adds a new issue"
      (issues/add-issue!
        {:title   title
         :summary summary
         :detail  detail
         :tags    tags
         :user-id (:user-id user)}))

    (PUT "/issue" []
      :current-user user
      :body-params [support-issue-id :- s/Int
                    title :- s/Str
                    summary :- s/Str
                    detail :- s/Str
                    tags :- [s/Str]]
      :return s/Int
      :summary "update an existing issue"
      (issues/update-issue!
        {:support-issue-id support-issue-id
         :title            title
         :summary          summary
         :detail           detail
         :tags             tags
         :user-id          (:user-id user)}))

    ;;attachments
    (POST "/attach-file" []
      :multipart-params [support-issue-id :- s/Int
                         file :- TempFileUpload]
      :middleware [wrap-multipart-params]
      :summary "handles file upload"
      :return attachments/AttachmentResult
      (attachments/attach-file-to-issue! support-issue-id file))

    (GET "/file/:support-issue-id/:name" []
      :summary "load a file from the database matching the support issue id and the filename"
      :path-params [support-issue-id :- s/Int
                    name :- s/Str]
      (attachments/load-file-data {:support-issue-id support-issue-id
                                   :name             name}))

    (DELETE "/file/:support-issue-id/:name" []
      :summary "delete a file from the database"
      :path-params [support-issue-id :- s/Int
                    name :- s/Str]
      :return attachments/AttachmentResult
      (attachments/remove-file-from-issue! {:support-issue-id support-issue-id
                                            :name             name}))))
