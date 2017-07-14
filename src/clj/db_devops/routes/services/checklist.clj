(ns db-devops.routes.services.checklist
  (:require [db-devops.db.core :as db]
            [db-devops.db.checklist :as dbcl]
            [db-devops.http-client :as hc]
            [schema.core :as s]
            [clojure.tools.logging :as log]
            [ring.util.http-response :refer :all]
            [db-devops.routes.services.common :refer [handler]])
  (:import java.util.Date))

(def Tag
  {:tag-id                            s/Num
   :tag                               s/Str
   (s/optional-key :tag-count)        s/Num
   (s/optional-key :support-issue-id) s/Num
   (s/optional-key :create-date)      Date})

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
  {:checklist-id             s/Num
   :first-cat s/Keyword
   :second-cat s/Keyword
   :title s/Str
   :description s/Str
   :execute {:script-name s/Str
             :input [{:name s/Keyword
                      :command-line s/Str}]
             :output {:field-path [s/Keyword]
                      :result {:source s/Any :target s/Any}}}
   :verify {:type (s/enum :gt :lt :eq :ge :le :tf :compare :custom)
            :rule-fn-extra-paras [s/Any]
            :rule-fn s/Symbol
            :rule-description s/Str
            :result (s/maybe s/Bool)}
   :comply-suggestion s/Str
   (s/optional-key :create-date) Date
   :update-date                  (s/maybe Date)
   (s/optional-key :created-by)                   s/Num
   :update-by              s/Num})

(def ChecklistRequest
  {:chosen-type chosen-type
   :current-path current-path
   :source db-info
   (s/optional-key :target) db-info})

(defn adjust-checklist-for-response [c]
  (-> c
      (dissoc :description)
      (update-in [:execute] dissoc :script-name :input)
      (update-in [:execute :output] dissoc :field-path)
      (dissoc :comply-suggestion)
      (dissoc :update-date)
      (dissoc :update-by)
      (update-in [:verify] dissoc :type :rule-fn :rule-fn-extra-paras)))

(def ChecklistResult {:checklist [(adjust-checklist-for-response Checklist)]
                      :final-result s/Bool
                      :number-of-failure s/Num})

(def Issue
  {:support-issue-id             s/Num
   :title                        s/Str
   :summary                      s/Str
   :detail                       s/Str
   (s/optional-key :create-date) Date
   :delete-date                  (s/maybe Date)
   :update-date                  (s/maybe Date)
   :last-updated-by              s/Num
   :last-viewed-date             Date
   :views                        s/Num
   :created-by                   s/Num
   (s/optional-key :files)       [s/Str]
   (s/optional-key :tags)        [s/Str]
   (s/optional-key :updated-by)  (s/maybe s/Num)
   :created-by-screenname        s/Str
   :updated-by-screenname        (s/maybe s/Str)})

(def IssueSummary
  (select-keys Issue
               [:support-issue-id
                :title
                :summary
                (s/optional-key :create-date)
                (s/optional-key :tags)
                :update-date
                :last-viewed-date
                :views]))

(def IssueResult
  {(s/optional-key :issue) Issue
   (s/optional-key :error) s/Str})

(def IssueSummaryResults
  {(s/optional-key :issues) [IssueSummary]
   (s/optional-key :error)  s/Str})

(def TagResult
  {(s/optional-key :tag)   Tag
   (s/optional-key :error) s/Str})

(def TagsResult
  {(s/optional-key :tags)  [Tag]
   (s/optional-key :error) s/Str})

(handler tags []
  (ok {:tags (db/ranked-tags)}))

(handler add-tag! [m]
  (ok {:tag (merge m (db/create-tag<! m))}))

(defn attach-verify-cl [exec-result cl]
  (let [source-result (get-in (first exec-result) (get-in cl [:execute :output :field-path]))
        target-result (get-in (second exec-result) (get-in cl [:execute :output :field-path]))
        attached-result (-> cl
                            (update-in [:execute :output :result] assoc :source source-result)
                            (update-in [:execute :output :result] assoc :target target-result))
        verify-result (apply (get-in cl [:verify :rule-fn]) (into (vec (conj exec-result attached-result)) (get-in cl [:verify :rule-fn-extra-paras])))]
    (update-in attached-result [:verify] assoc :result verify-result)))

(defn count-failure [coll]
  (reduce (fn [cnt val] (if-not (get-in val [:verify :result]) (inc cnt) cnt)) 0 coll))

(handler all-checklist []
         (ok {:checklist dbcl/ALL-CHECKLIST}))

(handler checklist-by-cat [m]
         (let [path (:current-path m)
               cat-cl (filter #(and (= (first path) (:first-cat %))
                                    (= (second path) (:second-cat %))) dbcl/ALL-CHECKLIST)
               cat-cl-to-exec (first cat-cl)
               cat-cl-exec-result (pmap (partial hc/call-checklist-script cat-cl-to-exec) [(:source m) (:target m)])
               cat-cl-verify-result (map (partial attach-verify-cl cat-cl-exec-result) cat-cl)
               final-cl (map adjust-checklist-for-response cat-cl-verify-result)
               number-of-failure (count-failure final-cl)
               final-result (if (= number-of-failure 0) true false)]
           (ok {:checklist final-cl :final-result final-result :number-of-failure number-of-failure})))

;(checklist-by-cat {:current-path [:aix-check :system-config]
;                   :chosen-type :cdc
;                   :source {:machine "chenjf" :ip "10.10.10.10" :port 50000 :instance "instance1" :db "mydb1" :version "9.5"}
;                   :target {:machine "chenjf" :ip "10.10.10.11" :port 50000 :instance "instance1" :db "mydb1" :version "10.5"}})

(handler delete-checklist! [m]
         (ok {:checklist dbcl/ALL-CHECKLIST}))

(handler search-checklist [m]
         (ok {:checklist dbcl/ALL-CHECKLIST}))

(handler checklist [m]
         (if-let [checklist {}]
           (ok {:checklist checklist})
           (bad-request {:error (str "Checklist not found for: " m)})))

(handler add-checklist! [checklist]
         (ok {:checklist dbcl/ALL-CHECKLIST}))

(handler update-checklist! [checklist]
         (ok {:checklist dbcl/ALL-CHECKLIST}))

(handler recent-issues [limit]
  (ok {:issues (db/recently-viewed-issues {:limit limit})}))

(handler add-issue! [issue]
  (ok (db/create-issue-with-tags! issue)))

(handler update-issue! [issue]
  (ok (db/update-issue-with-tags! issue)))

(handler issue [m]
  (if-let [issue (db/support-issue m)]
    (ok {:issue issue})
    (bad-request {:error (str "Issue not found for: " m)})))

(handler issues-by-views [m]
  (ok {:issues (db/issues-by-views m)}))

(handler issues-by-tag [m]
  (ok {:issues (db/issues-by-tag m)}))

(handler search-issues [m]
  (ok {:issues (db/search-issues (update m :query #(str "'" % "'")))}))

(handler delete-issue! [m]
  (ok (db/dissoc-from-tags-and-delete-issue-and-files! m)))
