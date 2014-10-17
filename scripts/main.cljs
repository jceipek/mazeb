(ns main
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [clojure.data :as data]
            [clojure.string :as string]))

(def game-state (atom {:map {:living-room [{:left :kitchen
                                            :right :parlor
                                            :up :attic} #{}]
                             :kitchen [{:south :living-room} #{}]
                             :parlor [{:south :living-room} #{}]
                             :attic [{:down :living-room} #{}]}
                       :curr-room :living-room
                       :entered-actions nil
                       :desired-actions nil
                       :console ["Welcome!", "Perform actions..."]}))

(def flavortext {
    :living-room ["You are in a strange room." "You can go Left through the hallway, Right down some stairs, or Up through a trapdoor."]
    :attic ["You find yourself in the attic, a musty, cramped space full of cobwebs and layers of grime." "You can go back Down into the strange room."]
    })

(defn room [opt-map items] [opt-map items])
(defn get-room [r] (r (:map @game-state)))
(defn get-dest [r opt] (opt (first (get-room r))))
(defn get-opt-map [r] (first (get-room r)))
(defn get-direction-options [r] (keys (get-opt-map r)))
(defn get-items [r] (last (get-room r)))
(defn get-curr-room [] (:curr-room @game-state))

(defn expand-map [target-map]
    (apply hash-map
        (flatten
            (map (fn [tuple] (map (fn [opt] [opt (last tuple)])
                                  (first tuple)))
                 target-map))))

(def all-directions (expand-map {
    #{:left :l} :left
    #{:right :r} :right
    #{:up :u} :up
    #{:down :d} :down
    #{:north :n} :north
    #{:south :s} :south
    #{:west :w} :west
    #{:east :e} :east
    }))

(defn text-from-opt [opt] (if-not (nil? (opt all-directions))
                            (string/capitalize (name opt))
                            (str opt)))

(defn commaify-list [joiner lst] (case (count lst)
                                    0 "nowhere"
                                    1 (last lst)
                                    2 (apply str (interpose joiner (take-last 2 lst)))
                                    (let [ending (apply str (interpose (str "," joiner) (take-last 2 lst)))]
                                        (let [beginning (apply str (interpose ", " (take (- (count lst) 2) lst)))]
                                            (str beginning ", " ending)))))

(defn commaify-template-list [joiner nl lst]
                                (case (count lst)
                                    0 (list [nl :unknown])
                                    1 (list (last lst))
                                    2 (interpose [joiner :joiner] (take-last 2 lst))
                                    (let [ending (interpose [(str "," joiner) :joiner] (take-last 2 lst))]
                                        (let [beginning (interpose [", " :joiner] (take (- (count lst) 2) lst))]
                                            (concat beginning (list [", " :joiner]) ending)))))

(defn simple-opt-text [r] (str "You can go " (commaify-list " or " (map text-from-opt (get-direction-options r))) "."))
(defn get-description-text [r] (if-not (nil? (flavortext r)) (first (flavortext r)) "There is nothing interesting in this area."))
(defn get-opt-text [r] (if-not (nil? (flavortext r)) (last (flavortext r)) (simple-opt-text r)))

(defn action-is-movement? [action] (= (first action) :go))
(defn movement-action-direction [action] (last action))
(defn action-viable? [action]
    (let [curr-room (@game-state :curr-room)]
        (cond
            (action-is-movement? action) (not (nil? ((get-opt-map curr-room) (movement-action-direction action))))
            :else false)))

(defmulti text-template-from-action (fn [x] (first x)))
(defmethod text-template-from-action :go [action]  (let [des (str "Go " (text-from-opt (last action)))] (if (action-viable? action) [des :viable] [des :not-viable])))
(defmethod text-template-from-action :default [_] [(str "I don't know what you want to do...") :unknown])

(defn text-nodes-from-actions [actions]
    (if (empty? actions)
            (list (text-template-from-action nil))
            (commaify-template-list " and then " "unknown"
                (map text-template-from-action actions))))

(defn player [] #{})

;(def opt-patterns {
;    '(:left :l) :left
;    '(:right :r) :right
;    '(:up :u) :up
;    })

;(def recognized-patterns {
;    '(() ())
;    })

(defn tokenize [input] (map keyword (string/split (string/lower-case input) #"\s")))
(defn parse-action [tokens] (case tokens
                                '() '()
                                (let [token (first tokens)
                                      future-actions (parse-action (rest tokens))]
                                    (if-not (nil? (token all-directions))
                                        (cons (list :go (token all-directions)) future-actions)
                                        future-actions
                                    ))))

(defn enter-room [r p] (assoc @game-state :map
                                        (assoc (@game-state :map) r
                                            (room (get-opt-map r)
                                            (conj p (get-items r))))))

(defn update-console! [r]
    (swap! game-state assoc :console [(get-description-text r) (get-opt-text r)]))

(defn goto-room! [r] (swap! game-state assoc :curr-room r))


(defn perform-action! [action]
    (if (action-viable? action)
        (case (first action)
            :go (do (goto-room! (get-dest (@game-state :curr-room) (last action)))
    ;                (.log js/console (str (@game-state :curr-room)))
                    (update-console! (@game-state :curr-room)))
            (.log js/console "WHAT IS HAPPENING?"))))

(defn handle-enter! [app owner]
    (let [actions (@game-state :desired-actions)]
        (om/set-state! owner :text "")
        (doseq [action actions] (perform-action! action))
        (swap! game-state assoc :entered-actions "")
        (swap! game-state assoc :desired-actions nil)))

(defn handle-change! [e owner]
    (let [input (.. e -target -value)]
        (om/set-state! owner :text input)
        (swap! game-state assoc :entered-actions input)
        (swap! game-state assoc :desired-actions (parse-action (tokenize input)))))

(defn update-console [new-text] (assoc @game-state :console new-text))

(defn window-load [] (update-console! :living-room))

(set! (.-onload js/window) window-load)

(om/root
  (fn [app owner]
    (reify
    om/IRenderState
      (render-state [_ _]
        (dom/div nil (dom/p nil (first (:console app)))
                     (dom/p nil (last (:console app)))
                     (dom/input #js {:type "text"
                                     :placeholder "What shall you do?"
                                     :autoFocus true
                                     :className "action-field"
                                     :value (:entered-actions app)
                                     :onKeyDown #(when (= (.-key %) "Enter")
                                        (handle-enter! app owner))
                                     :onChange #(handle-change! % owner)})
                     (apply dom/span #js {:className "planned-actions"}
                            (map (fn [templ] (dom/span #js {:className (name (last templ))} (first templ))) (text-nodes-from-actions (:desired-actions app))))))))
  game-state
  {:target (. js/document (getElementById "interface"))})