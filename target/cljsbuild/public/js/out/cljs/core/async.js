// Compiled by ClojureScript 1.9.542 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args57429 = [];
var len__49364__auto___57435 = arguments.length;
var i__49365__auto___57436 = (0);
while(true){
if((i__49365__auto___57436 < len__49364__auto___57435)){
args57429.push((arguments[i__49365__auto___57436]));

var G__57437 = (i__49365__auto___57436 + (1));
i__49365__auto___57436 = G__57437;
continue;
} else {
}
break;
}

var G__57431 = args57429.length;
switch (G__57431) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args57429.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async57432 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57432 = (function (f,blockable,meta57433){
this.f = f;
this.blockable = blockable;
this.meta57433 = meta57433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async57432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57434,meta57433__$1){
var self__ = this;
var _57434__$1 = this;
return (new cljs.core.async.t_cljs$core$async57432(self__.f,self__.blockable,meta57433__$1));
});

cljs.core.async.t_cljs$core$async57432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57434){
var self__ = this;
var _57434__$1 = this;
return self__.meta57433;
});

cljs.core.async.t_cljs$core$async57432.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57432.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async57432.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async57432.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async57432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta57433","meta57433",262403405,null)], null);
});

cljs.core.async.t_cljs$core$async57432.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57432";

cljs.core.async.t_cljs$core$async57432.cljs$lang$ctorPrWriter = (function (this__48862__auto__,writer__48863__auto__,opt__48864__auto__){
return cljs.core._write.call(null,writer__48863__auto__,"cljs.core.async/t_cljs$core$async57432");
});

cljs.core.async.__GT_t_cljs$core$async57432 = (function cljs$core$async$__GT_t_cljs$core$async57432(f__$1,blockable__$1,meta57433){
return (new cljs.core.async.t_cljs$core$async57432(f__$1,blockable__$1,meta57433));
});

}

return (new cljs.core.async.t_cljs$core$async57432(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args57441 = [];
var len__49364__auto___57444 = arguments.length;
var i__49365__auto___57445 = (0);
while(true){
if((i__49365__auto___57445 < len__49364__auto___57444)){
args57441.push((arguments[i__49365__auto___57445]));

var G__57446 = (i__49365__auto___57445 + (1));
i__49365__auto___57445 = G__57446;
continue;
} else {
}
break;
}

var G__57443 = args57441.length;
switch (G__57443) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args57441.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args57448 = [];
var len__49364__auto___57451 = arguments.length;
var i__49365__auto___57452 = (0);
while(true){
if((i__49365__auto___57452 < len__49364__auto___57451)){
args57448.push((arguments[i__49365__auto___57452]));

var G__57453 = (i__49365__auto___57452 + (1));
i__49365__auto___57452 = G__57453;
continue;
} else {
}
break;
}

var G__57450 = args57448.length;
switch (G__57450) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args57448.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args57455 = [];
var len__49364__auto___57458 = arguments.length;
var i__49365__auto___57459 = (0);
while(true){
if((i__49365__auto___57459 < len__49364__auto___57458)){
args57455.push((arguments[i__49365__auto___57459]));

var G__57460 = (i__49365__auto___57459 + (1));
i__49365__auto___57459 = G__57460;
continue;
} else {
}
break;
}

var G__57457 = args57455.length;
switch (G__57457) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args57455.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_57462 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_57462);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_57462,ret){
return (function (){
return fn1.call(null,val_57462);
});})(val_57462,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args57463 = [];
var len__49364__auto___57466 = arguments.length;
var i__49365__auto___57467 = (0);
while(true){
if((i__49365__auto___57467 < len__49364__auto___57466)){
args57463.push((arguments[i__49365__auto___57467]));

var G__57468 = (i__49365__auto___57467 + (1));
i__49365__auto___57467 = G__57468;
continue;
} else {
}
break;
}

var G__57465 = args57463.length;
switch (G__57465) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args57463.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__49174__auto___57470 = n;
var x_57471 = (0);
while(true){
if((x_57471 < n__49174__auto___57470)){
(a[x_57471] = (0));

var G__57472 = (x_57471 + (1));
x_57471 = G__57472;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__57473 = (i + (1));
i = G__57473;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async57477 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57477 = (function (flag,meta57478){
this.flag = flag;
this.meta57478 = meta57478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async57477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_57479,meta57478__$1){
var self__ = this;
var _57479__$1 = this;
return (new cljs.core.async.t_cljs$core$async57477(self__.flag,meta57478__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async57477.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_57479){
var self__ = this;
var _57479__$1 = this;
return self__.meta57478;
});})(flag))
;

cljs.core.async.t_cljs$core$async57477.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57477.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async57477.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async57477.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async57477.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta57478","meta57478",168083275,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async57477.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57477.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57477";

cljs.core.async.t_cljs$core$async57477.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__48862__auto__,writer__48863__auto__,opt__48864__auto__){
return cljs.core._write.call(null,writer__48863__auto__,"cljs.core.async/t_cljs$core$async57477");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async57477 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async57477(flag__$1,meta57478){
return (new cljs.core.async.t_cljs$core$async57477(flag__$1,meta57478));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async57477(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async57483 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57483 = (function (flag,cb,meta57484){
this.flag = flag;
this.cb = cb;
this.meta57484 = meta57484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async57483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57485,meta57484__$1){
var self__ = this;
var _57485__$1 = this;
return (new cljs.core.async.t_cljs$core$async57483(self__.flag,self__.cb,meta57484__$1));
});

cljs.core.async.t_cljs$core$async57483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57485){
var self__ = this;
var _57485__$1 = this;
return self__.meta57484;
});

cljs.core.async.t_cljs$core$async57483.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async57483.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async57483.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async57483.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async57483.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta57484","meta57484",538620387,null)], null);
});

cljs.core.async.t_cljs$core$async57483.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async57483.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57483";

cljs.core.async.t_cljs$core$async57483.cljs$lang$ctorPrWriter = (function (this__48862__auto__,writer__48863__auto__,opt__48864__auto__){
return cljs.core._write.call(null,writer__48863__auto__,"cljs.core.async/t_cljs$core$async57483");
});

cljs.core.async.__GT_t_cljs$core$async57483 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async57483(flag__$1,cb__$1,meta57484){
return (new cljs.core.async.t_cljs$core$async57483(flag__$1,cb__$1,meta57484));
});

}

return (new cljs.core.async.t_cljs$core$async57483(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__57486_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__57486_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__57487_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__57487_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__48251__auto__ = wport;
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
return port;
}
})()], null));
} else {
var G__57488 = (i + (1));
i = G__57488;
continue;
}
} else {
return null;
}
break;
}
})();
var or__48251__auto__ = ret;
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__48239__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__48239__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__48239__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__49371__auto__ = [];
var len__49364__auto___57494 = arguments.length;
var i__49365__auto___57495 = (0);
while(true){
if((i__49365__auto___57495 < len__49364__auto___57494)){
args__49371__auto__.push((arguments[i__49365__auto___57495]));

var G__57496 = (i__49365__auto___57495 + (1));
i__49365__auto___57495 = G__57496;
continue;
} else {
}
break;
}

var argseq__49372__auto__ = ((((1) < args__49371__auto__.length))?(new cljs.core.IndexedSeq(args__49371__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__49372__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__57491){
var map__57492 = p__57491;
var map__57492__$1 = ((((!((map__57492 == null)))?((((map__57492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57492.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57492):map__57492);
var opts = map__57492__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq57489){
var G__57490 = cljs.core.first.call(null,seq57489);
var seq57489__$1 = cljs.core.next.call(null,seq57489);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__57490,seq57489__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args57497 = [];
var len__49364__auto___57547 = arguments.length;
var i__49365__auto___57548 = (0);
while(true){
if((i__49365__auto___57548 < len__49364__auto___57547)){
args57497.push((arguments[i__49365__auto___57548]));

var G__57549 = (i__49365__auto___57548 + (1));
i__49365__auto___57548 = G__57549;
continue;
} else {
}
break;
}

var G__57499 = args57497.length;
switch (G__57499) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args57497.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__57384__auto___57551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__57384__auto___57551){
return (function (){
var f__57385__auto__ = (function (){var switch__57272__auto__ = ((function (c__57384__auto___57551){
return (function (state_57523){
var state_val_57524 = (state_57523[(1)]);
if((state_val_57524 === (7))){
var inst_57519 = (state_57523[(2)]);
var state_57523__$1 = state_57523;
var statearr_57525_57552 = state_57523__$1;
(statearr_57525_57552[(2)] = inst_57519);

(statearr_57525_57552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57524 === (1))){
var state_57523__$1 = state_57523;
var statearr_57526_57553 = state_57523__$1;
(statearr_57526_57553[(2)] = null);

(statearr_57526_57553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57524 === (4))){
var inst_57502 = (state_57523[(7)]);
var inst_57502__$1 = (state_57523[(2)]);
var inst_57503 = (inst_57502__$1 == null);
var state_57523__$1 = (function (){var statearr_57527 = state_57523;
(statearr_57527[(7)] = inst_57502__$1);

return statearr_57527;
})();
if(cljs.core.truth_(inst_57503)){
var statearr_57528_57554 = state_57523__$1;
(statearr_57528_57554[(1)] = (5));

} else {
var statearr_57529_57555 = state_57523__$1;
(statearr_57529_57555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57524 === (13))){
var state_57523__$1 = state_57523;
var statearr_57530_57556 = state_57523__$1;
(statearr_57530_57556[(2)] = null);

(statearr_57530_57556[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57524 === (6))){
var inst_57502 = (state_57523[(7)]);
var state_57523__$1 = state_57523;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57523__$1,(11),to,inst_57502);
} else {
if((state_val_57524 === (3))){
var inst_57521 = (state_57523[(2)]);
var state_57523__$1 = state_57523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57523__$1,inst_57521);
} else {
if((state_val_57524 === (12))){
var state_57523__$1 = state_57523;
var statearr_57531_57557 = state_57523__$1;
(statearr_57531_57557[(2)] = null);

(statearr_57531_57557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57524 === (2))){
var state_57523__$1 = state_57523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57523__$1,(4),from);
} else {
if((state_val_57524 === (11))){
var inst_57512 = (state_57523[(2)]);
var state_57523__$1 = state_57523;
if(cljs.core.truth_(inst_57512)){
var statearr_57532_57558 = state_57523__$1;
(statearr_57532_57558[(1)] = (12));

} else {
var statearr_57533_57559 = state_57523__$1;
(statearr_57533_57559[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57524 === (9))){
var state_57523__$1 = state_57523;
var statearr_57534_57560 = state_57523__$1;
(statearr_57534_57560[(2)] = null);

(statearr_57534_57560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57524 === (5))){
var state_57523__$1 = state_57523;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57535_57561 = state_57523__$1;
(statearr_57535_57561[(1)] = (8));

} else {
var statearr_57536_57562 = state_57523__$1;
(statearr_57536_57562[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57524 === (14))){
var inst_57517 = (state_57523[(2)]);
var state_57523__$1 = state_57523;
var statearr_57537_57563 = state_57523__$1;
(statearr_57537_57563[(2)] = inst_57517);

(statearr_57537_57563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57524 === (10))){
var inst_57509 = (state_57523[(2)]);
var state_57523__$1 = state_57523;
var statearr_57538_57564 = state_57523__$1;
(statearr_57538_57564[(2)] = inst_57509);

(statearr_57538_57564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57524 === (8))){
var inst_57506 = cljs.core.async.close_BANG_.call(null,to);
var state_57523__$1 = state_57523;
var statearr_57539_57565 = state_57523__$1;
(statearr_57539_57565[(2)] = inst_57506);

(statearr_57539_57565[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__57384__auto___57551))
;
return ((function (switch__57272__auto__,c__57384__auto___57551){
return (function() {
var cljs$core$async$state_machine__57273__auto__ = null;
var cljs$core$async$state_machine__57273__auto____0 = (function (){
var statearr_57543 = [null,null,null,null,null,null,null,null];
(statearr_57543[(0)] = cljs$core$async$state_machine__57273__auto__);

(statearr_57543[(1)] = (1));

return statearr_57543;
});
var cljs$core$async$state_machine__57273__auto____1 = (function (state_57523){
while(true){
var ret_value__57274__auto__ = (function (){try{while(true){
var result__57275__auto__ = switch__57272__auto__.call(null,state_57523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57275__auto__;
}
break;
}
}catch (e57544){if((e57544 instanceof Object)){
var ex__57276__auto__ = e57544;
var statearr_57545_57566 = state_57523;
(statearr_57545_57566[(5)] = ex__57276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57567 = state_57523;
state_57523 = G__57567;
continue;
} else {
return ret_value__57274__auto__;
}
break;
}
});
cljs$core$async$state_machine__57273__auto__ = function(state_57523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57273__auto____1.call(this,state_57523);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57273__auto____0;
cljs$core$async$state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57273__auto____1;
return cljs$core$async$state_machine__57273__auto__;
})()
;})(switch__57272__auto__,c__57384__auto___57551))
})();
var state__57386__auto__ = (function (){var statearr_57546 = f__57385__auto__.call(null);
(statearr_57546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__57384__auto___57551);

return statearr_57546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__57386__auto__);
});})(c__57384__auto___57551))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__57755){
var vec__57756 = p__57755;
var v = cljs.core.nth.call(null,vec__57756,(0),null);
var p = cljs.core.nth.call(null,vec__57756,(1),null);
var job = vec__57756;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__57384__auto___57942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__57384__auto___57942,res,vec__57756,v,p,job,jobs,results){
return (function (){
var f__57385__auto__ = (function (){var switch__57272__auto__ = ((function (c__57384__auto___57942,res,vec__57756,v,p,job,jobs,results){
return (function (state_57763){
var state_val_57764 = (state_57763[(1)]);
if((state_val_57764 === (1))){
var state_57763__$1 = state_57763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57763__$1,(2),res,v);
} else {
if((state_val_57764 === (2))){
var inst_57760 = (state_57763[(2)]);
var inst_57761 = cljs.core.async.close_BANG_.call(null,res);
var state_57763__$1 = (function (){var statearr_57765 = state_57763;
(statearr_57765[(7)] = inst_57760);

return statearr_57765;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57763__$1,inst_57761);
} else {
return null;
}
}
});})(c__57384__auto___57942,res,vec__57756,v,p,job,jobs,results))
;
return ((function (switch__57272__auto__,c__57384__auto___57942,res,vec__57756,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____0 = (function (){
var statearr_57769 = [null,null,null,null,null,null,null,null];
(statearr_57769[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__);

(statearr_57769[(1)] = (1));

return statearr_57769;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____1 = (function (state_57763){
while(true){
var ret_value__57274__auto__ = (function (){try{while(true){
var result__57275__auto__ = switch__57272__auto__.call(null,state_57763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57275__auto__;
}
break;
}
}catch (e57770){if((e57770 instanceof Object)){
var ex__57276__auto__ = e57770;
var statearr_57771_57943 = state_57763;
(statearr_57771_57943[(5)] = ex__57276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57944 = state_57763;
state_57763 = G__57944;
continue;
} else {
return ret_value__57274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__ = function(state_57763){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____1.call(this,state_57763);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__;
})()
;})(switch__57272__auto__,c__57384__auto___57942,res,vec__57756,v,p,job,jobs,results))
})();
var state__57386__auto__ = (function (){var statearr_57772 = f__57385__auto__.call(null);
(statearr_57772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__57384__auto___57942);

return statearr_57772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__57386__auto__);
});})(c__57384__auto___57942,res,vec__57756,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__57773){
var vec__57774 = p__57773;
var v = cljs.core.nth.call(null,vec__57774,(0),null);
var p = cljs.core.nth.call(null,vec__57774,(1),null);
var job = vec__57774;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__49174__auto___57945 = n;
var __57946 = (0);
while(true){
if((__57946 < n__49174__auto___57945)){
var G__57777_57947 = type;
var G__57777_57948__$1 = (((G__57777_57947 instanceof cljs.core.Keyword))?G__57777_57947.fqn:null);
switch (G__57777_57948__$1) {
case "compute":
var c__57384__auto___57950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__57946,c__57384__auto___57950,G__57777_57947,G__57777_57948__$1,n__49174__auto___57945,jobs,results,process,async){
return (function (){
var f__57385__auto__ = (function (){var switch__57272__auto__ = ((function (__57946,c__57384__auto___57950,G__57777_57947,G__57777_57948__$1,n__49174__auto___57945,jobs,results,process,async){
return (function (state_57790){
var state_val_57791 = (state_57790[(1)]);
if((state_val_57791 === (1))){
var state_57790__$1 = state_57790;
var statearr_57792_57951 = state_57790__$1;
(statearr_57792_57951[(2)] = null);

(statearr_57792_57951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57791 === (2))){
var state_57790__$1 = state_57790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57790__$1,(4),jobs);
} else {
if((state_val_57791 === (3))){
var inst_57788 = (state_57790[(2)]);
var state_57790__$1 = state_57790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57790__$1,inst_57788);
} else {
if((state_val_57791 === (4))){
var inst_57780 = (state_57790[(2)]);
var inst_57781 = process.call(null,inst_57780);
var state_57790__$1 = state_57790;
if(cljs.core.truth_(inst_57781)){
var statearr_57793_57952 = state_57790__$1;
(statearr_57793_57952[(1)] = (5));

} else {
var statearr_57794_57953 = state_57790__$1;
(statearr_57794_57953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57791 === (5))){
var state_57790__$1 = state_57790;
var statearr_57795_57954 = state_57790__$1;
(statearr_57795_57954[(2)] = null);

(statearr_57795_57954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57791 === (6))){
var state_57790__$1 = state_57790;
var statearr_57796_57955 = state_57790__$1;
(statearr_57796_57955[(2)] = null);

(statearr_57796_57955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57791 === (7))){
var inst_57786 = (state_57790[(2)]);
var state_57790__$1 = state_57790;
var statearr_57797_57956 = state_57790__$1;
(statearr_57797_57956[(2)] = inst_57786);

(statearr_57797_57956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__57946,c__57384__auto___57950,G__57777_57947,G__57777_57948__$1,n__49174__auto___57945,jobs,results,process,async))
;
return ((function (__57946,switch__57272__auto__,c__57384__auto___57950,G__57777_57947,G__57777_57948__$1,n__49174__auto___57945,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____0 = (function (){
var statearr_57801 = [null,null,null,null,null,null,null];
(statearr_57801[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__);

(statearr_57801[(1)] = (1));

return statearr_57801;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____1 = (function (state_57790){
while(true){
var ret_value__57274__auto__ = (function (){try{while(true){
var result__57275__auto__ = switch__57272__auto__.call(null,state_57790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57275__auto__;
}
break;
}
}catch (e57802){if((e57802 instanceof Object)){
var ex__57276__auto__ = e57802;
var statearr_57803_57957 = state_57790;
(statearr_57803_57957[(5)] = ex__57276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57958 = state_57790;
state_57790 = G__57958;
continue;
} else {
return ret_value__57274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__ = function(state_57790){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____1.call(this,state_57790);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__;
})()
;})(__57946,switch__57272__auto__,c__57384__auto___57950,G__57777_57947,G__57777_57948__$1,n__49174__auto___57945,jobs,results,process,async))
})();
var state__57386__auto__ = (function (){var statearr_57804 = f__57385__auto__.call(null);
(statearr_57804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__57384__auto___57950);

return statearr_57804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__57386__auto__);
});})(__57946,c__57384__auto___57950,G__57777_57947,G__57777_57948__$1,n__49174__auto___57945,jobs,results,process,async))
);


break;
case "async":
var c__57384__auto___57959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__57946,c__57384__auto___57959,G__57777_57947,G__57777_57948__$1,n__49174__auto___57945,jobs,results,process,async){
return (function (){
var f__57385__auto__ = (function (){var switch__57272__auto__ = ((function (__57946,c__57384__auto___57959,G__57777_57947,G__57777_57948__$1,n__49174__auto___57945,jobs,results,process,async){
return (function (state_57817){
var state_val_57818 = (state_57817[(1)]);
if((state_val_57818 === (1))){
var state_57817__$1 = state_57817;
var statearr_57819_57960 = state_57817__$1;
(statearr_57819_57960[(2)] = null);

(statearr_57819_57960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57818 === (2))){
var state_57817__$1 = state_57817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57817__$1,(4),jobs);
} else {
if((state_val_57818 === (3))){
var inst_57815 = (state_57817[(2)]);
var state_57817__$1 = state_57817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57817__$1,inst_57815);
} else {
if((state_val_57818 === (4))){
var inst_57807 = (state_57817[(2)]);
var inst_57808 = async.call(null,inst_57807);
var state_57817__$1 = state_57817;
if(cljs.core.truth_(inst_57808)){
var statearr_57820_57961 = state_57817__$1;
(statearr_57820_57961[(1)] = (5));

} else {
var statearr_57821_57962 = state_57817__$1;
(statearr_57821_57962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57818 === (5))){
var state_57817__$1 = state_57817;
var statearr_57822_57963 = state_57817__$1;
(statearr_57822_57963[(2)] = null);

(statearr_57822_57963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57818 === (6))){
var state_57817__$1 = state_57817;
var statearr_57823_57964 = state_57817__$1;
(statearr_57823_57964[(2)] = null);

(statearr_57823_57964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57818 === (7))){
var inst_57813 = (state_57817[(2)]);
var state_57817__$1 = state_57817;
var statearr_57824_57965 = state_57817__$1;
(statearr_57824_57965[(2)] = inst_57813);

(statearr_57824_57965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__57946,c__57384__auto___57959,G__57777_57947,G__57777_57948__$1,n__49174__auto___57945,jobs,results,process,async))
;
return ((function (__57946,switch__57272__auto__,c__57384__auto___57959,G__57777_57947,G__57777_57948__$1,n__49174__auto___57945,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____0 = (function (){
var statearr_57828 = [null,null,null,null,null,null,null];
(statearr_57828[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__);

(statearr_57828[(1)] = (1));

return statearr_57828;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____1 = (function (state_57817){
while(true){
var ret_value__57274__auto__ = (function (){try{while(true){
var result__57275__auto__ = switch__57272__auto__.call(null,state_57817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57275__auto__;
}
break;
}
}catch (e57829){if((e57829 instanceof Object)){
var ex__57276__auto__ = e57829;
var statearr_57830_57966 = state_57817;
(statearr_57830_57966[(5)] = ex__57276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57967 = state_57817;
state_57817 = G__57967;
continue;
} else {
return ret_value__57274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__ = function(state_57817){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____1.call(this,state_57817);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__;
})()
;})(__57946,switch__57272__auto__,c__57384__auto___57959,G__57777_57947,G__57777_57948__$1,n__49174__auto___57945,jobs,results,process,async))
})();
var state__57386__auto__ = (function (){var statearr_57831 = f__57385__auto__.call(null);
(statearr_57831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__57384__auto___57959);

return statearr_57831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__57386__auto__);
});})(__57946,c__57384__auto___57959,G__57777_57947,G__57777_57948__$1,n__49174__auto___57945,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__57968 = (__57946 + (1));
__57946 = G__57968;
continue;
} else {
}
break;
}

var c__57384__auto___57969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__57384__auto___57969,jobs,results,process,async){
return (function (){
var f__57385__auto__ = (function (){var switch__57272__auto__ = ((function (c__57384__auto___57969,jobs,results,process,async){
return (function (state_57853){
var state_val_57854 = (state_57853[(1)]);
if((state_val_57854 === (1))){
var state_57853__$1 = state_57853;
var statearr_57855_57970 = state_57853__$1;
(statearr_57855_57970[(2)] = null);

(statearr_57855_57970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57854 === (2))){
var state_57853__$1 = state_57853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57853__$1,(4),from);
} else {
if((state_val_57854 === (3))){
var inst_57851 = (state_57853[(2)]);
var state_57853__$1 = state_57853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57853__$1,inst_57851);
} else {
if((state_val_57854 === (4))){
var inst_57834 = (state_57853[(7)]);
var inst_57834__$1 = (state_57853[(2)]);
var inst_57835 = (inst_57834__$1 == null);
var state_57853__$1 = (function (){var statearr_57856 = state_57853;
(statearr_57856[(7)] = inst_57834__$1);

return statearr_57856;
})();
if(cljs.core.truth_(inst_57835)){
var statearr_57857_57971 = state_57853__$1;
(statearr_57857_57971[(1)] = (5));

} else {
var statearr_57858_57972 = state_57853__$1;
(statearr_57858_57972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57854 === (5))){
var inst_57837 = cljs.core.async.close_BANG_.call(null,jobs);
var state_57853__$1 = state_57853;
var statearr_57859_57973 = state_57853__$1;
(statearr_57859_57973[(2)] = inst_57837);

(statearr_57859_57973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57854 === (6))){
var inst_57834 = (state_57853[(7)]);
var inst_57839 = (state_57853[(8)]);
var inst_57839__$1 = cljs.core.async.chan.call(null,(1));
var inst_57840 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57841 = [inst_57834,inst_57839__$1];
var inst_57842 = (new cljs.core.PersistentVector(null,2,(5),inst_57840,inst_57841,null));
var state_57853__$1 = (function (){var statearr_57860 = state_57853;
(statearr_57860[(8)] = inst_57839__$1);

return statearr_57860;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57853__$1,(8),jobs,inst_57842);
} else {
if((state_val_57854 === (7))){
var inst_57849 = (state_57853[(2)]);
var state_57853__$1 = state_57853;
var statearr_57861_57974 = state_57853__$1;
(statearr_57861_57974[(2)] = inst_57849);

(statearr_57861_57974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57854 === (8))){
var inst_57839 = (state_57853[(8)]);
var inst_57844 = (state_57853[(2)]);
var state_57853__$1 = (function (){var statearr_57862 = state_57853;
(statearr_57862[(9)] = inst_57844);

return statearr_57862;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57853__$1,(9),results,inst_57839);
} else {
if((state_val_57854 === (9))){
var inst_57846 = (state_57853[(2)]);
var state_57853__$1 = (function (){var statearr_57863 = state_57853;
(statearr_57863[(10)] = inst_57846);

return statearr_57863;
})();
var statearr_57864_57975 = state_57853__$1;
(statearr_57864_57975[(2)] = null);

(statearr_57864_57975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__57384__auto___57969,jobs,results,process,async))
;
return ((function (switch__57272__auto__,c__57384__auto___57969,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____0 = (function (){
var statearr_57868 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57868[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__);

(statearr_57868[(1)] = (1));

return statearr_57868;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____1 = (function (state_57853){
while(true){
var ret_value__57274__auto__ = (function (){try{while(true){
var result__57275__auto__ = switch__57272__auto__.call(null,state_57853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57275__auto__;
}
break;
}
}catch (e57869){if((e57869 instanceof Object)){
var ex__57276__auto__ = e57869;
var statearr_57870_57976 = state_57853;
(statearr_57870_57976[(5)] = ex__57276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57977 = state_57853;
state_57853 = G__57977;
continue;
} else {
return ret_value__57274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__ = function(state_57853){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____1.call(this,state_57853);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__;
})()
;})(switch__57272__auto__,c__57384__auto___57969,jobs,results,process,async))
})();
var state__57386__auto__ = (function (){var statearr_57871 = f__57385__auto__.call(null);
(statearr_57871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__57384__auto___57969);

return statearr_57871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__57386__auto__);
});})(c__57384__auto___57969,jobs,results,process,async))
);


var c__57384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__57384__auto__,jobs,results,process,async){
return (function (){
var f__57385__auto__ = (function (){var switch__57272__auto__ = ((function (c__57384__auto__,jobs,results,process,async){
return (function (state_57909){
var state_val_57910 = (state_57909[(1)]);
if((state_val_57910 === (7))){
var inst_57905 = (state_57909[(2)]);
var state_57909__$1 = state_57909;
var statearr_57911_57978 = state_57909__$1;
(statearr_57911_57978[(2)] = inst_57905);

(statearr_57911_57978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57910 === (20))){
var state_57909__$1 = state_57909;
var statearr_57912_57979 = state_57909__$1;
(statearr_57912_57979[(2)] = null);

(statearr_57912_57979[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57910 === (1))){
var state_57909__$1 = state_57909;
var statearr_57913_57980 = state_57909__$1;
(statearr_57913_57980[(2)] = null);

(statearr_57913_57980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57910 === (4))){
var inst_57874 = (state_57909[(7)]);
var inst_57874__$1 = (state_57909[(2)]);
var inst_57875 = (inst_57874__$1 == null);
var state_57909__$1 = (function (){var statearr_57914 = state_57909;
(statearr_57914[(7)] = inst_57874__$1);

return statearr_57914;
})();
if(cljs.core.truth_(inst_57875)){
var statearr_57915_57981 = state_57909__$1;
(statearr_57915_57981[(1)] = (5));

} else {
var statearr_57916_57982 = state_57909__$1;
(statearr_57916_57982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57910 === (15))){
var inst_57887 = (state_57909[(8)]);
var state_57909__$1 = state_57909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57909__$1,(18),to,inst_57887);
} else {
if((state_val_57910 === (21))){
var inst_57900 = (state_57909[(2)]);
var state_57909__$1 = state_57909;
var statearr_57917_57983 = state_57909__$1;
(statearr_57917_57983[(2)] = inst_57900);

(statearr_57917_57983[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57910 === (13))){
var inst_57902 = (state_57909[(2)]);
var state_57909__$1 = (function (){var statearr_57918 = state_57909;
(statearr_57918[(9)] = inst_57902);

return statearr_57918;
})();
var statearr_57919_57984 = state_57909__$1;
(statearr_57919_57984[(2)] = null);

(statearr_57919_57984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57910 === (6))){
var inst_57874 = (state_57909[(7)]);
var state_57909__$1 = state_57909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57909__$1,(11),inst_57874);
} else {
if((state_val_57910 === (17))){
var inst_57895 = (state_57909[(2)]);
var state_57909__$1 = state_57909;
if(cljs.core.truth_(inst_57895)){
var statearr_57920_57985 = state_57909__$1;
(statearr_57920_57985[(1)] = (19));

} else {
var statearr_57921_57986 = state_57909__$1;
(statearr_57921_57986[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57910 === (3))){
var inst_57907 = (state_57909[(2)]);
var state_57909__$1 = state_57909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57909__$1,inst_57907);
} else {
if((state_val_57910 === (12))){
var inst_57884 = (state_57909[(10)]);
var state_57909__$1 = state_57909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57909__$1,(14),inst_57884);
} else {
if((state_val_57910 === (2))){
var state_57909__$1 = state_57909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57909__$1,(4),results);
} else {
if((state_val_57910 === (19))){
var state_57909__$1 = state_57909;
var statearr_57922_57987 = state_57909__$1;
(statearr_57922_57987[(2)] = null);

(statearr_57922_57987[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57910 === (11))){
var inst_57884 = (state_57909[(2)]);
var state_57909__$1 = (function (){var statearr_57923 = state_57909;
(statearr_57923[(10)] = inst_57884);

return statearr_57923;
})();
var statearr_57924_57988 = state_57909__$1;
(statearr_57924_57988[(2)] = null);

(statearr_57924_57988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57910 === (9))){
var state_57909__$1 = state_57909;
var statearr_57925_57989 = state_57909__$1;
(statearr_57925_57989[(2)] = null);

(statearr_57925_57989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57910 === (5))){
var state_57909__$1 = state_57909;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57926_57990 = state_57909__$1;
(statearr_57926_57990[(1)] = (8));

} else {
var statearr_57927_57991 = state_57909__$1;
(statearr_57927_57991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57910 === (14))){
var inst_57887 = (state_57909[(8)]);
var inst_57889 = (state_57909[(11)]);
var inst_57887__$1 = (state_57909[(2)]);
var inst_57888 = (inst_57887__$1 == null);
var inst_57889__$1 = cljs.core.not.call(null,inst_57888);
var state_57909__$1 = (function (){var statearr_57928 = state_57909;
(statearr_57928[(8)] = inst_57887__$1);

(statearr_57928[(11)] = inst_57889__$1);

return statearr_57928;
})();
if(inst_57889__$1){
var statearr_57929_57992 = state_57909__$1;
(statearr_57929_57992[(1)] = (15));

} else {
var statearr_57930_57993 = state_57909__$1;
(statearr_57930_57993[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57910 === (16))){
var inst_57889 = (state_57909[(11)]);
var state_57909__$1 = state_57909;
var statearr_57931_57994 = state_57909__$1;
(statearr_57931_57994[(2)] = inst_57889);

(statearr_57931_57994[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57910 === (10))){
var inst_57881 = (state_57909[(2)]);
var state_57909__$1 = state_57909;
var statearr_57932_57995 = state_57909__$1;
(statearr_57932_57995[(2)] = inst_57881);

(statearr_57932_57995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57910 === (18))){
var inst_57892 = (state_57909[(2)]);
var state_57909__$1 = state_57909;
var statearr_57933_57996 = state_57909__$1;
(statearr_57933_57996[(2)] = inst_57892);

(statearr_57933_57996[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57910 === (8))){
var inst_57878 = cljs.core.async.close_BANG_.call(null,to);
var state_57909__$1 = state_57909;
var statearr_57934_57997 = state_57909__$1;
(statearr_57934_57997[(2)] = inst_57878);

(statearr_57934_57997[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__57384__auto__,jobs,results,process,async))
;
return ((function (switch__57272__auto__,c__57384__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____0 = (function (){
var statearr_57938 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57938[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__);

(statearr_57938[(1)] = (1));

return statearr_57938;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____1 = (function (state_57909){
while(true){
var ret_value__57274__auto__ = (function (){try{while(true){
var result__57275__auto__ = switch__57272__auto__.call(null,state_57909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57275__auto__;
}
break;
}
}catch (e57939){if((e57939 instanceof Object)){
var ex__57276__auto__ = e57939;
var statearr_57940_57998 = state_57909;
(statearr_57940_57998[(5)] = ex__57276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57999 = state_57909;
state_57909 = G__57999;
continue;
} else {
return ret_value__57274__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__ = function(state_57909){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____1.call(this,state_57909);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57273__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57273__auto__;
})()
;})(switch__57272__auto__,c__57384__auto__,jobs,results,process,async))
})();
var state__57386__auto__ = (function (){var statearr_57941 = f__57385__auto__.call(null);
(statearr_57941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__57384__auto__);

return statearr_57941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__57386__auto__);
});})(c__57384__auto__,jobs,results,process,async))
);

return c__57384__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args58000 = [];
var len__49364__auto___58003 = arguments.length;
var i__49365__auto___58004 = (0);
while(true){
if((i__49365__auto___58004 < len__49364__auto___58003)){
args58000.push((arguments[i__49365__auto___58004]));

var G__58005 = (i__49365__auto___58004 + (1));
i__49365__auto___58004 = G__58005;
continue;
} else {
}
break;
}

var G__58002 = args58000.length;
switch (G__58002) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58000.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args58007 = [];
var len__49364__auto___58010 = arguments.length;
var i__49365__auto___58011 = (0);
while(true){
if((i__49365__auto___58011 < len__49364__auto___58010)){
args58007.push((arguments[i__49365__auto___58011]));

var G__58012 = (i__49365__auto___58011 + (1));
i__49365__auto___58011 = G__58012;
continue;
} else {
}
break;
}

var G__58009 = args58007.length;
switch (G__58009) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58007.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args58014 = [];
var len__49364__auto___58067 = arguments.length;
var i__49365__auto___58068 = (0);
while(true){
if((i__49365__auto___58068 < len__49364__auto___58067)){
args58014.push((arguments[i__49365__auto___58068]));

var G__58069 = (i__49365__auto___58068 + (1));
i__49365__auto___58068 = G__58069;
continue;
} else {
}
break;
}

var G__58016 = args58014.length;
switch (G__58016) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58014.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__57384__auto___58071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__57384__auto___58071,tc,fc){
return (function (){
var f__57385__auto__ = (function (){var switch__57272__auto__ = ((function (c__57384__auto___58071,tc,fc){
return (function (state_58042){
var state_val_58043 = (state_58042[(1)]);
if((state_val_58043 === (7))){
var inst_58038 = (state_58042[(2)]);
var state_58042__$1 = state_58042;
var statearr_58044_58072 = state_58042__$1;
(statearr_58044_58072[(2)] = inst_58038);

(statearr_58044_58072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58043 === (1))){
var state_58042__$1 = state_58042;
var statearr_58045_58073 = state_58042__$1;
(statearr_58045_58073[(2)] = null);

(statearr_58045_58073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58043 === (4))){
var inst_58019 = (state_58042[(7)]);
var inst_58019__$1 = (state_58042[(2)]);
var inst_58020 = (inst_58019__$1 == null);
var state_58042__$1 = (function (){var statearr_58046 = state_58042;
(statearr_58046[(7)] = inst_58019__$1);

return statearr_58046;
})();
if(cljs.core.truth_(inst_58020)){
var statearr_58047_58074 = state_58042__$1;
(statearr_58047_58074[(1)] = (5));

} else {
var statearr_58048_58075 = state_58042__$1;
(statearr_58048_58075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58043 === (13))){
var state_58042__$1 = state_58042;
var statearr_58049_58076 = state_58042__$1;
(statearr_58049_58076[(2)] = null);

(statearr_58049_58076[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58043 === (6))){
var inst_58019 = (state_58042[(7)]);
var inst_58025 = p.call(null,inst_58019);
var state_58042__$1 = state_58042;
if(cljs.core.truth_(inst_58025)){
var statearr_58050_58077 = state_58042__$1;
(statearr_58050_58077[(1)] = (9));

} else {
var statearr_58051_58078 = state_58042__$1;
(statearr_58051_58078[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58043 === (3))){
var inst_58040 = (state_58042[(2)]);
var state_58042__$1 = state_58042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58042__$1,inst_58040);
} else {
if((state_val_58043 === (12))){
var state_58042__$1 = state_58042;
var statearr_58052_58079 = state_58042__$1;
(statearr_58052_58079[(2)] = null);

(statearr_58052_58079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58043 === (2))){
var state_58042__$1 = state_58042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58042__$1,(4),ch);
} else {
if((state_val_58043 === (11))){
var inst_58019 = (state_58042[(7)]);
var inst_58029 = (state_58042[(2)]);
var state_58042__$1 = state_58042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58042__$1,(8),inst_58029,inst_58019);
} else {
if((state_val_58043 === (9))){
var state_58042__$1 = state_58042;
var statearr_58053_58080 = state_58042__$1;
(statearr_58053_58080[(2)] = tc);

(statearr_58053_58080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58043 === (5))){
var inst_58022 = cljs.core.async.close_BANG_.call(null,tc);
var inst_58023 = cljs.core.async.close_BANG_.call(null,fc);
var state_58042__$1 = (function (){var statearr_58054 = state_58042;
(statearr_58054[(8)] = inst_58022);

return statearr_58054;
})();
var statearr_58055_58081 = state_58042__$1;
(statearr_58055_58081[(2)] = inst_58023);

(statearr_58055_58081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58043 === (14))){
var inst_58036 = (state_58042[(2)]);
var state_58042__$1 = state_58042;
var statearr_58056_58082 = state_58042__$1;
(statearr_58056_58082[(2)] = inst_58036);

(statearr_58056_58082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58043 === (10))){
var state_58042__$1 = state_58042;
var statearr_58057_58083 = state_58042__$1;
(statearr_58057_58083[(2)] = fc);

(statearr_58057_58083[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58043 === (8))){
var inst_58031 = (state_58042[(2)]);
var state_58042__$1 = state_58042;
if(cljs.core.truth_(inst_58031)){
var statearr_58058_58084 = state_58042__$1;
(statearr_58058_58084[(1)] = (12));

} else {
var statearr_58059_58085 = state_58042__$1;
(statearr_58059_58085[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__57384__auto___58071,tc,fc))
;
return ((function (switch__57272__auto__,c__57384__auto___58071,tc,fc){
return (function() {
var cljs$core$async$state_machine__57273__auto__ = null;
var cljs$core$async$state_machine__57273__auto____0 = (function (){
var statearr_58063 = [null,null,null,null,null,null,null,null,null];
(statearr_58063[(0)] = cljs$core$async$state_machine__57273__auto__);

(statearr_58063[(1)] = (1));

return statearr_58063;
});
var cljs$core$async$state_machine__57273__auto____1 = (function (state_58042){
while(true){
var ret_value__57274__auto__ = (function (){try{while(true){
var result__57275__auto__ = switch__57272__auto__.call(null,state_58042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57275__auto__;
}
break;
}
}catch (e58064){if((e58064 instanceof Object)){
var ex__57276__auto__ = e58064;
var statearr_58065_58086 = state_58042;
(statearr_58065_58086[(5)] = ex__57276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58087 = state_58042;
state_58042 = G__58087;
continue;
} else {
return ret_value__57274__auto__;
}
break;
}
});
cljs$core$async$state_machine__57273__auto__ = function(state_58042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57273__auto____1.call(this,state_58042);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57273__auto____0;
cljs$core$async$state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57273__auto____1;
return cljs$core$async$state_machine__57273__auto__;
})()
;})(switch__57272__auto__,c__57384__auto___58071,tc,fc))
})();
var state__57386__auto__ = (function (){var statearr_58066 = f__57385__auto__.call(null);
(statearr_58066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__57384__auto___58071);

return statearr_58066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__57386__auto__);
});})(c__57384__auto___58071,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__57384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__57384__auto__){
return (function (){
var f__57385__auto__ = (function (){var switch__57272__auto__ = ((function (c__57384__auto__){
return (function (state_58151){
var state_val_58152 = (state_58151[(1)]);
if((state_val_58152 === (7))){
var inst_58147 = (state_58151[(2)]);
var state_58151__$1 = state_58151;
var statearr_58153_58174 = state_58151__$1;
(statearr_58153_58174[(2)] = inst_58147);

(statearr_58153_58174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58152 === (1))){
var inst_58131 = init;
var state_58151__$1 = (function (){var statearr_58154 = state_58151;
(statearr_58154[(7)] = inst_58131);

return statearr_58154;
})();
var statearr_58155_58175 = state_58151__$1;
(statearr_58155_58175[(2)] = null);

(statearr_58155_58175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58152 === (4))){
var inst_58134 = (state_58151[(8)]);
var inst_58134__$1 = (state_58151[(2)]);
var inst_58135 = (inst_58134__$1 == null);
var state_58151__$1 = (function (){var statearr_58156 = state_58151;
(statearr_58156[(8)] = inst_58134__$1);

return statearr_58156;
})();
if(cljs.core.truth_(inst_58135)){
var statearr_58157_58176 = state_58151__$1;
(statearr_58157_58176[(1)] = (5));

} else {
var statearr_58158_58177 = state_58151__$1;
(statearr_58158_58177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58152 === (6))){
var inst_58134 = (state_58151[(8)]);
var inst_58138 = (state_58151[(9)]);
var inst_58131 = (state_58151[(7)]);
var inst_58138__$1 = f.call(null,inst_58131,inst_58134);
var inst_58139 = cljs.core.reduced_QMARK_.call(null,inst_58138__$1);
var state_58151__$1 = (function (){var statearr_58159 = state_58151;
(statearr_58159[(9)] = inst_58138__$1);

return statearr_58159;
})();
if(inst_58139){
var statearr_58160_58178 = state_58151__$1;
(statearr_58160_58178[(1)] = (8));

} else {
var statearr_58161_58179 = state_58151__$1;
(statearr_58161_58179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58152 === (3))){
var inst_58149 = (state_58151[(2)]);
var state_58151__$1 = state_58151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58151__$1,inst_58149);
} else {
if((state_val_58152 === (2))){
var state_58151__$1 = state_58151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58151__$1,(4),ch);
} else {
if((state_val_58152 === (9))){
var inst_58138 = (state_58151[(9)]);
var inst_58131 = inst_58138;
var state_58151__$1 = (function (){var statearr_58162 = state_58151;
(statearr_58162[(7)] = inst_58131);

return statearr_58162;
})();
var statearr_58163_58180 = state_58151__$1;
(statearr_58163_58180[(2)] = null);

(statearr_58163_58180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58152 === (5))){
var inst_58131 = (state_58151[(7)]);
var state_58151__$1 = state_58151;
var statearr_58164_58181 = state_58151__$1;
(statearr_58164_58181[(2)] = inst_58131);

(statearr_58164_58181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58152 === (10))){
var inst_58145 = (state_58151[(2)]);
var state_58151__$1 = state_58151;
var statearr_58165_58182 = state_58151__$1;
(statearr_58165_58182[(2)] = inst_58145);

(statearr_58165_58182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58152 === (8))){
var inst_58138 = (state_58151[(9)]);
var inst_58141 = cljs.core.deref.call(null,inst_58138);
var state_58151__$1 = state_58151;
var statearr_58166_58183 = state_58151__$1;
(statearr_58166_58183[(2)] = inst_58141);

(statearr_58166_58183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__57384__auto__))
;
return ((function (switch__57272__auto__,c__57384__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__57273__auto__ = null;
var cljs$core$async$reduce_$_state_machine__57273__auto____0 = (function (){
var statearr_58170 = [null,null,null,null,null,null,null,null,null,null];
(statearr_58170[(0)] = cljs$core$async$reduce_$_state_machine__57273__auto__);

(statearr_58170[(1)] = (1));

return statearr_58170;
});
var cljs$core$async$reduce_$_state_machine__57273__auto____1 = (function (state_58151){
while(true){
var ret_value__57274__auto__ = (function (){try{while(true){
var result__57275__auto__ = switch__57272__auto__.call(null,state_58151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57275__auto__;
}
break;
}
}catch (e58171){if((e58171 instanceof Object)){
var ex__57276__auto__ = e58171;
var statearr_58172_58184 = state_58151;
(statearr_58172_58184[(5)] = ex__57276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58185 = state_58151;
state_58151 = G__58185;
continue;
} else {
return ret_value__57274__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__57273__auto__ = function(state_58151){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__57273__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__57273__auto____1.call(this,state_58151);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__57273__auto____0;
cljs$core$async$reduce_$_state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__57273__auto____1;
return cljs$core$async$reduce_$_state_machine__57273__auto__;
})()
;})(switch__57272__auto__,c__57384__auto__))
})();
var state__57386__auto__ = (function (){var statearr_58173 = f__57385__auto__.call(null);
(statearr_58173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__57384__auto__);

return statearr_58173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__57386__auto__);
});})(c__57384__auto__))
);

return c__57384__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__57384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__57384__auto__,f__$1){
return (function (){
var f__57385__auto__ = (function (){var switch__57272__auto__ = ((function (c__57384__auto__,f__$1){
return (function (state_58205){
var state_val_58206 = (state_58205[(1)]);
if((state_val_58206 === (1))){
var inst_58200 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_58205__$1 = state_58205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58205__$1,(2),inst_58200);
} else {
if((state_val_58206 === (2))){
var inst_58202 = (state_58205[(2)]);
var inst_58203 = f__$1.call(null,inst_58202);
var state_58205__$1 = state_58205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58205__$1,inst_58203);
} else {
return null;
}
}
});})(c__57384__auto__,f__$1))
;
return ((function (switch__57272__auto__,c__57384__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__57273__auto__ = null;
var cljs$core$async$transduce_$_state_machine__57273__auto____0 = (function (){
var statearr_58210 = [null,null,null,null,null,null,null];
(statearr_58210[(0)] = cljs$core$async$transduce_$_state_machine__57273__auto__);

(statearr_58210[(1)] = (1));

return statearr_58210;
});
var cljs$core$async$transduce_$_state_machine__57273__auto____1 = (function (state_58205){
while(true){
var ret_value__57274__auto__ = (function (){try{while(true){
var result__57275__auto__ = switch__57272__auto__.call(null,state_58205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57275__auto__;
}
break;
}
}catch (e58211){if((e58211 instanceof Object)){
var ex__57276__auto__ = e58211;
var statearr_58212_58214 = state_58205;
(statearr_58212_58214[(5)] = ex__57276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58215 = state_58205;
state_58205 = G__58215;
continue;
} else {
return ret_value__57274__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__57273__auto__ = function(state_58205){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__57273__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__57273__auto____1.call(this,state_58205);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__57273__auto____0;
cljs$core$async$transduce_$_state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__57273__auto____1;
return cljs$core$async$transduce_$_state_machine__57273__auto__;
})()
;})(switch__57272__auto__,c__57384__auto__,f__$1))
})();
var state__57386__auto__ = (function (){var statearr_58213 = f__57385__auto__.call(null);
(statearr_58213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__57384__auto__);

return statearr_58213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__57386__auto__);
});})(c__57384__auto__,f__$1))
);

return c__57384__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args58216 = [];
var len__49364__auto___58268 = arguments.length;
var i__49365__auto___58269 = (0);
while(true){
if((i__49365__auto___58269 < len__49364__auto___58268)){
args58216.push((arguments[i__49365__auto___58269]));

var G__58270 = (i__49365__auto___58269 + (1));
i__49365__auto___58269 = G__58270;
continue;
} else {
}
break;
}

var G__58218 = args58216.length;
switch (G__58218) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58216.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__57384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__57384__auto__){
return (function (){
var f__57385__auto__ = (function (){var switch__57272__auto__ = ((function (c__57384__auto__){
return (function (state_58243){
var state_val_58244 = (state_58243[(1)]);
if((state_val_58244 === (7))){
var inst_58225 = (state_58243[(2)]);
var state_58243__$1 = state_58243;
var statearr_58245_58272 = state_58243__$1;
(statearr_58245_58272[(2)] = inst_58225);

(statearr_58245_58272[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58244 === (1))){
var inst_58219 = cljs.core.seq.call(null,coll);
var inst_58220 = inst_58219;
var state_58243__$1 = (function (){var statearr_58246 = state_58243;
(statearr_58246[(7)] = inst_58220);

return statearr_58246;
})();
var statearr_58247_58273 = state_58243__$1;
(statearr_58247_58273[(2)] = null);

(statearr_58247_58273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58244 === (4))){
var inst_58220 = (state_58243[(7)]);
var inst_58223 = cljs.core.first.call(null,inst_58220);
var state_58243__$1 = state_58243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58243__$1,(7),ch,inst_58223);
} else {
if((state_val_58244 === (13))){
var inst_58237 = (state_58243[(2)]);
var state_58243__$1 = state_58243;
var statearr_58248_58274 = state_58243__$1;
(statearr_58248_58274[(2)] = inst_58237);

(statearr_58248_58274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58244 === (6))){
var inst_58228 = (state_58243[(2)]);
var state_58243__$1 = state_58243;
if(cljs.core.truth_(inst_58228)){
var statearr_58249_58275 = state_58243__$1;
(statearr_58249_58275[(1)] = (8));

} else {
var statearr_58250_58276 = state_58243__$1;
(statearr_58250_58276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58244 === (3))){
var inst_58241 = (state_58243[(2)]);
var state_58243__$1 = state_58243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58243__$1,inst_58241);
} else {
if((state_val_58244 === (12))){
var state_58243__$1 = state_58243;
var statearr_58251_58277 = state_58243__$1;
(statearr_58251_58277[(2)] = null);

(statearr_58251_58277[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58244 === (2))){
var inst_58220 = (state_58243[(7)]);
var state_58243__$1 = state_58243;
if(cljs.core.truth_(inst_58220)){
var statearr_58252_58278 = state_58243__$1;
(statearr_58252_58278[(1)] = (4));

} else {
var statearr_58253_58279 = state_58243__$1;
(statearr_58253_58279[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58244 === (11))){
var inst_58234 = cljs.core.async.close_BANG_.call(null,ch);
var state_58243__$1 = state_58243;
var statearr_58254_58280 = state_58243__$1;
(statearr_58254_58280[(2)] = inst_58234);

(statearr_58254_58280[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58244 === (9))){
var state_58243__$1 = state_58243;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58255_58281 = state_58243__$1;
(statearr_58255_58281[(1)] = (11));

} else {
var statearr_58256_58282 = state_58243__$1;
(statearr_58256_58282[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58244 === (5))){
var inst_58220 = (state_58243[(7)]);
var state_58243__$1 = state_58243;
var statearr_58257_58283 = state_58243__$1;
(statearr_58257_58283[(2)] = inst_58220);

(statearr_58257_58283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58244 === (10))){
var inst_58239 = (state_58243[(2)]);
var state_58243__$1 = state_58243;
var statearr_58258_58284 = state_58243__$1;
(statearr_58258_58284[(2)] = inst_58239);

(statearr_58258_58284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58244 === (8))){
var inst_58220 = (state_58243[(7)]);
var inst_58230 = cljs.core.next.call(null,inst_58220);
var inst_58220__$1 = inst_58230;
var state_58243__$1 = (function (){var statearr_58259 = state_58243;
(statearr_58259[(7)] = inst_58220__$1);

return statearr_58259;
})();
var statearr_58260_58285 = state_58243__$1;
(statearr_58260_58285[(2)] = null);

(statearr_58260_58285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__57384__auto__))
;
return ((function (switch__57272__auto__,c__57384__auto__){
return (function() {
var cljs$core$async$state_machine__57273__auto__ = null;
var cljs$core$async$state_machine__57273__auto____0 = (function (){
var statearr_58264 = [null,null,null,null,null,null,null,null];
(statearr_58264[(0)] = cljs$core$async$state_machine__57273__auto__);

(statearr_58264[(1)] = (1));

return statearr_58264;
});
var cljs$core$async$state_machine__57273__auto____1 = (function (state_58243){
while(true){
var ret_value__57274__auto__ = (function (){try{while(true){
var result__57275__auto__ = switch__57272__auto__.call(null,state_58243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57275__auto__;
}
break;
}
}catch (e58265){if((e58265 instanceof Object)){
var ex__57276__auto__ = e58265;
var statearr_58266_58286 = state_58243;
(statearr_58266_58286[(5)] = ex__57276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58287 = state_58243;
state_58243 = G__58287;
continue;
} else {
return ret_value__57274__auto__;
}
break;
}
});
cljs$core$async$state_machine__57273__auto__ = function(state_58243){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57273__auto____1.call(this,state_58243);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57273__auto____0;
cljs$core$async$state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57273__auto____1;
return cljs$core$async$state_machine__57273__auto__;
})()
;})(switch__57272__auto__,c__57384__auto__))
})();
var state__57386__auto__ = (function (){var statearr_58267 = f__57385__auto__.call(null);
(statearr_58267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__57384__auto__);

return statearr_58267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__57386__auto__);
});})(c__57384__auto__))
);

return c__57384__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__48919__auto__ = (((_ == null))?null:_);
var m__48920__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__48919__auto__)]);
if(!((m__48920__auto__ == null))){
return m__48920__auto__.call(null,_);
} else {
var m__48920__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__48920__auto____$1 == null))){
return m__48920__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__48919__auto__ = (((m == null))?null:m);
var m__48920__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__48919__auto__)]);
if(!((m__48920__auto__ == null))){
return m__48920__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__48920__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__48920__auto____$1 == null))){
return m__48920__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__48919__auto__ = (((m == null))?null:m);
var m__48920__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__48919__auto__)]);
if(!((m__48920__auto__ == null))){
return m__48920__auto__.call(null,m,ch);
} else {
var m__48920__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__48920__auto____$1 == null))){
return m__48920__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__48919__auto__ = (((m == null))?null:m);
var m__48920__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__48919__auto__)]);
if(!((m__48920__auto__ == null))){
return m__48920__auto__.call(null,m);
} else {
var m__48920__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__48920__auto____$1 == null))){
return m__48920__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async58513 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58513 = (function (ch,cs,meta58514){
this.ch = ch;
this.cs = cs;
this.meta58514 = meta58514;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async58513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_58515,meta58514__$1){
var self__ = this;
var _58515__$1 = this;
return (new cljs.core.async.t_cljs$core$async58513(self__.ch,self__.cs,meta58514__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async58513.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_58515){
var self__ = this;
var _58515__$1 = this;
return self__.meta58514;
});})(cs))
;

cljs.core.async.t_cljs$core$async58513.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58513.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async58513.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58513.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async58513.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async58513.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async58513.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta58514","meta58514",-1525499237,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async58513.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58513.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58513";

cljs.core.async.t_cljs$core$async58513.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__48862__auto__,writer__48863__auto__,opt__48864__auto__){
return cljs.core._write.call(null,writer__48863__auto__,"cljs.core.async/t_cljs$core$async58513");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async58513 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async58513(ch__$1,cs__$1,meta58514){
return (new cljs.core.async.t_cljs$core$async58513(ch__$1,cs__$1,meta58514));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async58513(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__57384__auto___58738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__57384__auto___58738,cs,m,dchan,dctr,done){
return (function (){
var f__57385__auto__ = (function (){var switch__57272__auto__ = ((function (c__57384__auto___58738,cs,m,dchan,dctr,done){
return (function (state_58650){
var state_val_58651 = (state_58650[(1)]);
if((state_val_58651 === (7))){
var inst_58646 = (state_58650[(2)]);
var state_58650__$1 = state_58650;
var statearr_58652_58739 = state_58650__$1;
(statearr_58652_58739[(2)] = inst_58646);

(statearr_58652_58739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (20))){
var inst_58549 = (state_58650[(7)]);
var inst_58561 = cljs.core.first.call(null,inst_58549);
var inst_58562 = cljs.core.nth.call(null,inst_58561,(0),null);
var inst_58563 = cljs.core.nth.call(null,inst_58561,(1),null);
var state_58650__$1 = (function (){var statearr_58653 = state_58650;
(statearr_58653[(8)] = inst_58562);

return statearr_58653;
})();
if(cljs.core.truth_(inst_58563)){
var statearr_58654_58740 = state_58650__$1;
(statearr_58654_58740[(1)] = (22));

} else {
var statearr_58655_58741 = state_58650__$1;
(statearr_58655_58741[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (27))){
var inst_58593 = (state_58650[(9)]);
var inst_58518 = (state_58650[(10)]);
var inst_58591 = (state_58650[(11)]);
var inst_58598 = (state_58650[(12)]);
var inst_58598__$1 = cljs.core._nth.call(null,inst_58591,inst_58593);
var inst_58599 = cljs.core.async.put_BANG_.call(null,inst_58598__$1,inst_58518,done);
var state_58650__$1 = (function (){var statearr_58656 = state_58650;
(statearr_58656[(12)] = inst_58598__$1);

return statearr_58656;
})();
if(cljs.core.truth_(inst_58599)){
var statearr_58657_58742 = state_58650__$1;
(statearr_58657_58742[(1)] = (30));

} else {
var statearr_58658_58743 = state_58650__$1;
(statearr_58658_58743[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (1))){
var state_58650__$1 = state_58650;
var statearr_58659_58744 = state_58650__$1;
(statearr_58659_58744[(2)] = null);

(statearr_58659_58744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (24))){
var inst_58549 = (state_58650[(7)]);
var inst_58568 = (state_58650[(2)]);
var inst_58569 = cljs.core.next.call(null,inst_58549);
var inst_58527 = inst_58569;
var inst_58528 = null;
var inst_58529 = (0);
var inst_58530 = (0);
var state_58650__$1 = (function (){var statearr_58660 = state_58650;
(statearr_58660[(13)] = inst_58528);

(statearr_58660[(14)] = inst_58527);

(statearr_58660[(15)] = inst_58529);

(statearr_58660[(16)] = inst_58530);

(statearr_58660[(17)] = inst_58568);

return statearr_58660;
})();
var statearr_58661_58745 = state_58650__$1;
(statearr_58661_58745[(2)] = null);

(statearr_58661_58745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (39))){
var state_58650__$1 = state_58650;
var statearr_58665_58746 = state_58650__$1;
(statearr_58665_58746[(2)] = null);

(statearr_58665_58746[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (4))){
var inst_58518 = (state_58650[(10)]);
var inst_58518__$1 = (state_58650[(2)]);
var inst_58519 = (inst_58518__$1 == null);
var state_58650__$1 = (function (){var statearr_58666 = state_58650;
(statearr_58666[(10)] = inst_58518__$1);

return statearr_58666;
})();
if(cljs.core.truth_(inst_58519)){
var statearr_58667_58747 = state_58650__$1;
(statearr_58667_58747[(1)] = (5));

} else {
var statearr_58668_58748 = state_58650__$1;
(statearr_58668_58748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (15))){
var inst_58528 = (state_58650[(13)]);
var inst_58527 = (state_58650[(14)]);
var inst_58529 = (state_58650[(15)]);
var inst_58530 = (state_58650[(16)]);
var inst_58545 = (state_58650[(2)]);
var inst_58546 = (inst_58530 + (1));
var tmp58662 = inst_58528;
var tmp58663 = inst_58527;
var tmp58664 = inst_58529;
var inst_58527__$1 = tmp58663;
var inst_58528__$1 = tmp58662;
var inst_58529__$1 = tmp58664;
var inst_58530__$1 = inst_58546;
var state_58650__$1 = (function (){var statearr_58669 = state_58650;
(statearr_58669[(18)] = inst_58545);

(statearr_58669[(13)] = inst_58528__$1);

(statearr_58669[(14)] = inst_58527__$1);

(statearr_58669[(15)] = inst_58529__$1);

(statearr_58669[(16)] = inst_58530__$1);

return statearr_58669;
})();
var statearr_58670_58749 = state_58650__$1;
(statearr_58670_58749[(2)] = null);

(statearr_58670_58749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (21))){
var inst_58572 = (state_58650[(2)]);
var state_58650__$1 = state_58650;
var statearr_58674_58750 = state_58650__$1;
(statearr_58674_58750[(2)] = inst_58572);

(statearr_58674_58750[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (31))){
var inst_58598 = (state_58650[(12)]);
var inst_58602 = done.call(null,null);
var inst_58603 = cljs.core.async.untap_STAR_.call(null,m,inst_58598);
var state_58650__$1 = (function (){var statearr_58675 = state_58650;
(statearr_58675[(19)] = inst_58602);

return statearr_58675;
})();
var statearr_58676_58751 = state_58650__$1;
(statearr_58676_58751[(2)] = inst_58603);

(statearr_58676_58751[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (32))){
var inst_58593 = (state_58650[(9)]);
var inst_58590 = (state_58650[(20)]);
var inst_58592 = (state_58650[(21)]);
var inst_58591 = (state_58650[(11)]);
var inst_58605 = (state_58650[(2)]);
var inst_58606 = (inst_58593 + (1));
var tmp58671 = inst_58590;
var tmp58672 = inst_58592;
var tmp58673 = inst_58591;
var inst_58590__$1 = tmp58671;
var inst_58591__$1 = tmp58673;
var inst_58592__$1 = tmp58672;
var inst_58593__$1 = inst_58606;
var state_58650__$1 = (function (){var statearr_58677 = state_58650;
(statearr_58677[(9)] = inst_58593__$1);

(statearr_58677[(22)] = inst_58605);

(statearr_58677[(20)] = inst_58590__$1);

(statearr_58677[(21)] = inst_58592__$1);

(statearr_58677[(11)] = inst_58591__$1);

return statearr_58677;
})();
var statearr_58678_58752 = state_58650__$1;
(statearr_58678_58752[(2)] = null);

(statearr_58678_58752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (40))){
var inst_58618 = (state_58650[(23)]);
var inst_58622 = done.call(null,null);
var inst_58623 = cljs.core.async.untap_STAR_.call(null,m,inst_58618);
var state_58650__$1 = (function (){var statearr_58679 = state_58650;
(statearr_58679[(24)] = inst_58622);

return statearr_58679;
})();
var statearr_58680_58753 = state_58650__$1;
(statearr_58680_58753[(2)] = inst_58623);

(statearr_58680_58753[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (33))){
var inst_58609 = (state_58650[(25)]);
var inst_58611 = cljs.core.chunked_seq_QMARK_.call(null,inst_58609);
var state_58650__$1 = state_58650;
if(inst_58611){
var statearr_58681_58754 = state_58650__$1;
(statearr_58681_58754[(1)] = (36));

} else {
var statearr_58682_58755 = state_58650__$1;
(statearr_58682_58755[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (13))){
var inst_58539 = (state_58650[(26)]);
var inst_58542 = cljs.core.async.close_BANG_.call(null,inst_58539);
var state_58650__$1 = state_58650;
var statearr_58683_58756 = state_58650__$1;
(statearr_58683_58756[(2)] = inst_58542);

(statearr_58683_58756[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (22))){
var inst_58562 = (state_58650[(8)]);
var inst_58565 = cljs.core.async.close_BANG_.call(null,inst_58562);
var state_58650__$1 = state_58650;
var statearr_58684_58757 = state_58650__$1;
(statearr_58684_58757[(2)] = inst_58565);

(statearr_58684_58757[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (36))){
var inst_58609 = (state_58650[(25)]);
var inst_58613 = cljs.core.chunk_first.call(null,inst_58609);
var inst_58614 = cljs.core.chunk_rest.call(null,inst_58609);
var inst_58615 = cljs.core.count.call(null,inst_58613);
var inst_58590 = inst_58614;
var inst_58591 = inst_58613;
var inst_58592 = inst_58615;
var inst_58593 = (0);
var state_58650__$1 = (function (){var statearr_58685 = state_58650;
(statearr_58685[(9)] = inst_58593);

(statearr_58685[(20)] = inst_58590);

(statearr_58685[(21)] = inst_58592);

(statearr_58685[(11)] = inst_58591);

return statearr_58685;
})();
var statearr_58686_58758 = state_58650__$1;
(statearr_58686_58758[(2)] = null);

(statearr_58686_58758[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (41))){
var inst_58609 = (state_58650[(25)]);
var inst_58625 = (state_58650[(2)]);
var inst_58626 = cljs.core.next.call(null,inst_58609);
var inst_58590 = inst_58626;
var inst_58591 = null;
var inst_58592 = (0);
var inst_58593 = (0);
var state_58650__$1 = (function (){var statearr_58687 = state_58650;
(statearr_58687[(9)] = inst_58593);

(statearr_58687[(20)] = inst_58590);

(statearr_58687[(27)] = inst_58625);

(statearr_58687[(21)] = inst_58592);

(statearr_58687[(11)] = inst_58591);

return statearr_58687;
})();
var statearr_58688_58759 = state_58650__$1;
(statearr_58688_58759[(2)] = null);

(statearr_58688_58759[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (43))){
var state_58650__$1 = state_58650;
var statearr_58689_58760 = state_58650__$1;
(statearr_58689_58760[(2)] = null);

(statearr_58689_58760[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (29))){
var inst_58634 = (state_58650[(2)]);
var state_58650__$1 = state_58650;
var statearr_58690_58761 = state_58650__$1;
(statearr_58690_58761[(2)] = inst_58634);

(statearr_58690_58761[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (44))){
var inst_58643 = (state_58650[(2)]);
var state_58650__$1 = (function (){var statearr_58691 = state_58650;
(statearr_58691[(28)] = inst_58643);

return statearr_58691;
})();
var statearr_58692_58762 = state_58650__$1;
(statearr_58692_58762[(2)] = null);

(statearr_58692_58762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (6))){
var inst_58582 = (state_58650[(29)]);
var inst_58581 = cljs.core.deref.call(null,cs);
var inst_58582__$1 = cljs.core.keys.call(null,inst_58581);
var inst_58583 = cljs.core.count.call(null,inst_58582__$1);
var inst_58584 = cljs.core.reset_BANG_.call(null,dctr,inst_58583);
var inst_58589 = cljs.core.seq.call(null,inst_58582__$1);
var inst_58590 = inst_58589;
var inst_58591 = null;
var inst_58592 = (0);
var inst_58593 = (0);
var state_58650__$1 = (function (){var statearr_58693 = state_58650;
(statearr_58693[(29)] = inst_58582__$1);

(statearr_58693[(9)] = inst_58593);

(statearr_58693[(20)] = inst_58590);

(statearr_58693[(21)] = inst_58592);

(statearr_58693[(11)] = inst_58591);

(statearr_58693[(30)] = inst_58584);

return statearr_58693;
})();
var statearr_58694_58763 = state_58650__$1;
(statearr_58694_58763[(2)] = null);

(statearr_58694_58763[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (28))){
var inst_58590 = (state_58650[(20)]);
var inst_58609 = (state_58650[(25)]);
var inst_58609__$1 = cljs.core.seq.call(null,inst_58590);
var state_58650__$1 = (function (){var statearr_58695 = state_58650;
(statearr_58695[(25)] = inst_58609__$1);

return statearr_58695;
})();
if(inst_58609__$1){
var statearr_58696_58764 = state_58650__$1;
(statearr_58696_58764[(1)] = (33));

} else {
var statearr_58697_58765 = state_58650__$1;
(statearr_58697_58765[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (25))){
var inst_58593 = (state_58650[(9)]);
var inst_58592 = (state_58650[(21)]);
var inst_58595 = (inst_58593 < inst_58592);
var inst_58596 = inst_58595;
var state_58650__$1 = state_58650;
if(cljs.core.truth_(inst_58596)){
var statearr_58698_58766 = state_58650__$1;
(statearr_58698_58766[(1)] = (27));

} else {
var statearr_58699_58767 = state_58650__$1;
(statearr_58699_58767[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (34))){
var state_58650__$1 = state_58650;
var statearr_58700_58768 = state_58650__$1;
(statearr_58700_58768[(2)] = null);

(statearr_58700_58768[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (17))){
var state_58650__$1 = state_58650;
var statearr_58701_58769 = state_58650__$1;
(statearr_58701_58769[(2)] = null);

(statearr_58701_58769[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (3))){
var inst_58648 = (state_58650[(2)]);
var state_58650__$1 = state_58650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58650__$1,inst_58648);
} else {
if((state_val_58651 === (12))){
var inst_58577 = (state_58650[(2)]);
var state_58650__$1 = state_58650;
var statearr_58702_58770 = state_58650__$1;
(statearr_58702_58770[(2)] = inst_58577);

(statearr_58702_58770[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (2))){
var state_58650__$1 = state_58650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58650__$1,(4),ch);
} else {
if((state_val_58651 === (23))){
var state_58650__$1 = state_58650;
var statearr_58703_58771 = state_58650__$1;
(statearr_58703_58771[(2)] = null);

(statearr_58703_58771[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (35))){
var inst_58632 = (state_58650[(2)]);
var state_58650__$1 = state_58650;
var statearr_58704_58772 = state_58650__$1;
(statearr_58704_58772[(2)] = inst_58632);

(statearr_58704_58772[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (19))){
var inst_58549 = (state_58650[(7)]);
var inst_58553 = cljs.core.chunk_first.call(null,inst_58549);
var inst_58554 = cljs.core.chunk_rest.call(null,inst_58549);
var inst_58555 = cljs.core.count.call(null,inst_58553);
var inst_58527 = inst_58554;
var inst_58528 = inst_58553;
var inst_58529 = inst_58555;
var inst_58530 = (0);
var state_58650__$1 = (function (){var statearr_58705 = state_58650;
(statearr_58705[(13)] = inst_58528);

(statearr_58705[(14)] = inst_58527);

(statearr_58705[(15)] = inst_58529);

(statearr_58705[(16)] = inst_58530);

return statearr_58705;
})();
var statearr_58706_58773 = state_58650__$1;
(statearr_58706_58773[(2)] = null);

(statearr_58706_58773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (11))){
var inst_58527 = (state_58650[(14)]);
var inst_58549 = (state_58650[(7)]);
var inst_58549__$1 = cljs.core.seq.call(null,inst_58527);
var state_58650__$1 = (function (){var statearr_58707 = state_58650;
(statearr_58707[(7)] = inst_58549__$1);

return statearr_58707;
})();
if(inst_58549__$1){
var statearr_58708_58774 = state_58650__$1;
(statearr_58708_58774[(1)] = (16));

} else {
var statearr_58709_58775 = state_58650__$1;
(statearr_58709_58775[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (9))){
var inst_58579 = (state_58650[(2)]);
var state_58650__$1 = state_58650;
var statearr_58710_58776 = state_58650__$1;
(statearr_58710_58776[(2)] = inst_58579);

(statearr_58710_58776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (5))){
var inst_58525 = cljs.core.deref.call(null,cs);
var inst_58526 = cljs.core.seq.call(null,inst_58525);
var inst_58527 = inst_58526;
var inst_58528 = null;
var inst_58529 = (0);
var inst_58530 = (0);
var state_58650__$1 = (function (){var statearr_58711 = state_58650;
(statearr_58711[(13)] = inst_58528);

(statearr_58711[(14)] = inst_58527);

(statearr_58711[(15)] = inst_58529);

(statearr_58711[(16)] = inst_58530);

return statearr_58711;
})();
var statearr_58712_58777 = state_58650__$1;
(statearr_58712_58777[(2)] = null);

(statearr_58712_58777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (14))){
var state_58650__$1 = state_58650;
var statearr_58713_58778 = state_58650__$1;
(statearr_58713_58778[(2)] = null);

(statearr_58713_58778[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (45))){
var inst_58640 = (state_58650[(2)]);
var state_58650__$1 = state_58650;
var statearr_58714_58779 = state_58650__$1;
(statearr_58714_58779[(2)] = inst_58640);

(statearr_58714_58779[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (26))){
var inst_58582 = (state_58650[(29)]);
var inst_58636 = (state_58650[(2)]);
var inst_58637 = cljs.core.seq.call(null,inst_58582);
var state_58650__$1 = (function (){var statearr_58715 = state_58650;
(statearr_58715[(31)] = inst_58636);

return statearr_58715;
})();
if(inst_58637){
var statearr_58716_58780 = state_58650__$1;
(statearr_58716_58780[(1)] = (42));

} else {
var statearr_58717_58781 = state_58650__$1;
(statearr_58717_58781[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (16))){
var inst_58549 = (state_58650[(7)]);
var inst_58551 = cljs.core.chunked_seq_QMARK_.call(null,inst_58549);
var state_58650__$1 = state_58650;
if(inst_58551){
var statearr_58718_58782 = state_58650__$1;
(statearr_58718_58782[(1)] = (19));

} else {
var statearr_58719_58783 = state_58650__$1;
(statearr_58719_58783[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (38))){
var inst_58629 = (state_58650[(2)]);
var state_58650__$1 = state_58650;
var statearr_58720_58784 = state_58650__$1;
(statearr_58720_58784[(2)] = inst_58629);

(statearr_58720_58784[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (30))){
var state_58650__$1 = state_58650;
var statearr_58721_58785 = state_58650__$1;
(statearr_58721_58785[(2)] = null);

(statearr_58721_58785[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (10))){
var inst_58528 = (state_58650[(13)]);
var inst_58530 = (state_58650[(16)]);
var inst_58538 = cljs.core._nth.call(null,inst_58528,inst_58530);
var inst_58539 = cljs.core.nth.call(null,inst_58538,(0),null);
var inst_58540 = cljs.core.nth.call(null,inst_58538,(1),null);
var state_58650__$1 = (function (){var statearr_58722 = state_58650;
(statearr_58722[(26)] = inst_58539);

return statearr_58722;
})();
if(cljs.core.truth_(inst_58540)){
var statearr_58723_58786 = state_58650__$1;
(statearr_58723_58786[(1)] = (13));

} else {
var statearr_58724_58787 = state_58650__$1;
(statearr_58724_58787[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (18))){
var inst_58575 = (state_58650[(2)]);
var state_58650__$1 = state_58650;
var statearr_58725_58788 = state_58650__$1;
(statearr_58725_58788[(2)] = inst_58575);

(statearr_58725_58788[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (42))){
var state_58650__$1 = state_58650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58650__$1,(45),dchan);
} else {
if((state_val_58651 === (37))){
var inst_58618 = (state_58650[(23)]);
var inst_58518 = (state_58650[(10)]);
var inst_58609 = (state_58650[(25)]);
var inst_58618__$1 = cljs.core.first.call(null,inst_58609);
var inst_58619 = cljs.core.async.put_BANG_.call(null,inst_58618__$1,inst_58518,done);
var state_58650__$1 = (function (){var statearr_58726 = state_58650;
(statearr_58726[(23)] = inst_58618__$1);

return statearr_58726;
})();
if(cljs.core.truth_(inst_58619)){
var statearr_58727_58789 = state_58650__$1;
(statearr_58727_58789[(1)] = (39));

} else {
var statearr_58728_58790 = state_58650__$1;
(statearr_58728_58790[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58651 === (8))){
var inst_58529 = (state_58650[(15)]);
var inst_58530 = (state_58650[(16)]);
var inst_58532 = (inst_58530 < inst_58529);
var inst_58533 = inst_58532;
var state_58650__$1 = state_58650;
if(cljs.core.truth_(inst_58533)){
var statearr_58729_58791 = state_58650__$1;
(statearr_58729_58791[(1)] = (10));

} else {
var statearr_58730_58792 = state_58650__$1;
(statearr_58730_58792[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__57384__auto___58738,cs,m,dchan,dctr,done))
;
return ((function (switch__57272__auto__,c__57384__auto___58738,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__57273__auto__ = null;
var cljs$core$async$mult_$_state_machine__57273__auto____0 = (function (){
var statearr_58734 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58734[(0)] = cljs$core$async$mult_$_state_machine__57273__auto__);

(statearr_58734[(1)] = (1));

return statearr_58734;
});
var cljs$core$async$mult_$_state_machine__57273__auto____1 = (function (state_58650){
while(true){
var ret_value__57274__auto__ = (function (){try{while(true){
var result__57275__auto__ = switch__57272__auto__.call(null,state_58650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57275__auto__;
}
break;
}
}catch (e58735){if((e58735 instanceof Object)){
var ex__57276__auto__ = e58735;
var statearr_58736_58793 = state_58650;
(statearr_58736_58793[(5)] = ex__57276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58794 = state_58650;
state_58650 = G__58794;
continue;
} else {
return ret_value__57274__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__57273__auto__ = function(state_58650){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__57273__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__57273__auto____1.call(this,state_58650);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__57273__auto____0;
cljs$core$async$mult_$_state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__57273__auto____1;
return cljs$core$async$mult_$_state_machine__57273__auto__;
})()
;})(switch__57272__auto__,c__57384__auto___58738,cs,m,dchan,dctr,done))
})();
var state__57386__auto__ = (function (){var statearr_58737 = f__57385__auto__.call(null);
(statearr_58737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__57384__auto___58738);

return statearr_58737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__57386__auto__);
});})(c__57384__auto___58738,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args58795 = [];
var len__49364__auto___58798 = arguments.length;
var i__49365__auto___58799 = (0);
while(true){
if((i__49365__auto___58799 < len__49364__auto___58798)){
args58795.push((arguments[i__49365__auto___58799]));

var G__58800 = (i__49365__auto___58799 + (1));
i__49365__auto___58799 = G__58800;
continue;
} else {
}
break;
}

var G__58797 = args58795.length;
switch (G__58797) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58795.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__48919__auto__ = (((m == null))?null:m);
var m__48920__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__48919__auto__)]);
if(!((m__48920__auto__ == null))){
return m__48920__auto__.call(null,m,ch);
} else {
var m__48920__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__48920__auto____$1 == null))){
return m__48920__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__48919__auto__ = (((m == null))?null:m);
var m__48920__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__48919__auto__)]);
if(!((m__48920__auto__ == null))){
return m__48920__auto__.call(null,m,ch);
} else {
var m__48920__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__48920__auto____$1 == null))){
return m__48920__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__48919__auto__ = (((m == null))?null:m);
var m__48920__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__48919__auto__)]);
if(!((m__48920__auto__ == null))){
return m__48920__auto__.call(null,m);
} else {
var m__48920__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__48920__auto____$1 == null))){
return m__48920__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__48919__auto__ = (((m == null))?null:m);
var m__48920__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__48919__auto__)]);
if(!((m__48920__auto__ == null))){
return m__48920__auto__.call(null,m,state_map);
} else {
var m__48920__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__48920__auto____$1 == null))){
return m__48920__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__48919__auto__ = (((m == null))?null:m);
var m__48920__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__48919__auto__)]);
if(!((m__48920__auto__ == null))){
return m__48920__auto__.call(null,m,mode);
} else {
var m__48920__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__48920__auto____$1 == null))){
return m__48920__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__49371__auto__ = [];
var len__49364__auto___58812 = arguments.length;
var i__49365__auto___58813 = (0);
while(true){
if((i__49365__auto___58813 < len__49364__auto___58812)){
args__49371__auto__.push((arguments[i__49365__auto___58813]));

var G__58814 = (i__49365__auto___58813 + (1));
i__49365__auto___58813 = G__58814;
continue;
} else {
}
break;
}

var argseq__49372__auto__ = ((((3) < args__49371__auto__.length))?(new cljs.core.IndexedSeq(args__49371__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__49372__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__58806){
var map__58807 = p__58806;
var map__58807__$1 = ((((!((map__58807 == null)))?((((map__58807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58807):map__58807);
var opts = map__58807__$1;
var statearr_58809_58815 = state;
(statearr_58809_58815[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__58807,map__58807__$1,opts){
return (function (val){
var statearr_58810_58816 = state;
(statearr_58810_58816[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__58807,map__58807__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_58811_58817 = state;
(statearr_58811_58817[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq58802){
var G__58803 = cljs.core.first.call(null,seq58802);
var seq58802__$1 = cljs.core.next.call(null,seq58802);
var G__58804 = cljs.core.first.call(null,seq58802__$1);
var seq58802__$2 = cljs.core.next.call(null,seq58802__$1);
var G__58805 = cljs.core.first.call(null,seq58802__$2);
var seq58802__$3 = cljs.core.next.call(null,seq58802__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__58803,G__58804,G__58805,seq58802__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async58985 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58985 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta58986){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta58986 = meta58986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async58985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_58987,meta58986__$1){
var self__ = this;
var _58987__$1 = this;
return (new cljs.core.async.t_cljs$core$async58985(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta58986__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58985.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_58987){
var self__ = this;
var _58987__$1 = this;
return self__.meta58986;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58985.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58985.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58985.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58985.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58985.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58985.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58985.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58985.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58985.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta58986","meta58986",687408682,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58985.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58985";

cljs.core.async.t_cljs$core$async58985.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__48862__auto__,writer__48863__auto__,opt__48864__auto__){
return cljs.core._write.call(null,writer__48863__auto__,"cljs.core.async/t_cljs$core$async58985");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async58985 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async58985(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta58986){
return (new cljs.core.async.t_cljs$core$async58985(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta58986));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async58985(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__57384__auto___59152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__57384__auto___59152,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__57385__auto__ = (function (){var switch__57272__auto__ = ((function (c__57384__auto___59152,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_59089){
var state_val_59090 = (state_59089[(1)]);
if((state_val_59090 === (7))){
var inst_59004 = (state_59089[(2)]);
var state_59089__$1 = state_59089;
var statearr_59091_59153 = state_59089__$1;
(statearr_59091_59153[(2)] = inst_59004);

(statearr_59091_59153[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (20))){
var inst_59016 = (state_59089[(7)]);
var state_59089__$1 = state_59089;
var statearr_59092_59154 = state_59089__$1;
(statearr_59092_59154[(2)] = inst_59016);

(statearr_59092_59154[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (27))){
var state_59089__$1 = state_59089;
var statearr_59093_59155 = state_59089__$1;
(statearr_59093_59155[(2)] = null);

(statearr_59093_59155[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (1))){
var inst_58991 = (state_59089[(8)]);
var inst_58991__$1 = calc_state.call(null);
var inst_58993 = (inst_58991__$1 == null);
var inst_58994 = cljs.core.not.call(null,inst_58993);
var state_59089__$1 = (function (){var statearr_59094 = state_59089;
(statearr_59094[(8)] = inst_58991__$1);

return statearr_59094;
})();
if(inst_58994){
var statearr_59095_59156 = state_59089__$1;
(statearr_59095_59156[(1)] = (2));

} else {
var statearr_59096_59157 = state_59089__$1;
(statearr_59096_59157[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (24))){
var inst_59063 = (state_59089[(9)]);
var inst_59049 = (state_59089[(10)]);
var inst_59040 = (state_59089[(11)]);
var inst_59063__$1 = inst_59040.call(null,inst_59049);
var state_59089__$1 = (function (){var statearr_59097 = state_59089;
(statearr_59097[(9)] = inst_59063__$1);

return statearr_59097;
})();
if(cljs.core.truth_(inst_59063__$1)){
var statearr_59098_59158 = state_59089__$1;
(statearr_59098_59158[(1)] = (29));

} else {
var statearr_59099_59159 = state_59089__$1;
(statearr_59099_59159[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (4))){
var inst_59007 = (state_59089[(2)]);
var state_59089__$1 = state_59089;
if(cljs.core.truth_(inst_59007)){
var statearr_59100_59160 = state_59089__$1;
(statearr_59100_59160[(1)] = (8));

} else {
var statearr_59101_59161 = state_59089__$1;
(statearr_59101_59161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (15))){
var inst_59034 = (state_59089[(2)]);
var state_59089__$1 = state_59089;
if(cljs.core.truth_(inst_59034)){
var statearr_59102_59162 = state_59089__$1;
(statearr_59102_59162[(1)] = (19));

} else {
var statearr_59103_59163 = state_59089__$1;
(statearr_59103_59163[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (21))){
var inst_59039 = (state_59089[(12)]);
var inst_59039__$1 = (state_59089[(2)]);
var inst_59040 = cljs.core.get.call(null,inst_59039__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_59041 = cljs.core.get.call(null,inst_59039__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_59042 = cljs.core.get.call(null,inst_59039__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_59089__$1 = (function (){var statearr_59104 = state_59089;
(statearr_59104[(12)] = inst_59039__$1);

(statearr_59104[(13)] = inst_59041);

(statearr_59104[(11)] = inst_59040);

return statearr_59104;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_59089__$1,(22),inst_59042);
} else {
if((state_val_59090 === (31))){
var inst_59071 = (state_59089[(2)]);
var state_59089__$1 = state_59089;
if(cljs.core.truth_(inst_59071)){
var statearr_59105_59164 = state_59089__$1;
(statearr_59105_59164[(1)] = (32));

} else {
var statearr_59106_59165 = state_59089__$1;
(statearr_59106_59165[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (32))){
var inst_59048 = (state_59089[(14)]);
var state_59089__$1 = state_59089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59089__$1,(35),out,inst_59048);
} else {
if((state_val_59090 === (33))){
var inst_59039 = (state_59089[(12)]);
var inst_59016 = inst_59039;
var state_59089__$1 = (function (){var statearr_59107 = state_59089;
(statearr_59107[(7)] = inst_59016);

return statearr_59107;
})();
var statearr_59108_59166 = state_59089__$1;
(statearr_59108_59166[(2)] = null);

(statearr_59108_59166[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (13))){
var inst_59016 = (state_59089[(7)]);
var inst_59023 = inst_59016.cljs$lang$protocol_mask$partition0$;
var inst_59024 = (inst_59023 & (64));
var inst_59025 = inst_59016.cljs$core$ISeq$;
var inst_59026 = (cljs.core.PROTOCOL_SENTINEL === inst_59025);
var inst_59027 = (inst_59024) || (inst_59026);
var state_59089__$1 = state_59089;
if(cljs.core.truth_(inst_59027)){
var statearr_59109_59167 = state_59089__$1;
(statearr_59109_59167[(1)] = (16));

} else {
var statearr_59110_59168 = state_59089__$1;
(statearr_59110_59168[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (22))){
var inst_59049 = (state_59089[(10)]);
var inst_59048 = (state_59089[(14)]);
var inst_59047 = (state_59089[(2)]);
var inst_59048__$1 = cljs.core.nth.call(null,inst_59047,(0),null);
var inst_59049__$1 = cljs.core.nth.call(null,inst_59047,(1),null);
var inst_59050 = (inst_59048__$1 == null);
var inst_59051 = cljs.core._EQ_.call(null,inst_59049__$1,change);
var inst_59052 = (inst_59050) || (inst_59051);
var state_59089__$1 = (function (){var statearr_59111 = state_59089;
(statearr_59111[(10)] = inst_59049__$1);

(statearr_59111[(14)] = inst_59048__$1);

return statearr_59111;
})();
if(cljs.core.truth_(inst_59052)){
var statearr_59112_59169 = state_59089__$1;
(statearr_59112_59169[(1)] = (23));

} else {
var statearr_59113_59170 = state_59089__$1;
(statearr_59113_59170[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (36))){
var inst_59039 = (state_59089[(12)]);
var inst_59016 = inst_59039;
var state_59089__$1 = (function (){var statearr_59114 = state_59089;
(statearr_59114[(7)] = inst_59016);

return statearr_59114;
})();
var statearr_59115_59171 = state_59089__$1;
(statearr_59115_59171[(2)] = null);

(statearr_59115_59171[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (29))){
var inst_59063 = (state_59089[(9)]);
var state_59089__$1 = state_59089;
var statearr_59116_59172 = state_59089__$1;
(statearr_59116_59172[(2)] = inst_59063);

(statearr_59116_59172[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (6))){
var state_59089__$1 = state_59089;
var statearr_59117_59173 = state_59089__$1;
(statearr_59117_59173[(2)] = false);

(statearr_59117_59173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (28))){
var inst_59059 = (state_59089[(2)]);
var inst_59060 = calc_state.call(null);
var inst_59016 = inst_59060;
var state_59089__$1 = (function (){var statearr_59118 = state_59089;
(statearr_59118[(15)] = inst_59059);

(statearr_59118[(7)] = inst_59016);

return statearr_59118;
})();
var statearr_59119_59174 = state_59089__$1;
(statearr_59119_59174[(2)] = null);

(statearr_59119_59174[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (25))){
var inst_59085 = (state_59089[(2)]);
var state_59089__$1 = state_59089;
var statearr_59120_59175 = state_59089__$1;
(statearr_59120_59175[(2)] = inst_59085);

(statearr_59120_59175[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (34))){
var inst_59083 = (state_59089[(2)]);
var state_59089__$1 = state_59089;
var statearr_59121_59176 = state_59089__$1;
(statearr_59121_59176[(2)] = inst_59083);

(statearr_59121_59176[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (17))){
var state_59089__$1 = state_59089;
var statearr_59122_59177 = state_59089__$1;
(statearr_59122_59177[(2)] = false);

(statearr_59122_59177[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (3))){
var state_59089__$1 = state_59089;
var statearr_59123_59178 = state_59089__$1;
(statearr_59123_59178[(2)] = false);

(statearr_59123_59178[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (12))){
var inst_59087 = (state_59089[(2)]);
var state_59089__$1 = state_59089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59089__$1,inst_59087);
} else {
if((state_val_59090 === (2))){
var inst_58991 = (state_59089[(8)]);
var inst_58996 = inst_58991.cljs$lang$protocol_mask$partition0$;
var inst_58997 = (inst_58996 & (64));
var inst_58998 = inst_58991.cljs$core$ISeq$;
var inst_58999 = (cljs.core.PROTOCOL_SENTINEL === inst_58998);
var inst_59000 = (inst_58997) || (inst_58999);
var state_59089__$1 = state_59089;
if(cljs.core.truth_(inst_59000)){
var statearr_59124_59179 = state_59089__$1;
(statearr_59124_59179[(1)] = (5));

} else {
var statearr_59125_59180 = state_59089__$1;
(statearr_59125_59180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (23))){
var inst_59048 = (state_59089[(14)]);
var inst_59054 = (inst_59048 == null);
var state_59089__$1 = state_59089;
if(cljs.core.truth_(inst_59054)){
var statearr_59126_59181 = state_59089__$1;
(statearr_59126_59181[(1)] = (26));

} else {
var statearr_59127_59182 = state_59089__$1;
(statearr_59127_59182[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (35))){
var inst_59074 = (state_59089[(2)]);
var state_59089__$1 = state_59089;
if(cljs.core.truth_(inst_59074)){
var statearr_59128_59183 = state_59089__$1;
(statearr_59128_59183[(1)] = (36));

} else {
var statearr_59129_59184 = state_59089__$1;
(statearr_59129_59184[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (19))){
var inst_59016 = (state_59089[(7)]);
var inst_59036 = cljs.core.apply.call(null,cljs.core.hash_map,inst_59016);
var state_59089__$1 = state_59089;
var statearr_59130_59185 = state_59089__$1;
(statearr_59130_59185[(2)] = inst_59036);

(statearr_59130_59185[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (11))){
var inst_59016 = (state_59089[(7)]);
var inst_59020 = (inst_59016 == null);
var inst_59021 = cljs.core.not.call(null,inst_59020);
var state_59089__$1 = state_59089;
if(inst_59021){
var statearr_59131_59186 = state_59089__$1;
(statearr_59131_59186[(1)] = (13));

} else {
var statearr_59132_59187 = state_59089__$1;
(statearr_59132_59187[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (9))){
var inst_58991 = (state_59089[(8)]);
var state_59089__$1 = state_59089;
var statearr_59133_59188 = state_59089__$1;
(statearr_59133_59188[(2)] = inst_58991);

(statearr_59133_59188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (5))){
var state_59089__$1 = state_59089;
var statearr_59134_59189 = state_59089__$1;
(statearr_59134_59189[(2)] = true);

(statearr_59134_59189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (14))){
var state_59089__$1 = state_59089;
var statearr_59135_59190 = state_59089__$1;
(statearr_59135_59190[(2)] = false);

(statearr_59135_59190[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (26))){
var inst_59049 = (state_59089[(10)]);
var inst_59056 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_59049);
var state_59089__$1 = state_59089;
var statearr_59136_59191 = state_59089__$1;
(statearr_59136_59191[(2)] = inst_59056);

(statearr_59136_59191[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (16))){
var state_59089__$1 = state_59089;
var statearr_59137_59192 = state_59089__$1;
(statearr_59137_59192[(2)] = true);

(statearr_59137_59192[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (38))){
var inst_59079 = (state_59089[(2)]);
var state_59089__$1 = state_59089;
var statearr_59138_59193 = state_59089__$1;
(statearr_59138_59193[(2)] = inst_59079);

(statearr_59138_59193[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (30))){
var inst_59049 = (state_59089[(10)]);
var inst_59041 = (state_59089[(13)]);
var inst_59040 = (state_59089[(11)]);
var inst_59066 = cljs.core.empty_QMARK_.call(null,inst_59040);
var inst_59067 = inst_59041.call(null,inst_59049);
var inst_59068 = cljs.core.not.call(null,inst_59067);
var inst_59069 = (inst_59066) && (inst_59068);
var state_59089__$1 = state_59089;
var statearr_59139_59194 = state_59089__$1;
(statearr_59139_59194[(2)] = inst_59069);

(statearr_59139_59194[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (10))){
var inst_58991 = (state_59089[(8)]);
var inst_59012 = (state_59089[(2)]);
var inst_59013 = cljs.core.get.call(null,inst_59012,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_59014 = cljs.core.get.call(null,inst_59012,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_59015 = cljs.core.get.call(null,inst_59012,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_59016 = inst_58991;
var state_59089__$1 = (function (){var statearr_59140 = state_59089;
(statearr_59140[(16)] = inst_59014);

(statearr_59140[(7)] = inst_59016);

(statearr_59140[(17)] = inst_59015);

(statearr_59140[(18)] = inst_59013);

return statearr_59140;
})();
var statearr_59141_59195 = state_59089__$1;
(statearr_59141_59195[(2)] = null);

(statearr_59141_59195[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (18))){
var inst_59031 = (state_59089[(2)]);
var state_59089__$1 = state_59089;
var statearr_59142_59196 = state_59089__$1;
(statearr_59142_59196[(2)] = inst_59031);

(statearr_59142_59196[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (37))){
var state_59089__$1 = state_59089;
var statearr_59143_59197 = state_59089__$1;
(statearr_59143_59197[(2)] = null);

(statearr_59143_59197[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59090 === (8))){
var inst_58991 = (state_59089[(8)]);
var inst_59009 = cljs.core.apply.call(null,cljs.core.hash_map,inst_58991);
var state_59089__$1 = state_59089;
var statearr_59144_59198 = state_59089__$1;
(statearr_59144_59198[(2)] = inst_59009);

(statearr_59144_59198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__57384__auto___59152,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__57272__auto__,c__57384__auto___59152,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__57273__auto__ = null;
var cljs$core$async$mix_$_state_machine__57273__auto____0 = (function (){
var statearr_59148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59148[(0)] = cljs$core$async$mix_$_state_machine__57273__auto__);

(statearr_59148[(1)] = (1));

return statearr_59148;
});
var cljs$core$async$mix_$_state_machine__57273__auto____1 = (function (state_59089){
while(true){
var ret_value__57274__auto__ = (function (){try{while(true){
var result__57275__auto__ = switch__57272__auto__.call(null,state_59089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57275__auto__;
}
break;
}
}catch (e59149){if((e59149 instanceof Object)){
var ex__57276__auto__ = e59149;
var statearr_59150_59199 = state_59089;
(statearr_59150_59199[(5)] = ex__57276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59200 = state_59089;
state_59089 = G__59200;
continue;
} else {
return ret_value__57274__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__57273__auto__ = function(state_59089){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__57273__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__57273__auto____1.call(this,state_59089);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__57273__auto____0;
cljs$core$async$mix_$_state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__57273__auto____1;
return cljs$core$async$mix_$_state_machine__57273__auto__;
})()
;})(switch__57272__auto__,c__57384__auto___59152,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__57386__auto__ = (function (){var statearr_59151 = f__57385__auto__.call(null);
(statearr_59151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__57384__auto___59152);

return statearr_59151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__57386__auto__);
});})(c__57384__auto___59152,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__48919__auto__ = (((p == null))?null:p);
var m__48920__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__48919__auto__)]);
if(!((m__48920__auto__ == null))){
return m__48920__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__48920__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__48920__auto____$1 == null))){
return m__48920__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__48919__auto__ = (((p == null))?null:p);
var m__48920__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__48919__auto__)]);
if(!((m__48920__auto__ == null))){
return m__48920__auto__.call(null,p,v,ch);
} else {
var m__48920__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__48920__auto____$1 == null))){
return m__48920__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args59201 = [];
var len__49364__auto___59204 = arguments.length;
var i__49365__auto___59205 = (0);
while(true){
if((i__49365__auto___59205 < len__49364__auto___59204)){
args59201.push((arguments[i__49365__auto___59205]));

var G__59206 = (i__49365__auto___59205 + (1));
i__49365__auto___59205 = G__59206;
continue;
} else {
}
break;
}

var G__59203 = args59201.length;
switch (G__59203) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args59201.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__48919__auto__ = (((p == null))?null:p);
var m__48920__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__48919__auto__)]);
if(!((m__48920__auto__ == null))){
return m__48920__auto__.call(null,p);
} else {
var m__48920__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__48920__auto____$1 == null))){
return m__48920__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__48919__auto__ = (((p == null))?null:p);
var m__48920__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__48919__auto__)]);
if(!((m__48920__auto__ == null))){
return m__48920__auto__.call(null,p,v);
} else {
var m__48920__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__48920__auto____$1 == null))){
return m__48920__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args59209 = [];
var len__49364__auto___59334 = arguments.length;
var i__49365__auto___59335 = (0);
while(true){
if((i__49365__auto___59335 < len__49364__auto___59334)){
args59209.push((arguments[i__49365__auto___59335]));

var G__59336 = (i__49365__auto___59335 + (1));
i__49365__auto___59335 = G__59336;
continue;
} else {
}
break;
}

var G__59211 = args59209.length;
switch (G__59211) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args59209.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__48251__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__48251__auto__)){
return or__48251__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__48251__auto__,mults){
return (function (p1__59208_SHARP_){
if(cljs.core.truth_(p1__59208_SHARP_.call(null,topic))){
return p1__59208_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__59208_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__48251__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async59212 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59212 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta59213){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta59213 = meta59213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async59212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_59214,meta59213__$1){
var self__ = this;
var _59214__$1 = this;
return (new cljs.core.async.t_cljs$core$async59212(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta59213__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59212.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_59214){
var self__ = this;
var _59214__$1 = this;
return self__.meta59213;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59212.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59212.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59212.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59212.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59212.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59212.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59212.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59212.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta59213","meta59213",-1731964520,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59212.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59212";

cljs.core.async.t_cljs$core$async59212.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__48862__auto__,writer__48863__auto__,opt__48864__auto__){
return cljs.core._write.call(null,writer__48863__auto__,"cljs.core.async/t_cljs$core$async59212");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async59212 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async59212(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta59213){
return (new cljs.core.async.t_cljs$core$async59212(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta59213));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async59212(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__57384__auto___59338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__57384__auto___59338,mults,ensure_mult,p){
return (function (){
var f__57385__auto__ = (function (){var switch__57272__auto__ = ((function (c__57384__auto___59338,mults,ensure_mult,p){
return (function (state_59286){
var state_val_59287 = (state_59286[(1)]);
if((state_val_59287 === (7))){
var inst_59282 = (state_59286[(2)]);
var state_59286__$1 = state_59286;
var statearr_59288_59339 = state_59286__$1;
(statearr_59288_59339[(2)] = inst_59282);

(statearr_59288_59339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59287 === (20))){
var state_59286__$1 = state_59286;
var statearr_59289_59340 = state_59286__$1;
(statearr_59289_59340[(2)] = null);

(statearr_59289_59340[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59287 === (1))){
var state_59286__$1 = state_59286;
var statearr_59290_59341 = state_59286__$1;
(statearr_59290_59341[(2)] = null);

(statearr_59290_59341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59287 === (24))){
var inst_59265 = (state_59286[(7)]);
var inst_59274 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_59265);
var state_59286__$1 = state_59286;
var statearr_59291_59342 = state_59286__$1;
(statearr_59291_59342[(2)] = inst_59274);

(statearr_59291_59342[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59287 === (4))){
var inst_59217 = (state_59286[(8)]);
var inst_59217__$1 = (state_59286[(2)]);
var inst_59218 = (inst_59217__$1 == null);
var state_59286__$1 = (function (){var statearr_59292 = state_59286;
(statearr_59292[(8)] = inst_59217__$1);

return statearr_59292;
})();
if(cljs.core.truth_(inst_59218)){
var statearr_59293_59343 = state_59286__$1;
(statearr_59293_59343[(1)] = (5));

} else {
var statearr_59294_59344 = state_59286__$1;
(statearr_59294_59344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59287 === (15))){
var inst_59259 = (state_59286[(2)]);
var state_59286__$1 = state_59286;
var statearr_59295_59345 = state_59286__$1;
(statearr_59295_59345[(2)] = inst_59259);

(statearr_59295_59345[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59287 === (21))){
var inst_59279 = (state_59286[(2)]);
var state_59286__$1 = (function (){var statearr_59296 = state_59286;
(statearr_59296[(9)] = inst_59279);

return statearr_59296;
})();
var statearr_59297_59346 = state_59286__$1;
(statearr_59297_59346[(2)] = null);

(statearr_59297_59346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59287 === (13))){
var inst_59241 = (state_59286[(10)]);
var inst_59243 = cljs.core.chunked_seq_QMARK_.call(null,inst_59241);
var state_59286__$1 = state_59286;
if(inst_59243){
var statearr_59298_59347 = state_59286__$1;
(statearr_59298_59347[(1)] = (16));

} else {
var statearr_59299_59348 = state_59286__$1;
(statearr_59299_59348[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59287 === (22))){
var inst_59271 = (state_59286[(2)]);
var state_59286__$1 = state_59286;
if(cljs.core.truth_(inst_59271)){
var statearr_59300_59349 = state_59286__$1;
(statearr_59300_59349[(1)] = (23));

} else {
var statearr_59301_59350 = state_59286__$1;
(statearr_59301_59350[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59287 === (6))){
var inst_59267 = (state_59286[(11)]);
var inst_59265 = (state_59286[(7)]);
var inst_59217 = (state_59286[(8)]);
var inst_59265__$1 = topic_fn.call(null,inst_59217);
var inst_59266 = cljs.core.deref.call(null,mults);
var inst_59267__$1 = cljs.core.get.call(null,inst_59266,inst_59265__$1);
var state_59286__$1 = (function (){var statearr_59302 = state_59286;
(statearr_59302[(11)] = inst_59267__$1);

(statearr_59302[(7)] = inst_59265__$1);

return statearr_59302;
})();
if(cljs.core.truth_(inst_59267__$1)){
var statearr_59303_59351 = state_59286__$1;
(statearr_59303_59351[(1)] = (19));

} else {
var statearr_59304_59352 = state_59286__$1;
(statearr_59304_59352[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59287 === (25))){
var inst_59276 = (state_59286[(2)]);
var state_59286__$1 = state_59286;
var statearr_59305_59353 = state_59286__$1;
(statearr_59305_59353[(2)] = inst_59276);

(statearr_59305_59353[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59287 === (17))){
var inst_59241 = (state_59286[(10)]);
var inst_59250 = cljs.core.first.call(null,inst_59241);
var inst_59251 = cljs.core.async.muxch_STAR_.call(null,inst_59250);
var inst_59252 = cljs.core.async.close_BANG_.call(null,inst_59251);
var inst_59253 = cljs.core.next.call(null,inst_59241);
var inst_59227 = inst_59253;
var inst_59228 = null;
var inst_59229 = (0);
var inst_59230 = (0);
var state_59286__$1 = (function (){var statearr_59306 = state_59286;
(statearr_59306[(12)] = inst_59229);

(statearr_59306[(13)] = inst_59230);

(statearr_59306[(14)] = inst_59227);

(statearr_59306[(15)] = inst_59252);

(statearr_59306[(16)] = inst_59228);

return statearr_59306;
})();
var statearr_59307_59354 = state_59286__$1;
(statearr_59307_59354[(2)] = null);

(statearr_59307_59354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59287 === (3))){
var inst_59284 = (state_59286[(2)]);
var state_59286__$1 = state_59286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59286__$1,inst_59284);
} else {
if((state_val_59287 === (12))){
var inst_59261 = (state_59286[(2)]);
var state_59286__$1 = state_59286;
var statearr_59308_59355 = state_59286__$1;
(statearr_59308_59355[(2)] = inst_59261);

(statearr_59308_59355[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59287 === (2))){
var state_59286__$1 = state_59286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59286__$1,(4),ch);
} else {
if((state_val_59287 === (23))){
var state_59286__$1 = state_59286;
var statearr_59309_59356 = state_59286__$1;
(statearr_59309_59356[(2)] = null);

(statearr_59309_59356[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59287 === (19))){
var inst_59267 = (state_59286[(11)]);
var inst_59217 = (state_59286[(8)]);
var inst_59269 = cljs.core.async.muxch_STAR_.call(null,inst_59267);
var state_59286__$1 = state_59286;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59286__$1,(22),inst_59269,inst_59217);
} else {
if((state_val_59287 === (11))){
var inst_59227 = (state_59286[(14)]);
var inst_59241 = (state_59286[(10)]);
var inst_59241__$1 = cljs.core.seq.call(null,inst_59227);
var state_59286__$1 = (function (){var statearr_59310 = state_59286;
(statearr_59310[(10)] = inst_59241__$1);

return statearr_59310;
})();
if(inst_59241__$1){
var statearr_59311_59357 = state_59286__$1;
(statearr_59311_59357[(1)] = (13));

} else {
var statearr_59312_59358 = state_59286__$1;
(statearr_59312_59358[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59287 === (9))){
var inst_59263 = (state_59286[(2)]);
var state_59286__$1 = state_59286;
var statearr_59313_59359 = state_59286__$1;
(statearr_59313_59359[(2)] = inst_59263);

(statearr_59313_59359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59287 === (5))){
var inst_59224 = cljs.core.deref.call(null,mults);
var inst_59225 = cljs.core.vals.call(null,inst_59224);
var inst_59226 = cljs.core.seq.call(null,inst_59225);
var inst_59227 = inst_59226;
var inst_59228 = null;
var inst_59229 = (0);
var inst_59230 = (0);
var state_59286__$1 = (function (){var statearr_59314 = state_59286;
(statearr_59314[(12)] = inst_59229);

(statearr_59314[(13)] = inst_59230);

(statearr_59314[(14)] = inst_59227);

(statearr_59314[(16)] = inst_59228);

return statearr_59314;
})();
var statearr_59315_59360 = state_59286__$1;
(statearr_59315_59360[(2)] = null);

(statearr_59315_59360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59287 === (14))){
var state_59286__$1 = state_59286;
var statearr_59319_59361 = state_59286__$1;
(statearr_59319_59361[(2)] = null);

(statearr_59319_59361[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59287 === (16))){
var inst_59241 = (state_59286[(10)]);
var inst_59245 = cljs.core.chunk_first.call(null,inst_59241);
var inst_59246 = cljs.core.chunk_rest.call(null,inst_59241);
var inst_59247 = cljs.core.count.call(null,inst_59245);
var inst_59227 = inst_59246;
var inst_59228 = inst_59245;
var inst_59229 = inst_59247;
var inst_59230 = (0);
var state_59286__$1 = (function (){var statearr_59320 = state_59286;
(statearr_59320[(12)] = inst_59229);

(statearr_59320[(13)] = inst_59230);

(statearr_59320[(14)] = inst_59227);

(statearr_59320[(16)] = inst_59228);

return statearr_59320;
})();
var statearr_59321_59362 = state_59286__$1;
(statearr_59321_59362[(2)] = null);

(statearr_59321_59362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59287 === (10))){
var inst_59229 = (state_59286[(12)]);
var inst_59230 = (state_59286[(13)]);
var inst_59227 = (state_59286[(14)]);
var inst_59228 = (state_59286[(16)]);
var inst_59235 = cljs.core._nth.call(null,inst_59228,inst_59230);
var inst_59236 = cljs.core.async.muxch_STAR_.call(null,inst_59235);
var inst_59237 = cljs.core.async.close_BANG_.call(null,inst_59236);
var inst_59238 = (inst_59230 + (1));
var tmp59316 = inst_59229;
var tmp59317 = inst_59227;
var tmp59318 = inst_59228;
var inst_59227__$1 = tmp59317;
var inst_59228__$1 = tmp59318;
var inst_59229__$1 = tmp59316;
var inst_59230__$1 = inst_59238;
var state_59286__$1 = (function (){var statearr_59322 = state_59286;
(statearr_59322[(12)] = inst_59229__$1);

(statearr_59322[(13)] = inst_59230__$1);

(statearr_59322[(14)] = inst_59227__$1);

(statearr_59322[(16)] = inst_59228__$1);

(statearr_59322[(17)] = inst_59237);

return statearr_59322;
})();
var statearr_59323_59363 = state_59286__$1;
(statearr_59323_59363[(2)] = null);

(statearr_59323_59363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59287 === (18))){
var inst_59256 = (state_59286[(2)]);
var state_59286__$1 = state_59286;
var statearr_59324_59364 = state_59286__$1;
(statearr_59324_59364[(2)] = inst_59256);

(statearr_59324_59364[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59287 === (8))){
var inst_59229 = (state_59286[(12)]);
var inst_59230 = (state_59286[(13)]);
var inst_59232 = (inst_59230 < inst_59229);
var inst_59233 = inst_59232;
var state_59286__$1 = state_59286;
if(cljs.core.truth_(inst_59233)){
var statearr_59325_59365 = state_59286__$1;
(statearr_59325_59365[(1)] = (10));

} else {
var statearr_59326_59366 = state_59286__$1;
(statearr_59326_59366[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__57384__auto___59338,mults,ensure_mult,p))
;
return ((function (switch__57272__auto__,c__57384__auto___59338,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__57273__auto__ = null;
var cljs$core$async$state_machine__57273__auto____0 = (function (){
var statearr_59330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59330[(0)] = cljs$core$async$state_machine__57273__auto__);

(statearr_59330[(1)] = (1));

return statearr_59330;
});
var cljs$core$async$state_machine__57273__auto____1 = (function (state_59286){
while(true){
var ret_value__57274__auto__ = (function (){try{while(true){
var result__57275__auto__ = switch__57272__auto__.call(null,state_59286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57275__auto__;
}
break;
}
}catch (e59331){if((e59331 instanceof Object)){
var ex__57276__auto__ = e59331;
var statearr_59332_59367 = state_59286;
(statearr_59332_59367[(5)] = ex__57276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59368 = state_59286;
state_59286 = G__59368;
continue;
} else {
return ret_value__57274__auto__;
}
break;
}
});
cljs$core$async$state_machine__57273__auto__ = function(state_59286){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57273__auto____1.call(this,state_59286);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57273__auto____0;
cljs$core$async$state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57273__auto____1;
return cljs$core$async$state_machine__57273__auto__;
})()
;})(switch__57272__auto__,c__57384__auto___59338,mults,ensure_mult,p))
})();
var state__57386__auto__ = (function (){var statearr_59333 = f__57385__auto__.call(null);
(statearr_59333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__57384__auto___59338);

return statearr_59333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__57386__auto__);
});})(c__57384__auto___59338,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args59369 = [];
var len__49364__auto___59372 = arguments.length;
var i__49365__auto___59373 = (0);
while(true){
if((i__49365__auto___59373 < len__49364__auto___59372)){
args59369.push((arguments[i__49365__auto___59373]));

var G__59374 = (i__49365__auto___59373 + (1));
i__49365__auto___59373 = G__59374;
continue;
} else {
}
break;
}

var G__59371 = args59369.length;
switch (G__59371) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args59369.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args59376 = [];
var len__49364__auto___59379 = arguments.length;
var i__49365__auto___59380 = (0);
while(true){
if((i__49365__auto___59380 < len__49364__auto___59379)){
args59376.push((arguments[i__49365__auto___59380]));

var G__59381 = (i__49365__auto___59380 + (1));
i__49365__auto___59380 = G__59381;
continue;
} else {
}
break;
}

var G__59378 = args59376.length;
switch (G__59378) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args59376.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args59383 = [];
var len__49364__auto___59454 = arguments.length;
var i__49365__auto___59455 = (0);
while(true){
if((i__49365__auto___59455 < len__49364__auto___59454)){
args59383.push((arguments[i__49365__auto___59455]));

var G__59456 = (i__49365__auto___59455 + (1));
i__49365__auto___59455 = G__59456;
continue;
} else {
}
break;
}

var G__59385 = args59383.length;
switch (G__59385) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args59383.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__57384__auto___59458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__57384__auto___59458,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__57385__auto__ = (function (){var switch__57272__auto__ = ((function (c__57384__auto___59458,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_59424){
var state_val_59425 = (state_59424[(1)]);
if((state_val_59425 === (7))){
var state_59424__$1 = state_59424;
var statearr_59426_59459 = state_59424__$1;
(statearr_59426_59459[(2)] = null);

(statearr_59426_59459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59425 === (1))){
var state_59424__$1 = state_59424;
var statearr_59427_59460 = state_59424__$1;
(statearr_59427_59460[(2)] = null);

(statearr_59427_59460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59425 === (4))){
var inst_59388 = (state_59424[(7)]);
var inst_59390 = (inst_59388 < cnt);
var state_59424__$1 = state_59424;
if(cljs.core.truth_(inst_59390)){
var statearr_59428_59461 = state_59424__$1;
(statearr_59428_59461[(1)] = (6));

} else {
var statearr_59429_59462 = state_59424__$1;
(statearr_59429_59462[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59425 === (15))){
var inst_59420 = (state_59424[(2)]);
var state_59424__$1 = state_59424;
var statearr_59430_59463 = state_59424__$1;
(statearr_59430_59463[(2)] = inst_59420);

(statearr_59430_59463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59425 === (13))){
var inst_59413 = cljs.core.async.close_BANG_.call(null,out);
var state_59424__$1 = state_59424;
var statearr_59431_59464 = state_59424__$1;
(statearr_59431_59464[(2)] = inst_59413);

(statearr_59431_59464[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59425 === (6))){
var state_59424__$1 = state_59424;
var statearr_59432_59465 = state_59424__$1;
(statearr_59432_59465[(2)] = null);

(statearr_59432_59465[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59425 === (3))){
var inst_59422 = (state_59424[(2)]);
var state_59424__$1 = state_59424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59424__$1,inst_59422);
} else {
if((state_val_59425 === (12))){
var inst_59410 = (state_59424[(8)]);
var inst_59410__$1 = (state_59424[(2)]);
var inst_59411 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_59410__$1);
var state_59424__$1 = (function (){var statearr_59433 = state_59424;
(statearr_59433[(8)] = inst_59410__$1);

return statearr_59433;
})();
if(cljs.core.truth_(inst_59411)){
var statearr_59434_59466 = state_59424__$1;
(statearr_59434_59466[(1)] = (13));

} else {
var statearr_59435_59467 = state_59424__$1;
(statearr_59435_59467[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59425 === (2))){
var inst_59387 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_59388 = (0);
var state_59424__$1 = (function (){var statearr_59436 = state_59424;
(statearr_59436[(9)] = inst_59387);

(statearr_59436[(7)] = inst_59388);

return statearr_59436;
})();
var statearr_59437_59468 = state_59424__$1;
(statearr_59437_59468[(2)] = null);

(statearr_59437_59468[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59425 === (11))){
var inst_59388 = (state_59424[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_59424,(10),Object,null,(9));
var inst_59397 = chs__$1.call(null,inst_59388);
var inst_59398 = done.call(null,inst_59388);
var inst_59399 = cljs.core.async.take_BANG_.call(null,inst_59397,inst_59398);
var state_59424__$1 = state_59424;
var statearr_59438_59469 = state_59424__$1;
(statearr_59438_59469[(2)] = inst_59399);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59424__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59425 === (9))){
var inst_59388 = (state_59424[(7)]);
var inst_59401 = (state_59424[(2)]);
var inst_59402 = (inst_59388 + (1));
var inst_59388__$1 = inst_59402;
var state_59424__$1 = (function (){var statearr_59439 = state_59424;
(statearr_59439[(7)] = inst_59388__$1);

(statearr_59439[(10)] = inst_59401);

return statearr_59439;
})();
var statearr_59440_59470 = state_59424__$1;
(statearr_59440_59470[(2)] = null);

(statearr_59440_59470[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59425 === (5))){
var inst_59408 = (state_59424[(2)]);
var state_59424__$1 = (function (){var statearr_59441 = state_59424;
(statearr_59441[(11)] = inst_59408);

return statearr_59441;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59424__$1,(12),dchan);
} else {
if((state_val_59425 === (14))){
var inst_59410 = (state_59424[(8)]);
var inst_59415 = cljs.core.apply.call(null,f,inst_59410);
var state_59424__$1 = state_59424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59424__$1,(16),out,inst_59415);
} else {
if((state_val_59425 === (16))){
var inst_59417 = (state_59424[(2)]);
var state_59424__$1 = (function (){var statearr_59442 = state_59424;
(statearr_59442[(12)] = inst_59417);

return statearr_59442;
})();
var statearr_59443_59471 = state_59424__$1;
(statearr_59443_59471[(2)] = null);

(statearr_59443_59471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59425 === (10))){
var inst_59392 = (state_59424[(2)]);
var inst_59393 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_59424__$1 = (function (){var statearr_59444 = state_59424;
(statearr_59444[(13)] = inst_59392);

return statearr_59444;
})();
var statearr_59445_59472 = state_59424__$1;
(statearr_59445_59472[(2)] = inst_59393);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59424__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59425 === (8))){
var inst_59406 = (state_59424[(2)]);
var state_59424__$1 = state_59424;
var statearr_59446_59473 = state_59424__$1;
(statearr_59446_59473[(2)] = inst_59406);

(statearr_59446_59473[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__57384__auto___59458,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__57272__auto__,c__57384__auto___59458,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__57273__auto__ = null;
var cljs$core$async$state_machine__57273__auto____0 = (function (){
var statearr_59450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59450[(0)] = cljs$core$async$state_machine__57273__auto__);

(statearr_59450[(1)] = (1));

return statearr_59450;
});
var cljs$core$async$state_machine__57273__auto____1 = (function (state_59424){
while(true){
var ret_value__57274__auto__ = (function (){try{while(true){
var result__57275__auto__ = switch__57272__auto__.call(null,state_59424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57275__auto__;
}
break;
}
}catch (e59451){if((e59451 instanceof Object)){
var ex__57276__auto__ = e59451;
var statearr_59452_59474 = state_59424;
(statearr_59452_59474[(5)] = ex__57276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59475 = state_59424;
state_59424 = G__59475;
continue;
} else {
return ret_value__57274__auto__;
}
break;
}
});
cljs$core$async$state_machine__57273__auto__ = function(state_59424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57273__auto____1.call(this,state_59424);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57273__auto____0;
cljs$core$async$state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57273__auto____1;
return cljs$core$async$state_machine__57273__auto__;
})()
;})(switch__57272__auto__,c__57384__auto___59458,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__57386__auto__ = (function (){var statearr_59453 = f__57385__auto__.call(null);
(statearr_59453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__57384__auto___59458);

return statearr_59453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__57386__auto__);
});})(c__57384__auto___59458,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args59477 = [];
var len__49364__auto___59535 = arguments.length;
var i__49365__auto___59536 = (0);
while(true){
if((i__49365__auto___59536 < len__49364__auto___59535)){
args59477.push((arguments[i__49365__auto___59536]));

var G__59537 = (i__49365__auto___59536 + (1));
i__49365__auto___59536 = G__59537;
continue;
} else {
}
break;
}

var G__59479 = args59477.length;
switch (G__59479) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args59477.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__57384__auto___59539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__57384__auto___59539,out){
return (function (){
var f__57385__auto__ = (function (){var switch__57272__auto__ = ((function (c__57384__auto___59539,out){
return (function (state_59511){
var state_val_59512 = (state_59511[(1)]);
if((state_val_59512 === (7))){
var inst_59491 = (state_59511[(7)]);
var inst_59490 = (state_59511[(8)]);
var inst_59490__$1 = (state_59511[(2)]);
var inst_59491__$1 = cljs.core.nth.call(null,inst_59490__$1,(0),null);
var inst_59492 = cljs.core.nth.call(null,inst_59490__$1,(1),null);
var inst_59493 = (inst_59491__$1 == null);
var state_59511__$1 = (function (){var statearr_59513 = state_59511;
(statearr_59513[(7)] = inst_59491__$1);

(statearr_59513[(9)] = inst_59492);

(statearr_59513[(8)] = inst_59490__$1);

return statearr_59513;
})();
if(cljs.core.truth_(inst_59493)){
var statearr_59514_59540 = state_59511__$1;
(statearr_59514_59540[(1)] = (8));

} else {
var statearr_59515_59541 = state_59511__$1;
(statearr_59515_59541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59512 === (1))){
var inst_59480 = cljs.core.vec.call(null,chs);
var inst_59481 = inst_59480;
var state_59511__$1 = (function (){var statearr_59516 = state_59511;
(statearr_59516[(10)] = inst_59481);

return statearr_59516;
})();
var statearr_59517_59542 = state_59511__$1;
(statearr_59517_59542[(2)] = null);

(statearr_59517_59542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59512 === (4))){
var inst_59481 = (state_59511[(10)]);
var state_59511__$1 = state_59511;
return cljs.core.async.ioc_alts_BANG_.call(null,state_59511__$1,(7),inst_59481);
} else {
if((state_val_59512 === (6))){
var inst_59507 = (state_59511[(2)]);
var state_59511__$1 = state_59511;
var statearr_59518_59543 = state_59511__$1;
(statearr_59518_59543[(2)] = inst_59507);

(statearr_59518_59543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59512 === (3))){
var inst_59509 = (state_59511[(2)]);
var state_59511__$1 = state_59511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59511__$1,inst_59509);
} else {
if((state_val_59512 === (2))){
var inst_59481 = (state_59511[(10)]);
var inst_59483 = cljs.core.count.call(null,inst_59481);
var inst_59484 = (inst_59483 > (0));
var state_59511__$1 = state_59511;
if(cljs.core.truth_(inst_59484)){
var statearr_59520_59544 = state_59511__$1;
(statearr_59520_59544[(1)] = (4));

} else {
var statearr_59521_59545 = state_59511__$1;
(statearr_59521_59545[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59512 === (11))){
var inst_59481 = (state_59511[(10)]);
var inst_59500 = (state_59511[(2)]);
var tmp59519 = inst_59481;
var inst_59481__$1 = tmp59519;
var state_59511__$1 = (function (){var statearr_59522 = state_59511;
(statearr_59522[(10)] = inst_59481__$1);

(statearr_59522[(11)] = inst_59500);

return statearr_59522;
})();
var statearr_59523_59546 = state_59511__$1;
(statearr_59523_59546[(2)] = null);

(statearr_59523_59546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59512 === (9))){
var inst_59491 = (state_59511[(7)]);
var state_59511__$1 = state_59511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59511__$1,(11),out,inst_59491);
} else {
if((state_val_59512 === (5))){
var inst_59505 = cljs.core.async.close_BANG_.call(null,out);
var state_59511__$1 = state_59511;
var statearr_59524_59547 = state_59511__$1;
(statearr_59524_59547[(2)] = inst_59505);

(statearr_59524_59547[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59512 === (10))){
var inst_59503 = (state_59511[(2)]);
var state_59511__$1 = state_59511;
var statearr_59525_59548 = state_59511__$1;
(statearr_59525_59548[(2)] = inst_59503);

(statearr_59525_59548[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59512 === (8))){
var inst_59481 = (state_59511[(10)]);
var inst_59491 = (state_59511[(7)]);
var inst_59492 = (state_59511[(9)]);
var inst_59490 = (state_59511[(8)]);
var inst_59495 = (function (){var cs = inst_59481;
var vec__59486 = inst_59490;
var v = inst_59491;
var c = inst_59492;
return ((function (cs,vec__59486,v,c,inst_59481,inst_59491,inst_59492,inst_59490,state_val_59512,c__57384__auto___59539,out){
return (function (p1__59476_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__59476_SHARP_);
});
;})(cs,vec__59486,v,c,inst_59481,inst_59491,inst_59492,inst_59490,state_val_59512,c__57384__auto___59539,out))
})();
var inst_59496 = cljs.core.filterv.call(null,inst_59495,inst_59481);
var inst_59481__$1 = inst_59496;
var state_59511__$1 = (function (){var statearr_59526 = state_59511;
(statearr_59526[(10)] = inst_59481__$1);

return statearr_59526;
})();
var statearr_59527_59549 = state_59511__$1;
(statearr_59527_59549[(2)] = null);

(statearr_59527_59549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__57384__auto___59539,out))
;
return ((function (switch__57272__auto__,c__57384__auto___59539,out){
return (function() {
var cljs$core$async$state_machine__57273__auto__ = null;
var cljs$core$async$state_machine__57273__auto____0 = (function (){
var statearr_59531 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59531[(0)] = cljs$core$async$state_machine__57273__auto__);

(statearr_59531[(1)] = (1));

return statearr_59531;
});
var cljs$core$async$state_machine__57273__auto____1 = (function (state_59511){
while(true){
var ret_value__57274__auto__ = (function (){try{while(true){
var result__57275__auto__ = switch__57272__auto__.call(null,state_59511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57275__auto__;
}
break;
}
}catch (e59532){if((e59532 instanceof Object)){
var ex__57276__auto__ = e59532;
var statearr_59533_59550 = state_59511;
(statearr_59533_59550[(5)] = ex__57276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59551 = state_59511;
state_59511 = G__59551;
continue;
} else {
return ret_value__57274__auto__;
}
break;
}
});
cljs$core$async$state_machine__57273__auto__ = function(state_59511){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57273__auto____1.call(this,state_59511);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57273__auto____0;
cljs$core$async$state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57273__auto____1;
return cljs$core$async$state_machine__57273__auto__;
})()
;})(switch__57272__auto__,c__57384__auto___59539,out))
})();
var state__57386__auto__ = (function (){var statearr_59534 = f__57385__auto__.call(null);
(statearr_59534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__57384__auto___59539);

return statearr_59534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__57386__auto__);
});})(c__57384__auto___59539,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args59552 = [];
var len__49364__auto___59601 = arguments.length;
var i__49365__auto___59602 = (0);
while(true){
if((i__49365__auto___59602 < len__49364__auto___59601)){
args59552.push((arguments[i__49365__auto___59602]));

var G__59603 = (i__49365__auto___59602 + (1));
i__49365__auto___59602 = G__59603;
continue;
} else {
}
break;
}

var G__59554 = args59552.length;
switch (G__59554) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args59552.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__57384__auto___59605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__57384__auto___59605,out){
return (function (){
var f__57385__auto__ = (function (){var switch__57272__auto__ = ((function (c__57384__auto___59605,out){
return (function (state_59578){
var state_val_59579 = (state_59578[(1)]);
if((state_val_59579 === (7))){
var inst_59560 = (state_59578[(7)]);
var inst_59560__$1 = (state_59578[(2)]);
var inst_59561 = (inst_59560__$1 == null);
var inst_59562 = cljs.core.not.call(null,inst_59561);
var state_59578__$1 = (function (){var statearr_59580 = state_59578;
(statearr_59580[(7)] = inst_59560__$1);

return statearr_59580;
})();
if(inst_59562){
var statearr_59581_59606 = state_59578__$1;
(statearr_59581_59606[(1)] = (8));

} else {
var statearr_59582_59607 = state_59578__$1;
(statearr_59582_59607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59579 === (1))){
var inst_59555 = (0);
var state_59578__$1 = (function (){var statearr_59583 = state_59578;
(statearr_59583[(8)] = inst_59555);

return statearr_59583;
})();
var statearr_59584_59608 = state_59578__$1;
(statearr_59584_59608[(2)] = null);

(statearr_59584_59608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59579 === (4))){
var state_59578__$1 = state_59578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59578__$1,(7),ch);
} else {
if((state_val_59579 === (6))){
var inst_59573 = (state_59578[(2)]);
var state_59578__$1 = state_59578;
var statearr_59585_59609 = state_59578__$1;
(statearr_59585_59609[(2)] = inst_59573);

(statearr_59585_59609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59579 === (3))){
var inst_59575 = (state_59578[(2)]);
var inst_59576 = cljs.core.async.close_BANG_.call(null,out);
var state_59578__$1 = (function (){var statearr_59586 = state_59578;
(statearr_59586[(9)] = inst_59575);

return statearr_59586;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59578__$1,inst_59576);
} else {
if((state_val_59579 === (2))){
var inst_59555 = (state_59578[(8)]);
var inst_59557 = (inst_59555 < n);
var state_59578__$1 = state_59578;
if(cljs.core.truth_(inst_59557)){
var statearr_59587_59610 = state_59578__$1;
(statearr_59587_59610[(1)] = (4));

} else {
var statearr_59588_59611 = state_59578__$1;
(statearr_59588_59611[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59579 === (11))){
var inst_59555 = (state_59578[(8)]);
var inst_59565 = (state_59578[(2)]);
var inst_59566 = (inst_59555 + (1));
var inst_59555__$1 = inst_59566;
var state_59578__$1 = (function (){var statearr_59589 = state_59578;
(statearr_59589[(10)] = inst_59565);

(statearr_59589[(8)] = inst_59555__$1);

return statearr_59589;
})();
var statearr_59590_59612 = state_59578__$1;
(statearr_59590_59612[(2)] = null);

(statearr_59590_59612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59579 === (9))){
var state_59578__$1 = state_59578;
var statearr_59591_59613 = state_59578__$1;
(statearr_59591_59613[(2)] = null);

(statearr_59591_59613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59579 === (5))){
var state_59578__$1 = state_59578;
var statearr_59592_59614 = state_59578__$1;
(statearr_59592_59614[(2)] = null);

(statearr_59592_59614[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59579 === (10))){
var inst_59570 = (state_59578[(2)]);
var state_59578__$1 = state_59578;
var statearr_59593_59615 = state_59578__$1;
(statearr_59593_59615[(2)] = inst_59570);

(statearr_59593_59615[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59579 === (8))){
var inst_59560 = (state_59578[(7)]);
var state_59578__$1 = state_59578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59578__$1,(11),out,inst_59560);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__57384__auto___59605,out))
;
return ((function (switch__57272__auto__,c__57384__auto___59605,out){
return (function() {
var cljs$core$async$state_machine__57273__auto__ = null;
var cljs$core$async$state_machine__57273__auto____0 = (function (){
var statearr_59597 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59597[(0)] = cljs$core$async$state_machine__57273__auto__);

(statearr_59597[(1)] = (1));

return statearr_59597;
});
var cljs$core$async$state_machine__57273__auto____1 = (function (state_59578){
while(true){
var ret_value__57274__auto__ = (function (){try{while(true){
var result__57275__auto__ = switch__57272__auto__.call(null,state_59578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57275__auto__;
}
break;
}
}catch (e59598){if((e59598 instanceof Object)){
var ex__57276__auto__ = e59598;
var statearr_59599_59616 = state_59578;
(statearr_59599_59616[(5)] = ex__57276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59617 = state_59578;
state_59578 = G__59617;
continue;
} else {
return ret_value__57274__auto__;
}
break;
}
});
cljs$core$async$state_machine__57273__auto__ = function(state_59578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57273__auto____1.call(this,state_59578);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57273__auto____0;
cljs$core$async$state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57273__auto____1;
return cljs$core$async$state_machine__57273__auto__;
})()
;})(switch__57272__auto__,c__57384__auto___59605,out))
})();
var state__57386__auto__ = (function (){var statearr_59600 = f__57385__auto__.call(null);
(statearr_59600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__57384__auto___59605);

return statearr_59600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__57386__auto__);
});})(c__57384__auto___59605,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async59625 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59625 = (function (f,ch,meta59626){
this.f = f;
this.ch = ch;
this.meta59626 = meta59626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async59625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59627,meta59626__$1){
var self__ = this;
var _59627__$1 = this;
return (new cljs.core.async.t_cljs$core$async59625(self__.f,self__.ch,meta59626__$1));
});

cljs.core.async.t_cljs$core$async59625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59627){
var self__ = this;
var _59627__$1 = this;
return self__.meta59626;
});

cljs.core.async.t_cljs$core$async59625.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59625.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async59625.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async59625.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59625.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async59628 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59628 = (function (f,ch,meta59626,_,fn1,meta59629){
this.f = f;
this.ch = ch;
this.meta59626 = meta59626;
this._ = _;
this.fn1 = fn1;
this.meta59629 = meta59629;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async59628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_59630,meta59629__$1){
var self__ = this;
var _59630__$1 = this;
return (new cljs.core.async.t_cljs$core$async59628(self__.f,self__.ch,self__.meta59626,self__._,self__.fn1,meta59629__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async59628.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_59630){
var self__ = this;
var _59630__$1 = this;
return self__.meta59629;
});})(___$1))
;

cljs.core.async.t_cljs$core$async59628.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59628.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async59628.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async59628.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__59618_SHARP_){
return f1.call(null,(((p1__59618_SHARP_ == null))?null:self__.f.call(null,p1__59618_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async59628.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59626","meta59626",-67426104,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async59625","cljs.core.async/t_cljs$core$async59625",1860062924,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta59629","meta59629",969962027,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async59628.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59628.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59628";

cljs.core.async.t_cljs$core$async59628.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__48862__auto__,writer__48863__auto__,opt__48864__auto__){
return cljs.core._write.call(null,writer__48863__auto__,"cljs.core.async/t_cljs$core$async59628");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async59628 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async59628(f__$1,ch__$1,meta59626__$1,___$2,fn1__$1,meta59629){
return (new cljs.core.async.t_cljs$core$async59628(f__$1,ch__$1,meta59626__$1,___$2,fn1__$1,meta59629));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async59628(self__.f,self__.ch,self__.meta59626,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__48239__auto__ = ret;
if(cljs.core.truth_(and__48239__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__48239__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async59625.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59625.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async59625.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59626","meta59626",-67426104,null)], null);
});

cljs.core.async.t_cljs$core$async59625.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59625.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59625";

cljs.core.async.t_cljs$core$async59625.cljs$lang$ctorPrWriter = (function (this__48862__auto__,writer__48863__auto__,opt__48864__auto__){
return cljs.core._write.call(null,writer__48863__auto__,"cljs.core.async/t_cljs$core$async59625");
});

cljs.core.async.__GT_t_cljs$core$async59625 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async59625(f__$1,ch__$1,meta59626){
return (new cljs.core.async.t_cljs$core$async59625(f__$1,ch__$1,meta59626));
});

}

return (new cljs.core.async.t_cljs$core$async59625(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async59634 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59634 = (function (f,ch,meta59635){
this.f = f;
this.ch = ch;
this.meta59635 = meta59635;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async59634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59636,meta59635__$1){
var self__ = this;
var _59636__$1 = this;
return (new cljs.core.async.t_cljs$core$async59634(self__.f,self__.ch,meta59635__$1));
});

cljs.core.async.t_cljs$core$async59634.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59636){
var self__ = this;
var _59636__$1 = this;
return self__.meta59635;
});

cljs.core.async.t_cljs$core$async59634.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59634.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async59634.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59634.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async59634.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59634.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async59634.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59635","meta59635",-1925403014,null)], null);
});

cljs.core.async.t_cljs$core$async59634.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59634.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59634";

cljs.core.async.t_cljs$core$async59634.cljs$lang$ctorPrWriter = (function (this__48862__auto__,writer__48863__auto__,opt__48864__auto__){
return cljs.core._write.call(null,writer__48863__auto__,"cljs.core.async/t_cljs$core$async59634");
});

cljs.core.async.__GT_t_cljs$core$async59634 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async59634(f__$1,ch__$1,meta59635){
return (new cljs.core.async.t_cljs$core$async59634(f__$1,ch__$1,meta59635));
});

}

return (new cljs.core.async.t_cljs$core$async59634(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async59640 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59640 = (function (p,ch,meta59641){
this.p = p;
this.ch = ch;
this.meta59641 = meta59641;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async59640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59642,meta59641__$1){
var self__ = this;
var _59642__$1 = this;
return (new cljs.core.async.t_cljs$core$async59640(self__.p,self__.ch,meta59641__$1));
});

cljs.core.async.t_cljs$core$async59640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59642){
var self__ = this;
var _59642__$1 = this;
return self__.meta59641;
});

cljs.core.async.t_cljs$core$async59640.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59640.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async59640.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async59640.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59640.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async59640.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59640.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async59640.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59641","meta59641",-1143218585,null)], null);
});

cljs.core.async.t_cljs$core$async59640.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59640.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59640";

cljs.core.async.t_cljs$core$async59640.cljs$lang$ctorPrWriter = (function (this__48862__auto__,writer__48863__auto__,opt__48864__auto__){
return cljs.core._write.call(null,writer__48863__auto__,"cljs.core.async/t_cljs$core$async59640");
});

cljs.core.async.__GT_t_cljs$core$async59640 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async59640(p__$1,ch__$1,meta59641){
return (new cljs.core.async.t_cljs$core$async59640(p__$1,ch__$1,meta59641));
});

}

return (new cljs.core.async.t_cljs$core$async59640(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args59643 = [];
var len__49364__auto___59687 = arguments.length;
var i__49365__auto___59688 = (0);
while(true){
if((i__49365__auto___59688 < len__49364__auto___59687)){
args59643.push((arguments[i__49365__auto___59688]));

var G__59689 = (i__49365__auto___59688 + (1));
i__49365__auto___59688 = G__59689;
continue;
} else {
}
break;
}

var G__59645 = args59643.length;
switch (G__59645) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args59643.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__57384__auto___59691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__57384__auto___59691,out){
return (function (){
var f__57385__auto__ = (function (){var switch__57272__auto__ = ((function (c__57384__auto___59691,out){
return (function (state_59666){
var state_val_59667 = (state_59666[(1)]);
if((state_val_59667 === (7))){
var inst_59662 = (state_59666[(2)]);
var state_59666__$1 = state_59666;
var statearr_59668_59692 = state_59666__$1;
(statearr_59668_59692[(2)] = inst_59662);

(statearr_59668_59692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59667 === (1))){
var state_59666__$1 = state_59666;
var statearr_59669_59693 = state_59666__$1;
(statearr_59669_59693[(2)] = null);

(statearr_59669_59693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59667 === (4))){
var inst_59648 = (state_59666[(7)]);
var inst_59648__$1 = (state_59666[(2)]);
var inst_59649 = (inst_59648__$1 == null);
var state_59666__$1 = (function (){var statearr_59670 = state_59666;
(statearr_59670[(7)] = inst_59648__$1);

return statearr_59670;
})();
if(cljs.core.truth_(inst_59649)){
var statearr_59671_59694 = state_59666__$1;
(statearr_59671_59694[(1)] = (5));

} else {
var statearr_59672_59695 = state_59666__$1;
(statearr_59672_59695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59667 === (6))){
var inst_59648 = (state_59666[(7)]);
var inst_59653 = p.call(null,inst_59648);
var state_59666__$1 = state_59666;
if(cljs.core.truth_(inst_59653)){
var statearr_59673_59696 = state_59666__$1;
(statearr_59673_59696[(1)] = (8));

} else {
var statearr_59674_59697 = state_59666__$1;
(statearr_59674_59697[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59667 === (3))){
var inst_59664 = (state_59666[(2)]);
var state_59666__$1 = state_59666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59666__$1,inst_59664);
} else {
if((state_val_59667 === (2))){
var state_59666__$1 = state_59666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59666__$1,(4),ch);
} else {
if((state_val_59667 === (11))){
var inst_59656 = (state_59666[(2)]);
var state_59666__$1 = state_59666;
var statearr_59675_59698 = state_59666__$1;
(statearr_59675_59698[(2)] = inst_59656);

(statearr_59675_59698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59667 === (9))){
var state_59666__$1 = state_59666;
var statearr_59676_59699 = state_59666__$1;
(statearr_59676_59699[(2)] = null);

(statearr_59676_59699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59667 === (5))){
var inst_59651 = cljs.core.async.close_BANG_.call(null,out);
var state_59666__$1 = state_59666;
var statearr_59677_59700 = state_59666__$1;
(statearr_59677_59700[(2)] = inst_59651);

(statearr_59677_59700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59667 === (10))){
var inst_59659 = (state_59666[(2)]);
var state_59666__$1 = (function (){var statearr_59678 = state_59666;
(statearr_59678[(8)] = inst_59659);

return statearr_59678;
})();
var statearr_59679_59701 = state_59666__$1;
(statearr_59679_59701[(2)] = null);

(statearr_59679_59701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59667 === (8))){
var inst_59648 = (state_59666[(7)]);
var state_59666__$1 = state_59666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59666__$1,(11),out,inst_59648);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__57384__auto___59691,out))
;
return ((function (switch__57272__auto__,c__57384__auto___59691,out){
return (function() {
var cljs$core$async$state_machine__57273__auto__ = null;
var cljs$core$async$state_machine__57273__auto____0 = (function (){
var statearr_59683 = [null,null,null,null,null,null,null,null,null];
(statearr_59683[(0)] = cljs$core$async$state_machine__57273__auto__);

(statearr_59683[(1)] = (1));

return statearr_59683;
});
var cljs$core$async$state_machine__57273__auto____1 = (function (state_59666){
while(true){
var ret_value__57274__auto__ = (function (){try{while(true){
var result__57275__auto__ = switch__57272__auto__.call(null,state_59666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57275__auto__;
}
break;
}
}catch (e59684){if((e59684 instanceof Object)){
var ex__57276__auto__ = e59684;
var statearr_59685_59702 = state_59666;
(statearr_59685_59702[(5)] = ex__57276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59703 = state_59666;
state_59666 = G__59703;
continue;
} else {
return ret_value__57274__auto__;
}
break;
}
});
cljs$core$async$state_machine__57273__auto__ = function(state_59666){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57273__auto____1.call(this,state_59666);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57273__auto____0;
cljs$core$async$state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57273__auto____1;
return cljs$core$async$state_machine__57273__auto__;
})()
;})(switch__57272__auto__,c__57384__auto___59691,out))
})();
var state__57386__auto__ = (function (){var statearr_59686 = f__57385__auto__.call(null);
(statearr_59686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__57384__auto___59691);

return statearr_59686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__57386__auto__);
});})(c__57384__auto___59691,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args59704 = [];
var len__49364__auto___59707 = arguments.length;
var i__49365__auto___59708 = (0);
while(true){
if((i__49365__auto___59708 < len__49364__auto___59707)){
args59704.push((arguments[i__49365__auto___59708]));

var G__59709 = (i__49365__auto___59708 + (1));
i__49365__auto___59708 = G__59709;
continue;
} else {
}
break;
}

var G__59706 = args59704.length;
switch (G__59706) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args59704.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__57384__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__57384__auto__){
return (function (){
var f__57385__auto__ = (function (){var switch__57272__auto__ = ((function (c__57384__auto__){
return (function (state_59876){
var state_val_59877 = (state_59876[(1)]);
if((state_val_59877 === (7))){
var inst_59872 = (state_59876[(2)]);
var state_59876__$1 = state_59876;
var statearr_59878_59919 = state_59876__$1;
(statearr_59878_59919[(2)] = inst_59872);

(statearr_59878_59919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59877 === (20))){
var inst_59842 = (state_59876[(7)]);
var inst_59853 = (state_59876[(2)]);
var inst_59854 = cljs.core.next.call(null,inst_59842);
var inst_59828 = inst_59854;
var inst_59829 = null;
var inst_59830 = (0);
var inst_59831 = (0);
var state_59876__$1 = (function (){var statearr_59879 = state_59876;
(statearr_59879[(8)] = inst_59829);

(statearr_59879[(9)] = inst_59831);

(statearr_59879[(10)] = inst_59828);

(statearr_59879[(11)] = inst_59853);

(statearr_59879[(12)] = inst_59830);

return statearr_59879;
})();
var statearr_59880_59920 = state_59876__$1;
(statearr_59880_59920[(2)] = null);

(statearr_59880_59920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59877 === (1))){
var state_59876__$1 = state_59876;
var statearr_59881_59921 = state_59876__$1;
(statearr_59881_59921[(2)] = null);

(statearr_59881_59921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59877 === (4))){
var inst_59817 = (state_59876[(13)]);
var inst_59817__$1 = (state_59876[(2)]);
var inst_59818 = (inst_59817__$1 == null);
var state_59876__$1 = (function (){var statearr_59882 = state_59876;
(statearr_59882[(13)] = inst_59817__$1);

return statearr_59882;
})();
if(cljs.core.truth_(inst_59818)){
var statearr_59883_59922 = state_59876__$1;
(statearr_59883_59922[(1)] = (5));

} else {
var statearr_59884_59923 = state_59876__$1;
(statearr_59884_59923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59877 === (15))){
var state_59876__$1 = state_59876;
var statearr_59888_59924 = state_59876__$1;
(statearr_59888_59924[(2)] = null);

(statearr_59888_59924[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59877 === (21))){
var state_59876__$1 = state_59876;
var statearr_59889_59925 = state_59876__$1;
(statearr_59889_59925[(2)] = null);

(statearr_59889_59925[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59877 === (13))){
var inst_59829 = (state_59876[(8)]);
var inst_59831 = (state_59876[(9)]);
var inst_59828 = (state_59876[(10)]);
var inst_59830 = (state_59876[(12)]);
var inst_59838 = (state_59876[(2)]);
var inst_59839 = (inst_59831 + (1));
var tmp59885 = inst_59829;
var tmp59886 = inst_59828;
var tmp59887 = inst_59830;
var inst_59828__$1 = tmp59886;
var inst_59829__$1 = tmp59885;
var inst_59830__$1 = tmp59887;
var inst_59831__$1 = inst_59839;
var state_59876__$1 = (function (){var statearr_59890 = state_59876;
(statearr_59890[(8)] = inst_59829__$1);

(statearr_59890[(9)] = inst_59831__$1);

(statearr_59890[(10)] = inst_59828__$1);

(statearr_59890[(12)] = inst_59830__$1);

(statearr_59890[(14)] = inst_59838);

return statearr_59890;
})();
var statearr_59891_59926 = state_59876__$1;
(statearr_59891_59926[(2)] = null);

(statearr_59891_59926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59877 === (22))){
var state_59876__$1 = state_59876;
var statearr_59892_59927 = state_59876__$1;
(statearr_59892_59927[(2)] = null);

(statearr_59892_59927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59877 === (6))){
var inst_59817 = (state_59876[(13)]);
var inst_59826 = f.call(null,inst_59817);
var inst_59827 = cljs.core.seq.call(null,inst_59826);
var inst_59828 = inst_59827;
var inst_59829 = null;
var inst_59830 = (0);
var inst_59831 = (0);
var state_59876__$1 = (function (){var statearr_59893 = state_59876;
(statearr_59893[(8)] = inst_59829);

(statearr_59893[(9)] = inst_59831);

(statearr_59893[(10)] = inst_59828);

(statearr_59893[(12)] = inst_59830);

return statearr_59893;
})();
var statearr_59894_59928 = state_59876__$1;
(statearr_59894_59928[(2)] = null);

(statearr_59894_59928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59877 === (17))){
var inst_59842 = (state_59876[(7)]);
var inst_59846 = cljs.core.chunk_first.call(null,inst_59842);
var inst_59847 = cljs.core.chunk_rest.call(null,inst_59842);
var inst_59848 = cljs.core.count.call(null,inst_59846);
var inst_59828 = inst_59847;
var inst_59829 = inst_59846;
var inst_59830 = inst_59848;
var inst_59831 = (0);
var state_59876__$1 = (function (){var statearr_59895 = state_59876;
(statearr_59895[(8)] = inst_59829);

(statearr_59895[(9)] = inst_59831);

(statearr_59895[(10)] = inst_59828);

(statearr_59895[(12)] = inst_59830);

return statearr_59895;
})();
var statearr_59896_59929 = state_59876__$1;
(statearr_59896_59929[(2)] = null);

(statearr_59896_59929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59877 === (3))){
var inst_59874 = (state_59876[(2)]);
var state_59876__$1 = state_59876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59876__$1,inst_59874);
} else {
if((state_val_59877 === (12))){
var inst_59862 = (state_59876[(2)]);
var state_59876__$1 = state_59876;
var statearr_59897_59930 = state_59876__$1;
(statearr_59897_59930[(2)] = inst_59862);

(statearr_59897_59930[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59877 === (2))){
var state_59876__$1 = state_59876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59876__$1,(4),in$);
} else {
if((state_val_59877 === (23))){
var inst_59870 = (state_59876[(2)]);
var state_59876__$1 = state_59876;
var statearr_59898_59931 = state_59876__$1;
(statearr_59898_59931[(2)] = inst_59870);

(statearr_59898_59931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59877 === (19))){
var inst_59857 = (state_59876[(2)]);
var state_59876__$1 = state_59876;
var statearr_59899_59932 = state_59876__$1;
(statearr_59899_59932[(2)] = inst_59857);

(statearr_59899_59932[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59877 === (11))){
var inst_59842 = (state_59876[(7)]);
var inst_59828 = (state_59876[(10)]);
var inst_59842__$1 = cljs.core.seq.call(null,inst_59828);
var state_59876__$1 = (function (){var statearr_59900 = state_59876;
(statearr_59900[(7)] = inst_59842__$1);

return statearr_59900;
})();
if(inst_59842__$1){
var statearr_59901_59933 = state_59876__$1;
(statearr_59901_59933[(1)] = (14));

} else {
var statearr_59902_59934 = state_59876__$1;
(statearr_59902_59934[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59877 === (9))){
var inst_59864 = (state_59876[(2)]);
var inst_59865 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_59876__$1 = (function (){var statearr_59903 = state_59876;
(statearr_59903[(15)] = inst_59864);

return statearr_59903;
})();
if(cljs.core.truth_(inst_59865)){
var statearr_59904_59935 = state_59876__$1;
(statearr_59904_59935[(1)] = (21));

} else {
var statearr_59905_59936 = state_59876__$1;
(statearr_59905_59936[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59877 === (5))){
var inst_59820 = cljs.core.async.close_BANG_.call(null,out);
var state_59876__$1 = state_59876;
var statearr_59906_59937 = state_59876__$1;
(statearr_59906_59937[(2)] = inst_59820);

(statearr_59906_59937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59877 === (14))){
var inst_59842 = (state_59876[(7)]);
var inst_59844 = cljs.core.chunked_seq_QMARK_.call(null,inst_59842);
var state_59876__$1 = state_59876;
if(inst_59844){
var statearr_59907_59938 = state_59876__$1;
(statearr_59907_59938[(1)] = (17));

} else {
var statearr_59908_59939 = state_59876__$1;
(statearr_59908_59939[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59877 === (16))){
var inst_59860 = (state_59876[(2)]);
var state_59876__$1 = state_59876;
var statearr_59909_59940 = state_59876__$1;
(statearr_59909_59940[(2)] = inst_59860);

(statearr_59909_59940[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59877 === (10))){
var inst_59829 = (state_59876[(8)]);
var inst_59831 = (state_59876[(9)]);
var inst_59836 = cljs.core._nth.call(null,inst_59829,inst_59831);
var state_59876__$1 = state_59876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59876__$1,(13),out,inst_59836);
} else {
if((state_val_59877 === (18))){
var inst_59842 = (state_59876[(7)]);
var inst_59851 = cljs.core.first.call(null,inst_59842);
var state_59876__$1 = state_59876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59876__$1,(20),out,inst_59851);
} else {
if((state_val_59877 === (8))){
var inst_59831 = (state_59876[(9)]);
var inst_59830 = (state_59876[(12)]);
var inst_59833 = (inst_59831 < inst_59830);
var inst_59834 = inst_59833;
var state_59876__$1 = state_59876;
if(cljs.core.truth_(inst_59834)){
var statearr_59910_59941 = state_59876__$1;
(statearr_59910_59941[(1)] = (10));

} else {
var statearr_59911_59942 = state_59876__$1;
(statearr_59911_59942[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__57384__auto__))
;
return ((function (switch__57272__auto__,c__57384__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__57273__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__57273__auto____0 = (function (){
var statearr_59915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59915[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__57273__auto__);

(statearr_59915[(1)] = (1));

return statearr_59915;
});
var cljs$core$async$mapcat_STAR__$_state_machine__57273__auto____1 = (function (state_59876){
while(true){
var ret_value__57274__auto__ = (function (){try{while(true){
var result__57275__auto__ = switch__57272__auto__.call(null,state_59876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57275__auto__;
}
break;
}
}catch (e59916){if((e59916 instanceof Object)){
var ex__57276__auto__ = e59916;
var statearr_59917_59943 = state_59876;
(statearr_59917_59943[(5)] = ex__57276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59944 = state_59876;
state_59876 = G__59944;
continue;
} else {
return ret_value__57274__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__57273__auto__ = function(state_59876){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__57273__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__57273__auto____1.call(this,state_59876);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__57273__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__57273__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__57273__auto__;
})()
;})(switch__57272__auto__,c__57384__auto__))
})();
var state__57386__auto__ = (function (){var statearr_59918 = f__57385__auto__.call(null);
(statearr_59918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__57384__auto__);

return statearr_59918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__57386__auto__);
});})(c__57384__auto__))
);

return c__57384__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args59945 = [];
var len__49364__auto___59948 = arguments.length;
var i__49365__auto___59949 = (0);
while(true){
if((i__49365__auto___59949 < len__49364__auto___59948)){
args59945.push((arguments[i__49365__auto___59949]));

var G__59950 = (i__49365__auto___59949 + (1));
i__49365__auto___59949 = G__59950;
continue;
} else {
}
break;
}

var G__59947 = args59945.length;
switch (G__59947) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args59945.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args59952 = [];
var len__49364__auto___59955 = arguments.length;
var i__49365__auto___59956 = (0);
while(true){
if((i__49365__auto___59956 < len__49364__auto___59955)){
args59952.push((arguments[i__49365__auto___59956]));

var G__59957 = (i__49365__auto___59956 + (1));
i__49365__auto___59956 = G__59957;
continue;
} else {
}
break;
}

var G__59954 = args59952.length;
switch (G__59954) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args59952.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args59959 = [];
var len__49364__auto___60010 = arguments.length;
var i__49365__auto___60011 = (0);
while(true){
if((i__49365__auto___60011 < len__49364__auto___60010)){
args59959.push((arguments[i__49365__auto___60011]));

var G__60012 = (i__49365__auto___60011 + (1));
i__49365__auto___60011 = G__60012;
continue;
} else {
}
break;
}

var G__59961 = args59959.length;
switch (G__59961) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args59959.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__57384__auto___60014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__57384__auto___60014,out){
return (function (){
var f__57385__auto__ = (function (){var switch__57272__auto__ = ((function (c__57384__auto___60014,out){
return (function (state_59985){
var state_val_59986 = (state_59985[(1)]);
if((state_val_59986 === (7))){
var inst_59980 = (state_59985[(2)]);
var state_59985__$1 = state_59985;
var statearr_59987_60015 = state_59985__$1;
(statearr_59987_60015[(2)] = inst_59980);

(statearr_59987_60015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59986 === (1))){
var inst_59962 = null;
var state_59985__$1 = (function (){var statearr_59988 = state_59985;
(statearr_59988[(7)] = inst_59962);

return statearr_59988;
})();
var statearr_59989_60016 = state_59985__$1;
(statearr_59989_60016[(2)] = null);

(statearr_59989_60016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59986 === (4))){
var inst_59965 = (state_59985[(8)]);
var inst_59965__$1 = (state_59985[(2)]);
var inst_59966 = (inst_59965__$1 == null);
var inst_59967 = cljs.core.not.call(null,inst_59966);
var state_59985__$1 = (function (){var statearr_59990 = state_59985;
(statearr_59990[(8)] = inst_59965__$1);

return statearr_59990;
})();
if(inst_59967){
var statearr_59991_60017 = state_59985__$1;
(statearr_59991_60017[(1)] = (5));

} else {
var statearr_59992_60018 = state_59985__$1;
(statearr_59992_60018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59986 === (6))){
var state_59985__$1 = state_59985;
var statearr_59993_60019 = state_59985__$1;
(statearr_59993_60019[(2)] = null);

(statearr_59993_60019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59986 === (3))){
var inst_59982 = (state_59985[(2)]);
var inst_59983 = cljs.core.async.close_BANG_.call(null,out);
var state_59985__$1 = (function (){var statearr_59994 = state_59985;
(statearr_59994[(9)] = inst_59982);

return statearr_59994;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59985__$1,inst_59983);
} else {
if((state_val_59986 === (2))){
var state_59985__$1 = state_59985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59985__$1,(4),ch);
} else {
if((state_val_59986 === (11))){
var inst_59965 = (state_59985[(8)]);
var inst_59974 = (state_59985[(2)]);
var inst_59962 = inst_59965;
var state_59985__$1 = (function (){var statearr_59995 = state_59985;
(statearr_59995[(10)] = inst_59974);

(statearr_59995[(7)] = inst_59962);

return statearr_59995;
})();
var statearr_59996_60020 = state_59985__$1;
(statearr_59996_60020[(2)] = null);

(statearr_59996_60020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59986 === (9))){
var inst_59965 = (state_59985[(8)]);
var state_59985__$1 = state_59985;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59985__$1,(11),out,inst_59965);
} else {
if((state_val_59986 === (5))){
var inst_59962 = (state_59985[(7)]);
var inst_59965 = (state_59985[(8)]);
var inst_59969 = cljs.core._EQ_.call(null,inst_59965,inst_59962);
var state_59985__$1 = state_59985;
if(inst_59969){
var statearr_59998_60021 = state_59985__$1;
(statearr_59998_60021[(1)] = (8));

} else {
var statearr_59999_60022 = state_59985__$1;
(statearr_59999_60022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59986 === (10))){
var inst_59977 = (state_59985[(2)]);
var state_59985__$1 = state_59985;
var statearr_60000_60023 = state_59985__$1;
(statearr_60000_60023[(2)] = inst_59977);

(statearr_60000_60023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59986 === (8))){
var inst_59962 = (state_59985[(7)]);
var tmp59997 = inst_59962;
var inst_59962__$1 = tmp59997;
var state_59985__$1 = (function (){var statearr_60001 = state_59985;
(statearr_60001[(7)] = inst_59962__$1);

return statearr_60001;
})();
var statearr_60002_60024 = state_59985__$1;
(statearr_60002_60024[(2)] = null);

(statearr_60002_60024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__57384__auto___60014,out))
;
return ((function (switch__57272__auto__,c__57384__auto___60014,out){
return (function() {
var cljs$core$async$state_machine__57273__auto__ = null;
var cljs$core$async$state_machine__57273__auto____0 = (function (){
var statearr_60006 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60006[(0)] = cljs$core$async$state_machine__57273__auto__);

(statearr_60006[(1)] = (1));

return statearr_60006;
});
var cljs$core$async$state_machine__57273__auto____1 = (function (state_59985){
while(true){
var ret_value__57274__auto__ = (function (){try{while(true){
var result__57275__auto__ = switch__57272__auto__.call(null,state_59985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57275__auto__;
}
break;
}
}catch (e60007){if((e60007 instanceof Object)){
var ex__57276__auto__ = e60007;
var statearr_60008_60025 = state_59985;
(statearr_60008_60025[(5)] = ex__57276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60026 = state_59985;
state_59985 = G__60026;
continue;
} else {
return ret_value__57274__auto__;
}
break;
}
});
cljs$core$async$state_machine__57273__auto__ = function(state_59985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57273__auto____1.call(this,state_59985);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57273__auto____0;
cljs$core$async$state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57273__auto____1;
return cljs$core$async$state_machine__57273__auto__;
})()
;})(switch__57272__auto__,c__57384__auto___60014,out))
})();
var state__57386__auto__ = (function (){var statearr_60009 = f__57385__auto__.call(null);
(statearr_60009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__57384__auto___60014);

return statearr_60009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__57386__auto__);
});})(c__57384__auto___60014,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args60027 = [];
var len__49364__auto___60097 = arguments.length;
var i__49365__auto___60098 = (0);
while(true){
if((i__49365__auto___60098 < len__49364__auto___60097)){
args60027.push((arguments[i__49365__auto___60098]));

var G__60099 = (i__49365__auto___60098 + (1));
i__49365__auto___60098 = G__60099;
continue;
} else {
}
break;
}

var G__60029 = args60027.length;
switch (G__60029) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args60027.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__57384__auto___60101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__57384__auto___60101,out){
return (function (){
var f__57385__auto__ = (function (){var switch__57272__auto__ = ((function (c__57384__auto___60101,out){
return (function (state_60067){
var state_val_60068 = (state_60067[(1)]);
if((state_val_60068 === (7))){
var inst_60063 = (state_60067[(2)]);
var state_60067__$1 = state_60067;
var statearr_60069_60102 = state_60067__$1;
(statearr_60069_60102[(2)] = inst_60063);

(statearr_60069_60102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60068 === (1))){
var inst_60030 = (new Array(n));
var inst_60031 = inst_60030;
var inst_60032 = (0);
var state_60067__$1 = (function (){var statearr_60070 = state_60067;
(statearr_60070[(7)] = inst_60032);

(statearr_60070[(8)] = inst_60031);

return statearr_60070;
})();
var statearr_60071_60103 = state_60067__$1;
(statearr_60071_60103[(2)] = null);

(statearr_60071_60103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60068 === (4))){
var inst_60035 = (state_60067[(9)]);
var inst_60035__$1 = (state_60067[(2)]);
var inst_60036 = (inst_60035__$1 == null);
var inst_60037 = cljs.core.not.call(null,inst_60036);
var state_60067__$1 = (function (){var statearr_60072 = state_60067;
(statearr_60072[(9)] = inst_60035__$1);

return statearr_60072;
})();
if(inst_60037){
var statearr_60073_60104 = state_60067__$1;
(statearr_60073_60104[(1)] = (5));

} else {
var statearr_60074_60105 = state_60067__$1;
(statearr_60074_60105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60068 === (15))){
var inst_60057 = (state_60067[(2)]);
var state_60067__$1 = state_60067;
var statearr_60075_60106 = state_60067__$1;
(statearr_60075_60106[(2)] = inst_60057);

(statearr_60075_60106[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60068 === (13))){
var state_60067__$1 = state_60067;
var statearr_60076_60107 = state_60067__$1;
(statearr_60076_60107[(2)] = null);

(statearr_60076_60107[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60068 === (6))){
var inst_60032 = (state_60067[(7)]);
var inst_60053 = (inst_60032 > (0));
var state_60067__$1 = state_60067;
if(cljs.core.truth_(inst_60053)){
var statearr_60077_60108 = state_60067__$1;
(statearr_60077_60108[(1)] = (12));

} else {
var statearr_60078_60109 = state_60067__$1;
(statearr_60078_60109[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60068 === (3))){
var inst_60065 = (state_60067[(2)]);
var state_60067__$1 = state_60067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60067__$1,inst_60065);
} else {
if((state_val_60068 === (12))){
var inst_60031 = (state_60067[(8)]);
var inst_60055 = cljs.core.vec.call(null,inst_60031);
var state_60067__$1 = state_60067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60067__$1,(15),out,inst_60055);
} else {
if((state_val_60068 === (2))){
var state_60067__$1 = state_60067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60067__$1,(4),ch);
} else {
if((state_val_60068 === (11))){
var inst_60047 = (state_60067[(2)]);
var inst_60048 = (new Array(n));
var inst_60031 = inst_60048;
var inst_60032 = (0);
var state_60067__$1 = (function (){var statearr_60079 = state_60067;
(statearr_60079[(10)] = inst_60047);

(statearr_60079[(7)] = inst_60032);

(statearr_60079[(8)] = inst_60031);

return statearr_60079;
})();
var statearr_60080_60110 = state_60067__$1;
(statearr_60080_60110[(2)] = null);

(statearr_60080_60110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60068 === (9))){
var inst_60031 = (state_60067[(8)]);
var inst_60045 = cljs.core.vec.call(null,inst_60031);
var state_60067__$1 = state_60067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60067__$1,(11),out,inst_60045);
} else {
if((state_val_60068 === (5))){
var inst_60035 = (state_60067[(9)]);
var inst_60032 = (state_60067[(7)]);
var inst_60040 = (state_60067[(11)]);
var inst_60031 = (state_60067[(8)]);
var inst_60039 = (inst_60031[inst_60032] = inst_60035);
var inst_60040__$1 = (inst_60032 + (1));
var inst_60041 = (inst_60040__$1 < n);
var state_60067__$1 = (function (){var statearr_60081 = state_60067;
(statearr_60081[(12)] = inst_60039);

(statearr_60081[(11)] = inst_60040__$1);

return statearr_60081;
})();
if(cljs.core.truth_(inst_60041)){
var statearr_60082_60111 = state_60067__$1;
(statearr_60082_60111[(1)] = (8));

} else {
var statearr_60083_60112 = state_60067__$1;
(statearr_60083_60112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60068 === (14))){
var inst_60060 = (state_60067[(2)]);
var inst_60061 = cljs.core.async.close_BANG_.call(null,out);
var state_60067__$1 = (function (){var statearr_60085 = state_60067;
(statearr_60085[(13)] = inst_60060);

return statearr_60085;
})();
var statearr_60086_60113 = state_60067__$1;
(statearr_60086_60113[(2)] = inst_60061);

(statearr_60086_60113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60068 === (10))){
var inst_60051 = (state_60067[(2)]);
var state_60067__$1 = state_60067;
var statearr_60087_60114 = state_60067__$1;
(statearr_60087_60114[(2)] = inst_60051);

(statearr_60087_60114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60068 === (8))){
var inst_60040 = (state_60067[(11)]);
var inst_60031 = (state_60067[(8)]);
var tmp60084 = inst_60031;
var inst_60031__$1 = tmp60084;
var inst_60032 = inst_60040;
var state_60067__$1 = (function (){var statearr_60088 = state_60067;
(statearr_60088[(7)] = inst_60032);

(statearr_60088[(8)] = inst_60031__$1);

return statearr_60088;
})();
var statearr_60089_60115 = state_60067__$1;
(statearr_60089_60115[(2)] = null);

(statearr_60089_60115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__57384__auto___60101,out))
;
return ((function (switch__57272__auto__,c__57384__auto___60101,out){
return (function() {
var cljs$core$async$state_machine__57273__auto__ = null;
var cljs$core$async$state_machine__57273__auto____0 = (function (){
var statearr_60093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60093[(0)] = cljs$core$async$state_machine__57273__auto__);

(statearr_60093[(1)] = (1));

return statearr_60093;
});
var cljs$core$async$state_machine__57273__auto____1 = (function (state_60067){
while(true){
var ret_value__57274__auto__ = (function (){try{while(true){
var result__57275__auto__ = switch__57272__auto__.call(null,state_60067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57275__auto__;
}
break;
}
}catch (e60094){if((e60094 instanceof Object)){
var ex__57276__auto__ = e60094;
var statearr_60095_60116 = state_60067;
(statearr_60095_60116[(5)] = ex__57276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60117 = state_60067;
state_60067 = G__60117;
continue;
} else {
return ret_value__57274__auto__;
}
break;
}
});
cljs$core$async$state_machine__57273__auto__ = function(state_60067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57273__auto____1.call(this,state_60067);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57273__auto____0;
cljs$core$async$state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57273__auto____1;
return cljs$core$async$state_machine__57273__auto__;
})()
;})(switch__57272__auto__,c__57384__auto___60101,out))
})();
var state__57386__auto__ = (function (){var statearr_60096 = f__57385__auto__.call(null);
(statearr_60096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__57384__auto___60101);

return statearr_60096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__57386__auto__);
});})(c__57384__auto___60101,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args60118 = [];
var len__49364__auto___60192 = arguments.length;
var i__49365__auto___60193 = (0);
while(true){
if((i__49365__auto___60193 < len__49364__auto___60192)){
args60118.push((arguments[i__49365__auto___60193]));

var G__60194 = (i__49365__auto___60193 + (1));
i__49365__auto___60193 = G__60194;
continue;
} else {
}
break;
}

var G__60120 = args60118.length;
switch (G__60120) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args60118.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__57384__auto___60196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__57384__auto___60196,out){
return (function (){
var f__57385__auto__ = (function (){var switch__57272__auto__ = ((function (c__57384__auto___60196,out){
return (function (state_60162){
var state_val_60163 = (state_60162[(1)]);
if((state_val_60163 === (7))){
var inst_60158 = (state_60162[(2)]);
var state_60162__$1 = state_60162;
var statearr_60164_60197 = state_60162__$1;
(statearr_60164_60197[(2)] = inst_60158);

(statearr_60164_60197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60163 === (1))){
var inst_60121 = [];
var inst_60122 = inst_60121;
var inst_60123 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_60162__$1 = (function (){var statearr_60165 = state_60162;
(statearr_60165[(7)] = inst_60123);

(statearr_60165[(8)] = inst_60122);

return statearr_60165;
})();
var statearr_60166_60198 = state_60162__$1;
(statearr_60166_60198[(2)] = null);

(statearr_60166_60198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60163 === (4))){
var inst_60126 = (state_60162[(9)]);
var inst_60126__$1 = (state_60162[(2)]);
var inst_60127 = (inst_60126__$1 == null);
var inst_60128 = cljs.core.not.call(null,inst_60127);
var state_60162__$1 = (function (){var statearr_60167 = state_60162;
(statearr_60167[(9)] = inst_60126__$1);

return statearr_60167;
})();
if(inst_60128){
var statearr_60168_60199 = state_60162__$1;
(statearr_60168_60199[(1)] = (5));

} else {
var statearr_60169_60200 = state_60162__$1;
(statearr_60169_60200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60163 === (15))){
var inst_60152 = (state_60162[(2)]);
var state_60162__$1 = state_60162;
var statearr_60170_60201 = state_60162__$1;
(statearr_60170_60201[(2)] = inst_60152);

(statearr_60170_60201[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60163 === (13))){
var state_60162__$1 = state_60162;
var statearr_60171_60202 = state_60162__$1;
(statearr_60171_60202[(2)] = null);

(statearr_60171_60202[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60163 === (6))){
var inst_60122 = (state_60162[(8)]);
var inst_60147 = inst_60122.length;
var inst_60148 = (inst_60147 > (0));
var state_60162__$1 = state_60162;
if(cljs.core.truth_(inst_60148)){
var statearr_60172_60203 = state_60162__$1;
(statearr_60172_60203[(1)] = (12));

} else {
var statearr_60173_60204 = state_60162__$1;
(statearr_60173_60204[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60163 === (3))){
var inst_60160 = (state_60162[(2)]);
var state_60162__$1 = state_60162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60162__$1,inst_60160);
} else {
if((state_val_60163 === (12))){
var inst_60122 = (state_60162[(8)]);
var inst_60150 = cljs.core.vec.call(null,inst_60122);
var state_60162__$1 = state_60162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60162__$1,(15),out,inst_60150);
} else {
if((state_val_60163 === (2))){
var state_60162__$1 = state_60162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60162__$1,(4),ch);
} else {
if((state_val_60163 === (11))){
var inst_60126 = (state_60162[(9)]);
var inst_60130 = (state_60162[(10)]);
var inst_60140 = (state_60162[(2)]);
var inst_60141 = [];
var inst_60142 = inst_60141.push(inst_60126);
var inst_60122 = inst_60141;
var inst_60123 = inst_60130;
var state_60162__$1 = (function (){var statearr_60174 = state_60162;
(statearr_60174[(7)] = inst_60123);

(statearr_60174[(11)] = inst_60140);

(statearr_60174[(8)] = inst_60122);

(statearr_60174[(12)] = inst_60142);

return statearr_60174;
})();
var statearr_60175_60205 = state_60162__$1;
(statearr_60175_60205[(2)] = null);

(statearr_60175_60205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60163 === (9))){
var inst_60122 = (state_60162[(8)]);
var inst_60138 = cljs.core.vec.call(null,inst_60122);
var state_60162__$1 = state_60162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60162__$1,(11),out,inst_60138);
} else {
if((state_val_60163 === (5))){
var inst_60123 = (state_60162[(7)]);
var inst_60126 = (state_60162[(9)]);
var inst_60130 = (state_60162[(10)]);
var inst_60130__$1 = f.call(null,inst_60126);
var inst_60131 = cljs.core._EQ_.call(null,inst_60130__$1,inst_60123);
var inst_60132 = cljs.core.keyword_identical_QMARK_.call(null,inst_60123,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_60133 = (inst_60131) || (inst_60132);
var state_60162__$1 = (function (){var statearr_60176 = state_60162;
(statearr_60176[(10)] = inst_60130__$1);

return statearr_60176;
})();
if(cljs.core.truth_(inst_60133)){
var statearr_60177_60206 = state_60162__$1;
(statearr_60177_60206[(1)] = (8));

} else {
var statearr_60178_60207 = state_60162__$1;
(statearr_60178_60207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60163 === (14))){
var inst_60155 = (state_60162[(2)]);
var inst_60156 = cljs.core.async.close_BANG_.call(null,out);
var state_60162__$1 = (function (){var statearr_60180 = state_60162;
(statearr_60180[(13)] = inst_60155);

return statearr_60180;
})();
var statearr_60181_60208 = state_60162__$1;
(statearr_60181_60208[(2)] = inst_60156);

(statearr_60181_60208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60163 === (10))){
var inst_60145 = (state_60162[(2)]);
var state_60162__$1 = state_60162;
var statearr_60182_60209 = state_60162__$1;
(statearr_60182_60209[(2)] = inst_60145);

(statearr_60182_60209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60163 === (8))){
var inst_60122 = (state_60162[(8)]);
var inst_60126 = (state_60162[(9)]);
var inst_60130 = (state_60162[(10)]);
var inst_60135 = inst_60122.push(inst_60126);
var tmp60179 = inst_60122;
var inst_60122__$1 = tmp60179;
var inst_60123 = inst_60130;
var state_60162__$1 = (function (){var statearr_60183 = state_60162;
(statearr_60183[(7)] = inst_60123);

(statearr_60183[(14)] = inst_60135);

(statearr_60183[(8)] = inst_60122__$1);

return statearr_60183;
})();
var statearr_60184_60210 = state_60162__$1;
(statearr_60184_60210[(2)] = null);

(statearr_60184_60210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__57384__auto___60196,out))
;
return ((function (switch__57272__auto__,c__57384__auto___60196,out){
return (function() {
var cljs$core$async$state_machine__57273__auto__ = null;
var cljs$core$async$state_machine__57273__auto____0 = (function (){
var statearr_60188 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60188[(0)] = cljs$core$async$state_machine__57273__auto__);

(statearr_60188[(1)] = (1));

return statearr_60188;
});
var cljs$core$async$state_machine__57273__auto____1 = (function (state_60162){
while(true){
var ret_value__57274__auto__ = (function (){try{while(true){
var result__57275__auto__ = switch__57272__auto__.call(null,state_60162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57275__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57275__auto__;
}
break;
}
}catch (e60189){if((e60189 instanceof Object)){
var ex__57276__auto__ = e60189;
var statearr_60190_60211 = state_60162;
(statearr_60190_60211[(5)] = ex__57276__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57274__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60212 = state_60162;
state_60162 = G__60212;
continue;
} else {
return ret_value__57274__auto__;
}
break;
}
});
cljs$core$async$state_machine__57273__auto__ = function(state_60162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57273__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57273__auto____1.call(this,state_60162);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57273__auto____0;
cljs$core$async$state_machine__57273__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57273__auto____1;
return cljs$core$async$state_machine__57273__auto__;
})()
;})(switch__57272__auto__,c__57384__auto___60196,out))
})();
var state__57386__auto__ = (function (){var statearr_60191 = f__57385__auto__.call(null);
(statearr_60191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__57384__auto___60196);

return statearr_60191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__57386__auto__);
});})(c__57384__auto___60196,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map