// Compiled by ClojureScript 1.9.542 {}
goog.provide('db_devops.ajax');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
db_devops.ajax.ajax_error = (function db_devops$ajax$ajax_error(response){
if(cljs.core._EQ_.call(null,(401),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logout","logout",1418564329)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(response))], null));
}
});
db_devops.ajax.request_defaults = (function db_devops$ajax$request_defaults(request){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-loading","set-loading",984627975)], null));

return cljs.core.update.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),(function (p1__61877_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__61877_SHARP_)].join('');
})),new cljs.core.Keyword(null,"headers","headers",-835030129),(function (p1__61878_SHARP_){
return cljs.core.merge.call(null,p1__61878_SHARP_,new cljs.core.PersistentArrayMap(null, 2, ["Accept","application/transit+json","x-csrf-token",csrfToken], null));
}));
});
db_devops.ajax.response_defaults = (function db_devops$ajax$response_defaults(response){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unset-loading","unset-loading",963737946)], null));

return response;
});
db_devops.ajax.load_interceptors_BANG_ = (function db_devops$ajax$load_interceptors_BANG_(){
return cljs.core.swap_BANG_.call(null,ajax.core.default_interceptors,cljs.core.conj,ajax.core.to_interceptor.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"default headers",new cljs.core.Keyword(null,"request","request",1772954723),db_devops.ajax.request_defaults,new cljs.core.Keyword(null,"response","response",-1068424192),db_devops.ajax.response_defaults], null)));
});

//# sourceMappingURL=ajax.js.map