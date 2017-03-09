(ns om-remote.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [goog.dom :as gdom]
            [cljs.core.async :as async :refer [<! >! take! put! chan]]
            [clojure.string :as string]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [devtools.core :as devtools])
  (:import [goog Uri]
           [goog.net Jsonp]))

(enable-console-print!)
(devtools/install!)

(def base-url
  "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=")

(println "test")

(defn jsonp
  ([uri] (jsonp (chan) uri))
  ([c uri]
   (js-debugger)
   (js-debugger)
    (let [gjsonp (Jsonp. (Uri. uri))]
      (.send gjsonp nil #(put! c %))
      c)))

(defmulti read om/dispatch)

(defmethod read :search/results
  [{:keys [state ast] :as env} key {:keys [query]}]
  (js-debugger)
  (merge
    {:value (get @state key [])}
    (when-not (or (string/blank? query)
                  (< (count query) 3))
      {:search ast})))

(defn result-list [results]
  (js-debugger)
  (dom/ul #js {:key "result-lists"}
          (map #(dom/li nil %) results)))

(defn search-field [ac query]
  (dom/input
    #js {:key "search-field"
         :value query
         :onChange
         (fn [e]
           (js-debugger)
           (om/set-query! ac
                          {:params {:query (.. e -target -value)}}))}))

(defui AutoCompleter
  static om/IQueryParams
  (params [_]
    (js-debugger)
    {:query ""})
  static om/IQuery
  (query [this]
    (js-debugger)
    '[(:search/results {:query ?query})])
  Object
  (render [this]
    (js-debugger)
    (let [{:keys [search/results]} (om/props this)]
      (dom/div nil
               (dom/h2 nil "Autocompleter")
               (cond->
                 [(search-field this (:query (om/get-params this)))]
                 (not (empty? results)) (conj (result-list results)))))))

(defn search-loop [c]
  (go
    (loop [[query cb] (<! c)]
      (js-debugger)
      (let [[_ results] (<! (jsonp (str base-url query)))]
        (cb {:search/results results}))
      (recur (<! c)))))

(defn send-to-chan [c]
  (fn [{:keys [search]} cb]
    (js-debugger)
    (when search
      (let [{[search] :children} (om/query->ast search)
            query (get-in search [:params :query])]
        (put! c [query cb])))))

(def send-chan (chan))

(def reconciler
  (om/reconciler
    {:state   {:search/results []}
     :parser  (om/parser {:read read})
     :send    (send-to-chan send-chan)
     :remotes [:search]}))

(search-loop send-chan)

(om/add-root! reconciler AutoCompleter
              (gdom/getElement "app"))




