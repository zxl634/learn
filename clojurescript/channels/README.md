# Learn about channels in ClojureScript

The goal is to be able to test async actions as described [here](https://stackoverflow.com/questions/30766215/how-do-i-unit-test-clojure-core-async-go-macros).

## Tasks

- [x] Set up testing, see [here](../2/README.md).

## Commands

* Start testing: `shadow-cljs watch test`
* Start server: `shadow-cljs server` (start in background with `&`)
* Repl: `shadow-cljs cljs-repl app` and then `(ns app)`.

## Theory

### https://www.learn-clojurescript.com/section-4/lesson-25-intro-to-core-async/
* ClojureScript's library for concurrency `core.async` is based on CSP, which stands for Communicating Sequential Processes
* The idea behind CSP is that there are a number of independent processes that each execute their own ordered steps.
* These processes can communicate with each other by sending or receiving messages over channels.
* When a process wants to read a message from a channel, it blocks until a message is available. it then consumes the message and moves on.
* A `go` macro creates a new process
* `chan` creates a channel
* `<!` and `>!` takes and puts messages (the end of the funnel is towards the exclamation mark when taking; the exclamation mark uses the funnul to communicate something when putting)
* a channel can only convey a single value by default
* Buffers can be used to hold values that have not been taken out of the channel

* How do processes send messages?

