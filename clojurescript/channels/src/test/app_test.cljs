(ns app-test
  (:require 
    [cljs.test :refer (deftest is)]
    [app :refer (my-go)]
    [cljs.core.async :refer [go]]
    ))

(deftest a-failing-test
  (is (= 1 2)))

(deftest go-test
  (is (instance? cljs.core.async.impl.channels.ManyToManyChannel (my-go)))
  )

