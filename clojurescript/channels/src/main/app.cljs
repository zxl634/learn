(ns app
  (:require
    [clojure.core.async :as async :refer :all]
    ))

(defn my-go []
  (go (println "Hello Processes!"))
  )

(defn test-async
  "Asynchronous test awaiting ch to produce a value or close."
  [ch] (async done (take! ch (fn [_] (done)))))
