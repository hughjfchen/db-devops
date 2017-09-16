(ns db-devops.routes
  (:require [re-frame.core :refer [dispatch dispatch-sync subscribe]]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [secretary.core :as secretary]
            [accountant.core :as accountant])
  (:import goog.History))

(defn logged-in? []
  @(subscribe [:user]))

(defn run-events [events]
  (doseq [event events]
    (if (logged-in?)
      (dispatch event)
      (dispatch [:add-login-event event]))))

(defn context-url [url]
  (str js/context url))

(defn href [url]
  {:href (str js/context url)})

(defn navigate! [url]
  (accountant/navigate! (context-url url)))

(defn home-page-events [& events]
  (.scrollTo js/window 0 0)
  (run-events (into
               [[:set-active-page :home]]
                events)))

;; -------------------------
;; Routes
(secretary/defroute (context-url "/") []
  (home-page-events [:load-checklist-tree]
                    [:load-verification-tree]))

(secretary/defroute (context-url "/users") []
  (run-events [[:set-active-page :users]]))

(secretary/defroute (context-url "/upgrade") []
  (run-events [[:set-active-page :upgrade]]))

;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
      HistoryEventType/NAVIGATE
      (fn [event]
        (secretary/dispatch! (.-token event))))
    (.setEnabled true))
  (accountant/configure-navigation!
    {:nav-handler
     (fn [path]
       (secretary/dispatch! path))
     :path-exists?
     (fn [path]
       (secretary/locate-route path))})
  (accountant/dispatch-current!))
