(ns db-devops.routes.services.checklist
  (:require [db-devops.db.core :as db :refer [file-db]]
            [db-devops.verify-fn :as verify-fn :refer [predefined-verify-fn]]
            [db-devops.http-client :as hc]
            [schema.core :as s]
            [clojure.tools.logging :as log]
            [ring.util.http-response :refer :all]
            [db-devops.routes.services.common :refer [handler]])
  (:import java.util.Date))

(def chosen-type (s/enum :local :cdc :other))

(def current-path [s/Keyword])

(def db-info
  {:machine s/Str
   :ip s/Str
   :port s/Str
   :instance s/Str
   :db s/Str
   :version s/Str})

(def Checklist
  {:id             s/Num
   :type [s/Keyword]
   :first-cat s/Keyword
   :first-cat-label s/Str
   :second-cat s/Keyword
   :second-cat-label s/Str
   :title s/Str
   (s/optional-key :description) s/Str
   :execute {:script-name s/Str
             :input [{:name s/Keyword
                      :command-line s/Str}]
             :output {:field-path [s/Keyword]
                      (s/optional-key :result) {:source s/Any :target s/Any}}}
   :verify {:type (s/enum :gt :lt :eq :ge :le :tf :compare-eq :compare-ge :compare-gt :compare-le :compare-lt :multi-part-ge :multi-part-gt :multi-part-le :multi-part-lt :compare-multi-part-ge :compare-multi-part-gt :compare-multi-part-le :compare-multi-part-lt :custom)
            :rule-fn-extra-paras s/Any
            :rule-fn s/Str
            :rule-description s/Str
            (s/optional-key :result) (s/maybe s/Bool)}
   (s/optional-key :comply-suggestion) s/Str
   (s/optional-key :create-date) Date
   (s/optional-key :update-date)                  (s/maybe Date)
   (s/optional-key :created-by)                   s/Num
   (s/optional-key :update-by)              s/Num})

(def ChecklistRequest
  {:chosen-type chosen-type
   :step s/Keyword
   :current-path current-path
   :source db-info
   (s/optional-key :target) db-info})

(defn adjust-checklist-for-carry-out-response [c]
  (-> c
      (dissoc :description)
      (update-in [:execute] dissoc :script-name :input)
      (update-in [:execute :output] dissoc :field-path)
      (dissoc :comply-suggestion)
      (dissoc :update-date)
      (dissoc :update-by)
      (dissoc :type)
      (dissoc :first-cat-label)
      (dissoc :second-cat-label)
      (update-in [:verify] dissoc :type :rule-fn :rule-fn-extra-paras)))

(def ChecklistCarryOutResult {:checklist [(adjust-checklist-for-carry-out-response Checklist)]
                              :final-result s/Bool
                              :number-of-failure s/Num})

(def ChecklistCatTreeLeaf {:title s/Str
                           :path [s/Keyword]})
(def ChecklistCatTree [(merge ChecklistCatTreeLeaf
                              {(s/optional-key :sub-tree) [ChecklistCatTreeLeaf]})])

(defn first-second-cat-eq? [path record]
  (and (= (first path) (:first-cat record))
       (= (second path) (:second-cat record))))

(defn type-in-record? [type record]
  (some #{type} (:type record)))

(defn get-checklist-by-path [step path]
  (db/get-records-by-pred file-db step (partial first-second-cat-eq? path)))

(defn exec-checklist-script [checklist m]
  (let [one-checklist (first checklist)]
    (if-not (= :manual-check (:first-cat one-checklist))
      (pmap (partial hc/call-checklist-script one-checklist) [(:source m) (:target m)]))))

(defn attach-checklist [exec-result cl]
  (let [source-result (get-in (first exec-result) (get-in cl [:execute :output :field-path]))
        target-result (get-in (second exec-result) (get-in cl [:execute :output :field-path]))
        attached-cl (-> cl
                        (update-in [:execute :output :result] assoc :source source-result)
                        (update-in [:execute :output :result] assoc :target target-result))]
    (vec (conj exec-result attached-cl))))

(defn verify-checklist [exec-result-attached-cl]
  (let [attached-cl (first exec-result-attached-cl)
        verify-type (get-in attached-cl [:verify :type])
        verify-fn (cond
                    (= :custom verify-type) (eval (clojure.edn/read-string (get-in attached-cl [:verify :rule-fn])))
                    :else (get predefined-verify-fn verify-type))]
    (->> (apply verify-fn (into exec-result-attached-cl (get-in attached-cl [:verify :rule-fn-extra-paras])))
         (update-in attached-cl [:verify] assoc :result))))

(defn count-failure [coll]
  (reduce (fn [cnt val] (if-not (get-in val [:verify :result]) (inc cnt) cnt)) 0 coll))

(defn process-checklist [checklists m]
  (cond
    (empty? checklists) (throw (ex-info "No checklist records found for the request." m))
    (= :manual-check (:first-cat (first checklists))) checklists
    :else (as-> checklists $
            (exec-checklist-script $ m)
            (map (partial attach-checklist $) checklists)
            (map verify-checklist $))))

(defn into-or-merge [v1 v2] (cond
                              (and (vector? v1) (vector? v2) (not= v1 v2)) (into v2 v1)
                              :else (or v1 v2)))
(defn transform-to-cat-tree [cats]
  (->> (map (fn [cat] {:title (:first-cat-label cat) :path [(:first-cat cat)] :sub-tree [{:title (:second-cat-label cat) :path [(:first-cat cat) (:second-cat cat)]}]}) cats)
       (group-by :path)
       (map #(reduce (partial merge-with into-or-merge) (val %)))))

(handler carry-out-checklist-by-cat [m]
         (let [final-cl (as-> m $
                          (:current-path $)
                          (get-checklist-by-path (:step m) $)
                          (process-checklist $ m)
                          (map adjust-checklist-for-carry-out-response $))
               number-of-failure (count-failure final-cl)
               final-result (if (= number-of-failure 0) true false)]
           (ok {:checklist final-cl :final-result final-result :number-of-failure number-of-failure})))

;(checklist-by-cat {:current-path [:aix-check :system-config]
;                   :chosen-type :cdc
;                   :source {:machine "chenjf" :ip "10.10.10.10" :port 50000 :instance "instance1" :db "mydb1" :version "9.5"}
;                   :target {:machine "chenjf" :ip "10.10.10.11" :port 50000 :instance "instance1" :db "mydb1" :version "10.5"}})

(handler compute-checklist-cat-tree [m]
         (as-> m $
           (db/get-records-by-pred file-db (:step m) (partial type-in-record? (:chosen-type $)))
           (map #(select-keys % [:first-cat-label :first-cat :second-cat-label :second-cat]) $)
           (dedupe $)
           (transform-to-cat-tree $)))

;(compute-checklist-cat-tree {:chosen-type :cdc :step :checklist})

(handler all-checklist [step]
         (ok (db/get-records file-db step)))

(handler delete-checklist! [step m]
         (db/remove-record-by-id! file-db step (:id m))
         (ok (:id m)))

(handler search-checklist [step m]
         (ok (db/get-records file-db step)))

(handler checklist [step m]
         (ok (db/get-record-by-id file-db step (:id m))))

(handler add-checklist! [step checklist]
         (ok (db/put-record! file-db step checklist)))

(handler update-checklist! [step checklist]
         (ok (db/put-record! file-db step checklist)))
