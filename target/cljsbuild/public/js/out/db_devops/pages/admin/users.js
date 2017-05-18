// Compiled by ClojureScript 1.9.542 {}
goog.provide('db_devops.pages.admin.users');
goog.require('cljs.core');
goog.require('db_devops.bootstrap');
goog.require('re_frame.core');
goog.require('db_devops.key_events');
goog.require('db_devops.pages.common');
goog.require('db_devops.validation');
goog.require('reagent.core');
db_devops.pages.admin.users.user_search = (function db_devops$pages$admin$users$user_search(){
var with_let49693 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let49693","with-let49693",-1578428644));
var temp__4661__auto___49695 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4661__auto___49695 == null)){
} else {
var c__49538__auto___49696 = temp__4661__auto___49695;
if((with_let49693.generation === c__49538__auto___49696.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Warning: The same with-let is being used more "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("than once in the same reactive context.")].join(''));
} else {
}
} else {
}

with_let49693.generation = c__49538__auto___49696.ratomGeneration;
}


var init49694 = (with_let49693.length === (0));
var search = ((init49694)?(with_let49693[(0)] = reagent.core.atom.call(null,null)):(with_let49693[(0)]));
var do_search = ((init49694)?(with_let49693[(1)] = ((function (init49694,search,with_let49693){
return (function (){
var temp__4657__auto__ = cljs.core.not_empty.call(null,cljs.core.deref.call(null,search));
if(cljs.core.truth_(temp__4657__auto__)){
var value = temp__4657__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("admin","search-for-users","admin/search-for-users",1705250340),value], null));
} else {
return null;
}
});})(init49694,search,with_let49693))
):(with_let49693[(1)]));
var res__49539__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.FormGroup,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.InputGroup,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.FormControl,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"input-sm",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type in a user name to see their details",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (init49694,search,do_search,with_let49693){
return (function (p1__49689_SHARP_){
return cljs.core.reset_BANG_.call(null,search,p1__49689_SHARP_.target.value);
});})(init49694,search,do_search,with_let49693))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (init49694,search,do_search,with_let49693){
return (function (p1__49690_SHARP_){
return db_devops.key_events.on_enter.call(null,p1__49690_SHARP_,do_search);
});})(init49694,search,do_search,with_let49693))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.InputGroup.Button,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-sm.btn-default","button.btn.btn-sm.btn-default",601464018),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),do_search], null),"Search"], null)], null)], null)], null);

return res__49539__auto__;
});
db_devops.pages.admin.users.control_buttons = (function db_devops$pages$admin$users$control_buttons(user,close_editor){
var with_let49699 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let49699","with-let49699",-1709074972));
var temp__4661__auto___49701 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4661__auto___49701 == null)){
} else {
var c__49538__auto___49702 = temp__4661__auto___49701;
if((with_let49699.generation === c__49538__auto___49702.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Warning: The same with-let is being used more "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("than once in the same reactive context.")].join(''));
} else {
}
} else {
}

with_let49699.generation = c__49538__auto___49702.ratomGeneration;
}


var init49700 = (with_let49699.length === (0));
var errors = ((init49700)?(with_let49699[(0)] = reagent.core.atom.call(null,null)):(with_let49699[(0)]));
var user_id = ((init49700)?(with_let49699[(1)] = new cljs.core.Keyword(null,"user-id","user-id",-206822291).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,user))):(with_let49699[(1)]));
var res__49539__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row>div.col-sm-12","div.row>div.col-sm-12",1607036239),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.common.validation_modal,errors], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pull-right","div.pull-right",-588908187),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-toolbar","div.btn-toolbar",-2106091207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-sm.btn-danger","button.btn.btn-sm.btn-danger",-1786051141),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_editor], null),"Cancel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-sm.btn-success","button.btn.btn-sm.btn-success",-1505771455),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pull-right","pull-right",-1853033823),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init49700,errors,user_id,with_let49699){
return (function (){
var new_user_QMARK_ = (user_id == null);
if(cljs.core.truth_(cljs.core.reset_BANG_.call(null,errors,((new_user_QMARK_)?db_devops.validation.validate_create_user:db_devops.validation.validate_update_user).call(null,cljs.core.deref.call(null,user))))){
return null;
} else {
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((new_user_QMARK_)?new cljs.core.Keyword("admin","create-user-profile","admin/create-user-profile",1231415003):new cljs.core.Keyword("admin","update-user-profile","admin/update-user-profile",524338870)),cljs.core.deref.call(null,user)], null));

return close_editor.call(null);
}
});})(init49700,errors,user_id,with_let49699))
], null),"Save"], null)], null)], null)], null);

return res__49539__auto__;
});
db_devops.pages.admin.users.field_group = (function db_devops$pages$admin$users$field_group(label,cursor,type,placeholder){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.FormGroup,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.ControlLabel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-lg-2"], null),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-10","div.col-lg-10",-1936097528),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.FormControl,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__48251__auto__ = cljs.core.deref.call(null,cursor);
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__49703_SHARP_){
return cljs.core.reset_BANG_.call(null,cursor,p1__49703_SHARP_.target.value);
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder], null)], null)], null)], null);
});
db_devops.pages.admin.users.edit_user = (function db_devops$pages$admin$users$edit_user(title,user_map,close_editor){
var with_let49706 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let49706","with-let49706",-1765244041));
var temp__4661__auto___49708 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4661__auto___49708 == null)){
} else {
var c__49538__auto___49709 = temp__4661__auto___49708;
if((with_let49706.generation === c__49538__auto___49709.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Warning: The same with-let is being used more "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("than once in the same reactive context.")].join(''));
} else {
}
} else {
}

with_let49706.generation = c__49538__auto___49709.ratomGeneration;
}


var init49707 = (with_let49706.length === (0));
var user = ((init49707)?(with_let49706[(0)] = reagent.core.atom.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.dissoc.call(null,user_map,new cljs.core.Keyword(null,"last-login","last-login",-516868212)),new cljs.core.Keyword(null,"pass","pass",1574159993),cljs.core.identity),new cljs.core.Keyword(null,"pass-confirm","pass-confirm",-2050932590),cljs.core.identity),new cljs.core.Keyword(null,"admin","admin",-1239101627),cljs.core.boolean$),new cljs.core.Keyword(null,"is-active","is-active",-1424968720),cljs.core.boolean$))):(with_let49706[(0)]));
var res__49539__auto__ = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-horizontal","div.form-horizontal",-2097357544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),title], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.admin.users.field_group,"Screen Name",reagent.core.cursor.call(null,user,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screenname","screenname",-1023308683)], null)),new cljs.core.Keyword(null,"text","text",-1790561697),"Enter screen name for the user"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.admin.users.field_group,"Password",reagent.core.cursor.call(null,user,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pass","pass",1574159993)], null)),new cljs.core.Keyword(null,"password","password",417022471),(cljs.core.truth_(new cljs.core.Keyword(null,"last-login","last-login",-516868212).cljs$core$IFn$_invoke$arity$1(user_map))?"Enter the password for the user (leave empty to keep the existing password)":"Enter the password for the user")], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.admin.users.field_group,"Confirm password",reagent.core.cursor.call(null,user,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pass-confirm","pass-confirm",-2050932590)], null)),new cljs.core.Keyword(null,"password","password",417022471),"Confirm the password for the user"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.FormGroup,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.col-lg-2","span.col-lg-2",1096172334)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-10","div.col-lg-10",-1936097528),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Checkbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"admin","admin",-1239101627).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,user))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (init49707,user,with_let49706){
return (function (){
return cljs.core.swap_BANG_.call(null,user,cljs.core.update,new cljs.core.Keyword(null,"admin","admin",-1239101627),cljs.core.not);
});})(init49707,user,with_let49706))
], null),"Admin"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.Checkbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"is-active","is-active",-1424968720).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,user))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (init49707,user,with_let49706){
return (function (){
return cljs.core.swap_BANG_.call(null,user,cljs.core.update,new cljs.core.Keyword(null,"is-active","is-active",-1424968720),cljs.core.not);
});})(init49707,user,with_let49706))
], null),"Active"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.admin.users.control_buttons,user,close_editor], null)], null);

return res__49539__auto__;
});
db_devops.pages.admin.users.user_info = (function db_devops$pages$admin$users$user_info(user_map){
var with_let49712 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let49712","with-let49712",-1093402657));
var temp__4661__auto___49714 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4661__auto___49714 == null)){
} else {
var c__49538__auto___49715 = temp__4661__auto___49714;
if((with_let49712.generation === c__49538__auto___49715.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Warning: The same with-let is being used more "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("than once in the same reactive context.")].join(''));
} else {
}
} else {
}

with_let49712.generation = c__49538__auto___49715.ratomGeneration;
}


var init49713 = (with_let49712.length === (0));
var expanded_QMARK_ = ((init49713)?(with_let49712[(0)] = reagent.core.atom.call(null,false)):(with_let49712[(0)]));
var res__49539__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.ListGroupItem,(cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.admin.users.edit_user,"Edit User",user_map,((function (init49713,expanded_QMARK_,with_let49712){
return (function (){
return cljs.core.reset_BANG_.call(null,expanded_QMARK_,false);
});})(init49713,expanded_QMARK_,with_let49712))
], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"screenname","screenname",-1023308683).cljs$core$IFn$_invoke$arity$1(user_map)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-xs.btn-primary.pull-right","button.btn.btn-xs.btn-primary.pull-right",481717870),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init49713,expanded_QMARK_,with_let49712){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(init49713,expanded_QMARK_,with_let49712))
], null),"Edit"], null)], null))], null);

return res__49539__auto__;
});
db_devops.pages.admin.users.user_list = (function db_devops$pages$admin$users$user_list(){
var users = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("admin","users","admin/users",-956427918)], null));
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,users))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.bootstrap.ListGroup,(function (){var iter__49039__auto__ = ((function (users){
return (function db_devops$pages$admin$users$user_list_$_iter__49720(s__49721){
return (new cljs.core.LazySeq(null,((function (users){
return (function (){
var s__49721__$1 = s__49721;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__49721__$1);
if(temp__4657__auto__){
var s__49721__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49721__$2)){
var c__49037__auto__ = cljs.core.chunk_first.call(null,s__49721__$2);
var size__49038__auto__ = cljs.core.count.call(null,c__49037__auto__);
var b__49723 = cljs.core.chunk_buffer.call(null,size__49038__auto__);
if((function (){var i__49722 = (0);
while(true){
if((i__49722 < size__49038__auto__)){
var user = cljs.core._nth.call(null,c__49037__auto__,i__49722);
cljs.core.chunk_append.call(null,b__49723,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.admin.users.user_info,user], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"user-id","user-id",-206822291).cljs$core$IFn$_invoke$arity$1(user)], null)));

var G__49724 = (i__49722 + (1));
i__49722 = G__49724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49723),db_devops$pages$admin$users$user_list_$_iter__49720.call(null,cljs.core.chunk_rest.call(null,s__49721__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49723),null);
}
} else {
var user = cljs.core.first.call(null,s__49721__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.admin.users.user_info,user], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"user-id","user-id",-206822291).cljs$core$IFn$_invoke$arity$1(user)], null)),db_devops$pages$admin$users$user_list_$_iter__49720.call(null,cljs.core.rest.call(null,s__49721__$2)));
}
} else {
return null;
}
break;
}
});})(users))
,null,null));
});})(users))
;
return iter__49039__auto__.call(null,cljs.core.deref.call(null,users));
})()], null);
}
});
db_devops.pages.admin.users.users_page = (function db_devops$pages$admin$users$users_page(){
var with_let49727 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let49727","with-let49727",1999640141));
var temp__4661__auto___49729 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__4661__auto___49729 == null)){
} else {
var c__49538__auto___49730 = temp__4661__auto___49729;
if((with_let49727.generation === c__49538__auto___49730.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Warning: The same with-let is being used more "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("than once in the same reactive context.")].join(''));
} else {
}
} else {
}

with_let49727.generation = c__49538__auto___49730.ratomGeneration;
}


var init49728 = (with_let49727.length === (0));
var show_new_user_form_QMARK_ = ((init49728)?(with_let49727[(0)] = reagent.core.atom.call(null,false)):(with_let49727[(0)]));
var res__49539__auto__ = (cljs.core.truth_(cljs.core.deref.call(null,show_new_user_form_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-12","div.col-sm-12",-1900061411),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.admin.users.edit_user,"Add User",cljs.core.PersistentArrayMap.EMPTY,((function (init49728,show_new_user_form_QMARK_,with_let49727){
return (function (){
return cljs.core.reset_BANG_.call(null,show_new_user_form_QMARK_,false);
});})(init49728,show_new_user_form_QMARK_,with_let49727))
], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-10","div.col-sm-10",353164674),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.admin.users.user_search], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-2","div.col-sm-2",-509844827),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-sm.btn-success.pull-right","button.btn.btn-sm.btn-success.pull-right",988473361),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (init49728,show_new_user_form_QMARK_,with_let49727){
return (function (){
return cljs.core.reset_BANG_.call(null,show_new_user_form_QMARK_,true);
});})(init49728,show_new_user_form_QMARK_,with_let49727))
], null),"Add new user"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.pages.admin.users.user_list], null)], null));

return res__49539__auto__;
});

//# sourceMappingURL=users.js.map