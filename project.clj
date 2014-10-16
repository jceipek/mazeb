(defproject mazeb "1.2.3"
  :dependencies [[org.clojure/clojurescript "0.0-2371"]
                 [org.clojure/clojure "1.6.0"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [om "0.7.3"]]
  :plugins [[lein-cljsbuild "1.0.3"]]
  :cljsbuild {
    :builds [{:id "mazeb"
              ; The path to the top-level ClojureScript source directory:
              :source-paths ["src-cljs"]
              ; The standard ClojureScript compiler options:
              ; (See the ClojureScript compiler documentation for details.)
              :compiler {
                :output-to "scripts/main-build.js"  ; default: target/cljsbuild-main.js
                :output-dir "scripts"
                :optimizations :advanced
                :source-map "scripts/main-build.js.map"
                :externs ["react/externs/react.js"]}}]})