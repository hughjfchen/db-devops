(ns luminus-re-frame-app-template.app
  (:require [luminus-re-frame-app-template.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
