(ns db-devops.pages.home
  (:require [reagent.core :as r]
            [re-frame.core :refer [subscribe]]
            [soda-ash.core :as sa]
            [db-devops.pages.common :refer [main-content-layout panel-header]]
            [db-devops.pages.upgrade :refer [choose-type-page checklist-page upgrade-page verify-page]]
            [db-devops.key-events :refer [on-enter]]
            [db-devops.routes :refer [href navigate!]]
            [db-devops.highcharts :as hc]))

(defn home-panel []
  (r/with-let [statistics (subscribe [:statistics])
               default-config (r/atom {:chart {:type :pie}
                                       :title {:text "升级情况"}
                                       :plotOptions {:pie {:dataLabels {:enable true :format "{point.name}: {point.percentage:.1f} %"}}}
                                       :series [{:name "DB2升级情况" :data [{:name "已经升级" :y 3} {:name "待升级" :y 27} {:name "其它" :y 4}]}]})]
    [sa/Segment
     {:basic true}
     [panel-header "统计"]
     [sa/Divider]
     [sa/StatisticGroup
      {:widths "three"
       :color "blue"
       :size "large"}
      [sa/Statistic
       [sa/StatisticLabel "总数"]
       [sa/StatisticValue 30]]
      [sa/Statistic
       [sa/StatisticLabel "待升级"]
       [sa/StatisticValue 3]]
      [sa/Statistic
       [sa/StatisticLabel "已升级"]
       [sa/StatisticValue 27]]]
     [sa/Divider]
     [sa/Grid
      [sa/GridRow {:columns 2}
       [sa/GridColumn
        [hc/chart-ui default-config]]
       [sa/GridColumn
        [hc/chart-ui default-config]]]]]))

(defn home-page []
  [main-content-layout home-panel])
