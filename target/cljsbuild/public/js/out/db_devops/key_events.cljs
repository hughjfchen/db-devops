(ns db-devops.key-events)

(defn on-enter [event action]
  (when (= (.-keyCode event) 13)
    (action)))
