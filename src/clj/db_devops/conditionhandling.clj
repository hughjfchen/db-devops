(ns db-devops.conditionhandling
  (:require [clojure.tools.logging :as log]
            [hara.event :as ev]))

(defn default-issue-handling
  "This is the default handler for all issues"
  [m]
  (log/error m))

(defn ex->issue
  "Wrap a third-party function call which may throw an exception and
  raise an issue instead so that you can handle the issue with hara.event
  restart condition system"
  [f & rest]
  (try
    (if rest
      (apply f rest)
      (apply f))
    (catch Throwable e
      (ev/raise [:exception {:message (.getMessage e)}
                 {:context {:function f
                            :input rest}}
                 {:possible-causes [(.getCause e)]}
                 {:suggested-actions ["check input" "contact admin"]}
                 ]))))

(defn e! [f & rest]
  (try
    (if-some [r (apply f rest)] r true)
    (catch Throwable e
      (log/error (str "Exception occured during calling function: "
                      f " " rest
                      ". Original exception message: " e)))))

(defn e!-> [x f & rest]
  (try
    (if-some [r (apply f (cons x rest))] r true)
    (catch Throwable e
      (log/error (str "Exception occured during calling function: "
                      f " " (cons x rest)
                      ". Original exception message: " e)))))

(defn nil! [f & rest]
  (if-some [rr (apply f rest)]
    rr
    (log/error
     (str "Got nil when calling function: " f " " rest))))

(defn nil!-> [x f & rest]
  (if-some [rr (apply f (cons x rest))]
    rr
    (log/error
     (str "Got nil when calling function: " f " " (cons x rest)))))
