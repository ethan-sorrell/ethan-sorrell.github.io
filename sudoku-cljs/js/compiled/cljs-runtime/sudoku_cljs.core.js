goog.provide('sudoku_cljs.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('sudoku_cljs.events');
goog.require('sudoku_cljs.views');
goog.require('sudoku_cljs.db');
goog.require('sudoku_cljs.config');
sudoku_cljs.core.dev_setup = (function sudoku_cljs$core$dev_setup(){
if(sudoku_cljs.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
sudoku_cljs.core.mount_root = (function sudoku_cljs$core$mount_root(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sudoku_cljs.views.main_panel], null),document.getElementById("app"));
});
sudoku_cljs.core.init = (function sudoku_cljs$core$init(){
var G__40773_40774 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sudoku-cljs.events","initialize-db","sudoku-cljs.events/initialize-db",-432952771)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__40773_40774) : re_frame.core.dispatch_sync.call(null,G__40773_40774));

sudoku_cljs.core.dev_setup();

return sudoku_cljs.core.mount_root();
});

//# sourceMappingURL=sudoku_cljs.core.js.map
