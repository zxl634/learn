(ns demo.app-test
  (:require [cljs.test :refer (deftest is)]))

(deftest a-failing-test
  (is (= 1 2)))

(deftest exception-test
  (defn some-test []
    (/ 1 0)
    )
  (some-test)
  (is (thrown? js/ArithmeticException (/ 1 0))) 
  )
