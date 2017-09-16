(ns db-devops.effects
  (:require [re-frame.core :refer [dispatch dispatch-sync reg-event-db reg-event-fx reg-fx]]
            [db-devops.routes :refer [context-url navigate!]]
            [db-devops.ajax :refer [ajax-error]]
            [ajax.core :as ajax :refer [DELETE GET POST PUT]]))

(defn clear [intervals id]
  (do (js/clearInterval (get @intervals id))
      (swap! intervals dissoc id)))

(re-frame.core/reg-fx       ;; the re-frame API for registering effect handlers
 :interval                  ;; the effect id
 (let [live-intervals (atom {})]                 ;; storage for live intervals
   (fn [{:keys [action id frequency event]}]     ;; the handler
     (cond
       (= action :start) (swap! live-intervals assoc id (js/setInterval #(dispatch event) frequency))
       (= action :stop) (clear live-intervals id)
       (= action :clear-all) (doseq [an-id (keys @live-intervals)]
                               (clear live-intervals an-id))
       :default (throw (ex-info "Only one of start/stop/clear-all actions accepted." {:current-provided-action-type action}))))))
