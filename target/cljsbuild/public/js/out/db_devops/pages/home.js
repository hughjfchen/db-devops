// Compiled by ClojureScript 1.9.542 {}
goog.provide('db_devops.pages.home');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('db_devops.pages.issues');
goog.require('db_devops.key_events');
goog.require('db_devops.bootstrap');
goog.require('db_devops.routes');
goog.require('re_com.core');
db_devops.pages.home.issue_search = (function db_devops$pages$home$issue_search(){
var with_let50973 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let50973","with-let50973",1103342556));
var temp__4661__auto___50975 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4661__auto___50975 == null)){
} else {
var c__49538__auto___50976 = temp__4661__auto___50975;
if((with_let50973.generation === c__49538__auto___50976.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Warning: The same with-let is being used more "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("than once in the same reactive context.")].join(''));
} else {
}
} else {
}

with_let50973.generation = c__49538__auto___50976.ratomGeneration;
}


var init50974 = (with_let50973.length === (0));
var search = ((init50974)?(with_let50973[(0)] = reagent.core.atom.call(null,null)):(with_let50973[(0)]));
var do_search = ((init50974)?(with_let50973[(1)] = ((function (init50974,search,with_let50973){
return (function (){
var temp__4657__auto__ = cljs.core.not_empty.call(null,cljs.core.deref.call(null,search));
if(cljs.core.truth_(temp__4657__auto__)){
var value = temp__4657__auto__;
return db_devops.routes.navigate_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/search/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
} else {
return null;
}
});})(init50974,search,with_let50973))
):(with_let50973[(1)]));
var res__49539__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.FormGroup,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.InputGroup,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.FormControl,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"input-sm",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type in issue details to find matching issues",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (init50974,search,do_search,with_let50973){
return (function (p1__50969_SHARP_){
return cljs.core.reset_BANG_.call(null,search,p1__50969_SHARP_.target.value);
});})(init50974,search,do_search,with_let50973))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (init50974,search,do_search,with_let50973){
return (function (p1__50970_SHARP_){
return db_devops.key_events.on_enter.call(null,p1__50970_SHARP_,do_search);
});})(init50974,search,do_search,with_let50973))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.InputGroup.Button,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-sm.btn-default","button.btn.btn-sm.btn-default",601464018),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),do_search], null),"\u641C\u7D22\u4EFB\u52A1"], null)], null)], null)], null);

return res__49539__auto__;
});
db_devops.pages.home.new_issue = (function db_devops$pages$home$new_issue(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-sm.btn-success.pull-right","a.btn.btn-sm.btn-success.pull-right",2002210693),db_devops.routes.href.call(null,"/create-issue"),"\u589E\u52A0\u4EFB\u52A1"], null);
});
db_devops.pages.home.issue_panel = (function db_devops$pages$home$issue_panel(p__50977){
var map__50980 = p__50977;
var map__50980__$1 = ((((!((map__50980 == null)))?((((map__50980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50980.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50980):map__50980);
var support_issue_id = cljs.core.get.call(null,map__50980__$1,new cljs.core.Keyword(null,"support-issue-id","support-issue-id",1313110604));
var title = cljs.core.get.call(null,map__50980__$1,new cljs.core.Keyword(null,"title","title",636505583));
var summary = cljs.core.get.call(null,map__50980__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var views = cljs.core.get.call(null,map__50980__$1,new cljs.core.Keyword(null,"views","views",1450155487));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading.issue-title","div.panel-heading.issue-title",403052669),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3>a","h3>a",1469022792),db_devops.routes.href.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/issue/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(support_issue_id)].join('')),title,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pull-right","span.pull-right",350285524),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Badge,views], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),summary], null)], null);
});
db_devops.pages.home.sorted_tags = (function db_devops$pages$home$sorted_tags(tags,sort_type){
var tags__$1 = cljs.core.filter.call(null,(function (p1__50982_SHARP_){
return (new cljs.core.Keyword(null,"tag-count","tag-count",1676153422).cljs$core$IFn$_invoke$arity$1(p1__50982_SHARP_) > (0));
}),tags);
var G__50984 = sort_type;
var G__50984__$1 = (((G__50984 instanceof cljs.core.Keyword))?G__50984.fqn:null);
switch (G__50984__$1) {
case "name":
return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),tags__$1);

break;
case "count":
return cljs.core.reverse.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"tag-count","tag-count",1676153422),tags__$1));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sort_type)].join('')));

}
});
db_devops.pages.home.tag_control = (function db_devops$pages$home$tag_control(title,count,selected,on_click){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.ListGroupItem,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,title,selected)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),title], null)," ",(cljs.core.truth_(count)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Badge,count], null):null)], null);
});
db_devops.pages.home.tags_panel = (function db_devops$pages$home$tags_panel(tags,selected){
var with_let51000 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let51000","with-let51000",116703669));
var temp__4661__auto___51014 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4661__auto___51014 == null)){
} else {
var c__49538__auto___51015 = temp__4661__auto___51014;
if((with_let51000.generation === c__49538__auto___51015.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Warning: The same with-let is being used more "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("than once in the same reactive context.")].join(''));
} else {
}
} else {
}

with_let51000.generation = c__49538__auto___51015.ratomGeneration;
}


var init51001 = (with_let51000.length === (0));
var sort_type = ((init51001)?(with_let51000[(0)] = reagent.core.atom.call(null,new cljs.core.Keyword(null,"count","count",2139924085))):(with_let51000[(0)]));
var res__49539__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"\u5347\u7EA7checklist"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.nav-tabs","ul.nav.nav-tabs",1865557319),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,sort_type),new cljs.core.Keyword(null,"count","count",2139924085)))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init51001,sort_type,with_let51000){
return (function (){
return cljs.core.reset_BANG_.call(null,sort_type,new cljs.core.Keyword(null,"count","count",2139924085));
});})(init51001,sort_type,with_let51000))
], null),"\u6A21\u7248"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,sort_type),new cljs.core.Keyword(null,"name","name",1843675177)))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init51001,sort_type,with_let51000){
return (function (){
return cljs.core.reset_BANG_.call(null,sort_type,new cljs.core.Keyword(null,"name","name",1843675177));
});})(init51001,sort_type,with_let51000))
], null),"\u6BD4\u5BF9\u7ED3\u679C"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel","div.panel",-1677992199),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.ListGroup,(function (){var iter__49039__auto__ = ((function (init51001,sort_type,with_let51000){
return (function db_devops$pages$home$tags_panel_$_iter__51002(s__51003){
return (new cljs.core.LazySeq(null,((function (init51001,sort_type,with_let51000){
return (function (){
var s__51003__$1 = s__51003;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__51003__$1);
if(temp__4657__auto__){
var s__51003__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51003__$2)){
var c__49037__auto__ = cljs.core.chunk_first.call(null,s__51003__$2);
var size__49038__auto__ = cljs.core.count.call(null,c__49037__auto__);
var b__51005 = cljs.core.chunk_buffer.call(null,size__49038__auto__);
if((function (){var i__51004 = (0);
while(true){
if((i__51004 < size__49038__auto__)){
var map__51010 = cljs.core._nth.call(null,c__49037__auto__,i__51004);
var map__51010__$1 = ((((!((map__51010 == null)))?((((map__51010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51010.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51010):map__51010);
var tag_id = cljs.core.get.call(null,map__51010__$1,new cljs.core.Keyword(null,"tag-id","tag-id",-1311228547));
var tag = cljs.core.get.call(null,map__51010__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var tag_count = cljs.core.get.call(null,map__51010__$1,new cljs.core.Keyword(null,"tag-count","tag-count",1676153422));
cljs.core.chunk_append.call(null,b__51005,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.home.tag_control,tag,tag_count,selected,((function (i__51004,map__51010,map__51010__$1,tag_id,tag,tag_count,c__49037__auto__,size__49038__auto__,b__51005,s__51003__$2,temp__4657__auto__,init51001,sort_type,with_let51000){
return (function (){
return db_devops.routes.navigate_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/issues/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join(''));
});})(i__51004,map__51010,map__51010__$1,tag_id,tag,tag_count,c__49037__auto__,size__49038__auto__,b__51005,s__51003__$2,temp__4657__auto__,init51001,sort_type,with_let51000))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag_id], null)));

var G__51016 = (i__51004 + (1));
i__51004 = G__51016;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51005),db_devops$pages$home$tags_panel_$_iter__51002.call(null,cljs.core.chunk_rest.call(null,s__51003__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51005),null);
}
} else {
var map__51012 = cljs.core.first.call(null,s__51003__$2);
var map__51012__$1 = ((((!((map__51012 == null)))?((((map__51012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51012):map__51012);
var tag_id = cljs.core.get.call(null,map__51012__$1,new cljs.core.Keyword(null,"tag-id","tag-id",-1311228547));
var tag = cljs.core.get.call(null,map__51012__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var tag_count = cljs.core.get.call(null,map__51012__$1,new cljs.core.Keyword(null,"tag-count","tag-count",1676153422));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.home.tag_control,tag,tag_count,selected,((function (map__51012,map__51012__$1,tag_id,tag,tag_count,s__51003__$2,temp__4657__auto__,init51001,sort_type,with_let51000){
return (function (){
return db_devops.routes.navigate_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/issues/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join(''));
});})(map__51012,map__51012__$1,tag_id,tag,tag_count,s__51003__$2,temp__4657__auto__,init51001,sort_type,with_let51000))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag_id], null)),db_devops$pages$home$tags_panel_$_iter__51002.call(null,cljs.core.rest.call(null,s__51003__$2)));
}
} else {
return null;
}
break;
}
});})(init51001,sort_type,with_let51000))
,null,null));
});})(init51001,sort_type,with_let51000))
;
return iter__49039__auto__.call(null,db_devops.pages.home.sorted_tags.call(null,tags,cljs.core.deref.call(null,sort_type)));
})()], null)], null)], null);

return res__49539__auto__;
});
db_devops.pages.home.filter_control = (function db_devops$pages$home$filter_control(title,selected,on_click){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-xs","button.btn.btn-xs",-1779926049),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,title,selected))?"btn-success":"btn-default")], null),title], null);
});
db_devops.pages.home.filters = (function db_devops$pages$home$filters(selected){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-toolbar.filters","div.btn-toolbar.filters",763444771),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.home.filter_control,"\u6240\u6709",selected,(function (){
return db_devops.routes.navigate_BANG_.call(null,"/all-issues");
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.home.filter_control,"\u6700\u8FD1",selected,(function (){
return db_devops.routes.navigate_BANG_.call(null,"/recent-issues");
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.home.filter_control,"\u8BBF\u95EE\u6700\u591A",selected,(function (){
return db_devops.routes.navigate_BANG_.call(null,"/most-viewed-issues");
})], null),((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Most Viewed",null,"Recent",null,"All",null], null), null),selected))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-xs.btn-success","button.btn.btn-xs.btn-success",-1486887372),selected], null))], null);
});
db_devops.pages.home.home_page = (function db_devops$pages$home$home_page(){
var with_let51023 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let51023","with-let51023",-1387287199));
var temp__4661__auto___51029 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4661__auto___51029 == null)){
} else {
var c__49538__auto___51030 = temp__4661__auto___51029;
if((with_let51023.generation === c__49538__auto___51030.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Warning: The same with-let is being used more "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("than once in the same reactive context.")].join(''));
} else {
}
} else {
}

with_let51023.generation = c__49538__auto___51030.ratomGeneration;
}


var init51024 = (with_let51023.length === (0));
var tags = ((init51024)?(with_let51023[(0)] = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977)], null))):(with_let51023[(0)]));
var issues = ((init51024)?(with_let51023[(1)] = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"issues","issues",1989874693)], null))):(with_let51023[(1)]));
var selected = ((init51024)?(with_let51023[(2)] = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-tag","selected-tag",-746441085)], null))):(with_let51023[(2)]));
var res__49539__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-3","div.col-sm-3",1173288798),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.home.tags_panel,cljs.core.deref.call(null,tags),cljs.core.deref.call(null,selected)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-9","div.col-sm-9",359442072),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"\u4EFB\u52A1",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.home.filters,cljs.core.deref.call(null,selected)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.home.new_issue], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.home.issue_search], null),(function (){var iter__49039__auto__ = ((function (init51024,tags,issues,selected,with_let51023){
return (function db_devops$pages$home$home_page_$_iter__51025(s__51026){
return (new cljs.core.LazySeq(null,((function (init51024,tags,issues,selected,with_let51023){
return (function (){
var s__51026__$1 = s__51026;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__51026__$1);
if(temp__4657__auto__){
var s__51026__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51026__$2)){
var c__49037__auto__ = cljs.core.chunk_first.call(null,s__51026__$2);
var size__49038__auto__ = cljs.core.count.call(null,c__49037__auto__);
var b__51028 = cljs.core.chunk_buffer.call(null,size__49038__auto__);
if((function (){var i__51027 = (0);
while(true){
if((i__51027 < size__49038__auto__)){
var issue_summary = cljs.core._nth.call(null,c__49037__auto__,i__51027);
cljs.core.chunk_append.call(null,b__51028,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.home.issue_panel,issue_summary], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"support-issue-id","support-issue-id",1313110604).cljs$core$IFn$_invoke$arity$1(issue_summary)], null)));

var G__51031 = (i__51027 + (1));
i__51027 = G__51031;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51028),db_devops$pages$home$home_page_$_iter__51025.call(null,cljs.core.chunk_rest.call(null,s__51026__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51028),null);
}
} else {
var issue_summary = cljs.core.first.call(null,s__51026__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.home.issue_panel,issue_summary], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"support-issue-id","support-issue-id",1313110604).cljs$core$IFn$_invoke$arity$1(issue_summary)], null)),db_devops$pages$home$home_page_$_iter__51025.call(null,cljs.core.rest.call(null,s__51026__$2)));
}
} else {
return null;
}
break;
}
});})(init51024,tags,issues,selected,with_let51023))
,null,null));
});})(init51024,tags,issues,selected,with_let51023))
;
return iter__49039__auto__.call(null,cljs.core.deref.call(null,issues));
})()], null)], null)], null);

return res__49539__auto__;
});

//# sourceMappingURL=home.js.map