// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t20853 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20853 = (function (f,fn_handler,meta20854){
this.f = f;
this.fn_handler = fn_handler;
this.meta20854 = meta20854;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20853.cljs$lang$type = true;
cljs.core.async.t20853.cljs$lang$ctorStr = "cljs.core.async/t20853";
cljs.core.async.t20853.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t20853");
});
cljs.core.async.t20853.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20853.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t20853.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t20853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20855){var self__ = this;
var _20855__$1 = this;return self__.meta20854;
});
cljs.core.async.t20853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20855,meta20854__$1){var self__ = this;
var _20855__$1 = this;return (new cljs.core.async.t20853(self__.f,self__.fn_handler,meta20854__$1));
});
cljs.core.async.__GT_t20853 = (function __GT_t20853(f__$1,fn_handler__$1,meta20854){return (new cljs.core.async.t20853(f__$1,fn_handler__$1,meta20854));
});
}
return (new cljs.core.async.t20853(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__20857 = buff;if(G__20857)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__20857.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__20857.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__20857);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__20857);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)], 0))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(ret))
{var val_20874 = (function (){var G__20871 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20871) : cljs.core.deref.call(null,G__20871));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__20872_20875 = val_20874;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__20872_20875) : fn1.call(null,G__20872_20875));
} else
{cljs.core.async.impl.dispatch.run(((function (val_20874,ret){
return (function (){var G__20873 = val_20874;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__20873) : fn1.call(null,G__20873));
});})(val_20874,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;var G__20884 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20884) : cljs.core.deref.call(null,G__20884));
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = (function (){var G__20885 = retb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20885) : cljs.core.deref.call(null,G__20885));
})();if(cljs.core.truth_(on_caller_QMARK_))
{var G__20886_20888 = ret;(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__20886_20888) : fn1.call(null,G__20886_20888));
} else
{cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){var G__20887 = ret;return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__20887) : fn1.call(null,G__20887));
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___20889 = n;var x_20890 = (0);while(true){
if((x_20890 < n__4510__auto___20889))
{(a[x_20890] = (0));
{
var G__20891 = (x_20890 + (1));
x_20890 = G__20891;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__20892 = (i + (1));
i = G__20892;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = (function (){var G__20900 = true;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20900) : cljs.core.atom.call(null,G__20900));
})();if(typeof cljs.core.async.t20901 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20901 = (function (flag,alt_flag,meta20902){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20902 = meta20902;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20901.cljs$lang$type = true;
cljs.core.async.t20901.cljs$lang$ctorStr = "cljs.core.async/t20901";
cljs.core.async.t20901.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t20901");
});})(flag))
;
cljs.core.async.t20901.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20901.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__20904 = self__.flag;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20904) : cljs.core.deref.call(null,G__20904));
});})(flag))
;
cljs.core.async.t20901.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;var G__20905_20907 = self__.flag;var G__20906_20908 = null;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20905_20907,G__20906_20908) : cljs.core.reset_BANG_.call(null,G__20905_20907,G__20906_20908));
return true;
});})(flag))
;
cljs.core.async.t20901.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20903){var self__ = this;
var _20903__$1 = this;return self__.meta20902;
});})(flag))
;
cljs.core.async.t20901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20903,meta20902__$1){var self__ = this;
var _20903__$1 = this;return (new cljs.core.async.t20901(self__.flag,self__.alt_flag,meta20902__$1));
});})(flag))
;
cljs.core.async.__GT_t20901 = ((function (flag){
return (function __GT_t20901(flag__$1,alt_flag__$1,meta20902){return (new cljs.core.async.t20901(flag__$1,alt_flag__$1,meta20902));
});})(flag))
;
}
return (new cljs.core.async.t20901(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t20912 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20912 = (function (cb,flag,alt_handler,meta20913){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20913 = meta20913;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20912.cljs$lang$type = true;
cljs.core.async.t20912.cljs$lang$ctorStr = "cljs.core.async/t20912";
cljs.core.async.t20912.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t20912");
});
cljs.core.async.t20912.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20912.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t20912.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t20912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20914){var self__ = this;
var _20914__$1 = this;return self__.meta20913;
});
cljs.core.async.t20912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20914,meta20913__$1){var self__ = this;
var _20914__$1 = this;return (new cljs.core.async.t20912(self__.cb,self__.flag,self__.alt_handler,meta20913__$1));
});
cljs.core.async.__GT_t20912 = (function __GT_t20912(cb__$1,flag__$1,alt_handler__$1,meta20913){return (new cljs.core.async.t20912(cb__$1,flag__$1,alt_handler__$1,meta20913));
});
}
return (new cljs.core.async.t20912(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__20922 = (0);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__20922) : port.call(null,G__20922));
})():null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__20923 = (1);return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__20923) : port.call(null,G__20923));
})();return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20915_SHARP_){var G__20924 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20915_SHARP_,wport], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__20924) : fret.call(null,G__20924));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20916_SHARP_){var G__20925 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20916_SHARP_,port], null);return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__20925) : fret.call(null,G__20925));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20926 = vbox;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20926) : cljs.core.deref.call(null,G__20926));
})(),(function (){var or__3640__auto__ = wport;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__20927 = (i + (1));
i = G__20927;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3640__auto__ = ret;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$7))
{var temp__4126__auto__ = (function (){var and__3628__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3628__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3628__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$7.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$7], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__20928){var map__20930 = p__20928;var map__20930__$1 = ((cljs.core.seq_QMARK_(map__20930))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20930):map__20930);var opts = map__20930__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__20928 = null;if (arguments.length > 1) {
  p__20928 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__20928);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__20931){
var ports = cljs.core.first(arglist__20931);
var p__20928 = cljs.core.rest(arglist__20931);
return alts_BANG___delegate(ports,p__20928);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__11497__auto___21029 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__11497__auto___21029){
return (function (){var f__11498__auto__ = (function (){var switch__11417__auto__ = ((function (c__11497__auto___21029){
return (function (state_21005){var state_val_21006 = (state_21005[(1)]);if((state_val_21006 === (7)))
{var inst_21001 = (state_21005[(2)]);var state_21005__$1 = state_21005;var statearr_21007_21030 = state_21005__$1;(statearr_21007_21030[(2)] = inst_21001);
(statearr_21007_21030[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21006 === (1)))
{var state_21005__$1 = state_21005;var statearr_21008_21031 = state_21005__$1;(statearr_21008_21031[(2)] = null);
(statearr_21008_21031[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21006 === (4)))
{var inst_20984 = (state_21005[(7)]);var inst_20984__$1 = (state_21005[(2)]);var inst_20985 = (inst_20984__$1 == null);var state_21005__$1 = (function (){var statearr_21009 = state_21005;(statearr_21009[(7)] = inst_20984__$1);
return statearr_21009;
})();if(cljs.core.truth_(inst_20985))
{var statearr_21010_21032 = state_21005__$1;(statearr_21010_21032[(1)] = (5));
} else
{var statearr_21011_21033 = state_21005__$1;(statearr_21011_21033[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_21006 === (13)))
{var state_21005__$1 = state_21005;var statearr_21012_21034 = state_21005__$1;(statearr_21012_21034[(2)] = null);
(statearr_21012_21034[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21006 === (6)))
{var inst_20984 = (state_21005[(7)]);var state_21005__$1 = state_21005;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21005__$1,(11),to,inst_20984);
} else
{if((state_val_21006 === (3)))
{var inst_21003 = (state_21005[(2)]);var state_21005__$1 = state_21005;return cljs.core.async.impl.ioc_helpers.return_chan(state_21005__$1,inst_21003);
} else
{if((state_val_21006 === (12)))
{var state_21005__$1 = state_21005;var statearr_21013_21035 = state_21005__$1;(statearr_21013_21035[(2)] = null);
(statearr_21013_21035[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21006 === (2)))
{var state_21005__$1 = state_21005;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21005__$1,(4),from);
} else
{if((state_val_21006 === (11)))
{var inst_20994 = (state_21005[(2)]);var state_21005__$1 = state_21005;if(cljs.core.truth_(inst_20994))
{var statearr_21014_21036 = state_21005__$1;(statearr_21014_21036[(1)] = (12));
} else
{var statearr_21015_21037 = state_21005__$1;(statearr_21015_21037[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_21006 === (9)))
{var state_21005__$1 = state_21005;var statearr_21016_21038 = state_21005__$1;(statearr_21016_21038[(2)] = null);
(statearr_21016_21038[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21006 === (5)))
{var state_21005__$1 = state_21005;if(cljs.core.truth_(close_QMARK_))
{var statearr_21017_21039 = state_21005__$1;(statearr_21017_21039[(1)] = (8));
} else
{var statearr_21018_21040 = state_21005__$1;(statearr_21018_21040[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_21006 === (14)))
{var inst_20999 = (state_21005[(2)]);var state_21005__$1 = state_21005;var statearr_21019_21041 = state_21005__$1;(statearr_21019_21041[(2)] = inst_20999);
(statearr_21019_21041[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21006 === (10)))
{var inst_20991 = (state_21005[(2)]);var state_21005__$1 = state_21005;var statearr_21020_21042 = state_21005__$1;(statearr_21020_21042[(2)] = inst_20991);
(statearr_21020_21042[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21006 === (8)))
{var inst_20988 = cljs.core.async.close_BANG_(to);var state_21005__$1 = state_21005;var statearr_21021_21043 = state_21005__$1;(statearr_21021_21043[(2)] = inst_20988);
(statearr_21021_21043[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11497__auto___21029))
;return ((function (switch__11417__auto__,c__11497__auto___21029){
return (function() {
var state_machine__11418__auto__ = null;
var state_machine__11418__auto____0 = (function (){var statearr_21025 = [null,null,null,null,null,null,null,null];(statearr_21025[(0)] = state_machine__11418__auto__);
(statearr_21025[(1)] = (1));
return statearr_21025;
});
var state_machine__11418__auto____1 = (function (state_21005){while(true){
var ret_value__11419__auto__ = (function (){try{while(true){
var result__11420__auto__ = switch__11417__auto__(state_21005);if(cljs.core.keyword_identical_QMARK_(result__11420__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__11420__auto__;
}
break;
}
}catch (e21026){if((e21026 instanceof Object))
{var ex__11421__auto__ = e21026;var statearr_21027_21044 = state_21005;(statearr_21027_21044[(5)] = ex__11421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21005);
return cljs.core.constant$keyword$16;
} else
{throw e21026;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__11419__auto__,cljs.core.constant$keyword$16))
{{
var G__21045 = state_21005;
state_21005 = G__21045;
continue;
}
} else
{return ret_value__11419__auto__;
}
break;
}
});
state_machine__11418__auto__ = function(state_21005){
switch(arguments.length){
case 0:
return state_machine__11418__auto____0.call(this);
case 1:
return state_machine__11418__auto____1.call(this,state_21005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11418__auto____0;
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11418__auto____1;
return state_machine__11418__auto__;
})()
;})(switch__11417__auto__,c__11497__auto___21029))
})();var state__11499__auto__ = (function (){var statearr_21028 = (function (){return (f__11498__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11498__auto__.cljs$core$IFn$_invoke$arity$0() : f__11498__auto__.call(null));
})();(statearr_21028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11497__auto___21029);
return statearr_21028;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11499__auto__);
});})(c__11497__auto___21029))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))], 0))))));
}
var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);var process = ((function (jobs,results){
return (function (p__21231){var vec__21232 = p__21231;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21232,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21232,(1),null);var job = vec__21232;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);var c__11497__auto___21416 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__11497__auto___21416,res,vec__21232,v,p,job,jobs,results){
return (function (){var f__11498__auto__ = (function (){var switch__11417__auto__ = ((function (c__11497__auto___21416,res,vec__21232,v,p,job,jobs,results){
return (function (state_21237){var state_val_21238 = (state_21237[(1)]);if((state_val_21238 === (2)))
{var inst_21234 = (state_21237[(2)]);var inst_21235 = cljs.core.async.close_BANG_(res);var state_21237__$1 = (function (){var statearr_21239 = state_21237;(statearr_21239[(7)] = inst_21234);
return statearr_21239;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_21237__$1,inst_21235);
} else
{if((state_val_21238 === (1)))
{var state_21237__$1 = state_21237;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21237__$1,(2),res,v);
} else
{return null;
}
}
});})(c__11497__auto___21416,res,vec__21232,v,p,job,jobs,results))
;return ((function (switch__11417__auto__,c__11497__auto___21416,res,vec__21232,v,p,job,jobs,results){
return (function() {
var state_machine__11418__auto__ = null;
var state_machine__11418__auto____0 = (function (){var statearr_21243 = [null,null,null,null,null,null,null,null];(statearr_21243[(0)] = state_machine__11418__auto__);
(statearr_21243[(1)] = (1));
return statearr_21243;
});
var state_machine__11418__auto____1 = (function (state_21237){while(true){
var ret_value__11419__auto__ = (function (){try{while(true){
var result__11420__auto__ = switch__11417__auto__(state_21237);if(cljs.core.keyword_identical_QMARK_(result__11420__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__11420__auto__;
}
break;
}
}catch (e21244){if((e21244 instanceof Object))
{var ex__11421__auto__ = e21244;var statearr_21245_21417 = state_21237;(statearr_21245_21417[(5)] = ex__11421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21237);
return cljs.core.constant$keyword$16;
} else
{throw e21244;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__11419__auto__,cljs.core.constant$keyword$16))
{{
var G__21418 = state_21237;
state_21237 = G__21418;
continue;
}
} else
{return ret_value__11419__auto__;
}
break;
}
});
state_machine__11418__auto__ = function(state_21237){
switch(arguments.length){
case 0:
return state_machine__11418__auto____0.call(this);
case 1:
return state_machine__11418__auto____1.call(this,state_21237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11418__auto____0;
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11418__auto____1;
return state_machine__11418__auto__;
})()
;})(switch__11417__auto__,c__11497__auto___21416,res,vec__21232,v,p,job,jobs,results))
})();var state__11499__auto__ = (function (){var statearr_21246 = (function (){return (f__11498__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11498__auto__.cljs$core$IFn$_invoke$arity$0() : f__11498__auto__.call(null));
})();(statearr_21246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11497__auto___21416);
return statearr_21246;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11499__auto__);
});})(c__11497__auto___21416,res,vec__21232,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__21247){var vec__21248 = p__21247;var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21248,(0),null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21248,(1),null);var job = vec__21248;if((job == null))
{cljs.core.async.close_BANG_(results);
return null;
} else
{var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var G__21249_21419 = v;var G__21250_21420 = res;(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__21249_21419,G__21250_21420) : xf.call(null,G__21249_21419,G__21250_21420));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);
return true;
}
});})(jobs,results,process))
;var n__4510__auto___21421 = n;var __21422 = (0);while(true){
if((__21422 < n__4510__auto___21421))
{var G__21251_21423 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__21251_21423) {
case "async":
var c__11497__auto___21425 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__21422,c__11497__auto___21425,G__21251_21423,n__4510__auto___21421,jobs,results,process,async){
return (function (){var f__11498__auto__ = (function (){var switch__11417__auto__ = ((function (__21422,c__11497__auto___21425,G__21251_21423,n__4510__auto___21421,jobs,results,process,async){
return (function (state_21264){var state_val_21265 = (state_21264[(1)]);if((state_val_21265 === (7)))
{var inst_21260 = (state_21264[(2)]);var state_21264__$1 = state_21264;var statearr_21266_21426 = state_21264__$1;(statearr_21266_21426[(2)] = inst_21260);
(statearr_21266_21426[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21265 === (6)))
{var state_21264__$1 = state_21264;var statearr_21267_21427 = state_21264__$1;(statearr_21267_21427[(2)] = null);
(statearr_21267_21427[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21265 === (5)))
{var state_21264__$1 = state_21264;var statearr_21268_21428 = state_21264__$1;(statearr_21268_21428[(2)] = null);
(statearr_21268_21428[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21265 === (4)))
{var inst_21254 = (state_21264[(2)]);var inst_21255 = async(inst_21254);var state_21264__$1 = state_21264;if(cljs.core.truth_(inst_21255))
{var statearr_21269_21429 = state_21264__$1;(statearr_21269_21429[(1)] = (5));
} else
{var statearr_21270_21430 = state_21264__$1;(statearr_21270_21430[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_21265 === (3)))
{var inst_21262 = (state_21264[(2)]);var state_21264__$1 = state_21264;return cljs.core.async.impl.ioc_helpers.return_chan(state_21264__$1,inst_21262);
} else
{if((state_val_21265 === (2)))
{var state_21264__$1 = state_21264;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21264__$1,(4),jobs);
} else
{if((state_val_21265 === (1)))
{var state_21264__$1 = state_21264;var statearr_21271_21431 = state_21264__$1;(statearr_21271_21431[(2)] = null);
(statearr_21271_21431[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
});})(__21422,c__11497__auto___21425,G__21251_21423,n__4510__auto___21421,jobs,results,process,async))
;return ((function (__21422,switch__11417__auto__,c__11497__auto___21425,G__21251_21423,n__4510__auto___21421,jobs,results,process,async){
return (function() {
var state_machine__11418__auto__ = null;
var state_machine__11418__auto____0 = (function (){var statearr_21275 = [null,null,null,null,null,null,null];(statearr_21275[(0)] = state_machine__11418__auto__);
(statearr_21275[(1)] = (1));
return statearr_21275;
});
var state_machine__11418__auto____1 = (function (state_21264){while(true){
var ret_value__11419__auto__ = (function (){try{while(true){
var result__11420__auto__ = switch__11417__auto__(state_21264);if(cljs.core.keyword_identical_QMARK_(result__11420__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__11420__auto__;
}
break;
}
}catch (e21276){if((e21276 instanceof Object))
{var ex__11421__auto__ = e21276;var statearr_21277_21432 = state_21264;(statearr_21277_21432[(5)] = ex__11421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21264);
return cljs.core.constant$keyword$16;
} else
{throw e21276;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__11419__auto__,cljs.core.constant$keyword$16))
{{
var G__21433 = state_21264;
state_21264 = G__21433;
continue;
}
} else
{return ret_value__11419__auto__;
}
break;
}
});
state_machine__11418__auto__ = function(state_21264){
switch(arguments.length){
case 0:
return state_machine__11418__auto____0.call(this);
case 1:
return state_machine__11418__auto____1.call(this,state_21264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11418__auto____0;
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11418__auto____1;
return state_machine__11418__auto__;
})()
;})(__21422,switch__11417__auto__,c__11497__auto___21425,G__21251_21423,n__4510__auto___21421,jobs,results,process,async))
})();var state__11499__auto__ = (function (){var statearr_21278 = (function (){return (f__11498__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11498__auto__.cljs$core$IFn$_invoke$arity$0() : f__11498__auto__.call(null));
})();(statearr_21278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11497__auto___21425);
return statearr_21278;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11499__auto__);
});})(__21422,c__11497__auto___21425,G__21251_21423,n__4510__auto___21421,jobs,results,process,async))
);

break;
case "compute":
var c__11497__auto___21434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (__21422,c__11497__auto___21434,G__21251_21423,n__4510__auto___21421,jobs,results,process,async){
return (function (){var f__11498__auto__ = (function (){var switch__11417__auto__ = ((function (__21422,c__11497__auto___21434,G__21251_21423,n__4510__auto___21421,jobs,results,process,async){
return (function (state_21291){var state_val_21292 = (state_21291[(1)]);if((state_val_21292 === (7)))
{var inst_21287 = (state_21291[(2)]);var state_21291__$1 = state_21291;var statearr_21293_21435 = state_21291__$1;(statearr_21293_21435[(2)] = inst_21287);
(statearr_21293_21435[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21292 === (6)))
{var state_21291__$1 = state_21291;var statearr_21294_21436 = state_21291__$1;(statearr_21294_21436[(2)] = null);
(statearr_21294_21436[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21292 === (5)))
{var state_21291__$1 = state_21291;var statearr_21295_21437 = state_21291__$1;(statearr_21295_21437[(2)] = null);
(statearr_21295_21437[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21292 === (4)))
{var inst_21281 = (state_21291[(2)]);var inst_21282 = process(inst_21281);var state_21291__$1 = state_21291;if(cljs.core.truth_(inst_21282))
{var statearr_21296_21438 = state_21291__$1;(statearr_21296_21438[(1)] = (5));
} else
{var statearr_21297_21439 = state_21291__$1;(statearr_21297_21439[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_21292 === (3)))
{var inst_21289 = (state_21291[(2)]);var state_21291__$1 = state_21291;return cljs.core.async.impl.ioc_helpers.return_chan(state_21291__$1,inst_21289);
} else
{if((state_val_21292 === (2)))
{var state_21291__$1 = state_21291;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21291__$1,(4),jobs);
} else
{if((state_val_21292 === (1)))
{var state_21291__$1 = state_21291;var statearr_21298_21440 = state_21291__$1;(statearr_21298_21440[(2)] = null);
(statearr_21298_21440[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
});})(__21422,c__11497__auto___21434,G__21251_21423,n__4510__auto___21421,jobs,results,process,async))
;return ((function (__21422,switch__11417__auto__,c__11497__auto___21434,G__21251_21423,n__4510__auto___21421,jobs,results,process,async){
return (function() {
var state_machine__11418__auto__ = null;
var state_machine__11418__auto____0 = (function (){var statearr_21302 = [null,null,null,null,null,null,null];(statearr_21302[(0)] = state_machine__11418__auto__);
(statearr_21302[(1)] = (1));
return statearr_21302;
});
var state_machine__11418__auto____1 = (function (state_21291){while(true){
var ret_value__11419__auto__ = (function (){try{while(true){
var result__11420__auto__ = switch__11417__auto__(state_21291);if(cljs.core.keyword_identical_QMARK_(result__11420__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__11420__auto__;
}
break;
}
}catch (e21303){if((e21303 instanceof Object))
{var ex__11421__auto__ = e21303;var statearr_21304_21441 = state_21291;(statearr_21304_21441[(5)] = ex__11421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21291);
return cljs.core.constant$keyword$16;
} else
{throw e21303;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__11419__auto__,cljs.core.constant$keyword$16))
{{
var G__21442 = state_21291;
state_21291 = G__21442;
continue;
}
} else
{return ret_value__11419__auto__;
}
break;
}
});
state_machine__11418__auto__ = function(state_21291){
switch(arguments.length){
case 0:
return state_machine__11418__auto____0.call(this);
case 1:
return state_machine__11418__auto____1.call(this,state_21291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11418__auto____0;
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11418__auto____1;
return state_machine__11418__auto__;
})()
;})(__21422,switch__11417__auto__,c__11497__auto___21434,G__21251_21423,n__4510__auto___21421,jobs,results,process,async))
})();var state__11499__auto__ = (function (){var statearr_21305 = (function (){return (f__11498__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11498__auto__.cljs$core$IFn$_invoke$arity$0() : f__11498__auto__.call(null));
})();(statearr_21305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11497__auto___21434);
return statearr_21305;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11499__auto__);
});})(__21422,c__11497__auto___21434,G__21251_21423,n__4510__auto___21421,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__21443 = (__21422 + (1));
__21422 = G__21443;
continue;
}
} else
{}
break;
}
var c__11497__auto___21444 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__11497__auto___21444,jobs,results,process,async){
return (function (){var f__11498__auto__ = (function (){var switch__11417__auto__ = ((function (c__11497__auto___21444,jobs,results,process,async){
return (function (state_21327){var state_val_21328 = (state_21327[(1)]);if((state_val_21328 === (9)))
{var inst_21320 = (state_21327[(2)]);var state_21327__$1 = (function (){var statearr_21329 = state_21327;(statearr_21329[(7)] = inst_21320);
return statearr_21329;
})();var statearr_21330_21445 = state_21327__$1;(statearr_21330_21445[(2)] = null);
(statearr_21330_21445[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21328 === (8)))
{var inst_21313 = (state_21327[(8)]);var inst_21318 = (state_21327[(2)]);var state_21327__$1 = (function (){var statearr_21331 = state_21327;(statearr_21331[(9)] = inst_21318);
return statearr_21331;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21327__$1,(9),results,inst_21313);
} else
{if((state_val_21328 === (7)))
{var inst_21323 = (state_21327[(2)]);var state_21327__$1 = state_21327;var statearr_21332_21446 = state_21327__$1;(statearr_21332_21446[(2)] = inst_21323);
(statearr_21332_21446[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21328 === (6)))
{var inst_21313 = (state_21327[(8)]);var inst_21308 = (state_21327[(10)]);var inst_21313__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var inst_21314 = cljs.core.PersistentVector.EMPTY_NODE;var inst_21315 = [inst_21308,inst_21313__$1];var inst_21316 = (new cljs.core.PersistentVector(null,2,(5),inst_21314,inst_21315,null));var state_21327__$1 = (function (){var statearr_21333 = state_21327;(statearr_21333[(8)] = inst_21313__$1);
return statearr_21333;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21327__$1,(8),jobs,inst_21316);
} else
{if((state_val_21328 === (5)))
{var inst_21311 = cljs.core.async.close_BANG_(jobs);var state_21327__$1 = state_21327;var statearr_21334_21447 = state_21327__$1;(statearr_21334_21447[(2)] = inst_21311);
(statearr_21334_21447[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21328 === (4)))
{var inst_21308 = (state_21327[(10)]);var inst_21308__$1 = (state_21327[(2)]);var inst_21309 = (inst_21308__$1 == null);var state_21327__$1 = (function (){var statearr_21335 = state_21327;(statearr_21335[(10)] = inst_21308__$1);
return statearr_21335;
})();if(cljs.core.truth_(inst_21309))
{var statearr_21336_21448 = state_21327__$1;(statearr_21336_21448[(1)] = (5));
} else
{var statearr_21337_21449 = state_21327__$1;(statearr_21337_21449[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_21328 === (3)))
{var inst_21325 = (state_21327[(2)]);var state_21327__$1 = state_21327;return cljs.core.async.impl.ioc_helpers.return_chan(state_21327__$1,inst_21325);
} else
{if((state_val_21328 === (2)))
{var state_21327__$1 = state_21327;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21327__$1,(4),from);
} else
{if((state_val_21328 === (1)))
{var state_21327__$1 = state_21327;var statearr_21338_21450 = state_21327__$1;(statearr_21338_21450[(2)] = null);
(statearr_21338_21450[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__11497__auto___21444,jobs,results,process,async))
;return ((function (switch__11417__auto__,c__11497__auto___21444,jobs,results,process,async){
return (function() {
var state_machine__11418__auto__ = null;
var state_machine__11418__auto____0 = (function (){var statearr_21342 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21342[(0)] = state_machine__11418__auto__);
(statearr_21342[(1)] = (1));
return statearr_21342;
});
var state_machine__11418__auto____1 = (function (state_21327){while(true){
var ret_value__11419__auto__ = (function (){try{while(true){
var result__11420__auto__ = switch__11417__auto__(state_21327);if(cljs.core.keyword_identical_QMARK_(result__11420__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__11420__auto__;
}
break;
}
}catch (e21343){if((e21343 instanceof Object))
{var ex__11421__auto__ = e21343;var statearr_21344_21451 = state_21327;(statearr_21344_21451[(5)] = ex__11421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21327);
return cljs.core.constant$keyword$16;
} else
{throw e21343;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__11419__auto__,cljs.core.constant$keyword$16))
{{
var G__21452 = state_21327;
state_21327 = G__21452;
continue;
}
} else
{return ret_value__11419__auto__;
}
break;
}
});
state_machine__11418__auto__ = function(state_21327){
switch(arguments.length){
case 0:
return state_machine__11418__auto____0.call(this);
case 1:
return state_machine__11418__auto____1.call(this,state_21327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11418__auto____0;
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11418__auto____1;
return state_machine__11418__auto__;
})()
;})(switch__11417__auto__,c__11497__auto___21444,jobs,results,process,async))
})();var state__11499__auto__ = (function (){var statearr_21345 = (function (){return (f__11498__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11498__auto__.cljs$core$IFn$_invoke$arity$0() : f__11498__auto__.call(null));
})();(statearr_21345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11497__auto___21444);
return statearr_21345;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11499__auto__);
});})(c__11497__auto___21444,jobs,results,process,async))
);
var c__11497__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__11497__auto__,jobs,results,process,async){
return (function (){var f__11498__auto__ = (function (){var switch__11417__auto__ = ((function (c__11497__auto__,jobs,results,process,async){
return (function (state_21383){var state_val_21384 = (state_21383[(1)]);if((state_val_21384 === (7)))
{var inst_21379 = (state_21383[(2)]);var state_21383__$1 = state_21383;var statearr_21385_21453 = state_21383__$1;(statearr_21385_21453[(2)] = inst_21379);
(statearr_21385_21453[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21384 === (20)))
{var state_21383__$1 = state_21383;var statearr_21386_21454 = state_21383__$1;(statearr_21386_21454[(2)] = null);
(statearr_21386_21454[(1)] = (21));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21384 === (1)))
{var state_21383__$1 = state_21383;var statearr_21387_21455 = state_21383__$1;(statearr_21387_21455[(2)] = null);
(statearr_21387_21455[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21384 === (4)))
{var inst_21348 = (state_21383[(7)]);var inst_21348__$1 = (state_21383[(2)]);var inst_21349 = (inst_21348__$1 == null);var state_21383__$1 = (function (){var statearr_21388 = state_21383;(statearr_21388[(7)] = inst_21348__$1);
return statearr_21388;
})();if(cljs.core.truth_(inst_21349))
{var statearr_21389_21456 = state_21383__$1;(statearr_21389_21456[(1)] = (5));
} else
{var statearr_21390_21457 = state_21383__$1;(statearr_21390_21457[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_21384 === (15)))
{var inst_21361 = (state_21383[(8)]);var state_21383__$1 = state_21383;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21383__$1,(18),to,inst_21361);
} else
{if((state_val_21384 === (21)))
{var inst_21374 = (state_21383[(2)]);var state_21383__$1 = state_21383;var statearr_21391_21458 = state_21383__$1;(statearr_21391_21458[(2)] = inst_21374);
(statearr_21391_21458[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21384 === (13)))
{var inst_21376 = (state_21383[(2)]);var state_21383__$1 = (function (){var statearr_21392 = state_21383;(statearr_21392[(9)] = inst_21376);
return statearr_21392;
})();var statearr_21393_21459 = state_21383__$1;(statearr_21393_21459[(2)] = null);
(statearr_21393_21459[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21384 === (6)))
{var inst_21348 = (state_21383[(7)]);var state_21383__$1 = state_21383;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21383__$1,(11),inst_21348);
} else
{if((state_val_21384 === (17)))
{var inst_21369 = (state_21383[(2)]);var state_21383__$1 = state_21383;if(cljs.core.truth_(inst_21369))
{var statearr_21394_21460 = state_21383__$1;(statearr_21394_21460[(1)] = (19));
} else
{var statearr_21395_21461 = state_21383__$1;(statearr_21395_21461[(1)] = (20));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_21384 === (3)))
{var inst_21381 = (state_21383[(2)]);var state_21383__$1 = state_21383;return cljs.core.async.impl.ioc_helpers.return_chan(state_21383__$1,inst_21381);
} else
{if((state_val_21384 === (12)))
{var inst_21358 = (state_21383[(10)]);var state_21383__$1 = state_21383;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21383__$1,(14),inst_21358);
} else
{if((state_val_21384 === (2)))
{var state_21383__$1 = state_21383;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21383__$1,(4),results);
} else
{if((state_val_21384 === (19)))
{var state_21383__$1 = state_21383;var statearr_21396_21462 = state_21383__$1;(statearr_21396_21462[(2)] = null);
(statearr_21396_21462[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21384 === (11)))
{var inst_21358 = (state_21383[(2)]);var state_21383__$1 = (function (){var statearr_21397 = state_21383;(statearr_21397[(10)] = inst_21358);
return statearr_21397;
})();var statearr_21398_21463 = state_21383__$1;(statearr_21398_21463[(2)] = null);
(statearr_21398_21463[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21384 === (9)))
{var state_21383__$1 = state_21383;var statearr_21399_21464 = state_21383__$1;(statearr_21399_21464[(2)] = null);
(statearr_21399_21464[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21384 === (5)))
{var state_21383__$1 = state_21383;if(cljs.core.truth_(close_QMARK_))
{var statearr_21400_21465 = state_21383__$1;(statearr_21400_21465[(1)] = (8));
} else
{var statearr_21401_21466 = state_21383__$1;(statearr_21401_21466[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_21384 === (14)))
{var inst_21363 = (state_21383[(11)]);var inst_21361 = (state_21383[(8)]);var inst_21361__$1 = (state_21383[(2)]);var inst_21362 = (inst_21361__$1 == null);var inst_21363__$1 = cljs.core.not(inst_21362);var state_21383__$1 = (function (){var statearr_21402 = state_21383;(statearr_21402[(11)] = inst_21363__$1);
(statearr_21402[(8)] = inst_21361__$1);
return statearr_21402;
})();if(inst_21363__$1)
{var statearr_21403_21467 = state_21383__$1;(statearr_21403_21467[(1)] = (15));
} else
{var statearr_21404_21468 = state_21383__$1;(statearr_21404_21468[(1)] = (16));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_21384 === (16)))
{var inst_21363 = (state_21383[(11)]);var state_21383__$1 = state_21383;var statearr_21405_21469 = state_21383__$1;(statearr_21405_21469[(2)] = inst_21363);
(statearr_21405_21469[(1)] = (17));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21384 === (10)))
{var inst_21355 = (state_21383[(2)]);var state_21383__$1 = state_21383;var statearr_21406_21470 = state_21383__$1;(statearr_21406_21470[(2)] = inst_21355);
(statearr_21406_21470[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21384 === (18)))
{var inst_21366 = (state_21383[(2)]);var state_21383__$1 = state_21383;var statearr_21407_21471 = state_21383__$1;(statearr_21407_21471[(2)] = inst_21366);
(statearr_21407_21471[(1)] = (17));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21384 === (8)))
{var inst_21352 = cljs.core.async.close_BANG_(to);var state_21383__$1 = state_21383;var statearr_21408_21472 = state_21383__$1;(statearr_21408_21472[(2)] = inst_21352);
(statearr_21408_21472[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11497__auto__,jobs,results,process,async))
;return ((function (switch__11417__auto__,c__11497__auto__,jobs,results,process,async){
return (function() {
var state_machine__11418__auto__ = null;
var state_machine__11418__auto____0 = (function (){var statearr_21412 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21412[(0)] = state_machine__11418__auto__);
(statearr_21412[(1)] = (1));
return statearr_21412;
});
var state_machine__11418__auto____1 = (function (state_21383){while(true){
var ret_value__11419__auto__ = (function (){try{while(true){
var result__11420__auto__ = switch__11417__auto__(state_21383);if(cljs.core.keyword_identical_QMARK_(result__11420__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__11420__auto__;
}
break;
}
}catch (e21413){if((e21413 instanceof Object))
{var ex__11421__auto__ = e21413;var statearr_21414_21473 = state_21383;(statearr_21414_21473[(5)] = ex__11421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21383);
return cljs.core.constant$keyword$16;
} else
{throw e21413;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__11419__auto__,cljs.core.constant$keyword$16))
{{
var G__21474 = state_21383;
state_21383 = G__21474;
continue;
}
} else
{return ret_value__11419__auto__;
}
break;
}
});
state_machine__11418__auto__ = function(state_21383){
switch(arguments.length){
case 0:
return state_machine__11418__auto____0.call(this);
case 1:
return state_machine__11418__auto____1.call(this,state_21383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11418__auto____0;
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11418__auto____1;
return state_machine__11418__auto__;
})()
;})(switch__11417__auto__,c__11497__auto__,jobs,results,process,async))
})();var state__11499__auto__ = (function (){var statearr_21415 = (function (){return (f__11498__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11498__auto__.cljs$core$IFn$_invoke$arity$0() : f__11498__auto__.call(null));
})();(statearr_21415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11497__auto__);
return statearr_21415;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11499__auto__);
});})(c__11497__auto__,jobs,results,process,async))
);
return c__11497__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$23);
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$24);
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__11497__auto___21597 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__11497__auto___21597,tc,fc){
return (function (){var f__11498__auto__ = (function (){var switch__11417__auto__ = ((function (c__11497__auto___21597,tc,fc){
return (function (state_21571){var state_val_21572 = (state_21571[(1)]);if((state_val_21572 === (7)))
{var inst_21567 = (state_21571[(2)]);var state_21571__$1 = state_21571;var statearr_21573_21598 = state_21571__$1;(statearr_21573_21598[(2)] = inst_21567);
(statearr_21573_21598[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21572 === (1)))
{var state_21571__$1 = state_21571;var statearr_21574_21599 = state_21571__$1;(statearr_21574_21599[(2)] = null);
(statearr_21574_21599[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21572 === (4)))
{var inst_21548 = (state_21571[(7)]);var inst_21548__$1 = (state_21571[(2)]);var inst_21549 = (inst_21548__$1 == null);var state_21571__$1 = (function (){var statearr_21575 = state_21571;(statearr_21575[(7)] = inst_21548__$1);
return statearr_21575;
})();if(cljs.core.truth_(inst_21549))
{var statearr_21576_21600 = state_21571__$1;(statearr_21576_21600[(1)] = (5));
} else
{var statearr_21577_21601 = state_21571__$1;(statearr_21577_21601[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_21572 === (13)))
{var state_21571__$1 = state_21571;var statearr_21578_21602 = state_21571__$1;(statearr_21578_21602[(2)] = null);
(statearr_21578_21602[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21572 === (6)))
{var inst_21548 = (state_21571[(7)]);var inst_21554 = (function (){var G__21579 = inst_21548;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__21579) : p.call(null,G__21579));
})();var state_21571__$1 = state_21571;if(cljs.core.truth_(inst_21554))
{var statearr_21580_21603 = state_21571__$1;(statearr_21580_21603[(1)] = (9));
} else
{var statearr_21581_21604 = state_21571__$1;(statearr_21581_21604[(1)] = (10));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_21572 === (3)))
{var inst_21569 = (state_21571[(2)]);var state_21571__$1 = state_21571;return cljs.core.async.impl.ioc_helpers.return_chan(state_21571__$1,inst_21569);
} else
{if((state_val_21572 === (12)))
{var state_21571__$1 = state_21571;var statearr_21582_21605 = state_21571__$1;(statearr_21582_21605[(2)] = null);
(statearr_21582_21605[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21572 === (2)))
{var state_21571__$1 = state_21571;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21571__$1,(4),ch);
} else
{if((state_val_21572 === (11)))
{var inst_21548 = (state_21571[(7)]);var inst_21558 = (state_21571[(2)]);var state_21571__$1 = state_21571;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21571__$1,(8),inst_21558,inst_21548);
} else
{if((state_val_21572 === (9)))
{var state_21571__$1 = state_21571;var statearr_21583_21606 = state_21571__$1;(statearr_21583_21606[(2)] = tc);
(statearr_21583_21606[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21572 === (5)))
{var inst_21551 = cljs.core.async.close_BANG_(tc);var inst_21552 = cljs.core.async.close_BANG_(fc);var state_21571__$1 = (function (){var statearr_21584 = state_21571;(statearr_21584[(8)] = inst_21551);
return statearr_21584;
})();var statearr_21585_21607 = state_21571__$1;(statearr_21585_21607[(2)] = inst_21552);
(statearr_21585_21607[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21572 === (14)))
{var inst_21565 = (state_21571[(2)]);var state_21571__$1 = state_21571;var statearr_21586_21608 = state_21571__$1;(statearr_21586_21608[(2)] = inst_21565);
(statearr_21586_21608[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21572 === (10)))
{var state_21571__$1 = state_21571;var statearr_21587_21609 = state_21571__$1;(statearr_21587_21609[(2)] = fc);
(statearr_21587_21609[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21572 === (8)))
{var inst_21560 = (state_21571[(2)]);var state_21571__$1 = state_21571;if(cljs.core.truth_(inst_21560))
{var statearr_21588_21610 = state_21571__$1;(statearr_21588_21610[(1)] = (12));
} else
{var statearr_21589_21611 = state_21571__$1;(statearr_21589_21611[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11497__auto___21597,tc,fc))
;return ((function (switch__11417__auto__,c__11497__auto___21597,tc,fc){
return (function() {
var state_machine__11418__auto__ = null;
var state_machine__11418__auto____0 = (function (){var statearr_21593 = [null,null,null,null,null,null,null,null,null];(statearr_21593[(0)] = state_machine__11418__auto__);
(statearr_21593[(1)] = (1));
return statearr_21593;
});
var state_machine__11418__auto____1 = (function (state_21571){while(true){
var ret_value__11419__auto__ = (function (){try{while(true){
var result__11420__auto__ = switch__11417__auto__(state_21571);if(cljs.core.keyword_identical_QMARK_(result__11420__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__11420__auto__;
}
break;
}
}catch (e21594){if((e21594 instanceof Object))
{var ex__11421__auto__ = e21594;var statearr_21595_21612 = state_21571;(statearr_21595_21612[(5)] = ex__11421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21571);
return cljs.core.constant$keyword$16;
} else
{throw e21594;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__11419__auto__,cljs.core.constant$keyword$16))
{{
var G__21613 = state_21571;
state_21571 = G__21613;
continue;
}
} else
{return ret_value__11419__auto__;
}
break;
}
});
state_machine__11418__auto__ = function(state_21571){
switch(arguments.length){
case 0:
return state_machine__11418__auto____0.call(this);
case 1:
return state_machine__11418__auto____1.call(this,state_21571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11418__auto____0;
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11418__auto____1;
return state_machine__11418__auto__;
})()
;})(switch__11417__auto__,c__11497__auto___21597,tc,fc))
})();var state__11499__auto__ = (function (){var statearr_21596 = (function (){return (f__11498__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11498__auto__.cljs$core$IFn$_invoke$arity$0() : f__11498__auto__.call(null));
})();(statearr_21596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11497__auto___21597);
return statearr_21596;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11499__auto__);
});})(c__11497__auto___21597,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__11497__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__11497__auto__){
return (function (){var f__11498__auto__ = (function (){var switch__11417__auto__ = ((function (c__11497__auto__){
return (function (state_21662){var state_val_21663 = (state_21662[(1)]);if((state_val_21663 === (7)))
{var inst_21658 = (state_21662[(2)]);var state_21662__$1 = state_21662;var statearr_21664_21682 = state_21662__$1;(statearr_21664_21682[(2)] = inst_21658);
(statearr_21664_21682[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21663 === (6)))
{var inst_21648 = (state_21662[(7)]);var inst_21651 = (state_21662[(8)]);var inst_21655 = (function (){var G__21665 = inst_21648;var G__21666 = inst_21651;return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__21665,G__21666) : f.call(null,G__21665,G__21666));
})();var inst_21648__$1 = inst_21655;var state_21662__$1 = (function (){var statearr_21667 = state_21662;(statearr_21667[(7)] = inst_21648__$1);
return statearr_21667;
})();var statearr_21668_21683 = state_21662__$1;(statearr_21668_21683[(2)] = null);
(statearr_21668_21683[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21663 === (5)))
{var inst_21648 = (state_21662[(7)]);var state_21662__$1 = state_21662;var statearr_21669_21684 = state_21662__$1;(statearr_21669_21684[(2)] = inst_21648);
(statearr_21669_21684[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21663 === (4)))
{var inst_21651 = (state_21662[(8)]);var inst_21651__$1 = (state_21662[(2)]);var inst_21652 = (inst_21651__$1 == null);var state_21662__$1 = (function (){var statearr_21670 = state_21662;(statearr_21670[(8)] = inst_21651__$1);
return statearr_21670;
})();if(cljs.core.truth_(inst_21652))
{var statearr_21671_21685 = state_21662__$1;(statearr_21671_21685[(1)] = (5));
} else
{var statearr_21672_21686 = state_21662__$1;(statearr_21672_21686[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_21663 === (3)))
{var inst_21660 = (state_21662[(2)]);var state_21662__$1 = state_21662;return cljs.core.async.impl.ioc_helpers.return_chan(state_21662__$1,inst_21660);
} else
{if((state_val_21663 === (2)))
{var state_21662__$1 = state_21662;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21662__$1,(4),ch);
} else
{if((state_val_21663 === (1)))
{var inst_21648 = init;var state_21662__$1 = (function (){var statearr_21673 = state_21662;(statearr_21673[(7)] = inst_21648);
return statearr_21673;
})();var statearr_21674_21687 = state_21662__$1;(statearr_21674_21687[(2)] = null);
(statearr_21674_21687[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
});})(c__11497__auto__))
;return ((function (switch__11417__auto__,c__11497__auto__){
return (function() {
var state_machine__11418__auto__ = null;
var state_machine__11418__auto____0 = (function (){var statearr_21678 = [null,null,null,null,null,null,null,null,null];(statearr_21678[(0)] = state_machine__11418__auto__);
(statearr_21678[(1)] = (1));
return statearr_21678;
});
var state_machine__11418__auto____1 = (function (state_21662){while(true){
var ret_value__11419__auto__ = (function (){try{while(true){
var result__11420__auto__ = switch__11417__auto__(state_21662);if(cljs.core.keyword_identical_QMARK_(result__11420__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__11420__auto__;
}
break;
}
}catch (e21679){if((e21679 instanceof Object))
{var ex__11421__auto__ = e21679;var statearr_21680_21688 = state_21662;(statearr_21680_21688[(5)] = ex__11421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21662);
return cljs.core.constant$keyword$16;
} else
{throw e21679;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__11419__auto__,cljs.core.constant$keyword$16))
{{
var G__21689 = state_21662;
state_21662 = G__21689;
continue;
}
} else
{return ret_value__11419__auto__;
}
break;
}
});
state_machine__11418__auto__ = function(state_21662){
switch(arguments.length){
case 0:
return state_machine__11418__auto____0.call(this);
case 1:
return state_machine__11418__auto____1.call(this,state_21662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11418__auto____0;
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11418__auto____1;
return state_machine__11418__auto__;
})()
;})(switch__11417__auto__,c__11497__auto__))
})();var state__11499__auto__ = (function (){var statearr_21681 = (function (){return (f__11498__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11498__auto__.cljs$core$IFn$_invoke$arity$0() : f__11498__auto__.call(null));
})();(statearr_21681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11497__auto__);
return statearr_21681;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11499__auto__);
});})(c__11497__auto__))
);
return c__11497__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__11497__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__11497__auto__){
return (function (){var f__11498__auto__ = (function (){var switch__11417__auto__ = ((function (c__11497__auto__){
return (function (state_21766){var state_val_21767 = (state_21766[(1)]);if((state_val_21767 === (7)))
{var inst_21748 = (state_21766[(2)]);var state_21766__$1 = state_21766;var statearr_21768_21791 = state_21766__$1;(statearr_21768_21791[(2)] = inst_21748);
(statearr_21768_21791[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21767 === (1)))
{var inst_21742 = cljs.core.seq(coll);var inst_21743 = inst_21742;var state_21766__$1 = (function (){var statearr_21769 = state_21766;(statearr_21769[(7)] = inst_21743);
return statearr_21769;
})();var statearr_21770_21792 = state_21766__$1;(statearr_21770_21792[(2)] = null);
(statearr_21770_21792[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21767 === (4)))
{var inst_21743 = (state_21766[(7)]);var inst_21746 = cljs.core.first(inst_21743);var state_21766__$1 = state_21766;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21766__$1,(7),ch,inst_21746);
} else
{if((state_val_21767 === (13)))
{var inst_21760 = (state_21766[(2)]);var state_21766__$1 = state_21766;var statearr_21771_21793 = state_21766__$1;(statearr_21771_21793[(2)] = inst_21760);
(statearr_21771_21793[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21767 === (6)))
{var inst_21751 = (state_21766[(2)]);var state_21766__$1 = state_21766;if(cljs.core.truth_(inst_21751))
{var statearr_21772_21794 = state_21766__$1;(statearr_21772_21794[(1)] = (8));
} else
{var statearr_21773_21795 = state_21766__$1;(statearr_21773_21795[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_21767 === (3)))
{var inst_21764 = (state_21766[(2)]);var state_21766__$1 = state_21766;return cljs.core.async.impl.ioc_helpers.return_chan(state_21766__$1,inst_21764);
} else
{if((state_val_21767 === (12)))
{var state_21766__$1 = state_21766;var statearr_21774_21796 = state_21766__$1;(statearr_21774_21796[(2)] = null);
(statearr_21774_21796[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21767 === (2)))
{var inst_21743 = (state_21766[(7)]);var state_21766__$1 = state_21766;if(cljs.core.truth_(inst_21743))
{var statearr_21775_21797 = state_21766__$1;(statearr_21775_21797[(1)] = (4));
} else
{var statearr_21776_21798 = state_21766__$1;(statearr_21776_21798[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_21767 === (11)))
{var inst_21757 = cljs.core.async.close_BANG_(ch);var state_21766__$1 = state_21766;var statearr_21777_21799 = state_21766__$1;(statearr_21777_21799[(2)] = inst_21757);
(statearr_21777_21799[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21767 === (9)))
{var state_21766__$1 = state_21766;if(cljs.core.truth_(close_QMARK_))
{var statearr_21778_21800 = state_21766__$1;(statearr_21778_21800[(1)] = (11));
} else
{var statearr_21779_21801 = state_21766__$1;(statearr_21779_21801[(1)] = (12));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_21767 === (5)))
{var inst_21743 = (state_21766[(7)]);var state_21766__$1 = state_21766;var statearr_21780_21802 = state_21766__$1;(statearr_21780_21802[(2)] = inst_21743);
(statearr_21780_21802[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21767 === (10)))
{var inst_21762 = (state_21766[(2)]);var state_21766__$1 = state_21766;var statearr_21781_21803 = state_21766__$1;(statearr_21781_21803[(2)] = inst_21762);
(statearr_21781_21803[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_21767 === (8)))
{var inst_21743 = (state_21766[(7)]);var inst_21753 = cljs.core.next(inst_21743);var inst_21743__$1 = inst_21753;var state_21766__$1 = (function (){var statearr_21782 = state_21766;(statearr_21782[(7)] = inst_21743__$1);
return statearr_21782;
})();var statearr_21783_21804 = state_21766__$1;(statearr_21783_21804[(2)] = null);
(statearr_21783_21804[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11497__auto__))
;return ((function (switch__11417__auto__,c__11497__auto__){
return (function() {
var state_machine__11418__auto__ = null;
var state_machine__11418__auto____0 = (function (){var statearr_21787 = [null,null,null,null,null,null,null,null];(statearr_21787[(0)] = state_machine__11418__auto__);
(statearr_21787[(1)] = (1));
return statearr_21787;
});
var state_machine__11418__auto____1 = (function (state_21766){while(true){
var ret_value__11419__auto__ = (function (){try{while(true){
var result__11420__auto__ = switch__11417__auto__(state_21766);if(cljs.core.keyword_identical_QMARK_(result__11420__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__11420__auto__;
}
break;
}
}catch (e21788){if((e21788 instanceof Object))
{var ex__11421__auto__ = e21788;var statearr_21789_21805 = state_21766;(statearr_21789_21805[(5)] = ex__11421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21766);
return cljs.core.constant$keyword$16;
} else
{throw e21788;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__11419__auto__,cljs.core.constant$keyword$16))
{{
var G__21806 = state_21766;
state_21766 = G__21806;
continue;
}
} else
{return ret_value__11419__auto__;
}
break;
}
});
state_machine__11418__auto__ = function(state_21766){
switch(arguments.length){
case 0:
return state_machine__11418__auto____0.call(this);
case 1:
return state_machine__11418__auto____1.call(this,state_21766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11418__auto____0;
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11418__auto____1;
return state_machine__11418__auto__;
})()
;})(switch__11417__auto__,c__11497__auto__))
})();var state__11499__auto__ = (function (){var statearr_21790 = (function (){return (f__11498__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11498__auto__.cljs$core$IFn$_invoke$arity$0() : f__11498__auto__.call(null));
})();(statearr_21790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11497__auto__);
return statearr_21790;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11499__auto__);
});})(c__11497__auto__))
);
return c__11497__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj21808 = {};return obj21808;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3628__auto__ = _;if(and__3628__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4277__auto__ = (((_ == null))?null:_);return (function (){var or__3640__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__21812 = x__4277__auto__;return goog.typeOf(G__21812);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj21814 = {};return obj21814;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__21818 = x__4277__auto__;return goog.typeOf(G__21818);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__21822 = x__4277__auto__;return goog.typeOf(G__21822);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__21826 = x__4277__auto__;return goog.typeOf(G__21826);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = (function (){var G__22056 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22056) : cljs.core.atom.call(null,G__22056));
})();var m = (function (){if(typeof cljs.core.async.t22057 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22057 = (function (cs,ch,mult,meta22058){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22058 = meta22058;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22057.cljs$lang$type = true;
cljs.core.async.t22057.cljs$lang$ctorStr = "cljs.core.async/t22057";
cljs.core.async.t22057.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t22057");
});})(cs))
;
cljs.core.async.t22057.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t22057.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t22057.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t22057.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;var G__22060_22285 = self__.cs;var G__22061_22286 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22060_22285,G__22061_22286) : cljs.core.reset_BANG_.call(null,G__22060_22285,G__22061_22286));
return null;
});})(cs))
;
cljs.core.async.t22057.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22057.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t22057.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22059){var self__ = this;
var _22059__$1 = this;return self__.meta22058;
});})(cs))
;
cljs.core.async.t22057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22059,meta22058__$1){var self__ = this;
var _22059__$1 = this;return (new cljs.core.async.t22057(self__.cs,self__.ch,self__.mult,meta22058__$1));
});})(cs))
;
cljs.core.async.__GT_t22057 = ((function (cs){
return (function __GT_t22057(cs__$1,ch__$1,mult__$1,meta22058){return (new cljs.core.async.t22057(cs__$1,ch__$1,mult__$1,meta22058));
});})(cs))
;
}
return (new cljs.core.async.t22057(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__22062 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22062) : cljs.core.atom.call(null,G__22062));
})();var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__11497__auto___22287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__11497__auto___22287,cs,m,dchan,dctr,done){
return (function (){var f__11498__auto__ = (function (){var switch__11417__auto__ = ((function (c__11497__auto___22287,cs,m,dchan,dctr,done){
return (function (state_22193){var state_val_22194 = (state_22193[(1)]);if((state_val_22194 === (7)))
{var inst_22189 = (state_22193[(2)]);var state_22193__$1 = state_22193;var statearr_22195_22288 = state_22193__$1;(statearr_22195_22288[(2)] = inst_22189);
(statearr_22195_22288[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (20)))
{var inst_22094 = (state_22193[(7)]);var inst_22104 = cljs.core.first(inst_22094);var inst_22105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22104,(0),null);var inst_22106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22104,(1),null);var state_22193__$1 = (function (){var statearr_22196 = state_22193;(statearr_22196[(8)] = inst_22105);
return statearr_22196;
})();if(cljs.core.truth_(inst_22106))
{var statearr_22197_22289 = state_22193__$1;(statearr_22197_22289[(1)] = (22));
} else
{var statearr_22198_22290 = state_22193__$1;(statearr_22198_22290[(1)] = (23));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (27)))
{var inst_22065 = (state_22193[(9)]);var inst_22136 = (state_22193[(10)]);var inst_22134 = (state_22193[(11)]);var inst_22141 = (state_22193[(12)]);var inst_22141__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22134,inst_22136);var inst_22142 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22141__$1,inst_22065,done);var state_22193__$1 = (function (){var statearr_22199 = state_22193;(statearr_22199[(12)] = inst_22141__$1);
return statearr_22199;
})();if(cljs.core.truth_(inst_22142))
{var statearr_22200_22291 = state_22193__$1;(statearr_22200_22291[(1)] = (30));
} else
{var statearr_22201_22292 = state_22193__$1;(statearr_22201_22292[(1)] = (31));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (1)))
{var state_22193__$1 = state_22193;var statearr_22202_22293 = state_22193__$1;(statearr_22202_22293[(2)] = null);
(statearr_22202_22293[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (24)))
{var inst_22094 = (state_22193[(7)]);var inst_22111 = (state_22193[(2)]);var inst_22112 = cljs.core.next(inst_22094);var inst_22074 = inst_22112;var inst_22075 = null;var inst_22076 = (0);var inst_22077 = (0);var state_22193__$1 = (function (){var statearr_22203 = state_22193;(statearr_22203[(13)] = inst_22076);
(statearr_22203[(14)] = inst_22111);
(statearr_22203[(15)] = inst_22077);
(statearr_22203[(16)] = inst_22074);
(statearr_22203[(17)] = inst_22075);
return statearr_22203;
})();var statearr_22204_22294 = state_22193__$1;(statearr_22204_22294[(2)] = null);
(statearr_22204_22294[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (39)))
{var state_22193__$1 = state_22193;var statearr_22208_22295 = state_22193__$1;(statearr_22208_22295[(2)] = null);
(statearr_22208_22295[(1)] = (41));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (4)))
{var inst_22065 = (state_22193[(9)]);var inst_22065__$1 = (state_22193[(2)]);var inst_22066 = (inst_22065__$1 == null);var state_22193__$1 = (function (){var statearr_22209 = state_22193;(statearr_22209[(9)] = inst_22065__$1);
return statearr_22209;
})();if(cljs.core.truth_(inst_22066))
{var statearr_22210_22296 = state_22193__$1;(statearr_22210_22296[(1)] = (5));
} else
{var statearr_22211_22297 = state_22193__$1;(statearr_22211_22297[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (15)))
{var inst_22076 = (state_22193[(13)]);var inst_22077 = (state_22193[(15)]);var inst_22074 = (state_22193[(16)]);var inst_22075 = (state_22193[(17)]);var inst_22090 = (state_22193[(2)]);var inst_22091 = (inst_22077 + (1));var tmp22205 = inst_22076;var tmp22206 = inst_22074;var tmp22207 = inst_22075;var inst_22074__$1 = tmp22206;var inst_22075__$1 = tmp22207;var inst_22076__$1 = tmp22205;var inst_22077__$1 = inst_22091;var state_22193__$1 = (function (){var statearr_22212 = state_22193;(statearr_22212[(13)] = inst_22076__$1);
(statearr_22212[(15)] = inst_22077__$1);
(statearr_22212[(16)] = inst_22074__$1);
(statearr_22212[(17)] = inst_22075__$1);
(statearr_22212[(18)] = inst_22090);
return statearr_22212;
})();var statearr_22213_22298 = state_22193__$1;(statearr_22213_22298[(2)] = null);
(statearr_22213_22298[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (21)))
{var inst_22115 = (state_22193[(2)]);var state_22193__$1 = state_22193;var statearr_22217_22299 = state_22193__$1;(statearr_22217_22299[(2)] = inst_22115);
(statearr_22217_22299[(1)] = (18));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (31)))
{var inst_22141 = (state_22193[(12)]);var inst_22145 = done(null);var inst_22146 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22141);var state_22193__$1 = (function (){var statearr_22218 = state_22193;(statearr_22218[(19)] = inst_22145);
return statearr_22218;
})();var statearr_22219_22300 = state_22193__$1;(statearr_22219_22300[(2)] = inst_22146);
(statearr_22219_22300[(1)] = (32));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (32)))
{var inst_22135 = (state_22193[(20)]);var inst_22136 = (state_22193[(10)]);var inst_22134 = (state_22193[(11)]);var inst_22133 = (state_22193[(21)]);var inst_22148 = (state_22193[(2)]);var inst_22149 = (inst_22136 + (1));var tmp22214 = inst_22135;var tmp22215 = inst_22134;var tmp22216 = inst_22133;var inst_22133__$1 = tmp22216;var inst_22134__$1 = tmp22215;var inst_22135__$1 = tmp22214;var inst_22136__$1 = inst_22149;var state_22193__$1 = (function (){var statearr_22220 = state_22193;(statearr_22220[(20)] = inst_22135__$1);
(statearr_22220[(22)] = inst_22148);
(statearr_22220[(10)] = inst_22136__$1);
(statearr_22220[(11)] = inst_22134__$1);
(statearr_22220[(21)] = inst_22133__$1);
return statearr_22220;
})();var statearr_22221_22301 = state_22193__$1;(statearr_22221_22301[(2)] = null);
(statearr_22221_22301[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (40)))
{var inst_22161 = (state_22193[(23)]);var inst_22165 = done(null);var inst_22166 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22161);var state_22193__$1 = (function (){var statearr_22222 = state_22193;(statearr_22222[(24)] = inst_22165);
return statearr_22222;
})();var statearr_22223_22302 = state_22193__$1;(statearr_22223_22302[(2)] = inst_22166);
(statearr_22223_22302[(1)] = (41));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (33)))
{var inst_22152 = (state_22193[(25)]);var inst_22154 = cljs.core.chunked_seq_QMARK_(inst_22152);var state_22193__$1 = state_22193;if(inst_22154)
{var statearr_22224_22303 = state_22193__$1;(statearr_22224_22303[(1)] = (36));
} else
{var statearr_22225_22304 = state_22193__$1;(statearr_22225_22304[(1)] = (37));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (13)))
{var inst_22084 = (state_22193[(26)]);var inst_22087 = cljs.core.async.close_BANG_(inst_22084);var state_22193__$1 = state_22193;var statearr_22226_22305 = state_22193__$1;(statearr_22226_22305[(2)] = inst_22087);
(statearr_22226_22305[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (22)))
{var inst_22105 = (state_22193[(8)]);var inst_22108 = cljs.core.async.close_BANG_(inst_22105);var state_22193__$1 = state_22193;var statearr_22227_22306 = state_22193__$1;(statearr_22227_22306[(2)] = inst_22108);
(statearr_22227_22306[(1)] = (24));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (36)))
{var inst_22152 = (state_22193[(25)]);var inst_22156 = cljs.core.chunk_first(inst_22152);var inst_22157 = cljs.core.chunk_rest(inst_22152);var inst_22158 = cljs.core.count(inst_22156);var inst_22133 = inst_22157;var inst_22134 = inst_22156;var inst_22135 = inst_22158;var inst_22136 = (0);var state_22193__$1 = (function (){var statearr_22228 = state_22193;(statearr_22228[(20)] = inst_22135);
(statearr_22228[(10)] = inst_22136);
(statearr_22228[(11)] = inst_22134);
(statearr_22228[(21)] = inst_22133);
return statearr_22228;
})();var statearr_22229_22307 = state_22193__$1;(statearr_22229_22307[(2)] = null);
(statearr_22229_22307[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (41)))
{var inst_22152 = (state_22193[(25)]);var inst_22168 = (state_22193[(2)]);var inst_22169 = cljs.core.next(inst_22152);var inst_22133 = inst_22169;var inst_22134 = null;var inst_22135 = (0);var inst_22136 = (0);var state_22193__$1 = (function (){var statearr_22230 = state_22193;(statearr_22230[(20)] = inst_22135);
(statearr_22230[(10)] = inst_22136);
(statearr_22230[(27)] = inst_22168);
(statearr_22230[(11)] = inst_22134);
(statearr_22230[(21)] = inst_22133);
return statearr_22230;
})();var statearr_22231_22308 = state_22193__$1;(statearr_22231_22308[(2)] = null);
(statearr_22231_22308[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (43)))
{var state_22193__$1 = state_22193;var statearr_22232_22309 = state_22193__$1;(statearr_22232_22309[(2)] = null);
(statearr_22232_22309[(1)] = (44));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (29)))
{var inst_22177 = (state_22193[(2)]);var state_22193__$1 = state_22193;var statearr_22233_22310 = state_22193__$1;(statearr_22233_22310[(2)] = inst_22177);
(statearr_22233_22310[(1)] = (26));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (44)))
{var inst_22186 = (state_22193[(2)]);var state_22193__$1 = (function (){var statearr_22234 = state_22193;(statearr_22234[(28)] = inst_22186);
return statearr_22234;
})();var statearr_22235_22311 = state_22193__$1;(statearr_22235_22311[(2)] = null);
(statearr_22235_22311[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (6)))
{var inst_22125 = (state_22193[(29)]);var inst_22124 = (function (){var G__22236 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22236) : cljs.core.deref.call(null,G__22236));
})();var inst_22125__$1 = cljs.core.keys(inst_22124);var inst_22126 = cljs.core.count(inst_22125__$1);var inst_22127 = (function (){var G__22237 = dctr;var G__22238 = inst_22126;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22237,G__22238) : cljs.core.reset_BANG_.call(null,G__22237,G__22238));
})();var inst_22132 = cljs.core.seq(inst_22125__$1);var inst_22133 = inst_22132;var inst_22134 = null;var inst_22135 = (0);var inst_22136 = (0);var state_22193__$1 = (function (){var statearr_22239 = state_22193;(statearr_22239[(20)] = inst_22135);
(statearr_22239[(29)] = inst_22125__$1);
(statearr_22239[(10)] = inst_22136);
(statearr_22239[(11)] = inst_22134);
(statearr_22239[(30)] = inst_22127);
(statearr_22239[(21)] = inst_22133);
return statearr_22239;
})();var statearr_22240_22312 = state_22193__$1;(statearr_22240_22312[(2)] = null);
(statearr_22240_22312[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (28)))
{var inst_22152 = (state_22193[(25)]);var inst_22133 = (state_22193[(21)]);var inst_22152__$1 = cljs.core.seq(inst_22133);var state_22193__$1 = (function (){var statearr_22241 = state_22193;(statearr_22241[(25)] = inst_22152__$1);
return statearr_22241;
})();if(inst_22152__$1)
{var statearr_22242_22313 = state_22193__$1;(statearr_22242_22313[(1)] = (33));
} else
{var statearr_22243_22314 = state_22193__$1;(statearr_22243_22314[(1)] = (34));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (25)))
{var inst_22135 = (state_22193[(20)]);var inst_22136 = (state_22193[(10)]);var inst_22138 = (inst_22136 < inst_22135);var inst_22139 = inst_22138;var state_22193__$1 = state_22193;if(cljs.core.truth_(inst_22139))
{var statearr_22244_22315 = state_22193__$1;(statearr_22244_22315[(1)] = (27));
} else
{var statearr_22245_22316 = state_22193__$1;(statearr_22245_22316[(1)] = (28));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (34)))
{var state_22193__$1 = state_22193;var statearr_22246_22317 = state_22193__$1;(statearr_22246_22317[(2)] = null);
(statearr_22246_22317[(1)] = (35));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (17)))
{var state_22193__$1 = state_22193;var statearr_22247_22318 = state_22193__$1;(statearr_22247_22318[(2)] = null);
(statearr_22247_22318[(1)] = (18));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (3)))
{var inst_22191 = (state_22193[(2)]);var state_22193__$1 = state_22193;return cljs.core.async.impl.ioc_helpers.return_chan(state_22193__$1,inst_22191);
} else
{if((state_val_22194 === (12)))
{var inst_22120 = (state_22193[(2)]);var state_22193__$1 = state_22193;var statearr_22248_22319 = state_22193__$1;(statearr_22248_22319[(2)] = inst_22120);
(statearr_22248_22319[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (2)))
{var state_22193__$1 = state_22193;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22193__$1,(4),ch);
} else
{if((state_val_22194 === (23)))
{var state_22193__$1 = state_22193;var statearr_22249_22320 = state_22193__$1;(statearr_22249_22320[(2)] = null);
(statearr_22249_22320[(1)] = (24));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (35)))
{var inst_22175 = (state_22193[(2)]);var state_22193__$1 = state_22193;var statearr_22250_22321 = state_22193__$1;(statearr_22250_22321[(2)] = inst_22175);
(statearr_22250_22321[(1)] = (29));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (19)))
{var inst_22094 = (state_22193[(7)]);var inst_22098 = cljs.core.chunk_first(inst_22094);var inst_22099 = cljs.core.chunk_rest(inst_22094);var inst_22100 = cljs.core.count(inst_22098);var inst_22074 = inst_22099;var inst_22075 = inst_22098;var inst_22076 = inst_22100;var inst_22077 = (0);var state_22193__$1 = (function (){var statearr_22251 = state_22193;(statearr_22251[(13)] = inst_22076);
(statearr_22251[(15)] = inst_22077);
(statearr_22251[(16)] = inst_22074);
(statearr_22251[(17)] = inst_22075);
return statearr_22251;
})();var statearr_22252_22322 = state_22193__$1;(statearr_22252_22322[(2)] = null);
(statearr_22252_22322[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (11)))
{var inst_22094 = (state_22193[(7)]);var inst_22074 = (state_22193[(16)]);var inst_22094__$1 = cljs.core.seq(inst_22074);var state_22193__$1 = (function (){var statearr_22253 = state_22193;(statearr_22253[(7)] = inst_22094__$1);
return statearr_22253;
})();if(inst_22094__$1)
{var statearr_22254_22323 = state_22193__$1;(statearr_22254_22323[(1)] = (16));
} else
{var statearr_22255_22324 = state_22193__$1;(statearr_22255_22324[(1)] = (17));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (9)))
{var inst_22122 = (state_22193[(2)]);var state_22193__$1 = state_22193;var statearr_22256_22325 = state_22193__$1;(statearr_22256_22325[(2)] = inst_22122);
(statearr_22256_22325[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (5)))
{var inst_22072 = (function (){var G__22257 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22257) : cljs.core.deref.call(null,G__22257));
})();var inst_22073 = cljs.core.seq(inst_22072);var inst_22074 = inst_22073;var inst_22075 = null;var inst_22076 = (0);var inst_22077 = (0);var state_22193__$1 = (function (){var statearr_22258 = state_22193;(statearr_22258[(13)] = inst_22076);
(statearr_22258[(15)] = inst_22077);
(statearr_22258[(16)] = inst_22074);
(statearr_22258[(17)] = inst_22075);
return statearr_22258;
})();var statearr_22259_22326 = state_22193__$1;(statearr_22259_22326[(2)] = null);
(statearr_22259_22326[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (14)))
{var state_22193__$1 = state_22193;var statearr_22260_22327 = state_22193__$1;(statearr_22260_22327[(2)] = null);
(statearr_22260_22327[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (45)))
{var inst_22183 = (state_22193[(2)]);var state_22193__$1 = state_22193;var statearr_22261_22328 = state_22193__$1;(statearr_22261_22328[(2)] = inst_22183);
(statearr_22261_22328[(1)] = (44));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (26)))
{var inst_22125 = (state_22193[(29)]);var inst_22179 = (state_22193[(2)]);var inst_22180 = cljs.core.seq(inst_22125);var state_22193__$1 = (function (){var statearr_22262 = state_22193;(statearr_22262[(31)] = inst_22179);
return statearr_22262;
})();if(inst_22180)
{var statearr_22263_22329 = state_22193__$1;(statearr_22263_22329[(1)] = (42));
} else
{var statearr_22264_22330 = state_22193__$1;(statearr_22264_22330[(1)] = (43));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (16)))
{var inst_22094 = (state_22193[(7)]);var inst_22096 = cljs.core.chunked_seq_QMARK_(inst_22094);var state_22193__$1 = state_22193;if(inst_22096)
{var statearr_22265_22331 = state_22193__$1;(statearr_22265_22331[(1)] = (19));
} else
{var statearr_22266_22332 = state_22193__$1;(statearr_22266_22332[(1)] = (20));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (38)))
{var inst_22172 = (state_22193[(2)]);var state_22193__$1 = state_22193;var statearr_22267_22333 = state_22193__$1;(statearr_22267_22333[(2)] = inst_22172);
(statearr_22267_22333[(1)] = (35));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (30)))
{var state_22193__$1 = state_22193;var statearr_22268_22334 = state_22193__$1;(statearr_22268_22334[(2)] = null);
(statearr_22268_22334[(1)] = (32));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (10)))
{var inst_22077 = (state_22193[(15)]);var inst_22075 = (state_22193[(17)]);var inst_22083 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22075,inst_22077);var inst_22084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22083,(0),null);var inst_22085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22083,(1),null);var state_22193__$1 = (function (){var statearr_22269 = state_22193;(statearr_22269[(26)] = inst_22084);
return statearr_22269;
})();if(cljs.core.truth_(inst_22085))
{var statearr_22270_22335 = state_22193__$1;(statearr_22270_22335[(1)] = (13));
} else
{var statearr_22271_22336 = state_22193__$1;(statearr_22271_22336[(1)] = (14));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (18)))
{var inst_22118 = (state_22193[(2)]);var state_22193__$1 = state_22193;var statearr_22272_22337 = state_22193__$1;(statearr_22272_22337[(2)] = inst_22118);
(statearr_22272_22337[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (42)))
{var state_22193__$1 = state_22193;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22193__$1,(45),dchan);
} else
{if((state_val_22194 === (37)))
{var inst_22065 = (state_22193[(9)]);var inst_22152 = (state_22193[(25)]);var inst_22161 = (state_22193[(23)]);var inst_22161__$1 = cljs.core.first(inst_22152);var inst_22162 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22161__$1,inst_22065,done);var state_22193__$1 = (function (){var statearr_22273 = state_22193;(statearr_22273[(23)] = inst_22161__$1);
return statearr_22273;
})();if(cljs.core.truth_(inst_22162))
{var statearr_22274_22338 = state_22193__$1;(statearr_22274_22338[(1)] = (39));
} else
{var statearr_22275_22339 = state_22193__$1;(statearr_22275_22339[(1)] = (40));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22194 === (8)))
{var inst_22076 = (state_22193[(13)]);var inst_22077 = (state_22193[(15)]);var inst_22079 = (inst_22077 < inst_22076);var inst_22080 = inst_22079;var state_22193__$1 = state_22193;if(cljs.core.truth_(inst_22080))
{var statearr_22276_22340 = state_22193__$1;(statearr_22276_22340[(1)] = (10));
} else
{var statearr_22277_22341 = state_22193__$1;(statearr_22277_22341[(1)] = (11));
}
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11497__auto___22287,cs,m,dchan,dctr,done))
;return ((function (switch__11417__auto__,c__11497__auto___22287,cs,m,dchan,dctr,done){
return (function() {
var state_machine__11418__auto__ = null;
var state_machine__11418__auto____0 = (function (){var statearr_22281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22281[(0)] = state_machine__11418__auto__);
(statearr_22281[(1)] = (1));
return statearr_22281;
});
var state_machine__11418__auto____1 = (function (state_22193){while(true){
var ret_value__11419__auto__ = (function (){try{while(true){
var result__11420__auto__ = switch__11417__auto__(state_22193);if(cljs.core.keyword_identical_QMARK_(result__11420__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__11420__auto__;
}
break;
}
}catch (e22282){if((e22282 instanceof Object))
{var ex__11421__auto__ = e22282;var statearr_22283_22342 = state_22193;(statearr_22283_22342[(5)] = ex__11421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22193);
return cljs.core.constant$keyword$16;
} else
{throw e22282;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__11419__auto__,cljs.core.constant$keyword$16))
{{
var G__22343 = state_22193;
state_22193 = G__22343;
continue;
}
} else
{return ret_value__11419__auto__;
}
break;
}
});
state_machine__11418__auto__ = function(state_22193){
switch(arguments.length){
case 0:
return state_machine__11418__auto____0.call(this);
case 1:
return state_machine__11418__auto____1.call(this,state_22193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11418__auto____0;
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11418__auto____1;
return state_machine__11418__auto__;
})()
;})(switch__11417__auto__,c__11497__auto___22287,cs,m,dchan,dctr,done))
})();var state__11499__auto__ = (function (){var statearr_22284 = (function (){return (f__11498__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11498__auto__.cljs$core$IFn$_invoke$arity$0() : f__11498__auto__.call(null));
})();(statearr_22284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11497__auto___22287);
return statearr_22284;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11499__auto__);
});})(c__11497__auto___22287,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_(mult);
});
cljs.core.async.Mix = (function (){var obj22348 = {};return obj22348;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__22352 = x__4277__auto__;return goog.typeOf(G__22352);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__22356 = x__4277__auto__;return goog.typeOf(G__22356);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__22360 = x__4277__auto__;return goog.typeOf(G__22360);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__22364 = x__4277__auto__;return goog.typeOf(G__22364);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__22368 = x__4277__auto__;return goog.typeOf(G__22368);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__22369){var map__22375 = p__22369;var map__22375__$1 = ((cljs.core.seq_QMARK_(map__22375))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22375):map__22375);var opts = map__22375__$1;var statearr_22376_22380 = state;(statearr_22376_22380[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__22375,map__22375__$1,opts){
return (function (val){var statearr_22377_22381 = state;(statearr_22377_22381[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__22375,map__22375__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_22378_22382 = state;(statearr_22378_22382[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__22379 = cb;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22379) : cljs.core.deref.call(null,G__22379));
})());
return cljs.core.constant$keyword$16;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__22369 = null;if (arguments.length > 3) {
  p__22369 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__22369);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__22383){
var state = cljs.core.first(arglist__22383);
arglist__22383 = cljs.core.next(arglist__22383);
var cont_block = cljs.core.first(arglist__22383);
arglist__22383 = cljs.core.next(arglist__22383);
var ports = cljs.core.first(arglist__22383);
var p__22369 = cljs.core.rest(arglist__22383);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__22369);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = (function (){var G__22517 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22517) : cljs.core.atom.call(null,G__22517));
})();var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$25,null,cljs.core.constant$keyword$26,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$27);var solo_mode = (function (){var G__22518 = cljs.core.constant$keyword$26;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22518) : cljs.core.atom.call(null,G__22518));
})();var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((function (){var G__22519 = v;return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__22519) : attr.call(null,G__22519));
})()))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = (function (){var G__22520 = cs;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22520) : cljs.core.deref.call(null,G__22520));
})();var mode = (function (){var G__22521 = solo_mode;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22521) : cljs.core.deref.call(null,G__22521));
})();var solos = pick(cljs.core.constant$keyword$27,chs);var pauses = pick(cljs.core.constant$keyword$25,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$28,solos,cljs.core.constant$keyword$29,pick(cljs.core.constant$keyword$26,chs),cljs.core.constant$keyword$30,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$25)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t22522 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22522 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22523){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22523 = meta22523;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22522.cljs$lang$type = true;
cljs.core.async.t22522.cljs$lang$ctorStr = "cljs.core.async/t22522";
cljs.core.async.t22522.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t22522");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22522.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t22522.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22522.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22522.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;var G__22525_22650 = self__.cs;var G__22526_22651 = cljs.core.PersistentArrayMap.EMPTY;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22525_22650,G__22526_22651) : cljs.core.reset_BANG_.call(null,G__22525_22650,G__22526_22651));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22522.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22522.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__22527 = mode;return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__22527) : self__.solo_modes.call(null,G__22527));
})()))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0))))));
}
var G__22528_22652 = self__.solo_mode;var G__22529_22653 = mode;(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22528_22652,G__22529_22653) : cljs.core.reset_BANG_.call(null,G__22528_22652,G__22529_22653));
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22522.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22522.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22522.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22524){var self__ = this;
var _22524__$1 = this;return self__.meta22523;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22524,meta22523__$1){var self__ = this;
var _22524__$1 = this;return (new cljs.core.async.t22522(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22523__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t22522 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22522(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22523){return (new cljs.core.async.t22522(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22523));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t22522(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__11497__auto___22654 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__11497__auto___22654,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__11498__auto__ = (function (){var switch__11417__auto__ = ((function (c__11497__auto___22654,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22601){var state_val_22602 = (state_22601[(1)]);if((state_val_22602 === (7)))
{var inst_22543 = (state_22601[(7)]);var inst_22548 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22543);var state_22601__$1 = state_22601;var statearr_22603_22655 = state_22601__$1;(statearr_22603_22655[(2)] = inst_22548);
(statearr_22603_22655[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22602 === (20)))
{var inst_22558 = (state_22601[(8)]);var state_22601__$1 = state_22601;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22601__$1,(23),out,inst_22558);
} else
{if((state_val_22602 === (1)))
{var inst_22533 = (state_22601[(9)]);var inst_22533__$1 = calc_state();var inst_22534 = cljs.core.seq_QMARK_(inst_22533__$1);var state_22601__$1 = (function (){var statearr_22604 = state_22601;(statearr_22604[(9)] = inst_22533__$1);
return statearr_22604;
})();if(inst_22534)
{var statearr_22605_22656 = state_22601__$1;(statearr_22605_22656[(1)] = (2));
} else
{var statearr_22606_22657 = state_22601__$1;(statearr_22606_22657[(1)] = (3));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22602 === (24)))
{var inst_22551 = (state_22601[(10)]);var inst_22543 = inst_22551;var state_22601__$1 = (function (){var statearr_22607 = state_22601;(statearr_22607[(7)] = inst_22543);
return statearr_22607;
})();var statearr_22608_22658 = state_22601__$1;(statearr_22608_22658[(2)] = null);
(statearr_22608_22658[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22602 === (4)))
{var inst_22533 = (state_22601[(9)]);var inst_22539 = (state_22601[(2)]);var inst_22540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22539,cljs.core.constant$keyword$30);var inst_22541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22539,cljs.core.constant$keyword$29);var inst_22542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22539,cljs.core.constant$keyword$28);var inst_22543 = inst_22533;var state_22601__$1 = (function (){var statearr_22609 = state_22601;(statearr_22609[(11)] = inst_22542);
(statearr_22609[(7)] = inst_22543);
(statearr_22609[(12)] = inst_22541);
(statearr_22609[(13)] = inst_22540);
return statearr_22609;
})();var statearr_22610_22659 = state_22601__$1;(statearr_22610_22659[(2)] = null);
(statearr_22610_22659[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22602 === (15)))
{var state_22601__$1 = state_22601;var statearr_22611_22660 = state_22601__$1;(statearr_22611_22660[(2)] = null);
(statearr_22611_22660[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22602 === (21)))
{var inst_22551 = (state_22601[(10)]);var inst_22543 = inst_22551;var state_22601__$1 = (function (){var statearr_22612 = state_22601;(statearr_22612[(7)] = inst_22543);
return statearr_22612;
})();var statearr_22613_22661 = state_22601__$1;(statearr_22613_22661[(2)] = null);
(statearr_22613_22661[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22602 === (13)))
{var inst_22597 = (state_22601[(2)]);var state_22601__$1 = state_22601;var statearr_22614_22662 = state_22601__$1;(statearr_22614_22662[(2)] = inst_22597);
(statearr_22614_22662[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22602 === (22)))
{var inst_22595 = (state_22601[(2)]);var state_22601__$1 = state_22601;var statearr_22615_22663 = state_22601__$1;(statearr_22615_22663[(2)] = inst_22595);
(statearr_22615_22663[(1)] = (13));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22602 === (6)))
{var inst_22599 = (state_22601[(2)]);var state_22601__$1 = state_22601;return cljs.core.async.impl.ioc_helpers.return_chan(state_22601__$1,inst_22599);
} else
{if((state_val_22602 === (25)))
{var state_22601__$1 = state_22601;var statearr_22616_22664 = state_22601__$1;(statearr_22616_22664[(2)] = null);
(statearr_22616_22664[(1)] = (26));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22602 === (17)))
{var inst_22574 = (state_22601[(14)]);var state_22601__$1 = state_22601;var statearr_22617_22665 = state_22601__$1;(statearr_22617_22665[(2)] = inst_22574);
(statearr_22617_22665[(1)] = (19));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22602 === (3)))
{var inst_22533 = (state_22601[(9)]);var state_22601__$1 = state_22601;var statearr_22618_22666 = state_22601__$1;(statearr_22618_22666[(2)] = inst_22533);
(statearr_22618_22666[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22602 === (12)))
{var inst_22559 = (state_22601[(15)]);var inst_22574 = (state_22601[(14)]);var inst_22554 = (state_22601[(16)]);var inst_22574__$1 = (function (){var G__22619 = inst_22559;return (inst_22554.cljs$core$IFn$_invoke$arity$1 ? inst_22554.cljs$core$IFn$_invoke$arity$1(G__22619) : inst_22554.call(null,G__22619));
})();var state_22601__$1 = (function (){var statearr_22620 = state_22601;(statearr_22620[(14)] = inst_22574__$1);
return statearr_22620;
})();if(cljs.core.truth_(inst_22574__$1))
{var statearr_22621_22667 = state_22601__$1;(statearr_22621_22667[(1)] = (17));
} else
{var statearr_22622_22668 = state_22601__$1;(statearr_22622_22668[(1)] = (18));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22602 === (2)))
{var inst_22533 = (state_22601[(9)]);var inst_22536 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22533);var state_22601__$1 = state_22601;var statearr_22623_22669 = state_22601__$1;(statearr_22623_22669[(2)] = inst_22536);
(statearr_22623_22669[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22602 === (23)))
{var inst_22586 = (state_22601[(2)]);var state_22601__$1 = state_22601;if(cljs.core.truth_(inst_22586))
{var statearr_22624_22670 = state_22601__$1;(statearr_22624_22670[(1)] = (24));
} else
{var statearr_22625_22671 = state_22601__$1;(statearr_22625_22671[(1)] = (25));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22602 === (19)))
{var inst_22583 = (state_22601[(2)]);var state_22601__$1 = state_22601;if(cljs.core.truth_(inst_22583))
{var statearr_22626_22672 = state_22601__$1;(statearr_22626_22672[(1)] = (20));
} else
{var statearr_22627_22673 = state_22601__$1;(statearr_22627_22673[(1)] = (21));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22602 === (11)))
{var inst_22558 = (state_22601[(8)]);var inst_22564 = (inst_22558 == null);var state_22601__$1 = state_22601;if(cljs.core.truth_(inst_22564))
{var statearr_22628_22674 = state_22601__$1;(statearr_22628_22674[(1)] = (14));
} else
{var statearr_22629_22675 = state_22601__$1;(statearr_22629_22675[(1)] = (15));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22602 === (9)))
{var inst_22551 = (state_22601[(10)]);var inst_22551__$1 = (state_22601[(2)]);var inst_22552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22551__$1,cljs.core.constant$keyword$30);var inst_22553 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22551__$1,cljs.core.constant$keyword$29);var inst_22554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22551__$1,cljs.core.constant$keyword$28);var state_22601__$1 = (function (){var statearr_22630 = state_22601;(statearr_22630[(10)] = inst_22551__$1);
(statearr_22630[(17)] = inst_22553);
(statearr_22630[(16)] = inst_22554);
return statearr_22630;
})();return cljs.core.async.ioc_alts_BANG_(state_22601__$1,(10),inst_22552);
} else
{if((state_val_22602 === (5)))
{var inst_22543 = (state_22601[(7)]);var inst_22546 = cljs.core.seq_QMARK_(inst_22543);var state_22601__$1 = state_22601;if(inst_22546)
{var statearr_22631_22676 = state_22601__$1;(statearr_22631_22676[(1)] = (7));
} else
{var statearr_22632_22677 = state_22601__$1;(statearr_22632_22677[(1)] = (8));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22602 === (14)))
{var inst_22559 = (state_22601[(15)]);var inst_22566 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_22559);var state_22601__$1 = state_22601;var statearr_22633_22678 = state_22601__$1;(statearr_22633_22678[(2)] = inst_22566);
(statearr_22633_22678[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22602 === (26)))
{var inst_22591 = (state_22601[(2)]);var state_22601__$1 = state_22601;var statearr_22634_22679 = state_22601__$1;(statearr_22634_22679[(2)] = inst_22591);
(statearr_22634_22679[(1)] = (22));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22602 === (16)))
{var inst_22569 = (state_22601[(2)]);var inst_22570 = calc_state();var inst_22543 = inst_22570;var state_22601__$1 = (function (){var statearr_22635 = state_22601;(statearr_22635[(18)] = inst_22569);
(statearr_22635[(7)] = inst_22543);
return statearr_22635;
})();var statearr_22636_22680 = state_22601__$1;(statearr_22636_22680[(2)] = null);
(statearr_22636_22680[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22602 === (10)))
{var inst_22559 = (state_22601[(15)]);var inst_22558 = (state_22601[(8)]);var inst_22557 = (state_22601[(2)]);var inst_22558__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22557,(0),null);var inst_22559__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22557,(1),null);var inst_22560 = (inst_22558__$1 == null);var inst_22561 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22559__$1,change);var inst_22562 = (inst_22560) || (inst_22561);var state_22601__$1 = (function (){var statearr_22637 = state_22601;(statearr_22637[(15)] = inst_22559__$1);
(statearr_22637[(8)] = inst_22558__$1);
return statearr_22637;
})();if(cljs.core.truth_(inst_22562))
{var statearr_22638_22681 = state_22601__$1;(statearr_22638_22681[(1)] = (11));
} else
{var statearr_22639_22682 = state_22601__$1;(statearr_22639_22682[(1)] = (12));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22602 === (18)))
{var inst_22559 = (state_22601[(15)]);var inst_22553 = (state_22601[(17)]);var inst_22554 = (state_22601[(16)]);var inst_22578 = cljs.core.empty_QMARK_(inst_22554);var inst_22579 = (function (){var G__22640 = inst_22559;return (inst_22553.cljs$core$IFn$_invoke$arity$1 ? inst_22553.cljs$core$IFn$_invoke$arity$1(G__22640) : inst_22553.call(null,G__22640));
})();var inst_22580 = cljs.core.not(inst_22579);var inst_22581 = (inst_22578) && (inst_22580);var state_22601__$1 = state_22601;var statearr_22641_22683 = state_22601__$1;(statearr_22641_22683[(2)] = inst_22581);
(statearr_22641_22683[(1)] = (19));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22602 === (8)))
{var inst_22543 = (state_22601[(7)]);var state_22601__$1 = state_22601;var statearr_22642_22684 = state_22601__$1;(statearr_22642_22684[(2)] = inst_22543);
(statearr_22642_22684[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11497__auto___22654,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__11417__auto__,c__11497__auto___22654,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__11418__auto__ = null;
var state_machine__11418__auto____0 = (function (){var statearr_22646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22646[(0)] = state_machine__11418__auto__);
(statearr_22646[(1)] = (1));
return statearr_22646;
});
var state_machine__11418__auto____1 = (function (state_22601){while(true){
var ret_value__11419__auto__ = (function (){try{while(true){
var result__11420__auto__ = switch__11417__auto__(state_22601);if(cljs.core.keyword_identical_QMARK_(result__11420__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__11420__auto__;
}
break;
}
}catch (e22647){if((e22647 instanceof Object))
{var ex__11421__auto__ = e22647;var statearr_22648_22685 = state_22601;(statearr_22648_22685[(5)] = ex__11421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22601);
return cljs.core.constant$keyword$16;
} else
{throw e22647;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__11419__auto__,cljs.core.constant$keyword$16))
{{
var G__22686 = state_22601;
state_22601 = G__22686;
continue;
}
} else
{return ret_value__11419__auto__;
}
break;
}
});
state_machine__11418__auto__ = function(state_22601){
switch(arguments.length){
case 0:
return state_machine__11418__auto____0.call(this);
case 1:
return state_machine__11418__auto____1.call(this,state_22601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11418__auto____0;
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11418__auto____1;
return state_machine__11418__auto__;
})()
;})(switch__11417__auto__,c__11497__auto___22654,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__11499__auto__ = (function (){var statearr_22649 = (function (){return (f__11498__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11498__auto__.cljs$core$IFn$_invoke$arity$0() : f__11498__auto__.call(null));
})();(statearr_22649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11497__auto___22654);
return statearr_22649;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11499__auto__);
});})(c__11497__auto___22654,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_(mix,mode);
});
cljs.core.async.Pub = (function (){var obj22688 = {};return obj22688;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__22692 = x__4277__auto__;return goog.typeOf(G__22692);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__22696 = x__4277__auto__;return goog.typeOf(G__22696);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__22702 = x__4277__auto__;return goog.typeOf(G__22702);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__22704 = x__4277__auto__;return goog.typeOf(G__22704);
})()]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = (function (){var G__22843 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22843) : cljs.core.atom.call(null,G__22843));
})();var ensure_mult = ((function (mults){
return (function (topic){var or__3640__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__22845 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22845) : cljs.core.deref.call(null,G__22845));
})(),topic);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3640__auto__,mults){
return (function (p1__22705_SHARP_){if(cljs.core.truth_((function (){var G__22846 = topic;return (p1__22705_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22705_SHARP_.cljs$core$IFn$_invoke$arity$1(G__22846) : p1__22705_SHARP_.call(null,G__22846));
})()))
{return p1__22705_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22705_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__22847 = topic;return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__22847) : buf_fn.call(null,G__22847));
})())));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t22848 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22848 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22849){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22849 = meta22849;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22848.cljs$lang$type = true;
cljs.core.async.t22848.cljs$lang$ctorStr = "cljs.core.async/t22848";
cljs.core.async.t22848.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t22848");
});})(mults,ensure_mult))
;
cljs.core.async.t22848.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t22848.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (function (){var G__22851 = topic;return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__22851) : self__.ensure_mult.call(null,G__22851));
})();return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t22848.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__22852 = self__.mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22852) : cljs.core.deref.call(null,G__22852));
})(),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t22848.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;var G__22853 = self__.mults;var G__22854 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22853,G__22854) : cljs.core.reset_BANG_.call(null,G__22853,G__22854));
});})(mults,ensure_mult))
;
cljs.core.async.t22848.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t22848.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22848.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t22848.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22850){var self__ = this;
var _22850__$1 = this;return self__.meta22849;
});})(mults,ensure_mult))
;
cljs.core.async.t22848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22850,meta22849__$1){var self__ = this;
var _22850__$1 = this;return (new cljs.core.async.t22848(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22849__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t22848 = ((function (mults,ensure_mult){
return (function __GT_t22848(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22849){return (new cljs.core.async.t22848(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22849));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t22848(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__11497__auto___22977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__11497__auto___22977,mults,ensure_mult,p){
return (function (){var f__11498__auto__ = (function (){var switch__11417__auto__ = ((function (c__11497__auto___22977,mults,ensure_mult,p){
return (function (state_22926){var state_val_22927 = (state_22926[(1)]);if((state_val_22927 === (7)))
{var inst_22922 = (state_22926[(2)]);var state_22926__$1 = state_22926;var statearr_22928_22978 = state_22926__$1;(statearr_22928_22978[(2)] = inst_22922);
(statearr_22928_22978[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22927 === (20)))
{var state_22926__$1 = state_22926;var statearr_22929_22979 = state_22926__$1;(statearr_22929_22979[(2)] = null);
(statearr_22929_22979[(1)] = (21));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22927 === (1)))
{var state_22926__$1 = state_22926;var statearr_22930_22980 = state_22926__$1;(statearr_22930_22980[(2)] = null);
(statearr_22930_22980[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22927 === (24)))
{var inst_22905 = (state_22926[(7)]);var inst_22914 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_22905);var state_22926__$1 = state_22926;var statearr_22931_22981 = state_22926__$1;(statearr_22931_22981[(2)] = inst_22914);
(statearr_22931_22981[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22927 === (4)))
{var inst_22857 = (state_22926[(8)]);var inst_22857__$1 = (state_22926[(2)]);var inst_22858 = (inst_22857__$1 == null);var state_22926__$1 = (function (){var statearr_22932 = state_22926;(statearr_22932[(8)] = inst_22857__$1);
return statearr_22932;
})();if(cljs.core.truth_(inst_22858))
{var statearr_22933_22982 = state_22926__$1;(statearr_22933_22982[(1)] = (5));
} else
{var statearr_22934_22983 = state_22926__$1;(statearr_22934_22983[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22927 === (15)))
{var inst_22899 = (state_22926[(2)]);var state_22926__$1 = state_22926;var statearr_22935_22984 = state_22926__$1;(statearr_22935_22984[(2)] = inst_22899);
(statearr_22935_22984[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22927 === (21)))
{var inst_22919 = (state_22926[(2)]);var state_22926__$1 = (function (){var statearr_22936 = state_22926;(statearr_22936[(9)] = inst_22919);
return statearr_22936;
})();var statearr_22937_22985 = state_22926__$1;(statearr_22937_22985[(2)] = null);
(statearr_22937_22985[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22927 === (13)))
{var inst_22881 = (state_22926[(10)]);var inst_22883 = cljs.core.chunked_seq_QMARK_(inst_22881);var state_22926__$1 = state_22926;if(inst_22883)
{var statearr_22938_22986 = state_22926__$1;(statearr_22938_22986[(1)] = (16));
} else
{var statearr_22939_22987 = state_22926__$1;(statearr_22939_22987[(1)] = (17));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22927 === (22)))
{var inst_22911 = (state_22926[(2)]);var state_22926__$1 = state_22926;if(cljs.core.truth_(inst_22911))
{var statearr_22940_22988 = state_22926__$1;(statearr_22940_22988[(1)] = (23));
} else
{var statearr_22941_22989 = state_22926__$1;(statearr_22941_22989[(1)] = (24));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22927 === (6)))
{var inst_22907 = (state_22926[(11)]);var inst_22905 = (state_22926[(7)]);var inst_22857 = (state_22926[(8)]);var inst_22905__$1 = (function (){var G__22942 = inst_22857;return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__22942) : topic_fn.call(null,G__22942));
})();var inst_22906 = (function (){var G__22943 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22943) : cljs.core.deref.call(null,G__22943));
})();var inst_22907__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22906,inst_22905__$1);var state_22926__$1 = (function (){var statearr_22944 = state_22926;(statearr_22944[(11)] = inst_22907__$1);
(statearr_22944[(7)] = inst_22905__$1);
return statearr_22944;
})();if(cljs.core.truth_(inst_22907__$1))
{var statearr_22945_22990 = state_22926__$1;(statearr_22945_22990[(1)] = (19));
} else
{var statearr_22946_22991 = state_22926__$1;(statearr_22946_22991[(1)] = (20));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22927 === (25)))
{var inst_22916 = (state_22926[(2)]);var state_22926__$1 = state_22926;var statearr_22947_22992 = state_22926__$1;(statearr_22947_22992[(2)] = inst_22916);
(statearr_22947_22992[(1)] = (21));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22927 === (17)))
{var inst_22881 = (state_22926[(10)]);var inst_22890 = cljs.core.first(inst_22881);var inst_22891 = cljs.core.async.muxch_STAR_(inst_22890);var inst_22892 = cljs.core.async.close_BANG_(inst_22891);var inst_22893 = cljs.core.next(inst_22881);var inst_22867 = inst_22893;var inst_22868 = null;var inst_22869 = (0);var inst_22870 = (0);var state_22926__$1 = (function (){var statearr_22948 = state_22926;(statearr_22948[(12)] = inst_22892);
(statearr_22948[(13)] = inst_22870);
(statearr_22948[(14)] = inst_22869);
(statearr_22948[(15)] = inst_22868);
(statearr_22948[(16)] = inst_22867);
return statearr_22948;
})();var statearr_22949_22993 = state_22926__$1;(statearr_22949_22993[(2)] = null);
(statearr_22949_22993[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22927 === (3)))
{var inst_22924 = (state_22926[(2)]);var state_22926__$1 = state_22926;return cljs.core.async.impl.ioc_helpers.return_chan(state_22926__$1,inst_22924);
} else
{if((state_val_22927 === (12)))
{var inst_22901 = (state_22926[(2)]);var state_22926__$1 = state_22926;var statearr_22950_22994 = state_22926__$1;(statearr_22950_22994[(2)] = inst_22901);
(statearr_22950_22994[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22927 === (2)))
{var state_22926__$1 = state_22926;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22926__$1,(4),ch);
} else
{if((state_val_22927 === (23)))
{var state_22926__$1 = state_22926;var statearr_22951_22995 = state_22926__$1;(statearr_22951_22995[(2)] = null);
(statearr_22951_22995[(1)] = (25));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22927 === (19)))
{var inst_22907 = (state_22926[(11)]);var inst_22857 = (state_22926[(8)]);var inst_22909 = cljs.core.async.muxch_STAR_(inst_22907);var state_22926__$1 = state_22926;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22926__$1,(22),inst_22909,inst_22857);
} else
{if((state_val_22927 === (11)))
{var inst_22881 = (state_22926[(10)]);var inst_22867 = (state_22926[(16)]);var inst_22881__$1 = cljs.core.seq(inst_22867);var state_22926__$1 = (function (){var statearr_22952 = state_22926;(statearr_22952[(10)] = inst_22881__$1);
return statearr_22952;
})();if(inst_22881__$1)
{var statearr_22953_22996 = state_22926__$1;(statearr_22953_22996[(1)] = (13));
} else
{var statearr_22954_22997 = state_22926__$1;(statearr_22954_22997[(1)] = (14));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_22927 === (9)))
{var inst_22903 = (state_22926[(2)]);var state_22926__$1 = state_22926;var statearr_22955_22998 = state_22926__$1;(statearr_22955_22998[(2)] = inst_22903);
(statearr_22955_22998[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22927 === (5)))
{var inst_22864 = (function (){var G__22956 = mults;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22956) : cljs.core.deref.call(null,G__22956));
})();var inst_22865 = cljs.core.vals(inst_22864);var inst_22866 = cljs.core.seq(inst_22865);var inst_22867 = inst_22866;var inst_22868 = null;var inst_22869 = (0);var inst_22870 = (0);var state_22926__$1 = (function (){var statearr_22957 = state_22926;(statearr_22957[(13)] = inst_22870);
(statearr_22957[(14)] = inst_22869);
(statearr_22957[(15)] = inst_22868);
(statearr_22957[(16)] = inst_22867);
return statearr_22957;
})();var statearr_22958_22999 = state_22926__$1;(statearr_22958_22999[(2)] = null);
(statearr_22958_22999[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22927 === (14)))
{var state_22926__$1 = state_22926;var statearr_22962_23000 = state_22926__$1;(statearr_22962_23000[(2)] = null);
(statearr_22962_23000[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22927 === (16)))
{var inst_22881 = (state_22926[(10)]);var inst_22885 = cljs.core.chunk_first(inst_22881);var inst_22886 = cljs.core.chunk_rest(inst_22881);var inst_22887 = cljs.core.count(inst_22885);var inst_22867 = inst_22886;var inst_22868 = inst_22885;var inst_22869 = inst_22887;var inst_22870 = (0);var state_22926__$1 = (function (){var statearr_22963 = state_22926;(statearr_22963[(13)] = inst_22870);
(statearr_22963[(14)] = inst_22869);
(statearr_22963[(15)] = inst_22868);
(statearr_22963[(16)] = inst_22867);
return statearr_22963;
})();var statearr_22964_23001 = state_22926__$1;(statearr_22964_23001[(2)] = null);
(statearr_22964_23001[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22927 === (10)))
{var inst_22870 = (state_22926[(13)]);var inst_22869 = (state_22926[(14)]);var inst_22868 = (state_22926[(15)]);var inst_22867 = (state_22926[(16)]);var inst_22875 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22868,inst_22870);var inst_22876 = cljs.core.async.muxch_STAR_(inst_22875);var inst_22877 = cljs.core.async.close_BANG_(inst_22876);var inst_22878 = (inst_22870 + (1));var tmp22959 = inst_22869;var tmp22960 = inst_22868;var tmp22961 = inst_22867;var inst_22867__$1 = tmp22961;var inst_22868__$1 = tmp22960;var inst_22869__$1 = tmp22959;var inst_22870__$1 = inst_22878;var state_22926__$1 = (function (){var statearr_22965 = state_22926;(statearr_22965[(13)] = inst_22870__$1);
(statearr_22965[(17)] = inst_22877);
(statearr_22965[(14)] = inst_22869__$1);
(statearr_22965[(15)] = inst_22868__$1);
(statearr_22965[(16)] = inst_22867__$1);
return statearr_22965;
})();var statearr_22966_23002 = state_22926__$1;(statearr_22966_23002[(2)] = null);
(statearr_22966_23002[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22927 === (18)))
{var inst_22896 = (state_22926[(2)]);var state_22926__$1 = state_22926;var statearr_22967_23003 = state_22926__$1;(statearr_22967_23003[(2)] = inst_22896);
(statearr_22967_23003[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_22927 === (8)))
{var inst_22870 = (state_22926[(13)]);var inst_22869 = (state_22926[(14)]);var inst_22872 = (inst_22870 < inst_22869);var inst_22873 = inst_22872;var state_22926__$1 = state_22926;if(cljs.core.truth_(inst_22873))
{var statearr_22968_23004 = state_22926__$1;(statearr_22968_23004[(1)] = (10));
} else
{var statearr_22969_23005 = state_22926__$1;(statearr_22969_23005[(1)] = (11));
}
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11497__auto___22977,mults,ensure_mult,p))
;return ((function (switch__11417__auto__,c__11497__auto___22977,mults,ensure_mult,p){
return (function() {
var state_machine__11418__auto__ = null;
var state_machine__11418__auto____0 = (function (){var statearr_22973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22973[(0)] = state_machine__11418__auto__);
(statearr_22973[(1)] = (1));
return statearr_22973;
});
var state_machine__11418__auto____1 = (function (state_22926){while(true){
var ret_value__11419__auto__ = (function (){try{while(true){
var result__11420__auto__ = switch__11417__auto__(state_22926);if(cljs.core.keyword_identical_QMARK_(result__11420__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__11420__auto__;
}
break;
}
}catch (e22974){if((e22974 instanceof Object))
{var ex__11421__auto__ = e22974;var statearr_22975_23006 = state_22926;(statearr_22975_23006[(5)] = ex__11421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22926);
return cljs.core.constant$keyword$16;
} else
{throw e22974;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__11419__auto__,cljs.core.constant$keyword$16))
{{
var G__23007 = state_22926;
state_22926 = G__23007;
continue;
}
} else
{return ret_value__11419__auto__;
}
break;
}
});
state_machine__11418__auto__ = function(state_22926){
switch(arguments.length){
case 0:
return state_machine__11418__auto____0.call(this);
case 1:
return state_machine__11418__auto____1.call(this,state_22926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11418__auto____0;
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11418__auto____1;
return state_machine__11418__auto__;
})()
;})(switch__11417__auto__,c__11497__auto___22977,mults,ensure_mult,p))
})();var state__11499__auto__ = (function (){var statearr_22976 = (function (){return (f__11498__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11498__auto__.cljs$core$IFn$_invoke$arity$0() : f__11498__auto__.call(null));
})();(statearr_22976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11497__auto___22977);
return statearr_22976;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11499__auto__);
});})(c__11497__auto___22977,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));var dctr = (function (){var G__23088 = null;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23088) : cljs.core.atom.call(null,G__23088));
})();var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__11497__auto___23161 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__11497__auto___23161,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__11498__auto__ = (function (){var switch__11417__auto__ = ((function (c__11497__auto___23161,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23127){var state_val_23128 = (state_23127[(1)]);if((state_val_23128 === (7)))
{var state_23127__$1 = state_23127;var statearr_23129_23162 = state_23127__$1;(statearr_23129_23162[(2)] = null);
(statearr_23129_23162[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23128 === (1)))
{var state_23127__$1 = state_23127;var statearr_23130_23163 = state_23127__$1;(statearr_23130_23163[(2)] = null);
(statearr_23130_23163[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23128 === (4)))
{var inst_23091 = (state_23127[(7)]);var inst_23093 = (inst_23091 < cnt);var state_23127__$1 = state_23127;if(cljs.core.truth_(inst_23093))
{var statearr_23131_23164 = state_23127__$1;(statearr_23131_23164[(1)] = (6));
} else
{var statearr_23132_23165 = state_23127__$1;(statearr_23132_23165[(1)] = (7));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23128 === (15)))
{var inst_23123 = (state_23127[(2)]);var state_23127__$1 = state_23127;var statearr_23133_23166 = state_23127__$1;(statearr_23133_23166[(2)] = inst_23123);
(statearr_23133_23166[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23128 === (13)))
{var inst_23116 = cljs.core.async.close_BANG_(out);var state_23127__$1 = state_23127;var statearr_23134_23167 = state_23127__$1;(statearr_23134_23167[(2)] = inst_23116);
(statearr_23134_23167[(1)] = (15));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23128 === (6)))
{var state_23127__$1 = state_23127;var statearr_23135_23168 = state_23127__$1;(statearr_23135_23168[(2)] = null);
(statearr_23135_23168[(1)] = (11));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23128 === (3)))
{var inst_23125 = (state_23127[(2)]);var state_23127__$1 = state_23127;return cljs.core.async.impl.ioc_helpers.return_chan(state_23127__$1,inst_23125);
} else
{if((state_val_23128 === (12)))
{var inst_23113 = (state_23127[(8)]);var inst_23113__$1 = (state_23127[(2)]);var inst_23114 = cljs.core.some(cljs.core.nil_QMARK_,inst_23113__$1);var state_23127__$1 = (function (){var statearr_23136 = state_23127;(statearr_23136[(8)] = inst_23113__$1);
return statearr_23136;
})();if(cljs.core.truth_(inst_23114))
{var statearr_23137_23169 = state_23127__$1;(statearr_23137_23169[(1)] = (13));
} else
{var statearr_23138_23170 = state_23127__$1;(statearr_23138_23170[(1)] = (14));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23128 === (2)))
{var inst_23090 = (function (){var G__23139 = dctr;var G__23140 = cnt;return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23139,G__23140) : cljs.core.reset_BANG_.call(null,G__23139,G__23140));
})();var inst_23091 = (0);var state_23127__$1 = (function (){var statearr_23141 = state_23127;(statearr_23141[(7)] = inst_23091);
(statearr_23141[(9)] = inst_23090);
return statearr_23141;
})();var statearr_23142_23171 = state_23127__$1;(statearr_23142_23171[(2)] = null);
(statearr_23142_23171[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23128 === (11)))
{var inst_23091 = (state_23127[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_23127,(10),Object,null,(9));var inst_23100 = (function (){var G__23143 = inst_23091;return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__23143) : chs__$1.call(null,G__23143));
})();var inst_23101 = (function (){var G__23144 = inst_23091;return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__23144) : done.call(null,G__23144));
})();var inst_23102 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_23100,inst_23101);var state_23127__$1 = state_23127;var statearr_23145_23172 = state_23127__$1;(statearr_23145_23172[(2)] = inst_23102);
cljs.core.async.impl.ioc_helpers.process_exception(state_23127__$1);
return cljs.core.constant$keyword$16;
} else
{if((state_val_23128 === (9)))
{var inst_23091 = (state_23127[(7)]);var inst_23104 = (state_23127[(2)]);var inst_23105 = (inst_23091 + (1));var inst_23091__$1 = inst_23105;var state_23127__$1 = (function (){var statearr_23146 = state_23127;(statearr_23146[(10)] = inst_23104);
(statearr_23146[(7)] = inst_23091__$1);
return statearr_23146;
})();var statearr_23147_23173 = state_23127__$1;(statearr_23147_23173[(2)] = null);
(statearr_23147_23173[(1)] = (4));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23128 === (5)))
{var inst_23111 = (state_23127[(2)]);var state_23127__$1 = (function (){var statearr_23148 = state_23127;(statearr_23148[(11)] = inst_23111);
return statearr_23148;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23127__$1,(12),dchan);
} else
{if((state_val_23128 === (14)))
{var inst_23113 = (state_23127[(8)]);var inst_23118 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_23113);var state_23127__$1 = state_23127;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23127__$1,(16),out,inst_23118);
} else
{if((state_val_23128 === (16)))
{var inst_23120 = (state_23127[(2)]);var state_23127__$1 = (function (){var statearr_23149 = state_23127;(statearr_23149[(12)] = inst_23120);
return statearr_23149;
})();var statearr_23150_23174 = state_23127__$1;(statearr_23150_23174[(2)] = null);
(statearr_23150_23174[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23128 === (10)))
{var inst_23095 = (state_23127[(2)]);var inst_23096 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_23127__$1 = (function (){var statearr_23151 = state_23127;(statearr_23151[(13)] = inst_23095);
return statearr_23151;
})();var statearr_23152_23175 = state_23127__$1;(statearr_23152_23175[(2)] = inst_23096);
cljs.core.async.impl.ioc_helpers.process_exception(state_23127__$1);
return cljs.core.constant$keyword$16;
} else
{if((state_val_23128 === (8)))
{var inst_23109 = (state_23127[(2)]);var state_23127__$1 = state_23127;var statearr_23153_23176 = state_23127__$1;(statearr_23153_23176[(2)] = inst_23109);
(statearr_23153_23176[(1)] = (5));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11497__auto___23161,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__11417__auto__,c__11497__auto___23161,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__11418__auto__ = null;
var state_machine__11418__auto____0 = (function (){var statearr_23157 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23157[(0)] = state_machine__11418__auto__);
(statearr_23157[(1)] = (1));
return statearr_23157;
});
var state_machine__11418__auto____1 = (function (state_23127){while(true){
var ret_value__11419__auto__ = (function (){try{while(true){
var result__11420__auto__ = switch__11417__auto__(state_23127);if(cljs.core.keyword_identical_QMARK_(result__11420__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__11420__auto__;
}
break;
}
}catch (e23158){if((e23158 instanceof Object))
{var ex__11421__auto__ = e23158;var statearr_23159_23177 = state_23127;(statearr_23159_23177[(5)] = ex__11421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23127);
return cljs.core.constant$keyword$16;
} else
{throw e23158;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__11419__auto__,cljs.core.constant$keyword$16))
{{
var G__23178 = state_23127;
state_23127 = G__23178;
continue;
}
} else
{return ret_value__11419__auto__;
}
break;
}
});
state_machine__11418__auto__ = function(state_23127){
switch(arguments.length){
case 0:
return state_machine__11418__auto____0.call(this);
case 1:
return state_machine__11418__auto____1.call(this,state_23127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11418__auto____0;
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11418__auto____1;
return state_machine__11418__auto__;
})()
;})(switch__11417__auto__,c__11497__auto___23161,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__11499__auto__ = (function (){var statearr_23160 = (function (){return (f__11498__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11498__auto__.cljs$core$IFn$_invoke$arity$0() : f__11498__auto__.call(null));
})();(statearr_23160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11497__auto___23161);
return statearr_23160;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11499__auto__);
});})(c__11497__auto___23161,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__11497__auto___23288 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__11497__auto___23288,out){
return (function (){var f__11498__auto__ = (function (){var switch__11417__auto__ = ((function (c__11497__auto___23288,out){
return (function (state_23264){var state_val_23265 = (state_23264[(1)]);if((state_val_23265 === (7)))
{var inst_23244 = (state_23264[(7)]);var inst_23243 = (state_23264[(8)]);var inst_23243__$1 = (state_23264[(2)]);var inst_23244__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23243__$1,(0),null);var inst_23245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23243__$1,(1),null);var inst_23246 = (inst_23244__$1 == null);var state_23264__$1 = (function (){var statearr_23266 = state_23264;(statearr_23266[(7)] = inst_23244__$1);
(statearr_23266[(9)] = inst_23245);
(statearr_23266[(8)] = inst_23243__$1);
return statearr_23266;
})();if(cljs.core.truth_(inst_23246))
{var statearr_23267_23289 = state_23264__$1;(statearr_23267_23289[(1)] = (8));
} else
{var statearr_23268_23290 = state_23264__$1;(statearr_23268_23290[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23265 === (1)))
{var inst_23235 = cljs.core.vec(chs);var inst_23236 = inst_23235;var state_23264__$1 = (function (){var statearr_23269 = state_23264;(statearr_23269[(10)] = inst_23236);
return statearr_23269;
})();var statearr_23270_23291 = state_23264__$1;(statearr_23270_23291[(2)] = null);
(statearr_23270_23291[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23265 === (4)))
{var inst_23236 = (state_23264[(10)]);var state_23264__$1 = state_23264;return cljs.core.async.ioc_alts_BANG_(state_23264__$1,(7),inst_23236);
} else
{if((state_val_23265 === (6)))
{var inst_23260 = (state_23264[(2)]);var state_23264__$1 = state_23264;var statearr_23271_23292 = state_23264__$1;(statearr_23271_23292[(2)] = inst_23260);
(statearr_23271_23292[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23265 === (3)))
{var inst_23262 = (state_23264[(2)]);var state_23264__$1 = state_23264;return cljs.core.async.impl.ioc_helpers.return_chan(state_23264__$1,inst_23262);
} else
{if((state_val_23265 === (2)))
{var inst_23236 = (state_23264[(10)]);var inst_23238 = cljs.core.count(inst_23236);var inst_23239 = (inst_23238 > (0));var state_23264__$1 = state_23264;if(cljs.core.truth_(inst_23239))
{var statearr_23273_23293 = state_23264__$1;(statearr_23273_23293[(1)] = (4));
} else
{var statearr_23274_23294 = state_23264__$1;(statearr_23274_23294[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23265 === (11)))
{var inst_23236 = (state_23264[(10)]);var inst_23253 = (state_23264[(2)]);var tmp23272 = inst_23236;var inst_23236__$1 = tmp23272;var state_23264__$1 = (function (){var statearr_23275 = state_23264;(statearr_23275[(10)] = inst_23236__$1);
(statearr_23275[(11)] = inst_23253);
return statearr_23275;
})();var statearr_23276_23295 = state_23264__$1;(statearr_23276_23295[(2)] = null);
(statearr_23276_23295[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23265 === (9)))
{var inst_23244 = (state_23264[(7)]);var state_23264__$1 = state_23264;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23264__$1,(11),out,inst_23244);
} else
{if((state_val_23265 === (5)))
{var inst_23258 = cljs.core.async.close_BANG_(out);var state_23264__$1 = state_23264;var statearr_23277_23296 = state_23264__$1;(statearr_23277_23296[(2)] = inst_23258);
(statearr_23277_23296[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23265 === (10)))
{var inst_23256 = (state_23264[(2)]);var state_23264__$1 = state_23264;var statearr_23278_23297 = state_23264__$1;(statearr_23278_23297[(2)] = inst_23256);
(statearr_23278_23297[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23265 === (8)))
{var inst_23236 = (state_23264[(10)]);var inst_23244 = (state_23264[(7)]);var inst_23245 = (state_23264[(9)]);var inst_23243 = (state_23264[(8)]);var inst_23248 = (function (){var c = inst_23245;var v = inst_23244;var vec__23241 = inst_23243;var cs = inst_23236;return ((function (c,v,vec__23241,cs,inst_23236,inst_23244,inst_23245,inst_23243,state_val_23265,c__11497__auto___23288,out){
return (function (p1__23179_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__23179_SHARP_);
});
;})(c,v,vec__23241,cs,inst_23236,inst_23244,inst_23245,inst_23243,state_val_23265,c__11497__auto___23288,out))
})();var inst_23249 = cljs.core.filterv(inst_23248,inst_23236);var inst_23236__$1 = inst_23249;var state_23264__$1 = (function (){var statearr_23279 = state_23264;(statearr_23279[(10)] = inst_23236__$1);
return statearr_23279;
})();var statearr_23280_23298 = state_23264__$1;(statearr_23280_23298[(2)] = null);
(statearr_23280_23298[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11497__auto___23288,out))
;return ((function (switch__11417__auto__,c__11497__auto___23288,out){
return (function() {
var state_machine__11418__auto__ = null;
var state_machine__11418__auto____0 = (function (){var statearr_23284 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23284[(0)] = state_machine__11418__auto__);
(statearr_23284[(1)] = (1));
return statearr_23284;
});
var state_machine__11418__auto____1 = (function (state_23264){while(true){
var ret_value__11419__auto__ = (function (){try{while(true){
var result__11420__auto__ = switch__11417__auto__(state_23264);if(cljs.core.keyword_identical_QMARK_(result__11420__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__11420__auto__;
}
break;
}
}catch (e23285){if((e23285 instanceof Object))
{var ex__11421__auto__ = e23285;var statearr_23286_23299 = state_23264;(statearr_23286_23299[(5)] = ex__11421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23264);
return cljs.core.constant$keyword$16;
} else
{throw e23285;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__11419__auto__,cljs.core.constant$keyword$16))
{{
var G__23300 = state_23264;
state_23264 = G__23300;
continue;
}
} else
{return ret_value__11419__auto__;
}
break;
}
});
state_machine__11418__auto__ = function(state_23264){
switch(arguments.length){
case 0:
return state_machine__11418__auto____0.call(this);
case 1:
return state_machine__11418__auto____1.call(this,state_23264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11418__auto____0;
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11418__auto____1;
return state_machine__11418__auto__;
})()
;})(switch__11417__auto__,c__11497__auto___23288,out))
})();var state__11499__auto__ = (function (){var statearr_23287 = (function (){return (f__11498__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11498__auto__.cljs$core$IFn$_invoke$arity$0() : f__11498__auto__.call(null));
})();(statearr_23287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11497__auto___23288);
return statearr_23287;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11499__auto__);
});})(c__11497__auto___23288,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__11497__auto___23396 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__11497__auto___23396,out){
return (function (){var f__11498__auto__ = (function (){var switch__11417__auto__ = ((function (c__11497__auto___23396,out){
return (function (state_23373){var state_val_23374 = (state_23373[(1)]);if((state_val_23374 === (7)))
{var inst_23355 = (state_23373[(7)]);var inst_23355__$1 = (state_23373[(2)]);var inst_23356 = (inst_23355__$1 == null);var inst_23357 = cljs.core.not(inst_23356);var state_23373__$1 = (function (){var statearr_23375 = state_23373;(statearr_23375[(7)] = inst_23355__$1);
return statearr_23375;
})();if(inst_23357)
{var statearr_23376_23397 = state_23373__$1;(statearr_23376_23397[(1)] = (8));
} else
{var statearr_23377_23398 = state_23373__$1;(statearr_23377_23398[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23374 === (1)))
{var inst_23350 = (0);var state_23373__$1 = (function (){var statearr_23378 = state_23373;(statearr_23378[(8)] = inst_23350);
return statearr_23378;
})();var statearr_23379_23399 = state_23373__$1;(statearr_23379_23399[(2)] = null);
(statearr_23379_23399[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23374 === (4)))
{var state_23373__$1 = state_23373;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23373__$1,(7),ch);
} else
{if((state_val_23374 === (6)))
{var inst_23368 = (state_23373[(2)]);var state_23373__$1 = state_23373;var statearr_23380_23400 = state_23373__$1;(statearr_23380_23400[(2)] = inst_23368);
(statearr_23380_23400[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23374 === (3)))
{var inst_23370 = (state_23373[(2)]);var inst_23371 = cljs.core.async.close_BANG_(out);var state_23373__$1 = (function (){var statearr_23381 = state_23373;(statearr_23381[(9)] = inst_23370);
return statearr_23381;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23373__$1,inst_23371);
} else
{if((state_val_23374 === (2)))
{var inst_23350 = (state_23373[(8)]);var inst_23352 = (inst_23350 < n);var state_23373__$1 = state_23373;if(cljs.core.truth_(inst_23352))
{var statearr_23382_23401 = state_23373__$1;(statearr_23382_23401[(1)] = (4));
} else
{var statearr_23383_23402 = state_23373__$1;(statearr_23383_23402[(1)] = (5));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23374 === (11)))
{var inst_23350 = (state_23373[(8)]);var inst_23360 = (state_23373[(2)]);var inst_23361 = (inst_23350 + (1));var inst_23350__$1 = inst_23361;var state_23373__$1 = (function (){var statearr_23384 = state_23373;(statearr_23384[(8)] = inst_23350__$1);
(statearr_23384[(10)] = inst_23360);
return statearr_23384;
})();var statearr_23385_23403 = state_23373__$1;(statearr_23385_23403[(2)] = null);
(statearr_23385_23403[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23374 === (9)))
{var state_23373__$1 = state_23373;var statearr_23386_23404 = state_23373__$1;(statearr_23386_23404[(2)] = null);
(statearr_23386_23404[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23374 === (5)))
{var state_23373__$1 = state_23373;var statearr_23387_23405 = state_23373__$1;(statearr_23387_23405[(2)] = null);
(statearr_23387_23405[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23374 === (10)))
{var inst_23365 = (state_23373[(2)]);var state_23373__$1 = state_23373;var statearr_23388_23406 = state_23373__$1;(statearr_23388_23406[(2)] = inst_23365);
(statearr_23388_23406[(1)] = (6));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23374 === (8)))
{var inst_23355 = (state_23373[(7)]);var state_23373__$1 = state_23373;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23373__$1,(11),out,inst_23355);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11497__auto___23396,out))
;return ((function (switch__11417__auto__,c__11497__auto___23396,out){
return (function() {
var state_machine__11418__auto__ = null;
var state_machine__11418__auto____0 = (function (){var statearr_23392 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23392[(0)] = state_machine__11418__auto__);
(statearr_23392[(1)] = (1));
return statearr_23392;
});
var state_machine__11418__auto____1 = (function (state_23373){while(true){
var ret_value__11419__auto__ = (function (){try{while(true){
var result__11420__auto__ = switch__11417__auto__(state_23373);if(cljs.core.keyword_identical_QMARK_(result__11420__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__11420__auto__;
}
break;
}
}catch (e23393){if((e23393 instanceof Object))
{var ex__11421__auto__ = e23393;var statearr_23394_23407 = state_23373;(statearr_23394_23407[(5)] = ex__11421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23373);
return cljs.core.constant$keyword$16;
} else
{throw e23393;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__11419__auto__,cljs.core.constant$keyword$16))
{{
var G__23408 = state_23373;
state_23373 = G__23408;
continue;
}
} else
{return ret_value__11419__auto__;
}
break;
}
});
state_machine__11418__auto__ = function(state_23373){
switch(arguments.length){
case 0:
return state_machine__11418__auto____0.call(this);
case 1:
return state_machine__11418__auto____1.call(this,state_23373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11418__auto____0;
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11418__auto____1;
return state_machine__11418__auto__;
})()
;})(switch__11417__auto__,c__11497__auto___23396,out))
})();var state__11499__auto__ = (function (){var statearr_23395 = (function (){return (f__11498__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11498__auto__.cljs$core$IFn$_invoke$arity$0() : f__11498__auto__.call(null));
})();(statearr_23395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11497__auto___23396);
return statearr_23395;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11499__auto__);
});})(c__11497__auto___23396,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t23421 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23421 = (function (ch,f,map_LT_,meta23422){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23422 = meta23422;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23421.cljs$lang$type = true;
cljs.core.async.t23421.cljs$lang$ctorStr = "cljs.core.async/t23421";
cljs.core.async.t23421.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23421");
});
cljs.core.async.t23421.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23421.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t23421.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23421.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t23424 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23424 = (function (fn1,_,meta23422,ch,f,map_LT_,meta23425){
this.fn1 = fn1;
this._ = _;
this.meta23422 = meta23422;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23425 = meta23425;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23424.cljs$lang$type = true;
cljs.core.async.t23424.cljs$lang$ctorStr = "cljs.core.async/t23424";
cljs.core.async.t23424.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23424");
});})(___$1))
;
cljs.core.async.t23424.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23424.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t23424.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__23409_SHARP_){var G__23427 = (((p1__23409_SHARP_ == null))?null:(function (){var G__23428 = p1__23409_SHARP_;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__23428) : self__.f.call(null,G__23428));
})());return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__23427) : f1.call(null,G__23427));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t23424.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23426){var self__ = this;
var _23426__$1 = this;return self__.meta23425;
});})(___$1))
;
cljs.core.async.t23424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23426,meta23425__$1){var self__ = this;
var _23426__$1 = this;return (new cljs.core.async.t23424(self__.fn1,self__._,self__.meta23422,self__.ch,self__.f,self__.map_LT_,meta23425__$1));
});})(___$1))
;
cljs.core.async.__GT_t23424 = ((function (___$1){
return (function __GT_t23424(fn1__$1,___$2,meta23422__$1,ch__$2,f__$2,map_LT___$2,meta23425){return (new cljs.core.async.t23424(fn1__$1,___$2,meta23422__$1,ch__$2,f__$2,map_LT___$2,meta23425));
});})(___$1))
;
}
return (new cljs.core.async.t23424(fn1,___$1,self__.meta23422,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3628__auto__ = ret;if(cljs.core.truth_(and__3628__auto__))
{return !(((function (){var G__23429 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23429) : cljs.core.deref.call(null,G__23429));
})() == null));
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((function (){var G__23430 = (function (){var G__23431 = ret;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23431) : cljs.core.deref.call(null,G__23431));
})();return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__23430) : self__.f.call(null,G__23430));
})());
} else
{return ret;
}
});
cljs.core.async.t23421.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23421.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23421.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t23421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23423){var self__ = this;
var _23423__$1 = this;return self__.meta23422;
});
cljs.core.async.t23421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23423,meta23422__$1){var self__ = this;
var _23423__$1 = this;return (new cljs.core.async.t23421(self__.ch,self__.f,self__.map_LT_,meta23422__$1));
});
cljs.core.async.__GT_t23421 = (function __GT_t23421(ch__$1,f__$1,map_LT___$1,meta23422){return (new cljs.core.async.t23421(ch__$1,f__$1,map_LT___$1,meta23422));
});
}
return (new cljs.core.async.t23421(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t23436 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23436 = (function (ch,f,map_GT_,meta23437){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23437 = meta23437;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23436.cljs$lang$type = true;
cljs.core.async.t23436.cljs$lang$ctorStr = "cljs.core.async/t23436";
cljs.core.async.t23436.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23436");
});
cljs.core.async.t23436.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23436.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__23439 = val;return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__23439) : self__.f.call(null,G__23439));
})(),fn1);
});
cljs.core.async.t23436.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23436.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23436.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23436.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23438){var self__ = this;
var _23438__$1 = this;return self__.meta23437;
});
cljs.core.async.t23436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23438,meta23437__$1){var self__ = this;
var _23438__$1 = this;return (new cljs.core.async.t23436(self__.ch,self__.f,self__.map_GT_,meta23437__$1));
});
cljs.core.async.__GT_t23436 = (function __GT_t23436(ch__$1,f__$1,map_GT___$1,meta23437){return (new cljs.core.async.t23436(ch__$1,f__$1,map_GT___$1,meta23437));
});
}
return (new cljs.core.async.t23436(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t23444 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23444 = (function (ch,p,filter_GT_,meta23445){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23445 = meta23445;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23444.cljs$lang$type = true;
cljs.core.async.t23444.cljs$lang$ctorStr = "cljs.core.async/t23444";
cljs.core.async.t23444.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"cljs.core.async/t23444");
});
cljs.core.async.t23444.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23444.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((function (){var G__23447 = val;return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__23447) : self__.p.call(null,G__23447));
})()))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t23444.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23444.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23444.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23444.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23444.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t23444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23446){var self__ = this;
var _23446__$1 = this;return self__.meta23445;
});
cljs.core.async.t23444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23446,meta23445__$1){var self__ = this;
var _23446__$1 = this;return (new cljs.core.async.t23444(self__.ch,self__.p,self__.filter_GT_,meta23445__$1));
});
cljs.core.async.__GT_t23444 = (function __GT_t23444(ch__$1,p__$1,filter_GT___$1,meta23445){return (new cljs.core.async.t23444(ch__$1,p__$1,filter_GT___$1,meta23445));
});
}
return (new cljs.core.async.t23444(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__11497__auto___23535 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__11497__auto___23535,out){
return (function (){var f__11498__auto__ = (function (){var switch__11417__auto__ = ((function (c__11497__auto___23535,out){
return (function (state_23513){var state_val_23514 = (state_23513[(1)]);if((state_val_23514 === (7)))
{var inst_23509 = (state_23513[(2)]);var state_23513__$1 = state_23513;var statearr_23515_23536 = state_23513__$1;(statearr_23515_23536[(2)] = inst_23509);
(statearr_23515_23536[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23514 === (1)))
{var state_23513__$1 = state_23513;var statearr_23516_23537 = state_23513__$1;(statearr_23516_23537[(2)] = null);
(statearr_23516_23537[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23514 === (4)))
{var inst_23495 = (state_23513[(7)]);var inst_23495__$1 = (state_23513[(2)]);var inst_23496 = (inst_23495__$1 == null);var state_23513__$1 = (function (){var statearr_23517 = state_23513;(statearr_23517[(7)] = inst_23495__$1);
return statearr_23517;
})();if(cljs.core.truth_(inst_23496))
{var statearr_23518_23538 = state_23513__$1;(statearr_23518_23538[(1)] = (5));
} else
{var statearr_23519_23539 = state_23513__$1;(statearr_23519_23539[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23514 === (6)))
{var inst_23495 = (state_23513[(7)]);var inst_23500 = (function (){var G__23520 = inst_23495;return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__23520) : p.call(null,G__23520));
})();var state_23513__$1 = state_23513;if(cljs.core.truth_(inst_23500))
{var statearr_23521_23540 = state_23513__$1;(statearr_23521_23540[(1)] = (8));
} else
{var statearr_23522_23541 = state_23513__$1;(statearr_23522_23541[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23514 === (3)))
{var inst_23511 = (state_23513[(2)]);var state_23513__$1 = state_23513;return cljs.core.async.impl.ioc_helpers.return_chan(state_23513__$1,inst_23511);
} else
{if((state_val_23514 === (2)))
{var state_23513__$1 = state_23513;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23513__$1,(4),ch);
} else
{if((state_val_23514 === (11)))
{var inst_23503 = (state_23513[(2)]);var state_23513__$1 = state_23513;var statearr_23523_23542 = state_23513__$1;(statearr_23523_23542[(2)] = inst_23503);
(statearr_23523_23542[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23514 === (9)))
{var state_23513__$1 = state_23513;var statearr_23524_23543 = state_23513__$1;(statearr_23524_23543[(2)] = null);
(statearr_23524_23543[(1)] = (10));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23514 === (5)))
{var inst_23498 = cljs.core.async.close_BANG_(out);var state_23513__$1 = state_23513;var statearr_23525_23544 = state_23513__$1;(statearr_23525_23544[(2)] = inst_23498);
(statearr_23525_23544[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23514 === (10)))
{var inst_23506 = (state_23513[(2)]);var state_23513__$1 = (function (){var statearr_23526 = state_23513;(statearr_23526[(8)] = inst_23506);
return statearr_23526;
})();var statearr_23527_23545 = state_23513__$1;(statearr_23527_23545[(2)] = null);
(statearr_23527_23545[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23514 === (8)))
{var inst_23495 = (state_23513[(7)]);var state_23513__$1 = state_23513;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23513__$1,(11),out,inst_23495);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11497__auto___23535,out))
;return ((function (switch__11417__auto__,c__11497__auto___23535,out){
return (function() {
var state_machine__11418__auto__ = null;
var state_machine__11418__auto____0 = (function (){var statearr_23531 = [null,null,null,null,null,null,null,null,null];(statearr_23531[(0)] = state_machine__11418__auto__);
(statearr_23531[(1)] = (1));
return statearr_23531;
});
var state_machine__11418__auto____1 = (function (state_23513){while(true){
var ret_value__11419__auto__ = (function (){try{while(true){
var result__11420__auto__ = switch__11417__auto__(state_23513);if(cljs.core.keyword_identical_QMARK_(result__11420__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__11420__auto__;
}
break;
}
}catch (e23532){if((e23532 instanceof Object))
{var ex__11421__auto__ = e23532;var statearr_23533_23546 = state_23513;(statearr_23533_23546[(5)] = ex__11421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23513);
return cljs.core.constant$keyword$16;
} else
{throw e23532;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__11419__auto__,cljs.core.constant$keyword$16))
{{
var G__23547 = state_23513;
state_23513 = G__23547;
continue;
}
} else
{return ret_value__11419__auto__;
}
break;
}
});
state_machine__11418__auto__ = function(state_23513){
switch(arguments.length){
case 0:
return state_machine__11418__auto____0.call(this);
case 1:
return state_machine__11418__auto____1.call(this,state_23513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11418__auto____0;
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11418__auto____1;
return state_machine__11418__auto__;
})()
;})(switch__11417__auto__,c__11497__auto___23535,out))
})();var state__11499__auto__ = (function (){var statearr_23534 = (function (){return (f__11498__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11498__auto__.cljs$core$IFn$_invoke$arity$0() : f__11498__auto__.call(null));
})();(statearr_23534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11497__auto___23535);
return statearr_23534;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11499__auto__);
});})(c__11497__auto___23535,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__11497__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__11497__auto__){
return (function (){var f__11498__auto__ = (function (){var switch__11417__auto__ = ((function (c__11497__auto__){
return (function (state_23717){var state_val_23718 = (state_23717[(1)]);if((state_val_23718 === (7)))
{var inst_23713 = (state_23717[(2)]);var state_23717__$1 = state_23717;var statearr_23719_23761 = state_23717__$1;(statearr_23719_23761[(2)] = inst_23713);
(statearr_23719_23761[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23718 === (20)))
{var inst_23683 = (state_23717[(7)]);var inst_23694 = (state_23717[(2)]);var inst_23695 = cljs.core.next(inst_23683);var inst_23669 = inst_23695;var inst_23670 = null;var inst_23671 = (0);var inst_23672 = (0);var state_23717__$1 = (function (){var statearr_23720 = state_23717;(statearr_23720[(8)] = inst_23669);
(statearr_23720[(9)] = inst_23670);
(statearr_23720[(10)] = inst_23694);
(statearr_23720[(11)] = inst_23672);
(statearr_23720[(12)] = inst_23671);
return statearr_23720;
})();var statearr_23721_23762 = state_23717__$1;(statearr_23721_23762[(2)] = null);
(statearr_23721_23762[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23718 === (1)))
{var state_23717__$1 = state_23717;var statearr_23722_23763 = state_23717__$1;(statearr_23722_23763[(2)] = null);
(statearr_23722_23763[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23718 === (4)))
{var inst_23658 = (state_23717[(13)]);var inst_23658__$1 = (state_23717[(2)]);var inst_23659 = (inst_23658__$1 == null);var state_23717__$1 = (function (){var statearr_23723 = state_23717;(statearr_23723[(13)] = inst_23658__$1);
return statearr_23723;
})();if(cljs.core.truth_(inst_23659))
{var statearr_23724_23764 = state_23717__$1;(statearr_23724_23764[(1)] = (5));
} else
{var statearr_23725_23765 = state_23717__$1;(statearr_23725_23765[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23718 === (15)))
{var state_23717__$1 = state_23717;var statearr_23729_23766 = state_23717__$1;(statearr_23729_23766[(2)] = null);
(statearr_23729_23766[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23718 === (21)))
{var state_23717__$1 = state_23717;var statearr_23730_23767 = state_23717__$1;(statearr_23730_23767[(2)] = null);
(statearr_23730_23767[(1)] = (23));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23718 === (13)))
{var inst_23669 = (state_23717[(8)]);var inst_23670 = (state_23717[(9)]);var inst_23672 = (state_23717[(11)]);var inst_23671 = (state_23717[(12)]);var inst_23679 = (state_23717[(2)]);var inst_23680 = (inst_23672 + (1));var tmp23726 = inst_23669;var tmp23727 = inst_23670;var tmp23728 = inst_23671;var inst_23669__$1 = tmp23726;var inst_23670__$1 = tmp23727;var inst_23671__$1 = tmp23728;var inst_23672__$1 = inst_23680;var state_23717__$1 = (function (){var statearr_23731 = state_23717;(statearr_23731[(8)] = inst_23669__$1);
(statearr_23731[(14)] = inst_23679);
(statearr_23731[(9)] = inst_23670__$1);
(statearr_23731[(11)] = inst_23672__$1);
(statearr_23731[(12)] = inst_23671__$1);
return statearr_23731;
})();var statearr_23732_23768 = state_23717__$1;(statearr_23732_23768[(2)] = null);
(statearr_23732_23768[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23718 === (22)))
{var state_23717__$1 = state_23717;var statearr_23733_23769 = state_23717__$1;(statearr_23733_23769[(2)] = null);
(statearr_23733_23769[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23718 === (6)))
{var inst_23658 = (state_23717[(13)]);var inst_23667 = (function (){var G__23734 = inst_23658;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23734) : f.call(null,G__23734));
})();var inst_23668 = cljs.core.seq(inst_23667);var inst_23669 = inst_23668;var inst_23670 = null;var inst_23671 = (0);var inst_23672 = (0);var state_23717__$1 = (function (){var statearr_23735 = state_23717;(statearr_23735[(8)] = inst_23669);
(statearr_23735[(9)] = inst_23670);
(statearr_23735[(11)] = inst_23672);
(statearr_23735[(12)] = inst_23671);
return statearr_23735;
})();var statearr_23736_23770 = state_23717__$1;(statearr_23736_23770[(2)] = null);
(statearr_23736_23770[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23718 === (17)))
{var inst_23683 = (state_23717[(7)]);var inst_23687 = cljs.core.chunk_first(inst_23683);var inst_23688 = cljs.core.chunk_rest(inst_23683);var inst_23689 = cljs.core.count(inst_23687);var inst_23669 = inst_23688;var inst_23670 = inst_23687;var inst_23671 = inst_23689;var inst_23672 = (0);var state_23717__$1 = (function (){var statearr_23737 = state_23717;(statearr_23737[(8)] = inst_23669);
(statearr_23737[(9)] = inst_23670);
(statearr_23737[(11)] = inst_23672);
(statearr_23737[(12)] = inst_23671);
return statearr_23737;
})();var statearr_23738_23771 = state_23717__$1;(statearr_23738_23771[(2)] = null);
(statearr_23738_23771[(1)] = (8));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23718 === (3)))
{var inst_23715 = (state_23717[(2)]);var state_23717__$1 = state_23717;return cljs.core.async.impl.ioc_helpers.return_chan(state_23717__$1,inst_23715);
} else
{if((state_val_23718 === (12)))
{var inst_23703 = (state_23717[(2)]);var state_23717__$1 = state_23717;var statearr_23739_23772 = state_23717__$1;(statearr_23739_23772[(2)] = inst_23703);
(statearr_23739_23772[(1)] = (9));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23718 === (2)))
{var state_23717__$1 = state_23717;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23717__$1,(4),in$);
} else
{if((state_val_23718 === (23)))
{var inst_23711 = (state_23717[(2)]);var state_23717__$1 = state_23717;var statearr_23740_23773 = state_23717__$1;(statearr_23740_23773[(2)] = inst_23711);
(statearr_23740_23773[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23718 === (19)))
{var inst_23698 = (state_23717[(2)]);var state_23717__$1 = state_23717;var statearr_23741_23774 = state_23717__$1;(statearr_23741_23774[(2)] = inst_23698);
(statearr_23741_23774[(1)] = (16));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23718 === (11)))
{var inst_23669 = (state_23717[(8)]);var inst_23683 = (state_23717[(7)]);var inst_23683__$1 = cljs.core.seq(inst_23669);var state_23717__$1 = (function (){var statearr_23742 = state_23717;(statearr_23742[(7)] = inst_23683__$1);
return statearr_23742;
})();if(inst_23683__$1)
{var statearr_23743_23775 = state_23717__$1;(statearr_23743_23775[(1)] = (14));
} else
{var statearr_23744_23776 = state_23717__$1;(statearr_23744_23776[(1)] = (15));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23718 === (9)))
{var inst_23705 = (state_23717[(2)]);var inst_23706 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_23717__$1 = (function (){var statearr_23745 = state_23717;(statearr_23745[(15)] = inst_23705);
return statearr_23745;
})();if(cljs.core.truth_(inst_23706))
{var statearr_23746_23777 = state_23717__$1;(statearr_23746_23777[(1)] = (21));
} else
{var statearr_23747_23778 = state_23717__$1;(statearr_23747_23778[(1)] = (22));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23718 === (5)))
{var inst_23661 = cljs.core.async.close_BANG_(out);var state_23717__$1 = state_23717;var statearr_23748_23779 = state_23717__$1;(statearr_23748_23779[(2)] = inst_23661);
(statearr_23748_23779[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23718 === (14)))
{var inst_23683 = (state_23717[(7)]);var inst_23685 = cljs.core.chunked_seq_QMARK_(inst_23683);var state_23717__$1 = state_23717;if(inst_23685)
{var statearr_23749_23780 = state_23717__$1;(statearr_23749_23780[(1)] = (17));
} else
{var statearr_23750_23781 = state_23717__$1;(statearr_23750_23781[(1)] = (18));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23718 === (16)))
{var inst_23701 = (state_23717[(2)]);var state_23717__$1 = state_23717;var statearr_23751_23782 = state_23717__$1;(statearr_23751_23782[(2)] = inst_23701);
(statearr_23751_23782[(1)] = (12));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23718 === (10)))
{var inst_23670 = (state_23717[(9)]);var inst_23672 = (state_23717[(11)]);var inst_23677 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23670,inst_23672);var state_23717__$1 = state_23717;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23717__$1,(13),out,inst_23677);
} else
{if((state_val_23718 === (18)))
{var inst_23683 = (state_23717[(7)]);var inst_23692 = cljs.core.first(inst_23683);var state_23717__$1 = state_23717;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23717__$1,(20),out,inst_23692);
} else
{if((state_val_23718 === (8)))
{var inst_23672 = (state_23717[(11)]);var inst_23671 = (state_23717[(12)]);var inst_23674 = (inst_23672 < inst_23671);var inst_23675 = inst_23674;var state_23717__$1 = state_23717;if(cljs.core.truth_(inst_23675))
{var statearr_23752_23783 = state_23717__$1;(statearr_23752_23783[(1)] = (10));
} else
{var statearr_23753_23784 = state_23717__$1;(statearr_23753_23784[(1)] = (11));
}
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11497__auto__))
;return ((function (switch__11417__auto__,c__11497__auto__){
return (function() {
var state_machine__11418__auto__ = null;
var state_machine__11418__auto____0 = (function (){var statearr_23757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23757[(0)] = state_machine__11418__auto__);
(statearr_23757[(1)] = (1));
return statearr_23757;
});
var state_machine__11418__auto____1 = (function (state_23717){while(true){
var ret_value__11419__auto__ = (function (){try{while(true){
var result__11420__auto__ = switch__11417__auto__(state_23717);if(cljs.core.keyword_identical_QMARK_(result__11420__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__11420__auto__;
}
break;
}
}catch (e23758){if((e23758 instanceof Object))
{var ex__11421__auto__ = e23758;var statearr_23759_23785 = state_23717;(statearr_23759_23785[(5)] = ex__11421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23717);
return cljs.core.constant$keyword$16;
} else
{throw e23758;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__11419__auto__,cljs.core.constant$keyword$16))
{{
var G__23786 = state_23717;
state_23717 = G__23786;
continue;
}
} else
{return ret_value__11419__auto__;
}
break;
}
});
state_machine__11418__auto__ = function(state_23717){
switch(arguments.length){
case 0:
return state_machine__11418__auto____0.call(this);
case 1:
return state_machine__11418__auto____1.call(this,state_23717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11418__auto____0;
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11418__auto____1;
return state_machine__11418__auto__;
})()
;})(switch__11417__auto__,c__11497__auto__))
})();var state__11499__auto__ = (function (){var statearr_23760 = (function (){return (f__11498__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11498__auto__.cljs$core$IFn$_invoke$arity$0() : f__11498__auto__.call(null));
})();(statearr_23760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11497__auto__);
return statearr_23760;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11499__auto__);
});})(c__11497__auto__))
);
return c__11497__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__11497__auto___23891 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__11497__auto___23891,out){
return (function (){var f__11498__auto__ = (function (){var switch__11417__auto__ = ((function (c__11497__auto___23891,out){
return (function (state_23866){var state_val_23867 = (state_23866[(1)]);if((state_val_23867 === (7)))
{var inst_23861 = (state_23866[(2)]);var state_23866__$1 = state_23866;var statearr_23868_23892 = state_23866__$1;(statearr_23868_23892[(2)] = inst_23861);
(statearr_23868_23892[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23867 === (1)))
{var inst_23843 = null;var state_23866__$1 = (function (){var statearr_23869 = state_23866;(statearr_23869[(7)] = inst_23843);
return statearr_23869;
})();var statearr_23870_23893 = state_23866__$1;(statearr_23870_23893[(2)] = null);
(statearr_23870_23893[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23867 === (4)))
{var inst_23846 = (state_23866[(8)]);var inst_23846__$1 = (state_23866[(2)]);var inst_23847 = (inst_23846__$1 == null);var inst_23848 = cljs.core.not(inst_23847);var state_23866__$1 = (function (){var statearr_23871 = state_23866;(statearr_23871[(8)] = inst_23846__$1);
return statearr_23871;
})();if(inst_23848)
{var statearr_23872_23894 = state_23866__$1;(statearr_23872_23894[(1)] = (5));
} else
{var statearr_23873_23895 = state_23866__$1;(statearr_23873_23895[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23867 === (6)))
{var state_23866__$1 = state_23866;var statearr_23874_23896 = state_23866__$1;(statearr_23874_23896[(2)] = null);
(statearr_23874_23896[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23867 === (3)))
{var inst_23863 = (state_23866[(2)]);var inst_23864 = cljs.core.async.close_BANG_(out);var state_23866__$1 = (function (){var statearr_23875 = state_23866;(statearr_23875[(9)] = inst_23863);
return statearr_23875;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_23866__$1,inst_23864);
} else
{if((state_val_23867 === (2)))
{var state_23866__$1 = state_23866;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23866__$1,(4),ch);
} else
{if((state_val_23867 === (11)))
{var inst_23846 = (state_23866[(8)]);var inst_23855 = (state_23866[(2)]);var inst_23843 = inst_23846;var state_23866__$1 = (function (){var statearr_23876 = state_23866;(statearr_23876[(7)] = inst_23843);
(statearr_23876[(10)] = inst_23855);
return statearr_23876;
})();var statearr_23877_23897 = state_23866__$1;(statearr_23877_23897[(2)] = null);
(statearr_23877_23897[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23867 === (9)))
{var inst_23846 = (state_23866[(8)]);var state_23866__$1 = state_23866;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23866__$1,(11),out,inst_23846);
} else
{if((state_val_23867 === (5)))
{var inst_23843 = (state_23866[(7)]);var inst_23846 = (state_23866[(8)]);var inst_23850 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23846,inst_23843);var state_23866__$1 = state_23866;if(inst_23850)
{var statearr_23879_23898 = state_23866__$1;(statearr_23879_23898[(1)] = (8));
} else
{var statearr_23880_23899 = state_23866__$1;(statearr_23880_23899[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_23867 === (10)))
{var inst_23858 = (state_23866[(2)]);var state_23866__$1 = state_23866;var statearr_23881_23900 = state_23866__$1;(statearr_23881_23900[(2)] = inst_23858);
(statearr_23881_23900[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_23867 === (8)))
{var inst_23843 = (state_23866[(7)]);var tmp23878 = inst_23843;var inst_23843__$1 = tmp23878;var state_23866__$1 = (function (){var statearr_23882 = state_23866;(statearr_23882[(7)] = inst_23843__$1);
return statearr_23882;
})();var statearr_23883_23901 = state_23866__$1;(statearr_23883_23901[(2)] = null);
(statearr_23883_23901[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__11497__auto___23891,out))
;return ((function (switch__11417__auto__,c__11497__auto___23891,out){
return (function() {
var state_machine__11418__auto__ = null;
var state_machine__11418__auto____0 = (function (){var statearr_23887 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23887[(0)] = state_machine__11418__auto__);
(statearr_23887[(1)] = (1));
return statearr_23887;
});
var state_machine__11418__auto____1 = (function (state_23866){while(true){
var ret_value__11419__auto__ = (function (){try{while(true){
var result__11420__auto__ = switch__11417__auto__(state_23866);if(cljs.core.keyword_identical_QMARK_(result__11420__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__11420__auto__;
}
break;
}
}catch (e23888){if((e23888 instanceof Object))
{var ex__11421__auto__ = e23888;var statearr_23889_23902 = state_23866;(statearr_23889_23902[(5)] = ex__11421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23866);
return cljs.core.constant$keyword$16;
} else
{throw e23888;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__11419__auto__,cljs.core.constant$keyword$16))
{{
var G__23903 = state_23866;
state_23866 = G__23903;
continue;
}
} else
{return ret_value__11419__auto__;
}
break;
}
});
state_machine__11418__auto__ = function(state_23866){
switch(arguments.length){
case 0:
return state_machine__11418__auto____0.call(this);
case 1:
return state_machine__11418__auto____1.call(this,state_23866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11418__auto____0;
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11418__auto____1;
return state_machine__11418__auto__;
})()
;})(switch__11417__auto__,c__11497__auto___23891,out))
})();var state__11499__auto__ = (function (){var statearr_23890 = (function (){return (f__11498__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11498__auto__.cljs$core$IFn$_invoke$arity$0() : f__11498__auto__.call(null));
})();(statearr_23890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11497__auto___23891);
return statearr_23890;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11499__auto__);
});})(c__11497__auto___23891,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__11497__auto___24041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__11497__auto___24041,out){
return (function (){var f__11498__auto__ = (function (){var switch__11417__auto__ = ((function (c__11497__auto___24041,out){
return (function (state_24011){var state_val_24012 = (state_24011[(1)]);if((state_val_24012 === (7)))
{var inst_24007 = (state_24011[(2)]);var state_24011__$1 = state_24011;var statearr_24013_24042 = state_24011__$1;(statearr_24013_24042[(2)] = inst_24007);
(statearr_24013_24042[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24012 === (1)))
{var inst_23974 = (new Array(n));var inst_23975 = inst_23974;var inst_23976 = (0);var state_24011__$1 = (function (){var statearr_24014 = state_24011;(statearr_24014[(7)] = inst_23975);
(statearr_24014[(8)] = inst_23976);
return statearr_24014;
})();var statearr_24015_24043 = state_24011__$1;(statearr_24015_24043[(2)] = null);
(statearr_24015_24043[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24012 === (4)))
{var inst_23979 = (state_24011[(9)]);var inst_23979__$1 = (state_24011[(2)]);var inst_23980 = (inst_23979__$1 == null);var inst_23981 = cljs.core.not(inst_23980);var state_24011__$1 = (function (){var statearr_24016 = state_24011;(statearr_24016[(9)] = inst_23979__$1);
return statearr_24016;
})();if(inst_23981)
{var statearr_24017_24044 = state_24011__$1;(statearr_24017_24044[(1)] = (5));
} else
{var statearr_24018_24045 = state_24011__$1;(statearr_24018_24045[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24012 === (15)))
{var inst_24001 = (state_24011[(2)]);var state_24011__$1 = state_24011;var statearr_24019_24046 = state_24011__$1;(statearr_24019_24046[(2)] = inst_24001);
(statearr_24019_24046[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24012 === (13)))
{var state_24011__$1 = state_24011;var statearr_24020_24047 = state_24011__$1;(statearr_24020_24047[(2)] = null);
(statearr_24020_24047[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24012 === (6)))
{var inst_23976 = (state_24011[(8)]);var inst_23997 = (inst_23976 > (0));var state_24011__$1 = state_24011;if(cljs.core.truth_(inst_23997))
{var statearr_24021_24048 = state_24011__$1;(statearr_24021_24048[(1)] = (12));
} else
{var statearr_24022_24049 = state_24011__$1;(statearr_24022_24049[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24012 === (3)))
{var inst_24009 = (state_24011[(2)]);var state_24011__$1 = state_24011;return cljs.core.async.impl.ioc_helpers.return_chan(state_24011__$1,inst_24009);
} else
{if((state_val_24012 === (12)))
{var inst_23975 = (state_24011[(7)]);var inst_23999 = cljs.core.vec(inst_23975);var state_24011__$1 = state_24011;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24011__$1,(15),out,inst_23999);
} else
{if((state_val_24012 === (2)))
{var state_24011__$1 = state_24011;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24011__$1,(4),ch);
} else
{if((state_val_24012 === (11)))
{var inst_23991 = (state_24011[(2)]);var inst_23992 = (new Array(n));var inst_23975 = inst_23992;var inst_23976 = (0);var state_24011__$1 = (function (){var statearr_24023 = state_24011;(statearr_24023[(7)] = inst_23975);
(statearr_24023[(10)] = inst_23991);
(statearr_24023[(8)] = inst_23976);
return statearr_24023;
})();var statearr_24024_24050 = state_24011__$1;(statearr_24024_24050[(2)] = null);
(statearr_24024_24050[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24012 === (9)))
{var inst_23975 = (state_24011[(7)]);var inst_23989 = cljs.core.vec(inst_23975);var state_24011__$1 = state_24011;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24011__$1,(11),out,inst_23989);
} else
{if((state_val_24012 === (5)))
{var inst_23975 = (state_24011[(7)]);var inst_23984 = (state_24011[(11)]);var inst_23979 = (state_24011[(9)]);var inst_23976 = (state_24011[(8)]);var inst_23983 = (inst_23975[inst_23976] = inst_23979);var inst_23984__$1 = (inst_23976 + (1));var inst_23985 = (inst_23984__$1 < n);var state_24011__$1 = (function (){var statearr_24025 = state_24011;(statearr_24025[(11)] = inst_23984__$1);
(statearr_24025[(12)] = inst_23983);
return statearr_24025;
})();if(cljs.core.truth_(inst_23985))
{var statearr_24026_24051 = state_24011__$1;(statearr_24026_24051[(1)] = (8));
} else
{var statearr_24027_24052 = state_24011__$1;(statearr_24027_24052[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24012 === (14)))
{var inst_24004 = (state_24011[(2)]);var inst_24005 = cljs.core.async.close_BANG_(out);var state_24011__$1 = (function (){var statearr_24029 = state_24011;(statearr_24029[(13)] = inst_24004);
return statearr_24029;
})();var statearr_24030_24053 = state_24011__$1;(statearr_24030_24053[(2)] = inst_24005);
(statearr_24030_24053[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24012 === (10)))
{var inst_23995 = (state_24011[(2)]);var state_24011__$1 = state_24011;var statearr_24031_24054 = state_24011__$1;(statearr_24031_24054[(2)] = inst_23995);
(statearr_24031_24054[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24012 === (8)))
{var inst_23975 = (state_24011[(7)]);var inst_23984 = (state_24011[(11)]);var tmp24028 = inst_23975;var inst_23975__$1 = tmp24028;var inst_23976 = inst_23984;var state_24011__$1 = (function (){var statearr_24032 = state_24011;(statearr_24032[(7)] = inst_23975__$1);
(statearr_24032[(8)] = inst_23976);
return statearr_24032;
})();var statearr_24033_24055 = state_24011__$1;(statearr_24033_24055[(2)] = null);
(statearr_24033_24055[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11497__auto___24041,out))
;return ((function (switch__11417__auto__,c__11497__auto___24041,out){
return (function() {
var state_machine__11418__auto__ = null;
var state_machine__11418__auto____0 = (function (){var statearr_24037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24037[(0)] = state_machine__11418__auto__);
(statearr_24037[(1)] = (1));
return statearr_24037;
});
var state_machine__11418__auto____1 = (function (state_24011){while(true){
var ret_value__11419__auto__ = (function (){try{while(true){
var result__11420__auto__ = switch__11417__auto__(state_24011);if(cljs.core.keyword_identical_QMARK_(result__11420__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__11420__auto__;
}
break;
}
}catch (e24038){if((e24038 instanceof Object))
{var ex__11421__auto__ = e24038;var statearr_24039_24056 = state_24011;(statearr_24039_24056[(5)] = ex__11421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24011);
return cljs.core.constant$keyword$16;
} else
{throw e24038;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__11419__auto__,cljs.core.constant$keyword$16))
{{
var G__24057 = state_24011;
state_24011 = G__24057;
continue;
}
} else
{return ret_value__11419__auto__;
}
break;
}
});
state_machine__11418__auto__ = function(state_24011){
switch(arguments.length){
case 0:
return state_machine__11418__auto____0.call(this);
case 1:
return state_machine__11418__auto____1.call(this,state_24011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11418__auto____0;
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11418__auto____1;
return state_machine__11418__auto__;
})()
;})(switch__11417__auto__,c__11497__auto___24041,out))
})();var state__11499__auto__ = (function (){var statearr_24040 = (function (){return (f__11498__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11498__auto__.cljs$core$IFn$_invoke$arity$0() : f__11498__auto__.call(null));
})();(statearr_24040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11497__auto___24041);
return statearr_24040;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11499__auto__);
});})(c__11497__auto___24041,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__11497__auto___24205 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__11497__auto___24205,out){
return (function (){var f__11498__auto__ = (function (){var switch__11417__auto__ = ((function (c__11497__auto___24205,out){
return (function (state_24174){var state_val_24175 = (state_24174[(1)]);if((state_val_24175 === (7)))
{var inst_24170 = (state_24174[(2)]);var state_24174__$1 = state_24174;var statearr_24176_24206 = state_24174__$1;(statearr_24176_24206[(2)] = inst_24170);
(statearr_24176_24206[(1)] = (3));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24175 === (1)))
{var inst_24133 = [];var inst_24134 = inst_24133;var inst_24135 = cljs.core.constant$keyword$31;var state_24174__$1 = (function (){var statearr_24177 = state_24174;(statearr_24177[(7)] = inst_24135);
(statearr_24177[(8)] = inst_24134);
return statearr_24177;
})();var statearr_24178_24207 = state_24174__$1;(statearr_24178_24207[(2)] = null);
(statearr_24178_24207[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24175 === (4)))
{var inst_24138 = (state_24174[(9)]);var inst_24138__$1 = (state_24174[(2)]);var inst_24139 = (inst_24138__$1 == null);var inst_24140 = cljs.core.not(inst_24139);var state_24174__$1 = (function (){var statearr_24179 = state_24174;(statearr_24179[(9)] = inst_24138__$1);
return statearr_24179;
})();if(inst_24140)
{var statearr_24180_24208 = state_24174__$1;(statearr_24180_24208[(1)] = (5));
} else
{var statearr_24181_24209 = state_24174__$1;(statearr_24181_24209[(1)] = (6));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24175 === (15)))
{var inst_24164 = (state_24174[(2)]);var state_24174__$1 = state_24174;var statearr_24182_24210 = state_24174__$1;(statearr_24182_24210[(2)] = inst_24164);
(statearr_24182_24210[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24175 === (13)))
{var state_24174__$1 = state_24174;var statearr_24183_24211 = state_24174__$1;(statearr_24183_24211[(2)] = null);
(statearr_24183_24211[(1)] = (14));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24175 === (6)))
{var inst_24134 = (state_24174[(8)]);var inst_24159 = inst_24134.length;var inst_24160 = (inst_24159 > (0));var state_24174__$1 = state_24174;if(cljs.core.truth_(inst_24160))
{var statearr_24184_24212 = state_24174__$1;(statearr_24184_24212[(1)] = (12));
} else
{var statearr_24185_24213 = state_24174__$1;(statearr_24185_24213[(1)] = (13));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24175 === (3)))
{var inst_24172 = (state_24174[(2)]);var state_24174__$1 = state_24174;return cljs.core.async.impl.ioc_helpers.return_chan(state_24174__$1,inst_24172);
} else
{if((state_val_24175 === (12)))
{var inst_24134 = (state_24174[(8)]);var inst_24162 = cljs.core.vec(inst_24134);var state_24174__$1 = state_24174;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24174__$1,(15),out,inst_24162);
} else
{if((state_val_24175 === (2)))
{var state_24174__$1 = state_24174;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24174__$1,(4),ch);
} else
{if((state_val_24175 === (11)))
{var inst_24138 = (state_24174[(9)]);var inst_24142 = (state_24174[(10)]);var inst_24152 = (state_24174[(2)]);var inst_24153 = [];var inst_24154 = inst_24153.push(inst_24138);var inst_24134 = inst_24153;var inst_24135 = inst_24142;var state_24174__$1 = (function (){var statearr_24186 = state_24174;(statearr_24186[(11)] = inst_24152);
(statearr_24186[(7)] = inst_24135);
(statearr_24186[(12)] = inst_24154);
(statearr_24186[(8)] = inst_24134);
return statearr_24186;
})();var statearr_24187_24214 = state_24174__$1;(statearr_24187_24214[(2)] = null);
(statearr_24187_24214[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24175 === (9)))
{var inst_24134 = (state_24174[(8)]);var inst_24150 = cljs.core.vec(inst_24134);var state_24174__$1 = state_24174;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24174__$1,(11),out,inst_24150);
} else
{if((state_val_24175 === (5)))
{var inst_24138 = (state_24174[(9)]);var inst_24142 = (state_24174[(10)]);var inst_24135 = (state_24174[(7)]);var inst_24142__$1 = (function (){var G__24188 = inst_24138;return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24188) : f.call(null,G__24188));
})();var inst_24143 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24142__$1,inst_24135);var inst_24144 = cljs.core.keyword_identical_QMARK_(inst_24135,cljs.core.constant$keyword$31);var inst_24145 = (inst_24143) || (inst_24144);var state_24174__$1 = (function (){var statearr_24189 = state_24174;(statearr_24189[(10)] = inst_24142__$1);
return statearr_24189;
})();if(cljs.core.truth_(inst_24145))
{var statearr_24190_24215 = state_24174__$1;(statearr_24190_24215[(1)] = (8));
} else
{var statearr_24191_24216 = state_24174__$1;(statearr_24191_24216[(1)] = (9));
}
return cljs.core.constant$keyword$16;
} else
{if((state_val_24175 === (14)))
{var inst_24167 = (state_24174[(2)]);var inst_24168 = cljs.core.async.close_BANG_(out);var state_24174__$1 = (function (){var statearr_24193 = state_24174;(statearr_24193[(13)] = inst_24167);
return statearr_24193;
})();var statearr_24194_24217 = state_24174__$1;(statearr_24194_24217[(2)] = inst_24168);
(statearr_24194_24217[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24175 === (10)))
{var inst_24157 = (state_24174[(2)]);var state_24174__$1 = state_24174;var statearr_24195_24218 = state_24174__$1;(statearr_24195_24218[(2)] = inst_24157);
(statearr_24195_24218[(1)] = (7));
return cljs.core.constant$keyword$16;
} else
{if((state_val_24175 === (8)))
{var inst_24138 = (state_24174[(9)]);var inst_24142 = (state_24174[(10)]);var inst_24134 = (state_24174[(8)]);var inst_24147 = inst_24134.push(inst_24138);var tmp24192 = inst_24134;var inst_24134__$1 = tmp24192;var inst_24135 = inst_24142;var state_24174__$1 = (function (){var statearr_24196 = state_24174;(statearr_24196[(7)] = inst_24135);
(statearr_24196[(14)] = inst_24147);
(statearr_24196[(8)] = inst_24134__$1);
return statearr_24196;
})();var statearr_24197_24219 = state_24174__$1;(statearr_24197_24219[(2)] = null);
(statearr_24197_24219[(1)] = (2));
return cljs.core.constant$keyword$16;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__11497__auto___24205,out))
;return ((function (switch__11417__auto__,c__11497__auto___24205,out){
return (function() {
var state_machine__11418__auto__ = null;
var state_machine__11418__auto____0 = (function (){var statearr_24201 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24201[(0)] = state_machine__11418__auto__);
(statearr_24201[(1)] = (1));
return statearr_24201;
});
var state_machine__11418__auto____1 = (function (state_24174){while(true){
var ret_value__11419__auto__ = (function (){try{while(true){
var result__11420__auto__ = switch__11417__auto__(state_24174);if(cljs.core.keyword_identical_QMARK_(result__11420__auto__,cljs.core.constant$keyword$16))
{{
continue;
}
} else
{return result__11420__auto__;
}
break;
}
}catch (e24202){if((e24202 instanceof Object))
{var ex__11421__auto__ = e24202;var statearr_24203_24220 = state_24174;(statearr_24203_24220[(5)] = ex__11421__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24174);
return cljs.core.constant$keyword$16;
} else
{throw e24202;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__11419__auto__,cljs.core.constant$keyword$16))
{{
var G__24221 = state_24174;
state_24174 = G__24221;
continue;
}
} else
{return ret_value__11419__auto__;
}
break;
}
});
state_machine__11418__auto__ = function(state_24174){
switch(arguments.length){
case 0:
return state_machine__11418__auto____0.call(this);
case 1:
return state_machine__11418__auto____1.call(this,state_24174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__11418__auto____0;
state_machine__11418__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__11418__auto____1;
return state_machine__11418__auto__;
})()
;})(switch__11417__auto__,c__11497__auto___24205,out))
})();var state__11499__auto__ = (function (){var statearr_24204 = (function (){return (f__11498__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11498__auto__.cljs$core$IFn$_invoke$arity$0() : f__11498__auto__.call(null));
})();(statearr_24204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11497__auto___24205);
return statearr_24204;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11499__auto__);
});})(c__11497__auto___24205,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
