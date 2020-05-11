goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__49066 = coll;
var G__49067 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__49066,G__49067) : shadow.dom.lazy_native_coll_seq.call(null,G__49066,G__49067));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__49095 = arguments.length;
switch (G__49095) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__49104 = arguments.length;
switch (G__49104) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__49111 = arguments.length;
switch (G__49111) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__49119 = arguments.length;
switch (G__49119) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__49125 = arguments.length;
switch (G__49125) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__49127 = document;
var G__49128 = shadow.dom.dom_node(el);
return goog.dom.contains(G__49127,G__49128);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__49130 = shadow.dom.dom_node(parent);
var G__49131 = shadow.dom.dom_node(el);
return goog.dom.contains(G__49130,G__49131);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__49133 = shadow.dom.dom_node(el);
var G__49134 = cls;
return goog.dom.classlist.add(G__49133,G__49134);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__49137 = shadow.dom.dom_node(el);
var G__49138 = cls;
return goog.dom.classlist.remove(G__49137,G__49138);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__49143 = arguments.length;
switch (G__49143) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__49145 = shadow.dom.dom_node(el);
var G__49146 = cls;
return goog.dom.classlist.toggle(G__49145,G__49146);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e49152){if((e49152 instanceof Object)){
var e = e49152;
return console.log("didnt support attachEvent",el,e);
} else {
throw e49152;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__49161 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__49162 = null;
var count__49163 = (0);
var i__49164 = (0);
while(true){
if((i__49164 < count__49163)){
var el = chunk__49162.cljs$core$IIndexed$_nth$arity$2(null,i__49164);
var handler_49845__$1 = ((function (seq__49161,chunk__49162,count__49163,i__49164,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__49161,chunk__49162,count__49163,i__49164,el))
;
var G__49178_49846 = el;
var G__49179_49847 = cljs.core.name(ev);
var G__49180_49848 = handler_49845__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__49178_49846,G__49179_49847,G__49180_49848) : shadow.dom.dom_listen.call(null,G__49178_49846,G__49179_49847,G__49180_49848));


var G__49852 = seq__49161;
var G__49853 = chunk__49162;
var G__49854 = count__49163;
var G__49855 = (i__49164 + (1));
seq__49161 = G__49852;
chunk__49162 = G__49853;
count__49163 = G__49854;
i__49164 = G__49855;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49161);
if(temp__5735__auto__){
var seq__49161__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49161__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49161__$1);
var G__49856 = cljs.core.chunk_rest(seq__49161__$1);
var G__49857 = c__4550__auto__;
var G__49858 = cljs.core.count(c__4550__auto__);
var G__49859 = (0);
seq__49161 = G__49856;
chunk__49162 = G__49857;
count__49163 = G__49858;
i__49164 = G__49859;
continue;
} else {
var el = cljs.core.first(seq__49161__$1);
var handler_49860__$1 = ((function (seq__49161,chunk__49162,count__49163,i__49164,el,seq__49161__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__49161,chunk__49162,count__49163,i__49164,el,seq__49161__$1,temp__5735__auto__))
;
var G__49184_49861 = el;
var G__49185_49862 = cljs.core.name(ev);
var G__49186_49863 = handler_49860__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__49184_49861,G__49185_49862,G__49186_49863) : shadow.dom.dom_listen.call(null,G__49184_49861,G__49185_49862,G__49186_49863));


var G__49865 = cljs.core.next(seq__49161__$1);
var G__49866 = null;
var G__49867 = (0);
var G__49868 = (0);
seq__49161 = G__49865;
chunk__49162 = G__49866;
count__49163 = G__49867;
i__49164 = G__49868;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__49192 = arguments.length;
switch (G__49192) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__49196 = shadow.dom.dom_node(el);
var G__49197 = cljs.core.name(ev);
var G__49198 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__49196,G__49197,G__49198) : shadow.dom.dom_listen.call(null,G__49196,G__49197,G__49198));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__49204 = shadow.dom.dom_node(el);
var G__49205 = cljs.core.name(ev);
var G__49206 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__49204,G__49205,G__49206) : shadow.dom.dom_listen_remove.call(null,G__49204,G__49205,G__49206));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__49209 = cljs.core.seq(events);
var chunk__49210 = null;
var count__49211 = (0);
var i__49212 = (0);
while(true){
if((i__49212 < count__49211)){
var vec__49231 = chunk__49210.cljs$core$IIndexed$_nth$arity$2(null,i__49212);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49231,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49231,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49875 = seq__49209;
var G__49876 = chunk__49210;
var G__49877 = count__49211;
var G__49878 = (i__49212 + (1));
seq__49209 = G__49875;
chunk__49210 = G__49876;
count__49211 = G__49877;
i__49212 = G__49878;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49209);
if(temp__5735__auto__){
var seq__49209__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49209__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49209__$1);
var G__49879 = cljs.core.chunk_rest(seq__49209__$1);
var G__49880 = c__4550__auto__;
var G__49881 = cljs.core.count(c__4550__auto__);
var G__49882 = (0);
seq__49209 = G__49879;
chunk__49210 = G__49880;
count__49211 = G__49881;
i__49212 = G__49882;
continue;
} else {
var vec__49237 = cljs.core.first(seq__49209__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49237,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49237,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49883 = cljs.core.next(seq__49209__$1);
var G__49884 = null;
var G__49885 = (0);
var G__49886 = (0);
seq__49209 = G__49883;
chunk__49210 = G__49884;
count__49211 = G__49885;
i__49212 = G__49886;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__49243 = cljs.core.seq(styles);
var chunk__49244 = null;
var count__49245 = (0);
var i__49246 = (0);
while(true){
if((i__49246 < count__49245)){
var vec__49276 = chunk__49244.cljs$core$IIndexed$_nth$arity$2(null,i__49246);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49276,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49276,(1),null);
var G__49281_49890 = dom;
var G__49282_49891 = cljs.core.name(k);
var G__49283_49892 = (((v == null))?"":v);
goog.style.setStyle(G__49281_49890,G__49282_49891,G__49283_49892);


var G__49893 = seq__49243;
var G__49894 = chunk__49244;
var G__49895 = count__49245;
var G__49896 = (i__49246 + (1));
seq__49243 = G__49893;
chunk__49244 = G__49894;
count__49245 = G__49895;
i__49246 = G__49896;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49243);
if(temp__5735__auto__){
var seq__49243__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49243__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49243__$1);
var G__49898 = cljs.core.chunk_rest(seq__49243__$1);
var G__49899 = c__4550__auto__;
var G__49900 = cljs.core.count(c__4550__auto__);
var G__49901 = (0);
seq__49243 = G__49898;
chunk__49244 = G__49899;
count__49245 = G__49900;
i__49246 = G__49901;
continue;
} else {
var vec__49290 = cljs.core.first(seq__49243__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49290,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49290,(1),null);
var G__49293_49903 = dom;
var G__49294_49904 = cljs.core.name(k);
var G__49295_49905 = (((v == null))?"":v);
goog.style.setStyle(G__49293_49903,G__49294_49904,G__49295_49905);


var G__49908 = cljs.core.next(seq__49243__$1);
var G__49909 = null;
var G__49910 = (0);
var G__49911 = (0);
seq__49243 = G__49908;
chunk__49244 = G__49909;
count__49245 = G__49910;
i__49246 = G__49911;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__49299_49914 = key;
var G__49299_49915__$1 = (((G__49299_49914 instanceof cljs.core.Keyword))?G__49299_49914.fqn:null);
switch (G__49299_49915__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_49923 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_49923,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_49923,"aria-");
}
})())){
el.setAttribute(ks_49923,value);
} else {
(el[ks_49923] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__49322 = shadow.dom.dom_node(el);
var G__49323 = cls;
return goog.dom.classlist.contains(G__49322,G__49323);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__49337){
var map__49338 = p__49337;
var map__49338__$1 = (((((!((map__49338 == null))))?(((((map__49338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49338):map__49338);
var props = map__49338__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49338__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__49345 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49345,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49345,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49345,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__49350 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__49350,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__49350;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__49356 = arguments.length;
switch (G__49356) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__49372){
var vec__49374 = p__49372;
var seq__49375 = cljs.core.seq(vec__49374);
var first__49376 = cljs.core.first(seq__49375);
var seq__49375__$1 = cljs.core.next(seq__49375);
var nn = first__49376;
var first__49376__$1 = cljs.core.first(seq__49375__$1);
var seq__49375__$2 = cljs.core.next(seq__49375__$1);
var np = first__49376__$1;
var nc = seq__49375__$2;
var node = vec__49374;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49378 = nn;
var G__49379 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__49378,G__49379) : create_fn.call(null,G__49378,G__49379));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49380 = nn;
var G__49381 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__49380,G__49381) : create_fn.call(null,G__49380,G__49381));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__49383 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49383,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49383,(1),null);
var seq__49386_49930 = cljs.core.seq(node_children);
var chunk__49387_49931 = null;
var count__49388_49932 = (0);
var i__49389_49933 = (0);
while(true){
if((i__49389_49933 < count__49388_49932)){
var child_struct_49934 = chunk__49387_49931.cljs$core$IIndexed$_nth$arity$2(null,i__49389_49933);
var children_49935 = shadow.dom.dom_node(child_struct_49934);
if(cljs.core.seq_QMARK_(children_49935)){
var seq__49410_49938 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49935));
var chunk__49412_49939 = null;
var count__49413_49940 = (0);
var i__49414_49941 = (0);
while(true){
if((i__49414_49941 < count__49413_49940)){
var child_49943 = chunk__49412_49939.cljs$core$IIndexed$_nth$arity$2(null,i__49414_49941);
if(cljs.core.truth_(child_49943)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49943);


var G__49944 = seq__49410_49938;
var G__49945 = chunk__49412_49939;
var G__49946 = count__49413_49940;
var G__49947 = (i__49414_49941 + (1));
seq__49410_49938 = G__49944;
chunk__49412_49939 = G__49945;
count__49413_49940 = G__49946;
i__49414_49941 = G__49947;
continue;
} else {
var G__49950 = seq__49410_49938;
var G__49951 = chunk__49412_49939;
var G__49952 = count__49413_49940;
var G__49953 = (i__49414_49941 + (1));
seq__49410_49938 = G__49950;
chunk__49412_49939 = G__49951;
count__49413_49940 = G__49952;
i__49414_49941 = G__49953;
continue;
}
} else {
var temp__5735__auto___49955 = cljs.core.seq(seq__49410_49938);
if(temp__5735__auto___49955){
var seq__49410_49957__$1 = temp__5735__auto___49955;
if(cljs.core.chunked_seq_QMARK_(seq__49410_49957__$1)){
var c__4550__auto___49960 = cljs.core.chunk_first(seq__49410_49957__$1);
var G__49961 = cljs.core.chunk_rest(seq__49410_49957__$1);
var G__49962 = c__4550__auto___49960;
var G__49963 = cljs.core.count(c__4550__auto___49960);
var G__49964 = (0);
seq__49410_49938 = G__49961;
chunk__49412_49939 = G__49962;
count__49413_49940 = G__49963;
i__49414_49941 = G__49964;
continue;
} else {
var child_49967 = cljs.core.first(seq__49410_49957__$1);
if(cljs.core.truth_(child_49967)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49967);


var G__49969 = cljs.core.next(seq__49410_49957__$1);
var G__49970 = null;
var G__49971 = (0);
var G__49972 = (0);
seq__49410_49938 = G__49969;
chunk__49412_49939 = G__49970;
count__49413_49940 = G__49971;
i__49414_49941 = G__49972;
continue;
} else {
var G__49973 = cljs.core.next(seq__49410_49957__$1);
var G__49974 = null;
var G__49975 = (0);
var G__49976 = (0);
seq__49410_49938 = G__49973;
chunk__49412_49939 = G__49974;
count__49413_49940 = G__49975;
i__49414_49941 = G__49976;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49935);
}


var G__49977 = seq__49386_49930;
var G__49978 = chunk__49387_49931;
var G__49979 = count__49388_49932;
var G__49980 = (i__49389_49933 + (1));
seq__49386_49930 = G__49977;
chunk__49387_49931 = G__49978;
count__49388_49932 = G__49979;
i__49389_49933 = G__49980;
continue;
} else {
var temp__5735__auto___49981 = cljs.core.seq(seq__49386_49930);
if(temp__5735__auto___49981){
var seq__49386_49982__$1 = temp__5735__auto___49981;
if(cljs.core.chunked_seq_QMARK_(seq__49386_49982__$1)){
var c__4550__auto___49984 = cljs.core.chunk_first(seq__49386_49982__$1);
var G__49985 = cljs.core.chunk_rest(seq__49386_49982__$1);
var G__49986 = c__4550__auto___49984;
var G__49987 = cljs.core.count(c__4550__auto___49984);
var G__49988 = (0);
seq__49386_49930 = G__49985;
chunk__49387_49931 = G__49986;
count__49388_49932 = G__49987;
i__49389_49933 = G__49988;
continue;
} else {
var child_struct_49991 = cljs.core.first(seq__49386_49982__$1);
var children_49993 = shadow.dom.dom_node(child_struct_49991);
if(cljs.core.seq_QMARK_(children_49993)){
var seq__49430_49994 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49993));
var chunk__49432_49995 = null;
var count__49433_49996 = (0);
var i__49434_49997 = (0);
while(true){
if((i__49434_49997 < count__49433_49996)){
var child_49998 = chunk__49432_49995.cljs$core$IIndexed$_nth$arity$2(null,i__49434_49997);
if(cljs.core.truth_(child_49998)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49998);


var G__49999 = seq__49430_49994;
var G__50000 = chunk__49432_49995;
var G__50001 = count__49433_49996;
var G__50002 = (i__49434_49997 + (1));
seq__49430_49994 = G__49999;
chunk__49432_49995 = G__50000;
count__49433_49996 = G__50001;
i__49434_49997 = G__50002;
continue;
} else {
var G__50004 = seq__49430_49994;
var G__50005 = chunk__49432_49995;
var G__50006 = count__49433_49996;
var G__50007 = (i__49434_49997 + (1));
seq__49430_49994 = G__50004;
chunk__49432_49995 = G__50005;
count__49433_49996 = G__50006;
i__49434_49997 = G__50007;
continue;
}
} else {
var temp__5735__auto___50008__$1 = cljs.core.seq(seq__49430_49994);
if(temp__5735__auto___50008__$1){
var seq__49430_50010__$1 = temp__5735__auto___50008__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49430_50010__$1)){
var c__4550__auto___50013 = cljs.core.chunk_first(seq__49430_50010__$1);
var G__50014 = cljs.core.chunk_rest(seq__49430_50010__$1);
var G__50015 = c__4550__auto___50013;
var G__50016 = cljs.core.count(c__4550__auto___50013);
var G__50017 = (0);
seq__49430_49994 = G__50014;
chunk__49432_49995 = G__50015;
count__49433_49996 = G__50016;
i__49434_49997 = G__50017;
continue;
} else {
var child_50025 = cljs.core.first(seq__49430_50010__$1);
if(cljs.core.truth_(child_50025)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50025);


var G__50027 = cljs.core.next(seq__49430_50010__$1);
var G__50028 = null;
var G__50029 = (0);
var G__50030 = (0);
seq__49430_49994 = G__50027;
chunk__49432_49995 = G__50028;
count__49433_49996 = G__50029;
i__49434_49997 = G__50030;
continue;
} else {
var G__50032 = cljs.core.next(seq__49430_50010__$1);
var G__50033 = null;
var G__50034 = (0);
var G__50035 = (0);
seq__49430_49994 = G__50032;
chunk__49432_49995 = G__50033;
count__49433_49996 = G__50034;
i__49434_49997 = G__50035;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49993);
}


var G__50039 = cljs.core.next(seq__49386_49982__$1);
var G__50040 = null;
var G__50041 = (0);
var G__50042 = (0);
seq__49386_49930 = G__50039;
chunk__49387_49931 = G__50040;
count__49388_49932 = G__50041;
i__49389_49933 = G__50042;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__49473 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__49473);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__49478 = cljs.core.seq(node);
var chunk__49479 = null;
var count__49480 = (0);
var i__49481 = (0);
while(true){
if((i__49481 < count__49480)){
var n = chunk__49479.cljs$core$IIndexed$_nth$arity$2(null,i__49481);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__50066 = seq__49478;
var G__50067 = chunk__49479;
var G__50068 = count__49480;
var G__50069 = (i__49481 + (1));
seq__49478 = G__50066;
chunk__49479 = G__50067;
count__49480 = G__50068;
i__49481 = G__50069;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49478);
if(temp__5735__auto__){
var seq__49478__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49478__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49478__$1);
var G__50071 = cljs.core.chunk_rest(seq__49478__$1);
var G__50072 = c__4550__auto__;
var G__50073 = cljs.core.count(c__4550__auto__);
var G__50074 = (0);
seq__49478 = G__50071;
chunk__49479 = G__50072;
count__49480 = G__50073;
i__49481 = G__50074;
continue;
} else {
var n = cljs.core.first(seq__49478__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__50080 = cljs.core.next(seq__49478__$1);
var G__50081 = null;
var G__50082 = (0);
var G__50083 = (0);
seq__49478 = G__50080;
chunk__49479 = G__50081;
count__49480 = G__50082;
i__49481 = G__50083;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__49490 = shadow.dom.dom_node(new$);
var G__49491 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__49490,G__49491);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__49495 = arguments.length;
switch (G__49495) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__49503 = arguments.length;
switch (G__49503) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__49522 = arguments.length;
switch (G__49522) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___50103 = arguments.length;
var i__4731__auto___50104 = (0);
while(true){
if((i__4731__auto___50104 < len__4730__auto___50103)){
args__4736__auto__.push((arguments[i__4731__auto___50104]));

var G__50105 = (i__4731__auto___50104 + (1));
i__4731__auto___50104 = G__50105;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__49534_50109 = cljs.core.seq(nodes);
var chunk__49535_50110 = null;
var count__49536_50111 = (0);
var i__49537_50113 = (0);
while(true){
if((i__49537_50113 < count__49536_50111)){
var node_50115 = chunk__49535_50110.cljs$core$IIndexed$_nth$arity$2(null,i__49537_50113);
fragment.appendChild(shadow.dom._to_dom(node_50115));


var G__50116 = seq__49534_50109;
var G__50117 = chunk__49535_50110;
var G__50118 = count__49536_50111;
var G__50119 = (i__49537_50113 + (1));
seq__49534_50109 = G__50116;
chunk__49535_50110 = G__50117;
count__49536_50111 = G__50118;
i__49537_50113 = G__50119;
continue;
} else {
var temp__5735__auto___50120 = cljs.core.seq(seq__49534_50109);
if(temp__5735__auto___50120){
var seq__49534_50121__$1 = temp__5735__auto___50120;
if(cljs.core.chunked_seq_QMARK_(seq__49534_50121__$1)){
var c__4550__auto___50124 = cljs.core.chunk_first(seq__49534_50121__$1);
var G__50126 = cljs.core.chunk_rest(seq__49534_50121__$1);
var G__50127 = c__4550__auto___50124;
var G__50128 = cljs.core.count(c__4550__auto___50124);
var G__50129 = (0);
seq__49534_50109 = G__50126;
chunk__49535_50110 = G__50127;
count__49536_50111 = G__50128;
i__49537_50113 = G__50129;
continue;
} else {
var node_50130 = cljs.core.first(seq__49534_50121__$1);
fragment.appendChild(shadow.dom._to_dom(node_50130));


var G__50131 = cljs.core.next(seq__49534_50121__$1);
var G__50132 = null;
var G__50133 = (0);
var G__50134 = (0);
seq__49534_50109 = G__50131;
chunk__49535_50110 = G__50132;
count__49536_50111 = G__50133;
i__49537_50113 = G__50134;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq49532){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49532));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__49538_50139 = cljs.core.seq(scripts);
var chunk__49539_50140 = null;
var count__49540_50141 = (0);
var i__49541_50142 = (0);
while(true){
if((i__49541_50142 < count__49540_50141)){
var vec__49548_50144 = chunk__49539_50140.cljs$core$IIndexed$_nth$arity$2(null,i__49541_50142);
var script_tag_50145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49548_50144,(0),null);
var script_body_50146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49548_50144,(1),null);
eval(script_body_50146);


var G__50147 = seq__49538_50139;
var G__50148 = chunk__49539_50140;
var G__50149 = count__49540_50141;
var G__50150 = (i__49541_50142 + (1));
seq__49538_50139 = G__50147;
chunk__49539_50140 = G__50148;
count__49540_50141 = G__50149;
i__49541_50142 = G__50150;
continue;
} else {
var temp__5735__auto___50152 = cljs.core.seq(seq__49538_50139);
if(temp__5735__auto___50152){
var seq__49538_50153__$1 = temp__5735__auto___50152;
if(cljs.core.chunked_seq_QMARK_(seq__49538_50153__$1)){
var c__4550__auto___50154 = cljs.core.chunk_first(seq__49538_50153__$1);
var G__50155 = cljs.core.chunk_rest(seq__49538_50153__$1);
var G__50156 = c__4550__auto___50154;
var G__50157 = cljs.core.count(c__4550__auto___50154);
var G__50158 = (0);
seq__49538_50139 = G__50155;
chunk__49539_50140 = G__50156;
count__49540_50141 = G__50157;
i__49541_50142 = G__50158;
continue;
} else {
var vec__49551_50160 = cljs.core.first(seq__49538_50153__$1);
var script_tag_50161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49551_50160,(0),null);
var script_body_50162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49551_50160,(1),null);
eval(script_body_50162);


var G__50163 = cljs.core.next(seq__49538_50153__$1);
var G__50164 = null;
var G__50165 = (0);
var G__50166 = (0);
seq__49538_50139 = G__50163;
chunk__49539_50140 = G__50164;
count__49540_50141 = G__50165;
i__49541_50142 = G__50166;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__49554){
var vec__49555 = p__49554;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49555,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49555,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__49562 = shadow.dom.dom_node(el);
var G__49563 = cls;
return goog.dom.getAncestorByClass(G__49562,G__49563);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__49567 = arguments.length;
switch (G__49567) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__49568 = shadow.dom.dom_node(el);
var G__49569 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__49568,G__49569);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__49570 = shadow.dom.dom_node(el);
var G__49571 = cljs.core.name(tag);
var G__49572 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__49570,G__49571,G__49572);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__49573 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__49573);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__49574 = shadow.dom.dom_node(dom);
var G__49575 = value;
return goog.dom.forms.setValue(G__49574,G__49575);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__49576 = cljs.core.seq(style_keys);
var chunk__49577 = null;
var count__49578 = (0);
var i__49579 = (0);
while(true){
if((i__49579 < count__49578)){
var it = chunk__49577.cljs$core$IIndexed$_nth$arity$2(null,i__49579);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__50187 = seq__49576;
var G__50188 = chunk__49577;
var G__50189 = count__49578;
var G__50190 = (i__49579 + (1));
seq__49576 = G__50187;
chunk__49577 = G__50188;
count__49578 = G__50189;
i__49579 = G__50190;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49576);
if(temp__5735__auto__){
var seq__49576__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49576__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49576__$1);
var G__50192 = cljs.core.chunk_rest(seq__49576__$1);
var G__50193 = c__4550__auto__;
var G__50194 = cljs.core.count(c__4550__auto__);
var G__50195 = (0);
seq__49576 = G__50192;
chunk__49577 = G__50193;
count__49578 = G__50194;
i__49579 = G__50195;
continue;
} else {
var it = cljs.core.first(seq__49576__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__50203 = cljs.core.next(seq__49576__$1);
var G__50204 = null;
var G__50205 = (0);
var G__50206 = (0);
seq__49576 = G__50203;
chunk__49577 = G__50204;
count__49578 = G__50205;
i__49579 = G__50206;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k49581,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__49585 = k49581;
var G__49585__$1 = (((G__49585 instanceof cljs.core.Keyword))?G__49585.fqn:null);
switch (G__49585__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49581,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__49586){
var vec__49587 = p__49586;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49587,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49587,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49580){
var self__ = this;
var G__49580__$1 = this;
return (new cljs.core.RecordIter((0),G__49580__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__49594 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__49594(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49582,other49583){
var self__ = this;
var this49582__$1 = this;
return (((!((other49583 == null)))) && ((this49582__$1.constructor === other49583.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49582__$1.x,other49583.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49582__$1.y,other49583.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49582__$1.__extmap,other49583.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__49580){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__49602 = cljs.core.keyword_identical_QMARK_;
var expr__49603 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__49605 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__49606 = expr__49603;
return (pred__49602.cljs$core$IFn$_invoke$arity$2 ? pred__49602.cljs$core$IFn$_invoke$arity$2(G__49605,G__49606) : pred__49602.call(null,G__49605,G__49606));
})())){
return (new shadow.dom.Coordinate(G__49580,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49608 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__49609 = expr__49603;
return (pred__49602.cljs$core$IFn$_invoke$arity$2 ? pred__49602.cljs$core$IFn$_invoke$arity$2(G__49608,G__49609) : pred__49602.call(null,G__49608,G__49609));
})())){
return (new shadow.dom.Coordinate(self__.x,G__49580,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__49580),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__49580){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__49580,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__49584){
var extmap__4424__auto__ = (function (){var G__49616 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49584,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__49584)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49616);
} else {
return G__49616;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__49584),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__49584),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__49619 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__49619);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__49622 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__49622);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__49625 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__49625);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k49628,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__49636 = k49628;
var G__49636__$1 = (((G__49636 instanceof cljs.core.Keyword))?G__49636.fqn:null);
switch (G__49636__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49628,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__49638){
var vec__49639 = p__49638;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49639,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49639,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49627){
var self__ = this;
var G__49627__$1 = this;
return (new cljs.core.RecordIter((0),G__49627__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__49653 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__49653(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49629,other49630){
var self__ = this;
var this49629__$1 = this;
return (((!((other49630 == null)))) && ((this49629__$1.constructor === other49630.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49629__$1.w,other49630.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49629__$1.h,other49630.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49629__$1.__extmap,other49630.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__49627){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__49659 = cljs.core.keyword_identical_QMARK_;
var expr__49660 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__49662 = new cljs.core.Keyword(null,"w","w",354169001);
var G__49663 = expr__49660;
return (pred__49659.cljs$core$IFn$_invoke$arity$2 ? pred__49659.cljs$core$IFn$_invoke$arity$2(G__49662,G__49663) : pred__49659.call(null,G__49662,G__49663));
})())){
return (new shadow.dom.Size(G__49627,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49664 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__49665 = expr__49660;
return (pred__49659.cljs$core$IFn$_invoke$arity$2 ? pred__49659.cljs$core$IFn$_invoke$arity$2(G__49664,G__49665) : pred__49659.call(null,G__49664,G__49665));
})())){
return (new shadow.dom.Size(self__.w,G__49627,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__49627),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__49627){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__49627,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__49631){
var extmap__4424__auto__ = (function (){var G__49670 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49631,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__49631)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49670);
} else {
return G__49670;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__49631),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__49631),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__49673 = shadow.dom.dom_node(el);
return goog.style.getSize(G__49673);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__50286 = (i + (1));
var G__50287 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__50286;
ret = G__50287;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49679){
var vec__49680 = p__49679;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49680,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49680,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__49684 = arguments.length;
switch (G__49684) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__49686_50300 = new_node;
var G__49687_50301 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__49686_50300,G__49687_50301);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__49688_50303 = new_node;
var G__49689_50304 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__49688_50303,G__49689_50304);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__50307 = ps;
var G__50308 = (i + (1));
el__$1 = G__50307;
i = G__50308;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__49690 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__49690);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__49692 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__49692);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__49694 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__49694);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__49697 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49697,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49697,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49697,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__49701_50323 = cljs.core.seq(props);
var chunk__49702_50324 = null;
var count__49703_50325 = (0);
var i__49704_50326 = (0);
while(true){
if((i__49704_50326 < count__49703_50325)){
var vec__49716_50327 = chunk__49702_50324.cljs$core$IIndexed$_nth$arity$2(null,i__49704_50326);
var k_50328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49716_50327,(0),null);
var v_50329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49716_50327,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_50328);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_50328),v_50329);


var G__50331 = seq__49701_50323;
var G__50332 = chunk__49702_50324;
var G__50333 = count__49703_50325;
var G__50334 = (i__49704_50326 + (1));
seq__49701_50323 = G__50331;
chunk__49702_50324 = G__50332;
count__49703_50325 = G__50333;
i__49704_50326 = G__50334;
continue;
} else {
var temp__5735__auto___50335 = cljs.core.seq(seq__49701_50323);
if(temp__5735__auto___50335){
var seq__49701_50336__$1 = temp__5735__auto___50335;
if(cljs.core.chunked_seq_QMARK_(seq__49701_50336__$1)){
var c__4550__auto___50338 = cljs.core.chunk_first(seq__49701_50336__$1);
var G__50339 = cljs.core.chunk_rest(seq__49701_50336__$1);
var G__50340 = c__4550__auto___50338;
var G__50341 = cljs.core.count(c__4550__auto___50338);
var G__50342 = (0);
seq__49701_50323 = G__50339;
chunk__49702_50324 = G__50340;
count__49703_50325 = G__50341;
i__49704_50326 = G__50342;
continue;
} else {
var vec__49722_50343 = cljs.core.first(seq__49701_50336__$1);
var k_50344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49722_50343,(0),null);
var v_50345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49722_50343,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_50344);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_50344),v_50345);


var G__50348 = cljs.core.next(seq__49701_50336__$1);
var G__50349 = null;
var G__50350 = (0);
var G__50351 = (0);
seq__49701_50323 = G__50348;
chunk__49702_50324 = G__50349;
count__49703_50325 = G__50350;
i__49704_50326 = G__50351;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__49729 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49729,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49729,(1),null);
var seq__49732_50355 = cljs.core.seq(node_children);
var chunk__49734_50356 = null;
var count__49735_50357 = (0);
var i__49736_50358 = (0);
while(true){
if((i__49736_50358 < count__49735_50357)){
var child_struct_50359 = chunk__49734_50356.cljs$core$IIndexed$_nth$arity$2(null,i__49736_50358);
if((!((child_struct_50359 == null)))){
if(typeof child_struct_50359 === 'string'){
var text_50360 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_50360),child_struct_50359].join(''));
} else {
var children_50361 = shadow.dom.svg_node(child_struct_50359);
if(cljs.core.seq_QMARK_(children_50361)){
var seq__49759_50362 = cljs.core.seq(children_50361);
var chunk__49761_50363 = null;
var count__49762_50364 = (0);
var i__49763_50365 = (0);
while(true){
if((i__49763_50365 < count__49762_50364)){
var child_50366 = chunk__49761_50363.cljs$core$IIndexed$_nth$arity$2(null,i__49763_50365);
if(cljs.core.truth_(child_50366)){
node.appendChild(child_50366);


var G__50367 = seq__49759_50362;
var G__50368 = chunk__49761_50363;
var G__50369 = count__49762_50364;
var G__50370 = (i__49763_50365 + (1));
seq__49759_50362 = G__50367;
chunk__49761_50363 = G__50368;
count__49762_50364 = G__50369;
i__49763_50365 = G__50370;
continue;
} else {
var G__50371 = seq__49759_50362;
var G__50372 = chunk__49761_50363;
var G__50373 = count__49762_50364;
var G__50374 = (i__49763_50365 + (1));
seq__49759_50362 = G__50371;
chunk__49761_50363 = G__50372;
count__49762_50364 = G__50373;
i__49763_50365 = G__50374;
continue;
}
} else {
var temp__5735__auto___50375 = cljs.core.seq(seq__49759_50362);
if(temp__5735__auto___50375){
var seq__49759_50376__$1 = temp__5735__auto___50375;
if(cljs.core.chunked_seq_QMARK_(seq__49759_50376__$1)){
var c__4550__auto___50377 = cljs.core.chunk_first(seq__49759_50376__$1);
var G__50378 = cljs.core.chunk_rest(seq__49759_50376__$1);
var G__50379 = c__4550__auto___50377;
var G__50380 = cljs.core.count(c__4550__auto___50377);
var G__50381 = (0);
seq__49759_50362 = G__50378;
chunk__49761_50363 = G__50379;
count__49762_50364 = G__50380;
i__49763_50365 = G__50381;
continue;
} else {
var child_50382 = cljs.core.first(seq__49759_50376__$1);
if(cljs.core.truth_(child_50382)){
node.appendChild(child_50382);


var G__50383 = cljs.core.next(seq__49759_50376__$1);
var G__50384 = null;
var G__50385 = (0);
var G__50386 = (0);
seq__49759_50362 = G__50383;
chunk__49761_50363 = G__50384;
count__49762_50364 = G__50385;
i__49763_50365 = G__50386;
continue;
} else {
var G__50387 = cljs.core.next(seq__49759_50376__$1);
var G__50388 = null;
var G__50389 = (0);
var G__50390 = (0);
seq__49759_50362 = G__50387;
chunk__49761_50363 = G__50388;
count__49762_50364 = G__50389;
i__49763_50365 = G__50390;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_50361);
}
}


var G__50392 = seq__49732_50355;
var G__50393 = chunk__49734_50356;
var G__50394 = count__49735_50357;
var G__50395 = (i__49736_50358 + (1));
seq__49732_50355 = G__50392;
chunk__49734_50356 = G__50393;
count__49735_50357 = G__50394;
i__49736_50358 = G__50395;
continue;
} else {
var G__50396 = seq__49732_50355;
var G__50397 = chunk__49734_50356;
var G__50398 = count__49735_50357;
var G__50399 = (i__49736_50358 + (1));
seq__49732_50355 = G__50396;
chunk__49734_50356 = G__50397;
count__49735_50357 = G__50398;
i__49736_50358 = G__50399;
continue;
}
} else {
var temp__5735__auto___50400 = cljs.core.seq(seq__49732_50355);
if(temp__5735__auto___50400){
var seq__49732_50401__$1 = temp__5735__auto___50400;
if(cljs.core.chunked_seq_QMARK_(seq__49732_50401__$1)){
var c__4550__auto___50402 = cljs.core.chunk_first(seq__49732_50401__$1);
var G__50403 = cljs.core.chunk_rest(seq__49732_50401__$1);
var G__50404 = c__4550__auto___50402;
var G__50405 = cljs.core.count(c__4550__auto___50402);
var G__50406 = (0);
seq__49732_50355 = G__50403;
chunk__49734_50356 = G__50404;
count__49735_50357 = G__50405;
i__49736_50358 = G__50406;
continue;
} else {
var child_struct_50407 = cljs.core.first(seq__49732_50401__$1);
if((!((child_struct_50407 == null)))){
if(typeof child_struct_50407 === 'string'){
var text_50409 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_50409),child_struct_50407].join(''));
} else {
var children_50410 = shadow.dom.svg_node(child_struct_50407);
if(cljs.core.seq_QMARK_(children_50410)){
var seq__49769_50413 = cljs.core.seq(children_50410);
var chunk__49771_50414 = null;
var count__49772_50415 = (0);
var i__49773_50416 = (0);
while(true){
if((i__49773_50416 < count__49772_50415)){
var child_50417 = chunk__49771_50414.cljs$core$IIndexed$_nth$arity$2(null,i__49773_50416);
if(cljs.core.truth_(child_50417)){
node.appendChild(child_50417);


var G__50421 = seq__49769_50413;
var G__50422 = chunk__49771_50414;
var G__50423 = count__49772_50415;
var G__50424 = (i__49773_50416 + (1));
seq__49769_50413 = G__50421;
chunk__49771_50414 = G__50422;
count__49772_50415 = G__50423;
i__49773_50416 = G__50424;
continue;
} else {
var G__50429 = seq__49769_50413;
var G__50430 = chunk__49771_50414;
var G__50431 = count__49772_50415;
var G__50432 = (i__49773_50416 + (1));
seq__49769_50413 = G__50429;
chunk__49771_50414 = G__50430;
count__49772_50415 = G__50431;
i__49773_50416 = G__50432;
continue;
}
} else {
var temp__5735__auto___50434__$1 = cljs.core.seq(seq__49769_50413);
if(temp__5735__auto___50434__$1){
var seq__49769_50436__$1 = temp__5735__auto___50434__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49769_50436__$1)){
var c__4550__auto___50437 = cljs.core.chunk_first(seq__49769_50436__$1);
var G__50438 = cljs.core.chunk_rest(seq__49769_50436__$1);
var G__50439 = c__4550__auto___50437;
var G__50440 = cljs.core.count(c__4550__auto___50437);
var G__50441 = (0);
seq__49769_50413 = G__50438;
chunk__49771_50414 = G__50439;
count__49772_50415 = G__50440;
i__49773_50416 = G__50441;
continue;
} else {
var child_50442 = cljs.core.first(seq__49769_50436__$1);
if(cljs.core.truth_(child_50442)){
node.appendChild(child_50442);


var G__50443 = cljs.core.next(seq__49769_50436__$1);
var G__50444 = null;
var G__50445 = (0);
var G__50446 = (0);
seq__49769_50413 = G__50443;
chunk__49771_50414 = G__50444;
count__49772_50415 = G__50445;
i__49773_50416 = G__50446;
continue;
} else {
var G__50447 = cljs.core.next(seq__49769_50436__$1);
var G__50448 = null;
var G__50449 = (0);
var G__50450 = (0);
seq__49769_50413 = G__50447;
chunk__49771_50414 = G__50448;
count__49772_50415 = G__50449;
i__49773_50416 = G__50450;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_50410);
}
}


var G__50451 = cljs.core.next(seq__49732_50401__$1);
var G__50452 = null;
var G__50453 = (0);
var G__50454 = (0);
seq__49732_50355 = G__50451;
chunk__49734_50356 = G__50452;
count__49735_50357 = G__50453;
i__49736_50358 = G__50454;
continue;
} else {
var G__50455 = cljs.core.next(seq__49732_50401__$1);
var G__50456 = null;
var G__50457 = (0);
var G__50458 = (0);
seq__49732_50355 = G__50455;
chunk__49734_50356 = G__50456;
count__49735_50357 = G__50457;
i__49736_50358 = G__50458;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__49777_50460 = shadow.dom._to_svg;
var G__49778_50461 = "string";
var G__49779_50462 = ((function (G__49777_50460,G__49778_50461){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__49777_50460,G__49778_50461))
;
goog.object.set(G__49777_50460,G__49778_50461,G__49779_50462);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__49781_50467 = shadow.dom._to_svg;
var G__49782_50468 = "null";
var G__49783_50469 = ((function (G__49781_50467,G__49782_50468){
return (function (_){
return null;
});})(G__49781_50467,G__49782_50468))
;
goog.object.set(G__49781_50467,G__49782_50468,G__49783_50469);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___50470 = arguments.length;
var i__4731__auto___50471 = (0);
while(true){
if((i__4731__auto___50471 < len__4730__auto___50470)){
args__4736__auto__.push((arguments[i__4731__auto___50471]));

var G__50472 = (i__4731__auto___50471 + (1));
i__4731__auto___50471 = G__50472;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq49785){
var G__49786 = cljs.core.first(seq49785);
var seq49785__$1 = cljs.core.next(seq49785);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49786,seq49785__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__49789 = arguments.length;
switch (G__49789) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__49794_50482 = shadow.dom.dom_node(el);
var G__49795_50483 = cljs.core.name(event);
var G__49796_50484 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__49794_50482,G__49795_50483,G__49796_50484) : shadow.dom.dom_listen.call(null,G__49794_50482,G__49795_50483,G__49796_50484));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__47453__auto___50485 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47453__auto___50485,buf,chan,event_fn){
return (function (){
var f__47454__auto__ = (function (){var switch__47352__auto__ = ((function (c__47453__auto___50485,buf,chan,event_fn){
return (function (state_49803){
var state_val_49804 = (state_49803[(1)]);
if((state_val_49804 === (1))){
var state_49803__$1 = state_49803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49803__$1,(2),once_or_cleanup);
} else {
if((state_val_49804 === (2))){
var inst_49800 = (state_49803[(2)]);
var inst_49801 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_49803__$1 = (function (){var statearr_49807 = state_49803;
(statearr_49807[(7)] = inst_49800);

return statearr_49807;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49803__$1,inst_49801);
} else {
return null;
}
}
});})(c__47453__auto___50485,buf,chan,event_fn))
;
return ((function (switch__47352__auto__,c__47453__auto___50485,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__47353__auto__ = null;
var shadow$dom$state_machine__47353__auto____0 = (function (){
var statearr_49808 = [null,null,null,null,null,null,null,null];
(statearr_49808[(0)] = shadow$dom$state_machine__47353__auto__);

(statearr_49808[(1)] = (1));

return statearr_49808;
});
var shadow$dom$state_machine__47353__auto____1 = (function (state_49803){
while(true){
var ret_value__47354__auto__ = (function (){try{while(true){
var result__47355__auto__ = switch__47352__auto__(state_49803);
if(cljs.core.keyword_identical_QMARK_(result__47355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47355__auto__;
}
break;
}
}catch (e49810){if((e49810 instanceof Object)){
var ex__47356__auto__ = e49810;
var statearr_49812_50488 = state_49803;
(statearr_49812_50488[(5)] = ex__47356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49810;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50489 = state_49803;
state_49803 = G__50489;
continue;
} else {
return ret_value__47354__auto__;
}
break;
}
});
shadow$dom$state_machine__47353__auto__ = function(state_49803){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__47353__auto____0.call(this);
case 1:
return shadow$dom$state_machine__47353__auto____1.call(this,state_49803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__47353__auto____0;
shadow$dom$state_machine__47353__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__47353__auto____1;
return shadow$dom$state_machine__47353__auto__;
})()
;})(switch__47352__auto__,c__47453__auto___50485,buf,chan,event_fn))
})();
var state__47455__auto__ = (function (){var statearr_49814 = (f__47454__auto__.cljs$core$IFn$_invoke$arity$0 ? f__47454__auto__.cljs$core$IFn$_invoke$arity$0() : f__47454__auto__.call(null));
(statearr_49814[(6)] = c__47453__auto___50485);

return statearr_49814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47455__auto__);
});})(c__47453__auto___50485,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
