(ns app
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    [clojure.core.async :as async :refer [take!]]
    ))

(defn my-go []
  (go (println "Hello Processes!"))
  )

(defn test-async
  "Asynchronous test awaiting ch to produce a value or close."
  [ch] (async done (take! ch (fn [_] (done)))))
