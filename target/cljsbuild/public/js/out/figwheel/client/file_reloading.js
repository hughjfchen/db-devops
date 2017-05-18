// Compiled by ClojureScript 1.9.542 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__48251__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__48251__auto__){
return or__48251__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__48251__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__51353_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__51353_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__51358 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__51359 = null;
var count__51360 = (0);
var i__51361 = (0);
while(true){
if((i__51361 < count__51360)){
var n = cljs.core._nth.call(null,chunk__51359,i__51361);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__51362 = seq__51358;
var G__51363 = chunk__51359;
var G__51364 = count__51360;
var G__51365 = (i__51361 + (1));
seq__51358 = G__51362;
chunk__51359 = G__51363;
count__51360 = G__51364;
i__51361 = G__51365;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51358);
if(temp__4657__auto__){
var seq__51358__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51358__$1)){
var c__49070__auto__ = cljs.core.chunk_first.call(null,seq__51358__$1);
var G__51366 = cljs.core.chunk_rest.call(null,seq__51358__$1);
var G__51367 = c__49070__auto__;
var G__51368 = cljs.core.count.call(null,c__49070__auto__);
var G__51369 = (0);
seq__51358 = G__51366;
chunk__51359 = G__51367;
count__51360 = G__51368;
i__51361 = G__51369;
continue;
} else {
var n = cljs.core.first.call(null,seq__51358__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__51370 = cljs.core.next.call(null,seq__51358__$1);
var G__51371 = null;
var G__51372 = (0);
var G__51373 = (0);
seq__51358 = G__51370;
chunk__51359 = G__51371;
count__51360 = G__51372;
i__51361 = G__51373;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__51424_51435 = cljs.core.seq.call(null,deps);
var chunk__51425_51436 = null;
var count__51426_51437 = (0);
var i__51427_51438 = (0);
while(true){
if((i__51427_51438 < count__51426_51437)){
var dep_51439 = cljs.core._nth.call(null,chunk__51425_51436,i__51427_51438);
topo_sort_helper_STAR_.call(null,dep_51439,(depth + (1)),state);

var G__51440 = seq__51424_51435;
var G__51441 = chunk__51425_51436;
var G__51442 = count__51426_51437;
var G__51443 = (i__51427_51438 + (1));
seq__51424_51435 = G__51440;
chunk__51425_51436 = G__51441;
count__51426_51437 = G__51442;
i__51427_51438 = G__51443;
continue;
} else {
var temp__4657__auto___51444 = cljs.core.seq.call(null,seq__51424_51435);
if(temp__4657__auto___51444){
var seq__51424_51445__$1 = temp__4657__auto___51444;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51424_51445__$1)){
var c__49070__auto___51446 = cljs.core.chunk_first.call(null,seq__51424_51445__$1);
var G__51447 = cljs.core.chunk_rest.call(null,seq__51424_51445__$1);
var G__51448 = c__49070__auto___51446;
var G__51449 = cljs.core.count.call(null,c__49070__auto___51446);
var G__51450 = (0);
seq__51424_51435 = G__51447;
chunk__51425_51436 = G__51448;
count__51426_51437 = G__51449;
i__51427_51438 = G__51450;
continue;
} else {
var dep_51451 = cljs.core.first.call(null,seq__51424_51445__$1);
topo_sort_helper_STAR_.call(null,dep_51451,(depth + (1)),state);

var G__51452 = cljs.core.next.call(null,seq__51424_51445__$1);
var G__51453 = null;
var G__51454 = (0);
var G__51455 = (0);
seq__51424_51435 = G__51452;
chunk__51425_51436 = G__51453;
count__51426_51437 = G__51454;
i__51427_51438 = G__51455;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__51428){
var vec__51432 = p__51428;
var seq__51433 = cljs.core.seq.call(null,vec__51432);
var first__51434 = cljs.core.first.call(null,seq__51433);
var seq__51433__$1 = cljs.core.next.call(null,seq__51433);
var x = first__51434;
var xs = seq__51433__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__51432,seq__51433,first__51434,seq__51433__$1,x,xs,get_deps__$1){
return (function (p1__51374_SHARP_){
return clojure.set.difference.call(null,p1__51374_SHARP_,x);
});})(vec__51432,seq__51433,first__51434,seq__51433__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__51468 = cljs.core.seq.call(null,provides);
var chunk__51469 = null;
var count__51470 = (0);
var i__51471 = (0);
while(true){
if((i__51471 < count__51470)){
var prov = cljs.core._nth.call(null,chunk__51469,i__51471);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51472_51480 = cljs.core.seq.call(null,requires);
var chunk__51473_51481 = null;
var count__51474_51482 = (0);
var i__51475_51483 = (0);
while(true){
if((i__51475_51483 < count__51474_51482)){
var req_51484 = cljs.core._nth.call(null,chunk__51473_51481,i__51475_51483);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51484,prov);

var G__51485 = seq__51472_51480;
var G__51486 = chunk__51473_51481;
var G__51487 = count__51474_51482;
var G__51488 = (i__51475_51483 + (1));
seq__51472_51480 = G__51485;
chunk__51473_51481 = G__51486;
count__51474_51482 = G__51487;
i__51475_51483 = G__51488;
continue;
} else {
var temp__4657__auto___51489 = cljs.core.seq.call(null,seq__51472_51480);
if(temp__4657__auto___51489){
var seq__51472_51490__$1 = temp__4657__auto___51489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51472_51490__$1)){
var c__49070__auto___51491 = cljs.core.chunk_first.call(null,seq__51472_51490__$1);
var G__51492 = cljs.core.chunk_rest.call(null,seq__51472_51490__$1);
var G__51493 = c__49070__auto___51491;
var G__51494 = cljs.core.count.call(null,c__49070__auto___51491);
var G__51495 = (0);
seq__51472_51480 = G__51492;
chunk__51473_51481 = G__51493;
count__51474_51482 = G__51494;
i__51475_51483 = G__51495;
continue;
} else {
var req_51496 = cljs.core.first.call(null,seq__51472_51490__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51496,prov);

var G__51497 = cljs.core.next.call(null,seq__51472_51490__$1);
var G__51498 = null;
var G__51499 = (0);
var G__51500 = (0);
seq__51472_51480 = G__51497;
chunk__51473_51481 = G__51498;
count__51474_51482 = G__51499;
i__51475_51483 = G__51500;
continue;
}
} else {
}
}
break;
}

var G__51501 = seq__51468;
var G__51502 = chunk__51469;
var G__51503 = count__51470;
var G__51504 = (i__51471 + (1));
seq__51468 = G__51501;
chunk__51469 = G__51502;
count__51470 = G__51503;
i__51471 = G__51504;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51468);
if(temp__4657__auto__){
var seq__51468__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51468__$1)){
var c__49070__auto__ = cljs.core.chunk_first.call(null,seq__51468__$1);
var G__51505 = cljs.core.chunk_rest.call(null,seq__51468__$1);
var G__51506 = c__49070__auto__;
var G__51507 = cljs.core.count.call(null,c__49070__auto__);
var G__51508 = (0);
seq__51468 = G__51505;
chunk__51469 = G__51506;
count__51470 = G__51507;
i__51471 = G__51508;
continue;
} else {
var prov = cljs.core.first.call(null,seq__51468__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51476_51509 = cljs.core.seq.call(null,requires);
var chunk__51477_51510 = null;
var count__51478_51511 = (0);
var i__51479_51512 = (0);
while(true){
if((i__51479_51512 < count__51478_51511)){
var req_51513 = cljs.core._nth.call(null,chunk__51477_51510,i__51479_51512);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51513,prov);

var G__51514 = seq__51476_51509;
var G__51515 = chunk__51477_51510;
var G__51516 = count__51478_51511;
var G__51517 = (i__51479_51512 + (1));
seq__51476_51509 = G__51514;
chunk__51477_51510 = G__51515;
count__51478_51511 = G__51516;
i__51479_51512 = G__51517;
continue;
} else {
var temp__4657__auto___51518__$1 = cljs.core.seq.call(null,seq__51476_51509);
if(temp__4657__auto___51518__$1){
var seq__51476_51519__$1 = temp__4657__auto___51518__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51476_51519__$1)){
var c__49070__auto___51520 = cljs.core.chunk_first.call(null,seq__51476_51519__$1);
var G__51521 = cljs.core.chunk_rest.call(null,seq__51476_51519__$1);
var G__51522 = c__49070__auto___51520;
var G__51523 = cljs.core.count.call(null,c__49070__auto___51520);
var G__51524 = (0);
seq__51476_51509 = G__51521;
chunk__51477_51510 = G__51522;
count__51478_51511 = G__51523;
i__51479_51512 = G__51524;
continue;
} else {
var req_51525 = cljs.core.first.call(null,seq__51476_51519__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51525,prov);

var G__51526 = cljs.core.next.call(null,seq__51476_51519__$1);
var G__51527 = null;
var G__51528 = (0);
var G__51529 = (0);
seq__51476_51509 = G__51526;
chunk__51477_51510 = G__51527;
count__51478_51511 = G__51528;
i__51479_51512 = G__51529;
continue;
}
} else {
}
}
break;
}

var G__51530 = cljs.core.next.call(null,seq__51468__$1);
var G__51531 = null;
var G__51532 = (0);
var G__51533 = (0);
seq__51468 = G__51530;
chunk__51469 = G__51531;
count__51470 = G__51532;
i__51471 = G__51533;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__51538_51542 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__51539_51543 = null;
var count__51540_51544 = (0);
var i__51541_51545 = (0);
while(true){
if((i__51541_51545 < count__51540_51544)){
var ns_51546 = cljs.core._nth.call(null,chunk__51539_51543,i__51541_51545);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51546);

var G__51547 = seq__51538_51542;
var G__51548 = chunk__51539_51543;
var G__51549 = count__51540_51544;
var G__51550 = (i__51541_51545 + (1));
seq__51538_51542 = G__51547;
chunk__51539_51543 = G__51548;
count__51540_51544 = G__51549;
i__51541_51545 = G__51550;
continue;
} else {
var temp__4657__auto___51551 = cljs.core.seq.call(null,seq__51538_51542);
if(temp__4657__auto___51551){
var seq__51538_51552__$1 = temp__4657__auto___51551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51538_51552__$1)){
var c__49070__auto___51553 = cljs.core.chunk_first.call(null,seq__51538_51552__$1);
var G__51554 = cljs.core.chunk_rest.call(null,seq__51538_51552__$1);
var G__51555 = c__49070__auto___51553;
var G__51556 = cljs.core.count.call(null,c__49070__auto___51553);
var G__51557 = (0);
seq__51538_51542 = G__51554;
chunk__51539_51543 = G__51555;
count__51540_51544 = G__51556;
i__51541_51545 = G__51557;
continue;
} else {
var ns_51558 = cljs.core.first.call(null,seq__51538_51552__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51558);

var G__51559 = cljs.core.next.call(null,seq__51538_51552__$1);
var G__51560 = null;
var G__51561 = (0);
var G__51562 = (0);
seq__51538_51542 = G__51559;
chunk__51539_51543 = G__51560;
count__51540_51544 = G__51561;
i__51541_51545 = G__51562;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__48251__auto__ = goog.require__;
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__51563__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__51563 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51564__i = 0, G__51564__a = new Array(arguments.length -  0);
while (G__51564__i < G__51564__a.length) {G__51564__a[G__51564__i] = arguments[G__51564__i + 0]; ++G__51564__i;}
  args = new cljs.core.IndexedSeq(G__51564__a,0,null);
} 
return G__51563__delegate.call(this,args);};
G__51563.cljs$lang$maxFixedArity = 0;
G__51563.cljs$lang$applyTo = (function (arglist__51565){
var args = cljs.core.seq(arglist__51565);
return G__51563__delegate(args);
});
G__51563.cljs$core$IFn$_invoke$arity$variadic = G__51563__delegate;
return G__51563;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__51566 = cljs.core._EQ_;
var expr__51567 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__51566.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__51567))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__51566,expr__51567){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__51566,expr__51567))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__51566,expr__51567){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e51569){if((e51569 instanceof Error)){
var e = e51569;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e51569;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__51566,expr__51567))
} else {
if(cljs.core.truth_(pred__51566.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__51567))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__51566.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__51567))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__51566.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__51567))){
return ((function (pred__51566,expr__51567){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e51570){if((e51570 instanceof Error)){
var e = e51570;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e51570;

}
}})());
});
;})(pred__51566,expr__51567))
} else {
return ((function (pred__51566,expr__51567){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__51566,expr__51567))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__51571,callback){
var map__51574 = p__51571;
var map__51574__$1 = ((((!((map__51574 == null)))?((((map__51574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51574.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51574):map__51574);
var file_msg = map__51574__$1;
var request_url = cljs.core.get.call(null,map__51574__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__51574,map__51574__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__51574,map__51574__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__50798__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50798__auto__){
return (function (){
var f__50799__auto__ = (function (){var switch__50777__auto__ = ((function (c__50798__auto__){
return (function (state_51598){
var state_val_51599 = (state_51598[(1)]);
if((state_val_51599 === (7))){
var inst_51594 = (state_51598[(2)]);
var state_51598__$1 = state_51598;
var statearr_51600_51620 = state_51598__$1;
(statearr_51600_51620[(2)] = inst_51594);

(statearr_51600_51620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51599 === (1))){
var state_51598__$1 = state_51598;
var statearr_51601_51621 = state_51598__$1;
(statearr_51601_51621[(2)] = null);

(statearr_51601_51621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51599 === (4))){
var inst_51578 = (state_51598[(7)]);
var inst_51578__$1 = (state_51598[(2)]);
var state_51598__$1 = (function (){var statearr_51602 = state_51598;
(statearr_51602[(7)] = inst_51578__$1);

return statearr_51602;
})();
if(cljs.core.truth_(inst_51578__$1)){
var statearr_51603_51622 = state_51598__$1;
(statearr_51603_51622[(1)] = (5));

} else {
var statearr_51604_51623 = state_51598__$1;
(statearr_51604_51623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51599 === (6))){
var state_51598__$1 = state_51598;
var statearr_51605_51624 = state_51598__$1;
(statearr_51605_51624[(2)] = null);

(statearr_51605_51624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51599 === (3))){
var inst_51596 = (state_51598[(2)]);
var state_51598__$1 = state_51598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51598__$1,inst_51596);
} else {
if((state_val_51599 === (2))){
var state_51598__$1 = state_51598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51598__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_51599 === (11))){
var inst_51590 = (state_51598[(2)]);
var state_51598__$1 = (function (){var statearr_51606 = state_51598;
(statearr_51606[(8)] = inst_51590);

return statearr_51606;
})();
var statearr_51607_51625 = state_51598__$1;
(statearr_51607_51625[(2)] = null);

(statearr_51607_51625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51599 === (9))){
var inst_51582 = (state_51598[(9)]);
var inst_51584 = (state_51598[(10)]);
var inst_51586 = inst_51584.call(null,inst_51582);
var state_51598__$1 = state_51598;
var statearr_51608_51626 = state_51598__$1;
(statearr_51608_51626[(2)] = inst_51586);

(statearr_51608_51626[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51599 === (5))){
var inst_51578 = (state_51598[(7)]);
var inst_51580 = figwheel.client.file_reloading.blocking_load.call(null,inst_51578);
var state_51598__$1 = state_51598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51598__$1,(8),inst_51580);
} else {
if((state_val_51599 === (10))){
var inst_51582 = (state_51598[(9)]);
var inst_51588 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_51582);
var state_51598__$1 = state_51598;
var statearr_51609_51627 = state_51598__$1;
(statearr_51609_51627[(2)] = inst_51588);

(statearr_51609_51627[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51599 === (8))){
var inst_51578 = (state_51598[(7)]);
var inst_51584 = (state_51598[(10)]);
var inst_51582 = (state_51598[(2)]);
var inst_51583 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_51584__$1 = cljs.core.get.call(null,inst_51583,inst_51578);
var state_51598__$1 = (function (){var statearr_51610 = state_51598;
(statearr_51610[(9)] = inst_51582);

(statearr_51610[(10)] = inst_51584__$1);

return statearr_51610;
})();
if(cljs.core.truth_(inst_51584__$1)){
var statearr_51611_51628 = state_51598__$1;
(statearr_51611_51628[(1)] = (9));

} else {
var statearr_51612_51629 = state_51598__$1;
(statearr_51612_51629[(1)] = (10));

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
});})(c__50798__auto__))
;
return ((function (switch__50777__auto__,c__50798__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__50778__auto__ = null;
var figwheel$client$file_reloading$state_machine__50778__auto____0 = (function (){
var statearr_51616 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51616[(0)] = figwheel$client$file_reloading$state_machine__50778__auto__);

(statearr_51616[(1)] = (1));

return statearr_51616;
});
var figwheel$client$file_reloading$state_machine__50778__auto____1 = (function (state_51598){
while(true){
var ret_value__50779__auto__ = (function (){try{while(true){
var result__50780__auto__ = switch__50777__auto__.call(null,state_51598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50780__auto__;
}
break;
}
}catch (e51617){if((e51617 instanceof Object)){
var ex__50781__auto__ = e51617;
var statearr_51618_51630 = state_51598;
(statearr_51618_51630[(5)] = ex__50781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51631 = state_51598;
state_51598 = G__51631;
continue;
} else {
return ret_value__50779__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__50778__auto__ = function(state_51598){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__50778__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__50778__auto____1.call(this,state_51598);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__50778__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__50778__auto____0;
figwheel$client$file_reloading$state_machine__50778__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__50778__auto____1;
return figwheel$client$file_reloading$state_machine__50778__auto__;
})()
;})(switch__50777__auto__,c__50798__auto__))
})();
var state__50800__auto__ = (function (){var statearr_51619 = f__50799__auto__.call(null);
(statearr_51619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__50798__auto__);

return statearr_51619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50800__auto__);
});})(c__50798__auto__))
);

return c__50798__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__51632,callback){
var map__51635 = p__51632;
var map__51635__$1 = ((((!((map__51635 == null)))?((((map__51635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51635.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51635):map__51635);
var file_msg = map__51635__$1;
var namespace = cljs.core.get.call(null,map__51635__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__51635,map__51635__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__51635,map__51635__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__51637){
var map__51640 = p__51637;
var map__51640__$1 = ((((!((map__51640 == null)))?((((map__51640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51640.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51640):map__51640);
var file_msg = map__51640__$1;
var namespace = cljs.core.get.call(null,map__51640__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__51642){
var map__51645 = p__51642;
var map__51645__$1 = ((((!((map__51645 == null)))?((((map__51645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51645.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51645):map__51645);
var file_msg = map__51645__$1;
var namespace = cljs.core.get.call(null,map__51645__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__48239__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__48239__auto__){
var or__48251__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
var or__48251__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__48251__auto____$1)){
return or__48251__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__48239__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__51647,callback){
var map__51650 = p__51647;
var map__51650__$1 = ((((!((map__51650 == null)))?((((map__51650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51650.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51650):map__51650);
var file_msg = map__51650__$1;
var request_url = cljs.core.get.call(null,map__51650__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__51650__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__50798__auto___51754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50798__auto___51754,out){
return (function (){
var f__50799__auto__ = (function (){var switch__50777__auto__ = ((function (c__50798__auto___51754,out){
return (function (state_51736){
var state_val_51737 = (state_51736[(1)]);
if((state_val_51737 === (1))){
var inst_51710 = cljs.core.seq.call(null,files);
var inst_51711 = cljs.core.first.call(null,inst_51710);
var inst_51712 = cljs.core.next.call(null,inst_51710);
var inst_51713 = files;
var state_51736__$1 = (function (){var statearr_51738 = state_51736;
(statearr_51738[(7)] = inst_51713);

(statearr_51738[(8)] = inst_51711);

(statearr_51738[(9)] = inst_51712);

return statearr_51738;
})();
var statearr_51739_51755 = state_51736__$1;
(statearr_51739_51755[(2)] = null);

(statearr_51739_51755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51737 === (2))){
var inst_51719 = (state_51736[(10)]);
var inst_51713 = (state_51736[(7)]);
var inst_51718 = cljs.core.seq.call(null,inst_51713);
var inst_51719__$1 = cljs.core.first.call(null,inst_51718);
var inst_51720 = cljs.core.next.call(null,inst_51718);
var inst_51721 = (inst_51719__$1 == null);
var inst_51722 = cljs.core.not.call(null,inst_51721);
var state_51736__$1 = (function (){var statearr_51740 = state_51736;
(statearr_51740[(10)] = inst_51719__$1);

(statearr_51740[(11)] = inst_51720);

return statearr_51740;
})();
if(inst_51722){
var statearr_51741_51756 = state_51736__$1;
(statearr_51741_51756[(1)] = (4));

} else {
var statearr_51742_51757 = state_51736__$1;
(statearr_51742_51757[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51737 === (3))){
var inst_51734 = (state_51736[(2)]);
var state_51736__$1 = state_51736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51736__$1,inst_51734);
} else {
if((state_val_51737 === (4))){
var inst_51719 = (state_51736[(10)]);
var inst_51724 = figwheel.client.file_reloading.reload_js_file.call(null,inst_51719);
var state_51736__$1 = state_51736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51736__$1,(7),inst_51724);
} else {
if((state_val_51737 === (5))){
var inst_51730 = cljs.core.async.close_BANG_.call(null,out);
var state_51736__$1 = state_51736;
var statearr_51743_51758 = state_51736__$1;
(statearr_51743_51758[(2)] = inst_51730);

(statearr_51743_51758[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51737 === (6))){
var inst_51732 = (state_51736[(2)]);
var state_51736__$1 = state_51736;
var statearr_51744_51759 = state_51736__$1;
(statearr_51744_51759[(2)] = inst_51732);

(statearr_51744_51759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51737 === (7))){
var inst_51720 = (state_51736[(11)]);
var inst_51726 = (state_51736[(2)]);
var inst_51727 = cljs.core.async.put_BANG_.call(null,out,inst_51726);
var inst_51713 = inst_51720;
var state_51736__$1 = (function (){var statearr_51745 = state_51736;
(statearr_51745[(12)] = inst_51727);

(statearr_51745[(7)] = inst_51713);

return statearr_51745;
})();
var statearr_51746_51760 = state_51736__$1;
(statearr_51746_51760[(2)] = null);

(statearr_51746_51760[(1)] = (2));


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
});})(c__50798__auto___51754,out))
;
return ((function (switch__50777__auto__,c__50798__auto___51754,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50778__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50778__auto____0 = (function (){
var statearr_51750 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51750[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50778__auto__);

(statearr_51750[(1)] = (1));

return statearr_51750;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50778__auto____1 = (function (state_51736){
while(true){
var ret_value__50779__auto__ = (function (){try{while(true){
var result__50780__auto__ = switch__50777__auto__.call(null,state_51736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50780__auto__;
}
break;
}
}catch (e51751){if((e51751 instanceof Object)){
var ex__50781__auto__ = e51751;
var statearr_51752_51761 = state_51736;
(statearr_51752_51761[(5)] = ex__50781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51762 = state_51736;
state_51736 = G__51762;
continue;
} else {
return ret_value__50779__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50778__auto__ = function(state_51736){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50778__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50778__auto____1.call(this,state_51736);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50778__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50778__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50778__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50778__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50778__auto__;
})()
;})(switch__50777__auto__,c__50798__auto___51754,out))
})();
var state__50800__auto__ = (function (){var statearr_51753 = f__50799__auto__.call(null);
(statearr_51753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__50798__auto___51754);

return statearr_51753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50800__auto__);
});})(c__50798__auto___51754,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__51763,opts){
var map__51767 = p__51763;
var map__51767__$1 = ((((!((map__51767 == null)))?((((map__51767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51767.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51767):map__51767);
var eval_body = cljs.core.get.call(null,map__51767__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__51767__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__48239__auto__ = eval_body;
if(cljs.core.truth_(and__48239__auto__)){
return typeof eval_body === 'string';
} else {
return and__48239__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e51769){var e = e51769;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__51770_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__51770_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__51779){
var vec__51780 = p__51779;
var k = cljs.core.nth.call(null,vec__51780,(0),null);
var v = cljs.core.nth.call(null,vec__51780,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__51783){
var vec__51784 = p__51783;
var k = cljs.core.nth.call(null,vec__51784,(0),null);
var v = cljs.core.nth.call(null,vec__51784,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__51790,p__51791){
var map__52039 = p__51790;
var map__52039__$1 = ((((!((map__52039 == null)))?((((map__52039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52039):map__52039);
var opts = map__52039__$1;
var before_jsload = cljs.core.get.call(null,map__52039__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__52039__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__52039__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__52040 = p__51791;
var map__52040__$1 = ((((!((map__52040 == null)))?((((map__52040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52040.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52040):map__52040);
var msg = map__52040__$1;
var files = cljs.core.get.call(null,map__52040__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__52040__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__52040__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__50798__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50798__auto__,map__52039,map__52039__$1,opts,before_jsload,on_jsload,reload_dependents,map__52040,map__52040__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__50799__auto__ = (function (){var switch__50777__auto__ = ((function (c__50798__auto__,map__52039,map__52039__$1,opts,before_jsload,on_jsload,reload_dependents,map__52040,map__52040__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_52194){
var state_val_52195 = (state_52194[(1)]);
if((state_val_52195 === (7))){
var inst_52057 = (state_52194[(7)]);
var inst_52055 = (state_52194[(8)]);
var inst_52054 = (state_52194[(9)]);
var inst_52056 = (state_52194[(10)]);
var inst_52062 = cljs.core._nth.call(null,inst_52055,inst_52057);
var inst_52063 = figwheel.client.file_reloading.eval_body.call(null,inst_52062,opts);
var inst_52064 = (inst_52057 + (1));
var tmp52196 = inst_52055;
var tmp52197 = inst_52054;
var tmp52198 = inst_52056;
var inst_52054__$1 = tmp52197;
var inst_52055__$1 = tmp52196;
var inst_52056__$1 = tmp52198;
var inst_52057__$1 = inst_52064;
var state_52194__$1 = (function (){var statearr_52199 = state_52194;
(statearr_52199[(7)] = inst_52057__$1);

(statearr_52199[(8)] = inst_52055__$1);

(statearr_52199[(11)] = inst_52063);

(statearr_52199[(9)] = inst_52054__$1);

(statearr_52199[(10)] = inst_52056__$1);

return statearr_52199;
})();
var statearr_52200_52286 = state_52194__$1;
(statearr_52200_52286[(2)] = null);

(statearr_52200_52286[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (20))){
var inst_52097 = (state_52194[(12)]);
var inst_52105 = figwheel.client.file_reloading.sort_files.call(null,inst_52097);
var state_52194__$1 = state_52194;
var statearr_52201_52287 = state_52194__$1;
(statearr_52201_52287[(2)] = inst_52105);

(statearr_52201_52287[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (27))){
var state_52194__$1 = state_52194;
var statearr_52202_52288 = state_52194__$1;
(statearr_52202_52288[(2)] = null);

(statearr_52202_52288[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (1))){
var inst_52046 = (state_52194[(13)]);
var inst_52043 = before_jsload.call(null,files);
var inst_52044 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_52045 = (function (){return ((function (inst_52046,inst_52043,inst_52044,state_val_52195,c__50798__auto__,map__52039,map__52039__$1,opts,before_jsload,on_jsload,reload_dependents,map__52040,map__52040__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51787_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__51787_SHARP_);
});
;})(inst_52046,inst_52043,inst_52044,state_val_52195,c__50798__auto__,map__52039,map__52039__$1,opts,before_jsload,on_jsload,reload_dependents,map__52040,map__52040__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52046__$1 = cljs.core.filter.call(null,inst_52045,files);
var inst_52047 = cljs.core.not_empty.call(null,inst_52046__$1);
var state_52194__$1 = (function (){var statearr_52203 = state_52194;
(statearr_52203[(14)] = inst_52044);

(statearr_52203[(15)] = inst_52043);

(statearr_52203[(13)] = inst_52046__$1);

return statearr_52203;
})();
if(cljs.core.truth_(inst_52047)){
var statearr_52204_52289 = state_52194__$1;
(statearr_52204_52289[(1)] = (2));

} else {
var statearr_52205_52290 = state_52194__$1;
(statearr_52205_52290[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (24))){
var state_52194__$1 = state_52194;
var statearr_52206_52291 = state_52194__$1;
(statearr_52206_52291[(2)] = null);

(statearr_52206_52291[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (39))){
var inst_52147 = (state_52194[(16)]);
var state_52194__$1 = state_52194;
var statearr_52207_52292 = state_52194__$1;
(statearr_52207_52292[(2)] = inst_52147);

(statearr_52207_52292[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (46))){
var inst_52189 = (state_52194[(2)]);
var state_52194__$1 = state_52194;
var statearr_52208_52293 = state_52194__$1;
(statearr_52208_52293[(2)] = inst_52189);

(statearr_52208_52293[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (4))){
var inst_52091 = (state_52194[(2)]);
var inst_52092 = cljs.core.List.EMPTY;
var inst_52093 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_52092);
var inst_52094 = (function (){return ((function (inst_52091,inst_52092,inst_52093,state_val_52195,c__50798__auto__,map__52039,map__52039__$1,opts,before_jsload,on_jsload,reload_dependents,map__52040,map__52040__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51788_SHARP_){
var and__48239__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__51788_SHARP_);
if(cljs.core.truth_(and__48239__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__51788_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__51788_SHARP_)));
} else {
return and__48239__auto__;
}
});
;})(inst_52091,inst_52092,inst_52093,state_val_52195,c__50798__auto__,map__52039,map__52039__$1,opts,before_jsload,on_jsload,reload_dependents,map__52040,map__52040__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52095 = cljs.core.filter.call(null,inst_52094,files);
var inst_52096 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_52097 = cljs.core.concat.call(null,inst_52095,inst_52096);
var state_52194__$1 = (function (){var statearr_52209 = state_52194;
(statearr_52209[(12)] = inst_52097);

(statearr_52209[(17)] = inst_52091);

(statearr_52209[(18)] = inst_52093);

return statearr_52209;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_52210_52294 = state_52194__$1;
(statearr_52210_52294[(1)] = (16));

} else {
var statearr_52211_52295 = state_52194__$1;
(statearr_52211_52295[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (15))){
var inst_52081 = (state_52194[(2)]);
var state_52194__$1 = state_52194;
var statearr_52212_52296 = state_52194__$1;
(statearr_52212_52296[(2)] = inst_52081);

(statearr_52212_52296[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (21))){
var inst_52107 = (state_52194[(19)]);
var inst_52107__$1 = (state_52194[(2)]);
var inst_52108 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_52107__$1);
var state_52194__$1 = (function (){var statearr_52213 = state_52194;
(statearr_52213[(19)] = inst_52107__$1);

return statearr_52213;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52194__$1,(22),inst_52108);
} else {
if((state_val_52195 === (31))){
var inst_52192 = (state_52194[(2)]);
var state_52194__$1 = state_52194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52194__$1,inst_52192);
} else {
if((state_val_52195 === (32))){
var inst_52147 = (state_52194[(16)]);
var inst_52152 = inst_52147.cljs$lang$protocol_mask$partition0$;
var inst_52153 = (inst_52152 & (64));
var inst_52154 = inst_52147.cljs$core$ISeq$;
var inst_52155 = (cljs.core.PROTOCOL_SENTINEL === inst_52154);
var inst_52156 = (inst_52153) || (inst_52155);
var state_52194__$1 = state_52194;
if(cljs.core.truth_(inst_52156)){
var statearr_52214_52297 = state_52194__$1;
(statearr_52214_52297[(1)] = (35));

} else {
var statearr_52215_52298 = state_52194__$1;
(statearr_52215_52298[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (40))){
var inst_52169 = (state_52194[(20)]);
var inst_52168 = (state_52194[(2)]);
var inst_52169__$1 = cljs.core.get.call(null,inst_52168,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_52170 = cljs.core.get.call(null,inst_52168,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_52171 = cljs.core.not_empty.call(null,inst_52169__$1);
var state_52194__$1 = (function (){var statearr_52216 = state_52194;
(statearr_52216[(21)] = inst_52170);

(statearr_52216[(20)] = inst_52169__$1);

return statearr_52216;
})();
if(cljs.core.truth_(inst_52171)){
var statearr_52217_52299 = state_52194__$1;
(statearr_52217_52299[(1)] = (41));

} else {
var statearr_52218_52300 = state_52194__$1;
(statearr_52218_52300[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (33))){
var state_52194__$1 = state_52194;
var statearr_52219_52301 = state_52194__$1;
(statearr_52219_52301[(2)] = false);

(statearr_52219_52301[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (13))){
var inst_52067 = (state_52194[(22)]);
var inst_52071 = cljs.core.chunk_first.call(null,inst_52067);
var inst_52072 = cljs.core.chunk_rest.call(null,inst_52067);
var inst_52073 = cljs.core.count.call(null,inst_52071);
var inst_52054 = inst_52072;
var inst_52055 = inst_52071;
var inst_52056 = inst_52073;
var inst_52057 = (0);
var state_52194__$1 = (function (){var statearr_52220 = state_52194;
(statearr_52220[(7)] = inst_52057);

(statearr_52220[(8)] = inst_52055);

(statearr_52220[(9)] = inst_52054);

(statearr_52220[(10)] = inst_52056);

return statearr_52220;
})();
var statearr_52221_52302 = state_52194__$1;
(statearr_52221_52302[(2)] = null);

(statearr_52221_52302[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (22))){
var inst_52110 = (state_52194[(23)]);
var inst_52107 = (state_52194[(19)]);
var inst_52115 = (state_52194[(24)]);
var inst_52111 = (state_52194[(25)]);
var inst_52110__$1 = (state_52194[(2)]);
var inst_52111__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52110__$1);
var inst_52112 = (function (){var all_files = inst_52107;
var res_SINGLEQUOTE_ = inst_52110__$1;
var res = inst_52111__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_52110,inst_52107,inst_52115,inst_52111,inst_52110__$1,inst_52111__$1,state_val_52195,c__50798__auto__,map__52039,map__52039__$1,opts,before_jsload,on_jsload,reload_dependents,map__52040,map__52040__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51789_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__51789_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_52110,inst_52107,inst_52115,inst_52111,inst_52110__$1,inst_52111__$1,state_val_52195,c__50798__auto__,map__52039,map__52039__$1,opts,before_jsload,on_jsload,reload_dependents,map__52040,map__52040__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52113 = cljs.core.filter.call(null,inst_52112,inst_52110__$1);
var inst_52114 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_52115__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52114);
var inst_52116 = cljs.core.not_empty.call(null,inst_52115__$1);
var state_52194__$1 = (function (){var statearr_52222 = state_52194;
(statearr_52222[(23)] = inst_52110__$1);

(statearr_52222[(26)] = inst_52113);

(statearr_52222[(24)] = inst_52115__$1);

(statearr_52222[(25)] = inst_52111__$1);

return statearr_52222;
})();
if(cljs.core.truth_(inst_52116)){
var statearr_52223_52303 = state_52194__$1;
(statearr_52223_52303[(1)] = (23));

} else {
var statearr_52224_52304 = state_52194__$1;
(statearr_52224_52304[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (36))){
var state_52194__$1 = state_52194;
var statearr_52225_52305 = state_52194__$1;
(statearr_52225_52305[(2)] = false);

(statearr_52225_52305[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (41))){
var inst_52169 = (state_52194[(20)]);
var inst_52173 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_52174 = cljs.core.map.call(null,inst_52173,inst_52169);
var inst_52175 = cljs.core.pr_str.call(null,inst_52174);
var inst_52176 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_52175)].join('');
var inst_52177 = figwheel.client.utils.log.call(null,inst_52176);
var state_52194__$1 = state_52194;
var statearr_52226_52306 = state_52194__$1;
(statearr_52226_52306[(2)] = inst_52177);

(statearr_52226_52306[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (43))){
var inst_52170 = (state_52194[(21)]);
var inst_52180 = (state_52194[(2)]);
var inst_52181 = cljs.core.not_empty.call(null,inst_52170);
var state_52194__$1 = (function (){var statearr_52227 = state_52194;
(statearr_52227[(27)] = inst_52180);

return statearr_52227;
})();
if(cljs.core.truth_(inst_52181)){
var statearr_52228_52307 = state_52194__$1;
(statearr_52228_52307[(1)] = (44));

} else {
var statearr_52229_52308 = state_52194__$1;
(statearr_52229_52308[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (29))){
var inst_52147 = (state_52194[(16)]);
var inst_52110 = (state_52194[(23)]);
var inst_52113 = (state_52194[(26)]);
var inst_52107 = (state_52194[(19)]);
var inst_52115 = (state_52194[(24)]);
var inst_52111 = (state_52194[(25)]);
var inst_52143 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_52146 = (function (){var all_files = inst_52107;
var res_SINGLEQUOTE_ = inst_52110;
var res = inst_52111;
var files_not_loaded = inst_52113;
var dependencies_that_loaded = inst_52115;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52147,inst_52110,inst_52113,inst_52107,inst_52115,inst_52111,inst_52143,state_val_52195,c__50798__auto__,map__52039,map__52039__$1,opts,before_jsload,on_jsload,reload_dependents,map__52040,map__52040__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52145){
var map__52230 = p__52145;
var map__52230__$1 = ((((!((map__52230 == null)))?((((map__52230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52230.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52230):map__52230);
var namespace = cljs.core.get.call(null,map__52230__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52147,inst_52110,inst_52113,inst_52107,inst_52115,inst_52111,inst_52143,state_val_52195,c__50798__auto__,map__52039,map__52039__$1,opts,before_jsload,on_jsload,reload_dependents,map__52040,map__52040__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52147__$1 = cljs.core.group_by.call(null,inst_52146,inst_52113);
var inst_52149 = (inst_52147__$1 == null);
var inst_52150 = cljs.core.not.call(null,inst_52149);
var state_52194__$1 = (function (){var statearr_52232 = state_52194;
(statearr_52232[(16)] = inst_52147__$1);

(statearr_52232[(28)] = inst_52143);

return statearr_52232;
})();
if(inst_52150){
var statearr_52233_52309 = state_52194__$1;
(statearr_52233_52309[(1)] = (32));

} else {
var statearr_52234_52310 = state_52194__$1;
(statearr_52234_52310[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (44))){
var inst_52170 = (state_52194[(21)]);
var inst_52183 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_52170);
var inst_52184 = cljs.core.pr_str.call(null,inst_52183);
var inst_52185 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_52184)].join('');
var inst_52186 = figwheel.client.utils.log.call(null,inst_52185);
var state_52194__$1 = state_52194;
var statearr_52235_52311 = state_52194__$1;
(statearr_52235_52311[(2)] = inst_52186);

(statearr_52235_52311[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (6))){
var inst_52088 = (state_52194[(2)]);
var state_52194__$1 = state_52194;
var statearr_52236_52312 = state_52194__$1;
(statearr_52236_52312[(2)] = inst_52088);

(statearr_52236_52312[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (28))){
var inst_52113 = (state_52194[(26)]);
var inst_52140 = (state_52194[(2)]);
var inst_52141 = cljs.core.not_empty.call(null,inst_52113);
var state_52194__$1 = (function (){var statearr_52237 = state_52194;
(statearr_52237[(29)] = inst_52140);

return statearr_52237;
})();
if(cljs.core.truth_(inst_52141)){
var statearr_52238_52313 = state_52194__$1;
(statearr_52238_52313[(1)] = (29));

} else {
var statearr_52239_52314 = state_52194__$1;
(statearr_52239_52314[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (25))){
var inst_52111 = (state_52194[(25)]);
var inst_52127 = (state_52194[(2)]);
var inst_52128 = cljs.core.not_empty.call(null,inst_52111);
var state_52194__$1 = (function (){var statearr_52240 = state_52194;
(statearr_52240[(30)] = inst_52127);

return statearr_52240;
})();
if(cljs.core.truth_(inst_52128)){
var statearr_52241_52315 = state_52194__$1;
(statearr_52241_52315[(1)] = (26));

} else {
var statearr_52242_52316 = state_52194__$1;
(statearr_52242_52316[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (34))){
var inst_52163 = (state_52194[(2)]);
var state_52194__$1 = state_52194;
if(cljs.core.truth_(inst_52163)){
var statearr_52243_52317 = state_52194__$1;
(statearr_52243_52317[(1)] = (38));

} else {
var statearr_52244_52318 = state_52194__$1;
(statearr_52244_52318[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (17))){
var state_52194__$1 = state_52194;
var statearr_52245_52319 = state_52194__$1;
(statearr_52245_52319[(2)] = recompile_dependents);

(statearr_52245_52319[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (3))){
var state_52194__$1 = state_52194;
var statearr_52246_52320 = state_52194__$1;
(statearr_52246_52320[(2)] = null);

(statearr_52246_52320[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (12))){
var inst_52084 = (state_52194[(2)]);
var state_52194__$1 = state_52194;
var statearr_52247_52321 = state_52194__$1;
(statearr_52247_52321[(2)] = inst_52084);

(statearr_52247_52321[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (2))){
var inst_52046 = (state_52194[(13)]);
var inst_52053 = cljs.core.seq.call(null,inst_52046);
var inst_52054 = inst_52053;
var inst_52055 = null;
var inst_52056 = (0);
var inst_52057 = (0);
var state_52194__$1 = (function (){var statearr_52248 = state_52194;
(statearr_52248[(7)] = inst_52057);

(statearr_52248[(8)] = inst_52055);

(statearr_52248[(9)] = inst_52054);

(statearr_52248[(10)] = inst_52056);

return statearr_52248;
})();
var statearr_52249_52322 = state_52194__$1;
(statearr_52249_52322[(2)] = null);

(statearr_52249_52322[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (23))){
var inst_52110 = (state_52194[(23)]);
var inst_52113 = (state_52194[(26)]);
var inst_52107 = (state_52194[(19)]);
var inst_52115 = (state_52194[(24)]);
var inst_52111 = (state_52194[(25)]);
var inst_52118 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_52120 = (function (){var all_files = inst_52107;
var res_SINGLEQUOTE_ = inst_52110;
var res = inst_52111;
var files_not_loaded = inst_52113;
var dependencies_that_loaded = inst_52115;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52110,inst_52113,inst_52107,inst_52115,inst_52111,inst_52118,state_val_52195,c__50798__auto__,map__52039,map__52039__$1,opts,before_jsload,on_jsload,reload_dependents,map__52040,map__52040__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52119){
var map__52250 = p__52119;
var map__52250__$1 = ((((!((map__52250 == null)))?((((map__52250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52250.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52250):map__52250);
var request_url = cljs.core.get.call(null,map__52250__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52110,inst_52113,inst_52107,inst_52115,inst_52111,inst_52118,state_val_52195,c__50798__auto__,map__52039,map__52039__$1,opts,before_jsload,on_jsload,reload_dependents,map__52040,map__52040__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52121 = cljs.core.reverse.call(null,inst_52115);
var inst_52122 = cljs.core.map.call(null,inst_52120,inst_52121);
var inst_52123 = cljs.core.pr_str.call(null,inst_52122);
var inst_52124 = figwheel.client.utils.log.call(null,inst_52123);
var state_52194__$1 = (function (){var statearr_52252 = state_52194;
(statearr_52252[(31)] = inst_52118);

return statearr_52252;
})();
var statearr_52253_52323 = state_52194__$1;
(statearr_52253_52323[(2)] = inst_52124);

(statearr_52253_52323[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (35))){
var state_52194__$1 = state_52194;
var statearr_52254_52324 = state_52194__$1;
(statearr_52254_52324[(2)] = true);

(statearr_52254_52324[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (19))){
var inst_52097 = (state_52194[(12)]);
var inst_52103 = figwheel.client.file_reloading.expand_files.call(null,inst_52097);
var state_52194__$1 = state_52194;
var statearr_52255_52325 = state_52194__$1;
(statearr_52255_52325[(2)] = inst_52103);

(statearr_52255_52325[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (11))){
var state_52194__$1 = state_52194;
var statearr_52256_52326 = state_52194__$1;
(statearr_52256_52326[(2)] = null);

(statearr_52256_52326[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (9))){
var inst_52086 = (state_52194[(2)]);
var state_52194__$1 = state_52194;
var statearr_52257_52327 = state_52194__$1;
(statearr_52257_52327[(2)] = inst_52086);

(statearr_52257_52327[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (5))){
var inst_52057 = (state_52194[(7)]);
var inst_52056 = (state_52194[(10)]);
var inst_52059 = (inst_52057 < inst_52056);
var inst_52060 = inst_52059;
var state_52194__$1 = state_52194;
if(cljs.core.truth_(inst_52060)){
var statearr_52258_52328 = state_52194__$1;
(statearr_52258_52328[(1)] = (7));

} else {
var statearr_52259_52329 = state_52194__$1;
(statearr_52259_52329[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (14))){
var inst_52067 = (state_52194[(22)]);
var inst_52076 = cljs.core.first.call(null,inst_52067);
var inst_52077 = figwheel.client.file_reloading.eval_body.call(null,inst_52076,opts);
var inst_52078 = cljs.core.next.call(null,inst_52067);
var inst_52054 = inst_52078;
var inst_52055 = null;
var inst_52056 = (0);
var inst_52057 = (0);
var state_52194__$1 = (function (){var statearr_52260 = state_52194;
(statearr_52260[(32)] = inst_52077);

(statearr_52260[(7)] = inst_52057);

(statearr_52260[(8)] = inst_52055);

(statearr_52260[(9)] = inst_52054);

(statearr_52260[(10)] = inst_52056);

return statearr_52260;
})();
var statearr_52261_52330 = state_52194__$1;
(statearr_52261_52330[(2)] = null);

(statearr_52261_52330[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (45))){
var state_52194__$1 = state_52194;
var statearr_52262_52331 = state_52194__$1;
(statearr_52262_52331[(2)] = null);

(statearr_52262_52331[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (26))){
var inst_52110 = (state_52194[(23)]);
var inst_52113 = (state_52194[(26)]);
var inst_52107 = (state_52194[(19)]);
var inst_52115 = (state_52194[(24)]);
var inst_52111 = (state_52194[(25)]);
var inst_52130 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_52132 = (function (){var all_files = inst_52107;
var res_SINGLEQUOTE_ = inst_52110;
var res = inst_52111;
var files_not_loaded = inst_52113;
var dependencies_that_loaded = inst_52115;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52110,inst_52113,inst_52107,inst_52115,inst_52111,inst_52130,state_val_52195,c__50798__auto__,map__52039,map__52039__$1,opts,before_jsload,on_jsload,reload_dependents,map__52040,map__52040__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52131){
var map__52263 = p__52131;
var map__52263__$1 = ((((!((map__52263 == null)))?((((map__52263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52263.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52263):map__52263);
var namespace = cljs.core.get.call(null,map__52263__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__52263__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52110,inst_52113,inst_52107,inst_52115,inst_52111,inst_52130,state_val_52195,c__50798__auto__,map__52039,map__52039__$1,opts,before_jsload,on_jsload,reload_dependents,map__52040,map__52040__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52133 = cljs.core.map.call(null,inst_52132,inst_52111);
var inst_52134 = cljs.core.pr_str.call(null,inst_52133);
var inst_52135 = figwheel.client.utils.log.call(null,inst_52134);
var inst_52136 = (function (){var all_files = inst_52107;
var res_SINGLEQUOTE_ = inst_52110;
var res = inst_52111;
var files_not_loaded = inst_52113;
var dependencies_that_loaded = inst_52115;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52110,inst_52113,inst_52107,inst_52115,inst_52111,inst_52130,inst_52132,inst_52133,inst_52134,inst_52135,state_val_52195,c__50798__auto__,map__52039,map__52039__$1,opts,before_jsload,on_jsload,reload_dependents,map__52040,map__52040__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52110,inst_52113,inst_52107,inst_52115,inst_52111,inst_52130,inst_52132,inst_52133,inst_52134,inst_52135,state_val_52195,c__50798__auto__,map__52039,map__52039__$1,opts,before_jsload,on_jsload,reload_dependents,map__52040,map__52040__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52137 = setTimeout(inst_52136,(10));
var state_52194__$1 = (function (){var statearr_52265 = state_52194;
(statearr_52265[(33)] = inst_52130);

(statearr_52265[(34)] = inst_52135);

return statearr_52265;
})();
var statearr_52266_52332 = state_52194__$1;
(statearr_52266_52332[(2)] = inst_52137);

(statearr_52266_52332[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (16))){
var state_52194__$1 = state_52194;
var statearr_52267_52333 = state_52194__$1;
(statearr_52267_52333[(2)] = reload_dependents);

(statearr_52267_52333[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (38))){
var inst_52147 = (state_52194[(16)]);
var inst_52165 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52147);
var state_52194__$1 = state_52194;
var statearr_52268_52334 = state_52194__$1;
(statearr_52268_52334[(2)] = inst_52165);

(statearr_52268_52334[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (30))){
var state_52194__$1 = state_52194;
var statearr_52269_52335 = state_52194__$1;
(statearr_52269_52335[(2)] = null);

(statearr_52269_52335[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (10))){
var inst_52067 = (state_52194[(22)]);
var inst_52069 = cljs.core.chunked_seq_QMARK_.call(null,inst_52067);
var state_52194__$1 = state_52194;
if(inst_52069){
var statearr_52270_52336 = state_52194__$1;
(statearr_52270_52336[(1)] = (13));

} else {
var statearr_52271_52337 = state_52194__$1;
(statearr_52271_52337[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (18))){
var inst_52101 = (state_52194[(2)]);
var state_52194__$1 = state_52194;
if(cljs.core.truth_(inst_52101)){
var statearr_52272_52338 = state_52194__$1;
(statearr_52272_52338[(1)] = (19));

} else {
var statearr_52273_52339 = state_52194__$1;
(statearr_52273_52339[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (42))){
var state_52194__$1 = state_52194;
var statearr_52274_52340 = state_52194__$1;
(statearr_52274_52340[(2)] = null);

(statearr_52274_52340[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (37))){
var inst_52160 = (state_52194[(2)]);
var state_52194__$1 = state_52194;
var statearr_52275_52341 = state_52194__$1;
(statearr_52275_52341[(2)] = inst_52160);

(statearr_52275_52341[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52195 === (8))){
var inst_52067 = (state_52194[(22)]);
var inst_52054 = (state_52194[(9)]);
var inst_52067__$1 = cljs.core.seq.call(null,inst_52054);
var state_52194__$1 = (function (){var statearr_52276 = state_52194;
(statearr_52276[(22)] = inst_52067__$1);

return statearr_52276;
})();
if(inst_52067__$1){
var statearr_52277_52342 = state_52194__$1;
(statearr_52277_52342[(1)] = (10));

} else {
var statearr_52278_52343 = state_52194__$1;
(statearr_52278_52343[(1)] = (11));

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
});})(c__50798__auto__,map__52039,map__52039__$1,opts,before_jsload,on_jsload,reload_dependents,map__52040,map__52040__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__50777__auto__,c__50798__auto__,map__52039,map__52039__$1,opts,before_jsload,on_jsload,reload_dependents,map__52040,map__52040__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50778__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50778__auto____0 = (function (){
var statearr_52282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52282[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__50778__auto__);

(statearr_52282[(1)] = (1));

return statearr_52282;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50778__auto____1 = (function (state_52194){
while(true){
var ret_value__50779__auto__ = (function (){try{while(true){
var result__50780__auto__ = switch__50777__auto__.call(null,state_52194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50780__auto__;
}
break;
}
}catch (e52283){if((e52283 instanceof Object)){
var ex__50781__auto__ = e52283;
var statearr_52284_52344 = state_52194;
(statearr_52284_52344[(5)] = ex__50781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52345 = state_52194;
state_52194 = G__52345;
continue;
} else {
return ret_value__50779__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__50778__auto__ = function(state_52194){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50778__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50778__auto____1.call(this,state_52194);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__50778__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__50778__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__50778__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__50778__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50778__auto__;
})()
;})(switch__50777__auto__,c__50798__auto__,map__52039,map__52039__$1,opts,before_jsload,on_jsload,reload_dependents,map__52040,map__52040__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__50800__auto__ = (function (){var statearr_52285 = f__50799__auto__.call(null);
(statearr_52285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__50798__auto__);

return statearr_52285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50800__auto__);
});})(c__50798__auto__,map__52039,map__52039__$1,opts,before_jsload,on_jsload,reload_dependents,map__52040,map__52040__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__50798__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__52348,link){
var map__52351 = p__52348;
var map__52351__$1 = ((((!((map__52351 == null)))?((((map__52351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52351):map__52351);
var file = cljs.core.get.call(null,map__52351__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__52351,map__52351__$1,file){
return (function (p1__52346_SHARP_,p2__52347_SHARP_){
if(cljs.core._EQ_.call(null,p1__52346_SHARP_,p2__52347_SHARP_)){
return p1__52346_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__52351,map__52351__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__52357){
var map__52358 = p__52357;
var map__52358__$1 = ((((!((map__52358 == null)))?((((map__52358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52358):map__52358);
var match_length = cljs.core.get.call(null,map__52358__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__52358__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__52353_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__52353_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__52360_SHARP_,p2__52361_SHARP_){
return cljs.core.assoc.call(null,p1__52360_SHARP_,cljs.core.get.call(null,p2__52361_SHARP_,key),p2__52361_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_52362 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_52362);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_52362);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__52363,p__52364){
var map__52369 = p__52363;
var map__52369__$1 = ((((!((map__52369 == null)))?((((map__52369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52369.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52369):map__52369);
var on_cssload = cljs.core.get.call(null,map__52369__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__52370 = p__52364;
var map__52370__$1 = ((((!((map__52370 == null)))?((((map__52370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52370.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52370):map__52370);
var files_msg = map__52370__$1;
var files = cljs.core.get.call(null,map__52370__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map