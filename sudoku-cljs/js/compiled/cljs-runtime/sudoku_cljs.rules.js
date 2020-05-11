goog.provide('sudoku_cljs.rules');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('sudoku_cljs.board');
sudoku_cljs.rules.contains_duplicates_QMARK_ = (function sudoku_cljs$rules$contains_duplicates_QMARK_(coll){

var elts = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,coll);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(elts,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(elts));
});
sudoku_cljs.rules.valid_cell_QMARK_ = (function sudoku_cljs$rules$valid_cell_QMARK_(matrix,coord){
return cljs.core.not_any_QMARK_(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52692_SHARP_){
return (!(sudoku_cljs.rules.contains_duplicates_QMARK_(p1__52692_SHARP_)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52694_SHARP_){
return (p1__52694_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__52694_SHARP_.cljs$core$IFn$_invoke$arity$2(matrix,coord) : p1__52694_SHARP_.call(null,matrix,coord));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sudoku_cljs.board.get_row,sudoku_cljs.board.get_col,sudoku_cljs.board.get_square], null))));
});
sudoku_cljs.rules.valid_neighborhood_QMARK_ = (function sudoku_cljs$rules$valid_neighborhood_QMARK_(db,invalid_pos,invalid_type){
return (!(sudoku_cljs.rules.contains_duplicates_QMARK_(sudoku_cljs.board.get_neighborhood(db,invalid_pos,invalid_type))));
});
sudoku_cljs.rules.conflicting_pos_QMARK_ = (function sudoku_cljs$rules$conflicting_pos_QMARK_(pos,invalids){
var rem = invalids;
while(true){
if(cljs.core.not(cljs.core.seq(rem))){
return false;
} else {
var vec__52705 = cljs.core.first(rem);
var invalid_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52705,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52705,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (rem,vec__52705,invalid_pos,type){
return (function (p1__52697_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__52697_SHARP_,pos);
});})(rem,vec__52705,invalid_pos,type))
,(function (){var fexpr__52708 = sudoku_cljs.board.neighborhood_peers(type);
return (fexpr__52708.cljs$core$IFn$_invoke$arity$1 ? fexpr__52708.cljs$core$IFn$_invoke$arity$1(invalid_pos) : fexpr__52708.call(null,invalid_pos));
})()))){
return true;
} else {
var G__52715 = cljs.core.rest(rem);
rem = G__52715;
continue;
}
}
break;
}
});

//# sourceMappingURL=sudoku_cljs.rules.js.map
