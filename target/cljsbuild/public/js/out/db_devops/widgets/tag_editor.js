// Compiled by ClojureScript 1.9.542 {}
goog.provide('db_devops.widgets.tag_editor');
goog.require('cljs.core');
goog.require('cuerdas.core');
goog.require('clojure.set');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('db_devops.bootstrap');
db_devops.widgets.tag_editor.key_up = (38);
db_devops.widgets.tag_editor.key_down = (40);
db_devops.widgets.tag_editor.key_enter = (13);
db_devops.widgets.tag_editor.key_escape = (27);
db_devops.widgets.tag_editor.key_backspace = (8);
db_devops.widgets.tag_editor.close_typeahead = (function db_devops$widgets$tag_editor$close_typeahead(selected_index,typeahead_hidden_QMARK_,mouse_on_list_QMARK_){
cljs.core.reset_BANG_.call(null,selected_index,(-1));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});
db_devops.widgets.tag_editor.scroll_target_list = (function db_devops$widgets$tag_editor$scroll_target_list(event,idx){
if((idx > (-1))){
var ul = event.target.nextSibling;
var temp__4657__auto__ = (ul.getElementsByTagName("li")[idx]);
if(cljs.core.truth_(temp__4657__auto__)){
var element = temp__4657__auto__;
return ul.scrollTop = element.offsetTop;
} else {
return null;
}
} else {
return null;
}
});
db_devops.widgets.tag_editor.filter_selections = (function db_devops$widgets$tag_editor$filter_selections(selections,all_tags,issue_tags,user_input){
return cljs.core.reset_BANG_.call(null,selections,cljs.core.filter.call(null,(function (p1__49792_SHARP_){
return cuerdas.core.includes_QMARK_.call(null,cuerdas.core.lower.call(null,p1__49792_SHARP_),(function (){var G__49794 = user_input;
if((G__49794 == null)){
return null;
} else {
return cuerdas.core.lower.call(null,G__49794);
}
})());
}),cljs.core.sort.call(null,clojure.set.difference.call(null,all_tags,issue_tags))));
});
db_devops.widgets.tag_editor.remove_tag = (function db_devops$widgets$tag_editor$remove_tag(tags,tag){
return cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__49795_SHARP_){
return cljs.core._EQ_.call(null,p1__49795_SHARP_,tag);
}),tags));
});
db_devops.widgets.tag_editor.add_tag_and_close_typeahead = (function db_devops$widgets$tag_editor$add_tag_and_close_typeahead(tags,new_tag,selected_index,typeahead_hidden_QMARK_,mouse_on_list_QMARK_){
if(cljs.core.truth_((function (){var and__48239__auto__ = cljs.core.deref.call(null,new_tag);
if(cljs.core.truth_(and__48239__auto__)){
return cljs.core.seq.call(null,cuerdas.core.trim.call(null,cljs.core.deref.call(null,new_tag)));
} else {
return and__48239__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,tags,cljs.core.conj,cljs.core.deref.call(null,new_tag));

cljs.core.reset_BANG_.call(null,new_tag,null);

return db_devops.widgets.tag_editor.close_typeahead.call(null,selected_index,typeahead_hidden_QMARK_,mouse_on_list_QMARK_);
} else {
return null;
}
});
db_devops.widgets.tag_editor.typeahead_item = (function db_devops$widgets$tag_editor$typeahead_item(idx,selected_index,issue_tags,user_input,item,typeahead_hidden_QMARK_,mouse_on_list_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.clickable","li.clickable",-676426636),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),idx,new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),idx))?"selected":null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (p1__49796_SHARP_){
return cljs.core.reset_BANG_.call(null,selected_index,parseInt(p1__49796_SHARP_.target.getAttribute("tabIndex")));
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_.call(null,user_input,item);

return db_devops.widgets.tag_editor.add_tag_and_close_typeahead.call(null,issue_tags,user_input,selected_index,typeahead_hidden_QMARK_,mouse_on_list_QMARK_);
})], null),item], null);
});
db_devops.widgets.tag_editor.typeahead_list = (function db_devops$widgets$tag_editor$typeahead_list(issue_tags,selections,selected_index,user_input,typeahead_hidden_QMARK_,mouse_on_list_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.dropdown-menu","ul.dropdown-menu",-867384656),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_((function (){var or__48251__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selections));
if(or__48251__auto__){
return or__48251__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})())?new cljs.core.Keyword(null,"none","none",1333468478):new cljs.core.Keyword(null,"block","block",664686210))], null),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
})], null),(function (){var iter__49039__auto__ = (function db_devops$widgets$tag_editor$typeahead_list_$_iter__49813(s__49814){
return (new cljs.core.LazySeq(null,(function (){
var s__49814__$1 = s__49814;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__49814__$1);
if(temp__4657__auto__){
var s__49814__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49814__$2)){
var c__49037__auto__ = cljs.core.chunk_first.call(null,s__49814__$2);
var size__49038__auto__ = cljs.core.count.call(null,c__49037__auto__);
var b__49816 = cljs.core.chunk_buffer.call(null,size__49038__auto__);
if((function (){var i__49815 = (0);
while(true){
if((i__49815 < size__49038__auto__)){
var vec__49823 = cljs.core._nth.call(null,c__49037__auto__,i__49815);
var idx = cljs.core.nth.call(null,vec__49823,(0),null);
var item = cljs.core.nth.call(null,vec__49823,(1),null);
cljs.core.chunk_append.call(null,b__49816,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.widgets.tag_editor.typeahead_item,idx,selected_index,issue_tags,user_input,item,typeahead_hidden_QMARK_,mouse_on_list_QMARK_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__49829 = (i__49815 + (1));
i__49815 = G__49829;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49816),db_devops$widgets$tag_editor$typeahead_list_$_iter__49813.call(null,cljs.core.chunk_rest.call(null,s__49814__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49816),null);
}
} else {
var vec__49826 = cljs.core.first.call(null,s__49814__$2);
var idx = cljs.core.nth.call(null,vec__49826,(0),null);
var item = cljs.core.nth.call(null,vec__49826,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.widgets.tag_editor.typeahead_item,idx,selected_index,issue_tags,user_input,item,typeahead_hidden_QMARK_,mouse_on_list_QMARK_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),db_devops$widgets$tag_editor$typeahead_list_$_iter__49813.call(null,cljs.core.rest.call(null,s__49814__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__49039__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.deref.call(null,selections)));
})()], null);
});
db_devops.widgets.tag_editor.tag_input = (function db_devops$widgets$tag_editor$tag_input(issue_tags){
var with_let49847 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let49847","with-let49847",-1746673316));
var temp__4661__auto___49861 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4661__auto___49861 == null)){
} else {
var c__49538__auto___49862 = temp__4661__auto___49861;
if((with_let49847.generation === c__49538__auto___49862.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Warning: The same with-let is being used more "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("than once in the same reactive context.")].join(''));
} else {
}
} else {
}

with_let49847.generation = c__49538__auto___49862.ratomGeneration;
}


var init49848 = (with_let49847.length === (0));
var all_tags = ((init49848)?(with_let49847[(0)] = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977)], null)))))):(with_let49847[(0)]));
var typeahead_hidden_QMARK_ = ((init49848)?(with_let49847[(1)] = reagent.core.atom.call(null,true)):(with_let49847[(1)]));
var mouse_on_list_QMARK_ = ((init49848)?(with_let49847[(2)] = reagent.core.atom.call(null,false)):(with_let49847[(2)]));
var selected_index = ((init49848)?(with_let49847[(3)] = reagent.core.atom.call(null,(-1))):(with_let49847[(3)]));
var selections = ((init49848)?(with_let49847[(4)] = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY)):(with_let49847[(4)]));
var user_input = ((init49848)?(with_let49847[(5)] = reagent.core.atom.call(null,null)):(with_let49847[(5)]));
var choose_selected = ((init49848)?(with_let49847[(6)] = ((function (init49848,all_tags,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,user_input,with_let49847){
return (function (){
cljs.core.reset_BANG_.call(null,user_input,cljs.core.get.call(null,cljs.core.vec.call(null,cljs.core.deref.call(null,selections)),cljs.core.deref.call(null,selected_index)));

return db_devops.widgets.tag_editor.add_tag_and_close_typeahead.call(null,issue_tags,user_input,selected_index,typeahead_hidden_QMARK_,mouse_on_list_QMARK_);
});})(init49848,all_tags,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,user_input,with_let49847))
):(with_let49847[(6)]));
var res__49539__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tags-input","div.tags-input",-1216388696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init49848,all_tags,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,user_input,choose_selected,with_let49847){
return (function (p1__49830_SHARP_){
var G__49849 = p1__49830_SHARP_;
var G__49849__$1 = (((G__49849 == null))?null:G__49849.target);
var G__49849__$2 = (((G__49849__$1 == null))?null:G__49849__$1.lastChild);
var G__49849__$3 = (((G__49849__$2 == null))?null:G__49849__$2.firstChild);
if((G__49849__$3 == null)){
return null;
} else {
return G__49849__$3.focus();
}
});})(init49848,all_tags,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,user_input,choose_selected,with_let49847))
], null),(function (){var iter__49039__auto__ = ((function (init49848,all_tags,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,user_input,choose_selected,with_let49847){
return (function db_devops$widgets$tag_editor$tag_input_$_iter__49850(s__49851){
return (new cljs.core.LazySeq(null,((function (init49848,all_tags,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,user_input,choose_selected,with_let49847){
return (function (){
var s__49851__$1 = s__49851;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__49851__$1);
if(temp__4657__auto__){
var s__49851__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49851__$2)){
var c__49037__auto__ = cljs.core.chunk_first.call(null,s__49851__$2);
var size__49038__auto__ = cljs.core.count.call(null,c__49037__auto__);
var b__49853 = cljs.core.chunk_buffer.call(null,size__49038__auto__);
if((function (){var i__49852 = (0);
while(true){
if((i__49852 < size__49038__auto__)){
var tag = cljs.core._nth.call(null,c__49037__auto__,i__49852);
cljs.core.chunk_append.call(null,b__49853,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tag.label.label-info","span.tag.label.label-info",312905438),tag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-role","data-role",-1005812940),"remove",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__49852,tag,c__49037__auto__,size__49038__auto__,b__49853,s__49851__$2,temp__4657__auto__,init49848,all_tags,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,user_input,choose_selected,with_let49847){
return (function (){
return cljs.core.swap_BANG_.call(null,issue_tags,db_devops.widgets.tag_editor.remove_tag,tag);
});})(i__49852,tag,c__49037__auto__,size__49038__auto__,b__49853,s__49851__$2,temp__4657__auto__,init49848,all_tags,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,user_input,choose_selected,with_let49847))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag], null)));

var G__49863 = (i__49852 + (1));
i__49852 = G__49863;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49853),db_devops$widgets$tag_editor$tag_input_$_iter__49850.call(null,cljs.core.chunk_rest.call(null,s__49851__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49853),null);
}
} else {
var tag = cljs.core.first.call(null,s__49851__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tag.label.label-info","span.tag.label.label-info",312905438),tag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-role","data-role",-1005812940),"remove",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tag,s__49851__$2,temp__4657__auto__,init49848,all_tags,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,user_input,choose_selected,with_let49847){
return (function (){
return cljs.core.swap_BANG_.call(null,issue_tags,db_devops.widgets.tag_editor.remove_tag,tag);
});})(tag,s__49851__$2,temp__4657__auto__,init49848,all_tags,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,user_input,choose_selected,with_let49847))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag], null)),db_devops$widgets$tag_editor$tag_input_$_iter__49850.call(null,cljs.core.rest.call(null,s__49851__$2)));
}
} else {
return null;
}
break;
}
});})(init49848,all_tags,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,user_input,choose_selected,with_let49847))
,null,null));
});})(init49848,all_tags,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,user_input,choose_selected,with_let49847))
;
return iter__49039__auto__.call(null,cljs.core.deref.call(null,issue_tags));
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref.call(null,typeahead_hidden_QMARK_))?"dropdown":"dropdown open")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type tag and press enter to add",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,user_input),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (init49848,all_tags,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,user_input,choose_selected,with_let49847){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

if(cljs.core.seq.call(null,cljs.core.deref.call(null,user_input))){
return db_devops.widgets.tag_editor.filter_selections.call(null,selections,all_tags,cljs.core.set.call(null,cljs.core.deref.call(null,issue_tags)),cljs.core.deref.call(null,user_input));
} else {
return cljs.core.reset_BANG_.call(null,selections,cljs.core.PersistentVector.EMPTY);
}
});})(init49848,all_tags,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,user_input,choose_selected,with_let49847))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (init49848,all_tags,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,user_input,choose_selected,with_let49847){
return (function (p1__49831_SHARP_){
cljs.core.reset_BANG_.call(null,user_input,p1__49831_SHARP_.target.value);

db_devops.widgets.tag_editor.filter_selections.call(null,selections,all_tags,cljs.core.set.call(null,cljs.core.deref.call(null,issue_tags)),cljs.core.deref.call(null,user_input));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
});})(init49848,all_tags,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,user_input,choose_selected,with_let49847))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (init49848,all_tags,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,user_input,choose_selected,with_let49847){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
return db_devops.widgets.tag_editor.close_typeahead.call(null,selected_index,typeahead_hidden_QMARK_,mouse_on_list_QMARK_);
}
});})(init49848,all_tags,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,user_input,choose_selected,with_let49847))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (init49848,all_tags,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,user_input,choose_selected,with_let49847){
return (function (p1__49832_SHARP_){
var pred__49854 = cljs.core._EQ_;
var expr__49855 = p1__49832_SHARP_.keyCode;
if(cljs.core.truth_(pred__49854.call(null,db_devops.widgets.tag_editor.key_up,expr__49855))){
p1__49832_SHARP_.preventDefault();

if((cljs.core.deref.call(null,selected_index) < (0))){
return null;
} else {
cljs.core.swap_BANG_.call(null,selected_index,cljs.core.dec);

return db_devops.widgets.tag_editor.scroll_target_list.call(null,p1__49832_SHARP_,cljs.core.deref.call(null,selected_index));
}
} else {
if(cljs.core.truth_(pred__49854.call(null,db_devops.widgets.tag_editor.key_down,expr__49855))){
p1__49832_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(cljs.core.count.call(null,cljs.core.deref.call(null,selections)) - (1)))){
return null;
} else {
cljs.core.swap_BANG_.call(null,selected_index,cljs.core.inc);

return db_devops.widgets.tag_editor.scroll_target_list.call(null,p1__49832_SHARP_,cljs.core.deref.call(null,selected_index));
}
} else {
if(cljs.core.truth_(pred__49854.call(null,db_devops.widgets.tag_editor.key_enter,expr__49855))){
if((cljs.core.deref.call(null,selected_index) < (0))){
return db_devops.widgets.tag_editor.add_tag_and_close_typeahead.call(null,issue_tags,user_input,selected_index,typeahead_hidden_QMARK_,mouse_on_list_QMARK_);
} else {
return choose_selected.call(null);
}
} else {
if(cljs.core.truth_(pred__49854.call(null,db_devops.widgets.tag_editor.key_backspace,expr__49855))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,user_input))){
return cljs.core.swap_BANG_.call(null,issue_tags,cljs.core.comp.call(null,cljs.core.vec,cljs.core.butlast));
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__49854.call(null,db_devops.widgets.tag_editor.key_escape,expr__49855))){
return db_devops.widgets.tag_editor.close_typeahead.call(null,selected_index,typeahead_hidden_QMARK_,mouse_on_list_QMARK_);
} else {
return "Default";
}
}
}
}
}
});})(init49848,all_tags,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,user_input,choose_selected,with_let49847))
], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.widgets.tag_editor.typeahead_list,issue_tags,selections,selected_index,user_input,typeahead_hidden_QMARK_,mouse_on_list_QMARK_], null)], null)], null),(function (){var temp__4657__auto__ = cljs.core.not_empty.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.deref.call(null,issue_tags)),all_tags));
if(cljs.core.truth_(temp__4657__auto__)){
var new_tags = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.new-tags-list","div.new-tags-list",-1807098028),"Creating tags: ",(function (){var iter__49039__auto__ = ((function (new_tags,temp__4657__auto__,init49848,all_tags,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,user_input,choose_selected,with_let49847){
return (function db_devops$widgets$tag_editor$tag_input_$_iter__49857(s__49858){
return (new cljs.core.LazySeq(null,((function (new_tags,temp__4657__auto__,init49848,all_tags,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,user_input,choose_selected,with_let49847){
return (function (){
var s__49858__$1 = s__49858;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__49858__$1);
if(temp__4657__auto____$1){
var s__49858__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49858__$2)){
var c__49037__auto__ = cljs.core.chunk_first.call(null,s__49858__$2);
var size__49038__auto__ = cljs.core.count.call(null,c__49037__auto__);
var b__49860 = cljs.core.chunk_buffer.call(null,size__49038__auto__);
if((function (){var i__49859 = (0);
while(true){
if((i__49859 < size__49038__auto__)){
var tag = cljs.core._nth.call(null,c__49037__auto__,i__49859);
cljs.core.chunk_append.call(null,b__49860,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label.label-danger.new-issue-tag","span.label.label-danger.new-issue-tag",-1360136373),tag], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag], null)));

var G__49864 = (i__49859 + (1));
i__49859 = G__49864;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49860),db_devops$widgets$tag_editor$tag_input_$_iter__49857.call(null,cljs.core.chunk_rest.call(null,s__49858__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49860),null);
}
} else {
var tag = cljs.core.first.call(null,s__49858__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label.label-danger.new-issue-tag","span.label.label-danger.new-issue-tag",-1360136373),tag], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag], null)),db_devops$widgets$tag_editor$tag_input_$_iter__49857.call(null,cljs.core.rest.call(null,s__49858__$2)));
}
} else {
return null;
}
break;
}
});})(new_tags,temp__4657__auto__,init49848,all_tags,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,user_input,choose_selected,with_let49847))
,null,null));
});})(new_tags,temp__4657__auto__,init49848,all_tags,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,user_input,choose_selected,with_let49847))
;
return iter__49039__auto__.call(null,new_tags);
})()], null);
} else {
return null;
}
})()], null);

return res__49539__auto__;
});
db_devops.widgets.tag_editor.tag_editor = (function db_devops$widgets$tag_editor$tag_editor(tags){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-12","div.col-sm-12",-1900061411),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.widgets.tag_editor.tag_input,tags], null)], null)], null);
});

//# sourceMappingURL=tag_editor.js.map