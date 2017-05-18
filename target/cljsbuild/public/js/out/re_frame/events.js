// Compiled by ClojureScript 1.9.542 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__61188_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__61188_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected a collection of interceptors, got:")].join(''),interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", given an empty interceptor chain")].join(''));
} else {
}

var temp__4657__auto___61189 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___61189)){
var not_i_61190 = temp__4657__auto___61189;
if(cljs.core.fn_QMARK_.call(null,not_i_61190)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_61190);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected interceptors, but got:")].join(''),not_i_61190);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: while handling \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_frame.events._STAR_handling_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\", dispatch-sync was called for \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_v),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". You can't call dispatch-sync within an event handler.")].join(''));
} else {
var _STAR_handling_STAR_61205 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_61206 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__61163__auto___61219 = re_frame.interop.now.call(null);
var duration__61164__auto___61220 = (end__61163__auto___61219 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__61207_61221 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__61208_61222 = null;
var count__61209_61223 = (0);
var i__61210_61224 = (0);
while(true){
if((i__61210_61224 < count__61209_61223)){
var vec__61211_61225 = cljs.core._nth.call(null,chunk__61208_61222,i__61210_61224);
var k__61165__auto___61226 = cljs.core.nth.call(null,vec__61211_61225,(0),null);
var cb__61166__auto___61227 = cljs.core.nth.call(null,vec__61211_61225,(1),null);
try{cb__61166__auto___61227.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__61164__auto___61220,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e61214){if((e61214 instanceof java.lang.Exception)){
var e__61167__auto___61228 = e61214;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__61165__auto___61226,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__61167__auto___61228);
} else {
throw e61214;

}
}
var G__61229 = seq__61207_61221;
var G__61230 = chunk__61208_61222;
var G__61231 = count__61209_61223;
var G__61232 = (i__61210_61224 + (1));
seq__61207_61221 = G__61229;
chunk__61208_61222 = G__61230;
count__61209_61223 = G__61231;
i__61210_61224 = G__61232;
continue;
} else {
var temp__4657__auto___61233 = cljs.core.seq.call(null,seq__61207_61221);
if(temp__4657__auto___61233){
var seq__61207_61234__$1 = temp__4657__auto___61233;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61207_61234__$1)){
var c__49070__auto___61235 = cljs.core.chunk_first.call(null,seq__61207_61234__$1);
var G__61236 = cljs.core.chunk_rest.call(null,seq__61207_61234__$1);
var G__61237 = c__49070__auto___61235;
var G__61238 = cljs.core.count.call(null,c__49070__auto___61235);
var G__61239 = (0);
seq__61207_61221 = G__61236;
chunk__61208_61222 = G__61237;
count__61209_61223 = G__61238;
i__61210_61224 = G__61239;
continue;
} else {
var vec__61215_61240 = cljs.core.first.call(null,seq__61207_61234__$1);
var k__61165__auto___61241 = cljs.core.nth.call(null,vec__61215_61240,(0),null);
var cb__61166__auto___61242 = cljs.core.nth.call(null,vec__61215_61240,(1),null);
try{cb__61166__auto___61242.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__61164__auto___61220,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e61218){if((e61218 instanceof java.lang.Exception)){
var e__61167__auto___61243 = e61218;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__61165__auto___61241,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__61167__auto___61243);
} else {
throw e61218;

}
}
var G__61244 = cljs.core.next.call(null,seq__61207_61234__$1);
var G__61245 = null;
var G__61246 = (0);
var G__61247 = (0);
seq__61207_61221 = G__61244;
chunk__61208_61222 = G__61245;
count__61209_61223 = G__61246;
i__61210_61224 = G__61247;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_61206;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_61205;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map