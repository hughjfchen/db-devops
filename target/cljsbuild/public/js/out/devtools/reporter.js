// Compiled by ClojureScript 1.9.542 {}
goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('devtools.util');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__49371__auto__ = [];
var len__49364__auto___54446 = arguments.length;
var i__49365__auto___54447 = (0);
while(true){
if((i__49365__auto___54447 < len__49364__auto___54446)){
args__49371__auto__.push((arguments[i__49365__auto___54447]));

var G__54448 = (i__49365__auto___54447 + (1));
i__49365__auto___54447 = G__54448;
continue;
} else {
}
break;
}

var argseq__49372__auto__ = ((((1) < args__49371__auto__.length))?(new cljs.core.IndexedSeq(args__49371__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49372__auto__);
});

devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__54441){
var vec__54442 = p__54441;
var context = cljs.core.nth.call(null,vec__54442,(0),null);
var footer = cljs.core.nth.call(null,vec__54442,(1),null);
try{var message = (((e instanceof Error))?(function (){var or__48251__auto__ = e.message;
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')];
var context_msg = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("In "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.get_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(context)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join(''):".")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n\n")].join('');
var footer_msg = ((!((footer == null)))?footer:[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("---\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please report the issue here: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.reporter.issues_url)].join(''));
var details = [context_msg,e,footer_msg];
var c = console;
var group_collapsed = (c["groupCollapsed"]);
var log = (c["log"]);
var group_end = (c["groupEnd"]);
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(c,header);

log.apply(c,details);

return group_end.call(c);
}catch (e54445){var e__$1 = e54445;
return console.error("FATAL: report-internal-error! failed",e__$1);
}});

devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1);

devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq54439){
var G__54440 = cljs.core.first.call(null,seq54439);
var seq54439__$1 = cljs.core.next.call(null,seq54439);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__54440,seq54439__$1);
});


//# sourceMappingURL=reporter.js.map