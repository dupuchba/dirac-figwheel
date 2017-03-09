// Compiled by ClojureScript 1.9.495 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x50103_50104 = value;

x50103_50104.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x50108_50109 = value;

x50108_50109.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x50113_50114 = value;

x50113_50114.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__28936__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__28936__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__28936__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__30176__auto__ = [];
var len__30169__auto___50122 = arguments.length;
var i__30170__auto___50123 = (0);
while(true){
if((i__30170__auto___50123 < len__30169__auto___50122)){
args__30176__auto__.push((arguments[i__30170__auto___50123]));

var G__50124 = (i__30170__auto___50123 + (1));
i__30170__auto___50123 = G__50124;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__50118_50125 = cljs.core.seq.call(null,items);
var chunk__50119_50126 = null;
var count__50120_50127 = (0);
var i__50121_50128 = (0);
while(true){
if((i__50121_50128 < count__50120_50127)){
var item_50129 = cljs.core._nth.call(null,chunk__50119_50126,i__50121_50128);
if(!((item_50129 == null))){
if(cljs.core.coll_QMARK_.call(null,item_50129)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_50129)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_50129));
}
} else {
}

var G__50130 = seq__50118_50125;
var G__50131 = chunk__50119_50126;
var G__50132 = count__50120_50127;
var G__50133 = (i__50121_50128 + (1));
seq__50118_50125 = G__50130;
chunk__50119_50126 = G__50131;
count__50120_50127 = G__50132;
i__50121_50128 = G__50133;
continue;
} else {
var temp__6753__auto___50134 = cljs.core.seq.call(null,seq__50118_50125);
if(temp__6753__auto___50134){
var seq__50118_50135__$1 = temp__6753__auto___50134;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50118_50135__$1)){
var c__29859__auto___50136 = cljs.core.chunk_first.call(null,seq__50118_50135__$1);
var G__50137 = cljs.core.chunk_rest.call(null,seq__50118_50135__$1);
var G__50138 = c__29859__auto___50136;
var G__50139 = cljs.core.count.call(null,c__29859__auto___50136);
var G__50140 = (0);
seq__50118_50125 = G__50137;
chunk__50119_50126 = G__50138;
count__50120_50127 = G__50139;
i__50121_50128 = G__50140;
continue;
} else {
var item_50141 = cljs.core.first.call(null,seq__50118_50135__$1);
if(!((item_50141 == null))){
if(cljs.core.coll_QMARK_.call(null,item_50141)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_50141)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_50141));
}
} else {
}

var G__50142 = cljs.core.next.call(null,seq__50118_50135__$1);
var G__50143 = null;
var G__50144 = (0);
var G__50145 = (0);
seq__50118_50125 = G__50142;
chunk__50119_50126 = G__50143;
count__50120_50127 = G__50144;
i__50121_50128 = G__50145;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq50117){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50117));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__30176__auto__ = [];
var len__30169__auto___50153 = arguments.length;
var i__30170__auto___50154 = (0);
while(true){
if((i__30170__auto___50154 < len__30169__auto___50153)){
args__30176__auto__.push((arguments[i__30170__auto___50154]));

var G__50155 = (i__30170__auto___50154 + (1));
i__30170__auto___50154 = G__50155;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((2) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30177__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__50149_50156 = cljs.core.seq.call(null,children);
var chunk__50150_50157 = null;
var count__50151_50158 = (0);
var i__50152_50159 = (0);
while(true){
if((i__50152_50159 < count__50151_50158)){
var child_50160 = cljs.core._nth.call(null,chunk__50150_50157,i__50152_50159);
if(!((child_50160 == null))){
if(cljs.core.coll_QMARK_.call(null,child_50160)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_50160))));
} else {
var temp__6751__auto___50161 = devtools.formatters.helpers.pref.call(null,child_50160);
if(cljs.core.truth_(temp__6751__auto___50161)){
var child_value_50162 = temp__6751__auto___50161;
template.push(child_value_50162);
} else {
}
}
} else {
}

var G__50163 = seq__50149_50156;
var G__50164 = chunk__50150_50157;
var G__50165 = count__50151_50158;
var G__50166 = (i__50152_50159 + (1));
seq__50149_50156 = G__50163;
chunk__50150_50157 = G__50164;
count__50151_50158 = G__50165;
i__50152_50159 = G__50166;
continue;
} else {
var temp__6753__auto___50167 = cljs.core.seq.call(null,seq__50149_50156);
if(temp__6753__auto___50167){
var seq__50149_50168__$1 = temp__6753__auto___50167;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50149_50168__$1)){
var c__29859__auto___50169 = cljs.core.chunk_first.call(null,seq__50149_50168__$1);
var G__50170 = cljs.core.chunk_rest.call(null,seq__50149_50168__$1);
var G__50171 = c__29859__auto___50169;
var G__50172 = cljs.core.count.call(null,c__29859__auto___50169);
var G__50173 = (0);
seq__50149_50156 = G__50170;
chunk__50150_50157 = G__50171;
count__50151_50158 = G__50172;
i__50152_50159 = G__50173;
continue;
} else {
var child_50174 = cljs.core.first.call(null,seq__50149_50168__$1);
if(!((child_50174 == null))){
if(cljs.core.coll_QMARK_.call(null,child_50174)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_50174))));
} else {
var temp__6751__auto___50175 = devtools.formatters.helpers.pref.call(null,child_50174);
if(cljs.core.truth_(temp__6751__auto___50175)){
var child_value_50176 = temp__6751__auto___50175;
template.push(child_value_50176);
} else {
}
}
} else {
}

var G__50177 = cljs.core.next.call(null,seq__50149_50168__$1);
var G__50178 = null;
var G__50179 = (0);
var G__50180 = (0);
seq__50149_50156 = G__50177;
chunk__50150_50157 = G__50178;
count__50151_50158 = G__50179;
i__50152_50159 = G__50180;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq50146){
var G__50147 = cljs.core.first.call(null,seq50146);
var seq50146__$1 = cljs.core.next.call(null,seq50146);
var G__50148 = cljs.core.first.call(null,seq50146__$1);
var seq50146__$2 = cljs.core.next.call(null,seq50146__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__50147,G__50148,seq50146__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__30176__auto__ = [];
var len__30169__auto___50183 = arguments.length;
var i__30170__auto___50184 = (0);
while(true){
if((i__30170__auto___50184 < len__30169__auto___50183)){
args__30176__auto__.push((arguments[i__30170__auto___50184]));

var G__50185 = (i__30170__auto___50184 + (1));
i__30170__auto___50184 = G__50185;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((1) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30177__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq50181){
var G__50182 = cljs.core.first.call(null,seq50181);
var seq50181__$1 = cljs.core.next.call(null,seq50181);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50182,seq50181__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__30176__auto__ = [];
var len__30169__auto___50188 = arguments.length;
var i__30170__auto___50189 = (0);
while(true){
if((i__30170__auto___50189 < len__30169__auto___50188)){
args__30176__auto__.push((arguments[i__30170__auto___50189]));

var G__50190 = (i__30170__auto___50189 + (1));
i__30170__auto___50189 = G__50190;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((1) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30177__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq50186){
var G__50187 = cljs.core.first.call(null,seq50186);
var seq50186__$1 = cljs.core.next.call(null,seq50186);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50187,seq50186__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args50191 = [];
var len__30169__auto___50196 = arguments.length;
var i__30170__auto___50197 = (0);
while(true){
if((i__30170__auto___50197 < len__30169__auto___50196)){
args50191.push((arguments[i__30170__auto___50197]));

var G__50198 = (i__30170__auto___50197 + (1));
i__30170__auto___50197 = G__50198;
continue;
} else {
}
break;
}

var G__50193 = args50191.length;
switch (G__50193) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50191.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj50195 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__28948__auto__ = start_index;
if(cljs.core.truth_(or__28948__auto__)){
return or__28948__auto__;
} else {
return (0);
}
})()};
return obj50195;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__30176__auto__ = [];
var len__30169__auto___50206 = arguments.length;
var i__30170__auto___50207 = (0);
while(true){
if((i__30170__auto___50207 < len__30169__auto___50206)){
args__30176__auto__.push((arguments[i__30170__auto___50207]));

var G__50208 = (i__30170__auto___50207 + (1));
i__30170__auto___50207 = G__50208;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((1) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30177__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__50202){
var vec__50203 = p__50202;
var state_override_fn = cljs.core.nth.call(null,vec__50203,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq50200){
var G__50201 = cljs.core.first.call(null,seq50200);
var seq50200__$1 = cljs.core.next.call(null,seq50200);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__50201,seq50200__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__30040__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_50212_50215 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_50213_50216 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_50212_50215,_STAR_print_fn_STAR_50213_50216,sb__30040__auto__){
return (function (x__30041__auto__){
return sb__30040__auto__.append(x__30041__auto__);
});})(_STAR_print_newline_STAR_50212_50215,_STAR_print_fn_STAR_50213_50216,sb__30040__auto__))
;

try{var _STAR_print_level_STAR_50214_50217 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_50214_50217;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_50213_50216;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_50212_50215;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__30040__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_50219 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_50219;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Render path: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Render stack:\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__50221 = name;
switch (G__50221) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("no matching special tag name: '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__50226 = tag;
var html_tag = cljs.core.nth.call(null,vec__50226,(0),null);
var style = cljs.core.nth.call(null,vec__50226,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_50230 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid json-ml markup at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_50230;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_50233 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_50234 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_50234;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_50233;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("result of markup rendering must be a template,\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("resolved to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("initial value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__50235 = initial_value;
var G__50236 = value.call(null);
initial_value = G__50235;
value = G__50236;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__50237 = initial_value;
var G__50238 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__50237;
value = G__50238;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__50239 = initial_value;
var G__50240 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__50239;
value = G__50240;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map