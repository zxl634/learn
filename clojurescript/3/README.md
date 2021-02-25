# Test with exceptions

The goal of this project is to be able to test thrown exceptions as explained [here](https://clojure.github.io/clojure/clojure.test-api.html). Specifically, I want to be able to run a test with the form `(is (thrown? ArithmeticException (/ 1 0)))`.

- [ ] Set up project
- [ ] Make test

```console
npx create-cljs-project exception-testing && \
cat << EOF > ex
```
