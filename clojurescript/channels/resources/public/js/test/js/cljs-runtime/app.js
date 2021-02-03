goog.provide('app');
app.my_go = (function app$my_go(){
var c__30868__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30869__auto__ = (function (){var switch__30673__auto__ = (function (state_39318){
var state_val_39319 = (state_39318[(1)]);
if((state_val_39319 === (1))){
var inst_39316 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hello Processes!"], 0));
var state_39318__$1 = state_39318;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39318__$1,inst_39316);
} else {
return null;
}
});
return (function() {
var app$my_go_$_state_machine__30674__auto__ = null;
var app$my_go_$_state_machine__30674__auto____0 = (function (){
var statearr_39321 = [null,null,null,null,null,null,null];
(statearr_39321[(0)] = app$my_go_$_state_machine__30674__auto__);

(statearr_39321[(1)] = (1));

return statearr_39321;
});
var app$my_go_$_state_machine__30674__auto____1 = (function (state_39318){
while(true){
var ret_value__30675__auto__ = (function (){try{while(true){
var result__30676__auto__ = switch__30673__auto__(state_39318);
if(cljs.core.keyword_identical_QMARK_(result__30676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30676__auto__;
}
break;
}
}catch (e39322){var ex__30677__auto__ = e39322;
var statearr_39323_39328 = state_39318;
(statearr_39323_39328[(2)] = ex__30677__auto__);


if(cljs.core.seq((state_39318[(4)]))){
var statearr_39324_39329 = state_39318;
(statearr_39324_39329[(1)] = cljs.core.first((state_39318[(4)])));

} else {
throw ex__30677__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39330 = state_39318;
state_39318 = G__39330;
continue;
} else {
return ret_value__30675__auto__;
}
break;
}
});
app$my_go_$_state_machine__30674__auto__ = function(state_39318){
switch(arguments.length){
case 0:
return app$my_go_$_state_machine__30674__auto____0.call(this);
case 1:
return app$my_go_$_state_machine__30674__auto____1.call(this,state_39318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$my_go_$_state_machine__30674__auto__.cljs$core$IFn$_invoke$arity$0 = app$my_go_$_state_machine__30674__auto____0;
app$my_go_$_state_machine__30674__auto__.cljs$core$IFn$_invoke$arity$1 = app$my_go_$_state_machine__30674__auto____1;
return app$my_go_$_state_machine__30674__auto__;
})()
})();
var state__30870__auto__ = (function (){var statearr_39325 = f__30869__auto__();
(statearr_39325[(6)] = c__30868__auto__);

return statearr_39325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30870__auto__);
}));

return c__30868__auto__;
});
/**
 * Asynchronous test awaiting ch to produce a value or close.
 */
app.test_async = (function app$test_async(ch){
return cljs.core.async(cljs.core.async.done,(function (){var G__39326 = ch;
var G__39327 = (function (_){
return (app.done.cljs$core$IFn$_invoke$arity$0 ? app.done.cljs$core$IFn$_invoke$arity$0() : app.done.call(null));
});
return (app.take_BANG_.cljs$core$IFn$_invoke$arity$2 ? app.take_BANG_.cljs$core$IFn$_invoke$arity$2(G__39326,G__39327) : app.take_BANG_.call(null,G__39326,G__39327));
})());
});

//# sourceMappingURL=app.js.map
