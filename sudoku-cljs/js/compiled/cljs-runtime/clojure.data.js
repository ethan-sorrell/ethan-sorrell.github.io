goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__39748){
var vec__39751 = p__39748;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39751,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39751,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__39760 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39760,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39760,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39760,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__39799 = arguments.length;
switch (G__39799) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__39873_40139 = clojure.data.equality_partition;
var G__39874_40140 = "null";
var G__39875_40141 = ((function (G__39873_40139,G__39874_40140){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__39873_40139,G__39874_40140))
;
goog.object.set(G__39873_40139,G__39874_40140,G__39875_40141);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__39878_40161 = clojure.data.equality_partition;
var G__39879_40162 = "string";
var G__39880_40163 = ((function (G__39878_40161,G__39879_40162){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__39878_40161,G__39879_40162))
;
goog.object.set(G__39878_40161,G__39879_40162,G__39880_40163);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__39883_40168 = clojure.data.equality_partition;
var G__39884_40169 = "number";
var G__39885_40170 = ((function (G__39883_40168,G__39884_40169){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__39883_40168,G__39884_40169))
;
goog.object.set(G__39883_40168,G__39884_40169,G__39885_40170);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__39888_40179 = clojure.data.equality_partition;
var G__39889_40180 = "array";
var G__39890_40181 = ((function (G__39888_40179,G__39889_40180){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__39888_40179,G__39889_40180))
;
goog.object.set(G__39888_40179,G__39889_40180,G__39890_40181);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__39894_40190 = clojure.data.equality_partition;
var G__39895_40191 = "function";
var G__39896_40192 = ((function (G__39894_40190,G__39895_40191){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__39894_40190,G__39895_40191))
;
goog.object.set(G__39894_40190,G__39895_40191,G__39896_40192);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__39900_40196 = clojure.data.equality_partition;
var G__39901_40197 = "boolean";
var G__39902_40198 = ((function (G__39900_40196,G__39901_40197){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__39900_40196,G__39901_40197))
;
goog.object.set(G__39900_40196,G__39901_40197,G__39902_40198);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__39905_40203 = clojure.data.equality_partition;
var G__39906_40204 = "_";
var G__39907_40205 = ((function (G__39905_40203,G__39906_40204){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__39905_40203,G__39906_40204))
;
goog.object.set(G__39905_40203,G__39906_40204,G__39907_40205);
goog.object.set(clojure.data.Diff,"null",true);

var G__39968_40209 = clojure.data.diff_similar;
var G__39969_40210 = "null";
var G__39970_40211 = ((function (G__39968_40209,G__39969_40210){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39968_40209,G__39969_40210))
;
goog.object.set(G__39968_40209,G__39969_40210,G__39970_40211);

goog.object.set(clojure.data.Diff,"string",true);

var G__39973_40213 = clojure.data.diff_similar;
var G__39974_40214 = "string";
var G__39975_40215 = ((function (G__39973_40213,G__39974_40214){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39973_40213,G__39974_40214))
;
goog.object.set(G__39973_40213,G__39974_40214,G__39975_40215);

goog.object.set(clojure.data.Diff,"number",true);

var G__39978_40219 = clojure.data.diff_similar;
var G__39979_40220 = "number";
var G__39980_40221 = ((function (G__39978_40219,G__39979_40220){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39978_40219,G__39979_40220))
;
goog.object.set(G__39978_40219,G__39979_40220,G__39980_40221);

goog.object.set(clojure.data.Diff,"array",true);

var G__39983_40229 = clojure.data.diff_similar;
var G__39984_40230 = "array";
var G__39985_40231 = ((function (G__39983_40229,G__39984_40230){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__39983_40229,G__39984_40230))
;
goog.object.set(G__39983_40229,G__39984_40230,G__39985_40231);

goog.object.set(clojure.data.Diff,"function",true);

var G__39990_40237 = clojure.data.diff_similar;
var G__39991_40238 = "function";
var G__39992_40239 = ((function (G__39990_40237,G__39991_40238){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39990_40237,G__39991_40238))
;
goog.object.set(G__39990_40237,G__39991_40238,G__39992_40239);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__39993_40242 = clojure.data.diff_similar;
var G__39994_40243 = "boolean";
var G__39995_40244 = ((function (G__39993_40242,G__39994_40243){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39993_40242,G__39994_40243))
;
goog.object.set(G__39993_40242,G__39994_40243,G__39995_40244);

goog.object.set(clojure.data.Diff,"_",true);

var G__39996_40247 = clojure.data.diff_similar;
var G__39997_40248 = "_";
var G__39998_40249 = ((function (G__39996_40247,G__39997_40248){
return (function (a,b){
var fexpr__40020 = (function (){var G__40022 = clojure.data.equality_partition(a);
var G__40022__$1 = (((G__40022 instanceof cljs.core.Keyword))?G__40022.fqn:null);
switch (G__40022__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40022__$1)].join('')));

}
})();
return (fexpr__40020.cljs$core$IFn$_invoke$arity$2 ? fexpr__40020.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__40020.call(null,a,b));
});})(G__39996_40247,G__39997_40248))
;
goog.object.set(G__39996_40247,G__39997_40248,G__39998_40249);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
