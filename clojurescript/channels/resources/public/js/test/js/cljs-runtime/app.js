goog.provide('app');
app.my_go = (function app$my_go(){
var c__30868__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30869__auto__ = (function (){var switch__30673__auto__ = (function (state_40327){
var state_val_40328 = (state_40327[(1)]);
if((state_val_40328 === (1))){
var inst_40325 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hello Processes!"], 0));
var state_40327__$1 = state_40327;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40327__$1,inst_40325);
} else {
return null;
}
});
return (function() {
var app$my_go_$_state_machine__30674__auto__ = null;
var app$my_go_$_state_machine__30674__auto____0 = (function (){
var statearr_40329 = [null,null,null,null,null,null,null];
(statearr_40329[(0)] = app$my_go_$_state_machine__30674__auto__);

(statearr_40329[(1)] = (1));

return statearr_40329;
});
var app$my_go_$_state_machine__30674__auto____1 = (function (state_40327){
while(true){
var ret_value__30675__auto__ = (function (){try{while(true){
var result__30676__auto__ = switch__30673__auto__(state_40327);
if(cljs.core.keyword_identical_QMARK_(result__30676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30676__auto__;
}
break;
}
}catch (e40330){var ex__30677__auto__ = e40330;
var statearr_40331_40336 = state_40327;
(statearr_40331_40336[(2)] = ex__30677__auto__);


if(cljs.core.seq((state_40327[(4)]))){
var statearr_40332_40337 = state_40327;
(statearr_40332_40337[(1)] = cljs.core.first((state_40327[(4)])));

} else {
throw ex__30677__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40338 = state_40327;
state_40327 = G__40338;
continue;
} else {
return ret_value__30675__auto__;
}
break;
}
});
app$my_go_$_state_machine__30674__auto__ = function(state_40327){
switch(arguments.length){
case 0:
return app$my_go_$_state_machine__30674__auto____0.call(this);
case 1:
return app$my_go_$_state_machine__30674__auto____1.call(this,state_40327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$my_go_$_state_machine__30674__auto__.cljs$core$IFn$_invoke$arity$0 = app$my_go_$_state_machine__30674__auto____0;
app$my_go_$_state_machine__30674__auto__.cljs$core$IFn$_invoke$arity$1 = app$my_go_$_state_machine__30674__auto____1;
return app$my_go_$_state_machine__30674__auto__;
})()
})();
var state__30870__auto__ = (function (){var statearr_40333 = f__30869__auto__();
(statearr_40333[(6)] = c__30868__auto__);

return statearr_40333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30870__auto__);
}));

return c__30868__auto__;
});
/**
 * Asynchronous test awaiting ch to produce a value or close.
 */
app.test_async = (function app$test_async(ch){
var G__40334 = app.done;
var G__40335 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(ch,(function (_){
return (app.done.cljs$core$IFn$_invoke$arity$0 ? app.done.cljs$core$IFn$_invoke$arity$0() : app.done.call(null));
}));
return (app.async.cljs$core$IFn$_invoke$arity$2 ? app.async.cljs$core$IFn$_invoke$arity$2(G__40334,G__40335) : app.async.call(null,G__40334,G__40335));
});

//# sourceMappingURL=app.js.map
