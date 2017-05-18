// Compiled by ClojureScript 1.9.542 {}
goog.provide('db_devops.pages.issues');
goog.require('cljs.core');
goog.require('cljsjs.showdown');
goog.require('clojure.set');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('db_devops.datetime');
goog.require('re_com.splits');
goog.require('db_devops.attachments');
goog.require('db_devops.bootstrap');
goog.require('db_devops.pages.common');
goog.require('db_devops.routes');
goog.require('db_devops.validation');
goog.require('db_devops.widgets.tag_editor');
db_devops.pages.issues.rounded_panel = re_com.core.flex_child_style.call(null,"1");
db_devops.pages.issues.highlight_code = (function db_devops$pages$issues$highlight_code(node){
var nodes = reagent.core.dom_node.call(null,node).querySelectorAll("pre code");
var i = nodes.length;
while(true){
if((i < (0))){
return null;
} else {
var temp__4657__auto___50862 = nodes.item(i);
if(cljs.core.truth_(temp__4657__auto___50862)){
var item_50863 = temp__4657__auto___50862;
hljs.highlightBlock(item_50863);
} else {
}

var G__50864 = (i - (1));
i = G__50864;
continue;
}
break;
}
});
db_devops.pages.issues.markdown_preview = (function db_devops$pages$issues$markdown_preview(){
var md_parser = (new showdown.Converter());
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (md_parser){
return (function (p1__50865_SHARP_){
return db_devops.pages.issues.highlight_code.call(null,reagent.core.dom_node.call(null,p1__50865_SHARP_));
});})(md_parser))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (md_parser){
return (function (p1__50866_SHARP_){
return db_devops.pages.issues.highlight_code.call(null,reagent.core.dom_node.call(null,p1__50866_SHARP_));
});})(md_parser))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (md_parser){
return (function (content){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),md_parser.makeHtml([cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)].join(''))], null)], null)], null);
});})(md_parser))
], null));
});
db_devops.pages.issues.preview_panel = (function db_devops$pages$issues$preview_panel(text){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"class","class",-2030961996),"issue-detail",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rounded-panel","div.rounded-panel",1224369074),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),db_devops.pages.issues.rounded_panel], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.issues.markdown_preview,text], null)], null)], null);
});
db_devops.pages.issues.editor = (function db_devops$pages$issues$editor(text){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (p1__50867_SHARP_){
var editor = (new SimpleMDE(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),true,new cljs.core.Keyword(null,"spellChecker","spellChecker",1845010182),false,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Issue details",new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bold","italic","strikethrough","|","heading","code","quote","|","unordered-list","ordered-list","|","link","image"], null),new cljs.core.Keyword(null,"element","element",1974019749),reagent.core.dom_node.call(null,p1__50867_SHARP_),new cljs.core.Keyword(null,"initialValue","initialValue",-951835084),cljs.core.deref.call(null,text)], null))));
return editor.codemirror.on("change",((function (editor){
return (function (){
return cljs.core.reset_BANG_.call(null,text,editor.value());
});})(editor))
);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null);
})], null));
});
db_devops.pages.issues.edit_panel = (function db_devops$pages$issues$edit_panel(text){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"class","class",-2030961996),"issue-detail",new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.issue-detail","div.issue-detail",-260894615),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.issues.editor,text], null)], null)], null);
});
db_devops.pages.issues.select_issue_keys = (function db_devops$pages$issues$select_issue_keys(issue){
var issue_keys = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"detail","detail",-1545345025)], null);
return cljs.core.select_keys.call(null,cljs.core.update.call(null,issue,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.set),issue_keys);
});
db_devops.pages.issues.issue_empty_QMARK_ = (function db_devops$pages$issues$issue_empty_QMARK_(issue){
return cljs.core.empty_QMARK_.call(null,cljs.core.keep.call(null,(function (p1__50868_SHARP_){
return cljs.core.not_empty.call(null,cljs.core.second.call(null,p1__50868_SHARP_));
}),issue));
});
db_devops.pages.issues.issue_updated_QMARK_ = (function db_devops$pages$issues$issue_updated_QMARK_(original_issue,edited_issue){
if(cljs.core.truth_(new cljs.core.Keyword(null,"support-issue-id","support-issue-id",1313110604).cljs$core$IFn$_invoke$arity$1(edited_issue))){
return cljs.core.not_EQ_.call(null,db_devops.pages.issues.select_issue_keys.call(null,original_issue),db_devops.pages.issues.select_issue_keys.call(null,edited_issue));
} else {
return cljs.core.not.call(null,db_devops.pages.issues.issue_empty_QMARK_.call(null,edited_issue));
}
});
db_devops.pages.issues.delete_issue_button = (function db_devops$pages$issues$delete_issue_button(p__50869){
var map__50874 = p__50869;
var map__50874__$1 = ((((!((map__50874 == null)))?((((map__50874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50874.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50874):map__50874);
var support_issue_id = cljs.core.get.call(null,map__50874__$1,new cljs.core.Keyword(null,"support-issue-id","support-issue-id",1313110604));
var with_let50876 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let50876","with-let50876",-1786151159));
var temp__4661__auto___50878 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4661__auto___50878 == null)){
} else {
var c__49538__auto___50879 = temp__4661__auto___50878;
if((with_let50876.generation === c__49538__auto___50879.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Warning: The same with-let is being used more "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("than once in the same reactive context.")].join(''));
} else {
}
} else {
}

with_let50876.generation = c__49538__auto___50879.ratomGeneration;
}


var init50877 = (with_let50876.length === (0));
var confirm_open_QMARK_ = ((init50877)?(with_let50876[(0)] = reagent.core.atom.call(null,false)):(with_let50876[(0)]));
var res__49539__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"danger",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init50877,confirm_open_QMARK_,with_let50876,map__50874,map__50874__$1,support_issue_id){
return (function (){
return cljs.core.reset_BANG_.call(null,confirm_open_QMARK_,true);
});})(init50877,confirm_open_QMARK_,with_let50876,map__50874,map__50874__$1,support_issue_id))
], null),"Delete",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.common.confirm_modal,"Are you sure you wish to delete the issue?",confirm_open_QMARK_,((function (init50877,confirm_open_QMARK_,with_let50876,map__50874,map__50874__$1,support_issue_id){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-issue","delete-issue",303586578),support_issue_id], null));
});})(init50877,confirm_open_QMARK_,with_let50876,map__50874,map__50874__$1,support_issue_id))
,"Delete"], null)], null);

return res__49539__auto__;
});
db_devops.pages.issues.control_buttons = (function db_devops$pages$issues$control_buttons(original_issue,edited_issue){
var with_let50882 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let50882","with-let50882",2091244903));
var temp__4661__auto___50884 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4661__auto___50884 == null)){
} else {
var c__49538__auto___50885 = temp__4661__auto___50884;
if((with_let50882.generation === c__49538__auto___50885.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Warning: The same with-let is being used more "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("than once in the same reactive context.")].join(''));
} else {
}
} else {
}

with_let50882.generation = c__49538__auto___50885.ratomGeneration;
}


var init50883 = (with_let50882.length === (0));
var issue_id = ((init50883)?(with_let50882[(0)] = new cljs.core.Keyword(null,"support-issue-id","support-issue-id",1313110604).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,edited_issue))):(with_let50882[(0)]));
var errors = ((init50883)?(with_let50882[(1)] = reagent.core.atom.call(null,null)):(with_let50882[(1)]));
var confirm_open_QMARK_ = ((init50883)?(with_let50882[(2)] = reagent.core.atom.call(null,false)):(with_let50882[(2)]));
var cancel_edit = ((init50883)?(with_let50882[(3)] = ((function (init50883,issue_id,errors,confirm_open_QMARK_,with_let50882){
return (function (){
return db_devops.routes.navigate_BANG_.call(null,(cljs.core.truth_(issue_id)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/issue/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(issue_id)].join(''):"/"));
});})(init50883,issue_id,errors,confirm_open_QMARK_,with_let50882))
):(with_let50882[(3)]));
var res__49539__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row>div.col-sm-12","div.row>div.col-sm-12",1607036239),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.common.confirm_modal,"Discard changes?",confirm_open_QMARK_,cancel_edit,"Discard"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.common.validation_modal,errors], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-toolbar.pull-right","div.btn-toolbar.pull-right",-645867683),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"warning",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init50883,issue_id,errors,confirm_open_QMARK_,cancel_edit,with_let50882){
return (function (){
if(cljs.core.truth_(db_devops.pages.issues.issue_updated_QMARK_.call(null,cljs.core.deref.call(null,original_issue),cljs.core.deref.call(null,edited_issue)))){
return cljs.core.reset_BANG_.call(null,confirm_open_QMARK_,true);
} else {
return cancel_edit.call(null);
}
});})(init50883,issue_id,errors,confirm_open_QMARK_,cancel_edit,with_let50882))
], null),"Cancel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"success",new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init50883,issue_id,errors,confirm_open_QMARK_,cancel_edit,with_let50882){
return (function (){
if(cljs.core.truth_(cljs.core.reset_BANG_.call(null,errors,db_devops.validation.validate_issue.call(null,cljs.core.deref.call(null,edited_issue))))){
return null;
} else {
if(cljs.core.truth_(issue_id)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-issue","save-issue",2036202104),cljs.core.deref.call(null,edited_issue)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-issue","create-issue",69105034),cljs.core.deref.call(null,edited_issue)], null));
}
}
});})(init50883,issue_id,errors,confirm_open_QMARK_,cancel_edit,with_let50882))
], null),"Save"], null)], null)], null);

return res__49539__auto__;
});
db_devops.pages.issues.render_tags = (function db_devops$pages$issues$render_tags(tags){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-toolbar","div.btn-toolbar",-2106091207),(function (){var iter__49039__auto__ = (function db_devops$pages$issues$render_tags_$_iter__50890(s__50891){
return (new cljs.core.LazySeq(null,(function (){
var s__50891__$1 = s__50891;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__50891__$1);
if(temp__4657__auto__){
var s__50891__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50891__$2)){
var c__49037__auto__ = cljs.core.chunk_first.call(null,s__50891__$2);
var size__49038__auto__ = cljs.core.count.call(null,c__49037__auto__);
var b__50893 = cljs.core.chunk_buffer.call(null,size__49038__auto__);
if((function (){var i__50892 = (0);
while(true){
if((i__50892 < size__49038__auto__)){
var tag = cljs.core._nth.call(null,c__49037__auto__,i__50892);
cljs.core.chunk_append.call(null,b__50893,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-xs.btn-default","button.btn.btn-xs.btn-default",1978042120),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__50892,tag,c__49037__auto__,size__49038__auto__,b__50893,s__50891__$2,temp__4657__auto__){
return (function (){
return db_devops.routes.navigate_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/issues/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join(''));
});})(i__50892,tag,c__49037__auto__,size__49038__auto__,b__50893,s__50891__$2,temp__4657__auto__))
], null),tag], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag], null)));

var G__50894 = (i__50892 + (1));
i__50892 = G__50894;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50893),db_devops$pages$issues$render_tags_$_iter__50890.call(null,cljs.core.chunk_rest.call(null,s__50891__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50893),null);
}
} else {
var tag = cljs.core.first.call(null,s__50891__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-xs.btn-default","button.btn.btn-xs.btn-default",1978042120),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tag,s__50891__$2,temp__4657__auto__){
return (function (){
return db_devops.routes.navigate_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/issues/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join(''));
});})(tag,s__50891__$2,temp__4657__auto__))
], null),tag], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag], null)),db_devops$pages$issues$render_tags_$_iter__50890.call(null,cljs.core.rest.call(null,s__50891__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__49039__auto__.call(null,tags);
})()], null);
});
db_devops.pages.issues.attachment_list = (function db_devops$pages$issues$attachment_list(support_issue_id,files){
var with_let50913 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let50913","with-let50913",-1632737841));
var temp__4661__auto___50931 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4661__auto___50931 == null)){
} else {
var c__49538__auto___50932 = temp__4661__auto___50931;
if((with_let50913.generation === c__49538__auto___50932.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Warning: The same with-let is being used more "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("than once in the same reactive context.")].join(''));
} else {
}
} else {
}

with_let50913.generation = c__49538__auto___50932.ratomGeneration;
}


var init50914 = (with_let50913.length === (0));
var confirm_open_QMARK_ = ((init50914)?(with_let50913[(0)] = reagent.core.atom.call(null,false)):(with_let50913[(0)]));
var action = ((init50914)?(with_let50913[(1)] = reagent.core.atom.call(null,null)):(with_let50913[(1)]));
var res__49539__auto__ = ((cljs.core.empty_QMARK_.call(null,files))?null:new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.common.confirm_modal,"Are you sure you wish to delete this file?",confirm_open_QMARK_,cljs.core.deref.call(null,action),"Delete"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Attachments"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__49039__auto__ = ((function (init50914,confirm_open_QMARK_,action,with_let50913){
return (function db_devops$pages$issues$attachment_list_$_iter__50915(s__50916){
return (new cljs.core.LazySeq(null,((function (init50914,confirm_open_QMARK_,action,with_let50913){
return (function (){
var s__50916__$1 = s__50916;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__50916__$1);
if(temp__4657__auto__){
var s__50916__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50916__$2)){
var c__49037__auto__ = cljs.core.chunk_first.call(null,s__50916__$2);
var size__49038__auto__ = cljs.core.count.call(null,c__49037__auto__);
var b__50918 = cljs.core.chunk_buffer.call(null,size__49038__auto__);
if((function (){var i__50917 = (0);
while(true){
if((i__50917 < size__49038__auto__)){
var vec__50925 = cljs.core._nth.call(null,c__49037__auto__,i__50917);
var idx = cljs.core.nth.call(null,vec__50925,(0),null);
var file = cljs.core.nth.call(null,vec__50925,(1),null);
cljs.core.chunk_append.call(null,b__50918,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),db_devops.routes.href.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/api/file/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(support_issue_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('')),file], null)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-remove","span.glyphicon.glyphicon-remove",-176133890),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__50917,vec__50925,idx,file,c__49037__auto__,size__49038__auto__,b__50918,s__50916__$2,temp__4657__auto__,init50914,confirm_open_QMARK_,action,with_let50913){
return (function (){
cljs.core.reset_BANG_.call(null,action,((function (i__50917,vec__50925,idx,file,c__49037__auto__,size__49038__auto__,b__50918,s__50916__$2,temp__4657__auto__,init50914,confirm_open_QMARK_,action,with_let50913){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-file","delete-file",527846719),support_issue_id,file], null));
});})(i__50917,vec__50925,idx,file,c__49037__auto__,size__49038__auto__,b__50918,s__50916__$2,temp__4657__auto__,init50914,confirm_open_QMARK_,action,with_let50913))
);

return cljs.core.reset_BANG_.call(null,confirm_open_QMARK_,true);
});})(i__50917,vec__50925,idx,file,c__49037__auto__,size__49038__auto__,b__50918,s__50916__$2,temp__4657__auto__,init50914,confirm_open_QMARK_,action,with_let50913))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)));

var G__50933 = (i__50917 + (1));
i__50917 = G__50933;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50918),db_devops$pages$issues$attachment_list_$_iter__50915.call(null,cljs.core.chunk_rest.call(null,s__50916__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50918),null);
}
} else {
var vec__50928 = cljs.core.first.call(null,s__50916__$2);
var idx = cljs.core.nth.call(null,vec__50928,(0),null);
var file = cljs.core.nth.call(null,vec__50928,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),db_devops.routes.href.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/api/file/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(support_issue_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('')),file], null)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-remove","span.glyphicon.glyphicon-remove",-176133890),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__50928,idx,file,s__50916__$2,temp__4657__auto__,init50914,confirm_open_QMARK_,action,with_let50913){
return (function (){
cljs.core.reset_BANG_.call(null,action,((function (vec__50928,idx,file,s__50916__$2,temp__4657__auto__,init50914,confirm_open_QMARK_,action,with_let50913){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-file","delete-file",527846719),support_issue_id,file], null));
});})(vec__50928,idx,file,s__50916__$2,temp__4657__auto__,init50914,confirm_open_QMARK_,action,with_let50913))
);

return cljs.core.reset_BANG_.call(null,confirm_open_QMARK_,true);
});})(vec__50928,idx,file,s__50916__$2,temp__4657__auto__,init50914,confirm_open_QMARK_,action,with_let50913))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null)),db_devops$pages$issues$attachment_list_$_iter__50915.call(null,cljs.core.rest.call(null,s__50916__$2)));
}
} else {
return null;
}
break;
}
});})(init50914,confirm_open_QMARK_,action,with_let50913))
,null,null));
});})(init50914,confirm_open_QMARK_,action,with_let50913))
;
return iter__49039__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,files));
})()], null)], null));

return res__49539__auto__;
});
db_devops.pages.issues.attachment_component = (function db_devops$pages$issues$attachment_component(support_issue_id,files){
var with_let50939 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let50939","with-let50939",1367360827));
var temp__4661__auto___50944 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4661__auto___50944 == null)){
} else {
var c__49538__auto___50945 = temp__4661__auto___50944;
if((with_let50939.generation === c__49538__auto___50945.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Warning: The same with-let is being used more "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("than once in the same reactive context.")].join(''));
} else {
}
} else {
}

with_let50939.generation = c__49538__auto___50945.ratomGeneration;
}


var init50940 = (with_let50939.length === (0));
var open_QMARK_ = ((init50940)?(with_let50939[(0)] = reagent.core.atom.call(null,false)):(with_let50939[(0)]));
var res__49539__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.issues.attachment_list,support_issue_id,cljs.core.deref.call(null,files)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init50940,open_QMARK_,with_let50939){
return (function (){
return cljs.core.reset_BANG_.call(null,open_QMARK_,true);
});})(init50940,open_QMARK_,with_let50939))
], null),"Attach File"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.attachments.upload_form,support_issue_id,open_QMARK_,((function (init50940,open_QMARK_,with_let50939){
return (function (p__50941){
var map__50942 = p__50941;
var map__50942__$1 = ((((!((map__50942 == null)))?((((map__50942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50942.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50942):map__50942);
var name = cljs.core.get.call(null,map__50942__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attach-file","attach-file",400252107),name], null));
});})(init50940,open_QMARK_,with_let50939))
], null)], null);

return res__49539__auto__;
});
db_devops.pages.issues.issue_detail_pane = (function db_devops$pages$issues$issue_detail_pane(detail){
var with_let50949 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let50949","with-let50949",-451521962));
var temp__4661__auto___50952 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4661__auto___50952 == null)){
} else {
var c__49538__auto___50953 = temp__4661__auto___50952;
if((with_let50949.generation === c__49538__auto___50953.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Warning: The same with-let is being used more "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("than once in the same reactive context.")].join(''));
} else {
}
} else {
}

with_let50949.generation = c__49538__auto___50953.ratomGeneration;
}


var init50950 = (with_let50949.length === (0));
var preview = ((init50950)?(with_let50949[(0)] = reagent.core.atom.call(null,new cljs.core.Keyword(null,"split","split",-599435118))):(with_let50949[(0)]));
var res__49539__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.ControlLabel,"Issue Details"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pull-right","span.pull-right",350285524),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"float"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.editor-view-button","a.editor-view-button",1460890717),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edit","edit",-1641834166),cljs.core.deref.call(null,preview)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init50950,preview,with_let50949){
return (function (){
return cljs.core.reset_BANG_.call(null,preview,new cljs.core.Keyword(null,"edit","edit",-1641834166));
});})(init50950,preview,with_let50949))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fa.fa-pencil-square-o","span.fa.fa-pencil-square-o",663555654)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.editor-view-button","a.editor-view-button",1460890717),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"split","split",-599435118),cljs.core.deref.call(null,preview)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init50950,preview,with_let50949){
return (function (){
return cljs.core.reset_BANG_.call(null,preview,new cljs.core.Keyword(null,"split","split",-599435118));
});})(init50950,preview,with_let50949))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fa.fa-columns","span.fa.fa-columns",-868420372)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.editor-view-button","a.editor-view-button",1460890717),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"preview","preview",451279890),cljs.core.deref.call(null,preview)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init50950,preview,with_let50949){
return (function (){
return cljs.core.reset_BANG_.call(null,preview,new cljs.core.Keyword(null,"preview","preview",451279890));
});})(init50950,preview,with_let50949))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fa.fa-file-text-o","span.fa.fa-file-text-o",1922467234)], null)], null)], null),(function (){var G__50951 = cljs.core.deref.call(null,preview);
var G__50951__$1 = (((G__50951 instanceof cljs.core.Keyword))?G__50951.fqn:null);
switch (G__50951__$1) {
case "split":
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_split,new cljs.core.Keyword(null,"class","class",-2030961996),"issue-detail",new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.issues.edit_panel,detail], null),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.issues.preview_panel,cljs.core.deref.call(null,detail)], null),new cljs.core.Keyword(null,"size","size",1098693007),"auto"], null);

break;
case "preview":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.issues.preview_panel,cljs.core.deref.call(null,detail)], null);

break;
case "edit":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.issues.edit_panel,detail], null);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,preview))].join('')));

}
})()], null);

return res__49539__auto__;
});
db_devops.pages.issues.edit_issue_page = (function db_devops$pages$issues$edit_issue_page(){
var with_let50963 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let50963","with-let50963",-1900902021));
var temp__4661__auto___50965 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4661__auto___50965 == null)){
} else {
var c__49538__auto___50966 = temp__4661__auto___50965;
if((with_let50963.generation === c__49538__auto___50966.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Warning: The same with-let is being used more "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("than once in the same reactive context.")].join(''));
} else {
}
} else {
}

with_let50963.generation = c__49538__auto___50966.ratomGeneration;
}


var init50964 = (with_let50963.length === (0));
var original_issue = ((init50964)?(with_let50963[(0)] = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"issue","issue",1725456421)], null))):(with_let50963[(0)]));
var edited_issue = ((init50964)?(with_let50963[(1)] = reagent.core.atom.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.deref.call(null,original_issue),new cljs.core.Keyword(null,"title","title",636505583),((function (init50964,original_issue,with_let50963){
return (function (p1__50955_SHARP_){
var or__48251__auto__ = p1__50955_SHARP_;
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
return "";
}
});})(init50964,original_issue,with_let50963))
),new cljs.core.Keyword(null,"summary","summary",380847952),((function (init50964,original_issue,with_let50963){
return (function (p1__50956_SHARP_){
var or__48251__auto__ = p1__50956_SHARP_;
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
return "";
}
});})(init50964,original_issue,with_let50963))
),new cljs.core.Keyword(null,"detail","detail",-1545345025),((function (init50964,original_issue,with_let50963){
return (function (p1__50957_SHARP_){
var or__48251__auto__ = p1__50957_SHARP_;
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
return "";
}
});})(init50964,original_issue,with_let50963))
),new cljs.core.Keyword(null,"tags","tags",1771418977),((function (init50964,original_issue,with_let50963){
return (function (p1__50958_SHARP_){
return cljs.core.set.call(null,(function (){var or__48251__auto__ = p1__50958_SHARP_;
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
});})(init50964,original_issue,with_let50963))
))):(with_let50963[(1)]));
var title = ((init50964)?(with_let50963[(2)] = reagent.core.cursor.call(null,edited_issue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583)], null))):(with_let50963[(2)]));
var summary = ((init50964)?(with_let50963[(3)] = reagent.core.cursor.call(null,edited_issue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952)], null))):(with_let50963[(3)]));
var detail = ((init50964)?(with_let50963[(4)] = reagent.core.cursor.call(null,edited_issue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"detail","detail",-1545345025)], null))):(with_let50963[(4)]));
var tags = ((init50964)?(with_let50963[(5)] = reagent.core.cursor.call(null,edited_issue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977)], null))):(with_let50963[(5)]));
var res__49539__auto__ = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"height","height",1025178622),"auto",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.page-title","h3.page-title",1714925740),(cljs.core.truth_(cljs.core.deref.call(null,original_issue))?"Edit Issue":"Add Issue")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.issues.control_buttons,original_issue,edited_issue], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.FormGroup,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.ControlLabel,"Issue Title"], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),title,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"class","class",-2030961996),"edit-issue-title",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Title of the issue",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (init50964,original_issue,edited_issue,title,summary,detail,tags,with_let50963){
return (function (p1__50959_SHARP_){
return cljs.core.reset_BANG_.call(null,title,p1__50959_SHARP_);
});})(init50964,original_issue,edited_issue,title,summary,detail,tags,with_let50963))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.FormGroup,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.ControlLabel,"Issue Summary"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),summary,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Issue summary",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (init50964,original_issue,edited_issue,title,summary,detail,tags,with_let50963){
return (function (p1__50960_SHARP_){
return cljs.core.reset_BANG_.call(null,summary,p1__50960_SHARP_);
});})(init50964,original_issue,edited_issue,title,summary,detail,tags,with_let50963))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.FormGroup,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.ControlLabel,"Issue Tags"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.widgets.tag_editor.tag_editor,tags], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row>div.col-sm-12","div.row>div.col-sm-12",1607036239),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.issues.issue_detail_pane,detail], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"support-issue-id","support-issue-id",1313110604).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,edited_issue));
if(cljs.core.truth_(temp__4657__auto__)){
var support_issue_id = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.issues.attachment_component,support_issue_id,reagent.core.cursor.call(null,original_issue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450)], null))], null);
} else {
return null;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.issues.control_buttons,original_issue,edited_issue], null)], null)], null)], null)], null);

return res__49539__auto__;
});
db_devops.pages.issues.view_issue_page = (function db_devops$pages$issues$view_issue_page(){
var issue = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"issue","issue",1725456421)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row>div.col-sm-12","div.row>div.col-sm-12",1607036239),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Panel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"view-issue-panel"], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-12>h2","div.col-sm-12>h2",1151469299),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,issue)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pull-right","span.pull-right",350285524),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Badge,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"views","views",1450155487).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,issue)))].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-12>p","div.col-sm-12>p",-560056480),new cljs.core.Keyword(null,"summary","summary",380847952).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,issue))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-12.padded-bottom","div.col-sm-12.padded-bottom",738280265),db_devops.pages.issues.render_tags.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,issue)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-12>p","div.col-sm-12>p",-560056480),"Last updated by: ",new cljs.core.Keyword(null,"updated-by-screenname","updated-by-screenname",-309664787).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,issue))," on ",db_devops.datetime.format_date.call(null,new cljs.core.Keyword(null,"update-date","update-date",894402979).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,issue)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-12>hr","div.col-sm-12>hr",-701074659)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-12","div.col-sm-12",-1900061411),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.issues.markdown_preview,new cljs.core.Keyword(null,"detail","detail",-1545345025).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,issue))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-12>hr","div.col-sm-12>hr",-701074659)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.issues.attachment_component,new cljs.core.Keyword(null,"support-issue-id","support-issue-id",1313110604).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,issue)),reagent.core.cursor.call(null,issue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-6","div.col-sm-6",-1467124828),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-toolbar.pull-right","div.btn-toolbar.pull-right",-645867683),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.issues.delete_issue_button,cljs.core.deref.call(null,issue)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary","a.btn.btn-primary",-495454127),db_devops.routes.href.call(null,"/edit-issue"),"Edit"], null)], null)], null)], null)], null)], null);
});

//# sourceMappingURL=issues.js.map