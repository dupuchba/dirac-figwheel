// Compiled by ClojureScript 1.9.495 {}
goog.provide('om_remote.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('om.next');
goog.require('om.dom');
goog.require('devtools.core');
goog.require('goog.Uri');
goog.require('goog.net.Jsonp');
cljs.core.enable_console_print_BANG_.call(null);
devtools.core.install_BANG_.call(null);
om_remote.core.base_url = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
cljs.core.println.call(null,"test");
om_remote.core.jsonp = (function om_remote$core$jsonp(var_args){
var args45992 = [];
var len__30169__auto___45995 = arguments.length;
var i__30170__auto___45996 = (0);
while(true){
if((i__30170__auto___45996 < len__30169__auto___45995)){
args45992.push((arguments[i__30170__auto___45996]));

var G__45997 = (i__30170__auto___45996 + (1));
i__30170__auto___45996 = G__45997;
continue;
} else {
}
break;
}

var G__45994 = args45992.length;
switch (G__45994) {
case 1:
return om_remote.core.jsonp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om_remote.core.jsonp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45992.length)].join('')));

}
});

om_remote.core.jsonp.cljs$core$IFn$_invoke$arity$1 = (function (uri){
return om_remote.core.jsonp.call(null,cljs.core.async.chan.call(null),uri);
});

om_remote.core.jsonp.cljs$core$IFn$_invoke$arity$2 = (function (c,uri){
debugger;


debugger;


var gjsonp = (new goog.net.Jsonp((new goog.Uri(uri))));
gjsonp.send(null,((function (gjsonp){
return (function (p1__45991_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,p1__45991_SHARP_);
});})(gjsonp))
);

return c;
});

om_remote.core.jsonp.cljs$lang$maxFixedArity = 2;

if(typeof om_remote.core.read !== 'undefined'){
} else {
om_remote.core.read = (function (){var method_table__29979__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29980__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29981__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29982__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29983__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-remote.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29983__auto__,method_table__29979__auto__,prefer_table__29980__auto__,method_cache__29981__auto__,cached_hierarchy__29982__auto__));
})();
}
cljs.core._add_method.call(null,om_remote.core.read,new cljs.core.Keyword("search","results","search/results",107824727),(function (p__45999,key,p__46000){
var map__46001 = p__45999;
var map__46001__$1 = ((((!((map__46001 == null)))?((((map__46001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46001.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46001):map__46001);
var env = map__46001__$1;
var state = cljs.core.get.call(null,map__46001__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__46001__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var map__46002 = p__46000;
var map__46002__$1 = ((((!((map__46002 == null)))?((((map__46002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46002.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46002):map__46002);
var query = cljs.core.get.call(null,map__46002__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
debugger;


return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,state),key,cljs.core.PersistentVector.EMPTY)], null),(((clojure.string.blank_QMARK_.call(null,query)) || ((cljs.core.count.call(null,query) < (3))))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search","search",1564939822),ast], null)));
}));
om_remote.core.result_list = (function om_remote$core$result_list(results){
debugger;


return om.dom.ul.call(null,({"key": "result-lists"}),cljs.core.map.call(null,(function (p1__46005_SHARP_){
return om.dom.li.call(null,null,p1__46005_SHARP_);
}),results));
});
om_remote.core.search_field = (function om_remote$core$search_field(ac,query){
return om.dom.input.call(null,({"key": "search-field", "value": query, "onChange": (function (e){
debugger;


return om.next.set_query_BANG_.call(null,ac,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),e.target.value], null)], null));
})}));
});
/**
 * @constructor
 */
om_remote.core.AutoCompleter = (function om_remote$core$AutoCompleter(){
var this__43740__auto__ = this;
React.Component.apply(this__43740__auto__,arguments);

if(!((this__43740__auto__.initLocalState == null))){
this__43740__auto__.state = this__43740__auto__.initLocalState();
} else {
this__43740__auto__.state = {};
}

return this__43740__auto__;
});

om_remote.core.AutoCompleter.prototype = goog.object.clone(React.Component.prototype);

var x46010_46023 = om_remote.core.AutoCompleter.prototype;
x46010_46023.componentWillUpdate = ((function (x46010_46023){
return (function (next_props__43586__auto__,next_state__43587__auto__){
var this__43585__auto__ = this;
if(((!((this__43585__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__43585__auto__.om$next$Ident$)))?true:false):false)){
var ident__43589__auto___46024 = om.next.ident.call(null,this__43585__auto__,om.next.props.call(null,this__43585__auto__));
var next_ident__43590__auto___46025 = om.next.ident.call(null,this__43585__auto__,om.next._next_props.call(null,next_props__43586__auto__,this__43585__auto__));
if(cljs.core.not_EQ_.call(null,ident__43589__auto___46024,next_ident__43590__auto___46025)){
var idxr__43591__auto___46026 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__43585__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__43591__auto___46026 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__43591__auto___46026),((function (idxr__43591__auto___46026,ident__43589__auto___46024,next_ident__43590__auto___46025,this__43585__auto__,x46010_46023){
return (function (indexes__43592__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__43592__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__43589__auto___46024], null),cljs.core.disj,this__43585__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__43590__auto___46025], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__43585__auto__);
});})(idxr__43591__auto___46026,ident__43589__auto___46024,next_ident__43590__auto___46025,this__43585__auto__,x46010_46023))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__43585__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__43585__auto__);
});})(x46010_46023))
;

x46010_46023.shouldComponentUpdate = ((function (x46010_46023){
return (function (next_props__43586__auto__,next_state__43587__auto__){
var this__43585__auto__ = this;
var next_children__43588__auto__ = next_props__43586__auto__.children;
var next_props__43586__auto____$1 = goog.object.get(next_props__43586__auto__,"omcljs$value");
var next_props__43586__auto____$2 = (function (){var G__46012 = next_props__43586__auto____$1;
if((next_props__43586__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__46012);
} else {
return G__46012;
}
})();
var or__28948__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__43585__auto__),next_props__43586__auto____$2);
if(or__28948__auto__){
return or__28948__auto__;
} else {
var or__28948__auto____$1 = (function (){var and__28936__auto__ = this__43585__auto__.state;
if(cljs.core.truth_(and__28936__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__43585__auto__.state,"omcljs$state"),goog.object.get(next_state__43587__auto__,"omcljs$state"));
} else {
return and__28936__auto__;
}
})();
if(cljs.core.truth_(or__28948__auto____$1)){
return or__28948__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__43585__auto__.props.children,next_children__43588__auto__);
}
}
});})(x46010_46023))
;

x46010_46023.componentWillUnmount = ((function (x46010_46023){
return (function (){
var this__43585__auto__ = this;
var r__43596__auto__ = om.next.get_reconciler.call(null,this__43585__auto__);
var cfg__43597__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__43596__auto__);
var st__43598__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__43597__auto__);
var indexer__43595__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__43597__auto__);
if(cljs.core.truth_((function (){var and__28936__auto__ = !((st__43598__auto__ == null));
if(and__28936__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__43598__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__43585__auto__], null));
} else {
return and__28936__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__43598__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__43585__auto__);
} else {
}

if((indexer__43595__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__43595__auto__,this__43585__auto__);
}
});})(x46010_46023))
;

x46010_46023.componentDidUpdate = ((function (x46010_46023){
return (function (prev_props__43593__auto__,prev_state__43594__auto__){
var this__43585__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__43585__auto__);
});})(x46010_46023))
;

x46010_46023.isMounted = ((function (x46010_46023){
return (function (){
var this__43585__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__43585__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x46010_46023))
;

x46010_46023.componentWillMount = ((function (x46010_46023){
return (function (){
var this__43585__auto__ = this;
var indexer__43595__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__43585__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__43595__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__43595__auto__,this__43585__auto__);
}
});})(x46010_46023))
;

x46010_46023.render = ((function (x46010_46023){
return (function (){
var this__43584__auto__ = this;
var this$ = this__43584__auto__;
var _STAR_reconciler_STAR_46013 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_46014 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_46015 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_46016 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_46017 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__43584__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__43584__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__43584__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__43584__auto__);

om.next._STAR_parent_STAR_ = this__43584__auto__;

try{debugger;


var map__46018 = om.next.props.call(null,this$);
var map__46018__$1 = ((((!((map__46018 == null)))?((((map__46018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46018):map__46018);
var results = cljs.core.get.call(null,map__46018__$1,new cljs.core.Keyword("search","results","search/results",107824727));
return om.dom.div.call(null,null,om.dom.h2.call(null,null,"Autocompleter"),(function (){var G__46020 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_remote.core.search_field.call(null,this$,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(om.next.get_params.call(null,this$)))], null);
if(!(cljs.core.empty_QMARK_.call(null,results))){
return cljs.core.conj.call(null,G__46020,om_remote.core.result_list.call(null,results));
} else {
return G__46020;
}
})());
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_46017;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_46016;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_46015;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_46014;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_46013;
}});})(x46010_46023))
;


om_remote.core.AutoCompleter.prototype.constructor = om_remote.core.AutoCompleter;

om_remote.core.AutoCompleter.prototype.constructor.displayName = "om-remote.core/AutoCompleter";

om_remote.core.AutoCompleter.prototype.om$isComponent = true;

var x46021_46027 = om_remote.core.AutoCompleter;
/** @nocollapse */
x46021_46027.om$next$IQueryParams$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x46021_46027.om$next$IQueryParams$params$arity$1 = ((function (x46021_46027){
return (function (_){
var ___$1 = this;
debugger;


return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),""], null);
});})(x46021_46027))
;

/** @nocollapse */
x46021_46027.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

/** @nocollapse */
x46021_46027.om$next$IQuery$query$arity$1 = ((function (x46021_46027){
return (function (this$){
var this$__$1 = this;
debugger;


return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("search","results","search/results",107824727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?query","?query",891204063,null)], null))], null);
});})(x46021_46027))
;


var x46022_46028 = om_remote.core.AutoCompleter.prototype;

x46022_46028.om$next$IQueryParams$ = cljs.core.PROTOCOL_SENTINEL;


x46022_46028.om$next$IQueryParams$params$arity$1 = ((function (x46022_46028){
return (function (_){
var ___$1 = this;
debugger;


return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),""], null);
});})(x46022_46028))
;


x46022_46028.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;


x46022_46028.om$next$IQuery$query$arity$1 = ((function (x46022_46028){
return (function (this$){
var this$__$1 = this;
debugger;


return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Keyword("search","results","search/results",107824727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Symbol(null,"?query","?query",891204063,null)], null))], null);
});})(x46022_46028))
;


om_remote.core.AutoCompleter.cljs$lang$type = true;

om_remote.core.AutoCompleter.cljs$lang$ctorStr = "om-remote.core/AutoCompleter";

om_remote.core.AutoCompleter.cljs$lang$ctorPrWriter = (function (this__43743__auto__,writer__43744__auto__,opt__43745__auto__){
return cljs.core._write.call(null,writer__43744__auto__,"om-remote.core/AutoCompleter");
});
om_remote.core.search_loop = (function om_remote$core$search_loop(c){
var c__40251__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40251__auto__){
return (function (){
var f__40252__auto__ = (function (){var switch__40137__auto__ = ((function (c__40251__auto__){
return (function (state_46120){
var state_val_46121 = (state_46120[(1)]);
if((state_val_46121 === (1))){
var state_46120__$1 = state_46120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46120__$1,(2),c);
} else {
if((state_val_46121 === (2))){
var inst_46090 = (state_46120[(2)]);
var inst_46091 = cljs.core.nth.call(null,inst_46090,(0),null);
var inst_46092 = cljs.core.nth.call(null,inst_46090,(1),null);
var inst_46093 = inst_46090;
var state_46120__$1 = (function (){var statearr_46122 = state_46120;
(statearr_46122[(7)] = inst_46093);

(statearr_46122[(8)] = inst_46092);

(statearr_46122[(9)] = inst_46091);

return statearr_46122;
})();
var statearr_46123_46135 = state_46120__$1;
(statearr_46123_46135[(2)] = null);

(statearr_46123_46135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46121 === (3))){
var inst_46093 = (state_46120[(7)]);
var inst_46098 = cljs.core.nth.call(null,inst_46093,(0),null);
var inst_46099 = cljs.core.nth.call(null,inst_46093,(1),null);
var inst_46100 = debugger;
var inst_46104 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(om_remote.core.base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46098)].join('');
var inst_46105 = om_remote.core.jsonp.call(null,inst_46104);
var state_46120__$1 = (function (){var statearr_46124 = state_46120;
(statearr_46124[(10)] = inst_46100);

(statearr_46124[(11)] = inst_46099);

return statearr_46124;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46120__$1,(5),inst_46105);
} else {
if((state_val_46121 === (4))){
var inst_46118 = (state_46120[(2)]);
var state_46120__$1 = state_46120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46120__$1,inst_46118);
} else {
if((state_val_46121 === (5))){
var inst_46099 = (state_46120[(11)]);
var inst_46107 = (state_46120[(2)]);
var inst_46108 = cljs.core.nth.call(null,inst_46107,(0),null);
var inst_46109 = cljs.core.nth.call(null,inst_46107,(1),null);
var inst_46110 = [new cljs.core.Keyword("search","results","search/results",107824727)];
var inst_46111 = [inst_46109];
var inst_46112 = cljs.core.PersistentHashMap.fromArrays(inst_46110,inst_46111);
var inst_46113 = inst_46099.call(null,inst_46112);
var state_46120__$1 = (function (){var statearr_46125 = state_46120;
(statearr_46125[(12)] = inst_46113);

(statearr_46125[(13)] = inst_46108);

return statearr_46125;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46120__$1,(6),c);
} else {
if((state_val_46121 === (6))){
var inst_46115 = (state_46120[(2)]);
var inst_46093 = inst_46115;
var state_46120__$1 = (function (){var statearr_46126 = state_46120;
(statearr_46126[(7)] = inst_46093);

return statearr_46126;
})();
var statearr_46127_46136 = state_46120__$1;
(statearr_46127_46136[(2)] = null);

(statearr_46127_46136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__40251__auto__))
;
return ((function (switch__40137__auto__,c__40251__auto__){
return (function() {
var om_remote$core$search_loop_$_state_machine__40138__auto__ = null;
var om_remote$core$search_loop_$_state_machine__40138__auto____0 = (function (){
var statearr_46131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46131[(0)] = om_remote$core$search_loop_$_state_machine__40138__auto__);

(statearr_46131[(1)] = (1));

return statearr_46131;
});
var om_remote$core$search_loop_$_state_machine__40138__auto____1 = (function (state_46120){
while(true){
var ret_value__40139__auto__ = (function (){try{while(true){
var result__40140__auto__ = switch__40137__auto__.call(null,state_46120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40140__auto__;
}
break;
}
}catch (e46132){if((e46132 instanceof Object)){
var ex__40141__auto__ = e46132;
var statearr_46133_46137 = state_46120;
(statearr_46133_46137[(5)] = ex__40141__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46138 = state_46120;
state_46120 = G__46138;
continue;
} else {
return ret_value__40139__auto__;
}
break;
}
});
om_remote$core$search_loop_$_state_machine__40138__auto__ = function(state_46120){
switch(arguments.length){
case 0:
return om_remote$core$search_loop_$_state_machine__40138__auto____0.call(this);
case 1:
return om_remote$core$search_loop_$_state_machine__40138__auto____1.call(this,state_46120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_remote$core$search_loop_$_state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$0 = om_remote$core$search_loop_$_state_machine__40138__auto____0;
om_remote$core$search_loop_$_state_machine__40138__auto__.cljs$core$IFn$_invoke$arity$1 = om_remote$core$search_loop_$_state_machine__40138__auto____1;
return om_remote$core$search_loop_$_state_machine__40138__auto__;
})()
;})(switch__40137__auto__,c__40251__auto__))
})();
var state__40253__auto__ = (function (){var statearr_46134 = f__40252__auto__.call(null);
(statearr_46134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40251__auto__);

return statearr_46134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40253__auto__);
});})(c__40251__auto__))
);

return c__40251__auto__;
});
om_remote.core.send_to_chan = (function om_remote$core$send_to_chan(c){
return (function (p__46147,cb){
var map__46148 = p__46147;
var map__46148__$1 = ((((!((map__46148 == null)))?((((map__46148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46148.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46148):map__46148);
var search = cljs.core.get.call(null,map__46148__$1,new cljs.core.Keyword(null,"search","search",1564939822));
debugger;


if(cljs.core.truth_(search)){
var map__46150 = om.next.query__GT_ast.call(null,search);
var map__46150__$1 = ((((!((map__46150 == null)))?((((map__46150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46150.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46150):map__46150);
var vec__46151 = cljs.core.get.call(null,map__46150__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var search__$1 = cljs.core.nth.call(null,vec__46151,(0),null);
var query = cljs.core.get_in.call(null,search__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query,cb], null));
} else {
return null;
}
});
});
om_remote.core.send_chan = cljs.core.async.chan.call(null);
om_remote.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("search","results","search/results",107824727),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),om_remote.core.read], null)),new cljs.core.Keyword(null,"send","send",-652151114),om_remote.core.send_to_chan.call(null,om_remote.core.send_chan),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822)], null)], null));
om_remote.core.search_loop.call(null,om_remote.core.send_chan);
om.next.add_root_BANG_.call(null,om_remote.core.reconciler,om_remote.core.AutoCompleter,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map