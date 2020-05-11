goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__49391__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__49391 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49398__i = 0, G__49398__a = new Array(arguments.length -  0);
while (G__49398__i < G__49398__a.length) {G__49398__a[G__49398__i] = arguments[G__49398__i + 0]; ++G__49398__i;}
  args = new cljs.core.IndexedSeq(G__49398__a,0,null);
} 
return G__49391__delegate.call(this,args);};
G__49391.cljs$lang$maxFixedArity = 0;
G__49391.cljs$lang$applyTo = (function (arglist__49400){
var args = cljs.core.seq(arglist__49400);
return G__49391__delegate(args);
});
G__49391.cljs$core$IFn$_invoke$arity$variadic = G__49391__delegate;
return G__49391;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__49401__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__49401 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49402__i = 0, G__49402__a = new Array(arguments.length -  0);
while (G__49402__i < G__49402__a.length) {G__49402__a[G__49402__i] = arguments[G__49402__i + 0]; ++G__49402__i;}
  args = new cljs.core.IndexedSeq(G__49402__a,0,null);
} 
return G__49401__delegate.call(this,args);};
G__49401.cljs$lang$maxFixedArity = 0;
G__49401.cljs$lang$applyTo = (function (arglist__49403){
var args = cljs.core.seq(arglist__49403);
return G__49401__delegate(args);
});
G__49401.cljs$core$IFn$_invoke$arity$variadic = G__49401__delegate;
return G__49401;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
