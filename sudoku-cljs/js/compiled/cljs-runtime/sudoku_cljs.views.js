goog.provide('sudoku_cljs.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('sudoku_cljs.subs');
goog.require('sudoku_cljs.board');
goog.require('sudoku_cljs.rules');
goog.require('sudoku_cljs.solve');
goog.require('sudoku_cljs.events');
sudoku_cljs.views.board_change = (function sudoku_cljs$views$board_change(pos,event){
var G__40741 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sudoku-cljs.events","board","sudoku-cljs.events/board",1847693632),pos,event.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__40741) : re_frame.core.dispatch.call(null,G__40741));
});
sudoku_cljs.views.cell_field = (function sudoku_cljs$views$cell_field(x,y,horiz,vert){

var pos = (new cljs.core.List(null,y,(new cljs.core.List(null,x,null,(1),null)),(2),null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(horiz)?"horiz":null),(cljs.core.truth_(vert)?"vert":null),((sudoku_cljs.rules.conflicting_pos_QMARK_(pos,cljs.core.deref((function (){var G__40743 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sudoku-cljs.subs","invalid","sudoku-cljs.subs/invalid",-518825437)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__40743) : re_frame.core.subscribe.call(null,G__40743));
})())))?"invalid":null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),pos,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (pos){
return (function (p1__40742_SHARP_){
if(cljs.core.truth_(p1__40742_SHARP_)){
return sudoku_cljs.views.board_change(pos,p1__40742_SHARP_);
} else {
return null;
}
});})(pos))
,new cljs.core.Keyword(null,"size","size",1098693007),(1)], null)], null)], null);
});
sudoku_cljs.views.table_row = (function sudoku_cljs$views$table_row(col){

var cell_row = (function sudoku_cljs$views$table_row_$_cell_row(horiz,vert){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4523__auto__ = (function sudoku_cljs$views$table_row_$_cell_row_$_iter__40748(s__40749){
return (new cljs.core.LazySeq(null,(function (){
var s__40749__$1 = s__40749;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40749__$1);
if(temp__5735__auto__){
var s__40749__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40749__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40749__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40751 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40750 = (0);
while(true){
if((i__40750 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40750);
cljs.core.chunk_append(b__40751,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.rem(x,(3)),(0)))?sudoku_cljs.views.cell_field(x,col,horiz,(1)):sudoku_cljs.views.cell_field(x,col,horiz,vert)));

var G__40772 = (i__40750 + (1));
i__40750 = G__40772;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40751),sudoku_cljs$views$table_row_$_cell_row_$_iter__40748(cljs.core.chunk_rest(s__40749__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40751),null);
}
} else {
var x = cljs.core.first(s__40749__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.rem(x,(3)),(0)))?sudoku_cljs.views.cell_field(x,col,horiz,(1)):sudoku_cljs.views.cell_field(x,col,horiz,vert)),sudoku_cljs$views$table_row_$_cell_row_$_iter__40748(cljs.core.rest(s__40749__$2)));
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
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.rem(col,(3)),(0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_row,(1),null], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cell_row,null,null], null);
}
});
sudoku_cljs.views.extract_board = (function sudoku_cljs$views$extract_board(db){

return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40752_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__40752_SHARP_,(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(p1__40752_SHARP_) : db.call(null,p1__40752_SHARP_))],null));
}),sudoku_cljs.board.coord_set);
});
sudoku_cljs.views.output_cell = (function sudoku_cljs$views$output_cell(board,coord,horiz,vert){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(horiz)?"horiz":null),(cljs.core.truth_(vert)?"vert":null)], null)], null),(function (){var constraint_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,coord);
var constraints = cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,constraint_string);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (constraint_string,constraints){
return (function (item){
return cljs.core.some(((function (constraint_string,constraints){
return (function (p1__40753_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__40753_SHARP_,item);
});})(constraint_string,constraints))
,constraints);
});})(constraint_string,constraints))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(10)))], null);
})()], null);
});
sudoku_cljs.views.output_row = (function sudoku_cljs$views$output_row(board,row_n){
var horiz = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.rem(row_n,(3)),(0)))?true:null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4523__auto__ = ((function (horiz){
return (function sudoku_cljs$views$output_row_$_iter__40755(s__40756){
return (new cljs.core.LazySeq(null,((function (horiz){
return (function (){
var s__40756__$1 = s__40756;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40756__$1);
if(temp__5735__auto__){
var s__40756__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40756__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40756__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40758 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40757 = (0);
while(true){
if((i__40757 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40757);
var coord = (new cljs.core.List(null,row_n,(new cljs.core.List(null,x,null,(1),null)),(2),null));
cljs.core.chunk_append(b__40758,sudoku_cljs.views.output_cell(board,coord,horiz,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.rem(x,(3)),(0)))?true:null)));

var G__40775 = (i__40757 + (1));
i__40757 = G__40775;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40758),sudoku_cljs$views$output_row_$_iter__40755(cljs.core.chunk_rest(s__40756__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40758),null);
}
} else {
var x = cljs.core.first(s__40756__$2);
var coord = (new cljs.core.List(null,row_n,(new cljs.core.List(null,x,null,(1),null)),(2),null));
return cljs.core.cons(sudoku_cljs.views.output_cell(board,coord,horiz,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.rem(x,(3)),(0)))?true:null)),sudoku_cljs$views$output_row_$_iter__40755(cljs.core.rest(s__40756__$2)));
}
} else {
return null;
}
break;
}
});})(horiz))
,null,null));
});})(horiz))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(10)));
})());
});
sudoku_cljs.views.output_table = (function sudoku_cljs$views$output_table(board){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid;"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4523__auto__ = (function sudoku_cljs$views$output_table_$_iter__40759(s__40760){
return (new cljs.core.LazySeq(null,(function (){
var s__40760__$1 = s__40760;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40760__$1);
if(temp__5735__auto__){
var s__40760__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40760__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40760__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40762 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40761 = (0);
while(true){
if((i__40761 < size__4522__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40761);
cljs.core.chunk_append(b__40762,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sudoku_cljs.views.output_row,board,row], null));

var G__40776 = (i__40761 + (1));
i__40761 = G__40776;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40762),sudoku_cljs$views$output_table_$_iter__40759(cljs.core.chunk_rest(s__40760__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40762),null);
}
} else {
var row = cljs.core.first(s__40760__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sudoku_cljs.views.output_row,board,row], null),sudoku_cljs$views$output_table_$_iter__40759(cljs.core.rest(s__40760__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(10)));
})()], null))], null)], null);
});
sudoku_cljs.views.draw_output = (function sudoku_cljs$views$draw_output(db){
return sudoku_cljs.views.output_table(sudoku_cljs.solve.constrain_board(sudoku_cljs.views.extract_board(db)));
});
sudoku_cljs.views.input_table = (function sudoku_cljs$views$input_table(){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid;"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var iter__4523__auto__ = (function sudoku_cljs$views$input_table_$_iter__40763(s__40764){
return (new cljs.core.LazySeq(null,(function (){
var s__40764__$1 = s__40764;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40764__$1);
if(temp__5735__auto__){
var s__40764__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40764__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40764__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40766 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40765 = (0);
while(true){
if((i__40765 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40765);
cljs.core.chunk_append(b__40766,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sudoku_cljs.views.table_row,y], null));

var G__40777 = (i__40765 + (1));
i__40765 = G__40777;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40766),sudoku_cljs$views$input_table_$_iter__40763(cljs.core.chunk_rest(s__40764__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40766),null);
}
} else {
var y = cljs.core.first(s__40764__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sudoku_cljs.views.table_row,y], null),sudoku_cljs$views$input_table_$_iter__40763(cljs.core.rest(s__40764__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(10)));
})())], null)], null);
});
sudoku_cljs.views.output_panel = (function sudoku_cljs$views$output_panel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sudoku_cljs.views.draw_output,cljs.core.deref((function (){var G__40767 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sudoku-cljs.subs","db","sudoku-cljs.subs/db",1114527568)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__40767) : re_frame.core.subscribe.call(null,G__40767));
})())], null)], null);
});
sudoku_cljs.views.show_db = (function sudoku_cljs$views$show_db(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__40769 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sudoku-cljs.subs","db","sudoku-cljs.subs/db",1114527568)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__40769) : re_frame.core.subscribe.call(null,G__40769));
})()))], null)], null);
});
sudoku_cljs.views.show_invalids = (function sudoku_cljs$views$show_invalids(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref((function (){var G__40771 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sudoku-cljs.subs","invalid","sudoku-cljs.subs/invalid",-518825437)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__40771) : re_frame.core.subscribe.call(null,G__40771));
})()))], null)], null);
});
sudoku_cljs.views.main_panel = (function sudoku_cljs$views$main_panel(){

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sudoku_cljs.views.input_table], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#solnboard.column","div#solnboard.column",-2073996254),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sudoku_cljs.views.output_panel], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sudoku_cljs.views.show_db], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sudoku_cljs.views.show_invalids], null)], null);
});

//# sourceMappingURL=sudoku_cljs.views.js.map
