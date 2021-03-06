// Compiled by ClojureScript 1.9.495 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__29666__auto__ = (((value == null))?null:value);
var m__29667__auto__ = (devtools.format._header[goog.typeOf(x__29666__auto__)]);
if(!((m__29667__auto__ == null))){
return m__29667__auto__.call(null,value);
} else {
var m__29667__auto____$1 = (devtools.format._header["_"]);
if(!((m__29667__auto____$1 == null))){
return m__29667__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__29666__auto__ = (((value == null))?null:value);
var m__29667__auto__ = (devtools.format._has_body[goog.typeOf(x__29666__auto__)]);
if(!((m__29667__auto__ == null))){
return m__29667__auto__.call(null,value);
} else {
var m__29667__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__29667__auto____$1 == null))){
return m__29667__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__29666__auto__ = (((value == null))?null:value);
var m__29667__auto__ = (devtools.format._body[goog.typeOf(x__29666__auto__)]);
if(!((m__29667__auto__ == null))){
return m__29667__auto__.call(null,value);
} else {
var m__29667__auto____$1 = (devtools.format._body["_"]);
if(!((m__29667__auto____$1 == null))){
return m__29667__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__6753__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__31525__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__31525__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__31525__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__31525__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__31524__auto__ = temp__6753__auto____$2;
return goog.object.get(o__31524__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__6753__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__31525__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__31525__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__31525__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__31525__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__31524__auto__ = temp__6753__auto____$2;
return goog.object.get(o__31524__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__6753__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__31525__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__31525__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__31525__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__31525__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__31524__auto__ = temp__6753__auto____$2;
return goog.object.get(o__31524__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__6753__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__31525__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__31525__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__31525__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__31525__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__31524__auto__ = temp__6753__auto____$2;
return goog.object.get(o__31524__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__6753__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__31525__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__31525__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__31525__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__31525__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__31524__auto__ = temp__6753__auto____$2;
return goog.object.get(o__31524__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__6753__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__31525__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__31525__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__31525__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__31525__auto____$1,"markup");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__31524__auto__ = temp__6753__auto____$2;
return goog.object.get(o__31524__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__6753__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__31525__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__31525__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__31525__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__31525__auto____$1,"markup");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__31524__auto__ = temp__6753__auto____$2;
return goog.object.get(o__31524__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__30176__auto__ = [];
var len__30169__auto___47878 = arguments.length;
var i__30170__auto___47879 = (0);
while(true){
if((i__30170__auto___47879 < len__30169__auto___47878)){
args__30176__auto__.push((arguments[i__30170__auto___47879]));

var G__47880 = (i__30170__auto___47879 + (1));
i__30170__auto___47879 = G__47880;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq47877){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47877));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__30176__auto__ = [];
var len__30169__auto___47882 = arguments.length;
var i__30170__auto___47883 = (0);
while(true){
if((i__30170__auto___47883 < len__30169__auto___47882)){
args__30176__auto__.push((arguments[i__30170__auto___47883]));

var G__47884 = (i__30170__auto___47883 + (1));
i__30170__auto___47883 = G__47884;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq47881){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47881));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__30176__auto__ = [];
var len__30169__auto___47886 = arguments.length;
var i__30170__auto___47887 = (0);
while(true){
if((i__30170__auto___47887 < len__30169__auto___47886)){
args__30176__auto__.push((arguments[i__30170__auto___47887]));

var G__47888 = (i__30170__auto___47887 + (1));
i__30170__auto___47887 = G__47888;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq47885){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47885));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__30176__auto__ = [];
var len__30169__auto___47890 = arguments.length;
var i__30170__auto___47891 = (0);
while(true){
if((i__30170__auto___47891 < len__30169__auto___47890)){
args__30176__auto__.push((arguments[i__30170__auto___47891]));

var G__47892 = (i__30170__auto___47891 + (1));
i__30170__auto___47891 = G__47892;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq47889){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47889));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__30176__auto__ = [];
var len__30169__auto___47894 = arguments.length;
var i__30170__auto___47895 = (0);
while(true){
if((i__30170__auto___47895 < len__30169__auto___47894)){
args__30176__auto__.push((arguments[i__30170__auto___47895]));

var G__47896 = (i__30170__auto___47895 + (1));
i__30170__auto___47895 = G__47896;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq47893){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47893));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__30176__auto__ = [];
var len__30169__auto___47898 = arguments.length;
var i__30170__auto___47899 = (0);
while(true){
if((i__30170__auto___47899 < len__30169__auto___47898)){
args__30176__auto__.push((arguments[i__30170__auto___47899]));

var G__47900 = (i__30170__auto___47899 + (1));
i__30170__auto___47899 = G__47900;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq47897){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47897));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__30176__auto__ = [];
var len__30169__auto___47902 = arguments.length;
var i__30170__auto___47903 = (0);
while(true){
if((i__30170__auto___47903 < len__30169__auto___47902)){
args__30176__auto__.push((arguments[i__30170__auto___47903]));

var G__47904 = (i__30170__auto___47903 + (1));
i__30170__auto___47903 = G__47904;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq47901){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47901));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__30176__auto__ = [];
var len__30169__auto___47912 = arguments.length;
var i__30170__auto___47913 = (0);
while(true){
if((i__30170__auto___47913 < len__30169__auto___47912)){
args__30176__auto__.push((arguments[i__30170__auto___47913]));

var G__47914 = (i__30170__auto___47913 + (1));
i__30170__auto___47913 = G__47914;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((1) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30177__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__47908){
var vec__47909 = p__47908;
var state_override = cljs.core.nth.call(null,vec__47909,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__47909,state_override){
return (function (p1__47905_SHARP_){
return cljs.core.merge.call(null,p1__47905_SHARP_,state_override);
});})(vec__47909,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq47906){
var G__47907 = cljs.core.first.call(null,seq47906);
var seq47906__$1 = cljs.core.next.call(null,seq47906);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__47907,seq47906__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__30176__auto__ = [];
var len__30169__auto___47916 = arguments.length;
var i__30170__auto___47917 = (0);
while(true){
if((i__30170__auto___47917 < len__30169__auto___47916)){
args__30176__auto__.push((arguments[i__30170__auto___47917]));

var G__47918 = (i__30170__auto___47917 + (1));
i__30170__auto___47917 = G__47918;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq47915){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47915));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__30176__auto__ = [];
var len__30169__auto___47921 = arguments.length;
var i__30170__auto___47922 = (0);
while(true){
if((i__30170__auto___47922 < len__30169__auto___47921)){
args__30176__auto__.push((arguments[i__30170__auto___47922]));

var G__47923 = (i__30170__auto___47922 + (1));
i__30170__auto___47922 = G__47923;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((1) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30177__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq47919){
var G__47920 = cljs.core.first.call(null,seq47919);
var seq47919__$1 = cljs.core.next.call(null,seq47919);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__47920,seq47919__$1);
});


//# sourceMappingURL=format.js.map