// Compiled by ClojureScript 1.9.542 {}
goog.provide('bouncer.core');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
bouncer.core.build_multi_step = (function bouncer$core$build_multi_step(var_args){
var args55108 = [];
var len__49364__auto___55118 = arguments.length;
var i__49365__auto___55119 = (0);
while(true){
if((i__49365__auto___55119 < len__49364__auto___55118)){
args55108.push((arguments[i__49365__auto___55119]));

var G__55120 = (i__49365__auto___55119 + (1));
i__49365__auto___55119 = G__55120;
continue;
} else {
}
break;
}

var G__55110 = args55108.length;
switch (G__55110) {
case 2:
return bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args55108.length)].join('')));

}
});

bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$2 = (function (key_or_vec,fn_vec){
return bouncer.core.build_multi_step.call(null,key_or_vec,fn_vec,cljs.core.PersistentVector.EMPTY);
});

bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$3 = (function (key_or_vec,p__55111,acc){
while(true){
var vec__55112 = p__55111;
var seq__55113 = cljs.core.seq.call(null,vec__55112);
var first__55114 = cljs.core.first.call(null,seq__55113);
var seq__55113__$1 = cljs.core.next.call(null,seq__55113);
var f_or_list = first__55114;
var rest = seq__55113__$1;
if(cljs.core.not.call(null,f_or_list)){
return acc;
} else {
if(cljs.core.sequential_QMARK_.call(null,f_or_list)){
var vec__55115 = f_or_list;
var seq__55116 = cljs.core.seq.call(null,vec__55115);
var first__55117 = cljs.core.first.call(null,seq__55116);
var seq__55116__$1 = cljs.core.next.call(null,seq__55116);
var f = first__55117;
var opts = seq__55116__$1;
var G__55122 = key_or_vec;
var G__55123 = rest;
var G__55124 = cljs.core.conj.call(null,acc,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,key_or_vec], null),opts));
key_or_vec = G__55122;
p__55111 = G__55123;
acc = G__55124;
continue;
} else {
var G__55125 = key_or_vec;
var G__55126 = rest;
var G__55127 = cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f_or_list,key_or_vec], null));
key_or_vec = G__55125;
p__55111 = G__55126;
acc = G__55127;
continue;

}
}
break;
}
});

bouncer.core.build_multi_step.cljs$lang$maxFixedArity = 3;

/**
 * Takes two arguments:
 * 
 *   `parent-keyword` is a :keyword - or a vector of :keywords denoting a path in a associative structure
 * 
 *   `validations-map` is a map of forms following this spec:
 * 
 * 
 *    {:keyword [f g] :another-keyword h}
 * 
 * 
 *   Merges `:parent-keyword` with every first element of validations-map, transforming it into:
 * 
 * 
 *    ([:parent-keyword :keyword] [f g] [:parent-keyword :another-keyword] h)
 */
bouncer.core.merge_path = (function bouncer$core$merge_path(parent_key,validations_map){
var parent_key__$1 = (((parent_key instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_key], null):parent_key);
return cljs.core.mapcat.call(null,((function (parent_key__$1){
return (function (p__55132){
var vec__55133 = p__55132;
var key = cljs.core.nth.call(null,vec__55133,(0),null);
var validations = cljs.core.nth.call(null,vec__55133,(1),null);
if(cljs.core.vector_QMARK_.call(null,key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.vector,cljs.core.concat.call(null,parent_key__$1,key)),validations], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.vector,cljs.core.concat.call(null,parent_key__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null))),validations], null);
}
});})(parent_key__$1))
,validations_map);
});
bouncer.core.build_steps = (function bouncer$core$build_steps(p__55136){
var vec__55144 = p__55136;
var seq__55145 = cljs.core.seq.call(null,vec__55144);
var first__55146 = cljs.core.first.call(null,seq__55145);
var seq__55145__$1 = cljs.core.next.call(null,seq__55145);
var head = first__55146;
var tail = seq__55145__$1;
var forms = vec__55144;
var forms__$1 = ((cljs.core.map_QMARK_.call(null,head))?cljs.core.vec.call(null,cljs.core.mapcat.call(null,cljs.core.identity,head)):forms);
return cljs.core.reduce.call(null,((function (forms__$1,vec__55144,seq__55145,first__55146,seq__55145__$1,head,tail,forms){
return (function (acc,p__55147){
var vec__55148 = p__55147;
var key_or_vec = cljs.core.nth.call(null,vec__55148,(0),null);
var sym_or_coll = cljs.core.nth.call(null,vec__55148,(1),null);
var rule = vec__55148;
if(cljs.core.vector_QMARK_.call(null,sym_or_coll)){
return cljs.core.concat.call(null,acc,bouncer.core.build_multi_step.call(null,key_or_vec,sym_or_coll));
} else {
if(cljs.core.map_QMARK_.call(null,sym_or_coll)){
return cljs.core.concat.call(null,acc,bouncer.core.build_steps.call(null,bouncer.core.merge_path.call(null,key_or_vec,sym_or_coll)));
} else {
return cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym_or_coll,key_or_vec], null));

}
}
});})(forms__$1,vec__55144,seq__55145,first__55146,seq__55145__$1,head,tail,forms))
,cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),forms__$1));
});
bouncer.core.pre_condition_met_QMARK_ = (function bouncer$core$pre_condition_met_QMARK_(pre_fn,map){
var or__48251__auto__ = (pre_fn == null);
if(or__48251__auto__){
return or__48251__auto__;
} else {
return pre_fn.call(null,map);
}
});
/**
 * Wraps pred in the context of validating a single value
 * 
 *   - `acc`  is the map being validated
 * 
 *   - `pred` is a validator
 * 
 *   - `k`    the path to the value to be validated in the associative structure `acc`
 * 
 *   - `args` any extra args to pred
 * 
 *   It only runs pred if:
 * 
 *   - the validator contains a pre-condition *and* it is met or;
 *   - the validator is optional  *and* there is a non-nil value to be validated (this information is read from pred's metadata) or;
 *   - there are no previous errors for the given path
 * 
 *   Returns `acc` augmented with a namespace qualified ::errors keyword
 */
bouncer.core.wrap = (function bouncer$core$wrap(message_fn,acc,p__55152){
var vec__55163 = p__55152;
var seq__55164 = cljs.core.seq.call(null,vec__55163);
var first__55165 = cljs.core.first.call(null,seq__55164);
var seq__55164__$1 = cljs.core.next.call(null,seq__55164);
var pred = first__55165;
var first__55165__$1 = cljs.core.first.call(null,seq__55164__$1);
var seq__55164__$2 = cljs.core.next.call(null,seq__55164__$1);
var k = first__55165__$1;
var args = seq__55164__$2;
var k__$1 = ((cljs.core.vector_QMARK_.call(null,k))?k:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var error_path = cljs.core.cons.call(null,new cljs.core.Keyword("bouncer.core","errors","bouncer.core/errors",-444562289),k__$1);
var map__55166 = cljs.core.meta.call(null,pred);
var map__55166__$1 = ((((!((map__55166 == null)))?((((map__55166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55166.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55166):map__55166);
var metadata = map__55166__$1;
var optional = cljs.core.get.call(null,map__55166__$1,new cljs.core.Keyword(null,"optional","optional",2053951509),false);
var default_message_format = cljs.core.get.call(null,map__55166__$1,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"Custom validation failed for %s");
var meta_with_defaults = cljs.core.merge.call(null,metadata,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),default_message_format,new cljs.core.Keyword(null,"optional","optional",2053951509),optional], null));
var vec__55167 = cljs.core.split_with.call(null,cljs.core.complement.call(null,cljs.core.keyword_QMARK_),args);
var args__$1 = cljs.core.nth.call(null,vec__55167,(0),null);
var opts = cljs.core.nth.call(null,vec__55167,(1),null);
var map__55170 = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var map__55170__$1 = ((((!((map__55170 == null)))?((((map__55170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55170.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55170):map__55170);
var message = cljs.core.get.call(null,map__55170__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var pre = cljs.core.get.call(null,map__55170__$1,new cljs.core.Keyword(null,"pre","pre",2118456869));
var pred_subject = cljs.core.get_in.call(null,acc,k__$1);
if(cljs.core.truth_(bouncer.core.pre_condition_met_QMARK_.call(null,pre,acc))){
if(cljs.core.truth_((function (){var or__48251__auto__ = (function (){var and__48239__auto__ = optional;
if(cljs.core.truth_(and__48239__auto__)){
return (pred_subject == null);
} else {
return and__48239__auto__;
}
})();
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
var or__48251__auto____$1 = !(cljs.core.empty_QMARK_.call(null,cljs.core.get_in.call(null,acc,error_path)));
if(or__48251__auto____$1){
return or__48251__auto____$1;
} else {
return cljs.core.apply.call(null,pred,pred_subject,args__$1);
}
}
})())){
return acc;
} else {
return cljs.core.update_in.call(null,acc,error_path,((function (k__$1,error_path,map__55166,map__55166__$1,metadata,optional,default_message_format,meta_with_defaults,vec__55167,args__$1,opts,map__55170,map__55170__$1,message,pre,pred_subject,vec__55163,seq__55164,first__55165,seq__55164__$1,pred,first__55165__$1,seq__55164__$2,k,args){
return (function (p1__55151_SHARP_){
return cljs.core.conj.call(null,p1__55151_SHARP_,message_fn.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),k__$1,new cljs.core.Keyword(null,"value","value",305978217),pred_subject,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.seq.call(null,args__$1),new cljs.core.Keyword(null,"metadata","metadata",1799301597),meta_with_defaults,new cljs.core.Keyword(null,"message","message",-406056002),message], null)));
});})(k__$1,error_path,map__55166,map__55166__$1,metadata,optional,default_message_format,meta_with_defaults,vec__55167,args__$1,opts,map__55170,map__55170__$1,message,pre,pred_subject,vec__55163,seq__55164,first__55165,seq__55164__$1,pred,first__55165__$1,seq__55164__$2,k,args))
);
}
} else {
return acc;
}
});
/**
 * Internal Use.
 * 
 *   Chain of responsibility.
 * 
 *   Takes the current state and a collection of validators `fs`
 * 
 *   Will run all validators against `old-state` and eventually return a vector with the result - the errors map - and the new state - the original map augmented with the errors map.
 * 
 *   See also `wrap`
 */
bouncer.core.wrap_chain = (function bouncer$core$wrap_chain(var_args){
var args__49371__auto__ = [];
var len__49364__auto___55176 = arguments.length;
var i__49365__auto___55177 = (0);
while(true){
if((i__49365__auto___55177 < len__49364__auto___55176)){
args__49371__auto__.push((arguments[i__49365__auto___55177]));

var G__55178 = (i__49365__auto___55177 + (1));
i__49365__auto___55177 = G__55178;
continue;
} else {
}
break;
}

var argseq__49372__auto__ = ((((2) < args__49371__auto__.length))?(new cljs.core.IndexedSeq(args__49371__auto__.slice((2)),(0),null)):null);
return bouncer.core.wrap_chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__49372__auto__);
});

bouncer.core.wrap_chain.cljs$core$IFn$_invoke$arity$variadic = (function (old_state,message_fn,fs){
var new_state = cljs.core.reduce.call(null,cljs.core.partial.call(null,bouncer.core.wrap,message_fn),old_state,fs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bouncer.core","errors","bouncer.core/errors",-444562289).cljs$core$IFn$_invoke$arity$1(new_state),new_state], null);
});

bouncer.core.wrap_chain.cljs$lang$maxFixedArity = (2);

bouncer.core.wrap_chain.cljs$lang$applyTo = (function (seq55173){
var G__55174 = cljs.core.first.call(null,seq55173);
var seq55173__$1 = cljs.core.next.call(null,seq55173);
var G__55175 = cljs.core.first.call(null,seq55173__$1);
var seq55173__$2 = cljs.core.next.call(null,seq55173__$1);
return bouncer.core.wrap_chain.cljs$core$IFn$_invoke$arity$variadic(G__55174,G__55175,seq55173__$2);
});

/**
 * Internal use.
 * 
 *   Validates the map m using the validation functions fs.
 * 
 *   Returns a vector where the first element is the map of validation errors if any and the second is the original map (possibly) augmented with the errors map.
 */
bouncer.core.validate_STAR_ = (function bouncer$core$validate_STAR_(message_fn,m,fs){
var G__55192 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,m], null);
var vec__55193 = G__55192;
var errors = cljs.core.nth.call(null,vec__55193,(0),null);
var state = cljs.core.nth.call(null,vec__55193,(1),null);
var ret = vec__55193;
var fs__$1 = fs;
var G__55192__$1 = G__55192;
var fs__$2 = fs__$1;
while(true){
var vec__55196 = G__55192__$1;
var errors__$1 = cljs.core.nth.call(null,vec__55196,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__55196,(1),null);
var ret__$1 = vec__55196;
var fs__$3 = fs__$2;
if(cljs.core.seq.call(null,fs__$3)){
var G__55199 = bouncer.core.wrap_chain.call(null,state__$1,message_fn,cljs.core.first.call(null,fs__$3));
var G__55200 = cljs.core.rest.call(null,fs__$3);
G__55192__$1 = G__55199;
fs__$2 = G__55200;
continue;
} else {
return ret__$1;
}
break;
}
});
/**
 * Use together with `validate`, e.g.:
 * 
 * 
 *    (core/validate core/with-default-messages {}
 *                   :name v/required)
 */
bouncer.core.with_default_messages = (function bouncer$core$with_default_messages(error){
var map__55203 = error;
var map__55203__$1 = ((((!((map__55203 == null)))?((((map__55203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55203.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55203):map__55203);
var message = cljs.core.get.call(null,map__55203__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var path = cljs.core.get.call(null,map__55203__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var metadata = cljs.core.get.call(null,map__55203__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));
return goog.string.format((function (){var or__48251__auto__ = message;
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
return new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141).cljs$core$IFn$_invoke$arity$1(metadata);
}
})(),cljs.core.name.call(null,cljs.core.peek.call(null,path)));
});
/**
 * Takes a
 * 
 *   - `message-fn` (optional) responsible for transforming error metadata into
 *   the validation result (defaults to `with-default-messages`)
 * 
 *   - `m` map to be validated
 * 
 *   - `forms` validations to be performed on the map
 * 
 *   forms can be a single validator set or a sequence of key/value pairs where:
 * 
 *   key   ==> :keyword or [:a :path]
 * 
 *   value ==> validation-function or
 *          validator-set or
 *         [[validation-function args+opts]] or
 *         [validation-function another-validation-function] or
 *         [validation-function [another-validation-function args+opts]]
 * 
 *   e.g.:
 * 
 * 
 *    (core/validate a-map
 *             :name v/required
 *             :age  [v/required
 *                   [v/number :message "age must be a number"]]
 *             [:passport :number] v/positive)
 * 
 * 
 *   Returns a vector where the first element is the map of validation errors if
 *   any and the second is the original map (possibly) augmented with the errors
 *   map.
 * 
 *   See also `defvalidator`
 */
bouncer.core.validate = (function bouncer$core$validate(var_args){
var args__49371__auto__ = [];
var len__49364__auto___55212 = arguments.length;
var i__49365__auto___55213 = (0);
while(true){
if((i__49365__auto___55213 < len__49364__auto___55212)){
args__49371__auto__.push((arguments[i__49365__auto___55213]));

var G__55214 = (i__49365__auto___55213 + (1));
i__49365__auto___55213 = G__55214;
continue;
} else {
}
break;
}

var argseq__49372__auto__ = ((((0) < args__49371__auto__.length))?(new cljs.core.IndexedSeq(args__49371__auto__.slice((0)),(0),null)):null);
return bouncer.core.validate.cljs$core$IFn$_invoke$arity$variadic(argseq__49372__auto__);
});

bouncer.core.validate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__55206 = ((cljs.core.fn_QMARK_.call(null,cljs.core.first.call(null,args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args),cljs.core.next.call(null,args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.core.with_default_messages,args], null));
var message_fn = cljs.core.nth.call(null,vec__55206,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__55206,(1),null);
var vec__55209 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__$1),cljs.core.next.call(null,args__$1)], null);
var m = cljs.core.nth.call(null,vec__55209,(0),null);
var forms = cljs.core.nth.call(null,vec__55209,(1),null);
return bouncer.core.validate_STAR_.call(null,message_fn,m,bouncer.core.build_steps.call(null,forms));
});

bouncer.core.validate.cljs$lang$maxFixedArity = (0);

bouncer.core.validate.cljs$lang$applyTo = (function (seq55205){
return bouncer.core.validate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55205));
});

/**
 * Takes a map and one or more validation functions with semantics provided by "validate". Returns true if the map passes all validations. False otherwise.
 */
bouncer.core.valid_QMARK_ = (function bouncer$core$valid_QMARK_(var_args){
var args__49371__auto__ = [];
var len__49364__auto___55216 = arguments.length;
var i__49365__auto___55217 = (0);
while(true){
if((i__49365__auto___55217 < len__49364__auto___55216)){
args__49371__auto__.push((arguments[i__49365__auto___55217]));

var G__55218 = (i__49365__auto___55217 + (1));
i__49365__auto___55217 = G__55218;
continue;
} else {
}
break;
}

var argseq__49372__auto__ = ((((0) < args__49371__auto__.length))?(new cljs.core.IndexedSeq(args__49371__auto__.slice((0)),(0),null)):null);
return bouncer.core.valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__49372__auto__);
});

bouncer.core.valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.empty_QMARK_.call(null,cljs.core.first.call(null,cljs.core.apply.call(null,bouncer.core.validate,args)));
});

bouncer.core.valid_QMARK_.cljs$lang$maxFixedArity = (0);

bouncer.core.valid_QMARK_.cljs$lang$applyTo = (function (seq55215){
return bouncer.core.valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55215));
});


//# sourceMappingURL=core.js.map