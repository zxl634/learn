#!/usr/bin/env bash

# set -e # Exit immediately if a command exits with a non-zero status.

PROJECT_NAME=exception-testing
__dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

function create-project () {
  npx create-cljs-project "$PROJECT_NAME"
  tree "$PROJECT_NAME"/src/ 
}

function clean-project () {
  cd "$__dir"
  rm -rf "$PROJECT_NAME"
}

function make-demo-dir-and-files () {
  cd "$PROJECT_NAME"/src/main/
  mkdir demo && cd demo && touch app.cljs
  cat << EOF > app.cljs
(ns demo.app)

(defn init []
  (println "Hello World"))
EOF
  cat app.cljs
  mkdir ../../test/demo && cd ../../test/demo
  cat << EOF > app_test.cljs
(ns demo.app-test
  (:require [cljs.test :refer (deftest is)]))

(deftest a-failing-test
  (is (= 1 2)))
EOF
}

function edit-edn () {
  cd "$__dir"/"$PROJECT_NAME"
  cat << EOF > shadow-cljs.edn
;; shadow-cljs configuration
{:source-paths
 ["src/dev"
  "src/main"
  "src/test"]

 :dependencies
 []
 :dev-http {8080 "public"}
 :builds
 {:test
  {:target    :node-test
   :output-to "out/node-tests.js"
   :ns-regexp "demo"
   :autorun   true}
 :demo
  {:target :browser
   :modules {:main {:init-fn demo.app/init}}}}}
EOF
  cat shadow-cljs.edn 
}

function run-tests () {
  cd "$__dir"/"$PROJECT_NAME" && shadow-cljs compile test && node out/node-tests.js

}

case "$1" in
  create) create-project && make-demo-dir-and-files && edit-edn && tree src/ && run-tests;;
  clean) clean-project && ls;;
  *) echo "need argument";;
esac
