(ns app-test
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require 
    [cljs.test :refer (deftest is)]
    [app :refer (my-go test-async)]
    [clojure.core.async :as async :refer [>! chan]]
    ))

(deftest a-failing-test
  (is (= 1 2)))

(deftest go-test
  (is (instance? cljs.core.async.impl.channels.ManyToManyChannel (my-go)))
  )

(deftest test1
  (let [ch (chan)]
    (go (>! ch "Hello"))
    (test-async
      (go (is (= "Hello" (<! ch)))))))

