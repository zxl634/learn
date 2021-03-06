# Unit testing

The goal of this post is to be able to use testing with ClojureScript as described [here](https://shadow-cljs.github.io/docs/UsersGuide.html#_testing).

## Setup basic ClojureScript

Using [this](https://github.com/thheller/shadow-cljs#quick-start):

```console
$ npx create-cljs-project unittesting
npx: installed 1 in 5.97s
shadow-cljs - creating project: /Users/anders/showcases/clojurescript/2/unittesting
Creating: /Users/anders/showcases/clojurescript/2/unittesting/package.json
Creating: /Users/anders/showcases/clojurescript/2/unittesting/shadow-cljs.edn
Creating: /Users/anders/showcases/clojurescript/2/unittesting/.gitignore
Creating: /Users/anders/showcases/clojurescript/2/unittesting/src/main
Creating: /Users/anders/showcases/clojurescript/2/unittesting/src/test
----
Installing shadow-cljs in project.

npm notice created a lockfile as package-lock.json. You should commit this file.
+ shadow-cljs@2.11.14
added 99 packages from 106 contributors and audited 99 packages in 5.114s

3 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

----
Done. Actual project initialization will follow soon.
----
```

I then create unittesting/src/main/demo/app.cljs:
```console
$ cat unittesting/src/main/demo/app.cljs
(ns demo.app)

(defn init []
  (println "Hello World"))
```

And edit unittesting/shadow-cljs.edn to add builds and targets:
```console
$ cat unittesting/shadow-cljs.edn
;; shadow-cljs configuration
{:source-paths
 ["src/dev"
  "src/main"
  "src/test"]

 :dependencies
 []

 :builds
 {:demo
  {:target :browser
   :modules {:main {:init-fn demo.app/init}}}}}
```

I add `:dev-http {8080 "public"}` to unittesting/shadow-cljs.edn to be able to serve the file and add a simple index.html in unittesting/public/.

Then I run `shadow-cljs watch demo`, which creates unittesting/public/js/main.js and can now see the page in the browser at http://localhost:8080 and the "Hello World" message in the console.

## Testing setup

I now create unittesting/src/test/demo/app_test.cljs.

Then I create another build target in unittesting/shadow-cljs.edn.

Ready to compile and run the tests:
```console
$ cd unittesting/ && shadow-cljs compile test && node out/node-tests.js

shadow-cljs - config: /Users/anders/showcases/clojurescript/2/unittesting/shadow-cljs.edn
[:test] Compiling ...
========= Running Tests =======================

Testing demo.app-test

FAIL in (a-failing-test) (demo/app_test.cljs:5:7)
expected: (= 1 2)
  actual: (not (= 1 2))

Ran 1 tests containing 1 assertions.
1 failures, 0 errors.
===============================================
[:test] Build completed. (48 files, 1 compiled, 0 warnings, 1,73s)

Testing demo.app-test

FAIL in (a-failing-test) (demo/app_test.cljs:5:7)
expected: (= 1 2)
  actual: (not (= 1 2))

Ran 1 tests containing 1 assertions.
1 failures, 0 errors.
```
