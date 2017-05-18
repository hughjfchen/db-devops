(ns luminus-re-frame-app-template.core-test
  (:require [cljs.test :refer-macros [is are deftest testing use-fixtures]]
            [reagent.core :as reagent :refer [atom]]
            [luminus-re-frame-app-template.core :as rc]))

(deftest test-home
  (is (= true true)))

