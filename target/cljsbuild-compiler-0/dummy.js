// Compiled by ClojureScript 0.0-2371
goog.provide('dummy');
goog.require('cljs.core');
window.onload = dummy.window_load;
dummy.window_load = (function window_load(){return console.log("this runs in the browser");
});
