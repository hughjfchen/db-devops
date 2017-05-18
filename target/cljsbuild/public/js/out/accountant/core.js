// Compiled by ClojureScript 1.9.542 {}
goog.provide('accountant.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('goog.history.Event');
goog.require('goog.history.Html5History');
goog.require('goog.Uri');
if(typeof accountant.core.history !== 'undefined'){
} else {
accountant.core.history = (new goog.history.Html5History());
}
accountant.core.listen = (function accountant$core$listen(el,type){
var out = cljs.core.async.chan.call(null);
goog.events.listen(el,type,((function (out){
return (function (e){
return cljs.core.async.put_BANG_.call(null,out,e);
});})(out))
);

return out;
});
accountant.core.dispatch_on_navigate = (function accountant$core$dispatch_on_navigate(history,nav_handler){
var navigation = accountant.core.listen.call(null,history,goog.history.EventType.NAVIGATE);
var c__57384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__57384__auto__,navigation){
return (function (){
var f__57385__auto__ = (function (){var switch__57272__auto__ = ((function (c__57384__auto__,navigation){
return (function (state_62249){
var state_val_62250 = (state_62249[(1)]);
if((state_val_62250 === (1))){
var state_62249__$1 = state_62249;
var statearr_62251_62265 = state_62249__$1;
(statearr_62251_62265[(2)] = null);

(statearr_62251_62265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62250 === (2))){
var state_62249__$1 = state_62249;
var statearr_62252_62266 = state_62249__$1;
(statearr_62252_62266[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62250 === (3))){
var inst_62247 = (state_62249[(2)]);
var state_62249__$1 = state_62249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62249__$1,inst_62247);
} else {
if((state_val_62250 === (4))){
var state_62249__$1 = state_62249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62249__$1,(7),navigation);
} else {
if((state_val_62250 === (5))){
var state_62249__$1 = state_62249;
var statearr_62254_62267 = state_62249__$1;
(statearr_62254_62267[(2)] = null);

(statearr_62254_62267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62250 === (6))){
var inst_62245 = (state_62249[(2)]);
var state_62249__$1 = state_62249;
var statearr_62255_62268 = state_62249__$1;
(statearr_62255_62268[(2)] = inst_62245);

(statearr_62255_62268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62250 === (7))){
var inst_62239 = (state_62249[(2)]);
var inst_62240 = inst_62239.token;
var inst_62241 = nav_handler.call(null,inst_62240);
var state_62249__$1 = (function (){var statearr_62256 = state_62249;
(statearr_62256[(7)] = inst_62241);

return statearr_62256;
})();
var statearr_62257_62269 = state_62249__$1;
(statearr_62257_62269[(2)] = null);

(statearr_62257_62269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__57384__auto__,navigation))
;
return ((function (switch__57272__auto__,c__57384__auto__,navigation){
return (function() {
var accountant$core$dispatch_on_navigate_$_state_machine__57273__auto__ = null;
var accountant$core$dispatch_on_navigate_$_state_machine__57273__auto____0 = (function (){
var statearr_62261 = [null,null,null,null,null,null,null,null];
(statearr_62261[(0)] = accountant$core$dispatch_on_navigate_$_state_machine__57273__auto__);

(statearr_62261[(1)] = (1));

return statearr_62261;
});
var accountant$core$dispatch_on_navigate_$_state_machine__57273__auto____1 = (function (state_62249){
while(true){
var ret_value__57274__auto__ = (function (){try{while(true){
var result__57275__auto__ = switch__57272__auto__.call(null,state_62249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57275__auto__;
}
break;
}
}catch (e62262){if((e62262 instanceof Object)){
var ex__57276__auto__ = e62262;
var statearr_62263_62270 = state_62249;
(statearr_62263_62270[(5)] = ex__57276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62271 = state_62249;
state_62249 = G__62271;
continue;
} else {
return ret_value__57274__auto__;
}
break;
}
});
accountant$core$dispatch_on_navigate_$_state_machine__57273__auto__ = function(state_62249){
switch(arguments.length){
case 0:
return accountant$core$dispatch_on_navigate_$_state_machine__57273__auto____0.call(this);
case 1:
return accountant$core$dispatch_on_navigate_$_state_machine__57273__auto____1.call(this,state_62249);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
accountant$core$dispatch_on_navigate_$_state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$0 = accountant$core$dispatch_on_navigate_$_state_machine__57273__auto____0;
accountant$core$dispatch_on_navigate_$_state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$1 = accountant$core$dispatch_on_navigate_$_state_machine__57273__auto____1;
return accountant$core$dispatch_on_navigate_$_state_machine__57273__auto__;
})()
;})(switch__57272__auto__,c__57384__auto__,navigation))
})();
var state__57386__auto__ = (function (){var statearr_62264 = f__57385__auto__.call(null);
(statearr_62264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__57384__auto__);

return statearr_62264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__57386__auto__);
});})(c__57384__auto__,navigation))
);

return c__57384__auto__;
});
/**
 * Given a DOM element that may or may not be a link, traverse up the DOM tree
 *   to see if any of its parents are links. If so, return the node.
 */
accountant.core.find_href_node = (function accountant$core$find_href_node(e){
while(true){
if(cljs.core.truth_(e.href)){
return e;
} else {
var temp__4657__auto__ = e.parentNode;
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
var G__62272 = parent;
e = G__62272;
continue;
} else {
return null;
}
}
break;
}
});
/**
 * Gets the URL for a history token, but without preserving the query string
 *   as Google's version incorrectly does. (See https://goo.gl/xwgUos)
 */
accountant.core.get_url = (function accountant$core$get_url(history,token){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(history.pathPrefix_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('');
});
/**
 * Sets a history token, but without preserving the query string as Google's
 *   version incorrectly does. (See https://goo.gl/xwgUos)
 */
accountant.core.set_token_BANG_ = (function accountant$core$set_token_BANG_(history,token,title){
var js_history = history.window_.history;
var url = accountant.core.get_url.call(null,history,token);
js_history.pushState(null,(function (){var or__48251__auto__ = title;
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
var or__48251__auto____$1 = document.title;
if(cljs.core.truth_(or__48251__auto____$1)){
return or__48251__auto____$1;
} else {
return "";
}
}
})(),url);

return history.dispatchEvent((new goog.history.Event(token)));
});
accountant.core.uri__GT_query = (function accountant$core$uri__GT_query(uri){
var query = uri.getQuery();
if(cljs.core.empty_QMARK_.call(null,query)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("?"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('');
}
});
accountant.core.uri__GT_fragment = (function accountant$core$uri__GT_fragment(uri){
var fragment = uri.getFragment();
if(cljs.core.empty_QMARK_.call(null,fragment)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fragment)].join('');
}
});
/**
 * Create a click handler that blocks page reloads for known routes
 */
accountant.core.prevent_reload_on_known_path = (function accountant$core$prevent_reload_on_known_path(history,path_exists_QMARK_){
return goog.events.listen(document,"click",(function (e){
var target = e.target;
var button = e.button;
var meta_key = e.metaKey;
var alt_key = e.altKey;
var ctrl_key = e.ctrlKey;
var shift_key = e.shiftKey;
var any_key = (function (){var or__48251__auto__ = meta_key;
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
var or__48251__auto____$1 = alt_key;
if(cljs.core.truth_(or__48251__auto____$1)){
return or__48251__auto____$1;
} else {
var or__48251__auto____$2 = ctrl_key;
if(cljs.core.truth_(or__48251__auto____$2)){
return or__48251__auto____$2;
} else {
return shift_key;
}
}
}
})();
var href_node = accountant.core.find_href_node.call(null,target);
var href = (cljs.core.truth_(href_node)?href_node.href:null);
var link_target = (cljs.core.truth_(href_node)?href_node.target:null);
var uri = goog.Uri.parse(href);
var path = uri.getPath();
var query = accountant.core.uri__GT_query.call(null,uri);
var fragment = accountant.core.uri__GT_fragment.call(null,uri);
var relative_href = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fragment)].join('');
var title = target.title;
var host = uri.getDomain();
var port = uri.getPort();
var current_host = window.location.hostname;
var current_port = window.location.port;
var loc = window.location;
var current_relative_href = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.query),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.hash)].join('');
if(cljs.core.truth_((function (){var and__48239__auto__ = cljs.core.not.call(null,any_key);
if(and__48239__auto__){
var and__48239__auto____$1 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"_self",null], null), null).call(null,link_target);
if(cljs.core.truth_(and__48239__auto____$1)){
var and__48239__auto____$2 = cljs.core._EQ_.call(null,button,(0));
if(and__48239__auto____$2){
var and__48239__auto____$3 = cljs.core._EQ_.call(null,host,current_host);
if(and__48239__auto____$3){
var and__48239__auto____$4 = (cljs.core.not.call(null,port)) || (cljs.core._EQ_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_port)].join('')));
if(and__48239__auto____$4){
return path_exists_QMARK_.call(null,path);
} else {
return and__48239__auto____$4;
}
} else {
return and__48239__auto____$3;
}
} else {
return and__48239__auto____$2;
}
} else {
return and__48239__auto____$1;
}
} else {
return and__48239__auto__;
}
})())){
if(cljs.core.not_EQ_.call(null,current_relative_href,relative_href)){
accountant.core.set_token_BANG_.call(null,history,relative_href,title);
} else {
}

return e.preventDefault();
} else {
return null;
}
}));
});
if(typeof accountant.core.nav_handler !== 'undefined'){
} else {
accountant.core.nav_handler = null;
}
if(typeof accountant.core.path_exists_QMARK_ !== 'undefined'){
} else {
accountant.core.path_exists_QMARK_ = null;
}
/**
 * Create and configure HTML5 history navigation.
 * 
 *   nav-handler: a fn of one argument, a path. Called when we've decided
 *   to navigate to another page. You'll want to make your app draw the
 *   new page here.
 * 
 *   path-exists?: a fn of one argument, a path. Return truthy if this path is handled by the SPA
 */
accountant.core.configure_navigation_BANG_ = (function accountant$core$configure_navigation_BANG_(p__62273){
var map__62276 = p__62273;
var map__62276__$1 = ((((!((map__62276 == null)))?((((map__62276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62276.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62276):map__62276);
var nav_handler = cljs.core.get.call(null,map__62276__$1,new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484));
var path_exists_QMARK_ = cljs.core.get.call(null,map__62276__$1,new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514));
accountant.core.history.setUseFragment(false);

accountant.core.history.setPathPrefix("");

accountant.core.history.setEnabled(true);

accountant.core.nav_handler = nav_handler;

accountant.core.path_exists_QMARK_ = path_exists_QMARK_;

accountant.core.dispatch_on_navigate.call(null,accountant.core.history,nav_handler);

return accountant.core.prevent_reload_on_known_path.call(null,accountant.core.history,path_exists_QMARK_);
});
accountant.core.map__GT_params = (function accountant$core$map__GT_params(query){
var params = cljs.core.map.call(null,(function (p1__62278_SHARP_){
return cljs.core.name.call(null,p1__62278_SHARP_);
}),cljs.core.keys.call(null,query));
var values = cljs.core.vals.call(null,query);
var pairs = cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,params,values));
return clojure.string.join.call(null,"&",cljs.core.map.call(null,((function (params,values,pairs){
return (function (p1__62279_SHARP_){
return clojure.string.join.call(null,"=",p1__62279_SHARP_);
});})(params,values,pairs))
,pairs));
});
/**
 * add a browser history entry. updates window/location
 */
accountant.core.navigate_BANG_ = (function accountant$core$navigate_BANG_(var_args){
var args62280 = [];
var len__49364__auto___62283 = arguments.length;
var i__49365__auto___62284 = (0);
while(true){
if((i__49365__auto___62284 < len__49364__auto___62283)){
args62280.push((arguments[i__49365__auto___62284]));

var G__62285 = (i__49365__auto___62284 + (1));
i__49365__auto___62284 = G__62285;
continue;
} else {
}
break;
}

var G__62282 = args62280.length;
switch (G__62282) {
case 1:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62280.length)].join('')));

}
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (route){
return accountant.core.navigate_BANG_.call(null,route,cljs.core.PersistentArrayMap.EMPTY);
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (route,query){
if(cljs.core.truth_(accountant.core.nav_handler)){
var token = accountant.core.history.getToken();
var old_route = cljs.core.first.call(null,clojure.string.split.call(null,token,"?"));
var query_string = accountant.core.map__GT_params.call(null,cljs.core.reduce_kv.call(null,((function (token,old_route){
return (function (valid,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.call(null,valid,k,v);
} else {
return valid;
}
});})(token,old_route))
,cljs.core.PersistentArrayMap.EMPTY,query));
var with_params = ((cljs.core.empty_QMARK_.call(null,query_string))?route:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(route),cljs.core.str.cljs$core$IFn$_invoke$arity$1("?"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_string)].join(''));
if(cljs.core._EQ_.call(null,old_route,route)){
return accountant.core.history.replaceToken(with_params);
} else {
return accountant.core.history.setToken(with_params);
}
} else {
return console.error("can't navigate! until configure-navigation! called");
}
});

accountant.core.navigate_BANG_.cljs$lang$maxFixedArity = 2;

accountant.core.dispatch_current_BANG_ = (function accountant$core$dispatch_current_BANG_(){

var path = window.location.pathname;
var query = window.location.search;
var hash = window.location.hash;
if(cljs.core.truth_(accountant.core.nav_handler)){
return accountant.core.nav_handler.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''));
} else {
return console.error("can't dispatch-current until configure-navigation! called");
}
});

//# sourceMappingURL=core.js.map