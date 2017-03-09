// Compiled by ClojureScript 1.9.495 {}
goog.provide('dirac.runtime.core');
goog.require('cljs.core');
goog.require('dirac.runtime.repl');
goog.require('dirac.runtime.util');
goog.require('dirac.runtime.prefs');
dirac.runtime.core.is_feature_available_QMARK_ = (function dirac$runtime$core$is_feature_available_QMARK_(feature){
var G__50934 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__50934) {
case "repl":
return dirac.runtime.repl.available_QMARK_.call(null);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)].join('')));

}
});
dirac.runtime.core.available_QMARK_ = (function dirac$runtime$core$available_QMARK_(var_args){
var args50936 = [];
var len__30169__auto___50939 = arguments.length;
var i__30170__auto___50940 = (0);
while(true){
if((i__30170__auto___50940 < len__30169__auto___50939)){
args50936.push((arguments[i__30170__auto___50940]));

var G__50941 = (i__30170__auto___50940 + (1));
i__30170__auto___50940 = G__50941;
continue;
} else {
}
break;
}

var G__50938 = args50936.length;
switch (G__50938) {
case 0:
return dirac.runtime.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dirac.runtime.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50936.length)].join('')));

}
});

dirac.runtime.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return dirac.runtime.core.available_QMARK_.call(null,dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

dirac.runtime.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = dirac.runtime.util.resolve_features_BANG_.call(null,features_desc,dirac.runtime.prefs.feature_groups);
if(cljs.core.empty_QMARK_.call(null,features)){
return false;
} else {
return cljs.core.every_QMARK_.call(null,dirac.runtime.core.is_feature_available_QMARK_,features);
}
});

dirac.runtime.core.available_QMARK_.cljs$lang$maxFixedArity = 1;

dirac.runtime.core.is_feature_installed_QMARK_ = (function dirac$runtime$core$is_feature_installed_QMARK_(feature){
var G__50944 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__50944) {
case "repl":
return dirac.runtime.repl.installed_QMARK_.call(null);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)].join('')));

}
});
dirac.runtime.core.installed_QMARK_ = (function dirac$runtime$core$installed_QMARK_(var_args){
var args50946 = [];
var len__30169__auto___50949 = arguments.length;
var i__30170__auto___50950 = (0);
while(true){
if((i__30170__auto___50950 < len__30169__auto___50949)){
args50946.push((arguments[i__30170__auto___50950]));

var G__50951 = (i__30170__auto___50950 + (1));
i__30170__auto___50950 = G__50951;
continue;
} else {
}
break;
}

var G__50948 = args50946.length;
switch (G__50948) {
case 0:
return dirac.runtime.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dirac.runtime.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50946.length)].join('')));

}
});

dirac.runtime.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return dirac.runtime.core.installed_QMARK_.call(null,dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

dirac.runtime.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = dirac.runtime.util.resolve_features_BANG_.call(null,features_desc,dirac.runtime.prefs.feature_groups);
if(cljs.core.empty_QMARK_.call(null,features)){
return false;
} else {
return cljs.core.every_QMARK_.call(null,dirac.runtime.core.is_feature_installed_QMARK_,features);
}
});

dirac.runtime.core.installed_QMARK_.cljs$lang$maxFixedArity = 1;

dirac.runtime.core.install_BANG_ = (function dirac$runtime$core$install_BANG_(var_args){
var args50953 = [];
var len__30169__auto___50956 = arguments.length;
var i__30170__auto___50957 = (0);
while(true){
if((i__30170__auto___50957 < len__30169__auto___50956)){
args50953.push((arguments[i__30170__auto___50957]));

var G__50958 = (i__30170__auto___50957 + (1));
i__30170__auto___50957 = G__50958;
continue;
} else {
}
break;
}

var G__50955 = args50953.length;
switch (G__50955) {
case 0:
return dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50953.length)].join('')));

}
});

dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return dirac.runtime.core.install_BANG_.call(null,dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = dirac.runtime.util.resolve_features_BANG_.call(null,features_desc,dirac.runtime.prefs.feature_groups);
dirac.runtime.util.display_banner_if_needed_BANG_.call(null,features,dirac.runtime.prefs.feature_groups);

return dirac.runtime.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"repl","repl",-35398667),features,dirac.runtime.core.is_feature_available_QMARK_,dirac.runtime.repl.install_BANG_);
});

dirac.runtime.core.install_BANG_.cljs$lang$maxFixedArity = 1;

dirac.runtime.core.uninstall_BANG_ = (function dirac$runtime$core$uninstall_BANG_(){
return dirac.runtime.repl.uninstall_BANG_.call(null);
});

//# sourceMappingURL=core.js.map