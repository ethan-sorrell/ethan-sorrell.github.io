goog.provide('sudoku_cljs.board');
goog.require('cljs.core');
goog.require('clojure.string');
sudoku_cljs.board.get_coord = (function sudoku_cljs$board$get_coord(row,col){

return (new cljs.core.List(null,col,(new cljs.core.List(null,row,null,(1),null)),(2),null));
});
sudoku_cljs.board.get_xy = (function sudoku_cljs$board$get_xy(coord){

var row_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(coord,(0));
var col_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(coord,(1));
var row = (row_char.charCodeAt((0)) - (96));
var col = parseInt(col_char,(10));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null);
});
sudoku_cljs.board.row_peers = (function sudoku_cljs$board$row_peers(coord){
var vec__52594 = coord;
var row_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52594,(0),null);
var col_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52594,(1),null);
var iter__4523__auto__ = ((function (vec__52594,row_n,col_n){
return (function sudoku_cljs$board$row_peers_$_iter__52597(s__52598){
return (new cljs.core.LazySeq(null,((function (vec__52594,row_n,col_n){
return (function (){
var s__52598__$1 = s__52598;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52598__$1);
if(temp__5735__auto__){
var s__52598__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52598__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__52598__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__52600 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__52599 = (0);
while(true){
if((i__52599 < size__4522__auto__)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__52599);
cljs.core.chunk_append(b__52600,(new cljs.core.List(null,row_n,(new cljs.core.List(null,col,null,(1),null)),(2),null)));

var G__52695 = (i__52599 + (1));
i__52599 = G__52695;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52600),sudoku_cljs$board$row_peers_$_iter__52597(cljs.core.chunk_rest(s__52598__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52600),null);
}
} else {
var col = cljs.core.first(s__52598__$2);
return cljs.core.cons((new cljs.core.List(null,row_n,(new cljs.core.List(null,col,null,(1),null)),(2),null)),sudoku_cljs$board$row_peers_$_iter__52597(cljs.core.rest(s__52598__$2)));
}
} else {
return null;
}
break;
}
});})(vec__52594,row_n,col_n))
,null,null));
});})(vec__52594,row_n,col_n))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(10)));
});
sudoku_cljs.board.col_peers = (function sudoku_cljs$board$col_peers(coord){
var vec__52614 = coord;
var row_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52614,(0),null);
var col_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52614,(1),null);
var iter__4523__auto__ = ((function (vec__52614,row_n,col_n){
return (function sudoku_cljs$board$col_peers_$_iter__52617(s__52618){
return (new cljs.core.LazySeq(null,((function (vec__52614,row_n,col_n){
return (function (){
var s__52618__$1 = s__52618;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52618__$1);
if(temp__5735__auto__){
var s__52618__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52618__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__52618__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__52620 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__52619 = (0);
while(true){
if((i__52619 < size__4522__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__52619);
cljs.core.chunk_append(b__52620,(new cljs.core.List(null,row,(new cljs.core.List(null,col_n,null,(1),null)),(2),null)));

var G__52709 = (i__52619 + (1));
i__52619 = G__52709;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52620),sudoku_cljs$board$col_peers_$_iter__52617(cljs.core.chunk_rest(s__52618__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52620),null);
}
} else {
var row = cljs.core.first(s__52618__$2);
return cljs.core.cons((new cljs.core.List(null,row,(new cljs.core.List(null,col_n,null,(1),null)),(2),null)),sudoku_cljs$board$col_peers_$_iter__52617(cljs.core.rest(s__52618__$2)));
}
} else {
return null;
}
break;
}
});})(vec__52614,row_n,col_n))
,null,null));
});})(vec__52614,row_n,col_n))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(10)));
});
sudoku_cljs.board.square_peers = (function sudoku_cljs$board$square_peers(coord){
var vec__52630 = coord;
var row_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52630,(0),null);
var col_n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52630,(1),null);
var col_3 = cljs.core.quot((col_n - (1)),(3));
var row_3 = cljs.core.quot((row_n - (1)),(3));
var start_col = (((3) * col_3) + (1));
var start_row = (((3) * row_3) + (1));
var iter__4523__auto__ = ((function (vec__52630,row_n,col_n,col_3,row_3,start_col,start_row){
return (function sudoku_cljs$board$square_peers_$_iter__52633(s__52634){
return (new cljs.core.LazySeq(null,((function (vec__52630,row_n,col_n,col_3,row_3,start_col,start_row){
return (function (){
var s__52634__$1 = s__52634;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52634__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var row = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__52634__$1,row,xs__6292__auto__,temp__5735__auto__,vec__52630,row_n,col_n,col_3,row_3,start_col,start_row){
return (function sudoku_cljs$board$square_peers_$_iter__52633_$_iter__52635(s__52636){
return (new cljs.core.LazySeq(null,((function (s__52634__$1,row,xs__6292__auto__,temp__5735__auto__,vec__52630,row_n,col_n,col_3,row_3,start_col,start_row){
return (function (){
var s__52636__$1 = s__52636;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__52636__$1);
if(temp__5735__auto____$1){
var s__52636__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52636__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__52636__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__52638 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__52637 = (0);
while(true){
if((i__52637 < size__4522__auto__)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__52637);
cljs.core.chunk_append(b__52638,(new cljs.core.List(null,row,(new cljs.core.List(null,col,null,(1),null)),(2),null)));

var G__52717 = (i__52637 + (1));
i__52637 = G__52717;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52638),sudoku_cljs$board$square_peers_$_iter__52633_$_iter__52635(cljs.core.chunk_rest(s__52636__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52638),null);
}
} else {
var col = cljs.core.first(s__52636__$2);
return cljs.core.cons((new cljs.core.List(null,row,(new cljs.core.List(null,col,null,(1),null)),(2),null)),sudoku_cljs$board$square_peers_$_iter__52633_$_iter__52635(cljs.core.rest(s__52636__$2)));
}
} else {
return null;
}
break;
}
});})(s__52634__$1,row,xs__6292__auto__,temp__5735__auto__,vec__52630,row_n,col_n,col_3,row_3,start_col,start_row))
,null,null));
});})(s__52634__$1,row,xs__6292__auto__,temp__5735__auto__,vec__52630,row_n,col_n,col_3,row_3,start_col,start_row))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(start_col,(start_col + (3)))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,sudoku_cljs$board$square_peers_$_iter__52633(cljs.core.rest(s__52634__$1)));
} else {
var G__52721 = cljs.core.rest(s__52634__$1);
s__52634__$1 = G__52721;
continue;
}
} else {
return null;
}
break;
}
});})(vec__52630,row_n,col_n,col_3,row_3,start_col,start_row))
,null,null));
});})(vec__52630,row_n,col_n,col_3,row_3,start_col,start_row))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(start_row,(start_row + (3))));
});
sudoku_cljs.board.all_peers = (function sudoku_cljs$board$all_peers(coord){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__52645_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__52645_SHARP_,coord);
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(sudoku_cljs.board.square_peers(coord),sudoku_cljs.board.col_peers(coord),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sudoku_cljs.board.row_peers(coord)], 0)));
});
sudoku_cljs.board.neighborhood_peers = (function sudoku_cljs$board$neighborhood_peers(type){
var G__52648 = type;
var G__52648__$1 = (((G__52648 instanceof cljs.core.Keyword))?G__52648.fqn:null);
switch (G__52648__$1) {
case "row":
return sudoku_cljs.board.row_peers;

break;
case "col":
return sudoku_cljs.board.col_peers;

break;
case "square":
return sudoku_cljs.board.square_peers;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52648__$1)].join('')));

}
});
sudoku_cljs.board.get_row = (function sudoku_cljs$board$get_row(matrix,coord){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52649_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(matrix,p1__52649_SHARP_);
}),sudoku_cljs.board.row_peers(coord));
});
sudoku_cljs.board.get_square = (function sudoku_cljs$board$get_square(matrix,coord){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52655_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(matrix,p1__52655_SHARP_);
}),sudoku_cljs.board.square_peers(coord));
});
sudoku_cljs.board.get_col = (function sudoku_cljs$board$get_col(matrix,coord){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52656_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(matrix,p1__52656_SHARP_);
}),sudoku_cljs.board.col_peers(coord));
});
sudoku_cljs.board.get_neighborhood = (function sudoku_cljs$board$get_neighborhood(matrix,coord,type){
var G__52660 = type;
var G__52660__$1 = (((G__52660 instanceof cljs.core.Keyword))?G__52660.fqn:null);
switch (G__52660__$1) {
case "row":
return sudoku_cljs.board.get_row(matrix,coord);

break;
case "col":
return sudoku_cljs.board.get_col(matrix,coord);

break;
case "square":
return sudoku_cljs.board.get_square(matrix,coord);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52660__$1)].join('')));

}
});
sudoku_cljs.board.coord_set = (function (){var iter__4523__auto__ = (function sudoku_cljs$board$iter__52661(s__52662){
return (new cljs.core.LazySeq(null,(function (){
var s__52662__$1 = s__52662;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52662__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var x = cljs.core.first(xs__6292__auto__);
var iterys__4519__auto__ = ((function (s__52662__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function sudoku_cljs$board$iter__52661_$_iter__52663(s__52664){
return (new cljs.core.LazySeq(null,((function (s__52662__$1,x,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__52664__$1 = s__52664;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__52664__$1);
if(temp__5735__auto____$1){
var s__52664__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52664__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__52664__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__52666 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__52665 = (0);
while(true){
if((i__52665 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__52665);
var coord = (new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null));
cljs.core.chunk_append(b__52666,coord);

var G__52734 = (i__52665 + (1));
i__52665 = G__52734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52666),sudoku_cljs$board$iter__52661_$_iter__52663(cljs.core.chunk_rest(s__52664__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52666),null);
}
} else {
var y = cljs.core.first(s__52664__$2);
var coord = (new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null));
return cljs.core.cons(coord,sudoku_cljs$board$iter__52661_$_iter__52663(cljs.core.rest(s__52664__$2)));
}
} else {
return null;
}
break;
}
});})(s__52662__$1,x,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__52662__$1,x,xs__6292__auto__,temp__5735__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(10))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,sudoku_cljs$board$iter__52661(cljs.core.rest(s__52662__$1)));
} else {
var G__52738 = cljs.core.rest(s__52662__$1);
s__52662__$1 = G__52738;
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
})();
sudoku_cljs.board.unconstrained_board = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52685_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__52685_SHARP_,"123456789"],null));
}),sudoku_cljs.board.coord_set));

//# sourceMappingURL=sudoku_cljs.board.js.map
