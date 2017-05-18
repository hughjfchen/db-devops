// Compiled by ClojureScript 1.9.542 {}
goog.provide('db_devops.pages.auth');
goog.require('cljs.core');
goog.require('cuerdas.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('db_devops.bootstrap');
goog.require('re_frame.core');
db_devops.pages.auth.logged_in_QMARK_ = (function db_devops$pages$auth$logged_in_QMARK_(){
return cljs.core.boolean$.call(null,user);
});
db_devops.pages.auth.logout = (function db_devops$pages$auth$logout(){
return ajax.core.POST.call(null,"/api/logout",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logout","logout",1418564329)], null))], null));
});
db_devops.pages.auth.login = (function db_devops$pages$auth$login(params,error,on_close){
cljs.core.reset_BANG_.call(null,error,null);

var map__63035 = cljs.core.deref.call(null,params);
var map__63035__$1 = ((((!((map__63035 == null)))?((((map__63035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63035.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63035):map__63035);
var userid = cljs.core.get.call(null,map__63035__$1,new cljs.core.Keyword(null,"userid","userid",1974246085));
var pass = cljs.core.get.call(null,map__63035__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
if(cljs.core.truth_((function (){var or__48251__auto__ = cuerdas.core.blank_QMARK_.call(null,userid);
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
return cuerdas.core.blank_QMARK_.call(null,pass);
}
})())){
return cljs.core.reset_BANG_.call(null,error,"Username and password cannot be blank.");
} else {
return ajax.core.POST.call(null,"/api/login",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"userid","userid",1974246085),userid,new cljs.core.Keyword(null,"pass","pass",1574159993),pass], null),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (map__63035,map__63035__$1,userid,pass){
return (function (){
return cljs.core.reset_BANG_.call(null,error,"Invalid username/password.");
});})(map__63035,map__63035__$1,userid,pass))
,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__63035,map__63035__$1,userid,pass){
return (function (p1__63032_SHARP_){
var user = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(p1__63032_SHARP_);
on_close.call(null);

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),user], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"home","home",-74557309)], null));
});})(map__63035,map__63035__$1,userid,pass))
], null));
}
});
db_devops.pages.auth.login_page = (function db_devops$pages$auth$login_page(){
var with_let63041 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let63041","with-let63041",1105748764));
var temp__4661__auto___63043 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4661__auto___63043 == null)){
} else {
var c__51974__auto___63044 = temp__4661__auto___63043;
if((with_let63041.generation === c__51974__auto___63044.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Warning: The same with-let is being used more "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("than once in the same reactive context.")].join(''));
} else {
}
} else {
}

with_let63041.generation = c__51974__auto___63044.ratomGeneration;
}


var init63042 = (with_let63041.length === (0));
var user = ((init63042)?(with_let63041[(0)] = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null))):(with_let63041[(0)]));
var params = ((init63042)?(with_let63041[(1)] = reagent.core.atom.call(null,null)):(with_let63041[(1)]));
var error = ((init63042)?(with_let63041[(2)] = reagent.core.atom.call(null,null)):(with_let63041[(2)]));
var on_close = ((init63042)?(with_let63041[(3)] = ((function (init63042,user,params,error,with_let63041){
return (function (){
cljs.core.reset_BANG_.call(null,params,null);

return cljs.core.reset_BANG_.call(null,error,null);
});})(init63042,user,params,error,with_let63041))
):(with_let63041[(3)]));
var on_key_up = ((init63042)?(with_let63041[(4)] = ((function (init63042,user,params,error,on_close,with_let63041){
return (function (e){
if(cljs.core._EQ_.call(null,(13),e.keyCode)){
return db_devops.pages.auth.login.call(null,params,error,on_close);
} else {
return null;
}
});})(init63042,user,params,error,on_close,with_let63041))
):(with_let63041[(4)]));
var res__51975__auto__ = (cljs.core.truth_(cljs.core.deref.call(null,user))?null:new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Modal,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show","show",-576705889),true,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),on_close], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Modal.Header,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Modal.Title,"\u767B\u5F55"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Modal.Body,(cljs.core.truth_(cljs.core.deref.call(null,error))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Alert,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"danger"], null),cljs.core.deref.call(null,error)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Form,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.FormGroup,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Col,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-right",new cljs.core.Keyword(null,"sm","sm",-1402575065),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.ControlLabel,"\u7528\u6237\u540D"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sm","sm",-1402575065),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__48251__auto__ = new cljs.core.Keyword(null,"userid","userid",1974246085).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,params));
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (init63042,user,params,error,on_close,on_key_up,with_let63041){
return (function (p1__63037_SHARP_){
return cljs.core.swap_BANG_.call(null,params,cljs.core.assoc,new cljs.core.Keyword(null,"userid","userid",1974246085),p1__63037_SHARP_.target.value);
});})(init63042,user,params,error,on_close,on_key_up,with_let63041))
,new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),on_key_up], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.FormGroup,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Col,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-right",new cljs.core.Keyword(null,"sm","sm",-1402575065),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.ControlLabel,"\u5BC6\u7801"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sm","sm",-1402575065),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__48251__auto__ = new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,params));
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (init63042,user,params,error,on_close,on_key_up,with_let63041){
return (function (p1__63038_SHARP_){
return cljs.core.swap_BANG_.call(null,params,cljs.core.assoc,new cljs.core.Keyword(null,"pass","pass",1574159993),p1__63038_SHARP_.target.value);
});})(init63042,user,params,error,on_close,on_key_up,with_let63041))
,new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),on_key_up], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Modal.Footer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-sm.btn-primary","button.btn.btn-sm.btn-primary",1703461621),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init63042,user,params,error,on_close,on_key_up,with_let63041){
return (function (){
return db_devops.pages.auth.login.call(null,params,error,on_close);
});})(init63042,user,params,error,on_close,on_key_up,with_let63041))
], null),"\u767B\u5F55"], null)], null)], null));

return res__51975__auto__;
});

//# sourceMappingURL=auth.js.map