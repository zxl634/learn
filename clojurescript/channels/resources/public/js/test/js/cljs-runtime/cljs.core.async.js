goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30003 = arguments.length;
switch (G__30003) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30006 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30006 = (function (f,blockable,meta30007){
this.f = f;
this.blockable = blockable;
this.meta30007 = meta30007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30008,meta30007__$1){
var self__ = this;
var _30008__$1 = this;
return (new cljs.core.async.t_cljs$core$async30006(self__.f,self__.blockable,meta30007__$1));
}));

(cljs.core.async.t_cljs$core$async30006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30008){
var self__ = this;
var _30008__$1 = this;
return self__.meta30007;
}));

(cljs.core.async.t_cljs$core$async30006.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30006.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30006.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30006.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30006.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30007","meta30007",1815563805,null)], null);
}));

(cljs.core.async.t_cljs$core$async30006.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30006.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30006");

(cljs.core.async.t_cljs$core$async30006.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30006");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30006.
 */
cljs.core.async.__GT_t_cljs$core$async30006 = (function cljs$core$async$__GT_t_cljs$core$async30006(f__$1,blockable__$1,meta30007){
return (new cljs.core.async.t_cljs$core$async30006(f__$1,blockable__$1,meta30007));
});

}

return (new cljs.core.async.t_cljs$core$async30006(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30028 = arguments.length;
switch (G__30028) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30039 = arguments.length;
switch (G__30039) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30049 = arguments.length;
switch (G__30049) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32723 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32723) : fn1.call(null,val_32723));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32723) : fn1.call(null,val_32723));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30060 = arguments.length;
switch (G__30060) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___32734 = n;
var x_32735 = (0);
while(true){
if((x_32735 < n__4613__auto___32734)){
(a[x_32735] = x_32735);

var G__32736 = (x_32735 + (1));
x_32735 = G__32736;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30099 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30099 = (function (flag,meta30100){
this.flag = flag;
this.meta30100 = meta30100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30101,meta30100__$1){
var self__ = this;
var _30101__$1 = this;
return (new cljs.core.async.t_cljs$core$async30099(self__.flag,meta30100__$1));
}));

(cljs.core.async.t_cljs$core$async30099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30101){
var self__ = this;
var _30101__$1 = this;
return self__.meta30100;
}));

(cljs.core.async.t_cljs$core$async30099.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30099.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30099.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30099.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30100","meta30100",-1829523143,null)], null);
}));

(cljs.core.async.t_cljs$core$async30099.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30099.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30099");

(cljs.core.async.t_cljs$core$async30099.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30099");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30099.
 */
cljs.core.async.__GT_t_cljs$core$async30099 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30099(flag__$1,meta30100){
return (new cljs.core.async.t_cljs$core$async30099(flag__$1,meta30100));
});

}

return (new cljs.core.async.t_cljs$core$async30099(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30118 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30118 = (function (flag,cb,meta30119){
this.flag = flag;
this.cb = cb;
this.meta30119 = meta30119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30120,meta30119__$1){
var self__ = this;
var _30120__$1 = this;
return (new cljs.core.async.t_cljs$core$async30118(self__.flag,self__.cb,meta30119__$1));
}));

(cljs.core.async.t_cljs$core$async30118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30120){
var self__ = this;
var _30120__$1 = this;
return self__.meta30119;
}));

(cljs.core.async.t_cljs$core$async30118.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30118.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30118.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30118.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30118.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30119","meta30119",378297151,null)], null);
}));

(cljs.core.async.t_cljs$core$async30118.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30118");

(cljs.core.async.t_cljs$core$async30118.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30118");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30118.
 */
cljs.core.async.__GT_t_cljs$core$async30118 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30118(flag__$1,cb__$1,meta30119){
return (new cljs.core.async.t_cljs$core$async30118(flag__$1,cb__$1,meta30119));
});

}

return (new cljs.core.async.t_cljs$core$async30118(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30142_SHARP_){
var G__30166 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30142_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30166) : fret.call(null,G__30166));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30143_SHARP_){
var G__30168 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30143_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30168) : fret.call(null,G__30168));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32751 = (i + (1));
i = G__32751;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___32752 = arguments.length;
var i__4737__auto___32753 = (0);
while(true){
if((i__4737__auto___32753 < len__4736__auto___32752)){
args__4742__auto__.push((arguments[i__4737__auto___32753]));

var G__32757 = (i__4737__auto___32753 + (1));
i__4737__auto___32753 = G__32757;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30180){
var map__30184 = p__30180;
var map__30184__$1 = (((((!((map__30184 == null))))?(((((map__30184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30184):map__30184);
var opts = map__30184__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30175){
var G__30176 = cljs.core.first(seq30175);
var seq30175__$1 = cljs.core.next(seq30175);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30176,seq30175__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30217 = arguments.length;
switch (G__30217) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29897__auto___32763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29898__auto__ = (function (){var switch__29712__auto__ = (function (state_30278){
var state_val_30279 = (state_30278[(1)]);
if((state_val_30279 === (7))){
var inst_30270 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
var statearr_30286_32765 = state_30278__$1;
(statearr_30286_32765[(2)] = inst_30270);

(statearr_30286_32765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (1))){
var state_30278__$1 = state_30278;
var statearr_30287_32766 = state_30278__$1;
(statearr_30287_32766[(2)] = null);

(statearr_30287_32766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (4))){
var inst_30249 = (state_30278[(7)]);
var inst_30249__$1 = (state_30278[(2)]);
var inst_30250 = (inst_30249__$1 == null);
var state_30278__$1 = (function (){var statearr_30288 = state_30278;
(statearr_30288[(7)] = inst_30249__$1);

return statearr_30288;
})();
if(cljs.core.truth_(inst_30250)){
var statearr_30292_32768 = state_30278__$1;
(statearr_30292_32768[(1)] = (5));

} else {
var statearr_30293_32769 = state_30278__$1;
(statearr_30293_32769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (13))){
var state_30278__$1 = state_30278;
var statearr_30294_32770 = state_30278__$1;
(statearr_30294_32770[(2)] = null);

(statearr_30294_32770[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (6))){
var inst_30249 = (state_30278[(7)]);
var state_30278__$1 = state_30278;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30278__$1,(11),to,inst_30249);
} else {
if((state_val_30279 === (3))){
var inst_30272 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30278__$1,inst_30272);
} else {
if((state_val_30279 === (12))){
var state_30278__$1 = state_30278;
var statearr_30297_32772 = state_30278__$1;
(statearr_30297_32772[(2)] = null);

(statearr_30297_32772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (2))){
var state_30278__$1 = state_30278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30278__$1,(4),from);
} else {
if((state_val_30279 === (11))){
var inst_30263 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
if(cljs.core.truth_(inst_30263)){
var statearr_30298_32773 = state_30278__$1;
(statearr_30298_32773[(1)] = (12));

} else {
var statearr_30299_32774 = state_30278__$1;
(statearr_30299_32774[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (9))){
var state_30278__$1 = state_30278;
var statearr_30301_32775 = state_30278__$1;
(statearr_30301_32775[(2)] = null);

(statearr_30301_32775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (5))){
var state_30278__$1 = state_30278;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30304_32776 = state_30278__$1;
(statearr_30304_32776[(1)] = (8));

} else {
var statearr_30306_32777 = state_30278__$1;
(statearr_30306_32777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (14))){
var inst_30268 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
var statearr_30307_32780 = state_30278__$1;
(statearr_30307_32780[(2)] = inst_30268);

(statearr_30307_32780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (10))){
var inst_30260 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
var statearr_30310_32786 = state_30278__$1;
(statearr_30310_32786[(2)] = inst_30260);

(statearr_30310_32786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (8))){
var inst_30256 = cljs.core.async.close_BANG_(to);
var state_30278__$1 = state_30278;
var statearr_30311_32789 = state_30278__$1;
(statearr_30311_32789[(2)] = inst_30256);

(statearr_30311_32789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29713__auto__ = null;
var cljs$core$async$state_machine__29713__auto____0 = (function (){
var statearr_30313 = [null,null,null,null,null,null,null,null];
(statearr_30313[(0)] = cljs$core$async$state_machine__29713__auto__);

(statearr_30313[(1)] = (1));

return statearr_30313;
});
var cljs$core$async$state_machine__29713__auto____1 = (function (state_30278){
while(true){
var ret_value__29714__auto__ = (function (){try{while(true){
var result__29715__auto__ = switch__29712__auto__(state_30278);
if(cljs.core.keyword_identical_QMARK_(result__29715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29715__auto__;
}
break;
}
}catch (e30315){var ex__29716__auto__ = e30315;
var statearr_30316_32790 = state_30278;
(statearr_30316_32790[(2)] = ex__29716__auto__);


if(cljs.core.seq((state_30278[(4)]))){
var statearr_30318_32791 = state_30278;
(statearr_30318_32791[(1)] = cljs.core.first((state_30278[(4)])));

} else {
throw ex__29716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32792 = state_30278;
state_30278 = G__32792;
continue;
} else {
return ret_value__29714__auto__;
}
break;
}
});
cljs$core$async$state_machine__29713__auto__ = function(state_30278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29713__auto____1.call(this,state_30278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29713__auto____0;
cljs$core$async$state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29713__auto____1;
return cljs$core$async$state_machine__29713__auto__;
})()
})();
var state__29899__auto__ = (function (){var statearr_30319 = f__29898__auto__();
(statearr_30319[(6)] = c__29897__auto___32763);

return statearr_30319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29899__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30328){
var vec__30329 = p__30328;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30329,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30329,(1),null);
var job = vec__30329;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29897__auto___32793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29898__auto__ = (function (){var switch__29712__auto__ = (function (state_30336){
var state_val_30337 = (state_30336[(1)]);
if((state_val_30337 === (1))){
var state_30336__$1 = state_30336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30336__$1,(2),res,v);
} else {
if((state_val_30337 === (2))){
var inst_30333 = (state_30336[(2)]);
var inst_30334 = cljs.core.async.close_BANG_(res);
var state_30336__$1 = (function (){var statearr_30340 = state_30336;
(statearr_30340[(7)] = inst_30333);

return statearr_30340;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30336__$1,inst_30334);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____0 = (function (){
var statearr_30342 = [null,null,null,null,null,null,null,null];
(statearr_30342[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__);

(statearr_30342[(1)] = (1));

return statearr_30342;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____1 = (function (state_30336){
while(true){
var ret_value__29714__auto__ = (function (){try{while(true){
var result__29715__auto__ = switch__29712__auto__(state_30336);
if(cljs.core.keyword_identical_QMARK_(result__29715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29715__auto__;
}
break;
}
}catch (e30343){var ex__29716__auto__ = e30343;
var statearr_30344_32796 = state_30336;
(statearr_30344_32796[(2)] = ex__29716__auto__);


if(cljs.core.seq((state_30336[(4)]))){
var statearr_30346_32797 = state_30336;
(statearr_30346_32797[(1)] = cljs.core.first((state_30336[(4)])));

} else {
throw ex__29716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32798 = state_30336;
state_30336 = G__32798;
continue;
} else {
return ret_value__29714__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__ = function(state_30336){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____1.call(this,state_30336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__;
})()
})();
var state__29899__auto__ = (function (){var statearr_30353 = f__29898__auto__();
(statearr_30353[(6)] = c__29897__auto___32793);

return statearr_30353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29899__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30354){
var vec__30355 = p__30354;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30355,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30355,(1),null);
var job = vec__30355;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___32803 = n;
var __32804 = (0);
while(true){
if((__32804 < n__4613__auto___32803)){
var G__30362_32805 = type;
var G__30362_32806__$1 = (((G__30362_32805 instanceof cljs.core.Keyword))?G__30362_32805.fqn:null);
switch (G__30362_32806__$1) {
case "compute":
var c__29897__auto___32811 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32804,c__29897__auto___32811,G__30362_32805,G__30362_32806__$1,n__4613__auto___32803,jobs,results,process,async){
return (function (){
var f__29898__auto__ = (function (){var switch__29712__auto__ = ((function (__32804,c__29897__auto___32811,G__30362_32805,G__30362_32806__$1,n__4613__auto___32803,jobs,results,process,async){
return (function (state_30377){
var state_val_30378 = (state_30377[(1)]);
if((state_val_30378 === (1))){
var state_30377__$1 = state_30377;
var statearr_30379_32815 = state_30377__$1;
(statearr_30379_32815[(2)] = null);

(statearr_30379_32815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (2))){
var state_30377__$1 = state_30377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30377__$1,(4),jobs);
} else {
if((state_val_30378 === (3))){
var inst_30375 = (state_30377[(2)]);
var state_30377__$1 = state_30377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30377__$1,inst_30375);
} else {
if((state_val_30378 === (4))){
var inst_30367 = (state_30377[(2)]);
var inst_30368 = process(inst_30367);
var state_30377__$1 = state_30377;
if(cljs.core.truth_(inst_30368)){
var statearr_30380_32819 = state_30377__$1;
(statearr_30380_32819[(1)] = (5));

} else {
var statearr_30381_32820 = state_30377__$1;
(statearr_30381_32820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (5))){
var state_30377__$1 = state_30377;
var statearr_30382_32821 = state_30377__$1;
(statearr_30382_32821[(2)] = null);

(statearr_30382_32821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (6))){
var state_30377__$1 = state_30377;
var statearr_30383_32825 = state_30377__$1;
(statearr_30383_32825[(2)] = null);

(statearr_30383_32825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30378 === (7))){
var inst_30373 = (state_30377[(2)]);
var state_30377__$1 = state_30377;
var statearr_30384_32826 = state_30377__$1;
(statearr_30384_32826[(2)] = inst_30373);

(statearr_30384_32826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32804,c__29897__auto___32811,G__30362_32805,G__30362_32806__$1,n__4613__auto___32803,jobs,results,process,async))
;
return ((function (__32804,switch__29712__auto__,c__29897__auto___32811,G__30362_32805,G__30362_32806__$1,n__4613__auto___32803,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____0 = (function (){
var statearr_30385 = [null,null,null,null,null,null,null];
(statearr_30385[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__);

(statearr_30385[(1)] = (1));

return statearr_30385;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____1 = (function (state_30377){
while(true){
var ret_value__29714__auto__ = (function (){try{while(true){
var result__29715__auto__ = switch__29712__auto__(state_30377);
if(cljs.core.keyword_identical_QMARK_(result__29715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29715__auto__;
}
break;
}
}catch (e30386){var ex__29716__auto__ = e30386;
var statearr_30387_32834 = state_30377;
(statearr_30387_32834[(2)] = ex__29716__auto__);


if(cljs.core.seq((state_30377[(4)]))){
var statearr_30388_32835 = state_30377;
(statearr_30388_32835[(1)] = cljs.core.first((state_30377[(4)])));

} else {
throw ex__29716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32836 = state_30377;
state_30377 = G__32836;
continue;
} else {
return ret_value__29714__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__ = function(state_30377){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____1.call(this,state_30377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__;
})()
;})(__32804,switch__29712__auto__,c__29897__auto___32811,G__30362_32805,G__30362_32806__$1,n__4613__auto___32803,jobs,results,process,async))
})();
var state__29899__auto__ = (function (){var statearr_30391 = f__29898__auto__();
(statearr_30391[(6)] = c__29897__auto___32811);

return statearr_30391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29899__auto__);
});})(__32804,c__29897__auto___32811,G__30362_32805,G__30362_32806__$1,n__4613__auto___32803,jobs,results,process,async))
);


break;
case "async":
var c__29897__auto___32844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32804,c__29897__auto___32844,G__30362_32805,G__30362_32806__$1,n__4613__auto___32803,jobs,results,process,async){
return (function (){
var f__29898__auto__ = (function (){var switch__29712__auto__ = ((function (__32804,c__29897__auto___32844,G__30362_32805,G__30362_32806__$1,n__4613__auto___32803,jobs,results,process,async){
return (function (state_30404){
var state_val_30405 = (state_30404[(1)]);
if((state_val_30405 === (1))){
var state_30404__$1 = state_30404;
var statearr_30406_32848 = state_30404__$1;
(statearr_30406_32848[(2)] = null);

(statearr_30406_32848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30405 === (2))){
var state_30404__$1 = state_30404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30404__$1,(4),jobs);
} else {
if((state_val_30405 === (3))){
var inst_30402 = (state_30404[(2)]);
var state_30404__$1 = state_30404;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30404__$1,inst_30402);
} else {
if((state_val_30405 === (4))){
var inst_30394 = (state_30404[(2)]);
var inst_30395 = async(inst_30394);
var state_30404__$1 = state_30404;
if(cljs.core.truth_(inst_30395)){
var statearr_30408_32852 = state_30404__$1;
(statearr_30408_32852[(1)] = (5));

} else {
var statearr_30409_32853 = state_30404__$1;
(statearr_30409_32853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30405 === (5))){
var state_30404__$1 = state_30404;
var statearr_30410_32854 = state_30404__$1;
(statearr_30410_32854[(2)] = null);

(statearr_30410_32854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30405 === (6))){
var state_30404__$1 = state_30404;
var statearr_30411_32855 = state_30404__$1;
(statearr_30411_32855[(2)] = null);

(statearr_30411_32855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30405 === (7))){
var inst_30400 = (state_30404[(2)]);
var state_30404__$1 = state_30404;
var statearr_30412_32857 = state_30404__$1;
(statearr_30412_32857[(2)] = inst_30400);

(statearr_30412_32857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32804,c__29897__auto___32844,G__30362_32805,G__30362_32806__$1,n__4613__auto___32803,jobs,results,process,async))
;
return ((function (__32804,switch__29712__auto__,c__29897__auto___32844,G__30362_32805,G__30362_32806__$1,n__4613__auto___32803,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____0 = (function (){
var statearr_30418 = [null,null,null,null,null,null,null];
(statearr_30418[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__);

(statearr_30418[(1)] = (1));

return statearr_30418;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____1 = (function (state_30404){
while(true){
var ret_value__29714__auto__ = (function (){try{while(true){
var result__29715__auto__ = switch__29712__auto__(state_30404);
if(cljs.core.keyword_identical_QMARK_(result__29715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29715__auto__;
}
break;
}
}catch (e30424){var ex__29716__auto__ = e30424;
var statearr_30426_32861 = state_30404;
(statearr_30426_32861[(2)] = ex__29716__auto__);


if(cljs.core.seq((state_30404[(4)]))){
var statearr_30432_32862 = state_30404;
(statearr_30432_32862[(1)] = cljs.core.first((state_30404[(4)])));

} else {
throw ex__29716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32863 = state_30404;
state_30404 = G__32863;
continue;
} else {
return ret_value__29714__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__ = function(state_30404){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____1.call(this,state_30404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__;
})()
;})(__32804,switch__29712__auto__,c__29897__auto___32844,G__30362_32805,G__30362_32806__$1,n__4613__auto___32803,jobs,results,process,async))
})();
var state__29899__auto__ = (function (){var statearr_30438 = f__29898__auto__();
(statearr_30438[(6)] = c__29897__auto___32844);

return statearr_30438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29899__auto__);
});})(__32804,c__29897__auto___32844,G__30362_32805,G__30362_32806__$1,n__4613__auto___32803,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30362_32806__$1)].join('')));

}

var G__32865 = (__32804 + (1));
__32804 = G__32865;
continue;
} else {
}
break;
}

var c__29897__auto___32866 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29898__auto__ = (function (){var switch__29712__auto__ = (function (state_30481){
var state_val_30482 = (state_30481[(1)]);
if((state_val_30482 === (7))){
var inst_30477 = (state_30481[(2)]);
var state_30481__$1 = state_30481;
var statearr_30490_32867 = state_30481__$1;
(statearr_30490_32867[(2)] = inst_30477);

(statearr_30490_32867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30482 === (1))){
var state_30481__$1 = state_30481;
var statearr_30492_32868 = state_30481__$1;
(statearr_30492_32868[(2)] = null);

(statearr_30492_32868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30482 === (4))){
var inst_30448 = (state_30481[(7)]);
var inst_30448__$1 = (state_30481[(2)]);
var inst_30453 = (inst_30448__$1 == null);
var state_30481__$1 = (function (){var statearr_30498 = state_30481;
(statearr_30498[(7)] = inst_30448__$1);

return statearr_30498;
})();
if(cljs.core.truth_(inst_30453)){
var statearr_30499_32869 = state_30481__$1;
(statearr_30499_32869[(1)] = (5));

} else {
var statearr_30500_32870 = state_30481__$1;
(statearr_30500_32870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30482 === (6))){
var inst_30458 = (state_30481[(8)]);
var inst_30448 = (state_30481[(7)]);
var inst_30458__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30465 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30466 = [inst_30448,inst_30458__$1];
var inst_30467 = (new cljs.core.PersistentVector(null,2,(5),inst_30465,inst_30466,null));
var state_30481__$1 = (function (){var statearr_30501 = state_30481;
(statearr_30501[(8)] = inst_30458__$1);

return statearr_30501;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30481__$1,(8),jobs,inst_30467);
} else {
if((state_val_30482 === (3))){
var inst_30479 = (state_30481[(2)]);
var state_30481__$1 = state_30481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30481__$1,inst_30479);
} else {
if((state_val_30482 === (2))){
var state_30481__$1 = state_30481;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30481__$1,(4),from);
} else {
if((state_val_30482 === (9))){
var inst_30471 = (state_30481[(2)]);
var state_30481__$1 = (function (){var statearr_30502 = state_30481;
(statearr_30502[(9)] = inst_30471);

return statearr_30502;
})();
var statearr_30503_32871 = state_30481__$1;
(statearr_30503_32871[(2)] = null);

(statearr_30503_32871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30482 === (5))){
var inst_30455 = cljs.core.async.close_BANG_(jobs);
var state_30481__$1 = state_30481;
var statearr_30504_32874 = state_30481__$1;
(statearr_30504_32874[(2)] = inst_30455);

(statearr_30504_32874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30482 === (8))){
var inst_30458 = (state_30481[(8)]);
var inst_30469 = (state_30481[(2)]);
var state_30481__$1 = (function (){var statearr_30505 = state_30481;
(statearr_30505[(10)] = inst_30469);

return statearr_30505;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30481__$1,(9),results,inst_30458);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____0 = (function (){
var statearr_30506 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30506[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__);

(statearr_30506[(1)] = (1));

return statearr_30506;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____1 = (function (state_30481){
while(true){
var ret_value__29714__auto__ = (function (){try{while(true){
var result__29715__auto__ = switch__29712__auto__(state_30481);
if(cljs.core.keyword_identical_QMARK_(result__29715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29715__auto__;
}
break;
}
}catch (e30507){var ex__29716__auto__ = e30507;
var statearr_30511_32884 = state_30481;
(statearr_30511_32884[(2)] = ex__29716__auto__);


if(cljs.core.seq((state_30481[(4)]))){
var statearr_30515_32885 = state_30481;
(statearr_30515_32885[(1)] = cljs.core.first((state_30481[(4)])));

} else {
throw ex__29716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32892 = state_30481;
state_30481 = G__32892;
continue;
} else {
return ret_value__29714__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__ = function(state_30481){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____1.call(this,state_30481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__;
})()
})();
var state__29899__auto__ = (function (){var statearr_30526 = f__29898__auto__();
(statearr_30526[(6)] = c__29897__auto___32866);

return statearr_30526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29899__auto__);
}));


var c__29897__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29898__auto__ = (function (){var switch__29712__auto__ = (function (state_30582){
var state_val_30583 = (state_30582[(1)]);
if((state_val_30583 === (7))){
var inst_30578 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
var statearr_30590_32895 = state_30582__$1;
(statearr_30590_32895[(2)] = inst_30578);

(statearr_30590_32895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (20))){
var state_30582__$1 = state_30582;
var statearr_30591_32897 = state_30582__$1;
(statearr_30591_32897[(2)] = null);

(statearr_30591_32897[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (1))){
var state_30582__$1 = state_30582;
var statearr_30595_32899 = state_30582__$1;
(statearr_30595_32899[(2)] = null);

(statearr_30595_32899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (4))){
var inst_30538 = (state_30582[(7)]);
var inst_30538__$1 = (state_30582[(2)]);
var inst_30542 = (inst_30538__$1 == null);
var state_30582__$1 = (function (){var statearr_30596 = state_30582;
(statearr_30596[(7)] = inst_30538__$1);

return statearr_30596;
})();
if(cljs.core.truth_(inst_30542)){
var statearr_30597_32900 = state_30582__$1;
(statearr_30597_32900[(1)] = (5));

} else {
var statearr_30598_32901 = state_30582__$1;
(statearr_30598_32901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (15))){
var inst_30560 = (state_30582[(8)]);
var state_30582__$1 = state_30582;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30582__$1,(18),to,inst_30560);
} else {
if((state_val_30583 === (21))){
var inst_30573 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
var statearr_30600_32903 = state_30582__$1;
(statearr_30600_32903[(2)] = inst_30573);

(statearr_30600_32903[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (13))){
var inst_30575 = (state_30582[(2)]);
var state_30582__$1 = (function (){var statearr_30601 = state_30582;
(statearr_30601[(9)] = inst_30575);

return statearr_30601;
})();
var statearr_30602_32905 = state_30582__$1;
(statearr_30602_32905[(2)] = null);

(statearr_30602_32905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (6))){
var inst_30538 = (state_30582[(7)]);
var state_30582__$1 = state_30582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30582__$1,(11),inst_30538);
} else {
if((state_val_30583 === (17))){
var inst_30568 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
if(cljs.core.truth_(inst_30568)){
var statearr_30603_32913 = state_30582__$1;
(statearr_30603_32913[(1)] = (19));

} else {
var statearr_30604_32916 = state_30582__$1;
(statearr_30604_32916[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (3))){
var inst_30580 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30582__$1,inst_30580);
} else {
if((state_val_30583 === (12))){
var inst_30557 = (state_30582[(10)]);
var state_30582__$1 = state_30582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30582__$1,(14),inst_30557);
} else {
if((state_val_30583 === (2))){
var state_30582__$1 = state_30582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30582__$1,(4),results);
} else {
if((state_val_30583 === (19))){
var state_30582__$1 = state_30582;
var statearr_30605_32921 = state_30582__$1;
(statearr_30605_32921[(2)] = null);

(statearr_30605_32921[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (11))){
var inst_30557 = (state_30582[(2)]);
var state_30582__$1 = (function (){var statearr_30606 = state_30582;
(statearr_30606[(10)] = inst_30557);

return statearr_30606;
})();
var statearr_30607_32931 = state_30582__$1;
(statearr_30607_32931[(2)] = null);

(statearr_30607_32931[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (9))){
var state_30582__$1 = state_30582;
var statearr_30612_32932 = state_30582__$1;
(statearr_30612_32932[(2)] = null);

(statearr_30612_32932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (5))){
var state_30582__$1 = state_30582;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30615_32939 = state_30582__$1;
(statearr_30615_32939[(1)] = (8));

} else {
var statearr_30617_32940 = state_30582__$1;
(statearr_30617_32940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (14))){
var inst_30560 = (state_30582[(8)]);
var inst_30560__$1 = (state_30582[(2)]);
var inst_30561 = (inst_30560__$1 == null);
var inst_30562 = cljs.core.not(inst_30561);
var state_30582__$1 = (function (){var statearr_30619 = state_30582;
(statearr_30619[(8)] = inst_30560__$1);

return statearr_30619;
})();
if(inst_30562){
var statearr_30620_32941 = state_30582__$1;
(statearr_30620_32941[(1)] = (15));

} else {
var statearr_30621_32942 = state_30582__$1;
(statearr_30621_32942[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (16))){
var state_30582__$1 = state_30582;
var statearr_30625_32943 = state_30582__$1;
(statearr_30625_32943[(2)] = false);

(statearr_30625_32943[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (10))){
var inst_30554 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
var statearr_30627_32944 = state_30582__$1;
(statearr_30627_32944[(2)] = inst_30554);

(statearr_30627_32944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (18))){
var inst_30565 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
var statearr_30629_32945 = state_30582__$1;
(statearr_30629_32945[(2)] = inst_30565);

(statearr_30629_32945[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (8))){
var inst_30550 = cljs.core.async.close_BANG_(to);
var state_30582__$1 = state_30582;
var statearr_30637_32946 = state_30582__$1;
(statearr_30637_32946[(2)] = inst_30550);

(statearr_30637_32946[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____0 = (function (){
var statearr_30642 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30642[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__);

(statearr_30642[(1)] = (1));

return statearr_30642;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____1 = (function (state_30582){
while(true){
var ret_value__29714__auto__ = (function (){try{while(true){
var result__29715__auto__ = switch__29712__auto__(state_30582);
if(cljs.core.keyword_identical_QMARK_(result__29715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29715__auto__;
}
break;
}
}catch (e30643){var ex__29716__auto__ = e30643;
var statearr_30645_32958 = state_30582;
(statearr_30645_32958[(2)] = ex__29716__auto__);


if(cljs.core.seq((state_30582[(4)]))){
var statearr_30650_32959 = state_30582;
(statearr_30650_32959[(1)] = cljs.core.first((state_30582[(4)])));

} else {
throw ex__29716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32960 = state_30582;
state_30582 = G__32960;
continue;
} else {
return ret_value__29714__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__ = function(state_30582){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____1.call(this,state_30582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29713__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29713__auto__;
})()
})();
var state__29899__auto__ = (function (){var statearr_30656 = f__29898__auto__();
(statearr_30656[(6)] = c__29897__auto__);

return statearr_30656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29899__auto__);
}));

return c__29897__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30663 = arguments.length;
switch (G__30663) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30675 = arguments.length;
switch (G__30675) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30682 = arguments.length;
switch (G__30682) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29897__auto___32982 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29898__auto__ = (function (){var switch__29712__auto__ = (function (state_30718){
var state_val_30722 = (state_30718[(1)]);
if((state_val_30722 === (7))){
var inst_30713 = (state_30718[(2)]);
var state_30718__$1 = state_30718;
var statearr_30731_32983 = state_30718__$1;
(statearr_30731_32983[(2)] = inst_30713);

(statearr_30731_32983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (1))){
var state_30718__$1 = state_30718;
var statearr_30732_32984 = state_30718__$1;
(statearr_30732_32984[(2)] = null);

(statearr_30732_32984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (4))){
var inst_30686 = (state_30718[(7)]);
var inst_30686__$1 = (state_30718[(2)]);
var inst_30687 = (inst_30686__$1 == null);
var state_30718__$1 = (function (){var statearr_30733 = state_30718;
(statearr_30733[(7)] = inst_30686__$1);

return statearr_30733;
})();
if(cljs.core.truth_(inst_30687)){
var statearr_30734_32991 = state_30718__$1;
(statearr_30734_32991[(1)] = (5));

} else {
var statearr_30735_32992 = state_30718__$1;
(statearr_30735_32992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (13))){
var state_30718__$1 = state_30718;
var statearr_30736_32995 = state_30718__$1;
(statearr_30736_32995[(2)] = null);

(statearr_30736_32995[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (6))){
var inst_30686 = (state_30718[(7)]);
var inst_30692 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30686) : p.call(null,inst_30686));
var state_30718__$1 = state_30718;
if(cljs.core.truth_(inst_30692)){
var statearr_30737_32996 = state_30718__$1;
(statearr_30737_32996[(1)] = (9));

} else {
var statearr_30738_32997 = state_30718__$1;
(statearr_30738_32997[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (3))){
var inst_30715 = (state_30718[(2)]);
var state_30718__$1 = state_30718;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30718__$1,inst_30715);
} else {
if((state_val_30722 === (12))){
var state_30718__$1 = state_30718;
var statearr_30739_32998 = state_30718__$1;
(statearr_30739_32998[(2)] = null);

(statearr_30739_32998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (2))){
var state_30718__$1 = state_30718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30718__$1,(4),ch);
} else {
if((state_val_30722 === (11))){
var inst_30686 = (state_30718[(7)]);
var inst_30696 = (state_30718[(2)]);
var state_30718__$1 = state_30718;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30718__$1,(8),inst_30696,inst_30686);
} else {
if((state_val_30722 === (9))){
var state_30718__$1 = state_30718;
var statearr_30740_32999 = state_30718__$1;
(statearr_30740_32999[(2)] = tc);

(statearr_30740_32999[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (5))){
var inst_30689 = cljs.core.async.close_BANG_(tc);
var inst_30690 = cljs.core.async.close_BANG_(fc);
var state_30718__$1 = (function (){var statearr_30741 = state_30718;
(statearr_30741[(8)] = inst_30689);

return statearr_30741;
})();
var statearr_30746_33001 = state_30718__$1;
(statearr_30746_33001[(2)] = inst_30690);

(statearr_30746_33001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (14))){
var inst_30711 = (state_30718[(2)]);
var state_30718__$1 = state_30718;
var statearr_30747_33002 = state_30718__$1;
(statearr_30747_33002[(2)] = inst_30711);

(statearr_30747_33002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (10))){
var state_30718__$1 = state_30718;
var statearr_30748_33003 = state_30718__$1;
(statearr_30748_33003[(2)] = fc);

(statearr_30748_33003[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30722 === (8))){
var inst_30699 = (state_30718[(2)]);
var state_30718__$1 = state_30718;
if(cljs.core.truth_(inst_30699)){
var statearr_30750_33005 = state_30718__$1;
(statearr_30750_33005[(1)] = (12));

} else {
var statearr_30751_33006 = state_30718__$1;
(statearr_30751_33006[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29713__auto__ = null;
var cljs$core$async$state_machine__29713__auto____0 = (function (){
var statearr_30753 = [null,null,null,null,null,null,null,null,null];
(statearr_30753[(0)] = cljs$core$async$state_machine__29713__auto__);

(statearr_30753[(1)] = (1));

return statearr_30753;
});
var cljs$core$async$state_machine__29713__auto____1 = (function (state_30718){
while(true){
var ret_value__29714__auto__ = (function (){try{while(true){
var result__29715__auto__ = switch__29712__auto__(state_30718);
if(cljs.core.keyword_identical_QMARK_(result__29715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29715__auto__;
}
break;
}
}catch (e30755){var ex__29716__auto__ = e30755;
var statearr_30756_33007 = state_30718;
(statearr_30756_33007[(2)] = ex__29716__auto__);


if(cljs.core.seq((state_30718[(4)]))){
var statearr_30757_33008 = state_30718;
(statearr_30757_33008[(1)] = cljs.core.first((state_30718[(4)])));

} else {
throw ex__29716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33009 = state_30718;
state_30718 = G__33009;
continue;
} else {
return ret_value__29714__auto__;
}
break;
}
});
cljs$core$async$state_machine__29713__auto__ = function(state_30718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29713__auto____1.call(this,state_30718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29713__auto____0;
cljs$core$async$state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29713__auto____1;
return cljs$core$async$state_machine__29713__auto__;
})()
})();
var state__29899__auto__ = (function (){var statearr_30758 = f__29898__auto__();
(statearr_30758[(6)] = c__29897__auto___32982);

return statearr_30758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29899__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29897__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29898__auto__ = (function (){var switch__29712__auto__ = (function (state_30793){
var state_val_30794 = (state_30793[(1)]);
if((state_val_30794 === (7))){
var inst_30788 = (state_30793[(2)]);
var state_30793__$1 = state_30793;
var statearr_30803_33018 = state_30793__$1;
(statearr_30803_33018[(2)] = inst_30788);

(statearr_30803_33018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30794 === (1))){
var inst_30760 = init;
var inst_30762 = inst_30760;
var state_30793__$1 = (function (){var statearr_30805 = state_30793;
(statearr_30805[(7)] = inst_30762);

return statearr_30805;
})();
var statearr_30806_33020 = state_30793__$1;
(statearr_30806_33020[(2)] = null);

(statearr_30806_33020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30794 === (4))){
var inst_30768 = (state_30793[(8)]);
var inst_30768__$1 = (state_30793[(2)]);
var inst_30771 = (inst_30768__$1 == null);
var state_30793__$1 = (function (){var statearr_30811 = state_30793;
(statearr_30811[(8)] = inst_30768__$1);

return statearr_30811;
})();
if(cljs.core.truth_(inst_30771)){
var statearr_30812_33021 = state_30793__$1;
(statearr_30812_33021[(1)] = (5));

} else {
var statearr_30813_33022 = state_30793__$1;
(statearr_30813_33022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30794 === (6))){
var inst_30762 = (state_30793[(7)]);
var inst_30768 = (state_30793[(8)]);
var inst_30776 = (state_30793[(9)]);
var inst_30776__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30762,inst_30768) : f.call(null,inst_30762,inst_30768));
var inst_30777 = cljs.core.reduced_QMARK_(inst_30776__$1);
var state_30793__$1 = (function (){var statearr_30818 = state_30793;
(statearr_30818[(9)] = inst_30776__$1);

return statearr_30818;
})();
if(inst_30777){
var statearr_30820_33023 = state_30793__$1;
(statearr_30820_33023[(1)] = (8));

} else {
var statearr_30822_33024 = state_30793__$1;
(statearr_30822_33024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30794 === (3))){
var inst_30791 = (state_30793[(2)]);
var state_30793__$1 = state_30793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30793__$1,inst_30791);
} else {
if((state_val_30794 === (2))){
var state_30793__$1 = state_30793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30793__$1,(4),ch);
} else {
if((state_val_30794 === (9))){
var inst_30776 = (state_30793[(9)]);
var inst_30762 = inst_30776;
var state_30793__$1 = (function (){var statearr_30826 = state_30793;
(statearr_30826[(7)] = inst_30762);

return statearr_30826;
})();
var statearr_30832_33027 = state_30793__$1;
(statearr_30832_33027[(2)] = null);

(statearr_30832_33027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30794 === (5))){
var inst_30762 = (state_30793[(7)]);
var state_30793__$1 = state_30793;
var statearr_30835_33028 = state_30793__$1;
(statearr_30835_33028[(2)] = inst_30762);

(statearr_30835_33028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30794 === (10))){
var inst_30786 = (state_30793[(2)]);
var state_30793__$1 = state_30793;
var statearr_30836_33029 = state_30793__$1;
(statearr_30836_33029[(2)] = inst_30786);

(statearr_30836_33029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30794 === (8))){
var inst_30776 = (state_30793[(9)]);
var inst_30779 = cljs.core.deref(inst_30776);
var state_30793__$1 = state_30793;
var statearr_30837_33031 = state_30793__$1;
(statearr_30837_33031[(2)] = inst_30779);

(statearr_30837_33031[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29713__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29713__auto____0 = (function (){
var statearr_30838 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30838[(0)] = cljs$core$async$reduce_$_state_machine__29713__auto__);

(statearr_30838[(1)] = (1));

return statearr_30838;
});
var cljs$core$async$reduce_$_state_machine__29713__auto____1 = (function (state_30793){
while(true){
var ret_value__29714__auto__ = (function (){try{while(true){
var result__29715__auto__ = switch__29712__auto__(state_30793);
if(cljs.core.keyword_identical_QMARK_(result__29715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29715__auto__;
}
break;
}
}catch (e30841){var ex__29716__auto__ = e30841;
var statearr_30842_33033 = state_30793;
(statearr_30842_33033[(2)] = ex__29716__auto__);


if(cljs.core.seq((state_30793[(4)]))){
var statearr_30845_33034 = state_30793;
(statearr_30845_33034[(1)] = cljs.core.first((state_30793[(4)])));

} else {
throw ex__29716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33035 = state_30793;
state_30793 = G__33035;
continue;
} else {
return ret_value__29714__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29713__auto__ = function(state_30793){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29713__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29713__auto____1.call(this,state_30793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29713__auto____0;
cljs$core$async$reduce_$_state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29713__auto____1;
return cljs$core$async$reduce_$_state_machine__29713__auto__;
})()
})();
var state__29899__auto__ = (function (){var statearr_30847 = f__29898__auto__();
(statearr_30847[(6)] = c__29897__auto__);

return statearr_30847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29899__auto__);
}));

return c__29897__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29897__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29898__auto__ = (function (){var switch__29712__auto__ = (function (state_30859){
var state_val_30860 = (state_30859[(1)]);
if((state_val_30860 === (1))){
var inst_30854 = cljs.core.async.reduce(f__$1,init,ch);
var state_30859__$1 = state_30859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30859__$1,(2),inst_30854);
} else {
if((state_val_30860 === (2))){
var inst_30856 = (state_30859[(2)]);
var inst_30857 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30856) : f__$1.call(null,inst_30856));
var state_30859__$1 = state_30859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30859__$1,inst_30857);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29713__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29713__auto____0 = (function (){
var statearr_30865 = [null,null,null,null,null,null,null];
(statearr_30865[(0)] = cljs$core$async$transduce_$_state_machine__29713__auto__);

(statearr_30865[(1)] = (1));

return statearr_30865;
});
var cljs$core$async$transduce_$_state_machine__29713__auto____1 = (function (state_30859){
while(true){
var ret_value__29714__auto__ = (function (){try{while(true){
var result__29715__auto__ = switch__29712__auto__(state_30859);
if(cljs.core.keyword_identical_QMARK_(result__29715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29715__auto__;
}
break;
}
}catch (e30866){var ex__29716__auto__ = e30866;
var statearr_30867_33038 = state_30859;
(statearr_30867_33038[(2)] = ex__29716__auto__);


if(cljs.core.seq((state_30859[(4)]))){
var statearr_30868_33039 = state_30859;
(statearr_30868_33039[(1)] = cljs.core.first((state_30859[(4)])));

} else {
throw ex__29716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33049 = state_30859;
state_30859 = G__33049;
continue;
} else {
return ret_value__29714__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29713__auto__ = function(state_30859){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29713__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29713__auto____1.call(this,state_30859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29713__auto____0;
cljs$core$async$transduce_$_state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29713__auto____1;
return cljs$core$async$transduce_$_state_machine__29713__auto__;
})()
})();
var state__29899__auto__ = (function (){var statearr_30869 = f__29898__auto__();
(statearr_30869[(6)] = c__29897__auto__);

return statearr_30869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29899__auto__);
}));

return c__29897__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30873 = arguments.length;
switch (G__30873) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29897__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29898__auto__ = (function (){var switch__29712__auto__ = (function (state_30905){
var state_val_30906 = (state_30905[(1)]);
if((state_val_30906 === (7))){
var inst_30887 = (state_30905[(2)]);
var state_30905__$1 = state_30905;
var statearr_30911_33081 = state_30905__$1;
(statearr_30911_33081[(2)] = inst_30887);

(statearr_30911_33081[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (1))){
var inst_30881 = cljs.core.seq(coll);
var inst_30882 = inst_30881;
var state_30905__$1 = (function (){var statearr_30913 = state_30905;
(statearr_30913[(7)] = inst_30882);

return statearr_30913;
})();
var statearr_30916_33082 = state_30905__$1;
(statearr_30916_33082[(2)] = null);

(statearr_30916_33082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (4))){
var inst_30882 = (state_30905[(7)]);
var inst_30885 = cljs.core.first(inst_30882);
var state_30905__$1 = state_30905;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30905__$1,(7),ch,inst_30885);
} else {
if((state_val_30906 === (13))){
var inst_30899 = (state_30905[(2)]);
var state_30905__$1 = state_30905;
var statearr_30924_33083 = state_30905__$1;
(statearr_30924_33083[(2)] = inst_30899);

(statearr_30924_33083[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (6))){
var inst_30890 = (state_30905[(2)]);
var state_30905__$1 = state_30905;
if(cljs.core.truth_(inst_30890)){
var statearr_30925_33084 = state_30905__$1;
(statearr_30925_33084[(1)] = (8));

} else {
var statearr_30926_33090 = state_30905__$1;
(statearr_30926_33090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (3))){
var inst_30903 = (state_30905[(2)]);
var state_30905__$1 = state_30905;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30905__$1,inst_30903);
} else {
if((state_val_30906 === (12))){
var state_30905__$1 = state_30905;
var statearr_30930_33091 = state_30905__$1;
(statearr_30930_33091[(2)] = null);

(statearr_30930_33091[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (2))){
var inst_30882 = (state_30905[(7)]);
var state_30905__$1 = state_30905;
if(cljs.core.truth_(inst_30882)){
var statearr_30937_33096 = state_30905__$1;
(statearr_30937_33096[(1)] = (4));

} else {
var statearr_30939_33097 = state_30905__$1;
(statearr_30939_33097[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (11))){
var inst_30896 = cljs.core.async.close_BANG_(ch);
var state_30905__$1 = state_30905;
var statearr_30942_33101 = state_30905__$1;
(statearr_30942_33101[(2)] = inst_30896);

(statearr_30942_33101[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (9))){
var state_30905__$1 = state_30905;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30944_33102 = state_30905__$1;
(statearr_30944_33102[(1)] = (11));

} else {
var statearr_30945_33103 = state_30905__$1;
(statearr_30945_33103[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (5))){
var inst_30882 = (state_30905[(7)]);
var state_30905__$1 = state_30905;
var statearr_30946_33108 = state_30905__$1;
(statearr_30946_33108[(2)] = inst_30882);

(statearr_30946_33108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (10))){
var inst_30901 = (state_30905[(2)]);
var state_30905__$1 = state_30905;
var statearr_30951_33117 = state_30905__$1;
(statearr_30951_33117[(2)] = inst_30901);

(statearr_30951_33117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30906 === (8))){
var inst_30882 = (state_30905[(7)]);
var inst_30892 = cljs.core.next(inst_30882);
var inst_30882__$1 = inst_30892;
var state_30905__$1 = (function (){var statearr_30952 = state_30905;
(statearr_30952[(7)] = inst_30882__$1);

return statearr_30952;
})();
var statearr_30953_33118 = state_30905__$1;
(statearr_30953_33118[(2)] = null);

(statearr_30953_33118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29713__auto__ = null;
var cljs$core$async$state_machine__29713__auto____0 = (function (){
var statearr_30955 = [null,null,null,null,null,null,null,null];
(statearr_30955[(0)] = cljs$core$async$state_machine__29713__auto__);

(statearr_30955[(1)] = (1));

return statearr_30955;
});
var cljs$core$async$state_machine__29713__auto____1 = (function (state_30905){
while(true){
var ret_value__29714__auto__ = (function (){try{while(true){
var result__29715__auto__ = switch__29712__auto__(state_30905);
if(cljs.core.keyword_identical_QMARK_(result__29715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29715__auto__;
}
break;
}
}catch (e30959){var ex__29716__auto__ = e30959;
var statearr_30960_33127 = state_30905;
(statearr_30960_33127[(2)] = ex__29716__auto__);


if(cljs.core.seq((state_30905[(4)]))){
var statearr_30973_33128 = state_30905;
(statearr_30973_33128[(1)] = cljs.core.first((state_30905[(4)])));

} else {
throw ex__29716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33129 = state_30905;
state_30905 = G__33129;
continue;
} else {
return ret_value__29714__auto__;
}
break;
}
});
cljs$core$async$state_machine__29713__auto__ = function(state_30905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29713__auto____1.call(this,state_30905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29713__auto____0;
cljs$core$async$state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29713__auto____1;
return cljs$core$async$state_machine__29713__auto__;
})()
})();
var state__29899__auto__ = (function (){var statearr_30977 = f__29898__auto__();
(statearr_30977[(6)] = c__29897__auto__);

return statearr_30977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29899__auto__);
}));

return c__29897__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30984 = arguments.length;
switch (G__30984) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33133 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33133(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33134 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33134(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33135 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33135(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33136 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33136(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31001 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31001 = (function (ch,cs,meta31002){
this.ch = ch;
this.cs = cs;
this.meta31002 = meta31002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31003,meta31002__$1){
var self__ = this;
var _31003__$1 = this;
return (new cljs.core.async.t_cljs$core$async31001(self__.ch,self__.cs,meta31002__$1));
}));

(cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31003){
var self__ = this;
var _31003__$1 = this;
return self__.meta31002;
}));

(cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31001.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31001.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31002","meta31002",2011600893,null)], null);
}));

(cljs.core.async.t_cljs$core$async31001.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31001.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31001");

(cljs.core.async.t_cljs$core$async31001.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31001");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31001.
 */
cljs.core.async.__GT_t_cljs$core$async31001 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31001(ch__$1,cs__$1,meta31002){
return (new cljs.core.async.t_cljs$core$async31001(ch__$1,cs__$1,meta31002));
});

}

return (new cljs.core.async.t_cljs$core$async31001(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29897__auto___33151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29898__auto__ = (function (){var switch__29712__auto__ = (function (state_31147){
var state_val_31148 = (state_31147[(1)]);
if((state_val_31148 === (7))){
var inst_31141 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
var statearr_31149_33155 = state_31147__$1;
(statearr_31149_33155[(2)] = inst_31141);

(statearr_31149_33155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (20))){
var inst_31044 = (state_31147[(7)]);
var inst_31056 = cljs.core.first(inst_31044);
var inst_31057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31056,(0),null);
var inst_31058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31056,(1),null);
var state_31147__$1 = (function (){var statearr_31156 = state_31147;
(statearr_31156[(8)] = inst_31057);

return statearr_31156;
})();
if(cljs.core.truth_(inst_31058)){
var statearr_31157_33160 = state_31147__$1;
(statearr_31157_33160[(1)] = (22));

} else {
var statearr_31158_33161 = state_31147__$1;
(statearr_31158_33161[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (27))){
var inst_31088 = (state_31147[(9)]);
var inst_31013 = (state_31147[(10)]);
var inst_31095 = (state_31147[(11)]);
var inst_31090 = (state_31147[(12)]);
var inst_31095__$1 = cljs.core._nth(inst_31088,inst_31090);
var inst_31096 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31095__$1,inst_31013,done);
var state_31147__$1 = (function (){var statearr_31159 = state_31147;
(statearr_31159[(11)] = inst_31095__$1);

return statearr_31159;
})();
if(cljs.core.truth_(inst_31096)){
var statearr_31160_33162 = state_31147__$1;
(statearr_31160_33162[(1)] = (30));

} else {
var statearr_31161_33163 = state_31147__$1;
(statearr_31161_33163[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (1))){
var state_31147__$1 = state_31147;
var statearr_31162_33164 = state_31147__$1;
(statearr_31162_33164[(2)] = null);

(statearr_31162_33164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (24))){
var inst_31044 = (state_31147[(7)]);
var inst_31063 = (state_31147[(2)]);
var inst_31064 = cljs.core.next(inst_31044);
var inst_31022 = inst_31064;
var inst_31023 = null;
var inst_31024 = (0);
var inst_31025 = (0);
var state_31147__$1 = (function (){var statearr_31163 = state_31147;
(statearr_31163[(13)] = inst_31023);

(statearr_31163[(14)] = inst_31024);

(statearr_31163[(15)] = inst_31022);

(statearr_31163[(16)] = inst_31025);

(statearr_31163[(17)] = inst_31063);

return statearr_31163;
})();
var statearr_31164_33168 = state_31147__$1;
(statearr_31164_33168[(2)] = null);

(statearr_31164_33168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (39))){
var state_31147__$1 = state_31147;
var statearr_31169_33169 = state_31147__$1;
(statearr_31169_33169[(2)] = null);

(statearr_31169_33169[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (4))){
var inst_31013 = (state_31147[(10)]);
var inst_31013__$1 = (state_31147[(2)]);
var inst_31014 = (inst_31013__$1 == null);
var state_31147__$1 = (function (){var statearr_31170 = state_31147;
(statearr_31170[(10)] = inst_31013__$1);

return statearr_31170;
})();
if(cljs.core.truth_(inst_31014)){
var statearr_31171_33170 = state_31147__$1;
(statearr_31171_33170[(1)] = (5));

} else {
var statearr_31172_33171 = state_31147__$1;
(statearr_31172_33171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (15))){
var inst_31023 = (state_31147[(13)]);
var inst_31024 = (state_31147[(14)]);
var inst_31022 = (state_31147[(15)]);
var inst_31025 = (state_31147[(16)]);
var inst_31040 = (state_31147[(2)]);
var inst_31041 = (inst_31025 + (1));
var tmp31166 = inst_31023;
var tmp31167 = inst_31024;
var tmp31168 = inst_31022;
var inst_31022__$1 = tmp31168;
var inst_31023__$1 = tmp31166;
var inst_31024__$1 = tmp31167;
var inst_31025__$1 = inst_31041;
var state_31147__$1 = (function (){var statearr_31178 = state_31147;
(statearr_31178[(13)] = inst_31023__$1);

(statearr_31178[(14)] = inst_31024__$1);

(statearr_31178[(15)] = inst_31022__$1);

(statearr_31178[(18)] = inst_31040);

(statearr_31178[(16)] = inst_31025__$1);

return statearr_31178;
})();
var statearr_31179_33172 = state_31147__$1;
(statearr_31179_33172[(2)] = null);

(statearr_31179_33172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (21))){
var inst_31067 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
var statearr_31183_33176 = state_31147__$1;
(statearr_31183_33176[(2)] = inst_31067);

(statearr_31183_33176[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (31))){
var inst_31095 = (state_31147[(11)]);
var inst_31099 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31095);
var state_31147__$1 = state_31147;
var statearr_31184_33179 = state_31147__$1;
(statearr_31184_33179[(2)] = inst_31099);

(statearr_31184_33179[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (32))){
var inst_31087 = (state_31147[(19)]);
var inst_31089 = (state_31147[(20)]);
var inst_31088 = (state_31147[(9)]);
var inst_31090 = (state_31147[(12)]);
var inst_31101 = (state_31147[(2)]);
var inst_31102 = (inst_31090 + (1));
var tmp31180 = inst_31087;
var tmp31181 = inst_31089;
var tmp31182 = inst_31088;
var inst_31087__$1 = tmp31180;
var inst_31088__$1 = tmp31182;
var inst_31089__$1 = tmp31181;
var inst_31090__$1 = inst_31102;
var state_31147__$1 = (function (){var statearr_31185 = state_31147;
(statearr_31185[(19)] = inst_31087__$1);

(statearr_31185[(21)] = inst_31101);

(statearr_31185[(20)] = inst_31089__$1);

(statearr_31185[(9)] = inst_31088__$1);

(statearr_31185[(12)] = inst_31090__$1);

return statearr_31185;
})();
var statearr_31186_33180 = state_31147__$1;
(statearr_31186_33180[(2)] = null);

(statearr_31186_33180[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (40))){
var inst_31114 = (state_31147[(22)]);
var inst_31118 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31114);
var state_31147__$1 = state_31147;
var statearr_31191_33184 = state_31147__$1;
(statearr_31191_33184[(2)] = inst_31118);

(statearr_31191_33184[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (33))){
var inst_31105 = (state_31147[(23)]);
var inst_31107 = cljs.core.chunked_seq_QMARK_(inst_31105);
var state_31147__$1 = state_31147;
if(inst_31107){
var statearr_31193_33185 = state_31147__$1;
(statearr_31193_33185[(1)] = (36));

} else {
var statearr_31195_33187 = state_31147__$1;
(statearr_31195_33187[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (13))){
var inst_31034 = (state_31147[(24)]);
var inst_31037 = cljs.core.async.close_BANG_(inst_31034);
var state_31147__$1 = state_31147;
var statearr_31197_33188 = state_31147__$1;
(statearr_31197_33188[(2)] = inst_31037);

(statearr_31197_33188[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (22))){
var inst_31057 = (state_31147[(8)]);
var inst_31060 = cljs.core.async.close_BANG_(inst_31057);
var state_31147__$1 = state_31147;
var statearr_31199_33189 = state_31147__$1;
(statearr_31199_33189[(2)] = inst_31060);

(statearr_31199_33189[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (36))){
var inst_31105 = (state_31147[(23)]);
var inst_31109 = cljs.core.chunk_first(inst_31105);
var inst_31110 = cljs.core.chunk_rest(inst_31105);
var inst_31111 = cljs.core.count(inst_31109);
var inst_31087 = inst_31110;
var inst_31088 = inst_31109;
var inst_31089 = inst_31111;
var inst_31090 = (0);
var state_31147__$1 = (function (){var statearr_31200 = state_31147;
(statearr_31200[(19)] = inst_31087);

(statearr_31200[(20)] = inst_31089);

(statearr_31200[(9)] = inst_31088);

(statearr_31200[(12)] = inst_31090);

return statearr_31200;
})();
var statearr_31201_33190 = state_31147__$1;
(statearr_31201_33190[(2)] = null);

(statearr_31201_33190[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (41))){
var inst_31105 = (state_31147[(23)]);
var inst_31120 = (state_31147[(2)]);
var inst_31121 = cljs.core.next(inst_31105);
var inst_31087 = inst_31121;
var inst_31088 = null;
var inst_31089 = (0);
var inst_31090 = (0);
var state_31147__$1 = (function (){var statearr_31205 = state_31147;
(statearr_31205[(19)] = inst_31087);

(statearr_31205[(20)] = inst_31089);

(statearr_31205[(9)] = inst_31088);

(statearr_31205[(12)] = inst_31090);

(statearr_31205[(25)] = inst_31120);

return statearr_31205;
})();
var statearr_31209_33197 = state_31147__$1;
(statearr_31209_33197[(2)] = null);

(statearr_31209_33197[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (43))){
var state_31147__$1 = state_31147;
var statearr_31210_33198 = state_31147__$1;
(statearr_31210_33198[(2)] = null);

(statearr_31210_33198[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (29))){
var inst_31129 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
var statearr_31211_33199 = state_31147__$1;
(statearr_31211_33199[(2)] = inst_31129);

(statearr_31211_33199[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (44))){
var inst_31138 = (state_31147[(2)]);
var state_31147__$1 = (function (){var statearr_31212 = state_31147;
(statearr_31212[(26)] = inst_31138);

return statearr_31212;
})();
var statearr_31213_33205 = state_31147__$1;
(statearr_31213_33205[(2)] = null);

(statearr_31213_33205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (6))){
var inst_31078 = (state_31147[(27)]);
var inst_31077 = cljs.core.deref(cs);
var inst_31078__$1 = cljs.core.keys(inst_31077);
var inst_31079 = cljs.core.count(inst_31078__$1);
var inst_31080 = cljs.core.reset_BANG_(dctr,inst_31079);
var inst_31086 = cljs.core.seq(inst_31078__$1);
var inst_31087 = inst_31086;
var inst_31088 = null;
var inst_31089 = (0);
var inst_31090 = (0);
var state_31147__$1 = (function (){var statearr_31215 = state_31147;
(statearr_31215[(27)] = inst_31078__$1);

(statearr_31215[(19)] = inst_31087);

(statearr_31215[(20)] = inst_31089);

(statearr_31215[(9)] = inst_31088);

(statearr_31215[(12)] = inst_31090);

(statearr_31215[(28)] = inst_31080);

return statearr_31215;
})();
var statearr_31216_33210 = state_31147__$1;
(statearr_31216_33210[(2)] = null);

(statearr_31216_33210[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (28))){
var inst_31087 = (state_31147[(19)]);
var inst_31105 = (state_31147[(23)]);
var inst_31105__$1 = cljs.core.seq(inst_31087);
var state_31147__$1 = (function (){var statearr_31221 = state_31147;
(statearr_31221[(23)] = inst_31105__$1);

return statearr_31221;
})();
if(inst_31105__$1){
var statearr_31222_33215 = state_31147__$1;
(statearr_31222_33215[(1)] = (33));

} else {
var statearr_31224_33216 = state_31147__$1;
(statearr_31224_33216[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (25))){
var inst_31089 = (state_31147[(20)]);
var inst_31090 = (state_31147[(12)]);
var inst_31092 = (inst_31090 < inst_31089);
var inst_31093 = inst_31092;
var state_31147__$1 = state_31147;
if(cljs.core.truth_(inst_31093)){
var statearr_31225_33217 = state_31147__$1;
(statearr_31225_33217[(1)] = (27));

} else {
var statearr_31226_33218 = state_31147__$1;
(statearr_31226_33218[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (34))){
var state_31147__$1 = state_31147;
var statearr_31227_33219 = state_31147__$1;
(statearr_31227_33219[(2)] = null);

(statearr_31227_33219[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (17))){
var state_31147__$1 = state_31147;
var statearr_31232_33220 = state_31147__$1;
(statearr_31232_33220[(2)] = null);

(statearr_31232_33220[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (3))){
var inst_31143 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31147__$1,inst_31143);
} else {
if((state_val_31148 === (12))){
var inst_31072 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
var statearr_31233_33221 = state_31147__$1;
(statearr_31233_33221[(2)] = inst_31072);

(statearr_31233_33221[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (2))){
var state_31147__$1 = state_31147;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31147__$1,(4),ch);
} else {
if((state_val_31148 === (23))){
var state_31147__$1 = state_31147;
var statearr_31234_33222 = state_31147__$1;
(statearr_31234_33222[(2)] = null);

(statearr_31234_33222[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (35))){
var inst_31127 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
var statearr_31236_33223 = state_31147__$1;
(statearr_31236_33223[(2)] = inst_31127);

(statearr_31236_33223[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (19))){
var inst_31044 = (state_31147[(7)]);
var inst_31048 = cljs.core.chunk_first(inst_31044);
var inst_31049 = cljs.core.chunk_rest(inst_31044);
var inst_31050 = cljs.core.count(inst_31048);
var inst_31022 = inst_31049;
var inst_31023 = inst_31048;
var inst_31024 = inst_31050;
var inst_31025 = (0);
var state_31147__$1 = (function (){var statearr_31237 = state_31147;
(statearr_31237[(13)] = inst_31023);

(statearr_31237[(14)] = inst_31024);

(statearr_31237[(15)] = inst_31022);

(statearr_31237[(16)] = inst_31025);

return statearr_31237;
})();
var statearr_31239_33224 = state_31147__$1;
(statearr_31239_33224[(2)] = null);

(statearr_31239_33224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (11))){
var inst_31044 = (state_31147[(7)]);
var inst_31022 = (state_31147[(15)]);
var inst_31044__$1 = cljs.core.seq(inst_31022);
var state_31147__$1 = (function (){var statearr_31242 = state_31147;
(statearr_31242[(7)] = inst_31044__$1);

return statearr_31242;
})();
if(inst_31044__$1){
var statearr_31243_33229 = state_31147__$1;
(statearr_31243_33229[(1)] = (16));

} else {
var statearr_31244_33230 = state_31147__$1;
(statearr_31244_33230[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (9))){
var inst_31074 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
var statearr_31245_33232 = state_31147__$1;
(statearr_31245_33232[(2)] = inst_31074);

(statearr_31245_33232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (5))){
var inst_31020 = cljs.core.deref(cs);
var inst_31021 = cljs.core.seq(inst_31020);
var inst_31022 = inst_31021;
var inst_31023 = null;
var inst_31024 = (0);
var inst_31025 = (0);
var state_31147__$1 = (function (){var statearr_31246 = state_31147;
(statearr_31246[(13)] = inst_31023);

(statearr_31246[(14)] = inst_31024);

(statearr_31246[(15)] = inst_31022);

(statearr_31246[(16)] = inst_31025);

return statearr_31246;
})();
var statearr_31247_33233 = state_31147__$1;
(statearr_31247_33233[(2)] = null);

(statearr_31247_33233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (14))){
var state_31147__$1 = state_31147;
var statearr_31248_33234 = state_31147__$1;
(statearr_31248_33234[(2)] = null);

(statearr_31248_33234[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (45))){
var inst_31135 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
var statearr_31249_33235 = state_31147__$1;
(statearr_31249_33235[(2)] = inst_31135);

(statearr_31249_33235[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (26))){
var inst_31078 = (state_31147[(27)]);
var inst_31131 = (state_31147[(2)]);
var inst_31132 = cljs.core.seq(inst_31078);
var state_31147__$1 = (function (){var statearr_31250 = state_31147;
(statearr_31250[(29)] = inst_31131);

return statearr_31250;
})();
if(inst_31132){
var statearr_31255_33236 = state_31147__$1;
(statearr_31255_33236[(1)] = (42));

} else {
var statearr_31256_33237 = state_31147__$1;
(statearr_31256_33237[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (16))){
var inst_31044 = (state_31147[(7)]);
var inst_31046 = cljs.core.chunked_seq_QMARK_(inst_31044);
var state_31147__$1 = state_31147;
if(inst_31046){
var statearr_31257_33239 = state_31147__$1;
(statearr_31257_33239[(1)] = (19));

} else {
var statearr_31259_33240 = state_31147__$1;
(statearr_31259_33240[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (38))){
var inst_31124 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
var statearr_31260_33241 = state_31147__$1;
(statearr_31260_33241[(2)] = inst_31124);

(statearr_31260_33241[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (30))){
var state_31147__$1 = state_31147;
var statearr_31262_33242 = state_31147__$1;
(statearr_31262_33242[(2)] = null);

(statearr_31262_33242[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (10))){
var inst_31023 = (state_31147[(13)]);
var inst_31025 = (state_31147[(16)]);
var inst_31033 = cljs.core._nth(inst_31023,inst_31025);
var inst_31034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31033,(0),null);
var inst_31035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31033,(1),null);
var state_31147__$1 = (function (){var statearr_31265 = state_31147;
(statearr_31265[(24)] = inst_31034);

return statearr_31265;
})();
if(cljs.core.truth_(inst_31035)){
var statearr_31266_33243 = state_31147__$1;
(statearr_31266_33243[(1)] = (13));

} else {
var statearr_31269_33244 = state_31147__$1;
(statearr_31269_33244[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (18))){
var inst_31070 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
var statearr_31271_33245 = state_31147__$1;
(statearr_31271_33245[(2)] = inst_31070);

(statearr_31271_33245[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (42))){
var state_31147__$1 = state_31147;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31147__$1,(45),dchan);
} else {
if((state_val_31148 === (37))){
var inst_31105 = (state_31147[(23)]);
var inst_31114 = (state_31147[(22)]);
var inst_31013 = (state_31147[(10)]);
var inst_31114__$1 = cljs.core.first(inst_31105);
var inst_31115 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31114__$1,inst_31013,done);
var state_31147__$1 = (function (){var statearr_31272 = state_31147;
(statearr_31272[(22)] = inst_31114__$1);

return statearr_31272;
})();
if(cljs.core.truth_(inst_31115)){
var statearr_31273_33246 = state_31147__$1;
(statearr_31273_33246[(1)] = (39));

} else {
var statearr_31274_33247 = state_31147__$1;
(statearr_31274_33247[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (8))){
var inst_31024 = (state_31147[(14)]);
var inst_31025 = (state_31147[(16)]);
var inst_31027 = (inst_31025 < inst_31024);
var inst_31028 = inst_31027;
var state_31147__$1 = state_31147;
if(cljs.core.truth_(inst_31028)){
var statearr_31275_33248 = state_31147__$1;
(statearr_31275_33248[(1)] = (10));

} else {
var statearr_31276_33249 = state_31147__$1;
(statearr_31276_33249[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29713__auto__ = null;
var cljs$core$async$mult_$_state_machine__29713__auto____0 = (function (){
var statearr_31278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31278[(0)] = cljs$core$async$mult_$_state_machine__29713__auto__);

(statearr_31278[(1)] = (1));

return statearr_31278;
});
var cljs$core$async$mult_$_state_machine__29713__auto____1 = (function (state_31147){
while(true){
var ret_value__29714__auto__ = (function (){try{while(true){
var result__29715__auto__ = switch__29712__auto__(state_31147);
if(cljs.core.keyword_identical_QMARK_(result__29715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29715__auto__;
}
break;
}
}catch (e31279){var ex__29716__auto__ = e31279;
var statearr_31280_33255 = state_31147;
(statearr_31280_33255[(2)] = ex__29716__auto__);


if(cljs.core.seq((state_31147[(4)]))){
var statearr_31281_33259 = state_31147;
(statearr_31281_33259[(1)] = cljs.core.first((state_31147[(4)])));

} else {
throw ex__29716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33261 = state_31147;
state_31147 = G__33261;
continue;
} else {
return ret_value__29714__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29713__auto__ = function(state_31147){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29713__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29713__auto____1.call(this,state_31147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29713__auto____0;
cljs$core$async$mult_$_state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29713__auto____1;
return cljs$core$async$mult_$_state_machine__29713__auto__;
})()
})();
var state__29899__auto__ = (function (){var statearr_31282 = f__29898__auto__();
(statearr_31282[(6)] = c__29897__auto___33151);

return statearr_31282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29899__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31285 = arguments.length;
switch (G__31285) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33266 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33266(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33267 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33267(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33272 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33272(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33278 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33278(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33279 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33279(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33284 = arguments.length;
var i__4737__auto___33285 = (0);
while(true){
if((i__4737__auto___33285 < len__4736__auto___33284)){
args__4742__auto__.push((arguments[i__4737__auto___33285]));

var G__33286 = (i__4737__auto___33285 + (1));
i__4737__auto___33285 = G__33286;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31324){
var map__31325 = p__31324;
var map__31325__$1 = (((((!((map__31325 == null))))?(((((map__31325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31325):map__31325);
var opts = map__31325__$1;
var statearr_31331_33290 = state;
(statearr_31331_33290[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31332_33291 = state;
(statearr_31332_33291[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31333_33296 = state;
(statearr_31333_33296[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31311){
var G__31312 = cljs.core.first(seq31311);
var seq31311__$1 = cljs.core.next(seq31311);
var G__31313 = cljs.core.first(seq31311__$1);
var seq31311__$2 = cljs.core.next(seq31311__$1);
var G__31314 = cljs.core.first(seq31311__$2);
var seq31311__$3 = cljs.core.next(seq31311__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31312,G__31313,G__31314,seq31311__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31339 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31339 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31340){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31340 = meta31340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31341,meta31340__$1){
var self__ = this;
var _31341__$1 = this;
return (new cljs.core.async.t_cljs$core$async31339(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31340__$1));
}));

(cljs.core.async.t_cljs$core$async31339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31341){
var self__ = this;
var _31341__$1 = this;
return self__.meta31340;
}));

(cljs.core.async.t_cljs$core$async31339.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31339.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31339.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31339.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31339.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31339.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31339.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31339.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31339.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31340","meta31340",1447222725,null)], null);
}));

(cljs.core.async.t_cljs$core$async31339.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31339.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31339");

(cljs.core.async.t_cljs$core$async31339.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31339");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31339.
 */
cljs.core.async.__GT_t_cljs$core$async31339 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31339(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31340){
return (new cljs.core.async.t_cljs$core$async31339(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31340));
});

}

return (new cljs.core.async.t_cljs$core$async31339(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29897__auto___33329 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29898__auto__ = (function (){var switch__29712__auto__ = (function (state_31494){
var state_val_31495 = (state_31494[(1)]);
if((state_val_31495 === (7))){
var inst_31385 = (state_31494[(2)]);
var state_31494__$1 = state_31494;
var statearr_31499_33332 = state_31494__$1;
(statearr_31499_33332[(2)] = inst_31385);

(statearr_31499_33332[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (20))){
var inst_31399 = (state_31494[(7)]);
var state_31494__$1 = state_31494;
var statearr_31501_33333 = state_31494__$1;
(statearr_31501_33333[(2)] = inst_31399);

(statearr_31501_33333[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (27))){
var state_31494__$1 = state_31494;
var statearr_31503_33340 = state_31494__$1;
(statearr_31503_33340[(2)] = null);

(statearr_31503_33340[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (1))){
var inst_31371 = (state_31494[(8)]);
var inst_31371__$1 = calc_state();
var inst_31374 = (inst_31371__$1 == null);
var inst_31375 = cljs.core.not(inst_31374);
var state_31494__$1 = (function (){var statearr_31507 = state_31494;
(statearr_31507[(8)] = inst_31371__$1);

return statearr_31507;
})();
if(inst_31375){
var statearr_31509_33341 = state_31494__$1;
(statearr_31509_33341[(1)] = (2));

} else {
var statearr_31510_33342 = state_31494__$1;
(statearr_31510_33342[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (24))){
var inst_31434 = (state_31494[(9)]);
var inst_31424 = (state_31494[(10)]);
var inst_31452 = (state_31494[(11)]);
var inst_31452__$1 = (inst_31424.cljs$core$IFn$_invoke$arity$1 ? inst_31424.cljs$core$IFn$_invoke$arity$1(inst_31434) : inst_31424.call(null,inst_31434));
var state_31494__$1 = (function (){var statearr_31511 = state_31494;
(statearr_31511[(11)] = inst_31452__$1);

return statearr_31511;
})();
if(cljs.core.truth_(inst_31452__$1)){
var statearr_31512_33343 = state_31494__$1;
(statearr_31512_33343[(1)] = (29));

} else {
var statearr_31518_33344 = state_31494__$1;
(statearr_31518_33344[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (4))){
var inst_31388 = (state_31494[(2)]);
var state_31494__$1 = state_31494;
if(cljs.core.truth_(inst_31388)){
var statearr_31519_33345 = state_31494__$1;
(statearr_31519_33345[(1)] = (8));

} else {
var statearr_31520_33346 = state_31494__$1;
(statearr_31520_33346[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (15))){
var inst_31418 = (state_31494[(2)]);
var state_31494__$1 = state_31494;
if(cljs.core.truth_(inst_31418)){
var statearr_31528_33347 = state_31494__$1;
(statearr_31528_33347[(1)] = (19));

} else {
var statearr_31530_33348 = state_31494__$1;
(statearr_31530_33348[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (21))){
var inst_31423 = (state_31494[(12)]);
var inst_31423__$1 = (state_31494[(2)]);
var inst_31424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31423__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31423__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31423__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31494__$1 = (function (){var statearr_31531 = state_31494;
(statearr_31531[(12)] = inst_31423__$1);

(statearr_31531[(10)] = inst_31424);

(statearr_31531[(13)] = inst_31426);

return statearr_31531;
})();
return cljs.core.async.ioc_alts_BANG_(state_31494__$1,(22),inst_31427);
} else {
if((state_val_31495 === (31))){
var inst_31461 = (state_31494[(2)]);
var state_31494__$1 = state_31494;
if(cljs.core.truth_(inst_31461)){
var statearr_31533_33355 = state_31494__$1;
(statearr_31533_33355[(1)] = (32));

} else {
var statearr_31534_33358 = state_31494__$1;
(statearr_31534_33358[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (32))){
var inst_31433 = (state_31494[(14)]);
var state_31494__$1 = state_31494;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31494__$1,(35),out,inst_31433);
} else {
if((state_val_31495 === (33))){
var inst_31423 = (state_31494[(12)]);
var inst_31399 = inst_31423;
var state_31494__$1 = (function (){var statearr_31536 = state_31494;
(statearr_31536[(7)] = inst_31399);

return statearr_31536;
})();
var statearr_31538_33359 = state_31494__$1;
(statearr_31538_33359[(2)] = null);

(statearr_31538_33359[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (13))){
var inst_31399 = (state_31494[(7)]);
var inst_31407 = inst_31399.cljs$lang$protocol_mask$partition0$;
var inst_31408 = (inst_31407 & (64));
var inst_31409 = inst_31399.cljs$core$ISeq$;
var inst_31410 = (cljs.core.PROTOCOL_SENTINEL === inst_31409);
var inst_31411 = ((inst_31408) || (inst_31410));
var state_31494__$1 = state_31494;
if(cljs.core.truth_(inst_31411)){
var statearr_31544_33360 = state_31494__$1;
(statearr_31544_33360[(1)] = (16));

} else {
var statearr_31547_33361 = state_31494__$1;
(statearr_31547_33361[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (22))){
var inst_31434 = (state_31494[(9)]);
var inst_31433 = (state_31494[(14)]);
var inst_31432 = (state_31494[(2)]);
var inst_31433__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31432,(0),null);
var inst_31434__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31432,(1),null);
var inst_31435 = (inst_31433__$1 == null);
var inst_31436 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31434__$1,change);
var inst_31437 = ((inst_31435) || (inst_31436));
var state_31494__$1 = (function (){var statearr_31549 = state_31494;
(statearr_31549[(9)] = inst_31434__$1);

(statearr_31549[(14)] = inst_31433__$1);

return statearr_31549;
})();
if(cljs.core.truth_(inst_31437)){
var statearr_31550_33375 = state_31494__$1;
(statearr_31550_33375[(1)] = (23));

} else {
var statearr_31552_33376 = state_31494__$1;
(statearr_31552_33376[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (36))){
var inst_31423 = (state_31494[(12)]);
var inst_31399 = inst_31423;
var state_31494__$1 = (function (){var statearr_31558 = state_31494;
(statearr_31558[(7)] = inst_31399);

return statearr_31558;
})();
var statearr_31559_33379 = state_31494__$1;
(statearr_31559_33379[(2)] = null);

(statearr_31559_33379[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (29))){
var inst_31452 = (state_31494[(11)]);
var state_31494__$1 = state_31494;
var statearr_31562_33381 = state_31494__$1;
(statearr_31562_33381[(2)] = inst_31452);

(statearr_31562_33381[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (6))){
var state_31494__$1 = state_31494;
var statearr_31565_33382 = state_31494__$1;
(statearr_31565_33382[(2)] = false);

(statearr_31565_33382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (28))){
var inst_31444 = (state_31494[(2)]);
var inst_31445 = calc_state();
var inst_31399 = inst_31445;
var state_31494__$1 = (function (){var statearr_31567 = state_31494;
(statearr_31567[(15)] = inst_31444);

(statearr_31567[(7)] = inst_31399);

return statearr_31567;
})();
var statearr_31568_33383 = state_31494__$1;
(statearr_31568_33383[(2)] = null);

(statearr_31568_33383[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (25))){
var inst_31485 = (state_31494[(2)]);
var state_31494__$1 = state_31494;
var statearr_31569_33384 = state_31494__$1;
(statearr_31569_33384[(2)] = inst_31485);

(statearr_31569_33384[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (34))){
var inst_31483 = (state_31494[(2)]);
var state_31494__$1 = state_31494;
var statearr_31572_33385 = state_31494__$1;
(statearr_31572_33385[(2)] = inst_31483);

(statearr_31572_33385[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (17))){
var state_31494__$1 = state_31494;
var statearr_31574_33388 = state_31494__$1;
(statearr_31574_33388[(2)] = false);

(statearr_31574_33388[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (3))){
var state_31494__$1 = state_31494;
var statearr_31577_33389 = state_31494__$1;
(statearr_31577_33389[(2)] = false);

(statearr_31577_33389[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (12))){
var inst_31487 = (state_31494[(2)]);
var state_31494__$1 = state_31494;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31494__$1,inst_31487);
} else {
if((state_val_31495 === (2))){
var inst_31371 = (state_31494[(8)]);
var inst_31377 = inst_31371.cljs$lang$protocol_mask$partition0$;
var inst_31378 = (inst_31377 & (64));
var inst_31379 = inst_31371.cljs$core$ISeq$;
var inst_31380 = (cljs.core.PROTOCOL_SENTINEL === inst_31379);
var inst_31381 = ((inst_31378) || (inst_31380));
var state_31494__$1 = state_31494;
if(cljs.core.truth_(inst_31381)){
var statearr_31583_33391 = state_31494__$1;
(statearr_31583_33391[(1)] = (5));

} else {
var statearr_31585_33392 = state_31494__$1;
(statearr_31585_33392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (23))){
var inst_31433 = (state_31494[(14)]);
var inst_31439 = (inst_31433 == null);
var state_31494__$1 = state_31494;
if(cljs.core.truth_(inst_31439)){
var statearr_31587_33393 = state_31494__$1;
(statearr_31587_33393[(1)] = (26));

} else {
var statearr_31588_33394 = state_31494__$1;
(statearr_31588_33394[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (35))){
var inst_31465 = (state_31494[(2)]);
var state_31494__$1 = state_31494;
if(cljs.core.truth_(inst_31465)){
var statearr_31589_33396 = state_31494__$1;
(statearr_31589_33396[(1)] = (36));

} else {
var statearr_31590_33398 = state_31494__$1;
(statearr_31590_33398[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (19))){
var inst_31399 = (state_31494[(7)]);
var inst_31420 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31399);
var state_31494__$1 = state_31494;
var statearr_31595_33399 = state_31494__$1;
(statearr_31595_33399[(2)] = inst_31420);

(statearr_31595_33399[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (11))){
var inst_31399 = (state_31494[(7)]);
var inst_31404 = (inst_31399 == null);
var inst_31405 = cljs.core.not(inst_31404);
var state_31494__$1 = state_31494;
if(inst_31405){
var statearr_31598_33400 = state_31494__$1;
(statearr_31598_33400[(1)] = (13));

} else {
var statearr_31599_33401 = state_31494__$1;
(statearr_31599_33401[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (9))){
var inst_31371 = (state_31494[(8)]);
var state_31494__$1 = state_31494;
var statearr_31601_33402 = state_31494__$1;
(statearr_31601_33402[(2)] = inst_31371);

(statearr_31601_33402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (5))){
var state_31494__$1 = state_31494;
var statearr_31602_33409 = state_31494__$1;
(statearr_31602_33409[(2)] = true);

(statearr_31602_33409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (14))){
var state_31494__$1 = state_31494;
var statearr_31603_33410 = state_31494__$1;
(statearr_31603_33410[(2)] = false);

(statearr_31603_33410[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (26))){
var inst_31434 = (state_31494[(9)]);
var inst_31441 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31434);
var state_31494__$1 = state_31494;
var statearr_31609_33412 = state_31494__$1;
(statearr_31609_33412[(2)] = inst_31441);

(statearr_31609_33412[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (16))){
var state_31494__$1 = state_31494;
var statearr_31611_33414 = state_31494__$1;
(statearr_31611_33414[(2)] = true);

(statearr_31611_33414[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (38))){
var inst_31479 = (state_31494[(2)]);
var state_31494__$1 = state_31494;
var statearr_31613_33418 = state_31494__$1;
(statearr_31613_33418[(2)] = inst_31479);

(statearr_31613_33418[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (30))){
var inst_31434 = (state_31494[(9)]);
var inst_31424 = (state_31494[(10)]);
var inst_31426 = (state_31494[(13)]);
var inst_31456 = cljs.core.empty_QMARK_(inst_31424);
var inst_31457 = (inst_31426.cljs$core$IFn$_invoke$arity$1 ? inst_31426.cljs$core$IFn$_invoke$arity$1(inst_31434) : inst_31426.call(null,inst_31434));
var inst_31458 = cljs.core.not(inst_31457);
var inst_31459 = ((inst_31456) && (inst_31458));
var state_31494__$1 = state_31494;
var statearr_31616_33420 = state_31494__$1;
(statearr_31616_33420[(2)] = inst_31459);

(statearr_31616_33420[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (10))){
var inst_31371 = (state_31494[(8)]);
var inst_31394 = (state_31494[(2)]);
var inst_31395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31394,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31394,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31394,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31399 = inst_31371;
var state_31494__$1 = (function (){var statearr_31618 = state_31494;
(statearr_31618[(7)] = inst_31399);

(statearr_31618[(16)] = inst_31397);

(statearr_31618[(17)] = inst_31398);

(statearr_31618[(18)] = inst_31395);

return statearr_31618;
})();
var statearr_31620_33421 = state_31494__$1;
(statearr_31620_33421[(2)] = null);

(statearr_31620_33421[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (18))){
var inst_31415 = (state_31494[(2)]);
var state_31494__$1 = state_31494;
var statearr_31622_33422 = state_31494__$1;
(statearr_31622_33422[(2)] = inst_31415);

(statearr_31622_33422[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (37))){
var state_31494__$1 = state_31494;
var statearr_31627_33423 = state_31494__$1;
(statearr_31627_33423[(2)] = null);

(statearr_31627_33423[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31495 === (8))){
var inst_31371 = (state_31494[(8)]);
var inst_31390 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31371);
var state_31494__$1 = state_31494;
var statearr_31629_33424 = state_31494__$1;
(statearr_31629_33424[(2)] = inst_31390);

(statearr_31629_33424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29713__auto__ = null;
var cljs$core$async$mix_$_state_machine__29713__auto____0 = (function (){
var statearr_31633 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31633[(0)] = cljs$core$async$mix_$_state_machine__29713__auto__);

(statearr_31633[(1)] = (1));

return statearr_31633;
});
var cljs$core$async$mix_$_state_machine__29713__auto____1 = (function (state_31494){
while(true){
var ret_value__29714__auto__ = (function (){try{while(true){
var result__29715__auto__ = switch__29712__auto__(state_31494);
if(cljs.core.keyword_identical_QMARK_(result__29715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29715__auto__;
}
break;
}
}catch (e31634){var ex__29716__auto__ = e31634;
var statearr_31635_33426 = state_31494;
(statearr_31635_33426[(2)] = ex__29716__auto__);


if(cljs.core.seq((state_31494[(4)]))){
var statearr_31637_33427 = state_31494;
(statearr_31637_33427[(1)] = cljs.core.first((state_31494[(4)])));

} else {
throw ex__29716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33429 = state_31494;
state_31494 = G__33429;
continue;
} else {
return ret_value__29714__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29713__auto__ = function(state_31494){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29713__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29713__auto____1.call(this,state_31494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29713__auto____0;
cljs$core$async$mix_$_state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29713__auto____1;
return cljs$core$async$mix_$_state_machine__29713__auto__;
})()
})();
var state__29899__auto__ = (function (){var statearr_31640 = f__29898__auto__();
(statearr_31640[(6)] = c__29897__auto___33329);

return statearr_31640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29899__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33431 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33431(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33437 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33437(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33441 = (function() {
var G__33442 = null;
var G__33442__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33442__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33442 = function(p,v){
switch(arguments.length){
case 1:
return G__33442__1.call(this,p);
case 2:
return G__33442__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33442.cljs$core$IFn$_invoke$arity$1 = G__33442__1;
G__33442.cljs$core$IFn$_invoke$arity$2 = G__33442__2;
return G__33442;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31665 = arguments.length;
switch (G__31665) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33441(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33441(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31693 = arguments.length;
switch (G__31693) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31684_SHARP_){
if(cljs.core.truth_((p1__31684_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31684_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31684_SHARP_.call(null,topic)))){
return p1__31684_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31684_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31705 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31705 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31706){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31706 = meta31706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31707,meta31706__$1){
var self__ = this;
var _31707__$1 = this;
return (new cljs.core.async.t_cljs$core$async31705(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31706__$1));
}));

(cljs.core.async.t_cljs$core$async31705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31707){
var self__ = this;
var _31707__$1 = this;
return self__.meta31706;
}));

(cljs.core.async.t_cljs$core$async31705.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31705.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31705.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31705.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31705.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31705.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31705.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31706","meta31706",-1430840530,null)], null);
}));

(cljs.core.async.t_cljs$core$async31705.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31705");

(cljs.core.async.t_cljs$core$async31705.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31705");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31705.
 */
cljs.core.async.__GT_t_cljs$core$async31705 = (function cljs$core$async$__GT_t_cljs$core$async31705(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31706){
return (new cljs.core.async.t_cljs$core$async31705(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31706));
});

}

return (new cljs.core.async.t_cljs$core$async31705(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29897__auto___33483 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29898__auto__ = (function (){var switch__29712__auto__ = (function (state_31783){
var state_val_31784 = (state_31783[(1)]);
if((state_val_31784 === (7))){
var inst_31779 = (state_31783[(2)]);
var state_31783__$1 = state_31783;
var statearr_31786_33490 = state_31783__$1;
(statearr_31786_33490[(2)] = inst_31779);

(statearr_31786_33490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31784 === (20))){
var state_31783__$1 = state_31783;
var statearr_31787_33492 = state_31783__$1;
(statearr_31787_33492[(2)] = null);

(statearr_31787_33492[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31784 === (1))){
var state_31783__$1 = state_31783;
var statearr_31788_33498 = state_31783__$1;
(statearr_31788_33498[(2)] = null);

(statearr_31788_33498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31784 === (24))){
var inst_31762 = (state_31783[(7)]);
var inst_31771 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31762);
var state_31783__$1 = state_31783;
var statearr_31791_33503 = state_31783__$1;
(statearr_31791_33503[(2)] = inst_31771);

(statearr_31791_33503[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31784 === (4))){
var inst_31714 = (state_31783[(8)]);
var inst_31714__$1 = (state_31783[(2)]);
var inst_31715 = (inst_31714__$1 == null);
var state_31783__$1 = (function (){var statearr_31793 = state_31783;
(statearr_31793[(8)] = inst_31714__$1);

return statearr_31793;
})();
if(cljs.core.truth_(inst_31715)){
var statearr_31794_33513 = state_31783__$1;
(statearr_31794_33513[(1)] = (5));

} else {
var statearr_31795_33514 = state_31783__$1;
(statearr_31795_33514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31784 === (15))){
var inst_31756 = (state_31783[(2)]);
var state_31783__$1 = state_31783;
var statearr_31796_33515 = state_31783__$1;
(statearr_31796_33515[(2)] = inst_31756);

(statearr_31796_33515[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31784 === (21))){
var inst_31776 = (state_31783[(2)]);
var state_31783__$1 = (function (){var statearr_31797 = state_31783;
(statearr_31797[(9)] = inst_31776);

return statearr_31797;
})();
var statearr_31798_33519 = state_31783__$1;
(statearr_31798_33519[(2)] = null);

(statearr_31798_33519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31784 === (13))){
var inst_31738 = (state_31783[(10)]);
var inst_31740 = cljs.core.chunked_seq_QMARK_(inst_31738);
var state_31783__$1 = state_31783;
if(inst_31740){
var statearr_31799_33520 = state_31783__$1;
(statearr_31799_33520[(1)] = (16));

} else {
var statearr_31800_33522 = state_31783__$1;
(statearr_31800_33522[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31784 === (22))){
var inst_31768 = (state_31783[(2)]);
var state_31783__$1 = state_31783;
if(cljs.core.truth_(inst_31768)){
var statearr_31801_33524 = state_31783__$1;
(statearr_31801_33524[(1)] = (23));

} else {
var statearr_31803_33526 = state_31783__$1;
(statearr_31803_33526[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31784 === (6))){
var inst_31714 = (state_31783[(8)]);
var inst_31764 = (state_31783[(11)]);
var inst_31762 = (state_31783[(7)]);
var inst_31762__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31714) : topic_fn.call(null,inst_31714));
var inst_31763 = cljs.core.deref(mults);
var inst_31764__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31763,inst_31762__$1);
var state_31783__$1 = (function (){var statearr_31806 = state_31783;
(statearr_31806[(11)] = inst_31764__$1);

(statearr_31806[(7)] = inst_31762__$1);

return statearr_31806;
})();
if(cljs.core.truth_(inst_31764__$1)){
var statearr_31807_33528 = state_31783__$1;
(statearr_31807_33528[(1)] = (19));

} else {
var statearr_31808_33529 = state_31783__$1;
(statearr_31808_33529[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31784 === (25))){
var inst_31773 = (state_31783[(2)]);
var state_31783__$1 = state_31783;
var statearr_31812_33530 = state_31783__$1;
(statearr_31812_33530[(2)] = inst_31773);

(statearr_31812_33530[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31784 === (17))){
var inst_31738 = (state_31783[(10)]);
var inst_31747 = cljs.core.first(inst_31738);
var inst_31748 = cljs.core.async.muxch_STAR_(inst_31747);
var inst_31749 = cljs.core.async.close_BANG_(inst_31748);
var inst_31750 = cljs.core.next(inst_31738);
var inst_31724 = inst_31750;
var inst_31725 = null;
var inst_31726 = (0);
var inst_31727 = (0);
var state_31783__$1 = (function (){var statearr_31813 = state_31783;
(statearr_31813[(12)] = inst_31725);

(statearr_31813[(13)] = inst_31749);

(statearr_31813[(14)] = inst_31724);

(statearr_31813[(15)] = inst_31727);

(statearr_31813[(16)] = inst_31726);

return statearr_31813;
})();
var statearr_31814_33531 = state_31783__$1;
(statearr_31814_33531[(2)] = null);

(statearr_31814_33531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31784 === (3))){
var inst_31781 = (state_31783[(2)]);
var state_31783__$1 = state_31783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31783__$1,inst_31781);
} else {
if((state_val_31784 === (12))){
var inst_31758 = (state_31783[(2)]);
var state_31783__$1 = state_31783;
var statearr_31815_33532 = state_31783__$1;
(statearr_31815_33532[(2)] = inst_31758);

(statearr_31815_33532[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31784 === (2))){
var state_31783__$1 = state_31783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31783__$1,(4),ch);
} else {
if((state_val_31784 === (23))){
var state_31783__$1 = state_31783;
var statearr_31816_33533 = state_31783__$1;
(statearr_31816_33533[(2)] = null);

(statearr_31816_33533[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31784 === (19))){
var inst_31714 = (state_31783[(8)]);
var inst_31764 = (state_31783[(11)]);
var inst_31766 = cljs.core.async.muxch_STAR_(inst_31764);
var state_31783__$1 = state_31783;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31783__$1,(22),inst_31766,inst_31714);
} else {
if((state_val_31784 === (11))){
var inst_31738 = (state_31783[(10)]);
var inst_31724 = (state_31783[(14)]);
var inst_31738__$1 = cljs.core.seq(inst_31724);
var state_31783__$1 = (function (){var statearr_31817 = state_31783;
(statearr_31817[(10)] = inst_31738__$1);

return statearr_31817;
})();
if(inst_31738__$1){
var statearr_31818_33537 = state_31783__$1;
(statearr_31818_33537[(1)] = (13));

} else {
var statearr_31820_33538 = state_31783__$1;
(statearr_31820_33538[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31784 === (9))){
var inst_31760 = (state_31783[(2)]);
var state_31783__$1 = state_31783;
var statearr_31823_33543 = state_31783__$1;
(statearr_31823_33543[(2)] = inst_31760);

(statearr_31823_33543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31784 === (5))){
var inst_31721 = cljs.core.deref(mults);
var inst_31722 = cljs.core.vals(inst_31721);
var inst_31723 = cljs.core.seq(inst_31722);
var inst_31724 = inst_31723;
var inst_31725 = null;
var inst_31726 = (0);
var inst_31727 = (0);
var state_31783__$1 = (function (){var statearr_31824 = state_31783;
(statearr_31824[(12)] = inst_31725);

(statearr_31824[(14)] = inst_31724);

(statearr_31824[(15)] = inst_31727);

(statearr_31824[(16)] = inst_31726);

return statearr_31824;
})();
var statearr_31827_33545 = state_31783__$1;
(statearr_31827_33545[(2)] = null);

(statearr_31827_33545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31784 === (14))){
var state_31783__$1 = state_31783;
var statearr_31832_33546 = state_31783__$1;
(statearr_31832_33546[(2)] = null);

(statearr_31832_33546[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31784 === (16))){
var inst_31738 = (state_31783[(10)]);
var inst_31742 = cljs.core.chunk_first(inst_31738);
var inst_31743 = cljs.core.chunk_rest(inst_31738);
var inst_31744 = cljs.core.count(inst_31742);
var inst_31724 = inst_31743;
var inst_31725 = inst_31742;
var inst_31726 = inst_31744;
var inst_31727 = (0);
var state_31783__$1 = (function (){var statearr_31833 = state_31783;
(statearr_31833[(12)] = inst_31725);

(statearr_31833[(14)] = inst_31724);

(statearr_31833[(15)] = inst_31727);

(statearr_31833[(16)] = inst_31726);

return statearr_31833;
})();
var statearr_31834_33555 = state_31783__$1;
(statearr_31834_33555[(2)] = null);

(statearr_31834_33555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31784 === (10))){
var inst_31725 = (state_31783[(12)]);
var inst_31724 = (state_31783[(14)]);
var inst_31727 = (state_31783[(15)]);
var inst_31726 = (state_31783[(16)]);
var inst_31732 = cljs.core._nth(inst_31725,inst_31727);
var inst_31733 = cljs.core.async.muxch_STAR_(inst_31732);
var inst_31734 = cljs.core.async.close_BANG_(inst_31733);
var inst_31735 = (inst_31727 + (1));
var tmp31829 = inst_31725;
var tmp31830 = inst_31724;
var tmp31831 = inst_31726;
var inst_31724__$1 = tmp31830;
var inst_31725__$1 = tmp31829;
var inst_31726__$1 = tmp31831;
var inst_31727__$1 = inst_31735;
var state_31783__$1 = (function (){var statearr_31836 = state_31783;
(statearr_31836[(17)] = inst_31734);

(statearr_31836[(12)] = inst_31725__$1);

(statearr_31836[(14)] = inst_31724__$1);

(statearr_31836[(15)] = inst_31727__$1);

(statearr_31836[(16)] = inst_31726__$1);

return statearr_31836;
})();
var statearr_31838_33590 = state_31783__$1;
(statearr_31838_33590[(2)] = null);

(statearr_31838_33590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31784 === (18))){
var inst_31753 = (state_31783[(2)]);
var state_31783__$1 = state_31783;
var statearr_31842_33600 = state_31783__$1;
(statearr_31842_33600[(2)] = inst_31753);

(statearr_31842_33600[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31784 === (8))){
var inst_31727 = (state_31783[(15)]);
var inst_31726 = (state_31783[(16)]);
var inst_31729 = (inst_31727 < inst_31726);
var inst_31730 = inst_31729;
var state_31783__$1 = state_31783;
if(cljs.core.truth_(inst_31730)){
var statearr_31843_33617 = state_31783__$1;
(statearr_31843_33617[(1)] = (10));

} else {
var statearr_31846_33619 = state_31783__$1;
(statearr_31846_33619[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29713__auto__ = null;
var cljs$core$async$state_machine__29713__auto____0 = (function (){
var statearr_31847 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31847[(0)] = cljs$core$async$state_machine__29713__auto__);

(statearr_31847[(1)] = (1));

return statearr_31847;
});
var cljs$core$async$state_machine__29713__auto____1 = (function (state_31783){
while(true){
var ret_value__29714__auto__ = (function (){try{while(true){
var result__29715__auto__ = switch__29712__auto__(state_31783);
if(cljs.core.keyword_identical_QMARK_(result__29715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29715__auto__;
}
break;
}
}catch (e31850){var ex__29716__auto__ = e31850;
var statearr_31851_33643 = state_31783;
(statearr_31851_33643[(2)] = ex__29716__auto__);


if(cljs.core.seq((state_31783[(4)]))){
var statearr_31852_33648 = state_31783;
(statearr_31852_33648[(1)] = cljs.core.first((state_31783[(4)])));

} else {
throw ex__29716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33653 = state_31783;
state_31783 = G__33653;
continue;
} else {
return ret_value__29714__auto__;
}
break;
}
});
cljs$core$async$state_machine__29713__auto__ = function(state_31783){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29713__auto____1.call(this,state_31783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29713__auto____0;
cljs$core$async$state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29713__auto____1;
return cljs$core$async$state_machine__29713__auto__;
})()
})();
var state__29899__auto__ = (function (){var statearr_31853 = f__29898__auto__();
(statearr_31853[(6)] = c__29897__auto___33483);

return statearr_31853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29899__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31859 = arguments.length;
switch (G__31859) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31879 = arguments.length;
switch (G__31879) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31890 = arguments.length;
switch (G__31890) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29897__auto___33683 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29898__auto__ = (function (){var switch__29712__auto__ = (function (state_31956){
var state_val_31957 = (state_31956[(1)]);
if((state_val_31957 === (7))){
var state_31956__$1 = state_31956;
var statearr_31959_33684 = state_31956__$1;
(statearr_31959_33684[(2)] = null);

(statearr_31959_33684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (1))){
var state_31956__$1 = state_31956;
var statearr_31960_33685 = state_31956__$1;
(statearr_31960_33685[(2)] = null);

(statearr_31960_33685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (4))){
var inst_31907 = (state_31956[(7)]);
var inst_31906 = (state_31956[(8)]);
var inst_31909 = (inst_31907 < inst_31906);
var state_31956__$1 = state_31956;
if(cljs.core.truth_(inst_31909)){
var statearr_31961_33689 = state_31956__$1;
(statearr_31961_33689[(1)] = (6));

} else {
var statearr_31962_33692 = state_31956__$1;
(statearr_31962_33692[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (15))){
var inst_31941 = (state_31956[(9)]);
var inst_31946 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31941);
var state_31956__$1 = state_31956;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31956__$1,(17),out,inst_31946);
} else {
if((state_val_31957 === (13))){
var inst_31941 = (state_31956[(9)]);
var inst_31941__$1 = (state_31956[(2)]);
var inst_31942 = cljs.core.some(cljs.core.nil_QMARK_,inst_31941__$1);
var state_31956__$1 = (function (){var statearr_31966 = state_31956;
(statearr_31966[(9)] = inst_31941__$1);

return statearr_31966;
})();
if(cljs.core.truth_(inst_31942)){
var statearr_31967_33693 = state_31956__$1;
(statearr_31967_33693[(1)] = (14));

} else {
var statearr_31968_33694 = state_31956__$1;
(statearr_31968_33694[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (6))){
var state_31956__$1 = state_31956;
var statearr_31969_33695 = state_31956__$1;
(statearr_31969_33695[(2)] = null);

(statearr_31969_33695[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (17))){
var inst_31948 = (state_31956[(2)]);
var state_31956__$1 = (function (){var statearr_31974 = state_31956;
(statearr_31974[(10)] = inst_31948);

return statearr_31974;
})();
var statearr_31977_33696 = state_31956__$1;
(statearr_31977_33696[(2)] = null);

(statearr_31977_33696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (3))){
var inst_31953 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31956__$1,inst_31953);
} else {
if((state_val_31957 === (12))){
var _ = (function (){var statearr_31979 = state_31956;
(statearr_31979[(4)] = cljs.core.rest((state_31956[(4)])));

return statearr_31979;
})();
var state_31956__$1 = state_31956;
var ex31972 = (state_31956__$1[(2)]);
var statearr_31985_33702 = state_31956__$1;
(statearr_31985_33702[(5)] = ex31972);


if((ex31972 instanceof Object)){
var statearr_31986_33708 = state_31956__$1;
(statearr_31986_33708[(1)] = (11));

(statearr_31986_33708[(5)] = null);

} else {
throw ex31972;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (2))){
var inst_31905 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31906 = cnt;
var inst_31907 = (0);
var state_31956__$1 = (function (){var statearr_31989 = state_31956;
(statearr_31989[(7)] = inst_31907);

(statearr_31989[(11)] = inst_31905);

(statearr_31989[(8)] = inst_31906);

return statearr_31989;
})();
var statearr_31990_33723 = state_31956__$1;
(statearr_31990_33723[(2)] = null);

(statearr_31990_33723[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (11))){
var inst_31918 = (state_31956[(2)]);
var inst_31919 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31956__$1 = (function (){var statearr_31994 = state_31956;
(statearr_31994[(12)] = inst_31918);

return statearr_31994;
})();
var statearr_31998_33734 = state_31956__$1;
(statearr_31998_33734[(2)] = inst_31919);

(statearr_31998_33734[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (9))){
var inst_31907 = (state_31956[(7)]);
var _ = (function (){var statearr_32001 = state_31956;
(statearr_32001[(4)] = cljs.core.cons((12),(state_31956[(4)])));

return statearr_32001;
})();
var inst_31925 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31907) : chs__$1.call(null,inst_31907));
var inst_31927 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31907) : done.call(null,inst_31907));
var inst_31928 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31925,inst_31927);
var ___$1 = (function (){var statearr_32002 = state_31956;
(statearr_32002[(4)] = cljs.core.rest((state_31956[(4)])));

return statearr_32002;
})();
var state_31956__$1 = state_31956;
var statearr_32003_33747 = state_31956__$1;
(statearr_32003_33747[(2)] = inst_31928);

(statearr_32003_33747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (5))){
var inst_31939 = (state_31956[(2)]);
var state_31956__$1 = (function (){var statearr_32008 = state_31956;
(statearr_32008[(13)] = inst_31939);

return statearr_32008;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31956__$1,(13),dchan);
} else {
if((state_val_31957 === (14))){
var inst_31944 = cljs.core.async.close_BANG_(out);
var state_31956__$1 = state_31956;
var statearr_32011_33768 = state_31956__$1;
(statearr_32011_33768[(2)] = inst_31944);

(statearr_32011_33768[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (16))){
var inst_31951 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
var statearr_32015_33782 = state_31956__$1;
(statearr_32015_33782[(2)] = inst_31951);

(statearr_32015_33782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (10))){
var inst_31907 = (state_31956[(7)]);
var inst_31931 = (state_31956[(2)]);
var inst_31933 = (inst_31907 + (1));
var inst_31907__$1 = inst_31933;
var state_31956__$1 = (function (){var statearr_32017 = state_31956;
(statearr_32017[(7)] = inst_31907__$1);

(statearr_32017[(14)] = inst_31931);

return statearr_32017;
})();
var statearr_32018_33786 = state_31956__$1;
(statearr_32018_33786[(2)] = null);

(statearr_32018_33786[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31957 === (8))){
var inst_31937 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
var statearr_32019_33788 = state_31956__$1;
(statearr_32019_33788[(2)] = inst_31937);

(statearr_32019_33788[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29713__auto__ = null;
var cljs$core$async$state_machine__29713__auto____0 = (function (){
var statearr_32021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32021[(0)] = cljs$core$async$state_machine__29713__auto__);

(statearr_32021[(1)] = (1));

return statearr_32021;
});
var cljs$core$async$state_machine__29713__auto____1 = (function (state_31956){
while(true){
var ret_value__29714__auto__ = (function (){try{while(true){
var result__29715__auto__ = switch__29712__auto__(state_31956);
if(cljs.core.keyword_identical_QMARK_(result__29715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29715__auto__;
}
break;
}
}catch (e32025){var ex__29716__auto__ = e32025;
var statearr_32026_33796 = state_31956;
(statearr_32026_33796[(2)] = ex__29716__auto__);


if(cljs.core.seq((state_31956[(4)]))){
var statearr_32029_33797 = state_31956;
(statearr_32029_33797[(1)] = cljs.core.first((state_31956[(4)])));

} else {
throw ex__29716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33799 = state_31956;
state_31956 = G__33799;
continue;
} else {
return ret_value__29714__auto__;
}
break;
}
});
cljs$core$async$state_machine__29713__auto__ = function(state_31956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29713__auto____1.call(this,state_31956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29713__auto____0;
cljs$core$async$state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29713__auto____1;
return cljs$core$async$state_machine__29713__auto__;
})()
})();
var state__29899__auto__ = (function (){var statearr_32035 = f__29898__auto__();
(statearr_32035[(6)] = c__29897__auto___33683);

return statearr_32035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29899__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32038 = arguments.length;
switch (G__32038) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29897__auto___33816 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29898__auto__ = (function (){var switch__29712__auto__ = (function (state_32076){
var state_val_32077 = (state_32076[(1)]);
if((state_val_32077 === (7))){
var inst_32052 = (state_32076[(7)]);
var inst_32054 = (state_32076[(8)]);
var inst_32052__$1 = (state_32076[(2)]);
var inst_32054__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32052__$1,(0),null);
var inst_32055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32052__$1,(1),null);
var inst_32056 = (inst_32054__$1 == null);
var state_32076__$1 = (function (){var statearr_32092 = state_32076;
(statearr_32092[(7)] = inst_32052__$1);

(statearr_32092[(8)] = inst_32054__$1);

(statearr_32092[(9)] = inst_32055);

return statearr_32092;
})();
if(cljs.core.truth_(inst_32056)){
var statearr_32093_33833 = state_32076__$1;
(statearr_32093_33833[(1)] = (8));

} else {
var statearr_32094_33838 = state_32076__$1;
(statearr_32094_33838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (1))){
var inst_32040 = cljs.core.vec(chs);
var inst_32041 = inst_32040;
var state_32076__$1 = (function (){var statearr_32095 = state_32076;
(statearr_32095[(10)] = inst_32041);

return statearr_32095;
})();
var statearr_32096_33844 = state_32076__$1;
(statearr_32096_33844[(2)] = null);

(statearr_32096_33844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (4))){
var inst_32041 = (state_32076[(10)]);
var state_32076__$1 = state_32076;
return cljs.core.async.ioc_alts_BANG_(state_32076__$1,(7),inst_32041);
} else {
if((state_val_32077 === (6))){
var inst_32072 = (state_32076[(2)]);
var state_32076__$1 = state_32076;
var statearr_32097_33848 = state_32076__$1;
(statearr_32097_33848[(2)] = inst_32072);

(statearr_32097_33848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (3))){
var inst_32074 = (state_32076[(2)]);
var state_32076__$1 = state_32076;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32076__$1,inst_32074);
} else {
if((state_val_32077 === (2))){
var inst_32041 = (state_32076[(10)]);
var inst_32044 = cljs.core.count(inst_32041);
var inst_32045 = (inst_32044 > (0));
var state_32076__$1 = state_32076;
if(cljs.core.truth_(inst_32045)){
var statearr_32099_33856 = state_32076__$1;
(statearr_32099_33856[(1)] = (4));

} else {
var statearr_32100_33857 = state_32076__$1;
(statearr_32100_33857[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (11))){
var inst_32041 = (state_32076[(10)]);
var inst_32064 = (state_32076[(2)]);
var tmp32098 = inst_32041;
var inst_32041__$1 = tmp32098;
var state_32076__$1 = (function (){var statearr_32101 = state_32076;
(statearr_32101[(11)] = inst_32064);

(statearr_32101[(10)] = inst_32041__$1);

return statearr_32101;
})();
var statearr_32102_33860 = state_32076__$1;
(statearr_32102_33860[(2)] = null);

(statearr_32102_33860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (9))){
var inst_32054 = (state_32076[(8)]);
var state_32076__$1 = state_32076;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32076__$1,(11),out,inst_32054);
} else {
if((state_val_32077 === (5))){
var inst_32070 = cljs.core.async.close_BANG_(out);
var state_32076__$1 = state_32076;
var statearr_32104_33865 = state_32076__$1;
(statearr_32104_33865[(2)] = inst_32070);

(statearr_32104_33865[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (10))){
var inst_32067 = (state_32076[(2)]);
var state_32076__$1 = state_32076;
var statearr_32109_33866 = state_32076__$1;
(statearr_32109_33866[(2)] = inst_32067);

(statearr_32109_33866[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32077 === (8))){
var inst_32052 = (state_32076[(7)]);
var inst_32054 = (state_32076[(8)]);
var inst_32055 = (state_32076[(9)]);
var inst_32041 = (state_32076[(10)]);
var inst_32059 = (function (){var cs = inst_32041;
var vec__32048 = inst_32052;
var v = inst_32054;
var c = inst_32055;
return (function (p1__32036_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32036_SHARP_);
});
})();
var inst_32060 = cljs.core.filterv(inst_32059,inst_32041);
var inst_32041__$1 = inst_32060;
var state_32076__$1 = (function (){var statearr_32115 = state_32076;
(statearr_32115[(10)] = inst_32041__$1);

return statearr_32115;
})();
var statearr_32116_33870 = state_32076__$1;
(statearr_32116_33870[(2)] = null);

(statearr_32116_33870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29713__auto__ = null;
var cljs$core$async$state_machine__29713__auto____0 = (function (){
var statearr_32117 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32117[(0)] = cljs$core$async$state_machine__29713__auto__);

(statearr_32117[(1)] = (1));

return statearr_32117;
});
var cljs$core$async$state_machine__29713__auto____1 = (function (state_32076){
while(true){
var ret_value__29714__auto__ = (function (){try{while(true){
var result__29715__auto__ = switch__29712__auto__(state_32076);
if(cljs.core.keyword_identical_QMARK_(result__29715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29715__auto__;
}
break;
}
}catch (e32119){var ex__29716__auto__ = e32119;
var statearr_32120_33875 = state_32076;
(statearr_32120_33875[(2)] = ex__29716__auto__);


if(cljs.core.seq((state_32076[(4)]))){
var statearr_32122_33876 = state_32076;
(statearr_32122_33876[(1)] = cljs.core.first((state_32076[(4)])));

} else {
throw ex__29716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33877 = state_32076;
state_32076 = G__33877;
continue;
} else {
return ret_value__29714__auto__;
}
break;
}
});
cljs$core$async$state_machine__29713__auto__ = function(state_32076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29713__auto____1.call(this,state_32076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29713__auto____0;
cljs$core$async$state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29713__auto____1;
return cljs$core$async$state_machine__29713__auto__;
})()
})();
var state__29899__auto__ = (function (){var statearr_32126 = f__29898__auto__();
(statearr_32126[(6)] = c__29897__auto___33816);

return statearr_32126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29899__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32130 = arguments.length;
switch (G__32130) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29897__auto___33888 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29898__auto__ = (function (){var switch__29712__auto__ = (function (state_32158){
var state_val_32159 = (state_32158[(1)]);
if((state_val_32159 === (7))){
var inst_32139 = (state_32158[(7)]);
var inst_32139__$1 = (state_32158[(2)]);
var inst_32141 = (inst_32139__$1 == null);
var inst_32142 = cljs.core.not(inst_32141);
var state_32158__$1 = (function (){var statearr_32161 = state_32158;
(statearr_32161[(7)] = inst_32139__$1);

return statearr_32161;
})();
if(inst_32142){
var statearr_32162_33895 = state_32158__$1;
(statearr_32162_33895[(1)] = (8));

} else {
var statearr_32163_33896 = state_32158__$1;
(statearr_32163_33896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (1))){
var inst_32134 = (0);
var state_32158__$1 = (function (){var statearr_32164 = state_32158;
(statearr_32164[(8)] = inst_32134);

return statearr_32164;
})();
var statearr_32165_33901 = state_32158__$1;
(statearr_32165_33901[(2)] = null);

(statearr_32165_33901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (4))){
var state_32158__$1 = state_32158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32158__$1,(7),ch);
} else {
if((state_val_32159 === (6))){
var inst_32153 = (state_32158[(2)]);
var state_32158__$1 = state_32158;
var statearr_32167_33909 = state_32158__$1;
(statearr_32167_33909[(2)] = inst_32153);

(statearr_32167_33909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (3))){
var inst_32155 = (state_32158[(2)]);
var inst_32156 = cljs.core.async.close_BANG_(out);
var state_32158__$1 = (function (){var statearr_32169 = state_32158;
(statearr_32169[(9)] = inst_32155);

return statearr_32169;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32158__$1,inst_32156);
} else {
if((state_val_32159 === (2))){
var inst_32134 = (state_32158[(8)]);
var inst_32136 = (inst_32134 < n);
var state_32158__$1 = state_32158;
if(cljs.core.truth_(inst_32136)){
var statearr_32171_33915 = state_32158__$1;
(statearr_32171_33915[(1)] = (4));

} else {
var statearr_32172_33916 = state_32158__$1;
(statearr_32172_33916[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (11))){
var inst_32134 = (state_32158[(8)]);
var inst_32145 = (state_32158[(2)]);
var inst_32146 = (inst_32134 + (1));
var inst_32134__$1 = inst_32146;
var state_32158__$1 = (function (){var statearr_32175 = state_32158;
(statearr_32175[(8)] = inst_32134__$1);

(statearr_32175[(10)] = inst_32145);

return statearr_32175;
})();
var statearr_32176_33925 = state_32158__$1;
(statearr_32176_33925[(2)] = null);

(statearr_32176_33925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (9))){
var state_32158__$1 = state_32158;
var statearr_32177_33927 = state_32158__$1;
(statearr_32177_33927[(2)] = null);

(statearr_32177_33927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (5))){
var state_32158__$1 = state_32158;
var statearr_32180_33928 = state_32158__$1;
(statearr_32180_33928[(2)] = null);

(statearr_32180_33928[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (10))){
var inst_32150 = (state_32158[(2)]);
var state_32158__$1 = state_32158;
var statearr_32182_33930 = state_32158__$1;
(statearr_32182_33930[(2)] = inst_32150);

(statearr_32182_33930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32159 === (8))){
var inst_32139 = (state_32158[(7)]);
var state_32158__$1 = state_32158;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32158__$1,(11),out,inst_32139);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29713__auto__ = null;
var cljs$core$async$state_machine__29713__auto____0 = (function (){
var statearr_32183 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32183[(0)] = cljs$core$async$state_machine__29713__auto__);

(statearr_32183[(1)] = (1));

return statearr_32183;
});
var cljs$core$async$state_machine__29713__auto____1 = (function (state_32158){
while(true){
var ret_value__29714__auto__ = (function (){try{while(true){
var result__29715__auto__ = switch__29712__auto__(state_32158);
if(cljs.core.keyword_identical_QMARK_(result__29715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29715__auto__;
}
break;
}
}catch (e32184){var ex__29716__auto__ = e32184;
var statearr_32185_33938 = state_32158;
(statearr_32185_33938[(2)] = ex__29716__auto__);


if(cljs.core.seq((state_32158[(4)]))){
var statearr_32186_33939 = state_32158;
(statearr_32186_33939[(1)] = cljs.core.first((state_32158[(4)])));

} else {
throw ex__29716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33941 = state_32158;
state_32158 = G__33941;
continue;
} else {
return ret_value__29714__auto__;
}
break;
}
});
cljs$core$async$state_machine__29713__auto__ = function(state_32158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29713__auto____1.call(this,state_32158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29713__auto____0;
cljs$core$async$state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29713__auto____1;
return cljs$core$async$state_machine__29713__auto__;
})()
})();
var state__29899__auto__ = (function (){var statearr_32187 = f__29898__auto__();
(statearr_32187[(6)] = c__29897__auto___33888);

return statearr_32187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29899__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32189 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32189 = (function (f,ch,meta32190){
this.f = f;
this.ch = ch;
this.meta32190 = meta32190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32191,meta32190__$1){
var self__ = this;
var _32191__$1 = this;
return (new cljs.core.async.t_cljs$core$async32189(self__.f,self__.ch,meta32190__$1));
}));

(cljs.core.async.t_cljs$core$async32189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32191){
var self__ = this;
var _32191__$1 = this;
return self__.meta32190;
}));

(cljs.core.async.t_cljs$core$async32189.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32189.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32189.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32189.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32189.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32196 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32196 = (function (f,ch,meta32190,_,fn1,meta32197){
this.f = f;
this.ch = ch;
this.meta32190 = meta32190;
this._ = _;
this.fn1 = fn1;
this.meta32197 = meta32197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32198,meta32197__$1){
var self__ = this;
var _32198__$1 = this;
return (new cljs.core.async.t_cljs$core$async32196(self__.f,self__.ch,self__.meta32190,self__._,self__.fn1,meta32197__$1));
}));

(cljs.core.async.t_cljs$core$async32196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32198){
var self__ = this;
var _32198__$1 = this;
return self__.meta32197;
}));

(cljs.core.async.t_cljs$core$async32196.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32196.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32196.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32196.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32188_SHARP_){
var G__32200 = (((p1__32188_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32188_SHARP_) : self__.f.call(null,p1__32188_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32200) : f1.call(null,G__32200));
});
}));

(cljs.core.async.t_cljs$core$async32196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32190","meta32190",684492903,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32189","cljs.core.async/t_cljs$core$async32189",1567207741,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32197","meta32197",-1644013231,null)], null);
}));

(cljs.core.async.t_cljs$core$async32196.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32196");

(cljs.core.async.t_cljs$core$async32196.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32196");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32196.
 */
cljs.core.async.__GT_t_cljs$core$async32196 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32196(f__$1,ch__$1,meta32190__$1,___$2,fn1__$1,meta32197){
return (new cljs.core.async.t_cljs$core$async32196(f__$1,ch__$1,meta32190__$1,___$2,fn1__$1,meta32197));
});

}

return (new cljs.core.async.t_cljs$core$async32196(self__.f,self__.ch,self__.meta32190,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32202 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32202) : self__.f.call(null,G__32202));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32189.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32189.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32189.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32190","meta32190",684492903,null)], null);
}));

(cljs.core.async.t_cljs$core$async32189.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32189.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32189");

(cljs.core.async.t_cljs$core$async32189.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32189");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32189.
 */
cljs.core.async.__GT_t_cljs$core$async32189 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32189(f__$1,ch__$1,meta32190){
return (new cljs.core.async.t_cljs$core$async32189(f__$1,ch__$1,meta32190));
});

}

return (new cljs.core.async.t_cljs$core$async32189(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32204 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32204 = (function (f,ch,meta32205){
this.f = f;
this.ch = ch;
this.meta32205 = meta32205;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32206,meta32205__$1){
var self__ = this;
var _32206__$1 = this;
return (new cljs.core.async.t_cljs$core$async32204(self__.f,self__.ch,meta32205__$1));
}));

(cljs.core.async.t_cljs$core$async32204.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32206){
var self__ = this;
var _32206__$1 = this;
return self__.meta32205;
}));

(cljs.core.async.t_cljs$core$async32204.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32204.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32204.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32204.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32204.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32204.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32204.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32205","meta32205",-146488451,null)], null);
}));

(cljs.core.async.t_cljs$core$async32204.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32204.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32204");

(cljs.core.async.t_cljs$core$async32204.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32204");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32204.
 */
cljs.core.async.__GT_t_cljs$core$async32204 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32204(f__$1,ch__$1,meta32205){
return (new cljs.core.async.t_cljs$core$async32204(f__$1,ch__$1,meta32205));
});

}

return (new cljs.core.async.t_cljs$core$async32204(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32224 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32224 = (function (p,ch,meta32225){
this.p = p;
this.ch = ch;
this.meta32225 = meta32225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32226,meta32225__$1){
var self__ = this;
var _32226__$1 = this;
return (new cljs.core.async.t_cljs$core$async32224(self__.p,self__.ch,meta32225__$1));
}));

(cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32226){
var self__ = this;
var _32226__$1 = this;
return self__.meta32225;
}));

(cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32225","meta32225",-1519303991,null)], null);
}));

(cljs.core.async.t_cljs$core$async32224.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32224");

(cljs.core.async.t_cljs$core$async32224.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32224");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32224.
 */
cljs.core.async.__GT_t_cljs$core$async32224 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32224(p__$1,ch__$1,meta32225){
return (new cljs.core.async.t_cljs$core$async32224(p__$1,ch__$1,meta32225));
});

}

return (new cljs.core.async.t_cljs$core$async32224(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32235 = arguments.length;
switch (G__32235) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29897__auto___34039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29898__auto__ = (function (){var switch__29712__auto__ = (function (state_32264){
var state_val_32265 = (state_32264[(1)]);
if((state_val_32265 === (7))){
var inst_32260 = (state_32264[(2)]);
var state_32264__$1 = state_32264;
var statearr_32268_34055 = state_32264__$1;
(statearr_32268_34055[(2)] = inst_32260);

(statearr_32268_34055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32265 === (1))){
var state_32264__$1 = state_32264;
var statearr_32269_34062 = state_32264__$1;
(statearr_32269_34062[(2)] = null);

(statearr_32269_34062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32265 === (4))){
var inst_32246 = (state_32264[(7)]);
var inst_32246__$1 = (state_32264[(2)]);
var inst_32247 = (inst_32246__$1 == null);
var state_32264__$1 = (function (){var statearr_32270 = state_32264;
(statearr_32270[(7)] = inst_32246__$1);

return statearr_32270;
})();
if(cljs.core.truth_(inst_32247)){
var statearr_32273_34082 = state_32264__$1;
(statearr_32273_34082[(1)] = (5));

} else {
var statearr_32274_34087 = state_32264__$1;
(statearr_32274_34087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32265 === (6))){
var inst_32246 = (state_32264[(7)]);
var inst_32251 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32246) : p.call(null,inst_32246));
var state_32264__$1 = state_32264;
if(cljs.core.truth_(inst_32251)){
var statearr_32275_34099 = state_32264__$1;
(statearr_32275_34099[(1)] = (8));

} else {
var statearr_32276_34102 = state_32264__$1;
(statearr_32276_34102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32265 === (3))){
var inst_32262 = (state_32264[(2)]);
var state_32264__$1 = state_32264;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32264__$1,inst_32262);
} else {
if((state_val_32265 === (2))){
var state_32264__$1 = state_32264;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32264__$1,(4),ch);
} else {
if((state_val_32265 === (11))){
var inst_32254 = (state_32264[(2)]);
var state_32264__$1 = state_32264;
var statearr_32278_34117 = state_32264__$1;
(statearr_32278_34117[(2)] = inst_32254);

(statearr_32278_34117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32265 === (9))){
var state_32264__$1 = state_32264;
var statearr_32279_34126 = state_32264__$1;
(statearr_32279_34126[(2)] = null);

(statearr_32279_34126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32265 === (5))){
var inst_32249 = cljs.core.async.close_BANG_(out);
var state_32264__$1 = state_32264;
var statearr_32280_34135 = state_32264__$1;
(statearr_32280_34135[(2)] = inst_32249);

(statearr_32280_34135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32265 === (10))){
var inst_32257 = (state_32264[(2)]);
var state_32264__$1 = (function (){var statearr_32281 = state_32264;
(statearr_32281[(8)] = inst_32257);

return statearr_32281;
})();
var statearr_32282_34151 = state_32264__$1;
(statearr_32282_34151[(2)] = null);

(statearr_32282_34151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32265 === (8))){
var inst_32246 = (state_32264[(7)]);
var state_32264__$1 = state_32264;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32264__$1,(11),out,inst_32246);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29713__auto__ = null;
var cljs$core$async$state_machine__29713__auto____0 = (function (){
var statearr_32283 = [null,null,null,null,null,null,null,null,null];
(statearr_32283[(0)] = cljs$core$async$state_machine__29713__auto__);

(statearr_32283[(1)] = (1));

return statearr_32283;
});
var cljs$core$async$state_machine__29713__auto____1 = (function (state_32264){
while(true){
var ret_value__29714__auto__ = (function (){try{while(true){
var result__29715__auto__ = switch__29712__auto__(state_32264);
if(cljs.core.keyword_identical_QMARK_(result__29715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29715__auto__;
}
break;
}
}catch (e32284){var ex__29716__auto__ = e32284;
var statearr_32285_34170 = state_32264;
(statearr_32285_34170[(2)] = ex__29716__auto__);


if(cljs.core.seq((state_32264[(4)]))){
var statearr_32286_34171 = state_32264;
(statearr_32286_34171[(1)] = cljs.core.first((state_32264[(4)])));

} else {
throw ex__29716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34176 = state_32264;
state_32264 = G__34176;
continue;
} else {
return ret_value__29714__auto__;
}
break;
}
});
cljs$core$async$state_machine__29713__auto__ = function(state_32264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29713__auto____1.call(this,state_32264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29713__auto____0;
cljs$core$async$state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29713__auto____1;
return cljs$core$async$state_machine__29713__auto__;
})()
})();
var state__29899__auto__ = (function (){var statearr_32287 = f__29898__auto__();
(statearr_32287[(6)] = c__29897__auto___34039);

return statearr_32287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29899__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32289 = arguments.length;
switch (G__32289) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29897__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29898__auto__ = (function (){var switch__29712__auto__ = (function (state_32353){
var state_val_32354 = (state_32353[(1)]);
if((state_val_32354 === (7))){
var inst_32349 = (state_32353[(2)]);
var state_32353__$1 = state_32353;
var statearr_32355_34183 = state_32353__$1;
(statearr_32355_34183[(2)] = inst_32349);

(statearr_32355_34183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (20))){
var inst_32319 = (state_32353[(7)]);
var inst_32330 = (state_32353[(2)]);
var inst_32331 = cljs.core.next(inst_32319);
var inst_32305 = inst_32331;
var inst_32306 = null;
var inst_32307 = (0);
var inst_32308 = (0);
var state_32353__$1 = (function (){var statearr_32357 = state_32353;
(statearr_32357[(8)] = inst_32308);

(statearr_32357[(9)] = inst_32306);

(statearr_32357[(10)] = inst_32307);

(statearr_32357[(11)] = inst_32330);

(statearr_32357[(12)] = inst_32305);

return statearr_32357;
})();
var statearr_32358_34192 = state_32353__$1;
(statearr_32358_34192[(2)] = null);

(statearr_32358_34192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (1))){
var state_32353__$1 = state_32353;
var statearr_32361_34195 = state_32353__$1;
(statearr_32361_34195[(2)] = null);

(statearr_32361_34195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (4))){
var inst_32294 = (state_32353[(13)]);
var inst_32294__$1 = (state_32353[(2)]);
var inst_32295 = (inst_32294__$1 == null);
var state_32353__$1 = (function (){var statearr_32362 = state_32353;
(statearr_32362[(13)] = inst_32294__$1);

return statearr_32362;
})();
if(cljs.core.truth_(inst_32295)){
var statearr_32363_34201 = state_32353__$1;
(statearr_32363_34201[(1)] = (5));

} else {
var statearr_32365_34204 = state_32353__$1;
(statearr_32365_34204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (15))){
var state_32353__$1 = state_32353;
var statearr_32370_34207 = state_32353__$1;
(statearr_32370_34207[(2)] = null);

(statearr_32370_34207[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (21))){
var state_32353__$1 = state_32353;
var statearr_32373_34212 = state_32353__$1;
(statearr_32373_34212[(2)] = null);

(statearr_32373_34212[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (13))){
var inst_32308 = (state_32353[(8)]);
var inst_32306 = (state_32353[(9)]);
var inst_32307 = (state_32353[(10)]);
var inst_32305 = (state_32353[(12)]);
var inst_32315 = (state_32353[(2)]);
var inst_32316 = (inst_32308 + (1));
var tmp32367 = inst_32306;
var tmp32368 = inst_32307;
var tmp32369 = inst_32305;
var inst_32305__$1 = tmp32369;
var inst_32306__$1 = tmp32367;
var inst_32307__$1 = tmp32368;
var inst_32308__$1 = inst_32316;
var state_32353__$1 = (function (){var statearr_32374 = state_32353;
(statearr_32374[(8)] = inst_32308__$1);

(statearr_32374[(9)] = inst_32306__$1);

(statearr_32374[(14)] = inst_32315);

(statearr_32374[(10)] = inst_32307__$1);

(statearr_32374[(12)] = inst_32305__$1);

return statearr_32374;
})();
var statearr_32375_34223 = state_32353__$1;
(statearr_32375_34223[(2)] = null);

(statearr_32375_34223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (22))){
var state_32353__$1 = state_32353;
var statearr_32376_34224 = state_32353__$1;
(statearr_32376_34224[(2)] = null);

(statearr_32376_34224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (6))){
var inst_32294 = (state_32353[(13)]);
var inst_32303 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32294) : f.call(null,inst_32294));
var inst_32304 = cljs.core.seq(inst_32303);
var inst_32305 = inst_32304;
var inst_32306 = null;
var inst_32307 = (0);
var inst_32308 = (0);
var state_32353__$1 = (function (){var statearr_32378 = state_32353;
(statearr_32378[(8)] = inst_32308);

(statearr_32378[(9)] = inst_32306);

(statearr_32378[(10)] = inst_32307);

(statearr_32378[(12)] = inst_32305);

return statearr_32378;
})();
var statearr_32379_34227 = state_32353__$1;
(statearr_32379_34227[(2)] = null);

(statearr_32379_34227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (17))){
var inst_32319 = (state_32353[(7)]);
var inst_32323 = cljs.core.chunk_first(inst_32319);
var inst_32324 = cljs.core.chunk_rest(inst_32319);
var inst_32325 = cljs.core.count(inst_32323);
var inst_32305 = inst_32324;
var inst_32306 = inst_32323;
var inst_32307 = inst_32325;
var inst_32308 = (0);
var state_32353__$1 = (function (){var statearr_32381 = state_32353;
(statearr_32381[(8)] = inst_32308);

(statearr_32381[(9)] = inst_32306);

(statearr_32381[(10)] = inst_32307);

(statearr_32381[(12)] = inst_32305);

return statearr_32381;
})();
var statearr_32382_34242 = state_32353__$1;
(statearr_32382_34242[(2)] = null);

(statearr_32382_34242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (3))){
var inst_32351 = (state_32353[(2)]);
var state_32353__$1 = state_32353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32353__$1,inst_32351);
} else {
if((state_val_32354 === (12))){
var inst_32339 = (state_32353[(2)]);
var state_32353__$1 = state_32353;
var statearr_32383_34247 = state_32353__$1;
(statearr_32383_34247[(2)] = inst_32339);

(statearr_32383_34247[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (2))){
var state_32353__$1 = state_32353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32353__$1,(4),in$);
} else {
if((state_val_32354 === (23))){
var inst_32347 = (state_32353[(2)]);
var state_32353__$1 = state_32353;
var statearr_32384_34252 = state_32353__$1;
(statearr_32384_34252[(2)] = inst_32347);

(statearr_32384_34252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (19))){
var inst_32334 = (state_32353[(2)]);
var state_32353__$1 = state_32353;
var statearr_32385_34254 = state_32353__$1;
(statearr_32385_34254[(2)] = inst_32334);

(statearr_32385_34254[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (11))){
var inst_32319 = (state_32353[(7)]);
var inst_32305 = (state_32353[(12)]);
var inst_32319__$1 = cljs.core.seq(inst_32305);
var state_32353__$1 = (function (){var statearr_32386 = state_32353;
(statearr_32386[(7)] = inst_32319__$1);

return statearr_32386;
})();
if(inst_32319__$1){
var statearr_32387_34264 = state_32353__$1;
(statearr_32387_34264[(1)] = (14));

} else {
var statearr_32388_34265 = state_32353__$1;
(statearr_32388_34265[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (9))){
var inst_32341 = (state_32353[(2)]);
var inst_32342 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32353__$1 = (function (){var statearr_32389 = state_32353;
(statearr_32389[(15)] = inst_32341);

return statearr_32389;
})();
if(cljs.core.truth_(inst_32342)){
var statearr_32390_34266 = state_32353__$1;
(statearr_32390_34266[(1)] = (21));

} else {
var statearr_32391_34267 = state_32353__$1;
(statearr_32391_34267[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (5))){
var inst_32297 = cljs.core.async.close_BANG_(out);
var state_32353__$1 = state_32353;
var statearr_32392_34271 = state_32353__$1;
(statearr_32392_34271[(2)] = inst_32297);

(statearr_32392_34271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (14))){
var inst_32319 = (state_32353[(7)]);
var inst_32321 = cljs.core.chunked_seq_QMARK_(inst_32319);
var state_32353__$1 = state_32353;
if(inst_32321){
var statearr_32395_34272 = state_32353__$1;
(statearr_32395_34272[(1)] = (17));

} else {
var statearr_32396_34276 = state_32353__$1;
(statearr_32396_34276[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (16))){
var inst_32337 = (state_32353[(2)]);
var state_32353__$1 = state_32353;
var statearr_32397_34277 = state_32353__$1;
(statearr_32397_34277[(2)] = inst_32337);

(statearr_32397_34277[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (10))){
var inst_32308 = (state_32353[(8)]);
var inst_32306 = (state_32353[(9)]);
var inst_32313 = cljs.core._nth(inst_32306,inst_32308);
var state_32353__$1 = state_32353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32353__$1,(13),out,inst_32313);
} else {
if((state_val_32354 === (18))){
var inst_32319 = (state_32353[(7)]);
var inst_32328 = cljs.core.first(inst_32319);
var state_32353__$1 = state_32353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32353__$1,(20),out,inst_32328);
} else {
if((state_val_32354 === (8))){
var inst_32308 = (state_32353[(8)]);
var inst_32307 = (state_32353[(10)]);
var inst_32310 = (inst_32308 < inst_32307);
var inst_32311 = inst_32310;
var state_32353__$1 = state_32353;
if(cljs.core.truth_(inst_32311)){
var statearr_32400_34288 = state_32353__$1;
(statearr_32400_34288[(1)] = (10));

} else {
var statearr_32401_34293 = state_32353__$1;
(statearr_32401_34293[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29713__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29713__auto____0 = (function (){
var statearr_32402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32402[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29713__auto__);

(statearr_32402[(1)] = (1));

return statearr_32402;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29713__auto____1 = (function (state_32353){
while(true){
var ret_value__29714__auto__ = (function (){try{while(true){
var result__29715__auto__ = switch__29712__auto__(state_32353);
if(cljs.core.keyword_identical_QMARK_(result__29715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29715__auto__;
}
break;
}
}catch (e32403){var ex__29716__auto__ = e32403;
var statearr_32404_34301 = state_32353;
(statearr_32404_34301[(2)] = ex__29716__auto__);


if(cljs.core.seq((state_32353[(4)]))){
var statearr_32405_34302 = state_32353;
(statearr_32405_34302[(1)] = cljs.core.first((state_32353[(4)])));

} else {
throw ex__29716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34303 = state_32353;
state_32353 = G__34303;
continue;
} else {
return ret_value__29714__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29713__auto__ = function(state_32353){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29713__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29713__auto____1.call(this,state_32353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29713__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29713__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29713__auto__;
})()
})();
var state__29899__auto__ = (function (){var statearr_32406 = f__29898__auto__();
(statearr_32406[(6)] = c__29897__auto__);

return statearr_32406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29899__auto__);
}));

return c__29897__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32408 = arguments.length;
switch (G__32408) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32418 = arguments.length;
switch (G__32418) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32422 = arguments.length;
switch (G__32422) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29897__auto___34309 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29898__auto__ = (function (){var switch__29712__auto__ = (function (state_32450){
var state_val_32451 = (state_32450[(1)]);
if((state_val_32451 === (7))){
var inst_32445 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
var statearr_32454_34315 = state_32450__$1;
(statearr_32454_34315[(2)] = inst_32445);

(statearr_32454_34315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (1))){
var inst_32427 = null;
var state_32450__$1 = (function (){var statearr_32456 = state_32450;
(statearr_32456[(7)] = inst_32427);

return statearr_32456;
})();
var statearr_32457_34316 = state_32450__$1;
(statearr_32457_34316[(2)] = null);

(statearr_32457_34316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (4))){
var inst_32430 = (state_32450[(8)]);
var inst_32430__$1 = (state_32450[(2)]);
var inst_32431 = (inst_32430__$1 == null);
var inst_32432 = cljs.core.not(inst_32431);
var state_32450__$1 = (function (){var statearr_32466 = state_32450;
(statearr_32466[(8)] = inst_32430__$1);

return statearr_32466;
})();
if(inst_32432){
var statearr_32471_34317 = state_32450__$1;
(statearr_32471_34317[(1)] = (5));

} else {
var statearr_32472_34318 = state_32450__$1;
(statearr_32472_34318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (6))){
var state_32450__$1 = state_32450;
var statearr_32474_34319 = state_32450__$1;
(statearr_32474_34319[(2)] = null);

(statearr_32474_34319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (3))){
var inst_32447 = (state_32450[(2)]);
var inst_32448 = cljs.core.async.close_BANG_(out);
var state_32450__$1 = (function (){var statearr_32476 = state_32450;
(statearr_32476[(9)] = inst_32447);

return statearr_32476;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32450__$1,inst_32448);
} else {
if((state_val_32451 === (2))){
var state_32450__$1 = state_32450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32450__$1,(4),ch);
} else {
if((state_val_32451 === (11))){
var inst_32430 = (state_32450[(8)]);
var inst_32439 = (state_32450[(2)]);
var inst_32427 = inst_32430;
var state_32450__$1 = (function (){var statearr_32479 = state_32450;
(statearr_32479[(10)] = inst_32439);

(statearr_32479[(7)] = inst_32427);

return statearr_32479;
})();
var statearr_32485_34321 = state_32450__$1;
(statearr_32485_34321[(2)] = null);

(statearr_32485_34321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (9))){
var inst_32430 = (state_32450[(8)]);
var state_32450__$1 = state_32450;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32450__$1,(11),out,inst_32430);
} else {
if((state_val_32451 === (5))){
var inst_32430 = (state_32450[(8)]);
var inst_32427 = (state_32450[(7)]);
var inst_32434 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32430,inst_32427);
var state_32450__$1 = state_32450;
if(inst_32434){
var statearr_32487_34324 = state_32450__$1;
(statearr_32487_34324[(1)] = (8));

} else {
var statearr_32488_34325 = state_32450__$1;
(statearr_32488_34325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (10))){
var inst_32442 = (state_32450[(2)]);
var state_32450__$1 = state_32450;
var statearr_32489_34327 = state_32450__$1;
(statearr_32489_34327[(2)] = inst_32442);

(statearr_32489_34327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32451 === (8))){
var inst_32427 = (state_32450[(7)]);
var tmp32486 = inst_32427;
var inst_32427__$1 = tmp32486;
var state_32450__$1 = (function (){var statearr_32491 = state_32450;
(statearr_32491[(7)] = inst_32427__$1);

return statearr_32491;
})();
var statearr_32493_34329 = state_32450__$1;
(statearr_32493_34329[(2)] = null);

(statearr_32493_34329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29713__auto__ = null;
var cljs$core$async$state_machine__29713__auto____0 = (function (){
var statearr_32495 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32495[(0)] = cljs$core$async$state_machine__29713__auto__);

(statearr_32495[(1)] = (1));

return statearr_32495;
});
var cljs$core$async$state_machine__29713__auto____1 = (function (state_32450){
while(true){
var ret_value__29714__auto__ = (function (){try{while(true){
var result__29715__auto__ = switch__29712__auto__(state_32450);
if(cljs.core.keyword_identical_QMARK_(result__29715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29715__auto__;
}
break;
}
}catch (e32496){var ex__29716__auto__ = e32496;
var statearr_32497_34333 = state_32450;
(statearr_32497_34333[(2)] = ex__29716__auto__);


if(cljs.core.seq((state_32450[(4)]))){
var statearr_32498_34334 = state_32450;
(statearr_32498_34334[(1)] = cljs.core.first((state_32450[(4)])));

} else {
throw ex__29716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34340 = state_32450;
state_32450 = G__34340;
continue;
} else {
return ret_value__29714__auto__;
}
break;
}
});
cljs$core$async$state_machine__29713__auto__ = function(state_32450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29713__auto____1.call(this,state_32450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29713__auto____0;
cljs$core$async$state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29713__auto____1;
return cljs$core$async$state_machine__29713__auto__;
})()
})();
var state__29899__auto__ = (function (){var statearr_32500 = f__29898__auto__();
(statearr_32500[(6)] = c__29897__auto___34309);

return statearr_32500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29899__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32502 = arguments.length;
switch (G__32502) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29897__auto___34343 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29898__auto__ = (function (){var switch__29712__auto__ = (function (state_32542){
var state_val_32543 = (state_32542[(1)]);
if((state_val_32543 === (7))){
var inst_32538 = (state_32542[(2)]);
var state_32542__$1 = state_32542;
var statearr_32545_34345 = state_32542__$1;
(statearr_32545_34345[(2)] = inst_32538);

(statearr_32545_34345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32543 === (1))){
var inst_32504 = (new Array(n));
var inst_32505 = inst_32504;
var inst_32506 = (0);
var state_32542__$1 = (function (){var statearr_32547 = state_32542;
(statearr_32547[(7)] = inst_32506);

(statearr_32547[(8)] = inst_32505);

return statearr_32547;
})();
var statearr_32548_34346 = state_32542__$1;
(statearr_32548_34346[(2)] = null);

(statearr_32548_34346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32543 === (4))){
var inst_32509 = (state_32542[(9)]);
var inst_32509__$1 = (state_32542[(2)]);
var inst_32510 = (inst_32509__$1 == null);
var inst_32511 = cljs.core.not(inst_32510);
var state_32542__$1 = (function (){var statearr_32551 = state_32542;
(statearr_32551[(9)] = inst_32509__$1);

return statearr_32551;
})();
if(inst_32511){
var statearr_32552_34347 = state_32542__$1;
(statearr_32552_34347[(1)] = (5));

} else {
var statearr_32554_34348 = state_32542__$1;
(statearr_32554_34348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32543 === (15))){
var inst_32532 = (state_32542[(2)]);
var state_32542__$1 = state_32542;
var statearr_32555_34349 = state_32542__$1;
(statearr_32555_34349[(2)] = inst_32532);

(statearr_32555_34349[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32543 === (13))){
var state_32542__$1 = state_32542;
var statearr_32556_34354 = state_32542__$1;
(statearr_32556_34354[(2)] = null);

(statearr_32556_34354[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32543 === (6))){
var inst_32506 = (state_32542[(7)]);
var inst_32528 = (inst_32506 > (0));
var state_32542__$1 = state_32542;
if(cljs.core.truth_(inst_32528)){
var statearr_32557_34360 = state_32542__$1;
(statearr_32557_34360[(1)] = (12));

} else {
var statearr_32558_34361 = state_32542__$1;
(statearr_32558_34361[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32543 === (3))){
var inst_32540 = (state_32542[(2)]);
var state_32542__$1 = state_32542;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32542__$1,inst_32540);
} else {
if((state_val_32543 === (12))){
var inst_32505 = (state_32542[(8)]);
var inst_32530 = cljs.core.vec(inst_32505);
var state_32542__$1 = state_32542;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32542__$1,(15),out,inst_32530);
} else {
if((state_val_32543 === (2))){
var state_32542__$1 = state_32542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32542__$1,(4),ch);
} else {
if((state_val_32543 === (11))){
var inst_32521 = (state_32542[(2)]);
var inst_32522 = (new Array(n));
var inst_32505 = inst_32522;
var inst_32506 = (0);
var state_32542__$1 = (function (){var statearr_32560 = state_32542;
(statearr_32560[(10)] = inst_32521);

(statearr_32560[(7)] = inst_32506);

(statearr_32560[(8)] = inst_32505);

return statearr_32560;
})();
var statearr_32561_34373 = state_32542__$1;
(statearr_32561_34373[(2)] = null);

(statearr_32561_34373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32543 === (9))){
var inst_32505 = (state_32542[(8)]);
var inst_32519 = cljs.core.vec(inst_32505);
var state_32542__$1 = state_32542;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32542__$1,(11),out,inst_32519);
} else {
if((state_val_32543 === (5))){
var inst_32514 = (state_32542[(11)]);
var inst_32506 = (state_32542[(7)]);
var inst_32509 = (state_32542[(9)]);
var inst_32505 = (state_32542[(8)]);
var inst_32513 = (inst_32505[inst_32506] = inst_32509);
var inst_32514__$1 = (inst_32506 + (1));
var inst_32515 = (inst_32514__$1 < n);
var state_32542__$1 = (function (){var statearr_32563 = state_32542;
(statearr_32563[(11)] = inst_32514__$1);

(statearr_32563[(12)] = inst_32513);

return statearr_32563;
})();
if(cljs.core.truth_(inst_32515)){
var statearr_32564_34376 = state_32542__$1;
(statearr_32564_34376[(1)] = (8));

} else {
var statearr_32565_34377 = state_32542__$1;
(statearr_32565_34377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32543 === (14))){
var inst_32535 = (state_32542[(2)]);
var inst_32536 = cljs.core.async.close_BANG_(out);
var state_32542__$1 = (function (){var statearr_32567 = state_32542;
(statearr_32567[(13)] = inst_32535);

return statearr_32567;
})();
var statearr_32568_34378 = state_32542__$1;
(statearr_32568_34378[(2)] = inst_32536);

(statearr_32568_34378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32543 === (10))){
var inst_32525 = (state_32542[(2)]);
var state_32542__$1 = state_32542;
var statearr_32569_34379 = state_32542__$1;
(statearr_32569_34379[(2)] = inst_32525);

(statearr_32569_34379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32543 === (8))){
var inst_32514 = (state_32542[(11)]);
var inst_32505 = (state_32542[(8)]);
var tmp32566 = inst_32505;
var inst_32505__$1 = tmp32566;
var inst_32506 = inst_32514;
var state_32542__$1 = (function (){var statearr_32572 = state_32542;
(statearr_32572[(7)] = inst_32506);

(statearr_32572[(8)] = inst_32505__$1);

return statearr_32572;
})();
var statearr_32573_34380 = state_32542__$1;
(statearr_32573_34380[(2)] = null);

(statearr_32573_34380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29713__auto__ = null;
var cljs$core$async$state_machine__29713__auto____0 = (function (){
var statearr_32574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32574[(0)] = cljs$core$async$state_machine__29713__auto__);

(statearr_32574[(1)] = (1));

return statearr_32574;
});
var cljs$core$async$state_machine__29713__auto____1 = (function (state_32542){
while(true){
var ret_value__29714__auto__ = (function (){try{while(true){
var result__29715__auto__ = switch__29712__auto__(state_32542);
if(cljs.core.keyword_identical_QMARK_(result__29715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29715__auto__;
}
break;
}
}catch (e32579){var ex__29716__auto__ = e32579;
var statearr_32580_34385 = state_32542;
(statearr_32580_34385[(2)] = ex__29716__auto__);


if(cljs.core.seq((state_32542[(4)]))){
var statearr_32582_34386 = state_32542;
(statearr_32582_34386[(1)] = cljs.core.first((state_32542[(4)])));

} else {
throw ex__29716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34394 = state_32542;
state_32542 = G__34394;
continue;
} else {
return ret_value__29714__auto__;
}
break;
}
});
cljs$core$async$state_machine__29713__auto__ = function(state_32542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29713__auto____1.call(this,state_32542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29713__auto____0;
cljs$core$async$state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29713__auto____1;
return cljs$core$async$state_machine__29713__auto__;
})()
})();
var state__29899__auto__ = (function (){var statearr_32588 = f__29898__auto__();
(statearr_32588[(6)] = c__29897__auto___34343);

return statearr_32588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29899__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32601 = arguments.length;
switch (G__32601) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29897__auto___34408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29898__auto__ = (function (){var switch__29712__auto__ = (function (state_32651){
var state_val_32652 = (state_32651[(1)]);
if((state_val_32652 === (7))){
var inst_32646 = (state_32651[(2)]);
var state_32651__$1 = state_32651;
var statearr_32653_34412 = state_32651__$1;
(statearr_32653_34412[(2)] = inst_32646);

(statearr_32653_34412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (1))){
var inst_32607 = [];
var inst_32608 = inst_32607;
var inst_32609 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32651__$1 = (function (){var statearr_32654 = state_32651;
(statearr_32654[(7)] = inst_32609);

(statearr_32654[(8)] = inst_32608);

return statearr_32654;
})();
var statearr_32655_34417 = state_32651__$1;
(statearr_32655_34417[(2)] = null);

(statearr_32655_34417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (4))){
var inst_32612 = (state_32651[(9)]);
var inst_32612__$1 = (state_32651[(2)]);
var inst_32613 = (inst_32612__$1 == null);
var inst_32614 = cljs.core.not(inst_32613);
var state_32651__$1 = (function (){var statearr_32656 = state_32651;
(statearr_32656[(9)] = inst_32612__$1);

return statearr_32656;
})();
if(inst_32614){
var statearr_32657_34423 = state_32651__$1;
(statearr_32657_34423[(1)] = (5));

} else {
var statearr_32658_34428 = state_32651__$1;
(statearr_32658_34428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (15))){
var inst_32640 = (state_32651[(2)]);
var state_32651__$1 = state_32651;
var statearr_32659_34429 = state_32651__$1;
(statearr_32659_34429[(2)] = inst_32640);

(statearr_32659_34429[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (13))){
var state_32651__$1 = state_32651;
var statearr_32660_34430 = state_32651__$1;
(statearr_32660_34430[(2)] = null);

(statearr_32660_34430[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (6))){
var inst_32608 = (state_32651[(8)]);
var inst_32634 = inst_32608.length;
var inst_32635 = (inst_32634 > (0));
var state_32651__$1 = state_32651;
if(cljs.core.truth_(inst_32635)){
var statearr_32661_34432 = state_32651__$1;
(statearr_32661_34432[(1)] = (12));

} else {
var statearr_32662_34433 = state_32651__$1;
(statearr_32662_34433[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (3))){
var inst_32648 = (state_32651[(2)]);
var state_32651__$1 = state_32651;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32651__$1,inst_32648);
} else {
if((state_val_32652 === (12))){
var inst_32608 = (state_32651[(8)]);
var inst_32638 = cljs.core.vec(inst_32608);
var state_32651__$1 = state_32651;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32651__$1,(15),out,inst_32638);
} else {
if((state_val_32652 === (2))){
var state_32651__$1 = state_32651;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32651__$1,(4),ch);
} else {
if((state_val_32652 === (11))){
var inst_32616 = (state_32651[(10)]);
var inst_32612 = (state_32651[(9)]);
var inst_32626 = (state_32651[(2)]);
var inst_32627 = [];
var inst_32628 = inst_32627.push(inst_32612);
var inst_32608 = inst_32627;
var inst_32609 = inst_32616;
var state_32651__$1 = (function (){var statearr_32663 = state_32651;
(statearr_32663[(7)] = inst_32609);

(statearr_32663[(8)] = inst_32608);

(statearr_32663[(11)] = inst_32626);

(statearr_32663[(12)] = inst_32628);

return statearr_32663;
})();
var statearr_32664_34435 = state_32651__$1;
(statearr_32664_34435[(2)] = null);

(statearr_32664_34435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (9))){
var inst_32608 = (state_32651[(8)]);
var inst_32624 = cljs.core.vec(inst_32608);
var state_32651__$1 = state_32651;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32651__$1,(11),out,inst_32624);
} else {
if((state_val_32652 === (5))){
var inst_32609 = (state_32651[(7)]);
var inst_32616 = (state_32651[(10)]);
var inst_32612 = (state_32651[(9)]);
var inst_32616__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32612) : f.call(null,inst_32612));
var inst_32617 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32616__$1,inst_32609);
var inst_32618 = cljs.core.keyword_identical_QMARK_(inst_32609,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32619 = ((inst_32617) || (inst_32618));
var state_32651__$1 = (function (){var statearr_32665 = state_32651;
(statearr_32665[(10)] = inst_32616__$1);

return statearr_32665;
})();
if(cljs.core.truth_(inst_32619)){
var statearr_32666_34438 = state_32651__$1;
(statearr_32666_34438[(1)] = (8));

} else {
var statearr_32667_34439 = state_32651__$1;
(statearr_32667_34439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (14))){
var inst_32643 = (state_32651[(2)]);
var inst_32644 = cljs.core.async.close_BANG_(out);
var state_32651__$1 = (function (){var statearr_32670 = state_32651;
(statearr_32670[(13)] = inst_32643);

return statearr_32670;
})();
var statearr_32671_34440 = state_32651__$1;
(statearr_32671_34440[(2)] = inst_32644);

(statearr_32671_34440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (10))){
var inst_32631 = (state_32651[(2)]);
var state_32651__$1 = state_32651;
var statearr_32673_34442 = state_32651__$1;
(statearr_32673_34442[(2)] = inst_32631);

(statearr_32673_34442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (8))){
var inst_32608 = (state_32651[(8)]);
var inst_32616 = (state_32651[(10)]);
var inst_32612 = (state_32651[(9)]);
var inst_32621 = inst_32608.push(inst_32612);
var tmp32668 = inst_32608;
var inst_32608__$1 = tmp32668;
var inst_32609 = inst_32616;
var state_32651__$1 = (function (){var statearr_32674 = state_32651;
(statearr_32674[(14)] = inst_32621);

(statearr_32674[(7)] = inst_32609);

(statearr_32674[(8)] = inst_32608__$1);

return statearr_32674;
})();
var statearr_32675_34443 = state_32651__$1;
(statearr_32675_34443[(2)] = null);

(statearr_32675_34443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29713__auto__ = null;
var cljs$core$async$state_machine__29713__auto____0 = (function (){
var statearr_32677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32677[(0)] = cljs$core$async$state_machine__29713__auto__);

(statearr_32677[(1)] = (1));

return statearr_32677;
});
var cljs$core$async$state_machine__29713__auto____1 = (function (state_32651){
while(true){
var ret_value__29714__auto__ = (function (){try{while(true){
var result__29715__auto__ = switch__29712__auto__(state_32651);
if(cljs.core.keyword_identical_QMARK_(result__29715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29715__auto__;
}
break;
}
}catch (e32678){var ex__29716__auto__ = e32678;
var statearr_32679_34446 = state_32651;
(statearr_32679_34446[(2)] = ex__29716__auto__);


if(cljs.core.seq((state_32651[(4)]))){
var statearr_32680_34447 = state_32651;
(statearr_32680_34447[(1)] = cljs.core.first((state_32651[(4)])));

} else {
throw ex__29716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34448 = state_32651;
state_32651 = G__34448;
continue;
} else {
return ret_value__29714__auto__;
}
break;
}
});
cljs$core$async$state_machine__29713__auto__ = function(state_32651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29713__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29713__auto____1.call(this,state_32651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29713__auto____0;
cljs$core$async$state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29713__auto____1;
return cljs$core$async$state_machine__29713__auto__;
})()
})();
var state__29899__auto__ = (function (){var statearr_32688 = f__29898__auto__();
(statearr_32688[(6)] = c__29897__auto___34408);

return statearr_32688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29899__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
