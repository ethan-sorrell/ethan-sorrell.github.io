goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__47511 = arguments.length;
switch (G__47511) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47514 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47514 = (function (f,blockable,meta47515){
this.f = f;
this.blockable = blockable;
this.meta47515 = meta47515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47516,meta47515__$1){
var self__ = this;
var _47516__$1 = this;
return (new cljs.core.async.t_cljs$core$async47514(self__.f,self__.blockable,meta47515__$1));
});

cljs.core.async.t_cljs$core$async47514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47516){
var self__ = this;
var _47516__$1 = this;
return self__.meta47515;
});

cljs.core.async.t_cljs$core$async47514.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47514.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47514.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async47514.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async47514.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47515","meta47515",464637130,null)], null);
});

cljs.core.async.t_cljs$core$async47514.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47514.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47514";

cljs.core.async.t_cljs$core$async47514.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47514");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47514.
 */
cljs.core.async.__GT_t_cljs$core$async47514 = (function cljs$core$async$__GT_t_cljs$core$async47514(f__$1,blockable__$1,meta47515){
return (new cljs.core.async.t_cljs$core$async47514(f__$1,blockable__$1,meta47515));
});

}

return (new cljs.core.async.t_cljs$core$async47514(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__47519 = arguments.length;
switch (G__47519) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__47521 = arguments.length;
switch (G__47521) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__47523 = arguments.length;
switch (G__47523) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_48959 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48959) : fn1.call(null,val_48959));
} else {
cljs.core.async.impl.dispatch.run(((function (val_48959,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48959) : fn1.call(null,val_48959));
});})(val_48959,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__47525 = arguments.length;
switch (G__47525) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5733__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___48974 = n;
var x_48975 = (0);
while(true){
if((x_48975 < n__4607__auto___48974)){
(a[x_48975] = x_48975);

var G__48976 = (x_48975 + (1));
x_48975 = G__48976;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47526 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47526 = (function (flag,meta47527){
this.flag = flag;
this.meta47527 = meta47527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_47528,meta47527__$1){
var self__ = this;
var _47528__$1 = this;
return (new cljs.core.async.t_cljs$core$async47526(self__.flag,meta47527__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async47526.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_47528){
var self__ = this;
var _47528__$1 = this;
return self__.meta47527;
});})(flag))
;

cljs.core.async.t_cljs$core$async47526.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47526.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async47526.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47526.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async47526.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47527","meta47527",1722990756,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async47526.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47526";

cljs.core.async.t_cljs$core$async47526.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47526");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47526.
 */
cljs.core.async.__GT_t_cljs$core$async47526 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47526(flag__$1,meta47527){
return (new cljs.core.async.t_cljs$core$async47526(flag__$1,meta47527));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async47526(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47529 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47529 = (function (flag,cb,meta47530){
this.flag = flag;
this.cb = cb;
this.meta47530 = meta47530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47531,meta47530__$1){
var self__ = this;
var _47531__$1 = this;
return (new cljs.core.async.t_cljs$core$async47529(self__.flag,self__.cb,meta47530__$1));
});

cljs.core.async.t_cljs$core$async47529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47531){
var self__ = this;
var _47531__$1 = this;
return self__.meta47530;
});

cljs.core.async.t_cljs$core$async47529.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47529.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async47529.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async47529.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async47529.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47530","meta47530",770594420,null)], null);
});

cljs.core.async.t_cljs$core$async47529.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47529.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47529";

cljs.core.async.t_cljs$core$async47529.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47529");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47529.
 */
cljs.core.async.__GT_t_cljs$core$async47529 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47529(flag__$1,cb__$1,meta47530){
return (new cljs.core.async.t_cljs$core$async47529(flag__$1,cb__$1,meta47530));
});

}

return (new cljs.core.async.t_cljs$core$async47529(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47532_SHARP_){
var G__47534 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47532_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47534) : fret.call(null,G__47534));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47533_SHARP_){
var G__47535 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47533_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47535) : fret.call(null,G__47535));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__49009 = (i + (1));
i = G__49009;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4736__auto__ = [];
var len__4730__auto___49014 = arguments.length;
var i__4731__auto___49015 = (0);
while(true){
if((i__4731__auto___49015 < len__4730__auto___49014)){
args__4736__auto__.push((arguments[i__4731__auto___49015]));

var G__49016 = (i__4731__auto___49015 + (1));
i__4731__auto___49015 = G__49016;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47538){
var map__47539 = p__47538;
var map__47539__$1 = (((((!((map__47539 == null))))?(((((map__47539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47539):map__47539);
var opts = map__47539__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47536){
var G__47537 = cljs.core.first(seq47536);
var seq47536__$1 = cljs.core.next(seq47536);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47537,seq47536__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__47542 = arguments.length;
switch (G__47542) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__47453__auto___49027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47453__auto___49027){
return (function (){
var f__47454__auto__ = (function (){var switch__47352__auto__ = ((function (c__47453__auto___49027){
return (function (state_47566){
var state_val_47567 = (state_47566[(1)]);
if((state_val_47567 === (7))){
var inst_47562 = (state_47566[(2)]);
var state_47566__$1 = state_47566;
var statearr_47568_49031 = state_47566__$1;
(statearr_47568_49031[(2)] = inst_47562);

(statearr_47568_49031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (1))){
var state_47566__$1 = state_47566;
var statearr_47569_49032 = state_47566__$1;
(statearr_47569_49032[(2)] = null);

(statearr_47569_49032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (4))){
var inst_47545 = (state_47566[(7)]);
var inst_47545__$1 = (state_47566[(2)]);
var inst_47546 = (inst_47545__$1 == null);
var state_47566__$1 = (function (){var statearr_47570 = state_47566;
(statearr_47570[(7)] = inst_47545__$1);

return statearr_47570;
})();
if(cljs.core.truth_(inst_47546)){
var statearr_47571_49033 = state_47566__$1;
(statearr_47571_49033[(1)] = (5));

} else {
var statearr_47572_49034 = state_47566__$1;
(statearr_47572_49034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (13))){
var state_47566__$1 = state_47566;
var statearr_47573_49036 = state_47566__$1;
(statearr_47573_49036[(2)] = null);

(statearr_47573_49036[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (6))){
var inst_47545 = (state_47566[(7)]);
var state_47566__$1 = state_47566;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47566__$1,(11),to,inst_47545);
} else {
if((state_val_47567 === (3))){
var inst_47564 = (state_47566[(2)]);
var state_47566__$1 = state_47566;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47566__$1,inst_47564);
} else {
if((state_val_47567 === (12))){
var state_47566__$1 = state_47566;
var statearr_47574_49039 = state_47566__$1;
(statearr_47574_49039[(2)] = null);

(statearr_47574_49039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (2))){
var state_47566__$1 = state_47566;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47566__$1,(4),from);
} else {
if((state_val_47567 === (11))){
var inst_47555 = (state_47566[(2)]);
var state_47566__$1 = state_47566;
if(cljs.core.truth_(inst_47555)){
var statearr_47575_49050 = state_47566__$1;
(statearr_47575_49050[(1)] = (12));

} else {
var statearr_47576_49051 = state_47566__$1;
(statearr_47576_49051[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (9))){
var state_47566__$1 = state_47566;
var statearr_47577_49055 = state_47566__$1;
(statearr_47577_49055[(2)] = null);

(statearr_47577_49055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (5))){
var state_47566__$1 = state_47566;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47578_49058 = state_47566__$1;
(statearr_47578_49058[(1)] = (8));

} else {
var statearr_47579_49059 = state_47566__$1;
(statearr_47579_49059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (14))){
var inst_47560 = (state_47566[(2)]);
var state_47566__$1 = state_47566;
var statearr_47580_49060 = state_47566__$1;
(statearr_47580_49060[(2)] = inst_47560);

(statearr_47580_49060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (10))){
var inst_47552 = (state_47566[(2)]);
var state_47566__$1 = state_47566;
var statearr_47581_49061 = state_47566__$1;
(statearr_47581_49061[(2)] = inst_47552);

(statearr_47581_49061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47567 === (8))){
var inst_47549 = cljs.core.async.close_BANG_(to);
var state_47566__$1 = state_47566;
var statearr_47582_49062 = state_47566__$1;
(statearr_47582_49062[(2)] = inst_47549);

(statearr_47582_49062[(1)] = (10));


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
});})(c__47453__auto___49027))
;
return ((function (switch__47352__auto__,c__47453__auto___49027){
return (function() {
var cljs$core$async$state_machine__47353__auto__ = null;
var cljs$core$async$state_machine__47353__auto____0 = (function (){
var statearr_47583 = [null,null,null,null,null,null,null,null];
(statearr_47583[(0)] = cljs$core$async$state_machine__47353__auto__);

(statearr_47583[(1)] = (1));

return statearr_47583;
});
var cljs$core$async$state_machine__47353__auto____1 = (function (state_47566){
while(true){
var ret_value__47354__auto__ = (function (){try{while(true){
var result__47355__auto__ = switch__47352__auto__(state_47566);
if(cljs.core.keyword_identical_QMARK_(result__47355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47355__auto__;
}
break;
}
}catch (e47584){if((e47584 instanceof Object)){
var ex__47356__auto__ = e47584;
var statearr_47585_49063 = state_47566;
(statearr_47585_49063[(5)] = ex__47356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47584;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49064 = state_47566;
state_47566 = G__49064;
continue;
} else {
return ret_value__47354__auto__;
}
break;
}
});
cljs$core$async$state_machine__47353__auto__ = function(state_47566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47353__auto____1.call(this,state_47566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47353__auto____0;
cljs$core$async$state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47353__auto____1;
return cljs$core$async$state_machine__47353__auto__;
})()
;})(switch__47352__auto__,c__47453__auto___49027))
})();
var state__47455__auto__ = (function (){var statearr_47586 = (f__47454__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47454__auto__.cljs$core$IFn$_invoke$arity$0() : f__47454__auto__.call(null));
(statearr_47586[(6)] = c__47453__auto___49027);

return statearr_47586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47455__auto__);
});})(c__47453__auto___49027))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__47587){
var vec__47588 = p__47587;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47588,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47588,(1),null);
var job = vec__47588;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__47453__auto___49065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47453__auto___49065,res,vec__47588,v,p,job,jobs,results){
return (function (){
var f__47454__auto__ = (function (){var switch__47352__auto__ = ((function (c__47453__auto___49065,res,vec__47588,v,p,job,jobs,results){
return (function (state_47595){
var state_val_47596 = (state_47595[(1)]);
if((state_val_47596 === (1))){
var state_47595__$1 = state_47595;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47595__$1,(2),res,v);
} else {
if((state_val_47596 === (2))){
var inst_47592 = (state_47595[(2)]);
var inst_47593 = cljs.core.async.close_BANG_(res);
var state_47595__$1 = (function (){var statearr_47597 = state_47595;
(statearr_47597[(7)] = inst_47592);

return statearr_47597;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47595__$1,inst_47593);
} else {
return null;
}
}
});})(c__47453__auto___49065,res,vec__47588,v,p,job,jobs,results))
;
return ((function (switch__47352__auto__,c__47453__auto___49065,res,vec__47588,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____0 = (function (){
var statearr_47598 = [null,null,null,null,null,null,null,null];
(statearr_47598[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__);

(statearr_47598[(1)] = (1));

return statearr_47598;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____1 = (function (state_47595){
while(true){
var ret_value__47354__auto__ = (function (){try{while(true){
var result__47355__auto__ = switch__47352__auto__(state_47595);
if(cljs.core.keyword_identical_QMARK_(result__47355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47355__auto__;
}
break;
}
}catch (e47599){if((e47599 instanceof Object)){
var ex__47356__auto__ = e47599;
var statearr_47600_49068 = state_47595;
(statearr_47600_49068[(5)] = ex__47356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47599;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49069 = state_47595;
state_47595 = G__49069;
continue;
} else {
return ret_value__47354__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__ = function(state_47595){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____1.call(this,state_47595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__;
})()
;})(switch__47352__auto__,c__47453__auto___49065,res,vec__47588,v,p,job,jobs,results))
})();
var state__47455__auto__ = (function (){var statearr_47601 = (f__47454__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47454__auto__.cljs$core$IFn$_invoke$arity$0() : f__47454__auto__.call(null));
(statearr_47601[(6)] = c__47453__auto___49065);

return statearr_47601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47455__auto__);
});})(c__47453__auto___49065,res,vec__47588,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__47602){
var vec__47603 = p__47602;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47603,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47603,(1),null);
var job = vec__47603;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___49074 = n;
var __49075 = (0);
while(true){
if((__49075 < n__4607__auto___49074)){
var G__47606_49077 = type;
var G__47606_49078__$1 = (((G__47606_49077 instanceof cljs.core.Keyword))?G__47606_49077.fqn:null);
switch (G__47606_49078__$1) {
case "compute":
var c__47453__auto___49080 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49075,c__47453__auto___49080,G__47606_49077,G__47606_49078__$1,n__4607__auto___49074,jobs,results,process,async){
return (function (){
var f__47454__auto__ = (function (){var switch__47352__auto__ = ((function (__49075,c__47453__auto___49080,G__47606_49077,G__47606_49078__$1,n__4607__auto___49074,jobs,results,process,async){
return (function (state_47619){
var state_val_47620 = (state_47619[(1)]);
if((state_val_47620 === (1))){
var state_47619__$1 = state_47619;
var statearr_47621_49082 = state_47619__$1;
(statearr_47621_49082[(2)] = null);

(statearr_47621_49082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47620 === (2))){
var state_47619__$1 = state_47619;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47619__$1,(4),jobs);
} else {
if((state_val_47620 === (3))){
var inst_47617 = (state_47619[(2)]);
var state_47619__$1 = state_47619;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47619__$1,inst_47617);
} else {
if((state_val_47620 === (4))){
var inst_47609 = (state_47619[(2)]);
var inst_47610 = process(inst_47609);
var state_47619__$1 = state_47619;
if(cljs.core.truth_(inst_47610)){
var statearr_47622_49084 = state_47619__$1;
(statearr_47622_49084[(1)] = (5));

} else {
var statearr_47623_49085 = state_47619__$1;
(statearr_47623_49085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47620 === (5))){
var state_47619__$1 = state_47619;
var statearr_47624_49086 = state_47619__$1;
(statearr_47624_49086[(2)] = null);

(statearr_47624_49086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47620 === (6))){
var state_47619__$1 = state_47619;
var statearr_47625_49087 = state_47619__$1;
(statearr_47625_49087[(2)] = null);

(statearr_47625_49087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47620 === (7))){
var inst_47615 = (state_47619[(2)]);
var state_47619__$1 = state_47619;
var statearr_47626_49089 = state_47619__$1;
(statearr_47626_49089[(2)] = inst_47615);

(statearr_47626_49089[(1)] = (3));


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
});})(__49075,c__47453__auto___49080,G__47606_49077,G__47606_49078__$1,n__4607__auto___49074,jobs,results,process,async))
;
return ((function (__49075,switch__47352__auto__,c__47453__auto___49080,G__47606_49077,G__47606_49078__$1,n__4607__auto___49074,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____0 = (function (){
var statearr_47627 = [null,null,null,null,null,null,null];
(statearr_47627[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__);

(statearr_47627[(1)] = (1));

return statearr_47627;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____1 = (function (state_47619){
while(true){
var ret_value__47354__auto__ = (function (){try{while(true){
var result__47355__auto__ = switch__47352__auto__(state_47619);
if(cljs.core.keyword_identical_QMARK_(result__47355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47355__auto__;
}
break;
}
}catch (e47628){if((e47628 instanceof Object)){
var ex__47356__auto__ = e47628;
var statearr_47629_49094 = state_47619;
(statearr_47629_49094[(5)] = ex__47356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47628;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49096 = state_47619;
state_47619 = G__49096;
continue;
} else {
return ret_value__47354__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__ = function(state_47619){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____1.call(this,state_47619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__;
})()
;})(__49075,switch__47352__auto__,c__47453__auto___49080,G__47606_49077,G__47606_49078__$1,n__4607__auto___49074,jobs,results,process,async))
})();
var state__47455__auto__ = (function (){var statearr_47630 = (f__47454__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47454__auto__.cljs$core$IFn$_invoke$arity$0() : f__47454__auto__.call(null));
(statearr_47630[(6)] = c__47453__auto___49080);

return statearr_47630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47455__auto__);
});})(__49075,c__47453__auto___49080,G__47606_49077,G__47606_49078__$1,n__4607__auto___49074,jobs,results,process,async))
);


break;
case "async":
var c__47453__auto___49098 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49075,c__47453__auto___49098,G__47606_49077,G__47606_49078__$1,n__4607__auto___49074,jobs,results,process,async){
return (function (){
var f__47454__auto__ = (function (){var switch__47352__auto__ = ((function (__49075,c__47453__auto___49098,G__47606_49077,G__47606_49078__$1,n__4607__auto___49074,jobs,results,process,async){
return (function (state_47643){
var state_val_47644 = (state_47643[(1)]);
if((state_val_47644 === (1))){
var state_47643__$1 = state_47643;
var statearr_47645_49101 = state_47643__$1;
(statearr_47645_49101[(2)] = null);

(statearr_47645_49101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47644 === (2))){
var state_47643__$1 = state_47643;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47643__$1,(4),jobs);
} else {
if((state_val_47644 === (3))){
var inst_47641 = (state_47643[(2)]);
var state_47643__$1 = state_47643;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47643__$1,inst_47641);
} else {
if((state_val_47644 === (4))){
var inst_47633 = (state_47643[(2)]);
var inst_47634 = async(inst_47633);
var state_47643__$1 = state_47643;
if(cljs.core.truth_(inst_47634)){
var statearr_47646_49105 = state_47643__$1;
(statearr_47646_49105[(1)] = (5));

} else {
var statearr_47647_49106 = state_47643__$1;
(statearr_47647_49106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47644 === (5))){
var state_47643__$1 = state_47643;
var statearr_47648_49107 = state_47643__$1;
(statearr_47648_49107[(2)] = null);

(statearr_47648_49107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47644 === (6))){
var state_47643__$1 = state_47643;
var statearr_47649_49108 = state_47643__$1;
(statearr_47649_49108[(2)] = null);

(statearr_47649_49108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47644 === (7))){
var inst_47639 = (state_47643[(2)]);
var state_47643__$1 = state_47643;
var statearr_47650_49109 = state_47643__$1;
(statearr_47650_49109[(2)] = inst_47639);

(statearr_47650_49109[(1)] = (3));


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
});})(__49075,c__47453__auto___49098,G__47606_49077,G__47606_49078__$1,n__4607__auto___49074,jobs,results,process,async))
;
return ((function (__49075,switch__47352__auto__,c__47453__auto___49098,G__47606_49077,G__47606_49078__$1,n__4607__auto___49074,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____0 = (function (){
var statearr_47651 = [null,null,null,null,null,null,null];
(statearr_47651[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__);

(statearr_47651[(1)] = (1));

return statearr_47651;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____1 = (function (state_47643){
while(true){
var ret_value__47354__auto__ = (function (){try{while(true){
var result__47355__auto__ = switch__47352__auto__(state_47643);
if(cljs.core.keyword_identical_QMARK_(result__47355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47355__auto__;
}
break;
}
}catch (e47652){if((e47652 instanceof Object)){
var ex__47356__auto__ = e47652;
var statearr_47653_49112 = state_47643;
(statearr_47653_49112[(5)] = ex__47356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47652;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49113 = state_47643;
state_47643 = G__49113;
continue;
} else {
return ret_value__47354__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__ = function(state_47643){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____1.call(this,state_47643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__;
})()
;})(__49075,switch__47352__auto__,c__47453__auto___49098,G__47606_49077,G__47606_49078__$1,n__4607__auto___49074,jobs,results,process,async))
})();
var state__47455__auto__ = (function (){var statearr_47654 = (f__47454__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47454__auto__.cljs$core$IFn$_invoke$arity$0() : f__47454__auto__.call(null));
(statearr_47654[(6)] = c__47453__auto___49098);

return statearr_47654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47455__auto__);
});})(__49075,c__47453__auto___49098,G__47606_49077,G__47606_49078__$1,n__4607__auto___49074,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47606_49078__$1)].join('')));

}

var G__49114 = (__49075 + (1));
__49075 = G__49114;
continue;
} else {
}
break;
}

var c__47453__auto___49115 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47453__auto___49115,jobs,results,process,async){
return (function (){
var f__47454__auto__ = (function (){var switch__47352__auto__ = ((function (c__47453__auto___49115,jobs,results,process,async){
return (function (state_47676){
var state_val_47677 = (state_47676[(1)]);
if((state_val_47677 === (7))){
var inst_47672 = (state_47676[(2)]);
var state_47676__$1 = state_47676;
var statearr_47678_49116 = state_47676__$1;
(statearr_47678_49116[(2)] = inst_47672);

(statearr_47678_49116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47677 === (1))){
var state_47676__$1 = state_47676;
var statearr_47679_49118 = state_47676__$1;
(statearr_47679_49118[(2)] = null);

(statearr_47679_49118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47677 === (4))){
var inst_47657 = (state_47676[(7)]);
var inst_47657__$1 = (state_47676[(2)]);
var inst_47658 = (inst_47657__$1 == null);
var state_47676__$1 = (function (){var statearr_47680 = state_47676;
(statearr_47680[(7)] = inst_47657__$1);

return statearr_47680;
})();
if(cljs.core.truth_(inst_47658)){
var statearr_47681_49120 = state_47676__$1;
(statearr_47681_49120[(1)] = (5));

} else {
var statearr_47682_49121 = state_47676__$1;
(statearr_47682_49121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47677 === (6))){
var inst_47657 = (state_47676[(7)]);
var inst_47662 = (state_47676[(8)]);
var inst_47662__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_47663 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47664 = [inst_47657,inst_47662__$1];
var inst_47665 = (new cljs.core.PersistentVector(null,2,(5),inst_47663,inst_47664,null));
var state_47676__$1 = (function (){var statearr_47683 = state_47676;
(statearr_47683[(8)] = inst_47662__$1);

return statearr_47683;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47676__$1,(8),jobs,inst_47665);
} else {
if((state_val_47677 === (3))){
var inst_47674 = (state_47676[(2)]);
var state_47676__$1 = state_47676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47676__$1,inst_47674);
} else {
if((state_val_47677 === (2))){
var state_47676__$1 = state_47676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47676__$1,(4),from);
} else {
if((state_val_47677 === (9))){
var inst_47669 = (state_47676[(2)]);
var state_47676__$1 = (function (){var statearr_47684 = state_47676;
(statearr_47684[(9)] = inst_47669);

return statearr_47684;
})();
var statearr_47685_49122 = state_47676__$1;
(statearr_47685_49122[(2)] = null);

(statearr_47685_49122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47677 === (5))){
var inst_47660 = cljs.core.async.close_BANG_(jobs);
var state_47676__$1 = state_47676;
var statearr_47686_49123 = state_47676__$1;
(statearr_47686_49123[(2)] = inst_47660);

(statearr_47686_49123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47677 === (8))){
var inst_47662 = (state_47676[(8)]);
var inst_47667 = (state_47676[(2)]);
var state_47676__$1 = (function (){var statearr_47687 = state_47676;
(statearr_47687[(10)] = inst_47667);

return statearr_47687;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47676__$1,(9),results,inst_47662);
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
});})(c__47453__auto___49115,jobs,results,process,async))
;
return ((function (switch__47352__auto__,c__47453__auto___49115,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____0 = (function (){
var statearr_47688 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47688[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__);

(statearr_47688[(1)] = (1));

return statearr_47688;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____1 = (function (state_47676){
while(true){
var ret_value__47354__auto__ = (function (){try{while(true){
var result__47355__auto__ = switch__47352__auto__(state_47676);
if(cljs.core.keyword_identical_QMARK_(result__47355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47355__auto__;
}
break;
}
}catch (e47689){if((e47689 instanceof Object)){
var ex__47356__auto__ = e47689;
var statearr_47690_49126 = state_47676;
(statearr_47690_49126[(5)] = ex__47356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47689;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49129 = state_47676;
state_47676 = G__49129;
continue;
} else {
return ret_value__47354__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__ = function(state_47676){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____1.call(this,state_47676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__;
})()
;})(switch__47352__auto__,c__47453__auto___49115,jobs,results,process,async))
})();
var state__47455__auto__ = (function (){var statearr_47691 = (f__47454__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47454__auto__.cljs$core$IFn$_invoke$arity$0() : f__47454__auto__.call(null));
(statearr_47691[(6)] = c__47453__auto___49115);

return statearr_47691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47455__auto__);
});})(c__47453__auto___49115,jobs,results,process,async))
);


var c__47453__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47453__auto__,jobs,results,process,async){
return (function (){
var f__47454__auto__ = (function (){var switch__47352__auto__ = ((function (c__47453__auto__,jobs,results,process,async){
return (function (state_47729){
var state_val_47730 = (state_47729[(1)]);
if((state_val_47730 === (7))){
var inst_47725 = (state_47729[(2)]);
var state_47729__$1 = state_47729;
var statearr_47731_49132 = state_47729__$1;
(statearr_47731_49132[(2)] = inst_47725);

(statearr_47731_49132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47730 === (20))){
var state_47729__$1 = state_47729;
var statearr_47732_49135 = state_47729__$1;
(statearr_47732_49135[(2)] = null);

(statearr_47732_49135[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47730 === (1))){
var state_47729__$1 = state_47729;
var statearr_47733_49136 = state_47729__$1;
(statearr_47733_49136[(2)] = null);

(statearr_47733_49136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47730 === (4))){
var inst_47694 = (state_47729[(7)]);
var inst_47694__$1 = (state_47729[(2)]);
var inst_47695 = (inst_47694__$1 == null);
var state_47729__$1 = (function (){var statearr_47734 = state_47729;
(statearr_47734[(7)] = inst_47694__$1);

return statearr_47734;
})();
if(cljs.core.truth_(inst_47695)){
var statearr_47735_49139 = state_47729__$1;
(statearr_47735_49139[(1)] = (5));

} else {
var statearr_47736_49140 = state_47729__$1;
(statearr_47736_49140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47730 === (15))){
var inst_47707 = (state_47729[(8)]);
var state_47729__$1 = state_47729;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47729__$1,(18),to,inst_47707);
} else {
if((state_val_47730 === (21))){
var inst_47720 = (state_47729[(2)]);
var state_47729__$1 = state_47729;
var statearr_47737_49142 = state_47729__$1;
(statearr_47737_49142[(2)] = inst_47720);

(statearr_47737_49142[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47730 === (13))){
var inst_47722 = (state_47729[(2)]);
var state_47729__$1 = (function (){var statearr_47738 = state_47729;
(statearr_47738[(9)] = inst_47722);

return statearr_47738;
})();
var statearr_47739_49144 = state_47729__$1;
(statearr_47739_49144[(2)] = null);

(statearr_47739_49144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47730 === (6))){
var inst_47694 = (state_47729[(7)]);
var state_47729__$1 = state_47729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47729__$1,(11),inst_47694);
} else {
if((state_val_47730 === (17))){
var inst_47715 = (state_47729[(2)]);
var state_47729__$1 = state_47729;
if(cljs.core.truth_(inst_47715)){
var statearr_47740_49147 = state_47729__$1;
(statearr_47740_49147[(1)] = (19));

} else {
var statearr_47741_49148 = state_47729__$1;
(statearr_47741_49148[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47730 === (3))){
var inst_47727 = (state_47729[(2)]);
var state_47729__$1 = state_47729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47729__$1,inst_47727);
} else {
if((state_val_47730 === (12))){
var inst_47704 = (state_47729[(10)]);
var state_47729__$1 = state_47729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47729__$1,(14),inst_47704);
} else {
if((state_val_47730 === (2))){
var state_47729__$1 = state_47729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47729__$1,(4),results);
} else {
if((state_val_47730 === (19))){
var state_47729__$1 = state_47729;
var statearr_47742_49149 = state_47729__$1;
(statearr_47742_49149[(2)] = null);

(statearr_47742_49149[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47730 === (11))){
var inst_47704 = (state_47729[(2)]);
var state_47729__$1 = (function (){var statearr_47743 = state_47729;
(statearr_47743[(10)] = inst_47704);

return statearr_47743;
})();
var statearr_47744_49150 = state_47729__$1;
(statearr_47744_49150[(2)] = null);

(statearr_47744_49150[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47730 === (9))){
var state_47729__$1 = state_47729;
var statearr_47745_49151 = state_47729__$1;
(statearr_47745_49151[(2)] = null);

(statearr_47745_49151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47730 === (5))){
var state_47729__$1 = state_47729;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47746_49153 = state_47729__$1;
(statearr_47746_49153[(1)] = (8));

} else {
var statearr_47747_49154 = state_47729__$1;
(statearr_47747_49154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47730 === (14))){
var inst_47709 = (state_47729[(11)]);
var inst_47707 = (state_47729[(8)]);
var inst_47707__$1 = (state_47729[(2)]);
var inst_47708 = (inst_47707__$1 == null);
var inst_47709__$1 = cljs.core.not(inst_47708);
var state_47729__$1 = (function (){var statearr_47748 = state_47729;
(statearr_47748[(11)] = inst_47709__$1);

(statearr_47748[(8)] = inst_47707__$1);

return statearr_47748;
})();
if(inst_47709__$1){
var statearr_47749_49155 = state_47729__$1;
(statearr_47749_49155[(1)] = (15));

} else {
var statearr_47750_49156 = state_47729__$1;
(statearr_47750_49156[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47730 === (16))){
var inst_47709 = (state_47729[(11)]);
var state_47729__$1 = state_47729;
var statearr_47751_49157 = state_47729__$1;
(statearr_47751_49157[(2)] = inst_47709);

(statearr_47751_49157[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47730 === (10))){
var inst_47701 = (state_47729[(2)]);
var state_47729__$1 = state_47729;
var statearr_47752_49158 = state_47729__$1;
(statearr_47752_49158[(2)] = inst_47701);

(statearr_47752_49158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47730 === (18))){
var inst_47712 = (state_47729[(2)]);
var state_47729__$1 = state_47729;
var statearr_47753_49159 = state_47729__$1;
(statearr_47753_49159[(2)] = inst_47712);

(statearr_47753_49159[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47730 === (8))){
var inst_47698 = cljs.core.async.close_BANG_(to);
var state_47729__$1 = state_47729;
var statearr_47754_49160 = state_47729__$1;
(statearr_47754_49160[(2)] = inst_47698);

(statearr_47754_49160[(1)] = (10));


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
});})(c__47453__auto__,jobs,results,process,async))
;
return ((function (switch__47352__auto__,c__47453__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____0 = (function (){
var statearr_47755 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47755[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__);

(statearr_47755[(1)] = (1));

return statearr_47755;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____1 = (function (state_47729){
while(true){
var ret_value__47354__auto__ = (function (){try{while(true){
var result__47355__auto__ = switch__47352__auto__(state_47729);
if(cljs.core.keyword_identical_QMARK_(result__47355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47355__auto__;
}
break;
}
}catch (e47756){if((e47756 instanceof Object)){
var ex__47356__auto__ = e47756;
var statearr_47757_49165 = state_47729;
(statearr_47757_49165[(5)] = ex__47356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47756;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49169 = state_47729;
state_47729 = G__49169;
continue;
} else {
return ret_value__47354__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__ = function(state_47729){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____1.call(this,state_47729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47353__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47353__auto__;
})()
;})(switch__47352__auto__,c__47453__auto__,jobs,results,process,async))
})();
var state__47455__auto__ = (function (){var statearr_47758 = (f__47454__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47454__auto__.cljs$core$IFn$_invoke$arity$0() : f__47454__auto__.call(null));
(statearr_47758[(6)] = c__47453__auto__);

return statearr_47758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47455__auto__);
});})(c__47453__auto__,jobs,results,process,async))
);

return c__47453__auto__;
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
var G__47760 = arguments.length;
switch (G__47760) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__47762 = arguments.length;
switch (G__47762) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__47764 = arguments.length;
switch (G__47764) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__47453__auto___49195 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47453__auto___49195,tc,fc){
return (function (){
var f__47454__auto__ = (function (){var switch__47352__auto__ = ((function (c__47453__auto___49195,tc,fc){
return (function (state_47790){
var state_val_47791 = (state_47790[(1)]);
if((state_val_47791 === (7))){
var inst_47786 = (state_47790[(2)]);
var state_47790__$1 = state_47790;
var statearr_47792_49203 = state_47790__$1;
(statearr_47792_49203[(2)] = inst_47786);

(statearr_47792_49203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47791 === (1))){
var state_47790__$1 = state_47790;
var statearr_47793_49207 = state_47790__$1;
(statearr_47793_49207[(2)] = null);

(statearr_47793_49207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47791 === (4))){
var inst_47767 = (state_47790[(7)]);
var inst_47767__$1 = (state_47790[(2)]);
var inst_47768 = (inst_47767__$1 == null);
var state_47790__$1 = (function (){var statearr_47794 = state_47790;
(statearr_47794[(7)] = inst_47767__$1);

return statearr_47794;
})();
if(cljs.core.truth_(inst_47768)){
var statearr_47795_49215 = state_47790__$1;
(statearr_47795_49215[(1)] = (5));

} else {
var statearr_47796_49220 = state_47790__$1;
(statearr_47796_49220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47791 === (13))){
var state_47790__$1 = state_47790;
var statearr_47797_49222 = state_47790__$1;
(statearr_47797_49222[(2)] = null);

(statearr_47797_49222[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47791 === (6))){
var inst_47767 = (state_47790[(7)]);
var inst_47773 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47767) : p.call(null,inst_47767));
var state_47790__$1 = state_47790;
if(cljs.core.truth_(inst_47773)){
var statearr_47798_49227 = state_47790__$1;
(statearr_47798_49227[(1)] = (9));

} else {
var statearr_47799_49228 = state_47790__$1;
(statearr_47799_49228[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47791 === (3))){
var inst_47788 = (state_47790[(2)]);
var state_47790__$1 = state_47790;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47790__$1,inst_47788);
} else {
if((state_val_47791 === (12))){
var state_47790__$1 = state_47790;
var statearr_47800_49236 = state_47790__$1;
(statearr_47800_49236[(2)] = null);

(statearr_47800_49236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47791 === (2))){
var state_47790__$1 = state_47790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47790__$1,(4),ch);
} else {
if((state_val_47791 === (11))){
var inst_47767 = (state_47790[(7)]);
var inst_47777 = (state_47790[(2)]);
var state_47790__$1 = state_47790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47790__$1,(8),inst_47777,inst_47767);
} else {
if((state_val_47791 === (9))){
var state_47790__$1 = state_47790;
var statearr_47801_49240 = state_47790__$1;
(statearr_47801_49240[(2)] = tc);

(statearr_47801_49240[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47791 === (5))){
var inst_47770 = cljs.core.async.close_BANG_(tc);
var inst_47771 = cljs.core.async.close_BANG_(fc);
var state_47790__$1 = (function (){var statearr_47802 = state_47790;
(statearr_47802[(8)] = inst_47770);

return statearr_47802;
})();
var statearr_47803_49242 = state_47790__$1;
(statearr_47803_49242[(2)] = inst_47771);

(statearr_47803_49242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47791 === (14))){
var inst_47784 = (state_47790[(2)]);
var state_47790__$1 = state_47790;
var statearr_47804_49247 = state_47790__$1;
(statearr_47804_49247[(2)] = inst_47784);

(statearr_47804_49247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47791 === (10))){
var state_47790__$1 = state_47790;
var statearr_47805_49250 = state_47790__$1;
(statearr_47805_49250[(2)] = fc);

(statearr_47805_49250[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47791 === (8))){
var inst_47779 = (state_47790[(2)]);
var state_47790__$1 = state_47790;
if(cljs.core.truth_(inst_47779)){
var statearr_47806_49259 = state_47790__$1;
(statearr_47806_49259[(1)] = (12));

} else {
var statearr_47807_49260 = state_47790__$1;
(statearr_47807_49260[(1)] = (13));

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
});})(c__47453__auto___49195,tc,fc))
;
return ((function (switch__47352__auto__,c__47453__auto___49195,tc,fc){
return (function() {
var cljs$core$async$state_machine__47353__auto__ = null;
var cljs$core$async$state_machine__47353__auto____0 = (function (){
var statearr_47808 = [null,null,null,null,null,null,null,null,null];
(statearr_47808[(0)] = cljs$core$async$state_machine__47353__auto__);

(statearr_47808[(1)] = (1));

return statearr_47808;
});
var cljs$core$async$state_machine__47353__auto____1 = (function (state_47790){
while(true){
var ret_value__47354__auto__ = (function (){try{while(true){
var result__47355__auto__ = switch__47352__auto__(state_47790);
if(cljs.core.keyword_identical_QMARK_(result__47355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47355__auto__;
}
break;
}
}catch (e47809){if((e47809 instanceof Object)){
var ex__47356__auto__ = e47809;
var statearr_47810_49265 = state_47790;
(statearr_47810_49265[(5)] = ex__47356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47809;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49271 = state_47790;
state_47790 = G__49271;
continue;
} else {
return ret_value__47354__auto__;
}
break;
}
});
cljs$core$async$state_machine__47353__auto__ = function(state_47790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47353__auto____1.call(this,state_47790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47353__auto____0;
cljs$core$async$state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47353__auto____1;
return cljs$core$async$state_machine__47353__auto__;
})()
;})(switch__47352__auto__,c__47453__auto___49195,tc,fc))
})();
var state__47455__auto__ = (function (){var statearr_47811 = (f__47454__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47454__auto__.cljs$core$IFn$_invoke$arity$0() : f__47454__auto__.call(null));
(statearr_47811[(6)] = c__47453__auto___49195);

return statearr_47811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47455__auto__);
});})(c__47453__auto___49195,tc,fc))
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
var c__47453__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47453__auto__){
return (function (){
var f__47454__auto__ = (function (){var switch__47352__auto__ = ((function (c__47453__auto__){
return (function (state_47832){
var state_val_47833 = (state_47832[(1)]);
if((state_val_47833 === (7))){
var inst_47828 = (state_47832[(2)]);
var state_47832__$1 = state_47832;
var statearr_47834_49275 = state_47832__$1;
(statearr_47834_49275[(2)] = inst_47828);

(statearr_47834_49275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (1))){
var inst_47812 = init;
var state_47832__$1 = (function (){var statearr_47835 = state_47832;
(statearr_47835[(7)] = inst_47812);

return statearr_47835;
})();
var statearr_47836_49284 = state_47832__$1;
(statearr_47836_49284[(2)] = null);

(statearr_47836_49284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (4))){
var inst_47815 = (state_47832[(8)]);
var inst_47815__$1 = (state_47832[(2)]);
var inst_47816 = (inst_47815__$1 == null);
var state_47832__$1 = (function (){var statearr_47837 = state_47832;
(statearr_47837[(8)] = inst_47815__$1);

return statearr_47837;
})();
if(cljs.core.truth_(inst_47816)){
var statearr_47838_49287 = state_47832__$1;
(statearr_47838_49287[(1)] = (5));

} else {
var statearr_47839_49289 = state_47832__$1;
(statearr_47839_49289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (6))){
var inst_47815 = (state_47832[(8)]);
var inst_47819 = (state_47832[(9)]);
var inst_47812 = (state_47832[(7)]);
var inst_47819__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_47812,inst_47815) : f.call(null,inst_47812,inst_47815));
var inst_47820 = cljs.core.reduced_QMARK_(inst_47819__$1);
var state_47832__$1 = (function (){var statearr_47840 = state_47832;
(statearr_47840[(9)] = inst_47819__$1);

return statearr_47840;
})();
if(inst_47820){
var statearr_47841_49297 = state_47832__$1;
(statearr_47841_49297[(1)] = (8));

} else {
var statearr_47842_49298 = state_47832__$1;
(statearr_47842_49298[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (3))){
var inst_47830 = (state_47832[(2)]);
var state_47832__$1 = state_47832;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47832__$1,inst_47830);
} else {
if((state_val_47833 === (2))){
var state_47832__$1 = state_47832;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47832__$1,(4),ch);
} else {
if((state_val_47833 === (9))){
var inst_47819 = (state_47832[(9)]);
var inst_47812 = inst_47819;
var state_47832__$1 = (function (){var statearr_47843 = state_47832;
(statearr_47843[(7)] = inst_47812);

return statearr_47843;
})();
var statearr_47844_49302 = state_47832__$1;
(statearr_47844_49302[(2)] = null);

(statearr_47844_49302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (5))){
var inst_47812 = (state_47832[(7)]);
var state_47832__$1 = state_47832;
var statearr_47845_49305 = state_47832__$1;
(statearr_47845_49305[(2)] = inst_47812);

(statearr_47845_49305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (10))){
var inst_47826 = (state_47832[(2)]);
var state_47832__$1 = state_47832;
var statearr_47846_49306 = state_47832__$1;
(statearr_47846_49306[(2)] = inst_47826);

(statearr_47846_49306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (8))){
var inst_47819 = (state_47832[(9)]);
var inst_47822 = cljs.core.deref(inst_47819);
var state_47832__$1 = state_47832;
var statearr_47847_49308 = state_47832__$1;
(statearr_47847_49308[(2)] = inst_47822);

(statearr_47847_49308[(1)] = (10));


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
});})(c__47453__auto__))
;
return ((function (switch__47352__auto__,c__47453__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__47353__auto__ = null;
var cljs$core$async$reduce_$_state_machine__47353__auto____0 = (function (){
var statearr_47848 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47848[(0)] = cljs$core$async$reduce_$_state_machine__47353__auto__);

(statearr_47848[(1)] = (1));

return statearr_47848;
});
var cljs$core$async$reduce_$_state_machine__47353__auto____1 = (function (state_47832){
while(true){
var ret_value__47354__auto__ = (function (){try{while(true){
var result__47355__auto__ = switch__47352__auto__(state_47832);
if(cljs.core.keyword_identical_QMARK_(result__47355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47355__auto__;
}
break;
}
}catch (e47849){if((e47849 instanceof Object)){
var ex__47356__auto__ = e47849;
var statearr_47850_49315 = state_47832;
(statearr_47850_49315[(5)] = ex__47356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47849;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49316 = state_47832;
state_47832 = G__49316;
continue;
} else {
return ret_value__47354__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__47353__auto__ = function(state_47832){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__47353__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__47353__auto____1.call(this,state_47832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__47353__auto____0;
cljs$core$async$reduce_$_state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__47353__auto____1;
return cljs$core$async$reduce_$_state_machine__47353__auto__;
})()
;})(switch__47352__auto__,c__47453__auto__))
})();
var state__47455__auto__ = (function (){var statearr_47851 = (f__47454__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47454__auto__.cljs$core$IFn$_invoke$arity$0() : f__47454__auto__.call(null));
(statearr_47851[(6)] = c__47453__auto__);

return statearr_47851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47455__auto__);
});})(c__47453__auto__))
);

return c__47453__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__47453__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47453__auto__,f__$1){
return (function (){
var f__47454__auto__ = (function (){var switch__47352__auto__ = ((function (c__47453__auto__,f__$1){
return (function (state_47857){
var state_val_47858 = (state_47857[(1)]);
if((state_val_47858 === (1))){
var inst_47852 = cljs.core.async.reduce(f__$1,init,ch);
var state_47857__$1 = state_47857;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47857__$1,(2),inst_47852);
} else {
if((state_val_47858 === (2))){
var inst_47854 = (state_47857[(2)]);
var inst_47855 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_47854) : f__$1.call(null,inst_47854));
var state_47857__$1 = state_47857;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47857__$1,inst_47855);
} else {
return null;
}
}
});})(c__47453__auto__,f__$1))
;
return ((function (switch__47352__auto__,c__47453__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__47353__auto__ = null;
var cljs$core$async$transduce_$_state_machine__47353__auto____0 = (function (){
var statearr_47859 = [null,null,null,null,null,null,null];
(statearr_47859[(0)] = cljs$core$async$transduce_$_state_machine__47353__auto__);

(statearr_47859[(1)] = (1));

return statearr_47859;
});
var cljs$core$async$transduce_$_state_machine__47353__auto____1 = (function (state_47857){
while(true){
var ret_value__47354__auto__ = (function (){try{while(true){
var result__47355__auto__ = switch__47352__auto__(state_47857);
if(cljs.core.keyword_identical_QMARK_(result__47355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47355__auto__;
}
break;
}
}catch (e47860){if((e47860 instanceof Object)){
var ex__47356__auto__ = e47860;
var statearr_47861_49329 = state_47857;
(statearr_47861_49329[(5)] = ex__47356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47860;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49330 = state_47857;
state_47857 = G__49330;
continue;
} else {
return ret_value__47354__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__47353__auto__ = function(state_47857){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__47353__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__47353__auto____1.call(this,state_47857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__47353__auto____0;
cljs$core$async$transduce_$_state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__47353__auto____1;
return cljs$core$async$transduce_$_state_machine__47353__auto__;
})()
;})(switch__47352__auto__,c__47453__auto__,f__$1))
})();
var state__47455__auto__ = (function (){var statearr_47862 = (f__47454__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47454__auto__.cljs$core$IFn$_invoke$arity$0() : f__47454__auto__.call(null));
(statearr_47862[(6)] = c__47453__auto__);

return statearr_47862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47455__auto__);
});})(c__47453__auto__,f__$1))
);

return c__47453__auto__;
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
var G__47864 = arguments.length;
switch (G__47864) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__47453__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47453__auto__){
return (function (){
var f__47454__auto__ = (function (){var switch__47352__auto__ = ((function (c__47453__auto__){
return (function (state_47889){
var state_val_47890 = (state_47889[(1)]);
if((state_val_47890 === (7))){
var inst_47871 = (state_47889[(2)]);
var state_47889__$1 = state_47889;
var statearr_47891_49343 = state_47889__$1;
(statearr_47891_49343[(2)] = inst_47871);

(statearr_47891_49343[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47890 === (1))){
var inst_47865 = cljs.core.seq(coll);
var inst_47866 = inst_47865;
var state_47889__$1 = (function (){var statearr_47892 = state_47889;
(statearr_47892[(7)] = inst_47866);

return statearr_47892;
})();
var statearr_47893_49349 = state_47889__$1;
(statearr_47893_49349[(2)] = null);

(statearr_47893_49349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47890 === (4))){
var inst_47866 = (state_47889[(7)]);
var inst_47869 = cljs.core.first(inst_47866);
var state_47889__$1 = state_47889;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47889__$1,(7),ch,inst_47869);
} else {
if((state_val_47890 === (13))){
var inst_47883 = (state_47889[(2)]);
var state_47889__$1 = state_47889;
var statearr_47894_49352 = state_47889__$1;
(statearr_47894_49352[(2)] = inst_47883);

(statearr_47894_49352[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47890 === (6))){
var inst_47874 = (state_47889[(2)]);
var state_47889__$1 = state_47889;
if(cljs.core.truth_(inst_47874)){
var statearr_47895_49359 = state_47889__$1;
(statearr_47895_49359[(1)] = (8));

} else {
var statearr_47896_49360 = state_47889__$1;
(statearr_47896_49360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47890 === (3))){
var inst_47887 = (state_47889[(2)]);
var state_47889__$1 = state_47889;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47889__$1,inst_47887);
} else {
if((state_val_47890 === (12))){
var state_47889__$1 = state_47889;
var statearr_47897_49362 = state_47889__$1;
(statearr_47897_49362[(2)] = null);

(statearr_47897_49362[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47890 === (2))){
var inst_47866 = (state_47889[(7)]);
var state_47889__$1 = state_47889;
if(cljs.core.truth_(inst_47866)){
var statearr_47898_49365 = state_47889__$1;
(statearr_47898_49365[(1)] = (4));

} else {
var statearr_47899_49366 = state_47889__$1;
(statearr_47899_49366[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47890 === (11))){
var inst_47880 = cljs.core.async.close_BANG_(ch);
var state_47889__$1 = state_47889;
var statearr_47900_49369 = state_47889__$1;
(statearr_47900_49369[(2)] = inst_47880);

(statearr_47900_49369[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47890 === (9))){
var state_47889__$1 = state_47889;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47901_49370 = state_47889__$1;
(statearr_47901_49370[(1)] = (11));

} else {
var statearr_47902_49371 = state_47889__$1;
(statearr_47902_49371[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47890 === (5))){
var inst_47866 = (state_47889[(7)]);
var state_47889__$1 = state_47889;
var statearr_47903_49373 = state_47889__$1;
(statearr_47903_49373[(2)] = inst_47866);

(statearr_47903_49373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47890 === (10))){
var inst_47885 = (state_47889[(2)]);
var state_47889__$1 = state_47889;
var statearr_47904_49377 = state_47889__$1;
(statearr_47904_49377[(2)] = inst_47885);

(statearr_47904_49377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47890 === (8))){
var inst_47866 = (state_47889[(7)]);
var inst_47876 = cljs.core.next(inst_47866);
var inst_47866__$1 = inst_47876;
var state_47889__$1 = (function (){var statearr_47905 = state_47889;
(statearr_47905[(7)] = inst_47866__$1);

return statearr_47905;
})();
var statearr_47906_49382 = state_47889__$1;
(statearr_47906_49382[(2)] = null);

(statearr_47906_49382[(1)] = (2));


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
});})(c__47453__auto__))
;
return ((function (switch__47352__auto__,c__47453__auto__){
return (function() {
var cljs$core$async$state_machine__47353__auto__ = null;
var cljs$core$async$state_machine__47353__auto____0 = (function (){
var statearr_47907 = [null,null,null,null,null,null,null,null];
(statearr_47907[(0)] = cljs$core$async$state_machine__47353__auto__);

(statearr_47907[(1)] = (1));

return statearr_47907;
});
var cljs$core$async$state_machine__47353__auto____1 = (function (state_47889){
while(true){
var ret_value__47354__auto__ = (function (){try{while(true){
var result__47355__auto__ = switch__47352__auto__(state_47889);
if(cljs.core.keyword_identical_QMARK_(result__47355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47355__auto__;
}
break;
}
}catch (e47908){if((e47908 instanceof Object)){
var ex__47356__auto__ = e47908;
var statearr_47909_49390 = state_47889;
(statearr_47909_49390[(5)] = ex__47356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47908;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49399 = state_47889;
state_47889 = G__49399;
continue;
} else {
return ret_value__47354__auto__;
}
break;
}
});
cljs$core$async$state_machine__47353__auto__ = function(state_47889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47353__auto____1.call(this,state_47889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47353__auto____0;
cljs$core$async$state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47353__auto____1;
return cljs$core$async$state_machine__47353__auto__;
})()
;})(switch__47352__auto__,c__47453__auto__))
})();
var state__47455__auto__ = (function (){var statearr_47910 = (f__47454__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47454__auto__.cljs$core$IFn$_invoke$arity$0() : f__47454__auto__.call(null));
(statearr_47910[(6)] = c__47453__auto__);

return statearr_47910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47455__auto__);
});})(c__47453__auto__))
);

return c__47453__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47911 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47911 = (function (ch,cs,meta47912){
this.ch = ch;
this.cs = cs;
this.meta47912 = meta47912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_47913,meta47912__$1){
var self__ = this;
var _47913__$1 = this;
return (new cljs.core.async.t_cljs$core$async47911(self__.ch,self__.cs,meta47912__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async47911.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_47913){
var self__ = this;
var _47913__$1 = this;
return self__.meta47912;
});})(cs))
;

cljs.core.async.t_cljs$core$async47911.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47911.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async47911.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47911.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47911.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47911.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47911.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47912","meta47912",493836888,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async47911.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47911.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47911";

cljs.core.async.t_cljs$core$async47911.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47911");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47911.
 */
cljs.core.async.__GT_t_cljs$core$async47911 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async47911(ch__$1,cs__$1,meta47912){
return (new cljs.core.async.t_cljs$core$async47911(ch__$1,cs__$1,meta47912));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async47911(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__47453__auto___49421 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47453__auto___49421,cs,m,dchan,dctr,done){
return (function (){
var f__47454__auto__ = (function (){var switch__47352__auto__ = ((function (c__47453__auto___49421,cs,m,dchan,dctr,done){
return (function (state_48048){
var state_val_48049 = (state_48048[(1)]);
if((state_val_48049 === (7))){
var inst_48044 = (state_48048[(2)]);
var state_48048__$1 = state_48048;
var statearr_48050_49423 = state_48048__$1;
(statearr_48050_49423[(2)] = inst_48044);

(statearr_48050_49423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (20))){
var inst_47947 = (state_48048[(7)]);
var inst_47959 = cljs.core.first(inst_47947);
var inst_47960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47959,(0),null);
var inst_47961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47959,(1),null);
var state_48048__$1 = (function (){var statearr_48051 = state_48048;
(statearr_48051[(8)] = inst_47960);

return statearr_48051;
})();
if(cljs.core.truth_(inst_47961)){
var statearr_48052_49426 = state_48048__$1;
(statearr_48052_49426[(1)] = (22));

} else {
var statearr_48053_49428 = state_48048__$1;
(statearr_48053_49428[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (27))){
var inst_47989 = (state_48048[(9)]);
var inst_47991 = (state_48048[(10)]);
var inst_47996 = (state_48048[(11)]);
var inst_47916 = (state_48048[(12)]);
var inst_47996__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47989,inst_47991);
var inst_47997 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47996__$1,inst_47916,done);
var state_48048__$1 = (function (){var statearr_48054 = state_48048;
(statearr_48054[(11)] = inst_47996__$1);

return statearr_48054;
})();
if(cljs.core.truth_(inst_47997)){
var statearr_48055_49436 = state_48048__$1;
(statearr_48055_49436[(1)] = (30));

} else {
var statearr_48056_49437 = state_48048__$1;
(statearr_48056_49437[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (1))){
var state_48048__$1 = state_48048;
var statearr_48057_49438 = state_48048__$1;
(statearr_48057_49438[(2)] = null);

(statearr_48057_49438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (24))){
var inst_47947 = (state_48048[(7)]);
var inst_47966 = (state_48048[(2)]);
var inst_47967 = cljs.core.next(inst_47947);
var inst_47925 = inst_47967;
var inst_47926 = null;
var inst_47927 = (0);
var inst_47928 = (0);
var state_48048__$1 = (function (){var statearr_48058 = state_48048;
(statearr_48058[(13)] = inst_47925);

(statearr_48058[(14)] = inst_47926);

(statearr_48058[(15)] = inst_47927);

(statearr_48058[(16)] = inst_47966);

(statearr_48058[(17)] = inst_47928);

return statearr_48058;
})();
var statearr_48059_49440 = state_48048__$1;
(statearr_48059_49440[(2)] = null);

(statearr_48059_49440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (39))){
var state_48048__$1 = state_48048;
var statearr_48063_49441 = state_48048__$1;
(statearr_48063_49441[(2)] = null);

(statearr_48063_49441[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (4))){
var inst_47916 = (state_48048[(12)]);
var inst_47916__$1 = (state_48048[(2)]);
var inst_47917 = (inst_47916__$1 == null);
var state_48048__$1 = (function (){var statearr_48064 = state_48048;
(statearr_48064[(12)] = inst_47916__$1);

return statearr_48064;
})();
if(cljs.core.truth_(inst_47917)){
var statearr_48065_49446 = state_48048__$1;
(statearr_48065_49446[(1)] = (5));

} else {
var statearr_48066_49447 = state_48048__$1;
(statearr_48066_49447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (15))){
var inst_47925 = (state_48048[(13)]);
var inst_47926 = (state_48048[(14)]);
var inst_47927 = (state_48048[(15)]);
var inst_47928 = (state_48048[(17)]);
var inst_47943 = (state_48048[(2)]);
var inst_47944 = (inst_47928 + (1));
var tmp48060 = inst_47925;
var tmp48061 = inst_47926;
var tmp48062 = inst_47927;
var inst_47925__$1 = tmp48060;
var inst_47926__$1 = tmp48061;
var inst_47927__$1 = tmp48062;
var inst_47928__$1 = inst_47944;
var state_48048__$1 = (function (){var statearr_48067 = state_48048;
(statearr_48067[(18)] = inst_47943);

(statearr_48067[(13)] = inst_47925__$1);

(statearr_48067[(14)] = inst_47926__$1);

(statearr_48067[(15)] = inst_47927__$1);

(statearr_48067[(17)] = inst_47928__$1);

return statearr_48067;
})();
var statearr_48068_49451 = state_48048__$1;
(statearr_48068_49451[(2)] = null);

(statearr_48068_49451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (21))){
var inst_47970 = (state_48048[(2)]);
var state_48048__$1 = state_48048;
var statearr_48072_49453 = state_48048__$1;
(statearr_48072_49453[(2)] = inst_47970);

(statearr_48072_49453[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (31))){
var inst_47996 = (state_48048[(11)]);
var inst_48000 = done(null);
var inst_48001 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47996);
var state_48048__$1 = (function (){var statearr_48073 = state_48048;
(statearr_48073[(19)] = inst_48000);

return statearr_48073;
})();
var statearr_48074_49454 = state_48048__$1;
(statearr_48074_49454[(2)] = inst_48001);

(statearr_48074_49454[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (32))){
var inst_47989 = (state_48048[(9)]);
var inst_47991 = (state_48048[(10)]);
var inst_47990 = (state_48048[(20)]);
var inst_47988 = (state_48048[(21)]);
var inst_48003 = (state_48048[(2)]);
var inst_48004 = (inst_47991 + (1));
var tmp48069 = inst_47989;
var tmp48070 = inst_47990;
var tmp48071 = inst_47988;
var inst_47988__$1 = tmp48071;
var inst_47989__$1 = tmp48069;
var inst_47990__$1 = tmp48070;
var inst_47991__$1 = inst_48004;
var state_48048__$1 = (function (){var statearr_48075 = state_48048;
(statearr_48075[(9)] = inst_47989__$1);

(statearr_48075[(10)] = inst_47991__$1);

(statearr_48075[(20)] = inst_47990__$1);

(statearr_48075[(22)] = inst_48003);

(statearr_48075[(21)] = inst_47988__$1);

return statearr_48075;
})();
var statearr_48076_49462 = state_48048__$1;
(statearr_48076_49462[(2)] = null);

(statearr_48076_49462[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (40))){
var inst_48016 = (state_48048[(23)]);
var inst_48020 = done(null);
var inst_48021 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_48016);
var state_48048__$1 = (function (){var statearr_48077 = state_48048;
(statearr_48077[(24)] = inst_48020);

return statearr_48077;
})();
var statearr_48078_49466 = state_48048__$1;
(statearr_48078_49466[(2)] = inst_48021);

(statearr_48078_49466[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (33))){
var inst_48007 = (state_48048[(25)]);
var inst_48009 = cljs.core.chunked_seq_QMARK_(inst_48007);
var state_48048__$1 = state_48048;
if(inst_48009){
var statearr_48079_49469 = state_48048__$1;
(statearr_48079_49469[(1)] = (36));

} else {
var statearr_48080_49470 = state_48048__$1;
(statearr_48080_49470[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (13))){
var inst_47937 = (state_48048[(26)]);
var inst_47940 = cljs.core.async.close_BANG_(inst_47937);
var state_48048__$1 = state_48048;
var statearr_48081_49471 = state_48048__$1;
(statearr_48081_49471[(2)] = inst_47940);

(statearr_48081_49471[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (22))){
var inst_47960 = (state_48048[(8)]);
var inst_47963 = cljs.core.async.close_BANG_(inst_47960);
var state_48048__$1 = state_48048;
var statearr_48082_49472 = state_48048__$1;
(statearr_48082_49472[(2)] = inst_47963);

(statearr_48082_49472[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (36))){
var inst_48007 = (state_48048[(25)]);
var inst_48011 = cljs.core.chunk_first(inst_48007);
var inst_48012 = cljs.core.chunk_rest(inst_48007);
var inst_48013 = cljs.core.count(inst_48011);
var inst_47988 = inst_48012;
var inst_47989 = inst_48011;
var inst_47990 = inst_48013;
var inst_47991 = (0);
var state_48048__$1 = (function (){var statearr_48083 = state_48048;
(statearr_48083[(9)] = inst_47989);

(statearr_48083[(10)] = inst_47991);

(statearr_48083[(20)] = inst_47990);

(statearr_48083[(21)] = inst_47988);

return statearr_48083;
})();
var statearr_48084_49474 = state_48048__$1;
(statearr_48084_49474[(2)] = null);

(statearr_48084_49474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (41))){
var inst_48007 = (state_48048[(25)]);
var inst_48023 = (state_48048[(2)]);
var inst_48024 = cljs.core.next(inst_48007);
var inst_47988 = inst_48024;
var inst_47989 = null;
var inst_47990 = (0);
var inst_47991 = (0);
var state_48048__$1 = (function (){var statearr_48085 = state_48048;
(statearr_48085[(27)] = inst_48023);

(statearr_48085[(9)] = inst_47989);

(statearr_48085[(10)] = inst_47991);

(statearr_48085[(20)] = inst_47990);

(statearr_48085[(21)] = inst_47988);

return statearr_48085;
})();
var statearr_48086_49476 = state_48048__$1;
(statearr_48086_49476[(2)] = null);

(statearr_48086_49476[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (43))){
var state_48048__$1 = state_48048;
var statearr_48087_49477 = state_48048__$1;
(statearr_48087_49477[(2)] = null);

(statearr_48087_49477[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (29))){
var inst_48032 = (state_48048[(2)]);
var state_48048__$1 = state_48048;
var statearr_48088_49482 = state_48048__$1;
(statearr_48088_49482[(2)] = inst_48032);

(statearr_48088_49482[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (44))){
var inst_48041 = (state_48048[(2)]);
var state_48048__$1 = (function (){var statearr_48089 = state_48048;
(statearr_48089[(28)] = inst_48041);

return statearr_48089;
})();
var statearr_48090_49483 = state_48048__$1;
(statearr_48090_49483[(2)] = null);

(statearr_48090_49483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (6))){
var inst_47980 = (state_48048[(29)]);
var inst_47979 = cljs.core.deref(cs);
var inst_47980__$1 = cljs.core.keys(inst_47979);
var inst_47981 = cljs.core.count(inst_47980__$1);
var inst_47982 = cljs.core.reset_BANG_(dctr,inst_47981);
var inst_47987 = cljs.core.seq(inst_47980__$1);
var inst_47988 = inst_47987;
var inst_47989 = null;
var inst_47990 = (0);
var inst_47991 = (0);
var state_48048__$1 = (function (){var statearr_48091 = state_48048;
(statearr_48091[(30)] = inst_47982);

(statearr_48091[(29)] = inst_47980__$1);

(statearr_48091[(9)] = inst_47989);

(statearr_48091[(10)] = inst_47991);

(statearr_48091[(20)] = inst_47990);

(statearr_48091[(21)] = inst_47988);

return statearr_48091;
})();
var statearr_48092_49484 = state_48048__$1;
(statearr_48092_49484[(2)] = null);

(statearr_48092_49484[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (28))){
var inst_47988 = (state_48048[(21)]);
var inst_48007 = (state_48048[(25)]);
var inst_48007__$1 = cljs.core.seq(inst_47988);
var state_48048__$1 = (function (){var statearr_48093 = state_48048;
(statearr_48093[(25)] = inst_48007__$1);

return statearr_48093;
})();
if(inst_48007__$1){
var statearr_48094_49485 = state_48048__$1;
(statearr_48094_49485[(1)] = (33));

} else {
var statearr_48095_49486 = state_48048__$1;
(statearr_48095_49486[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (25))){
var inst_47991 = (state_48048[(10)]);
var inst_47990 = (state_48048[(20)]);
var inst_47993 = (inst_47991 < inst_47990);
var inst_47994 = inst_47993;
var state_48048__$1 = state_48048;
if(cljs.core.truth_(inst_47994)){
var statearr_48096_49487 = state_48048__$1;
(statearr_48096_49487[(1)] = (27));

} else {
var statearr_48097_49488 = state_48048__$1;
(statearr_48097_49488[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (34))){
var state_48048__$1 = state_48048;
var statearr_48098_49489 = state_48048__$1;
(statearr_48098_49489[(2)] = null);

(statearr_48098_49489[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (17))){
var state_48048__$1 = state_48048;
var statearr_48099_49492 = state_48048__$1;
(statearr_48099_49492[(2)] = null);

(statearr_48099_49492[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (3))){
var inst_48046 = (state_48048[(2)]);
var state_48048__$1 = state_48048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48048__$1,inst_48046);
} else {
if((state_val_48049 === (12))){
var inst_47975 = (state_48048[(2)]);
var state_48048__$1 = state_48048;
var statearr_48100_49494 = state_48048__$1;
(statearr_48100_49494[(2)] = inst_47975);

(statearr_48100_49494[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (2))){
var state_48048__$1 = state_48048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48048__$1,(4),ch);
} else {
if((state_val_48049 === (23))){
var state_48048__$1 = state_48048;
var statearr_48101_49496 = state_48048__$1;
(statearr_48101_49496[(2)] = null);

(statearr_48101_49496[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (35))){
var inst_48030 = (state_48048[(2)]);
var state_48048__$1 = state_48048;
var statearr_48102_49497 = state_48048__$1;
(statearr_48102_49497[(2)] = inst_48030);

(statearr_48102_49497[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (19))){
var inst_47947 = (state_48048[(7)]);
var inst_47951 = cljs.core.chunk_first(inst_47947);
var inst_47952 = cljs.core.chunk_rest(inst_47947);
var inst_47953 = cljs.core.count(inst_47951);
var inst_47925 = inst_47952;
var inst_47926 = inst_47951;
var inst_47927 = inst_47953;
var inst_47928 = (0);
var state_48048__$1 = (function (){var statearr_48103 = state_48048;
(statearr_48103[(13)] = inst_47925);

(statearr_48103[(14)] = inst_47926);

(statearr_48103[(15)] = inst_47927);

(statearr_48103[(17)] = inst_47928);

return statearr_48103;
})();
var statearr_48104_49501 = state_48048__$1;
(statearr_48104_49501[(2)] = null);

(statearr_48104_49501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (11))){
var inst_47925 = (state_48048[(13)]);
var inst_47947 = (state_48048[(7)]);
var inst_47947__$1 = cljs.core.seq(inst_47925);
var state_48048__$1 = (function (){var statearr_48105 = state_48048;
(statearr_48105[(7)] = inst_47947__$1);

return statearr_48105;
})();
if(inst_47947__$1){
var statearr_48106_49504 = state_48048__$1;
(statearr_48106_49504[(1)] = (16));

} else {
var statearr_48107_49505 = state_48048__$1;
(statearr_48107_49505[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (9))){
var inst_47977 = (state_48048[(2)]);
var state_48048__$1 = state_48048;
var statearr_48108_49506 = state_48048__$1;
(statearr_48108_49506[(2)] = inst_47977);

(statearr_48108_49506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (5))){
var inst_47923 = cljs.core.deref(cs);
var inst_47924 = cljs.core.seq(inst_47923);
var inst_47925 = inst_47924;
var inst_47926 = null;
var inst_47927 = (0);
var inst_47928 = (0);
var state_48048__$1 = (function (){var statearr_48109 = state_48048;
(statearr_48109[(13)] = inst_47925);

(statearr_48109[(14)] = inst_47926);

(statearr_48109[(15)] = inst_47927);

(statearr_48109[(17)] = inst_47928);

return statearr_48109;
})();
var statearr_48110_49508 = state_48048__$1;
(statearr_48110_49508[(2)] = null);

(statearr_48110_49508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (14))){
var state_48048__$1 = state_48048;
var statearr_48111_49510 = state_48048__$1;
(statearr_48111_49510[(2)] = null);

(statearr_48111_49510[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (45))){
var inst_48038 = (state_48048[(2)]);
var state_48048__$1 = state_48048;
var statearr_48112_49512 = state_48048__$1;
(statearr_48112_49512[(2)] = inst_48038);

(statearr_48112_49512[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (26))){
var inst_47980 = (state_48048[(29)]);
var inst_48034 = (state_48048[(2)]);
var inst_48035 = cljs.core.seq(inst_47980);
var state_48048__$1 = (function (){var statearr_48113 = state_48048;
(statearr_48113[(31)] = inst_48034);

return statearr_48113;
})();
if(inst_48035){
var statearr_48114_49514 = state_48048__$1;
(statearr_48114_49514[(1)] = (42));

} else {
var statearr_48115_49515 = state_48048__$1;
(statearr_48115_49515[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (16))){
var inst_47947 = (state_48048[(7)]);
var inst_47949 = cljs.core.chunked_seq_QMARK_(inst_47947);
var state_48048__$1 = state_48048;
if(inst_47949){
var statearr_48116_49516 = state_48048__$1;
(statearr_48116_49516[(1)] = (19));

} else {
var statearr_48117_49517 = state_48048__$1;
(statearr_48117_49517[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (38))){
var inst_48027 = (state_48048[(2)]);
var state_48048__$1 = state_48048;
var statearr_48118_49518 = state_48048__$1;
(statearr_48118_49518[(2)] = inst_48027);

(statearr_48118_49518[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (30))){
var state_48048__$1 = state_48048;
var statearr_48119_49519 = state_48048__$1;
(statearr_48119_49519[(2)] = null);

(statearr_48119_49519[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (10))){
var inst_47926 = (state_48048[(14)]);
var inst_47928 = (state_48048[(17)]);
var inst_47936 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47926,inst_47928);
var inst_47937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47936,(0),null);
var inst_47938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47936,(1),null);
var state_48048__$1 = (function (){var statearr_48120 = state_48048;
(statearr_48120[(26)] = inst_47937);

return statearr_48120;
})();
if(cljs.core.truth_(inst_47938)){
var statearr_48121_49523 = state_48048__$1;
(statearr_48121_49523[(1)] = (13));

} else {
var statearr_48122_49524 = state_48048__$1;
(statearr_48122_49524[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (18))){
var inst_47973 = (state_48048[(2)]);
var state_48048__$1 = state_48048;
var statearr_48123_49525 = state_48048__$1;
(statearr_48123_49525[(2)] = inst_47973);

(statearr_48123_49525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (42))){
var state_48048__$1 = state_48048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48048__$1,(45),dchan);
} else {
if((state_val_48049 === (37))){
var inst_48016 = (state_48048[(23)]);
var inst_48007 = (state_48048[(25)]);
var inst_47916 = (state_48048[(12)]);
var inst_48016__$1 = cljs.core.first(inst_48007);
var inst_48017 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_48016__$1,inst_47916,done);
var state_48048__$1 = (function (){var statearr_48124 = state_48048;
(statearr_48124[(23)] = inst_48016__$1);

return statearr_48124;
})();
if(cljs.core.truth_(inst_48017)){
var statearr_48125_49526 = state_48048__$1;
(statearr_48125_49526[(1)] = (39));

} else {
var statearr_48126_49527 = state_48048__$1;
(statearr_48126_49527[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48049 === (8))){
var inst_47927 = (state_48048[(15)]);
var inst_47928 = (state_48048[(17)]);
var inst_47930 = (inst_47928 < inst_47927);
var inst_47931 = inst_47930;
var state_48048__$1 = state_48048;
if(cljs.core.truth_(inst_47931)){
var statearr_48127_49528 = state_48048__$1;
(statearr_48127_49528[(1)] = (10));

} else {
var statearr_48128_49529 = state_48048__$1;
(statearr_48128_49529[(1)] = (11));

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
});})(c__47453__auto___49421,cs,m,dchan,dctr,done))
;
return ((function (switch__47352__auto__,c__47453__auto___49421,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__47353__auto__ = null;
var cljs$core$async$mult_$_state_machine__47353__auto____0 = (function (){
var statearr_48129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48129[(0)] = cljs$core$async$mult_$_state_machine__47353__auto__);

(statearr_48129[(1)] = (1));

return statearr_48129;
});
var cljs$core$async$mult_$_state_machine__47353__auto____1 = (function (state_48048){
while(true){
var ret_value__47354__auto__ = (function (){try{while(true){
var result__47355__auto__ = switch__47352__auto__(state_48048);
if(cljs.core.keyword_identical_QMARK_(result__47355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47355__auto__;
}
break;
}
}catch (e48130){if((e48130 instanceof Object)){
var ex__47356__auto__ = e48130;
var statearr_48131_49530 = state_48048;
(statearr_48131_49530[(5)] = ex__47356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48130;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49531 = state_48048;
state_48048 = G__49531;
continue;
} else {
return ret_value__47354__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__47353__auto__ = function(state_48048){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__47353__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__47353__auto____1.call(this,state_48048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__47353__auto____0;
cljs$core$async$mult_$_state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__47353__auto____1;
return cljs$core$async$mult_$_state_machine__47353__auto__;
})()
;})(switch__47352__auto__,c__47453__auto___49421,cs,m,dchan,dctr,done))
})();
var state__47455__auto__ = (function (){var statearr_48132 = (f__47454__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47454__auto__.cljs$core$IFn$_invoke$arity$0() : f__47454__auto__.call(null));
(statearr_48132[(6)] = c__47453__auto___49421);

return statearr_48132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47455__auto__);
});})(c__47453__auto___49421,cs,m,dchan,dctr,done))
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
var G__48134 = arguments.length;
switch (G__48134) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49558 = arguments.length;
var i__4731__auto___49559 = (0);
while(true){
if((i__4731__auto___49559 < len__4730__auto___49558)){
args__4736__auto__.push((arguments[i__4731__auto___49559]));

var G__49560 = (i__4731__auto___49559 + (1));
i__4731__auto___49559 = G__49560;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48139){
var map__48140 = p__48139;
var map__48140__$1 = (((((!((map__48140 == null))))?(((((map__48140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48140):map__48140);
var opts = map__48140__$1;
var statearr_48142_49561 = state;
(statearr_48142_49561[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__48140,map__48140__$1,opts){
return (function (val){
var statearr_48143_49564 = state;
(statearr_48143_49564[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__48140,map__48140__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_48144_49565 = state;
(statearr_48144_49565[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48135){
var G__48136 = cljs.core.first(seq48135);
var seq48135__$1 = cljs.core.next(seq48135);
var G__48137 = cljs.core.first(seq48135__$1);
var seq48135__$2 = cljs.core.next(seq48135__$1);
var G__48138 = cljs.core.first(seq48135__$2);
var seq48135__$3 = cljs.core.next(seq48135__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48136,G__48137,G__48138,seq48135__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48145 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48145 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48146){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta48146 = meta48146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48147,meta48146__$1){
var self__ = this;
var _48147__$1 = this;
return (new cljs.core.async.t_cljs$core$async48145(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta48146__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48145.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48147){
var self__ = this;
var _48147__$1 = this;
return self__.meta48146;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48145.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48145.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48145.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48145.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48145.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48145.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48145.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48145.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48145.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta48146","meta48146",1648235317,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48145.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48145.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48145";

cljs.core.async.t_cljs$core$async48145.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async48145");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48145.
 */
cljs.core.async.__GT_t_cljs$core$async48145 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async48145(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48146){
return (new cljs.core.async.t_cljs$core$async48145(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48146));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async48145(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47453__auto___49592 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47453__auto___49592,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__47454__auto__ = (function (){var switch__47352__auto__ = ((function (c__47453__auto___49592,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_48249){
var state_val_48250 = (state_48249[(1)]);
if((state_val_48250 === (7))){
var inst_48164 = (state_48249[(2)]);
var state_48249__$1 = state_48249;
var statearr_48251_49593 = state_48249__$1;
(statearr_48251_49593[(2)] = inst_48164);

(statearr_48251_49593[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (20))){
var inst_48176 = (state_48249[(7)]);
var state_48249__$1 = state_48249;
var statearr_48252_49595 = state_48249__$1;
(statearr_48252_49595[(2)] = inst_48176);

(statearr_48252_49595[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (27))){
var state_48249__$1 = state_48249;
var statearr_48253_49596 = state_48249__$1;
(statearr_48253_49596[(2)] = null);

(statearr_48253_49596[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (1))){
var inst_48151 = (state_48249[(8)]);
var inst_48151__$1 = calc_state();
var inst_48153 = (inst_48151__$1 == null);
var inst_48154 = cljs.core.not(inst_48153);
var state_48249__$1 = (function (){var statearr_48254 = state_48249;
(statearr_48254[(8)] = inst_48151__$1);

return statearr_48254;
})();
if(inst_48154){
var statearr_48255_49597 = state_48249__$1;
(statearr_48255_49597[(1)] = (2));

} else {
var statearr_48256_49598 = state_48249__$1;
(statearr_48256_49598[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (24))){
var inst_48200 = (state_48249[(9)]);
var inst_48223 = (state_48249[(10)]);
var inst_48209 = (state_48249[(11)]);
var inst_48223__$1 = (inst_48200.cljs$core$IFn$_invoke$arity$1 ? inst_48200.cljs$core$IFn$_invoke$arity$1(inst_48209) : inst_48200.call(null,inst_48209));
var state_48249__$1 = (function (){var statearr_48257 = state_48249;
(statearr_48257[(10)] = inst_48223__$1);

return statearr_48257;
})();
if(cljs.core.truth_(inst_48223__$1)){
var statearr_48258_49600 = state_48249__$1;
(statearr_48258_49600[(1)] = (29));

} else {
var statearr_48259_49601 = state_48249__$1;
(statearr_48259_49601[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (4))){
var inst_48167 = (state_48249[(2)]);
var state_48249__$1 = state_48249;
if(cljs.core.truth_(inst_48167)){
var statearr_48260_49607 = state_48249__$1;
(statearr_48260_49607[(1)] = (8));

} else {
var statearr_48261_49610 = state_48249__$1;
(statearr_48261_49610[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (15))){
var inst_48194 = (state_48249[(2)]);
var state_48249__$1 = state_48249;
if(cljs.core.truth_(inst_48194)){
var statearr_48262_49611 = state_48249__$1;
(statearr_48262_49611[(1)] = (19));

} else {
var statearr_48263_49612 = state_48249__$1;
(statearr_48263_49612[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (21))){
var inst_48199 = (state_48249[(12)]);
var inst_48199__$1 = (state_48249[(2)]);
var inst_48200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48199__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48199__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48199__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48249__$1 = (function (){var statearr_48264 = state_48249;
(statearr_48264[(9)] = inst_48200);

(statearr_48264[(13)] = inst_48201);

(statearr_48264[(12)] = inst_48199__$1);

return statearr_48264;
})();
return cljs.core.async.ioc_alts_BANG_(state_48249__$1,(22),inst_48202);
} else {
if((state_val_48250 === (31))){
var inst_48231 = (state_48249[(2)]);
var state_48249__$1 = state_48249;
if(cljs.core.truth_(inst_48231)){
var statearr_48265_49613 = state_48249__$1;
(statearr_48265_49613[(1)] = (32));

} else {
var statearr_48266_49614 = state_48249__$1;
(statearr_48266_49614[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (32))){
var inst_48208 = (state_48249[(14)]);
var state_48249__$1 = state_48249;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48249__$1,(35),out,inst_48208);
} else {
if((state_val_48250 === (33))){
var inst_48199 = (state_48249[(12)]);
var inst_48176 = inst_48199;
var state_48249__$1 = (function (){var statearr_48267 = state_48249;
(statearr_48267[(7)] = inst_48176);

return statearr_48267;
})();
var statearr_48268_49615 = state_48249__$1;
(statearr_48268_49615[(2)] = null);

(statearr_48268_49615[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (13))){
var inst_48176 = (state_48249[(7)]);
var inst_48183 = inst_48176.cljs$lang$protocol_mask$partition0$;
var inst_48184 = (inst_48183 & (64));
var inst_48185 = inst_48176.cljs$core$ISeq$;
var inst_48186 = (cljs.core.PROTOCOL_SENTINEL === inst_48185);
var inst_48187 = ((inst_48184) || (inst_48186));
var state_48249__$1 = state_48249;
if(cljs.core.truth_(inst_48187)){
var statearr_48269_49617 = state_48249__$1;
(statearr_48269_49617[(1)] = (16));

} else {
var statearr_48270_49618 = state_48249__$1;
(statearr_48270_49618[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (22))){
var inst_48209 = (state_48249[(11)]);
var inst_48208 = (state_48249[(14)]);
var inst_48207 = (state_48249[(2)]);
var inst_48208__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48207,(0),null);
var inst_48209__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48207,(1),null);
var inst_48210 = (inst_48208__$1 == null);
var inst_48211 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48209__$1,change);
var inst_48212 = ((inst_48210) || (inst_48211));
var state_48249__$1 = (function (){var statearr_48271 = state_48249;
(statearr_48271[(11)] = inst_48209__$1);

(statearr_48271[(14)] = inst_48208__$1);

return statearr_48271;
})();
if(cljs.core.truth_(inst_48212)){
var statearr_48272_49620 = state_48249__$1;
(statearr_48272_49620[(1)] = (23));

} else {
var statearr_48273_49621 = state_48249__$1;
(statearr_48273_49621[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (36))){
var inst_48199 = (state_48249[(12)]);
var inst_48176 = inst_48199;
var state_48249__$1 = (function (){var statearr_48274 = state_48249;
(statearr_48274[(7)] = inst_48176);

return statearr_48274;
})();
var statearr_48275_49623 = state_48249__$1;
(statearr_48275_49623[(2)] = null);

(statearr_48275_49623[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (29))){
var inst_48223 = (state_48249[(10)]);
var state_48249__$1 = state_48249;
var statearr_48276_49624 = state_48249__$1;
(statearr_48276_49624[(2)] = inst_48223);

(statearr_48276_49624[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (6))){
var state_48249__$1 = state_48249;
var statearr_48277_49626 = state_48249__$1;
(statearr_48277_49626[(2)] = false);

(statearr_48277_49626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (28))){
var inst_48219 = (state_48249[(2)]);
var inst_48220 = calc_state();
var inst_48176 = inst_48220;
var state_48249__$1 = (function (){var statearr_48278 = state_48249;
(statearr_48278[(7)] = inst_48176);

(statearr_48278[(15)] = inst_48219);

return statearr_48278;
})();
var statearr_48279_49632 = state_48249__$1;
(statearr_48279_49632[(2)] = null);

(statearr_48279_49632[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (25))){
var inst_48245 = (state_48249[(2)]);
var state_48249__$1 = state_48249;
var statearr_48280_49633 = state_48249__$1;
(statearr_48280_49633[(2)] = inst_48245);

(statearr_48280_49633[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (34))){
var inst_48243 = (state_48249[(2)]);
var state_48249__$1 = state_48249;
var statearr_48281_49634 = state_48249__$1;
(statearr_48281_49634[(2)] = inst_48243);

(statearr_48281_49634[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (17))){
var state_48249__$1 = state_48249;
var statearr_48282_49635 = state_48249__$1;
(statearr_48282_49635[(2)] = false);

(statearr_48282_49635[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (3))){
var state_48249__$1 = state_48249;
var statearr_48283_49637 = state_48249__$1;
(statearr_48283_49637[(2)] = false);

(statearr_48283_49637[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (12))){
var inst_48247 = (state_48249[(2)]);
var state_48249__$1 = state_48249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48249__$1,inst_48247);
} else {
if((state_val_48250 === (2))){
var inst_48151 = (state_48249[(8)]);
var inst_48156 = inst_48151.cljs$lang$protocol_mask$partition0$;
var inst_48157 = (inst_48156 & (64));
var inst_48158 = inst_48151.cljs$core$ISeq$;
var inst_48159 = (cljs.core.PROTOCOL_SENTINEL === inst_48158);
var inst_48160 = ((inst_48157) || (inst_48159));
var state_48249__$1 = state_48249;
if(cljs.core.truth_(inst_48160)){
var statearr_48284_49642 = state_48249__$1;
(statearr_48284_49642[(1)] = (5));

} else {
var statearr_48285_49643 = state_48249__$1;
(statearr_48285_49643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (23))){
var inst_48208 = (state_48249[(14)]);
var inst_48214 = (inst_48208 == null);
var state_48249__$1 = state_48249;
if(cljs.core.truth_(inst_48214)){
var statearr_48286_49644 = state_48249__$1;
(statearr_48286_49644[(1)] = (26));

} else {
var statearr_48287_49645 = state_48249__$1;
(statearr_48287_49645[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (35))){
var inst_48234 = (state_48249[(2)]);
var state_48249__$1 = state_48249;
if(cljs.core.truth_(inst_48234)){
var statearr_48288_49646 = state_48249__$1;
(statearr_48288_49646[(1)] = (36));

} else {
var statearr_48289_49647 = state_48249__$1;
(statearr_48289_49647[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (19))){
var inst_48176 = (state_48249[(7)]);
var inst_48196 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_48176);
var state_48249__$1 = state_48249;
var statearr_48290_49648 = state_48249__$1;
(statearr_48290_49648[(2)] = inst_48196);

(statearr_48290_49648[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (11))){
var inst_48176 = (state_48249[(7)]);
var inst_48180 = (inst_48176 == null);
var inst_48181 = cljs.core.not(inst_48180);
var state_48249__$1 = state_48249;
if(inst_48181){
var statearr_48291_49649 = state_48249__$1;
(statearr_48291_49649[(1)] = (13));

} else {
var statearr_48292_49650 = state_48249__$1;
(statearr_48292_49650[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (9))){
var inst_48151 = (state_48249[(8)]);
var state_48249__$1 = state_48249;
var statearr_48293_49651 = state_48249__$1;
(statearr_48293_49651[(2)] = inst_48151);

(statearr_48293_49651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (5))){
var state_48249__$1 = state_48249;
var statearr_48294_49652 = state_48249__$1;
(statearr_48294_49652[(2)] = true);

(statearr_48294_49652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (14))){
var state_48249__$1 = state_48249;
var statearr_48295_49654 = state_48249__$1;
(statearr_48295_49654[(2)] = false);

(statearr_48295_49654[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (26))){
var inst_48209 = (state_48249[(11)]);
var inst_48216 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_48209);
var state_48249__$1 = state_48249;
var statearr_48296_49655 = state_48249__$1;
(statearr_48296_49655[(2)] = inst_48216);

(statearr_48296_49655[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (16))){
var state_48249__$1 = state_48249;
var statearr_48297_49656 = state_48249__$1;
(statearr_48297_49656[(2)] = true);

(statearr_48297_49656[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (38))){
var inst_48239 = (state_48249[(2)]);
var state_48249__$1 = state_48249;
var statearr_48298_49657 = state_48249__$1;
(statearr_48298_49657[(2)] = inst_48239);

(statearr_48298_49657[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (30))){
var inst_48200 = (state_48249[(9)]);
var inst_48201 = (state_48249[(13)]);
var inst_48209 = (state_48249[(11)]);
var inst_48226 = cljs.core.empty_QMARK_(inst_48200);
var inst_48227 = (inst_48201.cljs$core$IFn$_invoke$arity$1 ? inst_48201.cljs$core$IFn$_invoke$arity$1(inst_48209) : inst_48201.call(null,inst_48209));
var inst_48228 = cljs.core.not(inst_48227);
var inst_48229 = ((inst_48226) && (inst_48228));
var state_48249__$1 = state_48249;
var statearr_48299_49658 = state_48249__$1;
(statearr_48299_49658[(2)] = inst_48229);

(statearr_48299_49658[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (10))){
var inst_48151 = (state_48249[(8)]);
var inst_48172 = (state_48249[(2)]);
var inst_48173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48172,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48172,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48172,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48176 = inst_48151;
var state_48249__$1 = (function (){var statearr_48300 = state_48249;
(statearr_48300[(7)] = inst_48176);

(statearr_48300[(16)] = inst_48173);

(statearr_48300[(17)] = inst_48175);

(statearr_48300[(18)] = inst_48174);

return statearr_48300;
})();
var statearr_48301_49666 = state_48249__$1;
(statearr_48301_49666[(2)] = null);

(statearr_48301_49666[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (18))){
var inst_48191 = (state_48249[(2)]);
var state_48249__$1 = state_48249;
var statearr_48302_49667 = state_48249__$1;
(statearr_48302_49667[(2)] = inst_48191);

(statearr_48302_49667[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (37))){
var state_48249__$1 = state_48249;
var statearr_48303_49668 = state_48249__$1;
(statearr_48303_49668[(2)] = null);

(statearr_48303_49668[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48250 === (8))){
var inst_48151 = (state_48249[(8)]);
var inst_48169 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_48151);
var state_48249__$1 = state_48249;
var statearr_48304_49669 = state_48249__$1;
(statearr_48304_49669[(2)] = inst_48169);

(statearr_48304_49669[(1)] = (10));


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
});})(c__47453__auto___49592,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__47352__auto__,c__47453__auto___49592,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__47353__auto__ = null;
var cljs$core$async$mix_$_state_machine__47353__auto____0 = (function (){
var statearr_48305 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48305[(0)] = cljs$core$async$mix_$_state_machine__47353__auto__);

(statearr_48305[(1)] = (1));

return statearr_48305;
});
var cljs$core$async$mix_$_state_machine__47353__auto____1 = (function (state_48249){
while(true){
var ret_value__47354__auto__ = (function (){try{while(true){
var result__47355__auto__ = switch__47352__auto__(state_48249);
if(cljs.core.keyword_identical_QMARK_(result__47355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47355__auto__;
}
break;
}
}catch (e48306){if((e48306 instanceof Object)){
var ex__47356__auto__ = e48306;
var statearr_48307_49671 = state_48249;
(statearr_48307_49671[(5)] = ex__47356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48306;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49672 = state_48249;
state_48249 = G__49672;
continue;
} else {
return ret_value__47354__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__47353__auto__ = function(state_48249){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__47353__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__47353__auto____1.call(this,state_48249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__47353__auto____0;
cljs$core$async$mix_$_state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__47353__auto____1;
return cljs$core$async$mix_$_state_machine__47353__auto__;
})()
;})(switch__47352__auto__,c__47453__auto___49592,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__47455__auto__ = (function (){var statearr_48308 = (f__47454__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47454__auto__.cljs$core$IFn$_invoke$arity$0() : f__47454__auto__.call(null));
(statearr_48308[(6)] = c__47453__auto___49592);

return statearr_48308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47455__auto__);
});})(c__47453__auto___49592,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__48310 = arguments.length;
switch (G__48310) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var G__48313 = arguments.length;
switch (G__48313) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__48311_SHARP_){
if(cljs.core.truth_((p1__48311_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__48311_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__48311_SHARP_.call(null,topic)))){
return p1__48311_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48311_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48314 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48314 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48315){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48315 = meta48315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_48316,meta48315__$1){
var self__ = this;
var _48316__$1 = this;
return (new cljs.core.async.t_cljs$core$async48314(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48315__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48314.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_48316){
var self__ = this;
var _48316__$1 = this;
return self__.meta48315;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48314.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48314.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48314.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48314.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48314.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48314.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48314.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48314.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48315","meta48315",2023358544,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48314.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48314.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48314";

cljs.core.async.t_cljs$core$async48314.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async48314");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48314.
 */
cljs.core.async.__GT_t_cljs$core$async48314 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async48314(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48315){
return (new cljs.core.async.t_cljs$core$async48314(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48315));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async48314(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47453__auto___49691 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47453__auto___49691,mults,ensure_mult,p){
return (function (){
var f__47454__auto__ = (function (){var switch__47352__auto__ = ((function (c__47453__auto___49691,mults,ensure_mult,p){
return (function (state_48388){
var state_val_48389 = (state_48388[(1)]);
if((state_val_48389 === (7))){
var inst_48384 = (state_48388[(2)]);
var state_48388__$1 = state_48388;
var statearr_48390_49693 = state_48388__$1;
(statearr_48390_49693[(2)] = inst_48384);

(statearr_48390_49693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48389 === (20))){
var state_48388__$1 = state_48388;
var statearr_48391_49695 = state_48388__$1;
(statearr_48391_49695[(2)] = null);

(statearr_48391_49695[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48389 === (1))){
var state_48388__$1 = state_48388;
var statearr_48392_49696 = state_48388__$1;
(statearr_48392_49696[(2)] = null);

(statearr_48392_49696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48389 === (24))){
var inst_48367 = (state_48388[(7)]);
var inst_48376 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_48367);
var state_48388__$1 = state_48388;
var statearr_48393_49700 = state_48388__$1;
(statearr_48393_49700[(2)] = inst_48376);

(statearr_48393_49700[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48389 === (4))){
var inst_48319 = (state_48388[(8)]);
var inst_48319__$1 = (state_48388[(2)]);
var inst_48320 = (inst_48319__$1 == null);
var state_48388__$1 = (function (){var statearr_48394 = state_48388;
(statearr_48394[(8)] = inst_48319__$1);

return statearr_48394;
})();
if(cljs.core.truth_(inst_48320)){
var statearr_48395_49708 = state_48388__$1;
(statearr_48395_49708[(1)] = (5));

} else {
var statearr_48396_49709 = state_48388__$1;
(statearr_48396_49709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48389 === (15))){
var inst_48361 = (state_48388[(2)]);
var state_48388__$1 = state_48388;
var statearr_48397_49710 = state_48388__$1;
(statearr_48397_49710[(2)] = inst_48361);

(statearr_48397_49710[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48389 === (21))){
var inst_48381 = (state_48388[(2)]);
var state_48388__$1 = (function (){var statearr_48398 = state_48388;
(statearr_48398[(9)] = inst_48381);

return statearr_48398;
})();
var statearr_48399_49714 = state_48388__$1;
(statearr_48399_49714[(2)] = null);

(statearr_48399_49714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48389 === (13))){
var inst_48343 = (state_48388[(10)]);
var inst_48345 = cljs.core.chunked_seq_QMARK_(inst_48343);
var state_48388__$1 = state_48388;
if(inst_48345){
var statearr_48400_49715 = state_48388__$1;
(statearr_48400_49715[(1)] = (16));

} else {
var statearr_48401_49719 = state_48388__$1;
(statearr_48401_49719[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48389 === (22))){
var inst_48373 = (state_48388[(2)]);
var state_48388__$1 = state_48388;
if(cljs.core.truth_(inst_48373)){
var statearr_48402_49720 = state_48388__$1;
(statearr_48402_49720[(1)] = (23));

} else {
var statearr_48403_49721 = state_48388__$1;
(statearr_48403_49721[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48389 === (6))){
var inst_48369 = (state_48388[(11)]);
var inst_48367 = (state_48388[(7)]);
var inst_48319 = (state_48388[(8)]);
var inst_48367__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_48319) : topic_fn.call(null,inst_48319));
var inst_48368 = cljs.core.deref(mults);
var inst_48369__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48368,inst_48367__$1);
var state_48388__$1 = (function (){var statearr_48404 = state_48388;
(statearr_48404[(11)] = inst_48369__$1);

(statearr_48404[(7)] = inst_48367__$1);

return statearr_48404;
})();
if(cljs.core.truth_(inst_48369__$1)){
var statearr_48405_49725 = state_48388__$1;
(statearr_48405_49725[(1)] = (19));

} else {
var statearr_48406_49726 = state_48388__$1;
(statearr_48406_49726[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48389 === (25))){
var inst_48378 = (state_48388[(2)]);
var state_48388__$1 = state_48388;
var statearr_48407_49728 = state_48388__$1;
(statearr_48407_49728[(2)] = inst_48378);

(statearr_48407_49728[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48389 === (17))){
var inst_48343 = (state_48388[(10)]);
var inst_48352 = cljs.core.first(inst_48343);
var inst_48353 = cljs.core.async.muxch_STAR_(inst_48352);
var inst_48354 = cljs.core.async.close_BANG_(inst_48353);
var inst_48355 = cljs.core.next(inst_48343);
var inst_48329 = inst_48355;
var inst_48330 = null;
var inst_48331 = (0);
var inst_48332 = (0);
var state_48388__$1 = (function (){var statearr_48408 = state_48388;
(statearr_48408[(12)] = inst_48332);

(statearr_48408[(13)] = inst_48331);

(statearr_48408[(14)] = inst_48330);

(statearr_48408[(15)] = inst_48329);

(statearr_48408[(16)] = inst_48354);

return statearr_48408;
})();
var statearr_48409_49738 = state_48388__$1;
(statearr_48409_49738[(2)] = null);

(statearr_48409_49738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48389 === (3))){
var inst_48386 = (state_48388[(2)]);
var state_48388__$1 = state_48388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48388__$1,inst_48386);
} else {
if((state_val_48389 === (12))){
var inst_48363 = (state_48388[(2)]);
var state_48388__$1 = state_48388;
var statearr_48410_49745 = state_48388__$1;
(statearr_48410_49745[(2)] = inst_48363);

(statearr_48410_49745[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48389 === (2))){
var state_48388__$1 = state_48388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48388__$1,(4),ch);
} else {
if((state_val_48389 === (23))){
var state_48388__$1 = state_48388;
var statearr_48411_49746 = state_48388__$1;
(statearr_48411_49746[(2)] = null);

(statearr_48411_49746[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48389 === (19))){
var inst_48369 = (state_48388[(11)]);
var inst_48319 = (state_48388[(8)]);
var inst_48371 = cljs.core.async.muxch_STAR_(inst_48369);
var state_48388__$1 = state_48388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48388__$1,(22),inst_48371,inst_48319);
} else {
if((state_val_48389 === (11))){
var inst_48343 = (state_48388[(10)]);
var inst_48329 = (state_48388[(15)]);
var inst_48343__$1 = cljs.core.seq(inst_48329);
var state_48388__$1 = (function (){var statearr_48412 = state_48388;
(statearr_48412[(10)] = inst_48343__$1);

return statearr_48412;
})();
if(inst_48343__$1){
var statearr_48413_49747 = state_48388__$1;
(statearr_48413_49747[(1)] = (13));

} else {
var statearr_48414_49748 = state_48388__$1;
(statearr_48414_49748[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48389 === (9))){
var inst_48365 = (state_48388[(2)]);
var state_48388__$1 = state_48388;
var statearr_48415_49749 = state_48388__$1;
(statearr_48415_49749[(2)] = inst_48365);

(statearr_48415_49749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48389 === (5))){
var inst_48326 = cljs.core.deref(mults);
var inst_48327 = cljs.core.vals(inst_48326);
var inst_48328 = cljs.core.seq(inst_48327);
var inst_48329 = inst_48328;
var inst_48330 = null;
var inst_48331 = (0);
var inst_48332 = (0);
var state_48388__$1 = (function (){var statearr_48416 = state_48388;
(statearr_48416[(12)] = inst_48332);

(statearr_48416[(13)] = inst_48331);

(statearr_48416[(14)] = inst_48330);

(statearr_48416[(15)] = inst_48329);

return statearr_48416;
})();
var statearr_48417_49756 = state_48388__$1;
(statearr_48417_49756[(2)] = null);

(statearr_48417_49756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48389 === (14))){
var state_48388__$1 = state_48388;
var statearr_48421_49757 = state_48388__$1;
(statearr_48421_49757[(2)] = null);

(statearr_48421_49757[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48389 === (16))){
var inst_48343 = (state_48388[(10)]);
var inst_48347 = cljs.core.chunk_first(inst_48343);
var inst_48348 = cljs.core.chunk_rest(inst_48343);
var inst_48349 = cljs.core.count(inst_48347);
var inst_48329 = inst_48348;
var inst_48330 = inst_48347;
var inst_48331 = inst_48349;
var inst_48332 = (0);
var state_48388__$1 = (function (){var statearr_48422 = state_48388;
(statearr_48422[(12)] = inst_48332);

(statearr_48422[(13)] = inst_48331);

(statearr_48422[(14)] = inst_48330);

(statearr_48422[(15)] = inst_48329);

return statearr_48422;
})();
var statearr_48423_49758 = state_48388__$1;
(statearr_48423_49758[(2)] = null);

(statearr_48423_49758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48389 === (10))){
var inst_48332 = (state_48388[(12)]);
var inst_48331 = (state_48388[(13)]);
var inst_48330 = (state_48388[(14)]);
var inst_48329 = (state_48388[(15)]);
var inst_48337 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_48330,inst_48332);
var inst_48338 = cljs.core.async.muxch_STAR_(inst_48337);
var inst_48339 = cljs.core.async.close_BANG_(inst_48338);
var inst_48340 = (inst_48332 + (1));
var tmp48418 = inst_48331;
var tmp48419 = inst_48330;
var tmp48420 = inst_48329;
var inst_48329__$1 = tmp48420;
var inst_48330__$1 = tmp48419;
var inst_48331__$1 = tmp48418;
var inst_48332__$1 = inst_48340;
var state_48388__$1 = (function (){var statearr_48424 = state_48388;
(statearr_48424[(12)] = inst_48332__$1);

(statearr_48424[(13)] = inst_48331__$1);

(statearr_48424[(14)] = inst_48330__$1);

(statearr_48424[(17)] = inst_48339);

(statearr_48424[(15)] = inst_48329__$1);

return statearr_48424;
})();
var statearr_48425_49765 = state_48388__$1;
(statearr_48425_49765[(2)] = null);

(statearr_48425_49765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48389 === (18))){
var inst_48358 = (state_48388[(2)]);
var state_48388__$1 = state_48388;
var statearr_48426_49766 = state_48388__$1;
(statearr_48426_49766[(2)] = inst_48358);

(statearr_48426_49766[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48389 === (8))){
var inst_48332 = (state_48388[(12)]);
var inst_48331 = (state_48388[(13)]);
var inst_48334 = (inst_48332 < inst_48331);
var inst_48335 = inst_48334;
var state_48388__$1 = state_48388;
if(cljs.core.truth_(inst_48335)){
var statearr_48427_49767 = state_48388__$1;
(statearr_48427_49767[(1)] = (10));

} else {
var statearr_48428_49768 = state_48388__$1;
(statearr_48428_49768[(1)] = (11));

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
});})(c__47453__auto___49691,mults,ensure_mult,p))
;
return ((function (switch__47352__auto__,c__47453__auto___49691,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__47353__auto__ = null;
var cljs$core$async$state_machine__47353__auto____0 = (function (){
var statearr_48429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48429[(0)] = cljs$core$async$state_machine__47353__auto__);

(statearr_48429[(1)] = (1));

return statearr_48429;
});
var cljs$core$async$state_machine__47353__auto____1 = (function (state_48388){
while(true){
var ret_value__47354__auto__ = (function (){try{while(true){
var result__47355__auto__ = switch__47352__auto__(state_48388);
if(cljs.core.keyword_identical_QMARK_(result__47355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47355__auto__;
}
break;
}
}catch (e48430){if((e48430 instanceof Object)){
var ex__47356__auto__ = e48430;
var statearr_48431_49775 = state_48388;
(statearr_48431_49775[(5)] = ex__47356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48430;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49776 = state_48388;
state_48388 = G__49776;
continue;
} else {
return ret_value__47354__auto__;
}
break;
}
});
cljs$core$async$state_machine__47353__auto__ = function(state_48388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47353__auto____1.call(this,state_48388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47353__auto____0;
cljs$core$async$state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47353__auto____1;
return cljs$core$async$state_machine__47353__auto__;
})()
;})(switch__47352__auto__,c__47453__auto___49691,mults,ensure_mult,p))
})();
var state__47455__auto__ = (function (){var statearr_48432 = (f__47454__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47454__auto__.cljs$core$IFn$_invoke$arity$0() : f__47454__auto__.call(null));
(statearr_48432[(6)] = c__47453__auto___49691);

return statearr_48432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47455__auto__);
});})(c__47453__auto___49691,mults,ensure_mult,p))
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
var G__48434 = arguments.length;
switch (G__48434) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__48436 = arguments.length;
switch (G__48436) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__48438 = arguments.length;
switch (G__48438) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__47453__auto___49790 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47453__auto___49790,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__47454__auto__ = (function (){var switch__47352__auto__ = ((function (c__47453__auto___49790,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_48477){
var state_val_48478 = (state_48477[(1)]);
if((state_val_48478 === (7))){
var state_48477__$1 = state_48477;
var statearr_48479_49791 = state_48477__$1;
(statearr_48479_49791[(2)] = null);

(statearr_48479_49791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48478 === (1))){
var state_48477__$1 = state_48477;
var statearr_48480_49792 = state_48477__$1;
(statearr_48480_49792[(2)] = null);

(statearr_48480_49792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48478 === (4))){
var inst_48441 = (state_48477[(7)]);
var inst_48443 = (inst_48441 < cnt);
var state_48477__$1 = state_48477;
if(cljs.core.truth_(inst_48443)){
var statearr_48481_49793 = state_48477__$1;
(statearr_48481_49793[(1)] = (6));

} else {
var statearr_48482_49797 = state_48477__$1;
(statearr_48482_49797[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48478 === (15))){
var inst_48473 = (state_48477[(2)]);
var state_48477__$1 = state_48477;
var statearr_48483_49798 = state_48477__$1;
(statearr_48483_49798[(2)] = inst_48473);

(statearr_48483_49798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48478 === (13))){
var inst_48466 = cljs.core.async.close_BANG_(out);
var state_48477__$1 = state_48477;
var statearr_48484_49805 = state_48477__$1;
(statearr_48484_49805[(2)] = inst_48466);

(statearr_48484_49805[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48478 === (6))){
var state_48477__$1 = state_48477;
var statearr_48485_49806 = state_48477__$1;
(statearr_48485_49806[(2)] = null);

(statearr_48485_49806[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48478 === (3))){
var inst_48475 = (state_48477[(2)]);
var state_48477__$1 = state_48477;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48477__$1,inst_48475);
} else {
if((state_val_48478 === (12))){
var inst_48463 = (state_48477[(8)]);
var inst_48463__$1 = (state_48477[(2)]);
var inst_48464 = cljs.core.some(cljs.core.nil_QMARK_,inst_48463__$1);
var state_48477__$1 = (function (){var statearr_48486 = state_48477;
(statearr_48486[(8)] = inst_48463__$1);

return statearr_48486;
})();
if(cljs.core.truth_(inst_48464)){
var statearr_48487_49809 = state_48477__$1;
(statearr_48487_49809[(1)] = (13));

} else {
var statearr_48488_49811 = state_48477__$1;
(statearr_48488_49811[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48478 === (2))){
var inst_48440 = cljs.core.reset_BANG_(dctr,cnt);
var inst_48441 = (0);
var state_48477__$1 = (function (){var statearr_48489 = state_48477;
(statearr_48489[(7)] = inst_48441);

(statearr_48489[(9)] = inst_48440);

return statearr_48489;
})();
var statearr_48490_49815 = state_48477__$1;
(statearr_48490_49815[(2)] = null);

(statearr_48490_49815[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48478 === (11))){
var inst_48441 = (state_48477[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48477,(10),Object,null,(9));
var inst_48450 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_48441) : chs__$1.call(null,inst_48441));
var inst_48451 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_48441) : done.call(null,inst_48441));
var inst_48452 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_48450,inst_48451);
var state_48477__$1 = state_48477;
var statearr_48491_49816 = state_48477__$1;
(statearr_48491_49816[(2)] = inst_48452);


cljs.core.async.impl.ioc_helpers.process_exception(state_48477__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48478 === (9))){
var inst_48441 = (state_48477[(7)]);
var inst_48454 = (state_48477[(2)]);
var inst_48455 = (inst_48441 + (1));
var inst_48441__$1 = inst_48455;
var state_48477__$1 = (function (){var statearr_48492 = state_48477;
(statearr_48492[(7)] = inst_48441__$1);

(statearr_48492[(10)] = inst_48454);

return statearr_48492;
})();
var statearr_48493_49818 = state_48477__$1;
(statearr_48493_49818[(2)] = null);

(statearr_48493_49818[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48478 === (5))){
var inst_48461 = (state_48477[(2)]);
var state_48477__$1 = (function (){var statearr_48494 = state_48477;
(statearr_48494[(11)] = inst_48461);

return statearr_48494;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48477__$1,(12),dchan);
} else {
if((state_val_48478 === (14))){
var inst_48463 = (state_48477[(8)]);
var inst_48468 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_48463);
var state_48477__$1 = state_48477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48477__$1,(16),out,inst_48468);
} else {
if((state_val_48478 === (16))){
var inst_48470 = (state_48477[(2)]);
var state_48477__$1 = (function (){var statearr_48495 = state_48477;
(statearr_48495[(12)] = inst_48470);

return statearr_48495;
})();
var statearr_48496_49819 = state_48477__$1;
(statearr_48496_49819[(2)] = null);

(statearr_48496_49819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48478 === (10))){
var inst_48445 = (state_48477[(2)]);
var inst_48446 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_48477__$1 = (function (){var statearr_48497 = state_48477;
(statearr_48497[(13)] = inst_48445);

return statearr_48497;
})();
var statearr_48498_49820 = state_48477__$1;
(statearr_48498_49820[(2)] = inst_48446);


cljs.core.async.impl.ioc_helpers.process_exception(state_48477__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48478 === (8))){
var inst_48459 = (state_48477[(2)]);
var state_48477__$1 = state_48477;
var statearr_48499_49821 = state_48477__$1;
(statearr_48499_49821[(2)] = inst_48459);

(statearr_48499_49821[(1)] = (5));


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
});})(c__47453__auto___49790,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__47352__auto__,c__47453__auto___49790,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__47353__auto__ = null;
var cljs$core$async$state_machine__47353__auto____0 = (function (){
var statearr_48500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48500[(0)] = cljs$core$async$state_machine__47353__auto__);

(statearr_48500[(1)] = (1));

return statearr_48500;
});
var cljs$core$async$state_machine__47353__auto____1 = (function (state_48477){
while(true){
var ret_value__47354__auto__ = (function (){try{while(true){
var result__47355__auto__ = switch__47352__auto__(state_48477);
if(cljs.core.keyword_identical_QMARK_(result__47355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47355__auto__;
}
break;
}
}catch (e48501){if((e48501 instanceof Object)){
var ex__47356__auto__ = e48501;
var statearr_48502_49823 = state_48477;
(statearr_48502_49823[(5)] = ex__47356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48501;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49824 = state_48477;
state_48477 = G__49824;
continue;
} else {
return ret_value__47354__auto__;
}
break;
}
});
cljs$core$async$state_machine__47353__auto__ = function(state_48477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47353__auto____1.call(this,state_48477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47353__auto____0;
cljs$core$async$state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47353__auto____1;
return cljs$core$async$state_machine__47353__auto__;
})()
;})(switch__47352__auto__,c__47453__auto___49790,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__47455__auto__ = (function (){var statearr_48503 = (f__47454__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47454__auto__.cljs$core$IFn$_invoke$arity$0() : f__47454__auto__.call(null));
(statearr_48503[(6)] = c__47453__auto___49790);

return statearr_48503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47455__auto__);
});})(c__47453__auto___49790,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__48506 = arguments.length;
switch (G__48506) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47453__auto___49828 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47453__auto___49828,out){
return (function (){
var f__47454__auto__ = (function (){var switch__47352__auto__ = ((function (c__47453__auto___49828,out){
return (function (state_48538){
var state_val_48539 = (state_48538[(1)]);
if((state_val_48539 === (7))){
var inst_48518 = (state_48538[(7)]);
var inst_48517 = (state_48538[(8)]);
var inst_48517__$1 = (state_48538[(2)]);
var inst_48518__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48517__$1,(0),null);
var inst_48519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48517__$1,(1),null);
var inst_48520 = (inst_48518__$1 == null);
var state_48538__$1 = (function (){var statearr_48540 = state_48538;
(statearr_48540[(9)] = inst_48519);

(statearr_48540[(7)] = inst_48518__$1);

(statearr_48540[(8)] = inst_48517__$1);

return statearr_48540;
})();
if(cljs.core.truth_(inst_48520)){
var statearr_48541_49830 = state_48538__$1;
(statearr_48541_49830[(1)] = (8));

} else {
var statearr_48542_49831 = state_48538__$1;
(statearr_48542_49831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48539 === (1))){
var inst_48507 = cljs.core.vec(chs);
var inst_48508 = inst_48507;
var state_48538__$1 = (function (){var statearr_48543 = state_48538;
(statearr_48543[(10)] = inst_48508);

return statearr_48543;
})();
var statearr_48544_49832 = state_48538__$1;
(statearr_48544_49832[(2)] = null);

(statearr_48544_49832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48539 === (4))){
var inst_48508 = (state_48538[(10)]);
var state_48538__$1 = state_48538;
return cljs.core.async.ioc_alts_BANG_(state_48538__$1,(7),inst_48508);
} else {
if((state_val_48539 === (6))){
var inst_48534 = (state_48538[(2)]);
var state_48538__$1 = state_48538;
var statearr_48545_49834 = state_48538__$1;
(statearr_48545_49834[(2)] = inst_48534);

(statearr_48545_49834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48539 === (3))){
var inst_48536 = (state_48538[(2)]);
var state_48538__$1 = state_48538;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48538__$1,inst_48536);
} else {
if((state_val_48539 === (2))){
var inst_48508 = (state_48538[(10)]);
var inst_48510 = cljs.core.count(inst_48508);
var inst_48511 = (inst_48510 > (0));
var state_48538__$1 = state_48538;
if(cljs.core.truth_(inst_48511)){
var statearr_48547_49835 = state_48538__$1;
(statearr_48547_49835[(1)] = (4));

} else {
var statearr_48548_49836 = state_48538__$1;
(statearr_48548_49836[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48539 === (11))){
var inst_48508 = (state_48538[(10)]);
var inst_48527 = (state_48538[(2)]);
var tmp48546 = inst_48508;
var inst_48508__$1 = tmp48546;
var state_48538__$1 = (function (){var statearr_48549 = state_48538;
(statearr_48549[(10)] = inst_48508__$1);

(statearr_48549[(11)] = inst_48527);

return statearr_48549;
})();
var statearr_48550_49840 = state_48538__$1;
(statearr_48550_49840[(2)] = null);

(statearr_48550_49840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48539 === (9))){
var inst_48518 = (state_48538[(7)]);
var state_48538__$1 = state_48538;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48538__$1,(11),out,inst_48518);
} else {
if((state_val_48539 === (5))){
var inst_48532 = cljs.core.async.close_BANG_(out);
var state_48538__$1 = state_48538;
var statearr_48551_49841 = state_48538__$1;
(statearr_48551_49841[(2)] = inst_48532);

(statearr_48551_49841[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48539 === (10))){
var inst_48530 = (state_48538[(2)]);
var state_48538__$1 = state_48538;
var statearr_48552_49844 = state_48538__$1;
(statearr_48552_49844[(2)] = inst_48530);

(statearr_48552_49844[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48539 === (8))){
var inst_48519 = (state_48538[(9)]);
var inst_48518 = (state_48538[(7)]);
var inst_48517 = (state_48538[(8)]);
var inst_48508 = (state_48538[(10)]);
var inst_48522 = (function (){var cs = inst_48508;
var vec__48513 = inst_48517;
var v = inst_48518;
var c = inst_48519;
return ((function (cs,vec__48513,v,c,inst_48519,inst_48518,inst_48517,inst_48508,state_val_48539,c__47453__auto___49828,out){
return (function (p1__48504_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__48504_SHARP_);
});
;})(cs,vec__48513,v,c,inst_48519,inst_48518,inst_48517,inst_48508,state_val_48539,c__47453__auto___49828,out))
})();
var inst_48523 = cljs.core.filterv(inst_48522,inst_48508);
var inst_48508__$1 = inst_48523;
var state_48538__$1 = (function (){var statearr_48553 = state_48538;
(statearr_48553[(10)] = inst_48508__$1);

return statearr_48553;
})();
var statearr_48554_49851 = state_48538__$1;
(statearr_48554_49851[(2)] = null);

(statearr_48554_49851[(1)] = (2));


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
});})(c__47453__auto___49828,out))
;
return ((function (switch__47352__auto__,c__47453__auto___49828,out){
return (function() {
var cljs$core$async$state_machine__47353__auto__ = null;
var cljs$core$async$state_machine__47353__auto____0 = (function (){
var statearr_48555 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48555[(0)] = cljs$core$async$state_machine__47353__auto__);

(statearr_48555[(1)] = (1));

return statearr_48555;
});
var cljs$core$async$state_machine__47353__auto____1 = (function (state_48538){
while(true){
var ret_value__47354__auto__ = (function (){try{while(true){
var result__47355__auto__ = switch__47352__auto__(state_48538);
if(cljs.core.keyword_identical_QMARK_(result__47355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47355__auto__;
}
break;
}
}catch (e48556){if((e48556 instanceof Object)){
var ex__47356__auto__ = e48556;
var statearr_48557_49869 = state_48538;
(statearr_48557_49869[(5)] = ex__47356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48556;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49872 = state_48538;
state_48538 = G__49872;
continue;
} else {
return ret_value__47354__auto__;
}
break;
}
});
cljs$core$async$state_machine__47353__auto__ = function(state_48538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47353__auto____1.call(this,state_48538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47353__auto____0;
cljs$core$async$state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47353__auto____1;
return cljs$core$async$state_machine__47353__auto__;
})()
;})(switch__47352__auto__,c__47453__auto___49828,out))
})();
var state__47455__auto__ = (function (){var statearr_48558 = (f__47454__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47454__auto__.cljs$core$IFn$_invoke$arity$0() : f__47454__auto__.call(null));
(statearr_48558[(6)] = c__47453__auto___49828);

return statearr_48558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47455__auto__);
});})(c__47453__auto___49828,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__48560 = arguments.length;
switch (G__48560) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47453__auto___49874 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47453__auto___49874,out){
return (function (){
var f__47454__auto__ = (function (){var switch__47352__auto__ = ((function (c__47453__auto___49874,out){
return (function (state_48584){
var state_val_48585 = (state_48584[(1)]);
if((state_val_48585 === (7))){
var inst_48566 = (state_48584[(7)]);
var inst_48566__$1 = (state_48584[(2)]);
var inst_48567 = (inst_48566__$1 == null);
var inst_48568 = cljs.core.not(inst_48567);
var state_48584__$1 = (function (){var statearr_48586 = state_48584;
(statearr_48586[(7)] = inst_48566__$1);

return statearr_48586;
})();
if(inst_48568){
var statearr_48587_49887 = state_48584__$1;
(statearr_48587_49887[(1)] = (8));

} else {
var statearr_48588_49888 = state_48584__$1;
(statearr_48588_49888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48585 === (1))){
var inst_48561 = (0);
var state_48584__$1 = (function (){var statearr_48589 = state_48584;
(statearr_48589[(8)] = inst_48561);

return statearr_48589;
})();
var statearr_48590_49889 = state_48584__$1;
(statearr_48590_49889[(2)] = null);

(statearr_48590_49889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48585 === (4))){
var state_48584__$1 = state_48584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48584__$1,(7),ch);
} else {
if((state_val_48585 === (6))){
var inst_48579 = (state_48584[(2)]);
var state_48584__$1 = state_48584;
var statearr_48591_49897 = state_48584__$1;
(statearr_48591_49897[(2)] = inst_48579);

(statearr_48591_49897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48585 === (3))){
var inst_48581 = (state_48584[(2)]);
var inst_48582 = cljs.core.async.close_BANG_(out);
var state_48584__$1 = (function (){var statearr_48592 = state_48584;
(statearr_48592[(9)] = inst_48581);

return statearr_48592;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48584__$1,inst_48582);
} else {
if((state_val_48585 === (2))){
var inst_48561 = (state_48584[(8)]);
var inst_48563 = (inst_48561 < n);
var state_48584__$1 = state_48584;
if(cljs.core.truth_(inst_48563)){
var statearr_48593_49907 = state_48584__$1;
(statearr_48593_49907[(1)] = (4));

} else {
var statearr_48594_49912 = state_48584__$1;
(statearr_48594_49912[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48585 === (11))){
var inst_48561 = (state_48584[(8)]);
var inst_48571 = (state_48584[(2)]);
var inst_48572 = (inst_48561 + (1));
var inst_48561__$1 = inst_48572;
var state_48584__$1 = (function (){var statearr_48595 = state_48584;
(statearr_48595[(8)] = inst_48561__$1);

(statearr_48595[(10)] = inst_48571);

return statearr_48595;
})();
var statearr_48596_49913 = state_48584__$1;
(statearr_48596_49913[(2)] = null);

(statearr_48596_49913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48585 === (9))){
var state_48584__$1 = state_48584;
var statearr_48597_49916 = state_48584__$1;
(statearr_48597_49916[(2)] = null);

(statearr_48597_49916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48585 === (5))){
var state_48584__$1 = state_48584;
var statearr_48598_49919 = state_48584__$1;
(statearr_48598_49919[(2)] = null);

(statearr_48598_49919[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48585 === (10))){
var inst_48576 = (state_48584[(2)]);
var state_48584__$1 = state_48584;
var statearr_48599_49920 = state_48584__$1;
(statearr_48599_49920[(2)] = inst_48576);

(statearr_48599_49920[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48585 === (8))){
var inst_48566 = (state_48584[(7)]);
var state_48584__$1 = state_48584;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48584__$1,(11),out,inst_48566);
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
});})(c__47453__auto___49874,out))
;
return ((function (switch__47352__auto__,c__47453__auto___49874,out){
return (function() {
var cljs$core$async$state_machine__47353__auto__ = null;
var cljs$core$async$state_machine__47353__auto____0 = (function (){
var statearr_48600 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48600[(0)] = cljs$core$async$state_machine__47353__auto__);

(statearr_48600[(1)] = (1));

return statearr_48600;
});
var cljs$core$async$state_machine__47353__auto____1 = (function (state_48584){
while(true){
var ret_value__47354__auto__ = (function (){try{while(true){
var result__47355__auto__ = switch__47352__auto__(state_48584);
if(cljs.core.keyword_identical_QMARK_(result__47355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47355__auto__;
}
break;
}
}catch (e48601){if((e48601 instanceof Object)){
var ex__47356__auto__ = e48601;
var statearr_48602_49922 = state_48584;
(statearr_48602_49922[(5)] = ex__47356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48601;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49924 = state_48584;
state_48584 = G__49924;
continue;
} else {
return ret_value__47354__auto__;
}
break;
}
});
cljs$core$async$state_machine__47353__auto__ = function(state_48584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47353__auto____1.call(this,state_48584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47353__auto____0;
cljs$core$async$state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47353__auto____1;
return cljs$core$async$state_machine__47353__auto__;
})()
;})(switch__47352__auto__,c__47453__auto___49874,out))
})();
var state__47455__auto__ = (function (){var statearr_48603 = (f__47454__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47454__auto__.cljs$core$IFn$_invoke$arity$0() : f__47454__auto__.call(null));
(statearr_48603[(6)] = c__47453__auto___49874);

return statearr_48603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47455__auto__);
});})(c__47453__auto___49874,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48605 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48605 = (function (f,ch,meta48606){
this.f = f;
this.ch = ch;
this.meta48606 = meta48606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48607,meta48606__$1){
var self__ = this;
var _48607__$1 = this;
return (new cljs.core.async.t_cljs$core$async48605(self__.f,self__.ch,meta48606__$1));
});

cljs.core.async.t_cljs$core$async48605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48607){
var self__ = this;
var _48607__$1 = this;
return self__.meta48606;
});

cljs.core.async.t_cljs$core$async48605.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48605.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async48605.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async48605.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48605.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48608 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48608 = (function (f,ch,meta48606,_,fn1,meta48609){
this.f = f;
this.ch = ch;
this.meta48606 = meta48606;
this._ = _;
this.fn1 = fn1;
this.meta48609 = meta48609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_48610,meta48609__$1){
var self__ = this;
var _48610__$1 = this;
return (new cljs.core.async.t_cljs$core$async48608(self__.f,self__.ch,self__.meta48606,self__._,self__.fn1,meta48609__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async48608.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_48610){
var self__ = this;
var _48610__$1 = this;
return self__.meta48609;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48608.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48608.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48608.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48608.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__48604_SHARP_){
var G__48611 = (((p1__48604_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__48604_SHARP_) : self__.f.call(null,p1__48604_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__48611) : f1.call(null,G__48611));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async48608.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48606","meta48606",1340156509,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48605","cljs.core.async/t_cljs$core$async48605",-1426552111,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48609","meta48609",392934701,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48608.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48608";

cljs.core.async.t_cljs$core$async48608.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async48608");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48608.
 */
cljs.core.async.__GT_t_cljs$core$async48608 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48608(f__$1,ch__$1,meta48606__$1,___$2,fn1__$1,meta48609){
return (new cljs.core.async.t_cljs$core$async48608(f__$1,ch__$1,meta48606__$1,___$2,fn1__$1,meta48609));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async48608(self__.f,self__.ch,self__.meta48606,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__48612 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__48612) : self__.f.call(null,G__48612));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async48605.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48605.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async48605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48606","meta48606",1340156509,null)], null);
});

cljs.core.async.t_cljs$core$async48605.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48605";

cljs.core.async.t_cljs$core$async48605.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async48605");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48605.
 */
cljs.core.async.__GT_t_cljs$core$async48605 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48605(f__$1,ch__$1,meta48606){
return (new cljs.core.async.t_cljs$core$async48605(f__$1,ch__$1,meta48606));
});

}

return (new cljs.core.async.t_cljs$core$async48605(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48613 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48613 = (function (f,ch,meta48614){
this.f = f;
this.ch = ch;
this.meta48614 = meta48614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48615,meta48614__$1){
var self__ = this;
var _48615__$1 = this;
return (new cljs.core.async.t_cljs$core$async48613(self__.f,self__.ch,meta48614__$1));
});

cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48615){
var self__ = this;
var _48615__$1 = this;
return self__.meta48614;
});

cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48613.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async48613.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48614","meta48614",-613342802,null)], null);
});

cljs.core.async.t_cljs$core$async48613.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48613.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48613";

cljs.core.async.t_cljs$core$async48613.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async48613");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48613.
 */
cljs.core.async.__GT_t_cljs$core$async48613 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48613(f__$1,ch__$1,meta48614){
return (new cljs.core.async.t_cljs$core$async48613(f__$1,ch__$1,meta48614));
});

}

return (new cljs.core.async.t_cljs$core$async48613(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48616 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48616 = (function (p,ch,meta48617){
this.p = p;
this.ch = ch;
this.meta48617 = meta48617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48618,meta48617__$1){
var self__ = this;
var _48618__$1 = this;
return (new cljs.core.async.t_cljs$core$async48616(self__.p,self__.ch,meta48617__$1));
});

cljs.core.async.t_cljs$core$async48616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48618){
var self__ = this;
var _48618__$1 = this;
return self__.meta48617;
});

cljs.core.async.t_cljs$core$async48616.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48616.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async48616.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async48616.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48616.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48616.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48616.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async48616.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48617","meta48617",-51290487,null)], null);
});

cljs.core.async.t_cljs$core$async48616.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48616.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48616";

cljs.core.async.t_cljs$core$async48616.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async48616");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48616.
 */
cljs.core.async.__GT_t_cljs$core$async48616 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48616(p__$1,ch__$1,meta48617){
return (new cljs.core.async.t_cljs$core$async48616(p__$1,ch__$1,meta48617));
});

}

return (new cljs.core.async.t_cljs$core$async48616(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__48620 = arguments.length;
switch (G__48620) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47453__auto___50024 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47453__auto___50024,out){
return (function (){
var f__47454__auto__ = (function (){var switch__47352__auto__ = ((function (c__47453__auto___50024,out){
return (function (state_48641){
var state_val_48642 = (state_48641[(1)]);
if((state_val_48642 === (7))){
var inst_48637 = (state_48641[(2)]);
var state_48641__$1 = state_48641;
var statearr_48643_50031 = state_48641__$1;
(statearr_48643_50031[(2)] = inst_48637);

(statearr_48643_50031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (1))){
var state_48641__$1 = state_48641;
var statearr_48644_50036 = state_48641__$1;
(statearr_48644_50036[(2)] = null);

(statearr_48644_50036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (4))){
var inst_48623 = (state_48641[(7)]);
var inst_48623__$1 = (state_48641[(2)]);
var inst_48624 = (inst_48623__$1 == null);
var state_48641__$1 = (function (){var statearr_48645 = state_48641;
(statearr_48645[(7)] = inst_48623__$1);

return statearr_48645;
})();
if(cljs.core.truth_(inst_48624)){
var statearr_48646_50043 = state_48641__$1;
(statearr_48646_50043[(1)] = (5));

} else {
var statearr_48647_50044 = state_48641__$1;
(statearr_48647_50044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (6))){
var inst_48623 = (state_48641[(7)]);
var inst_48628 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_48623) : p.call(null,inst_48623));
var state_48641__$1 = state_48641;
if(cljs.core.truth_(inst_48628)){
var statearr_48648_50051 = state_48641__$1;
(statearr_48648_50051[(1)] = (8));

} else {
var statearr_48649_50055 = state_48641__$1;
(statearr_48649_50055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (3))){
var inst_48639 = (state_48641[(2)]);
var state_48641__$1 = state_48641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48641__$1,inst_48639);
} else {
if((state_val_48642 === (2))){
var state_48641__$1 = state_48641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48641__$1,(4),ch);
} else {
if((state_val_48642 === (11))){
var inst_48631 = (state_48641[(2)]);
var state_48641__$1 = state_48641;
var statearr_48650_50056 = state_48641__$1;
(statearr_48650_50056[(2)] = inst_48631);

(statearr_48650_50056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (9))){
var state_48641__$1 = state_48641;
var statearr_48651_50061 = state_48641__$1;
(statearr_48651_50061[(2)] = null);

(statearr_48651_50061[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (5))){
var inst_48626 = cljs.core.async.close_BANG_(out);
var state_48641__$1 = state_48641;
var statearr_48652_50063 = state_48641__$1;
(statearr_48652_50063[(2)] = inst_48626);

(statearr_48652_50063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (10))){
var inst_48634 = (state_48641[(2)]);
var state_48641__$1 = (function (){var statearr_48653 = state_48641;
(statearr_48653[(8)] = inst_48634);

return statearr_48653;
})();
var statearr_48654_50064 = state_48641__$1;
(statearr_48654_50064[(2)] = null);

(statearr_48654_50064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48642 === (8))){
var inst_48623 = (state_48641[(7)]);
var state_48641__$1 = state_48641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48641__$1,(11),out,inst_48623);
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
});})(c__47453__auto___50024,out))
;
return ((function (switch__47352__auto__,c__47453__auto___50024,out){
return (function() {
var cljs$core$async$state_machine__47353__auto__ = null;
var cljs$core$async$state_machine__47353__auto____0 = (function (){
var statearr_48655 = [null,null,null,null,null,null,null,null,null];
(statearr_48655[(0)] = cljs$core$async$state_machine__47353__auto__);

(statearr_48655[(1)] = (1));

return statearr_48655;
});
var cljs$core$async$state_machine__47353__auto____1 = (function (state_48641){
while(true){
var ret_value__47354__auto__ = (function (){try{while(true){
var result__47355__auto__ = switch__47352__auto__(state_48641);
if(cljs.core.keyword_identical_QMARK_(result__47355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47355__auto__;
}
break;
}
}catch (e48656){if((e48656 instanceof Object)){
var ex__47356__auto__ = e48656;
var statearr_48657_50075 = state_48641;
(statearr_48657_50075[(5)] = ex__47356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48656;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50084 = state_48641;
state_48641 = G__50084;
continue;
} else {
return ret_value__47354__auto__;
}
break;
}
});
cljs$core$async$state_machine__47353__auto__ = function(state_48641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47353__auto____1.call(this,state_48641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47353__auto____0;
cljs$core$async$state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47353__auto____1;
return cljs$core$async$state_machine__47353__auto__;
})()
;})(switch__47352__auto__,c__47453__auto___50024,out))
})();
var state__47455__auto__ = (function (){var statearr_48658 = (f__47454__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47454__auto__.cljs$core$IFn$_invoke$arity$0() : f__47454__auto__.call(null));
(statearr_48658[(6)] = c__47453__auto___50024);

return statearr_48658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47455__auto__);
});})(c__47453__auto___50024,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48660 = arguments.length;
switch (G__48660) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__47453__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47453__auto__){
return (function (){
var f__47454__auto__ = (function (){var switch__47352__auto__ = ((function (c__47453__auto__){
return (function (state_48722){
var state_val_48723 = (state_48722[(1)]);
if((state_val_48723 === (7))){
var inst_48718 = (state_48722[(2)]);
var state_48722__$1 = state_48722;
var statearr_48724_50095 = state_48722__$1;
(statearr_48724_50095[(2)] = inst_48718);

(statearr_48724_50095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48723 === (20))){
var inst_48688 = (state_48722[(7)]);
var inst_48699 = (state_48722[(2)]);
var inst_48700 = cljs.core.next(inst_48688);
var inst_48674 = inst_48700;
var inst_48675 = null;
var inst_48676 = (0);
var inst_48677 = (0);
var state_48722__$1 = (function (){var statearr_48725 = state_48722;
(statearr_48725[(8)] = inst_48674);

(statearr_48725[(9)] = inst_48699);

(statearr_48725[(10)] = inst_48676);

(statearr_48725[(11)] = inst_48675);

(statearr_48725[(12)] = inst_48677);

return statearr_48725;
})();
var statearr_48726_50097 = state_48722__$1;
(statearr_48726_50097[(2)] = null);

(statearr_48726_50097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48723 === (1))){
var state_48722__$1 = state_48722;
var statearr_48727_50098 = state_48722__$1;
(statearr_48727_50098[(2)] = null);

(statearr_48727_50098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48723 === (4))){
var inst_48663 = (state_48722[(13)]);
var inst_48663__$1 = (state_48722[(2)]);
var inst_48664 = (inst_48663__$1 == null);
var state_48722__$1 = (function (){var statearr_48728 = state_48722;
(statearr_48728[(13)] = inst_48663__$1);

return statearr_48728;
})();
if(cljs.core.truth_(inst_48664)){
var statearr_48729_50099 = state_48722__$1;
(statearr_48729_50099[(1)] = (5));

} else {
var statearr_48730_50100 = state_48722__$1;
(statearr_48730_50100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48723 === (15))){
var state_48722__$1 = state_48722;
var statearr_48734_50101 = state_48722__$1;
(statearr_48734_50101[(2)] = null);

(statearr_48734_50101[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48723 === (21))){
var state_48722__$1 = state_48722;
var statearr_48735_50102 = state_48722__$1;
(statearr_48735_50102[(2)] = null);

(statearr_48735_50102[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48723 === (13))){
var inst_48674 = (state_48722[(8)]);
var inst_48676 = (state_48722[(10)]);
var inst_48675 = (state_48722[(11)]);
var inst_48677 = (state_48722[(12)]);
var inst_48684 = (state_48722[(2)]);
var inst_48685 = (inst_48677 + (1));
var tmp48731 = inst_48674;
var tmp48732 = inst_48676;
var tmp48733 = inst_48675;
var inst_48674__$1 = tmp48731;
var inst_48675__$1 = tmp48733;
var inst_48676__$1 = tmp48732;
var inst_48677__$1 = inst_48685;
var state_48722__$1 = (function (){var statearr_48736 = state_48722;
(statearr_48736[(14)] = inst_48684);

(statearr_48736[(8)] = inst_48674__$1);

(statearr_48736[(10)] = inst_48676__$1);

(statearr_48736[(11)] = inst_48675__$1);

(statearr_48736[(12)] = inst_48677__$1);

return statearr_48736;
})();
var statearr_48737_50106 = state_48722__$1;
(statearr_48737_50106[(2)] = null);

(statearr_48737_50106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48723 === (22))){
var state_48722__$1 = state_48722;
var statearr_48738_50107 = state_48722__$1;
(statearr_48738_50107[(2)] = null);

(statearr_48738_50107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48723 === (6))){
var inst_48663 = (state_48722[(13)]);
var inst_48672 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48663) : f.call(null,inst_48663));
var inst_48673 = cljs.core.seq(inst_48672);
var inst_48674 = inst_48673;
var inst_48675 = null;
var inst_48676 = (0);
var inst_48677 = (0);
var state_48722__$1 = (function (){var statearr_48739 = state_48722;
(statearr_48739[(8)] = inst_48674);

(statearr_48739[(10)] = inst_48676);

(statearr_48739[(11)] = inst_48675);

(statearr_48739[(12)] = inst_48677);

return statearr_48739;
})();
var statearr_48740_50125 = state_48722__$1;
(statearr_48740_50125[(2)] = null);

(statearr_48740_50125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48723 === (17))){
var inst_48688 = (state_48722[(7)]);
var inst_48692 = cljs.core.chunk_first(inst_48688);
var inst_48693 = cljs.core.chunk_rest(inst_48688);
var inst_48694 = cljs.core.count(inst_48692);
var inst_48674 = inst_48693;
var inst_48675 = inst_48692;
var inst_48676 = inst_48694;
var inst_48677 = (0);
var state_48722__$1 = (function (){var statearr_48741 = state_48722;
(statearr_48741[(8)] = inst_48674);

(statearr_48741[(10)] = inst_48676);

(statearr_48741[(11)] = inst_48675);

(statearr_48741[(12)] = inst_48677);

return statearr_48741;
})();
var statearr_48742_50135 = state_48722__$1;
(statearr_48742_50135[(2)] = null);

(statearr_48742_50135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48723 === (3))){
var inst_48720 = (state_48722[(2)]);
var state_48722__$1 = state_48722;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48722__$1,inst_48720);
} else {
if((state_val_48723 === (12))){
var inst_48708 = (state_48722[(2)]);
var state_48722__$1 = state_48722;
var statearr_48743_50143 = state_48722__$1;
(statearr_48743_50143[(2)] = inst_48708);

(statearr_48743_50143[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48723 === (2))){
var state_48722__$1 = state_48722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48722__$1,(4),in$);
} else {
if((state_val_48723 === (23))){
var inst_48716 = (state_48722[(2)]);
var state_48722__$1 = state_48722;
var statearr_48744_50151 = state_48722__$1;
(statearr_48744_50151[(2)] = inst_48716);

(statearr_48744_50151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48723 === (19))){
var inst_48703 = (state_48722[(2)]);
var state_48722__$1 = state_48722;
var statearr_48745_50159 = state_48722__$1;
(statearr_48745_50159[(2)] = inst_48703);

(statearr_48745_50159[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48723 === (11))){
var inst_48688 = (state_48722[(7)]);
var inst_48674 = (state_48722[(8)]);
var inst_48688__$1 = cljs.core.seq(inst_48674);
var state_48722__$1 = (function (){var statearr_48746 = state_48722;
(statearr_48746[(7)] = inst_48688__$1);

return statearr_48746;
})();
if(inst_48688__$1){
var statearr_48747_50167 = state_48722__$1;
(statearr_48747_50167[(1)] = (14));

} else {
var statearr_48748_50168 = state_48722__$1;
(statearr_48748_50168[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48723 === (9))){
var inst_48710 = (state_48722[(2)]);
var inst_48711 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_48722__$1 = (function (){var statearr_48749 = state_48722;
(statearr_48749[(15)] = inst_48710);

return statearr_48749;
})();
if(cljs.core.truth_(inst_48711)){
var statearr_48750_50169 = state_48722__$1;
(statearr_48750_50169[(1)] = (21));

} else {
var statearr_48751_50170 = state_48722__$1;
(statearr_48751_50170[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48723 === (5))){
var inst_48666 = cljs.core.async.close_BANG_(out);
var state_48722__$1 = state_48722;
var statearr_48752_50171 = state_48722__$1;
(statearr_48752_50171[(2)] = inst_48666);

(statearr_48752_50171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48723 === (14))){
var inst_48688 = (state_48722[(7)]);
var inst_48690 = cljs.core.chunked_seq_QMARK_(inst_48688);
var state_48722__$1 = state_48722;
if(inst_48690){
var statearr_48753_50173 = state_48722__$1;
(statearr_48753_50173[(1)] = (17));

} else {
var statearr_48754_50174 = state_48722__$1;
(statearr_48754_50174[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48723 === (16))){
var inst_48706 = (state_48722[(2)]);
var state_48722__$1 = state_48722;
var statearr_48755_50175 = state_48722__$1;
(statearr_48755_50175[(2)] = inst_48706);

(statearr_48755_50175[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48723 === (10))){
var inst_48675 = (state_48722[(11)]);
var inst_48677 = (state_48722[(12)]);
var inst_48682 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_48675,inst_48677);
var state_48722__$1 = state_48722;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48722__$1,(13),out,inst_48682);
} else {
if((state_val_48723 === (18))){
var inst_48688 = (state_48722[(7)]);
var inst_48697 = cljs.core.first(inst_48688);
var state_48722__$1 = state_48722;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48722__$1,(20),out,inst_48697);
} else {
if((state_val_48723 === (8))){
var inst_48676 = (state_48722[(10)]);
var inst_48677 = (state_48722[(12)]);
var inst_48679 = (inst_48677 < inst_48676);
var inst_48680 = inst_48679;
var state_48722__$1 = state_48722;
if(cljs.core.truth_(inst_48680)){
var statearr_48756_50182 = state_48722__$1;
(statearr_48756_50182[(1)] = (10));

} else {
var statearr_48757_50183 = state_48722__$1;
(statearr_48757_50183[(1)] = (11));

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
});})(c__47453__auto__))
;
return ((function (switch__47352__auto__,c__47453__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__47353__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__47353__auto____0 = (function (){
var statearr_48758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48758[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__47353__auto__);

(statearr_48758[(1)] = (1));

return statearr_48758;
});
var cljs$core$async$mapcat_STAR__$_state_machine__47353__auto____1 = (function (state_48722){
while(true){
var ret_value__47354__auto__ = (function (){try{while(true){
var result__47355__auto__ = switch__47352__auto__(state_48722);
if(cljs.core.keyword_identical_QMARK_(result__47355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47355__auto__;
}
break;
}
}catch (e48759){if((e48759 instanceof Object)){
var ex__47356__auto__ = e48759;
var statearr_48760_50186 = state_48722;
(statearr_48760_50186[(5)] = ex__47356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48759;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50191 = state_48722;
state_48722 = G__50191;
continue;
} else {
return ret_value__47354__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__47353__auto__ = function(state_48722){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__47353__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__47353__auto____1.call(this,state_48722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__47353__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__47353__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__47353__auto__;
})()
;})(switch__47352__auto__,c__47453__auto__))
})();
var state__47455__auto__ = (function (){var statearr_48761 = (f__47454__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47454__auto__.cljs$core$IFn$_invoke$arity$0() : f__47454__auto__.call(null));
(statearr_48761[(6)] = c__47453__auto__);

return statearr_48761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47455__auto__);
});})(c__47453__auto__))
);

return c__47453__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__48763 = arguments.length;
switch (G__48763) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__48765 = arguments.length;
switch (G__48765) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__48767 = arguments.length;
switch (G__48767) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47453__auto___50219 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47453__auto___50219,out){
return (function (){
var f__47454__auto__ = (function (){var switch__47352__auto__ = ((function (c__47453__auto___50219,out){
return (function (state_48791){
var state_val_48792 = (state_48791[(1)]);
if((state_val_48792 === (7))){
var inst_48786 = (state_48791[(2)]);
var state_48791__$1 = state_48791;
var statearr_48793_50220 = state_48791__$1;
(statearr_48793_50220[(2)] = inst_48786);

(statearr_48793_50220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (1))){
var inst_48768 = null;
var state_48791__$1 = (function (){var statearr_48794 = state_48791;
(statearr_48794[(7)] = inst_48768);

return statearr_48794;
})();
var statearr_48795_50224 = state_48791__$1;
(statearr_48795_50224[(2)] = null);

(statearr_48795_50224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (4))){
var inst_48771 = (state_48791[(8)]);
var inst_48771__$1 = (state_48791[(2)]);
var inst_48772 = (inst_48771__$1 == null);
var inst_48773 = cljs.core.not(inst_48772);
var state_48791__$1 = (function (){var statearr_48796 = state_48791;
(statearr_48796[(8)] = inst_48771__$1);

return statearr_48796;
})();
if(inst_48773){
var statearr_48797_50225 = state_48791__$1;
(statearr_48797_50225[(1)] = (5));

} else {
var statearr_48798_50226 = state_48791__$1;
(statearr_48798_50226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (6))){
var state_48791__$1 = state_48791;
var statearr_48799_50227 = state_48791__$1;
(statearr_48799_50227[(2)] = null);

(statearr_48799_50227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (3))){
var inst_48788 = (state_48791[(2)]);
var inst_48789 = cljs.core.async.close_BANG_(out);
var state_48791__$1 = (function (){var statearr_48800 = state_48791;
(statearr_48800[(9)] = inst_48788);

return statearr_48800;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48791__$1,inst_48789);
} else {
if((state_val_48792 === (2))){
var state_48791__$1 = state_48791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48791__$1,(4),ch);
} else {
if((state_val_48792 === (11))){
var inst_48771 = (state_48791[(8)]);
var inst_48780 = (state_48791[(2)]);
var inst_48768 = inst_48771;
var state_48791__$1 = (function (){var statearr_48801 = state_48791;
(statearr_48801[(7)] = inst_48768);

(statearr_48801[(10)] = inst_48780);

return statearr_48801;
})();
var statearr_48802_50232 = state_48791__$1;
(statearr_48802_50232[(2)] = null);

(statearr_48802_50232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (9))){
var inst_48771 = (state_48791[(8)]);
var state_48791__$1 = state_48791;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48791__$1,(11),out,inst_48771);
} else {
if((state_val_48792 === (5))){
var inst_48768 = (state_48791[(7)]);
var inst_48771 = (state_48791[(8)]);
var inst_48775 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48771,inst_48768);
var state_48791__$1 = state_48791;
if(inst_48775){
var statearr_48804_50233 = state_48791__$1;
(statearr_48804_50233[(1)] = (8));

} else {
var statearr_48805_50234 = state_48791__$1;
(statearr_48805_50234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (10))){
var inst_48783 = (state_48791[(2)]);
var state_48791__$1 = state_48791;
var statearr_48806_50235 = state_48791__$1;
(statearr_48806_50235[(2)] = inst_48783);

(statearr_48806_50235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48792 === (8))){
var inst_48768 = (state_48791[(7)]);
var tmp48803 = inst_48768;
var inst_48768__$1 = tmp48803;
var state_48791__$1 = (function (){var statearr_48807 = state_48791;
(statearr_48807[(7)] = inst_48768__$1);

return statearr_48807;
})();
var statearr_48808_50236 = state_48791__$1;
(statearr_48808_50236[(2)] = null);

(statearr_48808_50236[(1)] = (2));


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
});})(c__47453__auto___50219,out))
;
return ((function (switch__47352__auto__,c__47453__auto___50219,out){
return (function() {
var cljs$core$async$state_machine__47353__auto__ = null;
var cljs$core$async$state_machine__47353__auto____0 = (function (){
var statearr_48809 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48809[(0)] = cljs$core$async$state_machine__47353__auto__);

(statearr_48809[(1)] = (1));

return statearr_48809;
});
var cljs$core$async$state_machine__47353__auto____1 = (function (state_48791){
while(true){
var ret_value__47354__auto__ = (function (){try{while(true){
var result__47355__auto__ = switch__47352__auto__(state_48791);
if(cljs.core.keyword_identical_QMARK_(result__47355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47355__auto__;
}
break;
}
}catch (e48810){if((e48810 instanceof Object)){
var ex__47356__auto__ = e48810;
var statearr_48811_50237 = state_48791;
(statearr_48811_50237[(5)] = ex__47356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48810;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50238 = state_48791;
state_48791 = G__50238;
continue;
} else {
return ret_value__47354__auto__;
}
break;
}
});
cljs$core$async$state_machine__47353__auto__ = function(state_48791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47353__auto____1.call(this,state_48791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47353__auto____0;
cljs$core$async$state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47353__auto____1;
return cljs$core$async$state_machine__47353__auto__;
})()
;})(switch__47352__auto__,c__47453__auto___50219,out))
})();
var state__47455__auto__ = (function (){var statearr_48812 = (f__47454__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47454__auto__.cljs$core$IFn$_invoke$arity$0() : f__47454__auto__.call(null));
(statearr_48812[(6)] = c__47453__auto___50219);

return statearr_48812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47455__auto__);
});})(c__47453__auto___50219,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__48814 = arguments.length;
switch (G__48814) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47453__auto___50242 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47453__auto___50242,out){
return (function (){
var f__47454__auto__ = (function (){var switch__47352__auto__ = ((function (c__47453__auto___50242,out){
return (function (state_48852){
var state_val_48853 = (state_48852[(1)]);
if((state_val_48853 === (7))){
var inst_48848 = (state_48852[(2)]);
var state_48852__$1 = state_48852;
var statearr_48854_50243 = state_48852__$1;
(statearr_48854_50243[(2)] = inst_48848);

(statearr_48854_50243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (1))){
var inst_48815 = (new Array(n));
var inst_48816 = inst_48815;
var inst_48817 = (0);
var state_48852__$1 = (function (){var statearr_48855 = state_48852;
(statearr_48855[(7)] = inst_48817);

(statearr_48855[(8)] = inst_48816);

return statearr_48855;
})();
var statearr_48856_50248 = state_48852__$1;
(statearr_48856_50248[(2)] = null);

(statearr_48856_50248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (4))){
var inst_48820 = (state_48852[(9)]);
var inst_48820__$1 = (state_48852[(2)]);
var inst_48821 = (inst_48820__$1 == null);
var inst_48822 = cljs.core.not(inst_48821);
var state_48852__$1 = (function (){var statearr_48857 = state_48852;
(statearr_48857[(9)] = inst_48820__$1);

return statearr_48857;
})();
if(inst_48822){
var statearr_48858_50251 = state_48852__$1;
(statearr_48858_50251[(1)] = (5));

} else {
var statearr_48859_50252 = state_48852__$1;
(statearr_48859_50252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (15))){
var inst_48842 = (state_48852[(2)]);
var state_48852__$1 = state_48852;
var statearr_48860_50253 = state_48852__$1;
(statearr_48860_50253[(2)] = inst_48842);

(statearr_48860_50253[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (13))){
var state_48852__$1 = state_48852;
var statearr_48861_50254 = state_48852__$1;
(statearr_48861_50254[(2)] = null);

(statearr_48861_50254[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (6))){
var inst_48817 = (state_48852[(7)]);
var inst_48838 = (inst_48817 > (0));
var state_48852__$1 = state_48852;
if(cljs.core.truth_(inst_48838)){
var statearr_48862_50258 = state_48852__$1;
(statearr_48862_50258[(1)] = (12));

} else {
var statearr_48863_50259 = state_48852__$1;
(statearr_48863_50259[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (3))){
var inst_48850 = (state_48852[(2)]);
var state_48852__$1 = state_48852;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48852__$1,inst_48850);
} else {
if((state_val_48853 === (12))){
var inst_48816 = (state_48852[(8)]);
var inst_48840 = cljs.core.vec(inst_48816);
var state_48852__$1 = state_48852;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48852__$1,(15),out,inst_48840);
} else {
if((state_val_48853 === (2))){
var state_48852__$1 = state_48852;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48852__$1,(4),ch);
} else {
if((state_val_48853 === (11))){
var inst_48832 = (state_48852[(2)]);
var inst_48833 = (new Array(n));
var inst_48816 = inst_48833;
var inst_48817 = (0);
var state_48852__$1 = (function (){var statearr_48864 = state_48852;
(statearr_48864[(10)] = inst_48832);

(statearr_48864[(7)] = inst_48817);

(statearr_48864[(8)] = inst_48816);

return statearr_48864;
})();
var statearr_48865_50262 = state_48852__$1;
(statearr_48865_50262[(2)] = null);

(statearr_48865_50262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (9))){
var inst_48816 = (state_48852[(8)]);
var inst_48830 = cljs.core.vec(inst_48816);
var state_48852__$1 = state_48852;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48852__$1,(11),out,inst_48830);
} else {
if((state_val_48853 === (5))){
var inst_48825 = (state_48852[(11)]);
var inst_48817 = (state_48852[(7)]);
var inst_48820 = (state_48852[(9)]);
var inst_48816 = (state_48852[(8)]);
var inst_48824 = (inst_48816[inst_48817] = inst_48820);
var inst_48825__$1 = (inst_48817 + (1));
var inst_48826 = (inst_48825__$1 < n);
var state_48852__$1 = (function (){var statearr_48866 = state_48852;
(statearr_48866[(11)] = inst_48825__$1);

(statearr_48866[(12)] = inst_48824);

return statearr_48866;
})();
if(cljs.core.truth_(inst_48826)){
var statearr_48867_50264 = state_48852__$1;
(statearr_48867_50264[(1)] = (8));

} else {
var statearr_48868_50265 = state_48852__$1;
(statearr_48868_50265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (14))){
var inst_48845 = (state_48852[(2)]);
var inst_48846 = cljs.core.async.close_BANG_(out);
var state_48852__$1 = (function (){var statearr_48870 = state_48852;
(statearr_48870[(13)] = inst_48845);

return statearr_48870;
})();
var statearr_48871_50273 = state_48852__$1;
(statearr_48871_50273[(2)] = inst_48846);

(statearr_48871_50273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (10))){
var inst_48836 = (state_48852[(2)]);
var state_48852__$1 = state_48852;
var statearr_48872_50275 = state_48852__$1;
(statearr_48872_50275[(2)] = inst_48836);

(statearr_48872_50275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48853 === (8))){
var inst_48825 = (state_48852[(11)]);
var inst_48816 = (state_48852[(8)]);
var tmp48869 = inst_48816;
var inst_48816__$1 = tmp48869;
var inst_48817 = inst_48825;
var state_48852__$1 = (function (){var statearr_48873 = state_48852;
(statearr_48873[(7)] = inst_48817);

(statearr_48873[(8)] = inst_48816__$1);

return statearr_48873;
})();
var statearr_48874_50276 = state_48852__$1;
(statearr_48874_50276[(2)] = null);

(statearr_48874_50276[(1)] = (2));


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
});})(c__47453__auto___50242,out))
;
return ((function (switch__47352__auto__,c__47453__auto___50242,out){
return (function() {
var cljs$core$async$state_machine__47353__auto__ = null;
var cljs$core$async$state_machine__47353__auto____0 = (function (){
var statearr_48875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48875[(0)] = cljs$core$async$state_machine__47353__auto__);

(statearr_48875[(1)] = (1));

return statearr_48875;
});
var cljs$core$async$state_machine__47353__auto____1 = (function (state_48852){
while(true){
var ret_value__47354__auto__ = (function (){try{while(true){
var result__47355__auto__ = switch__47352__auto__(state_48852);
if(cljs.core.keyword_identical_QMARK_(result__47355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47355__auto__;
}
break;
}
}catch (e48876){if((e48876 instanceof Object)){
var ex__47356__auto__ = e48876;
var statearr_48877_50277 = state_48852;
(statearr_48877_50277[(5)] = ex__47356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48876;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50278 = state_48852;
state_48852 = G__50278;
continue;
} else {
return ret_value__47354__auto__;
}
break;
}
});
cljs$core$async$state_machine__47353__auto__ = function(state_48852){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47353__auto____1.call(this,state_48852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47353__auto____0;
cljs$core$async$state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47353__auto____1;
return cljs$core$async$state_machine__47353__auto__;
})()
;})(switch__47352__auto__,c__47453__auto___50242,out))
})();
var state__47455__auto__ = (function (){var statearr_48878 = (f__47454__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47454__auto__.cljs$core$IFn$_invoke$arity$0() : f__47454__auto__.call(null));
(statearr_48878[(6)] = c__47453__auto___50242);

return statearr_48878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47455__auto__);
});})(c__47453__auto___50242,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__48880 = arguments.length;
switch (G__48880) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47453__auto___50285 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47453__auto___50285,out){
return (function (){
var f__47454__auto__ = (function (){var switch__47352__auto__ = ((function (c__47453__auto___50285,out){
return (function (state_48922){
var state_val_48923 = (state_48922[(1)]);
if((state_val_48923 === (7))){
var inst_48918 = (state_48922[(2)]);
var state_48922__$1 = state_48922;
var statearr_48924_50288 = state_48922__$1;
(statearr_48924_50288[(2)] = inst_48918);

(statearr_48924_50288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (1))){
var inst_48881 = [];
var inst_48882 = inst_48881;
var inst_48883 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_48922__$1 = (function (){var statearr_48925 = state_48922;
(statearr_48925[(7)] = inst_48882);

(statearr_48925[(8)] = inst_48883);

return statearr_48925;
})();
var statearr_48926_50289 = state_48922__$1;
(statearr_48926_50289[(2)] = null);

(statearr_48926_50289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (4))){
var inst_48886 = (state_48922[(9)]);
var inst_48886__$1 = (state_48922[(2)]);
var inst_48887 = (inst_48886__$1 == null);
var inst_48888 = cljs.core.not(inst_48887);
var state_48922__$1 = (function (){var statearr_48927 = state_48922;
(statearr_48927[(9)] = inst_48886__$1);

return statearr_48927;
})();
if(inst_48888){
var statearr_48928_50291 = state_48922__$1;
(statearr_48928_50291[(1)] = (5));

} else {
var statearr_48929_50292 = state_48922__$1;
(statearr_48929_50292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (15))){
var inst_48912 = (state_48922[(2)]);
var state_48922__$1 = state_48922;
var statearr_48930_50293 = state_48922__$1;
(statearr_48930_50293[(2)] = inst_48912);

(statearr_48930_50293[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (13))){
var state_48922__$1 = state_48922;
var statearr_48931_50294 = state_48922__$1;
(statearr_48931_50294[(2)] = null);

(statearr_48931_50294[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (6))){
var inst_48882 = (state_48922[(7)]);
var inst_48907 = inst_48882.length;
var inst_48908 = (inst_48907 > (0));
var state_48922__$1 = state_48922;
if(cljs.core.truth_(inst_48908)){
var statearr_48932_50299 = state_48922__$1;
(statearr_48932_50299[(1)] = (12));

} else {
var statearr_48933_50302 = state_48922__$1;
(statearr_48933_50302[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (3))){
var inst_48920 = (state_48922[(2)]);
var state_48922__$1 = state_48922;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48922__$1,inst_48920);
} else {
if((state_val_48923 === (12))){
var inst_48882 = (state_48922[(7)]);
var inst_48910 = cljs.core.vec(inst_48882);
var state_48922__$1 = state_48922;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48922__$1,(15),out,inst_48910);
} else {
if((state_val_48923 === (2))){
var state_48922__$1 = state_48922;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48922__$1,(4),ch);
} else {
if((state_val_48923 === (11))){
var inst_48886 = (state_48922[(9)]);
var inst_48890 = (state_48922[(10)]);
var inst_48900 = (state_48922[(2)]);
var inst_48901 = [];
var inst_48902 = inst_48901.push(inst_48886);
var inst_48882 = inst_48901;
var inst_48883 = inst_48890;
var state_48922__$1 = (function (){var statearr_48934 = state_48922;
(statearr_48934[(11)] = inst_48902);

(statearr_48934[(7)] = inst_48882);

(statearr_48934[(8)] = inst_48883);

(statearr_48934[(12)] = inst_48900);

return statearr_48934;
})();
var statearr_48935_50314 = state_48922__$1;
(statearr_48935_50314[(2)] = null);

(statearr_48935_50314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (9))){
var inst_48882 = (state_48922[(7)]);
var inst_48898 = cljs.core.vec(inst_48882);
var state_48922__$1 = state_48922;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48922__$1,(11),out,inst_48898);
} else {
if((state_val_48923 === (5))){
var inst_48886 = (state_48922[(9)]);
var inst_48883 = (state_48922[(8)]);
var inst_48890 = (state_48922[(10)]);
var inst_48890__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48886) : f.call(null,inst_48886));
var inst_48891 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48890__$1,inst_48883);
var inst_48892 = cljs.core.keyword_identical_QMARK_(inst_48883,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_48893 = ((inst_48891) || (inst_48892));
var state_48922__$1 = (function (){var statearr_48936 = state_48922;
(statearr_48936[(10)] = inst_48890__$1);

return statearr_48936;
})();
if(cljs.core.truth_(inst_48893)){
var statearr_48937_50319 = state_48922__$1;
(statearr_48937_50319[(1)] = (8));

} else {
var statearr_48938_50320 = state_48922__$1;
(statearr_48938_50320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (14))){
var inst_48915 = (state_48922[(2)]);
var inst_48916 = cljs.core.async.close_BANG_(out);
var state_48922__$1 = (function (){var statearr_48940 = state_48922;
(statearr_48940[(13)] = inst_48915);

return statearr_48940;
})();
var statearr_48941_50321 = state_48922__$1;
(statearr_48941_50321[(2)] = inst_48916);

(statearr_48941_50321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (10))){
var inst_48905 = (state_48922[(2)]);
var state_48922__$1 = state_48922;
var statearr_48942_50322 = state_48922__$1;
(statearr_48942_50322[(2)] = inst_48905);

(statearr_48942_50322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48923 === (8))){
var inst_48882 = (state_48922[(7)]);
var inst_48886 = (state_48922[(9)]);
var inst_48890 = (state_48922[(10)]);
var inst_48895 = inst_48882.push(inst_48886);
var tmp48939 = inst_48882;
var inst_48882__$1 = tmp48939;
var inst_48883 = inst_48890;
var state_48922__$1 = (function (){var statearr_48943 = state_48922;
(statearr_48943[(7)] = inst_48882__$1);

(statearr_48943[(8)] = inst_48883);

(statearr_48943[(14)] = inst_48895);

return statearr_48943;
})();
var statearr_48944_50330 = state_48922__$1;
(statearr_48944_50330[(2)] = null);

(statearr_48944_50330[(1)] = (2));


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
});})(c__47453__auto___50285,out))
;
return ((function (switch__47352__auto__,c__47453__auto___50285,out){
return (function() {
var cljs$core$async$state_machine__47353__auto__ = null;
var cljs$core$async$state_machine__47353__auto____0 = (function (){
var statearr_48945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48945[(0)] = cljs$core$async$state_machine__47353__auto__);

(statearr_48945[(1)] = (1));

return statearr_48945;
});
var cljs$core$async$state_machine__47353__auto____1 = (function (state_48922){
while(true){
var ret_value__47354__auto__ = (function (){try{while(true){
var result__47355__auto__ = switch__47352__auto__(state_48922);
if(cljs.core.keyword_identical_QMARK_(result__47355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47355__auto__;
}
break;
}
}catch (e48946){if((e48946 instanceof Object)){
var ex__47356__auto__ = e48946;
var statearr_48947_50346 = state_48922;
(statearr_48947_50346[(5)] = ex__47356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48946;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50347 = state_48922;
state_48922 = G__50347;
continue;
} else {
return ret_value__47354__auto__;
}
break;
}
});
cljs$core$async$state_machine__47353__auto__ = function(state_48922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47353__auto____1.call(this,state_48922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47353__auto____0;
cljs$core$async$state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47353__auto____1;
return cljs$core$async$state_machine__47353__auto__;
})()
;})(switch__47352__auto__,c__47453__auto___50285,out))
})();
var state__47455__auto__ = (function (){var statearr_48948 = (f__47454__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47454__auto__.cljs$core$IFn$_invoke$arity$0() : f__47454__auto__.call(null));
(statearr_48948[(6)] = c__47453__auto___50285);

return statearr_48948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47455__auto__);
});})(c__47453__auto___50285,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
