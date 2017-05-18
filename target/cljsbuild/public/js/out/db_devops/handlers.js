// Compiled by ClojureScript 1.9.542 {}
goog.provide('db_devops.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('db_devops.db');
goog.require('db_devops.handlers.admin');
goog.require('db_devops.handlers.issues');
goog.require('db_devops.handlers.tags');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return db_devops.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),(function (db,p__62651){
var vec__62652 = p__62651;
var _ = cljs.core.nth.call(null,vec__62652,(0),null);
var page = cljs.core.nth.call(null,vec__62652,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-page","active-page",370357330),page);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"run-login-events","run-login-events",-2120456598),(function (db,_){
var seq__62655_62659 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"login-events","login-events",88658392).cljs$core$IFn$_invoke$arity$1(db));
var chunk__62656_62660 = null;
var count__62657_62661 = (0);
var i__62658_62662 = (0);
while(true){
if((i__62658_62662 < count__62657_62661)){
var event_62663 = cljs.core._nth.call(null,chunk__62656_62660,i__62658_62662);
re_frame.core.dispatch.call(null,event_62663);

var G__62664 = seq__62655_62659;
var G__62665 = chunk__62656_62660;
var G__62666 = count__62657_62661;
var G__62667 = (i__62658_62662 + (1));
seq__62655_62659 = G__62664;
chunk__62656_62660 = G__62665;
count__62657_62661 = G__62666;
i__62658_62662 = G__62667;
continue;
} else {
var temp__4657__auto___62668 = cljs.core.seq.call(null,seq__62655_62659);
if(temp__4657__auto___62668){
var seq__62655_62669__$1 = temp__4657__auto___62668;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62655_62669__$1)){
var c__49070__auto___62670 = cljs.core.chunk_first.call(null,seq__62655_62669__$1);
var G__62671 = cljs.core.chunk_rest.call(null,seq__62655_62669__$1);
var G__62672 = c__49070__auto___62670;
var G__62673 = cljs.core.count.call(null,c__49070__auto___62670);
var G__62674 = (0);
seq__62655_62659 = G__62671;
chunk__62656_62660 = G__62672;
count__62657_62661 = G__62673;
i__62658_62662 = G__62674;
continue;
} else {
var event_62675 = cljs.core.first.call(null,seq__62655_62669__$1);
re_frame.core.dispatch.call(null,event_62675);

var G__62676 = cljs.core.next.call(null,seq__62655_62669__$1);
var G__62677 = null;
var G__62678 = (0);
var G__62679 = (0);
seq__62655_62659 = G__62676;
chunk__62656_62660 = G__62677;
count__62657_62661 = G__62678;
i__62658_62662 = G__62679;
continue;
}
} else {
}
}
break;
}

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-login-event","add-login-event",-1935691252),(function (db,p__62680){
var vec__62681 = p__62680;
var _ = cljs.core.nth.call(null,vec__62681,(0),null);
var event = cljs.core.nth.call(null,vec__62681,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"login-events","login-events",88658392),cljs.core.conj,event);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"login","login",55217519),(function (db,p__62684){
var vec__62685 = p__62684;
var _ = cljs.core.nth.call(null,vec__62685,(0),null);
var user = cljs.core.nth.call(null,vec__62685,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"run-login-events","run-login-events",-2120456598)], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"user","user",1532431356),user);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"logout","logout",1418564329),(function (db,_){
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"user","user",1532431356));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-error","set-error",1627685300),(function (db,p__62688){
var vec__62689 = p__62688;
var _ = cljs.core.nth.call(null,vec__62689,(0),null);
var error = cljs.core.nth.call(null,vec__62689,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"error","error",-978969032),error);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"clear-error","clear-error",1327354158),(function (db,_){
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"error","error",-978969032));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"unset-loading","unset-loading",963737946),(function (db,_){
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"error","error",-978969032));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-loading","set-loading",984627975),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,new cljs.core.Keyword(null,"error","error",-978969032),false);
}));

//# sourceMappingURL=handlers.js.map