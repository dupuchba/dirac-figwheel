// Compiled by ClojureScript 1.9.495 {}
goog.provide('om.next');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.log');
goog.require('om.next.cache');
goog.require('om.next.impl.parser');
goog.require('om.tempid');
goog.require('om.transit');
goog.require('om.util');
goog.require('clojure.zip');
goog.require('om.next.protocols');
goog.require('cljs.analyzer');
goog.require('cljs.analyzer.api');
goog.require('clojure.string');
goog.require('goog.debug.Console');
om.next.collect_statics = (function om$next$collect_statics(dt){
var split_on_static = (function om$next$collect_statics_$_split_on_static(forms){
return cljs.core.split_with.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"static","static",-1440077198,null),null], null), null)),forms);
});
var split_on_symbol = (function om$next$collect_statics_$_split_on_symbol(forms){
return cljs.core.split_with.call(null,cljs.core.complement.call(null,cljs.core.symbol_QMARK_),forms);
});
var dt__$1 = cljs.core.seq.call(null,dt);
var dt_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
var statics = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fields","fields",-1932066230),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"protocols","protocols",-5615896),cljs.core.PersistentVector.EMPTY], null);
while(true){
if(dt__$1){
var vec__44620 = split_on_static.call(null,dt__$1);
var pre = cljs.core.nth.call(null,vec__44620,(0),null);
var vec__44623 = cljs.core.nth.call(null,vec__44620,(1),null);
var seq__44624 = cljs.core.seq.call(null,vec__44623);
var first__44625 = cljs.core.first.call(null,seq__44624);
var seq__44624__$1 = cljs.core.next.call(null,seq__44624);
var _ = first__44625;
var first__44625__$1 = cljs.core.first.call(null,seq__44624__$1);
var seq__44624__$2 = cljs.core.next.call(null,seq__44624__$1);
var sym = first__44625__$1;
var remaining = seq__44624__$2;
var post = vec__44623;
var dt_SINGLEQUOTE___$1 = cljs.core.into.call(null,dt_SINGLEQUOTE_,pre);
if(cljs.core.seq.call(null,post)){
if(cljs.core._EQ_.call(null,sym,new cljs.core.Symbol(null,"field","field",338095027,null))){
var vec__44626 = cljs.core.split_at.call(null,(2),remaining);
var field_info = cljs.core.nth.call(null,vec__44626,(0),null);
var dt__$2 = cljs.core.nth.call(null,vec__44626,(1),null);
var G__44632 = cljs.core.seq.call(null,dt__$2);
var G__44633 = dt_SINGLEQUOTE___$1;
var G__44634 = cljs.core.update_in.call(null,statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fields","fields",-1932066230)], null),cljs.core.conj,cljs.core.vec.call(null,field_info));
dt__$1 = G__44632;
dt_SINGLEQUOTE_ = G__44633;
statics = G__44634;
continue;
} else {
if((sym instanceof cljs.core.Symbol)){
var vec__44629 = split_on_symbol.call(null,remaining);
var protocol_info = cljs.core.nth.call(null,vec__44629,(0),null);
var dt__$2 = cljs.core.nth.call(null,vec__44629,(1),null);
var G__44635 = cljs.core.seq.call(null,dt__$2);
var G__44636 = dt_SINGLEQUOTE___$1;
var G__44637 = cljs.core.update_in.call(null,statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocols","protocols",-5615896)], null),cljs.core.into,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym], null),protocol_info));
dt__$1 = G__44635;
dt_SINGLEQUOTE_ = G__44636;
statics = G__44637;
continue;
} else {
throw (new Error("Malformed static"));

}
}
} else {
var G__44638 = null;
var G__44639 = dt_SINGLEQUOTE___$1;
var G__44640 = statics;
dt__$1 = G__44638;
dt_SINGLEQUOTE_ = G__44639;
statics = G__44640;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dt","dt",-368444759),dt_SINGLEQUOTE_,new cljs.core.Keyword(null,"statics","statics",-1984882809),statics], null);
}
break;
}
});
om.next.validate_statics = (function om$next$validate_statics(dt){
var temp__6753__auto__ = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["IQueryParams",null,"IQuery",null,"Ident",null], null), null),cljs.core.map.call(null,(function (p1__44641_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44641_SHARP_)].join(''),/\//));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,dt)));
if(cljs.core.truth_(temp__6753__auto__)){
var invalid = temp__6753__auto__;
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(invalid),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" protocol declaration must appear with `static`.")].join('')));
} else {
return null;
}
});
om.next.lifecycle_sigs = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"initLocalState","initLocalState",1594027651,null),new cljs.core.Symbol(null,"componentWillMount","componentWillMount",1355203908,null),new cljs.core.Symbol(null,"componentDidUpdate","componentDidUpdate",-342946454,null),new cljs.core.Symbol(null,"componentWillUnmount","componentWillUnmount",-1080646955,null),new cljs.core.Symbol(null,"componentWillReceiveProps","componentWillReceiveProps",-2094446795,null),new cljs.core.Symbol(null,"shouldComponentUpdate","shouldComponentUpdate",-858684809,null),new cljs.core.Symbol(null,"render","render",232498073,null),new cljs.core.Symbol(null,"componentWillUpdate","componentWillUpdate",-1997044837,null),new cljs.core.Symbol(null,"componentDidMount","componentDidMount",-1698724833,null)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"prev-props","prev-props",1081981230,null),new cljs.core.Symbol(null,"prev-state","prev-state",1365252518,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"next-props","next-props",-266324026,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"next-props","next-props",-266324026,null),new cljs.core.Symbol(null,"next-state","next-state",211803275,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"next-props","next-props",-266324026,null),new cljs.core.Symbol(null,"next-state","next-state",211803275,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null)]);
om.next.validate_sig = (function om$next$validate_sig(p__44642){
var vec__44646 = p__44642;
var name = cljs.core.nth.call(null,vec__44646,(0),null);
var sig = cljs.core.nth.call(null,vec__44646,(1),null);
var method = vec__44646;
var sig_SINGLEQUOTE_ = cljs.core.get.call(null,om.next.lifecycle_sigs,name);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,sig_SINGLEQUOTE_),cljs.core.count.call(null,sig))){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid signature for "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" got "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", need "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig_SINGLEQUOTE_)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(= (count sig') (count sig))")].join('')));
}
});
om.next.reshape_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reshape","reshape",1588089910),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"initLocalState","initLocalState",1594027651,null),(function (p__44692){
var vec__44693 = p__44692;
var seq__44694 = cljs.core.seq.call(null,vec__44693);
var first__44695 = cljs.core.first.call(null,seq__44694);
var seq__44694__$1 = cljs.core.next.call(null,seq__44694);
var name = first__44695;
var first__44695__$1 = cljs.core.first.call(null,seq__44694__$1);
var seq__44694__$2 = cljs.core.next.call(null,seq__44694__$1);
var vec__44696 = first__44695__$1;
var this$ = cljs.core.nth.call(null,vec__44696,(0),null);
var args = vec__44696;
var body = seq__44694__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29882__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__44656__auto__","ret__44656__auto__",1750468184,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","js-obj","cljs.core/js-obj",1009370607,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__44656__auto__","ret__44656__auto__",1750468184,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
}),new cljs.core.Symbol(null,"componentWillReceiveProps","componentWillReceiveProps",-2094446795,null),(function (p__44699){
var vec__44700 = p__44699;
var seq__44701 = cljs.core.seq.call(null,vec__44700);
var first__44702 = cljs.core.first.call(null,seq__44701);
var seq__44701__$1 = cljs.core.next.call(null,seq__44701);
var name = first__44702;
var first__44702__$1 = cljs.core.first.call(null,seq__44701__$1);
var seq__44701__$2 = cljs.core.next.call(null,seq__44701__$1);
var vec__44703 = first__44702__$1;
var this$ = cljs.core.nth.call(null,vec__44703,(0),null);
var next_props = cljs.core.nth.call(null,vec__44703,(1),null);
var args = vec__44703;
var body = seq__44701__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29882__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44657__auto__","this__44657__auto__",2120426841,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__44658__auto__","next-props__44658__auto__",-1076953452,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29882__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44657__auto__","this__44657__auto__",2120426841,null)),(function (){var x__29882__auto__ = next_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-next-props","om.next/-next-props",1700067080,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__44658__auto__","next-props__44658__auto__",-1076953452,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44657__auto__","this__44657__auto__",2120426841,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
}),new cljs.core.Symbol(null,"componentWillUpdate","componentWillUpdate",-1997044837,null),(function (p__44706){
var vec__44707 = p__44706;
var seq__44708 = cljs.core.seq.call(null,vec__44707);
var first__44709 = cljs.core.first.call(null,seq__44708);
var seq__44708__$1 = cljs.core.next.call(null,seq__44708);
var name = first__44709;
var first__44709__$1 = cljs.core.first.call(null,seq__44708__$1);
var seq__44708__$2 = cljs.core.next.call(null,seq__44708__$1);
var vec__44710 = first__44709__$1;
var this$ = cljs.core.nth.call(null,vec__44710,(0),null);
var next_props = cljs.core.nth.call(null,vec__44710,(1),null);
var next_state = cljs.core.nth.call(null,vec__44710,(2),null);
var args = vec__44710;
var body = seq__44708__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29882__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44659__auto__","this__44659__auto__",-1612034220,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__44660__auto__","next-props__44660__auto__",865769588,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__44661__auto__","next-state__44661__auto__",2088144285,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29882__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44659__auto__","this__44659__auto__",-1612034220,null)),(function (){var x__29882__auto__ = next_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-next-props","om.next/-next-props",1700067080,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__44660__auto__","next-props__44660__auto__",865769588,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44659__auto__","this__44659__auto__",-1612034220,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = next_state;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__44661__auto__","next-state__44661__auto__",2088144285,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$pendingState"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__44661__auto__","next-state__44661__auto__",2088144285,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__44662__auto__","ret__44662__auto__",-1338137529,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","implements?","cljs.core/implements?",-251485149,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","Ident","om.next/Ident",-1165621946,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44659__auto__","this__44659__auto__",-1612034220,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__44663__auto__","ident__44663__auto__",-134995338,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",-1255218310,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44659__auto__","this__44659__auto__",-1612034220,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","props","om.next/props",679329025,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44659__auto__","this__44659__auto__",-1612034220,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__44664__auto__","next-ident__44664__auto__",-2058935648,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",-1255218310,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44659__auto__","this__44659__auto__",-1612034220,null)),(function (){var x__29882__auto__ = next_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__44663__auto__","ident__44663__auto__",-134995338,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__44664__auto__","next-ident__44664__auto__",-2058935648,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__44665__auto__","idxr__44665__auto__",1253217387,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44659__auto__","this__44659__auto__",-1612034220,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__44665__auto__","idxr__44665__auto__",1253217387,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexes","indexes",1496475545)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__44665__auto__","idxr__44665__auto__",1253217387,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__44666__auto__","indexes__44666__auto__",2075031194,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__44666__auto__","indexes__44666__auto__",2075031194,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__44663__auto__","ident__44663__auto__",-134995338,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","disj","cljs.core/disj",1679005177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44659__auto__","this__44659__auto__",-1612034220,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__44664__auto__","next-ident__44664__auto__",-2058935648,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fnil","cljs.core/fnil",479587341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null)),(function (){var x__29882__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44659__auto__","this__44659__auto__",-1612034220,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-props!","om.next/merge-pending-props!",-1035300673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44659__auto__","this__44659__auto__",-1612034220,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-state!","om.next/merge-pending-state!",1487578810,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44659__auto__","this__44659__auto__",-1612034220,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__44662__auto__","ret__44662__auto__",-1338137529,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
}),new cljs.core.Symbol(null,"componentDidUpdate","componentDidUpdate",-342946454,null),(function (p__44713){
var vec__44714 = p__44713;
var seq__44715 = cljs.core.seq.call(null,vec__44714);
var first__44716 = cljs.core.first.call(null,seq__44715);
var seq__44715__$1 = cljs.core.next.call(null,seq__44715);
var name = first__44716;
var first__44716__$1 = cljs.core.first.call(null,seq__44715__$1);
var seq__44715__$2 = cljs.core.next.call(null,seq__44715__$1);
var vec__44717 = first__44716__$1;
var this$ = cljs.core.nth.call(null,vec__44717,(0),null);
var prev_props = cljs.core.nth.call(null,vec__44717,(1),null);
var prev_state = cljs.core.nth.call(null,vec__44717,(2),null);
var args = vec__44717;
var body = seq__44715__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29882__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44667__auto__","this__44667__auto__",-203137608,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-props__44668__auto__","prev-props__44668__auto__",1068202961,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-state__44669__auto__","prev-state__44669__auto__",-1621029453,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29882__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44667__auto__","this__44667__auto__",-203137608,null)),(function (){var x__29882__auto__ = prev_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-prev-props","om.next/-prev-props",-1189686117,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-props__44668__auto__","prev-props__44668__auto__",1068202961,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44667__auto__","this__44667__auto__",-203137608,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = prev_state;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-state__44669__auto__","prev-state__44669__auto__",-1621029453,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$previousState"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),body,(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","clear-prev-props!","om.next/clear-prev-props!",1240655595,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44667__auto__","this__44667__auto__",-203137608,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
}),new cljs.core.Symbol(null,"componentWillMount","componentWillMount",1355203908,null),(function (p__44720){
var vec__44721 = p__44720;
var seq__44722 = cljs.core.seq.call(null,vec__44721);
var first__44723 = cljs.core.first.call(null,seq__44722);
var seq__44722__$1 = cljs.core.next.call(null,seq__44722);
var name = first__44723;
var first__44723__$1 = cljs.core.first.call(null,seq__44722__$1);
var seq__44722__$2 = cljs.core.next.call(null,seq__44722__$1);
var vec__44724 = first__44723__$1;
var this$ = cljs.core.nth.call(null,vec__44724,(0),null);
var args = vec__44724;
var body = seq__44722__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29882__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44670__auto__","this__44670__auto__",-1421400732,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29882__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44670__auto__","this__44670__auto__",-1421400732,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__44671__auto__","indexer__44671__auto__",435997605,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44670__auto__","this__44670__auto__",-1421400732,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__44671__auto__","indexer__44671__auto__",435997605,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","index-component!","om.next.protocols/index-component!",-1047911549,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__44671__auto__","indexer__44671__auto__",435997605,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44670__auto__","this__44670__auto__",-1421400732,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
}),new cljs.core.Symbol(null,"componentWillUnmount","componentWillUnmount",-1080646955,null),(function (p__44727){
var vec__44728 = p__44727;
var seq__44729 = cljs.core.seq.call(null,vec__44728);
var first__44730 = cljs.core.first.call(null,seq__44729);
var seq__44729__$1 = cljs.core.next.call(null,seq__44729);
var name = first__44730;
var first__44730__$1 = cljs.core.first.call(null,seq__44729__$1);
var seq__44729__$2 = cljs.core.next.call(null,seq__44729__$1);
var vec__44731 = first__44730__$1;
var this$ = cljs.core.nth.call(null,vec__44731,(0),null);
var args = vec__44731;
var body = seq__44729__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29882__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44672__auto__","this__44672__auto__",777449491,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29882__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44672__auto__","this__44672__auto__",777449491,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__44673__auto__","r__44673__auto__",-107999752,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44672__auto__","this__44672__auto__",777449491,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__44674__auto__","cfg__44674__auto__",1776060338,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__44673__auto__","r__44673__auto__",-107999752,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__44675__auto__","st__44675__auto__",-502347098,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"state","state",-1988618099)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__44674__auto__","cfg__44674__auto__",1776060338,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__44676__auto__","indexer__44676__auto__",-68719274,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__44674__auto__","cfg__44674__auto__",1776060338,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__44675__auto__","st__44675__auto__",-502347098,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__44675__auto__","st__44675__auto__",-502347098,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44672__auto__","this__44672__auto__",777449491,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__44675__auto__","st__44675__auto__",-502347098,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44672__auto__","this__44672__auto__",777449491,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__44676__auto__","indexer__44676__auto__",-68719274,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","drop-component!","om.next.protocols/drop-component!",1227662523,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__44676__auto__","indexer__44676__auto__",-68719274,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44672__auto__","this__44672__auto__",777449491,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
}),new cljs.core.Symbol(null,"render","render",232498073,null),(function (p__44734){
var vec__44735 = p__44734;
var seq__44736 = cljs.core.seq.call(null,vec__44735);
var first__44737 = cljs.core.first.call(null,seq__44736);
var seq__44736__$1 = cljs.core.next.call(null,seq__44736);
var name = first__44737;
var first__44737__$1 = cljs.core.first.call(null,seq__44736__$1);
var seq__44736__$2 = cljs.core.next.call(null,seq__44736__$1);
var vec__44738 = first__44737__$1;
var this$ = cljs.core.nth.call(null,vec__44738,(0),null);
var args = vec__44738;
var body = seq__44736__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29882__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44677__auto__","this__44677__auto__",-2101762264,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29882__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44677__auto__","this__44677__auto__",-2101762264,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*reconciler*","om.next/*reconciler*",2063201960,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44677__auto__","this__44677__auto__",-2101762264,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*depth*","om.next/*depth*",161261240,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","depth","om.next/depth",-1750843006,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44677__auto__","this__44677__auto__",-2101762264,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*shared*","om.next/*shared*",-270307055,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","shared","om.next/shared",426941171,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44677__auto__","this__44677__auto__",-2101762264,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*instrument*","om.next/*instrument*",-1428199886,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","instrument","om.next/instrument",1410710376,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44677__auto__","this__44677__auto__",-2101762264,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*parent*","om.next/*parent*",-764653121,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44677__auto__","this__44677__auto__",-2101762264,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
})], null),new cljs.core.Keyword(null,"defaults","defaults",976027214),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"isMounted","isMounted",-1263254906,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44678__auto__","this__44678__auto__",215993648,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","boolean","cljs.core/boolean",-1222483266,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","getValueByKeys","goog.object/getValueByKeys",-1135358948,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44678__auto__","this__44678__auto__",215993648,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_reactInternalInstance"),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_renderedComponent"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"shouldComponentUpdate","shouldComponentUpdate",-858684809,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44678__auto__","this__44678__auto__",215993648,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__44679__auto__","next-props__44679__auto__",1400371464,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__44680__auto__","next-state__44680__auto__",-1253043809,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-children__44681__auto__","next-children__44681__auto__",-1420862421,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__44679__auto__","next-props__44679__auto__",1400371464,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-children","om.next/-children",-16965396,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__44679__auto__","next-props__44679__auto__",1400371464,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__44679__auto__","next-props__44679__auto__",1400371464,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$value"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__44679__auto__","next-props__44679__auto__",1400371464,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__44679__auto__","next-props__44679__auto__",1400371464,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","OmProps","om.next/OmProps",-1258962915,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__44679__auto__","next-props__44679__auto__",1400371464,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","unwrap","om.next/unwrap",-621667282,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","props","om.next/props",679329025,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44678__auto__","this__44678__auto__",215993648,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__44679__auto__","next-props__44679__auto__",1400371464,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44678__auto__","this__44678__auto__",215993648,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-state","-state",1439972041,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44678__auto__","this__44678__auto__",215993648,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-state","-state",1439972041,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__44680__auto__","next-state__44680__auto__",-1253043809,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44678__auto__","this__44678__auto__",215993648,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-props","om.next/-props",1063294959,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-children","om.next/-children",-16965396,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-children__44681__auto__","next-children__44681__auto__",-1420862421,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentWillUpdate","componentWillUpdate",-1997044837,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44678__auto__","this__44678__auto__",215993648,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__44679__auto__","next-props__44679__auto__",1400371464,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__44680__auto__","next-state__44680__auto__",-1253043809,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","implements?","cljs.core/implements?",-251485149,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","Ident","om.next/Ident",-1165621946,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44678__auto__","this__44678__auto__",215993648,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__44682__auto__","ident__44682__auto__",840257166,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",-1255218310,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44678__auto__","this__44678__auto__",215993648,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","props","om.next/props",679329025,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44678__auto__","this__44678__auto__",215993648,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__44683__auto__","next-ident__44683__auto__",-951028350,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",-1255218310,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44678__auto__","this__44678__auto__",215993648,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-next-props","om.next/-next-props",1700067080,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__44679__auto__","next-props__44679__auto__",1400371464,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44678__auto__","this__44678__auto__",215993648,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__44682__auto__","ident__44682__auto__",840257166,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__44683__auto__","next-ident__44683__auto__",-951028350,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__44684__auto__","idxr__44684__auto__",1407474413,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44678__auto__","this__44678__auto__",215993648,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__44684__auto__","idxr__44684__auto__",1407474413,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexes","indexes",1496475545)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__44684__auto__","idxr__44684__auto__",1407474413,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__44685__auto__","indexes__44685__auto__",-469231731,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__44685__auto__","indexes__44685__auto__",-469231731,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__44682__auto__","ident__44682__auto__",840257166,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","disj","cljs.core/disj",1679005177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44678__auto__","this__44678__auto__",215993648,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__44683__auto__","next-ident__44683__auto__",-951028350,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fnil","cljs.core/fnil",479587341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null)),(function (){var x__29882__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44678__auto__","this__44678__auto__",215993648,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-props!","om.next/merge-pending-props!",-1035300673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44678__auto__","this__44678__auto__",215993648,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-state!","om.next/merge-pending-state!",1487578810,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44678__auto__","this__44678__auto__",215993648,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentDidUpdate","componentDidUpdate",-342946454,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44678__auto__","this__44678__auto__",215993648,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-props__44686__auto__","prev-props__44686__auto__",-1172658168,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-state__44687__auto__","prev-state__44687__auto__",1367401949,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","clear-prev-props!","om.next/clear-prev-props!",1240655595,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44678__auto__","this__44678__auto__",215993648,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentWillMount","componentWillMount",1355203908,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44678__auto__","this__44678__auto__",215993648,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__44688__auto__","indexer__44688__auto__",154877883,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44678__auto__","this__44678__auto__",215993648,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__44688__auto__","indexer__44688__auto__",154877883,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","index-component!","om.next.protocols/index-component!",-1047911549,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__44688__auto__","indexer__44688__auto__",154877883,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44678__auto__","this__44678__auto__",215993648,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentWillUnmount","componentWillUnmount",-1080646955,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44678__auto__","this__44678__auto__",215993648,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__44689__auto__","r__44689__auto__",-1842350245,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44678__auto__","this__44678__auto__",215993648,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__44690__auto__","cfg__44690__auto__",2047266143,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__44689__auto__","r__44689__auto__",-1842350245,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__44691__auto__","st__44691__auto__",1400113894,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"state","state",-1988618099)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__44690__auto__","cfg__44690__auto__",2047266143,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__44688__auto__","indexer__44688__auto__",154877883,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__44690__auto__","cfg__44690__auto__",2047266143,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__44691__auto__","st__44691__auto__",1400113894,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__44691__auto__","st__44691__auto__",1400113894,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44678__auto__","this__44678__auto__",215993648,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__44691__auto__","st__44691__auto__",1400113894,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44678__auto__","this__44678__auto__",215993648,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__44688__auto__","indexer__44688__auto__",154877883,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","drop-component!","om.next.protocols/drop-component!",1227662523,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__44688__auto__","indexer__44688__auto__",154877883,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44678__auto__","this__44678__auto__",215993648,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})()))))], null);
om.next.reshape = (function om$next$reshape(dt,p__44741){
var map__44782 = p__44741;
var map__44782__$1 = ((((!((map__44782 == null)))?((((map__44782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44782):map__44782);
var reshape = cljs.core.get.call(null,map__44782__$1,new cljs.core.Keyword(null,"reshape","reshape",1588089910));
var defaults = cljs.core.get.call(null,map__44782__$1,new cljs.core.Keyword(null,"defaults","defaults",976027214));
var reshape_STAR_ = ((function (map__44782,map__44782__$1,reshape,defaults){
return (function om$next$reshape_$_reshape_STAR_(x){
if((cljs.core.sequential_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,reshape,cljs.core.first.call(null,x)))){
var reshapef = cljs.core.get.call(null,reshape,cljs.core.first.call(null,x));
om.next.validate_sig.call(null,x);

return reshapef.call(null,x);
} else {
return x;
}
});})(map__44782,map__44782__$1,reshape,defaults))
;
var add_defaults_step = ((function (map__44782,map__44782__$1,reshape,defaults){
return (function om$next$reshape_$_add_defaults_step(ret,p__44803){
var vec__44813 = p__44803;
var name = cljs.core.nth.call(null,vec__44813,(0),null);
var impl = cljs.core.nth.call(null,vec__44813,(1),null);
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([name], true),cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.seq_QMARK_,ret))))){
var vec__44816 = cljs.core.split_with.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"Object","Object",61210754,null),null], null), null)),ret);
var before = cljs.core.nth.call(null,vec__44816,(0),null);
var vec__44819 = cljs.core.nth.call(null,vec__44816,(1),null);
var seq__44820 = cljs.core.seq.call(null,vec__44819);
var first__44821 = cljs.core.first.call(null,seq__44820);
var seq__44820__$1 = cljs.core.next.call(null,seq__44820);
var p = first__44821;
var after = seq__44820__$1;
return cljs.core.into.call(null,cljs.core.conj.call(null,cljs.core.vec.call(null,before),p,cljs.core.cons.call(null,name,impl)),after);
} else {
return ret;
}
});})(map__44782,map__44782__$1,reshape,defaults))
;
var add_defaults = ((function (map__44782,map__44782__$1,reshape,defaults){
return (function om$next$reshape_$_add_defaults(dt__$1){
return cljs.core.reduce.call(null,add_defaults_step,dt__$1,defaults);
});})(map__44782,map__44782__$1,reshape,defaults))
;
var add_object_protocol = ((function (map__44782,map__44782__$1,reshape,defaults){
return (function om$next$reshape_$_add_object_protocol(dt__$1){
if(cljs.core.not.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"Object","Object",61210754,null),null], null), null),dt__$1))){
return cljs.core.conj.call(null,dt__$1,new cljs.core.Symbol(null,"Object","Object",61210754,null));
} else {
return dt__$1;
}
});})(map__44782,map__44782__$1,reshape,defaults))
;
return add_defaults.call(null,add_object_protocol.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,reshape_STAR_,dt))));
});
om.next.defui_STAR_ = (function om$next$defui_STAR_(var_args){
var args44836 = [];
var len__30169__auto___44858 = arguments.length;
var i__30170__auto___44859 = (0);
while(true){
if((i__30170__auto___44859 < len__30169__auto___44858)){
args44836.push((arguments[i__30170__auto___44859]));

var G__44860 = (i__30170__auto___44859 + (1));
i__30170__auto___44859 = G__44860;
continue;
} else {
}
break;
}

var G__44838 = args44836.length;
switch (G__44838) {
case 2:
return om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44836.length)].join('')));

}
});

om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (name,form){
return om.next.defui_STAR_.call(null,name,form,null);
});

om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (name,forms,env){
var field_set_BANG_ = (function om$next$field_set_BANG_(obj,p__44846){
var vec__44850 = p__44846;
var field = cljs.core.nth.call(null,vec__44850,(0),null);
var value = cljs.core.nth.call(null,vec__44850,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29882__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(field)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
});
var docstring = ((typeof cljs.core.first.call(null,forms) === 'string')?cljs.core.first.call(null,forms):null);
var forms__$1 = (function (){var G__44854 = forms;
if(cljs.core.truth_(docstring)){
return cljs.core.rest.call(null,G__44854);
} else {
return G__44854;
}
})();
var map__44853 = om.next.collect_statics.call(null,forms__$1);
var map__44853__$1 = ((((!((map__44853 == null)))?((((map__44853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44853.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44853):map__44853);
var dt = cljs.core.get.call(null,map__44853__$1,new cljs.core.Keyword(null,"dt","dt",-368444759));
var statics = cljs.core.get.call(null,map__44853__$1,new cljs.core.Keyword(null,"statics","statics",-1984882809));
var _ = om.next.validate_statics.call(null,dt);
var rname = (cljs.core.truth_(env)?new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),name)):name);
var ctor = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null)),(function (){var x__29882__auto__ = cljs.core.with_meta.call(null,name,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@constructor"], null)], null),cljs.core.meta.call(null,name),(cljs.core.truth_(docstring)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null):null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","this-as","cljs.core/this-as",623378171,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44830__auto__","this__44830__auto__",845061528,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","React.Component","js/React.Component",752301916,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44830__auto__","this__44830__auto__",845061528,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","js-arguments","cljs.core/js-arguments",464029257,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-initLocalState",".-initLocalState",-1875308467,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44830__auto__","this__44830__auto__",845061528,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-state",".-state",2145135971,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44830__auto__","this__44830__auto__",845061528,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".initLocalState",".initLocalState",-104173886,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44830__auto__","this__44830__auto__",845061528,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-state",".-state",2145135971,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44830__auto__","this__44830__auto__",845061528,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","js-obj","cljs.core/js-obj",1009370607,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44830__auto__","this__44830__auto__",845061528,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
var set_react_proto_BANG_ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__29882__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","clone","goog.object/clone",-508199474,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","React.Component.prototype","js/React.Component.prototype",259217051,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
var ctor__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,name)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","exists?","cljs.core/exists?",1852387968,null)),(function (){var x__29882__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = ctor;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = set_react_proto_BANG_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29882__auto__ = ctor;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = set_react_proto_BANG_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})()))));
var display_name = (cljs.core.truth_(env)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):new cljs.core.Symbol("js","undefined","js/undefined",-329966622,null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29882__auto__ = ctor__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__29882__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),om.next.reshape.call(null,dt,om.next.reshape_map))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__29882__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-prototype","om.next/-prototype",951061230,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-constructor","om.next/-constructor",-675008524,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__29882__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-prototype","om.next/-prototype",951061230,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-constructor","om.next/-constructor",-675008524,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-displayName","om.next/-displayName",250349469,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = display_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__29882__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-prototype","om.next/-prototype",951061230,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-om$isComponent","om.next/-om$isComponent",-1994912590,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core.map.call(null,((function (docstring,forms__$1,map__44853,map__44853__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name){
return (function (p1__44831_SHARP_){
return field_set_BANG_.call(null,name,p1__44831_SHARP_);
});})(docstring,forms__$1,map__44853,map__44853__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name))
,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(statics)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__29882__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core.mapv.call(null,((function (docstring,forms__$1,map__44853,map__44853__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name){
return (function (p1__44832_SHARP_){
var G__44857 = p1__44832_SHARP_;
if((p1__44832_SHARP_ instanceof cljs.core.Symbol)){
return cljs.core.vary_meta.call(null,G__44857,cljs.core.assoc,new cljs.core.Keyword(null,"static","static",1214358571),true);
} else {
return G__44857;
}
});})(docstring,forms__$1,map__44853,map__44853__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name))
,new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(statics)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__29882__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(statics))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__29882__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__29882__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(rname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__29882__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44833__auto__","this__44833__auto__",448699645,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__44834__auto__","writer__44834__auto__",-1240846126,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__44835__auto__","opt__44835__auto__",-719253771,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__44834__auto__","writer__44834__auto__",-1240846126,null)),(function (){var x__29882__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(rname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
});

om.next.defui_STAR_.cljs$lang$maxFixedArity = 3;

om.next.defui = (function om$next$defui(var_args){
var args__30176__auto__ = [];
var len__30169__auto___44866 = arguments.length;
var i__30170__auto___44867 = (0);
while(true){
if((i__30170__auto___44867 < len__30169__auto___44866)){
args__30176__auto__.push((arguments[i__30170__auto___44867]));

var G__44868 = (i__30170__auto___44867 + (1));
i__30170__auto___44867 = G__44868;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((3) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((3)),(0),null)):null);
return om.next.defui.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30177__auto__);
});

om.next.defui.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,forms){
if(cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return om.next.defui_STAR_.call(null,name,forms,_AMPERSAND_env);
} else {
return null;
}
});

om.next.defui.cljs$lang$maxFixedArity = (3);

om.next.defui.cljs$lang$applyTo = (function (seq44862){
var G__44863 = cljs.core.first.call(null,seq44862);
var seq44862__$1 = cljs.core.next.call(null,seq44862);
var G__44864 = cljs.core.first.call(null,seq44862__$1);
var seq44862__$2 = cljs.core.next.call(null,seq44862__$1);
var G__44865 = cljs.core.first.call(null,seq44862__$2);
var seq44862__$3 = cljs.core.next.call(null,seq44862__$2);
return om.next.defui.cljs$core$IFn$_invoke$arity$variadic(G__44863,G__44864,G__44865,seq44862__$3);
});


om.next.defui.cljs$lang$macro = true;
om.next.ui = (function om$next$ui(var_args){
var args__30176__auto__ = [];
var len__30169__auto___44872 = arguments.length;
var i__30170__auto___44873 = (0);
while(true){
if((i__30170__auto___44873 < len__30169__auto___44872)){
args__30176__auto__.push((arguments[i__30170__auto___44873]));

var G__44874 = (i__30170__auto___44873 + (1));
i__30170__auto___44873 = G__44874;
continue;
} else {
}
break;
}

var argseq__30177__auto__ = ((((2) < args__30176__auto__.length))?(new cljs.core.IndexedSeq(args__30176__auto__.slice((2)),(0),null)):null);
return om.next.ui.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30177__auto__);
});

om.next.ui.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"ui_"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","defui","om.next/defui",1665242576,null)),(function (){var x__29882__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),forms)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
});

om.next.ui.cljs$lang$maxFixedArity = (2);

om.next.ui.cljs$lang$applyTo = (function (seq44869){
var G__44870 = cljs.core.first.call(null,seq44869);
var seq44869__$1 = cljs.core.next.call(null,seq44869);
var G__44871 = cljs.core.first.call(null,seq44869__$1);
var seq44869__$2 = cljs.core.next.call(null,seq44869__$1);
return om.next.ui.cljs$core$IFn$_invoke$arity$variadic(G__44870,G__44871,seq44869__$2);
});


om.next.ui.cljs$lang$macro = true;
om.next.invariant_STAR_ = (function om$next$invariant_STAR_(condition,message,env){
var opts = cljs.analyzer.api.get_options.call(null);
var fn_scope = new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859).cljs$core$IFn$_invoke$arity$1(env);
var fn_name = (function (){var G__44877 = fn_scope;
var G__44877__$1 = (((G__44877 == null))?null:cljs.core.first.call(null,G__44877));
var G__44877__$2 = (((G__44877__$1 == null))?null:new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__44877__$1));
if((G__44877__$2 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44877__$2)].join('');
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272).cljs$core$IFn$_invoke$arity$1(opts))){
return null;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__29882__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__44875__auto__","l__44875__auto__",900594032,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*logger*","om.next/*logger*",-530662591,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__29882__auto__ = condition;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.log","error","goog.log/error",-1510663407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__44875__auto__","l__44875__auto__",900594032,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invariant Violation"),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),(function (){var x__29882__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),(function (){var x__29882__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," (in function: `"),(function (){var x__29882__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"`)"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,": "),(function (){var x__29882__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})())));
}
});
om.next.invariant = (function om$next$invariant(_AMPERSAND_form,_AMPERSAND_env,condition,message){
if(cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return om.next.invariant_STAR_.call(null,condition,message,_AMPERSAND_env);
} else {
return null;
}
});

om.next.invariant.cljs$lang$macro = true;
if(typeof om.next._STAR_logger_STAR_ !== 'undefined'){
} else {
om.next._STAR_logger_STAR_ = ((goog.DEBUG)?(function (){
(new goog.debug.Console()).setCapturing(true);

return goog.log.getLogger("om.next");
})()
:null);
}
om.next.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.next._STAR_raf_STAR_ = null;
om.next._STAR_reconciler_STAR_ = null;
om.next._STAR_parent_STAR_ = null;
om.next._STAR_shared_STAR_ = null;
om.next._STAR_instrument_STAR_ = null;
om.next._STAR_depth_STAR_ = (0);
om.next.nil_or_map_QMARK_ = (function om$next$nil_or_map_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_.call(null,x));
});
/**
 * Given a query expression return its key.
 */
om.next.expr__GT_key = (function om$next$expr__GT_key(expr){
if((expr instanceof cljs.core.Keyword)){
return expr;
} else {
if(cljs.core.map_QMARK_.call(null,expr)){
return cljs.core.ffirst.call(null,expr);
} else {
if(cljs.core.seq_QMARK_.call(null,expr)){
var expr_SINGLEQUOTE_ = cljs.core.first.call(null,expr);
if(cljs.core.map_QMARK_.call(null,expr_SINGLEQUOTE_)){
return cljs.core.ffirst.call(null,expr_SINGLEQUOTE_);
} else {
return null;
}
} else {
if(om.util.ident_QMARK_.call(null,expr)){
var G__44879 = expr;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second.call(null,expr))){
return cljs.core.first.call(null,G__44879);
} else {
return G__44879;
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid query expr "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",-881565136)], null));

}
}
}
}
});
/**
 * Return a zipper on a query expression.
 */
om.next.query_zip = (function om$next$query_zip(root){
return clojure.zip.zipper.call(null,(function (p1__44880_SHARP_){
return (cljs.core.vector_QMARK_.call(null,p1__44880_SHARP_)) || (cljs.core.map_QMARK_.call(null,p1__44880_SHARP_)) || (cljs.core.seq_QMARK_.call(null,p1__44880_SHARP_));
}),cljs.core.seq,(function (node,children){
var ret = ((cljs.core.vector_QMARK_.call(null,node))?cljs.core.vec.call(null,children):((cljs.core.map_QMARK_.call(null,node))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_.call(null,node))?children:null)));
return cljs.core.with_meta.call(null,ret,cljs.core.meta.call(null,node));
}),root);
});
/**
 * Move from the current zipper location to the specified key. loc must be a
 * hash map node.
 */
om.next.move_to_key = (function om$next$move_to_key(loc,k){
var loc__$1 = clojure.zip.down.call(null,loc);
while(true){
var node = clojure.zip.node.call(null,loc__$1);
if(cljs.core._EQ_.call(null,k,cljs.core.first.call(null,node))){
return clojure.zip.right.call(null,clojure.zip.down.call(null,loc__$1));
} else {
var G__44881 = clojure.zip.right.call(null,loc__$1);
loc__$1 = G__44881;
continue;
}
break;
}
});
/**
 * Given a query and a path into a query return a zipper focused at the location
 * specified by the path. This location can be replaced to customize / alter
 * the query.
 */
om.next.query_template = (function om$next$query_template(query,path){
var query_template_STAR_ = (function om$next$query_template_$_query_template_STAR_(loc,path__$1){
while(true){
if(cljs.core.empty_QMARK_.call(null,path__$1)){
return loc;
} else {
var node = clojure.zip.node.call(null,loc);
if(cljs.core.vector_QMARK_.call(null,node)){
var G__44914 = clojure.zip.down.call(null,loc);
var G__44915 = path__$1;
loc = G__44914;
path__$1 = G__44915;
continue;
} else {
var vec__44910 = path__$1;
var seq__44911 = cljs.core.seq.call(null,vec__44910);
var first__44912 = cljs.core.first.call(null,seq__44911);
var seq__44911__$1 = cljs.core.next.call(null,seq__44911);
var k = first__44912;
var ks = seq__44911__$1;
var k_SINGLEQUOTE_ = om.next.expr__GT_key.call(null,node);
if(cljs.core._EQ_.call(null,k,k_SINGLEQUOTE_)){
if((cljs.core.map_QMARK_.call(null,node)) || ((cljs.core.seq_QMARK_.call(null,node)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,node))))){
var loc_SINGLEQUOTE_ = om.next.move_to_key.call(null,(function (){var G__44913 = loc;
if(cljs.core.seq_QMARK_.call(null,node)){
return clojure.zip.down.call(null,G__44913);
} else {
return G__44913;
}
})(),k);
var node_SINGLEQUOTE_ = clojure.zip.node.call(null,loc_SINGLEQUOTE_);
if(cljs.core.map_QMARK_.call(null,node_SINGLEQUOTE_)){
if(cljs.core.seq.call(null,ks)){
var G__44916 = clojure.zip.replace.call(null,loc_SINGLEQUOTE_,clojure.zip.node.call(null,om.next.move_to_key.call(null,loc_SINGLEQUOTE_,cljs.core.first.call(null,ks))));
var G__44917 = cljs.core.next.call(null,ks);
loc = G__44916;
path__$1 = G__44917;
continue;
} else {
return loc_SINGLEQUOTE_;
}
} else {
var G__44918 = loc_SINGLEQUOTE_;
var G__44919 = ks;
loc = G__44918;
path__$1 = G__44919;
continue;
}
} else {
var G__44920 = clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,loc))));
var G__44921 = ks;
loc = G__44920;
path__$1 = G__44921;
continue;
}
} else {
var G__44922 = clojure.zip.right.call(null,loc);
var G__44923 = path__$1;
loc = G__44922;
path__$1 = G__44923;
continue;
}
}
}
break;
}
});
return query_template_STAR_.call(null,om.next.query_zip.call(null,query),path);
});
om.next.replace = (function om$next$replace(template,new_query){
return clojure.zip.root.call(null,clojure.zip.replace.call(null,template,new_query));
});
om.next.focused_join = (function om$next$focused_join(expr,ks,full_expr,union_expr){
var expr_meta = cljs.core.meta.call(null,expr);
var expr_SINGLEQUOTE_ = ((cljs.core.map_QMARK_.call(null,expr))?(function (){var join_value = cljs.core.second.call(null,cljs.core.first.call(null,expr));
var join_value__$1 = (((om.util.recursion_QMARK_.call(null,join_value)) && (cljs.core.seq.call(null,ks)))?((!((union_expr == null)))?union_expr:full_expr):join_value);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.ffirst.call(null,expr),om.next.focus_query_STAR_.call(null,join_value__$1,ks,null)]);
})():((cljs.core.seq_QMARK_.call(null,expr))?(function (){var x__29882__auto__ = om.next.focused_join.call(null,cljs.core.first.call(null,expr),ks,null,null);
return cljs.core._conj.call(null,(function (){var x__29882__auto____$1 = cljs.core.second.call(null,expr);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto____$1);
})(),x__29882__auto__);
})():expr
));
var G__44925 = expr_SINGLEQUOTE_;
if(!((expr_meta == null))){
return cljs.core.with_meta.call(null,G__44925,expr_meta);
} else {
return G__44925;
}
});
om.next.focus_query_STAR_ = (function om$next$focus_query_STAR_(query,path,union_expr){
if(cljs.core.empty_QMARK_.call(null,path)){
return query;
} else {
var vec__44929 = path;
var seq__44930 = cljs.core.seq.call(null,vec__44929);
var first__44931 = cljs.core.first.call(null,seq__44930);
var seq__44930__$1 = cljs.core.next.call(null,seq__44930);
var k = first__44931;
var ks = seq__44930__$1;
var match = ((function (vec__44929,seq__44930,first__44931,seq__44930__$1,k,ks){
return (function om$next$focus_query_STAR__$_match(x){
return cljs.core._EQ_.call(null,k,om.util.join_key.call(null,x));
});})(vec__44929,seq__44930,first__44931,seq__44930__$1,k,ks))
;
var value = ((function (vec__44929,seq__44930,first__44931,seq__44930__$1,k,ks){
return (function om$next$focus_query_STAR__$_value(x){
return om.next.focused_join.call(null,x,ks,query,union_expr);
});})(vec__44929,seq__44930,first__44931,seq__44930__$1,k,ks))
;
if(cljs.core.map_QMARK_.call(null,query)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,om.next.focus_query_STAR_.call(null,cljs.core.get.call(null,query,k),ks,query)]);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,match),cljs.core.map.call(null,value),cljs.core.take.call(null,(1))),query);
}
}
});
/**
 * Given a query, focus it along the specified path.
 * 
 *   Examples:
 *  (om.next/focus-query [:foo :bar :baz] [:foo])
 *  => [:foo]
 * 
 *  (om.next/focus-query [{:foo [:bar :baz]} :woz] [:foo :bar])
 *  => [{:foo [:bar]}]
 */
om.next.focus_query = (function om$next$focus_query(query,path){
return om.next.focus_query_STAR_.call(null,query,path,null);
});
/**
 * Given a focused query return the path represented by the query.
 * 
 * Examples:
 * 
 *   (om.next/focus->path [{:foo [{:bar {:baz []}]}])
 *   => [:foo :bar :baz]
 */
om.next.focus__GT_path = (function om$next$focus__GT_path(var_args){
var args44932 = [];
var len__30169__auto___44938 = arguments.length;
var i__30170__auto___44939 = (0);
while(true){
if((i__30170__auto___44939 < len__30169__auto___44938)){
args44932.push((arguments[i__30170__auto___44939]));

var G__44940 = (i__30170__auto___44939 + (1));
i__30170__auto___44939 = G__44940;
continue;
} else {
}
break;
}

var G__44934 = args44932.length;
switch (G__44934) {
case 1:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44932.length)].join('')));

}
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (focus){
return om.next.focus__GT_path.call(null,focus,new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (focus,bound){
return om.next.focus__GT_path.call(null,focus,bound,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3 = (function (focus,bound,path){
while(true){
if(cljs.core.truth_((function (){var and__28936__auto__ = (cljs.core._EQ_.call(null,bound,new cljs.core.Symbol(null,"*","*",345799209,null))) || ((cljs.core.not_EQ_.call(null,path,bound)) && ((cljs.core.count.call(null,path) < cljs.core.count.call(null,bound))));
if(and__28936__auto__){
var and__28936__auto____$1 = cljs.core.some.call(null,om.util.join_QMARK_,focus);
if(cljs.core.truth_(and__28936__auto____$1)){
return ((1) === cljs.core.count.call(null,focus));
} else {
return and__28936__auto____$1;
}
} else {
return and__28936__auto__;
}
})())){
var vec__44935 = om.util.join_entry.call(null,cljs.core.first.call(null,focus));
var k = cljs.core.nth.call(null,vec__44935,(0),null);
var focus_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__44935,(1),null);
var focus_SINGLEQUOTE___$1 = ((om.util.recursion_QMARK_.call(null,focus_SINGLEQUOTE_))?focus:focus_SINGLEQUOTE_);
var G__44942 = focus_SINGLEQUOTE___$1;
var G__44943 = bound;
var G__44944 = cljs.core.conj.call(null,path,k);
focus = G__44942;
bound = G__44943;
path = G__44944;
continue;
} else {
return path;
}
break;
}
});

om.next.focus__GT_path.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
om.next.Ident = function(){};

/**
 * Return the ident for this component
 */
om.next.ident = (function om$next$ident(this$,props){
if((!((this$ == null))) && (!((this$.om$next$Ident$ident$arity$2 == null)))){
return this$.om$next$Ident$ident$arity$2(this$,props);
} else {
var x__29666__auto__ = (((this$ == null))?null:this$);
var m__29667__auto__ = (om.next.ident[goog.typeOf(x__29666__auto__)]);
if(!((m__29667__auto__ == null))){
return m__29667__auto__.call(null,this$,props);
} else {
var m__29667__auto____$1 = (om.next.ident["_"]);
if(!((m__29667__auto____$1 == null))){
return m__29667__auto____$1.call(null,this$,props);
} else {
throw cljs.core.missing_protocol.call(null,"Ident.ident",this$);
}
}
}
});


/**
 * @interface
 */
om.next.IQueryParams = function(){};

/**
 * Return the query parameters
 */
om.next.params = (function om$next$params(this$){
if((!((this$ == null))) && (!((this$.om$next$IQueryParams$params$arity$1 == null)))){
return this$.om$next$IQueryParams$params$arity$1(this$);
} else {
var x__29666__auto__ = (((this$ == null))?null:this$);
var m__29667__auto__ = (om.next.params[goog.typeOf(x__29666__auto__)]);
if(!((m__29667__auto__ == null))){
return m__29667__auto__.call(null,this$);
} else {
var m__29667__auto____$1 = (om.next.params["_"]);
if(!((m__29667__auto____$1 == null))){
return m__29667__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQueryParams.params",this$);
}
}
}
});

(om.next.IQueryParams["_"] = true);

(om.next.params["_"] = (function (_){
return null;
}));

/**
 * @interface
 */
om.next.IQuery = function(){};

/**
 * Return the component's unbound query
 */
om.next.query = (function om$next$query(this$){
if((!((this$ == null))) && (!((this$.om$next$IQuery$query$arity$1 == null)))){
return this$.om$next$IQuery$query$arity$1(this$);
} else {
var x__29666__auto__ = (((this$ == null))?null:this$);
var m__29667__auto__ = (om.next.query[goog.typeOf(x__29666__auto__)]);
if(!((m__29667__auto__ == null))){
return m__29667__auto__.call(null,this$);
} else {
var m__29667__auto____$1 = (om.next.query["_"]);
if(!((m__29667__auto____$1 == null))){
return m__29667__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQuery.query",this$);
}
}
}
});


/**
 * @interface
 */
om.next.ILocalState = function(){};

/**
 * Set the component's local state
 */
om.next._set_state_BANG_ = (function om$next$_set_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_set_state_BANG_$arity$2 == null)))){
return this$.om$next$ILocalState$_set_state_BANG_$arity$2(this$,new_state);
} else {
var x__29666__auto__ = (((this$ == null))?null:this$);
var m__29667__auto__ = (om.next._set_state_BANG_[goog.typeOf(x__29666__auto__)]);
if(!((m__29667__auto__ == null))){
return m__29667__auto__.call(null,this$,new_state);
} else {
var m__29667__auto____$1 = (om.next._set_state_BANG_["_"]);
if(!((m__29667__auto____$1 == null))){
return m__29667__auto____$1.call(null,this$,new_state);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-set-state!",this$);
}
}
}
});

/**
 * Get the component's local state
 */
om.next._get_state = (function om$next$_get_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_state$arity$1(this$);
} else {
var x__29666__auto__ = (((this$ == null))?null:this$);
var m__29667__auto__ = (om.next._get_state[goog.typeOf(x__29666__auto__)]);
if(!((m__29667__auto__ == null))){
return m__29667__auto__.call(null,this$);
} else {
var m__29667__auto____$1 = (om.next._get_state["_"]);
if(!((m__29667__auto____$1 == null))){
return m__29667__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-state",this$);
}
}
}
});

/**
 * Get the component's rendered local state
 */
om.next._get_rendered_state = (function om$next$_get_rendered_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_rendered_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_rendered_state$arity$1(this$);
} else {
var x__29666__auto__ = (((this$ == null))?null:this$);
var m__29667__auto__ = (om.next._get_rendered_state[goog.typeOf(x__29666__auto__)]);
if(!((m__29667__auto__ == null))){
return m__29667__auto__.call(null,this$);
} else {
var m__29667__auto____$1 = (om.next._get_rendered_state["_"]);
if(!((m__29667__auto____$1 == null))){
return m__29667__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-rendered-state",this$);
}
}
}
});

/**
 * Get the component's pending local state
 */
om.next._merge_pending_state_BANG_ = (function om$next$_merge_pending_state_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1 == null)))){
return this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1(this$);
} else {
var x__29666__auto__ = (((this$ == null))?null:this$);
var m__29667__auto__ = (om.next._merge_pending_state_BANG_[goog.typeOf(x__29666__auto__)]);
if(!((m__29667__auto__ == null))){
return m__29667__auto__.call(null,this$);
} else {
var m__29667__auto____$1 = (om.next._merge_pending_state_BANG_["_"]);
if(!((m__29667__auto____$1 == null))){
return m__29667__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-merge-pending-state!",this$);
}
}
}
});

om.next.var_QMARK_ = (function om$next$var_QMARK_(x){
var and__28936__auto__ = (x instanceof cljs.core.Symbol);
if(and__28936__auto__){
return goog.string.startsWith([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),"?");
} else {
return and__28936__auto__;
}
});
om.next.var__GT_keyword = (function om$next$var__GT_keyword(x){
return cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('').substring((1)));
});
om.next.replace_var = (function om$next$replace_var(expr,params){
if(cljs.core.truth_(om.next.var_QMARK_.call(null,expr))){
return cljs.core.get.call(null,params,om.next.var__GT_keyword.call(null,expr),expr);
} else {
return expr;
}
});
om.next.bind_query = (function om$next$bind_query(query,params){
var qm = cljs.core.meta.call(null,query);
var tr = cljs.core.map.call(null,((function (qm){
return (function (p1__44945_SHARP_){
return om.next.bind_query.call(null,p1__44945_SHARP_,params);
});})(qm))
);
var ret = ((cljs.core.seq_QMARK_.call(null,query))?cljs.core.apply.call(null,cljs.core.list,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,tr,query)):((cljs.core.coll_QMARK_.call(null,query))?cljs.core.into.call(null,cljs.core.empty.call(null,query),tr,query):om.next.replace_var.call(null,query,params)
));
var G__44948 = ret;
if(cljs.core.truth_((function (){var and__28936__auto__ = qm;
if(cljs.core.truth_(and__28936__auto__)){
if(!((ret == null))){
if(((ret.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === ret.cljs$core$IMeta$))){
return true;
} else {
if((!ret.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,ret);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,ret);
}
} else {
return and__28936__auto__;
}
})())){
return cljs.core.with_meta.call(null,G__44948,qm);
} else {
return G__44948;
}
});






om.next.component__GT_query_data = (function om$next$component__GT_query_data(component){
var G__44951 = om.next.get_reconciler.call(null,component);
var G__44951__$1 = (((G__44951 == null))?null:new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__44951));
var G__44951__$2 = (((G__44951__$1 == null))?null:new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__44951__$1));
var G__44951__$3 = (((G__44951__$2 == null))?null:cljs.core.deref.call(null,G__44951__$2));
var G__44951__$4 = (((G__44951__$3 == null))?null:new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146).cljs$core$IFn$_invoke$arity$1(G__44951__$3));
if((G__44951__$4 == null)){
return null;
} else {
return cljs.core.get.call(null,G__44951__$4,component);
}
});
/**
 * Return the unbound query for a component.
 */
om.next.get_unbound_query = (function om$next$get_unbound_query(component){
return new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$2(om.next.component__GT_query_data.call(null,component),om.next.query.call(null,component));
});
/**
 * Return the query params for a component.
 */
om.next.get_params = (function om$next$get_params(component){
return new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(om.next.component__GT_query_data.call(null,component),om.next.params.call(null,component));
});
om.next.get_component_query = (function om$next$get_component_query(var_args){
var args44952 = [];
var len__30169__auto___44955 = arguments.length;
var i__30170__auto___44956 = (0);
while(true){
if((i__30170__auto___44956 < len__30169__auto___44955)){
args44952.push((arguments[i__30170__auto___44956]));

var G__44957 = (i__30170__auto___44956 + (1));
i__30170__auto___44956 = G__44957;
continue;
} else {
}
break;
}

var G__44954 = args44952.length;
switch (G__44954) {
case 1:
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44952.length)].join('')));

}
});

om.next.get_component_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_component_query.call(null,component,om.next.component__GT_query_data.call(null,component));
});

om.next.get_component_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query_data){
var q = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$2(query_data,om.next.query.call(null,component));
var c_SINGLEQUOTE_ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c_SINGLEQUOTE_ == null)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Query violation, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(component),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" reuses "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_SINGLEQUOTE_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" query")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(nil? c')")].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(query_data,om.next.params.call(null,component))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),om.next.react_type.call(null,component)], null));
});

om.next.get_component_query.cljs$lang$maxFixedArity = 2;

om.next.iquery_QMARK_ = (function om$next$iquery_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$next$IQuery$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * Return a IQuery/IParams local bound query. Works for component classes
 * and component instances. Does not use the indexer.
 */
om.next.get_class_or_instance_query = (function om$next$get_class_or_instance_query(x){
if(cljs.core.truth_(om.next.component_QMARK_.call(null,x))){
return om.next.get_component_query.call(null,x);
} else {
var q = om.next.query.call(null,x);
var c = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c == null)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Query violation, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" reuses "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" query")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(nil? c)")].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,om.next.params.call(null,x)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),x], null));
}
});
/**
 * Get a component's static query from the indexer. For recursive queries, recurses
 * up the data path. Falls back to `get-class-or-instance-query` if nothing is
 * found in the indexer.
 */
om.next.get_indexed_query = (function om$next$get_indexed_query(component,class_path_query_data,data_path){
while(true){
var qs = cljs.core.filter.call(null,((function (component,class_path_query_data,data_path){
return (function (p1__44961_SHARP_){
return cljs.core._EQ_.call(null,data_path,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__44961_SHARP_),data_path));
});})(component,class_path_query_data,data_path))
,class_path_query_data);
var qs__$1 = ((cljs.core.empty_QMARK_.call(null,qs))?class_path_query_data:qs);
if(!(cljs.core.empty_QMARK_.call(null,qs__$1))){
var q = cljs.core.first.call(null,qs__$1);
var node = clojure.zip.node.call(null,q);
if(!(om.util.recursion_QMARK_.call(null,node))){
return node;
} else {
var G__44962 = component;
var G__44963 = class_path_query_data;
var G__44964 = cljs.core.pop.call(null,data_path);
component = G__44962;
class_path_query_data = G__44963;
data_path = G__44964;
continue;
}
} else {
return om.next.get_class_or_instance_query.call(null,component);
}
break;
}
});
/**
 * Return a IQuery/IParams instance bound query. Works for component classes
 * and component instances. See also om.next/full-query.
 */
om.next.get_query = (function om$next$get_query(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$next$IQuery$)))?true:false):false)){
if(cljs.core.truth_(om.next.component_QMARK_.call(null,x))){
var temp__6751__auto__ = om.next.component__GT_query_data.call(null,x);
if(cljs.core.truth_(temp__6751__auto__)){
var query_data = temp__6751__auto__;
return om.next.get_component_query.call(null,x,query_data);
} else {
var cp = om.next.class_path.call(null,x);
var r = om.next.get_reconciler.call(null,x);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,x));
var class_path_query_data = cljs.core.get.call(null,new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om.next.get_indexer.call(null,r))),cp);
return om.next.get_indexed_query.call(null,x,class_path_query_data,data_path);
}
} else {
return om.next.get_class_or_instance_query.call(null,x);
}
} else {
return null;
}
});
om.next.tag = (function om$next$tag(x,class$){
return cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),class$);
});

/**
* @constructor
*/
om.next.OmProps = (function (props,basis_t){
this.props = props;
this.basis_t = basis_t;
})

om.next.OmProps.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"basis-t","basis-t",216455797,null)], null);
});

om.next.OmProps.cljs$lang$type = true;

om.next.OmProps.cljs$lang$ctorStr = "om.next/OmProps";

om.next.OmProps.cljs$lang$ctorPrWriter = (function (this__29605__auto__,writer__29606__auto__,opt__29607__auto__){
return cljs.core._write.call(null,writer__29606__auto__,"om.next/OmProps");
});

om.next.__GT_OmProps = (function om$next$__GT_OmProps(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});

om.next.om_props = (function om$next$om_props(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});
om.next.om_props_basis = (function om$next$om_props_basis(om_props){
return om_props.basis_t;
});
om.next.nil_props = om.next.om_props.call(null,null,(-1));
om.next.unwrap = (function om$next$unwrap(om_props){
return om_props.props;
});
om.next.compute_react_key = (function om$next$compute_react_key(cl,props){
var temp__6751__auto__ = new cljs.core.Keyword(null,"react-key","react-key",1337881348).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__6751__auto__)){
var rk = temp__6751__auto__;
return rk;
} else {
var temp__6751__auto____$1 = new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props));
if(cljs.core.truth_(temp__6751__auto____$1)){
var idx = temp__6751__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cl.name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('');
} else {
return undefined;
}
}
});
/**
 * Create a factory constructor from a component class created with
 *    om.next/defui.
 */
om.next.factory = (function om$next$factory(var_args){
var args44967 = [];
var len__30169__auto___44975 = arguments.length;
var i__30170__auto___44976 = (0);
while(true){
if((i__30170__auto___44976 < len__30169__auto___44975)){
args44967.push((arguments[i__30170__auto___44976]));

var G__44977 = (i__30170__auto___44976 + (1));
i__30170__auto___44976 = G__44977;
continue;
} else {
}
break;
}

var G__44969 = args44967.length;
switch (G__44969) {
case 1:
return om.next.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44967.length)].join('')));

}
});

om.next.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return om.next.factory.call(null,class$,null);
});

om.next.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__44970){
var map__44971 = p__44970;
var map__44971__$1 = ((((!((map__44971 == null)))?((((map__44971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44971.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44971):map__44971);
var opts = map__44971__$1;
var validator = cljs.core.get.call(null,map__44971__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var keyfn = cljs.core.get.call(null,map__44971__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332));
var instrument_QMARK_ = cljs.core.get.call(null,map__44971__$1,new cljs.core.Keyword(null,"instrument?","instrument?",-1835582396),true);
if(cljs.core.fn_QMARK_.call(null,class$)){
} else {
throw (new Error("Assert failed: (fn? class)"));
}

return ((function (map__44971,map__44971__$1,opts,validator,keyfn,instrument_QMARK_){
return (function() { 
var om$next$self__delegate = function (props,children){
if((validator == null)){
} else {
if(cljs.core.truth_(validator.call(null,props))){
} else {
throw (new Error("Assert failed: (validator props)"));
}
}

if(cljs.core.truth_((function (){var and__28936__auto__ = om.next._STAR_instrument_STAR_;
if(cljs.core.truth_(and__28936__auto__)){
return instrument_QMARK_;
} else {
return and__28936__auto__;
}
})())){
return om.next._STAR_instrument_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"factory","factory",63933746),om.next.factory.call(null,class$,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"instrument?","instrument?",-1835582396),false))], null));
} else {
var key = ((!((keyfn == null)))?keyfn.call(null,props):om.next.compute_react_key.call(null,class$,props));
var ref = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__44974 = ref;
if((ref instanceof cljs.core.Keyword)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44974)].join('');
} else {
return G__44974;
}
})();
var t = ((!((om.next._STAR_reconciler_STAR_ == null)))?om.next.protocols.basis_t.call(null,om.next._STAR_reconciler_STAR_):(0));
return React.createElement(class$,({"omcljs$value": om.next.om_props.call(null,props,t), "omcljs$instrument": om.next._STAR_instrument_STAR_, "key": key, "omcljs$reactKey": key, "ref": ref__$1, "omcljs$shared": om.next._STAR_shared_STAR_, "omcljs$path": new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props)), "omcljs$reconciler": om.next._STAR_reconciler_STAR_, "omcljs$depth": om.next._STAR_depth_STAR_, "omcljs$parent": om.next._STAR_parent_STAR_}),om.util.force_children.call(null,children));
}
};
var om$next$self = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__44979__i = 0, G__44979__a = new Array(arguments.length -  1);
while (G__44979__i < G__44979__a.length) {G__44979__a[G__44979__i] = arguments[G__44979__i + 1]; ++G__44979__i;}
  children = new cljs.core.IndexedSeq(G__44979__a,0);
} 
return om$next$self__delegate.call(this,props,children);};
om$next$self.cljs$lang$maxFixedArity = 1;
om$next$self.cljs$lang$applyTo = (function (arglist__44980){
var props = cljs.core.first(arglist__44980);
var children = cljs.core.rest(arglist__44980);
return om$next$self__delegate(props,children);
});
om$next$self.cljs$core$IFn$_invoke$arity$variadic = om$next$self__delegate;
return om$next$self;
})()
;
;})(map__44971,map__44971__$1,opts,validator,keyfn,instrument_QMARK_))
});

om.next.factory.cljs$lang$maxFixedArity = 2;

/**
 * Returns true if the argument is an Om component.
 */
om.next.component_QMARK_ = (function om$next$component_QMARK_(x){
if(!((x == null))){
return x.om$isComponent === true;
} else {
return false;
}
});
om.next.state = (function om$next$state(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return c.state;
});
/**
 * PRIVATE: Do not use
 */
om.next.get_prop = (function om$next$get_prop(c,k){
return goog.object.get(c.props,k);
});
om.next.get_props_STAR_ = (function om$next$get_props_STAR_(x,k){
if((x == null)){
return om.next.nil_props;
} else {
var y = goog.object.get(x,k);
if((y == null)){
return om.next.nil_props;
} else {
return y;
}
}
});
om.next.get_prev_props = (function om$next$get_prev_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$prev$value");
});
om.next.get_next_props = (function om$next$get_next_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$next$value");
});
om.next.get_props = (function om$next$get_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$value");
});
/**
 * PRIVATE: Do not use
 */
om.next.set_prop_BANG_ = (function om$next$set_prop_BANG_(c,k,v){
return goog.object.set(c.props,k,v);
});
om.next.get_reconciler = (function om$next$get_reconciler(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return om.next.get_prop.call(null,c,"omcljs$reconciler");
});
om.next.props_STAR_ = (function om$next$props_STAR_(var_args){
var args44981 = [];
var len__30169__auto___44984 = arguments.length;
var i__30170__auto___44985 = (0);
while(true){
if((i__30170__auto___44985 < len__30169__auto___44984)){
args44981.push((arguments[i__30170__auto___44985]));

var G__44986 = (i__30170__auto___44985 + (1));
i__30170__auto___44985 = G__44986;
continue;
} else {
}
break;
}

var G__44983 = args44981.length;
switch (G__44983) {
case 2:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44981.length)].join('')));

}
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.max_key.call(null,om.next.om_props_basis,x,y);
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.max_key.call(null,om.next.om_props_basis,x,om.next.props_STAR_.call(null,y,z));
});

om.next.props_STAR_.cljs$lang$maxFixedArity = 3;

om.next.prev_props_STAR_ = (function om$next$prev_props_STAR_(var_args){
var args44988 = [];
var len__30169__auto___44991 = arguments.length;
var i__30170__auto___44992 = (0);
while(true){
if((i__30170__auto___44992 < len__30169__auto___44991)){
args44988.push((arguments[i__30170__auto___44992]));

var G__44993 = (i__30170__auto___44992 + (1));
i__30170__auto___44992 = G__44993;
continue;
} else {
}
break;
}

var G__44990 = args44988.length;
switch (G__44990) {
case 2:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44988.length)].join('')));

}
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.min_key.call(null,om.next.om_props_basis,x,y);
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.min_key.call(null,om.next.om_props_basis,om.next.props_STAR_.call(null,x,y),om.next.props_STAR_.call(null,y,z));
});

om.next.prev_props_STAR_.cljs$lang$maxFixedArity = 3;

om.next._prev_props = (function om$next$_prev_props(prev_props,component){
var cst = component.state;
var props = component.props;
return om.next.unwrap.call(null,om.next.prev_props_STAR_.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,prev_props),om.next.get_prev_props.call(null,cst)),om.next.props_STAR_.call(null,om.next.get_props.call(null,cst),om.next.get_props.call(null,props))));
});
om.next._next_props = (function om$next$_next_props(next_props,component){
return om.next.unwrap.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,component.props),om.next.get_props.call(null,next_props),om.next.get_next_props.call(null,component.state)));
});
om.next.merge_pending_props_BANG_ = (function om$next$merge_pending_props_BANG_(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var cst = c.state;
var props = c.props;
var pending = goog.object.get(cst,"omcljs$next$value");
var prev = om.next.props_STAR_.call(null,om.next.get_props.call(null,cst),om.next.get_props.call(null,props));
goog.object.set(cst,"omcljs$prev$value",prev);

if((pending == null)){
return null;
} else {
goog.object.remove(cst,"omcljs$next$value");

return goog.object.set(cst,"omcljs$value",pending);
}
});
om.next.clear_prev_props_BANG_ = (function om$next$clear_prev_props_BANG_(c){
return goog.object.remove(c.state,"omcljs$prev$value");
});
/**
 * Get basis t value for when the component last read its props from
 *    the global state.
 */
om.next.t = (function om$next$t(c){
return om.next.om_props_basis.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,c.props),om.next.get_props.call(null,c.state)));
});
/**
 * Returns the parent Om component.
 */
om.next.parent = (function om$next$parent(component){
return om.next.get_prop.call(null,component,"omcljs$parent");
});
/**
 * PRIVATE: Returns the render depth (a integer) of the component relative to
 *  the mount root.
 */
om.next.depth = (function om$next$depth(component){
if(om.next.component_QMARK_.call(null,component)){
return om.next.get_prop.call(null,component,"omcljs$depth");
} else {
return null;
}
});
/**
 * Returns the components React key.
 */
om.next.react_key = (function om$next$react_key(component){
return om.next.get_prop.call(null,component,"omcljs$reactKey");
});
/**
 * Returns the component type, regardless of whether the component has been
 *    mounted
 */
om.next.react_type = (function om$next$react_type(x){
var or__28948__auto__ = goog.object.get(x,"type");
if(cljs.core.truth_(or__28948__auto__)){
return or__28948__auto__;
} else {
return cljs.core.type.call(null,x);
}
});
/**
 * Returns the component's Om data path.
 */
om.next.path = (function om$next$path(c){
return om.next.get_prop.call(null,c,"omcljs$path");
});
/**
 * Return the global shared properties of the Om Next root. See :shared and
 * :shared-fn reconciler options.
 */
om.next.shared = (function om$next$shared(var_args){
var args44995 = [];
var len__30169__auto___45000 = arguments.length;
var i__30170__auto___45001 = (0);
while(true){
if((i__30170__auto___45001 < len__30169__auto___45000)){
args44995.push((arguments[i__30170__auto___45001]));

var G__45002 = (i__30170__auto___45001 + (1));
i__30170__auto___45001 = G__45002;
continue;
} else {
}
break;
}

var G__44997 = args44995.length;
switch (G__44997) {
case 1:
return om.next.shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44995.length)].join('')));

}
});

om.next.shared.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.shared.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.shared.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var shared = goog.object.get(component.props,"omcljs$shared");
var ks = (function (){var G__44998 = k_or_ks;
if(!(cljs.core.sequential_QMARK_.call(null,k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__44998],null));
} else {
return G__44998;
}
})();
var G__44999 = shared;
if(!(cljs.core.empty_QMARK_.call(null,ks))){
return cljs.core.get_in.call(null,G__44999,ks);
} else {
return G__44999;
}
});

om.next.shared.cljs$lang$maxFixedArity = 2;

om.next.instrument = (function om$next$instrument(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return om.next.get_prop.call(null,component,"omcljs$instrument");
});
om.next.update_props_BANG_ = (function om$next$update_props_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var G__45005 = c.state;
goog.object.set(G__45005,"omcljs$next$value",om.next.om_props.call(null,next_props,om.next.protocols.basis_t.call(null,om.next.get_reconciler.call(null,c))));

return G__45005;
});
/**
 * Return a components props.
 */
om.next.props = (function om$next$props(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return om.next.unwrap.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,component.props),om.next.get_props.call(null,component.state)));
});
/**
 * Add computed properties to props. Note will replace any pre-existing
 * computed properties.
 */
om.next.computed = (function om$next$computed(props,computed_map){
if((props == null)){
return null;
} else {
if(cljs.core.vector_QMARK_.call(null,props)){
var G__45008 = props;
if(!(cljs.core.empty_QMARK_.call(null,computed_map))){
return cljs.core.vary_meta.call(null,G__45008,cljs.core.assoc,new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329),computed_map);
} else {
return G__45008;
}
} else {
var G__45009 = props;
if(!(cljs.core.empty_QMARK_.call(null,computed_map))){
return cljs.core.assoc.call(null,G__45009,new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329),computed_map);
} else {
return G__45009;
}
}
}
});
/**
 * Return the computed properties on a component or its props.
 */
om.next.get_computed = (function om$next$get_computed(var_args){
var args45010 = [];
var len__30169__auto___45015 = arguments.length;
var i__30170__auto___45016 = (0);
while(true){
if((i__30170__auto___45016 < len__30169__auto___45015)){
args45010.push((arguments[i__30170__auto___45016]));

var G__45017 = (i__30170__auto___45016 + (1));
i__30170__auto___45016 = G__45017;
continue;
} else {
}
break;
}

var G__45012 = args45010.length;
switch (G__45012) {
case 1:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45010.length)].join('')));

}
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$1 = (function (x){
return om.next.get_computed.call(null,x,cljs.core.PersistentVector.EMPTY);
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$2 = (function (x,k_or_ks){
if((x == null)){
return null;
} else {
var props = (function (){var G__45013 = x;
if(om.next.component_QMARK_.call(null,x)){
return om.next.props.call(null,G__45013);
} else {
return G__45013;
}
})();
var ks = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329)], null),(function (){var G__45014 = k_or_ks;
if(!(cljs.core.sequential_QMARK_.call(null,k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__45014],null));
} else {
return G__45014;
}
})());
if(cljs.core.vector_QMARK_.call(null,props)){
return cljs.core.get_in.call(null,cljs.core.meta.call(null,props),ks);
} else {
return cljs.core.get_in.call(null,props,ks);
}
}
});

om.next.get_computed.cljs$lang$maxFixedArity = 2;

/**
 * Set the component local state of the component. Analogous to React's
 * setState.
 */
om.next.set_state_BANG_ = (function om$next$set_state_BANG_(component,new_state){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

if(((!((component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.om$next$ILocalState$)))?true:false):false)){
om.next._set_state_BANG_.call(null,component,new_state);
} else {
goog.object.set(component.state,"omcljs$pendingState",new_state);
}

var temp__6751__auto__ = om.next.get_reconciler.call(null,component);
if(cljs.core.truth_(temp__6751__auto__)){
var r = temp__6751__auto__;
om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

return om.next.schedule_render_BANG_.call(null,r);
} else {
return component.forceUpdate();
}
});
/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state.
 */
om.next.get_state = (function om$next$get_state(var_args){
var args45021 = [];
var len__30169__auto___45025 = arguments.length;
var i__30170__auto___45026 = (0);
while(true){
if((i__30170__auto___45026 < len__30169__auto___45025)){
args45021.push((arguments[i__30170__auto___45026]));

var G__45027 = (i__30170__auto___45026 + (1));
i__30170__auto___45026 = G__45027;
continue;
} else {
}
break;
}

var G__45023 = args45021.length;
switch (G__45023) {
case 1:
return om.next.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45021.length)].join('')));

}
});

om.next.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_state.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var cst = ((((!((component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.om$next$ILocalState$)))?true:false):false))?om.next._get_state.call(null,component):(function (){var temp__6753__auto__ = component.state;
if(cljs.core.truth_(temp__6753__auto__)){
var state = temp__6753__auto__;
var or__28948__auto__ = goog.object.get(state,"omcljs$pendingState");
if(cljs.core.truth_(or__28948__auto__)){
return or__28948__auto__;
} else {
return goog.object.get(state,"omcljs$state");
}
} else {
return null;
}
})());
return cljs.core.get_in.call(null,cst,((cljs.core.sequential_QMARK_.call(null,k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_state.cljs$lang$maxFixedArity = 2;

/**
 * Update a component's local state. Similar to Clojure(Script)'s swap!
 */
om.next.update_state_BANG_ = (function om$next$update_state_BANG_(var_args){
var args45029 = [];
var len__30169__auto___45039 = arguments.length;
var i__30170__auto___45040 = (0);
while(true){
if((i__30170__auto___45040 < len__30169__auto___45039)){
args45029.push((arguments[i__30170__auto___45040]));

var G__45041 = (i__30170__auto___45040 + (1));
i__30170__auto___45040 = G__45041;
continue;
} else {
}
break;
}

var G__45038 = args45029.length;
switch (G__45038) {
case 2:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var argseq__30192__auto__ = (new cljs.core.IndexedSeq(args45029.slice((6)),(0),null));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__30192__auto__);

}
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component)));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1,arg2));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (component,f,arg0,arg1,arg2,arg3){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1,arg2,arg3));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_state_BANG_.call(null,component,cljs.core.apply.call(null,f,om.next.get_state.call(null,component),arg0,arg1,arg2,arg3,arg_rest));
});

om.next.update_state_BANG_.cljs$lang$applyTo = (function (seq45030){
var G__45031 = cljs.core.first.call(null,seq45030);
var seq45030__$1 = cljs.core.next.call(null,seq45030);
var G__45032 = cljs.core.first.call(null,seq45030__$1);
var seq45030__$2 = cljs.core.next.call(null,seq45030__$1);
var G__45033 = cljs.core.first.call(null,seq45030__$2);
var seq45030__$3 = cljs.core.next.call(null,seq45030__$2);
var G__45034 = cljs.core.first.call(null,seq45030__$3);
var seq45030__$4 = cljs.core.next.call(null,seq45030__$3);
var G__45035 = cljs.core.first.call(null,seq45030__$4);
var seq45030__$5 = cljs.core.next.call(null,seq45030__$4);
var G__45036 = cljs.core.first.call(null,seq45030__$5);
var seq45030__$6 = cljs.core.next.call(null,seq45030__$5);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45031,G__45032,G__45033,G__45034,G__45035,G__45036,seq45030__$6);
});

om.next.update_state_BANG_.cljs$lang$maxFixedArity = (6);

/**
 * Get the rendered state of component. om.next/get-state always returns the
 * up-to-date state.
 */
om.next.get_rendered_state = (function om$next$get_rendered_state(var_args){
var args45043 = [];
var len__30169__auto___45048 = arguments.length;
var i__30170__auto___45049 = (0);
while(true){
if((i__30170__auto___45049 < len__30169__auto___45048)){
args45043.push((arguments[i__30170__auto___45049]));

var G__45050 = (i__30170__auto___45049 + (1));
i__30170__auto___45049 = G__45050;
continue;
} else {
}
break;
}

var G__45045 = args45043.length;
switch (G__45045) {
case 1:
return om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45043.length)].join('')));

}
});

om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_rendered_state.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var cst = ((((!((component == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === component.om$next$ILocalState$)))?true:false):false))?om.next._get_rendered_state.call(null,component):(function (){var G__45047 = component;
var G__45047__$1 = (((G__45047 == null))?null:G__45047.state);
if((G__45047__$1 == null)){
return null;
} else {
return goog.object.get(G__45047__$1,"omcljs$state");
}
})());
return cljs.core.get_in.call(null,cst,((cljs.core.sequential_QMARK_.call(null,k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_rendered_state.cljs$lang$maxFixedArity = 2;

om.next.merge_pending_state_BANG_ = (function om$next$merge_pending_state_BANG_(c){
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$ILocalState$)))?true:false):false)){
return om.next._merge_pending_state_BANG_.call(null,c);
} else {
var temp__6753__auto__ = (function (){var G__45055 = c;
var G__45055__$1 = (((G__45055 == null))?null:G__45055.state);
if((G__45055__$1 == null)){
return null;
} else {
return goog.object.get(G__45055__$1,"omcljs$pendingState");
}
})();
if(cljs.core.truth_(temp__6753__auto__)){
var pending = temp__6753__auto__;
var state = c.state;
var previous = goog.object.get(state,"omcljs$state");
goog.object.remove(state,"omcljs$pendingState");

goog.object.set(state,"omcljs$previousState",previous);

return goog.object.set(state,"omcljs$state",pending);
} else {
return null;
}
}
});
om.next.react_set_state_BANG_ = (function om$next$react_set_state_BANG_(var_args){
var args45056 = [];
var len__30169__auto___45059 = arguments.length;
var i__30170__auto___45060 = (0);
while(true){
if((i__30170__auto___45060 < len__30169__auto___45059)){
args45056.push((arguments[i__30170__auto___45060]));

var G__45061 = (i__30170__auto___45060 + (1));
i__30170__auto___45060 = G__45061;
continue;
} else {
}
break;
}

var G__45058 = args45056.length;
switch (G__45058) {
case 2:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45056.length)].join('')));

}
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
return om.next.react_set_state_BANG_.call(null,component,new_state,null);
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,cb){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return component.setState(({"omcljs$state": new_state}),cb);
});

om.next.react_set_state_BANG_.cljs$lang$maxFixedArity = 3;






/**
 * Given an environment, a query and a set of remotes return a hash map of remotes
 * mapped to the query specific to that remote.
 */
om.next.gather_sends = (function om$next$gather_sends(p__45064,q,remotes){
var map__45071 = p__45064;
var map__45071__$1 = ((((!((map__45071 == null)))?((((map__45071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45071.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45071):map__45071);
var env = map__45071__$1;
var parser = cljs.core.get.call(null,map__45071__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,((function (map__45071,map__45071__$1,env,parser){
return (function (p1__45063_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__45063_SHARP_,parser.call(null,env,q,p1__45063_SHARP_)],null));
});})(map__45071,map__45071__$1,env,parser))
),cljs.core.filter.call(null,((function (map__45071,map__45071__$1,env,parser){
return (function (p__45073){
var vec__45074 = p__45073;
var _ = cljs.core.nth.call(null,vec__45074,(0),null);
var v = cljs.core.nth.call(null,vec__45074,(1),null);
return (cljs.core.count.call(null,v) > (0));
});})(map__45071,map__45071__$1,env,parser))
)),remotes);
});
/**
 * Given r (a reconciler) and a query expression including a mutation and
 * any simple reads, return the equivalent query expression where the simple
 * reads have been replaced by the full query for each component that cares about
 * the specified read.
 */
om.next.transform_reads = (function om$next$transform_reads(r,tx){
if(cljs.core.truth_(new cljs.core.Keyword(null,"easy-reads","easy-reads",803667467).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r)))){
var with_target = (function om$next$transform_reads_$_with_target(target,q){
if(!((target == null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.force.call(null,cljs.core.first.call(null,q),target)], null);
} else {
return q;
}
});
var add_focused_query = (function om$next$transform_reads_$_add_focused_query(k,target,tx__$1,c){
var transformed = om.next.full_query.call(null,c,with_target.call(null,target,om.next.focus_query.call(null,om.next.get_query.call(null,c),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))));
return cljs.core.into.call(null,tx__$1,cljs.core.remove.call(null,cljs.core.set.call(null,tx__$1)),transformed);
});
var exprs = cljs.core.seq.call(null,tx);
var tx_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first.call(null,exprs);
var ast = om.next.impl.parser.expr__GT_ast.call(null,expr);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var tgt = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast);
if((key instanceof cljs.core.Keyword)){
var cs = om.next.ref__GT_components.call(null,r,key);
var G__45081 = cljs.core.next.call(null,exprs);
var G__45082 = cljs.core.reduce.call(null,((function (exprs,tx_SINGLEQUOTE_,cs,expr,ast,key,tgt){
return (function (p1__45077_SHARP_,p2__45078_SHARP_){
return add_focused_query.call(null,key,tgt,p1__45077_SHARP_,p2__45078_SHARP_);
});})(exprs,tx_SINGLEQUOTE_,cs,expr,ast,key,tgt))
,(function (){var G__45080 = tx_SINGLEQUOTE_;
if(cljs.core.empty_QMARK_.call(null,cs)){
return cljs.core.conj.call(null,G__45080,expr);
} else {
return G__45080;
}
})(),cs);
exprs = G__45081;
tx_SINGLEQUOTE_ = G__45082;
continue;
} else {
var G__45083 = cljs.core.next.call(null,exprs);
var G__45084 = cljs.core.conj.call(null,tx_SINGLEQUOTE_,expr);
exprs = G__45083;
tx_SINGLEQUOTE_ = G__45084;
continue;
}
} else {
return tx_SINGLEQUOTE_;
}
break;
}
} else {
return tx;
}
});
/**
 * Change the query of a component. Takes a map containing :params and/or
 * :query. :params should be a map of new bindings and :query should be a query
 * expression. Will schedule a re-render as well as remote re-sends if
 * necessary.
 */
om.next.set_query_BANG_ = (function om$next$set_query_BANG_(var_args){
var args45085 = [];
var len__30169__auto___45102 = arguments.length;
var i__30170__auto___45103 = (0);
while(true){
if((i__30170__auto___45103 < len__30169__auto___45102)){
args45085.push((arguments[i__30170__auto___45103]));

var G__45104 = (i__30170__auto___45103 + (1));
i__30170__auto___45103 = G__45104;
continue;
} else {
}
break;
}

var G__45087 = args45085.length;
switch (G__45087) {
case 2:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45085.length)].join('')));

}
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,params_AMPERSAND_query){
return om.next.set_query_BANG_.call(null,x,params_AMPERSAND_query,null);
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (x,p__45088,reads){
var map__45089 = p__45088;
var map__45089__$1 = ((((!((map__45089 == null)))?((((map__45089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45089):map__45089);
var params = cljs.core.get.call(null,map__45089__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.call(null,map__45089__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
if(cljs.core.truth_((function (){var or__28948__auto__ = om.next.reconciler_QMARK_.call(null,x);
if(cljs.core.truth_(or__28948__auto__)){
return or__28948__auto__;
} else {
return om.next.component_QMARK_.call(null,x);
}
})())){
} else {
throw (new Error("Assert failed: (or (reconciler? x) (component? x))"));
}

if((!((params == null))) || (!((query == null)))){
} else {
throw (new Error("Assert failed: (or (not (nil? params)) (not (nil? query)))"));
}

if(((reads == null)) || (cljs.core.vector_QMARK_.call(null,reads))){
} else {
throw (new Error("Assert failed: (or (nil? reads) (vector? reads))"));
}

var r = ((om.next.component_QMARK_.call(null,x))?om.next.get_reconciler.call(null,x):x);
var c = ((om.next.component_QMARK_.call(null,x))?x:null);
var xs = ((!((c == null)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null):cljs.core.PersistentVector.EMPTY);
var root = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(r)));
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var st = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid.call(null);
new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,st));

var temp__6753__auto___45106 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__6753__auto___45106)){
var l_45107 = temp__6753__auto___45106;
goog.log.info(l_45107,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__6753__auto____$1 = ((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false))?om.next.ident.call(null,c,om.next.props.call(null,c)):null);
if(cljs.core.truth_(temp__6753__auto____$1)){
var ident = temp__6753__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,ident)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?"reconciler ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(query)?(function (){


return ", ";
})()
:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(params)?(function (){


return " ";
})()
:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,id))].join(''));
} else {
}

cljs.core.swap_BANG_.call(null,st,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),(function (){var or__28948__auto__ = c;
if(cljs.core.truth_(or__28948__auto__)){
return or__28948__auto__;
} else {
return root;
}
})()], null),cljs.core.merge,cljs.core.merge.call(null,(cljs.core.truth_(query)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),query], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),params], null):null)));

if((!((c == null))) && ((reads == null))){
om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
} else {
}

if((reads == null)){
} else {
om.next.protocols.queue_BANG_.call(null,r,reads);
}

om.next.protocols.reindex_BANG_.call(null,r);

var rootq_45108 = ((!((c == null)))?om.next.full_query.call(null,c):(((reads == null))?om.next.get_query.call(null,root):null));
var sends_45109 = om.next.gather_sends.call(null,om.next.to_env.call(null,cfg),cljs.core.into.call(null,(function (){var or__28948__auto__ = rootq_45108;
if(cljs.core.truth_(or__28948__auto__)){
return or__28948__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),om.next.transform_reads.call(null,r,reads)),new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(cfg));
if(cljs.core.empty_QMARK_.call(null,sends_45109)){
} else {
var seq__45092_45110 = cljs.core.seq.call(null,sends_45109);
var chunk__45093_45111 = null;
var count__45094_45112 = (0);
var i__45095_45113 = (0);
while(true){
if((i__45095_45113 < count__45094_45112)){
var vec__45096_45114 = cljs.core._nth.call(null,chunk__45093_45111,i__45095_45113);
var remote_45115 = cljs.core.nth.call(null,vec__45096_45114,(0),null);
var __45116 = cljs.core.nth.call(null,vec__45096_45114,(1),null);
om.next.protocols.queue_BANG_.call(null,r,xs,remote_45115);

var G__45117 = seq__45092_45110;
var G__45118 = chunk__45093_45111;
var G__45119 = count__45094_45112;
var G__45120 = (i__45095_45113 + (1));
seq__45092_45110 = G__45117;
chunk__45093_45111 = G__45118;
count__45094_45112 = G__45119;
i__45095_45113 = G__45120;
continue;
} else {
var temp__6753__auto___45121 = cljs.core.seq.call(null,seq__45092_45110);
if(temp__6753__auto___45121){
var seq__45092_45122__$1 = temp__6753__auto___45121;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45092_45122__$1)){
var c__29859__auto___45123 = cljs.core.chunk_first.call(null,seq__45092_45122__$1);
var G__45124 = cljs.core.chunk_rest.call(null,seq__45092_45122__$1);
var G__45125 = c__29859__auto___45123;
var G__45126 = cljs.core.count.call(null,c__29859__auto___45123);
var G__45127 = (0);
seq__45092_45110 = G__45124;
chunk__45093_45111 = G__45125;
count__45094_45112 = G__45126;
i__45095_45113 = G__45127;
continue;
} else {
var vec__45099_45128 = cljs.core.first.call(null,seq__45092_45122__$1);
var remote_45129 = cljs.core.nth.call(null,vec__45099_45128,(0),null);
var __45130 = cljs.core.nth.call(null,vec__45099_45128,(1),null);
om.next.protocols.queue_BANG_.call(null,r,xs,remote_45129);

var G__45131 = cljs.core.next.call(null,seq__45092_45122__$1);
var G__45132 = null;
var G__45133 = (0);
var G__45134 = (0);
seq__45092_45110 = G__45131;
chunk__45093_45111 = G__45132;
count__45094_45112 = G__45133;
i__45095_45113 = G__45134;
continue;
}
} else {
}
}
break;
}

om.next.protocols.queue_sends_BANG_.call(null,r,sends_45109);

om.next.schedule_sends_BANG_.call(null,r);
}

return null;
});

om.next.set_query_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Update a component's query and query parameters with a function.
 */
om.next.update_query_BANG_ = (function om$next$update_query_BANG_(var_args){
var args45135 = [];
var len__30169__auto___45145 = arguments.length;
var i__30170__auto___45146 = (0);
while(true){
if((i__30170__auto___45146 < len__30169__auto___45145)){
args45135.push((arguments[i__30170__auto___45146]));

var G__45147 = (i__30170__auto___45146 + (1));
i__30170__auto___45146 = G__45147;
continue;
} else {
}
break;
}

var G__45144 = args45135.length;
switch (G__45144) {
case 2:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__30192__auto__ = (new cljs.core.IndexedSeq(args45135.slice((6)),(0),null));
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__30192__auto__);

}
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null)));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0,arg1));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0,arg1,arg2));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_query_BANG_.call(null,component,cljs.core.apply.call(null,f,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0,arg1,arg2,arg3,arg_rest));
});

om.next.update_query_BANG_.cljs$lang$applyTo = (function (seq45136){
var G__45137 = cljs.core.first.call(null,seq45136);
var seq45136__$1 = cljs.core.next.call(null,seq45136);
var G__45138 = cljs.core.first.call(null,seq45136__$1);
var seq45136__$2 = cljs.core.next.call(null,seq45136__$1);
var G__45139 = cljs.core.first.call(null,seq45136__$2);
var seq45136__$3 = cljs.core.next.call(null,seq45136__$2);
var G__45140 = cljs.core.first.call(null,seq45136__$3);
var seq45136__$4 = cljs.core.next.call(null,seq45136__$3);
var G__45141 = cljs.core.first.call(null,seq45136__$4);
var seq45136__$5 = cljs.core.next.call(null,seq45136__$4);
var G__45142 = cljs.core.first.call(null,seq45136__$5);
var seq45136__$6 = cljs.core.next.call(null,seq45136__$5);
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45137,G__45138,G__45139,G__45140,G__45141,G__45142,seq45136__$6);
});

om.next.update_query_BANG_.cljs$lang$maxFixedArity = (6);

/**
 * Returns true if the component is mounted.
 */
om.next.mounted_QMARK_ = (function om$next$mounted_QMARK_(x){
return (om.next.component_QMARK_.call(null,x)) && (x.isMounted());
});
/**
 * Returns the component associated with a component's React ref.
 */
om.next.react_ref = (function om$next$react_ref(component,name){
var G__45150 = component.refs;
if((G__45150 == null)){
return null;
} else {
return goog.object.get(G__45150,name);
}
});
/**
 * Returns the component's children.
 */
om.next.children = (function om$next$children(component){
return component.props.children;
});
om.next.update_component_BANG_ = (function om$next$update_component_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

om.next.update_props_BANG_.call(null,c,next_props);

return c.forceUpdate();
});
om.next.should_update_QMARK_ = (function om$next$should_update_QMARK_(var_args){
var args45151 = [];
var len__30169__auto___45154 = arguments.length;
var i__30170__auto___45155 = (0);
while(true){
if((i__30170__auto___45155 < len__30169__auto___45154)){
args45151.push((arguments[i__30170__auto___45155]));

var G__45156 = (i__30170__auto___45155 + (1));
i__30170__auto___45155 = G__45156;
continue;
} else {
}
break;
}

var G__45153 = args45151.length;
switch (G__45153) {
case 2:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45151.length)].join('')));

}
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,next_props){
return om.next.should_update_QMARK_.call(null,c,next_props,null);
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (c,next_props,next_state){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return c.shouldComponentUpdate(({"omcljs$value": next_props}),({"omcljs$state": next_state}));
});

om.next.should_update_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * Return the raw component class path associated with a component. Contains
 * duplicates for recursive component trees.
 */
om.next.raw_class_path = (function om$next$raw_class_path(c){
var c__$1 = c;
var ret = (function (){var x__29882__auto__ = om.next.react_type.call(null,c__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})();
while(true){
var temp__6751__auto__ = om.next.parent.call(null,c__$1);
if(cljs.core.truth_(temp__6751__auto__)){
var p = temp__6751__auto__;
if(om.next.iquery_QMARK_.call(null,p)){
var G__45158 = p;
var G__45159 = cljs.core.cons.call(null,om.next.react_type.call(null,p),ret);
c__$1 = G__45158;
ret = G__45159;
continue;
} else {
var G__45160 = p;
var G__45161 = ret;
c__$1 = G__45160;
ret = G__45161;
continue;
}
} else {
return ret;
}
break;
}
});
/**
 * Return the component class path associated with a component.
 */
om.next.class_path = (function om$next$class_path(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var raw_cp = om.next.raw_class_path.call(null,c);
var cp = cljs.core.seq.call(null,raw_cp);
var ret = cljs.core.PersistentVector.EMPTY;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cp){
var c__$1 = cljs.core.first.call(null,cp);
if(cljs.core.contains_QMARK_.call(null,seen,c__$1)){
var G__45162 = cljs.core.next.call(null,cp);
var G__45163 = ret;
var G__45164 = seen;
cp = G__45162;
ret = G__45163;
seen = G__45164;
continue;
} else {
var G__45165 = cljs.core.next.call(null,cp);
var G__45166 = cljs.core.conj.call(null,ret,c__$1);
var G__45167 = cljs.core.conj.call(null,seen,c__$1);
cp = G__45165;
ret = G__45166;
seen = G__45167;
continue;
}
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
});
/**
 * Returns true if a component's classpath is recursive
 */
om.next.recursive_class_path_QMARK_ = (function om$next$recursive_class_path_QMARK_(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,om.next.raw_class_path.call(null,c)));
});
/**
 * Given a class or mounted component x and a ref to an instantiated component
 * or class that defines a subquery, pick the most specific subquery. If the
 * component is mounted subquery-ref will be used, subquery-class otherwise.
 */
om.next.subquery = (function om$next$subquery(x,subquery_ref,subquery_class){
if(((subquery_ref instanceof cljs.core.Keyword)) || (typeof subquery_ref === 'string')){
} else {
throw (new Error("Assert failed: (or (keyword? subquery-ref) (string? subquery-ref))"));
}

if(cljs.core.fn_QMARK_.call(null,subquery_class)){
} else {
throw (new Error("Assert failed: (fn? subquery-class)"));
}

var ref = (function (){var G__45169 = subquery_ref;
if((subquery_ref instanceof cljs.core.Keyword)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45169)].join('');
} else {
return G__45169;
}
})();
if((om.next.component_QMARK_.call(null,x)) && (om.next.mounted_QMARK_.call(null,x))){
return om.next.get_query.call(null,om.next.react_ref.call(null,x,ref));
} else {
return om.next.get_query.call(null,subquery_class);
}
});
/**
 * Given a mounted component with assigned props, return the ident for the
 * component.
 */
om.next.get_ident = (function om$next$get_ident(x){
if(om.next.component_QMARK_.call(null,x)){
} else {
throw (new Error("Assert failed: (component? x)"));
}

var m = om.next.props.call(null,x);
if(!((m == null))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("get-ident invoked on component with nil props"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(not (nil? m))")].join('')));
}

return om.next.ident.call(null,x,m);
});
om.next.basis_t = (function om$next$basis_t(reconciler){
return om.next.protocols.basis_t.call(null,reconciler);
});
om.next.queue_render_BANG_ = (function om$next$queue_render_BANG_(f){
if(cljs.core.fn_QMARK_.call(null,om.next._STAR_raf_STAR_)){
return om.next._STAR_raf_STAR_.call(null,f);
} else {
if(!(typeof requestAnimationFrame !== 'undefined')){
return setTimeout(f,(16));
} else {
return requestAnimationFrame(f);

}
}
});
om.next.schedule_render_BANG_ = (function om$next$schedule_render_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_render_BANG_.call(null,reconciler))){
return om.next.queue_render_BANG_.call(null,(function (){
return om.next.protocols.reconcile_BANG_.call(null,reconciler);
}));
} else {
return null;
}
});
om.next.schedule_sends_BANG_ = (function om$next$schedule_sends_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_sends_BANG_.call(null,reconciler))){
return setTimeout((function (){
return om.next.protocols.send_BANG_.call(null,reconciler);
}),(0));
} else {
return null;
}
});
/**
 * Given a root component class and a target root DOM node, instantiate and
 * render the root class using the reconciler's :state property. The reconciler
 * will continue to observe changes to :state and keep the target node in sync.
 * Note a reconciler may have only one root. If invoked on a reconciler with an
 * existing root, the new root will replace the old one.
 */
om.next.add_root_BANG_ = (function om$next$add_root_BANG_(var_args){
var args45170 = [];
var len__30169__auto___45173 = arguments.length;
var i__30170__auto___45174 = (0);
while(true){
if((i__30170__auto___45174 < len__30169__auto___45173)){
args45170.push((arguments[i__30170__auto___45174]));

var G__45175 = (i__30170__auto___45174 + (1));
i__30170__auto___45174 = G__45175;
continue;
} else {
}
break;
}

var G__45172 = args45170.length;
switch (G__45172) {
case 3:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45170.length)].join('')));

}
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,root_class,target){
return om.next.add_root_BANG_.call(null,reconciler,root_class,target,null);
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,root_class,target,options){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

if(cljs.core.fn_QMARK_.call(null,root_class)){
} else {
throw (new Error("Assert failed: (fn? root-class)"));
}

var temp__6753__auto___45177 = cljs.core.get.call(null,cljs.core.deref.call(null,om.next.roots),target);
if(cljs.core.truth_(temp__6753__auto___45177)){
var old_reconciler_45178 = temp__6753__auto___45177;
om.next.remove_root_BANG_.call(null,old_reconciler_45178,target);
} else {
}

cljs.core.swap_BANG_.call(null,om.next.roots,cljs.core.assoc,target,reconciler);

return om.next.protocols.add_root_BANG_.call(null,reconciler,root_class,target,options);
});

om.next.add_root_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Remove a root target (a DOM element) from a reconciler. The reconciler will
 * no longer attempt to reconcile application state with the specified root.
 */
om.next.remove_root_BANG_ = (function om$next$remove_root_BANG_(reconciler,target){
return om.next.protocols.remove_root_BANG_.call(null,reconciler,target);
});

/**
 * @interface
 */
om.next.ITxIntercept = function(){};

/**
 * An optional protocol that component may implement to intercept child
 *   transactions.
 */
om.next.tx_intercept = (function om$next$tx_intercept(c,tx){
if((!((c == null))) && (!((c.om$next$ITxIntercept$tx_intercept$arity$2 == null)))){
return c.om$next$ITxIntercept$tx_intercept$arity$2(c,tx);
} else {
var x__29666__auto__ = (((c == null))?null:c);
var m__29667__auto__ = (om.next.tx_intercept[goog.typeOf(x__29666__auto__)]);
if(!((m__29667__auto__ == null))){
return m__29667__auto__.call(null,c,tx);
} else {
var m__29667__auto____$1 = (om.next.tx_intercept["_"]);
if(!((m__29667__auto____$1 == null))){
return m__29667__auto____$1.call(null,c,tx);
} else {
throw cljs.core.missing_protocol.call(null,"ITxIntercept.tx-intercept",c);
}
}
}
});

om.next.to_env = (function om$next$to_env(x){
var config = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(x):x);
return cljs.core.select_keys.call(null,config,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"logger","logger",-220675947),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149)], null));
});
om.next.transact_STAR_ = (function om$next$transact_STAR_(r,c,ref,tx){
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var ref__$1 = (cljs.core.truth_((function (){var and__28936__auto__ = c;
if(cljs.core.truth_(and__28936__auto__)){
var and__28936__auto____$1 = ((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false);
if(and__28936__auto____$1){
return cljs.core.not.call(null,ref);
} else {
return and__28936__auto____$1;
}
} else {
return and__28936__auto__;
}
})())?om.next.ident.call(null,c,om.next.props.call(null,c)):ref);
var env = cljs.core.merge.call(null,om.next.to_env.call(null,cfg),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),r,new cljs.core.Keyword(null,"component","component",1555936782),c], null),(cljs.core.truth_(ref__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref__$1], null):null));
var id = cljs.core.random_uuid.call(null);
var _ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg)));
var ___$1 = (function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__6753__auto__)){
var l = temp__6753__auto__;
return goog.log.info(l,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(ref__$1)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,ref__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("transacted '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tx),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,id))].join(''));
} else {
return null;
}
})();
var old_state = cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg));
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(cfg).call(null,env,tx);
var snds = om.next.gather_sends.call(null,env,tx,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(cfg));
var xs = (function (){var G__45194 = cljs.core.PersistentVector.EMPTY;
var G__45194__$1 = ((!((c == null)))?cljs.core.conj.call(null,G__45194,c):G__45194);
if(!((ref__$1 == null))){
return cljs.core.conj.call(null,G__45194__$1,ref__$1);
} else {
return G__45194__$1;
}
})();
om.next.protocols.queue_BANG_.call(null,r,cljs.core.into.call(null,xs,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,v)));

if(cljs.core.empty_QMARK_.call(null,snds)){
} else {
var seq__45195_45205 = cljs.core.seq.call(null,snds);
var chunk__45196_45206 = null;
var count__45197_45207 = (0);
var i__45198_45208 = (0);
while(true){
if((i__45198_45208 < count__45197_45207)){
var vec__45199_45209 = cljs.core._nth.call(null,chunk__45196_45206,i__45198_45208);
var remote_45210 = cljs.core.nth.call(null,vec__45199_45209,(0),null);
var __45211__$2 = cljs.core.nth.call(null,vec__45199_45209,(1),null);
om.next.protocols.queue_BANG_.call(null,r,xs,remote_45210);

var G__45212 = seq__45195_45205;
var G__45213 = chunk__45196_45206;
var G__45214 = count__45197_45207;
var G__45215 = (i__45198_45208 + (1));
seq__45195_45205 = G__45212;
chunk__45196_45206 = G__45213;
count__45197_45207 = G__45214;
i__45198_45208 = G__45215;
continue;
} else {
var temp__6753__auto___45216 = cljs.core.seq.call(null,seq__45195_45205);
if(temp__6753__auto___45216){
var seq__45195_45217__$1 = temp__6753__auto___45216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45195_45217__$1)){
var c__29859__auto___45218 = cljs.core.chunk_first.call(null,seq__45195_45217__$1);
var G__45219 = cljs.core.chunk_rest.call(null,seq__45195_45217__$1);
var G__45220 = c__29859__auto___45218;
var G__45221 = cljs.core.count.call(null,c__29859__auto___45218);
var G__45222 = (0);
seq__45195_45205 = G__45219;
chunk__45196_45206 = G__45220;
count__45197_45207 = G__45221;
i__45198_45208 = G__45222;
continue;
} else {
var vec__45202_45223 = cljs.core.first.call(null,seq__45195_45217__$1);
var remote_45224 = cljs.core.nth.call(null,vec__45202_45223,(0),null);
var __45225__$2 = cljs.core.nth.call(null,vec__45202_45223,(1),null);
om.next.protocols.queue_BANG_.call(null,r,xs,remote_45224);

var G__45226 = cljs.core.next.call(null,seq__45195_45217__$1);
var G__45227 = null;
var G__45228 = (0);
var G__45229 = (0);
seq__45195_45205 = G__45226;
chunk__45196_45206 = G__45227;
count__45197_45207 = G__45228;
i__45198_45208 = G__45229;
continue;
}
} else {
}
}
break;
}

om.next.protocols.queue_sends_BANG_.call(null,r,snds);

om.next.schedule_sends_BANG_.call(null,r);
}

var temp__6753__auto___45230 = new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__6753__auto___45230)){
var f_45231 = temp__6753__auto___45230;
var tx_data_45232 = cljs.core.merge.call(null,env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg))], null));
f_45231.call(null,tx_data_45232,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tx","tx",466630418),tx,new cljs.core.Keyword(null,"ret","ret",-468222814),v,new cljs.core.Keyword(null,"sends","sends",-1708040810),snds], null));
} else {
}

return v;
});
/**
 * Given a query expression annotate all mutations by adding a :mutator -> ident
 * entry to the metadata of each mutation expression in the query.
 */
om.next.annotate_mutations = (function om$next$annotate_mutations(tx,ident){
var annotate = (function om$next$annotate_mutations_$_annotate(expr,ident__$1){
var G__45241 = expr;
if(om.util.mutation_QMARK_.call(null,expr)){
return cljs.core.vary_meta.call(null,G__45241,cljs.core.assoc,new cljs.core.Keyword(null,"mutator","mutator",-1326825366),ident__$1);
} else {
return G__45241;
}
});
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__45233_SHARP_){
return annotate.call(null,p1__45233_SHARP_,ident);
})),tx);
});
om.next.some_iquery_QMARK_ = (function om$next$some_iquery_QMARK_(c){
var c__$1 = c;
while(true){
if((c__$1 == null)){
return false;
} else {
if(om.next.iquery_QMARK_.call(null,c__$1)){
return true;
} else {
var G__45242 = om.next.parent.call(null,c__$1);
c__$1 = G__45242;
continue;

}
}
break;
}
});
/**
 * Given a reconciler or component run a transaction. tx is a parse expression
 * that should include mutations followed by any necessary read. The reads will
 * be used to trigger component re-rendering.
 * 
 * Example:
 * 
 *   (om/transact! widget
 *     '[(do/this!) (do/that!)
 *       :read/this :read/that])
 */
om.next.transact_BANG_ = (function om$next$transact_BANG_(var_args){
var args45243 = [];
var len__30169__auto___45253 = arguments.length;
var i__30170__auto___45254 = (0);
while(true){
if((i__30170__auto___45254 < len__30169__auto___45253)){
args45243.push((arguments[i__30170__auto___45254]));

var G__45255 = (i__30170__auto___45254 + (1));
i__30170__auto___45254 = G__45255;
continue;
} else {
}
break;
}

var G__45245 = args45243.length;
switch (G__45245) {
case 2:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45243.length)].join('')));

}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,tx){
if(cljs.core.truth_((function (){var or__28948__auto__ = om.next.component_QMARK_.call(null,x);
if(or__28948__auto__){
return or__28948__auto__;
} else {
return om.next.reconciler_QMARK_.call(null,x);
}
})())){
} else {
throw (new Error("Assert failed: (or (component? x) (reconciler? x))"));
}

if(cljs.core.vector_QMARK_.call(null,tx)){
} else {
throw (new Error("Assert failed: (vector? tx)"));
}

var tx__$1 = (function (){var G__45246 = tx;
if((function (){var and__28936__auto__ = om.next.component_QMARK_.call(null,x);
if(and__28936__auto__){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$next$Ident$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.next.Ident,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.next.Ident,x);
}
} else {
return and__28936__auto__;
}
})()){
return om.next.annotate_mutations.call(null,G__45246,om.next.get_ident.call(null,x));
} else {
return G__45246;
}
})();
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))){
return om.next.transact_STAR_.call(null,x,null,null,tx__$1);
} else {
if(!(om.next.iquery_QMARK_.call(null,x))){
var l__43770__auto___45257 = om.next._STAR_logger_STAR_;
if(cljs.core.truth_(om.next.some_iquery_QMARK_.call(null,x))){
} else {
goog.log.error(l__43770__auto___45257,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invariant Violation"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((null == null))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" (in function: `"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1("`)")].join(''))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("transact! should be called on a component"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("that implements IQuery or has a parent that"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("implements IQuery")].join(''))].join(''));
}

return om.next.transact_STAR_.call(null,om.next.get_reconciler.call(null,x),null,null,tx__$1);
} else {
var p = om.next.parent.call(null,x);
var x__$1 = x;
var tx__$2 = tx__$1;
while(true){
if((p == null)){
var r = om.next.get_reconciler.call(null,x__$1);
return om.next.transact_STAR_.call(null,r,x__$1,null,om.next.transform_reads.call(null,r,tx__$2));
} else {
var vec__45249 = ((((!((p == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === p.om$next$ITxIntercept$)))?true:false):false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,om.next.tx_intercept.call(null,p,tx__$2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,tx__$2], null));
var x_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__45249,(0),null);
var tx__$3 = cljs.core.nth.call(null,vec__45249,(1),null);
var G__45258 = om.next.parent.call(null,p);
var G__45259 = x_SINGLEQUOTE_;
var G__45260 = tx__$3;
p = G__45258;
x__$1 = G__45259;
tx__$2 = G__45260;
continue;
}
break;
}

}
}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (r,ref,tx){
return om.next.transact_STAR_.call(null,r,null,ref,tx);
});

om.next.transact_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Create a parser. The argument is a map of two keys, :read and :mutate. Both
 * functions should have the signature (Env -> Key -> Params -> ParseResult).
 */
om.next.parser = (function om$next$parser(p__45261){
var map__45264 = p__45261;
var map__45264__$1 = ((((!((map__45264 == null)))?((((map__45264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45264):map__45264);
var opts = map__45264__$1;
var read = cljs.core.get.call(null,map__45264__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.call(null,map__45264__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
if(cljs.core.map_QMARK_.call(null,opts)){
} else {
throw (new Error("Assert failed: (map? opts)"));
}

return om.next.impl.parser.parser.call(null,opts);
});
/**
 * Helper function for implementing :read and :mutate as multimethods. Use this
 * as the dispatch-fn.
 */
om.next.dispatch = (function om$next$dispatch(_,key,___$1){
return key;
});
/**
 * Given a query expression convert it into an AST.
 */
om.next.query__GT_ast = (function om$next$query__GT_ast(query_expr){
return om.next.impl.parser.query__GT_ast.call(null,query_expr);
});
om.next.ast__GT_query = (function om$next$ast__GT_query(query_ast){

return om.next.impl.parser.ast__GT_expr.call(null,query_ast,true);
});
om.next.get_dispatch_key = (function om$next$get_dispatch_key(prop){
var G__45267 = prop;
if((!(om.util.ident_QMARK_.call(null,prop))) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,prop),new cljs.core.Symbol(null,"_","_",-1201019570,null)))){
return cljs.core.comp.call(null,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),om.next.impl.parser.expr__GT_ast).call(null,G__45267);
} else {
return G__45267;
}
});
/**
 * Cascades a query up the classpath. class-path->query is a map of classpaths
 * to their queries. classpath is the classpath where we start cascading (typically
 * the direct parent's classpath of the component changing query). data-path is
 * the data path in the classpath's query to the new query. new-query is the
 * query to be applied to the classpaths. union-keys are any keys into union
 * queries found during index building; they are used to access union queries
 * when cascading the classpath, and to generate the classpaths' rendered-paths,
 * which skip these keys.
 */
om.next.cascade_query = (function om$next$cascade_query(class_path__GT_query,classpath,data_path,new_query,union_keys){
var cp = classpath;
var data_path__$1 = data_path;
var new_query__$1 = new_query;
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!(cljs.core.empty_QMARK_.call(null,cp))){
var rendered_data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys)),data_path__$1);
var filter_data_path = (function (){var G__45270 = rendered_data_path;
if(!(cljs.core.empty_QMARK_.call(null,rendered_data_path))){
return cljs.core.pop.call(null,G__45270);
} else {
return G__45270;
}
})();
var qs = cljs.core.filter.call(null,((function (cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path){
return (function (p1__45268_SHARP_){
return cljs.core._EQ_.call(null,filter_data_path,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__45268_SHARP_),filter_data_path));
});})(cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path))
,cljs.core.get.call(null,class_path__GT_query,cp));
var qs_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path,qs){
return (function (q){
var new_query__$2 = (cljs.core.truth_((function (){var or__28948__auto__ = cljs.core.map_QMARK_.call(null,clojure.zip.node.call(null,q));
if(or__28948__auto__){
return or__28948__auto__;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.peek.call(null,data_path__$1)], true),union_keys);
}
})())?(function (){var union_key = cljs.core.peek.call(null,data_path__$1);
return cljs.core.assoc.call(null,clojure.zip.node.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q),rendered_data_path)),union_key,new_query__$1);
})():new_query__$1);
return om.next.query_template.call(null,om.next.focus_query.call(null,om.next.replace.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q),rendered_data_path),new_query__$2),filter_data_path),filter_data_path);
});})(cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path,qs))
),qs);
var G__45271 = cljs.core.pop.call(null,cp);
var G__45272 = cljs.core.pop.call(null,data_path__$1);
var G__45273 = clojure.zip.node.call(null,cljs.core.first.call(null,qs_SINGLEQUOTE_));
var G__45274 = cljs.core.assoc.call(null,ret,cp,qs_SINGLEQUOTE_);
cp = G__45271;
data_path__$1 = G__45272;
new_query__$1 = G__45273;
ret = G__45274;
continue;
} else {
return ret;
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IIndexer}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Indexer = (function (indexes,extfs,__meta,__extmap,__hash){
this.indexes = indexes;
this.extfs = extfs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

om.next.Indexer.prototype.om$next$protocols$IIndexer$ = cljs.core.PROTOCOL_SENTINEL;


om.next.Indexer.prototype.om$next$protocols$IIndexer$index_root$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var prop__GT_classes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var class_path__GT_query = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var rootq = om.next.get_query.call(null,x);
var root_class = (function (){var G__45282 = x;
if(om.next.component_QMARK_.call(null,x)){
return om.next.react_type.call(null,G__45282);
} else {
return G__45282;
}
})();
var build_index_STAR_ = ((function (prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function om$next$build_index_STAR_(class$,query,path,classpath,union_expr,union_keys){
var l__43770__auto___45399 = om.next._STAR_logger_STAR_;
if((!(om.next.iquery_QMARK_.call(null,class$))) || ((om.next.iquery_QMARK_.call(null,class$)) && (!(cljs.core.empty_QMARK_.call(null,query))))){
} else {
goog.log.error(l__43770__auto___45399,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invariant Violation"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((("build-index*" == null))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" (in function: `"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("build-index*"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("`)")].join(''))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("`IQuery` implementation must return a non-empty query."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" Check the `IQuery` implementation of component `"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((om.next.component_QMARK_.call(null,class$))?class$.constructor.displayName:class$.prototype.constructor.displayName)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("`.")].join(''))].join(''));
}

var recursive_QMARK_ = cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([class$], true),classpath);
var classpath__$1 = (function (){var G__45364 = classpath;
if((!((class$ == null))) && (cljs.core.not.call(null,recursive_QMARK_))){
return cljs.core.conj.call(null,G__45364,class$);
} else {
return G__45364;
}
})();
var dp__GT_cs = cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.indexes),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750)], null));
if(cljs.core.truth_(class$)){
var root_query_45400 = ((cljs.core.empty_QMARK_.call(null,path))?rootq:clojure.zip.root.call(null,cljs.core.first.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,class_path__GT_query),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_class], null)))));
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classpath__$1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),om.next.query_template.call(null,om.next.focus_query.call(null,root_query_45400,path),path));
} else {
}

var recursive_join_QMARK_ = (function (){var and__28936__auto__ = recursive_QMARK_;
if(cljs.core.truth_(and__28936__auto__)){
var and__28936__auto____$1 = cljs.core.some.call(null,((function (and__28936__auto__,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (e){
var and__28936__auto____$1 = om.util.join_QMARK_.call(null,e);
if(cljs.core.truth_(and__28936__auto____$1)){
return !(om.util.recursion_QMARK_.call(null,om.util.join_value.call(null,e)));
} else {
return and__28936__auto____$1;
}
});})(and__28936__auto__,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,query);
if(cljs.core.truth_(and__28936__auto____$1)){
return cljs.core._EQ_.call(null,cljs.core.distinct.call(null,path),path);
} else {
return and__28936__auto____$1;
}
} else {
return and__28936__auto__;
}
})();
var recursive_union_QMARK_ = (function (){var and__28936__auto__ = recursive_QMARK_;
if(cljs.core.truth_(and__28936__auto__)){
var and__28936__auto____$1 = union_expr;
if(cljs.core.truth_(and__28936__auto____$1)){
return cljs.core._EQ_.call(null,cljs.core.distinct.call(null,path),path);
} else {
return and__28936__auto____$1;
}
} else {
return and__28936__auto__;
}
})();
if(cljs.core.truth_((function (){var or__28948__auto__ = cljs.core.not.call(null,recursive_QMARK_);
if(or__28948__auto__){
return or__28948__auto__;
} else {
var or__28948__auto____$1 = recursive_join_QMARK_;
if(cljs.core.truth_(or__28948__auto____$1)){
return or__28948__auto____$1;
} else {
return recursive_union_QMARK_;
}
}
})())){
if(cljs.core.vector_QMARK_.call(null,query)){
var map__45365 = cljs.core.group_by.call(null,om.util.join_QMARK_,query);
var map__45365__$1 = ((((!((map__45365 == null)))?((((map__45365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45365.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45365):map__45365);
var props = cljs.core.get.call(null,map__45365__$1,false);
var joins = cljs.core.get.call(null,map__45365__$1,true);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (map__45365,map__45365__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__45275_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__45275_SHARP_,cljs.core.zipmap.call(null,cljs.core.map.call(null,om.next.get_dispatch_key,props),cljs.core.repeat.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([class$], true))));
});})(map__45365,map__45365__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

var seq__45367 = cljs.core.seq.call(null,joins);
var chunk__45368 = null;
var count__45369 = (0);
var i__45370 = (0);
while(true){
if((i__45370 < count__45369)){
var join = cljs.core._nth.call(null,chunk__45368,i__45370);
var vec__45371_45401 = om.util.join_entry.call(null,join);
var prop_45402 = cljs.core.nth.call(null,vec__45371_45401,(0),null);
var query_SINGLEQUOTE__45403 = cljs.core.nth.call(null,vec__45371_45401,(1),null);
var prop_dispatch_key_45404 = om.next.get_dispatch_key.call(null,prop_45402);
var recursion_QMARK__45405 = om.util.recursion_QMARK_.call(null,query_SINGLEQUOTE__45403);
var union_recursion_QMARK__45406 = (function (){var and__28936__auto__ = recursion_QMARK__45405;
if(and__28936__auto__){
return union_expr;
} else {
return and__28936__auto__;
}
})();
var query_SINGLEQUOTE__45407__$1 = ((recursion_QMARK__45405)?((!((union_expr == null)))?union_expr:query):query_SINGLEQUOTE__45403);
var path_SINGLEQUOTE__45408 = cljs.core.conj.call(null,path,prop_45402);
var rendered_path_SINGLEQUOTE__45409 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys),path_SINGLEQUOTE__45408));
var cs_45410 = cljs.core.get.call(null,dp__GT_cs,rendered_path_SINGLEQUOTE__45409);
var cascade_query_QMARK__45411 = (cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_45410),(1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__45407__$1)),om.next.react_type.call(null,cljs.core.first.call(null,cs_45410)))) && (!(cljs.core.map_QMARK_.call(null,query_SINGLEQUOTE__45407__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__45412 = ((cascade_query_QMARK__45411)?om.next.get_query.call(null,cljs.core.first.call(null,cs_45410)):query_SINGLEQUOTE__45407__$1);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__45367,chunk__45368,count__45369,i__45370,vec__45371_45401,prop_45402,query_SINGLEQUOTE__45403,prop_dispatch_key_45404,recursion_QMARK__45405,union_recursion_QMARK__45406,query_SINGLEQUOTE__45407__$1,path_SINGLEQUOTE__45408,rendered_path_SINGLEQUOTE__45409,cs_45410,cascade_query_QMARK__45411,query_SINGLEQUOTE__SINGLEQUOTE__45412,join,map__45365,map__45365__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__45276_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__45276_SHARP_,cljs.core.PersistentArrayMap.createAsIfByAssoc([prop_dispatch_key_45404,cljs.core.PersistentHashSet.createAsIfByAssoc([class$], true)]));
});})(seq__45367,chunk__45368,count__45369,i__45370,vec__45371_45401,prop_45402,query_SINGLEQUOTE__45403,prop_dispatch_key_45404,recursion_QMARK__45405,union_recursion_QMARK__45406,query_SINGLEQUOTE__45407__$1,path_SINGLEQUOTE__45408,rendered_path_SINGLEQUOTE__45409,cs_45410,cascade_query_QMARK__45411,query_SINGLEQUOTE__SINGLEQUOTE__45412,join,map__45365,map__45365__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

if((cascade_query_QMARK__45411) && (cljs.core.not_EQ_.call(null,query_SINGLEQUOTE__45407__$1,query_SINGLEQUOTE__SINGLEQUOTE__45412))){
var cp__GT_q_SINGLEQUOTE__45413 = om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1,path_SINGLEQUOTE__45408,query_SINGLEQUOTE__SINGLEQUOTE__45412,union_keys);
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__45413);
} else {
}

var class_SINGLEQUOTE__45414 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__SINGLEQUOTE__45412));
if((recursion_QMARK__45405) && ((class_SINGLEQUOTE__45414 == null))){
} else {
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__45414,query_SINGLEQUOTE__SINGLEQUOTE__45412,path_SINGLEQUOTE__45408,classpath__$1,((recursion_QMARK__45405)?union_expr:null),union_keys);
}

var G__45415 = seq__45367;
var G__45416 = chunk__45368;
var G__45417 = count__45369;
var G__45418 = (i__45370 + (1));
seq__45367 = G__45415;
chunk__45368 = G__45416;
count__45369 = G__45417;
i__45370 = G__45418;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__45367);
if(temp__6753__auto__){
var seq__45367__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45367__$1)){
var c__29859__auto__ = cljs.core.chunk_first.call(null,seq__45367__$1);
var G__45419 = cljs.core.chunk_rest.call(null,seq__45367__$1);
var G__45420 = c__29859__auto__;
var G__45421 = cljs.core.count.call(null,c__29859__auto__);
var G__45422 = (0);
seq__45367 = G__45419;
chunk__45368 = G__45420;
count__45369 = G__45421;
i__45370 = G__45422;
continue;
} else {
var join = cljs.core.first.call(null,seq__45367__$1);
var vec__45374_45423 = om.util.join_entry.call(null,join);
var prop_45424 = cljs.core.nth.call(null,vec__45374_45423,(0),null);
var query_SINGLEQUOTE__45425 = cljs.core.nth.call(null,vec__45374_45423,(1),null);
var prop_dispatch_key_45426 = om.next.get_dispatch_key.call(null,prop_45424);
var recursion_QMARK__45427 = om.util.recursion_QMARK_.call(null,query_SINGLEQUOTE__45425);
var union_recursion_QMARK__45428 = (function (){var and__28936__auto__ = recursion_QMARK__45427;
if(and__28936__auto__){
return union_expr;
} else {
return and__28936__auto__;
}
})();
var query_SINGLEQUOTE__45429__$1 = ((recursion_QMARK__45427)?((!((union_expr == null)))?union_expr:query):query_SINGLEQUOTE__45425);
var path_SINGLEQUOTE__45430 = cljs.core.conj.call(null,path,prop_45424);
var rendered_path_SINGLEQUOTE__45431 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys),path_SINGLEQUOTE__45430));
var cs_45432 = cljs.core.get.call(null,dp__GT_cs,rendered_path_SINGLEQUOTE__45431);
var cascade_query_QMARK__45433 = (cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_45432),(1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__45429__$1)),om.next.react_type.call(null,cljs.core.first.call(null,cs_45432)))) && (!(cljs.core.map_QMARK_.call(null,query_SINGLEQUOTE__45429__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__45434 = ((cascade_query_QMARK__45433)?om.next.get_query.call(null,cljs.core.first.call(null,cs_45432)):query_SINGLEQUOTE__45429__$1);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__45367,chunk__45368,count__45369,i__45370,vec__45374_45423,prop_45424,query_SINGLEQUOTE__45425,prop_dispatch_key_45426,recursion_QMARK__45427,union_recursion_QMARK__45428,query_SINGLEQUOTE__45429__$1,path_SINGLEQUOTE__45430,rendered_path_SINGLEQUOTE__45431,cs_45432,cascade_query_QMARK__45433,query_SINGLEQUOTE__SINGLEQUOTE__45434,join,seq__45367__$1,temp__6753__auto__,map__45365,map__45365__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__45276_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__45276_SHARP_,cljs.core.PersistentArrayMap.createAsIfByAssoc([prop_dispatch_key_45426,cljs.core.PersistentHashSet.createAsIfByAssoc([class$], true)]));
});})(seq__45367,chunk__45368,count__45369,i__45370,vec__45374_45423,prop_45424,query_SINGLEQUOTE__45425,prop_dispatch_key_45426,recursion_QMARK__45427,union_recursion_QMARK__45428,query_SINGLEQUOTE__45429__$1,path_SINGLEQUOTE__45430,rendered_path_SINGLEQUOTE__45431,cs_45432,cascade_query_QMARK__45433,query_SINGLEQUOTE__SINGLEQUOTE__45434,join,seq__45367__$1,temp__6753__auto__,map__45365,map__45365__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
);

if((cascade_query_QMARK__45433) && (cljs.core.not_EQ_.call(null,query_SINGLEQUOTE__45429__$1,query_SINGLEQUOTE__SINGLEQUOTE__45434))){
var cp__GT_q_SINGLEQUOTE__45435 = om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1,path_SINGLEQUOTE__45430,query_SINGLEQUOTE__SINGLEQUOTE__45434,union_keys);
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__45435);
} else {
}

var class_SINGLEQUOTE__45436 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__SINGLEQUOTE__45434));
if((recursion_QMARK__45427) && ((class_SINGLEQUOTE__45436 == null))){
} else {
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__45436,query_SINGLEQUOTE__SINGLEQUOTE__45434,path_SINGLEQUOTE__45430,classpath__$1,((recursion_QMARK__45427)?union_expr:null),union_keys);
}

var G__45437 = cljs.core.next.call(null,seq__45367__$1);
var G__45438 = null;
var G__45439 = (0);
var G__45440 = (0);
seq__45367 = G__45437;
chunk__45368 = G__45438;
count__45369 = G__45439;
i__45370 = G__45440;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.map_QMARK_.call(null,query)){
var seq__45377 = cljs.core.seq.call(null,query);
var chunk__45378 = null;
var count__45379 = (0);
var i__45380 = (0);
while(true){
if((i__45380 < count__45379)){
var vec__45381 = cljs.core._nth.call(null,chunk__45378,i__45380);
var prop = cljs.core.nth.call(null,vec__45381,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__45381,(1),null);
var path_SINGLEQUOTE__45441 = cljs.core.conj.call(null,path,prop);
var class_SINGLEQUOTE__45442 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE_));
var cs_45443 = cljs.core.filter.call(null,((function (seq__45377,chunk__45378,count__45379,i__45380,path_SINGLEQUOTE__45441,class_SINGLEQUOTE__45442,vec__45381,prop,query_SINGLEQUOTE_,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__45277_SHARP_){
return cljs.core._EQ_.call(null,class_SINGLEQUOTE__45442,om.next.react_type.call(null,p1__45277_SHARP_));
});})(seq__45377,chunk__45378,count__45379,i__45380,path_SINGLEQUOTE__45441,class_SINGLEQUOTE__45442,vec__45381,prop,query_SINGLEQUOTE_,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,cljs.core.get.call(null,dp__GT_cs,path));
var cascade_query_QMARK__45444 = (function (){var and__28936__auto__ = class_SINGLEQUOTE__45442;
if(cljs.core.truth_(and__28936__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_45443),(1));
} else {
return and__28936__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__45445 = (cljs.core.truth_(cascade_query_QMARK__45444)?om.next.get_query.call(null,cljs.core.first.call(null,cs_45443)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__28936__auto__ = cascade_query_QMARK__45444;
if(cljs.core.truth_(and__28936__auto__)){
return cljs.core.not_EQ_.call(null,query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__45445);
} else {
return and__28936__auto__;
}
})())){
var qs_45446 = cljs.core.get.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1);
var q_45447 = cljs.core.first.call(null,qs_45446);
var qnode_45448 = clojure.zip.node.call(null,(function (){var G__45384 = q_45447;
if((class$ == null)){
return om.next.query_template.call(null,G__45384,path);
} else {
return G__45384;
}
})());
var new_query_45449 = cljs.core.assoc.call(null,qnode_45448,prop,query_SINGLEQUOTE__SINGLEQUOTE__45445);
var q_SINGLEQUOTE__45450 = (function (){var G__45385 = clojure.zip.replace.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q_45447),path),new_query_45449);
if((class$ == null)){
return om.next.query_template.call(null,om.next.focus_query.call(null,clojure.zip.root.call(null,G__45385),cljs.core.pop.call(null,path)),cljs.core.pop.call(null,path));
} else {
return G__45385;
}
})();
var qs_SINGLEQUOTE__45451 = cljs.core.into.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([q_SINGLEQUOTE__45450], true),cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([q_45447], true)),qs_45446);
var cp__GT_q_SINGLEQUOTE__45452 = cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([classpath__$1,qs_SINGLEQUOTE__45451]),om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),cljs.core.pop.call(null,classpath__$1),path,clojure.zip.node.call(null,q_SINGLEQUOTE__45450),union_keys));
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__45452);
} else {
}

om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__45442,query_SINGLEQUOTE__SINGLEQUOTE__45445,path_SINGLEQUOTE__45441,classpath__$1,query,cljs.core.conj.call(null,union_keys,prop));

var G__45453 = seq__45377;
var G__45454 = chunk__45378;
var G__45455 = count__45379;
var G__45456 = (i__45380 + (1));
seq__45377 = G__45453;
chunk__45378 = G__45454;
count__45379 = G__45455;
i__45380 = G__45456;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__45377);
if(temp__6753__auto__){
var seq__45377__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45377__$1)){
var c__29859__auto__ = cljs.core.chunk_first.call(null,seq__45377__$1);
var G__45457 = cljs.core.chunk_rest.call(null,seq__45377__$1);
var G__45458 = c__29859__auto__;
var G__45459 = cljs.core.count.call(null,c__29859__auto__);
var G__45460 = (0);
seq__45377 = G__45457;
chunk__45378 = G__45458;
count__45379 = G__45459;
i__45380 = G__45460;
continue;
} else {
var vec__45386 = cljs.core.first.call(null,seq__45377__$1);
var prop = cljs.core.nth.call(null,vec__45386,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__45386,(1),null);
var path_SINGLEQUOTE__45461 = cljs.core.conj.call(null,path,prop);
var class_SINGLEQUOTE__45462 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE_));
var cs_45463 = cljs.core.filter.call(null,((function (seq__45377,chunk__45378,count__45379,i__45380,path_SINGLEQUOTE__45461,class_SINGLEQUOTE__45462,vec__45386,prop,query_SINGLEQUOTE_,seq__45377__$1,temp__6753__auto__,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1){
return (function (p1__45277_SHARP_){
return cljs.core._EQ_.call(null,class_SINGLEQUOTE__45462,om.next.react_type.call(null,p1__45277_SHARP_));
});})(seq__45377,chunk__45378,count__45379,i__45380,path_SINGLEQUOTE__45461,class_SINGLEQUOTE__45462,vec__45386,prop,query_SINGLEQUOTE_,seq__45377__$1,temp__6753__auto__,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
,cljs.core.get.call(null,dp__GT_cs,path));
var cascade_query_QMARK__45464 = (function (){var and__28936__auto__ = class_SINGLEQUOTE__45462;
if(cljs.core.truth_(and__28936__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_45463),(1));
} else {
return and__28936__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__45465 = (cljs.core.truth_(cascade_query_QMARK__45464)?om.next.get_query.call(null,cljs.core.first.call(null,cs_45463)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__28936__auto__ = cascade_query_QMARK__45464;
if(cljs.core.truth_(and__28936__auto__)){
return cljs.core.not_EQ_.call(null,query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__45465);
} else {
return and__28936__auto__;
}
})())){
var qs_45466 = cljs.core.get.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1);
var q_45467 = cljs.core.first.call(null,qs_45466);
var qnode_45468 = clojure.zip.node.call(null,(function (){var G__45389 = q_45467;
if((class$ == null)){
return om.next.query_template.call(null,G__45389,path);
} else {
return G__45389;
}
})());
var new_query_45469 = cljs.core.assoc.call(null,qnode_45468,prop,query_SINGLEQUOTE__SINGLEQUOTE__45465);
var q_SINGLEQUOTE__45470 = (function (){var G__45390 = clojure.zip.replace.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q_45467),path),new_query_45469);
if((class$ == null)){
return om.next.query_template.call(null,om.next.focus_query.call(null,clojure.zip.root.call(null,G__45390),cljs.core.pop.call(null,path)),cljs.core.pop.call(null,path));
} else {
return G__45390;
}
})();
var qs_SINGLEQUOTE__45471 = cljs.core.into.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([q_SINGLEQUOTE__45470], true),cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([q_45467], true)),qs_45466);
var cp__GT_q_SINGLEQUOTE__45472 = cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([classpath__$1,qs_SINGLEQUOTE__45471]),om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),cljs.core.pop.call(null,classpath__$1),path,clojure.zip.node.call(null,q_SINGLEQUOTE__45470),union_keys));
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__45472);
} else {
}

om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__45462,query_SINGLEQUOTE__SINGLEQUOTE__45465,path_SINGLEQUOTE__45461,classpath__$1,query,cljs.core.conj.call(null,union_keys,prop));

var G__45473 = cljs.core.next.call(null,seq__45377__$1);
var G__45474 = null;
var G__45475 = (0);
var G__45476 = (0);
seq__45377 = G__45473;
chunk__45378 = G__45474;
count__45379 = G__45475;
i__45380 = G__45476;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
} else {
return null;
}
});})(prop__GT_classes,class_path__GT_query,rootq,root_class,___$1))
;
build_index_STAR_.call(null,root_class,rootq,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.call(null,self__.indexes,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),cljs.core.deref.call(null,prop__GT_classes),new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cljs.core.deref.call(null,class_path__GT_query)], null));
});


om.next.Indexer.prototype.om$next$protocols$IIndexer$index_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"index-component","index-component",-1258618905).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),om.next.react_type.call(null,c)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,c));
var indexes__$3 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"index-component","index-component",-1258618905).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$2,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750),data_path], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var ident = ((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false))?(function (){var ident = om.next.ident.call(null,c,om.next.props.call(null,c));
var l__43770__auto___45477 = om.next._STAR_logger_STAR_;
if(om.util.ident_QMARK_.call(null,ident)){
} else {
goog.log.error(l__43770__auto___45477,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invariant Violation"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((null == null))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" (in function: `"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1("`)")].join(''))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("malformed Ident. An ident must be a vector of "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("two elements (a keyword and an EDN value). Check "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("the Ident implementation of component `"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c.constructor.displayName),cljs.core.str.cljs$core$IFn$_invoke$arity$1("`.")].join(''))].join(''));
}

var l__43770__auto___45478 = om.next._STAR_logger_STAR_;
if(!((cljs.core.second.call(null,ident) == null))){
} else {
goog.log.error(l__43770__auto___45478,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invariant Violation"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((null == null))?null:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" (in function: `"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1("`)")].join(''))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("component "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c.constructor.displayName),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'s ident ("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ident),cljs.core.str.cljs$core$IFn$_invoke$arity$1(") has a `nil` second element."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" This warning can be safely ignored if that is intended.")].join(''))].join(''));
}

return ident;
})():null);
if(!((ident == null))){
var G__45392 = indexes__$3;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.call(null,G__45392,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
} else {
return G__45392;
}
} else {
return indexes__$3;
}
});})(___$1))
);
});


om.next.Indexer.prototype.om$next$protocols$IIndexer$drop_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"drop-component","drop-component",1805913749).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),om.next.react_type.call(null,c)], null),cljs.core.disj,c);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,c));
var indexes__$3 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"drop-component","drop-component",1805913749).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$2,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750),data_path], null),cljs.core.disj,c);
var ident = ((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false))?om.next.ident.call(null,c,om.next.props.call(null,c)):null);
if(!((ident == null))){
var G__45394 = indexes__$3;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.call(null,G__45394,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident], null),cljs.core.disj,c);
} else {
return G__45394;
}
} else {
return indexes__$3;
}
});})(___$1))
);
});


om.next.Indexer.prototype.om$next$protocols$IIndexer$key__GT_components$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var indexes__$1 = cljs.core.deref.call(null,self__.indexes);
if(om.next.component_QMARK_.call(null,k)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([k], true);
} else {
var temp__6751__auto__ = new cljs.core.Keyword(null,"ref->components","ref->components",-303587249).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,k);
if(cljs.core.truth_(temp__6751__auto__)){
var cs = temp__6751__auto__;
return cs;
} else {
return cljs.core.transduce.call(null,cljs.core.map.call(null,((function (temp__6751__auto__,indexes__$1,___$1){
return (function (p1__45278_SHARP_){
return cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),p1__45278_SHARP_], null));
});})(temp__6751__auto__,indexes__$1,___$1))
),cljs.core.completing.call(null,cljs.core.into),cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),k], null),cljs.core.PersistentHashSet.EMPTY),cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),k], null)));
}
}
});


om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29623__auto__,k__29624__auto__){
var self__ = this;
var this__29623__auto____$1 = this;
return this__29623__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__29624__auto__,null);
});


om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29625__auto__,k45280,else__29626__auto__){
var self__ = this;
var this__29625__auto____$1 = this;
var G__45395 = (((k45280 instanceof cljs.core.Keyword))?k45280.fqn:null);
switch (G__45395) {
case "indexes":
return self__.indexes;

break;
case "extfs":
return self__.extfs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k45280,else__29626__auto__);

}
});


om.next.Indexer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29637__auto__,writer__29638__auto__,opts__29639__auto__){
var self__ = this;
var this__29637__auto____$1 = this;
var pr_pair__29640__auto__ = ((function (this__29637__auto____$1){
return (function (keyval__29641__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29638__auto__,cljs.core.pr_writer,""," ","",opts__29639__auto__,keyval__29641__auto__);
});})(this__29637__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29638__auto__,pr_pair__29640__auto__,"#om.next.Indexer{",", ","}",opts__29639__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extfs","extfs",607041493),self__.extfs],null))], null),self__.__extmap));
});


om.next.Indexer.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


om.next.Indexer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45279){
var self__ = this;
var G__45279__$1 = this;
return (new cljs.core.RecordIter((0),G__45279__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"extfs","extfs",607041493)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


om.next.Indexer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29621__auto__){
var self__ = this;
var this__29621__auto____$1 = this;
return self__.__meta;
});


om.next.Indexer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__29617__auto__){
var self__ = this;
var this__29617__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,self__.__extmap,self__.__hash));
});


om.next.Indexer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29627__auto__){
var self__ = this;
var this__29627__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});


om.next.Indexer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29618__auto__){
var self__ = this;
var this__29618__auto____$1 = this;
var h__29390__auto__ = self__.__hash;
if(!((h__29390__auto__ == null))){
return h__29390__auto__;
} else {
var h__29390__auto____$1 = cljs.core.hash_imap.call(null,this__29618__auto____$1);
self__.__hash = h__29390__auto____$1;

return h__29390__auto____$1;
}
});


om.next.Indexer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__29619__auto__,other__29620__auto__){
var self__ = this;
var this__29619__auto____$1 = this;
if(cljs.core.truth_((function (){var and__28936__auto__ = other__29620__auto__;
if(cljs.core.truth_(and__28936__auto__)){
return ((this__29619__auto____$1.constructor === other__29620__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__29619__auto____$1,other__29620__auto__));
} else {
return and__28936__auto__;
}
})())){
return true;
} else {
return false;
}
});


om.next.Indexer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29632__auto__,k__29633__auto__){
var self__ = this;
var this__29632__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extfs","extfs",607041493),null,new cljs.core.Keyword(null,"indexes","indexes",1496475545),null], null), null),k__29633__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29632__auto____$1),self__.__meta),k__29633__auto__);
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29633__auto__)),null));
}
});


om.next.Indexer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29630__auto__,k__29631__auto__,G__45279){
var self__ = this;
var this__29630__auto____$1 = this;
var pred__45396 = cljs.core.keyword_identical_QMARK_;
var expr__45397 = k__29631__auto__;
if(cljs.core.truth_(pred__45396.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545),expr__45397))){
return (new om.next.Indexer(G__45279,self__.extfs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__45396.call(null,new cljs.core.Keyword(null,"extfs","extfs",607041493),expr__45397))){
return (new om.next.Indexer(self__.indexes,G__45279,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29631__auto__,G__45279),null));
}
}
});


om.next.Indexer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29635__auto__){
var self__ = this;
var this__29635__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extfs","extfs",607041493),self__.extfs],null))], null),self__.__extmap));
});


om.next.Indexer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29622__auto__,G__45279){
var self__ = this;
var this__29622__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,G__45279,self__.__extmap,self__.__hash));
});


om.next.Indexer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29628__auto__,entry__29629__auto__){
var self__ = this;
var this__29628__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29629__auto__)){
return this__29628__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__29629__auto__,(0)),cljs.core._nth.call(null,entry__29629__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29628__auto____$1,entry__29629__auto__);
}
});


om.next.Indexer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.indexes);
});

om.next.Indexer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"indexes","indexes",-1157960224,null),new cljs.core.Symbol(null,"extfs","extfs",-2047394276,null)], null);
});

om.next.Indexer.cljs$lang$type = true;

om.next.Indexer.cljs$lang$ctorPrSeq = (function (this__29659__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Indexer");
});

om.next.Indexer.cljs$lang$ctorPrWriter = (function (this__29659__auto__,writer__29660__auto__){
return cljs.core._write.call(null,writer__29660__auto__,"om.next/Indexer");
});

om.next.__GT_Indexer = (function om$next$__GT_Indexer(indexes,extfs){
return (new om.next.Indexer(indexes,extfs,null,null,null));
});

om.next.map__GT_Indexer = (function om$next$map__GT_Indexer(G__45281){
return (new om.next.Indexer(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(G__45281),new cljs.core.Keyword(null,"extfs","extfs",607041493).cljs$core$IFn$_invoke$arity$1(G__45281),null,cljs.core.dissoc.call(null,G__45281,new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"extfs","extfs",607041493)),null));
});

/**
 * Given a function (Component -> Ref), return an indexer.
 */
om.next.indexer = (function om$next$indexer(var_args){
var args45480 = [];
var len__30169__auto___45483 = arguments.length;
var i__30170__auto___45484 = (0);
while(true){
if((i__30170__auto___45484 < len__30169__auto___45483)){
args45480.push((arguments[i__30170__auto___45484]));

var G__45485 = (i__30170__auto___45484 + (1));
i__30170__auto___45484 = G__45485;
continue;
} else {
}
break;
}

var G__45482 = args45480.length;
switch (G__45482) {
case 0:
return om.next.indexer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.indexer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45480.length)].join('')));

}
});

om.next.indexer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.next.indexer.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index-component","index-component",-1258618905),(function (indexes,component){
return indexes;
}),new cljs.core.Keyword(null,"drop-component","drop-component",1805913749),(function (indexes,component){
return indexes;
}),new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),(function (indexes,ref){
return null;
})], null));
});

om.next.indexer.cljs$core$IFn$_invoke$arity$1 = (function (extfs){
return (new om.next.Indexer(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),cljs.core.PersistentArrayMap.EMPTY], null)),extfs,null,null,null));
});

om.next.indexer.cljs$lang$maxFixedArity = 1;

/**
 * PRIVATE: Get the indexer associated with the reconciler.
 */
om.next.get_indexer = (function om$next$get_indexer(reconciler){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return all components for a given ref.
 */
om.next.ref__GT_components = (function om$next$ref__GT_components(x,ref){
if((ref == null)){
return null;
} else {
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return om.next.protocols.key__GT_components.call(null,indexer,ref);
}
});
/**
 * Get any component from the indexer that matches the ref.
 */
om.next.ref__GT_any = (function om$next$ref__GT_any(x,ref){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,om.next.protocols.key__GT_components.call(null,indexer,ref));
});
/**
 * Get any component from the indexer that matches the component class.
 */
om.next.class__GT_any = (function om$next$class__GT_any(x,class$){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),class$], null)));
});
/**
 * Given x (a reconciler or indexer) and y (a component or component class
 * path), return the queries for that path.
 */
om.next.class_path__GT_queries = (function om$next$class_path__GT_queries(x,y){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
var cp = ((om.next.component_QMARK_.call(null,y))?om.next.class_path.call(null,y):y);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,clojure.zip.root),cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cp], null)));
});
/**
 * Returns the absolute query for a given component, not relative like
 * om.next/get-query.
 */
om.next.full_query = (function om$next$full_query(var_args){
var args45488 = [];
var len__30169__auto___45492 = arguments.length;
var i__30170__auto___45493 = (0);
while(true){
if((i__30170__auto___45493 < len__30169__auto___45492)){
args45488.push((arguments[i__30170__auto___45493]));

var G__45494 = (i__30170__auto___45493 + (1));
i__30170__auto___45493 = G__45494;
continue;
} else {
}
break;
}

var G__45490 = args45488.length;
switch (G__45490) {
case 1:
return om.next.full_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.full_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45488.length)].join('')));

}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
if(om.next.iquery_QMARK_.call(null,component)){
if((om.next.path.call(null,component) == null)){
return om.next.replace.call(null,cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next.get_indexer.call(null,om.next.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),om.next.class_path.call(null,component)], null))),om.next.get_query.call(null,component));
} else {
return om.next.full_query.call(null,component,om.next.get_query.call(null,component));
}
} else {
return null;
}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query){
if(om.next.iquery_QMARK_.call(null,component)){
var xf = (function (){var G__45491 = cljs.core.remove.call(null,cljs.core.number_QMARK_);
if(om.next.recursive_class_path_QMARK_.call(null,component)){
return cljs.core.comp.call(null,cljs.core.distinct.call(null),G__45491);
} else {
return G__45491;
}
})();
var path_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,xf,om.next.path.call(null,component));
var cp = om.next.class_path.call(null,component);
var qs = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next.get_indexer.call(null,om.next.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cp], null));
if(!(cljs.core.empty_QMARK_.call(null,qs))){
var q = cljs.core.first.call(null,cljs.core.filter.call(null,((function (xf,path_SINGLEQUOTE_,cp,qs){
return (function (p1__45487_SHARP_){
return cljs.core._EQ_.call(null,path_SINGLEQUOTE_,cljs.core.mapv.call(null,om.next.get_dispatch_key,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__45487_SHARP_),path_SINGLEQUOTE_)));
});})(xf,path_SINGLEQUOTE_,cp,qs))
,qs));
if(!((q == null))){
return om.next.replace.call(null,q,query);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("No queries exist at the intersection of component path "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cp),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" and data path "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_SINGLEQUOTE_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("om.next","no-queries","om.next/no-queries",2125033807)], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("No queries exist for component path "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cp)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("om.next","no-queries","om.next/no-queries",2125033807)], null));
}
} else {
return null;
}
});

om.next.full_query.cljs$lang$maxFixedArity = 2;

om.next.normalize_STAR_ = (function om$next$normalize_STAR_(query,data,refs,union_seen){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data;
} else {
if(cljs.core.map_QMARK_.call(null,query)){
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query));
var ident = ((((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.om$next$Ident$)))?true:false):false))?om.next.ident.call(null,class$,data):null);
if(!((ident == null))){
return cljs.core.vary_meta.call(null,om.next.normalize_STAR_.call(null,cljs.core.get.call(null,query,cljs.core.first.call(null,ident)),data,refs,union_seen),cljs.core.assoc,new cljs.core.Keyword("om","tag","om/tag",-1290356769),cljs.core.first.call(null,ident));
} else {
throw (new Error("Union components must implement Ident"));
}
} else {
if(cljs.core.vector_QMARK_.call(null,data)){
return data;
} else {
var q = cljs.core.seq.call(null,query);
var ret = data;
while(true){
if(!((q == null))){
var expr = cljs.core.first.call(null,q);
if(cljs.core.truth_(om.util.join_QMARK_.call(null,expr))){
var vec__45516 = om.util.join_entry.call(null,expr);
var k = cljs.core.nth.call(null,vec__45516,(0),null);
var sel = cljs.core.nth.call(null,vec__45516,(1),null);
var recursive_QMARK_ = om.util.recursion_QMARK_.call(null,sel);
var union_entry = ((om.util.union_QMARK_.call(null,expr))?sel:union_seen);
var sel__$1 = ((recursive_QMARK_)?((!((union_seen == null)))?union_seen:query):sel);
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sel__$1));
var v = cljs.core.get.call(null,data,k);
if((recursive_QMARK_) && (om.util.ident_QMARK_.call(null,v))){
var G__45531 = cljs.core.next.call(null,q);
var G__45532 = ret;
q = G__45531;
ret = G__45532;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,v)){
var x = om.next.normalize_STAR_.call(null,sel__$1,v,refs,union_entry);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.om$next$Ident$)))?true:false):false))))){
var i = om.next.ident.call(null,class$,v);
cljs.core.swap_BANG_.call(null,refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,i),cljs.core.second.call(null,i)], null),cljs.core.merge,x);

var G__45533 = cljs.core.next.call(null,q);
var G__45534 = cljs.core.assoc.call(null,ret,k,i);
q = G__45533;
ret = G__45534;
continue;
} else {
var G__45535 = cljs.core.next.call(null,q);
var G__45536 = cljs.core.assoc.call(null,ret,k,x);
q = G__45535;
ret = G__45536;
continue;
}
} else {
if(cljs.core.vector_QMARK_.call(null,v)){
var xs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,vec__45516,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__45496_SHARP_){
return om.next.normalize_STAR_.call(null,sel__$1,p1__45496_SHARP_,refs,union_entry);
});})(q,ret,vec__45516,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),v);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === class$.om$next$Ident$)))?true:false):false))))){
var is = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,xs,vec__45516,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__45498_SHARP_){
return om.next.ident.call(null,class$,p1__45498_SHARP_);
});})(q,ret,xs,vec__45516,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),xs);
if(cljs.core.vector_QMARK_.call(null,sel__$1)){
if(cljs.core.empty_QMARK_.call(null,is)){
} else {
cljs.core.swap_BANG_.call(null,refs,((function (q,ret,is,xs,vec__45516,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs__$1){
return cljs.core.reduce.call(null,((function (q,ret,is,xs,vec__45516,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (m,p__45523){
var vec__45524 = p__45523;
var i = cljs.core.nth.call(null,vec__45524,(0),null);
var x = cljs.core.nth.call(null,vec__45524,(1),null);
return cljs.core.update_in.call(null,m,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__45516,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs__$1,cljs.core.zipmap.call(null,is,xs));
});})(q,ret,is,xs,vec__45516,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}
} else {
cljs.core.swap_BANG_.call(null,refs,((function (q,ret,is,xs,vec__45516,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.call(null,((function (q,ret,is,xs,vec__45516,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (ret__$1,p__45527){
var vec__45528 = p__45527;
var i = cljs.core.nth.call(null,vec__45528,(0),null);
var x = cljs.core.nth.call(null,vec__45528,(1),null);
return cljs.core.update_in.call(null,ret__$1,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__45516,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs_SINGLEQUOTE_,cljs.core.map.call(null,cljs.core.vector,is,xs));
});})(q,ret,is,xs,vec__45516,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}

var G__45537 = cljs.core.next.call(null,q);
var G__45538 = cljs.core.assoc.call(null,ret,k,is);
q = G__45537;
ret = G__45538;
continue;
} else {
var G__45539 = cljs.core.next.call(null,q);
var G__45540 = cljs.core.assoc.call(null,ret,k,xs);
q = G__45539;
ret = G__45540;
continue;
}
} else {
if((v == null)){
var G__45541 = cljs.core.next.call(null,q);
var G__45542 = ret;
q = G__45541;
ret = G__45542;
continue;
} else {
var G__45543 = cljs.core.next.call(null,q);
var G__45544 = cljs.core.assoc.call(null,ret,k,v);
q = G__45543;
ret = G__45544;
continue;

}
}
}
}
} else {
var k = ((cljs.core.seq_QMARK_.call(null,expr))?cljs.core.first.call(null,expr):expr);
var v = cljs.core.get.call(null,data,k);
if((v == null)){
var G__45545 = cljs.core.next.call(null,q);
var G__45546 = ret;
q = G__45545;
ret = G__45546;
continue;
} else {
var G__45547 = cljs.core.next.call(null,q);
var G__45548 = cljs.core.assoc.call(null,ret,k,v);
q = G__45547;
ret = G__45548;
continue;
}
}
} else {
return ret;
}
break;
}

}
}
}
});
/**
 * Given a Om component class or instance and a tree of data, use the component's
 * query to transform the tree into the default database format. All nodes that
 * can be mapped via Ident implementations wil be replaced with ident links. The
 * original node data will be moved into tables indexed by ident. If merge-idents
 * option is true, will return these tables in the result instead of as metadata.
 */
om.next.tree__GT_db = (function om$next$tree__GT_db(var_args){
var args45549 = [];
var len__30169__auto___45552 = arguments.length;
var i__30170__auto___45553 = (0);
while(true){
if((i__30170__auto___45553 < len__30169__auto___45552)){
args45549.push((arguments[i__30170__auto___45553]));

var G__45554 = (i__30170__auto___45553 + (1));
i__30170__auto___45553 = G__45554;
continue;
} else {
}
break;
}

var G__45551 = args45549.length;
switch (G__45551) {
case 2:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45549.length)].join('')));

}
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return om.next.tree__GT_db.call(null,x,data,false);
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_idents){
var refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var x__$1 = ((cljs.core.vector_QMARK_.call(null,x))?x:om.next.get_query.call(null,x));
var ret = om.next.normalize_STAR_.call(null,x__$1,data,refs,null);
if(merge_idents){
var refs_SINGLEQUOTE_ = cljs.core.deref.call(null,refs);
return cljs.core.assoc.call(null,cljs.core.merge.call(null,ret,refs_SINGLEQUOTE_),new cljs.core.Keyword("om.next","tables","om.next/tables",1677536335),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,refs_SINGLEQUOTE_)));
} else {
return cljs.core.with_meta.call(null,ret,cljs.core.deref.call(null,refs));
}
});

om.next.tree__GT_db.cljs$lang$maxFixedArity = 3;

om.next.sift_idents = (function om$next$sift_idents(res){
var map__45559 = cljs.core.group_by.call(null,(function (p1__45556_SHARP_){
return cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,p1__45556_SHARP_));
}),res);
var map__45559__$1 = ((((!((map__45559 == null)))?((((map__45559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45559.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45559):map__45559);
var idents = cljs.core.get.call(null,map__45559__$1,true);
var rest = cljs.core.get.call(null,map__45559__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,idents),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,rest)], null);
});
/**
 * Changes a join on key k with depth limit from [:a {:k n}] to [:a {:k (dec n)}]
 */
om.next.reduce_query_depth = (function om$next$reduce_query_depth(q,k){
if(!(cljs.core.empty_QMARK_.call(null,om.next.focus_query.call(null,q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))))){
var pos = om.next.query_template.call(null,q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var node = clojure.zip.node.call(null,pos);
var node_SINGLEQUOTE_ = (function (){var G__45562 = node;
if(typeof node === 'number'){
return (G__45562 - (1));
} else {
return G__45562;
}
})();
return om.next.replace.call(null,pos,node_SINGLEQUOTE_);
} else {
return q;
}
});
/**
 * Given a union expression decrement each of the query roots by one if it
 * is recursive.
 */
om.next.reduce_union_recursion_depth = (function om$next$reduce_union_recursion_depth(union_expr,recursion_key){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__45567){
var vec__45568 = p__45567;
var k = cljs.core.nth.call(null,vec__45568,(0),null);
var q = cljs.core.nth.call(null,vec__45568,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.next.reduce_query_depth.call(null,q,recursion_key)], null);
}),union_expr));
});
om.next.mappable_ident_QMARK_ = (function om$next$mappable_ident_QMARK_(refs,ident){
return (om.util.ident_QMARK_.call(null,ident)) && (cljs.core.contains_QMARK_.call(null,refs,cljs.core.first.call(null,ident)));
});
/**
 * Denormalize a data based on query. refs is a data structure which maps idents
 * to their values. map-ident is a function taking a ident to another ident,
 * used during tempid transition. idents-seen is the set of idents encountered,
 * used to limit recursion. union-expr is the current union expression being
 * evaluated. recurse-key is key representing the current recursive query being
 * evaluted.
 */
om.next.denormalize_STAR_ = (function om$next$denormalize_STAR_(query,data,refs,map_ident,idents_seen,union_expr,recurse_key){
var union_recur_QMARK_ = (function (){var and__28936__auto__ = union_expr;
if(cljs.core.truth_(and__28936__auto__)){
return recurse_key;
} else {
return and__28936__auto__;
}
})();
var recur_ident = (cljs.core.truth_(union_recur_QMARK_)?data:null);
var data__$1 = (function (){var data__$1 = data;
while(true){
if(cljs.core.truth_(om.next.mappable_ident_QMARK_.call(null,refs,data__$1))){
var G__45618 = cljs.core.get_in.call(null,refs,map_ident.call(null,data__$1));
data__$1 = G__45618;
continue;
} else {
return data__$1;
}
break;
}
})();
if(cljs.core.vector_QMARK_.call(null,data__$1)){
var step = ((function (union_recur_QMARK_,recur_ident,data__$1){
return (function (ident){
if(cljs.core.not.call(null,om.next.mappable_ident_QMARK_.call(null,refs,ident))){
if(cljs.core._EQ_.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null))){
return ident;
} else {
var map__45596 = cljs.core.group_by.call(null,om.util.join_QMARK_,query);
var map__45596__$1 = ((((!((map__45596 == null)))?((((map__45596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45596.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45596):map__45596);
var props = cljs.core.get.call(null,map__45596__$1,false);
var joins = cljs.core.get.call(null,map__45596__$1,true);
var props__$1 = cljs.core.mapv.call(null,((function (map__45596,map__45596__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__45571_SHARP_){
var G__45598 = p1__45571_SHARP_;
if(cljs.core.seq_QMARK_.call(null,p1__45571_SHARP_)){
return cljs.core.first.call(null,G__45598);
} else {
return G__45598;
}
});})(map__45596,map__45596__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq.call(null,joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first.call(null,joins__$1);
var vec__45599 = om.util.join_entry.call(null,join);
var key = cljs.core.nth.call(null,vec__45599,(0),null);
var sel = cljs.core.nth.call(null,vec__45599,(1),null);
var v = cljs.core.get.call(null,ident,key);
var G__45619 = cljs.core.next.call(null,joins__$1);
var G__45620 = cljs.core.assoc.call(null,ret,key,om.next.denormalize_STAR_.call(null,sel,v,refs,map_ident,idents_seen,union_expr,recurse_key));
joins__$1 = G__45619;
ret = G__45620;
continue;
} else {
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,ident,props__$1),ret);
}
break;
}
}
} else {
var ident_SINGLEQUOTE_ = cljs.core.get_in.call(null,refs,map_ident.call(null,ident));
var query__$1 = (function (){var G__45602 = query;
if(cljs.core.truth_(union_recur_QMARK_)){
return om.next.reduce_union_recursion_depth.call(null,G__45602,recurse_key);
} else {
return G__45602;
}
})();
var union_seen_SINGLEQUOTE_ = (function (){var G__45603 = union_expr;
if(cljs.core.truth_(union_recur_QMARK_)){
return om.next.reduce_union_recursion_depth.call(null,G__45603,recurse_key);
} else {
return G__45603;
}
})();
var query_SINGLEQUOTE_ = (function (){var G__45604 = query__$1;
if(cljs.core.map_QMARK_.call(null,query__$1)){
return cljs.core.get.call(null,G__45604,cljs.core.first.call(null,ident));
} else {
return G__45604;
}
})();
return om.next.denormalize_STAR_.call(null,query_SINGLEQUOTE_,ident_SINGLEQUOTE_,refs,map_ident,idents_seen,union_seen_SINGLEQUOTE_,null);
}
});})(union_recur_QMARK_,recur_ident,data__$1))
;
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,step),data__$1);
} else {
if(cljs.core.truth_((function (){var and__28936__auto__ = cljs.core.map_QMARK_.call(null,query);
if(and__28936__auto__){
return union_recur_QMARK_;
} else {
return and__28936__auto__;
}
})())){
return om.next.denormalize_STAR_.call(null,cljs.core.get.call(null,query,cljs.core.first.call(null,recur_ident)),data__$1,refs,map_ident,idents_seen,union_expr,recurse_key);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data__$1;
} else {
var map__45605 = cljs.core.group_by.call(null,((function (union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__45572_SHARP_){
var or__28948__auto__ = om.util.join_QMARK_.call(null,p1__45572_SHARP_);
if(cljs.core.truth_(or__28948__auto__)){
return or__28948__auto__;
} else {
return (om.util.ident_QMARK_.call(null,p1__45572_SHARP_)) || ((cljs.core.seq_QMARK_.call(null,p1__45572_SHARP_)) && (om.util.ident_QMARK_.call(null,cljs.core.first.call(null,p1__45572_SHARP_))));
}
});})(union_recur_QMARK_,recur_ident,data__$1))
,query);
var map__45605__$1 = ((((!((map__45605 == null)))?((((map__45605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45605.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45605):map__45605);
var props = cljs.core.get.call(null,map__45605__$1,false);
var joins = cljs.core.get.call(null,map__45605__$1,true);
var props__$1 = cljs.core.mapv.call(null,((function (map__45605,map__45605__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__45573_SHARP_){
var G__45607 = p1__45573_SHARP_;
if(cljs.core.seq_QMARK_.call(null,p1__45573_SHARP_)){
return cljs.core.first.call(null,G__45607);
} else {
return G__45607;
}
});})(map__45605,map__45605__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq.call(null,joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first.call(null,joins__$1);
var join__$1 = (function (){var G__45611 = join;
if(cljs.core.seq_QMARK_.call(null,join)){
return cljs.core.first.call(null,G__45611);
} else {
return G__45611;
}
})();
var join__$2 = (function (){var G__45612 = join__$1;
if(om.util.ident_QMARK_.call(null,join__$1)){
return cljs.core.PersistentHashMap.fromArrays([G__45612],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)]);
} else {
return G__45612;
}
})();
var vec__45608 = om.util.join_entry.call(null,join__$2);
var key = cljs.core.nth.call(null,vec__45608,(0),null);
var sel = cljs.core.nth.call(null,vec__45608,(1),null);
var recurse_QMARK_ = om.util.recursion_QMARK_.call(null,sel);
var recurse_key__$1 = ((recurse_QMARK_)?key:null);
var v = ((om.util.ident_QMARK_.call(null,key))?((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second.call(null,key)))?cljs.core.get.call(null,refs,cljs.core.first.call(null,key)):cljs.core.get_in.call(null,refs,map_ident.call(null,key))):cljs.core.get.call(null,data__$1,key));
var key__$1 = (function (){var G__45613 = key;
if(om.util.unique_ident_QMARK_.call(null,key)){
return cljs.core.first.call(null,G__45613);
} else {
return G__45613;
}
})();
var v__$1 = (cljs.core.truth_(om.next.mappable_ident_QMARK_.call(null,refs,v))?(function (){var v__$1 = v;
while(true){
var next = cljs.core.get_in.call(null,refs,map_ident.call(null,v__$1));
if(cljs.core.truth_(om.next.mappable_ident_QMARK_.call(null,refs,next))){
var G__45621 = next;
v__$1 = G__45621;
continue;
} else {
return map_ident.call(null,v__$1);
}
break;
}
})():v);
var limit = ((typeof sel === 'number')?sel:new cljs.core.Keyword(null,"none","none",1333468478));
var union_entry = ((om.util.union_QMARK_.call(null,join__$2))?sel:((recurse_QMARK_)?union_expr:null));
var sel__$1 = ((recurse_QMARK_)?((!((union_expr == null)))?union_entry:om.next.reduce_query_depth.call(null,query,key__$1)):(cljs.core.truth_((function (){var and__28936__auto__ = om.next.mappable_ident_QMARK_.call(null,refs,v__$1);
if(cljs.core.truth_(and__28936__auto__)){
return om.util.union_QMARK_.call(null,join__$2);
} else {
return and__28936__auto__;
}
})())?cljs.core.get.call(null,sel,cljs.core.first.call(null,v__$1)):(((om.util.ident_QMARK_.call(null,key__$1)) && (om.util.union_QMARK_.call(null,join__$2)))?cljs.core.get.call(null,sel,cljs.core.first.call(null,key__$1)):sel
)));
var graph_loop_QMARK_ = (recurse_QMARK_) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.get.call(null,idents_seen,key__$1)),v__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"none","none",1333468478),limit));
var idents_seen__$1 = (cljs.core.truth_((function (){var and__28936__auto__ = om.next.mappable_ident_QMARK_.call(null,refs,v__$1);
if(cljs.core.truth_(and__28936__auto__)){
return recurse_QMARK_;
} else {
return and__28936__auto__;
}
})())?cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,idents_seen,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key__$1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),v__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-ident","last-ident",534500972),key__$1], null),v__$1):idents_seen);
if(cljs.core._EQ_.call(null,(0),limit)){
var G__45622 = cljs.core.next.call(null,joins__$1);
var G__45623 = ret;
joins__$1 = G__45622;
ret = G__45623;
continue;
} else {
if(graph_loop_QMARK_){
var G__45624 = cljs.core.next.call(null,joins__$1);
var G__45625 = ret;
joins__$1 = G__45624;
ret = G__45625;
continue;
} else {
if((v__$1 == null)){
var G__45626 = cljs.core.next.call(null,joins__$1);
var G__45627 = ret;
joins__$1 = G__45626;
ret = G__45627;
continue;
} else {
var G__45628 = cljs.core.next.call(null,joins__$1);
var G__45629 = cljs.core.assoc.call(null,ret,key__$1,om.next.denormalize_STAR_.call(null,sel__$1,v__$1,refs,map_ident,idents_seen__$1,union_entry,recurse_key__$1));
joins__$1 = G__45628;
ret = G__45629;
continue;

}
}
}
} else {
var temp__6751__auto__ = cljs.core.some.call(null,((function (joins__$1,ret,map__45605,map__45605__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1){
return (function (p__45614){
var vec__45615 = p__45614;
var k = cljs.core.nth.call(null,vec__45615,(0),null);
var identset = cljs.core.nth.call(null,vec__45615,(1),null);
if(cljs.core.contains_QMARK_.call(null,identset,cljs.core.get.call(null,data__$1,k))){
return cljs.core.get_in.call(null,idents_seen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-ident","last-ident",534500972),k], null));
} else {
return null;
}
});})(joins__$1,ret,map__45605,map__45605__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1))
,cljs.core.dissoc.call(null,idents_seen,new cljs.core.Keyword(null,"last-ident","last-ident",534500972)));
if(cljs.core.truth_(temp__6751__auto__)){
var looped_key = temp__6751__auto__;
return looped_key;
} else {
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,data__$1,props__$1),ret);
}
}
break;
}
}

}
}
});
/**
 * Given a query, some data in the default database format, and the entire
 * application state in the default database format, return the tree where all
 * ident links have been replaced with their original node values.
 */
om.next.db__GT_tree = (function om$next$db__GT_tree(var_args){
var args45630 = [];
var len__30169__auto___45633 = arguments.length;
var i__30170__auto___45634 = (0);
while(true){
if((i__30170__auto___45634 < len__30169__auto___45633)){
args45630.push((arguments[i__30170__auto___45634]));

var G__45635 = (i__30170__auto___45634 + (1));
i__30170__auto___45634 = G__45635;
continue;
} else {
}
break;
}

var G__45632 = args45630.length;
switch (G__45632) {
case 3:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45630.length)].join('')));

}
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3 = (function (query,data,refs){
if(cljs.core.map_QMARK_.call(null,refs)){
} else {
throw (new Error("Assert failed: (map? refs)"));
}

return om.next.denormalize_STAR_.call(null,query,data,refs,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4 = (function (query,data,refs,map_ident){
if(cljs.core.map_QMARK_.call(null,refs)){
} else {
throw (new Error("Assert failed: (map? refs)"));
}

return om.next.denormalize_STAR_.call(null,query,data,refs,map_ident,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next.db__GT_tree.cljs$lang$maxFixedArity = 4;

om.next.rewrite = (function om$next$rewrite(rewrite_map,result){
var step = (function om$next$rewrite_$_step(res,p__45660){
var vec__45664 = p__45660;
var k = cljs.core.nth.call(null,vec__45664,(0),null);
var orig_paths = cljs.core.nth.call(null,vec__45664,(1),null);
var to_move = cljs.core.get.call(null,result,k);
var res_SINGLEQUOTE_ = cljs.core.reduce.call(null,((function (to_move,vec__45664,k,orig_paths){
return (function (p1__45637_SHARP_,p2__45638_SHARP_){
return cljs.core.assoc_in.call(null,p1__45637_SHARP_,cljs.core.conj.call(null,p2__45638_SHARP_,k),to_move);
});})(to_move,vec__45664,k,orig_paths))
,res,orig_paths);
return cljs.core.dissoc.call(null,res_SINGLEQUOTE_,k);
});
return cljs.core.reduce.call(null,step,result,rewrite_map);
});
/**
 * When given a join `{:join selector-vector}`, roots found so far, and a `path` prefix:
 *   returns a (possibly empty) sequence of [re-rooted-join prefix] results.
 *   Does NOT support sub-roots. Each re-rooted join will share only
 *   one common parent (their common branching point).
 *   
 */
om.next.move_roots = (function om$next$move_roots(join,result_roots,path){
var query_root_QMARK_ = (function om$next$move_roots_$_query_root_QMARK_(join__$1){
return new cljs.core.Keyword(null,"query-root","query-root",359781888).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,join__$1)) === true;
});
if(cljs.core.truth_(om.util.join_QMARK_.call(null,join))){
if(cljs.core.truth_(query_root_QMARK_.call(null,join))){
return cljs.core.conj.call(null,result_roots,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [join,path], null));
} else {
var joinvalue = om.util.join_value.call(null,join);
if(cljs.core.vector_QMARK_.call(null,joinvalue)){
return cljs.core.mapcat.call(null,((function (joinvalue){
return (function (p1__45667_SHARP_){
return om.next.move_roots.call(null,p1__45667_SHARP_,result_roots,cljs.core.conj.call(null,path,om.util.join_key.call(null,join)));
});})(joinvalue))
,joinvalue);
} else {
return result_roots;
}
}
} else {
return result_roots;
}
});
/**
 * Searches a query for duplicate joins and deep-merges them into a new query.
 */
om.next.merge_joins = (function om$next$merge_joins(query){
var step = (function om$next$merge_joins_$_step(res,expr){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521).cljs$core$IFn$_invoke$arity$1(res),expr)){
return res;
} else {
return cljs.core.update_in.call(null,(cljs.core.truth_((function (){var and__28936__auto__ = om.util.join_QMARK_.call(null,expr);
if(cljs.core.truth_(and__28936__auto__)){
return (!(om.util.union_QMARK_.call(null,expr))) && (!(cljs.core.list_QMARK_.call(null,expr)));
} else {
return and__28936__auto__;
}
})())?(function (){var jk = om.util.join_key.call(null,expr);
var jv = om.util.join_value.call(null,expr);
var q = (function (){var or__28948__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450).cljs$core$IFn$_invoke$arity$1(res),jk);
if(cljs.core.truth_(or__28948__auto__)){
return or__28948__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var nq = ((om.util.recursion_QMARK_.call(null,q))?q:((om.util.recursion_QMARK_.call(null,jv))?jv:om.next.merge_joins.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,q,jv)))
));
return cljs.core.update_in.call(null,res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450)], null),cljs.core.assoc,jk,nq);
})():cljs.core.update_in.call(null,res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-mergeable","not-mergeable",-291093370)], null),cljs.core.conj,expr)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521)], null),cljs.core.conj,expr);
}
});
var init = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"not-mergeable","not-mergeable",-291093370),cljs.core.PersistentVector.EMPTY], null);
var res = cljs.core.reduce.call(null,step,init,query);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.Keyword(null,"not-mergeable","not-mergeable",-291093370).cljs$core$IFn$_invoke$arity$1(res),cljs.core.mapv.call(null,((function (init,res){
return (function (p__45672){
var vec__45673 = p__45672;
var jkey = cljs.core.nth.call(null,vec__45673,(0),null);
var jsel = cljs.core.nth.call(null,vec__45673,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([jkey,jsel]);
});})(init,res))
,new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450).cljs$core$IFn$_invoke$arity$1(res))));
});
om.next.process_roots = (function om$next$process_roots(query){

var retain = (function om$next$process_roots_$_retain(expr){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr,cljs.core.PersistentVector.EMPTY], null)], null);
});
var reroot = (function om$next$process_roots_$_reroot(expr){
var roots = om.next.move_roots.call(null,expr,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
if(cljs.core.empty_QMARK_.call(null,roots)){
return retain.call(null,expr);
} else {
return roots;
}
});
var rewrite_map_step = (function om$next$process_roots_$_rewrite_map_step(rewrites,p__45697){
var vec__45701 = p__45697;
var expr = cljs.core.nth.call(null,vec__45701,(0),null);
var path = cljs.core.nth.call(null,vec__45701,(1),null);
if(cljs.core.empty_QMARK_.call(null,path)){
return rewrites;
} else {
return cljs.core.update_in.call(null,rewrites,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.util.join_key.call(null,expr)], null),cljs.core.conj,path);
}
});
var reroots = cljs.core.mapcat.call(null,reroot,query);
var query__$1 = om.next.merge_joins.call(null,cljs.core.mapv.call(null,cljs.core.first,reroots));
var rewrite_map = cljs.core.reduce.call(null,rewrite_map_step,cljs.core.PersistentArrayMap.EMPTY,reroots);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query__$1,new cljs.core.Keyword(null,"rewrite","rewrite",870487388),cljs.core.partial.call(null,om.next.rewrite,rewrite_map)], null);
});
om.next.merge_idents = (function om$next$merge_idents(tree,config,refs,query){
var map__45721 = config;
var map__45721__$1 = ((((!((map__45721 == null)))?((((map__45721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45721.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45721):map__45721);
var merge_ident = cljs.core.get.call(null,map__45721__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862));
var indexer = cljs.core.get.call(null,map__45721__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315));
var ident_joins = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (map__45721,map__45721__$1,merge_ident,indexer){
return (function (p1__45704_SHARP_){
var and__28936__auto__ = om.util.join_QMARK_.call(null,p1__45704_SHARP_);
if(cljs.core.truth_(and__28936__auto__)){
return om.util.ident_QMARK_.call(null,om.util.join_key.call(null,p1__45704_SHARP_));
} else {
return and__28936__auto__;
}
});})(map__45721,map__45721__$1,merge_ident,indexer))
,query));
var step = ((function (map__45721,map__45721__$1,merge_ident,indexer,ident_joins){
return (function om$next$merge_idents_$_step(tree_SINGLEQUOTE_,p__45730){
var vec__45734 = p__45730;
var ident = cljs.core.nth.call(null,vec__45734,(0),null);
var props = cljs.core.nth.call(null,vec__45734,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))){
var c_or_q = (function (){var or__28948__auto__ = cljs.core.get.call(null,ident_joins,ident);
if(cljs.core.truth_(or__28948__auto__)){
return or__28948__auto__;
} else {
return om.next.ref__GT_any.call(null,indexer,ident);
}
})();
var props_SINGLEQUOTE_ = om.next.tree__GT_db.call(null,c_or_q,props);
var refs__$1 = cljs.core.meta.call(null,props_SINGLEQUOTE_);
return new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config).call(null,merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props_SINGLEQUOTE_),refs__$1);
} else {
return merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props);
}
});})(map__45721,map__45721__$1,merge_ident,indexer,ident_joins))
;
return cljs.core.reduce.call(null,step,tree,refs);
});
om.next.merge_novelty_BANG_ = (function om$next$merge_novelty_BANG_(reconciler,state,res,query){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var vec__45740 = om.next.sift_idents.call(null,res);
var idts = cljs.core.nth.call(null,vec__45740,(0),null);
var res_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__45740,(1),null);
var res_SINGLEQUOTE___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))?om.next.tree__GT_db.call(null,(function (){var or__28948__auto__ = query;
if(cljs.core.truth_(or__28948__auto__)){
return or__28948__auto__;
} else {
return new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)));
}
})(),res_SINGLEQUOTE_,true):res_SINGLEQUOTE_);
return new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config).call(null,om.next.merge_idents.call(null,state,config,idts,query),res_SINGLEQUOTE___$1);
});
om.next.default_merge = (function om$next$default_merge(reconciler,state,res,query){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,res)),new cljs.core.Keyword(null,"next","next",-117701485),om.next.merge_novelty_BANG_.call(null,reconciler,state,res,query),new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.second),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.symbol_QMARK_,cljs.core.first),res)))], null);
});
/**
 * Merge a state delta into the application state. Affected components managed
 * by the reconciler will re-render.
 */
om.next.merge_BANG_ = (function om$next$merge_BANG_(var_args){
var args45743 = [];
var len__30169__auto___45748 = arguments.length;
var i__30170__auto___45749 = (0);
while(true){
if((i__30170__auto___45749 < len__30169__auto___45748)){
args45743.push((arguments[i__30170__auto___45749]));

var G__45750 = (i__30170__auto___45749 + (1));
i__30170__auto___45749 = G__45750;
continue;
} else {
}
break;
}

var G__45745 = args45743.length;
switch (G__45745) {
case 2:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45743.length)].join('')));

}
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,delta){
return om.next.merge_BANG_.call(null,reconciler,delta,null);
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,delta,query){
return om.next.merge_BANG_.call(null,reconciler,delta,query,null);
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,delta,query,remote){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(config);
var merge_STAR_ = new cljs.core.Keyword(null,"merge","merge",-1804319409).cljs$core$IFn$_invoke$arity$1(config);
var map__45746 = merge_STAR_.call(null,reconciler,cljs.core.deref.call(null,state),delta,query);
var map__45746__$1 = ((((!((map__45746 == null)))?((((map__45746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45746.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45746):map__45746);
var keys = cljs.core.get.call(null,map__45746__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var next = cljs.core.get.call(null,map__45746__$1,new cljs.core.Keyword(null,"next","next",-117701485));
var tempids = cljs.core.get.call(null,map__45746__$1,new cljs.core.Keyword(null,"tempids","tempids",1767509089));
if((remote == null)){
om.next.protocols.queue_BANG_.call(null,reconciler,keys);
} else {
}

return cljs.core.reset_BANG_.call(null,state,(function (){var temp__6751__auto__ = new cljs.core.Keyword(null,"migrate","migrate",-207110743).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__6751__auto__)){
var migrate = temp__6751__auto__;
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,next,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null)),migrate.call(null,next,(function (){var or__28948__auto__ = query;
if(cljs.core.truth_(or__28948__auto__)){
return or__28948__auto__;
} else {
return om.next.get_query.call(null,new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler))));
}
})(),tempids,new cljs.core.Keyword(null,"id-key","id-key",-1881730044).cljs$core$IFn$_invoke$arity$1(config)));
} else {
return next;
}
})());
});

om.next.merge_BANG_.cljs$lang$maxFixedArity = 4;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IReconciler}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Reconciler = (function (config,state,__meta,__extmap,__hash){
this.config = config;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29623__auto__,k__29624__auto__){
var self__ = this;
var this__29623__auto____$1 = this;
return this__29623__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__29624__auto__,null);
});


om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29625__auto__,k45757,else__29626__auto__){
var self__ = this;
var this__29625__auto____$1 = this;
var G__45759 = (((k45757 instanceof cljs.core.Keyword))?k45757.fqn:null);
switch (G__45759) {
case "config":
return self__.config;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k45757,else__29626__auto__);

}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$ = cljs.core.PROTOCOL_SENTINEL;


om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$2 = (function (this$,ks){
var self__ = this;
var this$__$1 = this;
return this$__$1.om$next$protocols$IReconciler$queue_BANG_$arity$3(null,ks,null);
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$3 = (function (_,ks,remote){
var self__ = this;
var ___$1 = this;
if(!((remote == null))){
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote-queue","remote-queue",1823260578),remote], null),cljs.core.into,ks);
} else {
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),cljs.core.into,ks);
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_sends_BANG_$arity$2 = (function (_,sends){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765)], null),new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202).cljs$core$IFn$_invoke$arity$1(self__.config),sends);
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$send_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sends = new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
if(cljs.core.empty_QMARK_.call(null,sends)){
return null;
} else {
cljs.core.swap_BANG_.call(null,self__.state,((function (sends,this$__$1){
return (function (state__$1){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),false);
});})(sends,this$__$1))
);

return new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,sends,((function (sends,this$__$1){
return (function() {
var om$next$send_cb = null;
var om$next$send_cb__1 = (function (resp){
return om.next.merge_BANG_.call(null,this$__$1,resp,null);
});
var om$next$send_cb__2 = (function (resp,query){
return om.next.merge_BANG_.call(null,this$__$1,resp,query);
});
var om$next$send_cb__3 = (function (resp,query,remote){
if((remote == null)){
} else {
om.next.protocols.queue_BANG_.call(null,this$__$1,cljs.core.keys.call(null,resp),remote);
}

om.next.merge_BANG_.call(null,this$__$1,resp,query,remote);

return om.next.protocols.reconcile_BANG_.call(null,this$__$1,remote);
});
om$next$send_cb = function(resp,query,remote){
switch(arguments.length){
case 1:
return om$next$send_cb__1.call(this,resp);
case 2:
return om$next$send_cb__2.call(this,resp,query);
case 3:
return om$next$send_cb__3.call(this,resp,query,remote);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$next$send_cb.cljs$core$IFn$_invoke$arity$1 = om$next$send_cb__1;
om$next$send_cb.cljs$core$IFn$_invoke$arity$2 = om$next$send_cb__2;
om$next$send_cb.cljs$core$IFn$_invoke$arity$3 = om$next$send_cb__3;
return om$next$send_cb;
})()
;})(sends,this$__$1))
);
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.om$next$protocols$IReconciler$reconcile_BANG_$arity$2(null,null);
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$2 = (function (this$,remote){
var self__ = this;
var this$__$1 = this;
var st = cljs.core.deref.call(null,self__.state);
var q = ((!((remote == null)))?cljs.core.get_in.call(null,st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote-queue","remote-queue",1823260578),remote], null)):new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(st));
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued","queued",1701634607)], null),cljs.core.not);

if(!((remote == null))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote-queue","remote-queue",1823260578),remote], null),cljs.core.PersistentVector.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,q)){
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(st).call(null);
} else {
var cs = cljs.core.transduce.call(null,cljs.core.map.call(null,((function (st,q,this$__$1){
return (function (p1__45753_SHARP_){
return om.next.protocols.key__GT_components.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),p1__45753_SHARP_);
});})(st,q,this$__$1))
),((function (st,q,this$__$1){
return (function (p1__45754_SHARP_,p2__45755_SHARP_){
return cljs.core.into.call(null,p1__45754_SHARP_,p2__45755_SHARP_);
});})(st,q,this$__$1))
,cljs.core.PersistentHashSet.EMPTY,q);
var map__45760 = self__.config;
var map__45760__$1 = ((((!((map__45760 == null)))?((((map__45760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45760.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45760):map__45760);
var ui__GT_props = cljs.core.get.call(null,map__45760__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102));
var env = om.next.to_env.call(null,self__.config);
var root = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
var seq__45762 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"optimize","optimize",-1912349448).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,cs));
var chunk__45763 = null;
var count__45764 = (0);
var i__45765 = (0);
while(true){
if((i__45765 < count__45764)){
var c = cljs.core._nth.call(null,chunk__45763,i__45765);
var props_change_QMARK__45773 = (this$__$1.om$next$protocols$IReconciler$basis_t$arity$1(null) > om.next.t.call(null,c));
if(om.next.mounted_QMARK_.call(null,c)){
var computed_45774 = om.next.get_computed.call(null,om.next.props.call(null,c));
var next_raw_props_45775 = ui__GT_props.call(null,env,c);
var next_props_45776 = om.next.computed.call(null,next_raw_props_45775,computed_45774);
if((typeof c.componentWillReceiveProps !== 'undefined') && (om.next.iquery_QMARK_.call(null,root)) && (props_change_QMARK__45773)){
var next_props_45777__$1 = (((next_props_45776 == null))?(function (){var temp__6753__auto__ = om.next.props.call(null,c);
if(cljs.core.truth_(temp__6753__auto__)){
var props = temp__6753__auto__;
return props;
} else {
return null;
}
})():next_props_45776);
c.componentWillReceiveProps(({"omcljs$value": om.next.om_props.call(null,next_props_45777__$1,this$__$1.om$next$protocols$IReconciler$basis_t$arity$1(null))}));
} else {
}

if(cljs.core.truth_(om.next.should_update_QMARK_.call(null,c,next_props_45776,om.next.get_state.call(null,c)))){
if(!((next_props_45776 == null))){
om.next.update_component_BANG_.call(null,c,next_props_45776);
} else {
c.forceUpdate();
}

if((om.next.iquery_QMARK_.call(null,root)) && (cljs.core.not_EQ_.call(null,c,root)) && (props_change_QMARK__45773)){
var temp__6753__auto___45778 = om.next.path.call(null,c);
if(cljs.core.truth_(temp__6753__auto___45778)){
var update_path_45779 = temp__6753__auto___45778;
var p_45780 = om.next.parent.call(null,c);
while(true){
if(!((p_45780 == null))){
var update_path_SINGLEQUOTE__45781 = cljs.core.subvec.call(null,update_path_45779,cljs.core.count.call(null,om.next.path.call(null,p_45780)));
om.next.update_props_BANG_.call(null,p_45780,cljs.core.assoc_in.call(null,om.next.props.call(null,p_45780),update_path_SINGLEQUOTE__45781,next_raw_props_45775));

om.next.merge_pending_props_BANG_.call(null,p_45780);

var G__45782 = om.next.parent.call(null,p_45780);
p_45780 = G__45782;
continue;
} else {
}
break;
}
} else {
}
} else {
}
} else {
}
} else {
}

var G__45783 = seq__45762;
var G__45784 = chunk__45763;
var G__45785 = count__45764;
var G__45786 = (i__45765 + (1));
seq__45762 = G__45783;
chunk__45763 = G__45784;
count__45764 = G__45785;
i__45765 = G__45786;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__45762);
if(temp__6753__auto__){
var seq__45762__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45762__$1)){
var c__29859__auto__ = cljs.core.chunk_first.call(null,seq__45762__$1);
var G__45787 = cljs.core.chunk_rest.call(null,seq__45762__$1);
var G__45788 = c__29859__auto__;
var G__45789 = cljs.core.count.call(null,c__29859__auto__);
var G__45790 = (0);
seq__45762 = G__45787;
chunk__45763 = G__45788;
count__45764 = G__45789;
i__45765 = G__45790;
continue;
} else {
var c = cljs.core.first.call(null,seq__45762__$1);
var props_change_QMARK__45791 = (this$__$1.om$next$protocols$IReconciler$basis_t$arity$1(null) > om.next.t.call(null,c));
if(om.next.mounted_QMARK_.call(null,c)){
var computed_45792 = om.next.get_computed.call(null,om.next.props.call(null,c));
var next_raw_props_45793 = ui__GT_props.call(null,env,c);
var next_props_45794 = om.next.computed.call(null,next_raw_props_45793,computed_45792);
if((typeof c.componentWillReceiveProps !== 'undefined') && (om.next.iquery_QMARK_.call(null,root)) && (props_change_QMARK__45791)){
var next_props_45795__$1 = (((next_props_45794 == null))?(function (){var temp__6753__auto____$1 = om.next.props.call(null,c);
if(cljs.core.truth_(temp__6753__auto____$1)){
var props = temp__6753__auto____$1;
return props;
} else {
return null;
}
})():next_props_45794);
c.componentWillReceiveProps(({"omcljs$value": om.next.om_props.call(null,next_props_45795__$1,this$__$1.om$next$protocols$IReconciler$basis_t$arity$1(null))}));
} else {
}

if(cljs.core.truth_(om.next.should_update_QMARK_.call(null,c,next_props_45794,om.next.get_state.call(null,c)))){
if(!((next_props_45794 == null))){
om.next.update_component_BANG_.call(null,c,next_props_45794);
} else {
c.forceUpdate();
}

if((om.next.iquery_QMARK_.call(null,root)) && (cljs.core.not_EQ_.call(null,c,root)) && (props_change_QMARK__45791)){
var temp__6753__auto___45796__$1 = om.next.path.call(null,c);
if(cljs.core.truth_(temp__6753__auto___45796__$1)){
var update_path_45797 = temp__6753__auto___45796__$1;
var p_45798 = om.next.parent.call(null,c);
while(true){
if(!((p_45798 == null))){
var update_path_SINGLEQUOTE__45799 = cljs.core.subvec.call(null,update_path_45797,cljs.core.count.call(null,om.next.path.call(null,p_45798)));
om.next.update_props_BANG_.call(null,p_45798,cljs.core.assoc_in.call(null,om.next.props.call(null,p_45798),update_path_SINGLEQUOTE__45799,next_raw_props_45793));

om.next.merge_pending_props_BANG_.call(null,p_45798);

var G__45800 = om.next.parent.call(null,p_45798);
p_45798 = G__45800;
continue;
} else {
}
break;
}
} else {
}
} else {
}
} else {
}
} else {
}

var G__45801 = cljs.core.next.call(null,seq__45762__$1);
var G__45802 = null;
var G__45803 = (0);
var G__45804 = (0);
seq__45762 = G__45801;
chunk__45763 = G__45802;
count__45764 = G__45803;
i__45765 = G__45804;
continue;
}
} else {
return null;
}
}
break;
}
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_render_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"queued","queued",1701634607).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"queued","queued",1701634607),true);

return true;
} else {
return false;
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_sends_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),true);

return true;
} else {
return false;
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$basis_t$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$add_root_BANG_$arity$4 = (function (this$,root_class,target,options){
var self__ = this;
var this$__$1 = this;
var ret = cljs.core.atom.call(null,null);
var rctor = om.next.factory.call(null,root_class);
var guid = cljs.core.random_uuid.call(null);
if(om.next.iquery_QMARK_.call(null,root_class)){
om.next.protocols.index_root.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),root_class);
} else {
}

if(cljs.core.truth_((function (){var and__28936__auto__ = new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(and__28936__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)));
} else {
return and__28936__auto__;
}
})())){
var new_state_45805 = om.next.tree__GT_db.call(null,root_class,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
var refs_45806 = cljs.core.meta.call(null,new_state_45805);
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.merge.call(null,new_state_45805,refs_45806));

cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"normalized","normalized",-1887621663),true);
} else {
}

var renderf = ((function (ret,rctor,guid,this$__$1){
return (function (data){
var _STAR_reconciler_STAR_45766 = om.next._STAR_reconciler_STAR_;
var _STAR_shared_STAR_45767 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_45768 = om.next._STAR_instrument_STAR_;
om.next._STAR_reconciler_STAR_ = this$__$1;

om.next._STAR_shared_STAR_ = cljs.core.merge.call(null,new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(self__.config),(cljs.core.truth_(new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144).cljs$core$IFn$_invoke$arity$1(self__.config))?new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,data):null));

om.next._STAR_instrument_STAR_ = new cljs.core.Keyword(null,"instrument","instrument",-960698844).cljs$core$IFn$_invoke$arity$1(self__.config);

try{var c = ((!((target == null)))?new cljs.core.Keyword(null,"root-render","root-render",835981146).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,rctor.call(null,data),target):(((cljs.core.deref.call(null,ret) == null))?rctor.call(null,data):(function (){var temp__6753__auto__ = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(temp__6753__auto__)){
var c_SINGLEQUOTE_ = temp__6753__auto__;
if(om.next.mounted_QMARK_.call(null,c_SINGLEQUOTE_)){
return c_SINGLEQUOTE_.forceUpdate(data);
} else {
return null;
}
} else {
return null;
}
})()
));
if(((cljs.core.deref.call(null,ret) == null)) && (!((c == null)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"root","root",-448657453),c);

return cljs.core.reset_BANG_.call(null,ret,c);
} else {
return null;
}
}finally {om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_45768;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_45767;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_45766;
}});})(ret,rctor,guid,this$__$1))
;
var parsef = ((function (renderf,ret,rctor,guid,this$__$1){
return (function (){
var sel = om.next.get_query.call(null,(function (){var or__28948__auto__ = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(or__28948__auto__)){
return or__28948__auto__;
} else {
return root_class;
}
})());
if(((sel == null)) || (cljs.core.vector_QMARK_.call(null,sel))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Application root query must be a vector"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (nil? sel) (vector? sel))")].join('')));
}

if(!((sel == null))){
var env = om.next.to_env.call(null,self__.config);
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env,sel);
if(cljs.core.empty_QMARK_.call(null,v)){
return null;
} else {
return renderf.call(null,v);
}
} else {
return renderf.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
}
});})(renderf,ret,rctor,guid,this$__$1))
;
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"render","render",-1408033454),parsef,new cljs.core.Keyword(null,"root","root",-448657453),root_class,new cljs.core.Keyword(null,"remove","remove",-131428414),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (){
cljs.core.remove_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__28948__auto__ = target;
if(cljs.core.truth_(or__28948__auto__)){
return or__28948__auto__;
} else {
return guid;
}
})());

cljs.core.swap_BANG_.call(null,self__.state,((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (p1__45752_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__45752_SHARP_,new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword(null,"root","root",-448657453)),new cljs.core.Keyword(null,"remove","remove",-131428414));
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

if((target == null)){
return null;
} else {
return new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,target);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
], null));

cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__28948__auto__ = target;
if(cljs.core.truth_(or__28948__auto__)){
return or__28948__auto__;
} else {
return guid;
}
})(),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (_,___$1,___$2,___$3){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519)], null),cljs.core.inc);

if(!(om.next.iquery_QMARK_.call(null,root_class))){
return om.next.queue_render_BANG_.call(null,parsef);
} else {
return om.next.schedule_render_BANG_.call(null,this$__$1);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

parsef.call(null);

var temp__6753__auto___45807 = om.next.get_query.call(null,(function (){var or__28948__auto__ = (function (){var and__28936__auto__ = target;
if(cljs.core.truth_(and__28936__auto__)){
return cljs.core.deref.call(null,ret);
} else {
return and__28936__auto__;
}
})();
if(cljs.core.truth_(or__28948__auto__)){
return or__28948__auto__;
} else {
return root_class;
}
})());
if(cljs.core.truth_(temp__6753__auto___45807)){
var sel_45808 = temp__6753__auto___45807;
var env_45809 = om.next.to_env.call(null,self__.config);
var snds_45810 = om.next.gather_sends.call(null,env_45809,sel_45808,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(self__.config));
if(cljs.core.empty_QMARK_.call(null,snds_45810)){
} else {
var temp__6753__auto___45811__$1 = new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(temp__6753__auto___45811__$1)){
var send_45812 = temp__6753__auto___45811__$1;
send_45812.call(null,snds_45810,((function (send_45812,temp__6753__auto___45811__$1,env_45809,snds_45810,sel_45808,temp__6753__auto___45807,renderf,parsef,ret,rctor,guid,this$__$1){
return (function() {
var om$next$send_cb = null;
var om$next$send_cb__1 = (function (resp){
om.next.merge_BANG_.call(null,this$__$1,resp,null);

return renderf.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env_45809,sel_45808));
});
var om$next$send_cb__2 = (function (resp,query){
om.next.merge_BANG_.call(null,this$__$1,resp,query);

return renderf.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env_45809,sel_45808));
});
var om$next$send_cb__3 = (function (resp,query,remote){
if((remote == null)){
} else {
om.next.protocols.queue_BANG_.call(null,this$__$1,cljs.core.keys.call(null,resp),remote);
}

om.next.merge_BANG_.call(null,this$__$1,resp,query,remote);

return om.next.protocols.reconcile_BANG_.call(null,this$__$1,remote);
});
om$next$send_cb = function(resp,query,remote){
switch(arguments.length){
case 1:
return om$next$send_cb__1.call(this,resp);
case 2:
return om$next$send_cb__2.call(this,resp,query);
case 3:
return om$next$send_cb__3.call(this,resp,query,remote);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$next$send_cb.cljs$core$IFn$_invoke$arity$1 = om$next$send_cb__1;
om$next$send_cb.cljs$core$IFn$_invoke$arity$2 = om$next$send_cb__2;
om$next$send_cb.cljs$core$IFn$_invoke$arity$3 = om$next$send_cb__3;
return om$next$send_cb;
})()
;})(send_45812,temp__6753__auto___45811__$1,env_45809,snds_45810,sel_45808,temp__6753__auto___45807,renderf,parsef,ret,rctor,guid,this$__$1))
);
} else {
}
}
} else {
}

return cljs.core.deref.call(null,ret);
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$reindex_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var root = cljs.core.get.call(null,cljs.core.deref.call(null,self__.state),new cljs.core.Keyword(null,"root","root",-448657453));
if(om.next.iquery_QMARK_.call(null,root)){
var indexer = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config);
var c = cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),root], null)));
return om.next.protocols.index_root.call(null,indexer,(function (){var or__28948__auto__ = c;
if(cljs.core.truth_(or__28948__auto__)){
return or__28948__auto__;
} else {
return root;
}
})());
} else {
return null;
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$remove_root_BANG_$arity$2 = (function (_,target){
var self__ = this;
var ___$1 = this;
var temp__6753__auto__ = new cljs.core.Keyword(null,"remove","remove",-131428414).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
if(cljs.core.truth_(temp__6753__auto__)){
var remove = temp__6753__auto__;
return remove.call(null);
} else {
return null;
}
});


om.next.Reconciler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29637__auto__,writer__29638__auto__,opts__29639__auto__){
var self__ = this;
var this__29637__auto____$1 = this;
var pr_pair__29640__auto__ = ((function (this__29637__auto____$1){
return (function (keyval__29641__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29638__auto__,cljs.core.pr_writer,""," ","",opts__29639__auto__,keyval__29641__auto__);
});})(this__29637__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29638__auto__,pr_pair__29640__auto__,"#om.next.Reconciler{",", ","}",opts__29639__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;


om.next.Reconciler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45756){
var self__ = this;
var G__45756__$1 = this;
return (new cljs.core.RecordIter((0),G__45756__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});


om.next.Reconciler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29621__auto__){
var self__ = this;
var this__29621__auto____$1 = this;
return self__.__meta;
});


om.next.Reconciler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__29617__auto__){
var self__ = this;
var this__29617__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});


om.next.Reconciler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29627__auto__){
var self__ = this;
var this__29627__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29618__auto__){
var self__ = this;
var this__29618__auto____$1 = this;
var h__29390__auto__ = self__.__hash;
if(!((h__29390__auto__ == null))){
return h__29390__auto__;
} else {
var h__29390__auto____$1 = cljs.core.hash_imap.call(null,this__29618__auto____$1);
self__.__hash = h__29390__auto____$1;

return h__29390__auto____$1;
}
});


om.next.Reconciler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__29619__auto__,other__29620__auto__){
var self__ = this;
var this__29619__auto____$1 = this;
if(cljs.core.truth_((function (){var and__28936__auto__ = other__29620__auto__;
if(cljs.core.truth_(and__28936__auto__)){
return ((this__29619__auto____$1.constructor === other__29620__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__29619__auto____$1,other__29620__auto__));
} else {
return and__28936__auto__;
}
})())){
return true;
} else {
return false;
}
});


om.next.Reconciler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29632__auto__,k__29633__auto__){
var self__ = this;
var this__29632__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"state","state",-1988618099),null], null), null),k__29633__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29632__auto____$1),self__.__meta),k__29633__auto__);
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29633__auto__)),null));
}
});


om.next.Reconciler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29630__auto__,k__29631__auto__,G__45756){
var self__ = this;
var this__29630__auto____$1 = this;
var pred__45769 = cljs.core.keyword_identical_QMARK_;
var expr__45770 = k__29631__auto__;
if(cljs.core.truth_(pred__45769.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__45770))){
return (new om.next.Reconciler(G__45756,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__45769.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__45770))){
return (new om.next.Reconciler(self__.config,G__45756,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29631__auto__,G__45756),null));
}
}
});


om.next.Reconciler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29635__auto__){
var self__ = this;
var this__29635__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29622__auto__,G__45756){
var self__ = this;
var this__29622__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,G__45756,self__.__extmap,self__.__hash));
});


om.next.Reconciler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29628__auto__,entry__29629__auto__){
var self__ = this;
var this__29628__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29629__auto__)){
return this__29628__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__29629__auto__,(0)),cljs.core._nth.call(null,entry__29629__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29628__auto____$1,entry__29629__auto__);
}
});


om.next.Reconciler.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config));
});

om.next.Reconciler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
});

om.next.Reconciler.cljs$lang$type = true;

om.next.Reconciler.cljs$lang$ctorPrSeq = (function (this__29659__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Reconciler");
});

om.next.Reconciler.cljs$lang$ctorPrWriter = (function (this__29659__auto__,writer__29660__auto__){
return cljs.core._write.call(null,writer__29660__auto__,"om.next/Reconciler");
});

om.next.__GT_Reconciler = (function om$next$__GT_Reconciler(config,state){
return (new om.next.Reconciler(config,state,null,null,null));
});

om.next.map__GT_Reconciler = (function om$next$map__GT_Reconciler(G__45758){
return (new om.next.Reconciler(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__45758),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__45758),null,cljs.core.dissoc.call(null,G__45758,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099)),null));
});

om.next.default_ui__GT_props = (function om$next$default_ui__GT_props(p__45813,c){
var map__45819 = p__45813;
var map__45819__$1 = ((((!((map__45819 == null)))?((((map__45819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45819.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45819):map__45819);
var env = map__45819__$1;
var parser = cljs.core.get.call(null,map__45819__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var pathopt = cljs.core.get.call(null,map__45819__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149));
var ui = (((function (){var and__28936__auto__ = pathopt;
if(and__28936__auto__){
var and__28936__auto____$1 = ((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$next$Ident$)))?true:false):false);
if(and__28936__auto____$1){
return om.next.iquery_QMARK_.call(null,c);
} else {
return and__28936__auto____$1;
}
} else {
return and__28936__auto__;
}
})())?(function (){var id = om.next.ident.call(null,c,om.next.props.call(null,c));
return cljs.core.get.call(null,parser.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([id,om.next.get_query.call(null,c)])], null)),id);
})():null);
if(!((ui == null))){
return ui;
} else {
var fq = om.next.full_query.call(null,c);
if((fq == null)){
return null;
} else {
var s = cljs.core.system_time.call(null);
var ui__$1 = parser.call(null,env,fq);
var e = cljs.core.system_time.call(null);
var temp__6753__auto___45824 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__6753__auto___45824)){
var l_45825 = temp__6753__auto___45824;
var dt_45826 = (e - s);
var component_name_45827 = c.constructor.displayName;
if(((16) < dt_45826)){
goog.log.warning(l_45825,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_name_45827),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" query took "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dt_45826),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" msecs")].join(''));
} else {
}
} else {
}

return cljs.core.get_in.call(null,ui__$1,om.next.path.call(null,c));
}
}
});
om.next.default_merge_ident = (function om$next$default_merge_ident(_,tree,ref,props){
return cljs.core.update_in.call(null,tree,ref,cljs.core.merge,props);
});
om.next.default_merge_tree = (function om$next$default_merge_tree(a,b){
if(cljs.core.map_QMARK_.call(null,a)){
return cljs.core.merge.call(null,a,b);
} else {
return b;
}
});
/**
 * Given app-state-pure (the application state as an immutable value), a query,
 * tempids (a hash map from tempid to stable id), and an optional id-key
 * keyword, return a new application state value with the tempids replaced by
 * the stable ids.
 */
om.next.default_migrate = (function om$next$default_migrate(var_args){
var args45828 = [];
var len__30169__auto___45875 = arguments.length;
var i__30170__auto___45876 = (0);
while(true){
if((i__30170__auto___45876 < len__30169__auto___45875)){
args45828.push((arguments[i__30170__auto___45876]));

var G__45877 = (i__30170__auto___45876 + (1));
i__30170__auto___45876 = G__45877;
continue;
} else {
}
break;
}

var G__45830 = args45828.length;
switch (G__45830) {
case 3:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45828.length)].join('')));

}
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$3 = (function (app_state_pure,query,tempids){
return om.next.default_migrate.call(null,app_state_pure,query,tempids,null);
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$4 = (function (app_state_pure,query,tempids,id_key){
var dissoc_in = (function om$next$dissoc_in(pure,p__45853){
var vec__45857 = p__45853;
var table = cljs.core.nth.call(null,vec__45857,(0),null);
var id = cljs.core.nth.call(null,vec__45857,(1),null);
return cljs.core.assoc.call(null,pure,table,cljs.core.dissoc.call(null,cljs.core.get.call(null,pure,table),id));
});
var step = (function om$next$step(pure,p__45860){
var vec__45868 = p__45860;
var old = cljs.core.nth.call(null,vec__45868,(0),null);
var vec__45871 = cljs.core.nth.call(null,vec__45868,(1),null);
var _ = cljs.core.nth.call(null,vec__45871,(0),null);
var id = cljs.core.nth.call(null,vec__45871,(1),null);
var new$ = vec__45871;
return cljs.core.assoc_in.call(null,dissoc_in.call(null,pure,old),new$,(function (){var G__45874 = cljs.core.merge.call(null,cljs.core.get_in.call(null,pure,old),cljs.core.get_in.call(null,pure,new$));
if(!((id_key == null))){
return cljs.core.assoc.call(null,G__45874,id_key,id);
} else {
return G__45874;
}
})());
});
if(!(cljs.core.empty_QMARK_.call(null,tempids))){
var pure_SINGLEQUOTE_ = cljs.core.reduce.call(null,step,app_state_pure,tempids);
return om.next.tree__GT_db.call(null,query,om.next.db__GT_tree.call(null,query,pure_SINGLEQUOTE_,pure_SINGLEQUOTE_,((function (pure_SINGLEQUOTE_){
return (function (ident){
return cljs.core.get.call(null,tempids,ident,ident);
});})(pure_SINGLEQUOTE_))
),true);
} else {
return app_state_pure;
}
});

om.next.default_migrate.cljs$lang$maxFixedArity = 4;

om.next.has_error_QMARK_ = (function om$next$has_error_QMARK_(x){
return (cljs.core.map_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,x,new cljs.core.Keyword("om.next","error","om.next/error",-1841983205)));
});
om.next.default_extract_errors = (function om$next$default_extract_errors(reconciler,res,query){
var extract_STAR_ = (function om$next$default_extract_errors_$_extract_STAR_(query__$1,res__$1,errs){
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query__$1));
var top_error_QMARK_ = (((!((class$ == null))) && (om.next.has_error_QMARK_.call(null,res__$1)))?cljs.core.swap_BANG_.call(null,errs,((function (class$){
return (function (p1__45879_SHARP_){
return cljs.core.update_in.call(null,p1__45879_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.ident.call(null,class$,res__$1)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",-1841983205).cljs$core$IFn$_invoke$arity$1(res__$1));
});})(class$))
):null);
var ret = (((top_error_QMARK_ == null))?cljs.core.PersistentArrayMap.EMPTY:null);
if(cljs.core.vector_QMARK_.call(null,query__$1)){
if(cljs.core.vector_QMARK_.call(null,res__$1)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (class$,top_error_QMARK_,ret){
return (function (p1__45880_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_.call(null,query__$1,p1__45880_SHARP_,errs);
});})(class$,top_error_QMARK_,ret))
),res__$1);
} else {
var exprs = cljs.core.seq.call(null,query__$1);
var ret__$1 = ret;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first.call(null,exprs);
var k = (function (){var k = om.next.expr__GT_key.call(null,expr);
var G__45891 = k;
if(om.util.unique_ident_QMARK_.call(null,k)){
return cljs.core.first.call(null,G__45891);
} else {
return G__45891;
}
})();
var data = cljs.core.get.call(null,res__$1,k);
if(om.util.mutation_QMARK_.call(null,expr)){
var mk = om.util.mutation_key.call(null,expr);
var ret_SINGLEQUOTE_ = cljs.core.get.call(null,res__$1,mk);
if(om.next.has_error_QMARK_.call(null,ret_SINGLEQUOTE_)){
var x = new cljs.core.Keyword(null,"mutator","mutator",-1326825366).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,expr));
cljs.core.swap_BANG_.call(null,errs,((function (exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__45881_SHARP_){
return cljs.core.update_in.call(null,p1__45881_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",-1841983205).cljs$core$IFn$_invoke$arity$1(ret_SINGLEQUOTE_));
});})(exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__45892 = cljs.core.next.call(null,exprs);
var G__45893 = ret__$1;
exprs = G__45892;
ret__$1 = G__45893;
continue;
} else {
var G__45894 = cljs.core.next.call(null,exprs);
var G__45895 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,mk,ret_SINGLEQUOTE_));
exprs = G__45894;
ret__$1 = G__45895;
continue;
}
} else {
if(om.util.union_QMARK_.call(null,expr)){
var jk = om.util.join_key.call(null,expr);
var jv = om.util.join_value.call(null,expr);
var class_SINGLEQUOTE_ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,jv));
if(!(cljs.core.vector_QMARK_.call(null,data))){
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_.call(null,cljs.core.get.call(null,jv,cljs.core.first.call(null,om.next.ident.call(null,class_SINGLEQUOTE_,data))),data,errs);
var G__45896 = cljs.core.next.call(null,exprs);
var G__45897 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__45896;
ret__$1 = G__45897;
continue;
} else {
var ret_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__45882_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_.call(null,cljs.core.get.call(null,jv,cljs.core.first.call(null,om.next.ident.call(null,class_SINGLEQUOTE_,p1__45882_SHARP_))),p1__45882_SHARP_,errs);
});})(exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
),data);
var G__45898 = cljs.core.next.call(null,exprs);
var G__45899 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__45898;
ret__$1 = G__45899;
continue;
}
} else {
if(cljs.core.truth_(om.util.join_QMARK_.call(null,expr))){
var jk = om.util.join_key.call(null,expr);
var jv = om.util.join_value.call(null,expr);
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_.call(null,jv,data,errs);
var G__45900 = cljs.core.next.call(null,exprs);
var G__45901 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__45900;
ret__$1 = G__45901;
continue;
} else {
if((cljs.core.map_QMARK_.call(null,data)) && (om.next.has_error_QMARK_.call(null,data))){
cljs.core.swap_BANG_.call(null,errs,((function (exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__45883_SHARP_){
return cljs.core.update_in.call(null,p1__45883_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__28948__auto__ = (((class$ == null))?null:om.next.ident.call(null,class$,res__$1));
if(cljs.core.truth_(or__28948__auto__)){
return or__28948__auto__;
} else {
return k;
}
})()], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",-1841983205).cljs$core$IFn$_invoke$arity$1(data));
});})(exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__45902 = cljs.core.next.call(null,exprs);
var G__45903 = null;
exprs = G__45902;
ret__$1 = G__45903;
continue;
} else {
var G__45904 = cljs.core.next.call(null,exprs);
var G__45905 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,k,data));
exprs = G__45904;
ret__$1 = G__45905;
continue;

}
}
}
}
} else {
return ret__$1;
}
break;
}
}
} else {
return null;
}
});
var errs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ret = extract_STAR_.call(null,query,res,errs);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tree","tree",-196312028),ret,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.deref.call(null,errs)], null);
});
/**
 * Construct a reconciler from a configuration map.
 * 
 * Required parameters:
 *   :state        - the application state. If IAtom value is not supplied the
 *                   data will be normalized into the default database format
 *                   using the root query. This can be disabled by explicitly
 *                   setting the optional :normalize parameter to false.
 *   :parser       - the parser to be used
 * 
 * Optional parameters:
 *   :shared       - a map of global shared properties for the component tree.
 *   :shared-fn    - a function to compute global shared properties from the root props.
 *                   the result is merged with :shared.
 *   :send         - required only if the parser will return a non-empty value when
 *                   run against the supplied :remotes. send is a function of two
 *                   arguments, the map of remote expressions keyed by remote target
 *                   and a callback which should be invoked with the result from each
 *                   remote target. Note this means the callback can be invoked
 *                   multiple times to support parallel fetching and incremental
 *                   loading if desired. The callback should take the response as the
 *                   first argument and the the query that was sent as the second
 *                   argument.
 *   :normalize    - whether the state should be normalized. If true it is assumed
 *                   all novelty introduced into the system will also need
 *                   normalization.
 *   :remotes      - a vector of keywords representing remote services which can
 *                   evaluate query expressions. Defaults to [:remote]
 *   :root-render  - the root render function. Defaults to ReactDOM.render
 *   :root-unmount - the root unmount function. Defaults to
 *                   ReactDOM.unmountComponentAtNode
 *   :logger       - supply a goog.log compatible logger
 *   :tx-listen    - a function of 2 arguments that will listen to transactions.
 *                   The first argument is the parser's env map also containing
 *                   the old and new state. The second argument is a map containing
 *                   the transaction, its result and the remote sends that the
 *                   transaction originated.
 */
om.next.reconciler = (function om$next$reconciler(p__45911){
var map__45915 = p__45911;
var map__45915__$1 = ((((!((map__45915 == null)))?((((map__45915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45915.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45915):map__45915);
var config = map__45915__$1;
var root_render = cljs.core.get.call(null,map__45915__$1,new cljs.core.Keyword(null,"root-render","root-render",835981146),((function (map__45915,map__45915__$1,config){
return (function (p1__45908_SHARP_,p2__45909_SHARP_){
return ReactDOM.render(p1__45908_SHARP_,p2__45909_SHARP_);
});})(map__45915,map__45915__$1,config))
);
var normalize = cljs.core.get.call(null,map__45915__$1,new cljs.core.Keyword(null,"normalize","normalize",-1904390051));
var prune_tree = cljs.core.get.call(null,map__45915__$1,new cljs.core.Keyword(null,"prune-tree","prune-tree",142138431),om.next.default_extract_errors);
var tx_listen = cljs.core.get.call(null,map__45915__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var pathopt = cljs.core.get.call(null,map__45915__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),false);
var instrument = cljs.core.get.call(null,map__45915__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var id_key = cljs.core.get.call(null,map__45915__$1,new cljs.core.Keyword(null,"id-key","id-key",-1881730044));
var merge_sends = cljs.core.get.call(null,map__45915__$1,new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),((function (map__45915,map__45915__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key){
return (function (p1__45906_SHARP_,p2__45907_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__45906_SHARP_,p2__45907_SHARP_);
});})(map__45915,map__45915__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key))
);
var merge_ident = cljs.core.get.call(null,map__45915__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),om.next.default_merge_ident);
var remotes = cljs.core.get.call(null,map__45915__$1,new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576)], null));
var migrate = cljs.core.get.call(null,map__45915__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),om.next.default_migrate);
var easy_reads = cljs.core.get.call(null,map__45915__$1,new cljs.core.Keyword(null,"easy-reads","easy-reads",803667467),true);
var history = cljs.core.get.call(null,map__45915__$1,new cljs.core.Keyword(null,"history","history",-247395220),(100));
var state = cljs.core.get.call(null,map__45915__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var merge = cljs.core.get.call(null,map__45915__$1,new cljs.core.Keyword(null,"merge","merge",-1804319409),om.next.default_merge);
var shared_fn = cljs.core.get.call(null,map__45915__$1,new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144));
var ui__GT_props = cljs.core.get.call(null,map__45915__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),om.next.default_ui__GT_props);
var parser = cljs.core.get.call(null,map__45915__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var indexer = cljs.core.get.call(null,map__45915__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315),om.next.indexer);
var root_unmount = cljs.core.get.call(null,map__45915__$1,new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),((function (map__45915,map__45915__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer){
return (function (p1__45910_SHARP_){
return ReactDOM.unmountComponentAtNode(p1__45910_SHARP_);
});})(map__45915,map__45915__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer))
);
var send = cljs.core.get.call(null,map__45915__$1,new cljs.core.Keyword(null,"send","send",-652151114));
var merge_tree = cljs.core.get.call(null,map__45915__$1,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),om.next.default_merge_tree);
var shared = cljs.core.get.call(null,map__45915__$1,new cljs.core.Keyword(null,"shared","shared",-384145993));
var optimize = cljs.core.get.call(null,map__45915__$1,new cljs.core.Keyword(null,"optimize","optimize",-1912349448),((function (map__45915,map__45915__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared){
return (function (cs){
return cljs.core.sort_by.call(null,om.next.depth,cs);
});})(map__45915,map__45915__$1,config,root_render,normalize,prune_tree,tx_listen,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared))
);
if(cljs.core.map_QMARK_.call(null,config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

var idxr = indexer.call(null);
var norm_QMARK_ = ((!((state == null)))?((((state.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === state.cljs$core$IAtom$)))?true:(((!state.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state));
var state_SINGLEQUOTE_ = ((norm_QMARK_)?state:cljs.core.atom.call(null,state));
var logger = ((cljs.core.contains_QMARK_.call(null,config,new cljs.core.Keyword(null,"logger","logger",-220675947)))?new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config):om.next._STAR_logger_STAR_);
var ret = (new om.next.Reconciler(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"instrument","instrument",-960698844),new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.Keyword(null,"migrate","migrate",-207110743),new cljs.core.Keyword(null,"easy-reads","easy-reads",803667467),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),new cljs.core.Keyword(null,"logger","logger",-220675947),new cljs.core.Keyword(null,"indexer","indexer",-1774914315),new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),new cljs.core.Keyword(null,"send","send",-652151114),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"root-render","root-render",835981146),new cljs.core.Keyword(null,"normalize","normalize",-1904390051),new cljs.core.Keyword(null,"prune-tree","prune-tree",142138431),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367)],[pathopt,id_key,instrument,merge_ident,merge_sends,remotes,migrate,easy_reads,om.next.cache.cache.call(null,history),state_SINGLEQUOTE_,merge,shared_fn,parser,ui__GT_props,logger,idxr,root_unmount,send,shared,merge_tree,optimize,root_render,(function (){var or__28948__auto__ = !(norm_QMARK_);
if(or__28948__auto__){
return or__28948__auto__;
} else {
return normalize;
}
})(),prune_tree,tx_listen]),cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"normalized","normalized",-1887621663),new cljs.core.Keyword(null,"remote-queue","remote-queue",1823260578),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),new cljs.core.Keyword(null,"queued","queued",1701634607),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"target","target",253001721)],[norm_QMARK_,cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,false,null,null,(0),null])),null,null,null));
return ret;
});
/**
 * Returns true if x is a reconciler.
 */
om.next.reconciler_QMARK_ = (function om$next$reconciler_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$next$protocols$IReconciler$))){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * Return the reconciler's application state atom. Useful when the reconciler
 * was initialized via denormalized data.
 */
om.next.app_state = (function om$next$app_state(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return the application's root component.
 */
om.next.app_root = (function om$next$app_root(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)),new cljs.core.Keyword(null,"root","root",-448657453));
});
/**
 * Force a re-render of the root. Not recommended for anything except
 * recomputing :shared.
 */
om.next.force_root_render_BANG_ = (function om$next$force_root_render_BANG_(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)),new cljs.core.Keyword(null,"render","render",-1408033454)).call(null);
});
/**
 * Given a reconciler and UUID return the application state snapshost
 * from history associated with the UUID. The size of the reconciler history
 * may be configured by the :history option when constructing the reconciler.
 */
om.next.from_history = (function om$next$from_history(reconciler,uuid){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler)).get(uuid);
});
/**
 * Return a temporary id.
 */
om.next.tempid = (function om$next$tempid(var_args){
var args45920 = [];
var len__30169__auto___45923 = arguments.length;
var i__30170__auto___45924 = (0);
while(true){
if((i__30170__auto___45924 < len__30169__auto___45923)){
args45920.push((arguments[i__30170__auto___45924]));

var G__45925 = (i__30170__auto___45924 + (1));
i__30170__auto___45924 = G__45925;
continue;
} else {
}
break;
}

var G__45922 = args45920.length;
switch (G__45922) {
case 0:
return om.next.tempid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45920.length)].join('')));

}
});

om.next.tempid.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.tempid.tempid.call(null);
});

om.next.tempid.cljs$core$IFn$_invoke$arity$1 = (function (id){
return om.tempid.tempid.call(null,id);
});

om.next.tempid.cljs$lang$maxFixedArity = 1;

/**
 * Return true if x is a tempid, false otherwise
 */
om.next.tempid_QMARK_ = (function om$next$tempid_QMARK_(x){
return om.tempid.tempid_QMARK_.call(null,x);
});
/**
 * Create a Om Next transit reader. This reader can handler the tempid type.
 * Can pass transit reader customization opts map.
 */
om.next.reader = (function om$next$reader(var_args){
var args45927 = [];
var len__30169__auto___45930 = arguments.length;
var i__30170__auto___45931 = (0);
while(true){
if((i__30170__auto___45931 < len__30169__auto___45930)){
args45927.push((arguments[i__30170__auto___45931]));

var G__45932 = (i__30170__auto___45931 + (1));
i__30170__auto___45931 = G__45932;
continue;
} else {
}
break;
}

var G__45929 = args45927.length;
switch (G__45929) {
case 0:
return om.next.reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45927.length)].join('')));

}
});

om.next.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.reader.call(null);
});

om.next.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.reader.call(null,opts);
});

om.next.reader.cljs$lang$maxFixedArity = 1;

/**
 * Create a Om Next transit writer. This writer can handler the tempid type.
 * Can pass transit writer customization opts map.
 */
om.next.writer = (function om$next$writer(var_args){
var args45934 = [];
var len__30169__auto___45937 = arguments.length;
var i__30170__auto___45938 = (0);
while(true){
if((i__30170__auto___45938 < len__30169__auto___45937)){
args45934.push((arguments[i__30170__auto___45938]));

var G__45939 = (i__30170__auto___45938 + (1));
i__30170__auto___45938 = G__45939;
continue;
} else {
}
break;
}

var G__45936 = args45934.length;
switch (G__45936) {
case 0:
return om.next.writer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45934.length)].join('')));

}
});

om.next.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.writer.call(null);
});

om.next.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.writer.call(null,opts);
});

om.next.writer.cljs$lang$maxFixedArity = 1;

/**
 * Given a query expression return an equivalent query expression that can be
 * spliced into a transaction that will force a read of that key from the
 * specified remote target.
 */
om.next.force = (function om$next$force(var_args){
var args45941 = [];
var len__30169__auto___45944 = arguments.length;
var i__30170__auto___45945 = (0);
while(true){
if((i__30170__auto___45945 < len__30169__auto___45944)){
args45941.push((arguments[i__30170__auto___45945]));

var G__45946 = (i__30170__auto___45945 + (1));
i__30170__auto___45945 = G__45946;
continue;
} else {
}
break;
}

var G__45943 = args45941.length;
switch (G__45943) {
case 1:
return om.next.force.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.force.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45941.length)].join('')));

}
});

om.next.force.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return om.next.force.call(null,expr,new cljs.core.Keyword(null,"remote","remote",-1593576576));
});

om.next.force.cljs$core$IFn$_invoke$arity$2 = (function (expr,target){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,(function (){var x__29882__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29882__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null));
});

om.next.force.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=next.js.map