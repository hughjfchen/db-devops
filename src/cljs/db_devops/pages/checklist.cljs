(ns db-devops.pages.checklist
  (:require [clojure.set :refer [difference rename-keys]]
            [reagent.core :as r]
            [re-frame.core :refer [dispatch subscribe]]
            [soda-ash.core :as sa]
            [db-devops.routes :refer [context-url href navigate! run-events]]
            [db-devops.datetime :as dt]
            [db-devops.pages.common :refer [validation-modal confirm-modal main-content-layout panel-header]]
            [db-devops.routes :refer [href navigate!]]
            [db-devops.validation :as v]
            [re-frame-datatable.core :as rdt]
            [re-frame-datatable.views :as rdtviews]))

(defn checklist-table [dt-id data-sub-vector]
  [rdt/datatable
   dt-id
   data-sub-vector
   [{::rdt/column-key   [:title]
     ::rdt/column-label "标题"}

    {::rdt/column-key   [:type]
     ::rdt/column-label "所属方案"
     ::rdt/render-fn    (fn [participants]
                         (let [names (->> participants
                                          (map (comp first #(clojure.string/split % #"@")))
                                          (distinct))]
                           [:span
                            (if (< 3 (count names))
                              (str (first names) " .. " (last names))
                              (clojure.string/join ", " names))

                            (when (< 1 (count participants))
                              [:span " (" (count participants) ")"])]))}

    {::rdt/column-key   [:first-cat-label]
     ::rdt/column-label "一级类别"}

    {::rdt/column-key   [:second-cat-label]
     ::rdt/column-label "二级类别"
     ::rdt/render-fn    (fn [digest]
                         [:span.muted
                          {:style {:text-overflow "ellipsis"
                                   :max-width     "20em"}}
                          (->> digest
                               (take 40)
                               (apply str))])}

    {::rdt/column-key   [:execute]
     ::rdt/column-label "执行脚本"}

    {::rdt/column-key   [:verify]
     ::rdt/column-label "结果校验"}

    {::rdt/column-key   [:comply-suggestion]
     ::rdt/column-label "合规建议"}

    {::rdt/column-key [:action]
     ::rdt/column-label "操作"
     ::rdt/render-fn (fn [user checklist]
                       [:div
                        [:button.ui.button {:on-click #(run-events [[:edit-checklist checklist] [:set-active-page :edit-checklist]])} "编辑"]
                        [:button.ui.button {:on-click #(run-events [[:delete-checklist (name (:step checklist)) (:id checklist)] [:set-active-page :checklist-management]])} "删除"]])}]

   {::rdt/pagination            {::rdt/enabled? true
                                ::rdt/per-page 20}
    ::rdt/selection             {::rdt/enabled? false}
    ::rdt/table-classes         ["ui" "table"]
    ::rdt/empty-tbody-component (fn []
                                  [:span "无检查项"])
    ::rdt/extra-header-row-component (fn []
                                       (r/with-let [checklist-step (subscribe [:checklist-step])
                                                    default-new-checklist {:type [:cdc :local]
                                                                           :title ""
                                                                           :first-cat :db-check
                                                                           :first-cat-label "DB检查"
                                                                           :second-cat :db-status
                                                                           :second-cat-label "DB状态检查"
                                                                           :execute {:script-name ""
                                                                                     :input []
                                                                                     :output {:field-path [:field]}}
                                                                           :verify {:type :eq
                                                                                    :rule-fn-extra-paras []
                                                                                    :rule-fn ""
                                                                                    :rule-description ""}
                                                                           :comply-suggestion ""
                                                                           }]
                                         [:tr [:th {:col-span 8} [sa/Button {:on-click #(run-events [[:edit-checklist (assoc default-new-checklist :step @checklist-step)] [:set-active-page :edit-checklist]])} "新建"]]]))
    ::rdt/footer-component (fn [] [:tr [:th {:col-span 8} [rdtviews/default-pagination-controls dt-id data-sub-vector]]])}])

(defn checklist-panel []
  [sa/Segment
   {:basic true}
   [panel-header "检查项管理"]
   [sa/Divider]
   [checklist-table :id [:checklist-management]]])

(defn checklist-management-page []
  [main-content-layout checklist-panel])
