// Compiled by ClojureScript 1.9.542 {}
goog.provide('db_devops.handlers.admin');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('db_devops.ajax');
goog.require('ajax.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("admin","set-users","admin/set-users",-841616252),(function (db,p__61881){
var vec__61882 = p__61881;
var _ = cljs.core.nth.call(null,vec__61882,(0),null);
var users = cljs.core.nth.call(null,vec__61882,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("admin","users","admin/users",-956427918),users);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("admin","search-for-users","admin/search-for-users",1705250340),(function (db,p__61887){
var vec__61888 = p__61887;
var _ = cljs.core.nth.call(null,vec__61888,(0),null);
var screenname = cljs.core.nth.call(null,vec__61888,(1),null);
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/admin/users/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(screenname)].join(''),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__61888,_,screenname){
return (function (p1__61885_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("admin","set-users","admin/set-users",-841616252),new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(p1__61885_SHARP_)], null));
});})(vec__61888,_,screenname))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__61888,_,screenname){
return (function (p1__61886_SHARP_){
return db_devops.ajax.ajax_error.call(null,p1__61886_SHARP_);
});})(vec__61888,_,screenname))
);

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("admin","set-user-info","admin/set-user-info",993089742),(function (db,p__61892){
var vec__61893 = p__61892;
var _ = cljs.core.nth.call(null,vec__61893,(0),null);
var map__61896 = cljs.core.nth.call(null,vec__61893,(1),null);
var map__61896__$1 = ((((!((map__61896 == null)))?((((map__61896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61896.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61896):map__61896);
var user = map__61896__$1;
var user_id = cljs.core.get.call(null,map__61896__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
return cljs.core.update.call(null,db,new cljs.core.Keyword("admin","users","admin/users",-956427918),((function (vec__61893,_,map__61896,map__61896__$1,user,user_id){
return (function (users){
return cljs.core.map.call(null,((function (vec__61893,_,map__61896,map__61896__$1,user,user_id){
return (function (p1__61891_SHARP_){
if(cljs.core._EQ_.call(null,user_id,new cljs.core.Keyword(null,"user-id","user-id",-206822291).cljs$core$IFn$_invoke$arity$1(p1__61891_SHARP_))){
return user;
} else {
return p1__61891_SHARP_;
}
});})(vec__61893,_,map__61896,map__61896__$1,user,user_id))
,users);
});})(vec__61893,_,map__61896,map__61896__$1,user,user_id))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("admin","update-user-profile","admin/update-user-profile",524338870),(function (db,p__61900){
var vec__61901 = p__61900;
var _ = cljs.core.nth.call(null,vec__61901,(0),null);
var user = cljs.core.nth.call(null,vec__61901,(1),null);
ajax.core.PUT.call(null,"/admin/user",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),user,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__61901,_,user){
return (function (p1__61898_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("admin","set-user-info","admin/set-user-info",993089742),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(p1__61898_SHARP_)], null));
});})(vec__61901,_,user))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__61901,_,user){
return (function (p1__61899_SHARP_){
return db_devops.ajax.ajax_error.call(null,p1__61899_SHARP_);
});})(vec__61901,_,user))
], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("admin","create-user-profile","admin/create-user-profile",1231415003),(function (db,p__61905){
var vec__61906 = p__61905;
var _ = cljs.core.nth.call(null,vec__61906,(0),null);
var user = cljs.core.nth.call(null,vec__61906,(1),null);
ajax.core.POST.call(null,"/admin/user",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),user,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__61906,_,user){
return (function (p1__61904_SHARP_){
return db_devops.ajax.ajax_error.call(null,p1__61904_SHARP_);
});})(vec__61906,_,user))
], null));

return db;
}));

//# sourceMappingURL=admin.js.map