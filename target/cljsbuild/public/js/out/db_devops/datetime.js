// Compiled by ClojureScript 1.9.542 {}
goog.provide('db_devops.datetime');
goog.require('cljs.core');
goog.require('cljs_time.format');
goog.require('cljs_time.coerce');
db_devops.datetime.format_date = (function db_devops$datetime$format_date(date){
return cljs_time.format.unparse.call(null,cljs_time.format.formatter.call(null,"dd-MM-yyyy"),cljs_time.coerce.from_date.call(null,date));
});

//# sourceMappingURL=datetime.js.map