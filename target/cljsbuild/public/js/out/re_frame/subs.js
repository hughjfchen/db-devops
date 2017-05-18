// Compiled by ClojureScript 1.9.542 {}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.utils');
goog.require('re_frame.registrar');
goog.require('re_frame.trace');
re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.subs.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.subs.query__GT_reaction = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Runs on-dispose for all subscriptions we have in the subscription cache.
 *   Used to force recreation of new subscriptions. Should only be necessary
 *   in development.
 * 
 *   The on-dispose functions for the subscriptions will remove themselves from the
 *   cache.
 * 
 *   Useful when reloading Figwheel code after a React exception, as React components
 *   aren't cleaned up properly. This means a subscription's on-dispose function isn't
 *   run when the components are destroyed. If a bad subscription caused your exception,
 *   then you can't fix it without reloading your browser.
 */
re_frame.subs.clear_subscription_cache_BANG_ = (function re_frame$subs$clear_subscription_cache_BANG_(){
var seq__61471_61481 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction));
var chunk__61472_61482 = null;
var count__61473_61483 = (0);
var i__61474_61484 = (0);
while(true){
if((i__61474_61484 < count__61473_61483)){
var vec__61475_61485 = cljs.core._nth.call(null,chunk__61472_61482,i__61474_61484);
var k_61486 = cljs.core.nth.call(null,vec__61475_61485,(0),null);
var rxn_61487 = cljs.core.nth.call(null,vec__61475_61485,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_61487);

var G__61488 = seq__61471_61481;
var G__61489 = chunk__61472_61482;
var G__61490 = count__61473_61483;
var G__61491 = (i__61474_61484 + (1));
seq__61471_61481 = G__61488;
chunk__61472_61482 = G__61489;
count__61473_61483 = G__61490;
i__61474_61484 = G__61491;
continue;
} else {
var temp__4657__auto___61492 = cljs.core.seq.call(null,seq__61471_61481);
if(temp__4657__auto___61492){
var seq__61471_61493__$1 = temp__4657__auto___61492;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61471_61493__$1)){
var c__49070__auto___61494 = cljs.core.chunk_first.call(null,seq__61471_61493__$1);
var G__61495 = cljs.core.chunk_rest.call(null,seq__61471_61493__$1);
var G__61496 = c__49070__auto___61494;
var G__61497 = cljs.core.count.call(null,c__49070__auto___61494);
var G__61498 = (0);
seq__61471_61481 = G__61495;
chunk__61472_61482 = G__61496;
count__61473_61483 = G__61497;
i__61474_61484 = G__61498;
continue;
} else {
var vec__61478_61499 = cljs.core.first.call(null,seq__61471_61493__$1);
var k_61500 = cljs.core.nth.call(null,vec__61478_61499,(0),null);
var rxn_61501 = cljs.core.nth.call(null,vec__61478_61499,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_61501);

var G__61502 = cljs.core.next.call(null,seq__61471_61493__$1);
var G__61503 = null;
var G__61504 = (0);
var G__61505 = (0);
seq__61471_61481 = G__61502;
chunk__61472_61482 = G__61503;
count__61473_61483 = G__61504;
i__61474_61484 = G__61505;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Subscription cache should be empty after clearing it.");
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(){
re_frame.registrar.clear_handlers.call(null,re_frame.subs.kind);

return re_frame.subs.clear_subscription_cache_BANG_.call(null);
});
/**
 * cache the reaction r
 */
re_frame.subs.cache_and_return = (function re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
re_frame.interop.add_on_dispose_BANG_.call(null,r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_61519 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__61163__auto___61532 = re_frame.interop.now.call(null);
var duration__61164__auto___61533 = (end__61163__auto___61532 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__61520_61534 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__61521_61535 = null;
var count__61522_61536 = (0);
var i__61523_61537 = (0);
while(true){
if((i__61523_61537 < count__61522_61536)){
var vec__61524_61538 = cljs.core._nth.call(null,chunk__61521_61535,i__61523_61537);
var k__61165__auto___61539 = cljs.core.nth.call(null,vec__61524_61538,(0),null);
var cb__61166__auto___61540 = cljs.core.nth.call(null,vec__61524_61538,(1),null);
try{cb__61166__auto___61540.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__61164__auto___61533,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e61527){if((e61527 instanceof java.lang.Exception)){
var e__61167__auto___61541 = e61527;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__61165__auto___61539,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__61167__auto___61541);
} else {
throw e61527;

}
}
var G__61542 = seq__61520_61534;
var G__61543 = chunk__61521_61535;
var G__61544 = count__61522_61536;
var G__61545 = (i__61523_61537 + (1));
seq__61520_61534 = G__61542;
chunk__61521_61535 = G__61543;
count__61522_61536 = G__61544;
i__61523_61537 = G__61545;
continue;
} else {
var temp__4657__auto___61546 = cljs.core.seq.call(null,seq__61520_61534);
if(temp__4657__auto___61546){
var seq__61520_61547__$1 = temp__4657__auto___61546;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61520_61547__$1)){
var c__49070__auto___61548 = cljs.core.chunk_first.call(null,seq__61520_61547__$1);
var G__61549 = cljs.core.chunk_rest.call(null,seq__61520_61547__$1);
var G__61550 = c__49070__auto___61548;
var G__61551 = cljs.core.count.call(null,c__49070__auto___61548);
var G__61552 = (0);
seq__61520_61534 = G__61549;
chunk__61521_61535 = G__61550;
count__61522_61536 = G__61551;
i__61523_61537 = G__61552;
continue;
} else {
var vec__61528_61553 = cljs.core.first.call(null,seq__61520_61547__$1);
var k__61165__auto___61554 = cljs.core.nth.call(null,vec__61528_61553,(0),null);
var cb__61166__auto___61555 = cljs.core.nth.call(null,vec__61528_61553,(1),null);
try{cb__61166__auto___61555.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__61164__auto___61533,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e61531){if((e61531 instanceof java.lang.Exception)){
var e__61167__auto___61556 = e61531;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__61165__auto___61554,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__61167__auto___61556);
} else {
throw e61531;

}
}
var G__61557 = cljs.core.next.call(null,seq__61520_61547__$1);
var G__61558 = null;
var G__61559 = (0);
var G__61560 = (0);
seq__61520_61534 = G__61557;
chunk__61521_61535 = G__61558;
count__61522_61536 = G__61559;
i__61523_61537 = G__61560;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_61519;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__61180__auto___61561 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__61180__auto___61561;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var args61562 = [];
var len__49364__auto___61565 = arguments.length;
var i__49365__auto___61566 = (0);
while(true){
if((i__49365__auto___61566 < len__49364__auto___61565)){
args61562.push((arguments[i__49365__auto___61566]));

var G__61567 = (i__49365__auto___61566 + (1));
i__49365__auto___61566 = G__61567;
continue;
} else {
}
break;
}

var G__61564 = args61562.length;
switch (G__61564) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args61562.length)].join('')));

}
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.subs.cache_lookup.call(null,query_v,cljs.core.PersistentVector.EMPTY);
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Returns a Reagent/reaction which contains a computation
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var args61569 = [];
var len__49364__auto___61598 = arguments.length;
var i__49365__auto___61599 = (0);
while(true){
if((i__49365__auto___61599 < len__49364__auto___61598)){
args61569.push((arguments[i__49365__auto___61599]));

var G__61600 = (i__49365__auto___61599 + (1));
i__49365__auto___61599 = G__61600;
continue;
} else {
}
break;
}

var G__61571 = args61569.length;
switch (G__61571) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args61569.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_61572 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__61180__auto___61602 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__61180__auto___61602;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__61180__auto___61603 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__61180__auto___61603;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__61180__auto___61604 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__61180__auto___61604;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__61163__auto___61605 = re_frame.interop.now.call(null);
var duration__61164__auto___61606 = (end__61163__auto___61605 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__61573_61607 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__61574_61608 = null;
var count__61575_61609 = (0);
var i__61576_61610 = (0);
while(true){
if((i__61576_61610 < count__61575_61609)){
var vec__61577_61611 = cljs.core._nth.call(null,chunk__61574_61608,i__61576_61610);
var k__61165__auto___61612 = cljs.core.nth.call(null,vec__61577_61611,(0),null);
var cb__61166__auto___61613 = cljs.core.nth.call(null,vec__61577_61611,(1),null);
try{cb__61166__auto___61613.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__61164__auto___61606,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e61580){if((e61580 instanceof java.lang.Exception)){
var e__61167__auto___61614 = e61580;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__61165__auto___61612,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__61167__auto___61614);
} else {
throw e61580;

}
}
var G__61615 = seq__61573_61607;
var G__61616 = chunk__61574_61608;
var G__61617 = count__61575_61609;
var G__61618 = (i__61576_61610 + (1));
seq__61573_61607 = G__61615;
chunk__61574_61608 = G__61616;
count__61575_61609 = G__61617;
i__61576_61610 = G__61618;
continue;
} else {
var temp__4657__auto___61619 = cljs.core.seq.call(null,seq__61573_61607);
if(temp__4657__auto___61619){
var seq__61573_61620__$1 = temp__4657__auto___61619;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61573_61620__$1)){
var c__49070__auto___61621 = cljs.core.chunk_first.call(null,seq__61573_61620__$1);
var G__61622 = cljs.core.chunk_rest.call(null,seq__61573_61620__$1);
var G__61623 = c__49070__auto___61621;
var G__61624 = cljs.core.count.call(null,c__49070__auto___61621);
var G__61625 = (0);
seq__61573_61607 = G__61622;
chunk__61574_61608 = G__61623;
count__61575_61609 = G__61624;
i__61576_61610 = G__61625;
continue;
} else {
var vec__61581_61626 = cljs.core.first.call(null,seq__61573_61620__$1);
var k__61165__auto___61627 = cljs.core.nth.call(null,vec__61581_61626,(0),null);
var cb__61166__auto___61628 = cljs.core.nth.call(null,vec__61581_61626,(1),null);
try{cb__61166__auto___61628.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__61164__auto___61606,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e61584){if((e61584 instanceof java.lang.Exception)){
var e__61167__auto___61629 = e61584;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__61165__auto___61627,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__61167__auto___61629);
} else {
throw e61584;

}
}
var G__61630 = cljs.core.next.call(null,seq__61573_61620__$1);
var G__61631 = null;
var G__61632 = (0);
var G__61633 = (0);
seq__61573_61607 = G__61630;
chunk__61574_61608 = G__61631;
count__61575_61609 = G__61632;
i__61576_61610 = G__61633;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_61572;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__61180__auto___61634 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__61180__auto___61634;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__61180__auto___61635 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__61180__auto___61635;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__61180__auto___61636 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__61180__auto___61636;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (v,dynv){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_61585 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),v,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));

try{try{var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__61180__auto___61637 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__61180__auto___61637;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__61180__auto___61638 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__61180__auto___61638;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___61639 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___61639)){
var not_reactive_61640 = temp__4657__auto___61639;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_61640);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__61180__auto___61641 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__61180__auto___61641;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_61585){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_61585))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_61585){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_61585))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_61585){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__,_STAR_current_trace_STAR_61585))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__61163__auto___61642 = re_frame.interop.now.call(null);
var duration__61164__auto___61643 = (end__61163__auto___61642 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__61586_61644 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__61587_61645 = null;
var count__61588_61646 = (0);
var i__61589_61647 = (0);
while(true){
if((i__61589_61647 < count__61588_61646)){
var vec__61590_61648 = cljs.core._nth.call(null,chunk__61587_61645,i__61589_61647);
var k__61165__auto___61649 = cljs.core.nth.call(null,vec__61590_61648,(0),null);
var cb__61166__auto___61650 = cljs.core.nth.call(null,vec__61590_61648,(1),null);
try{cb__61166__auto___61650.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__61164__auto___61643,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e61593){if((e61593 instanceof java.lang.Exception)){
var e__61167__auto___61651 = e61593;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__61165__auto___61649,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__61167__auto___61651);
} else {
throw e61593;

}
}
var G__61652 = seq__61586_61644;
var G__61653 = chunk__61587_61645;
var G__61654 = count__61588_61646;
var G__61655 = (i__61589_61647 + (1));
seq__61586_61644 = G__61652;
chunk__61587_61645 = G__61653;
count__61588_61646 = G__61654;
i__61589_61647 = G__61655;
continue;
} else {
var temp__4657__auto___61656 = cljs.core.seq.call(null,seq__61586_61644);
if(temp__4657__auto___61656){
var seq__61586_61657__$1 = temp__4657__auto___61656;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61586_61657__$1)){
var c__49070__auto___61658 = cljs.core.chunk_first.call(null,seq__61586_61657__$1);
var G__61659 = cljs.core.chunk_rest.call(null,seq__61586_61657__$1);
var G__61660 = c__49070__auto___61658;
var G__61661 = cljs.core.count.call(null,c__49070__auto___61658);
var G__61662 = (0);
seq__61586_61644 = G__61659;
chunk__61587_61645 = G__61660;
count__61588_61646 = G__61661;
i__61589_61647 = G__61662;
continue;
} else {
var vec__61594_61663 = cljs.core.first.call(null,seq__61586_61657__$1);
var k__61165__auto___61664 = cljs.core.nth.call(null,vec__61594_61663,(0),null);
var cb__61166__auto___61665 = cljs.core.nth.call(null,vec__61594_61663,(1),null);
try{cb__61166__auto___61665.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__61164__auto___61643,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e61597){if((e61597 instanceof java.lang.Exception)){
var e__61167__auto___61666 = e61597;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__61165__auto___61664,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__61167__auto___61666);
} else {
throw e61597;

}
}
var G__61667 = cljs.core.next.call(null,seq__61586_61657__$1);
var G__61668 = null;
var G__61669 = (0);
var G__61670 = (0);
seq__61586_61644 = G__61667;
chunk__61587_61645 = G__61668;
count__61588_61646 = G__61669;
i__61589_61647 = G__61670;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_61585;
}} else {
var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__61180__auto___61671 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__61180__auto___61671;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__61180__auto___61672 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__61180__auto___61672;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___61673 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___61673)){
var not_reactive_61674 = temp__4657__auto___61673;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_61674);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__61180__auto___61675 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__61180__auto___61675;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__))
));
}
}
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__61680){
var vec__61681 = p__61680;
var k = cljs.core.nth.call(null,vec__61681,(0),null);
var v = cljs.core.nth.call(null,vec__61681,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_.call(null,signals))?cljs.core.map.call(null,cljs.core.deref,signals):((cljs.core.map_QMARK_.call(null,signals))?re_frame.subs.map_vals.call(null,cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_.call(null,signals))?cljs.core.deref.call(null,signals):re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals)
)));
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__61180__auto___61684 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__61180__auto___61684;

} else {
}

return signals__$1;
});
/**
 * Associate the given `query id` with a handler function and an optional signal function.
 * 
 *   There's 3 ways this function can be called
 * 
 *   1. (reg-sub
 *     :test-sub
 *     (fn [db [_]] db))
 *   The value in app-db is passed to the computation function as the 1st argument.
 * 
 *   2. (reg-sub
 *     :a-b-sub
 *     (fn [q-vec d-vec]
 *       [(subs/subscribe [:a-sub])
 *        (subs/subscribe [:b-sub])])
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   Two functions provided. The 2nd is computation function, as before. The 1st
 *   is returns what `input signals` should be provided to the computation. The
 *   `input signals` function is called with two arguments: the query vector
 *   and the dynamic vector. The return value can be singleton reaction or
 *   a sequence of reactions.
 * 
 *   3. (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))```
 *   This 3rd variation is just syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. `:<-` is supplied followed by the subscription
 *   vector.
 *   
 */
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__49371__auto__ = [];
var len__49364__auto___61743 = arguments.length;
var i__49365__auto___61744 = (0);
while(true){
if((i__49365__auto___61744 < len__49364__auto___61743)){
args__49371__auto__.push((arguments[i__49365__auto___61744]));

var G__61745 = (i__49365__auto___61744 + (1));
i__49365__auto___61744 = G__61745;
continue;
} else {
}
break;
}

var argseq__49372__auto__ = ((((1) < args__49371__auto__.length))?(new cljs.core.IndexedSeq(args__49371__auto__.slice((1)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49372__auto__);
});

re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last.call(null,args);
var input_args = cljs.core.butlast.call(null,args);
var err_header = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: reg-sub for "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", ")].join('');
var inputs_fn = (function (){var G__61687 = cljs.core.count.call(null,input_args);
switch (G__61687) {
case (0):
return ((function (G__61687,computation_fn,input_args,err_header){
return (function() {
var G__61747 = null;
var G__61747__1 = (function (_){
return re_frame.db.app_db;
});
var G__61747__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__61747 = function(_,___$1){
switch(arguments.length){
case 1:
return G__61747__1.call(this,_);
case 2:
return G__61747__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__61747.cljs$core$IFn$_invoke$arity$1 = G__61747__1;
G__61747.cljs$core$IFn$_invoke$arity$2 = G__61747__2;
return G__61747;
})()
;})(G__61687,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first.call(null,input_args);
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"2nd argument expected to be an inputs function, got:",f);
}

return f;

break;
case (2):
var vec__61688 = input_args;
var marker = cljs.core.nth.call(null,vec__61688,(0),null);
var vec = cljs.core.nth.call(null,vec__61688,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"<-","<-",760412998),marker)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected :<-, got:",marker);
}

return ((function (vec__61688,marker,vec,G__61687,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return re_frame.subs.subscribe.call(null,vec);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return re_frame.subs.subscribe.call(null,vec);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(vec__61688,marker,vec,G__61687,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var markers = cljs.core.map.call(null,cljs.core.first,pairs);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if((cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<-","<-",760412998),null], null), null),markers)) && (cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs))){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,markers,vecs,G__61687,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(pairs,markers,vecs,G__61687,computation_fn,input_args,err_header))

}
})();
return re_frame.registrar.register_handler.call(null,re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var re_frame$subs$subs_handler_fn = null;
var re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = inputs_fn.call(null,query_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_61717 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__61163__auto___61748 = re_frame.interop.now.call(null);
var duration__61164__auto___61749 = (end__61163__auto___61748 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__61718_61750 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__61719_61751 = null;
var count__61720_61752 = (0);
var i__61721_61753 = (0);
while(true){
if((i__61721_61753 < count__61720_61752)){
var vec__61722_61754 = cljs.core._nth.call(null,chunk__61719_61751,i__61721_61753);
var k__61165__auto___61755 = cljs.core.nth.call(null,vec__61722_61754,(0),null);
var cb__61166__auto___61756 = cljs.core.nth.call(null,vec__61722_61754,(1),null);
try{cb__61166__auto___61756.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__61164__auto___61749,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e61725){if((e61725 instanceof java.lang.Exception)){
var e__61167__auto___61757 = e61725;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__61165__auto___61755,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__61167__auto___61757);
} else {
throw e61725;

}
}
var G__61758 = seq__61718_61750;
var G__61759 = chunk__61719_61751;
var G__61760 = count__61720_61752;
var G__61761 = (i__61721_61753 + (1));
seq__61718_61750 = G__61758;
chunk__61719_61751 = G__61759;
count__61720_61752 = G__61760;
i__61721_61753 = G__61761;
continue;
} else {
var temp__4657__auto___61762 = cljs.core.seq.call(null,seq__61718_61750);
if(temp__4657__auto___61762){
var seq__61718_61763__$1 = temp__4657__auto___61762;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61718_61763__$1)){
var c__49070__auto___61764 = cljs.core.chunk_first.call(null,seq__61718_61763__$1);
var G__61765 = cljs.core.chunk_rest.call(null,seq__61718_61763__$1);
var G__61766 = c__49070__auto___61764;
var G__61767 = cljs.core.count.call(null,c__49070__auto___61764);
var G__61768 = (0);
seq__61718_61750 = G__61765;
chunk__61719_61751 = G__61766;
count__61720_61752 = G__61767;
i__61721_61753 = G__61768;
continue;
} else {
var vec__61726_61769 = cljs.core.first.call(null,seq__61718_61763__$1);
var k__61165__auto___61770 = cljs.core.nth.call(null,vec__61726_61769,(0),null);
var cb__61166__auto___61771 = cljs.core.nth.call(null,vec__61726_61769,(1),null);
try{cb__61166__auto___61771.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__61164__auto___61749,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e61729){if((e61729 instanceof java.lang.Exception)){
var e__61167__auto___61772 = e61729;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__61165__auto___61770,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__61167__auto___61772);
} else {
throw e61729;

}
}
var G__61773 = cljs.core.next.call(null,seq__61718_61763__$1);
var G__61774 = null;
var G__61775 = (0);
var G__61776 = (0);
seq__61718_61750 = G__61773;
chunk__61719_61751 = G__61774;
count__61720_61752 = G__61775;
i__61721_61753 = G__61776;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_61717;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = inputs_fn.call(null,query_vec,dyn_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_61730 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__61163__auto___61777 = re_frame.interop.now.call(null);
var duration__61164__auto___61778 = (end__61163__auto___61777 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__61731_61779 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__61732_61780 = null;
var count__61733_61781 = (0);
var i__61734_61782 = (0);
while(true){
if((i__61734_61782 < count__61733_61781)){
var vec__61735_61783 = cljs.core._nth.call(null,chunk__61732_61780,i__61734_61782);
var k__61165__auto___61784 = cljs.core.nth.call(null,vec__61735_61783,(0),null);
var cb__61166__auto___61785 = cljs.core.nth.call(null,vec__61735_61783,(1),null);
try{cb__61166__auto___61785.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__61164__auto___61778,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e61738){if((e61738 instanceof java.lang.Exception)){
var e__61167__auto___61786 = e61738;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__61165__auto___61784,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__61167__auto___61786);
} else {
throw e61738;

}
}
var G__61787 = seq__61731_61779;
var G__61788 = chunk__61732_61780;
var G__61789 = count__61733_61781;
var G__61790 = (i__61734_61782 + (1));
seq__61731_61779 = G__61787;
chunk__61732_61780 = G__61788;
count__61733_61781 = G__61789;
i__61734_61782 = G__61790;
continue;
} else {
var temp__4657__auto___61791 = cljs.core.seq.call(null,seq__61731_61779);
if(temp__4657__auto___61791){
var seq__61731_61792__$1 = temp__4657__auto___61791;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61731_61792__$1)){
var c__49070__auto___61793 = cljs.core.chunk_first.call(null,seq__61731_61792__$1);
var G__61794 = cljs.core.chunk_rest.call(null,seq__61731_61792__$1);
var G__61795 = c__49070__auto___61793;
var G__61796 = cljs.core.count.call(null,c__49070__auto___61793);
var G__61797 = (0);
seq__61731_61779 = G__61794;
chunk__61732_61780 = G__61795;
count__61733_61781 = G__61796;
i__61734_61782 = G__61797;
continue;
} else {
var vec__61739_61798 = cljs.core.first.call(null,seq__61731_61792__$1);
var k__61165__auto___61799 = cljs.core.nth.call(null,vec__61739_61798,(0),null);
var cb__61166__auto___61800 = cljs.core.nth.call(null,vec__61739_61798,(1),null);
try{cb__61166__auto___61800.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__61164__auto___61778,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e61742){if((e61742 instanceof java.lang.Exception)){
var e__61167__auto___61801 = e61742;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__61165__auto___61799,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__61167__auto___61801);
} else {
throw e61742;

}
}
var G__61802 = cljs.core.next.call(null,seq__61731_61792__$1);
var G__61803 = null;
var G__61804 = (0);
var G__61805 = (0);
seq__61731_61779 = G__61802;
chunk__61732_61780 = G__61803;
count__61733_61781 = G__61804;
i__61734_61782 = G__61805;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_61730;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$subs_handler_fn__2;
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = re_frame$subs$subs_handler_fn__3;
return re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq61685){
var G__61686 = cljs.core.first.call(null,seq61685);
var seq61685__$1 = cljs.core.next.call(null,seq61685);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__61686,seq61685__$1);
});


//# sourceMappingURL=subs.js.map