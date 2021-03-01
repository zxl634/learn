(ns demo.app-test
  (:require [cljs.test :refer (deftest is)]))

(deftest a-failing-test
  (is (= 1 2)))

(deftest exception-test
  (try
    (throw (js/Error))
    (catch :default e
      (is (instance? js/Error e))
      )))
