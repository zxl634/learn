goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36620){
var map__36621 = p__36620;
var map__36621__$1 = (((((!((map__36621 == null))))?(((((map__36621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36621):map__36621);
var m = map__36621__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36621__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36621__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36624_36832 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36625_36833 = null;
var count__36626_36834 = (0);
var i__36627_36835 = (0);
while(true){
if((i__36627_36835 < count__36626_36834)){
var f_36836 = chunk__36625_36833.cljs$core$IIndexed$_nth$arity$2(null,i__36627_36835);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36836], 0));


var G__36837 = seq__36624_36832;
var G__36838 = chunk__36625_36833;
var G__36839 = count__36626_36834;
var G__36840 = (i__36627_36835 + (1));
seq__36624_36832 = G__36837;
chunk__36625_36833 = G__36838;
count__36626_36834 = G__36839;
i__36627_36835 = G__36840;
continue;
} else {
var temp__5735__auto___36841 = cljs.core.seq(seq__36624_36832);
if(temp__5735__auto___36841){
var seq__36624_36842__$1 = temp__5735__auto___36841;
if(cljs.core.chunked_seq_QMARK_(seq__36624_36842__$1)){
var c__4556__auto___36843 = cljs.core.chunk_first(seq__36624_36842__$1);
var G__36844 = cljs.core.chunk_rest(seq__36624_36842__$1);
var G__36845 = c__4556__auto___36843;
var G__36846 = cljs.core.count(c__4556__auto___36843);
var G__36847 = (0);
seq__36624_36832 = G__36844;
chunk__36625_36833 = G__36845;
count__36626_36834 = G__36846;
i__36627_36835 = G__36847;
continue;
} else {
var f_36848 = cljs.core.first(seq__36624_36842__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36848], 0));


var G__36849 = cljs.core.next(seq__36624_36842__$1);
var G__36850 = null;
var G__36851 = (0);
var G__36852 = (0);
seq__36624_36832 = G__36849;
chunk__36625_36833 = G__36850;
count__36626_36834 = G__36851;
i__36627_36835 = G__36852;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36853 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36853], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36853)))?cljs.core.second(arglists_36853):arglists_36853)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36630_36859 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36631_36860 = null;
var count__36632_36861 = (0);
var i__36633_36862 = (0);
while(true){
if((i__36633_36862 < count__36632_36861)){
var vec__36647_36864 = chunk__36631_36860.cljs$core$IIndexed$_nth$arity$2(null,i__36633_36862);
var name_36865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36647_36864,(0),null);
var map__36650_36866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36647_36864,(1),null);
var map__36650_36867__$1 = (((((!((map__36650_36866 == null))))?(((((map__36650_36866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36650_36866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36650_36866):map__36650_36866);
var doc_36868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36650_36867__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36650_36867__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36865], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36869], 0));

if(cljs.core.truth_(doc_36868)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36868], 0));
} else {
}


var G__36871 = seq__36630_36859;
var G__36872 = chunk__36631_36860;
var G__36873 = count__36632_36861;
var G__36874 = (i__36633_36862 + (1));
seq__36630_36859 = G__36871;
chunk__36631_36860 = G__36872;
count__36632_36861 = G__36873;
i__36633_36862 = G__36874;
continue;
} else {
var temp__5735__auto___36875 = cljs.core.seq(seq__36630_36859);
if(temp__5735__auto___36875){
var seq__36630_36876__$1 = temp__5735__auto___36875;
if(cljs.core.chunked_seq_QMARK_(seq__36630_36876__$1)){
var c__4556__auto___36877 = cljs.core.chunk_first(seq__36630_36876__$1);
var G__36878 = cljs.core.chunk_rest(seq__36630_36876__$1);
var G__36879 = c__4556__auto___36877;
var G__36880 = cljs.core.count(c__4556__auto___36877);
var G__36881 = (0);
seq__36630_36859 = G__36878;
chunk__36631_36860 = G__36879;
count__36632_36861 = G__36880;
i__36633_36862 = G__36881;
continue;
} else {
var vec__36652_36883 = cljs.core.first(seq__36630_36876__$1);
var name_36884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36652_36883,(0),null);
var map__36655_36885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36652_36883,(1),null);
var map__36655_36886__$1 = (((((!((map__36655_36885 == null))))?(((((map__36655_36885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36655_36885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36655_36885):map__36655_36885);
var doc_36887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36655_36886__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36655_36886__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36884], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36888], 0));

if(cljs.core.truth_(doc_36887)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36887], 0));
} else {
}


var G__36892 = cljs.core.next(seq__36630_36876__$1);
var G__36893 = null;
var G__36894 = (0);
var G__36895 = (0);
seq__36630_36859 = G__36892;
chunk__36631_36860 = G__36893;
count__36632_36861 = G__36894;
i__36633_36862 = G__36895;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36657 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36658 = null;
var count__36659 = (0);
var i__36660 = (0);
while(true){
if((i__36660 < count__36659)){
var role = chunk__36658.cljs$core$IIndexed$_nth$arity$2(null,i__36660);
var temp__5735__auto___36897__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36897__$1)){
var spec_36898 = temp__5735__auto___36897__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36898)], 0));
} else {
}


var G__36899 = seq__36657;
var G__36900 = chunk__36658;
var G__36901 = count__36659;
var G__36902 = (i__36660 + (1));
seq__36657 = G__36899;
chunk__36658 = G__36900;
count__36659 = G__36901;
i__36660 = G__36902;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36657);
if(temp__5735__auto____$1){
var seq__36657__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36657__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36657__$1);
var G__36903 = cljs.core.chunk_rest(seq__36657__$1);
var G__36904 = c__4556__auto__;
var G__36905 = cljs.core.count(c__4556__auto__);
var G__36906 = (0);
seq__36657 = G__36903;
chunk__36658 = G__36904;
count__36659 = G__36905;
i__36660 = G__36906;
continue;
} else {
var role = cljs.core.first(seq__36657__$1);
var temp__5735__auto___36907__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36907__$2)){
var spec_36909 = temp__5735__auto___36907__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36909)], 0));
} else {
}


var G__36910 = cljs.core.next(seq__36657__$1);
var G__36911 = null;
var G__36912 = (0);
var G__36913 = (0);
seq__36657 = G__36910;
chunk__36658 = G__36911;
count__36659 = G__36912;
i__36660 = G__36913;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36914 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36915 = cljs.core.ex_cause(t);
via = G__36914;
t = G__36915;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36668 = datafied_throwable;
var map__36668__$1 = (((((!((map__36668 == null))))?(((((map__36668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36668):map__36668);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36668__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36668__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36668__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36669 = cljs.core.last(via);
var map__36669__$1 = (((((!((map__36669 == null))))?(((((map__36669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36669):map__36669);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36669__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36669__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36669__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36670 = data;
var map__36670__$1 = (((((!((map__36670 == null))))?(((((map__36670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36670):map__36670);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36670__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36670__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36670__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36671 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36671__$1 = (((((!((map__36671 == null))))?(((((map__36671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36671):map__36671);
var top_data = map__36671__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36671__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36676 = phase;
var G__36676__$1 = (((G__36676 instanceof cljs.core.Keyword))?G__36676.fqn:null);
switch (G__36676__$1) {
case "read-source":
var map__36677 = data;
var map__36677__$1 = (((((!((map__36677 == null))))?(((((map__36677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36677):map__36677);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36677__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36677__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36680 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36680__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36680,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36680);
var G__36680__$2 = (cljs.core.truth_((function (){var fexpr__36688 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36688.cljs$core$IFn$_invoke$arity$1 ? fexpr__36688.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36688.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36680__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36680__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36680__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36680__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36698 = top_data;
var G__36698__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36698,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36698);
var G__36698__$2 = (cljs.core.truth_((function (){var fexpr__36699 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36699.cljs$core$IFn$_invoke$arity$1 ? fexpr__36699.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36699.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36698__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36698__$1);
var G__36698__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36698__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36698__$2);
var G__36698__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36698__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36698__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36698__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36698__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36700 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36700,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36700,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36700,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36700,(3),null);
var G__36703 = top_data;
var G__36703__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36703,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36703);
var G__36703__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36703__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36703__$1);
var G__36703__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36703__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36703__$2);
var G__36703__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36703__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36703__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36703__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36703__$4;
}

break;
case "execution":
var vec__36711 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36711,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36711,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36711,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36711,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36667_SHARP_){
var or__4126__auto__ = (p1__36667_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__36719 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36719.cljs$core$IFn$_invoke$arity$1 ? fexpr__36719.cljs$core$IFn$_invoke$arity$1(p1__36667_SHARP_) : fexpr__36719.call(null,p1__36667_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__36723 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36723__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36723,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36723);
var G__36723__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36723__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36723__$1);
var G__36723__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36723__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36723__$2);
var G__36723__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36723__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36723__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36723__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36723__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36676__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36757){
var map__36758 = p__36757;
var map__36758__$1 = (((((!((map__36758 == null))))?(((((map__36758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36758):map__36758);
var triage_data = map__36758__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36758__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36758__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36758__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36758__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36758__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36758__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36758__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36758__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36771 = phase;
var G__36771__$1 = (((G__36771 instanceof cljs.core.Keyword))?G__36771.fqn:null);
switch (G__36771__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36775 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36776 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36777 = loc;
var G__36778 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36786_36944 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36787_36945 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36788_36946 = true;
var _STAR_print_fn_STAR__temp_val__36789_36947 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36788_36946);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36789_36947);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36755_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36755_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36787_36945);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36786_36944);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36775,G__36776,G__36777,G__36778) : format.call(null,G__36775,G__36776,G__36777,G__36778));

break;
case "macroexpansion":
var G__36798 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36799 = cause_type;
var G__36800 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36801 = loc;
var G__36802 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36798,G__36799,G__36800,G__36801,G__36802) : format.call(null,G__36798,G__36799,G__36800,G__36801,G__36802));

break;
case "compile-syntax-check":
var G__36803 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36804 = cause_type;
var G__36805 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36806 = loc;
var G__36807 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36803,G__36804,G__36805,G__36806,G__36807) : format.call(null,G__36803,G__36804,G__36805,G__36806,G__36807));

break;
case "compilation":
var G__36808 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36809 = cause_type;
var G__36810 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36811 = loc;
var G__36812 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36808,G__36809,G__36810,G__36811,G__36812) : format.call(null,G__36808,G__36809,G__36810,G__36811,G__36812));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36817 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36818 = symbol;
var G__36819 = loc;
var G__36820 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36821_36949 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36822_36950 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36823_36951 = true;
var _STAR_print_fn_STAR__temp_val__36824_36952 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36823_36951);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36824_36952);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36756_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36756_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36822_36950);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36821_36949);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36817,G__36818,G__36819,G__36820) : format.call(null,G__36817,G__36818,G__36819,G__36820));
} else {
var G__36825 = "Execution error%s at %s(%s).\n%s\n";
var G__36826 = cause_type;
var G__36827 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36828 = loc;
var G__36829 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36825,G__36826,G__36827,G__36828,G__36829) : format.call(null,G__36825,G__36826,G__36827,G__36828,G__36829));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36771__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
