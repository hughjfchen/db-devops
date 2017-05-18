// Compiled by ClojureScript 1.9.542 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("@pupeno/xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__55319,handler){
var map__55320 = p__55319;
var map__55320__$1 = ((((!((map__55320 == null)))?((((map__55320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55320.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55320):map__55320);
var uri = cljs.core.get.call(null,map__55320__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__55320__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__55320__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__55320__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__55320__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__55320__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__55320__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__55320,map__55320__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__55318_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__55318_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__55320,map__55320__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___55332 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___55332)){
var response_type_55333 = temp__4657__auto___55332;
this$__$1.responseType = cljs.core.name.call(null,response_type_55333);
} else {
}

var seq__55322_55334 = cljs.core.seq.call(null,headers);
var chunk__55323_55335 = null;
var count__55324_55336 = (0);
var i__55325_55337 = (0);
while(true){
if((i__55325_55337 < count__55324_55336)){
var vec__55326_55338 = cljs.core._nth.call(null,chunk__55323_55335,i__55325_55337);
var k_55339 = cljs.core.nth.call(null,vec__55326_55338,(0),null);
var v_55340 = cljs.core.nth.call(null,vec__55326_55338,(1),null);
this$__$1.setRequestHeader(k_55339,v_55340);

var G__55341 = seq__55322_55334;
var G__55342 = chunk__55323_55335;
var G__55343 = count__55324_55336;
var G__55344 = (i__55325_55337 + (1));
seq__55322_55334 = G__55341;
chunk__55323_55335 = G__55342;
count__55324_55336 = G__55343;
i__55325_55337 = G__55344;
continue;
} else {
var temp__4657__auto___55345 = cljs.core.seq.call(null,seq__55322_55334);
if(temp__4657__auto___55345){
var seq__55322_55346__$1 = temp__4657__auto___55345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55322_55346__$1)){
var c__49070__auto___55347 = cljs.core.chunk_first.call(null,seq__55322_55346__$1);
var G__55348 = cljs.core.chunk_rest.call(null,seq__55322_55346__$1);
var G__55349 = c__49070__auto___55347;
var G__55350 = cljs.core.count.call(null,c__49070__auto___55347);
var G__55351 = (0);
seq__55322_55334 = G__55348;
chunk__55323_55335 = G__55349;
count__55324_55336 = G__55350;
i__55325_55337 = G__55351;
continue;
} else {
var vec__55329_55352 = cljs.core.first.call(null,seq__55322_55346__$1);
var k_55353 = cljs.core.nth.call(null,vec__55329_55352,(0),null);
var v_55354 = cljs.core.nth.call(null,vec__55329_55352,(1),null);
this$__$1.setRequestHeader(k_55353,v_55354);

var G__55355 = cljs.core.next.call(null,seq__55322_55346__$1);
var G__55356 = null;
var G__55357 = (0);
var G__55358 = (0);
seq__55322_55334 = G__55355;
chunk__55323_55335 = G__55356;
count__55324_55336 = G__55357;
i__55325_55337 = G__55358;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__48251__auto__ = body;
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map