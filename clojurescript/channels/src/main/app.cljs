(ns app
  (:require
    [cljs.core.async :refer [go]]
    )
  )

(defn my-go []
  (go (println "Hello Processes!"))
  )

