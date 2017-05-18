// Compiled by ClojureScript 1.9.542 {}
goog.provide('db_devops.handlers.tags');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('db_devops.ajax');
goog.require('ajax.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-tags","set-tags",-2130194508),(function (db,p__61911){
var vec__61912 = p__61911;
var _ = cljs.core.nth.call(null,vec__61912,(0),null);
var tags = cljs.core.nth.call(null,vec__61912,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"tags","tags",1771418977),tags);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"select-tag","select-tag",1977527999),(function (db,p__61915){
var vec__61916 = p__61915;
var _ = cljs.core.nth.call(null,vec__61916,(0),null);
var tag = cljs.core.nth.call(null,vec__61916,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-tag","selected-tag",-746441085),tag);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-tags","load-tags",2054471855),(function (db,_){
ajax.core.GET.call(null,"/api/tags",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__61919_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tags","set-tags",-2130194508),new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(p1__61919_SHARP_)], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__61920_SHARP_){
return db_devops.ajax.ajax_error.call(null,p1__61920_SHARP_);
})], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-tag","add-tag",-1033774851),(function (db,p__61921){
var vec__61922 = p__61921;
var _ = cljs.core.nth.call(null,vec__61922,(0),null);
var tag = cljs.core.nth.call(null,vec__61922,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.conj,tag);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"create-tag","create-tag",67462846),(function (db,p__61927){
var vec__61928 = p__61927;
var _ = cljs.core.nth.call(null,vec__61928,(0),null);
var tag = cljs.core.nth.call(null,vec__61928,(1),null);
ajax.core.POST.call(null,"/api/tag",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__61928,_,tag){
return (function (p1__61925_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-tag","add-tag",-1033774851),p1__61925_SHARP_], null));
});})(vec__61928,_,tag))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__61928,_,tag){
return (function (p1__61926_SHARP_){
return db_devops.ajax.ajax_error.call(null,p1__61926_SHARP_);
});})(vec__61928,_,tag))
], null));

return db;
}));

//# sourceMappingURL=tags.js.map