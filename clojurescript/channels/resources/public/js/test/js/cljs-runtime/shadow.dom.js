goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33425 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33425(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33428 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33428(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32727 = coll;
var G__32728 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32727,G__32728) : shadow.dom.lazy_native_coll_seq.call(null,G__32727,G__32728));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32742 = arguments.length;
switch (G__32742) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32745 = arguments.length;
switch (G__32745) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32747 = arguments.length;
switch (G__32747) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32750 = arguments.length;
switch (G__32750) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32759 = arguments.length;
switch (G__32759) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32764 = arguments.length;
switch (G__32764) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32771){if((e32771 instanceof Object)){
var e = e32771;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32771;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32781 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32782 = null;
var count__32783 = (0);
var i__32784 = (0);
while(true){
if((i__32784 < count__32783)){
var el = chunk__32782.cljs$core$IIndexed$_nth$arity$2(null,i__32784);
var handler_33456__$1 = ((function (seq__32781,chunk__32782,count__32783,i__32784,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32781,chunk__32782,count__32783,i__32784,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33456__$1);


var G__33457 = seq__32781;
var G__33458 = chunk__32782;
var G__33459 = count__32783;
var G__33460 = (i__32784 + (1));
seq__32781 = G__33457;
chunk__32782 = G__33458;
count__32783 = G__33459;
i__32784 = G__33460;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32781);
if(temp__5735__auto__){
var seq__32781__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32781__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32781__$1);
var G__33462 = cljs.core.chunk_rest(seq__32781__$1);
var G__33463 = c__4556__auto__;
var G__33464 = cljs.core.count(c__4556__auto__);
var G__33465 = (0);
seq__32781 = G__33462;
chunk__32782 = G__33463;
count__32783 = G__33464;
i__32784 = G__33465;
continue;
} else {
var el = cljs.core.first(seq__32781__$1);
var handler_33467__$1 = ((function (seq__32781,chunk__32782,count__32783,i__32784,el,seq__32781__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32781,chunk__32782,count__32783,i__32784,el,seq__32781__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33467__$1);


var G__33468 = cljs.core.next(seq__32781__$1);
var G__33469 = null;
var G__33470 = (0);
var G__33471 = (0);
seq__32781 = G__33468;
chunk__32782 = G__33469;
count__32783 = G__33470;
i__32784 = G__33471;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32795 = arguments.length;
switch (G__32795) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32799 = cljs.core.seq(events);
var chunk__32800 = null;
var count__32801 = (0);
var i__32802 = (0);
while(true){
if((i__32802 < count__32801)){
var vec__32816 = chunk__32800.cljs$core$IIndexed$_nth$arity$2(null,i__32802);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32816,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32816,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33475 = seq__32799;
var G__33476 = chunk__32800;
var G__33477 = count__32801;
var G__33478 = (i__32802 + (1));
seq__32799 = G__33475;
chunk__32800 = G__33476;
count__32801 = G__33477;
i__32802 = G__33478;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32799);
if(temp__5735__auto__){
var seq__32799__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32799__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32799__$1);
var G__33479 = cljs.core.chunk_rest(seq__32799__$1);
var G__33480 = c__4556__auto__;
var G__33481 = cljs.core.count(c__4556__auto__);
var G__33482 = (0);
seq__32799 = G__33479;
chunk__32800 = G__33480;
count__32801 = G__33481;
i__32802 = G__33482;
continue;
} else {
var vec__32822 = cljs.core.first(seq__32799__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32822,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32822,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33485 = cljs.core.next(seq__32799__$1);
var G__33486 = null;
var G__33487 = (0);
var G__33488 = (0);
seq__32799 = G__33485;
chunk__32800 = G__33486;
count__32801 = G__33487;
i__32802 = G__33488;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32827 = cljs.core.seq(styles);
var chunk__32828 = null;
var count__32829 = (0);
var i__32830 = (0);
while(true){
if((i__32830 < count__32829)){
var vec__32845 = chunk__32828.cljs$core$IIndexed$_nth$arity$2(null,i__32830);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32845,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32845,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33494 = seq__32827;
var G__33495 = chunk__32828;
var G__33496 = count__32829;
var G__33497 = (i__32830 + (1));
seq__32827 = G__33494;
chunk__32828 = G__33495;
count__32829 = G__33496;
i__32830 = G__33497;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32827);
if(temp__5735__auto__){
var seq__32827__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32827__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__32827__$1);
var G__33499 = cljs.core.chunk_rest(seq__32827__$1);
var G__33500 = c__4556__auto__;
var G__33501 = cljs.core.count(c__4556__auto__);
var G__33502 = (0);
seq__32827 = G__33499;
chunk__32828 = G__33500;
count__32829 = G__33501;
i__32830 = G__33502;
continue;
} else {
var vec__32849 = cljs.core.first(seq__32827__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32849,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32849,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33505 = cljs.core.next(seq__32827__$1);
var G__33506 = null;
var G__33507 = (0);
var G__33508 = (0);
seq__32827 = G__33505;
chunk__32828 = G__33506;
count__32829 = G__33507;
i__32830 = G__33508;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32860_33510 = key;
var G__32860_33511__$1 = (((G__32860_33510 instanceof cljs.core.Keyword))?G__32860_33510.fqn:null);
switch (G__32860_33511__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33521 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_33521,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_33521,"aria-");
}
})())){
el.setAttribute(ks_33521,value);
} else {
(el[ks_33521] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32881){
var map__32882 = p__32881;
var map__32882__$1 = (((((!((map__32882 == null))))?(((((map__32882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32882):map__32882);
var props = map__32882__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32882__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32888 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32888,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32888,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32888,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32893 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32893,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32893;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32896 = arguments.length;
switch (G__32896) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32904){
var vec__32906 = p__32904;
var seq__32907 = cljs.core.seq(vec__32906);
var first__32908 = cljs.core.first(seq__32907);
var seq__32907__$1 = cljs.core.next(seq__32907);
var nn = first__32908;
var first__32908__$1 = cljs.core.first(seq__32907__$1);
var seq__32907__$2 = cljs.core.next(seq__32907__$1);
var np = first__32908__$1;
var nc = seq__32907__$2;
var node = vec__32906;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32914 = nn;
var G__32915 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32914,G__32915) : create_fn.call(null,G__32914,G__32915));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32917 = nn;
var G__32918 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32917,G__32918) : create_fn.call(null,G__32917,G__32918));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32924 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32924,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32924,(1),null);
var seq__32927_33551 = cljs.core.seq(node_children);
var chunk__32928_33552 = null;
var count__32929_33553 = (0);
var i__32930_33554 = (0);
while(true){
if((i__32930_33554 < count__32929_33553)){
var child_struct_33556 = chunk__32928_33552.cljs$core$IIndexed$_nth$arity$2(null,i__32930_33554);
var children_33557 = shadow.dom.dom_node(child_struct_33556);
if(cljs.core.seq_QMARK_(children_33557)){
var seq__32966_33558 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33557));
var chunk__32968_33559 = null;
var count__32969_33560 = (0);
var i__32970_33561 = (0);
while(true){
if((i__32970_33561 < count__32969_33560)){
var child_33562 = chunk__32968_33559.cljs$core$IIndexed$_nth$arity$2(null,i__32970_33561);
if(cljs.core.truth_(child_33562)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33562);


var G__33563 = seq__32966_33558;
var G__33564 = chunk__32968_33559;
var G__33565 = count__32969_33560;
var G__33566 = (i__32970_33561 + (1));
seq__32966_33558 = G__33563;
chunk__32968_33559 = G__33564;
count__32969_33560 = G__33565;
i__32970_33561 = G__33566;
continue;
} else {
var G__33567 = seq__32966_33558;
var G__33568 = chunk__32968_33559;
var G__33569 = count__32969_33560;
var G__33570 = (i__32970_33561 + (1));
seq__32966_33558 = G__33567;
chunk__32968_33559 = G__33568;
count__32969_33560 = G__33569;
i__32970_33561 = G__33570;
continue;
}
} else {
var temp__5735__auto___33571 = cljs.core.seq(seq__32966_33558);
if(temp__5735__auto___33571){
var seq__32966_33572__$1 = temp__5735__auto___33571;
if(cljs.core.chunked_seq_QMARK_(seq__32966_33572__$1)){
var c__4556__auto___33573 = cljs.core.chunk_first(seq__32966_33572__$1);
var G__33574 = cljs.core.chunk_rest(seq__32966_33572__$1);
var G__33575 = c__4556__auto___33573;
var G__33576 = cljs.core.count(c__4556__auto___33573);
var G__33577 = (0);
seq__32966_33558 = G__33574;
chunk__32968_33559 = G__33575;
count__32969_33560 = G__33576;
i__32970_33561 = G__33577;
continue;
} else {
var child_33581 = cljs.core.first(seq__32966_33572__$1);
if(cljs.core.truth_(child_33581)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33581);


var G__33583 = cljs.core.next(seq__32966_33572__$1);
var G__33585 = null;
var G__33587 = (0);
var G__33589 = (0);
seq__32966_33558 = G__33583;
chunk__32968_33559 = G__33585;
count__32969_33560 = G__33587;
i__32970_33561 = G__33589;
continue;
} else {
var G__33591 = cljs.core.next(seq__32966_33572__$1);
var G__33592 = null;
var G__33593 = (0);
var G__33594 = (0);
seq__32966_33558 = G__33591;
chunk__32968_33559 = G__33592;
count__32969_33560 = G__33593;
i__32970_33561 = G__33594;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33557);
}


var G__33595 = seq__32927_33551;
var G__33596 = chunk__32928_33552;
var G__33597 = count__32929_33553;
var G__33598 = (i__32930_33554 + (1));
seq__32927_33551 = G__33595;
chunk__32928_33552 = G__33596;
count__32929_33553 = G__33597;
i__32930_33554 = G__33598;
continue;
} else {
var temp__5735__auto___33599 = cljs.core.seq(seq__32927_33551);
if(temp__5735__auto___33599){
var seq__32927_33601__$1 = temp__5735__auto___33599;
if(cljs.core.chunked_seq_QMARK_(seq__32927_33601__$1)){
var c__4556__auto___33606 = cljs.core.chunk_first(seq__32927_33601__$1);
var G__33607 = cljs.core.chunk_rest(seq__32927_33601__$1);
var G__33608 = c__4556__auto___33606;
var G__33609 = cljs.core.count(c__4556__auto___33606);
var G__33610 = (0);
seq__32927_33551 = G__33607;
chunk__32928_33552 = G__33608;
count__32929_33553 = G__33609;
i__32930_33554 = G__33610;
continue;
} else {
var child_struct_33611 = cljs.core.first(seq__32927_33601__$1);
var children_33612 = shadow.dom.dom_node(child_struct_33611);
if(cljs.core.seq_QMARK_(children_33612)){
var seq__32985_33613 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33612));
var chunk__32987_33614 = null;
var count__32988_33615 = (0);
var i__32989_33616 = (0);
while(true){
if((i__32989_33616 < count__32988_33615)){
var child_33618 = chunk__32987_33614.cljs$core$IIndexed$_nth$arity$2(null,i__32989_33616);
if(cljs.core.truth_(child_33618)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33618);


var G__33624 = seq__32985_33613;
var G__33625 = chunk__32987_33614;
var G__33626 = count__32988_33615;
var G__33627 = (i__32989_33616 + (1));
seq__32985_33613 = G__33624;
chunk__32987_33614 = G__33625;
count__32988_33615 = G__33626;
i__32989_33616 = G__33627;
continue;
} else {
var G__33628 = seq__32985_33613;
var G__33629 = chunk__32987_33614;
var G__33630 = count__32988_33615;
var G__33631 = (i__32989_33616 + (1));
seq__32985_33613 = G__33628;
chunk__32987_33614 = G__33629;
count__32988_33615 = G__33630;
i__32989_33616 = G__33631;
continue;
}
} else {
var temp__5735__auto___33632__$1 = cljs.core.seq(seq__32985_33613);
if(temp__5735__auto___33632__$1){
var seq__32985_33633__$1 = temp__5735__auto___33632__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32985_33633__$1)){
var c__4556__auto___33634 = cljs.core.chunk_first(seq__32985_33633__$1);
var G__33637 = cljs.core.chunk_rest(seq__32985_33633__$1);
var G__33638 = c__4556__auto___33634;
var G__33639 = cljs.core.count(c__4556__auto___33634);
var G__33640 = (0);
seq__32985_33613 = G__33637;
chunk__32987_33614 = G__33638;
count__32988_33615 = G__33639;
i__32989_33616 = G__33640;
continue;
} else {
var child_33642 = cljs.core.first(seq__32985_33633__$1);
if(cljs.core.truth_(child_33642)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33642);


var G__33644 = cljs.core.next(seq__32985_33633__$1);
var G__33645 = null;
var G__33646 = (0);
var G__33647 = (0);
seq__32985_33613 = G__33644;
chunk__32987_33614 = G__33645;
count__32988_33615 = G__33646;
i__32989_33616 = G__33647;
continue;
} else {
var G__33649 = cljs.core.next(seq__32985_33633__$1);
var G__33650 = null;
var G__33651 = (0);
var G__33652 = (0);
seq__32985_33613 = G__33649;
chunk__32987_33614 = G__33650;
count__32988_33615 = G__33651;
i__32989_33616 = G__33652;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33612);
}


var G__33654 = cljs.core.next(seq__32927_33601__$1);
var G__33655 = null;
var G__33656 = (0);
var G__33657 = (0);
seq__32927_33551 = G__33654;
chunk__32928_33552 = G__33655;
count__32929_33553 = G__33656;
i__32930_33554 = G__33657;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33011 = cljs.core.seq(node);
var chunk__33012 = null;
var count__33013 = (0);
var i__33014 = (0);
while(true){
if((i__33014 < count__33013)){
var n = chunk__33012.cljs$core$IIndexed$_nth$arity$2(null,i__33014);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33662 = seq__33011;
var G__33663 = chunk__33012;
var G__33664 = count__33013;
var G__33665 = (i__33014 + (1));
seq__33011 = G__33662;
chunk__33012 = G__33663;
count__33013 = G__33664;
i__33014 = G__33665;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33011);
if(temp__5735__auto__){
var seq__33011__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33011__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33011__$1);
var G__33670 = cljs.core.chunk_rest(seq__33011__$1);
var G__33671 = c__4556__auto__;
var G__33672 = cljs.core.count(c__4556__auto__);
var G__33673 = (0);
seq__33011 = G__33670;
chunk__33012 = G__33671;
count__33013 = G__33672;
i__33014 = G__33673;
continue;
} else {
var n = cljs.core.first(seq__33011__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33676 = cljs.core.next(seq__33011__$1);
var G__33677 = null;
var G__33678 = (0);
var G__33679 = (0);
seq__33011 = G__33676;
chunk__33012 = G__33677;
count__33013 = G__33678;
i__33014 = G__33679;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33026 = arguments.length;
switch (G__33026) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33032 = arguments.length;
switch (G__33032) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33037 = arguments.length;
switch (G__33037) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33697 = arguments.length;
var i__4737__auto___33700 = (0);
while(true){
if((i__4737__auto___33700 < len__4736__auto___33697)){
args__4742__auto__.push((arguments[i__4737__auto___33700]));

var G__33701 = (i__4737__auto___33700 + (1));
i__4737__auto___33700 = G__33701;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33076_33704 = cljs.core.seq(nodes);
var chunk__33077_33705 = null;
var count__33078_33706 = (0);
var i__33079_33707 = (0);
while(true){
if((i__33079_33707 < count__33078_33706)){
var node_33714 = chunk__33077_33705.cljs$core$IIndexed$_nth$arity$2(null,i__33079_33707);
fragment.appendChild(shadow.dom._to_dom(node_33714));


var G__33715 = seq__33076_33704;
var G__33716 = chunk__33077_33705;
var G__33717 = count__33078_33706;
var G__33718 = (i__33079_33707 + (1));
seq__33076_33704 = G__33715;
chunk__33077_33705 = G__33716;
count__33078_33706 = G__33717;
i__33079_33707 = G__33718;
continue;
} else {
var temp__5735__auto___33719 = cljs.core.seq(seq__33076_33704);
if(temp__5735__auto___33719){
var seq__33076_33720__$1 = temp__5735__auto___33719;
if(cljs.core.chunked_seq_QMARK_(seq__33076_33720__$1)){
var c__4556__auto___33724 = cljs.core.chunk_first(seq__33076_33720__$1);
var G__33725 = cljs.core.chunk_rest(seq__33076_33720__$1);
var G__33726 = c__4556__auto___33724;
var G__33727 = cljs.core.count(c__4556__auto___33724);
var G__33728 = (0);
seq__33076_33704 = G__33725;
chunk__33077_33705 = G__33726;
count__33078_33706 = G__33727;
i__33079_33707 = G__33728;
continue;
} else {
var node_33729 = cljs.core.first(seq__33076_33720__$1);
fragment.appendChild(shadow.dom._to_dom(node_33729));


var G__33730 = cljs.core.next(seq__33076_33720__$1);
var G__33731 = null;
var G__33732 = (0);
var G__33733 = (0);
seq__33076_33704 = G__33730;
chunk__33077_33705 = G__33731;
count__33078_33706 = G__33732;
i__33079_33707 = G__33733;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33054){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33054));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33092_33740 = cljs.core.seq(scripts);
var chunk__33093_33741 = null;
var count__33094_33742 = (0);
var i__33095_33743 = (0);
while(true){
if((i__33095_33743 < count__33094_33742)){
var vec__33114_33744 = chunk__33093_33741.cljs$core$IIndexed$_nth$arity$2(null,i__33095_33743);
var script_tag_33745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33114_33744,(0),null);
var script_body_33746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33114_33744,(1),null);
eval(script_body_33746);


var G__33748 = seq__33092_33740;
var G__33749 = chunk__33093_33741;
var G__33750 = count__33094_33742;
var G__33751 = (i__33095_33743 + (1));
seq__33092_33740 = G__33748;
chunk__33093_33741 = G__33749;
count__33094_33742 = G__33750;
i__33095_33743 = G__33751;
continue;
} else {
var temp__5735__auto___33760 = cljs.core.seq(seq__33092_33740);
if(temp__5735__auto___33760){
var seq__33092_33761__$1 = temp__5735__auto___33760;
if(cljs.core.chunked_seq_QMARK_(seq__33092_33761__$1)){
var c__4556__auto___33762 = cljs.core.chunk_first(seq__33092_33761__$1);
var G__33763 = cljs.core.chunk_rest(seq__33092_33761__$1);
var G__33764 = c__4556__auto___33762;
var G__33765 = cljs.core.count(c__4556__auto___33762);
var G__33766 = (0);
seq__33092_33740 = G__33763;
chunk__33093_33741 = G__33764;
count__33094_33742 = G__33765;
i__33095_33743 = G__33766;
continue;
} else {
var vec__33119_33773 = cljs.core.first(seq__33092_33761__$1);
var script_tag_33774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33119_33773,(0),null);
var script_body_33775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33119_33773,(1),null);
eval(script_body_33775);


var G__33776 = cljs.core.next(seq__33092_33761__$1);
var G__33777 = null;
var G__33778 = (0);
var G__33779 = (0);
seq__33092_33740 = G__33776;
chunk__33093_33741 = G__33777;
count__33094_33742 = G__33778;
i__33095_33743 = G__33779;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33122){
var vec__33123 = p__33122;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33123,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33123,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33132 = arguments.length;
switch (G__33132) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33137 = cljs.core.seq(style_keys);
var chunk__33138 = null;
var count__33139 = (0);
var i__33140 = (0);
while(true){
if((i__33140 < count__33139)){
var it = chunk__33138.cljs$core$IIndexed$_nth$arity$2(null,i__33140);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33817 = seq__33137;
var G__33818 = chunk__33138;
var G__33819 = count__33139;
var G__33820 = (i__33140 + (1));
seq__33137 = G__33817;
chunk__33138 = G__33818;
count__33139 = G__33819;
i__33140 = G__33820;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33137);
if(temp__5735__auto__){
var seq__33137__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33137__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33137__$1);
var G__33829 = cljs.core.chunk_rest(seq__33137__$1);
var G__33830 = c__4556__auto__;
var G__33831 = cljs.core.count(c__4556__auto__);
var G__33832 = (0);
seq__33137 = G__33829;
chunk__33138 = G__33830;
count__33139 = G__33831;
i__33140 = G__33832;
continue;
} else {
var it = cljs.core.first(seq__33137__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33839 = cljs.core.next(seq__33137__$1);
var G__33840 = null;
var G__33841 = (0);
var G__33842 = (0);
seq__33137 = G__33839;
chunk__33138 = G__33840;
count__33139 = G__33841;
i__33140 = G__33842;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33144,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33152 = k33144;
var G__33152__$1 = (((G__33152 instanceof cljs.core.Keyword))?G__33152.fqn:null);
switch (G__33152__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33144,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33156){
var vec__33157 = p__33156;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33157,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33157,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33143){
var self__ = this;
var G__33143__$1 = this;
return (new cljs.core.RecordIter((0),G__33143__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33145,other33146){
var self__ = this;
var this33145__$1 = this;
return (((!((other33146 == null)))) && ((this33145__$1.constructor === other33146.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33145__$1.x,other33146.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33145__$1.y,other33146.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33145__$1.__extmap,other33146.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33143){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33173 = cljs.core.keyword_identical_QMARK_;
var expr__33174 = k__4388__auto__;
if(cljs.core.truth_((pred__33173.cljs$core$IFn$_invoke$arity$2 ? pred__33173.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33174) : pred__33173.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33174)))){
return (new shadow.dom.Coordinate(G__33143,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33173.cljs$core$IFn$_invoke$arity$2 ? pred__33173.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33174) : pred__33173.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33174)))){
return (new shadow.dom.Coordinate(self__.x,G__33143,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33143),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33143){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33143,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33150){
var extmap__4419__auto__ = (function (){var G__33186 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33150,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33150)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33186);
} else {
return G__33186;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33150),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33150),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33193,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33200 = k33193;
var G__33200__$1 = (((G__33200 instanceof cljs.core.Keyword))?G__33200.fqn:null);
switch (G__33200__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33193,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33206){
var vec__33207 = p__33206;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33207,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33207,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33192){
var self__ = this;
var G__33192__$1 = this;
return (new cljs.core.RecordIter((0),G__33192__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33194,other33195){
var self__ = this;
var this33194__$1 = this;
return (((!((other33195 == null)))) && ((this33194__$1.constructor === other33195.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33194__$1.w,other33195.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33194__$1.h,other33195.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33194__$1.__extmap,other33195.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33192){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33226 = cljs.core.keyword_identical_QMARK_;
var expr__33227 = k__4388__auto__;
if(cljs.core.truth_((pred__33226.cljs$core$IFn$_invoke$arity$2 ? pred__33226.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33227) : pred__33226.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33227)))){
return (new shadow.dom.Size(G__33192,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33226.cljs$core$IFn$_invoke$arity$2 ? pred__33226.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33227) : pred__33226.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33227)))){
return (new shadow.dom.Size(self__.w,G__33192,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33192),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33192){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33192,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33196){
var extmap__4419__auto__ = (function (){var G__33238 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33196,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33196)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33238);
} else {
return G__33238;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33196),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33196),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__33956 = (i + (1));
var G__33957 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33956;
ret = G__33957;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33254){
var vec__33256 = p__33254;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33256,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33256,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33263 = arguments.length;
switch (G__33263) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33968 = ps;
var G__33969 = (i + (1));
el__$1 = G__33968;
i = G__33969;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33287 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33287,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33287,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33287,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33292_33980 = cljs.core.seq(props);
var chunk__33293_33981 = null;
var count__33294_33982 = (0);
var i__33295_33983 = (0);
while(true){
if((i__33295_33983 < count__33294_33982)){
var vec__33303_33985 = chunk__33293_33981.cljs$core$IIndexed$_nth$arity$2(null,i__33295_33983);
var k_33986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33303_33985,(0),null);
var v_33987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33303_33985,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33986);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33986),v_33987);


var G__33992 = seq__33292_33980;
var G__33993 = chunk__33293_33981;
var G__33994 = count__33294_33982;
var G__33995 = (i__33295_33983 + (1));
seq__33292_33980 = G__33992;
chunk__33293_33981 = G__33993;
count__33294_33982 = G__33994;
i__33295_33983 = G__33995;
continue;
} else {
var temp__5735__auto___33997 = cljs.core.seq(seq__33292_33980);
if(temp__5735__auto___33997){
var seq__33292_33998__$1 = temp__5735__auto___33997;
if(cljs.core.chunked_seq_QMARK_(seq__33292_33998__$1)){
var c__4556__auto___34000 = cljs.core.chunk_first(seq__33292_33998__$1);
var G__34001 = cljs.core.chunk_rest(seq__33292_33998__$1);
var G__34002 = c__4556__auto___34000;
var G__34003 = cljs.core.count(c__4556__auto___34000);
var G__34004 = (0);
seq__33292_33980 = G__34001;
chunk__33293_33981 = G__34002;
count__33294_33982 = G__34003;
i__33295_33983 = G__34004;
continue;
} else {
var vec__33306_34006 = cljs.core.first(seq__33292_33998__$1);
var k_34007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33306_34006,(0),null);
var v_34008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33306_34006,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34007);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34007),v_34008);


var G__34011 = cljs.core.next(seq__33292_33998__$1);
var G__34012 = null;
var G__34013 = (0);
var G__34014 = (0);
seq__33292_33980 = G__34011;
chunk__33293_33981 = G__34012;
count__33294_33982 = G__34013;
i__33295_33983 = G__34014;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33310 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33310,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33310,(1),null);
var seq__33313_34021 = cljs.core.seq(node_children);
var chunk__33315_34022 = null;
var count__33316_34023 = (0);
var i__33317_34024 = (0);
while(true){
if((i__33317_34024 < count__33316_34023)){
var child_struct_34026 = chunk__33315_34022.cljs$core$IIndexed$_nth$arity$2(null,i__33317_34024);
if((!((child_struct_34026 == null)))){
if(typeof child_struct_34026 === 'string'){
var text_34028 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34028),child_struct_34026].join(''));
} else {
var children_34031 = shadow.dom.svg_node(child_struct_34026);
if(cljs.core.seq_QMARK_(children_34031)){
var seq__33349_34034 = cljs.core.seq(children_34031);
var chunk__33351_34035 = null;
var count__33352_34036 = (0);
var i__33353_34037 = (0);
while(true){
if((i__33353_34037 < count__33352_34036)){
var child_34038 = chunk__33351_34035.cljs$core$IIndexed$_nth$arity$2(null,i__33353_34037);
if(cljs.core.truth_(child_34038)){
node.appendChild(child_34038);


var G__34044 = seq__33349_34034;
var G__34045 = chunk__33351_34035;
var G__34046 = count__33352_34036;
var G__34047 = (i__33353_34037 + (1));
seq__33349_34034 = G__34044;
chunk__33351_34035 = G__34045;
count__33352_34036 = G__34046;
i__33353_34037 = G__34047;
continue;
} else {
var G__34049 = seq__33349_34034;
var G__34050 = chunk__33351_34035;
var G__34051 = count__33352_34036;
var G__34052 = (i__33353_34037 + (1));
seq__33349_34034 = G__34049;
chunk__33351_34035 = G__34050;
count__33352_34036 = G__34051;
i__33353_34037 = G__34052;
continue;
}
} else {
var temp__5735__auto___34054 = cljs.core.seq(seq__33349_34034);
if(temp__5735__auto___34054){
var seq__33349_34056__$1 = temp__5735__auto___34054;
if(cljs.core.chunked_seq_QMARK_(seq__33349_34056__$1)){
var c__4556__auto___34057 = cljs.core.chunk_first(seq__33349_34056__$1);
var G__34058 = cljs.core.chunk_rest(seq__33349_34056__$1);
var G__34059 = c__4556__auto___34057;
var G__34060 = cljs.core.count(c__4556__auto___34057);
var G__34061 = (0);
seq__33349_34034 = G__34058;
chunk__33351_34035 = G__34059;
count__33352_34036 = G__34060;
i__33353_34037 = G__34061;
continue;
} else {
var child_34063 = cljs.core.first(seq__33349_34056__$1);
if(cljs.core.truth_(child_34063)){
node.appendChild(child_34063);


var G__34064 = cljs.core.next(seq__33349_34056__$1);
var G__34065 = null;
var G__34066 = (0);
var G__34067 = (0);
seq__33349_34034 = G__34064;
chunk__33351_34035 = G__34065;
count__33352_34036 = G__34066;
i__33353_34037 = G__34067;
continue;
} else {
var G__34068 = cljs.core.next(seq__33349_34056__$1);
var G__34069 = null;
var G__34070 = (0);
var G__34071 = (0);
seq__33349_34034 = G__34068;
chunk__33351_34035 = G__34069;
count__33352_34036 = G__34070;
i__33353_34037 = G__34071;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34031);
}
}


var G__34078 = seq__33313_34021;
var G__34079 = chunk__33315_34022;
var G__34080 = count__33316_34023;
var G__34081 = (i__33317_34024 + (1));
seq__33313_34021 = G__34078;
chunk__33315_34022 = G__34079;
count__33316_34023 = G__34080;
i__33317_34024 = G__34081;
continue;
} else {
var G__34083 = seq__33313_34021;
var G__34084 = chunk__33315_34022;
var G__34085 = count__33316_34023;
var G__34086 = (i__33317_34024 + (1));
seq__33313_34021 = G__34083;
chunk__33315_34022 = G__34084;
count__33316_34023 = G__34085;
i__33317_34024 = G__34086;
continue;
}
} else {
var temp__5735__auto___34088 = cljs.core.seq(seq__33313_34021);
if(temp__5735__auto___34088){
var seq__33313_34089__$1 = temp__5735__auto___34088;
if(cljs.core.chunked_seq_QMARK_(seq__33313_34089__$1)){
var c__4556__auto___34090 = cljs.core.chunk_first(seq__33313_34089__$1);
var G__34091 = cljs.core.chunk_rest(seq__33313_34089__$1);
var G__34092 = c__4556__auto___34090;
var G__34093 = cljs.core.count(c__4556__auto___34090);
var G__34094 = (0);
seq__33313_34021 = G__34091;
chunk__33315_34022 = G__34092;
count__33316_34023 = G__34093;
i__33317_34024 = G__34094;
continue;
} else {
var child_struct_34098 = cljs.core.first(seq__33313_34089__$1);
if((!((child_struct_34098 == null)))){
if(typeof child_struct_34098 === 'string'){
var text_34100 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34100),child_struct_34098].join(''));
} else {
var children_34104 = shadow.dom.svg_node(child_struct_34098);
if(cljs.core.seq_QMARK_(children_34104)){
var seq__33364_34105 = cljs.core.seq(children_34104);
var chunk__33366_34106 = null;
var count__33367_34107 = (0);
var i__33368_34108 = (0);
while(true){
if((i__33368_34108 < count__33367_34107)){
var child_34110 = chunk__33366_34106.cljs$core$IIndexed$_nth$arity$2(null,i__33368_34108);
if(cljs.core.truth_(child_34110)){
node.appendChild(child_34110);


var G__34113 = seq__33364_34105;
var G__34114 = chunk__33366_34106;
var G__34115 = count__33367_34107;
var G__34116 = (i__33368_34108 + (1));
seq__33364_34105 = G__34113;
chunk__33366_34106 = G__34114;
count__33367_34107 = G__34115;
i__33368_34108 = G__34116;
continue;
} else {
var G__34120 = seq__33364_34105;
var G__34121 = chunk__33366_34106;
var G__34122 = count__33367_34107;
var G__34123 = (i__33368_34108 + (1));
seq__33364_34105 = G__34120;
chunk__33366_34106 = G__34121;
count__33367_34107 = G__34122;
i__33368_34108 = G__34123;
continue;
}
} else {
var temp__5735__auto___34125__$1 = cljs.core.seq(seq__33364_34105);
if(temp__5735__auto___34125__$1){
var seq__33364_34128__$1 = temp__5735__auto___34125__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33364_34128__$1)){
var c__4556__auto___34130 = cljs.core.chunk_first(seq__33364_34128__$1);
var G__34131 = cljs.core.chunk_rest(seq__33364_34128__$1);
var G__34132 = c__4556__auto___34130;
var G__34133 = cljs.core.count(c__4556__auto___34130);
var G__34134 = (0);
seq__33364_34105 = G__34131;
chunk__33366_34106 = G__34132;
count__33367_34107 = G__34133;
i__33368_34108 = G__34134;
continue;
} else {
var child_34136 = cljs.core.first(seq__33364_34128__$1);
if(cljs.core.truth_(child_34136)){
node.appendChild(child_34136);


var G__34143 = cljs.core.next(seq__33364_34128__$1);
var G__34144 = null;
var G__34145 = (0);
var G__34146 = (0);
seq__33364_34105 = G__34143;
chunk__33366_34106 = G__34144;
count__33367_34107 = G__34145;
i__33368_34108 = G__34146;
continue;
} else {
var G__34147 = cljs.core.next(seq__33364_34128__$1);
var G__34148 = null;
var G__34149 = (0);
var G__34150 = (0);
seq__33364_34105 = G__34147;
chunk__33366_34106 = G__34148;
count__33367_34107 = G__34149;
i__33368_34108 = G__34150;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34104);
}
}


var G__34154 = cljs.core.next(seq__33313_34089__$1);
var G__34155 = null;
var G__34156 = (0);
var G__34157 = (0);
seq__33313_34021 = G__34154;
chunk__33315_34022 = G__34155;
count__33316_34023 = G__34156;
i__33317_34024 = G__34157;
continue;
} else {
var G__34162 = cljs.core.next(seq__33313_34089__$1);
var G__34163 = null;
var G__34164 = (0);
var G__34165 = (0);
seq__33313_34021 = G__34162;
chunk__33315_34022 = G__34163;
count__33316_34023 = G__34164;
i__33317_34024 = G__34165;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34178 = arguments.length;
var i__4737__auto___34179 = (0);
while(true){
if((i__4737__auto___34179 < len__4736__auto___34178)){
args__4742__auto__.push((arguments[i__4737__auto___34179]));

var G__34180 = (i__4737__auto___34179 + (1));
i__4737__auto___34179 = G__34180;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33386){
var G__33387 = cljs.core.first(seq33386);
var seq33386__$1 = cljs.core.next(seq33386);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33387,seq33386__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33397 = arguments.length;
switch (G__33397) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__29897__auto___34199 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29898__auto__ = (function (){var switch__29712__auto__ = (function (state_33407){
var state_val_33408 = (state_33407[(1)]);
if((state_val_33408 === (1))){
var state_33407__$1 = state_33407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33407__$1,(2),once_or_cleanup);
} else {
if((state_val_33408 === (2))){
var inst_33404 = (state_33407[(2)]);
var inst_33405 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33407__$1 = (function (){var statearr_33411 = state_33407;
(statearr_33411[(7)] = inst_33404);

return statearr_33411;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33407__$1,inst_33405);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29713__auto__ = null;
var shadow$dom$state_machine__29713__auto____0 = (function (){
var statearr_33413 = [null,null,null,null,null,null,null,null];
(statearr_33413[(0)] = shadow$dom$state_machine__29713__auto__);

(statearr_33413[(1)] = (1));

return statearr_33413;
});
var shadow$dom$state_machine__29713__auto____1 = (function (state_33407){
while(true){
var ret_value__29714__auto__ = (function (){try{while(true){
var result__29715__auto__ = switch__29712__auto__(state_33407);
if(cljs.core.keyword_identical_QMARK_(result__29715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29715__auto__;
}
break;
}
}catch (e33415){var ex__29716__auto__ = e33415;
var statearr_33416_34213 = state_33407;
(statearr_33416_34213[(2)] = ex__29716__auto__);


if(cljs.core.seq((state_33407[(4)]))){
var statearr_33417_34215 = state_33407;
(statearr_33417_34215[(1)] = cljs.core.first((state_33407[(4)])));

} else {
throw ex__29716__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34218 = state_33407;
state_33407 = G__34218;
continue;
} else {
return ret_value__29714__auto__;
}
break;
}
});
shadow$dom$state_machine__29713__auto__ = function(state_33407){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29713__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29713__auto____1.call(this,state_33407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29713__auto____0;
shadow$dom$state_machine__29713__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29713__auto____1;
return shadow$dom$state_machine__29713__auto__;
})()
})();
var state__29899__auto__ = (function (){var statearr_33419 = f__29898__auto__();
(statearr_33419[(6)] = c__29897__auto___34199);

return statearr_33419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29899__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
