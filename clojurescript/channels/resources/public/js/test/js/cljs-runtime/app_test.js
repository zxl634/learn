goog.provide('app_test');
app_test.a_failing_test = (function app_test$a_failing_test(){
return cljs.test.test_var(app_test.a_failing_test.cljs$lang$var);
});
app_test.a_failing_test.cljs$lang$test = (function (){
try{var values__9937__auto__ = (new cljs.core.List(null,(1),(new cljs.core.List(null,(2),null,(1),null)),(2),null));
var result__9938__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9937__auto__);
if(cljs.core.truth_(result__9938__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["app_test.cljs",14,new cljs.core.Keyword(null,"pass","pass",1574159993),7,10,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(2)),10,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9937__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["app_test.cljs",14,new cljs.core.Keyword(null,"fail","fail",1706214930),7,10,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(2)),10,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9937__auto__),null,(1),null)),(2),null)),null]));
}

return result__9938__auto__;
}catch (e40339){var t__9974__auto__ = e40339;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["app_test.cljs",14,new cljs.core.Keyword(null,"error","error",-978969032),7,10,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(2)),10,t__9974__auto__,null]));
}});

(app_test.a_failing_test.cljs$lang$var = new cljs.core.Var(function(){return app_test.a_failing_test;},new cljs.core.Symbol("app-test","a-failing-test","app-test/a-failing-test",-303739974,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app-test","app-test",1634230160,null),new cljs.core.Symbol(null,"a-failing-test","a-failing-test",818569336,null),"app_test.cljs",24,1,9,9,cljs.core.List.EMPTY,null,(cljs.core.truth_(app_test.a_failing_test)?app_test.a_failing_test.cljs$lang$test:null)])));
app_test.go_test = (function app_test$go_test(){
return cljs.test.test_var(app_test.go_test.cljs$lang$var);
});
app_test.go_test.cljs$lang$test = (function (){
try{var klass__9959__auto__ = cljs.core.async.impl.channels.ManyToManyChannel;
var object__9960__auto__ = app.my_go();
var result__9961__auto__ = (object__9960__auto__ instanceof klass__9959__auto__);
if(result__9961__auto__){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["app_test.cljs",74,new cljs.core.Keyword(null,"pass","pass",1574159993),7,13,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"cljs.core.async.impl.channels.ManyToManyChannel","cljs.core.async.impl.channels.ManyToManyChannel",-922100247,null),cljs.core.list(new cljs.core.Symbol(null,"my-go","my-go",-1537111033,null))),13,cljs.core.type(object__9960__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["app_test.cljs",74,new cljs.core.Keyword(null,"fail","fail",1706214930),7,13,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"cljs.core.async.impl.channels.ManyToManyChannel","cljs.core.async.impl.channels.ManyToManyChannel",-922100247,null),cljs.core.list(new cljs.core.Symbol(null,"my-go","my-go",-1537111033,null))),13,cljs.core.type(object__9960__auto__),null]));
}

return result__9961__auto__;
}catch (e40340){var t__9974__auto__ = e40340;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["app_test.cljs",74,new cljs.core.Keyword(null,"error","error",-978969032),7,13,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"cljs.core.async.impl.channels.ManyToManyChannel","cljs.core.async.impl.channels.ManyToManyChannel",-922100247,null),cljs.core.list(new cljs.core.Symbol(null,"my-go","my-go",-1537111033,null))),13,t__9974__auto__,null]));
}});

(app_test.go_test.cljs$lang$var = new cljs.core.Var(function(){return app_test.go_test;},new cljs.core.Symbol("app-test","go-test","app-test/go-test",-1399163712,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app-test","app-test",1634230160,null),new cljs.core.Symbol(null,"go-test","go-test",-295202942,null),"app_test.cljs",17,1,12,12,cljs.core.List.EMPTY,null,(cljs.core.truth_(app_test.go_test)?app_test.go_test.cljs$lang$test:null)])));
app_test.test1 = (function app_test$test1(){
return cljs.test.test_var(app_test.test1.cljs$lang$var);
});
app_test.test1.cljs$lang$test = (function (){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__30868__auto___40414 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30869__auto__ = (function (){var switch__30673__auto__ = (function (state_40344){
var state_val_40345 = (state_40344[(1)]);
if((state_val_40345 === (1))){
var state_40344__$1 = state_40344;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40344__$1,(2),ch,"Hello");
} else {
if((state_val_40345 === (2))){
var inst_40342 = (state_40344[(2)]);
var state_40344__$1 = state_40344;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40344__$1,inst_40342);
} else {
return null;
}
}
});
return (function() {
var app_test$state_machine__30674__auto__ = null;
var app_test$state_machine__30674__auto____0 = (function (){
var statearr_40346 = [null,null,null,null,null,null,null];
(statearr_40346[(0)] = app_test$state_machine__30674__auto__);

(statearr_40346[(1)] = (1));

return statearr_40346;
});
var app_test$state_machine__30674__auto____1 = (function (state_40344){
while(true){
var ret_value__30675__auto__ = (function (){try{while(true){
var result__30676__auto__ = switch__30673__auto__(state_40344);
if(cljs.core.keyword_identical_QMARK_(result__30676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30676__auto__;
}
break;
}
}catch (e40347){var ex__30677__auto__ = e40347;
var statearr_40348_40415 = state_40344;
(statearr_40348_40415[(2)] = ex__30677__auto__);


if(cljs.core.seq((state_40344[(4)]))){
var statearr_40349_40416 = state_40344;
(statearr_40349_40416[(1)] = cljs.core.first((state_40344[(4)])));

} else {
throw ex__30677__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40417 = state_40344;
state_40344 = G__40417;
continue;
} else {
return ret_value__30675__auto__;
}
break;
}
});
app_test$state_machine__30674__auto__ = function(state_40344){
switch(arguments.length){
case 0:
return app_test$state_machine__30674__auto____0.call(this);
case 1:
return app_test$state_machine__30674__auto____1.call(this,state_40344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app_test$state_machine__30674__auto__.cljs$core$IFn$_invoke$arity$0 = app_test$state_machine__30674__auto____0;
app_test$state_machine__30674__auto__.cljs$core$IFn$_invoke$arity$1 = app_test$state_machine__30674__auto____1;
return app_test$state_machine__30674__auto__;
})()
})();
var state__30870__auto__ = (function (){var statearr_40350 = f__30869__auto__();
(statearr_40350[(6)] = c__30868__auto___40414);

return statearr_40350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30870__auto__);
}));


return app.test_async((function (){var c__30868__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30869__auto__ = (function (){var switch__30673__auto__ = (function (state_40392){
var state_val_40393 = (state_40392[(1)]);
if((state_val_40393 === (7))){
var inst_40365 = (state_40392[(7)]);
var inst_40368 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40369 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Hello",cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)));
var inst_40370 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_40371 = cljs.core.cons(inst_40370,inst_40365);
var inst_40372 = ["app_test.cljs",34,new cljs.core.Keyword(null,"pass","pass",1574159993),15,20,inst_40369,20,inst_40371,null];
var inst_40373 = cljs.core.PersistentHashMap.fromArrays(inst_40368,inst_40372);
var inst_40374 = cljs.test.report.call(null,inst_40373);
var state_40392__$1 = state_40392;
var statearr_40394_40418 = state_40392__$1;
(statearr_40394_40418[(2)] = inst_40374);

(statearr_40394_40418[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40393 === (1))){
var state_40392__$1 = state_40392;
var statearr_40395_40419 = state_40392__$1;
(statearr_40395_40419[(2)] = null);

(statearr_40395_40419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40393 === (4))){
var inst_40351 = (state_40392[(2)]);
var inst_40352 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40353 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Hello",cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)));
var inst_40354 = ["app_test.cljs",34,new cljs.core.Keyword(null,"error","error",-978969032),15,20,inst_40353,20,inst_40351,null];
var inst_40355 = cljs.core.PersistentHashMap.fromArrays(inst_40352,inst_40354);
var inst_40356 = cljs.test.report.call(null,inst_40355);
var state_40392__$1 = state_40392;
var statearr_40396_40420 = state_40392__$1;
(statearr_40396_40420[(2)] = inst_40356);

(statearr_40396_40420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40393 === (6))){
var inst_40365 = (state_40392[(7)]);
var inst_40366 = (state_40392[(8)]);
var inst_40363 = (state_40392[(2)]);
var inst_40364 = (new cljs.core.List(null,inst_40363,null,(1),null));
var inst_40365__$1 = (new cljs.core.List(null,"Hello",inst_40364,(2),null));
var inst_40366__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_40365__$1);
var state_40392__$1 = (function (){var statearr_40397 = state_40392;
(statearr_40397[(7)] = inst_40365__$1);

(statearr_40397[(8)] = inst_40366__$1);

return statearr_40397;
})();
if(cljs.core.truth_(inst_40366__$1)){
var statearr_40398_40421 = state_40392__$1;
(statearr_40398_40421[(1)] = (7));

} else {
var statearr_40399_40422 = state_40392__$1;
(statearr_40399_40422[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40393 === (3))){
var inst_40390 = (state_40392[(2)]);
var state_40392__$1 = state_40392;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40392__$1,inst_40390);
} else {
if((state_val_40393 === (2))){
var _ = (function (){var statearr_40401 = state_40392;
(statearr_40401[(4)] = cljs.core.cons((5),(state_40392[(4)])));

return statearr_40401;
})();
var state_40392__$1 = state_40392;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40392__$1,(6),ch);
} else {
if((state_val_40393 === (9))){
var inst_40366 = (state_40392[(8)]);
var inst_40387 = (state_40392[(2)]);
var _ = (function (){var statearr_40402 = state_40392;
(statearr_40402[(4)] = cljs.core.rest((state_40392[(4)])));

return statearr_40402;
})();
var state_40392__$1 = (function (){var statearr_40403 = state_40392;
(statearr_40403[(9)] = inst_40387);

return statearr_40403;
})();
var statearr_40404_40423 = state_40392__$1;
(statearr_40404_40423[(2)] = inst_40366);

(statearr_40404_40423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40393 === (5))){
var _ = (function (){var statearr_40405 = state_40392;
(statearr_40405[(4)] = cljs.core.rest((state_40392[(4)])));

return statearr_40405;
})();
var state_40392__$1 = state_40392;
var ex40400 = (state_40392__$1[(2)]);
var statearr_40406_40424 = state_40392__$1;
(statearr_40406_40424[(5)] = ex40400);


var statearr_40407_40425 = state_40392__$1;
(statearr_40407_40425[(1)] = (4));

(statearr_40407_40425[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40393 === (8))){
var inst_40365 = (state_40392[(7)]);
var inst_40376 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40377 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"Hello",cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)));
var inst_40378 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_40379 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_40380 = cljs.core.cons(inst_40379,inst_40365);
var inst_40381 = (new cljs.core.List(null,inst_40380,null,(1),null));
var inst_40382 = (new cljs.core.List(null,inst_40378,inst_40381,(2),null));
var inst_40383 = ["app_test.cljs",34,new cljs.core.Keyword(null,"fail","fail",1706214930),15,20,inst_40377,20,inst_40382,null];
var inst_40384 = cljs.core.PersistentHashMap.fromArrays(inst_40376,inst_40383);
var inst_40385 = cljs.test.report.call(null,inst_40384);
var state_40392__$1 = state_40392;
var statearr_40408_40426 = state_40392__$1;
(statearr_40408_40426[(2)] = inst_40385);

(statearr_40408_40426[(1)] = (9));


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
});
return (function() {
var app_test$state_machine__30674__auto__ = null;
var app_test$state_machine__30674__auto____0 = (function (){
var statearr_40409 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40409[(0)] = app_test$state_machine__30674__auto__);

(statearr_40409[(1)] = (1));

return statearr_40409;
});
var app_test$state_machine__30674__auto____1 = (function (state_40392){
while(true){
var ret_value__30675__auto__ = (function (){try{while(true){
var result__30676__auto__ = switch__30673__auto__(state_40392);
if(cljs.core.keyword_identical_QMARK_(result__30676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30676__auto__;
}
break;
}
}catch (e40410){var ex__30677__auto__ = e40410;
var statearr_40411_40427 = state_40392;
(statearr_40411_40427[(2)] = ex__30677__auto__);


if(cljs.core.seq((state_40392[(4)]))){
var statearr_40412_40428 = state_40392;
(statearr_40412_40428[(1)] = cljs.core.first((state_40392[(4)])));

} else {
throw ex__30677__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30675__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40429 = state_40392;
state_40392 = G__40429;
continue;
} else {
return ret_value__30675__auto__;
}
break;
}
});
app_test$state_machine__30674__auto__ = function(state_40392){
switch(arguments.length){
case 0:
return app_test$state_machine__30674__auto____0.call(this);
case 1:
return app_test$state_machine__30674__auto____1.call(this,state_40392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app_test$state_machine__30674__auto__.cljs$core$IFn$_invoke$arity$0 = app_test$state_machine__30674__auto____0;
app_test$state_machine__30674__auto__.cljs$core$IFn$_invoke$arity$1 = app_test$state_machine__30674__auto____1;
return app_test$state_machine__30674__auto__;
})()
})();
var state__30870__auto__ = (function (){var statearr_40413 = f__30869__auto__();
(statearr_40413[(6)] = c__30868__auto__);

return statearr_40413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30870__auto__);
}));

return c__30868__auto__;
})());
});

(app_test.test1.cljs$lang$var = new cljs.core.Var(function(){return app_test.test1;},new cljs.core.Symbol("app-test","test1","app-test/test1",-540540932,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app-test","app-test",1634230160,null),new cljs.core.Symbol(null,"test1","test1",451069442,null),"app_test.cljs",15,1,16,16,cljs.core.List.EMPTY,null,(cljs.core.truth_(app_test.test1)?app_test.test1.cljs$lang$test:null)])));

//# sourceMappingURL=app_test.js.map
