// Compiled by ClojureScript 1.9.495 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args40310 = [];
var len__30169__auto___40316 = arguments.length;
var i__30170__auto___40317 = (0);
while(true){
if((i__30170__auto___40317 < len__30169__auto___40316)){
args40310.push((arguments[i__30170__auto___40317]));

var G__40318 = (i__30170__auto___40317 + (1));
i__30170__auto___40317 = G__40318;
continue;
} else {
}
break;
}

var G__40312 = args40310.length;
switch (G__40312) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40310.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async40313 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40313 = (function (f,blockable,meta40314){
this.f = f;
this.blockable = blockable;
this.meta40314 = meta40314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40315,meta40314__$1){
var self__ = this;
var _40315__$1 = this;
return (new cljs.core.async.t_cljs$core$async40313(self__.f,self__.blockable,meta40314__$1));
});

cljs.core.async.t_cljs$core$async40313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40315){
var self__ = this;
var _40315__$1 = this;
return self__.meta40314;
});

cljs.core.async.t_cljs$core$async40313.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40313.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40313.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async40313.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async40313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta40314","meta40314",1647999566,null)], null);
});

cljs.core.async.t_cljs$core$async40313.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40313";

cljs.core.async.t_cljs$core$async40313.cljs$lang$ctorPrWriter = (function (this__29605__auto__,writer__29606__auto__,opt__29607__auto__){
return cljs.core._write.call(null,writer__29606__auto__,"cljs.core.async/t_cljs$core$async40313");
});

cljs.core.async.__GT_t_cljs$core$async40313 = (function cljs$core$async$__GT_t_cljs$core$async40313(f__$1,blockable__$1,meta40314){
return (new cljs.core.async.t_cljs$core$async40313(f__$1,blockable__$1,meta40314));
});

}

return (new cljs.core.async.t_cljs$core$async40313(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args40322 = [];
var len__30169__auto___40325 = arguments.length;
var i__30170__auto___40326 = (0);
while(true){
if((i__30170__auto___40326 < len__30169__auto___40325)){
args40322.push((arguments[i__30170__auto___40326]));

var G__40327 = (i__30170__auto___40326 + (1));
i__30170__auto___40326 = G__40327;
continue;
} else {
}
break;
}

var G__40324 = args40322.length;
switch (G__40324) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40322.length)].join('')));

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
var args40329 = [];
var len__30169__auto___40332 = arguments.length;
var i__30170__auto___40333 = (0);
while(true){
if((i__30170__auto___40333 < len__30169__auto___40332)){
args40329.push((arguments[i__30170__auto___40333]));

var G__40334 = (i__30170__auto___40333 + (1));
i__30170__auto___40333 = G__40334;
continue;
} else {
}
break;
}

var G__40331 = args40329.length;
switch (G__40331) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40329.length)].join('')));

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
var args40336 = [];
var len__30169__auto___40339 = arguments.length;
var i__30170__auto___40340 = (0);
while(true){
if((i__30170__auto___40340 < len__30169__auto___40339)){
args40336.push((arguments[i__30170__auto___40340]));

var G__40341 = (i__30170__auto___40340 + (1));
i__30170__auto___40340 = G__40341;
continue;
} else {
}
break;
}

var G__40338 = args40336.length;
switch (G__40338) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40336.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_40343 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_40343);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_40343,ret){
return (function (){
return fn1.call(null,val_40343);
});})(val_40343,ret))
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
var args40344 = [];
var len__30169__auto___40347 = arguments.length;
var i__30170__auto___40348 = (0);
while(true){
if((i__30170__auto___40348 < len__30169__auto___40347)){
args40344.push((arguments[i__30170__auto___40348]));

var G__40349 = (i__30170__auto___40348 + (1));
i__30170__auto___40348 = G__40349;
continue;
} else {
}
break;
}

var G__40346 = args40344.length;
switch (G__40346) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40344.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6751__auto__)){
var ret = temp__6751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6751__auto__)){
var retb = temp__6751__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6751__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6751__auto__))
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
var n__29969__auto___40351 = n;
var x_40352 = (0);
while(true){
if((x_40352 < n__29969__auto___40351)){
(a[x_40352] = (0));

var G__40353 = (x_40352 + (1));
x_40352 = G__40353;
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

var G__40354 = (i + (1));
i = G__40354;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async40358 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40358 = (function (flag,meta40359){
this.flag = flag;
this.meta40359 = meta40359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40360,meta40359__$1){
var self__ = this;
var _40360__$1 = this;
return (new cljs.core.async.t_cljs$core$async40358(self__.flag,meta40359__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async40358.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40360){
var self__ = this;
var _40360__$1 = this;
return self__.meta40359;
});})(flag))
;

cljs.core.async.t_cljs$core$async40358.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40358.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async40358.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40358.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40358.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40359","meta40359",-747247901,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async40358.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40358.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40358";

cljs.core.async.t_cljs$core$async40358.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__29605__auto__,writer__29606__auto__,opt__29607__auto__){
return cljs.core._write.call(null,writer__29606__auto__,"cljs.core.async/t_cljs$core$async40358");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async40358 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async40358(flag__$1,meta40359){
return (new cljs.core.async.t_cljs$core$async40358(flag__$1,meta40359));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async40358(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async40364 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40364 = (function (flag,cb,meta40365){
this.flag = flag;
this.cb = cb;
this.meta40365 = meta40365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40366,meta40365__$1){
var self__ = this;
var _40366__$1 = this;
return (new cljs.core.async.t_cljs$core$async40364(self__.flag,self__.cb,meta40365__$1));
});

cljs.core.async.t_cljs$core$async40364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40366){
var self__ = this;
var _40366__$1 = this;
return self__.meta40365;
});

cljs.core.async.t_cljs$core$async40364.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40364.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async40364.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40364.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async40364.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40365","meta40365",1444220392,null)], null);
});

cljs.core.async.t_cljs$core$async40364.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40364.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40364";

cljs.core.async.t_cljs$core$async40364.cljs$lang$ctorPrWriter = (function (this__29605__auto__,writer__29606__auto__,opt__29607__auto__){
return cljs.core._write.call(null,writer__29606__auto__,"cljs.core.async/t_cljs$core$async40364");
});

cljs.core.async.__GT_t_cljs$core$async40364 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async40364(flag__$1,cb__$1,meta40365){
return (new cljs.core.async.t_cljs$core$async40364(flag__$1,cb__$1,meta40365));
});

}

return (new cljs.core.async.t_cljs$core$async40364(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__40367_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40367_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40368_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40368_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28948__auto__ = wport;
if(cljs.core.truth_(or__28948__auto__)){
return or__28948__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40369 = (i + (1));
i = G__40369;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28948__auto__ = ret;
if(cljs.core.truth_(or__28948__auto__)){
return or__28948__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6753__auto__ = (function (){var and__28936__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28936__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28936__auto__;
}
})();
if(cljs.core.truth_(temp__6753__auto__)){
var got = temp__6753__auto__;
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
var args__30176__auto__ = [];
var len__30169__auto___40375 = arguments.length;
var i__30170__auto___40376 = (0);
while(true){
if((i__30170__auto___40376 < len__30169__auto___40375)){
args__30176__auto__.push((arguments[i__30170__auto___40376]));

var G__40377 = (i__30170__auto___40376 + (1));
i__30170__auto___40376 = G__40377;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((1) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30177__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40372){
var map__40373 = p__40372;
var map__40373__$1 = ((((!((map__40373 == null)))?((((map__40373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40373):map__40373);
var opts = map__40373__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40370){
var G__40371 = cljs.core.first.call(null,seq40370);
var seq40370__$1 = cljs.core.next.call(null,seq40370);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40371,seq40370__$1);
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
var args40378 = [];
var len__30169__auto___40428 = arguments.length;
var i__30170__auto___40429 = (0);
while(true){
if((i__30170__auto___40429 < len__30169__auto___40428)){
args40378.push((arguments[i__30170__auto___40429]));

var G__40430 = (i__30170__auto___40429 + (1));
i__30170__auto___40429 = G__40430;
continue;
} else {
}
break;
}

var G__40380 = args40378.length;
switch (G__40380) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40378.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__40251__auto___40432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40251__auto___40432){
return (function (){
var f__40252__auto__ = (function (){var switch__40137__auto__ = ((function (c__40251__auto___40432){
return (function (state_40404){
var state_val_40405 = (state_40404[(1)]);
if((state_val_40405 === (7))){
var inst_40400 = (state_40404[(2)]);
var state_40404__$1 = state_40404;
var statearr_40406_40433 = state_40404__$1;
(statearr_40406_40433[(2)] = inst_40400);

(statearr_40406_40433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40405 === (1))){
var state_40404__$1 = state_40404;
var statearr_40407_40434 = state_40404__$1;
(statearr_40407_40434[(2)] = null);

(statearr_40407_40434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40405 === (4))){
var inst_40383 = (state_40404[(7)]);
var inst_40383__$1 = (state_40404[(2)]);
var inst_40384 = (inst_40383__$1 == null);
var state_40404__$1 = (function (){var statearr_40408 = state_40404;
(statearr_40408[(7)] = inst_40383__$1);

return statearr_40408;
})();
if(cljs.core.truth_(inst_40384)){
var statearr_40409_40435 = state_40404__$1;
(statearr_40409_40435[(1)] = (5));

} else {
var statearr_40410_40436 = state_40404__$1;
(statearr_40410_40436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40405 === (13))){
var state_40404__$1 = state_40404;
var statearr_40411_40437 = state_40404__$1;
(statearr_40411_40437[(2)] = null);

(statearr_40411_40437[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40405 === (6))){
var inst_40383 = (state_40404[(7)]);
var state_40404__$1 = state_40404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40404__$1,(11),to,inst_40383);
} else {
if((state_val_40405 === (3))){
var inst_40402 = (state_40404[(2)]);
var state_40404__$1 = state_40404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40404__$1,inst_40402);
} else {
if((state_val_40405 === (12))){
var state_40404__$1 = state_40404;
var statearr_40412_40438 = state_40404__$1;
(statearr_40412_40438[(2)] = null);

(statearr_40412_40438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40405 === (2))){
var state_40404__$1 = state_40404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40404__$1,(4),from);
} else {
if((state_val_40405 === (11))){
var inst_40393 = (state_40404[(2)]);
var state_40404__$1 = state_40404;
if(cljs.core.truth_(inst_40393)){
var statearr_40413_40439 = state_40404__$1;
(statearr_40413_40439[(1)] = (12));

} else {
var statearr_40414_40440 = state_40404__$1;
(statearr_40414_40440[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40405 === (9))){
var state_40404__$1 = state_40404;
var statearr_40415_40441 = state_40404__$1;
(statearr_40415_40441[(2)] = null);

(statearr_40415_40441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40405 === (5))){
var state_40404__$1 = state_40404;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40416_40442 = state_40404__$1;
(statearr_40416_40442[(1)] = (8));

} else {
var statearr_40417_40443 = state_40404__$1;
(statearr_40417_40443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40405 === (14))){
var inst_40398 = (state_40404[(2)]);
var state_40404__$1 = state_40404;
var statearr_40418_40444 = state_40404__$1;
(statearr_40418_40444[(2)] = inst_40398);

(statearr_40418_40444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40405 === (10))){
var inst_40390 = (state_40404[(2)]);
var state_40404__$1 = state_40404;
var statearr_40419_40445 = state_40404__$1;
(statearr_40419_40445[(2)] = inst_40390);

(statearr_40419_40445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40405 === (8))){
var inst_40387 = cljs.core.async.close_BANG_.call(null,to);
var state_40404__$1 = state_40404;
var statearr_40420_40446 = state_40404__$1;
(statearr_40420_40446[(2)] = inst_40387);

(statearr_40420_40446[(1)] = (10));


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
});})(c__40251__auto___40432))
;
return ((function (switch__40137__auto__,c__40251__auto___40432){
return (function() {
var cljs$core$async$state_machine__40138__auto__ = null;
var cljs$core$async$state_machine__40138__auto____0 = (function (){
var statearr_40424 = [null,null,null,null,null,null,null,null];
(statearr_40424[(0)] = cljs$core$async$state_machine__40138__auto__);

(statearr_40424[(1)] = (1));

return statearr_40424;
});
var cljs$core$async$state_machine__40138__auto____1 = (function (state_40404){
while(true){
var ret_value__40139__auto__ = (function (){try{while(true){
var result__40140__auto__ = switch__40137__auto__.call(null,state_40404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40140__auto__;
}
break;
}
}catch (e40425){if((e40425 instanceof Object)){
var ex__40141__auto__ = e40425;
var statearr_40426_40447 = state_40404;
(statearr_40426_40447[(5)] = ex__40141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40448 = state_40404;
state_40404 = G__40448;
continue;
} else {
return ret_value__40139__auto__;
}
break;
}
});
cljs$core$async$state_machine__40138__auto__ = function(state_40404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40138__auto____1.call(this,state_40404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40138__auto____0;
cljs$core$async$state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40138__auto____1;
return cljs$core$async$state_machine__40138__auto__;
})()
;})(switch__40137__auto__,c__40251__auto___40432))
})();
var state__40253__auto__ = (function (){var statearr_40427 = f__40252__auto__.call(null);
(statearr_40427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40251__auto___40432);

return statearr_40427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40253__auto__);
});})(c__40251__auto___40432))
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
return (function (p__40636){
var vec__40637 = p__40636;
var v = cljs.core.nth.call(null,vec__40637,(0),null);
var p = cljs.core.nth.call(null,vec__40637,(1),null);
var job = vec__40637;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__40251__auto___40823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40251__auto___40823,res,vec__40637,v,p,job,jobs,results){
return (function (){
var f__40252__auto__ = (function (){var switch__40137__auto__ = ((function (c__40251__auto___40823,res,vec__40637,v,p,job,jobs,results){
return (function (state_40644){
var state_val_40645 = (state_40644[(1)]);
if((state_val_40645 === (1))){
var state_40644__$1 = state_40644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40644__$1,(2),res,v);
} else {
if((state_val_40645 === (2))){
var inst_40641 = (state_40644[(2)]);
var inst_40642 = cljs.core.async.close_BANG_.call(null,res);
var state_40644__$1 = (function (){var statearr_40646 = state_40644;
(statearr_40646[(7)] = inst_40641);

return statearr_40646;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40644__$1,inst_40642);
} else {
return null;
}
}
});})(c__40251__auto___40823,res,vec__40637,v,p,job,jobs,results))
;
return ((function (switch__40137__auto__,c__40251__auto___40823,res,vec__40637,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____0 = (function (){
var statearr_40650 = [null,null,null,null,null,null,null,null];
(statearr_40650[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__);

(statearr_40650[(1)] = (1));

return statearr_40650;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____1 = (function (state_40644){
while(true){
var ret_value__40139__auto__ = (function (){try{while(true){
var result__40140__auto__ = switch__40137__auto__.call(null,state_40644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40140__auto__;
}
break;
}
}catch (e40651){if((e40651 instanceof Object)){
var ex__40141__auto__ = e40651;
var statearr_40652_40824 = state_40644;
(statearr_40652_40824[(5)] = ex__40141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40825 = state_40644;
state_40644 = G__40825;
continue;
} else {
return ret_value__40139__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__ = function(state_40644){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____1.call(this,state_40644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__;
})()
;})(switch__40137__auto__,c__40251__auto___40823,res,vec__40637,v,p,job,jobs,results))
})();
var state__40253__auto__ = (function (){var statearr_40653 = f__40252__auto__.call(null);
(statearr_40653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40251__auto___40823);

return statearr_40653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40253__auto__);
});})(c__40251__auto___40823,res,vec__40637,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__40654){
var vec__40655 = p__40654;
var v = cljs.core.nth.call(null,vec__40655,(0),null);
var p = cljs.core.nth.call(null,vec__40655,(1),null);
var job = vec__40655;
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
var n__29969__auto___40826 = n;
var __40827 = (0);
while(true){
if((__40827 < n__29969__auto___40826)){
var G__40658_40828 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__40658_40828) {
case "compute":
var c__40251__auto___40830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40827,c__40251__auto___40830,G__40658_40828,n__29969__auto___40826,jobs,results,process,async){
return (function (){
var f__40252__auto__ = (function (){var switch__40137__auto__ = ((function (__40827,c__40251__auto___40830,G__40658_40828,n__29969__auto___40826,jobs,results,process,async){
return (function (state_40671){
var state_val_40672 = (state_40671[(1)]);
if((state_val_40672 === (1))){
var state_40671__$1 = state_40671;
var statearr_40673_40831 = state_40671__$1;
(statearr_40673_40831[(2)] = null);

(statearr_40673_40831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40672 === (2))){
var state_40671__$1 = state_40671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40671__$1,(4),jobs);
} else {
if((state_val_40672 === (3))){
var inst_40669 = (state_40671[(2)]);
var state_40671__$1 = state_40671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40671__$1,inst_40669);
} else {
if((state_val_40672 === (4))){
var inst_40661 = (state_40671[(2)]);
var inst_40662 = process.call(null,inst_40661);
var state_40671__$1 = state_40671;
if(cljs.core.truth_(inst_40662)){
var statearr_40674_40832 = state_40671__$1;
(statearr_40674_40832[(1)] = (5));

} else {
var statearr_40675_40833 = state_40671__$1;
(statearr_40675_40833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40672 === (5))){
var state_40671__$1 = state_40671;
var statearr_40676_40834 = state_40671__$1;
(statearr_40676_40834[(2)] = null);

(statearr_40676_40834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40672 === (6))){
var state_40671__$1 = state_40671;
var statearr_40677_40835 = state_40671__$1;
(statearr_40677_40835[(2)] = null);

(statearr_40677_40835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40672 === (7))){
var inst_40667 = (state_40671[(2)]);
var state_40671__$1 = state_40671;
var statearr_40678_40836 = state_40671__$1;
(statearr_40678_40836[(2)] = inst_40667);

(statearr_40678_40836[(1)] = (3));


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
});})(__40827,c__40251__auto___40830,G__40658_40828,n__29969__auto___40826,jobs,results,process,async))
;
return ((function (__40827,switch__40137__auto__,c__40251__auto___40830,G__40658_40828,n__29969__auto___40826,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____0 = (function (){
var statearr_40682 = [null,null,null,null,null,null,null];
(statearr_40682[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__);

(statearr_40682[(1)] = (1));

return statearr_40682;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____1 = (function (state_40671){
while(true){
var ret_value__40139__auto__ = (function (){try{while(true){
var result__40140__auto__ = switch__40137__auto__.call(null,state_40671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40140__auto__;
}
break;
}
}catch (e40683){if((e40683 instanceof Object)){
var ex__40141__auto__ = e40683;
var statearr_40684_40837 = state_40671;
(statearr_40684_40837[(5)] = ex__40141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40838 = state_40671;
state_40671 = G__40838;
continue;
} else {
return ret_value__40139__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__ = function(state_40671){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____1.call(this,state_40671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__;
})()
;})(__40827,switch__40137__auto__,c__40251__auto___40830,G__40658_40828,n__29969__auto___40826,jobs,results,process,async))
})();
var state__40253__auto__ = (function (){var statearr_40685 = f__40252__auto__.call(null);
(statearr_40685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40251__auto___40830);

return statearr_40685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40253__auto__);
});})(__40827,c__40251__auto___40830,G__40658_40828,n__29969__auto___40826,jobs,results,process,async))
);


break;
case "async":
var c__40251__auto___40839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40827,c__40251__auto___40839,G__40658_40828,n__29969__auto___40826,jobs,results,process,async){
return (function (){
var f__40252__auto__ = (function (){var switch__40137__auto__ = ((function (__40827,c__40251__auto___40839,G__40658_40828,n__29969__auto___40826,jobs,results,process,async){
return (function (state_40698){
var state_val_40699 = (state_40698[(1)]);
if((state_val_40699 === (1))){
var state_40698__$1 = state_40698;
var statearr_40700_40840 = state_40698__$1;
(statearr_40700_40840[(2)] = null);

(statearr_40700_40840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40699 === (2))){
var state_40698__$1 = state_40698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40698__$1,(4),jobs);
} else {
if((state_val_40699 === (3))){
var inst_40696 = (state_40698[(2)]);
var state_40698__$1 = state_40698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40698__$1,inst_40696);
} else {
if((state_val_40699 === (4))){
var inst_40688 = (state_40698[(2)]);
var inst_40689 = async.call(null,inst_40688);
var state_40698__$1 = state_40698;
if(cljs.core.truth_(inst_40689)){
var statearr_40701_40841 = state_40698__$1;
(statearr_40701_40841[(1)] = (5));

} else {
var statearr_40702_40842 = state_40698__$1;
(statearr_40702_40842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40699 === (5))){
var state_40698__$1 = state_40698;
var statearr_40703_40843 = state_40698__$1;
(statearr_40703_40843[(2)] = null);

(statearr_40703_40843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40699 === (6))){
var state_40698__$1 = state_40698;
var statearr_40704_40844 = state_40698__$1;
(statearr_40704_40844[(2)] = null);

(statearr_40704_40844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40699 === (7))){
var inst_40694 = (state_40698[(2)]);
var state_40698__$1 = state_40698;
var statearr_40705_40845 = state_40698__$1;
(statearr_40705_40845[(2)] = inst_40694);

(statearr_40705_40845[(1)] = (3));


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
});})(__40827,c__40251__auto___40839,G__40658_40828,n__29969__auto___40826,jobs,results,process,async))
;
return ((function (__40827,switch__40137__auto__,c__40251__auto___40839,G__40658_40828,n__29969__auto___40826,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____0 = (function (){
var statearr_40709 = [null,null,null,null,null,null,null];
(statearr_40709[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__);

(statearr_40709[(1)] = (1));

return statearr_40709;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____1 = (function (state_40698){
while(true){
var ret_value__40139__auto__ = (function (){try{while(true){
var result__40140__auto__ = switch__40137__auto__.call(null,state_40698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40140__auto__;
}
break;
}
}catch (e40710){if((e40710 instanceof Object)){
var ex__40141__auto__ = e40710;
var statearr_40711_40846 = state_40698;
(statearr_40711_40846[(5)] = ex__40141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40847 = state_40698;
state_40698 = G__40847;
continue;
} else {
return ret_value__40139__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__ = function(state_40698){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____1.call(this,state_40698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__;
})()
;})(__40827,switch__40137__auto__,c__40251__auto___40839,G__40658_40828,n__29969__auto___40826,jobs,results,process,async))
})();
var state__40253__auto__ = (function (){var statearr_40712 = f__40252__auto__.call(null);
(statearr_40712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40251__auto___40839);

return statearr_40712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40253__auto__);
});})(__40827,c__40251__auto___40839,G__40658_40828,n__29969__auto___40826,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__40848 = (__40827 + (1));
__40827 = G__40848;
continue;
} else {
}
break;
}

var c__40251__auto___40849 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40251__auto___40849,jobs,results,process,async){
return (function (){
var f__40252__auto__ = (function (){var switch__40137__auto__ = ((function (c__40251__auto___40849,jobs,results,process,async){
return (function (state_40734){
var state_val_40735 = (state_40734[(1)]);
if((state_val_40735 === (1))){
var state_40734__$1 = state_40734;
var statearr_40736_40850 = state_40734__$1;
(statearr_40736_40850[(2)] = null);

(statearr_40736_40850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40735 === (2))){
var state_40734__$1 = state_40734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40734__$1,(4),from);
} else {
if((state_val_40735 === (3))){
var inst_40732 = (state_40734[(2)]);
var state_40734__$1 = state_40734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40734__$1,inst_40732);
} else {
if((state_val_40735 === (4))){
var inst_40715 = (state_40734[(7)]);
var inst_40715__$1 = (state_40734[(2)]);
var inst_40716 = (inst_40715__$1 == null);
var state_40734__$1 = (function (){var statearr_40737 = state_40734;
(statearr_40737[(7)] = inst_40715__$1);

return statearr_40737;
})();
if(cljs.core.truth_(inst_40716)){
var statearr_40738_40851 = state_40734__$1;
(statearr_40738_40851[(1)] = (5));

} else {
var statearr_40739_40852 = state_40734__$1;
(statearr_40739_40852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40735 === (5))){
var inst_40718 = cljs.core.async.close_BANG_.call(null,jobs);
var state_40734__$1 = state_40734;
var statearr_40740_40853 = state_40734__$1;
(statearr_40740_40853[(2)] = inst_40718);

(statearr_40740_40853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40735 === (6))){
var inst_40715 = (state_40734[(7)]);
var inst_40720 = (state_40734[(8)]);
var inst_40720__$1 = cljs.core.async.chan.call(null,(1));
var inst_40721 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40722 = [inst_40715,inst_40720__$1];
var inst_40723 = (new cljs.core.PersistentVector(null,2,(5),inst_40721,inst_40722,null));
var state_40734__$1 = (function (){var statearr_40741 = state_40734;
(statearr_40741[(8)] = inst_40720__$1);

return statearr_40741;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40734__$1,(8),jobs,inst_40723);
} else {
if((state_val_40735 === (7))){
var inst_40730 = (state_40734[(2)]);
var state_40734__$1 = state_40734;
var statearr_40742_40854 = state_40734__$1;
(statearr_40742_40854[(2)] = inst_40730);

(statearr_40742_40854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40735 === (8))){
var inst_40720 = (state_40734[(8)]);
var inst_40725 = (state_40734[(2)]);
var state_40734__$1 = (function (){var statearr_40743 = state_40734;
(statearr_40743[(9)] = inst_40725);

return statearr_40743;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40734__$1,(9),results,inst_40720);
} else {
if((state_val_40735 === (9))){
var inst_40727 = (state_40734[(2)]);
var state_40734__$1 = (function (){var statearr_40744 = state_40734;
(statearr_40744[(10)] = inst_40727);

return statearr_40744;
})();
var statearr_40745_40855 = state_40734__$1;
(statearr_40745_40855[(2)] = null);

(statearr_40745_40855[(1)] = (2));


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
});})(c__40251__auto___40849,jobs,results,process,async))
;
return ((function (switch__40137__auto__,c__40251__auto___40849,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____0 = (function (){
var statearr_40749 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40749[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__);

(statearr_40749[(1)] = (1));

return statearr_40749;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____1 = (function (state_40734){
while(true){
var ret_value__40139__auto__ = (function (){try{while(true){
var result__40140__auto__ = switch__40137__auto__.call(null,state_40734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40140__auto__;
}
break;
}
}catch (e40750){if((e40750 instanceof Object)){
var ex__40141__auto__ = e40750;
var statearr_40751_40856 = state_40734;
(statearr_40751_40856[(5)] = ex__40141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40857 = state_40734;
state_40734 = G__40857;
continue;
} else {
return ret_value__40139__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__ = function(state_40734){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____1.call(this,state_40734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__;
})()
;})(switch__40137__auto__,c__40251__auto___40849,jobs,results,process,async))
})();
var state__40253__auto__ = (function (){var statearr_40752 = f__40252__auto__.call(null);
(statearr_40752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40251__auto___40849);

return statearr_40752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40253__auto__);
});})(c__40251__auto___40849,jobs,results,process,async))
);


var c__40251__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40251__auto__,jobs,results,process,async){
return (function (){
var f__40252__auto__ = (function (){var switch__40137__auto__ = ((function (c__40251__auto__,jobs,results,process,async){
return (function (state_40790){
var state_val_40791 = (state_40790[(1)]);
if((state_val_40791 === (7))){
var inst_40786 = (state_40790[(2)]);
var state_40790__$1 = state_40790;
var statearr_40792_40858 = state_40790__$1;
(statearr_40792_40858[(2)] = inst_40786);

(statearr_40792_40858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40791 === (20))){
var state_40790__$1 = state_40790;
var statearr_40793_40859 = state_40790__$1;
(statearr_40793_40859[(2)] = null);

(statearr_40793_40859[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40791 === (1))){
var state_40790__$1 = state_40790;
var statearr_40794_40860 = state_40790__$1;
(statearr_40794_40860[(2)] = null);

(statearr_40794_40860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40791 === (4))){
var inst_40755 = (state_40790[(7)]);
var inst_40755__$1 = (state_40790[(2)]);
var inst_40756 = (inst_40755__$1 == null);
var state_40790__$1 = (function (){var statearr_40795 = state_40790;
(statearr_40795[(7)] = inst_40755__$1);

return statearr_40795;
})();
if(cljs.core.truth_(inst_40756)){
var statearr_40796_40861 = state_40790__$1;
(statearr_40796_40861[(1)] = (5));

} else {
var statearr_40797_40862 = state_40790__$1;
(statearr_40797_40862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40791 === (15))){
var inst_40768 = (state_40790[(8)]);
var state_40790__$1 = state_40790;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40790__$1,(18),to,inst_40768);
} else {
if((state_val_40791 === (21))){
var inst_40781 = (state_40790[(2)]);
var state_40790__$1 = state_40790;
var statearr_40798_40863 = state_40790__$1;
(statearr_40798_40863[(2)] = inst_40781);

(statearr_40798_40863[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40791 === (13))){
var inst_40783 = (state_40790[(2)]);
var state_40790__$1 = (function (){var statearr_40799 = state_40790;
(statearr_40799[(9)] = inst_40783);

return statearr_40799;
})();
var statearr_40800_40864 = state_40790__$1;
(statearr_40800_40864[(2)] = null);

(statearr_40800_40864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40791 === (6))){
var inst_40755 = (state_40790[(7)]);
var state_40790__$1 = state_40790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40790__$1,(11),inst_40755);
} else {
if((state_val_40791 === (17))){
var inst_40776 = (state_40790[(2)]);
var state_40790__$1 = state_40790;
if(cljs.core.truth_(inst_40776)){
var statearr_40801_40865 = state_40790__$1;
(statearr_40801_40865[(1)] = (19));

} else {
var statearr_40802_40866 = state_40790__$1;
(statearr_40802_40866[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40791 === (3))){
var inst_40788 = (state_40790[(2)]);
var state_40790__$1 = state_40790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40790__$1,inst_40788);
} else {
if((state_val_40791 === (12))){
var inst_40765 = (state_40790[(10)]);
var state_40790__$1 = state_40790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40790__$1,(14),inst_40765);
} else {
if((state_val_40791 === (2))){
var state_40790__$1 = state_40790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40790__$1,(4),results);
} else {
if((state_val_40791 === (19))){
var state_40790__$1 = state_40790;
var statearr_40803_40867 = state_40790__$1;
(statearr_40803_40867[(2)] = null);

(statearr_40803_40867[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40791 === (11))){
var inst_40765 = (state_40790[(2)]);
var state_40790__$1 = (function (){var statearr_40804 = state_40790;
(statearr_40804[(10)] = inst_40765);

return statearr_40804;
})();
var statearr_40805_40868 = state_40790__$1;
(statearr_40805_40868[(2)] = null);

(statearr_40805_40868[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40791 === (9))){
var state_40790__$1 = state_40790;
var statearr_40806_40869 = state_40790__$1;
(statearr_40806_40869[(2)] = null);

(statearr_40806_40869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40791 === (5))){
var state_40790__$1 = state_40790;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40807_40870 = state_40790__$1;
(statearr_40807_40870[(1)] = (8));

} else {
var statearr_40808_40871 = state_40790__$1;
(statearr_40808_40871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40791 === (14))){
var inst_40768 = (state_40790[(8)]);
var inst_40770 = (state_40790[(11)]);
var inst_40768__$1 = (state_40790[(2)]);
var inst_40769 = (inst_40768__$1 == null);
var inst_40770__$1 = cljs.core.not.call(null,inst_40769);
var state_40790__$1 = (function (){var statearr_40809 = state_40790;
(statearr_40809[(8)] = inst_40768__$1);

(statearr_40809[(11)] = inst_40770__$1);

return statearr_40809;
})();
if(inst_40770__$1){
var statearr_40810_40872 = state_40790__$1;
(statearr_40810_40872[(1)] = (15));

} else {
var statearr_40811_40873 = state_40790__$1;
(statearr_40811_40873[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40791 === (16))){
var inst_40770 = (state_40790[(11)]);
var state_40790__$1 = state_40790;
var statearr_40812_40874 = state_40790__$1;
(statearr_40812_40874[(2)] = inst_40770);

(statearr_40812_40874[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40791 === (10))){
var inst_40762 = (state_40790[(2)]);
var state_40790__$1 = state_40790;
var statearr_40813_40875 = state_40790__$1;
(statearr_40813_40875[(2)] = inst_40762);

(statearr_40813_40875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40791 === (18))){
var inst_40773 = (state_40790[(2)]);
var state_40790__$1 = state_40790;
var statearr_40814_40876 = state_40790__$1;
(statearr_40814_40876[(2)] = inst_40773);

(statearr_40814_40876[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40791 === (8))){
var inst_40759 = cljs.core.async.close_BANG_.call(null,to);
var state_40790__$1 = state_40790;
var statearr_40815_40877 = state_40790__$1;
(statearr_40815_40877[(2)] = inst_40759);

(statearr_40815_40877[(1)] = (10));


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
});})(c__40251__auto__,jobs,results,process,async))
;
return ((function (switch__40137__auto__,c__40251__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____0 = (function (){
var statearr_40819 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40819[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__);

(statearr_40819[(1)] = (1));

return statearr_40819;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____1 = (function (state_40790){
while(true){
var ret_value__40139__auto__ = (function (){try{while(true){
var result__40140__auto__ = switch__40137__auto__.call(null,state_40790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40140__auto__;
}
break;
}
}catch (e40820){if((e40820 instanceof Object)){
var ex__40141__auto__ = e40820;
var statearr_40821_40878 = state_40790;
(statearr_40821_40878[(5)] = ex__40141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40879 = state_40790;
state_40790 = G__40879;
continue;
} else {
return ret_value__40139__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__ = function(state_40790){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____1.call(this,state_40790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40138__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40138__auto__;
})()
;})(switch__40137__auto__,c__40251__auto__,jobs,results,process,async))
})();
var state__40253__auto__ = (function (){var statearr_40822 = f__40252__auto__.call(null);
(statearr_40822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40251__auto__);

return statearr_40822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40253__auto__);
});})(c__40251__auto__,jobs,results,process,async))
);

return c__40251__auto__;
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
var args40880 = [];
var len__30169__auto___40883 = arguments.length;
var i__30170__auto___40884 = (0);
while(true){
if((i__30170__auto___40884 < len__30169__auto___40883)){
args40880.push((arguments[i__30170__auto___40884]));

var G__40885 = (i__30170__auto___40884 + (1));
i__30170__auto___40884 = G__40885;
continue;
} else {
}
break;
}

var G__40882 = args40880.length;
switch (G__40882) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40880.length)].join('')));

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
var args40887 = [];
var len__30169__auto___40890 = arguments.length;
var i__30170__auto___40891 = (0);
while(true){
if((i__30170__auto___40891 < len__30169__auto___40890)){
args40887.push((arguments[i__30170__auto___40891]));

var G__40892 = (i__30170__auto___40891 + (1));
i__30170__auto___40891 = G__40892;
continue;
} else {
}
break;
}

var G__40889 = args40887.length;
switch (G__40889) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40887.length)].join('')));

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
var args40894 = [];
var len__30169__auto___40947 = arguments.length;
var i__30170__auto___40948 = (0);
while(true){
if((i__30170__auto___40948 < len__30169__auto___40947)){
args40894.push((arguments[i__30170__auto___40948]));

var G__40949 = (i__30170__auto___40948 + (1));
i__30170__auto___40948 = G__40949;
continue;
} else {
}
break;
}

var G__40896 = args40894.length;
switch (G__40896) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40894.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__40251__auto___40951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40251__auto___40951,tc,fc){
return (function (){
var f__40252__auto__ = (function (){var switch__40137__auto__ = ((function (c__40251__auto___40951,tc,fc){
return (function (state_40922){
var state_val_40923 = (state_40922[(1)]);
if((state_val_40923 === (7))){
var inst_40918 = (state_40922[(2)]);
var state_40922__$1 = state_40922;
var statearr_40924_40952 = state_40922__$1;
(statearr_40924_40952[(2)] = inst_40918);

(statearr_40924_40952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40923 === (1))){
var state_40922__$1 = state_40922;
var statearr_40925_40953 = state_40922__$1;
(statearr_40925_40953[(2)] = null);

(statearr_40925_40953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40923 === (4))){
var inst_40899 = (state_40922[(7)]);
var inst_40899__$1 = (state_40922[(2)]);
var inst_40900 = (inst_40899__$1 == null);
var state_40922__$1 = (function (){var statearr_40926 = state_40922;
(statearr_40926[(7)] = inst_40899__$1);

return statearr_40926;
})();
if(cljs.core.truth_(inst_40900)){
var statearr_40927_40954 = state_40922__$1;
(statearr_40927_40954[(1)] = (5));

} else {
var statearr_40928_40955 = state_40922__$1;
(statearr_40928_40955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40923 === (13))){
var state_40922__$1 = state_40922;
var statearr_40929_40956 = state_40922__$1;
(statearr_40929_40956[(2)] = null);

(statearr_40929_40956[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40923 === (6))){
var inst_40899 = (state_40922[(7)]);
var inst_40905 = p.call(null,inst_40899);
var state_40922__$1 = state_40922;
if(cljs.core.truth_(inst_40905)){
var statearr_40930_40957 = state_40922__$1;
(statearr_40930_40957[(1)] = (9));

} else {
var statearr_40931_40958 = state_40922__$1;
(statearr_40931_40958[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40923 === (3))){
var inst_40920 = (state_40922[(2)]);
var state_40922__$1 = state_40922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40922__$1,inst_40920);
} else {
if((state_val_40923 === (12))){
var state_40922__$1 = state_40922;
var statearr_40932_40959 = state_40922__$1;
(statearr_40932_40959[(2)] = null);

(statearr_40932_40959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40923 === (2))){
var state_40922__$1 = state_40922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40922__$1,(4),ch);
} else {
if((state_val_40923 === (11))){
var inst_40899 = (state_40922[(7)]);
var inst_40909 = (state_40922[(2)]);
var state_40922__$1 = state_40922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40922__$1,(8),inst_40909,inst_40899);
} else {
if((state_val_40923 === (9))){
var state_40922__$1 = state_40922;
var statearr_40933_40960 = state_40922__$1;
(statearr_40933_40960[(2)] = tc);

(statearr_40933_40960[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40923 === (5))){
var inst_40902 = cljs.core.async.close_BANG_.call(null,tc);
var inst_40903 = cljs.core.async.close_BANG_.call(null,fc);
var state_40922__$1 = (function (){var statearr_40934 = state_40922;
(statearr_40934[(8)] = inst_40902);

return statearr_40934;
})();
var statearr_40935_40961 = state_40922__$1;
(statearr_40935_40961[(2)] = inst_40903);

(statearr_40935_40961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40923 === (14))){
var inst_40916 = (state_40922[(2)]);
var state_40922__$1 = state_40922;
var statearr_40936_40962 = state_40922__$1;
(statearr_40936_40962[(2)] = inst_40916);

(statearr_40936_40962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40923 === (10))){
var state_40922__$1 = state_40922;
var statearr_40937_40963 = state_40922__$1;
(statearr_40937_40963[(2)] = fc);

(statearr_40937_40963[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40923 === (8))){
var inst_40911 = (state_40922[(2)]);
var state_40922__$1 = state_40922;
if(cljs.core.truth_(inst_40911)){
var statearr_40938_40964 = state_40922__$1;
(statearr_40938_40964[(1)] = (12));

} else {
var statearr_40939_40965 = state_40922__$1;
(statearr_40939_40965[(1)] = (13));

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
});})(c__40251__auto___40951,tc,fc))
;
return ((function (switch__40137__auto__,c__40251__auto___40951,tc,fc){
return (function() {
var cljs$core$async$state_machine__40138__auto__ = null;
var cljs$core$async$state_machine__40138__auto____0 = (function (){
var statearr_40943 = [null,null,null,null,null,null,null,null,null];
(statearr_40943[(0)] = cljs$core$async$state_machine__40138__auto__);

(statearr_40943[(1)] = (1));

return statearr_40943;
});
var cljs$core$async$state_machine__40138__auto____1 = (function (state_40922){
while(true){
var ret_value__40139__auto__ = (function (){try{while(true){
var result__40140__auto__ = switch__40137__auto__.call(null,state_40922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40140__auto__;
}
break;
}
}catch (e40944){if((e40944 instanceof Object)){
var ex__40141__auto__ = e40944;
var statearr_40945_40966 = state_40922;
(statearr_40945_40966[(5)] = ex__40141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40967 = state_40922;
state_40922 = G__40967;
continue;
} else {
return ret_value__40139__auto__;
}
break;
}
});
cljs$core$async$state_machine__40138__auto__ = function(state_40922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40138__auto____1.call(this,state_40922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40138__auto____0;
cljs$core$async$state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40138__auto____1;
return cljs$core$async$state_machine__40138__auto__;
})()
;})(switch__40137__auto__,c__40251__auto___40951,tc,fc))
})();
var state__40253__auto__ = (function (){var statearr_40946 = f__40252__auto__.call(null);
(statearr_40946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40251__auto___40951);

return statearr_40946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40253__auto__);
});})(c__40251__auto___40951,tc,fc))
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
var c__40251__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40251__auto__){
return (function (){
var f__40252__auto__ = (function (){var switch__40137__auto__ = ((function (c__40251__auto__){
return (function (state_41031){
var state_val_41032 = (state_41031[(1)]);
if((state_val_41032 === (7))){
var inst_41027 = (state_41031[(2)]);
var state_41031__$1 = state_41031;
var statearr_41033_41054 = state_41031__$1;
(statearr_41033_41054[(2)] = inst_41027);

(statearr_41033_41054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41032 === (1))){
var inst_41011 = init;
var state_41031__$1 = (function (){var statearr_41034 = state_41031;
(statearr_41034[(7)] = inst_41011);

return statearr_41034;
})();
var statearr_41035_41055 = state_41031__$1;
(statearr_41035_41055[(2)] = null);

(statearr_41035_41055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41032 === (4))){
var inst_41014 = (state_41031[(8)]);
var inst_41014__$1 = (state_41031[(2)]);
var inst_41015 = (inst_41014__$1 == null);
var state_41031__$1 = (function (){var statearr_41036 = state_41031;
(statearr_41036[(8)] = inst_41014__$1);

return statearr_41036;
})();
if(cljs.core.truth_(inst_41015)){
var statearr_41037_41056 = state_41031__$1;
(statearr_41037_41056[(1)] = (5));

} else {
var statearr_41038_41057 = state_41031__$1;
(statearr_41038_41057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41032 === (6))){
var inst_41014 = (state_41031[(8)]);
var inst_41011 = (state_41031[(7)]);
var inst_41018 = (state_41031[(9)]);
var inst_41018__$1 = f.call(null,inst_41011,inst_41014);
var inst_41019 = cljs.core.reduced_QMARK_.call(null,inst_41018__$1);
var state_41031__$1 = (function (){var statearr_41039 = state_41031;
(statearr_41039[(9)] = inst_41018__$1);

return statearr_41039;
})();
if(inst_41019){
var statearr_41040_41058 = state_41031__$1;
(statearr_41040_41058[(1)] = (8));

} else {
var statearr_41041_41059 = state_41031__$1;
(statearr_41041_41059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41032 === (3))){
var inst_41029 = (state_41031[(2)]);
var state_41031__$1 = state_41031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41031__$1,inst_41029);
} else {
if((state_val_41032 === (2))){
var state_41031__$1 = state_41031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41031__$1,(4),ch);
} else {
if((state_val_41032 === (9))){
var inst_41018 = (state_41031[(9)]);
var inst_41011 = inst_41018;
var state_41031__$1 = (function (){var statearr_41042 = state_41031;
(statearr_41042[(7)] = inst_41011);

return statearr_41042;
})();
var statearr_41043_41060 = state_41031__$1;
(statearr_41043_41060[(2)] = null);

(statearr_41043_41060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41032 === (5))){
var inst_41011 = (state_41031[(7)]);
var state_41031__$1 = state_41031;
var statearr_41044_41061 = state_41031__$1;
(statearr_41044_41061[(2)] = inst_41011);

(statearr_41044_41061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41032 === (10))){
var inst_41025 = (state_41031[(2)]);
var state_41031__$1 = state_41031;
var statearr_41045_41062 = state_41031__$1;
(statearr_41045_41062[(2)] = inst_41025);

(statearr_41045_41062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41032 === (8))){
var inst_41018 = (state_41031[(9)]);
var inst_41021 = cljs.core.deref.call(null,inst_41018);
var state_41031__$1 = state_41031;
var statearr_41046_41063 = state_41031__$1;
(statearr_41046_41063[(2)] = inst_41021);

(statearr_41046_41063[(1)] = (10));


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
});})(c__40251__auto__))
;
return ((function (switch__40137__auto__,c__40251__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__40138__auto__ = null;
var cljs$core$async$reduce_$_state_machine__40138__auto____0 = (function (){
var statearr_41050 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41050[(0)] = cljs$core$async$reduce_$_state_machine__40138__auto__);

(statearr_41050[(1)] = (1));

return statearr_41050;
});
var cljs$core$async$reduce_$_state_machine__40138__auto____1 = (function (state_41031){
while(true){
var ret_value__40139__auto__ = (function (){try{while(true){
var result__40140__auto__ = switch__40137__auto__.call(null,state_41031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40140__auto__;
}
break;
}
}catch (e41051){if((e41051 instanceof Object)){
var ex__40141__auto__ = e41051;
var statearr_41052_41064 = state_41031;
(statearr_41052_41064[(5)] = ex__40141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41065 = state_41031;
state_41031 = G__41065;
continue;
} else {
return ret_value__40139__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__40138__auto__ = function(state_41031){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__40138__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__40138__auto____1.call(this,state_41031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__40138__auto____0;
cljs$core$async$reduce_$_state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__40138__auto____1;
return cljs$core$async$reduce_$_state_machine__40138__auto__;
})()
;})(switch__40137__auto__,c__40251__auto__))
})();
var state__40253__auto__ = (function (){var statearr_41053 = f__40252__auto__.call(null);
(statearr_41053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40251__auto__);

return statearr_41053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40253__auto__);
});})(c__40251__auto__))
);

return c__40251__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__40251__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40251__auto__,f__$1){
return (function (){
var f__40252__auto__ = (function (){var switch__40137__auto__ = ((function (c__40251__auto__,f__$1){
return (function (state_41085){
var state_val_41086 = (state_41085[(1)]);
if((state_val_41086 === (1))){
var inst_41080 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_41085__$1 = state_41085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41085__$1,(2),inst_41080);
} else {
if((state_val_41086 === (2))){
var inst_41082 = (state_41085[(2)]);
var inst_41083 = f__$1.call(null,inst_41082);
var state_41085__$1 = state_41085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41085__$1,inst_41083);
} else {
return null;
}
}
});})(c__40251__auto__,f__$1))
;
return ((function (switch__40137__auto__,c__40251__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__40138__auto__ = null;
var cljs$core$async$transduce_$_state_machine__40138__auto____0 = (function (){
var statearr_41090 = [null,null,null,null,null,null,null];
(statearr_41090[(0)] = cljs$core$async$transduce_$_state_machine__40138__auto__);

(statearr_41090[(1)] = (1));

return statearr_41090;
});
var cljs$core$async$transduce_$_state_machine__40138__auto____1 = (function (state_41085){
while(true){
var ret_value__40139__auto__ = (function (){try{while(true){
var result__40140__auto__ = switch__40137__auto__.call(null,state_41085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40140__auto__;
}
break;
}
}catch (e41091){if((e41091 instanceof Object)){
var ex__40141__auto__ = e41091;
var statearr_41092_41094 = state_41085;
(statearr_41092_41094[(5)] = ex__40141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41095 = state_41085;
state_41085 = G__41095;
continue;
} else {
return ret_value__40139__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__40138__auto__ = function(state_41085){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__40138__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__40138__auto____1.call(this,state_41085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__40138__auto____0;
cljs$core$async$transduce_$_state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__40138__auto____1;
return cljs$core$async$transduce_$_state_machine__40138__auto__;
})()
;})(switch__40137__auto__,c__40251__auto__,f__$1))
})();
var state__40253__auto__ = (function (){var statearr_41093 = f__40252__auto__.call(null);
(statearr_41093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40251__auto__);

return statearr_41093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40253__auto__);
});})(c__40251__auto__,f__$1))
);

return c__40251__auto__;
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
var args41096 = [];
var len__30169__auto___41148 = arguments.length;
var i__30170__auto___41149 = (0);
while(true){
if((i__30170__auto___41149 < len__30169__auto___41148)){
args41096.push((arguments[i__30170__auto___41149]));

var G__41150 = (i__30170__auto___41149 + (1));
i__30170__auto___41149 = G__41150;
continue;
} else {
}
break;
}

var G__41098 = args41096.length;
switch (G__41098) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41096.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__40251__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40251__auto__){
return (function (){
var f__40252__auto__ = (function (){var switch__40137__auto__ = ((function (c__40251__auto__){
return (function (state_41123){
var state_val_41124 = (state_41123[(1)]);
if((state_val_41124 === (7))){
var inst_41105 = (state_41123[(2)]);
var state_41123__$1 = state_41123;
var statearr_41125_41152 = state_41123__$1;
(statearr_41125_41152[(2)] = inst_41105);

(statearr_41125_41152[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41124 === (1))){
var inst_41099 = cljs.core.seq.call(null,coll);
var inst_41100 = inst_41099;
var state_41123__$1 = (function (){var statearr_41126 = state_41123;
(statearr_41126[(7)] = inst_41100);

return statearr_41126;
})();
var statearr_41127_41153 = state_41123__$1;
(statearr_41127_41153[(2)] = null);

(statearr_41127_41153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41124 === (4))){
var inst_41100 = (state_41123[(7)]);
var inst_41103 = cljs.core.first.call(null,inst_41100);
var state_41123__$1 = state_41123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41123__$1,(7),ch,inst_41103);
} else {
if((state_val_41124 === (13))){
var inst_41117 = (state_41123[(2)]);
var state_41123__$1 = state_41123;
var statearr_41128_41154 = state_41123__$1;
(statearr_41128_41154[(2)] = inst_41117);

(statearr_41128_41154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41124 === (6))){
var inst_41108 = (state_41123[(2)]);
var state_41123__$1 = state_41123;
if(cljs.core.truth_(inst_41108)){
var statearr_41129_41155 = state_41123__$1;
(statearr_41129_41155[(1)] = (8));

} else {
var statearr_41130_41156 = state_41123__$1;
(statearr_41130_41156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41124 === (3))){
var inst_41121 = (state_41123[(2)]);
var state_41123__$1 = state_41123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41123__$1,inst_41121);
} else {
if((state_val_41124 === (12))){
var state_41123__$1 = state_41123;
var statearr_41131_41157 = state_41123__$1;
(statearr_41131_41157[(2)] = null);

(statearr_41131_41157[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41124 === (2))){
var inst_41100 = (state_41123[(7)]);
var state_41123__$1 = state_41123;
if(cljs.core.truth_(inst_41100)){
var statearr_41132_41158 = state_41123__$1;
(statearr_41132_41158[(1)] = (4));

} else {
var statearr_41133_41159 = state_41123__$1;
(statearr_41133_41159[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41124 === (11))){
var inst_41114 = cljs.core.async.close_BANG_.call(null,ch);
var state_41123__$1 = state_41123;
var statearr_41134_41160 = state_41123__$1;
(statearr_41134_41160[(2)] = inst_41114);

(statearr_41134_41160[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41124 === (9))){
var state_41123__$1 = state_41123;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41135_41161 = state_41123__$1;
(statearr_41135_41161[(1)] = (11));

} else {
var statearr_41136_41162 = state_41123__$1;
(statearr_41136_41162[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41124 === (5))){
var inst_41100 = (state_41123[(7)]);
var state_41123__$1 = state_41123;
var statearr_41137_41163 = state_41123__$1;
(statearr_41137_41163[(2)] = inst_41100);

(statearr_41137_41163[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41124 === (10))){
var inst_41119 = (state_41123[(2)]);
var state_41123__$1 = state_41123;
var statearr_41138_41164 = state_41123__$1;
(statearr_41138_41164[(2)] = inst_41119);

(statearr_41138_41164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41124 === (8))){
var inst_41100 = (state_41123[(7)]);
var inst_41110 = cljs.core.next.call(null,inst_41100);
var inst_41100__$1 = inst_41110;
var state_41123__$1 = (function (){var statearr_41139 = state_41123;
(statearr_41139[(7)] = inst_41100__$1);

return statearr_41139;
})();
var statearr_41140_41165 = state_41123__$1;
(statearr_41140_41165[(2)] = null);

(statearr_41140_41165[(1)] = (2));


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
});})(c__40251__auto__))
;
return ((function (switch__40137__auto__,c__40251__auto__){
return (function() {
var cljs$core$async$state_machine__40138__auto__ = null;
var cljs$core$async$state_machine__40138__auto____0 = (function (){
var statearr_41144 = [null,null,null,null,null,null,null,null];
(statearr_41144[(0)] = cljs$core$async$state_machine__40138__auto__);

(statearr_41144[(1)] = (1));

return statearr_41144;
});
var cljs$core$async$state_machine__40138__auto____1 = (function (state_41123){
while(true){
var ret_value__40139__auto__ = (function (){try{while(true){
var result__40140__auto__ = switch__40137__auto__.call(null,state_41123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40140__auto__;
}
break;
}
}catch (e41145){if((e41145 instanceof Object)){
var ex__40141__auto__ = e41145;
var statearr_41146_41166 = state_41123;
(statearr_41146_41166[(5)] = ex__40141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41167 = state_41123;
state_41123 = G__41167;
continue;
} else {
return ret_value__40139__auto__;
}
break;
}
});
cljs$core$async$state_machine__40138__auto__ = function(state_41123){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40138__auto____1.call(this,state_41123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40138__auto____0;
cljs$core$async$state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40138__auto____1;
return cljs$core$async$state_machine__40138__auto__;
})()
;})(switch__40137__auto__,c__40251__auto__))
})();
var state__40253__auto__ = (function (){var statearr_41147 = f__40252__auto__.call(null);
(statearr_41147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40251__auto__);

return statearr_41147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40253__auto__);
});})(c__40251__auto__))
);

return c__40251__auto__;
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
var x__29666__auto__ = (((_ == null))?null:_);
var m__29667__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__29666__auto__)]);
if(!((m__29667__auto__ == null))){
return m__29667__auto__.call(null,_);
} else {
var m__29667__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__29667__auto____$1 == null))){
return m__29667__auto____$1.call(null,_);
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
var x__29666__auto__ = (((m == null))?null:m);
var m__29667__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__29666__auto__)]);
if(!((m__29667__auto__ == null))){
return m__29667__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__29667__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__29667__auto____$1 == null))){
return m__29667__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__29666__auto__ = (((m == null))?null:m);
var m__29667__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__29666__auto__)]);
if(!((m__29667__auto__ == null))){
return m__29667__auto__.call(null,m,ch);
} else {
var m__29667__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__29667__auto____$1 == null))){
return m__29667__auto____$1.call(null,m,ch);
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
var x__29666__auto__ = (((m == null))?null:m);
var m__29667__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__29666__auto__)]);
if(!((m__29667__auto__ == null))){
return m__29667__auto__.call(null,m);
} else {
var m__29667__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__29667__auto____$1 == null))){
return m__29667__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async41393 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41393 = (function (ch,cs,meta41394){
this.ch = ch;
this.cs = cs;
this.meta41394 = meta41394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41395,meta41394__$1){
var self__ = this;
var _41395__$1 = this;
return (new cljs.core.async.t_cljs$core$async41393(self__.ch,self__.cs,meta41394__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async41393.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41395){
var self__ = this;
var _41395__$1 = this;
return self__.meta41394;
});})(cs))
;

cljs.core.async.t_cljs$core$async41393.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41393.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async41393.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41393.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41393.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41393.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41393.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41394","meta41394",2066230180,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async41393.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41393";

cljs.core.async.t_cljs$core$async41393.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__29605__auto__,writer__29606__auto__,opt__29607__auto__){
return cljs.core._write.call(null,writer__29606__auto__,"cljs.core.async/t_cljs$core$async41393");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async41393 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async41393(ch__$1,cs__$1,meta41394){
return (new cljs.core.async.t_cljs$core$async41393(ch__$1,cs__$1,meta41394));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async41393(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__40251__auto___41618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40251__auto___41618,cs,m,dchan,dctr,done){
return (function (){
var f__40252__auto__ = (function (){var switch__40137__auto__ = ((function (c__40251__auto___41618,cs,m,dchan,dctr,done){
return (function (state_41530){
var state_val_41531 = (state_41530[(1)]);
if((state_val_41531 === (7))){
var inst_41526 = (state_41530[(2)]);
var state_41530__$1 = state_41530;
var statearr_41532_41619 = state_41530__$1;
(statearr_41532_41619[(2)] = inst_41526);

(statearr_41532_41619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (20))){
var inst_41429 = (state_41530[(7)]);
var inst_41441 = cljs.core.first.call(null,inst_41429);
var inst_41442 = cljs.core.nth.call(null,inst_41441,(0),null);
var inst_41443 = cljs.core.nth.call(null,inst_41441,(1),null);
var state_41530__$1 = (function (){var statearr_41533 = state_41530;
(statearr_41533[(8)] = inst_41442);

return statearr_41533;
})();
if(cljs.core.truth_(inst_41443)){
var statearr_41534_41620 = state_41530__$1;
(statearr_41534_41620[(1)] = (22));

} else {
var statearr_41535_41621 = state_41530__$1;
(statearr_41535_41621[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (27))){
var inst_41471 = (state_41530[(9)]);
var inst_41398 = (state_41530[(10)]);
var inst_41473 = (state_41530[(11)]);
var inst_41478 = (state_41530[(12)]);
var inst_41478__$1 = cljs.core._nth.call(null,inst_41471,inst_41473);
var inst_41479 = cljs.core.async.put_BANG_.call(null,inst_41478__$1,inst_41398,done);
var state_41530__$1 = (function (){var statearr_41536 = state_41530;
(statearr_41536[(12)] = inst_41478__$1);

return statearr_41536;
})();
if(cljs.core.truth_(inst_41479)){
var statearr_41537_41622 = state_41530__$1;
(statearr_41537_41622[(1)] = (30));

} else {
var statearr_41538_41623 = state_41530__$1;
(statearr_41538_41623[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (1))){
var state_41530__$1 = state_41530;
var statearr_41539_41624 = state_41530__$1;
(statearr_41539_41624[(2)] = null);

(statearr_41539_41624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (24))){
var inst_41429 = (state_41530[(7)]);
var inst_41448 = (state_41530[(2)]);
var inst_41449 = cljs.core.next.call(null,inst_41429);
var inst_41407 = inst_41449;
var inst_41408 = null;
var inst_41409 = (0);
var inst_41410 = (0);
var state_41530__$1 = (function (){var statearr_41540 = state_41530;
(statearr_41540[(13)] = inst_41407);

(statearr_41540[(14)] = inst_41408);

(statearr_41540[(15)] = inst_41410);

(statearr_41540[(16)] = inst_41409);

(statearr_41540[(17)] = inst_41448);

return statearr_41540;
})();
var statearr_41541_41625 = state_41530__$1;
(statearr_41541_41625[(2)] = null);

(statearr_41541_41625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (39))){
var state_41530__$1 = state_41530;
var statearr_41545_41626 = state_41530__$1;
(statearr_41545_41626[(2)] = null);

(statearr_41545_41626[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (4))){
var inst_41398 = (state_41530[(10)]);
var inst_41398__$1 = (state_41530[(2)]);
var inst_41399 = (inst_41398__$1 == null);
var state_41530__$1 = (function (){var statearr_41546 = state_41530;
(statearr_41546[(10)] = inst_41398__$1);

return statearr_41546;
})();
if(cljs.core.truth_(inst_41399)){
var statearr_41547_41627 = state_41530__$1;
(statearr_41547_41627[(1)] = (5));

} else {
var statearr_41548_41628 = state_41530__$1;
(statearr_41548_41628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (15))){
var inst_41407 = (state_41530[(13)]);
var inst_41408 = (state_41530[(14)]);
var inst_41410 = (state_41530[(15)]);
var inst_41409 = (state_41530[(16)]);
var inst_41425 = (state_41530[(2)]);
var inst_41426 = (inst_41410 + (1));
var tmp41542 = inst_41407;
var tmp41543 = inst_41408;
var tmp41544 = inst_41409;
var inst_41407__$1 = tmp41542;
var inst_41408__$1 = tmp41543;
var inst_41409__$1 = tmp41544;
var inst_41410__$1 = inst_41426;
var state_41530__$1 = (function (){var statearr_41549 = state_41530;
(statearr_41549[(13)] = inst_41407__$1);

(statearr_41549[(14)] = inst_41408__$1);

(statearr_41549[(15)] = inst_41410__$1);

(statearr_41549[(16)] = inst_41409__$1);

(statearr_41549[(18)] = inst_41425);

return statearr_41549;
})();
var statearr_41550_41629 = state_41530__$1;
(statearr_41550_41629[(2)] = null);

(statearr_41550_41629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (21))){
var inst_41452 = (state_41530[(2)]);
var state_41530__$1 = state_41530;
var statearr_41554_41630 = state_41530__$1;
(statearr_41554_41630[(2)] = inst_41452);

(statearr_41554_41630[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (31))){
var inst_41478 = (state_41530[(12)]);
var inst_41482 = done.call(null,null);
var inst_41483 = cljs.core.async.untap_STAR_.call(null,m,inst_41478);
var state_41530__$1 = (function (){var statearr_41555 = state_41530;
(statearr_41555[(19)] = inst_41482);

return statearr_41555;
})();
var statearr_41556_41631 = state_41530__$1;
(statearr_41556_41631[(2)] = inst_41483);

(statearr_41556_41631[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (32))){
var inst_41471 = (state_41530[(9)]);
var inst_41473 = (state_41530[(11)]);
var inst_41472 = (state_41530[(20)]);
var inst_41470 = (state_41530[(21)]);
var inst_41485 = (state_41530[(2)]);
var inst_41486 = (inst_41473 + (1));
var tmp41551 = inst_41471;
var tmp41552 = inst_41472;
var tmp41553 = inst_41470;
var inst_41470__$1 = tmp41553;
var inst_41471__$1 = tmp41551;
var inst_41472__$1 = tmp41552;
var inst_41473__$1 = inst_41486;
var state_41530__$1 = (function (){var statearr_41557 = state_41530;
(statearr_41557[(22)] = inst_41485);

(statearr_41557[(9)] = inst_41471__$1);

(statearr_41557[(11)] = inst_41473__$1);

(statearr_41557[(20)] = inst_41472__$1);

(statearr_41557[(21)] = inst_41470__$1);

return statearr_41557;
})();
var statearr_41558_41632 = state_41530__$1;
(statearr_41558_41632[(2)] = null);

(statearr_41558_41632[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (40))){
var inst_41498 = (state_41530[(23)]);
var inst_41502 = done.call(null,null);
var inst_41503 = cljs.core.async.untap_STAR_.call(null,m,inst_41498);
var state_41530__$1 = (function (){var statearr_41559 = state_41530;
(statearr_41559[(24)] = inst_41502);

return statearr_41559;
})();
var statearr_41560_41633 = state_41530__$1;
(statearr_41560_41633[(2)] = inst_41503);

(statearr_41560_41633[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (33))){
var inst_41489 = (state_41530[(25)]);
var inst_41491 = cljs.core.chunked_seq_QMARK_.call(null,inst_41489);
var state_41530__$1 = state_41530;
if(inst_41491){
var statearr_41561_41634 = state_41530__$1;
(statearr_41561_41634[(1)] = (36));

} else {
var statearr_41562_41635 = state_41530__$1;
(statearr_41562_41635[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (13))){
var inst_41419 = (state_41530[(26)]);
var inst_41422 = cljs.core.async.close_BANG_.call(null,inst_41419);
var state_41530__$1 = state_41530;
var statearr_41563_41636 = state_41530__$1;
(statearr_41563_41636[(2)] = inst_41422);

(statearr_41563_41636[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (22))){
var inst_41442 = (state_41530[(8)]);
var inst_41445 = cljs.core.async.close_BANG_.call(null,inst_41442);
var state_41530__$1 = state_41530;
var statearr_41564_41637 = state_41530__$1;
(statearr_41564_41637[(2)] = inst_41445);

(statearr_41564_41637[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (36))){
var inst_41489 = (state_41530[(25)]);
var inst_41493 = cljs.core.chunk_first.call(null,inst_41489);
var inst_41494 = cljs.core.chunk_rest.call(null,inst_41489);
var inst_41495 = cljs.core.count.call(null,inst_41493);
var inst_41470 = inst_41494;
var inst_41471 = inst_41493;
var inst_41472 = inst_41495;
var inst_41473 = (0);
var state_41530__$1 = (function (){var statearr_41565 = state_41530;
(statearr_41565[(9)] = inst_41471);

(statearr_41565[(11)] = inst_41473);

(statearr_41565[(20)] = inst_41472);

(statearr_41565[(21)] = inst_41470);

return statearr_41565;
})();
var statearr_41566_41638 = state_41530__$1;
(statearr_41566_41638[(2)] = null);

(statearr_41566_41638[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (41))){
var inst_41489 = (state_41530[(25)]);
var inst_41505 = (state_41530[(2)]);
var inst_41506 = cljs.core.next.call(null,inst_41489);
var inst_41470 = inst_41506;
var inst_41471 = null;
var inst_41472 = (0);
var inst_41473 = (0);
var state_41530__$1 = (function (){var statearr_41567 = state_41530;
(statearr_41567[(9)] = inst_41471);

(statearr_41567[(11)] = inst_41473);

(statearr_41567[(20)] = inst_41472);

(statearr_41567[(27)] = inst_41505);

(statearr_41567[(21)] = inst_41470);

return statearr_41567;
})();
var statearr_41568_41639 = state_41530__$1;
(statearr_41568_41639[(2)] = null);

(statearr_41568_41639[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (43))){
var state_41530__$1 = state_41530;
var statearr_41569_41640 = state_41530__$1;
(statearr_41569_41640[(2)] = null);

(statearr_41569_41640[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (29))){
var inst_41514 = (state_41530[(2)]);
var state_41530__$1 = state_41530;
var statearr_41570_41641 = state_41530__$1;
(statearr_41570_41641[(2)] = inst_41514);

(statearr_41570_41641[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (44))){
var inst_41523 = (state_41530[(2)]);
var state_41530__$1 = (function (){var statearr_41571 = state_41530;
(statearr_41571[(28)] = inst_41523);

return statearr_41571;
})();
var statearr_41572_41642 = state_41530__$1;
(statearr_41572_41642[(2)] = null);

(statearr_41572_41642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (6))){
var inst_41462 = (state_41530[(29)]);
var inst_41461 = cljs.core.deref.call(null,cs);
var inst_41462__$1 = cljs.core.keys.call(null,inst_41461);
var inst_41463 = cljs.core.count.call(null,inst_41462__$1);
var inst_41464 = cljs.core.reset_BANG_.call(null,dctr,inst_41463);
var inst_41469 = cljs.core.seq.call(null,inst_41462__$1);
var inst_41470 = inst_41469;
var inst_41471 = null;
var inst_41472 = (0);
var inst_41473 = (0);
var state_41530__$1 = (function (){var statearr_41573 = state_41530;
(statearr_41573[(9)] = inst_41471);

(statearr_41573[(30)] = inst_41464);

(statearr_41573[(11)] = inst_41473);

(statearr_41573[(29)] = inst_41462__$1);

(statearr_41573[(20)] = inst_41472);

(statearr_41573[(21)] = inst_41470);

return statearr_41573;
})();
var statearr_41574_41643 = state_41530__$1;
(statearr_41574_41643[(2)] = null);

(statearr_41574_41643[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (28))){
var inst_41489 = (state_41530[(25)]);
var inst_41470 = (state_41530[(21)]);
var inst_41489__$1 = cljs.core.seq.call(null,inst_41470);
var state_41530__$1 = (function (){var statearr_41575 = state_41530;
(statearr_41575[(25)] = inst_41489__$1);

return statearr_41575;
})();
if(inst_41489__$1){
var statearr_41576_41644 = state_41530__$1;
(statearr_41576_41644[(1)] = (33));

} else {
var statearr_41577_41645 = state_41530__$1;
(statearr_41577_41645[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (25))){
var inst_41473 = (state_41530[(11)]);
var inst_41472 = (state_41530[(20)]);
var inst_41475 = (inst_41473 < inst_41472);
var inst_41476 = inst_41475;
var state_41530__$1 = state_41530;
if(cljs.core.truth_(inst_41476)){
var statearr_41578_41646 = state_41530__$1;
(statearr_41578_41646[(1)] = (27));

} else {
var statearr_41579_41647 = state_41530__$1;
(statearr_41579_41647[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (34))){
var state_41530__$1 = state_41530;
var statearr_41580_41648 = state_41530__$1;
(statearr_41580_41648[(2)] = null);

(statearr_41580_41648[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (17))){
var state_41530__$1 = state_41530;
var statearr_41581_41649 = state_41530__$1;
(statearr_41581_41649[(2)] = null);

(statearr_41581_41649[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (3))){
var inst_41528 = (state_41530[(2)]);
var state_41530__$1 = state_41530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41530__$1,inst_41528);
} else {
if((state_val_41531 === (12))){
var inst_41457 = (state_41530[(2)]);
var state_41530__$1 = state_41530;
var statearr_41582_41650 = state_41530__$1;
(statearr_41582_41650[(2)] = inst_41457);

(statearr_41582_41650[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (2))){
var state_41530__$1 = state_41530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41530__$1,(4),ch);
} else {
if((state_val_41531 === (23))){
var state_41530__$1 = state_41530;
var statearr_41583_41651 = state_41530__$1;
(statearr_41583_41651[(2)] = null);

(statearr_41583_41651[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (35))){
var inst_41512 = (state_41530[(2)]);
var state_41530__$1 = state_41530;
var statearr_41584_41652 = state_41530__$1;
(statearr_41584_41652[(2)] = inst_41512);

(statearr_41584_41652[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (19))){
var inst_41429 = (state_41530[(7)]);
var inst_41433 = cljs.core.chunk_first.call(null,inst_41429);
var inst_41434 = cljs.core.chunk_rest.call(null,inst_41429);
var inst_41435 = cljs.core.count.call(null,inst_41433);
var inst_41407 = inst_41434;
var inst_41408 = inst_41433;
var inst_41409 = inst_41435;
var inst_41410 = (0);
var state_41530__$1 = (function (){var statearr_41585 = state_41530;
(statearr_41585[(13)] = inst_41407);

(statearr_41585[(14)] = inst_41408);

(statearr_41585[(15)] = inst_41410);

(statearr_41585[(16)] = inst_41409);

return statearr_41585;
})();
var statearr_41586_41653 = state_41530__$1;
(statearr_41586_41653[(2)] = null);

(statearr_41586_41653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (11))){
var inst_41429 = (state_41530[(7)]);
var inst_41407 = (state_41530[(13)]);
var inst_41429__$1 = cljs.core.seq.call(null,inst_41407);
var state_41530__$1 = (function (){var statearr_41587 = state_41530;
(statearr_41587[(7)] = inst_41429__$1);

return statearr_41587;
})();
if(inst_41429__$1){
var statearr_41588_41654 = state_41530__$1;
(statearr_41588_41654[(1)] = (16));

} else {
var statearr_41589_41655 = state_41530__$1;
(statearr_41589_41655[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (9))){
var inst_41459 = (state_41530[(2)]);
var state_41530__$1 = state_41530;
var statearr_41590_41656 = state_41530__$1;
(statearr_41590_41656[(2)] = inst_41459);

(statearr_41590_41656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (5))){
var inst_41405 = cljs.core.deref.call(null,cs);
var inst_41406 = cljs.core.seq.call(null,inst_41405);
var inst_41407 = inst_41406;
var inst_41408 = null;
var inst_41409 = (0);
var inst_41410 = (0);
var state_41530__$1 = (function (){var statearr_41591 = state_41530;
(statearr_41591[(13)] = inst_41407);

(statearr_41591[(14)] = inst_41408);

(statearr_41591[(15)] = inst_41410);

(statearr_41591[(16)] = inst_41409);

return statearr_41591;
})();
var statearr_41592_41657 = state_41530__$1;
(statearr_41592_41657[(2)] = null);

(statearr_41592_41657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (14))){
var state_41530__$1 = state_41530;
var statearr_41593_41658 = state_41530__$1;
(statearr_41593_41658[(2)] = null);

(statearr_41593_41658[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (45))){
var inst_41520 = (state_41530[(2)]);
var state_41530__$1 = state_41530;
var statearr_41594_41659 = state_41530__$1;
(statearr_41594_41659[(2)] = inst_41520);

(statearr_41594_41659[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (26))){
var inst_41462 = (state_41530[(29)]);
var inst_41516 = (state_41530[(2)]);
var inst_41517 = cljs.core.seq.call(null,inst_41462);
var state_41530__$1 = (function (){var statearr_41595 = state_41530;
(statearr_41595[(31)] = inst_41516);

return statearr_41595;
})();
if(inst_41517){
var statearr_41596_41660 = state_41530__$1;
(statearr_41596_41660[(1)] = (42));

} else {
var statearr_41597_41661 = state_41530__$1;
(statearr_41597_41661[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (16))){
var inst_41429 = (state_41530[(7)]);
var inst_41431 = cljs.core.chunked_seq_QMARK_.call(null,inst_41429);
var state_41530__$1 = state_41530;
if(inst_41431){
var statearr_41598_41662 = state_41530__$1;
(statearr_41598_41662[(1)] = (19));

} else {
var statearr_41599_41663 = state_41530__$1;
(statearr_41599_41663[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (38))){
var inst_41509 = (state_41530[(2)]);
var state_41530__$1 = state_41530;
var statearr_41600_41664 = state_41530__$1;
(statearr_41600_41664[(2)] = inst_41509);

(statearr_41600_41664[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (30))){
var state_41530__$1 = state_41530;
var statearr_41601_41665 = state_41530__$1;
(statearr_41601_41665[(2)] = null);

(statearr_41601_41665[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (10))){
var inst_41408 = (state_41530[(14)]);
var inst_41410 = (state_41530[(15)]);
var inst_41418 = cljs.core._nth.call(null,inst_41408,inst_41410);
var inst_41419 = cljs.core.nth.call(null,inst_41418,(0),null);
var inst_41420 = cljs.core.nth.call(null,inst_41418,(1),null);
var state_41530__$1 = (function (){var statearr_41602 = state_41530;
(statearr_41602[(26)] = inst_41419);

return statearr_41602;
})();
if(cljs.core.truth_(inst_41420)){
var statearr_41603_41666 = state_41530__$1;
(statearr_41603_41666[(1)] = (13));

} else {
var statearr_41604_41667 = state_41530__$1;
(statearr_41604_41667[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (18))){
var inst_41455 = (state_41530[(2)]);
var state_41530__$1 = state_41530;
var statearr_41605_41668 = state_41530__$1;
(statearr_41605_41668[(2)] = inst_41455);

(statearr_41605_41668[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (42))){
var state_41530__$1 = state_41530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41530__$1,(45),dchan);
} else {
if((state_val_41531 === (37))){
var inst_41498 = (state_41530[(23)]);
var inst_41398 = (state_41530[(10)]);
var inst_41489 = (state_41530[(25)]);
var inst_41498__$1 = cljs.core.first.call(null,inst_41489);
var inst_41499 = cljs.core.async.put_BANG_.call(null,inst_41498__$1,inst_41398,done);
var state_41530__$1 = (function (){var statearr_41606 = state_41530;
(statearr_41606[(23)] = inst_41498__$1);

return statearr_41606;
})();
if(cljs.core.truth_(inst_41499)){
var statearr_41607_41669 = state_41530__$1;
(statearr_41607_41669[(1)] = (39));

} else {
var statearr_41608_41670 = state_41530__$1;
(statearr_41608_41670[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41531 === (8))){
var inst_41410 = (state_41530[(15)]);
var inst_41409 = (state_41530[(16)]);
var inst_41412 = (inst_41410 < inst_41409);
var inst_41413 = inst_41412;
var state_41530__$1 = state_41530;
if(cljs.core.truth_(inst_41413)){
var statearr_41609_41671 = state_41530__$1;
(statearr_41609_41671[(1)] = (10));

} else {
var statearr_41610_41672 = state_41530__$1;
(statearr_41610_41672[(1)] = (11));

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
});})(c__40251__auto___41618,cs,m,dchan,dctr,done))
;
return ((function (switch__40137__auto__,c__40251__auto___41618,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__40138__auto__ = null;
var cljs$core$async$mult_$_state_machine__40138__auto____0 = (function (){
var statearr_41614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41614[(0)] = cljs$core$async$mult_$_state_machine__40138__auto__);

(statearr_41614[(1)] = (1));

return statearr_41614;
});
var cljs$core$async$mult_$_state_machine__40138__auto____1 = (function (state_41530){
while(true){
var ret_value__40139__auto__ = (function (){try{while(true){
var result__40140__auto__ = switch__40137__auto__.call(null,state_41530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40140__auto__;
}
break;
}
}catch (e41615){if((e41615 instanceof Object)){
var ex__40141__auto__ = e41615;
var statearr_41616_41673 = state_41530;
(statearr_41616_41673[(5)] = ex__40141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41674 = state_41530;
state_41530 = G__41674;
continue;
} else {
return ret_value__40139__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__40138__auto__ = function(state_41530){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__40138__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__40138__auto____1.call(this,state_41530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__40138__auto____0;
cljs$core$async$mult_$_state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__40138__auto____1;
return cljs$core$async$mult_$_state_machine__40138__auto__;
})()
;})(switch__40137__auto__,c__40251__auto___41618,cs,m,dchan,dctr,done))
})();
var state__40253__auto__ = (function (){var statearr_41617 = f__40252__auto__.call(null);
(statearr_41617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40251__auto___41618);

return statearr_41617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40253__auto__);
});})(c__40251__auto___41618,cs,m,dchan,dctr,done))
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
var args41675 = [];
var len__30169__auto___41678 = arguments.length;
var i__30170__auto___41679 = (0);
while(true){
if((i__30170__auto___41679 < len__30169__auto___41678)){
args41675.push((arguments[i__30170__auto___41679]));

var G__41680 = (i__30170__auto___41679 + (1));
i__30170__auto___41679 = G__41680;
continue;
} else {
}
break;
}

var G__41677 = args41675.length;
switch (G__41677) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41675.length)].join('')));

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
var x__29666__auto__ = (((m == null))?null:m);
var m__29667__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__29666__auto__)]);
if(!((m__29667__auto__ == null))){
return m__29667__auto__.call(null,m,ch);
} else {
var m__29667__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__29667__auto____$1 == null))){
return m__29667__auto____$1.call(null,m,ch);
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
var x__29666__auto__ = (((m == null))?null:m);
var m__29667__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__29666__auto__)]);
if(!((m__29667__auto__ == null))){
return m__29667__auto__.call(null,m,ch);
} else {
var m__29667__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__29667__auto____$1 == null))){
return m__29667__auto____$1.call(null,m,ch);
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
var x__29666__auto__ = (((m == null))?null:m);
var m__29667__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__29666__auto__)]);
if(!((m__29667__auto__ == null))){
return m__29667__auto__.call(null,m);
} else {
var m__29667__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__29667__auto____$1 == null))){
return m__29667__auto____$1.call(null,m);
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
var x__29666__auto__ = (((m == null))?null:m);
var m__29667__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__29666__auto__)]);
if(!((m__29667__auto__ == null))){
return m__29667__auto__.call(null,m,state_map);
} else {
var m__29667__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__29667__auto____$1 == null))){
return m__29667__auto____$1.call(null,m,state_map);
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
var x__29666__auto__ = (((m == null))?null:m);
var m__29667__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__29666__auto__)]);
if(!((m__29667__auto__ == null))){
return m__29667__auto__.call(null,m,mode);
} else {
var m__29667__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__29667__auto____$1 == null))){
return m__29667__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__30176__auto__ = [];
var len__30169__auto___41692 = arguments.length;
var i__30170__auto___41693 = (0);
while(true){
if((i__30170__auto___41693 < len__30169__auto___41692)){
args__30176__auto__.push((arguments[i__30170__auto___41693]));

var G__41694 = (i__30170__auto___41693 + (1));
i__30170__auto___41693 = G__41694;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((3) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30177__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__41686){
var map__41687 = p__41686;
var map__41687__$1 = ((((!((map__41687 == null)))?((((map__41687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41687.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41687):map__41687);
var opts = map__41687__$1;
var statearr_41689_41695 = state;
(statearr_41689_41695[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts.call(null,((function (map__41687,map__41687__$1,opts){
return (function (val){
var statearr_41690_41696 = state;
(statearr_41690_41696[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__41687,map__41687__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_41691_41697 = state;
(statearr_41691_41697[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq41682){
var G__41683 = cljs.core.first.call(null,seq41682);
var seq41682__$1 = cljs.core.next.call(null,seq41682);
var G__41684 = cljs.core.first.call(null,seq41682__$1);
var seq41682__$2 = cljs.core.next.call(null,seq41682__$1);
var G__41685 = cljs.core.first.call(null,seq41682__$2);
var seq41682__$3 = cljs.core.next.call(null,seq41682__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41683,G__41684,G__41685,seq41682__$3);
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
if(typeof cljs.core.async.t_cljs$core$async41865 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41865 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta41866){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta41866 = meta41866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41867,meta41866__$1){
var self__ = this;
var _41867__$1 = this;
return (new cljs.core.async.t_cljs$core$async41865(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta41866__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41865.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41867){
var self__ = this;
var _41867__$1 = this;
return self__.meta41866;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41865.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41865.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41865.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41865.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41865.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41865.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41865.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41865.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async41865.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta41866","meta41866",1524050022,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41865.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41865";

cljs.core.async.t_cljs$core$async41865.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__29605__auto__,writer__29606__auto__,opt__29607__auto__){
return cljs.core._write.call(null,writer__29606__auto__,"cljs.core.async/t_cljs$core$async41865");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async41865 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async41865(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta41866){
return (new cljs.core.async.t_cljs$core$async41865(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta41866));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async41865(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40251__auto___42032 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40251__auto___42032,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__40252__auto__ = (function (){var switch__40137__auto__ = ((function (c__40251__auto___42032,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_41969){
var state_val_41970 = (state_41969[(1)]);
if((state_val_41970 === (7))){
var inst_41884 = (state_41969[(2)]);
var state_41969__$1 = state_41969;
var statearr_41971_42033 = state_41969__$1;
(statearr_41971_42033[(2)] = inst_41884);

(statearr_41971_42033[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (20))){
var inst_41896 = (state_41969[(7)]);
var state_41969__$1 = state_41969;
var statearr_41972_42034 = state_41969__$1;
(statearr_41972_42034[(2)] = inst_41896);

(statearr_41972_42034[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (27))){
var state_41969__$1 = state_41969;
var statearr_41973_42035 = state_41969__$1;
(statearr_41973_42035[(2)] = null);

(statearr_41973_42035[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (1))){
var inst_41871 = (state_41969[(8)]);
var inst_41871__$1 = calc_state.call(null);
var inst_41873 = (inst_41871__$1 == null);
var inst_41874 = cljs.core.not.call(null,inst_41873);
var state_41969__$1 = (function (){var statearr_41974 = state_41969;
(statearr_41974[(8)] = inst_41871__$1);

return statearr_41974;
})();
if(inst_41874){
var statearr_41975_42036 = state_41969__$1;
(statearr_41975_42036[(1)] = (2));

} else {
var statearr_41976_42037 = state_41969__$1;
(statearr_41976_42037[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (24))){
var inst_41943 = (state_41969[(9)]);
var inst_41929 = (state_41969[(10)]);
var inst_41920 = (state_41969[(11)]);
var inst_41943__$1 = inst_41920.call(null,inst_41929);
var state_41969__$1 = (function (){var statearr_41977 = state_41969;
(statearr_41977[(9)] = inst_41943__$1);

return statearr_41977;
})();
if(cljs.core.truth_(inst_41943__$1)){
var statearr_41978_42038 = state_41969__$1;
(statearr_41978_42038[(1)] = (29));

} else {
var statearr_41979_42039 = state_41969__$1;
(statearr_41979_42039[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (4))){
var inst_41887 = (state_41969[(2)]);
var state_41969__$1 = state_41969;
if(cljs.core.truth_(inst_41887)){
var statearr_41980_42040 = state_41969__$1;
(statearr_41980_42040[(1)] = (8));

} else {
var statearr_41981_42041 = state_41969__$1;
(statearr_41981_42041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (15))){
var inst_41914 = (state_41969[(2)]);
var state_41969__$1 = state_41969;
if(cljs.core.truth_(inst_41914)){
var statearr_41982_42042 = state_41969__$1;
(statearr_41982_42042[(1)] = (19));

} else {
var statearr_41983_42043 = state_41969__$1;
(statearr_41983_42043[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (21))){
var inst_41919 = (state_41969[(12)]);
var inst_41919__$1 = (state_41969[(2)]);
var inst_41920 = cljs.core.get.call(null,inst_41919__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41921 = cljs.core.get.call(null,inst_41919__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41922 = cljs.core.get.call(null,inst_41919__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41969__$1 = (function (){var statearr_41984 = state_41969;
(statearr_41984[(13)] = inst_41921);

(statearr_41984[(11)] = inst_41920);

(statearr_41984[(12)] = inst_41919__$1);

return statearr_41984;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_41969__$1,(22),inst_41922);
} else {
if((state_val_41970 === (31))){
var inst_41951 = (state_41969[(2)]);
var state_41969__$1 = state_41969;
if(cljs.core.truth_(inst_41951)){
var statearr_41985_42044 = state_41969__$1;
(statearr_41985_42044[(1)] = (32));

} else {
var statearr_41986_42045 = state_41969__$1;
(statearr_41986_42045[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (32))){
var inst_41928 = (state_41969[(14)]);
var state_41969__$1 = state_41969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41969__$1,(35),out,inst_41928);
} else {
if((state_val_41970 === (33))){
var inst_41919 = (state_41969[(12)]);
var inst_41896 = inst_41919;
var state_41969__$1 = (function (){var statearr_41987 = state_41969;
(statearr_41987[(7)] = inst_41896);

return statearr_41987;
})();
var statearr_41988_42046 = state_41969__$1;
(statearr_41988_42046[(2)] = null);

(statearr_41988_42046[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (13))){
var inst_41896 = (state_41969[(7)]);
var inst_41903 = inst_41896.cljs$lang$protocol_mask$partition0$;
var inst_41904 = (inst_41903 & (64));
var inst_41905 = inst_41896.cljs$core$ISeq$;
var inst_41906 = (cljs.core.PROTOCOL_SENTINEL === inst_41905);
var inst_41907 = (inst_41904) || (inst_41906);
var state_41969__$1 = state_41969;
if(cljs.core.truth_(inst_41907)){
var statearr_41989_42047 = state_41969__$1;
(statearr_41989_42047[(1)] = (16));

} else {
var statearr_41990_42048 = state_41969__$1;
(statearr_41990_42048[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (22))){
var inst_41929 = (state_41969[(10)]);
var inst_41928 = (state_41969[(14)]);
var inst_41927 = (state_41969[(2)]);
var inst_41928__$1 = cljs.core.nth.call(null,inst_41927,(0),null);
var inst_41929__$1 = cljs.core.nth.call(null,inst_41927,(1),null);
var inst_41930 = (inst_41928__$1 == null);
var inst_41931 = cljs.core._EQ_.call(null,inst_41929__$1,change);
var inst_41932 = (inst_41930) || (inst_41931);
var state_41969__$1 = (function (){var statearr_41991 = state_41969;
(statearr_41991[(10)] = inst_41929__$1);

(statearr_41991[(14)] = inst_41928__$1);

return statearr_41991;
})();
if(cljs.core.truth_(inst_41932)){
var statearr_41992_42049 = state_41969__$1;
(statearr_41992_42049[(1)] = (23));

} else {
var statearr_41993_42050 = state_41969__$1;
(statearr_41993_42050[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (36))){
var inst_41919 = (state_41969[(12)]);
var inst_41896 = inst_41919;
var state_41969__$1 = (function (){var statearr_41994 = state_41969;
(statearr_41994[(7)] = inst_41896);

return statearr_41994;
})();
var statearr_41995_42051 = state_41969__$1;
(statearr_41995_42051[(2)] = null);

(statearr_41995_42051[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (29))){
var inst_41943 = (state_41969[(9)]);
var state_41969__$1 = state_41969;
var statearr_41996_42052 = state_41969__$1;
(statearr_41996_42052[(2)] = inst_41943);

(statearr_41996_42052[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (6))){
var state_41969__$1 = state_41969;
var statearr_41997_42053 = state_41969__$1;
(statearr_41997_42053[(2)] = false);

(statearr_41997_42053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (28))){
var inst_41939 = (state_41969[(2)]);
var inst_41940 = calc_state.call(null);
var inst_41896 = inst_41940;
var state_41969__$1 = (function (){var statearr_41998 = state_41969;
(statearr_41998[(7)] = inst_41896);

(statearr_41998[(15)] = inst_41939);

return statearr_41998;
})();
var statearr_41999_42054 = state_41969__$1;
(statearr_41999_42054[(2)] = null);

(statearr_41999_42054[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (25))){
var inst_41965 = (state_41969[(2)]);
var state_41969__$1 = state_41969;
var statearr_42000_42055 = state_41969__$1;
(statearr_42000_42055[(2)] = inst_41965);

(statearr_42000_42055[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (34))){
var inst_41963 = (state_41969[(2)]);
var state_41969__$1 = state_41969;
var statearr_42001_42056 = state_41969__$1;
(statearr_42001_42056[(2)] = inst_41963);

(statearr_42001_42056[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (17))){
var state_41969__$1 = state_41969;
var statearr_42002_42057 = state_41969__$1;
(statearr_42002_42057[(2)] = false);

(statearr_42002_42057[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (3))){
var state_41969__$1 = state_41969;
var statearr_42003_42058 = state_41969__$1;
(statearr_42003_42058[(2)] = false);

(statearr_42003_42058[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (12))){
var inst_41967 = (state_41969[(2)]);
var state_41969__$1 = state_41969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41969__$1,inst_41967);
} else {
if((state_val_41970 === (2))){
var inst_41871 = (state_41969[(8)]);
var inst_41876 = inst_41871.cljs$lang$protocol_mask$partition0$;
var inst_41877 = (inst_41876 & (64));
var inst_41878 = inst_41871.cljs$core$ISeq$;
var inst_41879 = (cljs.core.PROTOCOL_SENTINEL === inst_41878);
var inst_41880 = (inst_41877) || (inst_41879);
var state_41969__$1 = state_41969;
if(cljs.core.truth_(inst_41880)){
var statearr_42004_42059 = state_41969__$1;
(statearr_42004_42059[(1)] = (5));

} else {
var statearr_42005_42060 = state_41969__$1;
(statearr_42005_42060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (23))){
var inst_41928 = (state_41969[(14)]);
var inst_41934 = (inst_41928 == null);
var state_41969__$1 = state_41969;
if(cljs.core.truth_(inst_41934)){
var statearr_42006_42061 = state_41969__$1;
(statearr_42006_42061[(1)] = (26));

} else {
var statearr_42007_42062 = state_41969__$1;
(statearr_42007_42062[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (35))){
var inst_41954 = (state_41969[(2)]);
var state_41969__$1 = state_41969;
if(cljs.core.truth_(inst_41954)){
var statearr_42008_42063 = state_41969__$1;
(statearr_42008_42063[(1)] = (36));

} else {
var statearr_42009_42064 = state_41969__$1;
(statearr_42009_42064[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (19))){
var inst_41896 = (state_41969[(7)]);
var inst_41916 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41896);
var state_41969__$1 = state_41969;
var statearr_42010_42065 = state_41969__$1;
(statearr_42010_42065[(2)] = inst_41916);

(statearr_42010_42065[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (11))){
var inst_41896 = (state_41969[(7)]);
var inst_41900 = (inst_41896 == null);
var inst_41901 = cljs.core.not.call(null,inst_41900);
var state_41969__$1 = state_41969;
if(inst_41901){
var statearr_42011_42066 = state_41969__$1;
(statearr_42011_42066[(1)] = (13));

} else {
var statearr_42012_42067 = state_41969__$1;
(statearr_42012_42067[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (9))){
var inst_41871 = (state_41969[(8)]);
var state_41969__$1 = state_41969;
var statearr_42013_42068 = state_41969__$1;
(statearr_42013_42068[(2)] = inst_41871);

(statearr_42013_42068[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (5))){
var state_41969__$1 = state_41969;
var statearr_42014_42069 = state_41969__$1;
(statearr_42014_42069[(2)] = true);

(statearr_42014_42069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (14))){
var state_41969__$1 = state_41969;
var statearr_42015_42070 = state_41969__$1;
(statearr_42015_42070[(2)] = false);

(statearr_42015_42070[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (26))){
var inst_41929 = (state_41969[(10)]);
var inst_41936 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_41929);
var state_41969__$1 = state_41969;
var statearr_42016_42071 = state_41969__$1;
(statearr_42016_42071[(2)] = inst_41936);

(statearr_42016_42071[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (16))){
var state_41969__$1 = state_41969;
var statearr_42017_42072 = state_41969__$1;
(statearr_42017_42072[(2)] = true);

(statearr_42017_42072[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (38))){
var inst_41959 = (state_41969[(2)]);
var state_41969__$1 = state_41969;
var statearr_42018_42073 = state_41969__$1;
(statearr_42018_42073[(2)] = inst_41959);

(statearr_42018_42073[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (30))){
var inst_41921 = (state_41969[(13)]);
var inst_41929 = (state_41969[(10)]);
var inst_41920 = (state_41969[(11)]);
var inst_41946 = cljs.core.empty_QMARK_.call(null,inst_41920);
var inst_41947 = inst_41921.call(null,inst_41929);
var inst_41948 = cljs.core.not.call(null,inst_41947);
var inst_41949 = (inst_41946) && (inst_41948);
var state_41969__$1 = state_41969;
var statearr_42019_42074 = state_41969__$1;
(statearr_42019_42074[(2)] = inst_41949);

(statearr_42019_42074[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (10))){
var inst_41871 = (state_41969[(8)]);
var inst_41892 = (state_41969[(2)]);
var inst_41893 = cljs.core.get.call(null,inst_41892,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41894 = cljs.core.get.call(null,inst_41892,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41895 = cljs.core.get.call(null,inst_41892,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_41896 = inst_41871;
var state_41969__$1 = (function (){var statearr_42020 = state_41969;
(statearr_42020[(16)] = inst_41894);

(statearr_42020[(17)] = inst_41893);

(statearr_42020[(18)] = inst_41895);

(statearr_42020[(7)] = inst_41896);

return statearr_42020;
})();
var statearr_42021_42075 = state_41969__$1;
(statearr_42021_42075[(2)] = null);

(statearr_42021_42075[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (18))){
var inst_41911 = (state_41969[(2)]);
var state_41969__$1 = state_41969;
var statearr_42022_42076 = state_41969__$1;
(statearr_42022_42076[(2)] = inst_41911);

(statearr_42022_42076[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (37))){
var state_41969__$1 = state_41969;
var statearr_42023_42077 = state_41969__$1;
(statearr_42023_42077[(2)] = null);

(statearr_42023_42077[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41970 === (8))){
var inst_41871 = (state_41969[(8)]);
var inst_41889 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41871);
var state_41969__$1 = state_41969;
var statearr_42024_42078 = state_41969__$1;
(statearr_42024_42078[(2)] = inst_41889);

(statearr_42024_42078[(1)] = (10));


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
});})(c__40251__auto___42032,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__40137__auto__,c__40251__auto___42032,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__40138__auto__ = null;
var cljs$core$async$mix_$_state_machine__40138__auto____0 = (function (){
var statearr_42028 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42028[(0)] = cljs$core$async$mix_$_state_machine__40138__auto__);

(statearr_42028[(1)] = (1));

return statearr_42028;
});
var cljs$core$async$mix_$_state_machine__40138__auto____1 = (function (state_41969){
while(true){
var ret_value__40139__auto__ = (function (){try{while(true){
var result__40140__auto__ = switch__40137__auto__.call(null,state_41969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40140__auto__;
}
break;
}
}catch (e42029){if((e42029 instanceof Object)){
var ex__40141__auto__ = e42029;
var statearr_42030_42079 = state_41969;
(statearr_42030_42079[(5)] = ex__40141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42080 = state_41969;
state_41969 = G__42080;
continue;
} else {
return ret_value__40139__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__40138__auto__ = function(state_41969){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__40138__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__40138__auto____1.call(this,state_41969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__40138__auto____0;
cljs$core$async$mix_$_state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__40138__auto____1;
return cljs$core$async$mix_$_state_machine__40138__auto__;
})()
;})(switch__40137__auto__,c__40251__auto___42032,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__40253__auto__ = (function (){var statearr_42031 = f__40252__auto__.call(null);
(statearr_42031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40251__auto___42032);

return statearr_42031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40253__auto__);
});})(c__40251__auto___42032,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__29666__auto__ = (((p == null))?null:p);
var m__29667__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__29666__auto__)]);
if(!((m__29667__auto__ == null))){
return m__29667__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__29667__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__29667__auto____$1 == null))){
return m__29667__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__29666__auto__ = (((p == null))?null:p);
var m__29667__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__29666__auto__)]);
if(!((m__29667__auto__ == null))){
return m__29667__auto__.call(null,p,v,ch);
} else {
var m__29667__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__29667__auto____$1 == null))){
return m__29667__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args42081 = [];
var len__30169__auto___42084 = arguments.length;
var i__30170__auto___42085 = (0);
while(true){
if((i__30170__auto___42085 < len__30169__auto___42084)){
args42081.push((arguments[i__30170__auto___42085]));

var G__42086 = (i__30170__auto___42085 + (1));
i__30170__auto___42085 = G__42086;
continue;
} else {
}
break;
}

var G__42083 = args42081.length;
switch (G__42083) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42081.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__29666__auto__ = (((p == null))?null:p);
var m__29667__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29666__auto__)]);
if(!((m__29667__auto__ == null))){
return m__29667__auto__.call(null,p);
} else {
var m__29667__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29667__auto____$1 == null))){
return m__29667__auto____$1.call(null,p);
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
var x__29666__auto__ = (((p == null))?null:p);
var m__29667__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29666__auto__)]);
if(!((m__29667__auto__ == null))){
return m__29667__auto__.call(null,p,v);
} else {
var m__29667__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29667__auto____$1 == null))){
return m__29667__auto____$1.call(null,p,v);
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
var args42089 = [];
var len__30169__auto___42214 = arguments.length;
var i__30170__auto___42215 = (0);
while(true){
if((i__30170__auto___42215 < len__30169__auto___42214)){
args42089.push((arguments[i__30170__auto___42215]));

var G__42216 = (i__30170__auto___42215 + (1));
i__30170__auto___42215 = G__42216;
continue;
} else {
}
break;
}

var G__42091 = args42089.length;
switch (G__42091) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42089.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28948__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28948__auto__)){
return or__28948__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28948__auto__,mults){
return (function (p1__42088_SHARP_){
if(cljs.core.truth_(p1__42088_SHARP_.call(null,topic))){
return p1__42088_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__42088_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28948__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async42092 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42092 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42093){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42093 = meta42093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42094,meta42093__$1){
var self__ = this;
var _42094__$1 = this;
return (new cljs.core.async.t_cljs$core$async42092(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42093__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42092.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42094){
var self__ = this;
var _42094__$1 = this;
return self__.meta42093;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42092.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42092.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42092.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42092.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42092.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6753__auto__)){
var m = temp__6753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42092.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42092.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42092.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42093","meta42093",-876032516,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42092.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42092.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42092";

cljs.core.async.t_cljs$core$async42092.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__29605__auto__,writer__29606__auto__,opt__29607__auto__){
return cljs.core._write.call(null,writer__29606__auto__,"cljs.core.async/t_cljs$core$async42092");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async42092 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async42092(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42093){
return (new cljs.core.async.t_cljs$core$async42092(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42093));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async42092(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40251__auto___42218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40251__auto___42218,mults,ensure_mult,p){
return (function (){
var f__40252__auto__ = (function (){var switch__40137__auto__ = ((function (c__40251__auto___42218,mults,ensure_mult,p){
return (function (state_42166){
var state_val_42167 = (state_42166[(1)]);
if((state_val_42167 === (7))){
var inst_42162 = (state_42166[(2)]);
var state_42166__$1 = state_42166;
var statearr_42168_42219 = state_42166__$1;
(statearr_42168_42219[(2)] = inst_42162);

(statearr_42168_42219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (20))){
var state_42166__$1 = state_42166;
var statearr_42169_42220 = state_42166__$1;
(statearr_42169_42220[(2)] = null);

(statearr_42169_42220[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (1))){
var state_42166__$1 = state_42166;
var statearr_42170_42221 = state_42166__$1;
(statearr_42170_42221[(2)] = null);

(statearr_42170_42221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (24))){
var inst_42145 = (state_42166[(7)]);
var inst_42154 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_42145);
var state_42166__$1 = state_42166;
var statearr_42171_42222 = state_42166__$1;
(statearr_42171_42222[(2)] = inst_42154);

(statearr_42171_42222[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (4))){
var inst_42097 = (state_42166[(8)]);
var inst_42097__$1 = (state_42166[(2)]);
var inst_42098 = (inst_42097__$1 == null);
var state_42166__$1 = (function (){var statearr_42172 = state_42166;
(statearr_42172[(8)] = inst_42097__$1);

return statearr_42172;
})();
if(cljs.core.truth_(inst_42098)){
var statearr_42173_42223 = state_42166__$1;
(statearr_42173_42223[(1)] = (5));

} else {
var statearr_42174_42224 = state_42166__$1;
(statearr_42174_42224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (15))){
var inst_42139 = (state_42166[(2)]);
var state_42166__$1 = state_42166;
var statearr_42175_42225 = state_42166__$1;
(statearr_42175_42225[(2)] = inst_42139);

(statearr_42175_42225[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (21))){
var inst_42159 = (state_42166[(2)]);
var state_42166__$1 = (function (){var statearr_42176 = state_42166;
(statearr_42176[(9)] = inst_42159);

return statearr_42176;
})();
var statearr_42177_42226 = state_42166__$1;
(statearr_42177_42226[(2)] = null);

(statearr_42177_42226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (13))){
var inst_42121 = (state_42166[(10)]);
var inst_42123 = cljs.core.chunked_seq_QMARK_.call(null,inst_42121);
var state_42166__$1 = state_42166;
if(inst_42123){
var statearr_42178_42227 = state_42166__$1;
(statearr_42178_42227[(1)] = (16));

} else {
var statearr_42179_42228 = state_42166__$1;
(statearr_42179_42228[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (22))){
var inst_42151 = (state_42166[(2)]);
var state_42166__$1 = state_42166;
if(cljs.core.truth_(inst_42151)){
var statearr_42180_42229 = state_42166__$1;
(statearr_42180_42229[(1)] = (23));

} else {
var statearr_42181_42230 = state_42166__$1;
(statearr_42181_42230[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (6))){
var inst_42147 = (state_42166[(11)]);
var inst_42097 = (state_42166[(8)]);
var inst_42145 = (state_42166[(7)]);
var inst_42145__$1 = topic_fn.call(null,inst_42097);
var inst_42146 = cljs.core.deref.call(null,mults);
var inst_42147__$1 = cljs.core.get.call(null,inst_42146,inst_42145__$1);
var state_42166__$1 = (function (){var statearr_42182 = state_42166;
(statearr_42182[(11)] = inst_42147__$1);

(statearr_42182[(7)] = inst_42145__$1);

return statearr_42182;
})();
if(cljs.core.truth_(inst_42147__$1)){
var statearr_42183_42231 = state_42166__$1;
(statearr_42183_42231[(1)] = (19));

} else {
var statearr_42184_42232 = state_42166__$1;
(statearr_42184_42232[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (25))){
var inst_42156 = (state_42166[(2)]);
var state_42166__$1 = state_42166;
var statearr_42185_42233 = state_42166__$1;
(statearr_42185_42233[(2)] = inst_42156);

(statearr_42185_42233[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (17))){
var inst_42121 = (state_42166[(10)]);
var inst_42130 = cljs.core.first.call(null,inst_42121);
var inst_42131 = cljs.core.async.muxch_STAR_.call(null,inst_42130);
var inst_42132 = cljs.core.async.close_BANG_.call(null,inst_42131);
var inst_42133 = cljs.core.next.call(null,inst_42121);
var inst_42107 = inst_42133;
var inst_42108 = null;
var inst_42109 = (0);
var inst_42110 = (0);
var state_42166__$1 = (function (){var statearr_42186 = state_42166;
(statearr_42186[(12)] = inst_42132);

(statearr_42186[(13)] = inst_42109);

(statearr_42186[(14)] = inst_42108);

(statearr_42186[(15)] = inst_42110);

(statearr_42186[(16)] = inst_42107);

return statearr_42186;
})();
var statearr_42187_42234 = state_42166__$1;
(statearr_42187_42234[(2)] = null);

(statearr_42187_42234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (3))){
var inst_42164 = (state_42166[(2)]);
var state_42166__$1 = state_42166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42166__$1,inst_42164);
} else {
if((state_val_42167 === (12))){
var inst_42141 = (state_42166[(2)]);
var state_42166__$1 = state_42166;
var statearr_42188_42235 = state_42166__$1;
(statearr_42188_42235[(2)] = inst_42141);

(statearr_42188_42235[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (2))){
var state_42166__$1 = state_42166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42166__$1,(4),ch);
} else {
if((state_val_42167 === (23))){
var state_42166__$1 = state_42166;
var statearr_42189_42236 = state_42166__$1;
(statearr_42189_42236[(2)] = null);

(statearr_42189_42236[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (19))){
var inst_42147 = (state_42166[(11)]);
var inst_42097 = (state_42166[(8)]);
var inst_42149 = cljs.core.async.muxch_STAR_.call(null,inst_42147);
var state_42166__$1 = state_42166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42166__$1,(22),inst_42149,inst_42097);
} else {
if((state_val_42167 === (11))){
var inst_42107 = (state_42166[(16)]);
var inst_42121 = (state_42166[(10)]);
var inst_42121__$1 = cljs.core.seq.call(null,inst_42107);
var state_42166__$1 = (function (){var statearr_42190 = state_42166;
(statearr_42190[(10)] = inst_42121__$1);

return statearr_42190;
})();
if(inst_42121__$1){
var statearr_42191_42237 = state_42166__$1;
(statearr_42191_42237[(1)] = (13));

} else {
var statearr_42192_42238 = state_42166__$1;
(statearr_42192_42238[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (9))){
var inst_42143 = (state_42166[(2)]);
var state_42166__$1 = state_42166;
var statearr_42193_42239 = state_42166__$1;
(statearr_42193_42239[(2)] = inst_42143);

(statearr_42193_42239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (5))){
var inst_42104 = cljs.core.deref.call(null,mults);
var inst_42105 = cljs.core.vals.call(null,inst_42104);
var inst_42106 = cljs.core.seq.call(null,inst_42105);
var inst_42107 = inst_42106;
var inst_42108 = null;
var inst_42109 = (0);
var inst_42110 = (0);
var state_42166__$1 = (function (){var statearr_42194 = state_42166;
(statearr_42194[(13)] = inst_42109);

(statearr_42194[(14)] = inst_42108);

(statearr_42194[(15)] = inst_42110);

(statearr_42194[(16)] = inst_42107);

return statearr_42194;
})();
var statearr_42195_42240 = state_42166__$1;
(statearr_42195_42240[(2)] = null);

(statearr_42195_42240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (14))){
var state_42166__$1 = state_42166;
var statearr_42199_42241 = state_42166__$1;
(statearr_42199_42241[(2)] = null);

(statearr_42199_42241[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (16))){
var inst_42121 = (state_42166[(10)]);
var inst_42125 = cljs.core.chunk_first.call(null,inst_42121);
var inst_42126 = cljs.core.chunk_rest.call(null,inst_42121);
var inst_42127 = cljs.core.count.call(null,inst_42125);
var inst_42107 = inst_42126;
var inst_42108 = inst_42125;
var inst_42109 = inst_42127;
var inst_42110 = (0);
var state_42166__$1 = (function (){var statearr_42200 = state_42166;
(statearr_42200[(13)] = inst_42109);

(statearr_42200[(14)] = inst_42108);

(statearr_42200[(15)] = inst_42110);

(statearr_42200[(16)] = inst_42107);

return statearr_42200;
})();
var statearr_42201_42242 = state_42166__$1;
(statearr_42201_42242[(2)] = null);

(statearr_42201_42242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (10))){
var inst_42109 = (state_42166[(13)]);
var inst_42108 = (state_42166[(14)]);
var inst_42110 = (state_42166[(15)]);
var inst_42107 = (state_42166[(16)]);
var inst_42115 = cljs.core._nth.call(null,inst_42108,inst_42110);
var inst_42116 = cljs.core.async.muxch_STAR_.call(null,inst_42115);
var inst_42117 = cljs.core.async.close_BANG_.call(null,inst_42116);
var inst_42118 = (inst_42110 + (1));
var tmp42196 = inst_42109;
var tmp42197 = inst_42108;
var tmp42198 = inst_42107;
var inst_42107__$1 = tmp42198;
var inst_42108__$1 = tmp42197;
var inst_42109__$1 = tmp42196;
var inst_42110__$1 = inst_42118;
var state_42166__$1 = (function (){var statearr_42202 = state_42166;
(statearr_42202[(13)] = inst_42109__$1);

(statearr_42202[(14)] = inst_42108__$1);

(statearr_42202[(15)] = inst_42110__$1);

(statearr_42202[(16)] = inst_42107__$1);

(statearr_42202[(17)] = inst_42117);

return statearr_42202;
})();
var statearr_42203_42243 = state_42166__$1;
(statearr_42203_42243[(2)] = null);

(statearr_42203_42243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (18))){
var inst_42136 = (state_42166[(2)]);
var state_42166__$1 = state_42166;
var statearr_42204_42244 = state_42166__$1;
(statearr_42204_42244[(2)] = inst_42136);

(statearr_42204_42244[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42167 === (8))){
var inst_42109 = (state_42166[(13)]);
var inst_42110 = (state_42166[(15)]);
var inst_42112 = (inst_42110 < inst_42109);
var inst_42113 = inst_42112;
var state_42166__$1 = state_42166;
if(cljs.core.truth_(inst_42113)){
var statearr_42205_42245 = state_42166__$1;
(statearr_42205_42245[(1)] = (10));

} else {
var statearr_42206_42246 = state_42166__$1;
(statearr_42206_42246[(1)] = (11));

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
});})(c__40251__auto___42218,mults,ensure_mult,p))
;
return ((function (switch__40137__auto__,c__40251__auto___42218,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__40138__auto__ = null;
var cljs$core$async$state_machine__40138__auto____0 = (function (){
var statearr_42210 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42210[(0)] = cljs$core$async$state_machine__40138__auto__);

(statearr_42210[(1)] = (1));

return statearr_42210;
});
var cljs$core$async$state_machine__40138__auto____1 = (function (state_42166){
while(true){
var ret_value__40139__auto__ = (function (){try{while(true){
var result__40140__auto__ = switch__40137__auto__.call(null,state_42166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40140__auto__;
}
break;
}
}catch (e42211){if((e42211 instanceof Object)){
var ex__40141__auto__ = e42211;
var statearr_42212_42247 = state_42166;
(statearr_42212_42247[(5)] = ex__40141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42248 = state_42166;
state_42166 = G__42248;
continue;
} else {
return ret_value__40139__auto__;
}
break;
}
});
cljs$core$async$state_machine__40138__auto__ = function(state_42166){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40138__auto____1.call(this,state_42166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40138__auto____0;
cljs$core$async$state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40138__auto____1;
return cljs$core$async$state_machine__40138__auto__;
})()
;})(switch__40137__auto__,c__40251__auto___42218,mults,ensure_mult,p))
})();
var state__40253__auto__ = (function (){var statearr_42213 = f__40252__auto__.call(null);
(statearr_42213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40251__auto___42218);

return statearr_42213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40253__auto__);
});})(c__40251__auto___42218,mults,ensure_mult,p))
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
var args42249 = [];
var len__30169__auto___42252 = arguments.length;
var i__30170__auto___42253 = (0);
while(true){
if((i__30170__auto___42253 < len__30169__auto___42252)){
args42249.push((arguments[i__30170__auto___42253]));

var G__42254 = (i__30170__auto___42253 + (1));
i__30170__auto___42253 = G__42254;
continue;
} else {
}
break;
}

var G__42251 = args42249.length;
switch (G__42251) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42249.length)].join('')));

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
var args42256 = [];
var len__30169__auto___42259 = arguments.length;
var i__30170__auto___42260 = (0);
while(true){
if((i__30170__auto___42260 < len__30169__auto___42259)){
args42256.push((arguments[i__30170__auto___42260]));

var G__42261 = (i__30170__auto___42260 + (1));
i__30170__auto___42260 = G__42261;
continue;
} else {
}
break;
}

var G__42258 = args42256.length;
switch (G__42258) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42256.length)].join('')));

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
var args42263 = [];
var len__30169__auto___42334 = arguments.length;
var i__30170__auto___42335 = (0);
while(true){
if((i__30170__auto___42335 < len__30169__auto___42334)){
args42263.push((arguments[i__30170__auto___42335]));

var G__42336 = (i__30170__auto___42335 + (1));
i__30170__auto___42335 = G__42336;
continue;
} else {
}
break;
}

var G__42265 = args42263.length;
switch (G__42265) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42263.length)].join('')));

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
var c__40251__auto___42338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40251__auto___42338,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__40252__auto__ = (function (){var switch__40137__auto__ = ((function (c__40251__auto___42338,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42304){
var state_val_42305 = (state_42304[(1)]);
if((state_val_42305 === (7))){
var state_42304__$1 = state_42304;
var statearr_42306_42339 = state_42304__$1;
(statearr_42306_42339[(2)] = null);

(statearr_42306_42339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42305 === (1))){
var state_42304__$1 = state_42304;
var statearr_42307_42340 = state_42304__$1;
(statearr_42307_42340[(2)] = null);

(statearr_42307_42340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42305 === (4))){
var inst_42268 = (state_42304[(7)]);
var inst_42270 = (inst_42268 < cnt);
var state_42304__$1 = state_42304;
if(cljs.core.truth_(inst_42270)){
var statearr_42308_42341 = state_42304__$1;
(statearr_42308_42341[(1)] = (6));

} else {
var statearr_42309_42342 = state_42304__$1;
(statearr_42309_42342[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42305 === (15))){
var inst_42300 = (state_42304[(2)]);
var state_42304__$1 = state_42304;
var statearr_42310_42343 = state_42304__$1;
(statearr_42310_42343[(2)] = inst_42300);

(statearr_42310_42343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42305 === (13))){
var inst_42293 = cljs.core.async.close_BANG_.call(null,out);
var state_42304__$1 = state_42304;
var statearr_42311_42344 = state_42304__$1;
(statearr_42311_42344[(2)] = inst_42293);

(statearr_42311_42344[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42305 === (6))){
var state_42304__$1 = state_42304;
var statearr_42312_42345 = state_42304__$1;
(statearr_42312_42345[(2)] = null);

(statearr_42312_42345[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42305 === (3))){
var inst_42302 = (state_42304[(2)]);
var state_42304__$1 = state_42304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42304__$1,inst_42302);
} else {
if((state_val_42305 === (12))){
var inst_42290 = (state_42304[(8)]);
var inst_42290__$1 = (state_42304[(2)]);
var inst_42291 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_42290__$1);
var state_42304__$1 = (function (){var statearr_42313 = state_42304;
(statearr_42313[(8)] = inst_42290__$1);

return statearr_42313;
})();
if(cljs.core.truth_(inst_42291)){
var statearr_42314_42346 = state_42304__$1;
(statearr_42314_42346[(1)] = (13));

} else {
var statearr_42315_42347 = state_42304__$1;
(statearr_42315_42347[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42305 === (2))){
var inst_42267 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_42268 = (0);
var state_42304__$1 = (function (){var statearr_42316 = state_42304;
(statearr_42316[(9)] = inst_42267);

(statearr_42316[(7)] = inst_42268);

return statearr_42316;
})();
var statearr_42317_42348 = state_42304__$1;
(statearr_42317_42348[(2)] = null);

(statearr_42317_42348[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42305 === (11))){
var inst_42268 = (state_42304[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42304,(10),Object,null,(9));
var inst_42277 = chs__$1.call(null,inst_42268);
var inst_42278 = done.call(null,inst_42268);
var inst_42279 = cljs.core.async.take_BANG_.call(null,inst_42277,inst_42278);
var state_42304__$1 = state_42304;
var statearr_42318_42349 = state_42304__$1;
(statearr_42318_42349[(2)] = inst_42279);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42304__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42305 === (9))){
var inst_42268 = (state_42304[(7)]);
var inst_42281 = (state_42304[(2)]);
var inst_42282 = (inst_42268 + (1));
var inst_42268__$1 = inst_42282;
var state_42304__$1 = (function (){var statearr_42319 = state_42304;
(statearr_42319[(10)] = inst_42281);

(statearr_42319[(7)] = inst_42268__$1);

return statearr_42319;
})();
var statearr_42320_42350 = state_42304__$1;
(statearr_42320_42350[(2)] = null);

(statearr_42320_42350[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42305 === (5))){
var inst_42288 = (state_42304[(2)]);
var state_42304__$1 = (function (){var statearr_42321 = state_42304;
(statearr_42321[(11)] = inst_42288);

return statearr_42321;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42304__$1,(12),dchan);
} else {
if((state_val_42305 === (14))){
var inst_42290 = (state_42304[(8)]);
var inst_42295 = cljs.core.apply.call(null,f,inst_42290);
var state_42304__$1 = state_42304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42304__$1,(16),out,inst_42295);
} else {
if((state_val_42305 === (16))){
var inst_42297 = (state_42304[(2)]);
var state_42304__$1 = (function (){var statearr_42322 = state_42304;
(statearr_42322[(12)] = inst_42297);

return statearr_42322;
})();
var statearr_42323_42351 = state_42304__$1;
(statearr_42323_42351[(2)] = null);

(statearr_42323_42351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42305 === (10))){
var inst_42272 = (state_42304[(2)]);
var inst_42273 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_42304__$1 = (function (){var statearr_42324 = state_42304;
(statearr_42324[(13)] = inst_42272);

return statearr_42324;
})();
var statearr_42325_42352 = state_42304__$1;
(statearr_42325_42352[(2)] = inst_42273);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42304__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42305 === (8))){
var inst_42286 = (state_42304[(2)]);
var state_42304__$1 = state_42304;
var statearr_42326_42353 = state_42304__$1;
(statearr_42326_42353[(2)] = inst_42286);

(statearr_42326_42353[(1)] = (5));


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
});})(c__40251__auto___42338,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__40137__auto__,c__40251__auto___42338,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__40138__auto__ = null;
var cljs$core$async$state_machine__40138__auto____0 = (function (){
var statearr_42330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42330[(0)] = cljs$core$async$state_machine__40138__auto__);

(statearr_42330[(1)] = (1));

return statearr_42330;
});
var cljs$core$async$state_machine__40138__auto____1 = (function (state_42304){
while(true){
var ret_value__40139__auto__ = (function (){try{while(true){
var result__40140__auto__ = switch__40137__auto__.call(null,state_42304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40140__auto__;
}
break;
}
}catch (e42331){if((e42331 instanceof Object)){
var ex__40141__auto__ = e42331;
var statearr_42332_42354 = state_42304;
(statearr_42332_42354[(5)] = ex__40141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42355 = state_42304;
state_42304 = G__42355;
continue;
} else {
return ret_value__40139__auto__;
}
break;
}
});
cljs$core$async$state_machine__40138__auto__ = function(state_42304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40138__auto____1.call(this,state_42304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40138__auto____0;
cljs$core$async$state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40138__auto____1;
return cljs$core$async$state_machine__40138__auto__;
})()
;})(switch__40137__auto__,c__40251__auto___42338,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__40253__auto__ = (function (){var statearr_42333 = f__40252__auto__.call(null);
(statearr_42333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40251__auto___42338);

return statearr_42333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40253__auto__);
});})(c__40251__auto___42338,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args42357 = [];
var len__30169__auto___42415 = arguments.length;
var i__30170__auto___42416 = (0);
while(true){
if((i__30170__auto___42416 < len__30169__auto___42415)){
args42357.push((arguments[i__30170__auto___42416]));

var G__42417 = (i__30170__auto___42416 + (1));
i__30170__auto___42416 = G__42417;
continue;
} else {
}
break;
}

var G__42359 = args42357.length;
switch (G__42359) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42357.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40251__auto___42419 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40251__auto___42419,out){
return (function (){
var f__40252__auto__ = (function (){var switch__40137__auto__ = ((function (c__40251__auto___42419,out){
return (function (state_42391){
var state_val_42392 = (state_42391[(1)]);
if((state_val_42392 === (7))){
var inst_42371 = (state_42391[(7)]);
var inst_42370 = (state_42391[(8)]);
var inst_42370__$1 = (state_42391[(2)]);
var inst_42371__$1 = cljs.core.nth.call(null,inst_42370__$1,(0),null);
var inst_42372 = cljs.core.nth.call(null,inst_42370__$1,(1),null);
var inst_42373 = (inst_42371__$1 == null);
var state_42391__$1 = (function (){var statearr_42393 = state_42391;
(statearr_42393[(7)] = inst_42371__$1);

(statearr_42393[(9)] = inst_42372);

(statearr_42393[(8)] = inst_42370__$1);

return statearr_42393;
})();
if(cljs.core.truth_(inst_42373)){
var statearr_42394_42420 = state_42391__$1;
(statearr_42394_42420[(1)] = (8));

} else {
var statearr_42395_42421 = state_42391__$1;
(statearr_42395_42421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42392 === (1))){
var inst_42360 = cljs.core.vec.call(null,chs);
var inst_42361 = inst_42360;
var state_42391__$1 = (function (){var statearr_42396 = state_42391;
(statearr_42396[(10)] = inst_42361);

return statearr_42396;
})();
var statearr_42397_42422 = state_42391__$1;
(statearr_42397_42422[(2)] = null);

(statearr_42397_42422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42392 === (4))){
var inst_42361 = (state_42391[(10)]);
var state_42391__$1 = state_42391;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42391__$1,(7),inst_42361);
} else {
if((state_val_42392 === (6))){
var inst_42387 = (state_42391[(2)]);
var state_42391__$1 = state_42391;
var statearr_42398_42423 = state_42391__$1;
(statearr_42398_42423[(2)] = inst_42387);

(statearr_42398_42423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42392 === (3))){
var inst_42389 = (state_42391[(2)]);
var state_42391__$1 = state_42391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42391__$1,inst_42389);
} else {
if((state_val_42392 === (2))){
var inst_42361 = (state_42391[(10)]);
var inst_42363 = cljs.core.count.call(null,inst_42361);
var inst_42364 = (inst_42363 > (0));
var state_42391__$1 = state_42391;
if(cljs.core.truth_(inst_42364)){
var statearr_42400_42424 = state_42391__$1;
(statearr_42400_42424[(1)] = (4));

} else {
var statearr_42401_42425 = state_42391__$1;
(statearr_42401_42425[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42392 === (11))){
var inst_42361 = (state_42391[(10)]);
var inst_42380 = (state_42391[(2)]);
var tmp42399 = inst_42361;
var inst_42361__$1 = tmp42399;
var state_42391__$1 = (function (){var statearr_42402 = state_42391;
(statearr_42402[(10)] = inst_42361__$1);

(statearr_42402[(11)] = inst_42380);

return statearr_42402;
})();
var statearr_42403_42426 = state_42391__$1;
(statearr_42403_42426[(2)] = null);

(statearr_42403_42426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42392 === (9))){
var inst_42371 = (state_42391[(7)]);
var state_42391__$1 = state_42391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42391__$1,(11),out,inst_42371);
} else {
if((state_val_42392 === (5))){
var inst_42385 = cljs.core.async.close_BANG_.call(null,out);
var state_42391__$1 = state_42391;
var statearr_42404_42427 = state_42391__$1;
(statearr_42404_42427[(2)] = inst_42385);

(statearr_42404_42427[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42392 === (10))){
var inst_42383 = (state_42391[(2)]);
var state_42391__$1 = state_42391;
var statearr_42405_42428 = state_42391__$1;
(statearr_42405_42428[(2)] = inst_42383);

(statearr_42405_42428[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42392 === (8))){
var inst_42371 = (state_42391[(7)]);
var inst_42372 = (state_42391[(9)]);
var inst_42361 = (state_42391[(10)]);
var inst_42370 = (state_42391[(8)]);
var inst_42375 = (function (){var cs = inst_42361;
var vec__42366 = inst_42370;
var v = inst_42371;
var c = inst_42372;
return ((function (cs,vec__42366,v,c,inst_42371,inst_42372,inst_42361,inst_42370,state_val_42392,c__40251__auto___42419,out){
return (function (p1__42356_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__42356_SHARP_);
});
;})(cs,vec__42366,v,c,inst_42371,inst_42372,inst_42361,inst_42370,state_val_42392,c__40251__auto___42419,out))
})();
var inst_42376 = cljs.core.filterv.call(null,inst_42375,inst_42361);
var inst_42361__$1 = inst_42376;
var state_42391__$1 = (function (){var statearr_42406 = state_42391;
(statearr_42406[(10)] = inst_42361__$1);

return statearr_42406;
})();
var statearr_42407_42429 = state_42391__$1;
(statearr_42407_42429[(2)] = null);

(statearr_42407_42429[(1)] = (2));


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
});})(c__40251__auto___42419,out))
;
return ((function (switch__40137__auto__,c__40251__auto___42419,out){
return (function() {
var cljs$core$async$state_machine__40138__auto__ = null;
var cljs$core$async$state_machine__40138__auto____0 = (function (){
var statearr_42411 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42411[(0)] = cljs$core$async$state_machine__40138__auto__);

(statearr_42411[(1)] = (1));

return statearr_42411;
});
var cljs$core$async$state_machine__40138__auto____1 = (function (state_42391){
while(true){
var ret_value__40139__auto__ = (function (){try{while(true){
var result__40140__auto__ = switch__40137__auto__.call(null,state_42391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40140__auto__;
}
break;
}
}catch (e42412){if((e42412 instanceof Object)){
var ex__40141__auto__ = e42412;
var statearr_42413_42430 = state_42391;
(statearr_42413_42430[(5)] = ex__40141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42431 = state_42391;
state_42391 = G__42431;
continue;
} else {
return ret_value__40139__auto__;
}
break;
}
});
cljs$core$async$state_machine__40138__auto__ = function(state_42391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40138__auto____1.call(this,state_42391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40138__auto____0;
cljs$core$async$state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40138__auto____1;
return cljs$core$async$state_machine__40138__auto__;
})()
;})(switch__40137__auto__,c__40251__auto___42419,out))
})();
var state__40253__auto__ = (function (){var statearr_42414 = f__40252__auto__.call(null);
(statearr_42414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40251__auto___42419);

return statearr_42414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40253__auto__);
});})(c__40251__auto___42419,out))
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
var args42432 = [];
var len__30169__auto___42481 = arguments.length;
var i__30170__auto___42482 = (0);
while(true){
if((i__30170__auto___42482 < len__30169__auto___42481)){
args42432.push((arguments[i__30170__auto___42482]));

var G__42483 = (i__30170__auto___42482 + (1));
i__30170__auto___42482 = G__42483;
continue;
} else {
}
break;
}

var G__42434 = args42432.length;
switch (G__42434) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42432.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40251__auto___42485 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40251__auto___42485,out){
return (function (){
var f__40252__auto__ = (function (){var switch__40137__auto__ = ((function (c__40251__auto___42485,out){
return (function (state_42458){
var state_val_42459 = (state_42458[(1)]);
if((state_val_42459 === (7))){
var inst_42440 = (state_42458[(7)]);
var inst_42440__$1 = (state_42458[(2)]);
var inst_42441 = (inst_42440__$1 == null);
var inst_42442 = cljs.core.not.call(null,inst_42441);
var state_42458__$1 = (function (){var statearr_42460 = state_42458;
(statearr_42460[(7)] = inst_42440__$1);

return statearr_42460;
})();
if(inst_42442){
var statearr_42461_42486 = state_42458__$1;
(statearr_42461_42486[(1)] = (8));

} else {
var statearr_42462_42487 = state_42458__$1;
(statearr_42462_42487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42459 === (1))){
var inst_42435 = (0);
var state_42458__$1 = (function (){var statearr_42463 = state_42458;
(statearr_42463[(8)] = inst_42435);

return statearr_42463;
})();
var statearr_42464_42488 = state_42458__$1;
(statearr_42464_42488[(2)] = null);

(statearr_42464_42488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42459 === (4))){
var state_42458__$1 = state_42458;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42458__$1,(7),ch);
} else {
if((state_val_42459 === (6))){
var inst_42453 = (state_42458[(2)]);
var state_42458__$1 = state_42458;
var statearr_42465_42489 = state_42458__$1;
(statearr_42465_42489[(2)] = inst_42453);

(statearr_42465_42489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42459 === (3))){
var inst_42455 = (state_42458[(2)]);
var inst_42456 = cljs.core.async.close_BANG_.call(null,out);
var state_42458__$1 = (function (){var statearr_42466 = state_42458;
(statearr_42466[(9)] = inst_42455);

return statearr_42466;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42458__$1,inst_42456);
} else {
if((state_val_42459 === (2))){
var inst_42435 = (state_42458[(8)]);
var inst_42437 = (inst_42435 < n);
var state_42458__$1 = state_42458;
if(cljs.core.truth_(inst_42437)){
var statearr_42467_42490 = state_42458__$1;
(statearr_42467_42490[(1)] = (4));

} else {
var statearr_42468_42491 = state_42458__$1;
(statearr_42468_42491[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42459 === (11))){
var inst_42435 = (state_42458[(8)]);
var inst_42445 = (state_42458[(2)]);
var inst_42446 = (inst_42435 + (1));
var inst_42435__$1 = inst_42446;
var state_42458__$1 = (function (){var statearr_42469 = state_42458;
(statearr_42469[(10)] = inst_42445);

(statearr_42469[(8)] = inst_42435__$1);

return statearr_42469;
})();
var statearr_42470_42492 = state_42458__$1;
(statearr_42470_42492[(2)] = null);

(statearr_42470_42492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42459 === (9))){
var state_42458__$1 = state_42458;
var statearr_42471_42493 = state_42458__$1;
(statearr_42471_42493[(2)] = null);

(statearr_42471_42493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42459 === (5))){
var state_42458__$1 = state_42458;
var statearr_42472_42494 = state_42458__$1;
(statearr_42472_42494[(2)] = null);

(statearr_42472_42494[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42459 === (10))){
var inst_42450 = (state_42458[(2)]);
var state_42458__$1 = state_42458;
var statearr_42473_42495 = state_42458__$1;
(statearr_42473_42495[(2)] = inst_42450);

(statearr_42473_42495[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42459 === (8))){
var inst_42440 = (state_42458[(7)]);
var state_42458__$1 = state_42458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42458__$1,(11),out,inst_42440);
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
});})(c__40251__auto___42485,out))
;
return ((function (switch__40137__auto__,c__40251__auto___42485,out){
return (function() {
var cljs$core$async$state_machine__40138__auto__ = null;
var cljs$core$async$state_machine__40138__auto____0 = (function (){
var statearr_42477 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42477[(0)] = cljs$core$async$state_machine__40138__auto__);

(statearr_42477[(1)] = (1));

return statearr_42477;
});
var cljs$core$async$state_machine__40138__auto____1 = (function (state_42458){
while(true){
var ret_value__40139__auto__ = (function (){try{while(true){
var result__40140__auto__ = switch__40137__auto__.call(null,state_42458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40140__auto__;
}
break;
}
}catch (e42478){if((e42478 instanceof Object)){
var ex__40141__auto__ = e42478;
var statearr_42479_42496 = state_42458;
(statearr_42479_42496[(5)] = ex__40141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42497 = state_42458;
state_42458 = G__42497;
continue;
} else {
return ret_value__40139__auto__;
}
break;
}
});
cljs$core$async$state_machine__40138__auto__ = function(state_42458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40138__auto____1.call(this,state_42458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40138__auto____0;
cljs$core$async$state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40138__auto____1;
return cljs$core$async$state_machine__40138__auto__;
})()
;})(switch__40137__auto__,c__40251__auto___42485,out))
})();
var state__40253__auto__ = (function (){var statearr_42480 = f__40252__auto__.call(null);
(statearr_42480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40251__auto___42485);

return statearr_42480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40253__auto__);
});})(c__40251__auto___42485,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42505 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42505 = (function (f,ch,meta42506){
this.f = f;
this.ch = ch;
this.meta42506 = meta42506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42507,meta42506__$1){
var self__ = this;
var _42507__$1 = this;
return (new cljs.core.async.t_cljs$core$async42505(self__.f,self__.ch,meta42506__$1));
});

cljs.core.async.t_cljs$core$async42505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42507){
var self__ = this;
var _42507__$1 = this;
return self__.meta42506;
});

cljs.core.async.t_cljs$core$async42505.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42505.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42505.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42505.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42505.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async42508 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42508 = (function (f,ch,meta42506,_,fn1,meta42509){
this.f = f;
this.ch = ch;
this.meta42506 = meta42506;
this._ = _;
this.fn1 = fn1;
this.meta42509 = meta42509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42510,meta42509__$1){
var self__ = this;
var _42510__$1 = this;
return (new cljs.core.async.t_cljs$core$async42508(self__.f,self__.ch,self__.meta42506,self__._,self__.fn1,meta42509__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async42508.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42510){
var self__ = this;
var _42510__$1 = this;
return self__.meta42509;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42508.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42508.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42508.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42508.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__42498_SHARP_){
return f1.call(null,(((p1__42498_SHARP_ == null))?null:self__.f.call(null,p1__42498_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async42508.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42506","meta42506",-2032651384,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42505","cljs.core.async/t_cljs$core$async42505",-1857862446,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42509","meta42509",730794670,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42508.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42508.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42508";

cljs.core.async.t_cljs$core$async42508.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__29605__auto__,writer__29606__auto__,opt__29607__auto__){
return cljs.core._write.call(null,writer__29606__auto__,"cljs.core.async/t_cljs$core$async42508");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async42508 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42508(f__$1,ch__$1,meta42506__$1,___$2,fn1__$1,meta42509){
return (new cljs.core.async.t_cljs$core$async42508(f__$1,ch__$1,meta42506__$1,___$2,fn1__$1,meta42509));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async42508(self__.f,self__.ch,self__.meta42506,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28936__auto__ = ret;
if(cljs.core.truth_(and__28936__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28936__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async42505.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42505.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async42505.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42506","meta42506",-2032651384,null)], null);
});

cljs.core.async.t_cljs$core$async42505.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42505.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42505";

cljs.core.async.t_cljs$core$async42505.cljs$lang$ctorPrWriter = (function (this__29605__auto__,writer__29606__auto__,opt__29607__auto__){
return cljs.core._write.call(null,writer__29606__auto__,"cljs.core.async/t_cljs$core$async42505");
});

cljs.core.async.__GT_t_cljs$core$async42505 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42505(f__$1,ch__$1,meta42506){
return (new cljs.core.async.t_cljs$core$async42505(f__$1,ch__$1,meta42506));
});

}

return (new cljs.core.async.t_cljs$core$async42505(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42514 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42514 = (function (f,ch,meta42515){
this.f = f;
this.ch = ch;
this.meta42515 = meta42515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42516,meta42515__$1){
var self__ = this;
var _42516__$1 = this;
return (new cljs.core.async.t_cljs$core$async42514(self__.f,self__.ch,meta42515__$1));
});

cljs.core.async.t_cljs$core$async42514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42516){
var self__ = this;
var _42516__$1 = this;
return self__.meta42515;
});

cljs.core.async.t_cljs$core$async42514.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42514.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42514.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42514.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42514.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42514.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async42514.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42515","meta42515",1983197621,null)], null);
});

cljs.core.async.t_cljs$core$async42514.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42514.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42514";

cljs.core.async.t_cljs$core$async42514.cljs$lang$ctorPrWriter = (function (this__29605__auto__,writer__29606__auto__,opt__29607__auto__){
return cljs.core._write.call(null,writer__29606__auto__,"cljs.core.async/t_cljs$core$async42514");
});

cljs.core.async.__GT_t_cljs$core$async42514 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42514(f__$1,ch__$1,meta42515){
return (new cljs.core.async.t_cljs$core$async42514(f__$1,ch__$1,meta42515));
});

}

return (new cljs.core.async.t_cljs$core$async42514(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async42520 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42520 = (function (p,ch,meta42521){
this.p = p;
this.ch = ch;
this.meta42521 = meta42521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42522,meta42521__$1){
var self__ = this;
var _42522__$1 = this;
return (new cljs.core.async.t_cljs$core$async42520(self__.p,self__.ch,meta42521__$1));
});

cljs.core.async.t_cljs$core$async42520.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42522){
var self__ = this;
var _42522__$1 = this;
return self__.meta42521;
});

cljs.core.async.t_cljs$core$async42520.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42520.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42520.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42520.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42520.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42520.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42520.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async42520.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42521","meta42521",1316960294,null)], null);
});

cljs.core.async.t_cljs$core$async42520.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42520.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42520";

cljs.core.async.t_cljs$core$async42520.cljs$lang$ctorPrWriter = (function (this__29605__auto__,writer__29606__auto__,opt__29607__auto__){
return cljs.core._write.call(null,writer__29606__auto__,"cljs.core.async/t_cljs$core$async42520");
});

cljs.core.async.__GT_t_cljs$core$async42520 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42520(p__$1,ch__$1,meta42521){
return (new cljs.core.async.t_cljs$core$async42520(p__$1,ch__$1,meta42521));
});

}

return (new cljs.core.async.t_cljs$core$async42520(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args42523 = [];
var len__30169__auto___42567 = arguments.length;
var i__30170__auto___42568 = (0);
while(true){
if((i__30170__auto___42568 < len__30169__auto___42567)){
args42523.push((arguments[i__30170__auto___42568]));

var G__42569 = (i__30170__auto___42568 + (1));
i__30170__auto___42568 = G__42569;
continue;
} else {
}
break;
}

var G__42525 = args42523.length;
switch (G__42525) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42523.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40251__auto___42571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40251__auto___42571,out){
return (function (){
var f__40252__auto__ = (function (){var switch__40137__auto__ = ((function (c__40251__auto___42571,out){
return (function (state_42546){
var state_val_42547 = (state_42546[(1)]);
if((state_val_42547 === (7))){
var inst_42542 = (state_42546[(2)]);
var state_42546__$1 = state_42546;
var statearr_42548_42572 = state_42546__$1;
(statearr_42548_42572[(2)] = inst_42542);

(statearr_42548_42572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42547 === (1))){
var state_42546__$1 = state_42546;
var statearr_42549_42573 = state_42546__$1;
(statearr_42549_42573[(2)] = null);

(statearr_42549_42573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42547 === (4))){
var inst_42528 = (state_42546[(7)]);
var inst_42528__$1 = (state_42546[(2)]);
var inst_42529 = (inst_42528__$1 == null);
var state_42546__$1 = (function (){var statearr_42550 = state_42546;
(statearr_42550[(7)] = inst_42528__$1);

return statearr_42550;
})();
if(cljs.core.truth_(inst_42529)){
var statearr_42551_42574 = state_42546__$1;
(statearr_42551_42574[(1)] = (5));

} else {
var statearr_42552_42575 = state_42546__$1;
(statearr_42552_42575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42547 === (6))){
var inst_42528 = (state_42546[(7)]);
var inst_42533 = p.call(null,inst_42528);
var state_42546__$1 = state_42546;
if(cljs.core.truth_(inst_42533)){
var statearr_42553_42576 = state_42546__$1;
(statearr_42553_42576[(1)] = (8));

} else {
var statearr_42554_42577 = state_42546__$1;
(statearr_42554_42577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42547 === (3))){
var inst_42544 = (state_42546[(2)]);
var state_42546__$1 = state_42546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42546__$1,inst_42544);
} else {
if((state_val_42547 === (2))){
var state_42546__$1 = state_42546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42546__$1,(4),ch);
} else {
if((state_val_42547 === (11))){
var inst_42536 = (state_42546[(2)]);
var state_42546__$1 = state_42546;
var statearr_42555_42578 = state_42546__$1;
(statearr_42555_42578[(2)] = inst_42536);

(statearr_42555_42578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42547 === (9))){
var state_42546__$1 = state_42546;
var statearr_42556_42579 = state_42546__$1;
(statearr_42556_42579[(2)] = null);

(statearr_42556_42579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42547 === (5))){
var inst_42531 = cljs.core.async.close_BANG_.call(null,out);
var state_42546__$1 = state_42546;
var statearr_42557_42580 = state_42546__$1;
(statearr_42557_42580[(2)] = inst_42531);

(statearr_42557_42580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42547 === (10))){
var inst_42539 = (state_42546[(2)]);
var state_42546__$1 = (function (){var statearr_42558 = state_42546;
(statearr_42558[(8)] = inst_42539);

return statearr_42558;
})();
var statearr_42559_42581 = state_42546__$1;
(statearr_42559_42581[(2)] = null);

(statearr_42559_42581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42547 === (8))){
var inst_42528 = (state_42546[(7)]);
var state_42546__$1 = state_42546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42546__$1,(11),out,inst_42528);
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
});})(c__40251__auto___42571,out))
;
return ((function (switch__40137__auto__,c__40251__auto___42571,out){
return (function() {
var cljs$core$async$state_machine__40138__auto__ = null;
var cljs$core$async$state_machine__40138__auto____0 = (function (){
var statearr_42563 = [null,null,null,null,null,null,null,null,null];
(statearr_42563[(0)] = cljs$core$async$state_machine__40138__auto__);

(statearr_42563[(1)] = (1));

return statearr_42563;
});
var cljs$core$async$state_machine__40138__auto____1 = (function (state_42546){
while(true){
var ret_value__40139__auto__ = (function (){try{while(true){
var result__40140__auto__ = switch__40137__auto__.call(null,state_42546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40140__auto__;
}
break;
}
}catch (e42564){if((e42564 instanceof Object)){
var ex__40141__auto__ = e42564;
var statearr_42565_42582 = state_42546;
(statearr_42565_42582[(5)] = ex__40141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42583 = state_42546;
state_42546 = G__42583;
continue;
} else {
return ret_value__40139__auto__;
}
break;
}
});
cljs$core$async$state_machine__40138__auto__ = function(state_42546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40138__auto____1.call(this,state_42546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40138__auto____0;
cljs$core$async$state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40138__auto____1;
return cljs$core$async$state_machine__40138__auto__;
})()
;})(switch__40137__auto__,c__40251__auto___42571,out))
})();
var state__40253__auto__ = (function (){var statearr_42566 = f__40252__auto__.call(null);
(statearr_42566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40251__auto___42571);

return statearr_42566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40253__auto__);
});})(c__40251__auto___42571,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args42584 = [];
var len__30169__auto___42587 = arguments.length;
var i__30170__auto___42588 = (0);
while(true){
if((i__30170__auto___42588 < len__30169__auto___42587)){
args42584.push((arguments[i__30170__auto___42588]));

var G__42589 = (i__30170__auto___42588 + (1));
i__30170__auto___42588 = G__42589;
continue;
} else {
}
break;
}

var G__42586 = args42584.length;
switch (G__42586) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42584.length)].join('')));

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
var c__40251__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40251__auto__){
return (function (){
var f__40252__auto__ = (function (){var switch__40137__auto__ = ((function (c__40251__auto__){
return (function (state_42756){
var state_val_42757 = (state_42756[(1)]);
if((state_val_42757 === (7))){
var inst_42752 = (state_42756[(2)]);
var state_42756__$1 = state_42756;
var statearr_42758_42799 = state_42756__$1;
(statearr_42758_42799[(2)] = inst_42752);

(statearr_42758_42799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (20))){
var inst_42722 = (state_42756[(7)]);
var inst_42733 = (state_42756[(2)]);
var inst_42734 = cljs.core.next.call(null,inst_42722);
var inst_42708 = inst_42734;
var inst_42709 = null;
var inst_42710 = (0);
var inst_42711 = (0);
var state_42756__$1 = (function (){var statearr_42759 = state_42756;
(statearr_42759[(8)] = inst_42709);

(statearr_42759[(9)] = inst_42733);

(statearr_42759[(10)] = inst_42710);

(statearr_42759[(11)] = inst_42708);

(statearr_42759[(12)] = inst_42711);

return statearr_42759;
})();
var statearr_42760_42800 = state_42756__$1;
(statearr_42760_42800[(2)] = null);

(statearr_42760_42800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (1))){
var state_42756__$1 = state_42756;
var statearr_42761_42801 = state_42756__$1;
(statearr_42761_42801[(2)] = null);

(statearr_42761_42801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (4))){
var inst_42697 = (state_42756[(13)]);
var inst_42697__$1 = (state_42756[(2)]);
var inst_42698 = (inst_42697__$1 == null);
var state_42756__$1 = (function (){var statearr_42762 = state_42756;
(statearr_42762[(13)] = inst_42697__$1);

return statearr_42762;
})();
if(cljs.core.truth_(inst_42698)){
var statearr_42763_42802 = state_42756__$1;
(statearr_42763_42802[(1)] = (5));

} else {
var statearr_42764_42803 = state_42756__$1;
(statearr_42764_42803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (15))){
var state_42756__$1 = state_42756;
var statearr_42768_42804 = state_42756__$1;
(statearr_42768_42804[(2)] = null);

(statearr_42768_42804[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (21))){
var state_42756__$1 = state_42756;
var statearr_42769_42805 = state_42756__$1;
(statearr_42769_42805[(2)] = null);

(statearr_42769_42805[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (13))){
var inst_42709 = (state_42756[(8)]);
var inst_42710 = (state_42756[(10)]);
var inst_42708 = (state_42756[(11)]);
var inst_42711 = (state_42756[(12)]);
var inst_42718 = (state_42756[(2)]);
var inst_42719 = (inst_42711 + (1));
var tmp42765 = inst_42709;
var tmp42766 = inst_42710;
var tmp42767 = inst_42708;
var inst_42708__$1 = tmp42767;
var inst_42709__$1 = tmp42765;
var inst_42710__$1 = tmp42766;
var inst_42711__$1 = inst_42719;
var state_42756__$1 = (function (){var statearr_42770 = state_42756;
(statearr_42770[(8)] = inst_42709__$1);

(statearr_42770[(14)] = inst_42718);

(statearr_42770[(10)] = inst_42710__$1);

(statearr_42770[(11)] = inst_42708__$1);

(statearr_42770[(12)] = inst_42711__$1);

return statearr_42770;
})();
var statearr_42771_42806 = state_42756__$1;
(statearr_42771_42806[(2)] = null);

(statearr_42771_42806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (22))){
var state_42756__$1 = state_42756;
var statearr_42772_42807 = state_42756__$1;
(statearr_42772_42807[(2)] = null);

(statearr_42772_42807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (6))){
var inst_42697 = (state_42756[(13)]);
var inst_42706 = f.call(null,inst_42697);
var inst_42707 = cljs.core.seq.call(null,inst_42706);
var inst_42708 = inst_42707;
var inst_42709 = null;
var inst_42710 = (0);
var inst_42711 = (0);
var state_42756__$1 = (function (){var statearr_42773 = state_42756;
(statearr_42773[(8)] = inst_42709);

(statearr_42773[(10)] = inst_42710);

(statearr_42773[(11)] = inst_42708);

(statearr_42773[(12)] = inst_42711);

return statearr_42773;
})();
var statearr_42774_42808 = state_42756__$1;
(statearr_42774_42808[(2)] = null);

(statearr_42774_42808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (17))){
var inst_42722 = (state_42756[(7)]);
var inst_42726 = cljs.core.chunk_first.call(null,inst_42722);
var inst_42727 = cljs.core.chunk_rest.call(null,inst_42722);
var inst_42728 = cljs.core.count.call(null,inst_42726);
var inst_42708 = inst_42727;
var inst_42709 = inst_42726;
var inst_42710 = inst_42728;
var inst_42711 = (0);
var state_42756__$1 = (function (){var statearr_42775 = state_42756;
(statearr_42775[(8)] = inst_42709);

(statearr_42775[(10)] = inst_42710);

(statearr_42775[(11)] = inst_42708);

(statearr_42775[(12)] = inst_42711);

return statearr_42775;
})();
var statearr_42776_42809 = state_42756__$1;
(statearr_42776_42809[(2)] = null);

(statearr_42776_42809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (3))){
var inst_42754 = (state_42756[(2)]);
var state_42756__$1 = state_42756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42756__$1,inst_42754);
} else {
if((state_val_42757 === (12))){
var inst_42742 = (state_42756[(2)]);
var state_42756__$1 = state_42756;
var statearr_42777_42810 = state_42756__$1;
(statearr_42777_42810[(2)] = inst_42742);

(statearr_42777_42810[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (2))){
var state_42756__$1 = state_42756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42756__$1,(4),in$);
} else {
if((state_val_42757 === (23))){
var inst_42750 = (state_42756[(2)]);
var state_42756__$1 = state_42756;
var statearr_42778_42811 = state_42756__$1;
(statearr_42778_42811[(2)] = inst_42750);

(statearr_42778_42811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (19))){
var inst_42737 = (state_42756[(2)]);
var state_42756__$1 = state_42756;
var statearr_42779_42812 = state_42756__$1;
(statearr_42779_42812[(2)] = inst_42737);

(statearr_42779_42812[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (11))){
var inst_42722 = (state_42756[(7)]);
var inst_42708 = (state_42756[(11)]);
var inst_42722__$1 = cljs.core.seq.call(null,inst_42708);
var state_42756__$1 = (function (){var statearr_42780 = state_42756;
(statearr_42780[(7)] = inst_42722__$1);

return statearr_42780;
})();
if(inst_42722__$1){
var statearr_42781_42813 = state_42756__$1;
(statearr_42781_42813[(1)] = (14));

} else {
var statearr_42782_42814 = state_42756__$1;
(statearr_42782_42814[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (9))){
var inst_42744 = (state_42756[(2)]);
var inst_42745 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_42756__$1 = (function (){var statearr_42783 = state_42756;
(statearr_42783[(15)] = inst_42744);

return statearr_42783;
})();
if(cljs.core.truth_(inst_42745)){
var statearr_42784_42815 = state_42756__$1;
(statearr_42784_42815[(1)] = (21));

} else {
var statearr_42785_42816 = state_42756__$1;
(statearr_42785_42816[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (5))){
var inst_42700 = cljs.core.async.close_BANG_.call(null,out);
var state_42756__$1 = state_42756;
var statearr_42786_42817 = state_42756__$1;
(statearr_42786_42817[(2)] = inst_42700);

(statearr_42786_42817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (14))){
var inst_42722 = (state_42756[(7)]);
var inst_42724 = cljs.core.chunked_seq_QMARK_.call(null,inst_42722);
var state_42756__$1 = state_42756;
if(inst_42724){
var statearr_42787_42818 = state_42756__$1;
(statearr_42787_42818[(1)] = (17));

} else {
var statearr_42788_42819 = state_42756__$1;
(statearr_42788_42819[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (16))){
var inst_42740 = (state_42756[(2)]);
var state_42756__$1 = state_42756;
var statearr_42789_42820 = state_42756__$1;
(statearr_42789_42820[(2)] = inst_42740);

(statearr_42789_42820[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42757 === (10))){
var inst_42709 = (state_42756[(8)]);
var inst_42711 = (state_42756[(12)]);
var inst_42716 = cljs.core._nth.call(null,inst_42709,inst_42711);
var state_42756__$1 = state_42756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42756__$1,(13),out,inst_42716);
} else {
if((state_val_42757 === (18))){
var inst_42722 = (state_42756[(7)]);
var inst_42731 = cljs.core.first.call(null,inst_42722);
var state_42756__$1 = state_42756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42756__$1,(20),out,inst_42731);
} else {
if((state_val_42757 === (8))){
var inst_42710 = (state_42756[(10)]);
var inst_42711 = (state_42756[(12)]);
var inst_42713 = (inst_42711 < inst_42710);
var inst_42714 = inst_42713;
var state_42756__$1 = state_42756;
if(cljs.core.truth_(inst_42714)){
var statearr_42790_42821 = state_42756__$1;
(statearr_42790_42821[(1)] = (10));

} else {
var statearr_42791_42822 = state_42756__$1;
(statearr_42791_42822[(1)] = (11));

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
});})(c__40251__auto__))
;
return ((function (switch__40137__auto__,c__40251__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__40138__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__40138__auto____0 = (function (){
var statearr_42795 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42795[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__40138__auto__);

(statearr_42795[(1)] = (1));

return statearr_42795;
});
var cljs$core$async$mapcat_STAR__$_state_machine__40138__auto____1 = (function (state_42756){
while(true){
var ret_value__40139__auto__ = (function (){try{while(true){
var result__40140__auto__ = switch__40137__auto__.call(null,state_42756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40140__auto__;
}
break;
}
}catch (e42796){if((e42796 instanceof Object)){
var ex__40141__auto__ = e42796;
var statearr_42797_42823 = state_42756;
(statearr_42797_42823[(5)] = ex__40141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42824 = state_42756;
state_42756 = G__42824;
continue;
} else {
return ret_value__40139__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__40138__auto__ = function(state_42756){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__40138__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__40138__auto____1.call(this,state_42756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__40138__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__40138__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__40138__auto__;
})()
;})(switch__40137__auto__,c__40251__auto__))
})();
var state__40253__auto__ = (function (){var statearr_42798 = f__40252__auto__.call(null);
(statearr_42798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40251__auto__);

return statearr_42798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40253__auto__);
});})(c__40251__auto__))
);

return c__40251__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args42825 = [];
var len__30169__auto___42828 = arguments.length;
var i__30170__auto___42829 = (0);
while(true){
if((i__30170__auto___42829 < len__30169__auto___42828)){
args42825.push((arguments[i__30170__auto___42829]));

var G__42830 = (i__30170__auto___42829 + (1));
i__30170__auto___42829 = G__42830;
continue;
} else {
}
break;
}

var G__42827 = args42825.length;
switch (G__42827) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42825.length)].join('')));

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
var args42832 = [];
var len__30169__auto___42835 = arguments.length;
var i__30170__auto___42836 = (0);
while(true){
if((i__30170__auto___42836 < len__30169__auto___42835)){
args42832.push((arguments[i__30170__auto___42836]));

var G__42837 = (i__30170__auto___42836 + (1));
i__30170__auto___42836 = G__42837;
continue;
} else {
}
break;
}

var G__42834 = args42832.length;
switch (G__42834) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42832.length)].join('')));

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
var args42839 = [];
var len__30169__auto___42890 = arguments.length;
var i__30170__auto___42891 = (0);
while(true){
if((i__30170__auto___42891 < len__30169__auto___42890)){
args42839.push((arguments[i__30170__auto___42891]));

var G__42892 = (i__30170__auto___42891 + (1));
i__30170__auto___42891 = G__42892;
continue;
} else {
}
break;
}

var G__42841 = args42839.length;
switch (G__42841) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42839.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40251__auto___42894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40251__auto___42894,out){
return (function (){
var f__40252__auto__ = (function (){var switch__40137__auto__ = ((function (c__40251__auto___42894,out){
return (function (state_42865){
var state_val_42866 = (state_42865[(1)]);
if((state_val_42866 === (7))){
var inst_42860 = (state_42865[(2)]);
var state_42865__$1 = state_42865;
var statearr_42867_42895 = state_42865__$1;
(statearr_42867_42895[(2)] = inst_42860);

(statearr_42867_42895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42866 === (1))){
var inst_42842 = null;
var state_42865__$1 = (function (){var statearr_42868 = state_42865;
(statearr_42868[(7)] = inst_42842);

return statearr_42868;
})();
var statearr_42869_42896 = state_42865__$1;
(statearr_42869_42896[(2)] = null);

(statearr_42869_42896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42866 === (4))){
var inst_42845 = (state_42865[(8)]);
var inst_42845__$1 = (state_42865[(2)]);
var inst_42846 = (inst_42845__$1 == null);
var inst_42847 = cljs.core.not.call(null,inst_42846);
var state_42865__$1 = (function (){var statearr_42870 = state_42865;
(statearr_42870[(8)] = inst_42845__$1);

return statearr_42870;
})();
if(inst_42847){
var statearr_42871_42897 = state_42865__$1;
(statearr_42871_42897[(1)] = (5));

} else {
var statearr_42872_42898 = state_42865__$1;
(statearr_42872_42898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42866 === (6))){
var state_42865__$1 = state_42865;
var statearr_42873_42899 = state_42865__$1;
(statearr_42873_42899[(2)] = null);

(statearr_42873_42899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42866 === (3))){
var inst_42862 = (state_42865[(2)]);
var inst_42863 = cljs.core.async.close_BANG_.call(null,out);
var state_42865__$1 = (function (){var statearr_42874 = state_42865;
(statearr_42874[(9)] = inst_42862);

return statearr_42874;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42865__$1,inst_42863);
} else {
if((state_val_42866 === (2))){
var state_42865__$1 = state_42865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42865__$1,(4),ch);
} else {
if((state_val_42866 === (11))){
var inst_42845 = (state_42865[(8)]);
var inst_42854 = (state_42865[(2)]);
var inst_42842 = inst_42845;
var state_42865__$1 = (function (){var statearr_42875 = state_42865;
(statearr_42875[(10)] = inst_42854);

(statearr_42875[(7)] = inst_42842);

return statearr_42875;
})();
var statearr_42876_42900 = state_42865__$1;
(statearr_42876_42900[(2)] = null);

(statearr_42876_42900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42866 === (9))){
var inst_42845 = (state_42865[(8)]);
var state_42865__$1 = state_42865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42865__$1,(11),out,inst_42845);
} else {
if((state_val_42866 === (5))){
var inst_42845 = (state_42865[(8)]);
var inst_42842 = (state_42865[(7)]);
var inst_42849 = cljs.core._EQ_.call(null,inst_42845,inst_42842);
var state_42865__$1 = state_42865;
if(inst_42849){
var statearr_42878_42901 = state_42865__$1;
(statearr_42878_42901[(1)] = (8));

} else {
var statearr_42879_42902 = state_42865__$1;
(statearr_42879_42902[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42866 === (10))){
var inst_42857 = (state_42865[(2)]);
var state_42865__$1 = state_42865;
var statearr_42880_42903 = state_42865__$1;
(statearr_42880_42903[(2)] = inst_42857);

(statearr_42880_42903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42866 === (8))){
var inst_42842 = (state_42865[(7)]);
var tmp42877 = inst_42842;
var inst_42842__$1 = tmp42877;
var state_42865__$1 = (function (){var statearr_42881 = state_42865;
(statearr_42881[(7)] = inst_42842__$1);

return statearr_42881;
})();
var statearr_42882_42904 = state_42865__$1;
(statearr_42882_42904[(2)] = null);

(statearr_42882_42904[(1)] = (2));


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
});})(c__40251__auto___42894,out))
;
return ((function (switch__40137__auto__,c__40251__auto___42894,out){
return (function() {
var cljs$core$async$state_machine__40138__auto__ = null;
var cljs$core$async$state_machine__40138__auto____0 = (function (){
var statearr_42886 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42886[(0)] = cljs$core$async$state_machine__40138__auto__);

(statearr_42886[(1)] = (1));

return statearr_42886;
});
var cljs$core$async$state_machine__40138__auto____1 = (function (state_42865){
while(true){
var ret_value__40139__auto__ = (function (){try{while(true){
var result__40140__auto__ = switch__40137__auto__.call(null,state_42865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40140__auto__;
}
break;
}
}catch (e42887){if((e42887 instanceof Object)){
var ex__40141__auto__ = e42887;
var statearr_42888_42905 = state_42865;
(statearr_42888_42905[(5)] = ex__40141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42906 = state_42865;
state_42865 = G__42906;
continue;
} else {
return ret_value__40139__auto__;
}
break;
}
});
cljs$core$async$state_machine__40138__auto__ = function(state_42865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40138__auto____1.call(this,state_42865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40138__auto____0;
cljs$core$async$state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40138__auto____1;
return cljs$core$async$state_machine__40138__auto__;
})()
;})(switch__40137__auto__,c__40251__auto___42894,out))
})();
var state__40253__auto__ = (function (){var statearr_42889 = f__40252__auto__.call(null);
(statearr_42889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40251__auto___42894);

return statearr_42889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40253__auto__);
});})(c__40251__auto___42894,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args42907 = [];
var len__30169__auto___42977 = arguments.length;
var i__30170__auto___42978 = (0);
while(true){
if((i__30170__auto___42978 < len__30169__auto___42977)){
args42907.push((arguments[i__30170__auto___42978]));

var G__42979 = (i__30170__auto___42978 + (1));
i__30170__auto___42978 = G__42979;
continue;
} else {
}
break;
}

var G__42909 = args42907.length;
switch (G__42909) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42907.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40251__auto___42981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40251__auto___42981,out){
return (function (){
var f__40252__auto__ = (function (){var switch__40137__auto__ = ((function (c__40251__auto___42981,out){
return (function (state_42947){
var state_val_42948 = (state_42947[(1)]);
if((state_val_42948 === (7))){
var inst_42943 = (state_42947[(2)]);
var state_42947__$1 = state_42947;
var statearr_42949_42982 = state_42947__$1;
(statearr_42949_42982[(2)] = inst_42943);

(statearr_42949_42982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42948 === (1))){
var inst_42910 = (new Array(n));
var inst_42911 = inst_42910;
var inst_42912 = (0);
var state_42947__$1 = (function (){var statearr_42950 = state_42947;
(statearr_42950[(7)] = inst_42911);

(statearr_42950[(8)] = inst_42912);

return statearr_42950;
})();
var statearr_42951_42983 = state_42947__$1;
(statearr_42951_42983[(2)] = null);

(statearr_42951_42983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42948 === (4))){
var inst_42915 = (state_42947[(9)]);
var inst_42915__$1 = (state_42947[(2)]);
var inst_42916 = (inst_42915__$1 == null);
var inst_42917 = cljs.core.not.call(null,inst_42916);
var state_42947__$1 = (function (){var statearr_42952 = state_42947;
(statearr_42952[(9)] = inst_42915__$1);

return statearr_42952;
})();
if(inst_42917){
var statearr_42953_42984 = state_42947__$1;
(statearr_42953_42984[(1)] = (5));

} else {
var statearr_42954_42985 = state_42947__$1;
(statearr_42954_42985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42948 === (15))){
var inst_42937 = (state_42947[(2)]);
var state_42947__$1 = state_42947;
var statearr_42955_42986 = state_42947__$1;
(statearr_42955_42986[(2)] = inst_42937);

(statearr_42955_42986[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42948 === (13))){
var state_42947__$1 = state_42947;
var statearr_42956_42987 = state_42947__$1;
(statearr_42956_42987[(2)] = null);

(statearr_42956_42987[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42948 === (6))){
var inst_42912 = (state_42947[(8)]);
var inst_42933 = (inst_42912 > (0));
var state_42947__$1 = state_42947;
if(cljs.core.truth_(inst_42933)){
var statearr_42957_42988 = state_42947__$1;
(statearr_42957_42988[(1)] = (12));

} else {
var statearr_42958_42989 = state_42947__$1;
(statearr_42958_42989[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42948 === (3))){
var inst_42945 = (state_42947[(2)]);
var state_42947__$1 = state_42947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42947__$1,inst_42945);
} else {
if((state_val_42948 === (12))){
var inst_42911 = (state_42947[(7)]);
var inst_42935 = cljs.core.vec.call(null,inst_42911);
var state_42947__$1 = state_42947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42947__$1,(15),out,inst_42935);
} else {
if((state_val_42948 === (2))){
var state_42947__$1 = state_42947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42947__$1,(4),ch);
} else {
if((state_val_42948 === (11))){
var inst_42927 = (state_42947[(2)]);
var inst_42928 = (new Array(n));
var inst_42911 = inst_42928;
var inst_42912 = (0);
var state_42947__$1 = (function (){var statearr_42959 = state_42947;
(statearr_42959[(10)] = inst_42927);

(statearr_42959[(7)] = inst_42911);

(statearr_42959[(8)] = inst_42912);

return statearr_42959;
})();
var statearr_42960_42990 = state_42947__$1;
(statearr_42960_42990[(2)] = null);

(statearr_42960_42990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42948 === (9))){
var inst_42911 = (state_42947[(7)]);
var inst_42925 = cljs.core.vec.call(null,inst_42911);
var state_42947__$1 = state_42947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42947__$1,(11),out,inst_42925);
} else {
if((state_val_42948 === (5))){
var inst_42920 = (state_42947[(11)]);
var inst_42915 = (state_42947[(9)]);
var inst_42911 = (state_42947[(7)]);
var inst_42912 = (state_42947[(8)]);
var inst_42919 = (inst_42911[inst_42912] = inst_42915);
var inst_42920__$1 = (inst_42912 + (1));
var inst_42921 = (inst_42920__$1 < n);
var state_42947__$1 = (function (){var statearr_42961 = state_42947;
(statearr_42961[(11)] = inst_42920__$1);

(statearr_42961[(12)] = inst_42919);

return statearr_42961;
})();
if(cljs.core.truth_(inst_42921)){
var statearr_42962_42991 = state_42947__$1;
(statearr_42962_42991[(1)] = (8));

} else {
var statearr_42963_42992 = state_42947__$1;
(statearr_42963_42992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42948 === (14))){
var inst_42940 = (state_42947[(2)]);
var inst_42941 = cljs.core.async.close_BANG_.call(null,out);
var state_42947__$1 = (function (){var statearr_42965 = state_42947;
(statearr_42965[(13)] = inst_42940);

return statearr_42965;
})();
var statearr_42966_42993 = state_42947__$1;
(statearr_42966_42993[(2)] = inst_42941);

(statearr_42966_42993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42948 === (10))){
var inst_42931 = (state_42947[(2)]);
var state_42947__$1 = state_42947;
var statearr_42967_42994 = state_42947__$1;
(statearr_42967_42994[(2)] = inst_42931);

(statearr_42967_42994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42948 === (8))){
var inst_42920 = (state_42947[(11)]);
var inst_42911 = (state_42947[(7)]);
var tmp42964 = inst_42911;
var inst_42911__$1 = tmp42964;
var inst_42912 = inst_42920;
var state_42947__$1 = (function (){var statearr_42968 = state_42947;
(statearr_42968[(7)] = inst_42911__$1);

(statearr_42968[(8)] = inst_42912);

return statearr_42968;
})();
var statearr_42969_42995 = state_42947__$1;
(statearr_42969_42995[(2)] = null);

(statearr_42969_42995[(1)] = (2));


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
});})(c__40251__auto___42981,out))
;
return ((function (switch__40137__auto__,c__40251__auto___42981,out){
return (function() {
var cljs$core$async$state_machine__40138__auto__ = null;
var cljs$core$async$state_machine__40138__auto____0 = (function (){
var statearr_42973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42973[(0)] = cljs$core$async$state_machine__40138__auto__);

(statearr_42973[(1)] = (1));

return statearr_42973;
});
var cljs$core$async$state_machine__40138__auto____1 = (function (state_42947){
while(true){
var ret_value__40139__auto__ = (function (){try{while(true){
var result__40140__auto__ = switch__40137__auto__.call(null,state_42947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40140__auto__;
}
break;
}
}catch (e42974){if((e42974 instanceof Object)){
var ex__40141__auto__ = e42974;
var statearr_42975_42996 = state_42947;
(statearr_42975_42996[(5)] = ex__40141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42997 = state_42947;
state_42947 = G__42997;
continue;
} else {
return ret_value__40139__auto__;
}
break;
}
});
cljs$core$async$state_machine__40138__auto__ = function(state_42947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40138__auto____1.call(this,state_42947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40138__auto____0;
cljs$core$async$state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40138__auto____1;
return cljs$core$async$state_machine__40138__auto__;
})()
;})(switch__40137__auto__,c__40251__auto___42981,out))
})();
var state__40253__auto__ = (function (){var statearr_42976 = f__40252__auto__.call(null);
(statearr_42976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40251__auto___42981);

return statearr_42976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40253__auto__);
});})(c__40251__auto___42981,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args42998 = [];
var len__30169__auto___43072 = arguments.length;
var i__30170__auto___43073 = (0);
while(true){
if((i__30170__auto___43073 < len__30169__auto___43072)){
args42998.push((arguments[i__30170__auto___43073]));

var G__43074 = (i__30170__auto___43073 + (1));
i__30170__auto___43073 = G__43074;
continue;
} else {
}
break;
}

var G__43000 = args42998.length;
switch (G__43000) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42998.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40251__auto___43076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40251__auto___43076,out){
return (function (){
var f__40252__auto__ = (function (){var switch__40137__auto__ = ((function (c__40251__auto___43076,out){
return (function (state_43042){
var state_val_43043 = (state_43042[(1)]);
if((state_val_43043 === (7))){
var inst_43038 = (state_43042[(2)]);
var state_43042__$1 = state_43042;
var statearr_43044_43077 = state_43042__$1;
(statearr_43044_43077[(2)] = inst_43038);

(statearr_43044_43077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43043 === (1))){
var inst_43001 = [];
var inst_43002 = inst_43001;
var inst_43003 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43042__$1 = (function (){var statearr_43045 = state_43042;
(statearr_43045[(7)] = inst_43002);

(statearr_43045[(8)] = inst_43003);

return statearr_43045;
})();
var statearr_43046_43078 = state_43042__$1;
(statearr_43046_43078[(2)] = null);

(statearr_43046_43078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43043 === (4))){
var inst_43006 = (state_43042[(9)]);
var inst_43006__$1 = (state_43042[(2)]);
var inst_43007 = (inst_43006__$1 == null);
var inst_43008 = cljs.core.not.call(null,inst_43007);
var state_43042__$1 = (function (){var statearr_43047 = state_43042;
(statearr_43047[(9)] = inst_43006__$1);

return statearr_43047;
})();
if(inst_43008){
var statearr_43048_43079 = state_43042__$1;
(statearr_43048_43079[(1)] = (5));

} else {
var statearr_43049_43080 = state_43042__$1;
(statearr_43049_43080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43043 === (15))){
var inst_43032 = (state_43042[(2)]);
var state_43042__$1 = state_43042;
var statearr_43050_43081 = state_43042__$1;
(statearr_43050_43081[(2)] = inst_43032);

(statearr_43050_43081[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43043 === (13))){
var state_43042__$1 = state_43042;
var statearr_43051_43082 = state_43042__$1;
(statearr_43051_43082[(2)] = null);

(statearr_43051_43082[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43043 === (6))){
var inst_43002 = (state_43042[(7)]);
var inst_43027 = inst_43002.length;
var inst_43028 = (inst_43027 > (0));
var state_43042__$1 = state_43042;
if(cljs.core.truth_(inst_43028)){
var statearr_43052_43083 = state_43042__$1;
(statearr_43052_43083[(1)] = (12));

} else {
var statearr_43053_43084 = state_43042__$1;
(statearr_43053_43084[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43043 === (3))){
var inst_43040 = (state_43042[(2)]);
var state_43042__$1 = state_43042;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43042__$1,inst_43040);
} else {
if((state_val_43043 === (12))){
var inst_43002 = (state_43042[(7)]);
var inst_43030 = cljs.core.vec.call(null,inst_43002);
var state_43042__$1 = state_43042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43042__$1,(15),out,inst_43030);
} else {
if((state_val_43043 === (2))){
var state_43042__$1 = state_43042;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43042__$1,(4),ch);
} else {
if((state_val_43043 === (11))){
var inst_43010 = (state_43042[(10)]);
var inst_43006 = (state_43042[(9)]);
var inst_43020 = (state_43042[(2)]);
var inst_43021 = [];
var inst_43022 = inst_43021.push(inst_43006);
var inst_43002 = inst_43021;
var inst_43003 = inst_43010;
var state_43042__$1 = (function (){var statearr_43054 = state_43042;
(statearr_43054[(11)] = inst_43020);

(statearr_43054[(7)] = inst_43002);

(statearr_43054[(12)] = inst_43022);

(statearr_43054[(8)] = inst_43003);

return statearr_43054;
})();
var statearr_43055_43085 = state_43042__$1;
(statearr_43055_43085[(2)] = null);

(statearr_43055_43085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43043 === (9))){
var inst_43002 = (state_43042[(7)]);
var inst_43018 = cljs.core.vec.call(null,inst_43002);
var state_43042__$1 = state_43042;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43042__$1,(11),out,inst_43018);
} else {
if((state_val_43043 === (5))){
var inst_43010 = (state_43042[(10)]);
var inst_43006 = (state_43042[(9)]);
var inst_43003 = (state_43042[(8)]);
var inst_43010__$1 = f.call(null,inst_43006);
var inst_43011 = cljs.core._EQ_.call(null,inst_43010__$1,inst_43003);
var inst_43012 = cljs.core.keyword_identical_QMARK_.call(null,inst_43003,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43013 = (inst_43011) || (inst_43012);
var state_43042__$1 = (function (){var statearr_43056 = state_43042;
(statearr_43056[(10)] = inst_43010__$1);

return statearr_43056;
})();
if(cljs.core.truth_(inst_43013)){
var statearr_43057_43086 = state_43042__$1;
(statearr_43057_43086[(1)] = (8));

} else {
var statearr_43058_43087 = state_43042__$1;
(statearr_43058_43087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43043 === (14))){
var inst_43035 = (state_43042[(2)]);
var inst_43036 = cljs.core.async.close_BANG_.call(null,out);
var state_43042__$1 = (function (){var statearr_43060 = state_43042;
(statearr_43060[(13)] = inst_43035);

return statearr_43060;
})();
var statearr_43061_43088 = state_43042__$1;
(statearr_43061_43088[(2)] = inst_43036);

(statearr_43061_43088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43043 === (10))){
var inst_43025 = (state_43042[(2)]);
var state_43042__$1 = state_43042;
var statearr_43062_43089 = state_43042__$1;
(statearr_43062_43089[(2)] = inst_43025);

(statearr_43062_43089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43043 === (8))){
var inst_43002 = (state_43042[(7)]);
var inst_43010 = (state_43042[(10)]);
var inst_43006 = (state_43042[(9)]);
var inst_43015 = inst_43002.push(inst_43006);
var tmp43059 = inst_43002;
var inst_43002__$1 = tmp43059;
var inst_43003 = inst_43010;
var state_43042__$1 = (function (){var statearr_43063 = state_43042;
(statearr_43063[(7)] = inst_43002__$1);

(statearr_43063[(14)] = inst_43015);

(statearr_43063[(8)] = inst_43003);

return statearr_43063;
})();
var statearr_43064_43090 = state_43042__$1;
(statearr_43064_43090[(2)] = null);

(statearr_43064_43090[(1)] = (2));


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
});})(c__40251__auto___43076,out))
;
return ((function (switch__40137__auto__,c__40251__auto___43076,out){
return (function() {
var cljs$core$async$state_machine__40138__auto__ = null;
var cljs$core$async$state_machine__40138__auto____0 = (function (){
var statearr_43068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43068[(0)] = cljs$core$async$state_machine__40138__auto__);

(statearr_43068[(1)] = (1));

return statearr_43068;
});
var cljs$core$async$state_machine__40138__auto____1 = (function (state_43042){
while(true){
var ret_value__40139__auto__ = (function (){try{while(true){
var result__40140__auto__ = switch__40137__auto__.call(null,state_43042);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40140__auto__;
}
break;
}
}catch (e43069){if((e43069 instanceof Object)){
var ex__40141__auto__ = e43069;
var statearr_43070_43091 = state_43042;
(statearr_43070_43091[(5)] = ex__40141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43042);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43092 = state_43042;
state_43042 = G__43092;
continue;
} else {
return ret_value__40139__auto__;
}
break;
}
});
cljs$core$async$state_machine__40138__auto__ = function(state_43042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40138__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40138__auto____1.call(this,state_43042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40138__auto____0;
cljs$core$async$state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40138__auto____1;
return cljs$core$async$state_machine__40138__auto__;
})()
;})(switch__40137__auto__,c__40251__auto___43076,out))
})();
var state__40253__auto__ = (function (){var statearr_43071 = f__40252__auto__.call(null);
(statearr_43071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40251__auto___43076);

return statearr_43071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40253__auto__);
});})(c__40251__auto___43076,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map