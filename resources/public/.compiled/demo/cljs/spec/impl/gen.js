// Compiled by ClojureScript 1.9.495 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})

cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__29605__auto__,writer__29606__auto__,opt__29607__auto__){
return cljs.core._write.call(null,writer__29606__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46301 = arguments.length;
var i__30170__auto___46302 = (0);
while(true){
if((i__30170__auto___46302 < len__30169__auto___46301)){
args__30176__auto__.push((arguments[i__30170__auto___46302]));

var G__46303 = (i__30170__auto___46302 + (1));
i__30170__auto___46302 = G__46303;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq46300){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46300));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46305 = arguments.length;
var i__30170__auto___46306 = (0);
while(true){
if((i__30170__auto___46306 < len__30169__auto___46305)){
args__30176__auto__.push((arguments[i__30170__auto___46306]));

var G__46307 = (i__30170__auto___46306 + (1));
i__30170__auto___46306 = G__46307;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq46304){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46304));
});

var g_QMARK__46308 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_46309 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__46308){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__46308))
,null));
var mkg_46310 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__46308,g_46309){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__46308,g_46309))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__46308,g_46309,mkg_46310){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__46308).call(null,x);
});})(g_QMARK__46308,g_46309,mkg_46310))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__46308,g_46309,mkg_46310){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_46310).call(null,gfn);
});})(g_QMARK__46308,g_46309,mkg_46310))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__46308,g_46309,mkg_46310){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_46309).call(null,generator);
});})(g_QMARK__46308,g_46309,mkg_46310))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__46272__auto___46330 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__46272__auto___46330){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46331 = arguments.length;
var i__30170__auto___46332 = (0);
while(true){
if((i__30170__auto___46332 < len__30169__auto___46331)){
args__30176__auto__.push((arguments[i__30170__auto___46332]));

var G__46333 = (i__30170__auto___46332 + (1));
i__30170__auto___46332 = G__46333;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46272__auto___46330))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46272__auto___46330){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46272__auto___46330),args);
});})(g__46272__auto___46330))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__46272__auto___46330){
return (function (seq46311){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46311));
});})(g__46272__auto___46330))
;


var g__46272__auto___46334 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__46272__auto___46334){
return (function cljs$spec$impl$gen$list(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46335 = arguments.length;
var i__30170__auto___46336 = (0);
while(true){
if((i__30170__auto___46336 < len__30169__auto___46335)){
args__30176__auto__.push((arguments[i__30170__auto___46336]));

var G__46337 = (i__30170__auto___46336 + (1));
i__30170__auto___46336 = G__46337;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46272__auto___46334))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46272__auto___46334){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46272__auto___46334),args);
});})(g__46272__auto___46334))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__46272__auto___46334){
return (function (seq46312){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46312));
});})(g__46272__auto___46334))
;


var g__46272__auto___46338 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__46272__auto___46338){
return (function cljs$spec$impl$gen$map(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46339 = arguments.length;
var i__30170__auto___46340 = (0);
while(true){
if((i__30170__auto___46340 < len__30169__auto___46339)){
args__30176__auto__.push((arguments[i__30170__auto___46340]));

var G__46341 = (i__30170__auto___46340 + (1));
i__30170__auto___46340 = G__46341;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46272__auto___46338))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46272__auto___46338){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46272__auto___46338),args);
});})(g__46272__auto___46338))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__46272__auto___46338){
return (function (seq46313){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46313));
});})(g__46272__auto___46338))
;


var g__46272__auto___46342 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__46272__auto___46342){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46343 = arguments.length;
var i__30170__auto___46344 = (0);
while(true){
if((i__30170__auto___46344 < len__30169__auto___46343)){
args__30176__auto__.push((arguments[i__30170__auto___46344]));

var G__46345 = (i__30170__auto___46344 + (1));
i__30170__auto___46344 = G__46345;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46272__auto___46342))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46272__auto___46342){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46272__auto___46342),args);
});})(g__46272__auto___46342))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__46272__auto___46342){
return (function (seq46314){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46314));
});})(g__46272__auto___46342))
;


var g__46272__auto___46346 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__46272__auto___46346){
return (function cljs$spec$impl$gen$set(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46347 = arguments.length;
var i__30170__auto___46348 = (0);
while(true){
if((i__30170__auto___46348 < len__30169__auto___46347)){
args__30176__auto__.push((arguments[i__30170__auto___46348]));

var G__46349 = (i__30170__auto___46348 + (1));
i__30170__auto___46348 = G__46349;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46272__auto___46346))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46272__auto___46346){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46272__auto___46346),args);
});})(g__46272__auto___46346))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__46272__auto___46346){
return (function (seq46315){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46315));
});})(g__46272__auto___46346))
;


var g__46272__auto___46350 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__46272__auto___46350){
return (function cljs$spec$impl$gen$vector(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46351 = arguments.length;
var i__30170__auto___46352 = (0);
while(true){
if((i__30170__auto___46352 < len__30169__auto___46351)){
args__30176__auto__.push((arguments[i__30170__auto___46352]));

var G__46353 = (i__30170__auto___46352 + (1));
i__30170__auto___46352 = G__46353;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46272__auto___46350))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46272__auto___46350){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46272__auto___46350),args);
});})(g__46272__auto___46350))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__46272__auto___46350){
return (function (seq46316){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46316));
});})(g__46272__auto___46350))
;


var g__46272__auto___46354 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__46272__auto___46354){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46355 = arguments.length;
var i__30170__auto___46356 = (0);
while(true){
if((i__30170__auto___46356 < len__30169__auto___46355)){
args__30176__auto__.push((arguments[i__30170__auto___46356]));

var G__46357 = (i__30170__auto___46356 + (1));
i__30170__auto___46356 = G__46357;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46272__auto___46354))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46272__auto___46354){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46272__auto___46354),args);
});})(g__46272__auto___46354))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__46272__auto___46354){
return (function (seq46317){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46317));
});})(g__46272__auto___46354))
;


var g__46272__auto___46358 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__46272__auto___46358){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46359 = arguments.length;
var i__30170__auto___46360 = (0);
while(true){
if((i__30170__auto___46360 < len__30169__auto___46359)){
args__30176__auto__.push((arguments[i__30170__auto___46360]));

var G__46361 = (i__30170__auto___46360 + (1));
i__30170__auto___46360 = G__46361;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46272__auto___46358))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46272__auto___46358){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46272__auto___46358),args);
});})(g__46272__auto___46358))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__46272__auto___46358){
return (function (seq46318){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46318));
});})(g__46272__auto___46358))
;


var g__46272__auto___46362 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__46272__auto___46362){
return (function cljs$spec$impl$gen$elements(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46363 = arguments.length;
var i__30170__auto___46364 = (0);
while(true){
if((i__30170__auto___46364 < len__30169__auto___46363)){
args__30176__auto__.push((arguments[i__30170__auto___46364]));

var G__46365 = (i__30170__auto___46364 + (1));
i__30170__auto___46364 = G__46365;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46272__auto___46362))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46272__auto___46362){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46272__auto___46362),args);
});})(g__46272__auto___46362))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__46272__auto___46362){
return (function (seq46319){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46319));
});})(g__46272__auto___46362))
;


var g__46272__auto___46366 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__46272__auto___46366){
return (function cljs$spec$impl$gen$bind(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46367 = arguments.length;
var i__30170__auto___46368 = (0);
while(true){
if((i__30170__auto___46368 < len__30169__auto___46367)){
args__30176__auto__.push((arguments[i__30170__auto___46368]));

var G__46369 = (i__30170__auto___46368 + (1));
i__30170__auto___46368 = G__46369;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46272__auto___46366))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46272__auto___46366){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46272__auto___46366),args);
});})(g__46272__auto___46366))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__46272__auto___46366){
return (function (seq46320){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46320));
});})(g__46272__auto___46366))
;


var g__46272__auto___46370 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__46272__auto___46370){
return (function cljs$spec$impl$gen$choose(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46371 = arguments.length;
var i__30170__auto___46372 = (0);
while(true){
if((i__30170__auto___46372 < len__30169__auto___46371)){
args__30176__auto__.push((arguments[i__30170__auto___46372]));

var G__46373 = (i__30170__auto___46372 + (1));
i__30170__auto___46372 = G__46373;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46272__auto___46370))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46272__auto___46370){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46272__auto___46370),args);
});})(g__46272__auto___46370))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__46272__auto___46370){
return (function (seq46321){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46321));
});})(g__46272__auto___46370))
;


var g__46272__auto___46374 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__46272__auto___46374){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46375 = arguments.length;
var i__30170__auto___46376 = (0);
while(true){
if((i__30170__auto___46376 < len__30169__auto___46375)){
args__30176__auto__.push((arguments[i__30170__auto___46376]));

var G__46377 = (i__30170__auto___46376 + (1));
i__30170__auto___46376 = G__46377;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46272__auto___46374))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46272__auto___46374){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46272__auto___46374),args);
});})(g__46272__auto___46374))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__46272__auto___46374){
return (function (seq46322){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46322));
});})(g__46272__auto___46374))
;


var g__46272__auto___46378 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__46272__auto___46378){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46379 = arguments.length;
var i__30170__auto___46380 = (0);
while(true){
if((i__30170__auto___46380 < len__30169__auto___46379)){
args__30176__auto__.push((arguments[i__30170__auto___46380]));

var G__46381 = (i__30170__auto___46380 + (1));
i__30170__auto___46380 = G__46381;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46272__auto___46378))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46272__auto___46378){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46272__auto___46378),args);
});})(g__46272__auto___46378))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__46272__auto___46378){
return (function (seq46323){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46323));
});})(g__46272__auto___46378))
;


var g__46272__auto___46382 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__46272__auto___46382){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46383 = arguments.length;
var i__30170__auto___46384 = (0);
while(true){
if((i__30170__auto___46384 < len__30169__auto___46383)){
args__30176__auto__.push((arguments[i__30170__auto___46384]));

var G__46385 = (i__30170__auto___46384 + (1));
i__30170__auto___46384 = G__46385;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46272__auto___46382))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46272__auto___46382){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46272__auto___46382),args);
});})(g__46272__auto___46382))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__46272__auto___46382){
return (function (seq46324){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46324));
});})(g__46272__auto___46382))
;


var g__46272__auto___46386 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__46272__auto___46386){
return (function cljs$spec$impl$gen$sample(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46387 = arguments.length;
var i__30170__auto___46388 = (0);
while(true){
if((i__30170__auto___46388 < len__30169__auto___46387)){
args__30176__auto__.push((arguments[i__30170__auto___46388]));

var G__46389 = (i__30170__auto___46388 + (1));
i__30170__auto___46388 = G__46389;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46272__auto___46386))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46272__auto___46386){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46272__auto___46386),args);
});})(g__46272__auto___46386))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__46272__auto___46386){
return (function (seq46325){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46325));
});})(g__46272__auto___46386))
;


var g__46272__auto___46390 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__46272__auto___46390){
return (function cljs$spec$impl$gen$return(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46391 = arguments.length;
var i__30170__auto___46392 = (0);
while(true){
if((i__30170__auto___46392 < len__30169__auto___46391)){
args__30176__auto__.push((arguments[i__30170__auto___46392]));

var G__46393 = (i__30170__auto___46392 + (1));
i__30170__auto___46392 = G__46393;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46272__auto___46390))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46272__auto___46390){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46272__auto___46390),args);
});})(g__46272__auto___46390))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__46272__auto___46390){
return (function (seq46326){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46326));
});})(g__46272__auto___46390))
;


var g__46272__auto___46394 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__46272__auto___46394){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46395 = arguments.length;
var i__30170__auto___46396 = (0);
while(true){
if((i__30170__auto___46396 < len__30169__auto___46395)){
args__30176__auto__.push((arguments[i__30170__auto___46396]));

var G__46397 = (i__30170__auto___46396 + (1));
i__30170__auto___46396 = G__46397;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46272__auto___46394))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46272__auto___46394){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46272__auto___46394),args);
});})(g__46272__auto___46394))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__46272__auto___46394){
return (function (seq46327){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46327));
});})(g__46272__auto___46394))
;


var g__46272__auto___46398 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__46272__auto___46398){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46399 = arguments.length;
var i__30170__auto___46400 = (0);
while(true){
if((i__30170__auto___46400 < len__30169__auto___46399)){
args__30176__auto__.push((arguments[i__30170__auto___46400]));

var G__46401 = (i__30170__auto___46400 + (1));
i__30170__auto___46400 = G__46401;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46272__auto___46398))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46272__auto___46398){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46272__auto___46398),args);
});})(g__46272__auto___46398))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__46272__auto___46398){
return (function (seq46328){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46328));
});})(g__46272__auto___46398))
;


var g__46272__auto___46402 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__46272__auto___46402){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46403 = arguments.length;
var i__30170__auto___46404 = (0);
while(true){
if((i__30170__auto___46404 < len__30169__auto___46403)){
args__30176__auto__.push((arguments[i__30170__auto___46404]));

var G__46405 = (i__30170__auto___46404 + (1));
i__30170__auto___46404 = G__46405;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46272__auto___46402))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46272__auto___46402){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__46272__auto___46402),args);
});})(g__46272__auto___46402))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__46272__auto___46402){
return (function (seq46329){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46329));
});})(g__46272__auto___46402))
;

var g__46285__auto___46427 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__46285__auto___46427){
return (function cljs$spec$impl$gen$any(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46428 = arguments.length;
var i__30170__auto___46429 = (0);
while(true){
if((i__30170__auto___46429 < len__30169__auto___46428)){
args__30176__auto__.push((arguments[i__30170__auto___46429]));

var G__46430 = (i__30170__auto___46429 + (1));
i__30170__auto___46429 = G__46430;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46285__auto___46427))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46285__auto___46427){
return (function (args){
return cljs.core.deref.call(null,g__46285__auto___46427);
});})(g__46285__auto___46427))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__46285__auto___46427){
return (function (seq46406){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46406));
});})(g__46285__auto___46427))
;


var g__46285__auto___46431 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__46285__auto___46431){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46432 = arguments.length;
var i__30170__auto___46433 = (0);
while(true){
if((i__30170__auto___46433 < len__30169__auto___46432)){
args__30176__auto__.push((arguments[i__30170__auto___46433]));

var G__46434 = (i__30170__auto___46433 + (1));
i__30170__auto___46433 = G__46434;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46285__auto___46431))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46285__auto___46431){
return (function (args){
return cljs.core.deref.call(null,g__46285__auto___46431);
});})(g__46285__auto___46431))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__46285__auto___46431){
return (function (seq46407){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46407));
});})(g__46285__auto___46431))
;


var g__46285__auto___46435 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__46285__auto___46435){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46436 = arguments.length;
var i__30170__auto___46437 = (0);
while(true){
if((i__30170__auto___46437 < len__30169__auto___46436)){
args__30176__auto__.push((arguments[i__30170__auto___46437]));

var G__46438 = (i__30170__auto___46437 + (1));
i__30170__auto___46437 = G__46438;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46285__auto___46435))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46285__auto___46435){
return (function (args){
return cljs.core.deref.call(null,g__46285__auto___46435);
});})(g__46285__auto___46435))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__46285__auto___46435){
return (function (seq46408){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46408));
});})(g__46285__auto___46435))
;


var g__46285__auto___46439 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__46285__auto___46439){
return (function cljs$spec$impl$gen$char(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46440 = arguments.length;
var i__30170__auto___46441 = (0);
while(true){
if((i__30170__auto___46441 < len__30169__auto___46440)){
args__30176__auto__.push((arguments[i__30170__auto___46441]));

var G__46442 = (i__30170__auto___46441 + (1));
i__30170__auto___46441 = G__46442;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46285__auto___46439))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46285__auto___46439){
return (function (args){
return cljs.core.deref.call(null,g__46285__auto___46439);
});})(g__46285__auto___46439))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__46285__auto___46439){
return (function (seq46409){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46409));
});})(g__46285__auto___46439))
;


var g__46285__auto___46443 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__46285__auto___46443){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46444 = arguments.length;
var i__30170__auto___46445 = (0);
while(true){
if((i__30170__auto___46445 < len__30169__auto___46444)){
args__30176__auto__.push((arguments[i__30170__auto___46445]));

var G__46446 = (i__30170__auto___46445 + (1));
i__30170__auto___46445 = G__46446;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46285__auto___46443))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46285__auto___46443){
return (function (args){
return cljs.core.deref.call(null,g__46285__auto___46443);
});})(g__46285__auto___46443))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__46285__auto___46443){
return (function (seq46410){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46410));
});})(g__46285__auto___46443))
;


var g__46285__auto___46447 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__46285__auto___46447){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46448 = arguments.length;
var i__30170__auto___46449 = (0);
while(true){
if((i__30170__auto___46449 < len__30169__auto___46448)){
args__30176__auto__.push((arguments[i__30170__auto___46449]));

var G__46450 = (i__30170__auto___46449 + (1));
i__30170__auto___46449 = G__46450;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46285__auto___46447))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46285__auto___46447){
return (function (args){
return cljs.core.deref.call(null,g__46285__auto___46447);
});})(g__46285__auto___46447))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__46285__auto___46447){
return (function (seq46411){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46411));
});})(g__46285__auto___46447))
;


var g__46285__auto___46451 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__46285__auto___46451){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46452 = arguments.length;
var i__30170__auto___46453 = (0);
while(true){
if((i__30170__auto___46453 < len__30169__auto___46452)){
args__30176__auto__.push((arguments[i__30170__auto___46453]));

var G__46454 = (i__30170__auto___46453 + (1));
i__30170__auto___46453 = G__46454;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46285__auto___46451))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46285__auto___46451){
return (function (args){
return cljs.core.deref.call(null,g__46285__auto___46451);
});})(g__46285__auto___46451))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__46285__auto___46451){
return (function (seq46412){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46412));
});})(g__46285__auto___46451))
;


var g__46285__auto___46455 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__46285__auto___46455){
return (function cljs$spec$impl$gen$double(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46456 = arguments.length;
var i__30170__auto___46457 = (0);
while(true){
if((i__30170__auto___46457 < len__30169__auto___46456)){
args__30176__auto__.push((arguments[i__30170__auto___46457]));

var G__46458 = (i__30170__auto___46457 + (1));
i__30170__auto___46457 = G__46458;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46285__auto___46455))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46285__auto___46455){
return (function (args){
return cljs.core.deref.call(null,g__46285__auto___46455);
});})(g__46285__auto___46455))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__46285__auto___46455){
return (function (seq46413){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46413));
});})(g__46285__auto___46455))
;


var g__46285__auto___46459 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__46285__auto___46459){
return (function cljs$spec$impl$gen$int(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46460 = arguments.length;
var i__30170__auto___46461 = (0);
while(true){
if((i__30170__auto___46461 < len__30169__auto___46460)){
args__30176__auto__.push((arguments[i__30170__auto___46461]));

var G__46462 = (i__30170__auto___46461 + (1));
i__30170__auto___46461 = G__46462;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46285__auto___46459))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46285__auto___46459){
return (function (args){
return cljs.core.deref.call(null,g__46285__auto___46459);
});})(g__46285__auto___46459))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__46285__auto___46459){
return (function (seq46414){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46414));
});})(g__46285__auto___46459))
;


var g__46285__auto___46463 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__46285__auto___46463){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46464 = arguments.length;
var i__30170__auto___46465 = (0);
while(true){
if((i__30170__auto___46465 < len__30169__auto___46464)){
args__30176__auto__.push((arguments[i__30170__auto___46465]));

var G__46466 = (i__30170__auto___46465 + (1));
i__30170__auto___46465 = G__46466;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46285__auto___46463))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46285__auto___46463){
return (function (args){
return cljs.core.deref.call(null,g__46285__auto___46463);
});})(g__46285__auto___46463))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__46285__auto___46463){
return (function (seq46415){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46415));
});})(g__46285__auto___46463))
;


var g__46285__auto___46467 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__46285__auto___46467){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46468 = arguments.length;
var i__30170__auto___46469 = (0);
while(true){
if((i__30170__auto___46469 < len__30169__auto___46468)){
args__30176__auto__.push((arguments[i__30170__auto___46469]));

var G__46470 = (i__30170__auto___46469 + (1));
i__30170__auto___46469 = G__46470;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46285__auto___46467))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46285__auto___46467){
return (function (args){
return cljs.core.deref.call(null,g__46285__auto___46467);
});})(g__46285__auto___46467))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__46285__auto___46467){
return (function (seq46416){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46416));
});})(g__46285__auto___46467))
;


var g__46285__auto___46471 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__46285__auto___46471){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46472 = arguments.length;
var i__30170__auto___46473 = (0);
while(true){
if((i__30170__auto___46473 < len__30169__auto___46472)){
args__30176__auto__.push((arguments[i__30170__auto___46473]));

var G__46474 = (i__30170__auto___46473 + (1));
i__30170__auto___46473 = G__46474;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46285__auto___46471))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46285__auto___46471){
return (function (args){
return cljs.core.deref.call(null,g__46285__auto___46471);
});})(g__46285__auto___46471))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__46285__auto___46471){
return (function (seq46417){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46417));
});})(g__46285__auto___46471))
;


var g__46285__auto___46475 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__46285__auto___46475){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46476 = arguments.length;
var i__30170__auto___46477 = (0);
while(true){
if((i__30170__auto___46477 < len__30169__auto___46476)){
args__30176__auto__.push((arguments[i__30170__auto___46477]));

var G__46478 = (i__30170__auto___46477 + (1));
i__30170__auto___46477 = G__46478;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46285__auto___46475))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46285__auto___46475){
return (function (args){
return cljs.core.deref.call(null,g__46285__auto___46475);
});})(g__46285__auto___46475))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__46285__auto___46475){
return (function (seq46418){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46418));
});})(g__46285__auto___46475))
;


var g__46285__auto___46479 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__46285__auto___46479){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46480 = arguments.length;
var i__30170__auto___46481 = (0);
while(true){
if((i__30170__auto___46481 < len__30169__auto___46480)){
args__30176__auto__.push((arguments[i__30170__auto___46481]));

var G__46482 = (i__30170__auto___46481 + (1));
i__30170__auto___46481 = G__46482;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46285__auto___46479))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46285__auto___46479){
return (function (args){
return cljs.core.deref.call(null,g__46285__auto___46479);
});})(g__46285__auto___46479))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__46285__auto___46479){
return (function (seq46419){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46419));
});})(g__46285__auto___46479))
;


var g__46285__auto___46483 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__46285__auto___46483){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46484 = arguments.length;
var i__30170__auto___46485 = (0);
while(true){
if((i__30170__auto___46485 < len__30169__auto___46484)){
args__30176__auto__.push((arguments[i__30170__auto___46485]));

var G__46486 = (i__30170__auto___46485 + (1));
i__30170__auto___46485 = G__46486;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46285__auto___46483))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46285__auto___46483){
return (function (args){
return cljs.core.deref.call(null,g__46285__auto___46483);
});})(g__46285__auto___46483))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__46285__auto___46483){
return (function (seq46420){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46420));
});})(g__46285__auto___46483))
;


var g__46285__auto___46487 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__46285__auto___46487){
return (function cljs$spec$impl$gen$string(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46488 = arguments.length;
var i__30170__auto___46489 = (0);
while(true){
if((i__30170__auto___46489 < len__30169__auto___46488)){
args__30176__auto__.push((arguments[i__30170__auto___46489]));

var G__46490 = (i__30170__auto___46489 + (1));
i__30170__auto___46489 = G__46490;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46285__auto___46487))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46285__auto___46487){
return (function (args){
return cljs.core.deref.call(null,g__46285__auto___46487);
});})(g__46285__auto___46487))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__46285__auto___46487){
return (function (seq46421){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46421));
});})(g__46285__auto___46487))
;


var g__46285__auto___46491 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__46285__auto___46491){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46492 = arguments.length;
var i__30170__auto___46493 = (0);
while(true){
if((i__30170__auto___46493 < len__30169__auto___46492)){
args__30176__auto__.push((arguments[i__30170__auto___46493]));

var G__46494 = (i__30170__auto___46493 + (1));
i__30170__auto___46493 = G__46494;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46285__auto___46491))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46285__auto___46491){
return (function (args){
return cljs.core.deref.call(null,g__46285__auto___46491);
});})(g__46285__auto___46491))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__46285__auto___46491){
return (function (seq46422){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46422));
});})(g__46285__auto___46491))
;


var g__46285__auto___46495 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__46285__auto___46495){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46496 = arguments.length;
var i__30170__auto___46497 = (0);
while(true){
if((i__30170__auto___46497 < len__30169__auto___46496)){
args__30176__auto__.push((arguments[i__30170__auto___46497]));

var G__46498 = (i__30170__auto___46497 + (1));
i__30170__auto___46497 = G__46498;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46285__auto___46495))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46285__auto___46495){
return (function (args){
return cljs.core.deref.call(null,g__46285__auto___46495);
});})(g__46285__auto___46495))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__46285__auto___46495){
return (function (seq46423){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46423));
});})(g__46285__auto___46495))
;


var g__46285__auto___46499 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__46285__auto___46499){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46500 = arguments.length;
var i__30170__auto___46501 = (0);
while(true){
if((i__30170__auto___46501 < len__30169__auto___46500)){
args__30176__auto__.push((arguments[i__30170__auto___46501]));

var G__46502 = (i__30170__auto___46501 + (1));
i__30170__auto___46501 = G__46502;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46285__auto___46499))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46285__auto___46499){
return (function (args){
return cljs.core.deref.call(null,g__46285__auto___46499);
});})(g__46285__auto___46499))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__46285__auto___46499){
return (function (seq46424){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46424));
});})(g__46285__auto___46499))
;


var g__46285__auto___46503 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__46285__auto___46503){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46504 = arguments.length;
var i__30170__auto___46505 = (0);
while(true){
if((i__30170__auto___46505 < len__30169__auto___46504)){
args__30176__auto__.push((arguments[i__30170__auto___46505]));

var G__46506 = (i__30170__auto___46505 + (1));
i__30170__auto___46505 = G__46506;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46285__auto___46503))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46285__auto___46503){
return (function (args){
return cljs.core.deref.call(null,g__46285__auto___46503);
});})(g__46285__auto___46503))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__46285__auto___46503){
return (function (seq46425){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46425));
});})(g__46285__auto___46503))
;


var g__46285__auto___46507 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__46285__auto___46507){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46508 = arguments.length;
var i__30170__auto___46509 = (0);
while(true){
if((i__30170__auto___46509 < len__30169__auto___46508)){
args__30176__auto__.push((arguments[i__30170__auto___46509]));

var G__46510 = (i__30170__auto___46509 + (1));
i__30170__auto___46509 = G__46510;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});})(g__46285__auto___46507))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__46285__auto___46507){
return (function (args){
return cljs.core.deref.call(null,g__46285__auto___46507);
});})(g__46285__auto___46507))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__46285__auto___46507){
return (function (seq46426){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46426));
});})(g__46285__auto___46507))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__30176__auto__ = [];
var len__30169__auto___46513 = arguments.length;
var i__30170__auto___46514 = (0);
while(true){
if((i__30170__auto___46514 < len__30169__auto___46513)){
args__30176__auto__.push((arguments[i__30170__auto___46514]));

var G__46515 = (i__30170__auto___46514 + (1));
i__30170__auto___46514 = G__46515;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((0) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__30177__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__46511_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__46511_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq46512){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46512));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__46516_SHARP_){
return (new Date(p1__46516_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map