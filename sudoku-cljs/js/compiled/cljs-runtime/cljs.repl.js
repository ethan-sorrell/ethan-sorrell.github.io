goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45676){
var map__45677 = p__45676;
var map__45677__$1 = (((((!((map__45677 == null))))?(((((map__45677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45677):map__45677);
var m = map__45677__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45677__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45677__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45679_45908 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45680_45909 = null;
var count__45681_45910 = (0);
var i__45682_45911 = (0);
while(true){
if((i__45682_45911 < count__45681_45910)){
var f_45912 = chunk__45680_45909.cljs$core$IIndexed$_nth$arity$2(null,i__45682_45911);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45912], 0));


var G__45913 = seq__45679_45908;
var G__45914 = chunk__45680_45909;
var G__45915 = count__45681_45910;
var G__45916 = (i__45682_45911 + (1));
seq__45679_45908 = G__45913;
chunk__45680_45909 = G__45914;
count__45681_45910 = G__45915;
i__45682_45911 = G__45916;
continue;
} else {
var temp__5735__auto___45917 = cljs.core.seq(seq__45679_45908);
if(temp__5735__auto___45917){
var seq__45679_45918__$1 = temp__5735__auto___45917;
if(cljs.core.chunked_seq_QMARK_(seq__45679_45918__$1)){
var c__4550__auto___45919 = cljs.core.chunk_first(seq__45679_45918__$1);
var G__45920 = cljs.core.chunk_rest(seq__45679_45918__$1);
var G__45921 = c__4550__auto___45919;
var G__45922 = cljs.core.count(c__4550__auto___45919);
var G__45923 = (0);
seq__45679_45908 = G__45920;
chunk__45680_45909 = G__45921;
count__45681_45910 = G__45922;
i__45682_45911 = G__45923;
continue;
} else {
var f_45924 = cljs.core.first(seq__45679_45918__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45924], 0));


var G__45925 = cljs.core.next(seq__45679_45918__$1);
var G__45926 = null;
var G__45927 = (0);
var G__45928 = (0);
seq__45679_45908 = G__45925;
chunk__45680_45909 = G__45926;
count__45681_45910 = G__45927;
i__45682_45911 = G__45928;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45929 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45929], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45929)))?cljs.core.second(arglists_45929):arglists_45929)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45686_45930 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45687_45931 = null;
var count__45688_45932 = (0);
var i__45689_45933 = (0);
while(true){
if((i__45689_45933 < count__45688_45932)){
var vec__45701_45936 = chunk__45687_45931.cljs$core$IIndexed$_nth$arity$2(null,i__45689_45933);
var name_45937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45701_45936,(0),null);
var map__45704_45938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45701_45936,(1),null);
var map__45704_45939__$1 = (((((!((map__45704_45938 == null))))?(((((map__45704_45938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45704_45938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45704_45938):map__45704_45938);
var doc_45940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45704_45939__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45704_45939__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45937], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45941], 0));

if(cljs.core.truth_(doc_45940)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45940], 0));
} else {
}


var G__45946 = seq__45686_45930;
var G__45947 = chunk__45687_45931;
var G__45948 = count__45688_45932;
var G__45949 = (i__45689_45933 + (1));
seq__45686_45930 = G__45946;
chunk__45687_45931 = G__45947;
count__45688_45932 = G__45948;
i__45689_45933 = G__45949;
continue;
} else {
var temp__5735__auto___45951 = cljs.core.seq(seq__45686_45930);
if(temp__5735__auto___45951){
var seq__45686_45952__$1 = temp__5735__auto___45951;
if(cljs.core.chunked_seq_QMARK_(seq__45686_45952__$1)){
var c__4550__auto___45953 = cljs.core.chunk_first(seq__45686_45952__$1);
var G__45954 = cljs.core.chunk_rest(seq__45686_45952__$1);
var G__45955 = c__4550__auto___45953;
var G__45956 = cljs.core.count(c__4550__auto___45953);
var G__45957 = (0);
seq__45686_45930 = G__45954;
chunk__45687_45931 = G__45955;
count__45688_45932 = G__45956;
i__45689_45933 = G__45957;
continue;
} else {
var vec__45710_45959 = cljs.core.first(seq__45686_45952__$1);
var name_45960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45710_45959,(0),null);
var map__45713_45961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45710_45959,(1),null);
var map__45713_45962__$1 = (((((!((map__45713_45961 == null))))?(((((map__45713_45961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45713_45961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45713_45961):map__45713_45961);
var doc_45963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45713_45962__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45713_45962__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45960], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45964], 0));

if(cljs.core.truth_(doc_45963)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45963], 0));
} else {
}


var G__45966 = cljs.core.next(seq__45686_45952__$1);
var G__45967 = null;
var G__45968 = (0);
var G__45969 = (0);
seq__45686_45930 = G__45966;
chunk__45687_45931 = G__45967;
count__45688_45932 = G__45968;
i__45689_45933 = G__45969;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__45717 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45718 = null;
var count__45719 = (0);
var i__45720 = (0);
while(true){
if((i__45720 < count__45719)){
var role = chunk__45718.cljs$core$IIndexed$_nth$arity$2(null,i__45720);
var temp__5735__auto___45978__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45978__$1)){
var spec_45979 = temp__5735__auto___45978__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45979)], 0));
} else {
}


var G__45980 = seq__45717;
var G__45981 = chunk__45718;
var G__45982 = count__45719;
var G__45983 = (i__45720 + (1));
seq__45717 = G__45980;
chunk__45718 = G__45981;
count__45719 = G__45982;
i__45720 = G__45983;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45717);
if(temp__5735__auto____$1){
var seq__45717__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45717__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__45717__$1);
var G__45984 = cljs.core.chunk_rest(seq__45717__$1);
var G__45985 = c__4550__auto__;
var G__45986 = cljs.core.count(c__4550__auto__);
var G__45987 = (0);
seq__45717 = G__45984;
chunk__45718 = G__45985;
count__45719 = G__45986;
i__45720 = G__45987;
continue;
} else {
var role = cljs.core.first(seq__45717__$1);
var temp__5735__auto___45988__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45988__$2)){
var spec_45989 = temp__5735__auto___45988__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45989)], 0));
} else {
}


var G__45990 = cljs.core.next(seq__45717__$1);
var G__45991 = null;
var G__45992 = (0);
var G__45993 = (0);
seq__45717 = G__45990;
chunk__45718 = G__45991;
count__45719 = G__45992;
i__45720 = G__45993;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__45998 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45999 = cljs.core.ex_cause(t);
via = G__45998;
t = G__45999;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__45818 = datafied_throwable;
var map__45818__$1 = (((((!((map__45818 == null))))?(((((map__45818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45818):map__45818);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45818__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45818__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45818__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45819 = cljs.core.last(via);
var map__45819__$1 = (((((!((map__45819 == null))))?(((((map__45819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45819):map__45819);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45819__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45819__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45819__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45820 = data;
var map__45820__$1 = (((((!((map__45820 == null))))?(((((map__45820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45820):map__45820);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45820__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45820__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45820__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45821 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45821__$1 = (((((!((map__45821 == null))))?(((((map__45821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45821):map__45821);
var top_data = map__45821__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45821__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45829 = phase;
var G__45829__$1 = (((G__45829 instanceof cljs.core.Keyword))?G__45829.fqn:null);
switch (G__45829__$1) {
case "read-source":
var map__45830 = data;
var map__45830__$1 = (((((!((map__45830 == null))))?(((((map__45830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45830):map__45830);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45830__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45830__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45832 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45832__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45832,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45832);
var G__45832__$2 = (cljs.core.truth_((function (){var fexpr__45834 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45834.cljs$core$IFn$_invoke$arity$1 ? fexpr__45834.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45834.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45832__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45832__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45832__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45832__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45836 = top_data;
var G__45836__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45836,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45836);
var G__45836__$2 = (cljs.core.truth_((function (){var fexpr__45837 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45837.cljs$core$IFn$_invoke$arity$1 ? fexpr__45837.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45837.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45836__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45836__$1);
var G__45836__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45836__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45836__$2);
var G__45836__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45836__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45836__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45836__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45836__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45839 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45839,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45839,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45839,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45839,(3),null);
var G__45842 = top_data;
var G__45842__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45842,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45842);
var G__45842__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45842__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45842__$1);
var G__45842__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45842__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45842__$2);
var G__45842__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45842__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45842__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45842__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45842__$4;
}

break;
case "execution":
var vec__45851 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45851,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45851,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45851,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45851,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__45851,source__$1,method,file,line,G__45829,G__45829__$1,map__45818,map__45818__$1,via,trace,phase,map__45819,map__45819__$1,type,message,data,map__45820,map__45820__$1,problems,fn,caller,map__45821,map__45821__$1,top_data,source){
return (function (p1__45817_SHARP_){
var or__4131__auto__ = (p1__45817_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__45855 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45855.cljs$core$IFn$_invoke$arity$1 ? fexpr__45855.cljs$core$IFn$_invoke$arity$1(p1__45817_SHARP_) : fexpr__45855.call(null,p1__45817_SHARP_));
}
});})(vec__45851,source__$1,method,file,line,G__45829,G__45829__$1,map__45818,map__45818__$1,via,trace,phase,map__45819,map__45819__$1,type,message,data,map__45820,map__45820__$1,problems,fn,caller,map__45821,map__45821__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__45856 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45856__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45856,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45856);
var G__45856__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45856__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45856__$1);
var G__45856__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45856__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45856__$2);
var G__45856__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45856__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45856__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45856__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45856__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45829__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45860){
var map__45861 = p__45860;
var map__45861__$1 = (((((!((map__45861 == null))))?(((((map__45861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45861):map__45861);
var triage_data = map__45861__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45861__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45861__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45861__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45861__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45861__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45861__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45861__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45861__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__45863 = phase;
var G__45863__$1 = (((G__45863 instanceof cljs.core.Keyword))?G__45863.fqn:null);
switch (G__45863__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45864 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45865 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45866 = loc;
var G__45867 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45868_46106 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45869_46107 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45870_46108 = true;
var _STAR_print_fn_STAR__temp_val__45871_46109 = ((function (_STAR_print_newline_STAR__orig_val__45868_46106,_STAR_print_fn_STAR__orig_val__45869_46107,_STAR_print_newline_STAR__temp_val__45870_46108,sb__4661__auto__,G__45864,G__45865,G__45866,G__45863,G__45863__$1,loc,class_name,simple_class,cause_type,format,map__45861,map__45861__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__45868_46106,_STAR_print_fn_STAR__orig_val__45869_46107,_STAR_print_newline_STAR__temp_val__45870_46108,sb__4661__auto__,G__45864,G__45865,G__45866,G__45863,G__45863__$1,loc,class_name,simple_class,cause_type,format,map__45861,map__45861__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45870_46108;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45871_46109;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__45868_46106,_STAR_print_fn_STAR__orig_val__45869_46107,_STAR_print_newline_STAR__temp_val__45870_46108,_STAR_print_fn_STAR__temp_val__45871_46109,sb__4661__auto__,G__45864,G__45865,G__45866,G__45863,G__45863__$1,loc,class_name,simple_class,cause_type,format,map__45861,map__45861__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__45868_46106,_STAR_print_fn_STAR__orig_val__45869_46107,_STAR_print_newline_STAR__temp_val__45870_46108,_STAR_print_fn_STAR__temp_val__45871_46109,sb__4661__auto__,G__45864,G__45865,G__45866,G__45863,G__45863__$1,loc,class_name,simple_class,cause_type,format,map__45861,map__45861__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__45858_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45858_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__45868_46106,_STAR_print_fn_STAR__orig_val__45869_46107,_STAR_print_newline_STAR__temp_val__45870_46108,_STAR_print_fn_STAR__temp_val__45871_46109,sb__4661__auto__,G__45864,G__45865,G__45866,G__45863,G__45863__$1,loc,class_name,simple_class,cause_type,format,map__45861,map__45861__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__45868_46106,_STAR_print_fn_STAR__orig_val__45869_46107,_STAR_print_newline_STAR__temp_val__45870_46108,_STAR_print_fn_STAR__temp_val__45871_46109,sb__4661__auto__,G__45864,G__45865,G__45866,G__45863,G__45863__$1,loc,class_name,simple_class,cause_type,format,map__45861,map__45861__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45869_46107;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45868_46106;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45864,G__45865,G__45866,G__45867) : format.call(null,G__45864,G__45865,G__45866,G__45867));

break;
case "macroexpansion":
var G__45872 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45873 = cause_type;
var G__45874 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45875 = loc;
var G__45876 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45872,G__45873,G__45874,G__45875,G__45876) : format.call(null,G__45872,G__45873,G__45874,G__45875,G__45876));

break;
case "compile-syntax-check":
var G__45877 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45878 = cause_type;
var G__45879 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45880 = loc;
var G__45881 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45877,G__45878,G__45879,G__45880,G__45881) : format.call(null,G__45877,G__45878,G__45879,G__45880,G__45881));

break;
case "compilation":
var G__45882 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45883 = cause_type;
var G__45884 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45885 = loc;
var G__45886 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45882,G__45883,G__45884,G__45885,G__45886) : format.call(null,G__45882,G__45883,G__45884,G__45885,G__45886));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45887 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45888 = symbol;
var G__45889 = loc;
var G__45890 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45891_46114 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45892_46115 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45893_46116 = true;
var _STAR_print_fn_STAR__temp_val__45894_46117 = ((function (_STAR_print_newline_STAR__orig_val__45891_46114,_STAR_print_fn_STAR__orig_val__45892_46115,_STAR_print_newline_STAR__temp_val__45893_46116,sb__4661__auto__,G__45887,G__45888,G__45889,G__45863,G__45863__$1,loc,class_name,simple_class,cause_type,format,map__45861,map__45861__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__45891_46114,_STAR_print_fn_STAR__orig_val__45892_46115,_STAR_print_newline_STAR__temp_val__45893_46116,sb__4661__auto__,G__45887,G__45888,G__45889,G__45863,G__45863__$1,loc,class_name,simple_class,cause_type,format,map__45861,map__45861__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45893_46116;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45894_46117;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__45891_46114,_STAR_print_fn_STAR__orig_val__45892_46115,_STAR_print_newline_STAR__temp_val__45893_46116,_STAR_print_fn_STAR__temp_val__45894_46117,sb__4661__auto__,G__45887,G__45888,G__45889,G__45863,G__45863__$1,loc,class_name,simple_class,cause_type,format,map__45861,map__45861__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__45891_46114,_STAR_print_fn_STAR__orig_val__45892_46115,_STAR_print_newline_STAR__temp_val__45893_46116,_STAR_print_fn_STAR__temp_val__45894_46117,sb__4661__auto__,G__45887,G__45888,G__45889,G__45863,G__45863__$1,loc,class_name,simple_class,cause_type,format,map__45861,map__45861__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__45859_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45859_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__45891_46114,_STAR_print_fn_STAR__orig_val__45892_46115,_STAR_print_newline_STAR__temp_val__45893_46116,_STAR_print_fn_STAR__temp_val__45894_46117,sb__4661__auto__,G__45887,G__45888,G__45889,G__45863,G__45863__$1,loc,class_name,simple_class,cause_type,format,map__45861,map__45861__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__45891_46114,_STAR_print_fn_STAR__orig_val__45892_46115,_STAR_print_newline_STAR__temp_val__45893_46116,_STAR_print_fn_STAR__temp_val__45894_46117,sb__4661__auto__,G__45887,G__45888,G__45889,G__45863,G__45863__$1,loc,class_name,simple_class,cause_type,format,map__45861,map__45861__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45892_46115;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45891_46114;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45887,G__45888,G__45889,G__45890) : format.call(null,G__45887,G__45888,G__45889,G__45890));
} else {
var G__45895 = "Execution error%s at %s(%s).\n%s\n";
var G__45896 = cause_type;
var G__45897 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45898 = loc;
var G__45899 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45895,G__45896,G__45897,G__45898,G__45899) : format.call(null,G__45895,G__45896,G__45897,G__45898,G__45899));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45863__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
