(ns db-devops.pages.create-db
  (:require [clojure.set :refer [difference rename-keys]]
            [reagent.core :as r]
            [re-frame.core :refer [dispatch subscribe]]
            [soda-ash.core :as sa]
            [db-devops.routes :refer [context-url href navigate! run-events]]
            [db-devops.datetime :as dt]
            [db-devops.pages.common :refer [validation-modal confirm-modal main-content-layout panel-header ui-input-field]]
            [db-devops.routes :refer [href navigate!]]
            [db-devops.validation :as v]
            [db-devops.widgets.task-output :refer [task-output-ui]]))


(defn create-db-form []
  (r/with-let [db-info (r/atom {})
               v-errors (r/atom nil)]
    [sa/Segment
     {:basic true}
     [sa/Form
      [sa/Segment
       [sa/Grid
        [sa/GridRow
         [sa/Header "数据库信息"]]
        [sa/GridRow {:columns 3}
         [sa/GridColumn
          [ui-input-field "机器名" db-info [:inputParams :HOSTNAME] v/validate-db-info v-errors #(swap! db-info assoc-in [:inputParams :HOSTNAME] (-> % .-target .-value))]]
         [sa/GridColumn
          [ui-input-field "用户信息" db-info [:inputParams :USERINFO] v/validate-db-info v-errors #(swap! db-info assoc-in [:inputParams :USERINFO] (-> % .-target .-value))]]
         [sa/GridColumn
          [ui-input-field "节点数" db-info [:inputParams :NODENUM] v/validate-db-info v-errors #(swap! db-info assoc-in [:inputParams :NODENUM] (-> % .-target .-value))]]]
        [sa/GridRow {:columns 3}
         [sa/GridColumn
          [ui-input-field "数据库名" db-info [:inputParams :DBNAME] v/validate-db-info v-errors #(swap! db-info assoc-in [:inputParams :DBNAME] (-> % .-target .-value))]]
         [sa/GridColumn
          [ui-input-field "DB2软件安装路径" db-info [:inputParams :DB2PATH] v/validate-db-info v-errors #(swap! db-info assoc-in [:inputParams :DB2PATH] (-> % .-target .-value))]]
         [sa/GridColumn
          [ui-input-field "数据库数据大小(GB)" db-info [:inputParams :DBDATA] v/validate-db-info v-errors #(swap! db-info assoc-in [:inputParams :DBDATA] (-> % .-target .-value))]]]
        [sa/GridRow {:columns 3}
         [sa/GridColumn
          [ui-input-field "数据库代码页" db-info [:inputParams :CODEPAGE] v/validate-db-info v-errors #(swap! db-info assoc-in [:inputParams :CODEPAGE] (-> % .-target .-value))]]
         [sa/GridColumn
          [sa/FormField
           [sa/Label "数据库版本"]
           [sa/Dropdown
            {:selection true
             :placeholder "请选择数据库版本"
             :default-value (get-in @db-info [:inputParams :DB2VER])
             :on-change #(swap! db-info assoc-in [:inputParams :DB2VER] (-> %2 .-value))
             :options [{:key "9.5" :text "9.5" :value "9.5"} {:key "9.7" :text "9.7" :value "9.7"} {:key "10.5" :text "10.5" :value "10.5"}]}]]]
         [sa/GridColumn
          [sa/FormField
           [sa/Label "是否检查"]
           [sa/Dropdown
            {:selection true
             :placeholder "请选择"
             :default-value (get-in @db-info [:inputParams :CHECK])
             :on-change #(swap! db-info assoc-in [:inputParams :CHECK] (-> %2 .-value))
             :options [{:key "YES" :text "YES" :value "YES"} {:key "NO" :text "NO" :value "NO"}]}]]]]
        [sa/GridRow {:columns 3}
         [sa/GridColumn
          [ui-input-field "磁盘名" db-info [:inputParams :DISKLIST] v/validate-db-info v-errors #(swap! db-info assoc-in [:inputParams :DISKLIST] (-> % .-target .-value))]]
         [sa/GridColumn
          [ui-input-field "ItilID" db-info [:inputParams :ItilID] v/validate-db-info v-errors #(swap! db-info assoc-in [:inputParams :ItilID] (-> % .-target .-value))]]]
        [sa/GridRow {:columns 3}
         [sa/FormField
          [sa/Label "任务"]
          [sa/Checkbox
           {:label "SYS"
            :checked (boolean (get-in @db-info [:inputParams :SYS]))
            :on-change #(swap! db-info update-in [:inputParams :SYS] not)}]
          [sa/Checkbox
           {:label "FS"
            :checked (boolean (get-in @db-info [:inputParams :FS]))
            :on-change #(swap! db-info update-in [:inputParams :FS] not)}]
          [sa/Checkbox
           {:label "USER"
            :checked (boolean (get-in @db-info [:inputParams :USER]))
            :on-change #(swap! db-info update-in [:inputParams :USER] not)}]
          [sa/Checkbox
           {:label "INST"
            :checked (boolean (get-in @db-info [:inputParams :INST]))
            :on-change #(swap! db-info update-in [:inputParams :INST] not)}]
          [sa/Checkbox
           {:label "DBM"
            :checked (boolean (get-in @db-info [:inputParams :DBM]))
            :on-change #(swap! db-info update-in [:inputParams :DBM] not)}]
          [sa/Checkbox
           {:label "DB"
            :checked (boolean (get-in @db-info [:inputParams :DB]))
            :on-change #(swap! db-info update-in [:inputParams :DB] not)}]]]
        [sa/GridRow
         [sa/GridColumn
          [task-output-ui [] [:task-output]]]]]]]
     [sa/Divider]
     [sa/ButtonGroup
      {:floated "left"}
      [sa/Button
       {:on-click #(run-events [[:stop-output-poller :CreateDB] [:reset-task-output] [:set-active-page :home]])} "关闭"]]
     [sa/ButtonGroup
      {:floated "right"}
      [sa/Button
       {:disabled (or (nil? @v-errors) (not-every? nil? (vals @v-errors)))
        :on-click #(do (swap! db-info update-in [:inputParams :NODENUM] js/parseInt) (reset! v-errors nil) (run-events [[:submit-operation :CreateDB  @db-info]]))} "创建"]]]))

(defn create-db-panel []
  [sa/Segment
   {:basic true}
   [panel-header "创建数据库"]
   [sa/Divider]
   [create-db-form]])

(defn create-db-page []
  [main-content-layout create-db-panel])
