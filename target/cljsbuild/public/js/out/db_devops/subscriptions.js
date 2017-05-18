// Compiled by ClojureScript 1.9.542 {}
goog.provide('db_devops.subscriptions');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"db-state","db-state",1624009049),(function (db,_){
return db;
}));
db_devops.subscriptions.query = (function db_devops$subscriptions$query(db,p__62694){
var vec__62698 = p__62694;
var event_id = cljs.core.nth.call(null,vec__62698,(0),null);
return event_id.call(null,db);
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"active-page","active-page",370357330),db_devops.subscriptions.query);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"loading?","loading?",1905707049),db_devops.subscriptions.query);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"user","user",1532431356),db_devops.subscriptions.query);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977),db_devops.subscriptions.query);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-tag","selected-tag",-746441085),db_devops.subscriptions.query);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"issue","issue",1725456421),db_devops.subscriptions.query);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"issues","issues",1989874693),db_devops.subscriptions.query);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"error","error",-978969032),db_devops.subscriptions.query);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"login-events","login-events",88658392),db_devops.subscriptions.query);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("admin","users","admin/users",-956427918),db_devops.subscriptions.query);

//# sourceMappingURL=subscriptions.js.map