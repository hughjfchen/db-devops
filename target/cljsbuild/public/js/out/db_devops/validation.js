// Compiled by ClojureScript 1.9.542 {}
goog.provide('db_devops.validation');
goog.require('cljs.core');
goog.require('bouncer.core');
goog.require('bouncer.validators');
db_devops.validation.format_validation_errors = (function db_devops$validation$format_validation_errors(errors){
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__55228){
var vec__55229 = p__55228;
var k = cljs.core.nth.call(null,vec__55229,(0),null);
var vec__55232 = cljs.core.nth.call(null,vec__55229,(1),null);
var v = cljs.core.nth.call(null,vec__55232,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}),cljs.core.first.call(null,errors))));
});
db_devops.validation.validate_issue = (function db_devops$validation$validate_issue(issue){
return db_devops.validation.format_validation_errors.call(null,bouncer.core.validate.call(null,(function (p__55238){
var map__55239 = p__55238;
var map__55239__$1 = ((((!((map__55239 == null)))?((((map__55239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55239.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55239):map__55239);
var path = cljs.core.get.call(null,map__55239__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583)], null),"Issue title is required",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952)], null),"Issue summary is required",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"detail","detail",-1545345025)], null),"Issue details are required",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977)], null),"Issue must have at least one tag"]).call(null,path);
}),issue,new cljs.core.Keyword(null,"title","title",636505583),bouncer.validators.required,new cljs.core.Keyword(null,"summary","summary",380847952),bouncer.validators.required,new cljs.core.Keyword(null,"detail","detail",-1545345025),bouncer.validators.required,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.min_count,(1)], null)], null)));
});
db_devops.validation.pass_matches_QMARK_ = (function db_devops$validation$pass_matches_QMARK_(pass_confirm,pass){
return cljs.core._EQ_.call(null,pass,pass_confirm);
});
db_devops.validation.validate_create_user = (function db_devops$validation$validate_create_user(user){
return db_devops.validation.format_validation_errors.call(null,bouncer.core.validate.call(null,(function (p__55244){
var map__55245 = p__55244;
var map__55245__$1 = ((((!((map__55245 == null)))?((((map__55245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55245.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55245):map__55245);
var path = cljs.core.get.call(null,map__55245__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screenname","screenname",-1023308683)], null),"Screenname is required",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pass","pass",1574159993)], null),"Password of 8+ characters is required",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pass-confirm","pass-confirm",-2050932590)], null),"Password confirmation doesn't match",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-admin","is-admin",-1352205216)], null),"You must specify whether the user is an admin",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",1895962068)], null),"You must pecify whether the user is active"]).call(null,path);
}),user,new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.min_count,(8)], null)], null),new cljs.core.Keyword(null,"pass-confirm","pass-confirm",-2050932590),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.validation.pass_matches_QMARK_,new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$1(user)], null)], null),new cljs.core.Keyword(null,"screenname","screenname",-1023308683),bouncer.validators.required,new cljs.core.Keyword(null,"admin","admin",-1239101627),bouncer.validators.required,new cljs.core.Keyword(null,"is-active","is-active",-1424968720),bouncer.validators.required));
});
db_devops.validation.validate_update_user = (function db_devops$validation$validate_update_user(user){
return db_devops.validation.format_validation_errors.call(null,bouncer.core.validate.call(null,(function (p__55250){
var map__55251 = p__55250;
var map__55251__$1 = ((((!((map__55251 == null)))?((((map__55251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55251.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55251):map__55251);
var path = cljs.core.get.call(null,map__55251__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screenname","screenname",-1023308683)], null),"Screenname is required",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-admin","is-admin",-1352205216)], null),"You must specify whether the user is an admin",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pass-confirm","pass-confirm",-2050932590)], null),"Password confirmation doesn't match",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active","active",1895962068)], null),"You must pecify whether the user is active"]).call(null,path);
}),user,new cljs.core.Keyword(null,"screenname","screenname",-1023308683),bouncer.validators.required,new cljs.core.Keyword(null,"admin","admin",-1239101627),bouncer.validators.required,new cljs.core.Keyword(null,"pass-confirm","pass-confirm",-2050932590),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_devops.validation.pass_matches_QMARK_,new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$1(user)], null)], null),new cljs.core.Keyword(null,"is-active","is-active",-1424968720),bouncer.validators.required));
});

//# sourceMappingURL=validation.js.map