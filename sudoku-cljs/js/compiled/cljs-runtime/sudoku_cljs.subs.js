goog.provide('sudoku_cljs.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('sudoku_cljs.board');
var G__52952_52968 = new cljs.core.Keyword("sudoku-cljs.subs","cell","sudoku-cljs.subs/cell",1431681763);
var G__52953_52969 = ((function (G__52952_52968){
return (function (db,p__52954){
var vec__52955 = p__52954;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52955,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52955,(1),null);
return (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(pos) : db.call(null,pos));
});})(G__52952_52968))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__52952_52968,G__52953_52969) : re_frame.core.reg_sub.call(null,G__52952_52968,G__52953_52969));
var G__52963_52970 = new cljs.core.Keyword("sudoku-cljs.subs","db","sudoku-cljs.subs/db",1114527568);
var G__52964_52971 = ((function (G__52963_52970){
return (function (db,_){
return db;
});})(G__52963_52970))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__52963_52970,G__52964_52971) : re_frame.core.reg_sub.call(null,G__52963_52970,G__52964_52971));
var G__52965_52974 = new cljs.core.Keyword("sudoku-cljs.subs","invalid","sudoku-cljs.subs/invalid",-518825437);
var G__52966_52975 = ((function (G__52965_52974){
return (function (db,_){
var G__52967 = new cljs.core.Keyword(null,"invalid-cells","invalid-cells",-1417977735);
return (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(G__52967) : db.call(null,G__52967));
});})(G__52965_52974))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__52965_52974,G__52966_52975) : re_frame.core.reg_sub.call(null,G__52965_52974,G__52966_52975));

//# sourceMappingURL=sudoku_cljs.subs.js.map
