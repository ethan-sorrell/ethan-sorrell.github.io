goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__52735 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52736 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52736;

try{try{var seq__52737 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52739 = null;
var count__52740 = (0);
var i__52741 = (0);
while(true){
if((i__52741 < count__52740)){
var vec__52752 = chunk__52739.cljs$core$IIndexed$_nth$arity$2(null,i__52741);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52752,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52752,(1),null);
var temp__5733__auto___52820 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52820)){
var effect_fn_52821 = temp__5733__auto___52820;
(effect_fn_52821.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52821.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52821.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52822 = seq__52737;
var G__52823 = chunk__52739;
var G__52824 = count__52740;
var G__52825 = (i__52741 + (1));
seq__52737 = G__52822;
chunk__52739 = G__52823;
count__52740 = G__52824;
i__52741 = G__52825;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52737);
if(temp__5735__auto__){
var seq__52737__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52737__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__52737__$1);
var G__52826 = cljs.core.chunk_rest(seq__52737__$1);
var G__52827 = c__4550__auto__;
var G__52828 = cljs.core.count(c__4550__auto__);
var G__52829 = (0);
seq__52737 = G__52826;
chunk__52739 = G__52827;
count__52740 = G__52828;
i__52741 = G__52829;
continue;
} else {
var vec__52759 = cljs.core.first(seq__52737__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52759,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52759,(1),null);
var temp__5733__auto___52830 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52830)){
var effect_fn_52831 = temp__5733__auto___52830;
(effect_fn_52831.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52831.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52831.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52832 = cljs.core.next(seq__52737__$1);
var G__52833 = null;
var G__52834 = (0);
var G__52835 = (0);
seq__52737 = G__52832;
chunk__52739 = G__52833;
count__52740 = G__52834;
i__52741 = G__52835;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__52367__auto___52836 = re_frame.interop.now();
var duration__52368__auto___52837 = (end__52367__auto___52836 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52368__auto___52837,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__52367__auto___52836);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52735;
}} else {
var seq__52762 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52763 = null;
var count__52764 = (0);
var i__52765 = (0);
while(true){
if((i__52765 < count__52764)){
var vec__52772 = chunk__52763.cljs$core$IIndexed$_nth$arity$2(null,i__52765);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52772,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52772,(1),null);
var temp__5733__auto___52842 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52842)){
var effect_fn_52843 = temp__5733__auto___52842;
(effect_fn_52843.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52843.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52843.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52847 = seq__52762;
var G__52848 = chunk__52763;
var G__52849 = count__52764;
var G__52850 = (i__52765 + (1));
seq__52762 = G__52847;
chunk__52763 = G__52848;
count__52764 = G__52849;
i__52765 = G__52850;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52762);
if(temp__5735__auto__){
var seq__52762__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52762__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__52762__$1);
var G__52851 = cljs.core.chunk_rest(seq__52762__$1);
var G__52852 = c__4550__auto__;
var G__52853 = cljs.core.count(c__4550__auto__);
var G__52854 = (0);
seq__52762 = G__52851;
chunk__52763 = G__52852;
count__52764 = G__52853;
i__52765 = G__52854;
continue;
} else {
var vec__52775 = cljs.core.first(seq__52762__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52775,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52775,(1),null);
var temp__5733__auto___52855 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52855)){
var effect_fn_52856 = temp__5733__auto___52855;
(effect_fn_52856.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52856.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52856.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52858 = cljs.core.next(seq__52762__$1);
var G__52859 = null;
var G__52860 = (0);
var G__52861 = (0);
seq__52762 = G__52858;
chunk__52763 = G__52859;
count__52764 = G__52860;
i__52765 = G__52861;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__52778 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52779 = null;
var count__52780 = (0);
var i__52781 = (0);
while(true){
if((i__52781 < count__52780)){
var map__52786 = chunk__52779.cljs$core$IIndexed$_nth$arity$2(null,i__52781);
var map__52786__$1 = (((((!((map__52786 == null))))?(((((map__52786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52786):map__52786);
var effect = map__52786__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52786__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52786__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52778,chunk__52779,count__52780,i__52781,map__52786,map__52786__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52778,chunk__52779,count__52780,i__52781,map__52786,map__52786__$1,effect,ms,dispatch))
,ms);
}


var G__52868 = seq__52778;
var G__52869 = chunk__52779;
var G__52870 = count__52780;
var G__52871 = (i__52781 + (1));
seq__52778 = G__52868;
chunk__52779 = G__52869;
count__52780 = G__52870;
i__52781 = G__52871;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52778);
if(temp__5735__auto__){
var seq__52778__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52778__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__52778__$1);
var G__52873 = cljs.core.chunk_rest(seq__52778__$1);
var G__52874 = c__4550__auto__;
var G__52875 = cljs.core.count(c__4550__auto__);
var G__52876 = (0);
seq__52778 = G__52873;
chunk__52779 = G__52874;
count__52780 = G__52875;
i__52781 = G__52876;
continue;
} else {
var map__52795 = cljs.core.first(seq__52778__$1);
var map__52795__$1 = (((((!((map__52795 == null))))?(((((map__52795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52795):map__52795);
var effect = map__52795__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52795__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52795__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52778,chunk__52779,count__52780,i__52781,map__52795,map__52795__$1,effect,ms,dispatch,seq__52778__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52778,chunk__52779,count__52780,i__52781,map__52795,map__52795__$1,effect,ms,dispatch,seq__52778__$1,temp__5735__auto__))
,ms);
}


var G__52891 = cljs.core.next(seq__52778__$1);
var G__52892 = null;
var G__52893 = (0);
var G__52894 = (0);
seq__52778 = G__52891;
chunk__52779 = G__52892;
count__52780 = G__52893;
i__52781 = G__52894;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__52799 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52800 = null;
var count__52801 = (0);
var i__52802 = (0);
while(true){
if((i__52802 < count__52801)){
var event = chunk__52800.cljs$core$IIndexed$_nth$arity$2(null,i__52802);
re_frame.router.dispatch(event);


var G__52900 = seq__52799;
var G__52901 = chunk__52800;
var G__52902 = count__52801;
var G__52903 = (i__52802 + (1));
seq__52799 = G__52900;
chunk__52800 = G__52901;
count__52801 = G__52902;
i__52802 = G__52903;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52799);
if(temp__5735__auto__){
var seq__52799__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52799__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__52799__$1);
var G__52904 = cljs.core.chunk_rest(seq__52799__$1);
var G__52905 = c__4550__auto__;
var G__52906 = cljs.core.count(c__4550__auto__);
var G__52907 = (0);
seq__52799 = G__52904;
chunk__52800 = G__52905;
count__52801 = G__52906;
i__52802 = G__52907;
continue;
} else {
var event = cljs.core.first(seq__52799__$1);
re_frame.router.dispatch(event);


var G__52908 = cljs.core.next(seq__52799__$1);
var G__52909 = null;
var G__52910 = (0);
var G__52911 = (0);
seq__52799 = G__52908;
chunk__52800 = G__52909;
count__52801 = G__52910;
i__52802 = G__52911;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__52813 = cljs.core.seq(value);
var chunk__52814 = null;
var count__52815 = (0);
var i__52816 = (0);
while(true){
if((i__52816 < count__52815)){
var event = chunk__52814.cljs$core$IIndexed$_nth$arity$2(null,i__52816);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52916 = seq__52813;
var G__52917 = chunk__52814;
var G__52918 = count__52815;
var G__52919 = (i__52816 + (1));
seq__52813 = G__52916;
chunk__52814 = G__52917;
count__52815 = G__52918;
i__52816 = G__52919;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52813);
if(temp__5735__auto__){
var seq__52813__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52813__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__52813__$1);
var G__52922 = cljs.core.chunk_rest(seq__52813__$1);
var G__52923 = c__4550__auto__;
var G__52924 = cljs.core.count(c__4550__auto__);
var G__52925 = (0);
seq__52813 = G__52922;
chunk__52814 = G__52923;
count__52815 = G__52924;
i__52816 = G__52925;
continue;
} else {
var event = cljs.core.first(seq__52813__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52928 = cljs.core.next(seq__52813__$1);
var G__52929 = null;
var G__52930 = (0);
var G__52931 = (0);
seq__52813 = G__52928;
chunk__52814 = G__52929;
count__52815 = G__52930;
i__52816 = G__52931;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
