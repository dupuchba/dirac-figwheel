// Compiled by ClojureScript 1.9.495 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__47706){
var map__47731 = p__47706;
var map__47731__$1 = ((((!((map__47731 == null)))?((((map__47731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47731.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47731):map__47731);
var m = map__47731__$1;
var n = cljs.core.get.call(null,map__47731__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__47731__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6753__auto__)){
var ns = temp__6753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__47733_47755 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47734_47756 = null;
var count__47735_47757 = (0);
var i__47736_47758 = (0);
while(true){
if((i__47736_47758 < count__47735_47757)){
var f_47759 = cljs.core._nth.call(null,chunk__47734_47756,i__47736_47758);
cljs.core.println.call(null,"  ",f_47759);

var G__47760 = seq__47733_47755;
var G__47761 = chunk__47734_47756;
var G__47762 = count__47735_47757;
var G__47763 = (i__47736_47758 + (1));
seq__47733_47755 = G__47760;
chunk__47734_47756 = G__47761;
count__47735_47757 = G__47762;
i__47736_47758 = G__47763;
continue;
} else {
var temp__6753__auto___47764 = cljs.core.seq.call(null,seq__47733_47755);
if(temp__6753__auto___47764){
var seq__47733_47765__$1 = temp__6753__auto___47764;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47733_47765__$1)){
var c__29859__auto___47766 = cljs.core.chunk_first.call(null,seq__47733_47765__$1);
var G__47767 = cljs.core.chunk_rest.call(null,seq__47733_47765__$1);
var G__47768 = c__29859__auto___47766;
var G__47769 = cljs.core.count.call(null,c__29859__auto___47766);
var G__47770 = (0);
seq__47733_47755 = G__47767;
chunk__47734_47756 = G__47768;
count__47735_47757 = G__47769;
i__47736_47758 = G__47770;
continue;
} else {
var f_47771 = cljs.core.first.call(null,seq__47733_47765__$1);
cljs.core.println.call(null,"  ",f_47771);

var G__47772 = cljs.core.next.call(null,seq__47733_47765__$1);
var G__47773 = null;
var G__47774 = (0);
var G__47775 = (0);
seq__47733_47755 = G__47772;
chunk__47734_47756 = G__47773;
count__47735_47757 = G__47774;
i__47736_47758 = G__47775;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_47776 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28948__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28948__auto__)){
return or__28948__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_47776);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_47776)))?cljs.core.second.call(null,arglists_47776):arglists_47776));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__47737_47777 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47738_47778 = null;
var count__47739_47779 = (0);
var i__47740_47780 = (0);
while(true){
if((i__47740_47780 < count__47739_47779)){
var vec__47741_47781 = cljs.core._nth.call(null,chunk__47738_47778,i__47740_47780);
var name_47782 = cljs.core.nth.call(null,vec__47741_47781,(0),null);
var map__47744_47783 = cljs.core.nth.call(null,vec__47741_47781,(1),null);
var map__47744_47784__$1 = ((((!((map__47744_47783 == null)))?((((map__47744_47783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47744_47783.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47744_47783):map__47744_47783);
var doc_47785 = cljs.core.get.call(null,map__47744_47784__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47786 = cljs.core.get.call(null,map__47744_47784__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47782);

cljs.core.println.call(null," ",arglists_47786);

if(cljs.core.truth_(doc_47785)){
cljs.core.println.call(null," ",doc_47785);
} else {
}

var G__47787 = seq__47737_47777;
var G__47788 = chunk__47738_47778;
var G__47789 = count__47739_47779;
var G__47790 = (i__47740_47780 + (1));
seq__47737_47777 = G__47787;
chunk__47738_47778 = G__47788;
count__47739_47779 = G__47789;
i__47740_47780 = G__47790;
continue;
} else {
var temp__6753__auto___47791 = cljs.core.seq.call(null,seq__47737_47777);
if(temp__6753__auto___47791){
var seq__47737_47792__$1 = temp__6753__auto___47791;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47737_47792__$1)){
var c__29859__auto___47793 = cljs.core.chunk_first.call(null,seq__47737_47792__$1);
var G__47794 = cljs.core.chunk_rest.call(null,seq__47737_47792__$1);
var G__47795 = c__29859__auto___47793;
var G__47796 = cljs.core.count.call(null,c__29859__auto___47793);
var G__47797 = (0);
seq__47737_47777 = G__47794;
chunk__47738_47778 = G__47795;
count__47739_47779 = G__47796;
i__47740_47780 = G__47797;
continue;
} else {
var vec__47746_47798 = cljs.core.first.call(null,seq__47737_47792__$1);
var name_47799 = cljs.core.nth.call(null,vec__47746_47798,(0),null);
var map__47749_47800 = cljs.core.nth.call(null,vec__47746_47798,(1),null);
var map__47749_47801__$1 = ((((!((map__47749_47800 == null)))?((((map__47749_47800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47749_47800.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47749_47800):map__47749_47800);
var doc_47802 = cljs.core.get.call(null,map__47749_47801__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47803 = cljs.core.get.call(null,map__47749_47801__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47799);

cljs.core.println.call(null," ",arglists_47803);

if(cljs.core.truth_(doc_47802)){
cljs.core.println.call(null," ",doc_47802);
} else {
}

var G__47804 = cljs.core.next.call(null,seq__47737_47792__$1);
var G__47805 = null;
var G__47806 = (0);
var G__47807 = (0);
seq__47737_47777 = G__47804;
chunk__47738_47778 = G__47805;
count__47739_47779 = G__47806;
i__47740_47780 = G__47807;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6753__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6753__auto__)){
var fnspec = temp__6753__auto__;
cljs.core.print.call(null,"Spec");

var seq__47751 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__47752 = null;
var count__47753 = (0);
var i__47754 = (0);
while(true){
if((i__47754 < count__47753)){
var role = cljs.core._nth.call(null,chunk__47752,i__47754);
var temp__6753__auto___47808__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___47808__$1)){
var spec_47809 = temp__6753__auto___47808__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_47809));
} else {
}

var G__47810 = seq__47751;
var G__47811 = chunk__47752;
var G__47812 = count__47753;
var G__47813 = (i__47754 + (1));
seq__47751 = G__47810;
chunk__47752 = G__47811;
count__47753 = G__47812;
i__47754 = G__47813;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__47751);
if(temp__6753__auto____$1){
var seq__47751__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47751__$1)){
var c__29859__auto__ = cljs.core.chunk_first.call(null,seq__47751__$1);
var G__47814 = cljs.core.chunk_rest.call(null,seq__47751__$1);
var G__47815 = c__29859__auto__;
var G__47816 = cljs.core.count.call(null,c__29859__auto__);
var G__47817 = (0);
seq__47751 = G__47814;
chunk__47752 = G__47815;
count__47753 = G__47816;
i__47754 = G__47817;
continue;
} else {
var role = cljs.core.first.call(null,seq__47751__$1);
var temp__6753__auto___47818__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___47818__$2)){
var spec_47819 = temp__6753__auto___47818__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_47819));
} else {
}

var G__47820 = cljs.core.next.call(null,seq__47751__$1);
var G__47821 = null;
var G__47822 = (0);
var G__47823 = (0);
seq__47751 = G__47820;
chunk__47752 = G__47821;
count__47753 = G__47822;
i__47754 = G__47823;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map