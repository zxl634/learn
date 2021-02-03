goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__37392){
var vec__37393 = p__37392;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37393,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37393,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__37396 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__37396__$1 = (((G__37396 instanceof cljs.core.Keyword))?G__37396.fqn:null);
switch (G__37396__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__37399 = (function (){
var seq__37400 = cljs.core.seq(vars__$1);
var chunk__37402 = null;
var count__37403 = (0);
var i__37404 = (0);
while(true){
if((i__37404 < count__37403)){
var v = chunk__37402.cljs$core$IIndexed$_nth$arity$2(null,i__37404);
var temp__5735__auto___37559 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5735__auto___37559)){
var t_37560 = temp__5735__auto___37559;
var G__37408_37562 = ((function (seq__37400,chunk__37402,count__37403,i__37404,t_37560,temp__5735__auto___37559,v,each_fixture_fn,G__37396,G__37396__$1,env,once_fixtures,each_fixtures,vec__37393,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_37560)));
});})(seq__37400,chunk__37402,count__37403,i__37404,t_37560,temp__5735__auto___37559,v,each_fixture_fn,G__37396,G__37396__$1,env,once_fixtures,each_fixtures,vec__37393,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__37408_37562) : each_fixture_fn.call(null,G__37408_37562));
} else {
}


var G__37563 = seq__37400;
var G__37564 = chunk__37402;
var G__37565 = count__37403;
var G__37566 = (i__37404 + (1));
seq__37400 = G__37563;
chunk__37402 = G__37564;
count__37403 = G__37565;
i__37404 = G__37566;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37400);
if(temp__5735__auto__){
var seq__37400__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37400__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37400__$1);
var G__37567 = cljs.core.chunk_rest(seq__37400__$1);
var G__37568 = c__4556__auto__;
var G__37569 = cljs.core.count(c__4556__auto__);
var G__37570 = (0);
seq__37400 = G__37567;
chunk__37402 = G__37568;
count__37403 = G__37569;
i__37404 = G__37570;
continue;
} else {
var v = cljs.core.first(seq__37400__$1);
var temp__5735__auto___37572__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5735__auto___37572__$1)){
var t_37573 = temp__5735__auto___37572__$1;
var G__37410_37574 = ((function (seq__37400,chunk__37402,count__37403,i__37404,t_37573,temp__5735__auto___37572__$1,v,seq__37400__$1,temp__5735__auto__,each_fixture_fn,G__37396,G__37396__$1,env,once_fixtures,each_fixtures,vec__37393,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_37573)));
});})(seq__37400,chunk__37402,count__37403,i__37404,t_37573,temp__5735__auto___37572__$1,v,seq__37400__$1,temp__5735__auto__,each_fixture_fn,G__37396,G__37396__$1,env,once_fixtures,each_fixtures,vec__37393,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__37410_37574) : each_fixture_fn.call(null,G__37410_37574));
} else {
}


var G__37577 = cljs.core.next(seq__37400__$1);
var G__37578 = null;
var G__37579 = (0);
var G__37580 = (0);
seq__37400 = G__37577;
chunk__37402 = G__37578;
count__37403 = G__37579;
i__37404 = G__37580;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__37398 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__37398.cljs$core$IFn$_invoke$arity$1 ? fexpr__37398.cljs$core$IFn$_invoke$arity$1(G__37399) : fexpr__37398.call(null,G__37399));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37396__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__37385_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__37385_SHARP_));
}),vars))], 0));
});
/**
 * Like test-ns, but returns a block for further composition and
 *   later execution.  Does not clear the current env.
 */
shadow.test.test_ns_block = (function shadow$test$test_ns_block(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

var map__37412 = shadow.test.env.get_test_ns_info(ns);
var map__37412__$1 = (((((!((map__37412 == null))))?(((((map__37412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37412):map__37412);
var test_ns = map__37412__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37412__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__37419,vars){
var map__37420 = p__37419;
var map__37420__$1 = (((((!((map__37420 == null))))?(((((map__37420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37420):map__37420);
var env = map__37420__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37420__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__37422_37600 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__37424_37601 = null;
var count__37425_37602 = (0);
var i__37426_37603 = (0);
while(true){
if((i__37426_37603 < count__37425_37602)){
var vec__37451_37606 = chunk__37424_37601.cljs$core$IIndexed$_nth$arity$2(null,i__37426_37603);
var test_ns_37607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37451_37606,(0),null);
var ns_info_37608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37451_37606,(1),null);
var map__37454_37609 = ns_info_37608;
var map__37454_37610__$1 = (((((!((map__37454_37609 == null))))?(((((map__37454_37609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37454_37609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37454_37609):map__37454_37609);
var fixtures_37611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37454_37610__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5735__auto___37613 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_37611);
if(cljs.core.truth_(temp__5735__auto___37613)){
var fix_37615 = temp__5735__auto___37613;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_37607,fix_37615], 0));
} else {
}

var temp__5735__auto___37622 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_37611);
if(cljs.core.truth_(temp__5735__auto___37622)){
var fix_37624 = temp__5735__auto___37622;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_37607,fix_37624], 0));
} else {
}


var G__37625 = seq__37422_37600;
var G__37626 = chunk__37424_37601;
var G__37627 = count__37425_37602;
var G__37628 = (i__37426_37603 + (1));
seq__37422_37600 = G__37625;
chunk__37424_37601 = G__37626;
count__37425_37602 = G__37627;
i__37426_37603 = G__37628;
continue;
} else {
var temp__5735__auto___37629 = cljs.core.seq(seq__37422_37600);
if(temp__5735__auto___37629){
var seq__37422_37631__$1 = temp__5735__auto___37629;
if(cljs.core.chunked_seq_QMARK_(seq__37422_37631__$1)){
var c__4556__auto___37637 = cljs.core.chunk_first(seq__37422_37631__$1);
var G__37638 = cljs.core.chunk_rest(seq__37422_37631__$1);
var G__37639 = c__4556__auto___37637;
var G__37640 = cljs.core.count(c__4556__auto___37637);
var G__37641 = (0);
seq__37422_37600 = G__37638;
chunk__37424_37601 = G__37639;
count__37425_37602 = G__37640;
i__37426_37603 = G__37641;
continue;
} else {
var vec__37460_37645 = cljs.core.first(seq__37422_37631__$1);
var test_ns_37646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37460_37645,(0),null);
var ns_info_37647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37460_37645,(1),null);
var map__37464_37668 = ns_info_37647;
var map__37464_37669__$1 = (((((!((map__37464_37668 == null))))?(((((map__37464_37668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37464_37668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37464_37668):map__37464_37668);
var fixtures_37670 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37464_37669__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5735__auto___37671__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_37670);
if(cljs.core.truth_(temp__5735__auto___37671__$1)){
var fix_37672 = temp__5735__auto___37671__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_37646,fix_37672], 0));
} else {
}

var temp__5735__auto___37674__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_37670);
if(cljs.core.truth_(temp__5735__auto___37674__$1)){
var fix_37675 = temp__5735__auto___37674__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_37646,fix_37675], 0));
} else {
}


var G__37676 = cljs.core.next(seq__37422_37631__$1);
var G__37677 = null;
var G__37678 = (0);
var G__37679 = (0);
seq__37422_37600 = G__37676;
chunk__37424_37601 = G__37677;
count__37425_37602 = G__37678;
i__37426_37603 = G__37679;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37417_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__37417_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__37471 = cljs.test.get_current_env();
var map__37471__$1 = (((((!((map__37471 == null))))?(((((map__37471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37471):map__37471);
var env = map__37471__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37471__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37471__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__37487 = arguments.length;
switch (G__37487) {
case 1:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1 = (function (test_vars){
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),test_vars);
}));

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2 = (function (env,vars){
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_test_vars.cljs$lang$maxFixedArity = 2);

/**
 * test all vars for given namespace symbol
 */
shadow.test.test_ns = (function shadow$test$test_ns(var_args){
var G__37492 = arguments.length;
switch (G__37492) {
case 1:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),ns);
}));

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2 = (function (env,ns){
var map__37502 = shadow.test.env.get_test_ns_info(ns);
var map__37502__$1 = (((((!((map__37502 == null))))?(((((map__37502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37502):map__37502);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37502__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__37519 = arguments.length;
switch (G__37519) {
case 0:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,shadow.test.env.get_test_namespaces());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,namespaces){
if(cljs.core.set_QMARK_(namespaces)){
} else {
throw (new Error("Assert failed: (set? namespaces)"));
}

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37506_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__37506_SHARP_)));
}),shadow.test.env.get_test_vars());
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_tests.cljs$lang$maxFixedArity = 2);

/**
 * Runs all tests in all namespaces; prints results.
 *   Optional argument is a regular expression; only namespaces with
 *   names matching the regular expression (with re-matches) will be
 *   tested.
 */
shadow.test.run_all_tests = (function shadow$test$run_all_tests(var_args){
var G__37529 = arguments.length;
switch (G__37529) {
case 0:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(env,null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,re){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37527_SHARP_){
var or__4126__auto__ = (re == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37527_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
