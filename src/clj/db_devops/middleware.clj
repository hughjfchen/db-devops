(ns db-devops.middleware
  (:require [db-devops.env :refer [defaults]]
            [clojure.tools.logging :as log]
            [db-devops.layout :refer [*app-context* error-page]]
            [ring.middleware.anti-forgery :refer [wrap-anti-forgery]]
            [ring.middleware.webjars :refer [wrap-webjars]]
            [ring.middleware.format :refer [wrap-restful-format]]
            [db-devops.config :refer [env]]
            [ring.middleware.flash :refer [wrap-flash]]
            [immutant.web.middleware :as immutant]
            [ring.middleware.defaults :as ring-defaults]
            [ring.middleware.session.cookie :refer [cookie-store]]
            [buddy.auth.middleware :refer [wrap-authentication wrap-authorization]]
            [buddy.auth.backends.session :refer [session-backend]]
            [buddy.auth.accessrules :refer [restrict]]
            [buddy.auth :refer [authenticated?]]
            [db-devops.layout :refer [*identity*]])
  (:import [javax.servlet ServletContext]))

(defn wrap-context [handler]
  (fn [request]
    (binding [*app-context*
              (if-let [context (:servlet-context request)]
                ;; If we're not inside a servlet environment
                ;; (for example when using mock requests), then
                ;; .getContextPath might not exist
                (try (.getContextPath ^ServletContext context)
                     (catch IllegalArgumentException _ context))
                ;; if the context is not specified in the request
                ;; we check if one has been specified in the environment
                ;; instead
                (:app-context env))]
      (handler request))))

(defn wrap-internal-error [handler]
  (fn [req]
    (try
      (handler req)
      (catch Throwable t
        (log/error t)
        (error-page {:status  500
                     :title   "Something very bad has happened!"
                     :message "We've dispatched a team of highly trained gnomes to take care of the problem."})))))

(defn wrap-csrf [handler]
  (wrap-anti-forgery
    handler
    {:error-response
     (error-page
       {:status 403
        :title  "Invalid anti-forgery token"})}))

(defn on-error [request response]
  (error-page
    {:status 403
     :title  (str "Access to " (:uri request) " is not authorized")}))

(defn wrap-identity [handler]
  (fn [request]
    (binding [*identity* (get-in request [:session :identity])]
      (handler request))))

(defn wrap-auth [handler]
  (let [backend (session-backend)]
    (-> handler
        wrap-identity
        (wrap-authentication backend)
        (wrap-authorization backend))))

(defn wrap-defaults [handler]
  (if-let [{:keys [cookie-attrs key]} (:cookie-session env)]
    (ring-defaults/wrap-defaults
      handler
      (-> ring-defaults/site-defaults
          (assoc-in [:security :anti-forgery] false)
          (update-in [:session :cookie-attrs] merge cookie-attrs)
          (assoc-in [:session :cookie-name] "secure-ring-session")
          (assoc-in [:session :store] (if key
                                        (cookie-store {:key key})
                                        (cookie-store)))))
    (-> handler
        (immutant/wrap-session
          (if-let [timeout (-> env :memory-session :max-age)]
            {:timeout timeout
             :cookie-attrs {:http-only true}}
            {:cookie-attrs {:http-only true}}))
        (ring-defaults/wrap-defaults
          (-> ring-defaults/site-defaults
              (assoc-in [:security :anti-forgery] false)
              (dissoc :session))))))

(defn wrap-base [handler]
  (-> ((:middleware defaults) handler)
      wrap-auth
      wrap-webjars
      wrap-flash
      wrap-defaults
      wrap-context
      wrap-internal-error))
