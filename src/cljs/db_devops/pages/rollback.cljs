(ns db-devops.pages.rollback
  (:require [clojure.set :refer [difference rename-keys]]
            [reagent.core :as r]
            [re-frame.core :refer [dispatch subscribe]]
            [soda-ash.core :as sa]
            [db-devops.routes :refer [context-url href navigate! run-events]]
            [db-devops.datetime :as dt]
            [db-devops.pages.common :refer [validation-modal confirm-modal main-content-layout panel-header]]
            [db-devops.routes :refer [href navigate!]]
            [db-devops.validation :as v]))

(defn cdc-rollback-table []
  (fn []
    [sa/TabPane
     [sa/Table
      [sa/TableHeader
       [sa/TableRow
        [sa/TableHeaderCell "编号"]
        [sa/TableHeaderCell "实施内容"]
        [sa/TableHeaderCell "负责人员"]]]
      [sa/TableBody
       [sa/TableRow
        [sa/TableCell "1"]
        [sa/TableCell "回收新库应用用户的connect权限"]
        [sa/TableCell "数据库工程师"]]
       [sa/TableRow
        [sa/TableCell "2"]
        [sa/TableCell "放开原库应用用户的connect权限"]
        [sa/TableCell "数据库工程师"]]
       [sa/TableRow
        [sa/TableCell "3"]
        [sa/TableCell "断开新库所有应用连接"]
        [sa/TableCell "数据库工程师"]]
       [sa/TableRow
        [sa/TableCell "4"]
        [sa/TableCell "业务切换"]
        [sa/TableCell "应用开发工程师"]]
       [sa/TableRow
        [sa/TableCell "5"]
        [sa/TableCell "业务验证"]
        [sa/TableCell "应用开发工程师"]]
       [sa/TableRow
        [sa/TableCell "6"]
        [sa/TableCell "原库运行状况检查、连接数比对"]
        [sa/TableCell "数据库工程师"]]
       [sa/TableRow
        [sa/TableCell "7"]
        [sa/TableCell "Windows系统检查"]
        [sa/TableCell "系统工程师"]]
       [sa/TableRow
        [sa/TableCell "8"]
        [sa/TableCell "网络检查"]
        [sa/TableCell "系统工程师"]]]]]))

(defn local-version-rollback-table []
  (fn []
    [sa/TabPane
     [sa/Table
      [sa/TableHeader
       [sa/TableRow
        [sa/TableHeaderCell "序号"]
        [sa/TableHeaderCell "实施步骤"]
        [sa/TableHeaderCell "实施内容及命令"]
        [sa/TableHeaderCell "操作人员"]]]
      [sa/TableBody
       [sa/TableRow
        [sa/TableCell "1"]
        [sa/TableCell "停止应用"]
        [sa/TableCell "停止应用"]
        [sa/TableCell "应用开发工程师"]]
       [sa/TableRow
        [sa/TableCell "2"]
        [sa/TableCell "停实例"]
        [sa/TableCell
         [:pre "su - <instname>;
db2 force applications all;
db2stop force;
ipclean;"]]
        [sa/TableCell "数据库工程师"]]
       [sa/TableRow
        [sa/TableCell "3"]
        [sa/TableCell "删除数据库"]
        [sa/TableCell
         [:pre "su - <instname>;
db2 deactivate db <dbname>;
db2 drop db <dbname>;"]]
        [sa/TableCell "数据库工程师"]]
       [sa/TableRow
        [sa/TableCell "4"]
        [sa/TableCell "删除新实例"]
        [sa/TableCell [:pre "/opt/IBM/db2/V9.7/instance/db2idrop <instname>"]]
        [sa/TableCell "数据库工程师"]]
       [sa/TableRow
        [sa/TableCell "5"]
        [sa/TableCell "新建旧版本实例"]
        [sa/TableCell [:pre "/opt/IBM/db2/V10.5/instance/db2icrt -u <fencname> <instname>"]]
        [sa/TableCell "数据库工程师"]]
       [sa/TableRow
        [sa/TableCell "6"]
        [sa/TableCell "db2set参数"]
        [sa/TableCell [:pre "su - <instname>;
将备份的db2set参数进行设置
db2set <parameter>=<value>"]]
        [sa/TableCell "数据库工程师"]]
       [sa/TableRow
        [sa/TableCell "7"]
        [sa/TableCell "dbm参数"]
        [sa/TableCell [:pre "su - <instname>;
将备份的dbm参数进行设置；
db2 update dbm cfg using <parameter> <value>"]]
        [sa/TableCell "数据库工程师"]]
       [sa/TableRow
        [sa/TableCell "8"]
        [sa/TableCell "恢复数据库"]
        [sa/TableCell [:pre "su - <instname>;
db2 restore db <dbname> from <path> taken at <timestamp>"]]
        [sa/TableCell "数据库工程师"]]
       [sa/TableRow
        [sa/TableCell "9"]
        [sa/TableCell "重绑定包"]
        [sa/TableCell [:pre "su - <instname>;
cd ~/sqllib/bnd
db2 bind db2schema.bnd BLOCKING ALL GRANT PUBLIC SQLERROR CONTINUE
db2 bind @db2ubind.lst BLOCKING ALL GRANT PUBLIC ACTION REPLACE
db2 bind @db2cli.lst BLOCKING ALL GRANT PUBLIC ACTION REPLACE
db2rbind <dbname>  all -l /tmp/db2rbind.out"]]
        [sa/TableCell "数据库工程师"]]
       [sa/TableRow
        [sa/TableCell "10"]
        [sa/TableCell "启动实例"]
        [sa/TableCell [:pre "su - <instname>;db2start"]]
        [sa/TableCell "数据库工程师"]]
       [sa/TableRow
        [sa/TableCell "11"]
        [sa/TableCell "连接数据库"]
        [sa/TableCell [:pre "su - <instname>;db2 activate db <dbname>;db2 connect to <dbname>"]]
        [sa/TableCell "数据库工程师"]]
       [sa/TableRow
        [sa/TableCell "12"]
        [sa/TableCell "启动应用"]
        [sa/TableCell "启动应用"]
        [sa/TableCell "应用开发工程师"]]
       [sa/TableRow
        [sa/TableCell "13"]
        [sa/TableCell "应用验证"]
        [sa/TableCell "应用验证"]
        [sa/TableCell "应用开发工程师"]]]]]))

(defn local-fixpack-rollback-table []
  (fn []
    [sa/TabPane
     [sa/Table
      [sa/TableHeader
       [sa/TableRow
        [sa/TableHeaderCell "序号"]
        [sa/TableHeaderCell "实施步骤"]
        [sa/TableHeaderCell "实施内容及命令"]
        [sa/TableHeaderCell "操作人员"]]]
      [sa/TableBody
       [sa/TableRow
        [sa/TableCell "1"]
        [sa/TableCell "停止应用"]
        [sa/TableCell "停止应用"]
        [sa/TableCell "应用开发工程师"]]
       [sa/TableRow
        [sa/TableCell "2"]
        [sa/TableCell "停止实例"]
        [sa/TableCell [:pre "su - <instname>;
db2 force applications all;
db2stop force;
ipclean;"]]
        [sa/TableCell "数据库工程师"]]
       [sa/TableRow
        [sa/TableCell "3"]
        [sa/TableCell "重建实例"]
        [sa/TableCell [:pre "作为 root 用户登录 DB2 服务器
在旧的补丁包安装程序下运行db2iupdt <instname> -f level"]]
        [sa/TableCell "数据库工程师"]]
       [sa/TableRow
        [sa/TableCell "4"]
        [sa/TableCell "重绑定包"]
        [sa/TableCell [:pre "su - <instname>;
cd ~/sqllib/bnd
db2 bind db2schema.bnd BLOCKING ALL GRANT PUBLIC SQLERROR CONTINUE
db2 bind @db2ubind.lst BLOCKING ALL GRANT PUBLIC ACTION REPLACE
db2 bind @db2cli.lst BLOCKING ALL GRANT PUBLIC ACTION REPLACE
db2rbind <dbname>  all -l /tmp/db2rbind.out"]]
        [sa/TableCell "数据库工程师"]]
       [sa/TableRow
        [sa/TableCell "5"]
        [sa/TableCell "启动实例"]
        [sa/TableCell [:pre "su - <instname>;db2start"]]
        [sa/TableCell "数据库工程师"]]
       [sa/TableRow
        [sa/TableCell "6"]
        [sa/TableCell "连接数据库"]
        [sa/TableCell [:pre "su - <instname>;db2 activate db <dbname>;db2 connect to <dbname>"]]
        [sa/TableCell "数据库工程师"]]
       [sa/TableRow
        [sa/TableCell "7"]
        [sa/TableCell "启动应用"]
        [sa/TableCell "启动应用"]
        [sa/TableCell "应用开发工程师"]]
       [sa/TableRow
        [sa/TableCell "8"]
        [sa/TableCell "应用验证"]
        [sa/TableCell "应用验证"]
        [sa/TableCell "应用开发工程师"]]]]]))

(defn rollback-panel []
  [sa/Segment
   {:basic true}
   [panel-header "回退方案"]
   [sa/Divider]
   [sa/Tab
    {:renderActiveOnly false
     :panes [{:menuItem "CDC升级回退方案" :pane (r/as-component [sa/TabPane {:key "cdc-rollback"} [cdc-rollback-table]])}
             {:menuItem "本地大版本升级回退方案" :pane (r/as-component [sa/TabPane {:key "local-version-rollback"} [local-version-rollback-table]])}
             {:menuItem "本地小补丁升级回退方案" :pane (r/as-component [sa/TabPane {:key "local-fixpack-rollback"} [local-fixpack-rollback-table]])}]}]])

(defn rollback-page []
  [main-content-layout rollback-panel])
