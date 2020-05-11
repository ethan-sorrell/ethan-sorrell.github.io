goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52004 = arguments.length;
var i__4731__auto___52005 = (0);
while(true){
if((i__4731__auto___52005 < len__4730__auto___52004)){
args__4736__auto__.push((arguments[i__4731__auto___52005]));

var G__52008 = (i__4731__auto___52005 + (1));
i__4731__auto___52005 = G__52008;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq51523){
var G__51524 = cljs.core.first(seq51523);
var seq51523__$1 = cljs.core.next(seq51523);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51524,seq51523__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__51544){
var map__51545 = p__51544;
var map__51545__$1 = (((((!((map__51545 == null))))?(((((map__51545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51545):map__51545);
var src = map__51545__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51545__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51545__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__51549 = cljs.core.seq(sources);
var chunk__51550 = null;
var count__51551 = (0);
var i__51552 = (0);
while(true){
if((i__51552 < count__51551)){
var map__51564 = chunk__51550.cljs$core$IIndexed$_nth$arity$2(null,i__51552);
var map__51564__$1 = (((((!((map__51564 == null))))?(((((map__51564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51564):map__51564);
var src = map__51564__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51564__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51564__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51564__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51564__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e51568){var e_52031 = e51568;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52031);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52031.message)].join('')));
}

var G__52032 = seq__51549;
var G__52033 = chunk__51550;
var G__52034 = count__51551;
var G__52035 = (i__51552 + (1));
seq__51549 = G__52032;
chunk__51550 = G__52033;
count__51551 = G__52034;
i__51552 = G__52035;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51549);
if(temp__5735__auto__){
var seq__51549__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51549__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51549__$1);
var G__52039 = cljs.core.chunk_rest(seq__51549__$1);
var G__52040 = c__4550__auto__;
var G__52041 = cljs.core.count(c__4550__auto__);
var G__52042 = (0);
seq__51549 = G__52039;
chunk__51550 = G__52040;
count__51551 = G__52041;
i__51552 = G__52042;
continue;
} else {
var map__51573 = cljs.core.first(seq__51549__$1);
var map__51573__$1 = (((((!((map__51573 == null))))?(((((map__51573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51573):map__51573);
var src = map__51573__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51573__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51573__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51573__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51573__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e51576){var e_52049 = e51576;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52049);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52049.message)].join('')));
}

var G__52050 = cljs.core.next(seq__51549__$1);
var G__52051 = null;
var G__52052 = (0);
var G__52053 = (0);
seq__51549 = G__52050;
chunk__51550 = G__52051;
count__51551 = G__52052;
i__51552 = G__52053;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__51580 = cljs.core.seq(js_requires);
var chunk__51581 = null;
var count__51582 = (0);
var i__51583 = (0);
while(true){
if((i__51583 < count__51582)){
var js_ns = chunk__51581.cljs$core$IIndexed$_nth$arity$2(null,i__51583);
var require_str_52063 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52063);


var G__52064 = seq__51580;
var G__52065 = chunk__51581;
var G__52066 = count__51582;
var G__52067 = (i__51583 + (1));
seq__51580 = G__52064;
chunk__51581 = G__52065;
count__51582 = G__52066;
i__51583 = G__52067;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51580);
if(temp__5735__auto__){
var seq__51580__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51580__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51580__$1);
var G__52071 = cljs.core.chunk_rest(seq__51580__$1);
var G__52072 = c__4550__auto__;
var G__52073 = cljs.core.count(c__4550__auto__);
var G__52074 = (0);
seq__51580 = G__52071;
chunk__51581 = G__52072;
count__51582 = G__52073;
i__51583 = G__52074;
continue;
} else {
var js_ns = cljs.core.first(seq__51580__$1);
var require_str_52077 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52077);


var G__52078 = cljs.core.next(seq__51580__$1);
var G__52079 = null;
var G__52080 = (0);
var G__52081 = (0);
seq__51580 = G__52078;
chunk__51581 = G__52079;
count__51582 = G__52080;
i__51583 = G__52081;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__51586 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__51586) : callback.call(null,G__51586));
} else {
var G__51587 = shadow.cljs.devtools.client.env.files_url();
var G__51588 = ((function (G__51587){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__51587))
;
var G__51589 = "POST";
var G__51590 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__51591 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__51587,G__51588,G__51589,G__51590,G__51591);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__51597){
var map__51598 = p__51597;
var map__51598__$1 = (((((!((map__51598 == null))))?(((((map__51598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51598):map__51598);
var msg = map__51598__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51598__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51598__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__51601 = info;
var map__51601__$1 = (((((!((map__51601 == null))))?(((((map__51601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51601):map__51601);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51601__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51601__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__51601,map__51601__$1,sources,compiled,map__51598,map__51598__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51603(s__51604){
return (new cljs.core.LazySeq(null,((function (map__51601,map__51601__$1,sources,compiled,map__51598,map__51598__$1,msg,info,reload_info){
return (function (){
var s__51604__$1 = s__51604;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51604__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__51612 = cljs.core.first(xs__6292__auto__);
var map__51612__$1 = (((((!((map__51612 == null))))?(((((map__51612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51612):map__51612);
var src = map__51612__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51612__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51612__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__51604__$1,map__51612,map__51612__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51601,map__51601__$1,sources,compiled,map__51598,map__51598__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51603_$_iter__51605(s__51606){
return (new cljs.core.LazySeq(null,((function (s__51604__$1,map__51612,map__51612__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51601,map__51601__$1,sources,compiled,map__51598,map__51598__$1,msg,info,reload_info){
return (function (){
var s__51606__$1 = s__51606;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__51606__$1);
if(temp__5735__auto____$1){
var s__51606__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51606__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__51606__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__51608 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__51607 = (0);
while(true){
if((i__51607 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__51607);
cljs.core.chunk_append(b__51608,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__52108 = (i__51607 + (1));
i__51607 = G__52108;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51608),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51603_$_iter__51605(cljs.core.chunk_rest(s__51606__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51608),null);
}
} else {
var warning = cljs.core.first(s__51606__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51603_$_iter__51605(cljs.core.rest(s__51606__$2)));
}
} else {
return null;
}
break;
}
});})(s__51604__$1,map__51612,map__51612__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51601,map__51601__$1,sources,compiled,map__51598,map__51598__$1,msg,info,reload_info))
,null,null));
});})(s__51604__$1,map__51612,map__51612__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51601,map__51601__$1,sources,compiled,map__51598,map__51598__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51603(cljs.core.rest(s__51604__$1)));
} else {
var G__52114 = cljs.core.rest(s__51604__$1);
s__51604__$1 = G__52114;
continue;
}
} else {
var G__52116 = cljs.core.rest(s__51604__$1);
s__51604__$1 = G__52116;
continue;
}
} else {
return null;
}
break;
}
});})(map__51601,map__51601__$1,sources,compiled,map__51598,map__51598__$1,msg,info,reload_info))
,null,null));
});})(map__51601,map__51601__$1,sources,compiled,map__51598,map__51598__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__51615_52120 = cljs.core.seq(warnings);
var chunk__51632_52121 = null;
var count__51633_52122 = (0);
var i__51634_52123 = (0);
while(true){
if((i__51634_52123 < count__51633_52122)){
var map__51668_52124 = chunk__51632_52121.cljs$core$IIndexed$_nth$arity$2(null,i__51634_52123);
var map__51668_52125__$1 = (((((!((map__51668_52124 == null))))?(((((map__51668_52124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51668_52124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51668_52124):map__51668_52124);
var w_52126 = map__51668_52125__$1;
var msg_52127__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51668_52125__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51668_52125__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51668_52125__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51668_52125__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52130)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52128),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52129),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52127__$1)].join(''));


var G__52136 = seq__51615_52120;
var G__52137 = chunk__51632_52121;
var G__52138 = count__51633_52122;
var G__52139 = (i__51634_52123 + (1));
seq__51615_52120 = G__52136;
chunk__51632_52121 = G__52137;
count__51633_52122 = G__52138;
i__51634_52123 = G__52139;
continue;
} else {
var temp__5735__auto___52140 = cljs.core.seq(seq__51615_52120);
if(temp__5735__auto___52140){
var seq__51615_52141__$1 = temp__5735__auto___52140;
if(cljs.core.chunked_seq_QMARK_(seq__51615_52141__$1)){
var c__4550__auto___52143 = cljs.core.chunk_first(seq__51615_52141__$1);
var G__52144 = cljs.core.chunk_rest(seq__51615_52141__$1);
var G__52145 = c__4550__auto___52143;
var G__52146 = cljs.core.count(c__4550__auto___52143);
var G__52147 = (0);
seq__51615_52120 = G__52144;
chunk__51632_52121 = G__52145;
count__51633_52122 = G__52146;
i__51634_52123 = G__52147;
continue;
} else {
var map__51679_52148 = cljs.core.first(seq__51615_52141__$1);
var map__51679_52149__$1 = (((((!((map__51679_52148 == null))))?(((((map__51679_52148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51679_52148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51679_52148):map__51679_52148);
var w_52150 = map__51679_52149__$1;
var msg_52151__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51679_52149__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51679_52149__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51679_52149__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51679_52149__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52154)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52152),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52153),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52151__$1)].join(''));


var G__52159 = cljs.core.next(seq__51615_52141__$1);
var G__52160 = null;
var G__52161 = (0);
var G__52162 = (0);
seq__51615_52120 = G__52159;
chunk__51632_52121 = G__52160;
count__51633_52122 = G__52161;
i__51634_52123 = G__52162;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__51601,map__51601__$1,sources,compiled,warnings,map__51598,map__51598__$1,msg,info,reload_info){
return (function (p__51684){
var map__51687 = p__51684;
var map__51687__$1 = (((((!((map__51687 == null))))?(((((map__51687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51687):map__51687);
var src = map__51687__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51687__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51687__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__51601,map__51601__$1,sources,compiled,warnings,map__51598,map__51598__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__51601,map__51601__$1,sources,compiled,warnings,map__51598,map__51598__$1,msg,info,reload_info){
return (function (p__51695){
var map__51696 = p__51695;
var map__51696__$1 = (((((!((map__51696 == null))))?(((((map__51696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51696):map__51696);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51696__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__51601,map__51601__$1,sources,compiled,warnings,map__51598,map__51598__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__51601,map__51601__$1,sources,compiled,warnings,map__51598,map__51598__$1,msg,info,reload_info){
return (function (p__51701){
var map__51702 = p__51701;
var map__51702__$1 = (((((!((map__51702 == null))))?(((((map__51702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51702):map__51702);
var rc = map__51702__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51702__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__51601,map__51601__$1,sources,compiled,warnings,map__51598,map__51598__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__51601,map__51601__$1,sources,compiled,warnings,map__51598,map__51598__$1,msg,info,reload_info){
return (function (p1__51596_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__51596_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__51601,map__51601__$1,sources,compiled,warnings,map__51598,map__51598__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__51714){
var map__51715 = p__51714;
var map__51715__$1 = (((((!((map__51715 == null))))?(((((map__51715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51715):map__51715);
var msg = map__51715__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51715__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__51717 = cljs.core.seq(updates);
var chunk__51719 = null;
var count__51720 = (0);
var i__51721 = (0);
while(true){
if((i__51721 < count__51720)){
var path = chunk__51719.cljs$core$IIndexed$_nth$arity$2(null,i__51721);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51773_52184 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51776_52185 = null;
var count__51777_52186 = (0);
var i__51778_52187 = (0);
while(true){
if((i__51778_52187 < count__51777_52186)){
var node_52188 = chunk__51776_52185.cljs$core$IIndexed$_nth$arity$2(null,i__51778_52187);
var path_match_52189 = shadow.cljs.devtools.client.browser.match_paths(node_52188.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52189)){
var new_link_52191 = (function (){var G__51813 = node_52188.cloneNode(true);
G__51813.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52189),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51813;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52189], 0));

goog.dom.insertSiblingAfter(new_link_52191,node_52188);

goog.dom.removeNode(node_52188);


var G__52192 = seq__51773_52184;
var G__52193 = chunk__51776_52185;
var G__52194 = count__51777_52186;
var G__52195 = (i__51778_52187 + (1));
seq__51773_52184 = G__52192;
chunk__51776_52185 = G__52193;
count__51777_52186 = G__52194;
i__51778_52187 = G__52195;
continue;
} else {
var G__52196 = seq__51773_52184;
var G__52197 = chunk__51776_52185;
var G__52198 = count__51777_52186;
var G__52199 = (i__51778_52187 + (1));
seq__51773_52184 = G__52196;
chunk__51776_52185 = G__52197;
count__51777_52186 = G__52198;
i__51778_52187 = G__52199;
continue;
}
} else {
var temp__5735__auto___52200 = cljs.core.seq(seq__51773_52184);
if(temp__5735__auto___52200){
var seq__51773_52202__$1 = temp__5735__auto___52200;
if(cljs.core.chunked_seq_QMARK_(seq__51773_52202__$1)){
var c__4550__auto___52204 = cljs.core.chunk_first(seq__51773_52202__$1);
var G__52205 = cljs.core.chunk_rest(seq__51773_52202__$1);
var G__52206 = c__4550__auto___52204;
var G__52207 = cljs.core.count(c__4550__auto___52204);
var G__52208 = (0);
seq__51773_52184 = G__52205;
chunk__51776_52185 = G__52206;
count__51777_52186 = G__52207;
i__51778_52187 = G__52208;
continue;
} else {
var node_52210 = cljs.core.first(seq__51773_52202__$1);
var path_match_52212 = shadow.cljs.devtools.client.browser.match_paths(node_52210.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52212)){
var new_link_52214 = (function (){var G__51827 = node_52210.cloneNode(true);
G__51827.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52212),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51827;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52212], 0));

goog.dom.insertSiblingAfter(new_link_52214,node_52210);

goog.dom.removeNode(node_52210);


var G__52216 = cljs.core.next(seq__51773_52202__$1);
var G__52217 = null;
var G__52218 = (0);
var G__52219 = (0);
seq__51773_52184 = G__52216;
chunk__51776_52185 = G__52217;
count__51777_52186 = G__52218;
i__51778_52187 = G__52219;
continue;
} else {
var G__52220 = cljs.core.next(seq__51773_52202__$1);
var G__52221 = null;
var G__52222 = (0);
var G__52223 = (0);
seq__51773_52184 = G__52220;
chunk__51776_52185 = G__52221;
count__51777_52186 = G__52222;
i__51778_52187 = G__52223;
continue;
}
}
} else {
}
}
break;
}


var G__52224 = seq__51717;
var G__52225 = chunk__51719;
var G__52226 = count__51720;
var G__52227 = (i__51721 + (1));
seq__51717 = G__52224;
chunk__51719 = G__52225;
count__51720 = G__52226;
i__51721 = G__52227;
continue;
} else {
var G__52229 = seq__51717;
var G__52230 = chunk__51719;
var G__52231 = count__51720;
var G__52232 = (i__51721 + (1));
seq__51717 = G__52229;
chunk__51719 = G__52230;
count__51720 = G__52231;
i__51721 = G__52232;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51717);
if(temp__5735__auto__){
var seq__51717__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51717__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51717__$1);
var G__52236 = cljs.core.chunk_rest(seq__51717__$1);
var G__52237 = c__4550__auto__;
var G__52238 = cljs.core.count(c__4550__auto__);
var G__52239 = (0);
seq__51717 = G__52236;
chunk__51719 = G__52237;
count__51720 = G__52238;
i__51721 = G__52239;
continue;
} else {
var path = cljs.core.first(seq__51717__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51839_52240 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51842_52241 = null;
var count__51843_52242 = (0);
var i__51844_52243 = (0);
while(true){
if((i__51844_52243 < count__51843_52242)){
var node_52244 = chunk__51842_52241.cljs$core$IIndexed$_nth$arity$2(null,i__51844_52243);
var path_match_52246 = shadow.cljs.devtools.client.browser.match_paths(node_52244.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52246)){
var new_link_52247 = (function (){var G__51879 = node_52244.cloneNode(true);
G__51879.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52246),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51879;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52246], 0));

goog.dom.insertSiblingAfter(new_link_52247,node_52244);

goog.dom.removeNode(node_52244);


var G__52250 = seq__51839_52240;
var G__52251 = chunk__51842_52241;
var G__52252 = count__51843_52242;
var G__52253 = (i__51844_52243 + (1));
seq__51839_52240 = G__52250;
chunk__51842_52241 = G__52251;
count__51843_52242 = G__52252;
i__51844_52243 = G__52253;
continue;
} else {
var G__52256 = seq__51839_52240;
var G__52257 = chunk__51842_52241;
var G__52258 = count__51843_52242;
var G__52259 = (i__51844_52243 + (1));
seq__51839_52240 = G__52256;
chunk__51842_52241 = G__52257;
count__51843_52242 = G__52258;
i__51844_52243 = G__52259;
continue;
}
} else {
var temp__5735__auto___52260__$1 = cljs.core.seq(seq__51839_52240);
if(temp__5735__auto___52260__$1){
var seq__51839_52261__$1 = temp__5735__auto___52260__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51839_52261__$1)){
var c__4550__auto___52262 = cljs.core.chunk_first(seq__51839_52261__$1);
var G__52264 = cljs.core.chunk_rest(seq__51839_52261__$1);
var G__52265 = c__4550__auto___52262;
var G__52266 = cljs.core.count(c__4550__auto___52262);
var G__52267 = (0);
seq__51839_52240 = G__52264;
chunk__51842_52241 = G__52265;
count__51843_52242 = G__52266;
i__51844_52243 = G__52267;
continue;
} else {
var node_52268 = cljs.core.first(seq__51839_52261__$1);
var path_match_52269 = shadow.cljs.devtools.client.browser.match_paths(node_52268.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52269)){
var new_link_52272 = (function (){var G__51886 = node_52268.cloneNode(true);
G__51886.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52269),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51886;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52269], 0));

goog.dom.insertSiblingAfter(new_link_52272,node_52268);

goog.dom.removeNode(node_52268);


var G__52275 = cljs.core.next(seq__51839_52261__$1);
var G__52276 = null;
var G__52277 = (0);
var G__52278 = (0);
seq__51839_52240 = G__52275;
chunk__51842_52241 = G__52276;
count__51843_52242 = G__52277;
i__51844_52243 = G__52278;
continue;
} else {
var G__52280 = cljs.core.next(seq__51839_52261__$1);
var G__52281 = null;
var G__52282 = (0);
var G__52283 = (0);
seq__51839_52240 = G__52280;
chunk__51842_52241 = G__52281;
count__51843_52242 = G__52282;
i__51844_52243 = G__52283;
continue;
}
}
} else {
}
}
break;
}


var G__52285 = cljs.core.next(seq__51717__$1);
var G__52286 = null;
var G__52287 = (0);
var G__52288 = (0);
seq__51717 = G__52285;
chunk__51719 = G__52286;
count__51720 = G__52287;
i__51721 = G__52288;
continue;
} else {
var G__52290 = cljs.core.next(seq__51717__$1);
var G__52291 = null;
var G__52292 = (0);
var G__52293 = (0);
seq__51717 = G__52290;
chunk__51719 = G__52291;
count__51720 = G__52292;
i__51721 = G__52293;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
return (0,eval)(js);;
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__51902){
var map__51904 = p__51902;
var map__51904__$1 = (((((!((map__51904 == null))))?(((((map__51904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51904):map__51904);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51904__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51904__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__51904,map__51904__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__51904,map__51904__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__51913,done){
var map__51914 = p__51913;
var map__51914__$1 = (((((!((map__51914 == null))))?(((((map__51914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51914):map__51914);
var msg = map__51914__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51914__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51914__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51914__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51914__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__51914,map__51914__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__51917){
var map__51918 = p__51917;
var map__51918__$1 = (((((!((map__51918 == null))))?(((((map__51918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51918):map__51918);
var src = map__51918__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51918__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__51914,map__51914__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__51914,map__51914__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e51928){var e = e51928;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}});})(sources_to_load,map__51914,map__51914__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__51936,done){
var map__51937 = p__51936;
var map__51937__$1 = (((((!((map__51937 == null))))?(((((map__51937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51937):map__51937);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51937__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51937__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__51937,map__51937__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__51937,map__51937__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__51940){
var map__51941 = p__51940;
var map__51941__$1 = (((((!((map__51941 == null))))?(((((map__51941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51941):map__51941);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51941__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51941__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__51953,done){
var map__51955 = p__51953;
var map__51955__$1 = (((((!((map__51955 == null))))?(((((map__51955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51955):map__51955);
var msg = map__51955__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51955__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__51961_52345 = type;
var G__51961_52346__$1 = (((G__51961_52345 instanceof cljs.core.Keyword))?G__51961_52345.fqn:null);
switch (G__51961_52346__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__51968 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__51969 = ((function (G__51968){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__51968))
;
var G__51970 = "POST";
var G__51971 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__51972 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__51968,G__51969,G__51970,G__51971,G__51972);
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

return socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;
}catch (e51981){var e = e51981;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___52379 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___52379)){
var s_52381 = temp__5735__auto___52379;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_52381.onclose = ((function (s_52381,temp__5735__auto___52379){
return (function (e){
return null;
});})(s_52381,temp__5735__auto___52379))
;

s_52381.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
