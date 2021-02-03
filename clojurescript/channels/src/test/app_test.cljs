(ns app-test
  (:require 
    [cljs.test :refer (deftest is)]
    [app :refer (my-go)]
    ))

(deftest a-failing-test
  (is (= 1 2)))

