// Compiled by ClojureScript 0.0-2371
goog.provide('main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clojure.data');
goog.require('clojure.data');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
main.game_state = (function (){var G__27063 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$63,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$69,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$72,cljs.core.constant$keyword$70,cljs.core.constant$keyword$73,cljs.core.constant$keyword$71,cljs.core.constant$keyword$74,cljs.core.constant$keyword$75], null),cljs.core.PersistentHashSet.EMPTY], null),cljs.core.constant$keyword$70,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$76,cljs.core.constant$keyword$69], null),cljs.core.PersistentHashSet.EMPTY], null),cljs.core.constant$keyword$71,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$76,cljs.core.constant$keyword$69], null),cljs.core.PersistentHashSet.EMPTY], null)], null),cljs.core.constant$keyword$67,cljs.core.constant$keyword$69,cljs.core.constant$keyword$80,null,cljs.core.constant$keyword$79,null,cljs.core.constant$keyword$68,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Welcome!","Perform actions..."], null)], null);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__27063) : cljs.core.atom.call(null,G__27063));
})();
main.flavortext = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$69,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["You are in a strange room.","You can go left through the hallway or right down some stairs."], null)], null);
main.room = (function room(opt_map,items){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opt_map,items], null);
});
main.get_room = (function get_room(r){var G__27066 = cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1((function (){var G__27067 = main.game_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27067) : cljs.core.deref.call(null,G__27067));
})());return (r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(G__27066) : r.call(null,G__27066));
});
main.get_dest = (function get_dest(r,opt){var G__27069 = cljs.core.first(main.get_room(r));return (opt.cljs$core$IFn$_invoke$arity$1 ? opt.cljs$core$IFn$_invoke$arity$1(G__27069) : opt.call(null,G__27069));
});
main.get_opt_map = (function get_opt_map(r){return cljs.core.first(main.get_room(r));
});
main.get_options = (function get_options(r){return cljs.core.keys(main.get_opt_map(r));
});
main.get_items = (function get_items(r){return cljs.core.last(main.get_room(r));
});
main.get_curr_room = (function get_curr_room(){return cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1((function (){var G__27071 = main.game_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27071) : cljs.core.deref.call(null,G__27071));
})());
});
main.text_from_opt = (function text_from_opt(opt){var G__27073 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);switch (G__27073) {
case "south":
return "South";

break;
case "right":
return "Right";

break;
case "left":
return "Left";

break;
default:
return opt;

}
});
main.commaify_list = (function commaify_list(joiner,lst){var G__27076 = cljs.core.count(lst);switch (G__27076) {
case (0):
return "nowhere";

break;
case (1):
return cljs.core.last(lst);

break;
case (2):
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(joiner,cljs.core.take_last((2),lst)));

break;
default:
var ending = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose((","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(joiner)),cljs.core.take_last((2),lst)));var beginning = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(", ",cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(lst) - (2)),lst)));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(beginning)+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ending));

}
});
main.simple_opt_text = (function simple_opt_text(r){return ("You can go "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(main.commaify_list(" or ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(main.text_from_opt,main.get_options(r))))+".");
});
main.get_description_text = (function get_description_text(r){if(((function (){var G__27080 = r;return (main.flavortext.cljs$core$IFn$_invoke$arity$1 ? main.flavortext.cljs$core$IFn$_invoke$arity$1(G__27080) : main.flavortext.call(null,G__27080));
})() == null))
{return cljs.core.first((function (){var G__27081 = r;return (main.flavortext.cljs$core$IFn$_invoke$arity$1 ? main.flavortext.cljs$core$IFn$_invoke$arity$1(G__27081) : main.flavortext.call(null,G__27081));
})());
} else
{return "There is nothing interesting in this area.";
}
});
main.get_opt_text = (function get_opt_text(r){if(((function (){var G__27084 = r;return (main.flavortext.cljs$core$IFn$_invoke$arity$1 ? main.flavortext.cljs$core$IFn$_invoke$arity$1(G__27084) : main.flavortext.call(null,G__27084));
})() == null))
{return cljs.core.last((function (){var G__27085 = r;return (main.flavortext.cljs$core$IFn$_invoke$arity$1 ? main.flavortext.cljs$core$IFn$_invoke$arity$1(G__27085) : main.flavortext.call(null,G__27085));
})());
} else
{return main.simple_opt_text(r);
}
});
main.player = (function player(){return cljs.core.PersistentHashSet.EMPTY;
});
main.tokenize = (function tokenize(input){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(input),/\s/));
});
main.parse_action = (function parse_action(tokens){var G__27091 = tokens;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,G__27091))
{return cljs.core.List.EMPTY;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__27091))
{return cljs.core.List.EMPTY;
} else
{var G__27092 = (((cljs.core.first(tokens) instanceof cljs.core.Keyword))?cljs.core.first(tokens).fqn:null);switch (G__27092) {
case "right":
return cljs.core.cons(cljs.core.list(cljs.core.constant$keyword$77,cljs.core.constant$keyword$73),parse_action(cljs.core.rest(tokens)));

break;
case "left":
return cljs.core.cons(cljs.core.list(cljs.core.constant$keyword$77,cljs.core.constant$keyword$72),parse_action(cljs.core.rest(tokens)));

break;
default:
return parse_action(cljs.core.rest(tokens));

}

}
}
});
main.enter_room = (function enter_room(r,p){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__27096 = main.game_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27096) : cljs.core.deref.call(null,G__27096));
})(),cljs.core.constant$keyword$63,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__27097 = main.game_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27097) : cljs.core.deref.call(null,G__27097));
})().call(null,cljs.core.constant$keyword$63),r,main.room(main.get_opt_map(r),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p,main.get_items(r)))));
});
main.update_console = (function update_console(new_text){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__27099 = main.game_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27099) : cljs.core.deref.call(null,G__27099));
})(),cljs.core.constant$keyword$68,new_text);
});
main.window_load = (function window_load(){return console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(main.parse_action(main.tokenize("go left")))));
});
window.onload = main.window_load;
cljs.core.enable_console_print_BANG_();
main.handle_enter = (function handle_enter(owner){console.log(("SUBMIT: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__27101 = main.game_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__27101) : cljs.core.deref.call(null,G__27101));
})().call(null,cljs.core.constant$keyword$79))))));
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$78,"");
});
main.handle_change = (function handle_change(e,owner,p__27102){var map__27104 = p__27102;var map__27104__$1 = ((cljs.core.seq_QMARK_(map__27104))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27104):map__27104);var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27104__$1,cljs.core.constant$keyword$78);var des_act = main.parse_action(main.tokenize(e.target.value));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.game_state,cljs.core.assoc,cljs.core.constant$keyword$80,e.target.value);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.game_state,cljs.core.assoc,cljs.core.constant$keyword$79,des_act);
});
om.core.root((function (app,owner){if(typeof main.t27107 !== 'undefined')
{} else
{
/**
* @constructor
*/
main.t27107 = (function (owner,app,meta27108){
this.owner = owner;
this.app = app;
this.meta27108 = meta27108;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
main.t27107.cljs$lang$type = true;
main.t27107.cljs$lang$ctorStr = "main/t27107";
main.t27107.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"main/t27107");
});
main.t27107.prototype.om$core$IRenderState$ = true;
main.t27107.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;var G__27110 = null;var G__27111 = (function (){var G__27114 = null;var G__27115 = cljs.core.first(cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(self__.app));return React.DOM.p(G__27114,G__27115);
})();var G__27112 = (function (){var G__27116 = null;var G__27117 = cljs.core.last(cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(self__.app));return React.DOM.p(G__27116,G__27117);
})();var G__27113 = (function (){var G__27118 = {"onChange": ((function (G__27110,G__27111,G__27112,this$__$1){
return (function (p1__27106_SHARP_){return main.handle_change(p1__27106_SHARP_,self__.owner,state);
});})(G__27110,G__27111,G__27112,this$__$1))
, "onKeyDown": ((function (G__27110,G__27111,G__27112,this$__$1){
return (function (p1__27105_SHARP_){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__27105_SHARP_.key,"Enter"))
{return main.handle_enter(self__.owner);
} else
{return null;
}
});})(G__27110,G__27111,G__27112,this$__$1))
, "value": cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(state), "ref": "new-contact", "className": "action-field", "autoFocus": true, "placeholder": "What shall you do?", "type": "text"};return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__27118) : om.dom.input.call(null,G__27118));
})();return React.DOM.div(G__27110,G__27111,G__27112,G__27113);
});
main.t27107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27109){var self__ = this;
var _27109__$1 = this;return self__.meta27108;
});
main.t27107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27109,meta27108__$1){var self__ = this;
var _27109__$1 = this;return (new main.t27107(self__.owner,self__.app,meta27108__$1));
});
main.__GT_t27107 = (function __GT_t27107(owner__$1,app__$1,meta27108){return (new main.t27107(owner__$1,app__$1,meta27108));
});
}
return (new main.t27107(owner,app,null));
}),main.game_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$62,document.getElementById("interface")], null));
