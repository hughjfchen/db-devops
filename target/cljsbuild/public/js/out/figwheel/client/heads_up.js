// Compiled by ClojureScript 1.9.542 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__49371__auto__ = [];
var len__49364__auto___53908 = arguments.length;
var i__49365__auto___53909 = (0);
while(true){
if((i__49365__auto___53909 < len__49364__auto___53908)){
args__49371__auto__.push((arguments[i__49365__auto___53909]));

var G__53910 = (i__49365__auto___53909 + (1));
i__49365__auto___53909 = G__53910;
continue;
} else {
}
break;
}

var argseq__49372__auto__ = ((((2) < args__49371__auto__.length))?(new cljs.core.IndexedSeq(args__49371__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__49372__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__53900_53911 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__53901_53912 = null;
var count__53902_53913 = (0);
var i__53903_53914 = (0);
while(true){
if((i__53903_53914 < count__53902_53913)){
var k_53915 = cljs.core._nth.call(null,chunk__53901_53912,i__53903_53914);
e.setAttribute(cljs.core.name.call(null,k_53915),cljs.core.get.call(null,attrs,k_53915));

var G__53916 = seq__53900_53911;
var G__53917 = chunk__53901_53912;
var G__53918 = count__53902_53913;
var G__53919 = (i__53903_53914 + (1));
seq__53900_53911 = G__53916;
chunk__53901_53912 = G__53917;
count__53902_53913 = G__53918;
i__53903_53914 = G__53919;
continue;
} else {
var temp__4657__auto___53920 = cljs.core.seq.call(null,seq__53900_53911);
if(temp__4657__auto___53920){
var seq__53900_53921__$1 = temp__4657__auto___53920;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53900_53921__$1)){
var c__49070__auto___53922 = cljs.core.chunk_first.call(null,seq__53900_53921__$1);
var G__53923 = cljs.core.chunk_rest.call(null,seq__53900_53921__$1);
var G__53924 = c__49070__auto___53922;
var G__53925 = cljs.core.count.call(null,c__49070__auto___53922);
var G__53926 = (0);
seq__53900_53911 = G__53923;
chunk__53901_53912 = G__53924;
count__53902_53913 = G__53925;
i__53903_53914 = G__53926;
continue;
} else {
var k_53927 = cljs.core.first.call(null,seq__53900_53921__$1);
e.setAttribute(cljs.core.name.call(null,k_53927),cljs.core.get.call(null,attrs,k_53927));

var G__53928 = cljs.core.next.call(null,seq__53900_53921__$1);
var G__53929 = null;
var G__53930 = (0);
var G__53931 = (0);
seq__53900_53911 = G__53928;
chunk__53901_53912 = G__53929;
count__53902_53913 = G__53930;
i__53903_53914 = G__53931;
continue;
}
} else {
}
}
break;
}

var seq__53904_53932 = cljs.core.seq.call(null,children);
var chunk__53905_53933 = null;
var count__53906_53934 = (0);
var i__53907_53935 = (0);
while(true){
if((i__53907_53935 < count__53906_53934)){
var ch_53936 = cljs.core._nth.call(null,chunk__53905_53933,i__53907_53935);
e.appendChild(ch_53936);

var G__53937 = seq__53904_53932;
var G__53938 = chunk__53905_53933;
var G__53939 = count__53906_53934;
var G__53940 = (i__53907_53935 + (1));
seq__53904_53932 = G__53937;
chunk__53905_53933 = G__53938;
count__53906_53934 = G__53939;
i__53907_53935 = G__53940;
continue;
} else {
var temp__4657__auto___53941 = cljs.core.seq.call(null,seq__53904_53932);
if(temp__4657__auto___53941){
var seq__53904_53942__$1 = temp__4657__auto___53941;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53904_53942__$1)){
var c__49070__auto___53943 = cljs.core.chunk_first.call(null,seq__53904_53942__$1);
var G__53944 = cljs.core.chunk_rest.call(null,seq__53904_53942__$1);
var G__53945 = c__49070__auto___53943;
var G__53946 = cljs.core.count.call(null,c__49070__auto___53943);
var G__53947 = (0);
seq__53904_53932 = G__53944;
chunk__53905_53933 = G__53945;
count__53906_53934 = G__53946;
i__53907_53935 = G__53947;
continue;
} else {
var ch_53948 = cljs.core.first.call(null,seq__53904_53942__$1);
e.appendChild(ch_53948);

var G__53949 = cljs.core.next.call(null,seq__53904_53942__$1);
var G__53950 = null;
var G__53951 = (0);
var G__53952 = (0);
seq__53904_53932 = G__53949;
chunk__53905_53933 = G__53950;
count__53906_53934 = G__53951;
i__53907_53935 = G__53952;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq53897){
var G__53898 = cljs.core.first.call(null,seq53897);
var seq53897__$1 = cljs.core.next.call(null,seq53897);
var G__53899 = cljs.core.first.call(null,seq53897__$1);
var seq53897__$2 = cljs.core.next.call(null,seq53897__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__53898,G__53899,seq53897__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__49184__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__49185__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__49186__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__49187__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__49188__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__49184__auto__,prefer_table__49185__auto__,method_cache__49186__auto__,cached_hierarchy__49187__auto__,hierarchy__49188__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__49184__auto__,prefer_table__49185__auto__,method_cache__49186__auto__,cached_hierarchy__49187__auto__,hierarchy__49188__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__49188__auto__,method_table__49184__auto__,prefer_table__49185__auto__,method_cache__49186__auto__,cached_hierarchy__49187__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_53953 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-o-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("border-top: 1px solid #f5f5f5;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #333;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 0px 10px 0px 70px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: fixed;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("bottom: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity: 0.0;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-sizing: border-box;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 10000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: left;")].join('')], null));
el_53953.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_53953.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_53953.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_53953);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__53954,st_map){
var map__53961 = p__53954;
var map__53961__$1 = ((((!((map__53961 == null)))?((((map__53961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53961):map__53961);
var container_el = cljs.core.get.call(null,map__53961__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__53961,map__53961__$1,container_el){
return (function (p__53963){
var vec__53964 = p__53963;
var k = cljs.core.nth.call(null,vec__53964,(0),null);
var v = cljs.core.nth.call(null,vec__53964,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__53961,map__53961__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__53967,dom_str){
var map__53970 = p__53967;
var map__53970__$1 = ((((!((map__53970 == null)))?((((map__53970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53970):map__53970);
var c = map__53970__$1;
var content_area_el = cljs.core.get.call(null,map__53970__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__53972){
var map__53975 = p__53972;
var map__53975__$1 = ((((!((map__53975 == null)))?((((map__53975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53975):map__53975);
var content_area_el = cljs.core.get.call(null,map__53975__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("float: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-decoration: none;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: rgba(84,84,84, 0.5);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__50798__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50798__auto__){
return (function (){
var f__50799__auto__ = (function (){var switch__50777__auto__ = ((function (c__50798__auto__){
return (function (state_54018){
var state_val_54019 = (state_54018[(1)]);
if((state_val_54019 === (1))){
var inst_54003 = (state_54018[(7)]);
var inst_54003__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_54004 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_54005 = ["10px","10px","100%","68px","1.0"];
var inst_54006 = cljs.core.PersistentHashMap.fromArrays(inst_54004,inst_54005);
var inst_54007 = cljs.core.merge.call(null,inst_54006,style);
var inst_54008 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_54003__$1,inst_54007);
var inst_54009 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_54003__$1,msg);
var inst_54010 = cljs.core.async.timeout.call(null,(300));
var state_54018__$1 = (function (){var statearr_54020 = state_54018;
(statearr_54020[(8)] = inst_54009);

(statearr_54020[(7)] = inst_54003__$1);

(statearr_54020[(9)] = inst_54008);

return statearr_54020;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54018__$1,(2),inst_54010);
} else {
if((state_val_54019 === (2))){
var inst_54003 = (state_54018[(7)]);
var inst_54012 = (state_54018[(2)]);
var inst_54013 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_54014 = ["auto"];
var inst_54015 = cljs.core.PersistentHashMap.fromArrays(inst_54013,inst_54014);
var inst_54016 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_54003,inst_54015);
var state_54018__$1 = (function (){var statearr_54021 = state_54018;
(statearr_54021[(10)] = inst_54012);

return statearr_54021;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54018__$1,inst_54016);
} else {
return null;
}
}
});})(c__50798__auto__))
;
return ((function (switch__50777__auto__,c__50798__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__50778__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__50778__auto____0 = (function (){
var statearr_54025 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54025[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__50778__auto__);

(statearr_54025[(1)] = (1));

return statearr_54025;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__50778__auto____1 = (function (state_54018){
while(true){
var ret_value__50779__auto__ = (function (){try{while(true){
var result__50780__auto__ = switch__50777__auto__.call(null,state_54018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50780__auto__;
}
break;
}
}catch (e54026){if((e54026 instanceof Object)){
var ex__50781__auto__ = e54026;
var statearr_54027_54029 = state_54018;
(statearr_54027_54029[(5)] = ex__50781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54030 = state_54018;
state_54018 = G__54030;
continue;
} else {
return ret_value__50779__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__50778__auto__ = function(state_54018){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__50778__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__50778__auto____1.call(this,state_54018);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__50778__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__50778__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__50778__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__50778__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__50778__auto__;
})()
;})(switch__50777__auto__,c__50798__auto__))
})();
var state__50800__auto__ = (function (){var statearr_54028 = f__50799__auto__.call(null);
(statearr_54028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__50798__auto__);

return statearr_54028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50800__auto__);
});})(c__50798__auto__))
);

return c__50798__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args54031 = [];
var len__49364__auto___54034 = arguments.length;
var i__49365__auto___54035 = (0);
while(true){
if((i__49365__auto___54035 < len__49364__auto___54034)){
args54031.push((arguments[i__49365__auto___54035]));

var G__54036 = (i__49365__auto___54035 + (1));
i__49365__auto___54035 = G__54036;
continue;
} else {
}
break;
}

var G__54033 = args54031.length;
switch (G__54033) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args54031.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-bottom: 2px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding-top: 1px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" <span style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("display: inline-block;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-line=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-column=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__54038){
var map__54041 = p__54038;
var map__54041__$1 = ((((!((map__54041 == null)))?((((map__54041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54041):map__54041);
var file = cljs.core.get.call(null,map__54041__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54041__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54041__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__48251__auto__ = file;
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='color: #757575;'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("  </span>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__54043){
var vec__54050 = p__54043;
var typ = cljs.core.nth.call(null,vec__54050,(0),null);
var line_number = cljs.core.nth.call(null,vec__54050,(1),null);
var line = cljs.core.nth.call(null,vec__54050,(2),null);
var pred__54053 = cljs.core._EQ_;
var expr__54054 = typ;
if(cljs.core.truth_(pred__54053.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__54054))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__54053.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__54054))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__54053.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__54054))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__54056_SHARP_){
return cljs.core.update_in.call(null,p1__54056_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__54057_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__54057_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__54060){
var map__54063 = p__54060;
var map__54063__$1 = ((((!((map__54063 == null)))?((((map__54063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54063.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54063):map__54063);
var exception = map__54063__$1;
var message = cljs.core.get.call(null,map__54063__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__54063__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__54063__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__54063__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__54063__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__54063__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__54063__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__54063__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__54063__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__54063__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__54063__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__48239__auto__ = file;
if(cljs.core.truth_(and__48239__auto__)){
return line;
} else {
return and__48239__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__54063,map__54063__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__54058_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__54058_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__54063,map__54063__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": ")].join(''):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''),(cljs.core.truth_(display_ex_data)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__54063,map__54063__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__54059_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__54059_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__54059_SHARP_)))].join('');
});})(last_message,map__54063,map__54063__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__54065){
var map__54068 = p__54065;
var map__54068__$1 = ((((!((map__54068 == null)))?((((map__54068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54068.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54068):map__54068);
var file = cljs.core.get.call(null,map__54068__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54068__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54068__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__54073 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__54073__$1 = ((((!((map__54073 == null)))?((((map__54073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54073.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54073):map__54073);
var head = cljs.core.get.call(null,map__54073__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__54073__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__54073__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__54073__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__54073__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54073__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54073__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__54076){
var map__54079 = p__54076;
var map__54079__$1 = ((((!((map__54079 == null)))?((((map__54079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54079.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54079):map__54079);
var warning_data = map__54079__$1;
var file = cljs.core.get.call(null,map__54079__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54079__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54079__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__54079__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__54079__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__48239__auto__ = file;
if(cljs.core.truth_(and__48239__auto__)){
return line;
} else {
return and__48239__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__54079,map__54079__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__54075_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__54075_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__54079,map__54079__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__54083 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__54083__$1 = ((((!((map__54083 == null)))?((((map__54083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54083):map__54083);
var head = cljs.core.get.call(null,map__54083__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__54083__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__54083__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__54083__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__54083__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54083__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54083__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__54085){
var map__54089 = p__54085;
var map__54089__$1 = ((((!((map__54089 == null)))?((((map__54089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54089):map__54089);
var warning_data = map__54089__$1;
var message = cljs.core.get.call(null,map__54089__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__54089__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54089__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54089__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__54091 = message;
var G__54091__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54091),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__54091);
var G__54091__$2 = (cljs.core.truth_((function (){var and__48239__auto__ = line;
if(cljs.core.truth_(and__48239__auto__)){
return column;
} else {
return and__48239__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54091__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__54091__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54091__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__54091__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__54092){
var map__54097 = p__54092;
var map__54097__$1 = ((((!((map__54097 == null)))?((((map__54097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54097.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54097):map__54097);
var warning_data = map__54097__$1;
var message = cljs.core.get.call(null,map__54097__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__54097__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54097__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54097__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__54099 = figwheel.client.heads_up.ensure_container.call(null);
var map__54099__$1 = ((((!((map__54099 == null)))?((((map__54099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54099.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54099):map__54099);
var content_area_el = cljs.core.get.call(null,map__54099__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__4657__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__4657__auto__)){
var last_child = temp__4657__auto__;
var temp__4655__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__4655__auto__)){
var message_count = temp__4655__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" more warnings have not been displayed ...")].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__50798__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50798__auto__){
return (function (){
var f__50799__auto__ = (function (){var switch__50777__auto__ = ((function (c__50798__auto__){
return (function (state_54147){
var state_val_54148 = (state_54147[(1)]);
if((state_val_54148 === (1))){
var inst_54130 = (state_54147[(7)]);
var inst_54130__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_54131 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_54132 = ["0.0"];
var inst_54133 = cljs.core.PersistentHashMap.fromArrays(inst_54131,inst_54132);
var inst_54134 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_54130__$1,inst_54133);
var inst_54135 = cljs.core.async.timeout.call(null,(300));
var state_54147__$1 = (function (){var statearr_54149 = state_54147;
(statearr_54149[(8)] = inst_54134);

(statearr_54149[(7)] = inst_54130__$1);

return statearr_54149;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54147__$1,(2),inst_54135);
} else {
if((state_val_54148 === (2))){
var inst_54130 = (state_54147[(7)]);
var inst_54137 = (state_54147[(2)]);
var inst_54138 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_54139 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_54140 = cljs.core.PersistentHashMap.fromArrays(inst_54138,inst_54139);
var inst_54141 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_54130,inst_54140);
var inst_54142 = cljs.core.async.timeout.call(null,(200));
var state_54147__$1 = (function (){var statearr_54150 = state_54147;
(statearr_54150[(9)] = inst_54137);

(statearr_54150[(10)] = inst_54141);

return statearr_54150;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54147__$1,(3),inst_54142);
} else {
if((state_val_54148 === (3))){
var inst_54130 = (state_54147[(7)]);
var inst_54144 = (state_54147[(2)]);
var inst_54145 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_54130,"");
var state_54147__$1 = (function (){var statearr_54151 = state_54147;
(statearr_54151[(11)] = inst_54144);

return statearr_54151;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54147__$1,inst_54145);
} else {
return null;
}
}
}
});})(c__50798__auto__))
;
return ((function (switch__50777__auto__,c__50798__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__50778__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__50778__auto____0 = (function (){
var statearr_54155 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54155[(0)] = figwheel$client$heads_up$clear_$_state_machine__50778__auto__);

(statearr_54155[(1)] = (1));

return statearr_54155;
});
var figwheel$client$heads_up$clear_$_state_machine__50778__auto____1 = (function (state_54147){
while(true){
var ret_value__50779__auto__ = (function (){try{while(true){
var result__50780__auto__ = switch__50777__auto__.call(null,state_54147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50780__auto__;
}
break;
}
}catch (e54156){if((e54156 instanceof Object)){
var ex__50781__auto__ = e54156;
var statearr_54157_54159 = state_54147;
(statearr_54157_54159[(5)] = ex__50781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54160 = state_54147;
state_54147 = G__54160;
continue;
} else {
return ret_value__50779__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__50778__auto__ = function(state_54147){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__50778__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__50778__auto____1.call(this,state_54147);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$clear_$_state_machine__50778__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__50778__auto____0;
figwheel$client$heads_up$clear_$_state_machine__50778__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__50778__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__50778__auto__;
})()
;})(switch__50777__auto__,c__50798__auto__))
})();
var state__50800__auto__ = (function (){var statearr_54158 = f__50799__auto__.call(null);
(statearr_54158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__50798__auto__);

return statearr_54158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50800__auto__);
});})(c__50798__auto__))
);

return c__50798__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__50798__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__50798__auto__){
return (function (){
var f__50799__auto__ = (function (){var switch__50777__auto__ = ((function (c__50798__auto__){
return (function (state_54192){
var state_val_54193 = (state_54192[(1)]);
if((state_val_54193 === (1))){
var inst_54182 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_54192__$1 = state_54192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54192__$1,(2),inst_54182);
} else {
if((state_val_54193 === (2))){
var inst_54184 = (state_54192[(2)]);
var inst_54185 = cljs.core.async.timeout.call(null,(400));
var state_54192__$1 = (function (){var statearr_54194 = state_54192;
(statearr_54194[(7)] = inst_54184);

return statearr_54194;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54192__$1,(3),inst_54185);
} else {
if((state_val_54193 === (3))){
var inst_54187 = (state_54192[(2)]);
var inst_54188 = figwheel.client.heads_up.clear.call(null);
var state_54192__$1 = (function (){var statearr_54195 = state_54192;
(statearr_54195[(8)] = inst_54187);

return statearr_54195;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54192__$1,(4),inst_54188);
} else {
if((state_val_54193 === (4))){
var inst_54190 = (state_54192[(2)]);
var state_54192__$1 = state_54192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54192__$1,inst_54190);
} else {
return null;
}
}
}
}
});})(c__50798__auto__))
;
return ((function (switch__50777__auto__,c__50798__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__50778__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__50778__auto____0 = (function (){
var statearr_54199 = [null,null,null,null,null,null,null,null,null];
(statearr_54199[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__50778__auto__);

(statearr_54199[(1)] = (1));

return statearr_54199;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__50778__auto____1 = (function (state_54192){
while(true){
var ret_value__50779__auto__ = (function (){try{while(true){
var result__50780__auto__ = switch__50777__auto__.call(null,state_54192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50780__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50780__auto__;
}
break;
}
}catch (e54200){if((e54200 instanceof Object)){
var ex__50781__auto__ = e54200;
var statearr_54201_54203 = state_54192;
(statearr_54201_54203[(5)] = ex__50781__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54204 = state_54192;
state_54192 = G__54204;
continue;
} else {
return ret_value__50779__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__50778__auto__ = function(state_54192){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__50778__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__50778__auto____1.call(this,state_54192);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__50778__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__50778__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__50778__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__50778__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__50778__auto__;
})()
;})(switch__50777__auto__,c__50798__auto__))
})();
var state__50800__auto__ = (function (){var statearr_54202 = f__50799__auto__.call(null);
(statearr_54202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__50798__auto__);

return statearr_54202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__50800__auto__);
});})(c__50798__auto__))
);

return c__50798__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__4657__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__4657__auto__)){
var el = temp__4657__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color: rgba(24, 26, 38, 0.95);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: absolute;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 9000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 100vh;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("top: 0px; left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace")].join('')}),goog.dom.createDom("div",({"class": "message", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #FFF5DB;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin: auto;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-top: 10px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: center; "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 2px 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: relative")].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map