goog.provide('app');
app.my_go = (function app$my_go(){
var c__30868__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30869__auto__ = (function (){var switch__30673__auto__ = (function (state_38641){
var state_val_38642 = (state_38641[(1)]);
if((state_val_38642 === (1))){
var inst_38639 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hello Processes!"], 0));
var state_38641__$1 = state_38641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38641__$1,inst_38639);
} else {
return null;
}
});
return (function() {
var app$my_go_$_state_machine__30674__auto__ = null;
var app$my_go_$_state_machine__30674__auto____0 = (function (){
var statearr_38643 = [null,null,null,null,null,null,null];
(statearr_38643[(0)] = app$my_go_$_state_machine__30674__auto__);

(statearr_38643[(1)] = (1));

return statearr_38643;
});
var app$my_go_$_state_machine__30674__auto____1 = (function (state_38641){
while(true){
var ret_value__30675__auto__ = (function (){try{while(true){
var result__30676__auto__ = switch__30673__auto__(state_38641);
if(cljs.core.keyword_identical_QMARK_(result__30676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30676__auto__;
}
break;
}
}catch (e38644){var ex__30677__auto__ = e38644;
var statearr_38645_38648 = state_38641;
(statearr_38645_38648[(2)] = ex__30677__auto__);


if(cljs.core.seq((state_38641[(4)]))){
var statearr_38646_38649 = state_38641;
(statearr_38646_38649[(1)] = cljs.core.first((state_38641[(4)])));

} else {
throw ex__30677__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38650 = state_38641;
state_38641 = G__38650;
continue;
} else {
return ret_value__30675__auto__;
}
break;
}
});
app$my_go_$_state_machine__30674__auto__ = function(state_38641){
switch(arguments.length){
case 0:
return app$my_go_$_state_machine__30674__auto____0.call(this);
case 1:
return app$my_go_$_state_machine__30674__auto____1.call(this,state_38641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$my_go_$_state_machine__30674__auto__.cljs$core$IFn$_invoke$arity$0 = app$my_go_$_state_machine__30674__auto____0;
app$my_go_$_state_machine__30674__auto__.cljs$core$IFn$_invoke$arity$1 = app$my_go_$_state_machine__30674__auto____1;
return app$my_go_$_state_machine__30674__auto__;
})()
})();
var state__30870__auto__ = (function (){var statearr_38647 = f__30869__auto__();
(statearr_38647[(6)] = c__30868__auto__);

return statearr_38647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30870__auto__);
}));

return c__30868__auto__;
});

//# sourceMappingURL=app.js.map
