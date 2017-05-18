// Compiled by ClojureScript 1.9.542 {}
goog.provide('db_devops.pages.common');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('db_devops.bootstrap');
db_devops.pages.common.loading_throbber = (function db_devops$pages$common$loading_throbber(){
var loading_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null));
if(cljs.core.truth_(cljs.core.deref.call(null,loading_QMARK_))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Modal,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show","show",-576705889),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Modal.Body,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.spinner","div.spinner",-1989566624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bounce1","div.bounce1",-2061917968)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bounce2","div.bounce2",1958093487)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bounce3","div.bounce3",902748498)], null)], null)], null)], null);
} else {
return null;
}
});
db_devops.pages.common.error_modal = (function db_devops$pages$common$error_modal(){
var temp__4657__auto__ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null)));
if(cljs.core.truth_(temp__4657__auto__)){
var error = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Modal,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show","show",-576705889),cljs.core.boolean$.call(null,error)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Modal.Header,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Modal.Title,"\u51FA\u73B0\u9519\u8BEF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Modal.Body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),error], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Modal.Footer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-sm.btn-danger","button.btn.btn-sm.btn-danger",-1786051141),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (error,temp__4657__auto__){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300)], null),null);
});})(error,temp__4657__auto__))
], null),"\u786E\u8BA4"], null)], null)], null);
} else {
return null;
}
});
db_devops.pages.common.validation_modal = (function db_devops$pages$common$validation_modal(errors){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Modal,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show","show",-576705889),cljs.core.boolean$.call(null,cljs.core.deref.call(null,errors))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Modal.Header,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Modal.Title,"\u7F3A\u5C11\u5FC5\u586B\u5B57\u6BB5"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Modal.Body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__49039__auto__ = (function db_devops$pages$common$validation_modal_$_iter__49670(s__49671){
return (new cljs.core.LazySeq(null,(function (){
var s__49671__$1 = s__49671;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__49671__$1);
if(temp__4657__auto__){
var s__49671__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49671__$2)){
var c__49037__auto__ = cljs.core.chunk_first.call(null,s__49671__$2);
var size__49038__auto__ = cljs.core.count.call(null,c__49037__auto__);
var b__49673 = cljs.core.chunk_buffer.call(null,size__49038__auto__);
if((function (){var i__49672 = (0);
while(true){
if((i__49672 < size__49038__auto__)){
var vec__49680 = cljs.core._nth.call(null,c__49037__auto__,i__49672);
var _ = cljs.core.nth.call(null,vec__49680,(0),null);
var error = cljs.core.nth.call(null,vec__49680,(1),null);
cljs.core.chunk_append.call(null,b__49673,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),error], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),error], null)));

var G__49686 = (i__49672 + (1));
i__49672 = G__49686;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49673),db_devops$pages$common$validation_modal_$_iter__49670.call(null,cljs.core.chunk_rest.call(null,s__49671__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49673),null);
}
} else {
var vec__49683 = cljs.core.first.call(null,s__49671__$2);
var _ = cljs.core.nth.call(null,vec__49683,(0),null);
var error = cljs.core.nth.call(null,vec__49683,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),error], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),error], null)),db_devops$pages$common$validation_modal_$_iter__49670.call(null,cljs.core.rest.call(null,s__49671__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__49039__auto__.call(null,cljs.core.deref.call(null,errors));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Modal.Footer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-sm.btn-danger","button.btn.btn-sm.btn-danger",-1786051141),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,errors,null);
})], null),"\u5173\u95ED"], null)], null)], null);
});
db_devops.pages.common.confirm_modal = (function db_devops$pages$common$confirm_modal(title,confirm_open_QMARK_,action,action_label){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Modal,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show","show",-576705889),cljs.core.deref.call(null,confirm_open_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Modal.Header,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Modal.Title,title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Modal.Footer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-toolbar","div.btn-toolbar",-2106091207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-sm.btn-danger","button.btn.btn-sm.btn-danger",-1786051141),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,confirm_open_QMARK_,false);
})], null),"\u53D6\u6D88"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-sm.btn-success","button.btn.btn-sm.btn-success",-1505771455),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_.call(null,confirm_open_QMARK_,false);

return action.call(null);
})], null),action_label], null)], null)], null)], null);
});

//# sourceMappingURL=common.js.map