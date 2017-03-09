// Compiled by ClojureScript 1.9.495 {}
goog.provide('dirac.runtime.bootstrap');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
dirac.runtime.bootstrap._STAR_boostrapped_QMARK__STAR_ = false;
dirac.runtime.bootstrap._STAR_boostrap_timeout_STAR_ = (100);
dirac.runtime.bootstrap._STAR_boostrap_listeners_STAR_ = [];
dirac.runtime.bootstrap.notify_listeners_BANG_ = (function dirac$runtime$bootstrap$notify_listeners_BANG_(listeners){
var seq__50649 = cljs.core.seq.call(null,listeners);
var chunk__50650 = null;
var count__50651 = (0);
var i__50652 = (0);
while(true){
if((i__50652 < count__50651)){
var listener = cljs.core._nth.call(null,chunk__50650,i__50652);
listener.call(null);

var G__50653 = seq__50649;
var G__50654 = chunk__50650;
var G__50655 = count__50651;
var G__50656 = (i__50652 + (1));
seq__50649 = G__50653;
chunk__50650 = G__50654;
count__50651 = G__50655;
i__50652 = G__50656;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__50649);
if(temp__6753__auto__){
var seq__50649__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50649__$1)){
var c__29859__auto__ = cljs.core.chunk_first.call(null,seq__50649__$1);
var G__50657 = cljs.core.chunk_rest.call(null,seq__50649__$1);
var G__50658 = c__29859__auto__;
var G__50659 = cljs.core.count.call(null,c__29859__auto__);
var G__50660 = (0);
seq__50649 = G__50657;
chunk__50650 = G__50658;
count__50651 = G__50659;
i__50652 = G__50660;
continue;
} else {
var listener = cljs.core.first.call(null,seq__50649__$1);
listener.call(null);

var G__50661 = cljs.core.next.call(null,seq__50649__$1);
var G__50662 = null;
var G__50663 = (0);
var G__50664 = (0);
seq__50649 = G__50661;
chunk__50650 = G__50662;
count__50651 = G__50663;
i__50652 = G__50664;
continue;
}
} else {
return null;
}
}
break;
}
});
dirac.runtime.bootstrap.boostrap_if_needed_BANG_ = (function dirac$runtime$bootstrap$boostrap_if_needed_BANG_(){
if(dirac.runtime.bootstrap._STAR_boostrapped_QMARK__STAR_){
} else {
clojure.browser.repl.bootstrap.call(null);

dirac.runtime.bootstrap._STAR_boostrapped_QMARK__STAR_ = true;
}

dirac.runtime.bootstrap.notify_listeners_BANG_.call(null,dirac.runtime.bootstrap._STAR_boostrap_listeners_STAR_);

return dirac.runtime.bootstrap._STAR_boostrap_listeners_STAR_ = [];
});
dirac.runtime.bootstrap.call_after_document_finished_loading = (function dirac$runtime$bootstrap$call_after_document_finished_loading(f,timeout){
if(cljs.core._EQ_.call(null,document.readyState,"loading")){
return setTimeout((function (){
return dirac.runtime.bootstrap.call_after_document_finished_loading.call(null,f,dirac.runtime.bootstrap._STAR_boostrap_timeout_STAR_);
}),timeout);
} else {
return f.call(null);
}
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 * 
 *   Note that this function might do its job asynchronously if at the time of calling the document is still loading.
 *   You may provide a callback which will be called immediatelly after bootstrapping happens.
 *   It has no effect if called after bootstrapping has been already done. Only the callback is called immediatelly.
 */
dirac.runtime.bootstrap.bootstrap_BANG_ = (function dirac$runtime$bootstrap$bootstrap_BANG_(var_args){
var args50665 = [];
var len__30169__auto___50668 = arguments.length;
var i__30170__auto___50669 = (0);
while(true){
if((i__30170__auto___50669 < len__30169__auto___50668)){
args50665.push((arguments[i__30170__auto___50669]));

var G__50670 = (i__30170__auto___50669 + (1));
i__30170__auto___50669 = G__50670;
continue;
} else {
}
break;
}

var G__50667 = args50665.length;
switch (G__50667) {
case 0:
return dirac.runtime.bootstrap.bootstrap_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dirac.runtime.bootstrap.bootstrap_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50665.length)].join('')));

}
});

dirac.runtime.bootstrap.bootstrap_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return dirac.runtime.bootstrap.bootstrap_BANG_.call(null,null);
});

dirac.runtime.bootstrap.bootstrap_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (callback){
if(!((callback == null))){
if(cljs.core.fn_QMARK_.call(null,callback)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("The callback parameter to clojure.browser.repl/bootstrap expected to be a function."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Got "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,callback)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" instead.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(fn? callback)")].join('')));
}

dirac.runtime.bootstrap._STAR_boostrap_listeners_STAR_.push(callback);
} else {
}

if(!(typeof document !== 'undefined')){
return dirac.runtime.bootstrap.boostrap_if_needed_BANG_.call(null);
} else {
return dirac.runtime.bootstrap.call_after_document_finished_loading.call(null,dirac.runtime.bootstrap.boostrap_if_needed_BANG_,(0));
}
});

dirac.runtime.bootstrap.bootstrap_BANG_.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=bootstrap.js.map