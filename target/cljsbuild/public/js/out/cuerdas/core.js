// Compiled by ClojureScript 1.9.542 {}
goog.provide('cuerdas.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('clojure.walk');
goog.require('cuerdas.regexp');
goog.require('goog.string');
goog.require('cljs.reader');
cuerdas.core.keyword_STAR_ = cljs.core.keyword;
/**
 * Checks if a string is empty.
 */
cuerdas.core.empty_QMARK_ = (function cuerdas$core$empty_QMARK_(s){
if(typeof s === 'string'){
return (cljs.core.count.call(null,s) === (0));
} else {
return null;
}
});
/**
 * Convenient helper for check emptines or if value is nil.
 */
cuerdas.core.empty_or_nil_QMARK_ = (function cuerdas$core$empty_or_nil_QMARK_(s){
var or__48251__auto__ = (s == null);
if(or__48251__auto__){
return or__48251__auto__;
} else {
return cuerdas.core.empty_QMARK_.call(null,s);
}
});
/**
 * Determines whether a string contains a substring.
 */
cuerdas.core.includes_QMARK_ = (function cuerdas$core$includes_QMARK_(s,subs){
if(typeof s === 'string'){
if((subs == null)){
return false;
} else {
return goog.string.contains(s,subs);
}
} else {
return null;
}
});
/**
 * Extracts a section of a string and returns a new string.
 */
cuerdas.core.slice = (function cuerdas$core$slice(var_args){
var args62858 = [];
var len__49364__auto___62861 = arguments.length;
var i__49365__auto___62862 = (0);
while(true){
if((i__49365__auto___62862 < len__49364__auto___62861)){
args62858.push((arguments[i__49365__auto___62862]));

var G__62863 = (i__49365__auto___62862 + (1));
i__49365__auto___62862 = G__62863;
continue;
} else {
}
break;
}

var G__62860 = args62858.length;
switch (G__62860) {
case 2:
return cuerdas.core.slice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62858.length)].join('')));

}
});

cuerdas.core.slice.cljs$core$IFn$_invoke$arity$2 = (function (s,begin){
if(typeof s === 'string'){
return s.slice(begin);
} else {
return null;
}
});

cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3 = (function (s,begin,end){
if(typeof s === 'string'){
return s.slice(begin,end);
} else {
return null;
}
});

cuerdas.core.slice.cljs$lang$maxFixedArity = 3;

/**
 * Check if the string starts with prefix.
 */
cuerdas.core.starts_with_QMARK_ = (function cuerdas$core$starts_with_QMARK_(s,prefix){
if(typeof s === 'string'){
if((prefix == null)){
return false;
} else {
if(cljs.core.truth_(cuerdas.core.empty_QMARK_.call(null,prefix))){
return true;
} else {
return cljs.core._EQ_.call(null,s.lastIndexOf(prefix,(0)),(0));

}
}
} else {
return null;
}
});
/**
 * Check if the string ends with suffix.
 */
cuerdas.core.ends_with_QMARK_ = (function cuerdas$core$ends_with_QMARK_(s,suffix){
if(typeof s === 'string'){
if((s == null)){
return false;
} else {
if((suffix == null)){
return false;
} else {
if(cljs.core.truth_(cuerdas.core.empty_QMARK_.call(null,suffix))){
return true;
} else {
var l = (cljs.core.count.call(null,s) - cljs.core.count.call(null,suffix));
return ((l >= (0))) && (cljs.core._EQ_.call(null,s.indexOf(suffix,l),l));

}
}
}
} else {
return null;
}
});
/**
 * Converts string to all lower-case.
 * 
 *   This function works in strictly locale independent way,
 *   if you want a localized version, just use `locale-lower`
 */
cuerdas.core.lower = (function cuerdas$core$lower(s){
if(typeof s === 'string'){
return s.toLowerCase();
} else {
return null;
}
});
/**
 * Converts string to all upper-case.
 * 
 *   This function works in strictly locale independent way,
 *   if you want a localized version, just use `locale-upper`
 */
cuerdas.core.upper = (function cuerdas$core$upper(s){
if(typeof s === 'string'){
return s.toUpperCase();
} else {
return null;
}
});
/**
 * Converts string to all lower-case respecting
 *   the current system locale.
 * 
 *   In the jvm you can provide a concrete locale to
 *   use as the second optional argument.
 */
cuerdas.core.locale_lower = (function cuerdas$core$locale_lower(s){
if(typeof s === 'string'){
return s.toLocaleLowerCase();
} else {
return null;
}
});
/**
 * Converts string to all upper-case respecting
 *   the current system locale.
 * 
 *   In the jvm you can provide a concrete locale to
 *   use as the second optional argument.
 */
cuerdas.core.locale_upper = (function cuerdas$core$locale_upper(s){
if(typeof s === 'string'){
return s.toLocaleUpperCase();
} else {
return null;
}
});
/**
 * Compare strings in a case-insensitive manner.
 * 
 *   This function is locale independent.
 */
cuerdas.core.caseless_EQ_ = (function cuerdas$core$caseless_EQ_(s1,s2){
if(typeof s1 === 'string'){
return cljs.core._EQ_.call(null,cuerdas.core.lower.call(null,s1),cuerdas.core.lower.call(null,s2));
} else {
return null;
}
});
/**
 * Compare strings in a case-insensitive manner
 *   respecting the current locale.
 * 
 *   An optional locale can be passed as third
 *   argument (only on JVM).
 */
cuerdas.core.locale_caseless_EQ_ = (function cuerdas$core$locale_caseless_EQ_(s1,s2){
if(typeof s1 === 'string'){
return cljs.core._EQ_.call(null,cuerdas.core.locale_lower.call(null,s1),cuerdas.core.locale_lower.call(null,s2));
} else {
return null;
}
});
/**
 * Checks if a string is empty or contains only whitespace.
 */
cuerdas.core.blank_QMARK_ = (function cuerdas$core$blank_QMARK_(s){
if(typeof s === 'string'){
return ((cljs.core.count.call(null,s) === (0))) || (cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,cuerdas.regexp.enhace.call(null,/^[\s\p{Z}]+$/),s)));
} else {
return null;
}
});
/**
 * Checks if a string contains only alpha characters.
 */
cuerdas.core.alpha_QMARK_ = (function cuerdas$core$alpha_QMARK_(s){
if(typeof s === 'string'){
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,/^[a-zA-Z]+$/,s));
} else {
return null;
}
});
/**
 * Checks if a string contains only digit characters.
 */
cuerdas.core.digits_QMARK_ = (function cuerdas$core$digits_QMARK_(s){
if(typeof s === 'string'){
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,/^[0-9]+$/,s));
} else {
return null;
}
});
/**
 * Checks if a string contains only alphanumeric characters.
 */
cuerdas.core.alnum_QMARK_ = (function cuerdas$core$alnum_QMARK_(s){
if(typeof s === 'string'){
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,/^[a-zA-Z0-9]+$/,s));
} else {
return null;
}
});
/**
 * Checks if a string contains only the word characters.
 *   This function will use all the unicode range.
 */
cuerdas.core.word_QMARK_ = (function cuerdas$core$word_QMARK_(s){
if(typeof s === 'string'){
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,cuerdas.regexp.enhace.call(null,/^[\p{N}\p{L}_-]+$/),s));
} else {
return null;
}
});
/**
 * Checks if string contains only letters.
 *   This function will use all the unicode range.
 */
cuerdas.core.letters_QMARK_ = (function cuerdas$core$letters_QMARK_(s){
if(typeof s === 'string'){
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,cuerdas.regexp.enhace.call(null,/^\p{L}+$/),s));
} else {
return null;
}
});
/**
 * Check if a string contains only numeric values.
 */
cuerdas.core.numeric_QMARK_ = (function cuerdas$core$numeric_QMARK_(s){
if(typeof s === 'string'){
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,/^[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$/,s));
} else {
return null;
}
});
/**
 * Removes whitespace or specified characters
 *   from both ends of string.
 */
cuerdas.core.trim = (function cuerdas$core$trim(var_args){
var args62865 = [];
var len__49364__auto___62868 = arguments.length;
var i__49365__auto___62869 = (0);
while(true){
if((i__49365__auto___62869 < len__49364__auto___62868)){
args62865.push((arguments[i__49365__auto___62869]));

var G__62870 = (i__49365__auto___62869 + (1));
i__49365__auto___62869 = G__62870;
continue;
} else {
}
break;
}

var G__62867 = args62865.length;
switch (G__62867) {
case 1:
return cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.trim.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62865.length)].join('')));

}
});

cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.trim.call(null,s,"\n\t\f\r ");
});

cuerdas.core.trim.cljs$core$IFn$_invoke$arity$2 = (function (s,chs){
if(typeof s === 'string'){
var rxstr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.regexp.escape.call(null,chs)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
var rxstr__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("^"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rxstr),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+|"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rxstr),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+$")].join('');
var rx = cljs.core.re_pattern.call(null,rxstr__$1);
return cuerdas.core.replace.call(null,s,rx,"");
} else {
return null;
}
});

cuerdas.core.trim.cljs$lang$maxFixedArity = 2;

/**
 * Removes whitespace or specified characters
 *   from right side of string.
 */
cuerdas.core.rtrim = (function cuerdas$core$rtrim(var_args){
var args62872 = [];
var len__49364__auto___62875 = arguments.length;
var i__49365__auto___62876 = (0);
while(true){
if((i__49365__auto___62876 < len__49364__auto___62875)){
args62872.push((arguments[i__49365__auto___62876]));

var G__62877 = (i__49365__auto___62876 + (1));
i__49365__auto___62876 = G__62877;
continue;
} else {
}
break;
}

var G__62874 = args62872.length;
switch (G__62874) {
case 1:
return cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62872.length)].join('')));

}
});

cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.rtrim.call(null,s,"\n\t\f\r ");
});

cuerdas.core.rtrim.cljs$core$IFn$_invoke$arity$2 = (function (s,chs){
if(typeof s === 'string'){
var rxstr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.regexp.escape.call(null,chs)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
var rxstr__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(rxstr),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+$")].join('');
var rx = cljs.core.re_pattern.call(null,rxstr__$1);
return cuerdas.core.replace.call(null,s,rx,"");
} else {
return null;
}
});

cuerdas.core.rtrim.cljs$lang$maxFixedArity = 2;

/**
 * Removes whitespace or specified characters
 *   from left side of string.
 */
cuerdas.core.ltrim = (function cuerdas$core$ltrim(var_args){
var args62879 = [];
var len__49364__auto___62882 = arguments.length;
var i__49365__auto___62883 = (0);
while(true){
if((i__49365__auto___62883 < len__49364__auto___62882)){
args62879.push((arguments[i__49365__auto___62883]));

var G__62884 = (i__49365__auto___62883 + (1));
i__49365__auto___62883 = G__62884;
continue;
} else {
}
break;
}

var G__62881 = args62879.length;
switch (G__62881) {
case 1:
return cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62879.length)].join('')));

}
});

cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.ltrim.call(null,s,"\b\t\f\r ");
});

cuerdas.core.ltrim.cljs$core$IFn$_invoke$arity$2 = (function (s,chs){
if(typeof s === 'string'){
var rxstr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.regexp.escape.call(null,chs)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
var rxstr__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("^"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rxstr),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+")].join('');
var rx = cljs.core.re_pattern.call(null,rxstr__$1);
return cuerdas.core.replace.call(null,s,rx,"");
} else {
return null;
}
});

cuerdas.core.ltrim.cljs$lang$maxFixedArity = 2;

/**
 * Trim and replace multiple spaces with
 *   a single space.
 */
cuerdas.core.clean = (function cuerdas$core$clean(s){
return cuerdas.core.replace.call(null,cuerdas.core.trim.call(null,s),cuerdas.regexp.enhace.call(null,/[\s\p{Z}]+/)," ");
});
cuerdas.core.strip = cuerdas.core.trim;
cuerdas.core.rstrip = cuerdas.core.rtrim;
cuerdas.core.lstrip = cuerdas.core.ltrim;
/**
 * Strip prefix in more efficient way.
 */
cuerdas.core.strip_prefix = (function cuerdas$core$strip_prefix(s,prefix){
if(cljs.core.truth_(cuerdas.core.starts_with_QMARK_.call(null,s,prefix))){
return cuerdas.core.slice.call(null,s,cljs.core.count.call(null,prefix.toString()),cljs.core.count.call(null,s));
} else {
return s;
}
});
/**
 * Strip suffix in more efficient way.
 */
cuerdas.core.strip_suffix = (function cuerdas$core$strip_suffix(s,suffix){
if(cljs.core.truth_(cuerdas.core.ends_with_QMARK_.call(null,s,suffix))){
return cuerdas.core.slice.call(null,s,(0),(cljs.core.count.call(null,s) - cljs.core.count.call(null,suffix.toString())));
} else {
return s;
}
});
/**
 * Repeats string n times.
 */
cuerdas.core.repeat = (function cuerdas$core$repeat(var_args){
var args62886 = [];
var len__49364__auto___62889 = arguments.length;
var i__49365__auto___62890 = (0);
while(true){
if((i__49365__auto___62890 < len__49364__auto___62889)){
args62886.push((arguments[i__49365__auto___62890]));

var G__62891 = (i__49365__auto___62890 + (1));
i__49365__auto___62890 = G__62891;
continue;
} else {
}
break;
}

var G__62888 = args62886.length;
switch (G__62888) {
case 1:
return cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62886.length)].join('')));

}
});

cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.repeat.call(null,s,(1));
});

cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2 = (function (s,n){
if(typeof s === 'string'){
return goog.string.repeat(s,n);
} else {
return null;
}
});

cuerdas.core.repeat.cljs$lang$maxFixedArity = 2;

cuerdas.core.replace_all = (function cuerdas$core$replace_all(s,re,replacement){
var flags = re.flags;
var flags__$1 = (cljs.core.truth_(cuerdas.core.includes_QMARK_.call(null,flags,"g"))?flags:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(flags),cljs.core.str.cljs$core$IFn$_invoke$arity$1("g")].join(''));
var rx = (new RegExp(re.source,flags__$1));
return s.replace(rx,replacement);
});
cuerdas.core.replace_STAR_ = (function cuerdas$core$replace_STAR_(s,match,replacement){
if(typeof match === 'string'){
return clojure.string.replace.call(null,s,match,replacement);
} else {
if(cljs.core.truth_(cuerdas.regexp.regexp_QMARK_.call(null,match))){
if(typeof replacement === 'string'){
return cuerdas.core.replace_all.call(null,s,match,replacement);
} else {
return cuerdas.core.replace_all.call(null,s,match,clojure.string.replace_with.call(null,replacement));
}
} else {
return null;
}
}
});
/**
 * Replaces all instance of match with replacement in s.
 * 
 *   The replacement is literal (i.e. none of its characters are treated
 *   specially) for all cases above except pattern / string.
 * 
 *   In match is pattern instance, replacement can contain $1, $2, etc.
 *   will be substituted with string that matcher the corresponding
 *   parenthesized group in pattern.
 * 
 *   If you wish your replacement string to be used literary,
 *   use `(cuerdas.regexp/escape replacement)`.
 * 
 *   Example:
 *  (replace "Almost Pig Latin" #"\b(\w)(\w+)\b" "$2$1ay")
 *  ;; => "lmostAay igPay atinLay"
 *   
 */
cuerdas.core.replace = (function cuerdas$core$replace(s,match,replacement){
if(typeof s === 'string'){
return cuerdas.core.replace_STAR_.call(null,s,match,replacement);
} else {
return null;
}
});
/**
 * Replaces first instance of match with replacement in s.
 */
cuerdas.core.replace_first = (function cuerdas$core$replace_first(s,match,replacement){
if(typeof s === 'string'){
return clojure.string.replace_first.call(null,s,match,replacement);
} else {
return null;
}
});
/**
 * Truncates a string to a certain length and adds '...'
 *   if necessary.
 */
cuerdas.core.prune = (function cuerdas$core$prune(var_args){
var args62893 = [];
var len__49364__auto___62896 = arguments.length;
var i__49365__auto___62897 = (0);
while(true){
if((i__49365__auto___62897 < len__49364__auto___62896)){
args62893.push((arguments[i__49365__auto___62897]));

var G__62898 = (i__49365__auto___62897 + (1));
i__49365__auto___62897 = G__62898;
continue;
} else {
}
break;
}

var G__62895 = args62893.length;
switch (G__62895) {
case 2:
return cuerdas.core.prune.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.prune.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62893.length)].join('')));

}
});

cuerdas.core.prune.cljs$core$IFn$_invoke$arity$2 = (function (s,num){
return cuerdas.core.prune.call(null,s,num,"...");
});

cuerdas.core.prune.cljs$core$IFn$_invoke$arity$3 = (function (s,num,subs){
if((cljs.core.count.call(null,s) <= num)){
return s;
} else {
var tmpl = (function (c){
if(cljs.core.not_EQ_.call(null,cuerdas.core.upper.call(null,c),cuerdas.core.lower.call(null,c))){
return "A";
} else {
return " ";
}
});
var template = cuerdas.core.replace.call(null,cuerdas.core.slice.call(null,s,(0),(num + (1))),/.(?=\W*\w*$)/,tmpl);
var tmp = cuerdas.core.slice.call(null,template,(cljs.core.count.call(null,template) - (2)));
var template__$1 = (cljs.core.truth_(tmp.match(/\w\w/))?cuerdas.core.replace_first.call(null,template,/\s*\S+$/,""):cuerdas.core.rtrim.call(null,cuerdas.core.slice.call(null,template,(0),(cljs.core.count.call(null,template) - (1)))));
if((cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(template__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(subs)].join('')) > cljs.core.count.call(null,s))){
return s;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.slice.call(null,s,(0),cljs.core.count.call(null,template__$1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(subs)].join('');
}
}
});

cuerdas.core.prune.cljs$lang$maxFixedArity = 3;

/**
 * Takes a string and replaces newlines with a space.
 *   Multiple lines are replaced with a single space.
 */
cuerdas.core.strip_newlines = (function cuerdas$core$strip_newlines(s){
return cuerdas.core.replace.call(null,s,/(\r\n|\r|\n)+/," ");
});
/**
 * Splits a string on a separator a limited
 *   number of times. The separator can be a string,
 *   character or Pattern (clj) / RegExp (cljs) instance.
 */
cuerdas.core.split = (function cuerdas$core$split(var_args){
var args62900 = [];
var len__49364__auto___62903 = arguments.length;
var i__49365__auto___62904 = (0);
while(true){
if((i__49365__auto___62904 < len__49364__auto___62903)){
args62900.push((arguments[i__49365__auto___62904]));

var G__62905 = (i__49365__auto___62904 + (1));
i__49365__auto___62904 = G__62905;
continue;
} else {
}
break;
}

var G__62902 = args62900.length;
switch (G__62902) {
case 1:
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62900.length)].join('')));

}
});

cuerdas.core.split.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.split.call(null,s,/\s+/,null);
});

cuerdas.core.split.cljs$core$IFn$_invoke$arity$2 = (function (s,sep){
if((s == null)){
return s;
} else {
if(cljs.core.truth_(cuerdas.regexp.regexp_QMARK_.call(null,sep))){
return clojure.string.split.call(null,s,sep);
} else {
if(typeof sep === 'string'){
return clojure.string.split.call(null,s,cljs.core.re_pattern.call(null,cuerdas.regexp.escape.call(null,sep)));
} else {
if(cljs.core.char_QMARK_.call(null,sep)){
return clojure.string.split.call(null,s,cljs.core.re_pattern.call(null,cuerdas.regexp.escape.call(null,sep.toString())));
} else {
throw cljs.core.ex_info.call(null,"Invalid arguments",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sep","sep",1970430530),sep], null));

}
}
}
}
});

cuerdas.core.split.cljs$core$IFn$_invoke$arity$3 = (function (s,sep,num){
if((s == null)){
return s;
} else {
if(cljs.core.truth_(cuerdas.regexp.regexp_QMARK_.call(null,sep))){
return clojure.string.split.call(null,s,sep,num);
} else {
if(typeof sep === 'string'){
return clojure.string.split.call(null,s,cljs.core.re_pattern.call(null,cuerdas.regexp.escape.call(null,sep)),num);
} else {
if(cljs.core.char_QMARK_.call(null,sep)){
return clojure.string.split.call(null,s,cljs.core.re_pattern.call(null,cuerdas.regexp.escape.call(null,sep.toString())),num);
} else {
throw cljs.core.ex_info.call(null,"Invalid arguments",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sep","sep",1970430530),sep], null));

}
}
}
}
});

cuerdas.core.split.cljs$lang$maxFixedArity = 3;

/**
 * Return string reversed.
 */
cuerdas.core.reverse = (function cuerdas$core$reverse(s){
if(typeof s === 'string'){
return clojure.string.reverse.call(null,s);
} else {
return null;
}
});
/**
 * Split a string in a seq of chars.
 */
cuerdas.core.chars = (function cuerdas$core$chars(s){
if(typeof s === 'string'){
return cljs.core.js__GT_clj.call(null,s.split(""));
} else {
return null;
}
});
/**
 * Return a list of the lines in the string.
 */
cuerdas.core.lines = (function cuerdas$core$lines(s){
return cuerdas.core.split.call(null,s,/\n|\r\n/);
});
/**
 * Returns a new string joining a list of strings with a newline char (\n).
 */
cuerdas.core.unlines = (function cuerdas$core$unlines(s){
if(cljs.core.sequential_QMARK_.call(null,s)){
return clojure.string.join.call(null,"\n",s);
} else {
return null;
}
});
/**
 * Returns a vector of the words in the string.
 */
cuerdas.core.words = (function cuerdas$core$words(var_args){
var args62907 = [];
var len__49364__auto___62910 = arguments.length;
var i__49365__auto___62911 = (0);
while(true){
if((i__49365__auto___62911 < len__49364__auto___62910)){
args62907.push((arguments[i__49365__auto___62911]));

var G__62912 = (i__49365__auto___62911 + (1));
i__49365__auto___62911 = G__62912;
continue;
} else {
}
break;
}

var G__62909 = args62907.length;
switch (G__62909) {
case 1:
return cuerdas.core.words.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.words.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62907.length)].join('')));

}
});

cuerdas.core.words.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.words.call(null,s,cuerdas.regexp.enhace.call(null,/[\p{N}\p{L}_-]+/));
});

cuerdas.core.words.cljs$core$IFn$_invoke$arity$2 = (function (s,re){
if(typeof s === 'string'){
return cljs.core.vec.call(null,cljs.core.re_seq.call(null,re,s));
} else {
return null;
}
});

cuerdas.core.words.cljs$lang$maxFixedArity = 2;

cuerdas.core.interpolate_format = (function cuerdas$core$interpolate_format(s,params){
var on_match = (function cuerdas$core$interpolate_format_$_on_match(match){
var val = cljs.reader.read_string.call(null,((cljs.core._EQ_.call(null,cljs.core.subs.call(null,match,(0),(1)),"$"))?cljs.core.subs.call(null,match,(1)):cuerdas.core.slice.call(null,match,(2),(-2))));
var val__$1 = (((val instanceof cljs.core.Symbol))?cuerdas.core.keyword_STAR_.call(null,val):val);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,params,val__$1,""))].join('');
});
var $ = /(?:%\([\d\w\:\_\-]+\)s|\$[\w\d\:\_\-]+)/;
return cuerdas.core.replace.call(null,s,$,on_match);
});
cuerdas.core.indexed_format = (function cuerdas$core$indexed_format(s,params){
var params__$1 = cljs.core.clj__GT_js.call(null,(function (){var or__48251__auto__ = params;
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var rx = (new RegExp("%s","g"));
return cuerdas.core.replace.call(null,s,rx,((function (params__$1,rx){
return (function (_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((cljs.core.count.call(null,params__$1) === (0)))?"%s":params__$1.shift()))].join('');
});})(params__$1,rx))
);
});
/**
 * Simple string interpolation.
 */
cuerdas.core.format = (function cuerdas$core$format(var_args){
var args__49371__auto__ = [];
var len__49364__auto___62916 = arguments.length;
var i__49365__auto___62917 = (0);
while(true){
if((i__49365__auto___62917 < len__49364__auto___62916)){
args__49371__auto__.push((arguments[i__49365__auto___62917]));

var G__62918 = (i__49365__auto___62917 + (1));
i__49365__auto___62917 = G__62918;
continue;
} else {
}
break;
}

var argseq__49372__auto__ = ((((1) < args__49371__auto__.length))?(new cljs.core.IndexedSeq(args__49371__auto__.slice((1)),(0),null)):null);
return cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49372__auto__);
});

cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (s,more){
if(typeof s === 'string'){
if((cljs.core._EQ_.call(null,cljs.core.count.call(null,more),(1))) && (cljs.core.associative_QMARK_.call(null,cljs.core.first.call(null,more)))){
return cuerdas.core.interpolate_format.call(null,s,cljs.core.first.call(null,more));
} else {
return cuerdas.core.indexed_format.call(null,s,more);
}
} else {
return null;
}
});

cuerdas.core.format.cljs$lang$maxFixedArity = (1);

cuerdas.core.format.cljs$lang$applyTo = (function (seq62914){
var G__62915 = cljs.core.first.call(null,seq62914);
var seq62914__$1 = cljs.core.next.call(null,seq62914);
return cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic(G__62915,seq62914__$1);
});

/**
 * A shorter alias to `format` function.
 */
cuerdas.core.fmt = cuerdas.core.format;
/**
 * Joins strings together with given separator.
 */
cuerdas.core.join = (function cuerdas$core$join(var_args){
var args62919 = [];
var len__49364__auto___62922 = arguments.length;
var i__49365__auto___62923 = (0);
while(true){
if((i__49365__auto___62923 < len__49364__auto___62922)){
args62919.push((arguments[i__49365__auto___62923]));

var G__62924 = (i__49365__auto___62923 + (1));
i__49365__auto___62923 = G__62924;
continue;
} else {
}
break;
}

var G__62921 = args62919.length;
switch (G__62921) {
case 1:
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62919.length)].join('')));

}
});

cuerdas.core.join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});

cuerdas.core.join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});

cuerdas.core.join.cljs$lang$maxFixedArity = 2;

/**
 * Surround a string with another string or character.
 */
cuerdas.core.surround = (function cuerdas$core$surround(s,wrap){
if(typeof s === 'string'){
return cuerdas.core.join.call(null,"",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wrap,s,wrap], null));
} else {
return null;
}
});
/**
 * Unsurround a string surrounded by another string or character.
 */
cuerdas.core.unsurround = (function cuerdas$core$unsurround(s,surrounding){
var surrounding__$1 = surrounding.toString();
var length = cljs.core.count.call(null,surrounding__$1);
var fstr = cuerdas.core.slice.call(null,s,(0),length);
var slength = cljs.core.count.call(null,s);
var rightend = (slength - length);
var lstr = cuerdas.core.slice.call(null,s,rightend,slength);
if((cljs.core._EQ_.call(null,fstr,surrounding__$1)) && (cljs.core._EQ_.call(null,lstr,surrounding__$1))){
return cuerdas.core.slice.call(null,s,length,rightend);
} else {
return s;
}
});
/**
 * Quotes a string.
 */
cuerdas.core.quote = (function cuerdas$core$quote(var_args){
var args62926 = [];
var len__49364__auto___62929 = arguments.length;
var i__49365__auto___62930 = (0);
while(true){
if((i__49365__auto___62930 < len__49364__auto___62929)){
args62926.push((arguments[i__49365__auto___62930]));

var G__62931 = (i__49365__auto___62930 + (1));
i__49365__auto___62930 = G__62931;
continue;
} else {
}
break;
}

var G__62928 = args62926.length;
switch (G__62928) {
case 1:
return cuerdas.core.quote.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.quote.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62926.length)].join('')));

}
});

cuerdas.core.quote.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.surround.call(null,s,"\"");
});

cuerdas.core.quote.cljs$core$IFn$_invoke$arity$2 = (function (s,qchar){
return cuerdas.core.surround.call(null,s,qchar);
});

cuerdas.core.quote.cljs$lang$maxFixedArity = 2;

/**
 * Unquote a string.
 */
cuerdas.core.unquote = (function cuerdas$core$unquote(var_args){
var args62933 = [];
var len__49364__auto___62936 = arguments.length;
var i__49365__auto___62937 = (0);
while(true){
if((i__49365__auto___62937 < len__49364__auto___62936)){
args62933.push((arguments[i__49365__auto___62937]));

var G__62938 = (i__49365__auto___62937 + (1));
i__49365__auto___62937 = G__62938;
continue;
} else {
}
break;
}

var G__62935 = args62933.length;
switch (G__62935) {
case 1:
return cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62933.length)].join('')));

}
});

cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.unsurround.call(null,s,"\"");
});

cuerdas.core.unquote.cljs$core$IFn$_invoke$arity$2 = (function (s,qchar){
return cuerdas.core.unsurround.call(null,s,qchar);
});

cuerdas.core.unquote.cljs$lang$maxFixedArity = 2;

cuerdas.core.stylize_split = (function cuerdas$core$stylize_split(s){
var re1 = cuerdas.regexp.enhace.call(null,/(\p{Lu}+[\p{Ll}\u0027\p{Ps}\p{Pe}]*)/);
var re2 = cuerdas.regexp.enhace.call(null,/[^\p{L}\p{N}\u0027\p{Ps}\p{Pe}]+/);
var G__62941 = s;
var G__62941__$1 = (((G__62941 == null))?null:cljs.core.name.call(null,G__62941));
var G__62941__$2 = (((G__62941__$1 == null))?null:cuerdas.core.replace.call(null,G__62941__$1,re1,"-$1"));
var G__62941__$3 = (((G__62941__$2 == null))?null:cuerdas.core.split.call(null,G__62941__$2,re2));
if((G__62941__$3 == null)){
return null;
} else {
return cljs.core.seq.call(null,G__62941__$3);
}
});
cuerdas.core.stylize_join = (function cuerdas$core$stylize_join(var_args){
var args62942 = [];
var len__49364__auto___62949 = arguments.length;
var i__49365__auto___62950 = (0);
while(true){
if((i__49365__auto___62950 < len__49364__auto___62949)){
args62942.push((arguments[i__49365__auto___62950]));

var G__62951 = (i__49365__auto___62950 + (1));
i__49365__auto___62950 = G__62951;
continue;
} else {
}
break;
}

var G__62944 = args62942.length;
switch (G__62944) {
case 3:
return cuerdas.core.stylize_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cuerdas.core.stylize_join.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62942.length)].join('')));

}
});

cuerdas.core.stylize_join.cljs$core$IFn$_invoke$arity$3 = (function (coll,every_fn,join_with){
if(cljs.core.seq.call(null,coll)){
return cuerdas.core.join.call(null,join_with,cljs.core.map.call(null,every_fn,coll));
} else {
return null;
}
});

cuerdas.core.stylize_join.cljs$core$IFn$_invoke$arity$4 = (function (p__62945,first_fn,rest_fn,join_with){
var vec__62946 = p__62945;
var seq__62947 = cljs.core.seq.call(null,vec__62946);
var first__62948 = cljs.core.first.call(null,seq__62947);
var seq__62947__$1 = cljs.core.next.call(null,seq__62947);
var fst = first__62948;
var rst = seq__62947__$1;
if(typeof fst === 'string'){
return cuerdas.core.join.call(null,join_with,cljs.core.cons.call(null,first_fn.call(null,fst),cljs.core.map.call(null,rest_fn,rst)));
} else {
return null;
}
});

cuerdas.core.stylize_join.cljs$lang$maxFixedArity = 4;

cuerdas.core.stylize = (function cuerdas$core$stylize(var_args){
var args62954 = [];
var len__49364__auto___62958 = arguments.length;
var i__49365__auto___62959 = (0);
while(true){
if((i__49365__auto___62959 < len__49364__auto___62958)){
args62954.push((arguments[i__49365__auto___62959]));

var G__62960 = (i__49365__auto___62959 + (1));
i__49365__auto___62959 = G__62960;
continue;
} else {
}
break;
}

var G__62956 = args62954.length;
switch (G__62956) {
case 3:
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62954.length)].join('')));

}
});

cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$3 = (function (s,every_fn,join_with){
return cuerdas.core.stylize.call(null,s,every_fn,every_fn,join_with);
});

cuerdas.core.stylize.cljs$core$IFn$_invoke$arity$4 = (function (s,first_fn,rest_fn,join_with){
var remove_empty = (function (p1__62953_SHARP_){
return cljs.core.seq.call(null,cljs.core.remove.call(null,cuerdas.core.empty_QMARK_,p1__62953_SHARP_));
});
var G__62957 = cuerdas.core.stylize_split.call(null,s);
var G__62957__$1 = (((G__62957 == null))?null:remove_empty.call(null,G__62957));
if((G__62957__$1 == null)){
return null;
} else {
return cuerdas.core.stylize_join.call(null,G__62957__$1,first_fn,rest_fn,join_with);
}
});

cuerdas.core.stylize.cljs$lang$maxFixedArity = 4;

/**
 * Uppercases the first character of a string or keyword
 */
cuerdas.core.capital = (function cuerdas$core$capital(s){
if(cljs.core.truth_((function (){var and__48239__auto__ = typeof s === 'string';
if(and__48239__auto__){
return cljs.core.not_empty.call(null,s);
} else {
return and__48239__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.upper.call(null,cljs.core.subs.call(null,s,(0),(1)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(1),cljs.core.count.call(null,s)))].join('');
} else {
return null;
}
});
/**
 * Output will be: lowerUpperUpperNoSpaces
 *   accepts strings and keywords
 */
cuerdas.core.camel = (function cuerdas$core$camel(s){
return cuerdas.core.stylize.call(null,s,cuerdas.core.lower,cuerdas.core.capital,"");
});
/**
 * Output will be: lower_cased_and_underscore_separated
 *   accepts strings and keywords
 */
cuerdas.core.snake = (function cuerdas$core$snake(s){
return cuerdas.core.stylize.call(null,s,cuerdas.core.lower,"_");
});
/**
 * Output will be: Space separated with the first letter capitalized.
 *   accepts strings and keywords
 */
cuerdas.core.phrase = (function cuerdas$core$phrase(s){
return cuerdas.core.stylize.call(null,s,cuerdas.core.capital,cuerdas.core.lower," ");
});
/**
 * Output will be: lower cased and space separated
 *   accepts strings and keywords
 */
cuerdas.core.human = (function cuerdas$core$human(s){
return cuerdas.core.stylize.call(null,s,cuerdas.core.lower," ");
});
/**
 * Output will be: Each Word Capitalized And Separated With Spaces
 *   accepts strings and keywords
 */
cuerdas.core.title = (function cuerdas$core$title(s){
return cuerdas.core.stylize.call(null,s,cuerdas.core.capital," ");
});
/**
 * Output will be: CapitalizedAndTouchingTheNext
 *   accepts strings and keywords
 */
cuerdas.core.pascal = (function cuerdas$core$pascal(s){
return cuerdas.core.stylize.call(null,s,cuerdas.core.capital,"");
});
/**
 * Output will be: lower-cased-and-separated-with-dashes
 *   accepts strings and keywords
 */
cuerdas.core.kebab = (function cuerdas$core$kebab(s){
return cuerdas.core.stylize.call(null,s,cuerdas.core.lower,"-");
});
/**
 * Output will be either:
 *   (js-selector "-pascal-case-me") ;; => PascalCaseMe
 *   (js-selector "camel-case-me") ;; => camelCaseMe
 * 
 *   accepts keywords and strings, with any standard delimiter
 */
cuerdas.core.js_selector = (function cuerdas$core$js_selector(s){
var G__62963 = cuerdas.core.stylize_split.call(null,s);
if((G__62963 == null)){
return null;
} else {
return cuerdas.core.stylize_join.call(null,G__62963,cljs.core.identity,cuerdas.core.capital,"");
}
});
/**
 * Output will be either:
 *   (js-selector "LeadingDash") ;; => -leading-dash
 *   (js-selector "noLeadingDash") ;; => no-leading-dash
 * 
 *   accepts keywords and strings, with any standard delimiter
 */
cuerdas.core.css_selector = (function cuerdas$core$css_selector(s){
var G__62965 = cuerdas.core.stylize_split.call(null,s);
if((G__62965 == null)){
return null;
} else {
return cuerdas.core.stylize_join.call(null,G__62965,cuerdas.core.lower,"-");
}
});
cuerdas.core._PLUS_slug_tr_map_PLUS_ = cljs.core.zipmap.call(null,"\u0105\u00E0\u00E1\u00E4\u00E2\u00E3\u00E5\u00E6\u0103\u0107\u010D\u0109\u0119\u00E8\u00E9\u00EB\u00EA\u011D\u0125\u00EC\u00ED\u00EF\u00EE\u0135\u0142\u013E\u0144\u0148\u00F2\u00F3\u00F6\u0151\u00F4\u00F5\u00F0\u00F8\u015B\u0219\u0161\u015D\u0165\u021B\u016D\u00F9\u00FA\u00FC\u0171\u00FB\u00F1\u00FF\u00FD\u00E7\u017C\u017A\u017E","aaaaaaaaaccceeeeeghiiiijllnnoooooooossssttuuuuuunyyczzz");
/**
 * Transform text into a URL slug.
 */
cuerdas.core.slug = (function cuerdas$core$slug(s){
var G__62967 = cuerdas.core.lower.call(null,s);
var G__62967__$1 = (((G__62967 == null))?null:clojure.string.escape.call(null,G__62967,cuerdas.core._PLUS_slug_tr_map_PLUS_));
var G__62967__$2 = (((G__62967__$1 == null))?null:cuerdas.core.replace.call(null,G__62967__$1,/[^\w\s]+/,""));
if((G__62967__$2 == null)){
return null;
} else {
return cuerdas.core.replace.call(null,G__62967__$2,/\s+/,"-");
}
});
/**
 * Unicode friendly version of `slug` function.
 */
cuerdas.core.uslug = (function cuerdas$core$uslug(s){
var G__62969 = cuerdas.core.lower.call(null,s);
var G__62969__$1 = (((G__62969 == null))?null:cuerdas.core.replace.call(null,G__62969,cuerdas.regexp.enhace.call(null,/[^\p{L}\p{N}]+/)," "));
if((G__62969__$1 == null)){
return null;
} else {
return cuerdas.core.replace.call(null,G__62969__$1,cuerdas.regexp.enhace.call(null,/[\p{Z}\s]+/),"-");
}
});
/**
 * Safer version of clojure keyword, accepting a
 *   symbol for the namespace and kebab-casing the key
 */
cuerdas.core.keyword = (function cuerdas$core$keyword(var_args){
var args62970 = [];
var len__49364__auto___62973 = arguments.length;
var i__49365__auto___62974 = (0);
while(true){
if((i__49365__auto___62974 < len__49364__auto___62973)){
args62970.push((arguments[i__49365__auto___62974]));

var G__62975 = (i__49365__auto___62974 + (1));
i__49365__auto___62974 = G__62975;
continue;
} else {
}
break;
}

var G__62972 = args62970.length;
switch (G__62972) {
case 1:
return cuerdas.core.keyword.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.keyword.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args62970.length)].join('')));

}
});

cuerdas.core.keyword.cljs$core$IFn$_invoke$arity$1 = (function (k){
return cuerdas.core.keyword_STAR_.call(null,cuerdas.core.kebab.call(null,k));
});

cuerdas.core.keyword.cljs$core$IFn$_invoke$arity$2 = (function (n,k){
return cuerdas.core.keyword_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),cuerdas.core.kebab.call(null,k));
});

cuerdas.core.keyword.cljs$lang$maxFixedArity = 2;

/**
 * General purpose function for parse number like
 *   string to number. It works with both integers
 *   and floats.
 */
cuerdas.core.parse_number = (function cuerdas$core$parse_number(s){
if((s == null)){
return NaN;
} else {
if(cljs.core.truth_(cuerdas.core.numeric_QMARK_.call(null,s))){
return cljs.reader.read_string.call(null,s);
} else {
return NaN;
}
}
});
/**
 * Return the double value from string.
 */
cuerdas.core.parse_double = (function cuerdas$core$parse_double(s){
return parseFloat(s);
});
/**
 * Return the number value in integer form.
 */
cuerdas.core.parse_int = (function cuerdas$core$parse_int(s){
if(cljs.core.truth_((function (){var and__48239__auto__ = typeof s === 'string';
if(and__48239__auto__){
return cljs.core.re_matches.call(null,/-?\d+(\.\d+)?/,s);
} else {
return and__48239__auto__;
}
})())){
return parseInt(s,(10));
} else {
return NaN;
}
});
/**
 * Returns true if s can be found in coll.
 */
cuerdas.core.one_of_QMARK_ = (function cuerdas$core$one_of_QMARK_(coll,s){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,(function (p1__62977_SHARP_){
return cljs.core._EQ_.call(null,p1__62977_SHARP_,s);
}),coll));
});
/**
 * Returns true for 1/on/true/yes string values (case-insensitive),
 *   false otherwise.
 */
cuerdas.core.to_bool = (function cuerdas$core$to_bool(s){
return cuerdas.core.one_of_QMARK_.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","on","true","yes"], null),cuerdas.core.lower.call(null,s));
});
/**
 * Pads the str with characters until the total string
 *   length is equal to the passed length parameter. By
 *   default, pads on the left with the space char.
 */
cuerdas.core.pad = (function cuerdas$core$pad(var_args){
var args__49371__auto__ = [];
var len__49364__auto___62989 = arguments.length;
var i__49365__auto___62990 = (0);
while(true){
if((i__49365__auto___62990 < len__49364__auto___62989)){
args__49371__auto__.push((arguments[i__49365__auto___62990]));

var G__62991 = (i__49365__auto___62990 + (1));
i__49365__auto___62990 = G__62991;
continue;
} else {
}
break;
}

var argseq__49372__auto__ = ((((1) < args__49371__auto__.length))?(new cljs.core.IndexedSeq(args__49371__auto__.slice((1)),(0),null)):null);
return cuerdas.core.pad.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49372__auto__);
});

cuerdas.core.pad.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__62980){
var vec__62981 = p__62980;
var map__62984 = cljs.core.nth.call(null,vec__62981,(0),null);
var map__62984__$1 = ((((!((map__62984 == null)))?((((map__62984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62984.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62984):map__62984);
var length = cljs.core.get.call(null,map__62984__$1,new cljs.core.Keyword(null,"length","length",588987862),(0));
var padding = cljs.core.get.call(null,map__62984__$1,new cljs.core.Keyword(null,"padding","padding",1660304693)," ");
var type = cljs.core.get.call(null,map__62984__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"left","left",-399115937));
if(typeof s === 'string'){
var padding__$1 = cuerdas.core.slice.call(null,padding,(0),(1));
var padlen = (length - cljs.core.count.call(null,s));
var pred__62986 = cljs.core._EQ_;
var expr__62987 = type;
if(cljs.core.truth_(pred__62986.call(null,new cljs.core.Keyword(null,"right","right",-452581833),expr__62987))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.repeat.call(null,padding__$1,padlen))].join('');
} else {
if(cljs.core.truth_(pred__62986.call(null,new cljs.core.Keyword(null,"both","both",-393648840),expr__62987))){
var first = cuerdas.core.repeat.call(null,padding__$1,Math.ceil((padlen / (2))));
var second = cuerdas.core.repeat.call(null,padding__$1,Math.floor((padlen / (2))));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(first),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(second)].join('');
} else {
if(cljs.core.truth_(pred__62986.call(null,new cljs.core.Keyword(null,"left","left",-399115937),expr__62987))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.repeat.call(null,padding__$1,padlen)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__62987)].join('')));
}
}
}
} else {
return null;
}
});

cuerdas.core.pad.cljs$lang$maxFixedArity = (1);

cuerdas.core.pad.cljs$lang$applyTo = (function (seq62978){
var G__62979 = cljs.core.first.call(null,seq62978);
var seq62978__$1 = cljs.core.next.call(null,seq62978);
return cuerdas.core.pad.cljs$core$IFn$_invoke$arity$variadic(G__62979,seq62978__$1);
});

/**
 * Converts all adjacent whitespace characters
 *   to a single space.
 */
cuerdas.core.collapse_whitespace = (function cuerdas$core$collapse_whitespace(s){
var G__62993 = s;
var G__62993__$1 = (((G__62993 == null))?null:cuerdas.core.replace.call(null,G__62993,cuerdas.regexp.enhace.call(null,/[\p{Z}\s]+/)," "));
if((G__62993__$1 == null)){
return null;
} else {
return cuerdas.core.replace.call(null,G__62993__$1,/^\s+|\s+$/,"");
}
});
cuerdas.core.escape_html = (function cuerdas$core$escape_html(s){

if(cljs.core.truth_(s)){
return cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,s,"&","&amp;"),"<","&lt;"),">","&gt;"),"\"","&quot;");
} else {
return null;
}
});
/**
 * Converts entity characters to HTML equivalents.
 */
cuerdas.core.unescape_html = (function cuerdas$core$unescape_html(s){
if(cljs.core.truth_(s)){
return cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,cuerdas.core.replace.call(null,s,"&amp;","&"),"&lt;","<"),"&gt;",">"),"&quot;","\"");
} else {
return null;
}
});
cuerdas.core.strip_tags_impl = (function cuerdas$core$strip_tags_impl(s,tags,mappings){
var kwdize = cljs.core.comp.call(null,cuerdas.core.keyword,cuerdas.core.lower,cljs.core.name);
var tags__$1 = (((tags == null))?tags:((typeof tags === 'string')?cljs.core.PersistentHashSet.createAsIfByAssoc([kwdize.call(null,tags)]):((cljs.core.sequential_QMARK_.call(null,tags))?cljs.core.set.call(null,cljs.core.map.call(null,kwdize,tags)):null)));
var rx = cljs.core.re_pattern.call(null,"<\\/?([^<>]*)>");
return cuerdas.core.replace.call(null,s,rx,(((tags__$1 == null))?((function (kwdize,tags__$1,rx){
return (function (p__63002){
var vec__63003 = p__63002;
var match = cljs.core.nth.call(null,vec__63003,(0),null);
var tag = cljs.core.nth.call(null,vec__63003,(1),null);
var tag__$1 = kwdize.call(null,tag);
return cljs.core.get.call(null,mappings,tag__$1,"");
});})(kwdize,tags__$1,rx))
:((function (kwdize,tags__$1,rx){
return (function (p__63006){
var vec__63007 = p__63006;
var match = cljs.core.nth.call(null,vec__63007,(0),null);
var tag = cljs.core.nth.call(null,vec__63007,(1),null);
var tag__$1 = kwdize.call(null,tag);
if(cljs.core.truth_(tags__$1.call(null,tag__$1))){
return cljs.core.get.call(null,mappings,tag__$1,"");
} else {
return match;
}
});})(kwdize,tags__$1,rx))
));
});
/**
 * Remove html tags from string.
 */
cuerdas.core.strip_tags = (function cuerdas$core$strip_tags(var_args){
var args63010 = [];
var len__49364__auto___63013 = arguments.length;
var i__49365__auto___63014 = (0);
while(true){
if((i__49365__auto___63014 < len__49364__auto___63013)){
args63010.push((arguments[i__49365__auto___63014]));

var G__63015 = (i__49365__auto___63014 + (1));
i__49365__auto___63014 = G__63015;
continue;
} else {
}
break;
}

var G__63012 = args63010.length;
switch (G__63012) {
case 1:
return cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args63010.length)].join('')));

}
});

cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cuerdas.core.strip_tags_impl.call(null,s,null,cljs.core.PersistentArrayMap.EMPTY);
});

cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$2 = (function (s,tags){
if(cljs.core.map_QMARK_.call(null,tags)){
return cuerdas.core.strip_tags_impl.call(null,s,null,tags);
} else {
return cuerdas.core.strip_tags_impl.call(null,s,tags,cljs.core.PersistentArrayMap.EMPTY);
}
});

cuerdas.core.strip_tags.cljs$core$IFn$_invoke$arity$3 = (function (s,tags,mapping){
return cuerdas.core.strip_tags_impl.call(null,s,tags,mapping);
});

cuerdas.core.strip_tags.cljs$lang$maxFixedArity = 3;

/**
 * Find string that is nested in between two strings. Return first match
 */
cuerdas.core.substr_between = (function cuerdas$core$substr_between(s,prefix,suffix){
if((s == null)){
return null;
} else {
if((prefix == null)){
return null;
} else {
if((suffix == null)){
return null;
} else {
if(cljs.core.not.call(null,cuerdas.core.includes_QMARK_.call(null,s,prefix))){
return null;
} else {
if(cljs.core.not.call(null,cuerdas.core.includes_QMARK_.call(null,s,suffix))){
return null;
} else {
var G__63018 = s;
var G__63018__$1 = (((G__63018 == null))?null:cuerdas.core.split.call(null,G__63018,prefix));
var G__63018__$2 = (((G__63018__$1 == null))?null:cljs.core.second.call(null,G__63018__$1));
var G__63018__$3 = (((G__63018__$2 == null))?null:cuerdas.core.split.call(null,G__63018__$2,suffix));
if((G__63018__$3 == null)){
return null;
} else {
return cljs.core.first.call(null,G__63018__$3);
}

}
}
}
}
}
});
/**
 * Unindent multiline text.
 *   Uses either a supplied regex or the shortest
 *   beginning-of-line to non-whitespace distance
 */
cuerdas.core._LT__LT__ = (function cuerdas$core$_LT__LT__(var_args){
var args63021 = [];
var len__49364__auto___63024 = arguments.length;
var i__49365__auto___63025 = (0);
while(true){
if((i__49365__auto___63025 < len__49364__auto___63024)){
args63021.push((arguments[i__49365__auto___63025]));

var G__63026 = (i__49365__auto___63025 + (1));
i__49365__auto___63025 = G__63026;
continue;
} else {
}
break;
}

var G__63023 = args63021.length;
switch (G__63023) {
case 1:
return cuerdas.core._LT__LT__.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cuerdas.core._LT__LT__.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args63021.length)].join('')));

}
});

cuerdas.core._LT__LT__.cljs$core$IFn$_invoke$arity$1 = (function (s){
var all_indents = cljs.core.map.call(null,(function (p1__63019_SHARP_){
return cljs.core.count.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/^( +)/,p1__63019_SHARP_)));
}),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,cuerdas.core.lines.call(null,s))], null),cljs.core.remove.call(null,cuerdas.core.blank_QMARK_,cljs.core.rest.call(null,cuerdas.core.lines.call(null,s)))));
var min_indent = cljs.core.re_pattern.call(null,cuerdas.core.format.call(null,"^ {%s}",cljs.core.apply.call(null,cljs.core.min,all_indents)));
return cuerdas.core._LT__LT__.call(null,min_indent,s);
});

cuerdas.core._LT__LT__.cljs$core$IFn$_invoke$arity$2 = (function (r,s){
return cuerdas.core.unlines.call(null,cljs.core.map.call(null,(function (p1__63020_SHARP_){
return cuerdas.core.replace.call(null,p1__63020_SHARP_,r,"");
}),cuerdas.core.lines.call(null,s)));
});

cuerdas.core._LT__LT__.cljs$lang$maxFixedArity = 2;

cuerdas.core.slugify = cuerdas.core.slug;
cuerdas.core.dasherize = cuerdas.core.kebab;
cuerdas.core.underscore = cuerdas.core.snake;
cuerdas.core.underscored = cuerdas.core.snake;
cuerdas.core.classify = cuerdas.core.pascal;
cuerdas.core.humanize = cuerdas.core.human;
cuerdas.core.titleize = cuerdas.core.title;
cuerdas.core.capitalize = cuerdas.core.capital;
cuerdas.core.alpha_numeric_QMARK_ = cuerdas.core.alnum_QMARK_;
cuerdas.core.parse_long = cuerdas.core.parse_int;
cuerdas.core.parse_float = cuerdas.core.parse_double;
cuerdas.core.contains_QMARK_ = cuerdas.core.includes_QMARK_;
cuerdas.core.startswith_QMARK_ = cuerdas.core.starts_with_QMARK_;
cuerdas.core.endswith_QMARK_ = cuerdas.core.ends_with_QMARK_;

//# sourceMappingURL=core.js.map