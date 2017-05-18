// Compiled by ClojureScript 1.9.542 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args54207 = [];
var len__49364__auto___54210 = arguments.length;
var i__49365__auto___54211 = (0);
while(true){
if((i__49365__auto___54211 < len__49364__auto___54210)){
args54207.push((arguments[i__49365__auto___54211]));

var G__54212 = (i__49365__auto___54211 + (1));
i__49365__auto___54211 = G__54212;
continue;
} else {
}
break;
}

var G__54209 = args54207.length;
switch (G__54209) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args54207.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__49371__auto__ = [];
var len__49364__auto___54215 = arguments.length;
var i__49365__auto___54216 = (0);
while(true){
if((i__49365__auto___54216 < len__49364__auto___54215)){
args__49371__auto__.push((arguments[i__49365__auto___54216]));

var G__54217 = (i__49365__auto___54216 + (1));
i__49365__auto___54216 = G__54217;
continue;
} else {
}
break;
}

var argseq__49372__auto__ = ((((0) < args__49371__auto__.length))?(new cljs.core.IndexedSeq(args__49371__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__49372__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq54214){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54214));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__49371__auto__ = [];
var len__49364__auto___54219 = arguments.length;
var i__49365__auto___54220 = (0);
while(true){
if((i__49365__auto___54220 < len__49364__auto___54219)){
args__49371__auto__.push((arguments[i__49365__auto___54220]));

var G__54221 = (i__49365__auto___54220 + (1));
i__49365__auto___54220 = G__54221;
continue;
} else {
}
break;
}

var argseq__49372__auto__ = ((((0) < args__49371__auto__.length))?(new cljs.core.IndexedSeq(args__49371__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__49372__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq54218){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54218));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__54222){
var map__54225 = p__54222;
var map__54225__$1 = ((((!((map__54225 == null)))?((((map__54225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54225.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54225):map__54225);
var message = cljs.core.get.call(null,map__54225__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__54225__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__48251__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__48239__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__48239__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__48239__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__50798__auto___54387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50798__auto___54387,ch){
return (function (){
var f__50799__auto__ = (function (){var switch__50777__auto__ = ((function (c__50798__auto___54387,ch){
return (function (state_54356){
var state_val_54357 = (state_54356[(1)]);
if((state_val_54357 === (7))){
var inst_54352 = (state_54356[(2)]);
var state_54356__$1 = state_54356;
var statearr_54358_54388 = state_54356__$1;
(statearr_54358_54388[(2)] = inst_54352);

(statearr_54358_54388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54357 === (1))){
var state_54356__$1 = state_54356;
var statearr_54359_54389 = state_54356__$1;
(statearr_54359_54389[(2)] = null);

(statearr_54359_54389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54357 === (4))){
var inst_54309 = (state_54356[(7)]);
var inst_54309__$1 = (state_54356[(2)]);
var state_54356__$1 = (function (){var statearr_54360 = state_54356;
(statearr_54360[(7)] = inst_54309__$1);

return statearr_54360;
})();
if(cljs.core.truth_(inst_54309__$1)){
var statearr_54361_54390 = state_54356__$1;
(statearr_54361_54390[(1)] = (5));

} else {
var statearr_54362_54391 = state_54356__$1;
(statearr_54362_54391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54357 === (15))){
var inst_54316 = (state_54356[(8)]);
var inst_54331 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54316);
var inst_54332 = cljs.core.first.call(null,inst_54331);
var inst_54333 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_54332);
var inst_54334 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_54333)].join('');
var inst_54335 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_54334);
var state_54356__$1 = state_54356;
var statearr_54363_54392 = state_54356__$1;
(statearr_54363_54392[(2)] = inst_54335);

(statearr_54363_54392[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54357 === (13))){
var inst_54340 = (state_54356[(2)]);
var state_54356__$1 = state_54356;
var statearr_54364_54393 = state_54356__$1;
(statearr_54364_54393[(2)] = inst_54340);

(statearr_54364_54393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54357 === (6))){
var state_54356__$1 = state_54356;
var statearr_54365_54394 = state_54356__$1;
(statearr_54365_54394[(2)] = null);

(statearr_54365_54394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54357 === (17))){
var inst_54338 = (state_54356[(2)]);
var state_54356__$1 = state_54356;
var statearr_54366_54395 = state_54356__$1;
(statearr_54366_54395[(2)] = inst_54338);

(statearr_54366_54395[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54357 === (3))){
var inst_54354 = (state_54356[(2)]);
var state_54356__$1 = state_54356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54356__$1,inst_54354);
} else {
if((state_val_54357 === (12))){
var inst_54315 = (state_54356[(9)]);
var inst_54329 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_54315,opts);
var state_54356__$1 = state_54356;
if(cljs.core.truth_(inst_54329)){
var statearr_54367_54396 = state_54356__$1;
(statearr_54367_54396[(1)] = (15));

} else {
var statearr_54368_54397 = state_54356__$1;
(statearr_54368_54397[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54357 === (2))){
var state_54356__$1 = state_54356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54356__$1,(4),ch);
} else {
if((state_val_54357 === (11))){
var inst_54316 = (state_54356[(8)]);
var inst_54321 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54322 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_54316);
var inst_54323 = cljs.core.async.timeout.call(null,(1000));
var inst_54324 = [inst_54322,inst_54323];
var inst_54325 = (new cljs.core.PersistentVector(null,2,(5),inst_54321,inst_54324,null));
var state_54356__$1 = state_54356;
return cljs.core.async.ioc_alts_BANG_.call(null,state_54356__$1,(14),inst_54325);
} else {
if((state_val_54357 === (9))){
var inst_54316 = (state_54356[(8)]);
var inst_54342 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_54343 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54316);
var inst_54344 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_54343);
var inst_54345 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_54344)].join('');
var inst_54346 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_54345);
var state_54356__$1 = (function (){var statearr_54369 = state_54356;
(statearr_54369[(10)] = inst_54342);

return statearr_54369;
})();
var statearr_54370_54398 = state_54356__$1;
(statearr_54370_54398[(2)] = inst_54346);

(statearr_54370_54398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54357 === (5))){
var inst_54309 = (state_54356[(7)]);
var inst_54311 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_54312 = (new cljs.core.PersistentArrayMap(null,2,inst_54311,null));
var inst_54313 = (new cljs.core.PersistentHashSet(null,inst_54312,null));
var inst_54314 = figwheel.client.focus_msgs.call(null,inst_54313,inst_54309);
var inst_54315 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_54314);
var inst_54316 = cljs.core.first.call(null,inst_54314);
var inst_54317 = figwheel.client.autoload_QMARK_.call(null);
var state_54356__$1 = (function (){var statearr_54371 = state_54356;
(statearr_54371[(9)] = inst_54315);

(statearr_54371[(8)] = inst_54316);

return statearr_54371;
})();
if(cljs.core.truth_(inst_54317)){
var statearr_54372_54399 = state_54356__$1;
(statearr_54372_54399[(1)] = (8));

} else {
var statearr_54373_54400 = state_54356__$1;
(statearr_54373_54400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54357 === (14))){
var inst_54327 = (state_54356[(2)]);
var state_54356__$1 = state_54356;
var statearr_54374_54401 = state_54356__$1;
(statearr_54374_54401[(2)] = inst_54327);

(statearr_54374_54401[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54357 === (16))){
var state_54356__$1 = state_54356;
var statearr_54375_54402 = state_54356__$1;
(statearr_54375_54402[(2)] = null);

(statearr_54375_54402[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54357 === (10))){
var inst_54348 = (state_54356[(2)]);
var state_54356__$1 = (function (){var statearr_54376 = state_54356;
(statearr_54376[(11)] = inst_54348);

return statearr_54376;
})();
var statearr_54377_54403 = state_54356__$1;
(statearr_54377_54403[(2)] = null);

(statearr_54377_54403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54357 === (8))){
var inst_54315 = (state_54356[(9)]);
var inst_54319 = figwheel.client.reload_file_state_QMARK_.call(null,inst_54315,opts);
var state_54356__$1 = state_54356;
if(cljs.core.truth_(inst_54319)){
var statearr_54378_54404 = state_54356__$1;
(statearr_54378_54404[(1)] = (11));

} else {
var statearr_54379_54405 = state_54356__$1;
(statearr_54379_54405[(1)] = (12));

}

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
}
}
}
}
}
}
}
}
}
}
});})(c__50798__auto___54387,ch))
;
return ((function (switch__50777__auto__,c__50798__auto___54387,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__50778__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__50778__auto____0 = (function (){
var statearr_54383 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54383[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__50778__auto__);

(statearr_54383[(1)] = (1));

return statearr_54383;
});
var figwheel$client$file_reloader_plugin_$_state_machine__50778__auto____1 = (function (state_54356){
while(true){
var ret_value__50779__auto__ = (function (){try{while(true){
var result__50780__auto__ = switch__50777__auto__.call(null,state_54356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50780__auto__;
}
break;
}
}catch (e54384){if((e54384 instanceof Object)){
var ex__50781__auto__ = e54384;
var statearr_54385_54406 = state_54356;
(statearr_54385_54406[(5)] = ex__50781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54407 = state_54356;
state_54356 = G__54407;
continue;
} else {
return ret_value__50779__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__50778__auto__ = function(state_54356){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__50778__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__50778__auto____1.call(this,state_54356);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__50778__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__50778__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__50778__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__50778__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__50778__auto__;
})()
;})(switch__50777__auto__,c__50798__auto___54387,ch))
})();
var state__50800__auto__ = (function (){var statearr_54386 = f__50799__auto__.call(null);
(statearr_54386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__50798__auto___54387);

return statearr_54386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50800__auto__);
});})(c__50798__auto___54387,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__54408_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__54408_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_54411 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_54411){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e54410){if((e54410 instanceof Error)){
var e = e54410;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_54411], null));
} else {
var e = e54410;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_54411))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__54412){
var map__54421 = p__54412;
var map__54421__$1 = ((((!((map__54421 == null)))?((((map__54421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54421):map__54421);
var opts = map__54421__$1;
var build_id = cljs.core.get.call(null,map__54421__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__54421,map__54421__$1,opts,build_id){
return (function (p__54423){
var vec__54424 = p__54423;
var seq__54425 = cljs.core.seq.call(null,vec__54424);
var first__54426 = cljs.core.first.call(null,seq__54425);
var seq__54425__$1 = cljs.core.next.call(null,seq__54425);
var map__54427 = first__54426;
var map__54427__$1 = ((((!((map__54427 == null)))?((((map__54427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54427):map__54427);
var msg = map__54427__$1;
var msg_name = cljs.core.get.call(null,map__54427__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54425__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__54424,seq__54425,first__54426,seq__54425__$1,map__54427,map__54427__$1,msg,msg_name,_,map__54421,map__54421__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__54424,seq__54425,first__54426,seq__54425__$1,map__54427,map__54427__$1,msg,msg_name,_,map__54421,map__54421__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__54421,map__54421__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__54435){
var vec__54436 = p__54435;
var seq__54437 = cljs.core.seq.call(null,vec__54436);
var first__54438 = cljs.core.first.call(null,seq__54437);
var seq__54437__$1 = cljs.core.next.call(null,seq__54437);
var map__54439 = first__54438;
var map__54439__$1 = ((((!((map__54439 == null)))?((((map__54439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54439.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54439):map__54439);
var msg = map__54439__$1;
var msg_name = cljs.core.get.call(null,map__54439__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54437__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__54441){
var map__54453 = p__54441;
var map__54453__$1 = ((((!((map__54453 == null)))?((((map__54453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54453.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54453):map__54453);
var on_compile_warning = cljs.core.get.call(null,map__54453__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__54453__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__54453,map__54453__$1,on_compile_warning,on_compile_fail){
return (function (p__54455){
var vec__54456 = p__54455;
var seq__54457 = cljs.core.seq.call(null,vec__54456);
var first__54458 = cljs.core.first.call(null,seq__54457);
var seq__54457__$1 = cljs.core.next.call(null,seq__54457);
var map__54459 = first__54458;
var map__54459__$1 = ((((!((map__54459 == null)))?((((map__54459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54459.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54459):map__54459);
var msg = map__54459__$1;
var msg_name = cljs.core.get.call(null,map__54459__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54457__$1;
var pred__54461 = cljs.core._EQ_;
var expr__54462 = msg_name;
if(cljs.core.truth_(pred__54461.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__54462))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__54461.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__54462))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__54453,map__54453__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__50798__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50798__auto__,msg_hist,msg_names,msg){
return (function (){
var f__50799__auto__ = (function (){var switch__50777__auto__ = ((function (c__50798__auto__,msg_hist,msg_names,msg){
return (function (state_54690){
var state_val_54691 = (state_54690[(1)]);
if((state_val_54691 === (7))){
var inst_54610 = (state_54690[(2)]);
var state_54690__$1 = state_54690;
if(cljs.core.truth_(inst_54610)){
var statearr_54692_54742 = state_54690__$1;
(statearr_54692_54742[(1)] = (8));

} else {
var statearr_54693_54743 = state_54690__$1;
(statearr_54693_54743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (20))){
var inst_54684 = (state_54690[(2)]);
var state_54690__$1 = state_54690;
var statearr_54694_54744 = state_54690__$1;
(statearr_54694_54744[(2)] = inst_54684);

(statearr_54694_54744[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (27))){
var inst_54680 = (state_54690[(2)]);
var state_54690__$1 = state_54690;
var statearr_54695_54745 = state_54690__$1;
(statearr_54695_54745[(2)] = inst_54680);

(statearr_54695_54745[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (1))){
var inst_54603 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_54690__$1 = state_54690;
if(cljs.core.truth_(inst_54603)){
var statearr_54696_54746 = state_54690__$1;
(statearr_54696_54746[(1)] = (2));

} else {
var statearr_54697_54747 = state_54690__$1;
(statearr_54697_54747[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (24))){
var inst_54682 = (state_54690[(2)]);
var state_54690__$1 = state_54690;
var statearr_54698_54748 = state_54690__$1;
(statearr_54698_54748[(2)] = inst_54682);

(statearr_54698_54748[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (4))){
var inst_54688 = (state_54690[(2)]);
var state_54690__$1 = state_54690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54690__$1,inst_54688);
} else {
if((state_val_54691 === (15))){
var inst_54686 = (state_54690[(2)]);
var state_54690__$1 = state_54690;
var statearr_54699_54749 = state_54690__$1;
(statearr_54699_54749[(2)] = inst_54686);

(statearr_54699_54749[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (21))){
var inst_54639 = (state_54690[(2)]);
var inst_54640 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54641 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54640);
var state_54690__$1 = (function (){var statearr_54700 = state_54690;
(statearr_54700[(7)] = inst_54639);

return statearr_54700;
})();
var statearr_54701_54750 = state_54690__$1;
(statearr_54701_54750[(2)] = inst_54641);

(statearr_54701_54750[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (31))){
var inst_54669 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_54690__$1 = state_54690;
if(cljs.core.truth_(inst_54669)){
var statearr_54702_54751 = state_54690__$1;
(statearr_54702_54751[(1)] = (34));

} else {
var statearr_54703_54752 = state_54690__$1;
(statearr_54703_54752[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (32))){
var inst_54678 = (state_54690[(2)]);
var state_54690__$1 = state_54690;
var statearr_54704_54753 = state_54690__$1;
(statearr_54704_54753[(2)] = inst_54678);

(statearr_54704_54753[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (33))){
var inst_54665 = (state_54690[(2)]);
var inst_54666 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54667 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54666);
var state_54690__$1 = (function (){var statearr_54705 = state_54690;
(statearr_54705[(8)] = inst_54665);

return statearr_54705;
})();
var statearr_54706_54754 = state_54690__$1;
(statearr_54706_54754[(2)] = inst_54667);

(statearr_54706_54754[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (13))){
var inst_54624 = figwheel.client.heads_up.clear.call(null);
var state_54690__$1 = state_54690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54690__$1,(16),inst_54624);
} else {
if((state_val_54691 === (22))){
var inst_54645 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54646 = figwheel.client.heads_up.append_warning_message.call(null,inst_54645);
var state_54690__$1 = state_54690;
var statearr_54707_54755 = state_54690__$1;
(statearr_54707_54755[(2)] = inst_54646);

(statearr_54707_54755[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (36))){
var inst_54676 = (state_54690[(2)]);
var state_54690__$1 = state_54690;
var statearr_54708_54756 = state_54690__$1;
(statearr_54708_54756[(2)] = inst_54676);

(statearr_54708_54756[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (29))){
var inst_54656 = (state_54690[(2)]);
var inst_54657 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54658 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54657);
var state_54690__$1 = (function (){var statearr_54709 = state_54690;
(statearr_54709[(9)] = inst_54656);

return statearr_54709;
})();
var statearr_54710_54757 = state_54690__$1;
(statearr_54710_54757[(2)] = inst_54658);

(statearr_54710_54757[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (6))){
var inst_54605 = (state_54690[(10)]);
var state_54690__$1 = state_54690;
var statearr_54711_54758 = state_54690__$1;
(statearr_54711_54758[(2)] = inst_54605);

(statearr_54711_54758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (28))){
var inst_54652 = (state_54690[(2)]);
var inst_54653 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54654 = figwheel.client.heads_up.display_warning.call(null,inst_54653);
var state_54690__$1 = (function (){var statearr_54712 = state_54690;
(statearr_54712[(11)] = inst_54652);

return statearr_54712;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54690__$1,(29),inst_54654);
} else {
if((state_val_54691 === (25))){
var inst_54650 = figwheel.client.heads_up.clear.call(null);
var state_54690__$1 = state_54690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54690__$1,(28),inst_54650);
} else {
if((state_val_54691 === (34))){
var inst_54671 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54690__$1 = state_54690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54690__$1,(37),inst_54671);
} else {
if((state_val_54691 === (17))){
var inst_54630 = (state_54690[(2)]);
var inst_54631 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54632 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54631);
var state_54690__$1 = (function (){var statearr_54713 = state_54690;
(statearr_54713[(12)] = inst_54630);

return statearr_54713;
})();
var statearr_54714_54759 = state_54690__$1;
(statearr_54714_54759[(2)] = inst_54632);

(statearr_54714_54759[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (3))){
var inst_54622 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_54690__$1 = state_54690;
if(cljs.core.truth_(inst_54622)){
var statearr_54715_54760 = state_54690__$1;
(statearr_54715_54760[(1)] = (13));

} else {
var statearr_54716_54761 = state_54690__$1;
(statearr_54716_54761[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (12))){
var inst_54618 = (state_54690[(2)]);
var state_54690__$1 = state_54690;
var statearr_54717_54762 = state_54690__$1;
(statearr_54717_54762[(2)] = inst_54618);

(statearr_54717_54762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (2))){
var inst_54605 = (state_54690[(10)]);
var inst_54605__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_54690__$1 = (function (){var statearr_54718 = state_54690;
(statearr_54718[(10)] = inst_54605__$1);

return statearr_54718;
})();
if(cljs.core.truth_(inst_54605__$1)){
var statearr_54719_54763 = state_54690__$1;
(statearr_54719_54763[(1)] = (5));

} else {
var statearr_54720_54764 = state_54690__$1;
(statearr_54720_54764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (23))){
var inst_54648 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_54690__$1 = state_54690;
if(cljs.core.truth_(inst_54648)){
var statearr_54721_54765 = state_54690__$1;
(statearr_54721_54765[(1)] = (25));

} else {
var statearr_54722_54766 = state_54690__$1;
(statearr_54722_54766[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (35))){
var state_54690__$1 = state_54690;
var statearr_54723_54767 = state_54690__$1;
(statearr_54723_54767[(2)] = null);

(statearr_54723_54767[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (19))){
var inst_54643 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_54690__$1 = state_54690;
if(cljs.core.truth_(inst_54643)){
var statearr_54724_54768 = state_54690__$1;
(statearr_54724_54768[(1)] = (22));

} else {
var statearr_54725_54769 = state_54690__$1;
(statearr_54725_54769[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (11))){
var inst_54614 = (state_54690[(2)]);
var state_54690__$1 = state_54690;
var statearr_54726_54770 = state_54690__$1;
(statearr_54726_54770[(2)] = inst_54614);

(statearr_54726_54770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (9))){
var inst_54616 = figwheel.client.heads_up.clear.call(null);
var state_54690__$1 = state_54690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54690__$1,(12),inst_54616);
} else {
if((state_val_54691 === (5))){
var inst_54607 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_54690__$1 = state_54690;
var statearr_54727_54771 = state_54690__$1;
(statearr_54727_54771[(2)] = inst_54607);

(statearr_54727_54771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (14))){
var inst_54634 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_54690__$1 = state_54690;
if(cljs.core.truth_(inst_54634)){
var statearr_54728_54772 = state_54690__$1;
(statearr_54728_54772[(1)] = (18));

} else {
var statearr_54729_54773 = state_54690__$1;
(statearr_54729_54773[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (26))){
var inst_54660 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_54690__$1 = state_54690;
if(cljs.core.truth_(inst_54660)){
var statearr_54730_54774 = state_54690__$1;
(statearr_54730_54774[(1)] = (30));

} else {
var statearr_54731_54775 = state_54690__$1;
(statearr_54731_54775[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (16))){
var inst_54626 = (state_54690[(2)]);
var inst_54627 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54628 = figwheel.client.heads_up.display_exception.call(null,inst_54627);
var state_54690__$1 = (function (){var statearr_54732 = state_54690;
(statearr_54732[(13)] = inst_54626);

return statearr_54732;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54690__$1,(17),inst_54628);
} else {
if((state_val_54691 === (30))){
var inst_54662 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54663 = figwheel.client.heads_up.display_warning.call(null,inst_54662);
var state_54690__$1 = state_54690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54690__$1,(33),inst_54663);
} else {
if((state_val_54691 === (10))){
var inst_54620 = (state_54690[(2)]);
var state_54690__$1 = state_54690;
var statearr_54733_54776 = state_54690__$1;
(statearr_54733_54776[(2)] = inst_54620);

(statearr_54733_54776[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (18))){
var inst_54636 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54637 = figwheel.client.heads_up.display_exception.call(null,inst_54636);
var state_54690__$1 = state_54690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54690__$1,(21),inst_54637);
} else {
if((state_val_54691 === (37))){
var inst_54673 = (state_54690[(2)]);
var state_54690__$1 = state_54690;
var statearr_54734_54777 = state_54690__$1;
(statearr_54734_54777[(2)] = inst_54673);

(statearr_54734_54777[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (8))){
var inst_54612 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54690__$1 = state_54690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54690__$1,(11),inst_54612);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__50798__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__50777__auto__,c__50798__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50778__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50778__auto____0 = (function (){
var statearr_54738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54738[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50778__auto__);

(statearr_54738[(1)] = (1));

return statearr_54738;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50778__auto____1 = (function (state_54690){
while(true){
var ret_value__50779__auto__ = (function (){try{while(true){
var result__50780__auto__ = switch__50777__auto__.call(null,state_54690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50780__auto__;
}
break;
}
}catch (e54739){if((e54739 instanceof Object)){
var ex__50781__auto__ = e54739;
var statearr_54740_54778 = state_54690;
(statearr_54740_54778[(5)] = ex__50781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54779 = state_54690;
state_54690 = G__54779;
continue;
} else {
return ret_value__50779__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50778__auto__ = function(state_54690){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50778__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50778__auto____1.call(this,state_54690);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50778__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50778__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50778__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50778__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50778__auto__;
})()
;})(switch__50777__auto__,c__50798__auto__,msg_hist,msg_names,msg))
})();
var state__50800__auto__ = (function (){var statearr_54741 = f__50799__auto__.call(null);
(statearr_54741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__50798__auto__);

return statearr_54741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50800__auto__);
});})(c__50798__auto__,msg_hist,msg_names,msg))
);

return c__50798__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__50798__auto___54842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50798__auto___54842,ch){
return (function (){
var f__50799__auto__ = (function (){var switch__50777__auto__ = ((function (c__50798__auto___54842,ch){
return (function (state_54825){
var state_val_54826 = (state_54825[(1)]);
if((state_val_54826 === (1))){
var state_54825__$1 = state_54825;
var statearr_54827_54843 = state_54825__$1;
(statearr_54827_54843[(2)] = null);

(statearr_54827_54843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54826 === (2))){
var state_54825__$1 = state_54825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54825__$1,(4),ch);
} else {
if((state_val_54826 === (3))){
var inst_54823 = (state_54825[(2)]);
var state_54825__$1 = state_54825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54825__$1,inst_54823);
} else {
if((state_val_54826 === (4))){
var inst_54813 = (state_54825[(7)]);
var inst_54813__$1 = (state_54825[(2)]);
var state_54825__$1 = (function (){var statearr_54828 = state_54825;
(statearr_54828[(7)] = inst_54813__$1);

return statearr_54828;
})();
if(cljs.core.truth_(inst_54813__$1)){
var statearr_54829_54844 = state_54825__$1;
(statearr_54829_54844[(1)] = (5));

} else {
var statearr_54830_54845 = state_54825__$1;
(statearr_54830_54845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54826 === (5))){
var inst_54813 = (state_54825[(7)]);
var inst_54815 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_54813);
var state_54825__$1 = state_54825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54825__$1,(8),inst_54815);
} else {
if((state_val_54826 === (6))){
var state_54825__$1 = state_54825;
var statearr_54831_54846 = state_54825__$1;
(statearr_54831_54846[(2)] = null);

(statearr_54831_54846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54826 === (7))){
var inst_54821 = (state_54825[(2)]);
var state_54825__$1 = state_54825;
var statearr_54832_54847 = state_54825__$1;
(statearr_54832_54847[(2)] = inst_54821);

(statearr_54832_54847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54826 === (8))){
var inst_54817 = (state_54825[(2)]);
var state_54825__$1 = (function (){var statearr_54833 = state_54825;
(statearr_54833[(8)] = inst_54817);

return statearr_54833;
})();
var statearr_54834_54848 = state_54825__$1;
(statearr_54834_54848[(2)] = null);

(statearr_54834_54848[(1)] = (2));


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
}
});})(c__50798__auto___54842,ch))
;
return ((function (switch__50777__auto__,c__50798__auto___54842,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__50778__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__50778__auto____0 = (function (){
var statearr_54838 = [null,null,null,null,null,null,null,null,null];
(statearr_54838[(0)] = figwheel$client$heads_up_plugin_$_state_machine__50778__auto__);

(statearr_54838[(1)] = (1));

return statearr_54838;
});
var figwheel$client$heads_up_plugin_$_state_machine__50778__auto____1 = (function (state_54825){
while(true){
var ret_value__50779__auto__ = (function (){try{while(true){
var result__50780__auto__ = switch__50777__auto__.call(null,state_54825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50780__auto__;
}
break;
}
}catch (e54839){if((e54839 instanceof Object)){
var ex__50781__auto__ = e54839;
var statearr_54840_54849 = state_54825;
(statearr_54840_54849[(5)] = ex__50781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54850 = state_54825;
state_54825 = G__54850;
continue;
} else {
return ret_value__50779__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__50778__auto__ = function(state_54825){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__50778__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__50778__auto____1.call(this,state_54825);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__50778__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__50778__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__50778__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__50778__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__50778__auto__;
})()
;})(switch__50777__auto__,c__50798__auto___54842,ch))
})();
var state__50800__auto__ = (function (){var statearr_54841 = f__50799__auto__.call(null);
(statearr_54841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__50798__auto___54842);

return statearr_54841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50800__auto__);
});})(c__50798__auto___54842,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__50798__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50798__auto__){
return (function (){
var f__50799__auto__ = (function (){var switch__50777__auto__ = ((function (c__50798__auto__){
return (function (state_54871){
var state_val_54872 = (state_54871[(1)]);
if((state_val_54872 === (1))){
var inst_54866 = cljs.core.async.timeout.call(null,(3000));
var state_54871__$1 = state_54871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54871__$1,(2),inst_54866);
} else {
if((state_val_54872 === (2))){
var inst_54868 = (state_54871[(2)]);
var inst_54869 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_54871__$1 = (function (){var statearr_54873 = state_54871;
(statearr_54873[(7)] = inst_54868);

return statearr_54873;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54871__$1,inst_54869);
} else {
return null;
}
}
});})(c__50798__auto__))
;
return ((function (switch__50777__auto__,c__50798__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__50778__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__50778__auto____0 = (function (){
var statearr_54877 = [null,null,null,null,null,null,null,null];
(statearr_54877[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__50778__auto__);

(statearr_54877[(1)] = (1));

return statearr_54877;
});
var figwheel$client$enforce_project_plugin_$_state_machine__50778__auto____1 = (function (state_54871){
while(true){
var ret_value__50779__auto__ = (function (){try{while(true){
var result__50780__auto__ = switch__50777__auto__.call(null,state_54871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50780__auto__;
}
break;
}
}catch (e54878){if((e54878 instanceof Object)){
var ex__50781__auto__ = e54878;
var statearr_54879_54881 = state_54871;
(statearr_54879_54881[(5)] = ex__50781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54882 = state_54871;
state_54871 = G__54882;
continue;
} else {
return ret_value__50779__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__50778__auto__ = function(state_54871){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__50778__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__50778__auto____1.call(this,state_54871);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__50778__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__50778__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__50778__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__50778__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__50778__auto__;
})()
;})(switch__50777__auto__,c__50798__auto__))
})();
var state__50800__auto__ = (function (){var statearr_54880 = f__50799__auto__.call(null);
(statearr_54880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__50798__auto__);

return statearr_54880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50800__auto__);
});})(c__50798__auto__))
);

return c__50798__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__50798__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50798__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__50799__auto__ = (function (){var switch__50777__auto__ = ((function (c__50798__auto__,figwheel_version,temp__4657__auto__){
return (function (state_54905){
var state_val_54906 = (state_54905[(1)]);
if((state_val_54906 === (1))){
var inst_54899 = cljs.core.async.timeout.call(null,(2000));
var state_54905__$1 = state_54905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54905__$1,(2),inst_54899);
} else {
if((state_val_54906 === (2))){
var inst_54901 = (state_54905[(2)]);
var inst_54902 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_54903 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_54902);
var state_54905__$1 = (function (){var statearr_54907 = state_54905;
(statearr_54907[(7)] = inst_54901);

return statearr_54907;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54905__$1,inst_54903);
} else {
return null;
}
}
});})(c__50798__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__50777__auto__,c__50798__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50778__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50778__auto____0 = (function (){
var statearr_54911 = [null,null,null,null,null,null,null,null];
(statearr_54911[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50778__auto__);

(statearr_54911[(1)] = (1));

return statearr_54911;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50778__auto____1 = (function (state_54905){
while(true){
var ret_value__50779__auto__ = (function (){try{while(true){
var result__50780__auto__ = switch__50777__auto__.call(null,state_54905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50780__auto__;
}
break;
}
}catch (e54912){if((e54912 instanceof Object)){
var ex__50781__auto__ = e54912;
var statearr_54913_54915 = state_54905;
(statearr_54913_54915[(5)] = ex__50781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54916 = state_54905;
state_54905 = G__54916;
continue;
} else {
return ret_value__50779__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50778__auto__ = function(state_54905){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50778__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50778__auto____1.call(this,state_54905);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50778__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50778__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50778__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50778__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50778__auto__;
})()
;})(switch__50777__auto__,c__50798__auto__,figwheel_version,temp__4657__auto__))
})();
var state__50800__auto__ = (function (){var statearr_54914 = f__50799__auto__.call(null);
(statearr_54914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__50798__auto__);

return statearr_54914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50800__auto__);
});})(c__50798__auto__,figwheel_version,temp__4657__auto__))
);

return c__50798__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__54917){
var map__54921 = p__54917;
var map__54921__$1 = ((((!((map__54921 == null)))?((((map__54921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54921.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54921):map__54921);
var file = cljs.core.get.call(null,map__54921__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54921__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54921__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__54923 = "";
var G__54923__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54923),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__54923);
var G__54923__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54923__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__54923__$1);
if(cljs.core.truth_((function (){var and__48239__auto__ = line;
if(cljs.core.truth_(and__48239__auto__)){
return column;
} else {
return and__48239__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54923__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__54923__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__54924){
var map__54931 = p__54924;
var map__54931__$1 = ((((!((map__54931 == null)))?((((map__54931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54931.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54931):map__54931);
var ed = map__54931__$1;
var formatted_exception = cljs.core.get.call(null,map__54931__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__54931__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__54931__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__54933_54937 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__54934_54938 = null;
var count__54935_54939 = (0);
var i__54936_54940 = (0);
while(true){
if((i__54936_54940 < count__54935_54939)){
var msg_54941 = cljs.core._nth.call(null,chunk__54934_54938,i__54936_54940);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_54941);

var G__54942 = seq__54933_54937;
var G__54943 = chunk__54934_54938;
var G__54944 = count__54935_54939;
var G__54945 = (i__54936_54940 + (1));
seq__54933_54937 = G__54942;
chunk__54934_54938 = G__54943;
count__54935_54939 = G__54944;
i__54936_54940 = G__54945;
continue;
} else {
var temp__4657__auto___54946 = cljs.core.seq.call(null,seq__54933_54937);
if(temp__4657__auto___54946){
var seq__54933_54947__$1 = temp__4657__auto___54946;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54933_54947__$1)){
var c__49070__auto___54948 = cljs.core.chunk_first.call(null,seq__54933_54947__$1);
var G__54949 = cljs.core.chunk_rest.call(null,seq__54933_54947__$1);
var G__54950 = c__49070__auto___54948;
var G__54951 = cljs.core.count.call(null,c__49070__auto___54948);
var G__54952 = (0);
seq__54933_54937 = G__54949;
chunk__54934_54938 = G__54950;
count__54935_54939 = G__54951;
i__54936_54940 = G__54952;
continue;
} else {
var msg_54953 = cljs.core.first.call(null,seq__54933_54947__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_54953);

var G__54954 = cljs.core.next.call(null,seq__54933_54947__$1);
var G__54955 = null;
var G__54956 = (0);
var G__54957 = (0);
seq__54933_54937 = G__54954;
chunk__54934_54938 = G__54955;
count__54935_54939 = G__54956;
i__54936_54940 = G__54957;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__54958){
var map__54961 = p__54958;
var map__54961__$1 = ((((!((map__54961 == null)))?((((map__54961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54961):map__54961);
var w = map__54961__$1;
var message = cljs.core.get.call(null,map__54961__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__48239__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__48239__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__48239__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__54973 = cljs.core.seq.call(null,plugins);
var chunk__54974 = null;
var count__54975 = (0);
var i__54976 = (0);
while(true){
if((i__54976 < count__54975)){
var vec__54977 = cljs.core._nth.call(null,chunk__54974,i__54976);
var k = cljs.core.nth.call(null,vec__54977,(0),null);
var plugin = cljs.core.nth.call(null,vec__54977,(1),null);
if(cljs.core.truth_(plugin)){
var pl_54983 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__54973,chunk__54974,count__54975,i__54976,pl_54983,vec__54977,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_54983.call(null,msg_hist);
});})(seq__54973,chunk__54974,count__54975,i__54976,pl_54983,vec__54977,k,plugin))
);
} else {
}

var G__54984 = seq__54973;
var G__54985 = chunk__54974;
var G__54986 = count__54975;
var G__54987 = (i__54976 + (1));
seq__54973 = G__54984;
chunk__54974 = G__54985;
count__54975 = G__54986;
i__54976 = G__54987;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54973);
if(temp__4657__auto__){
var seq__54973__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54973__$1)){
var c__49070__auto__ = cljs.core.chunk_first.call(null,seq__54973__$1);
var G__54988 = cljs.core.chunk_rest.call(null,seq__54973__$1);
var G__54989 = c__49070__auto__;
var G__54990 = cljs.core.count.call(null,c__49070__auto__);
var G__54991 = (0);
seq__54973 = G__54988;
chunk__54974 = G__54989;
count__54975 = G__54990;
i__54976 = G__54991;
continue;
} else {
var vec__54980 = cljs.core.first.call(null,seq__54973__$1);
var k = cljs.core.nth.call(null,vec__54980,(0),null);
var plugin = cljs.core.nth.call(null,vec__54980,(1),null);
if(cljs.core.truth_(plugin)){
var pl_54992 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__54973,chunk__54974,count__54975,i__54976,pl_54992,vec__54980,k,plugin,seq__54973__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_54992.call(null,msg_hist);
});})(seq__54973,chunk__54974,count__54975,i__54976,pl_54992,vec__54980,k,plugin,seq__54973__$1,temp__4657__auto__))
);
} else {
}

var G__54993 = cljs.core.next.call(null,seq__54973__$1);
var G__54994 = null;
var G__54995 = (0);
var G__54996 = (0);
seq__54973 = G__54993;
chunk__54974 = G__54994;
count__54975 = G__54995;
i__54976 = G__54996;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args54997 = [];
var len__49364__auto___55004 = arguments.length;
var i__49365__auto___55005 = (0);
while(true){
if((i__49365__auto___55005 < len__49364__auto___55004)){
args54997.push((arguments[i__49365__auto___55005]));

var G__55006 = (i__49365__auto___55005 + (1));
i__49365__auto___55005 = G__55006;
continue;
} else {
}
break;
}

var G__54999 = args54997.length;
switch (G__54999) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args54997.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__55000_55008 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__55001_55009 = null;
var count__55002_55010 = (0);
var i__55003_55011 = (0);
while(true){
if((i__55003_55011 < count__55002_55010)){
var msg_55012 = cljs.core._nth.call(null,chunk__55001_55009,i__55003_55011);
figwheel.client.socket.handle_incoming_message.call(null,msg_55012);

var G__55013 = seq__55000_55008;
var G__55014 = chunk__55001_55009;
var G__55015 = count__55002_55010;
var G__55016 = (i__55003_55011 + (1));
seq__55000_55008 = G__55013;
chunk__55001_55009 = G__55014;
count__55002_55010 = G__55015;
i__55003_55011 = G__55016;
continue;
} else {
var temp__4657__auto___55017 = cljs.core.seq.call(null,seq__55000_55008);
if(temp__4657__auto___55017){
var seq__55000_55018__$1 = temp__4657__auto___55017;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55000_55018__$1)){
var c__49070__auto___55019 = cljs.core.chunk_first.call(null,seq__55000_55018__$1);
var G__55020 = cljs.core.chunk_rest.call(null,seq__55000_55018__$1);
var G__55021 = c__49070__auto___55019;
var G__55022 = cljs.core.count.call(null,c__49070__auto___55019);
var G__55023 = (0);
seq__55000_55008 = G__55020;
chunk__55001_55009 = G__55021;
count__55002_55010 = G__55022;
i__55003_55011 = G__55023;
continue;
} else {
var msg_55024 = cljs.core.first.call(null,seq__55000_55018__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_55024);

var G__55025 = cljs.core.next.call(null,seq__55000_55018__$1);
var G__55026 = null;
var G__55027 = (0);
var G__55028 = (0);
seq__55000_55008 = G__55025;
chunk__55001_55009 = G__55026;
count__55002_55010 = G__55027;
i__55003_55011 = G__55028;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__49371__auto__ = [];
var len__49364__auto___55033 = arguments.length;
var i__49365__auto___55034 = (0);
while(true){
if((i__49365__auto___55034 < len__49364__auto___55033)){
args__49371__auto__.push((arguments[i__49365__auto___55034]));

var G__55035 = (i__49365__auto___55034 + (1));
i__49365__auto___55034 = G__55035;
continue;
} else {
}
break;
}

var argseq__49372__auto__ = ((((0) < args__49371__auto__.length))?(new cljs.core.IndexedSeq(args__49371__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__49372__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__55030){
var map__55031 = p__55030;
var map__55031__$1 = ((((!((map__55031 == null)))?((((map__55031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55031.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55031):map__55031);
var opts = map__55031__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq55029){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55029));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e55037){if((e55037 instanceof Error)){
var e = e55037;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e55037;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__55041){
var map__55042 = p__55041;
var map__55042__$1 = ((((!((map__55042 == null)))?((((map__55042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55042.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55042):map__55042);
var msg_name = cljs.core.get.call(null,map__55042__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map