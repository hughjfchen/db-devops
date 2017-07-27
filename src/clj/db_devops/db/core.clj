(ns db-devops.db.core
  "Utilities to db, record and look up based on file "
  (:require [clojure.edn :as edn]
            [clojure.tools.logging :as log]
            [db-devops.config :refer [env]]
            [mount.core :refer [defstate]]
            [db-devops.db.user :refer [default-user]]
            [db-devops.db.checklist :refer [default-checklist]]
            [db-devops.db.verification :refer [default-verification]]))

;; db


;; schema

;; define a function to delete from a vector at a specified position
(defn delete-element [vc pos]
  (vec (concat
        (subvec vc 0 pos)
        (subvec vc (inc pos)))))

;; db method
(defn get-records [db table] @(get db table))
(defn get-record-by-index [db table ii] (nth @(get db table) ii))
(defn put-record-by-index! [db table i v] (swap! (get db table) assoc i v))
(defn remove-record-by-index! [db table i] (swap! (get db table) delete-element i))
(defn get-index-by-id [db table id]
  (let [table-with-i (map-indexed vector @(get db table))]
    (some #(when (= id (:checklist-id (second %))) (first %)) table-with-i)))

(defn get-record-by-field [db table field-name field-value]
  (let [table-with-i (map-indexed vector @(get db table))]
    (some #(when (= field-value (get (second %) field-name)) (second %)) table-with-i)))

(defn get-record-by-two-field [db table first-field-name first-field-value second-field-name second-field-value]
  (some #(when (and (= (get % first-field-name) first-field-value) (= (get % second-field-name) second-field-value)) %) @(get db table)))

;; create or update record
(defmulti put-record! (fn [db table v] (:id v)))
;; create
(defmethod put-record! nil [db table v]
  (let [db-v @(get db table)
        id-for-new (inc (apply max (map #(:id %) db-v)))]
    (put-record-by-index! db table (count db-v) (assoc v :id id-for-new))))
;; update
(defmethod put-record! :default [db table v]
  (let [existing-record-i (get-index-by-id db table (:id v))]
    (put-record-by-index! db table existing-record-i v)))

(defn dump-to-path
  "Store a value's representation to a given path"
  [path value]
  (spit path (pr-str value)))

(defn load-from-path
  "Load a value from its representation stored in a given path.
   When reading fails, yield nil"
  [path]
  (try
    (edn/read-string (slurp path))
    (catch Exception ex
      (log/error (or (ex-data ex) (.getMessage ex))))))

(defn persist-fn
  "Yields an atom watch-fn that dumps new states to a path"
  [path]
  (fn [_ _ _ state]
    (dump-to-path path state)))

(defn make-table
   "An atom that loads its initial state from a file and persists each new state
    to the same path. If file not found, use default. One file for one table."
  [ms]
  (let [table (key ms)
        {:keys [path default]} (val ms)
        init  (or (load-from-path path) (var-get (resolve default)))
        state (atom init)]
    (add-watch state :persist-watcher (persist-fn path))
    {table state}))

(defn make-db [env]
  (let [tables (get-in env [:storage :file])]
    (reduce merge (map make-table tables))))

(defstate file-db :start (make-db env))
