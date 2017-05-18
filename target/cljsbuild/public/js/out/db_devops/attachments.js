// Compiled by ClojureScript 1.9.542 {}
goog.provide('db_devops.attachments');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('db_devops.routes');
goog.require('db_devops.bootstrap');
goog.require('goog.net.IframeIo');
goog.require('goog.events.EventType');
db_devops.attachments.upload_file_BANG_ = (function db_devops$attachments$upload_file_BANG_(upload_form_id,on_success,on_error){
var io = (new goog.net.IframeIo());
goog.events.listen(io,goog.net.EventType.SUCCESS,((function (io){
return (function (){
var response = cljs.core.js__GT_clj.call(null,io.getResponseJson(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var temp__4655__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.truth_(temp__4655__auto__)){
var error = temp__4655__auto__;
return on_error.call(null,error);
} else {
return on_success.call(null,response);
}
});})(io))
);

return io.sendFromForm(document.getElementById(upload_form_id),db_devops.routes.context_url.call(null,"/api/attach-file"));
});
db_devops.attachments.upload_form = (function db_devops$attachments$upload_form(support_issue_id,modal_open_QMARK_,success_action){
var with_let62571 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let62571","with-let62571",-694678671));
var temp__4661__auto___62573 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4661__auto___62573 == null)){
} else {
var c__51974__auto___62574 = temp__4661__auto___62573;
if((with_let62571.generation === c__51974__auto___62574.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Warning: The same with-let is being used more "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("than once in the same reactive context.")].join(''));
} else {
}
} else {
}

with_let62571.generation = c__51974__auto___62574.ratomGeneration;
}


var init62572 = (with_let62571.length === (0));
var form_id = ((init62572)?(with_let62571[(0)] = "upload-form"):(with_let62571[(0)]));
var uploading_QMARK_ = ((init62572)?(with_let62571[(1)] = reagent.core.atom.call(null,false)):(with_let62571[(1)]));
var on_success = ((init62572)?(with_let62571[(2)] = ((function (init62572,form_id,uploading_QMARK_,with_let62571){
return (function (filename){
cljs.core.reset_BANG_.call(null,modal_open_QMARK_,false);

cljs.core.reset_BANG_.call(null,uploading_QMARK_,false);

return success_action.call(null,filename);
});})(init62572,form_id,uploading_QMARK_,with_let62571))
):(with_let62571[(2)]));
var on_error = ((init62572)?(with_let62571[(3)] = ((function (init62572,form_id,uploading_QMARK_,on_success,with_let62571){
return (function (error){
cljs.core.reset_BANG_.call(null,modal_open_QMARK_,false);

cljs.core.reset_BANG_.call(null,uploading_QMARK_,false);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),error], null));
});})(init62572,form_id,uploading_QMARK_,on_success,with_let62571))
):(with_let62571[(3)]));
var res__51975__auto__ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Modal,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show","show",-576705889),cljs.core.deref.call(null,modal_open_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Modal.Header,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Modal.Title,"Upload File"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Modal.Body,(cljs.core.truth_(cljs.core.deref.call(null,uploading_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.spinner","div.spinner",-1989566624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bounce1","div.bounce1",-2061917968)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bounce2","div.bounce2",1958093487)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bounce3","div.bounce3",902748498)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),form_id,new cljs.core.Keyword(null,"enc-type","enc-type",-1746291599),"multipart/form-data",new cljs.core.Keyword(null,"method","method",55703592),"POST"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset.form-group","fieldset.form-group",-2065985896),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"file"], null),"Select a file to upload"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"hidden",new cljs.core.Keyword(null,"name","name",1843675177),"support-issue-id",new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(support_issue_id)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"file",new cljs.core.Keyword(null,"name","name",1843675177),"file",new cljs.core.Keyword(null,"type","type",1174270348),"file"], null)], null)], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Modal.Footer,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pull-right","div.pull-right",-588908187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-sm.btn-danger","button.btn.btn-sm.btn-danger",-1786051141),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref.call(null,uploading_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init62572,form_id,uploading_QMARK_,on_success,on_error,with_let62571){
return (function (){
return cljs.core.reset_BANG_.call(null,modal_open_QMARK_,false);
});})(init62572,form_id,uploading_QMARK_,on_success,on_error,with_let62571))
], null),"Cancel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-sm.btn-primary","button.btn.btn-sm.btn-primary",1703461621),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref.call(null,uploading_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init62572,form_id,uploading_QMARK_,on_success,on_error,with_let62571){
return (function (){
cljs.core.reset_BANG_.call(null,uploading_QMARK_,true);

return db_devops.attachments.upload_file_BANG_.call(null,form_id,on_success,on_error);
});})(init62572,form_id,uploading_QMARK_,on_success,on_error,with_let62571))
], null),"Upload"], null)], null)], null)], null);

return res__51975__auto__;
});

//# sourceMappingURL=attachments.js.map