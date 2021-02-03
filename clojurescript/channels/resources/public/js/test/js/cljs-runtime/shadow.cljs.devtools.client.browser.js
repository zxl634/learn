goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37771 = arguments.length;
var i__4737__auto___37772 = (0);
while(true){
if((i__4737__auto___37772 < len__4736__auto___37771)){
args__4742__auto__.push((arguments[i__4737__auto___37772]));

var G__37773 = (i__4737__auto___37772 + (1));
i__4737__auto___37772 = G__37773;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37415){
var G__37416 = cljs.core.first(seq37415);
var seq37415__$1 = cljs.core.next(seq37415);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37416,seq37415__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37435 = cljs.core.seq(sources);
var chunk__37436 = null;
var count__37437 = (0);
var i__37438 = (0);
while(true){
if((i__37438 < count__37437)){
var map__37458 = chunk__37436.cljs$core$IIndexed$_nth$arity$2(null,i__37438);
var map__37458__$1 = (((((!((map__37458 == null))))?(((((map__37458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37458):map__37458);
var src = map__37458__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37458__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37458__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37458__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37458__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37463){var e_37774 = e37463;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37774);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37774.message)].join('')));
}

var G__37775 = seq__37435;
var G__37776 = chunk__37436;
var G__37777 = count__37437;
var G__37778 = (i__37438 + (1));
seq__37435 = G__37775;
chunk__37436 = G__37776;
count__37437 = G__37777;
i__37438 = G__37778;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37435);
if(temp__5735__auto__){
var seq__37435__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37435__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37435__$1);
var G__37779 = cljs.core.chunk_rest(seq__37435__$1);
var G__37780 = c__4556__auto__;
var G__37781 = cljs.core.count(c__4556__auto__);
var G__37782 = (0);
seq__37435 = G__37779;
chunk__37436 = G__37780;
count__37437 = G__37781;
i__37438 = G__37782;
continue;
} else {
var map__37467 = cljs.core.first(seq__37435__$1);
var map__37467__$1 = (((((!((map__37467 == null))))?(((((map__37467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37467):map__37467);
var src = map__37467__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37467__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37467__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37467__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37467__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37470){var e_37785 = e37470;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37785);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37785.message)].join('')));
}

var G__37786 = cljs.core.next(seq__37435__$1);
var G__37787 = null;
var G__37788 = (0);
var G__37789 = (0);
seq__37435 = G__37786;
chunk__37436 = G__37787;
count__37437 = G__37788;
i__37438 = G__37789;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37479 = cljs.core.seq(js_requires);
var chunk__37480 = null;
var count__37481 = (0);
var i__37482 = (0);
while(true){
if((i__37482 < count__37481)){
var js_ns = chunk__37480.cljs$core$IIndexed$_nth$arity$2(null,i__37482);
var require_str_37790 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37790);


var G__37791 = seq__37479;
var G__37792 = chunk__37480;
var G__37793 = count__37481;
var G__37794 = (i__37482 + (1));
seq__37479 = G__37791;
chunk__37480 = G__37792;
count__37481 = G__37793;
i__37482 = G__37794;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37479);
if(temp__5735__auto__){
var seq__37479__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37479__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37479__$1);
var G__37795 = cljs.core.chunk_rest(seq__37479__$1);
var G__37796 = c__4556__auto__;
var G__37797 = cljs.core.count(c__4556__auto__);
var G__37798 = (0);
seq__37479 = G__37795;
chunk__37480 = G__37796;
count__37481 = G__37797;
i__37482 = G__37798;
continue;
} else {
var js_ns = cljs.core.first(seq__37479__$1);
var require_str_37799 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37799);


var G__37800 = cljs.core.next(seq__37479__$1);
var G__37801 = null;
var G__37802 = (0);
var G__37803 = (0);
seq__37479 = G__37800;
chunk__37480 = G__37801;
count__37481 = G__37802;
i__37482 = G__37803;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37493){
var map__37494 = p__37493;
var map__37494__$1 = (((((!((map__37494 == null))))?(((((map__37494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37494):map__37494);
var msg = map__37494__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37494__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37494__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37496(s__37497){
return (new cljs.core.LazySeq(null,(function (){
var s__37497__$1 = s__37497;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37497__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__37504 = cljs.core.first(xs__6292__auto__);
var map__37504__$1 = (((((!((map__37504 == null))))?(((((map__37504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37504):map__37504);
var src = map__37504__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37504__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37504__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__37497__$1,map__37504,map__37504__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37494,map__37494__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37496_$_iter__37498(s__37499){
return (new cljs.core.LazySeq(null,((function (s__37497__$1,map__37504,map__37504__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37494,map__37494__$1,msg,info,reload_info){
return (function (){
var s__37499__$1 = s__37499;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37499__$1);
if(temp__5735__auto____$1){
var s__37499__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37499__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__37499__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__37501 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__37500 = (0);
while(true){
if((i__37500 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__37500);
cljs.core.chunk_append(b__37501,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37806 = (i__37500 + (1));
i__37500 = G__37806;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37501),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37496_$_iter__37498(cljs.core.chunk_rest(s__37499__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37501),null);
}
} else {
var warning = cljs.core.first(s__37499__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37496_$_iter__37498(cljs.core.rest(s__37499__$2)));
}
} else {
return null;
}
break;
}
});})(s__37497__$1,map__37504,map__37504__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37494,map__37494__$1,msg,info,reload_info))
,null,null));
});})(s__37497__$1,map__37504,map__37504__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37494,map__37494__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37496(cljs.core.rest(s__37497__$1)));
} else {
var G__37807 = cljs.core.rest(s__37497__$1);
s__37497__$1 = G__37807;
continue;
}
} else {
var G__37808 = cljs.core.rest(s__37497__$1);
s__37497__$1 = G__37808;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37507_37809 = cljs.core.seq(warnings);
var chunk__37508_37810 = null;
var count__37509_37811 = (0);
var i__37510_37812 = (0);
while(true){
if((i__37510_37812 < count__37509_37811)){
var map__37522_37813 = chunk__37508_37810.cljs$core$IIndexed$_nth$arity$2(null,i__37510_37812);
var map__37522_37814__$1 = (((((!((map__37522_37813 == null))))?(((((map__37522_37813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37522_37813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37522_37813):map__37522_37813);
var w_37815 = map__37522_37814__$1;
var msg_37816__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37522_37814__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37522_37814__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37522_37814__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37522_37814__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37819)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37817),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37818),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37816__$1)].join(''));


var G__37821 = seq__37507_37809;
var G__37822 = chunk__37508_37810;
var G__37823 = count__37509_37811;
var G__37824 = (i__37510_37812 + (1));
seq__37507_37809 = G__37821;
chunk__37508_37810 = G__37822;
count__37509_37811 = G__37823;
i__37510_37812 = G__37824;
continue;
} else {
var temp__5735__auto___37825 = cljs.core.seq(seq__37507_37809);
if(temp__5735__auto___37825){
var seq__37507_37826__$1 = temp__5735__auto___37825;
if(cljs.core.chunked_seq_QMARK_(seq__37507_37826__$1)){
var c__4556__auto___37827 = cljs.core.chunk_first(seq__37507_37826__$1);
var G__37828 = cljs.core.chunk_rest(seq__37507_37826__$1);
var G__37829 = c__4556__auto___37827;
var G__37830 = cljs.core.count(c__4556__auto___37827);
var G__37831 = (0);
seq__37507_37809 = G__37828;
chunk__37508_37810 = G__37829;
count__37509_37811 = G__37830;
i__37510_37812 = G__37831;
continue;
} else {
var map__37524_37832 = cljs.core.first(seq__37507_37826__$1);
var map__37524_37833__$1 = (((((!((map__37524_37832 == null))))?(((((map__37524_37832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37524_37832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37524_37832):map__37524_37832);
var w_37834 = map__37524_37833__$1;
var msg_37835__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37524_37833__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37524_37833__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37524_37833__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37524_37833__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37838)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37836),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37837),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37835__$1)].join(''));


var G__37842 = cljs.core.next(seq__37507_37826__$1);
var G__37843 = null;
var G__37844 = (0);
var G__37845 = (0);
seq__37507_37809 = G__37842;
chunk__37508_37810 = G__37843;
count__37509_37811 = G__37844;
i__37510_37812 = G__37845;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37489_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37489_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37538){
var map__37539 = p__37538;
var map__37539__$1 = (((((!((map__37539 == null))))?(((((map__37539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37539):map__37539);
var msg = map__37539__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37539__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37541 = cljs.core.seq(updates);
var chunk__37543 = null;
var count__37544 = (0);
var i__37545 = (0);
while(true){
if((i__37545 < count__37544)){
var path = chunk__37543.cljs$core$IIndexed$_nth$arity$2(null,i__37545);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37657_37846 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37661_37847 = null;
var count__37662_37848 = (0);
var i__37663_37849 = (0);
while(true){
if((i__37663_37849 < count__37662_37848)){
var node_37851 = chunk__37661_37847.cljs$core$IIndexed$_nth$arity$2(null,i__37663_37849);
if(cljs.core.not(node_37851.shadow$old)){
var path_match_37852 = shadow.cljs.devtools.client.browser.match_paths(node_37851.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37852)){
var new_link_37853 = (function (){var G__37680 = node_37851.cloneNode(true);
G__37680.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37852),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37680;
})();
(node_37851.shadow$old = true);

(new_link_37853.onload = ((function (seq__37657_37846,chunk__37661_37847,count__37662_37848,i__37663_37849,seq__37541,chunk__37543,count__37544,i__37545,new_link_37853,path_match_37852,node_37851,path,map__37539,map__37539__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37851);
});})(seq__37657_37846,chunk__37661_37847,count__37662_37848,i__37663_37849,seq__37541,chunk__37543,count__37544,i__37545,new_link_37853,path_match_37852,node_37851,path,map__37539,map__37539__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37852], 0));

goog.dom.insertSiblingAfter(new_link_37853,node_37851);


var G__37857 = seq__37657_37846;
var G__37858 = chunk__37661_37847;
var G__37859 = count__37662_37848;
var G__37860 = (i__37663_37849 + (1));
seq__37657_37846 = G__37857;
chunk__37661_37847 = G__37858;
count__37662_37848 = G__37859;
i__37663_37849 = G__37860;
continue;
} else {
var G__37861 = seq__37657_37846;
var G__37862 = chunk__37661_37847;
var G__37863 = count__37662_37848;
var G__37864 = (i__37663_37849 + (1));
seq__37657_37846 = G__37861;
chunk__37661_37847 = G__37862;
count__37662_37848 = G__37863;
i__37663_37849 = G__37864;
continue;
}
} else {
var G__37865 = seq__37657_37846;
var G__37866 = chunk__37661_37847;
var G__37867 = count__37662_37848;
var G__37868 = (i__37663_37849 + (1));
seq__37657_37846 = G__37865;
chunk__37661_37847 = G__37866;
count__37662_37848 = G__37867;
i__37663_37849 = G__37868;
continue;
}
} else {
var temp__5735__auto___37869 = cljs.core.seq(seq__37657_37846);
if(temp__5735__auto___37869){
var seq__37657_37870__$1 = temp__5735__auto___37869;
if(cljs.core.chunked_seq_QMARK_(seq__37657_37870__$1)){
var c__4556__auto___37871 = cljs.core.chunk_first(seq__37657_37870__$1);
var G__37872 = cljs.core.chunk_rest(seq__37657_37870__$1);
var G__37873 = c__4556__auto___37871;
var G__37874 = cljs.core.count(c__4556__auto___37871);
var G__37875 = (0);
seq__37657_37846 = G__37872;
chunk__37661_37847 = G__37873;
count__37662_37848 = G__37874;
i__37663_37849 = G__37875;
continue;
} else {
var node_37876 = cljs.core.first(seq__37657_37870__$1);
if(cljs.core.not(node_37876.shadow$old)){
var path_match_37877 = shadow.cljs.devtools.client.browser.match_paths(node_37876.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37877)){
var new_link_37878 = (function (){var G__37688 = node_37876.cloneNode(true);
G__37688.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37877),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37688;
})();
(node_37876.shadow$old = true);

(new_link_37878.onload = ((function (seq__37657_37846,chunk__37661_37847,count__37662_37848,i__37663_37849,seq__37541,chunk__37543,count__37544,i__37545,new_link_37878,path_match_37877,node_37876,seq__37657_37870__$1,temp__5735__auto___37869,path,map__37539,map__37539__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37876);
});})(seq__37657_37846,chunk__37661_37847,count__37662_37848,i__37663_37849,seq__37541,chunk__37543,count__37544,i__37545,new_link_37878,path_match_37877,node_37876,seq__37657_37870__$1,temp__5735__auto___37869,path,map__37539,map__37539__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37877], 0));

goog.dom.insertSiblingAfter(new_link_37878,node_37876);


var G__37879 = cljs.core.next(seq__37657_37870__$1);
var G__37880 = null;
var G__37881 = (0);
var G__37882 = (0);
seq__37657_37846 = G__37879;
chunk__37661_37847 = G__37880;
count__37662_37848 = G__37881;
i__37663_37849 = G__37882;
continue;
} else {
var G__37883 = cljs.core.next(seq__37657_37870__$1);
var G__37884 = null;
var G__37885 = (0);
var G__37886 = (0);
seq__37657_37846 = G__37883;
chunk__37661_37847 = G__37884;
count__37662_37848 = G__37885;
i__37663_37849 = G__37886;
continue;
}
} else {
var G__37887 = cljs.core.next(seq__37657_37870__$1);
var G__37888 = null;
var G__37889 = (0);
var G__37890 = (0);
seq__37657_37846 = G__37887;
chunk__37661_37847 = G__37888;
count__37662_37848 = G__37889;
i__37663_37849 = G__37890;
continue;
}
}
} else {
}
}
break;
}


var G__37891 = seq__37541;
var G__37892 = chunk__37543;
var G__37893 = count__37544;
var G__37894 = (i__37545 + (1));
seq__37541 = G__37891;
chunk__37543 = G__37892;
count__37544 = G__37893;
i__37545 = G__37894;
continue;
} else {
var G__37895 = seq__37541;
var G__37896 = chunk__37543;
var G__37897 = count__37544;
var G__37898 = (i__37545 + (1));
seq__37541 = G__37895;
chunk__37543 = G__37896;
count__37544 = G__37897;
i__37545 = G__37898;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37541);
if(temp__5735__auto__){
var seq__37541__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37541__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37541__$1);
var G__37899 = cljs.core.chunk_rest(seq__37541__$1);
var G__37900 = c__4556__auto__;
var G__37901 = cljs.core.count(c__4556__auto__);
var G__37902 = (0);
seq__37541 = G__37899;
chunk__37543 = G__37900;
count__37544 = G__37901;
i__37545 = G__37902;
continue;
} else {
var path = cljs.core.first(seq__37541__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37691_37903 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37695_37904 = null;
var count__37696_37905 = (0);
var i__37697_37906 = (0);
while(true){
if((i__37697_37906 < count__37696_37905)){
var node_37907 = chunk__37695_37904.cljs$core$IIndexed$_nth$arity$2(null,i__37697_37906);
if(cljs.core.not(node_37907.shadow$old)){
var path_match_37908 = shadow.cljs.devtools.client.browser.match_paths(node_37907.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37908)){
var new_link_37909 = (function (){var G__37710 = node_37907.cloneNode(true);
G__37710.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37908),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37710;
})();
(node_37907.shadow$old = true);

(new_link_37909.onload = ((function (seq__37691_37903,chunk__37695_37904,count__37696_37905,i__37697_37906,seq__37541,chunk__37543,count__37544,i__37545,new_link_37909,path_match_37908,node_37907,path,seq__37541__$1,temp__5735__auto__,map__37539,map__37539__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37907);
});})(seq__37691_37903,chunk__37695_37904,count__37696_37905,i__37697_37906,seq__37541,chunk__37543,count__37544,i__37545,new_link_37909,path_match_37908,node_37907,path,seq__37541__$1,temp__5735__auto__,map__37539,map__37539__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37908], 0));

goog.dom.insertSiblingAfter(new_link_37909,node_37907);


var G__37910 = seq__37691_37903;
var G__37911 = chunk__37695_37904;
var G__37912 = count__37696_37905;
var G__37913 = (i__37697_37906 + (1));
seq__37691_37903 = G__37910;
chunk__37695_37904 = G__37911;
count__37696_37905 = G__37912;
i__37697_37906 = G__37913;
continue;
} else {
var G__37914 = seq__37691_37903;
var G__37915 = chunk__37695_37904;
var G__37916 = count__37696_37905;
var G__37917 = (i__37697_37906 + (1));
seq__37691_37903 = G__37914;
chunk__37695_37904 = G__37915;
count__37696_37905 = G__37916;
i__37697_37906 = G__37917;
continue;
}
} else {
var G__37918 = seq__37691_37903;
var G__37919 = chunk__37695_37904;
var G__37920 = count__37696_37905;
var G__37921 = (i__37697_37906 + (1));
seq__37691_37903 = G__37918;
chunk__37695_37904 = G__37919;
count__37696_37905 = G__37920;
i__37697_37906 = G__37921;
continue;
}
} else {
var temp__5735__auto___37922__$1 = cljs.core.seq(seq__37691_37903);
if(temp__5735__auto___37922__$1){
var seq__37691_37923__$1 = temp__5735__auto___37922__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37691_37923__$1)){
var c__4556__auto___37924 = cljs.core.chunk_first(seq__37691_37923__$1);
var G__37925 = cljs.core.chunk_rest(seq__37691_37923__$1);
var G__37926 = c__4556__auto___37924;
var G__37927 = cljs.core.count(c__4556__auto___37924);
var G__37928 = (0);
seq__37691_37903 = G__37925;
chunk__37695_37904 = G__37926;
count__37696_37905 = G__37927;
i__37697_37906 = G__37928;
continue;
} else {
var node_37929 = cljs.core.first(seq__37691_37923__$1);
if(cljs.core.not(node_37929.shadow$old)){
var path_match_37930 = shadow.cljs.devtools.client.browser.match_paths(node_37929.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37930)){
var new_link_37931 = (function (){var G__37717 = node_37929.cloneNode(true);
G__37717.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37930),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37717;
})();
(node_37929.shadow$old = true);

(new_link_37931.onload = ((function (seq__37691_37903,chunk__37695_37904,count__37696_37905,i__37697_37906,seq__37541,chunk__37543,count__37544,i__37545,new_link_37931,path_match_37930,node_37929,seq__37691_37923__$1,temp__5735__auto___37922__$1,path,seq__37541__$1,temp__5735__auto__,map__37539,map__37539__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37929);
});})(seq__37691_37903,chunk__37695_37904,count__37696_37905,i__37697_37906,seq__37541,chunk__37543,count__37544,i__37545,new_link_37931,path_match_37930,node_37929,seq__37691_37923__$1,temp__5735__auto___37922__$1,path,seq__37541__$1,temp__5735__auto__,map__37539,map__37539__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37930], 0));

goog.dom.insertSiblingAfter(new_link_37931,node_37929);


var G__37932 = cljs.core.next(seq__37691_37923__$1);
var G__37933 = null;
var G__37934 = (0);
var G__37935 = (0);
seq__37691_37903 = G__37932;
chunk__37695_37904 = G__37933;
count__37696_37905 = G__37934;
i__37697_37906 = G__37935;
continue;
} else {
var G__37936 = cljs.core.next(seq__37691_37923__$1);
var G__37937 = null;
var G__37938 = (0);
var G__37939 = (0);
seq__37691_37903 = G__37936;
chunk__37695_37904 = G__37937;
count__37696_37905 = G__37938;
i__37697_37906 = G__37939;
continue;
}
} else {
var G__37940 = cljs.core.next(seq__37691_37923__$1);
var G__37941 = null;
var G__37942 = (0);
var G__37943 = (0);
seq__37691_37903 = G__37940;
chunk__37695_37904 = G__37941;
count__37696_37905 = G__37942;
i__37697_37906 = G__37943;
continue;
}
}
} else {
}
}
break;
}


var G__37944 = cljs.core.next(seq__37541__$1);
var G__37945 = null;
var G__37946 = (0);
var G__37947 = (0);
seq__37541 = G__37944;
chunk__37543 = G__37945;
count__37544 = G__37946;
i__37545 = G__37947;
continue;
} else {
var G__37948 = cljs.core.next(seq__37541__$1);
var G__37949 = null;
var G__37950 = (0);
var G__37951 = (0);
seq__37541 = G__37948;
chunk__37543 = G__37949;
count__37544 = G__37950;
i__37545 = G__37951;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37723){
var map__37724 = p__37723;
var map__37724__$1 = (((((!((map__37724 == null))))?(((((map__37724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37724):map__37724);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37724__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37730){
var map__37731 = p__37730;
var map__37731__$1 = (((((!((map__37731 == null))))?(((((map__37731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37731):map__37731);
var _ = map__37731__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37731__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37733,done,error){
var map__37734 = p__37733;
var map__37734__$1 = (((((!((map__37734 == null))))?(((((map__37734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37734):map__37734);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37734__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37739,done,error){
var map__37740 = p__37739;
var map__37740__$1 = (((((!((map__37740 == null))))?(((((map__37740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37740):map__37740);
var msg = map__37740__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37740__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37740__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37740__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37742){
var map__37743 = p__37742;
var map__37743__$1 = (((((!((map__37743 == null))))?(((((map__37743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37743):map__37743);
var src = map__37743__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37743__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37745 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37745) : done.call(null,G__37745));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37746){
var map__37747 = p__37746;
var map__37747__$1 = (((((!((map__37747 == null))))?(((((map__37747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37747):map__37747);
var msg__$1 = map__37747__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37747__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37750){var ex = e37750;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37752){
var map__37753 = p__37752;
var map__37753__$1 = (((((!((map__37753 == null))))?(((((map__37753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37753):map__37753);
var env = map__37753__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37753__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__37760){
var map__37761 = p__37760;
var map__37761__$1 = (((((!((map__37761 == null))))?(((((map__37761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37761):map__37761);
var msg = map__37761__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37761__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37763){
var map__37764 = p__37763;
var map__37764__$1 = (((((!((map__37764 == null))))?(((((map__37764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37764):map__37764);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37764__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37764__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37768){
var map__37769 = p__37768;
var map__37769__$1 = (((((!((map__37769 == null))))?(((((map__37769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37769):map__37769);
var svc = map__37769__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37769__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
