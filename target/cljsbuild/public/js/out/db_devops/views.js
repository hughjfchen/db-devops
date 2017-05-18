// Compiled by ClojureScript 1.9.542 {}
goog.provide('db_devops.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('db_devops.bootstrap');
goog.require('db_devops.routes');
goog.require('db_devops.pages.common');
goog.require('db_devops.pages.admin.users');
goog.require('db_devops.pages.home');
goog.require('db_devops.pages.issues');
goog.require('db_devops.pages.auth');
db_devops.views.nav_link = (function db_devops$views$nav_link(url,title,page){
var active_page = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-page","active-page",370357330)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.NavItem,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),db_devops.routes.context_url.call(null,url),new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,page,cljs.core.deref.call(null,active_page))], null),title], null);
});
db_devops.views.navbar = (function db_devops$views$navbar(p__51177){
var map__51180 = p__51177;
var map__51180__$1 = ((((!((map__51180 == null)))?((((map__51180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51180.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51180):map__51180);
var admin = cljs.core.get.call(null,map__51180__$1,new cljs.core.Keyword(null,"admin","admin",-1239101627));
var screenname = cljs.core.get.call(null,map__51180__$1,new cljs.core.Keyword(null,"screenname","screenname",-1023308683));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Navbar,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Navbar.Header], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Navbar.Brand,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#logo","a#logo",186681600),db_devops.routes.href.call(null,"/"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\u6570\u636E\u5E93\u5347\u7EA7\u7CFB\u7EDF"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Navbar.Collapse,(cljs.core.truth_(admin)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Nav,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.views.nav_link,"/users","\u7528\u6237\u7BA1\u7406",new cljs.core.Keyword(null,"users","users",-713552705)], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Nav,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.NavDropdown,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"logout-menu",new cljs.core.Keyword(null,"title","title",636505583),screenname], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.MenuItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),db_devops.pages.auth.logout], null),"\u9000\u51FA"], null)], null)], null)], null)], null);
});
if(typeof db_devops.views.pages !== 'undefined'){
} else {
db_devops.views.pages = (function (){var method_table__49184__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__49185__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__49186__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__49187__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__49188__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"db-devops.views","pages"),((function (method_table__49184__auto__,prefer_table__49185__auto__,method_cache__49186__auto__,cached_hierarchy__49187__auto__,hierarchy__49188__auto__){
return (function (page,_){
return page;
});})(method_table__49184__auto__,prefer_table__49185__auto__,method_cache__49186__auto__,cached_hierarchy__49187__auto__,hierarchy__49188__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__49188__auto__,method_table__49184__auto__,prefer_table__49185__auto__,method_cache__49186__auto__,cached_hierarchy__49187__auto__));
})();
}
cljs.core._add_method.call(null,db_devops.views.pages,new cljs.core.Keyword(null,"home","home",-74557309),(function (_,___$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.home.home_page], null);
}));
cljs.core._add_method.call(null,db_devops.views.pages,new cljs.core.Keyword(null,"login","login",55217519),(function (_,___$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.auth.login_page], null);
}));
cljs.core._add_method.call(null,db_devops.views.pages,new cljs.core.Keyword(null,"users","users",-713552705),(function (_,user){
if(cljs.core.truth_(new cljs.core.Keyword(null,"admin","admin",-1239101627).cljs$core$IFn$_invoke$arity$1(user))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.admin.users.users_page], null);
} else {
return db_devops.routes.navigate_BANG_.call(null,"/");
}
}));
cljs.core._add_method.call(null,db_devops.views.pages,new cljs.core.Keyword(null,"edit-issue","edit-issue",534144578),(function (_,___$1){
window.scrollTo((0),(0));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.issues.edit_issue_page], null);
}));
cljs.core._add_method.call(null,db_devops.views.pages,new cljs.core.Keyword(null,"view-issue","view-issue",-630501608),(function (_,___$1){
window.scrollTo((0),(0));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.issues.view_issue_page], null);
}));
cljs.core._add_method.call(null,db_devops.views.pages,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
}));
db_devops.views.main_page = (function db_devops$views$main_page(){
var with_let51184 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let51184","with-let51184",-2015289201));
var temp__4661__auto___51186 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4661__auto___51186 == null)){
} else {
var c__49538__auto___51187 = temp__4661__auto___51186;
if((with_let51184.generation === c__49538__auto___51187.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Warning: The same with-let is being used more "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("than once in the same reactive context.")].join(''));
} else {
}
} else {
}

with_let51184.generation = c__49538__auto___51187.ratomGeneration;
}


var init51185 = (with_let51184.length === (0));
var active_page = ((init51185)?(with_let51184[(0)] = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-page","active-page",370357330)], null))):(with_let51184[(0)]));
var user = ((init51185)?(with_let51184[(1)] = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null))):(with_let51184[(1)]));
var res__49539__auto__ = (cljs.core.truth_(cljs.core.deref.call(null,user))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.views.navbar,cljs.core.deref.call(null,user)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.common.loading_throbber], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.common.error_modal], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.content","div.container.content",-2046744587),db_devops.views.pages.call(null,cljs.core.deref.call(null,active_page),cljs.core.deref.call(null,user))], null)], null):db_devops.views.pages.call(null,new cljs.core.Keyword(null,"login","login",55217519),null));

return res__49539__auto__;
});

//# sourceMappingURL=views.js.map