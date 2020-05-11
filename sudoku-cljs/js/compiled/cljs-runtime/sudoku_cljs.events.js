goog.provide('sudoku_cljs.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('sudoku_cljs.db');
goog.require('sudoku_cljs.solve');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sudoku-cljs.events","initialize-db","sudoku-cljs.events/initialize-db",-432952771),(function (_,___$1){
return sudoku_cljs.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sudoku-cljs.events","board","sudoku-cljs.events/board",1847693632),(function (db,p__52958){
var vec__52960 = p__52958;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52960,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52960,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52960,(2),null);
return sudoku_cljs.solve.update_invalid_posns(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,pos,val),new cljs.core.Keyword(null,"invalid-cells","invalid-cells",-1417977735),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,new cljs.core.Keyword(null,"row","row",-570139521)], null)),new cljs.core.Keyword(null,"invalid-cells","invalid-cells",-1417977735),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,new cljs.core.Keyword(null,"col","col",-1959363084)], null)),new cljs.core.Keyword(null,"invalid-cells","invalid-cells",-1417977735),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,new cljs.core.Keyword(null,"square","square",812434677)], null)));
}));

//# sourceMappingURL=sudoku_cljs.events.js.map
