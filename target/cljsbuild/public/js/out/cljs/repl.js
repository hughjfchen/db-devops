// Compiled by ClojureScript 1.9.542 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__53768){
var map__53793 = p__53768;
var map__53793__$1 = ((((!((map__53793 == null)))?((((map__53793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53793.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53793):map__53793);
var m = map__53793__$1;
var n = cljs.core.get.call(null,map__53793__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__53793__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__53795_53817 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53796_53818 = null;
var count__53797_53819 = (0);
var i__53798_53820 = (0);
while(true){
if((i__53798_53820 < count__53797_53819)){
var f_53821 = cljs.core._nth.call(null,chunk__53796_53818,i__53798_53820);
cljs.core.println.call(null,"  ",f_53821);

var G__53822 = seq__53795_53817;
var G__53823 = chunk__53796_53818;
var G__53824 = count__53797_53819;
var G__53825 = (i__53798_53820 + (1));
seq__53795_53817 = G__53822;
chunk__53796_53818 = G__53823;
count__53797_53819 = G__53824;
i__53798_53820 = G__53825;
continue;
} else {
var temp__4657__auto___53826 = cljs.core.seq.call(null,seq__53795_53817);
if(temp__4657__auto___53826){
var seq__53795_53827__$1 = temp__4657__auto___53826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53795_53827__$1)){
var c__49070__auto___53828 = cljs.core.chunk_first.call(null,seq__53795_53827__$1);
var G__53829 = cljs.core.chunk_rest.call(null,seq__53795_53827__$1);
var G__53830 = c__49070__auto___53828;
var G__53831 = cljs.core.count.call(null,c__49070__auto___53828);
var G__53832 = (0);
seq__53795_53817 = G__53829;
chunk__53796_53818 = G__53830;
count__53797_53819 = G__53831;
i__53798_53820 = G__53832;
continue;
} else {
var f_53833 = cljs.core.first.call(null,seq__53795_53827__$1);
cljs.core.println.call(null,"  ",f_53833);

var G__53834 = cljs.core.next.call(null,seq__53795_53827__$1);
var G__53835 = null;
var G__53836 = (0);
var G__53837 = (0);
seq__53795_53817 = G__53834;
chunk__53796_53818 = G__53835;
count__53797_53819 = G__53836;
i__53798_53820 = G__53837;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53838 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__48251__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_53838);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_53838)))?cljs.core.second.call(null,arglists_53838):arglists_53838));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__53799_53839 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53800_53840 = null;
var count__53801_53841 = (0);
var i__53802_53842 = (0);
while(true){
if((i__53802_53842 < count__53801_53841)){
var vec__53803_53843 = cljs.core._nth.call(null,chunk__53800_53840,i__53802_53842);
var name_53844 = cljs.core.nth.call(null,vec__53803_53843,(0),null);
var map__53806_53845 = cljs.core.nth.call(null,vec__53803_53843,(1),null);
var map__53806_53846__$1 = ((((!((map__53806_53845 == null)))?((((map__53806_53845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53806_53845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53806_53845):map__53806_53845);
var doc_53847 = cljs.core.get.call(null,map__53806_53846__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53848 = cljs.core.get.call(null,map__53806_53846__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_53844);

cljs.core.println.call(null," ",arglists_53848);

if(cljs.core.truth_(doc_53847)){
cljs.core.println.call(null," ",doc_53847);
} else {
}

var G__53849 = seq__53799_53839;
var G__53850 = chunk__53800_53840;
var G__53851 = count__53801_53841;
var G__53852 = (i__53802_53842 + (1));
seq__53799_53839 = G__53849;
chunk__53800_53840 = G__53850;
count__53801_53841 = G__53851;
i__53802_53842 = G__53852;
continue;
} else {
var temp__4657__auto___53853 = cljs.core.seq.call(null,seq__53799_53839);
if(temp__4657__auto___53853){
var seq__53799_53854__$1 = temp__4657__auto___53853;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53799_53854__$1)){
var c__49070__auto___53855 = cljs.core.chunk_first.call(null,seq__53799_53854__$1);
var G__53856 = cljs.core.chunk_rest.call(null,seq__53799_53854__$1);
var G__53857 = c__49070__auto___53855;
var G__53858 = cljs.core.count.call(null,c__49070__auto___53855);
var G__53859 = (0);
seq__53799_53839 = G__53856;
chunk__53800_53840 = G__53857;
count__53801_53841 = G__53858;
i__53802_53842 = G__53859;
continue;
} else {
var vec__53808_53860 = cljs.core.first.call(null,seq__53799_53854__$1);
var name_53861 = cljs.core.nth.call(null,vec__53808_53860,(0),null);
var map__53811_53862 = cljs.core.nth.call(null,vec__53808_53860,(1),null);
var map__53811_53863__$1 = ((((!((map__53811_53862 == null)))?((((map__53811_53862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53811_53862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53811_53862):map__53811_53862);
var doc_53864 = cljs.core.get.call(null,map__53811_53863__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53865 = cljs.core.get.call(null,map__53811_53863__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_53861);

cljs.core.println.call(null," ",arglists_53865);

if(cljs.core.truth_(doc_53864)){
cljs.core.println.call(null," ",doc_53864);
} else {
}

var G__53866 = cljs.core.next.call(null,seq__53799_53854__$1);
var G__53867 = null;
var G__53868 = (0);
var G__53869 = (0);
seq__53799_53839 = G__53866;
chunk__53800_53840 = G__53867;
count__53801_53841 = G__53868;
i__53802_53842 = G__53869;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__53813 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__53814 = null;
var count__53815 = (0);
var i__53816 = (0);
while(true){
if((i__53816 < count__53815)){
var role = cljs.core._nth.call(null,chunk__53814,i__53816);
var temp__4657__auto___53870__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___53870__$1)){
var spec_53871 = temp__4657__auto___53870__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_53871));
} else {
}

var G__53872 = seq__53813;
var G__53873 = chunk__53814;
var G__53874 = count__53815;
var G__53875 = (i__53816 + (1));
seq__53813 = G__53872;
chunk__53814 = G__53873;
count__53815 = G__53874;
i__53816 = G__53875;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__53813);
if(temp__4657__auto____$1){
var seq__53813__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53813__$1)){
var c__49070__auto__ = cljs.core.chunk_first.call(null,seq__53813__$1);
var G__53876 = cljs.core.chunk_rest.call(null,seq__53813__$1);
var G__53877 = c__49070__auto__;
var G__53878 = cljs.core.count.call(null,c__49070__auto__);
var G__53879 = (0);
seq__53813 = G__53876;
chunk__53814 = G__53877;
count__53815 = G__53878;
i__53816 = G__53879;
continue;
} else {
var role = cljs.core.first.call(null,seq__53813__$1);
var temp__4657__auto___53880__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___53880__$2)){
var spec_53881 = temp__4657__auto___53880__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_53881));
} else {
}

var G__53882 = cljs.core.next.call(null,seq__53813__$1);
var G__53883 = null;
var G__53884 = (0);
var G__53885 = (0);
seq__53813 = G__53882;
chunk__53814 = G__53883;
count__53815 = G__53884;
i__53816 = G__53885;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map