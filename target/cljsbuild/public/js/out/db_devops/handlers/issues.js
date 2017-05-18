// Compiled by ClojureScript 1.9.542 {}
goog.provide('db_devops.handlers.issues');
goog.require('cljs.core');
goog.require('db_devops.attachments');
goog.require('re_frame.core');
goog.require('db_devops.routes');
goog.require('db_devops.ajax');
goog.require('ajax.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-issue","set-issue",1890981304),(function (db,p__62577){
var vec__62578 = p__62577;
var _ = cljs.core.nth.call(null,vec__62578,(0),null);
var issue = cljs.core.nth.call(null,vec__62578,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"issue","issue",1725456421),issue);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"close-issue","close-issue",2029016707),(function (db,_){
return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"issue","issue",1725456421));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-issues","set-issues",-1783741546),(function (db,p__62581){
var vec__62582 = p__62581;
var _ = cljs.core.nth.call(null,vec__62582,(0),null);
var issues = cljs.core.nth.call(null,vec__62582,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"issues","issues",1989874693),issues);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-all-issues","load-all-issues",1623295041),(function (db,_){
ajax.core.GET.call(null,"/api/issues",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__62585_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-issues","set-issues",-1783741546),new cljs.core.Keyword(null,"issues","issues",1989874693).cljs$core$IFn$_invoke$arity$1(p1__62585_SHARP_)], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__62586_SHARP_){
return db_devops.ajax.ajax_error.call(null,p1__62586_SHARP_);
})], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-recent-issues","load-recent-issues",1341408468),(function (db,_){
ajax.core.GET.call(null,"/api/recent-issues",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__62587_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-issues","set-issues",-1783741546),new cljs.core.Keyword(null,"issues","issues",1989874693).cljs$core$IFn$_invoke$arity$1(p1__62587_SHARP_)], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__62588_SHARP_){
return db_devops.ajax.ajax_error.call(null,p1__62588_SHARP_);
})], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-most-viewed-issues","load-most-viewed-issues",671227116),(function (db,_){
ajax.core.GET.call(null,"/api/issues-by-views/0/20",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__62589_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-issues","set-issues",-1783741546),new cljs.core.Keyword(null,"issues","issues",1989874693).cljs$core$IFn$_invoke$arity$1(p1__62589_SHARP_)], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__62590_SHARP_){
return db_devops.ajax.ajax_error.call(null,p1__62590_SHARP_);
})], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-issues-for-tag","load-issues-for-tag",1517114544),(function (db,p__62593){
var vec__62594 = p__62593;
var _ = cljs.core.nth.call(null,vec__62594,(0),null);
var tag = cljs.core.nth.call(null,vec__62594,(1),null);
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/api/issues-by-tag/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__62594,_,tag){
return (function (p1__62591_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-issues","set-issues",-1783741546),new cljs.core.Keyword(null,"issues","issues",1989874693).cljs$core$IFn$_invoke$arity$1(p1__62591_SHARP_)], null));
});})(vec__62594,_,tag))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__62594,_,tag){
return (function (p1__62592_SHARP_){
return db_devops.ajax.ajax_error.call(null,p1__62592_SHARP_);
});})(vec__62594,_,tag))
], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"search-for-issues","search-for-issues",-1618256976),(function (db,p__62599){
var vec__62600 = p__62599;
var _ = cljs.core.nth.call(null,vec__62600,(0),null);
var query = cljs.core.nth.call(null,vec__62600,(1),null);
ajax.core.POST.call(null,"/api/search-issues",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"limit","limit",-1355822363),(10),new cljs.core.Keyword(null,"offset","offset",296498311),(0)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__62600,_,query){
return (function (p1__62597_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-issues","set-issues",-1783741546),new cljs.core.Keyword(null,"issues","issues",1989874693).cljs$core$IFn$_invoke$arity$1(p1__62597_SHARP_)], null));
});})(vec__62600,_,query))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__62600,_,query){
return (function (p1__62598_SHARP_){
return db_devops.ajax.ajax_error.call(null,p1__62598_SHARP_);
});})(vec__62600,_,query))
], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-issue-detail","load-issue-detail",1122173330),(function (db,p__62605){
var vec__62606 = p__62605;
var _ = cljs.core.nth.call(null,vec__62606,(0),null);
var support_issue_id = cljs.core.nth.call(null,vec__62606,(1),null);
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/api/issue/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(support_issue_id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__62606,_,support_issue_id){
return (function (p1__62603_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-issue","set-issue",1890981304),new cljs.core.Keyword(null,"issue","issue",1725456421).cljs$core$IFn$_invoke$arity$1(p1__62603_SHARP_)], null));
});})(vec__62606,_,support_issue_id))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__62606,_,support_issue_id){
return (function (p1__62604_SHARP_){
return db_devops.ajax.ajax_error.call(null,p1__62604_SHARP_);
});})(vec__62606,_,support_issue_id))
], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-and-view-issue","load-and-view-issue",-1931598841),(function (db,p__62611){
var vec__62612 = p__62611;
var _ = cljs.core.nth.call(null,vec__62612,(0),null);
var support_issue_id = cljs.core.nth.call(null,vec__62612,(1),null);
ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/api/issue/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(support_issue_id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__62612,_,support_issue_id){
return (function (p1__62609_SHARP_){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-issue","set-issue",1890981304),new cljs.core.Keyword(null,"issue","issue",1725456421).cljs$core$IFn$_invoke$arity$1(p1__62609_SHARP_)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.Keyword(null,"view-issue","view-issue",-630501608)], null));
});})(vec__62612,_,support_issue_id))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__62612,_,support_issue_id){
return (function (p1__62610_SHARP_){
return db_devops.ajax.ajax_error.call(null,p1__62610_SHARP_);
});})(vec__62612,_,support_issue_id))
], null));

return cljs.core.dissoc.call(null,db,new cljs.core.Keyword(null,"issue","issue",1725456421));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-issue-save","process-issue-save",-1687889961),(function (db,issue){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-page","active-page",370357330),new cljs.core.Keyword(null,"view-issue","view-issue",-630501608),new cljs.core.Keyword(null,"issue","issue",1725456421),issue);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"create-issue","create-issue",69105034),(function (db,p__62617){
var vec__62618 = p__62617;
var _ = cljs.core.nth.call(null,vec__62618,(0),null);
var map__62621 = cljs.core.nth.call(null,vec__62618,(1),null);
var map__62621__$1 = ((((!((map__62621 == null)))?((((map__62621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62621.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62621):map__62621);
var issue = map__62621__$1;
var title = cljs.core.get.call(null,map__62621__$1,new cljs.core.Keyword(null,"title","title",636505583));
var summary = cljs.core.get.call(null,map__62621__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var detail = cljs.core.get.call(null,map__62621__$1,new cljs.core.Keyword(null,"detail","detail",-1545345025));
var tags = cljs.core.get.call(null,map__62621__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
ajax.core.POST.call(null,"/api/issue",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"summary","summary",380847952),summary,new cljs.core.Keyword(null,"detail","detail",-1545345025),detail,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.vec.call(null,tags)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__62618,_,map__62621,map__62621__$1,issue,title,summary,detail,tags){
return (function (p1__62615_SHARP_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-tags","load-tags",2054471855)], null),tags);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-issue","set-issue",1890981304),cljs.core.assoc.call(null,issue,new cljs.core.Keyword(null,"support-issue-id","support-issue-id",1313110604),p1__62615_SHARP_)], null));

return db_devops.routes.navigate_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/issue/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__62615_SHARP_)].join(''));
});})(vec__62618,_,map__62621,map__62621__$1,issue,title,summary,detail,tags))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__62618,_,map__62621,map__62621__$1,issue,title,summary,detail,tags){
return (function (p1__62616_SHARP_){
return db_devops.ajax.ajax_error.call(null,p1__62616_SHARP_);
});})(vec__62618,_,map__62621,map__62621__$1,issue,title,summary,detail,tags))
], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"save-issue","save-issue",2036202104),(function (db,p__62624){
var vec__62625 = p__62624;
var _ = cljs.core.nth.call(null,vec__62625,(0),null);
var map__62628 = cljs.core.nth.call(null,vec__62625,(1),null);
var map__62628__$1 = ((((!((map__62628 == null)))?((((map__62628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62628.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62628):map__62628);
var issue = map__62628__$1;
var support_issue_id = cljs.core.get.call(null,map__62628__$1,new cljs.core.Keyword(null,"support-issue-id","support-issue-id",1313110604));
var title = cljs.core.get.call(null,map__62628__$1,new cljs.core.Keyword(null,"title","title",636505583));
var summary = cljs.core.get.call(null,map__62628__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var detail = cljs.core.get.call(null,map__62628__$1,new cljs.core.Keyword(null,"detail","detail",-1545345025));
var tags = cljs.core.get.call(null,map__62628__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
ajax.core.PUT.call(null,"/api/issue",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"support-issue-id","support-issue-id",1313110604),support_issue_id,new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"summary","summary",380847952),summary,new cljs.core.Keyword(null,"detail","detail",-1545345025),detail,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.vec.call(null,tags)], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__62625,_,map__62628,map__62628__$1,issue,support_issue_id,title,summary,detail,tags){
return (function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-tags","load-tags",2054471855)], null),tags);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-issue","set-issue",1890981304),issue], null));

return db_devops.routes.navigate_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/issue/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(support_issue_id)].join(''));
});})(vec__62625,_,map__62628,map__62628__$1,issue,support_issue_id,title,summary,detail,tags))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__62625,_,map__62628,map__62628__$1,issue,support_issue_id,title,summary,detail,tags){
return (function (p1__62623_SHARP_){
return db_devops.ajax.ajax_error.call(null,p1__62623_SHARP_);
});})(vec__62625,_,map__62628,map__62628__$1,issue,support_issue_id,title,summary,detail,tags))
], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"delete-issue","delete-issue",303586578),(function (db,p__62631){
var vec__62632 = p__62631;
var _ = cljs.core.nth.call(null,vec__62632,(0),null);
var support_issue_id = cljs.core.nth.call(null,vec__62632,(1),null);
ajax.core.DELETE.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/api/issue/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(support_issue_id)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__62632,_,support_issue_id){
return (function (){
return db_devops.routes.navigate_BANG_.call(null,"/");
});})(vec__62632,_,support_issue_id))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__62632,_,support_issue_id){
return (function (p1__62630_SHARP_){
return db_devops.ajax.ajax_error.call(null,p1__62630_SHARP_);
});})(vec__62632,_,support_issue_id))
], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"attach-file","attach-file",400252107),(function (db,p__62635){
var vec__62636 = p__62635;
var _ = cljs.core.nth.call(null,vec__62636,(0),null);
var filename = cljs.core.nth.call(null,vec__62636,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"issue","issue",1725456421),new cljs.core.Keyword(null,"files","files",-472457450)], null),cljs.core.conj,filename);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"remove-file-from-issue","remove-file-from-issue",2147365866),(function (db,p__62640){
var vec__62641 = p__62640;
var _ = cljs.core.nth.call(null,vec__62641,(0),null);
var filename = cljs.core.nth.call(null,vec__62641,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"issue","issue",1725456421),new cljs.core.Keyword(null,"files","files",-472457450)], null),((function (vec__62641,_,filename){
return (function (p1__62639_SHARP_){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([filename]),p1__62639_SHARP_);
});})(vec__62641,_,filename))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"delete-file","delete-file",527846719),(function (db,p__62645){
var vec__62646 = p__62645;
var _ = cljs.core.nth.call(null,vec__62646,(0),null);
var support_issue_id = cljs.core.nth.call(null,vec__62646,(1),null);
var filename = cljs.core.nth.call(null,vec__62646,(2),null);
ajax.core.DELETE.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/api/file/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(support_issue_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__62646,_,support_issue_id,filename){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-file-from-issue","remove-file-from-issue",2147365866),filename], null));
});})(vec__62646,_,support_issue_id,filename))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__62646,_,support_issue_id,filename){
return (function (p1__62644_SHARP_){
return db_devops.ajax.ajax_error.call(null,p1__62644_SHARP_);
});})(vec__62646,_,support_issue_id,filename))
], null));

return db;
}));

//# sourceMappingURL=issues.js.map