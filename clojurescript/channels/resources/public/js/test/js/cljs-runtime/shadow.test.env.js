goog.provide('shadow.test.env');
/**
 * @define {boolean}
 */
shadow.test.env.UI_DRIVEN = goog.define("shadow.test.env.UI_DRIVEN",false);
if((typeof shadow !== 'undefined') && (typeof shadow.test !== 'undefined') && (typeof shadow.test.env !== 'undefined') && (typeof shadow.test.env.tests_ref !== 'undefined')){
} else {
shadow.test.env.tests_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.PersistentArrayMap.EMPTY], null));
}
shadow.test.env.reset_test_data_BANG_ = (function shadow$test$env$reset_test_data_BANG_(test_data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.test.env.tests_ref,cljs.core.assoc,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),test_data);
});
shadow.test.env.get_tests = (function shadow$test$env$get_tests(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
});
shadow.test.env.get_test_vars = (function shadow$test$env$get_test_vars(){
var iter__4529__auto__ = (function shadow$test$env$get_test_vars_$_iter__37247(s__37248){
return (new cljs.core.LazySeq(null,(function (){
var s__37248__$1 = s__37248;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37248__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__37257 = cljs.core.first(xs__6292__auto__);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37257,(0),null);
var ns_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37257,(1),null);
var iterys__4525__auto__ = ((function (s__37248__$1,vec__37257,ns,ns_info,xs__6292__auto__,temp__5735__auto__){
return (function shadow$test$env$get_test_vars_$_iter__37247_$_iter__37249(s__37250){
return (new cljs.core.LazySeq(null,((function (s__37248__$1,vec__37257,ns,ns_info,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__37250__$1 = s__37250;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37250__$1);
if(temp__5735__auto____$1){
var s__37250__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37250__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__37250__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__37252 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__37251 = (0);
while(true){
if((i__37251 < size__4528__auto__)){
var var$ = cljs.core._nth(c__4527__auto__,i__37251);
cljs.core.chunk_append(b__37252,var$);

var G__37293 = (i__37251 + (1));
i__37251 = G__37293;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37252),shadow$test$env$get_test_vars_$_iter__37247_$_iter__37249(cljs.core.chunk_rest(s__37250__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37252),null);
}
} else {
var var$ = cljs.core.first(s__37250__$2);
return cljs.core.cons(var$,shadow$test$env$get_test_vars_$_iter__37247_$_iter__37249(cljs.core.rest(s__37250__$2)));
}
} else {
return null;
}
break;
}
});})(s__37248__$1,vec__37257,ns,ns_info,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__37248__$1,vec__37257,ns,ns_info,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(ns_info)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$test$env$get_test_vars_$_iter__37247(cljs.core.rest(s__37248__$1)));
} else {
var G__37294 = cljs.core.rest(s__37248__$1);
s__37248__$1 = G__37294;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(shadow.test.env.get_tests());
});
shadow.test.env.get_test_ns_info = (function shadow$test$env$get_test_ns_info(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns], null));
});
/**
 * returns all the registered test namespaces and symbols
 * use (get-test-ns-info the-sym) to get the details
 */
shadow.test.env.get_test_namespaces = (function shadow$test$env$get_test_namespaces(){
return cljs.core.keys(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref)));
});
shadow.test.env.get_test_count = (function shadow$test$env$get_test_count(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),(function (){var iter__4529__auto__ = (function shadow$test$env$get_test_count_$_iter__37268(s__37269){
return (new cljs.core.LazySeq(null,(function (){
var s__37269__$1 = s__37269;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37269__$1);
if(temp__5735__auto__){
var s__37269__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37269__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__37269__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__37271 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__37270 = (0);
while(true){
if((i__37270 < size__4528__auto__)){
var map__37276 = cljs.core._nth(c__4527__auto__,i__37270);
var map__37276__$1 = (((((!((map__37276 == null))))?(((((map__37276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37276):map__37276);
var test_ns = map__37276__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37276__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
cljs.core.chunk_append(b__37271,cljs.core.count(vars));

var G__37297 = (i__37270 + (1));
i__37270 = G__37297;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37271),shadow$test$env$get_test_count_$_iter__37268(cljs.core.chunk_rest(s__37269__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37271),null);
}
} else {
var map__37281 = cljs.core.first(s__37269__$2);
var map__37281__$1 = (((((!((map__37281 == null))))?(((((map__37281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37281):map__37281);
var test_ns = map__37281__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37281__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.core.cons(cljs.core.count(vars),shadow$test$env$get_test_count_$_iter__37268(cljs.core.rest(s__37269__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.vals(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref))));
})());
});

//# sourceMappingURL=shadow.test.env.js.map
