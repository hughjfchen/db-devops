(ns db-devops.widgets.input-params-table
  (:require [cuerdas.core :as string]
            [reagent.core :as r]
            [re-frame.core :refer [dispatch subscribe]]
            [soda-ash.core :as sa]))

;; define a function to delete from a vector at a specified position
(defn delete-element [vc pos]
  (vec (concat
        (subvec vc 0 pos)
        (subvec vc (inc pos)))))

;; helper method
(defn get-index-by-key [vec key-fn key]
  (let [table-with-i (map-indexed vector vec)]
    (some #(when (= key (key-fn %)) (first %)) table-with-i)))
(defn remove-record-by-key! [vec key-fn key] (->> key
                                                  (get-index-by-key vec key-fn)
                                                  (delete-element vec)))


(defn input-params-table-ui
  ([data-atom additional-columns row-delete-button? options]
   (when-let [inputs (map-indexed vector @data-atom)]
     (let [table-spec (into [["源主机名" :SRCHOSTNAME] ["源实例名" :SRCINSTANCENAME] ["源库" :SRCDBNAME] ["目标主机名" :TGHOSTNAME] ["目标实例" :TGINSTANCENAME] ["目标库" :TGDBNAME]] additional-columns)
           key-fn (fn [x] (apply str (map #((second %) x)) table-spec))
           v-errors (r/atom nil)]
       [sa/Table (merge {:celled true :size "small"} options)
        [sa/TableHeader
         (into [sa/TableRow]
               (if row-delete-button?
                 (concat (map (fn [y] [sa/TableHeaderCell (first y)]) table-spec) (list [sa/TableHeaderCell "操作"]))
                 (map (fn [y] [sa/TableHeaderCell (first y)]) table-spec)))]
        [sa/TableBody
         (for [input inputs]
           (into ^{:key (key-fn (second input))}[sa/TableRow]
                 (if row-delete-button? (concat (map (fn [y] [sa/TableCell (if (keyword? (second y))  ((second y) (second input)) ((second y) (r/cursor data-atom [(first input)]) v-errors))]) table-spec) (list [sa/TableCell
                                                                                                                                                          [sa/Button {:icon true
                                                                                                                                                                      :on-click #(swap! data-atom delete-element (first input))}
                                                                                                                                                           [sa/Icon {:name "minus"}]]]))
                     (map (fn [y] [sa/TableCell (if (keyword? (second y))  ((second y) (second input)) ((second y) (r/cursor data-atom [(first input)]) v-errors))]) table-spec))))]])))
  ([data-atom additional-columns row-delete-button?]
   (input-params-table-ui data-atom additional-columns row-delete-button? {})))
