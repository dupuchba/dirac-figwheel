// Compiled by ClojureScript 1.9.495 {}
goog.provide('dirac.runtime.preload');
goog.require('cljs.core');
goog.require('dirac.runtime');
dirac.runtime.preload.config = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nrepl-config","nrepl-config",-1085169863),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reveal-url-script-path","reveal-url-script-path",-1346046631),"scripts/reveal.sh"], null)], null);
dirac.runtime.set_prefs_BANG_.call(null,cljs.core.merge.call(null,dirac.runtime.get_prefs.call(null),dirac.runtime.preload.config));
if(cljs.core.not.call(null,dirac.runtime.get_pref.call(null,new cljs.core.Keyword(null,"suppress-preload-install","suppress-preload-install",1724845090)))){
dirac.runtime.install_BANG_.call(null);
} else {
}

//# sourceMappingURL=preload.js.map