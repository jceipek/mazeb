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
main.game_state = (function (){var G__48929 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$63,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$69,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$72,cljs.core.constant$keyword$70,cljs.core.constant$keyword$73,cljs.core.constant$keyword$71,cljs.core.constant$keyword$74,cljs.core.constant$keyword$97], null),cljs.core.PersistentHashSet.EMPTY], null),cljs.core.constant$keyword$70,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$76,cljs.core.constant$keyword$69], null),cljs.core.PersistentHashSet.EMPTY], null),cljs.core.constant$keyword$71,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$76,cljs.core.constant$keyword$69], null),cljs.core.PersistentHashSet.EMPTY], null),cljs.core.constant$keyword$97,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$95,cljs.core.constant$keyword$69], null),cljs.core.PersistentHashSet.EMPTY], null)], null),cljs.core.constant$keyword$67,cljs.core.constant$keyword$69,cljs.core.constant$keyword$80,null,cljs.core.constant$keyword$83,null,cljs.core.constant$keyword$68,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Welcome!","Perform actions..."], null)], null);return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__48929) : cljs.core.atom.call(null,G__48929));
})();
main.flavortext = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$69,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["You are in a strange room.","You can go Left through the hallway, Right down some stairs, or Up through a trapdoor."], null),cljs.core.constant$keyword$97,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["You find yourself in the attic, a musty, cramped space full of cobwebs and layers of grime.","You can go back Down into the strange room."], null)], null);
main.room = (function room(opt_map,items){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opt_map,items], null);
});
main.get_room = (function get_room(r){var G__48932 = cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1((function (){var G__48933 = main.game_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48933) : cljs.core.deref.call(null,G__48933));
})());return (r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(G__48932) : r.call(null,G__48932));
});
main.get_dest = (function get_dest(r,opt){var G__48935 = cljs.core.first(main.get_room(r));return (opt.cljs$core$IFn$_invoke$arity$1 ? opt.cljs$core$IFn$_invoke$arity$1(G__48935) : opt.call(null,G__48935));
});
main.get_opt_map = (function get_opt_map(r){return cljs.core.first(main.get_room(r));
});
main.get_direction_options = (function get_direction_options(r){return cljs.core.keys(main.get_opt_map(r));
});
main.get_items = (function get_items(r){return cljs.core.last(main.get_room(r));
});
main.get_curr_room = (function get_curr_room(){return cljs.core.constant$keyword$67.cljs$core$IFn$_invoke$arity$1((function (){var G__48937 = main.game_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48937) : cljs.core.deref.call(null,G__48937));
})());
});
main.expand_map = (function expand_map(target_map){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (tuple){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (opt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opt,cljs.core.last(tuple)], null);
}),cljs.core.first(tuple));
}),target_map)));
});
main.all_directions = main.expand_map(new cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$85,null,cljs.core.constant$keyword$72,null], null), null),cljs.core.constant$keyword$72,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$86,null,cljs.core.constant$keyword$73,null], null), null),cljs.core.constant$keyword$73,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$74,null,cljs.core.constant$keyword$94,null], null), null),cljs.core.constant$keyword$74,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$95,null,cljs.core.constant$keyword$96,null], null), null),cljs.core.constant$keyword$95,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$87,null,cljs.core.constant$keyword$88,null], null), null),cljs.core.constant$keyword$88,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$76,null,cljs.core.constant$keyword$89,null], null), null),cljs.core.constant$keyword$76,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$90,null,cljs.core.constant$keyword$91,null], null), null),cljs.core.constant$keyword$90,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$92,null,cljs.core.constant$keyword$93,null], null), null),cljs.core.constant$keyword$92], true, false));
main.text_from_opt = (function text_from_opt(opt){if(!(((function (){var G__48939 = main.all_directions;return (opt.cljs$core$IFn$_invoke$arity$1 ? opt.cljs$core$IFn$_invoke$arity$1(G__48939) : opt.call(null,G__48939));
})() == null)))
{return clojure.string.capitalize(cljs.core.name(opt));
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(opt));
}
});
main.commaify_list = (function commaify_list(joiner,lst){var G__48941 = cljs.core.count(lst);switch (G__48941) {
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
main.commaify_template_list = (function commaify_template_list(joiner,nl,lst){var G__48944 = cljs.core.count(lst);switch (G__48944) {
case (0):
return cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nl,cljs.core.constant$keyword$101], null));

break;
case (1):
return cljs.core._conj(cljs.core.List.EMPTY,cljs.core.last(lst));

break;
case (2):
return cljs.core.interpose(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [joiner,cljs.core.constant$keyword$102], null),cljs.core.take_last((2),lst));

break;
default:
var ending = cljs.core.interpose(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(joiner)),cljs.core.constant$keyword$102], null),cljs.core.take_last((2),lst));var beginning = cljs.core.interpose(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [", ",cljs.core.constant$keyword$102], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(lst) - (2)),lst));return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(beginning,cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [", ",cljs.core.constant$keyword$102], null)),cljs.core.array_seq([ending], 0));

}
});
main.simple_opt_text = (function simple_opt_text(r){return ("You can go "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(main.commaify_list(" or ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(main.text_from_opt,main.get_direction_options(r))))+".");
});
main.get_description_text = (function get_description_text(r){if(!(((function (){var G__48948 = r;return (main.flavortext.cljs$core$IFn$_invoke$arity$1 ? main.flavortext.cljs$core$IFn$_invoke$arity$1(G__48948) : main.flavortext.call(null,G__48948));
})() == null)))
{return cljs.core.first((function (){var G__48949 = r;return (main.flavortext.cljs$core$IFn$_invoke$arity$1 ? main.flavortext.cljs$core$IFn$_invoke$arity$1(G__48949) : main.flavortext.call(null,G__48949));
})());
} else
{return "There is nothing interesting in this area.";
}
});
main.get_opt_text = (function get_opt_text(r){if(!(((function (){var G__48952 = r;return (main.flavortext.cljs$core$IFn$_invoke$arity$1 ? main.flavortext.cljs$core$IFn$_invoke$arity$1(G__48952) : main.flavortext.call(null,G__48952));
})() == null)))
{return cljs.core.last((function (){var G__48953 = r;return (main.flavortext.cljs$core$IFn$_invoke$arity$1 ? main.flavortext.cljs$core$IFn$_invoke$arity$1(G__48953) : main.flavortext.call(null,G__48953));
})());
} else
{return main.simple_opt_text(r);
}
});
main.action_is_movement_QMARK_ = (function action_is_movement_QMARK_(action){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(action),cljs.core.constant$keyword$77);
});
main.movement_action_direction = (function movement_action_direction(action){return cljs.core.last(action);
});
main.action_viable_QMARK_ = (function action_viable_QMARK_(action){var curr_room = (function (){var G__48955 = main.game_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48955) : cljs.core.deref.call(null,G__48955));
})().call(null,cljs.core.constant$keyword$67);if(main.action_is_movement_QMARK_(action))
{return !((main.get_opt_map(curr_room).call(null,main.movement_action_direction(action)) == null));
} else
{return false;

}
});
main.text_template_from_action = (function (){var method_table__4520__auto__ = (function (){var G__48956 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__48956) : cljs.core.atom.call(null,G__48956));
})();var prefer_table__4521__auto__ = (function (){var G__48957 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__48957) : cljs.core.atom.call(null,G__48957));
})();var method_cache__4522__auto__ = (function (){var G__48958 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__48958) : cljs.core.atom.call(null,G__48958));
})();var cached_hierarchy__4523__auto__ = (function (){var G__48959 = cljs.core.PersistentArrayMap.EMPTY;return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__48959) : cljs.core.atom.call(null,G__48959));
})();var hierarchy__4524__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$82,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("text-template-from-action",((function (method_table__4520__auto__,prefer_table__4521__auto__,method_cache__4522__auto__,cached_hierarchy__4523__auto__,hierarchy__4524__auto__){
return (function (x){return cljs.core.first(x);
});})(method_table__4520__auto__,prefer_table__4521__auto__,method_cache__4522__auto__,cached_hierarchy__4523__auto__,hierarchy__4524__auto__))
,cljs.core.constant$keyword$7,hierarchy__4524__auto__,method_table__4520__auto__,prefer_table__4521__auto__,method_cache__4522__auto__,cached_hierarchy__4523__auto__));
})();
main.text_template_from_action.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$77,(function (action){var des = ("Go "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(main.text_from_opt(cljs.core.last(action))));if(main.action_viable_QMARK_(action))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [des,cljs.core.constant$keyword$99], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [des,cljs.core.constant$keyword$100], null);
}
}));
main.text_template_from_action.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$7,(function (_){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("I don't know what you want to do..."),cljs.core.constant$keyword$101], null);
}));
main.text_nodes_from_actions = (function text_nodes_from_actions(actions){if(cljs.core.empty_QMARK_(actions))
{return cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__48961 = null;return (main.text_template_from_action.cljs$core$IFn$_invoke$arity$1 ? main.text_template_from_action.cljs$core$IFn$_invoke$arity$1(G__48961) : main.text_template_from_action.call(null,G__48961));
})());
} else
{return main.commaify_template_list(" and then ","unknown",cljs.core.map.cljs$core$IFn$_invoke$arity$2(main.text_template_from_action,actions));
}
});
main.player = (function player(){return cljs.core.PersistentHashSet.EMPTY;
});
main.tokenize = (function tokenize(input){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(input),/\s/));
});
main.parse_action = (function parse_action(tokens){var G__48966 = tokens;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,G__48966))
{return cljs.core.List.EMPTY;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__48966))
{return cljs.core.List.EMPTY;
} else
{var token = cljs.core.first(tokens);var future_actions = parse_action(cljs.core.rest(tokens));if(!(((function (){var G__48967 = main.all_directions;return (token.cljs$core$IFn$_invoke$arity$1 ? token.cljs$core$IFn$_invoke$arity$1(G__48967) : token.call(null,G__48967));
})() == null)))
{return cljs.core.cons(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__48968 = main.all_directions;return (token.cljs$core$IFn$_invoke$arity$1 ? token.cljs$core$IFn$_invoke$arity$1(G__48968) : token.call(null,G__48968));
})()),cljs.core.constant$keyword$77),future_actions);
} else
{return future_actions;
}

}
}
});
main.enter_room = (function enter_room(r,p){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__48971 = main.game_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48971) : cljs.core.deref.call(null,G__48971));
})(),cljs.core.constant$keyword$63,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__48972 = main.game_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48972) : cljs.core.deref.call(null,G__48972));
})().call(null,cljs.core.constant$keyword$63),r,main.room(main.get_opt_map(r),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p,main.get_items(r)))));
});
main.update_console_BANG_ = (function update_console_BANG_(r){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.game_state,cljs.core.assoc,cljs.core.constant$keyword$68,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.get_description_text(r),main.get_opt_text(r)], null));
});
main.goto_room_BANG_ = (function goto_room_BANG_(r){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.game_state,cljs.core.assoc,cljs.core.constant$keyword$67,r);
});
main.perform_action_BANG_ = (function perform_action_BANG_(action){if(main.action_viable_QMARK_(action))
{var G__48976 = (((cljs.core.first(action) instanceof cljs.core.Keyword))?cljs.core.first(action).fqn:null);switch (G__48976) {
case "go":
main.goto_room_BANG_(main.get_dest((function (){var G__48977 = main.game_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48977) : cljs.core.deref.call(null,G__48977));
})().call(null,cljs.core.constant$keyword$67),cljs.core.last(action)));
return main.update_console_BANG_((function (){var G__48978 = main.game_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48978) : cljs.core.deref.call(null,G__48978));
})().call(null,cljs.core.constant$keyword$67));

break;
default:
return console.log("WHAT IS HAPPENING?");

}
} else
{return null;
}
});
main.handle_enter_BANG_ = (function handle_enter_BANG_(app,owner){var actions = (function (){var G__48985 = main.game_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__48985) : cljs.core.deref.call(null,G__48985));
})().call(null,cljs.core.constant$keyword$83);om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$78,"");
var seq__48986_48990 = cljs.core.seq(actions);var chunk__48987_48991 = null;var count__48988_48992 = (0);var i__48989_48993 = (0);while(true){
if((i__48989_48993 < count__48988_48992))
{var action_48994 = chunk__48987_48991.cljs$core$IIndexed$_nth$arity$2(null,i__48989_48993);main.perform_action_BANG_(action_48994);
{
var G__48995 = seq__48986_48990;
var G__48996 = chunk__48987_48991;
var G__48997 = count__48988_48992;
var G__48998 = (i__48989_48993 + (1));
seq__48986_48990 = G__48995;
chunk__48987_48991 = G__48996;
count__48988_48992 = G__48997;
i__48989_48993 = G__48998;
continue;
}
} else
{var temp__4126__auto___48999 = cljs.core.seq(seq__48986_48990);if(temp__4126__auto___48999)
{var seq__48986_49000__$1 = temp__4126__auto___48999;if(cljs.core.chunked_seq_QMARK_(seq__48986_49000__$1))
{var c__4410__auto___49001 = cljs.core.chunk_first(seq__48986_49000__$1);{
var G__49002 = cljs.core.chunk_rest(seq__48986_49000__$1);
var G__49003 = c__4410__auto___49001;
var G__49004 = cljs.core.count(c__4410__auto___49001);
var G__49005 = (0);
seq__48986_48990 = G__49002;
chunk__48987_48991 = G__49003;
count__48988_48992 = G__49004;
i__48989_48993 = G__49005;
continue;
}
} else
{var action_49006 = cljs.core.first(seq__48986_49000__$1);main.perform_action_BANG_(action_49006);
{
var G__49007 = cljs.core.next(seq__48986_49000__$1);
var G__49008 = null;
var G__49009 = (0);
var G__49010 = (0);
seq__48986_48990 = G__49007;
chunk__48987_48991 = G__49008;
count__48988_48992 = G__49009;
i__48989_48993 = G__49010;
continue;
}
}
} else
{}
}
break;
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.game_state,cljs.core.assoc,cljs.core.constant$keyword$80,"");
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.game_state,cljs.core.assoc,cljs.core.constant$keyword$83,null);
});
main.handle_change_BANG_ = (function handle_change_BANG_(e,owner){var input = e.target.value;om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$78,input);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.game_state,cljs.core.assoc,cljs.core.constant$keyword$80,input);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.game_state,cljs.core.assoc,cljs.core.constant$keyword$83,main.parse_action(main.tokenize(input)));
});
main.update_console = (function update_console(new_text){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__49012 = main.game_state;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__49012) : cljs.core.deref.call(null,G__49012));
})(),cljs.core.constant$keyword$68,new_text);
});
main.window_load = (function window_load(){return main.update_console_BANG_(cljs.core.constant$keyword$69);
});
window.onload = main.window_load;
om.core.root((function (app,owner){if(typeof main.t49015 !== 'undefined')
{} else
{
/**
* @constructor
*/
main.t49015 = (function (owner,app,meta49016){
this.owner = owner;
this.app = app;
this.meta49016 = meta49016;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
main.t49015.cljs$lang$type = true;
main.t49015.cljs$lang$ctorStr = "main/t49015";
main.t49015.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write(writer__4218__auto__,"main/t49015");
});
main.t49015.prototype.om$core$IRenderState$ = true;
main.t49015.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;var G__49018 = null;var G__49019 = (function (){var G__49023 = null;var G__49024 = cljs.core.first(cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(self__.app));return React.DOM.p(G__49023,G__49024);
})();var G__49020 = (function (){var G__49025 = null;var G__49026 = cljs.core.last(cljs.core.constant$keyword$68.cljs$core$IFn$_invoke$arity$1(self__.app));return React.DOM.p(G__49025,G__49026);
})();var G__49021 = (function (){var G__49027 = {"onChange": ((function (G__49018,G__49019,G__49020,___$2){
return (function (p1__49014_SHARP_){return main.handle_change_BANG_(p1__49014_SHARP_,self__.owner);
});})(G__49018,G__49019,G__49020,___$2))
, "onKeyDown": ((function (G__49018,G__49019,G__49020,___$2){
return (function (p1__49013_SHARP_){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__49013_SHARP_.key,"Enter"))
{return main.handle_enter_BANG_(self__.app,self__.owner);
} else
{return null;
}
});})(G__49018,G__49019,G__49020,___$2))
, "value": cljs.core.constant$keyword$80.cljs$core$IFn$_invoke$arity$1(self__.app), "className": "action-field", "autoFocus": true, "placeholder": "What shall you do?", "type": "text"};return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__49027) : om.dom.input.call(null,G__49027));
})();var G__49022 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.span,{"className": "planned-actions"},cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__49018,G__49019,G__49020,G__49021,___$2){
return (function (templ){var G__49028 = {"className": cljs.core.name(cljs.core.last(templ))};var G__49029 = cljs.core.first(templ);return React.DOM.span(G__49028,G__49029);
});})(G__49018,G__49019,G__49020,G__49021,___$2))
,main.text_nodes_from_actions(cljs.core.constant$keyword$83.cljs$core$IFn$_invoke$arity$1(self__.app))));return React.DOM.div(G__49018,G__49019,G__49020,G__49021,G__49022);
});
main.t49015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49017){var self__ = this;
var _49017__$1 = this;return self__.meta49016;
});
main.t49015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49017,meta49016__$1){var self__ = this;
var _49017__$1 = this;return (new main.t49015(self__.owner,self__.app,meta49016__$1));
});
main.__GT_t49015 = (function __GT_t49015(owner__$1,app__$1,meta49016){return (new main.t49015(owner__$1,app__$1,meta49016));
});
}
return (new main.t49015(owner,app,null));
}),main.game_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$62,document.getElementById("interface")], null));
