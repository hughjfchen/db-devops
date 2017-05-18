// Compiled by ClojureScript 1.9.542 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__61332 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__61333 = null;
var count__61334 = (0);
var i__61335 = (0);
while(true){
if((i__61335 < count__61334)){
var vec__61336 = cljs.core._nth.call(null,chunk__61333,i__61335);
var effect_k = cljs.core.nth.call(null,vec__61336,(0),null);
var value = cljs.core.nth.call(null,vec__61336,(1),null);
var temp__4655__auto___61342 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___61342)){
var effect_fn_61343 = temp__4655__auto___61342;
effect_fn_61343.call(null,value);
} else {
}

var G__61344 = seq__61332;
var G__61345 = chunk__61333;
var G__61346 = count__61334;
var G__61347 = (i__61335 + (1));
seq__61332 = G__61344;
chunk__61333 = G__61345;
count__61334 = G__61346;
i__61335 = G__61347;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__61332);
if(temp__4657__auto__){
var seq__61332__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61332__$1)){
var c__49070__auto__ = cljs.core.chunk_first.call(null,seq__61332__$1);
var G__61348 = cljs.core.chunk_rest.call(null,seq__61332__$1);
var G__61349 = c__49070__auto__;
var G__61350 = cljs.core.count.call(null,c__49070__auto__);
var G__61351 = (0);
seq__61332 = G__61348;
chunk__61333 = G__61349;
count__61334 = G__61350;
i__61335 = G__61351;
continue;
} else {
var vec__61339 = cljs.core.first.call(null,seq__61332__$1);
var effect_k = cljs.core.nth.call(null,vec__61339,(0),null);
var value = cljs.core.nth.call(null,vec__61339,(1),null);
var temp__4655__auto___61352 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___61352)){
var effect_fn_61353 = temp__4655__auto___61352;
effect_fn_61353.call(null,value);
} else {
}

var G__61354 = cljs.core.next.call(null,seq__61332__$1);
var G__61355 = null;
var G__61356 = (0);
var G__61357 = (0);
seq__61332 = G__61354;
chunk__61333 = G__61355;
count__61334 = G__61356;
i__61335 = G__61357;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__61358 = cljs.core.seq.call(null,value);
var chunk__61359 = null;
var count__61360 = (0);
var i__61361 = (0);
while(true){
if((i__61361 < count__61360)){
var map__61362 = cljs.core._nth.call(null,chunk__61359,i__61361);
var map__61362__$1 = ((((!((map__61362 == null)))?((((map__61362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61362.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61362):map__61362);
var effect = map__61362__$1;
var ms = cljs.core.get.call(null,map__61362__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__61362__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__61358,chunk__61359,count__61360,i__61361,map__61362,map__61362__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__61358,chunk__61359,count__61360,i__61361,map__61362,map__61362__$1,effect,ms,dispatch))
,ms);
}

var G__61366 = seq__61358;
var G__61367 = chunk__61359;
var G__61368 = count__61360;
var G__61369 = (i__61361 + (1));
seq__61358 = G__61366;
chunk__61359 = G__61367;
count__61360 = G__61368;
i__61361 = G__61369;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__61358);
if(temp__4657__auto__){
var seq__61358__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61358__$1)){
var c__49070__auto__ = cljs.core.chunk_first.call(null,seq__61358__$1);
var G__61370 = cljs.core.chunk_rest.call(null,seq__61358__$1);
var G__61371 = c__49070__auto__;
var G__61372 = cljs.core.count.call(null,c__49070__auto__);
var G__61373 = (0);
seq__61358 = G__61370;
chunk__61359 = G__61371;
count__61360 = G__61372;
i__61361 = G__61373;
continue;
} else {
var map__61364 = cljs.core.first.call(null,seq__61358__$1);
var map__61364__$1 = ((((!((map__61364 == null)))?((((map__61364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61364):map__61364);
var effect = map__61364__$1;
var ms = cljs.core.get.call(null,map__61364__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__61364__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__61358,chunk__61359,count__61360,i__61361,map__61364,map__61364__$1,effect,ms,dispatch,seq__61358__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__61358,chunk__61359,count__61360,i__61361,map__61364,map__61364__$1,effect,ms,dispatch,seq__61358__$1,temp__4657__auto__))
,ms);
}

var G__61374 = cljs.core.next.call(null,seq__61358__$1);
var G__61375 = null;
var G__61376 = (0);
var G__61377 = (0);
seq__61358 = G__61374;
chunk__61359 = G__61375;
count__61360 = G__61376;
i__61361 = G__61377;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__61378 = cljs.core.seq.call(null,value);
var chunk__61379 = null;
var count__61380 = (0);
var i__61381 = (0);
while(true){
if((i__61381 < count__61380)){
var event = cljs.core._nth.call(null,chunk__61379,i__61381);
re_frame.router.dispatch.call(null,event);

var G__61382 = seq__61378;
var G__61383 = chunk__61379;
var G__61384 = count__61380;
var G__61385 = (i__61381 + (1));
seq__61378 = G__61382;
chunk__61379 = G__61383;
count__61380 = G__61384;
i__61381 = G__61385;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__61378);
if(temp__4657__auto__){
var seq__61378__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61378__$1)){
var c__49070__auto__ = cljs.core.chunk_first.call(null,seq__61378__$1);
var G__61386 = cljs.core.chunk_rest.call(null,seq__61378__$1);
var G__61387 = c__49070__auto__;
var G__61388 = cljs.core.count.call(null,c__49070__auto__);
var G__61389 = (0);
seq__61378 = G__61386;
chunk__61379 = G__61387;
count__61380 = G__61388;
i__61381 = G__61389;
continue;
} else {
var event = cljs.core.first.call(null,seq__61378__$1);
re_frame.router.dispatch.call(null,event);

var G__61390 = cljs.core.next.call(null,seq__61378__$1);
var G__61391 = null;
var G__61392 = (0);
var G__61393 = (0);
seq__61378 = G__61390;
chunk__61379 = G__61391;
count__61380 = G__61392;
i__61381 = G__61393;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__61394 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__61395 = null;
var count__61396 = (0);
var i__61397 = (0);
while(true){
if((i__61397 < count__61396)){
var event = cljs.core._nth.call(null,chunk__61395,i__61397);
clear_event.call(null,event);

var G__61398 = seq__61394;
var G__61399 = chunk__61395;
var G__61400 = count__61396;
var G__61401 = (i__61397 + (1));
seq__61394 = G__61398;
chunk__61395 = G__61399;
count__61396 = G__61400;
i__61397 = G__61401;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__61394);
if(temp__4657__auto__){
var seq__61394__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61394__$1)){
var c__49070__auto__ = cljs.core.chunk_first.call(null,seq__61394__$1);
var G__61402 = cljs.core.chunk_rest.call(null,seq__61394__$1);
var G__61403 = c__49070__auto__;
var G__61404 = cljs.core.count.call(null,c__49070__auto__);
var G__61405 = (0);
seq__61394 = G__61402;
chunk__61395 = G__61403;
count__61396 = G__61404;
i__61397 = G__61405;
continue;
} else {
var event = cljs.core.first.call(null,seq__61394__$1);
clear_event.call(null,event);

var G__61406 = cljs.core.next.call(null,seq__61394__$1);
var G__61407 = null;
var G__61408 = (0);
var G__61409 = (0);
seq__61394 = G__61406;
chunk__61395 = G__61407;
count__61396 = G__61408;
i__61397 = G__61409;
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
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map