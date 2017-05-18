// Compiled by ClojureScript 1.9.542 {}
goog.provide('db_devops.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('db_devops.routes');
goog.require('db_devops.ajax');
goog.require('db_devops.views');
goog.require('db_devops.pages.auth');
goog.require('re_frame.core');
goog.require('db_devops.handlers');
goog.require('db_devops.subscriptions');
db_devops.core.mount_components = (function db_devops$core$mount_components(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return db_devops.views.main_page;},new cljs.core.Symbol("db-devops.views","main-page","db-devops.views/main-page",-2018027457,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"db-devops.views","db-devops.views",-1567655402,null),new cljs.core.Symbol(null,"main-page","main-page",1805768915,null),"/Users/chenjinfen/Desktop/projects/CMB/IMAVP/2017/db-devops/05-dev/db-devops/src/cljs/db_devops/views.cljs",16,1,46,46,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(db_devops.views.main_page)?db_devops.views.main_page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
db_devops.core.init_BANG_ = (function db_devops$core$init_BANG_(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

if(cljs.core.truth_(db_devops.pages.auth.logged_in_QMARK_.call(null))){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"run-login-events","run-login-events",-2120456598)], null));
} else {
}

db_devops.ajax.load_interceptors_BANG_.call(null);

db_devops.routes.hook_browser_navigation_BANG_.call(null);

return db_devops.core.mount_components.call(null);
});

//# sourceMappingURL=core.js.map