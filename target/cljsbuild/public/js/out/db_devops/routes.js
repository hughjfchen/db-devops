// Compiled by ClojureScript 1.9.542 {}
goog.provide('db_devops.routes');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('secretary.core');
goog.require('accountant.core');
goog.require('goog.History');
db_devops.routes.logged_in_QMARK_ = (function db_devops$routes$logged_in_QMARK_(){
return cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null)));
});
db_devops.routes.run_events = (function db_devops$routes$run_events(events){
var seq__62484 = cljs.core.seq.call(null,events);
var chunk__62485 = null;
var count__62486 = (0);
var i__62487 = (0);
while(true){
if((i__62487 < count__62486)){
var event = cljs.core._nth.call(null,chunk__62485,i__62487);
if(cljs.core.truth_(db_devops.routes.logged_in_QMARK_.call(null))){
re_frame.core.dispatch.call(null,event);
} else {
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-login-event","add-login-event",-1935691252),event], null));
}

var G__62488 = seq__62484;
var G__62489 = chunk__62485;
var G__62490 = count__62486;
var G__62491 = (i__62487 + (1));
seq__62484 = G__62488;
chunk__62485 = G__62489;
count__62486 = G__62490;
i__62487 = G__62491;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__62484);
if(temp__4657__auto__){
var seq__62484__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62484__$1)){
var c__49070__auto__ = cljs.core.chunk_first.call(null,seq__62484__$1);
var G__62492 = cljs.core.chunk_rest.call(null,seq__62484__$1);
var G__62493 = c__49070__auto__;
var G__62494 = cljs.core.count.call(null,c__49070__auto__);
var G__62495 = (0);
seq__62484 = G__62492;
chunk__62485 = G__62493;
count__62486 = G__62494;
i__62487 = G__62495;
continue;
} else {
var event = cljs.core.first.call(null,seq__62484__$1);
if(cljs.core.truth_(db_devops.routes.logged_in_QMARK_.call(null))){
re_frame.core.dispatch.call(null,event);
} else {
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-login-event","add-login-event",-1935691252),event], null));
}

var G__62496 = cljs.core.next.call(null,seq__62484__$1);
var G__62497 = null;
var G__62498 = (0);
var G__62499 = (0);
seq__62484 = G__62496;
chunk__62485 = G__62497;
count__62486 = G__62498;
i__62487 = G__62499;
continue;
}
} else {
return null;
}
}
break;
}
});
db_devops.routes.context_url = (function db_devops$routes$context_url(url){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
});
db_devops.routes.href = (function db_devops$routes$href(url){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('')], null);
});
db_devops.routes.navigate_BANG_ = (function db_devops$routes$navigate_BANG_(url){
return accountant.core.navigate_BANG_.call(null,db_devops.routes.context_url.call(null,url));
});
db_devops.routes.home_page_events = (function db_devops$routes$home_page_events(var_args){
var args__49371__auto__ = [];
var len__49364__auto___62501 = arguments.length;
var i__49365__auto___62502 = (0);
while(true){
if((i__49365__auto___62502 < len__49364__auto___62501)){
args__49371__auto__.push((arguments[i__49365__auto___62502]));

var G__62503 = (i__49365__auto___62502 + (1));
i__49365__auto___62502 = G__62503;
continue;
} else {
}
break;
}

var argseq__49372__auto__ = ((((0) < args__49371__auto__.length))?(new cljs.core.IndexedSeq(args__49371__auto__.slice((0)),(0),null)):null);
return db_devops.routes.home_page_events.cljs$core$IFn$_invoke$arity$variadic(argseq__49372__auto__);
});

db_devops.routes.home_page_events.cljs$core$IFn$_invoke$arity$variadic = (function (events){
window.scrollTo((0),(0));

return db_devops.routes.run_events.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-tags","load-tags",2054471855)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"home","home",-74557309)], null)], null),events));
});

db_devops.routes.home_page_events.cljs$lang$maxFixedArity = (0);

db_devops.routes.home_page_events.cljs$lang$applyTo = (function (seq62500){
return db_devops.routes.home_page_events.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq62500));
});

var action__62298__auto___62509 = (function (params__62299__auto__){
if(cljs.core.map_QMARK_.call(null,params__62299__auto__)){
var map__62504 = params__62299__auto__;
var map__62504__$1 = ((((!((map__62504 == null)))?((((map__62504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62504):map__62504);
return db_devops.routes.home_page_events.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-tag","select-tag",1977527999),"Recent"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-recent-issues","load-recent-issues",1341408468)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__62299__auto__)){
var vec__62506 = params__62299__auto__;
return db_devops.routes.home_page_events.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-tag","select-tag",1977527999),"Recent"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-recent-issues","load-recent-issues",1341408468)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,db_devops.routes.context_url.call(null,"/"),action__62298__auto___62509);

var action__62298__auto___62515 = (function (params__62299__auto__){
if(cljs.core.map_QMARK_.call(null,params__62299__auto__)){
var map__62510 = params__62299__auto__;
var map__62510__$1 = ((((!((map__62510 == null)))?((((map__62510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62510.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62510):map__62510);
var query = cljs.core.get.call(null,map__62510__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return db_devops.routes.home_page_events.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-for-issues","search-for-issues",-1618256976),query], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__62299__auto__)){
var vec__62512 = params__62299__auto__;
var query = cljs.core.nth.call(null,vec__62512,(0),null);
return db_devops.routes.home_page_events.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-for-issues","search-for-issues",-1618256976),query], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,db_devops.routes.context_url.call(null,"/search/:query"),action__62298__auto___62515);

var action__62298__auto___62521 = (function (params__62299__auto__){
if(cljs.core.map_QMARK_.call(null,params__62299__auto__)){
var map__62516 = params__62299__auto__;
var map__62516__$1 = ((((!((map__62516 == null)))?((((map__62516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62516.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62516):map__62516);
return db_devops.routes.home_page_events.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-tag","select-tag",1977527999),"All"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-all-issues","load-all-issues",1623295041)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__62299__auto__)){
var vec__62518 = params__62299__auto__;
return db_devops.routes.home_page_events.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-tag","select-tag",1977527999),"All"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-all-issues","load-all-issues",1623295041)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,db_devops.routes.context_url.call(null,"/all-issues"),action__62298__auto___62521);

var action__62298__auto___62527 = (function (params__62299__auto__){
if(cljs.core.map_QMARK_.call(null,params__62299__auto__)){
var map__62522 = params__62299__auto__;
var map__62522__$1 = ((((!((map__62522 == null)))?((((map__62522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62522.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62522):map__62522);
return db_devops.routes.home_page_events.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-tag","select-tag",1977527999),"Recent"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-recent-issues","load-recent-issues",1341408468)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__62299__auto__)){
var vec__62524 = params__62299__auto__;
return db_devops.routes.home_page_events.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-tag","select-tag",1977527999),"Recent"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-recent-issues","load-recent-issues",1341408468)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,db_devops.routes.context_url.call(null,"/recent-issues"),action__62298__auto___62527);

var action__62298__auto___62533 = (function (params__62299__auto__){
if(cljs.core.map_QMARK_.call(null,params__62299__auto__)){
var map__62528 = params__62299__auto__;
var map__62528__$1 = ((((!((map__62528 == null)))?((((map__62528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62528.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62528):map__62528);
return db_devops.routes.home_page_events.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-tag","select-tag",1977527999),"Most Viewed"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-most-viewed-issues","load-most-viewed-issues",671227116)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__62299__auto__)){
var vec__62530 = params__62299__auto__;
return db_devops.routes.home_page_events.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-tag","select-tag",1977527999),"Most Viewed"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-most-viewed-issues","load-most-viewed-issues",671227116)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,db_devops.routes.context_url.call(null,"/most-viewed-issues"),action__62298__auto___62533);

var action__62298__auto___62539 = (function (params__62299__auto__){
if(cljs.core.map_QMARK_.call(null,params__62299__auto__)){
var map__62534 = params__62299__auto__;
var map__62534__$1 = ((((!((map__62534 == null)))?((((map__62534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62534):map__62534);
var tag = cljs.core.get.call(null,map__62534__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
return db_devops.routes.home_page_events.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-tag","select-tag",1977527999),tag], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-issues-for-tag","load-issues-for-tag",1517114544),tag], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__62299__auto__)){
var vec__62536 = params__62299__auto__;
var tag = cljs.core.nth.call(null,vec__62536,(0),null);
return db_devops.routes.home_page_events.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-tag","select-tag",1977527999),tag], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-issues-for-tag","load-issues-for-tag",1517114544),tag], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,db_devops.routes.context_url.call(null,"/issues/:tag"),action__62298__auto___62539);

var action__62298__auto___62545 = (function (params__62299__auto__){
if(cljs.core.map_QMARK_.call(null,params__62299__auto__)){
var map__62540 = params__62299__auto__;
var map__62540__$1 = ((((!((map__62540 == null)))?((((map__62540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62540.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62540):map__62540);
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-issue","close-issue",2029016707)], null));

return db_devops.routes.run_events.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-tags","load-tags",2054471855)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"edit-issue","edit-issue",534144578)], null)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__62299__auto__)){
var vec__62542 = params__62299__auto__;
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"close-issue","close-issue",2029016707)], null));

return db_devops.routes.run_events.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-tags","load-tags",2054471855)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"edit-issue","edit-issue",534144578)], null)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,db_devops.routes.context_url.call(null,"/create-issue"),action__62298__auto___62545);

var action__62298__auto___62551 = (function (params__62299__auto__){
if(cljs.core.map_QMARK_.call(null,params__62299__auto__)){
var map__62546 = params__62299__auto__;
var map__62546__$1 = ((((!((map__62546 == null)))?((((map__62546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62546.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62546):map__62546);
if(cljs.core.not.call(null,(function (){var or__48251__auto__ = db_devops.routes.logged_in_QMARK_.call(null);
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
return (cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"issue","issue",1725456421)], null))) == null);
}
})())){
return db_devops.routes.navigate_BANG_.call(null,"/");
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"edit-issue","edit-issue",534144578)], null));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__62299__auto__)){
var vec__62548 = params__62299__auto__;
if(cljs.core.not.call(null,(function (){var or__48251__auto__ = db_devops.routes.logged_in_QMARK_.call(null);
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
return (cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"issue","issue",1725456421)], null))) == null);
}
})())){
return db_devops.routes.navigate_BANG_.call(null,"/");
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"edit-issue","edit-issue",534144578)], null));
}
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,db_devops.routes.context_url.call(null,"/edit-issue"),action__62298__auto___62551);

var action__62298__auto___62557 = (function (params__62299__auto__){
if(cljs.core.map_QMARK_.call(null,params__62299__auto__)){
var map__62552 = params__62299__auto__;
var map__62552__$1 = ((((!((map__62552 == null)))?((((map__62552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62552.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62552):map__62552);
var id = cljs.core.get.call(null,map__62552__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return db_devops.routes.run_events.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-tags","load-tags",2054471855)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-and-view-issue","load-and-view-issue",-1931598841),parseInt(id)], null)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__62299__auto__)){
var vec__62554 = params__62299__auto__;
var id = cljs.core.nth.call(null,vec__62554,(0),null);
return db_devops.routes.run_events.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-tags","load-tags",2054471855)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-and-view-issue","load-and-view-issue",-1931598841),parseInt(id)], null)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,db_devops.routes.context_url.call(null,"/issue/:id"),action__62298__auto___62557);

var action__62298__auto___62563 = (function (params__62299__auto__){
if(cljs.core.map_QMARK_.call(null,params__62299__auto__)){
var map__62558 = params__62299__auto__;
var map__62558__$1 = ((((!((map__62558 == null)))?((((map__62558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62558):map__62558);
return db_devops.routes.run_events.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"users","users",-713552705)], null)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__62299__auto__)){
var vec__62560 = params__62299__auto__;
return db_devops.routes.run_events.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"users","users",-713552705)], null)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,db_devops.routes.context_url.call(null,"/users"),action__62298__auto___62563);

db_devops.routes.hook_browser_navigation_BANG_ = (function db_devops$routes$hook_browser_navigation_BANG_(){
var G__62565_62566 = (new goog.History());
goog.events.listen(G__62565_62566,goog.history.EventType.NAVIGATE,((function (G__62565_62566){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__62565_62566))
);

G__62565_62566.setEnabled(true);


accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
return secretary.core.dispatch_BANG_.call(null,path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return secretary.core.locate_route.call(null,path);
})], null));

return accountant.core.dispatch_current_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map