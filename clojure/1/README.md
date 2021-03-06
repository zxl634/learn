# Setting up a Clojure program

Using [this guide](https://www.braveclojure.com/getting-started/) I set up a Clojure program.

```console
$ java -version
java version "14.0.1" 2020-04-14
Java(TM) SE Runtime Environment (build 14.0.1+7)
Java HotSpot(TM) 64-Bit Server VM (build 14.0.1+7, mixed mode, sharing)
```

I then install [Leiningen](https://leiningen.org/).
```console
$ wget https://raw.githubusercontent.com/technomancy/leiningen/stable/bin/lein -P ~/bin && chmod a+x ~/bin/lein && lein
```

```console
$ mkdir -p clojure/1 && cd clojure/1/ && lein new app clojure-noob && tree
Java HotSpot(TM) 64-Bit Server VM warning: Options -Xverify:none and -noverify were deprecated in JDK 13 and will likely be removed in a future release.
Generating a project called clojure-noob based on the 'app' template.
.
└── clojure-noob
    ├── CHANGELOG.md
    ├── LICENSE
    ├── README.md
    ├── doc
    │   └── intro.md
    ├── project.clj
    ├── resources
    ├── src
    │   └── clojure_noob
    │       └── core.clj
    └── test
        └── clojure_noob
            └── core_test.clj

7 directories, 7 files
```

```console
$ cat clojure-noob/src/clojure_noob/core.clj

(ns clojure-noob.core
  (:gen-class))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "I'm a litte teapot!"))
```

Having made some minor changes to [clojure-noob/src/clojure_noob/core.clj](clojure-noob/src/clojure_noob/core.clj), I now run the program:
```console
$ cd clojure-noob/ && lein run
Java HotSpot(TM) 64-Bit Server VM warning: Options -Xverify:none and -noverify were deprecated in JDK 13 and will likely be removed in a future release.
I'm a litte teapot!
```

Now I'm creating a stand-alone file:
```console
$ cd clojure-noob/ && lein uberjar
Java HotSpot(TM) 64-Bit Server VM warning: Options -Xverify:none and -noverify were deprecated in JDK 13 and will likely be removed in a future release.
Compiling clojure-noob.core
Created /Users/avr/showcases/clojure/1/clojure-noob/target/uberjar/clojure-noob-0.1.0-SNAPSHOT.jar
Created /Users/avr/showcases/clojure/1/clojure-noob/target/uberjar/clojure-noob-0.1.0-SNAPSHOT-standalone.jar
```
Trying to execute the this:
```console
$ java -jar clojure-noob/target/uberjar/clojure-noob-0.1.0-SNAPSHOT-standalone.jar
I'm a litte teapot!
```
