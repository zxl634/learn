# Unit testing

Using [https://github.com/thheller/shadow-cljs#quick-start](https://github.com/thheller/shadow-cljs#quick-start):
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

I then create unittesting/src/main/demo/app.cljs and edit unittesting/shadow-cljs.edn to add  builds and targets. 

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

Then I run `shadow-cljs watch demo`.
