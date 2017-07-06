(ns db-devops.highcharts
  (:require
    [reagent.core :as r]
    [cljsjs.highcharts]))

;;;
;;; Light wrapper for highcharts
;;;

(defn render-chart-fn [config-atom]
  (fn [component]
    (.chart js/Highcharts (r/dom-node component) (clj->js @config-atom))))

(defn chart-ui [config-atom]
  (r/create-class
   {:component-did-mount (render-chart-fn config-atom)
    :component-did-update (render-chart-fn config-atom)
    :reagent-render (fn [config-atom]
                      @config-atom ;; Dirty hack, so reagent will re-render this component when config changes
                      [:div])}))
