goog.provide('sudoku_cljs.db');
goog.require('cljs.core');
sudoku_cljs.db.blank_board = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,(function (){var iter__4523__auto__ = (function sudoku_cljs$db$iter__52571(s__52572){
return (new cljs.core.LazySeq(null,(function (){
var s__52572__$1 = s__52572;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52572__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var row = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__52572__$1,row,xs__6292__auto__,temp__5735__auto__){
return (function sudoku_cljs$db$iter__52571_$_iter__52573(s__52574){
return (new cljs.core.LazySeq(null,((function (s__52572__$1,row,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__52574__$1 = s__52574;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__52574__$1);
if(temp__5735__auto____$1){
var s__52574__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52574__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__52574__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__52576 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__52575 = (0);
while(true){
if((i__52575 < size__4522__auto__)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__52575);
cljs.core.chunk_append(b__52576,cljs.core.PersistentArrayMap.createAsIfByAssoc([(new cljs.core.List(null,col,(new cljs.core.List(null,row,null,(1),null)),(2),null)),""]));

var G__52621 = (i__52575 + (1));
i__52575 = G__52621;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52576),sudoku_cljs$db$iter__52571_$_iter__52573(cljs.core.chunk_rest(s__52574__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52576),null);
}
} else {
var col = cljs.core.first(s__52574__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([(new cljs.core.List(null,col,(new cljs.core.List(null,row,null,(1),null)),(2),null)),""]),sudoku_cljs$db$iter__52571_$_iter__52573(cljs.core.rest(s__52574__$2)));
}
} else {
return null;
}
break;
}
});})(s__52572__$1,row,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__52572__$1,row,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(10))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,sudoku_cljs$db$iter__52571(cljs.core.rest(s__52572__$1)));
} else {
var G__52628 = cljs.core.rest(s__52572__$1);
s__52572__$1 = G__52628;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(10)));
})());
sudoku_cljs.db.default_db = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"invalid-cells","invalid-cells",-1417977735),cljs.core.List.EMPTY], null),sudoku_cljs.db.blank_board], 0));

//# sourceMappingURL=sudoku_cljs.db.js.map
