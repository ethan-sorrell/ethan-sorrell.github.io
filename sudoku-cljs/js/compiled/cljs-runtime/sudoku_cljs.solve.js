goog.provide('sudoku_cljs.solve');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('sudoku_cljs.board');
goog.require('sudoku_cljs.rules');
sudoku_cljs.solve.update_invalid_posns = (function sudoku_cljs$solve$update_invalid_posns(db){
var new_invalids = cljs.core.List.EMPTY;
var old_invalids = (function (){var G__52730 = new cljs.core.Keyword(null,"invalid-cells","invalid-cells",-1417977735);
return (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(G__52730) : db.call(null,G__52730));
})();
while(true){
var temp__5733__auto__ = cljs.core.first(old_invalids);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__52731 = temp__5733__auto__;
var candidate_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52731,(0),null);
var candidate_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52731,(1),null);
if(sudoku_cljs.rules.valid_neighborhood_QMARK_(db,candidate_pos,candidate_type)){
var G__52838 = new_invalids;
var G__52839 = cljs.core.rest(old_invalids);
new_invalids = G__52838;
old_invalids = G__52839;
continue;
} else {
var G__52840 = cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [candidate_pos,candidate_type], null),new_invalids);
var G__52841 = cljs.core.rest(old_invalids);
new_invalids = G__52840;
old_invalids = G__52841;
continue;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"invalid-cells","invalid-cells",-1417977735),new_invalids);
}
break;
}
});


sudoku_cljs.solve.elim = (function sudoku_cljs$solve$elim(matrix,from,value){

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(matrix,from,clojure.string.replace(cljs.core.get.cljs$core$IFn$_invoke$arity$2(matrix,from),cljs.core.re_pattern(value),""));
});
sudoku_cljs.solve.candidate_locations = (function sudoku_cljs$solve$candidate_locations(matrix,pos,value){

var iter__4523__auto__ = (function sudoku_cljs$solve$candidate_locations_$_iter__52748(s__52749){
return (new cljs.core.LazySeq(null,(function (){
var s__52749__$1 = s__52749;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52749__$1);
if(temp__5735__auto__){
var s__52749__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52749__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__52749__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__52751 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__52750 = (0);
while(true){
if((i__52750 < size__4522__auto__)){
var unit = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__52750);
cljs.core.chunk_append(b__52751,(function (){var iter__4523__auto__ = ((function (i__52750,unit,c__4521__auto__,size__4522__auto__,b__52751,s__52749__$2,temp__5735__auto__){
return (function sudoku_cljs$solve$candidate_locations_$_iter__52748_$_iter__52755(s__52756){
return (new cljs.core.LazySeq(null,((function (i__52750,unit,c__4521__auto__,size__4522__auto__,b__52751,s__52749__$2,temp__5735__auto__){
return (function (){
var s__52756__$1 = s__52756;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__52756__$1);
if(temp__5735__auto____$1){
var s__52756__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52756__$2)){
var c__4521__auto____$1 = cljs.core.chunk_first(s__52756__$2);
var size__4522__auto____$1 = cljs.core.count(c__4521__auto____$1);
var b__52758 = cljs.core.chunk_buffer(size__4522__auto____$1);
if((function (){var i__52757 = (0);
while(true){
if((i__52757 < size__4522__auto____$1)){
var loc = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto____$1,i__52757);
if((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(loc,pos)))) && (clojure.string.includes_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(matrix,loc),value)))){
cljs.core.chunk_append(b__52758,loc);

var G__52863 = (i__52757 + (1));
i__52757 = G__52863;
continue;
} else {
var G__52864 = (i__52757 + (1));
i__52757 = G__52864;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52758),sudoku_cljs$solve$candidate_locations_$_iter__52748_$_iter__52755(cljs.core.chunk_rest(s__52756__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52758),null);
}
} else {
var loc = cljs.core.first(s__52756__$2);
if((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(loc,pos)))) && (clojure.string.includes_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(matrix,loc),value)))){
return cljs.core.cons(loc,sudoku_cljs$solve$candidate_locations_$_iter__52748_$_iter__52755(cljs.core.rest(s__52756__$2)));
} else {
var G__52867 = cljs.core.rest(s__52756__$2);
s__52756__$1 = G__52867;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__52750,unit,c__4521__auto__,size__4522__auto__,b__52751,s__52749__$2,temp__5735__auto__))
,null,null));
});})(i__52750,unit,c__4521__auto__,size__4522__auto__,b__52751,s__52749__$2,temp__5735__auto__))
;
return iter__4523__auto__(unit);
})());

var G__52872 = (i__52750 + (1));
i__52750 = G__52872;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52751),sudoku_cljs$solve$candidate_locations_$_iter__52748(cljs.core.chunk_rest(s__52749__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52751),null);
}
} else {
var unit = cljs.core.first(s__52749__$2);
return cljs.core.cons((function (){var iter__4523__auto__ = ((function (unit,s__52749__$2,temp__5735__auto__){
return (function sudoku_cljs$solve$candidate_locations_$_iter__52748_$_iter__52788(s__52789){
return (new cljs.core.LazySeq(null,((function (unit,s__52749__$2,temp__5735__auto__){
return (function (){
var s__52789__$1 = s__52789;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__52789__$1);
if(temp__5735__auto____$1){
var s__52789__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52789__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__52789__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__52791 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__52790 = (0);
while(true){
if((i__52790 < size__4522__auto__)){
var loc = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__52790);
if((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(loc,pos)))) && (clojure.string.includes_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(matrix,loc),value)))){
cljs.core.chunk_append(b__52791,loc);

var G__52889 = (i__52790 + (1));
i__52790 = G__52889;
continue;
} else {
var G__52890 = (i__52790 + (1));
i__52790 = G__52890;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52791),sudoku_cljs$solve$candidate_locations_$_iter__52748_$_iter__52788(cljs.core.chunk_rest(s__52789__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52791),null);
}
} else {
var loc = cljs.core.first(s__52789__$2);
if((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(loc,pos)))) && (clojure.string.includes_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(matrix,loc),value)))){
return cljs.core.cons(loc,sudoku_cljs$solve$candidate_locations_$_iter__52748_$_iter__52788(cljs.core.rest(s__52789__$2)));
} else {
var G__52895 = cljs.core.rest(s__52789__$2);
s__52789__$1 = G__52895;
continue;
}
}
} else {
return null;
}
break;
}
});})(unit,s__52749__$2,temp__5735__auto__))
,null,null));
});})(unit,s__52749__$2,temp__5735__auto__))
;
return iter__4523__auto__(unit);
})(),sudoku_cljs$solve$candidate_locations_$_iter__52748(cljs.core.rest(s__52749__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,sudoku_cljs.board.square_peers(pos),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sudoku_cljs.board.row_peers(pos),sudoku_cljs.board.col_peers(pos)], 0)));
});
sudoku_cljs.solve.propagate_in = (function sudoku_cljs$solve$propagate_in(matrix,pos,value){

if(cljs.core.truth_(matrix)){
var result = matrix;
var rem_units = sudoku_cljs.solve.candidate_locations(matrix,pos,value);
while(true){
if(cljs.core.not(cljs.core.seq(rem_units))){
return result;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(cljs.core.first(rem_units)))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(cljs.core.first(rem_units)))){
var temp__5733__auto__ = (function (){var G__52809 = result;
var G__52810 = cljs.core.first(cljs.core.first(rem_units));
var G__52811 = value;
return (sudoku_cljs.solve.assign.cljs$core$IFn$_invoke$arity$3 ? sudoku_cljs.solve.assign.cljs$core$IFn$_invoke$arity$3(G__52809,G__52810,G__52811) : sudoku_cljs.solve.assign.call(null,G__52809,G__52810,G__52811));
})();
if(cljs.core.truth_(temp__5733__auto__)){
var new_matrix = temp__5733__auto__;
var G__52912 = new_matrix;
var G__52913 = cljs.core.rest(rem_units);
result = G__52912;
rem_units = G__52913;
continue;
} else {
return false;
}
} else {
var G__52914 = result;
var G__52915 = cljs.core.rest(rem_units);
result = G__52914;
rem_units = G__52915;
continue;
}
}
}
break;
}
} else {
return null;
}
});
sudoku_cljs.solve.propagate_out = (function sudoku_cljs$solve$propagate_out(matrix,pos){

var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(matrix,pos);
var result = matrix;
var rem_peers = sudoku_cljs.board.all_peers(pos);
while(true){
var temp__5733__auto__ = cljs.core.first(rem_peers);
if(cljs.core.truth_(temp__5733__auto__)){
var peer = temp__5733__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(peer,pos)){
var G__52920 = result;
var G__52921 = cljs.core.rest(rem_peers);
result = G__52920;
rem_peers = G__52921;
continue;
} else {
var temp__5733__auto____$1 = (sudoku_cljs.solve.eliminate.cljs$core$IFn$_invoke$arity$3 ? sudoku_cljs.solve.eliminate.cljs$core$IFn$_invoke$arity$3(result,peer,value) : sudoku_cljs.solve.eliminate.call(null,result,peer,value));
if(cljs.core.truth_(temp__5733__auto____$1)){
var new_matrix = temp__5733__auto____$1;
var G__52926 = new_matrix;
var G__52927 = cljs.core.rest(rem_peers);
result = G__52926;
rem_peers = G__52927;
continue;
} else {
return false;
}
}
} else {
return result;
}
break;
}
});
sudoku_cljs.solve.eliminate = (function sudoku_cljs$solve$eliminate(matrix,from,value){

if((!(clojure.string.includes_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(matrix,from),value)))){
return matrix;
} else {
var new_matrix = sudoku_cljs.solve.elim(matrix,from,value);
var remaining_count = cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_matrix,from));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),remaining_count)){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),remaining_count)){
return sudoku_cljs.solve.propagate_in(sudoku_cljs.solve.propagate_out(new_matrix,from),from,value);
} else {
return new_matrix;

}
}
}
});
sudoku_cljs.solve.assign = (function sudoku_cljs$solve$assign(matrix,pos,value){

if(cljs.core.truth_(matrix)){
var current_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(matrix,pos);
var other_vals = clojure.string.replace(current_val,cljs.core.re_pattern(value),"");
var result = matrix;
var rem = other_vals;
while(true){
if(cljs.core.truth_(result)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(rem))){
return result;
} else {
var G__52934 = sudoku_cljs.solve.eliminate(result,pos,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(rem)));
var G__52935 = cljs.core.rest(rem);
result = G__52934;
rem = G__52935;
continue;
}
} else {
return null;
}
break;
}
} else {
return null;
}
});
sudoku_cljs.solve.constrain_board = (function sudoku_cljs$solve$constrain_board(board){

var result = sudoku_cljs.board.unconstrained_board;
var rem = board;
while(true){
if(cljs.core.truth_(result)){
if(cljs.core.not(cljs.core.seq(rem))){
return result;
} else {
var pair = cljs.core.first(rem);
var coord = cljs.core.first(pair);
var vals = cljs.core.second(pair);
if(cljs.core.not(cljs.core.seq(vals))){
var G__52936 = result;
var G__52937 = cljs.core.rest(rem);
result = G__52936;
rem = G__52937;
continue;
} else {
var G__52938 = sudoku_cljs.solve.assign(result,coord,vals);
var G__52939 = cljs.core.rest(rem);
result = G__52938;
rem = G__52939;
continue;
}
}
} else {
return null;
}
break;
}
});

//# sourceMappingURL=sudoku_cljs.solve.js.map
