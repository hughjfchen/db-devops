// Compiled by ClojureScript 1.9.542 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the use chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__60291){
var map__60295 = p__60291;
var map__60295__$1 = ((((!((map__60295 == null)))?((((map__60295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60295):map__60295);
var args = map__60295__$1;
var on_change = cljs.core.get.call(null,map__60295__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__60295__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__60295__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__60295__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__60295__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__60295__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__60295__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__60297 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__48251__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__60297,external_model_value);
} else {
return G__60297;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__60298,event){
var map__60302 = p__60298;
var map__60302__$1 = ((((!((map__60302 == null)))?((((map__60302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60302.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60302):map__60302);
var state = map__60302__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__60302__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__60302__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__60304 = event;
var G__60304__$1 = (((G__60304 instanceof cljs.core.Keyword))?G__60304.fqn:null);
switch (G__60304__$1) {
case "input-text-blurred":
var and__48239__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__48239__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__48239__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__48251__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__60306,event){
var map__60310 = p__60306;
var map__60310__$1 = ((((!((map__60310 == null)))?((((map__60310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60310.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60310):map__60310);
var state = map__60310__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__60310__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__60312 = event;
var G__60312__$1 = (((G__60312 instanceof cljs.core.Keyword))?G__60312.fqn:null);
switch (G__60312__$1) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__60314,new_value){
var map__60317 = p__60314;
var map__60317__$1 = ((((!((map__60317 == null)))?((((map__60317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60317.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60317):map__60317);
var state = map__60317__$1;
var on_change = cljs.core.get.call(null,map__60317__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__60319,suggestion){
var map__60323 = p__60319;
var map__60323__$1 = ((((!((map__60323 == null)))?((((map__60323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60323.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60323):map__60323);
var state = map__60323__$1;
var suggestion_to_string = cljs.core.get.call(null,map__60323__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__60325 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__60325,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__60325;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__60326,index){
var map__60330 = p__60326;
var map__60330__$1 = ((((!((map__60330 == null)))?((((map__60330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60330.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60330):map__60330);
var state = map__60330__$1;
var suggestions = cljs.core.get.call(null,map__60330__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__60332 = state;
var G__60332__$1 = cljs.core.assoc.call(null,G__60332,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__60332__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__60332__$1,suggestion):G__60332__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__60332__$2,suggestion);
} else {
return G__60332__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__60333,index){
var map__60336 = p__60333;
var map__60336__$1 = ((((!((map__60336 == null)))?((((map__60336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60336.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60336):map__60336);
var state = map__60336__$1;
var suggestions = cljs.core.get.call(null,map__60336__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__60338){
var map__60342 = p__60338;
var map__60342__$1 = ((((!((map__60342 == null)))?((((map__60342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60342.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60342):map__60342);
var state = map__60342__$1;
var suggestion_active_index = cljs.core.get.call(null,map__60342__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__60344 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__60344,suggestion_active_index);
} else {
return G__60344;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__60345){
var map__60349 = p__60345;
var map__60349__$1 = ((((!((map__60349 == null)))?((((map__60349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60349.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60349):map__60349);
var state = map__60349__$1;
var suggestions = cljs.core.get.call(null,map__60349__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__60349__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__60351 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__60351,re_com.typeahead.wrap.call(null,((function (){var or__48251__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__60351;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__60352){
var map__60356 = p__60352;
var map__60356__$1 = ((((!((map__60356 == null)))?((((map__60356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60356):map__60356);
var state = map__60356__$1;
var suggestions = cljs.core.get.call(null,map__60356__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__60356__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__60358 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__60358,re_com.typeahead.wrap.call(null,((function (){var or__48251__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__60358;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__60360 = state;
var G__60360__$1 = re_com.typeahead.clear_suggestions.call(null,G__60360)
;
var G__60360__$2 = cljs.core.assoc.call(null,G__60360__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__60360__$2,null);
} else {
return G__60360__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__60361){
var map__60365 = p__60361;
var map__60365__$1 = ((((!((map__60365 == null)))?((((map__60365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60365.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60365):map__60365);
var state = map__60365__$1;
var input_text = cljs.core.get.call(null,map__60365__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__60365__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__60367 = state;
if(cljs.core.truth_((function (){var and__48239__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__48239__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__48239__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__60367,input_text);
} else {
return G__60367;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__4655__auto__ = data_source.call(null,text,(function (p1__60368_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__60368_SHARP_);
}));
if(cljs.core.truth_(temp__4655__auto__)){
var return_value = temp__4655__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__57384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__57384__auto__){
return (function (){
var f__57385__auto__ = (function (){var switch__57272__auto__ = ((function (c__57384__auto__){
return (function (state_60418){
var state_val_60419 = (state_60418[(1)]);
if((state_val_60419 === (1))){
var state_60418__$1 = state_60418;
var statearr_60420_60435 = state_60418__$1;
(statearr_60420_60435[(2)] = null);

(statearr_60420_60435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60419 === (2))){
var state_60418__$1 = state_60418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60418__$1,(4),c_search);
} else {
if((state_val_60419 === (3))){
var inst_60416 = (state_60418[(2)]);
var state_60418__$1 = state_60418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60418__$1,inst_60416);
} else {
if((state_val_60419 === (4))){
var inst_60404 = (state_60418[(7)]);
var inst_60404__$1 = (state_60418[(2)]);
var inst_60405 = cljs.core.deref.call(null,state_atom);
var inst_60406 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_60405);
var inst_60407 = cljs.core._EQ_.call(null,"",inst_60404__$1);
var state_60418__$1 = (function (){var statearr_60421 = state_60418;
(statearr_60421[(7)] = inst_60404__$1);

(statearr_60421[(8)] = inst_60406);

return statearr_60421;
})();
if(inst_60407){
var statearr_60422_60436 = state_60418__$1;
(statearr_60422_60436[(1)] = (5));

} else {
var statearr_60423_60437 = state_60418__$1;
(statearr_60423_60437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60419 === (5))){
var inst_60409 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_60418__$1 = state_60418;
var statearr_60424_60438 = state_60418__$1;
(statearr_60424_60438[(2)] = inst_60409);

(statearr_60424_60438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60419 === (6))){
var inst_60404 = (state_60418[(7)]);
var inst_60406 = (state_60418[(8)]);
var inst_60411 = re_com.typeahead.search_data_source_BANG_.call(null,inst_60406,state_atom,inst_60404);
var state_60418__$1 = state_60418;
var statearr_60425_60439 = state_60418__$1;
(statearr_60425_60439[(2)] = inst_60411);

(statearr_60425_60439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60419 === (7))){
var inst_60413 = (state_60418[(2)]);
var state_60418__$1 = (function (){var statearr_60426 = state_60418;
(statearr_60426[(9)] = inst_60413);

return statearr_60426;
})();
var statearr_60427_60440 = state_60418__$1;
(statearr_60427_60440[(2)] = null);

(statearr_60427_60440[(1)] = (2));


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
});})(c__57384__auto__))
;
return ((function (switch__57272__auto__,c__57384__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__57273__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__57273__auto____0 = (function (){
var statearr_60431 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60431[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__57273__auto__);

(statearr_60431[(1)] = (1));

return statearr_60431;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__57273__auto____1 = (function (state_60418){
while(true){
var ret_value__57274__auto__ = (function (){try{while(true){
var result__57275__auto__ = switch__57272__auto__.call(null,state_60418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57275__auto__;
}
break;
}
}catch (e60432){if((e60432 instanceof Object)){
var ex__57276__auto__ = e60432;
var statearr_60433_60441 = state_60418;
(statearr_60433_60441[(5)] = ex__57276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60442 = state_60418;
state_60418 = G__60442;
continue;
} else {
return ret_value__57274__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__57273__auto__ = function(state_60418){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__57273__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__57273__auto____1.call(this,state_60418);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__57273__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__57273__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__57273__auto__;
})()
;})(switch__57272__auto__,c__57384__auto__))
})();
var state__57386__auto__ = (function (){var statearr_60434 = f__57385__auto__.call(null);
(statearr_60434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__57384__auto__);

return statearr_60434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__57386__auto__);
});})(c__57384__auto__))
);

return c__57384__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__60447 = cljs.core.deref.call(null,state_atom);
var map__60447__$1 = ((((!((map__60447 == null)))?((((map__60447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60447.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60447):map__60447);
var state = map__60447__$1;
var input_text = cljs.core.get.call(null,map__60447__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__60447__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__60447,map__60447__$1,state,input_text,c_input){
return (function (p1__60443_SHARP_){
var G__60449 = p1__60443_SHARP_;
var G__60449__$1 = cljs.core.assoc.call(null,G__60449,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__60449__$1,new_text);
} else {
return G__60449__$1;
}
});})(map__60447,map__60447__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__60453 = cljs.core._EQ_;
var expr__60454 = event.which;
if(cljs.core.truth_(pred__60453.call(null,goog.events.KeyCodes.UP,expr__60454))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__60453.call(null,goog.events.KeyCodes.DOWN,expr__60454))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__60453.call(null,goog.events.KeyCodes.ENTER,expr__60454))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__60453.call(null,goog.events.KeyCodes.ESC,expr__60454))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__60453.call(null,goog.events.KeyCodes.TAB,expr__60454))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__49371__auto__ = [];
var len__49364__auto___60484 = arguments.length;
var i__49365__auto___60485 = (0);
while(true){
if((i__49365__auto___60485 < len__49364__auto___60484)){
args__49371__auto__.push((arguments[i__49365__auto___60485]));

var G__60486 = (i__49365__auto___60485 + (1));
i__49365__auto___60485 = G__60486;
continue;
} else {
}
break;
}

var argseq__49372__auto__ = ((((0) < args__49371__auto__.length))?(new cljs.core.IndexedSeq(args__49371__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__49372__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__60458){
var map__60459 = p__60458;
var map__60459__$1 = ((((!((map__60459 == null)))?((((map__60459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60459.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60459):map__60459);
var args = map__60459__$1;
var data_source = cljs.core.get.call(null,map__60459__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var on_change = cljs.core.get.call(null,map__60459__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__60459__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__60459__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
if(cljs.core.truth_(((cljs.core.not.call(null,goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__60461 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__60461__$1 = ((((!((map__60461 == null)))?((((map__60461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60461.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60461):map__60461);
var state = map__60461__$1;
var c_search = cljs.core.get.call(null,map__60461__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__60461__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__60461,map__60461__$1,state,c_search,c_input,state_atom,input_text_model,map__60459,map__60459__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function() { 
var G__60487__delegate = function (p__60463){
var map__60464 = p__60463;
var map__60464__$1 = ((((!((map__60464 == null)))?((((map__60464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60464.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60464):map__60464);
var args__$1 = map__60464__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__60464__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__60464__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__60464__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__60464__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__60464__$1,new cljs.core.Keyword(null,"model","model",331153215));
var suggestion_to_string = cljs.core.get.call(null,map__60464__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var placeholder = cljs.core.get.call(null,map__60464__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__60464__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var rigid_QMARK___$1 = cljs.core.get.call(null,map__60464__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var width = cljs.core.get.call(null,map__60464__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source__$1 = cljs.core.get.call(null,map__60464__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var style = cljs.core.get.call(null,map__60464__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var status = cljs.core.get.call(null,map__60464__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__60464__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(cljs.core.truth_(((cljs.core.not.call(null,goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__60466 = cljs.core.deref.call(null,state_atom);
var map__60466__$1 = ((((!((map__60466 == null)))?((((map__60466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60466):map__60466);
var state__$1 = map__60466__$1;
var suggestions = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__60466__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__48251__auto__ = width;
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source__$1)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source__$1);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__48251__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__49039__auto__ = ((function (map__60466,map__60466__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60464,map__60464__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__60461,map__60461__$1,state,c_search,c_input,state_atom,input_text_model,map__60459,map__60459__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function re_com$typeahead$iter__60468(s__60469){
return (new cljs.core.LazySeq(null,((function (map__60466,map__60466__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60464,map__60464__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__60461,map__60461__$1,state,c_search,c_input,state_atom,input_text_model,map__60459,map__60459__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
var s__60469__$1 = s__60469;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__60469__$1);
if(temp__4657__auto__){
var s__60469__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__60469__$2)){
var c__49037__auto__ = cljs.core.chunk_first.call(null,s__60469__$2);
var size__49038__auto__ = cljs.core.count.call(null,c__49037__auto__);
var b__60471 = cljs.core.chunk_buffer.call(null,size__49038__auto__);
if((function (){var i__60470 = (0);
while(true){
if((i__60470 < size__49038__auto__)){
var vec__60478 = cljs.core._nth.call(null,c__49037__auto__,i__60470);
var i = cljs.core.nth.call(null,vec__60478,(0),null);
var s = cljs.core.nth.call(null,vec__60478,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__60471,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("rc-typeahead-suggestion"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__60470,selected_QMARK_,vec__60478,i,s,c__49037__auto__,size__49038__auto__,b__60471,s__60469__$2,temp__4657__auto__,map__60466,map__60466__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60464,map__60464__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__60461,map__60461__$1,state,c_search,c_input,state_atom,input_text_model,map__60459,map__60459__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__60470,selected_QMARK_,vec__60478,i,s,c__49037__auto__,size__49038__auto__,b__60471,s__60469__$2,temp__4657__auto__,map__60466,map__60466__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60464,map__60464__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__60461,map__60461__$1,state,c_search,c_input,state_atom,input_text_model,map__60459,map__60459__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__60470,selected_QMARK_,vec__60478,i,s,c__49037__auto__,size__49038__auto__,b__60471,s__60469__$2,temp__4657__auto__,map__60466,map__60466__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60464,map__60464__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__60461,map__60461__$1,state,c_search,c_input,state_atom,input_text_model,map__60459,map__60459__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (p1__60456_SHARP_){
p1__60456_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__60470,selected_QMARK_,vec__60478,i,s,c__49037__auto__,size__49038__auto__,b__60471,s__60469__$2,temp__4657__auto__,map__60466,map__60466__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60464,map__60464__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__60461,map__60461__$1,state,c_search,c_input,state_atom,input_text_model,map__60459,map__60459__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__60488 = (i__60470 + (1));
i__60470 = G__60488;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__60471),re_com$typeahead$iter__60468.call(null,cljs.core.chunk_rest.call(null,s__60469__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__60471),null);
}
} else {
var vec__60481 = cljs.core.first.call(null,s__60469__$2);
var i = cljs.core.nth.call(null,vec__60481,(0),null);
var s = cljs.core.nth.call(null,vec__60481,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("rc-typeahead-suggestion"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__60481,i,s,s__60469__$2,temp__4657__auto__,map__60466,map__60466__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60464,map__60464__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__60461,map__60461__$1,state,c_search,c_input,state_atom,input_text_model,map__60459,map__60459__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__60481,i,s,s__60469__$2,temp__4657__auto__,map__60466,map__60466__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60464,map__60464__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__60461,map__60461__$1,state,c_search,c_input,state_atom,input_text_model,map__60459,map__60459__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__60481,i,s,s__60469__$2,temp__4657__auto__,map__60466,map__60466__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60464,map__60464__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__60461,map__60461__$1,state,c_search,c_input,state_atom,input_text_model,map__60459,map__60459__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (p1__60456_SHARP_){
p1__60456_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__60481,i,s,s__60469__$2,temp__4657__auto__,map__60466,map__60466__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60464,map__60464__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__60461,map__60461__$1,state,c_search,c_input,state_atom,input_text_model,map__60459,map__60459__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__60468.call(null,cljs.core.rest.call(null,s__60469__$2)));
}
} else {
return null;
}
break;
}
});})(map__60466,map__60466__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60464,map__60464__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__60461,map__60461__$1,state,c_search,c_input,state_atom,input_text_model,map__60459,map__60459__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,null,null));
});})(map__60466,map__60466__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60464,map__60464__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__60461,map__60461__$1,state,c_search,c_input,state_atom,input_text_model,map__60459,map__60459__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
;
return iter__49039__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null):null)], null)], null);
};
var G__60487 = function (var_args){
var p__60463 = null;
if (arguments.length > 0) {
var G__60489__i = 0, G__60489__a = new Array(arguments.length -  0);
while (G__60489__i < G__60489__a.length) {G__60489__a[G__60489__i] = arguments[G__60489__i + 0]; ++G__60489__i;}
  p__60463 = new cljs.core.IndexedSeq(G__60489__a,0,null);
} 
return G__60487__delegate.call(this,p__60463);};
G__60487.cljs$lang$maxFixedArity = 0;
G__60487.cljs$lang$applyTo = (function (arglist__60490){
var p__60463 = cljs.core.seq(arglist__60490);
return G__60487__delegate(p__60463);
});
G__60487.cljs$core$IFn$_invoke$arity$variadic = G__60487__delegate;
return G__60487;
})()
;
;})(map__60461,map__60461__$1,state,c_search,c_input,state_atom,input_text_model,map__60459,map__60459__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq60457){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60457));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__57384__auto___60657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__57384__auto___60657,out){
return (function (){
var f__57385__auto__ = (function (){var switch__57272__auto__ = ((function (c__57384__auto___60657,out){
return (function (state_60624){
var state_val_60625 = (state_60624[(1)]);
if((state_val_60625 === (7))){
var inst_60579 = (state_60624[(2)]);
var state_60624__$1 = state_60624;
var statearr_60626_60658 = state_60624__$1;
(statearr_60626_60658[(2)] = inst_60579);

(statearr_60626_60658[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60625 === (1))){
var inst_60574 = null;
var state_60624__$1 = (function (){var statearr_60627 = state_60624;
(statearr_60627[(7)] = inst_60574);

return statearr_60627;
})();
var statearr_60628_60659 = state_60624__$1;
(statearr_60628_60659[(2)] = null);

(statearr_60628_60659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60625 === (4))){
var state_60624__$1 = state_60624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60624__$1,(7),in$);
} else {
if((state_val_60625 === (15))){
var inst_60609 = (state_60624[(2)]);
var state_60624__$1 = (function (){var statearr_60629 = state_60624;
(statearr_60629[(8)] = inst_60609);

return statearr_60629;
})();
var statearr_60630_60660 = state_60624__$1;
(statearr_60630_60660[(2)] = null);

(statearr_60630_60660[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60625 === (13))){
var inst_60597 = (state_60624[(9)]);
var inst_60611 = cljs.core._EQ_.call(null,inst_60597,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_60624__$1 = state_60624;
if(inst_60611){
var statearr_60631_60661 = state_60624__$1;
(statearr_60631_60661[(1)] = (16));

} else {
var statearr_60632_60662 = state_60624__$1;
(statearr_60632_60662[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60625 === (6))){
var inst_60583 = (state_60624[(10)]);
var inst_60582 = (state_60624[(2)]);
var inst_60583__$1 = cljs.core.async.timeout.call(null,ms);
var inst_60591 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60592 = [in$,inst_60583__$1];
var inst_60593 = (new cljs.core.PersistentVector(null,2,(5),inst_60591,inst_60592,null));
var state_60624__$1 = (function (){var statearr_60633 = state_60624;
(statearr_60633[(10)] = inst_60583__$1);

(statearr_60633[(11)] = inst_60582);

return statearr_60633;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_60624__$1,(8),inst_60593);
} else {
if((state_val_60625 === (17))){
var state_60624__$1 = state_60624;
var statearr_60634_60663 = state_60624__$1;
(statearr_60634_60663[(2)] = null);

(statearr_60634_60663[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60625 === (3))){
var inst_60622 = (state_60624[(2)]);
var state_60624__$1 = state_60624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60624__$1,inst_60622);
} else {
if((state_val_60625 === (12))){
var inst_60582 = (state_60624[(11)]);
var state_60624__$1 = state_60624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60624__$1,(15),out,inst_60582);
} else {
if((state_val_60625 === (2))){
var inst_60574 = (state_60624[(7)]);
var inst_60576 = (inst_60574 == null);
var state_60624__$1 = state_60624;
if(cljs.core.truth_(inst_60576)){
var statearr_60635_60664 = state_60624__$1;
(statearr_60635_60664[(1)] = (4));

} else {
var statearr_60636_60665 = state_60624__$1;
(statearr_60636_60665[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60625 === (11))){
var inst_60619 = (state_60624[(2)]);
var inst_60574 = inst_60619;
var state_60624__$1 = (function (){var statearr_60637 = state_60624;
(statearr_60637[(7)] = inst_60574);

return statearr_60637;
})();
var statearr_60638_60666 = state_60624__$1;
(statearr_60638_60666[(2)] = null);

(statearr_60638_60666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60625 === (9))){
var inst_60595 = (state_60624[(12)]);
var inst_60603 = cljs.core.nth.call(null,inst_60595,(0),null);
var inst_60604 = cljs.core.nth.call(null,inst_60595,(1),null);
var state_60624__$1 = (function (){var statearr_60639 = state_60624;
(statearr_60639[(13)] = inst_60604);

return statearr_60639;
})();
var statearr_60640_60667 = state_60624__$1;
(statearr_60640_60667[(2)] = inst_60603);

(statearr_60640_60667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60625 === (5))){
var inst_60574 = (state_60624[(7)]);
var state_60624__$1 = state_60624;
var statearr_60641_60668 = state_60624__$1;
(statearr_60641_60668[(2)] = inst_60574);

(statearr_60641_60668[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60625 === (14))){
var inst_60617 = (state_60624[(2)]);
var state_60624__$1 = state_60624;
var statearr_60642_60669 = state_60624__$1;
(statearr_60642_60669[(2)] = inst_60617);

(statearr_60642_60669[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60625 === (16))){
var inst_60596 = (state_60624[(14)]);
var state_60624__$1 = state_60624;
var statearr_60643_60670 = state_60624__$1;
(statearr_60643_60670[(2)] = inst_60596);

(statearr_60643_60670[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60625 === (10))){
var inst_60583 = (state_60624[(10)]);
var inst_60597 = (state_60624[(9)]);
var inst_60606 = cljs.core._EQ_.call(null,inst_60597,inst_60583);
var state_60624__$1 = state_60624;
if(inst_60606){
var statearr_60644_60671 = state_60624__$1;
(statearr_60644_60671[(1)] = (12));

} else {
var statearr_60645_60672 = state_60624__$1;
(statearr_60645_60672[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60625 === (18))){
var inst_60615 = (state_60624[(2)]);
var state_60624__$1 = state_60624;
var statearr_60646_60673 = state_60624__$1;
(statearr_60646_60673[(2)] = inst_60615);

(statearr_60646_60673[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60625 === (8))){
var inst_60595 = (state_60624[(12)]);
var inst_60597 = (state_60624[(9)]);
var inst_60595__$1 = (state_60624[(2)]);
var inst_60596 = cljs.core.nth.call(null,inst_60595__$1,(0),null);
var inst_60597__$1 = cljs.core.nth.call(null,inst_60595__$1,(1),null);
var inst_60598 = cljs.core._EQ_.call(null,inst_60597__$1,in$);
var state_60624__$1 = (function (){var statearr_60647 = state_60624;
(statearr_60647[(14)] = inst_60596);

(statearr_60647[(12)] = inst_60595__$1);

(statearr_60647[(9)] = inst_60597__$1);

return statearr_60647;
})();
if(inst_60598){
var statearr_60648_60674 = state_60624__$1;
(statearr_60648_60674[(1)] = (9));

} else {
var statearr_60649_60675 = state_60624__$1;
(statearr_60649_60675[(1)] = (10));

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
}
});})(c__57384__auto___60657,out))
;
return ((function (switch__57272__auto__,c__57384__auto___60657,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__57273__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__57273__auto____0 = (function (){
var statearr_60653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60653[(0)] = re_com$typeahead$debounce_$_state_machine__57273__auto__);

(statearr_60653[(1)] = (1));

return statearr_60653;
});
var re_com$typeahead$debounce_$_state_machine__57273__auto____1 = (function (state_60624){
while(true){
var ret_value__57274__auto__ = (function (){try{while(true){
var result__57275__auto__ = switch__57272__auto__.call(null,state_60624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57275__auto__;
}
break;
}
}catch (e60654){if((e60654 instanceof Object)){
var ex__57276__auto__ = e60654;
var statearr_60655_60676 = state_60624;
(statearr_60655_60676[(5)] = ex__57276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60677 = state_60624;
state_60624 = G__60677;
continue;
} else {
return ret_value__57274__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__57273__auto__ = function(state_60624){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__57273__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__57273__auto____1.call(this,state_60624);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__57273__auto____0;
re_com$typeahead$debounce_$_state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__57273__auto____1;
return re_com$typeahead$debounce_$_state_machine__57273__auto__;
})()
;})(switch__57272__auto__,c__57384__auto___60657,out))
})();
var state__57386__auto__ = (function (){var statearr_60656 = f__57385__auto__.call(null);
(statearr_60656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__57384__auto___60657);

return statearr_60656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__57386__auto__);
});})(c__57384__auto___60657,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map