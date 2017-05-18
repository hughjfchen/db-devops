// Compiled by ClojureScript 1.9.542 {}
goog.provide('bouncer.validators');
goog.require('cljs.core');
goog.require('cljs_time.format');
var ret__49403__auto___55084 = (function (){
/**
 * Defines a new validating function using args & body semantics as provided by "defn".
 *   docstring and opts-map are optional
 * 
 *   opts-map is a map of key-value pairs and may be one of:
 * 
 *   - `:default-message-format` used when the client of this validator doesn't
 *   provide a message (consider using custom message functions)
 * 
 *   - `:optional` whether the validation should be run only if the given key has
 *   a non-nil value in the map. Defaults to true.
 * 
 *   or any other key-value pair which will be available in the validation result
 *   under the `:metadata` key.
 * 
 *   The function will be called with the value being validated as its first argument.
 * 
 *   Any extra arguments will be passed along to the function in the order they were used in the
 *   "validate" call.
 * 
 *   e.g.:
 * 
 * 
 *  (defvalidator member
 *    [value coll]
 *    (some #{value} coll))
 * 
 *  (validate {:age 10}
 *    :age [[member (range 5)]])
 * 
 * 
 *   This means the validator `member` will be called with the arguments `10` and `(0 1 2 3 4)`,
 *   in that order.
 */
bouncer.validators.defvalidator = (function bouncer$validators$defvalidator(var_args){
var args__49371__auto__ = [];
var len__49364__auto___55085 = arguments.length;
var i__49365__auto___55086 = (0);
while(true){
if((i__49365__auto___55086 < len__49364__auto___55085)){
args__49371__auto__.push((arguments[i__49365__auto___55086]));

var G__55087 = (i__49365__auto___55086 + (1));
i__49365__auto___55086 = G__55087;
continue;
} else {
}
break;
}

var argseq__49372__auto__ = ((((3) < args__49371__auto__.length))?(new cljs.core.IndexedSeq(args__49371__auto__.slice((3)),(0),null)):null);
return bouncer.validators.defvalidator.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__49372__auto__);
});

bouncer.validators.defvalidator.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,options){
var vec__55075 = ((typeof cljs.core.first.call(null,options) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,options),cljs.core.next.call(null,options)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,options], null));
var docstring = cljs.core.nth.call(null,vec__55075,(0),null);
var options__$1 = cljs.core.nth.call(null,vec__55075,(1),null);
var vec__55078 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,options__$1),cljs.core.next.call(null,options__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,options__$1], null));
var fn_meta = cljs.core.nth.call(null,vec__55078,(0),null);
var vec__55081 = cljs.core.nth.call(null,vec__55078,(1),null);
var seq__55082 = cljs.core.seq.call(null,vec__55081);
var first__55083 = cljs.core.first.call(null,seq__55082);
var seq__55082__$1 = cljs.core.next.call(null,seq__55082);
var args = first__55083;
var body = seq__55082__$1;
var fn_meta__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),fn_meta,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"validator","validator",-1966190681),cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''))], null));
var arglists = cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__49093__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__49093__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__49093__auto__);
})(),(function (){var x__49093__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null)),(function (){var x__49093__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__49093__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__49093__auto__);
})(),(function (){var x__49093__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__49093__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__49093__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__49093__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__49093__auto__);
})(),(function (){var x__49093__auto__ = fn_meta__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__49093__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__49093__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__49093__auto__);
})())));
});

bouncer.validators.defvalidator.cljs$lang$maxFixedArity = (3);

bouncer.validators.defvalidator.cljs$lang$applyTo = (function (seq55071){
var G__55072 = cljs.core.first.call(null,seq55071);
var seq55071__$1 = cljs.core.next.call(null,seq55071);
var G__55073 = cljs.core.first.call(null,seq55071__$1);
var seq55071__$2 = cljs.core.next.call(null,seq55071__$1);
var G__55074 = cljs.core.first.call(null,seq55071__$2);
var seq55071__$3 = cljs.core.next.call(null,seq55071__$2);
return bouncer.validators.defvalidator.cljs$core$IFn$_invoke$arity$variadic(G__55072,G__55073,G__55074,seq55071__$3);
});

return null;
})()
;
bouncer.validators.defvalidator.cljs$lang$macro = true;

bouncer.validators.required = cljs.core.with_meta.call(null,(function bouncer$validators$required(value){
if(typeof value === 'string'){
return !(cljs.core.empty_QMARK_.call(null,value));
} else {
return !((value == null));
}
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),false,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be present",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","required","bouncer.validators/required",-465826887)], null));
bouncer.validators.number = cljs.core.with_meta.call(null,(function bouncer$validators$number(maybe_a_number){
return typeof maybe_a_number === 'number';
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be a number",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","number","bouncer.validators/number",-1457674719)], null));
bouncer.validators.integer = cljs.core.with_meta.call(null,(function bouncer$validators$integer(maybe_an_int){
return cljs.core.integer_QMARK_.call(null,maybe_an_int);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be an integer",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","integer","bouncer.validators/integer",-412024393)], null));
bouncer.validators.boolean$ = cljs.core.with_meta.call(null,(function bouncer$validators$boolean(maybe_a_boolean){
return (cljs.core._EQ_.call(null,false,maybe_a_boolean)) || (cljs.core._EQ_.call(null,true,maybe_a_boolean));
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be a boolean",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","boolean","bouncer.validators/boolean",-14906243)], null));
bouncer.validators.string = cljs.core.with_meta.call(null,(function bouncer$validators$string(maybe_a_string){
return typeof maybe_a_string === 'string';
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be a string",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","string","bouncer.validators/string",-17988663)], null));
bouncer.validators.in_range = cljs.core.with_meta.call(null,(function bouncer$validators$in_range(value,p__55088){
var vec__55092 = p__55088;
var from = cljs.core.nth.call(null,vec__55092,(0),null);
var to = cljs.core.nth.call(null,vec__55092,(1),null);
return ((from <= value)) && ((value <= to));
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be in a specified range",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","in-range","bouncer.validators/in-range",-1520951092)], null));
bouncer.validators.positive = cljs.core.with_meta.call(null,(function bouncer$validators$positive(number){
return (number > (0));
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be a positive number",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","positive","bouncer.validators/positive",-155537451)], null));
bouncer.validators.member = cljs.core.with_meta.call(null,(function bouncer$validators$member(value,coll){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([value]),coll);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be one of the values in the list",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","member","bouncer.validators/member",-1164005429)], null));
bouncer.validators.custom = cljs.core.with_meta.call(null,(function bouncer$validators$custom(value,pred){
cljs.core.println.call(null,"Warning: bouncer.validators/custom is deprecated and will be removed. Use plain functions instead.");

return pred.call(null,value);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","custom","bouncer.validators/custom",2142880173)], null));
bouncer.validators.every = cljs.core.with_meta.call(null,(function bouncer$validators$every(coll,pred){
return cljs.core.every_QMARK_.call(null,pred,coll);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"All items in %s must satisfy the predicate",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","every","bouncer.validators/every",-281179041)], null));
bouncer.validators.matches = cljs.core.with_meta.call(null,(function bouncer$validators$matches(value,re){
return cljs.core.complement.call(null,cljs.core.empty_QMARK_).call(null,cljs.core.re_seq.call(null,re,value));
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must satisfy the given pattern",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","matches","bouncer.validators/matches",-1184599255)], null));
bouncer.validators.email = cljs.core.with_meta.call(null,(function bouncer$validators$email(value){
var and__48239__auto__ = bouncer.validators.required.call(null,value);
if(cljs.core.truth_(and__48239__auto__)){
return bouncer.validators.matches.call(null,value,/^[^@]+@[^@\\.]+[\\.].+/);
} else {
return and__48239__auto__;
}
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be a valid email address",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","email","bouncer.validators/email",-1058548467)], null));
bouncer.validators.datetime = cljs.core.with_meta.call(null,(function() { 
var bouncer$validators$datetime__delegate = function (value,p__55095){
var vec__55100 = p__55095;
var seq__55101 = cljs.core.seq.call(null,vec__55100);
var first__55102 = cljs.core.first.call(null,seq__55101);
var seq__55101__$1 = cljs.core.next.call(null,seq__55101);
var opt = first__55102;
var _ = seq__55101__$1;
var formatter = ((typeof opt === 'string')?cljs_time.format.formatter.call(null,opt):opt);
try{if(cljs.core.truth_(formatter)){
return cljs_time.format.parse.call(null,formatter,value);
} else {
return cljs_time.format.parse.call(null,value);
}
}catch (e55103){if((e55103 instanceof Error)){
var e = e55103;
return false;
} else {
throw e55103;

}
}};
var bouncer$validators$datetime = function (value,var_args){
var p__55095 = null;
if (arguments.length > 1) {
var G__55104__i = 0, G__55104__a = new Array(arguments.length -  1);
while (G__55104__i < G__55104__a.length) {G__55104__a[G__55104__i] = arguments[G__55104__i + 1]; ++G__55104__i;}
  p__55095 = new cljs.core.IndexedSeq(G__55104__a,0,null);
} 
return bouncer$validators$datetime__delegate.call(this,value,p__55095);};
bouncer$validators$datetime.cljs$lang$maxFixedArity = 1;
bouncer$validators$datetime.cljs$lang$applyTo = (function (arglist__55105){
var value = cljs.core.first(arglist__55105);
var p__55095 = cljs.core.rest(arglist__55105);
return bouncer$validators$datetime__delegate(value,p__55095);
});
bouncer$validators$datetime.cljs$core$IFn$_invoke$arity$variadic = bouncer$validators$datetime__delegate;
return bouncer$validators$datetime;
})()
,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be a valid date",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","datetime","bouncer.validators/datetime",-2030523505)], null));
bouncer.validators.max_count = cljs.core.with_meta.call(null,(function bouncer$validators$max_count(value,maximum){
return (cljs.core.count.call(null,cljs.core.seq.call(null,value)) <= maximum);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s is longer than the maximum",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","max-count","bouncer.validators/max-count",-835039936)], null));
bouncer.validators.min_count = cljs.core.with_meta.call(null,(function bouncer$validators$min_count(value,minimum){
return (cljs.core.count.call(null,cljs.core.seq.call(null,value)) >= minimum);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s is less than the minimum",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","min-count","bouncer.validators/min-count",-359601934)], null));

//# sourceMappingURL=validators.js.map