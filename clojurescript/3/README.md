# Test with exceptions

The goal of this project is to be able to test thrown exceptions as explained [here](https://clojure.github.io/clojure/clojure.test-api.html). Specifically, I want to be able to run a test with the form `(is (thrown? ArithmeticException (/ 1 0)))`.

- [x] Set up project (run `source setup.sh create`)
- [x] Make test (see exception-testing/src/test/demo/app_test.cljs)

Run tests with `source setup.sh run-tests`

Question on SO: https://stackoverflow.com/questions/66367576/how-to-import-exception-for-use-in-clojure-test

