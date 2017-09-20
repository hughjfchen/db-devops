(ns db-devops.verify-fn
  (:require [schema.core :as s]
            [cuerdas.core :as cstr]
            [clojure.tools.logging :as log]
            [mount.core :refer [defstate]]))

;; verify functions for checklist
;; all functions should be pure. and accept three or more parameters
;; the first parameter is the checklist definition, the second is the source result,
;; the third is the target
;; result(if any), and the rest is the extra parameters defined in this
;; checklist :rule-fn-extra-paras


;; some pre-defined functions

(defn verify-fn-eq[cl s t & rest]
  (let [target-result (get-in cl [:execute :output :result :target])
        converted-result (if (cstr/numeric? target-result) (cstr/parse-number target-result) target-result)]
    (some #(= converted-result %) rest)))

(defn verify-fn-gt[cl s t & rest]
  (let [target-result (get-in cl [:execute :output :result :target])]
    (if (not-empty target-result)
      (some #(> (biginteger target-result) %) rest)
      false)))

(defn verify-fn-lt[cl s t & rest]
  (let [target-result (get-in cl [:execute :output :result :target])]
    (if (not-empty target-result)
      (some #(< (biginteger target-result) %) rest)
      false)))

(defn verify-fn-ge[cl s t & rest]
  (let [target-result (get-in cl [:execute :output :result :target])]
    (if (not-empty target-result)
      (some #(>= (biginteger target-result) %) rest)
      false)))

(defn verify-fn-le[cl s t & rest]
  (let [target-result (get-in cl [:execute :output :result :target])]
    (if (not-empty target-result)
      (some #(<= (biginteger target-result) %) rest)
      false)))

(defn verify-fn-le-gt[cl s t & rest]
  (let [target-result (get-in cl [:execute :output :result :target])]
    (if (not-empty target-result)
      (some #(and (<= (biginteger target-result) %) (> (biginteger target-result) %)) rest)
      false)))

(defn verify-fn-le-ge[cl s t & rest]
  (let [target-result (get-in cl [:execute :output :result :target])]
    (if (not-empty target-result)
      (some #(and (<= (biginteger target-result) %) (>= (biginteger target-result) %)) rest)
      false)))

(defn verify-fn-lt-gt[cl s t & rest]
  (let [target-result (get-in cl [:execute :output :result :target])]
    (if (not-empty target-result)
      (some #(and (< (biginteger target-result) %) (> (biginteger target-result) %)) rest)
      false)))

(defn verify-fn-lt-ge[cl s t & rest]
  (let [target-result (get-in cl [:execute :output :result :target])]
    (if (not-empty target-result)
      (some #(and (< (biginteger target-result) %) (>= (biginteger target-result) %)) rest)
      false)))

(defn verify-fn-tf[cl s t & rest]
  (let [target-result (get-in cl [:execute :output :result :target])]
    (boolean target-result)))

(defn verify-fn-compare-eq[cl s t & rest]
  (let [source-result (get-in cl [:execute :output :result :source])
        target-result (get-in cl [:execute :output :result :target])]
    (if (and (not (nil? source-result)) (not (nil? target-result)))
      (= source-result target-result))))

(defn verify-fn-compare-gt[cl s t & rest]
  (let [source-result (get-in cl [:execute :output :result :source])
        target-result (get-in cl [:execute :output :result :target])]
    (if (and (not-empty source-result) (not-empty target-result))
      (> (biginteger target-result) (biginteger source-result))
      false)))

(defn verify-fn-compare-lt[cl s t & rest]
  (let [source-result (get-in cl [:execute :output :result :source])
        target-result (get-in cl [:execute :output :result :target])]
    (if (and (not-empty source-result) (not-empty target-result))
      (< (biginteger target-result) (biginteger source-result))
      false)))

(defn verify-fn-compare-ge[cl s t & rest]
  (let [source-result (get-in cl [:execute :output :result :source])
        target-result (get-in cl [:execute :output :result :target])]
    (if (and (not-empty source-result) (not-empty target-result))
      (>= (biginteger target-result) (biginteger source-result))
      false)))

(defn verify-fn-compare-le[cl s t & rest]
  (let [source-result (get-in cl [:execute :output :result :source])
        target-result (get-in cl [:execute :output :result :target])]
    (if (and (not-empty source-result) (not-empty target-result))
      (<= (biginteger target-result) (biginteger source-result))
      false)))

(defn verify-fn-multi-part-gt [cl s t & rest]
  (let [target-result (get-in cl [:execute :output :result :target])]
    (if (not-empty target-result)
      (let [separator (second rest)
            multi-part-constant (clojure.string/join (clojure.string/split (first rest) (re-pattern (str "\\" separator))))
            multi-part-target (clojure.string/join (clojure.string/split target-result (re-pattern (str "\\" separator))))]
        (> (biginteger multi-part-target) (biginteger multi-part-constant)))
      false)))

(defn verify-fn-multi-part-ge [cl s t & rest]
  (let [target-result (get-in cl [:execute :output :result :target])]
    (if (not-empty target-result)
      (let [separator (second rest)
            multi-part-constant (clojure.string/join (clojure.string/split (first rest) (re-pattern (str "\\" separator))))
            multi-part-target (clojure.string/join (clojure.string/split target-result (re-pattern (str "\\" separator))))]
        (>= (biginteger multi-part-target) (biginteger multi-part-constant)))
      false)))

(defn verify-fn-multi-part-lt [cl s t & rest]
  (let [target-result (get-in cl [:execute :output :result :target])]
    (if (not-empty target-result)
      (let [separator (second rest)
            multi-part-constant (clojure.string/join (clojure.string/split (first rest) (re-pattern (str "\\" separator))))
            multi-part-target (clojure.string/join (clojure.string/split target-result (re-pattern (str "\\" separator))))]
        (< (biginteger multi-part-target) (biginteger multi-part-constant)))
      false)))

(defn verify-fn-multi-part-le [cl s t & rest]
  (let [target-result (get-in cl [:execute :output :result :target])]
    (if (not-empty target-result)
      (let [separator (second rest)
            multi-part-constant (clojure.string/join (clojure.string/split (first rest) (re-pattern (str "\\" separator))))
            multi-part-target (clojure.string/join (clojure.string/split target-result (re-pattern (str "\\" separator))))]
        (<= (biginteger multi-part-target) (biginteger multi-part-constant)))
      false)))

(defn verify-fn-compare-multi-part-lt[cl s t & rest]
  (let [source-result (get-in cl [:execute :output :result :source])
        target-result (get-in cl [:execute :output :result :target])]
    (if (and (not-empty source-result) (not-empty target-result))
      (let [separator (second rest)
            multi-part-source (clojure.string/join (clojure.string/split source-result (re-pattern (str "\\" separator))))
            multi-part-target (clojure.string/join (clojure.string/split target-result (re-pattern (str "\\" separator))))]
        (< (biginteger multi-part-source) (biginteger multi-part-target)))
      false)))

(defn verify-fn-compare-multi-part-le[cl s t & rest]
  (let [source-result (get-in cl [:execute :output :result :source])
        target-result (get-in cl [:execute :output :result :target])]
    (if (and (not-empty source-result) (not-empty target-result))
      (let [separator (second rest)
            multi-part-source (clojure.string/join (clojure.string/split source-result (re-pattern (str "\\" separator))))
            multi-part-target (clojure.string/join (clojure.string/split target-result (re-pattern (str "\\" separator))))]
        (<= (biginteger multi-part-source) (biginteger multi-part-target)))
      false)))

(defn verify-fn-compare-multi-part-gt[cl s t & rest]
  (let [source-result (get-in cl [:execute :output :result :source])
        target-result (get-in cl [:execute :output :result :target])]
    (if (and (not-empty source-result) (not-empty target-result))
      (let [separator (second rest)
            multi-part-source (clojure.string/join (clojure.string/split source-result (re-pattern (str "\\" separator))))
            multi-part-target (clojure.string/join (clojure.string/split target-result (re-pattern (str "\\" separator))))]
        (> (biginteger multi-part-source) (biginteger multi-part-target)))
      false)))

(defn verify-fn-compare-multi-part-ge[cl s t & rest]
  (let [source-result (get-in cl [:execute :output :result :source])
        target-result (get-in cl [:execute :output :result :target])]
    (if (and (not-empty source-result) (not-empty target-result))
      (let [separator (second rest)
            multi-part-source (clojure.string/join (clojure.string/split source-result (re-pattern (str "\\" separator))))
            multi-part-target (clojure.string/join (clojure.string/split target-result (re-pattern (str "\\" separator))))]
        (>= (biginteger multi-part-source) (biginteger multi-part-target)))
      false)))

(defn predefined-verify-fn []
  {:eq verify-fn-eq
   :gt verify-fn-gt
   :lt verify-fn-lt
   :ge verify-fn-ge
   :le verify-fn-le
   :le-gt verify-fn-le-gt
   :le-ge verify-fn-le-ge
   :lt-gt verify-fn-lt-gt
   :lt-ge verify-fn-lt-ge
   :tf verify-fn-tf
   :compare-eq verify-fn-compare-eq
   :compare-gt verify-fn-compare-gt
   :compare-lt verify-fn-compare-lt
   :compare-ge verify-fn-compare-ge
   :compare-le verify-fn-compare-le
   :multi-part-gt verify-fn-multi-part-gt
   :multi-part-lt verify-fn-multi-part-lt
   :multi-part-ge verify-fn-multi-part-ge
   :multi-part-le verify-fn-multi-part-le
   :compare-multi-part-gt verify-fn-compare-multi-part-gt
   :compare-multi-part-lt verify-fn-compare-multi-part-lt
   :compare-multi-part-ge verify-fn-compare-multi-part-ge
   :compare-multi-part-le verify-fn-compare-multi-part-le})

(defstate predefined-verify-fn :start (predefined-verify-fn))
