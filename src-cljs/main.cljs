(ns main
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [clojure.data :as data]
            [clojure.string :as string]))

(def game-state (atom {:map {:living-room [{:left :kitchen
                                            :right :parlor
                                            :up :cellar} #{}]
                             :kitchen [{:south :living-room} #{}]
                             :parlor [{:south :living-room} #{}]}
                       :curr-room :living-room
                       :entered-actions nil
                       :desired-action nil
                       :console ["Welcome!", "Perform actions..."]}))

(def flavortext {
    :living-room ["You are in a strange room." "You can go left through the hallway or right down some stairs."]
    })

(defn room [opt-map items] [opt-map items])
(defn get-room [r] (r (:map @game-state)))
(defn get-dest [r opt] (opt (first (get-room r))))
(defn get-opt-map [r] (first (get-room r)))
(defn get-options [r] (keys (get-opt-map r)))
(defn get-items [r] (last (get-room r)))
(defn get-curr-room [] (:curr-room @game-state))

(defn text-from-opt [opt] (case opt
                            :left "Left"
                            :right "Right"
                            :south "South"
                            opt))

(defn commaify-list [joiner lst] (case (count lst)
                                    0 "nowhere"
                                    1 (last lst)
                                    2 (apply str (interpose joiner (take-last 2 lst)))
                                    (let [ending (apply str (interpose (str "," joiner) (take-last 2 lst)))]
                                        (let [beginning (apply str (interpose ", " (take (- (count lst) 2) lst)))]
                                            (str beginning ", " ending)))))

(defn simple-opt-text [r] (str "You can go " (commaify-list " or " (map text-from-opt (get-options r))) "."))
(defn get-description-text [r] (if (nil? (flavortext r)) (first (flavortext r)) "There is nothing interesting in this area."))
(defn get-opt-text [r] (if (nil? (flavortext r)) (last (flavortext r)) (simple-opt-text r)))

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
                                (case (first tokens)
                                    :left (cons '(:go :left) (parse-action (rest tokens)))
                                    :right (cons '(:go :right) (parse-action (rest tokens)))
                                    (parse-action (rest tokens)))))

(defn enter-room [r p] (assoc @game-state :map
                                        (assoc (@game-state :map) r
                                            (room (get-opt-map r)
                                            (conj p (get-items r))))))

(defn update-console [new-text] (assoc @game-state :console new-text))

(defn window-load [] (.log js/console (str (parse-action (tokenize "go left")))))

(set! (.-onload js/window) window-load)


(enable-console-print!)

(defn handle-enter [owner]
  (.log js/console (str "SUBMIT: " (str (@game-state :desired-action))))
  (om/set-state! owner :text ""))

(defn handle-change [e owner {:keys [text]}]
  (let [des-act (parse-action (tokenize (.. e -target -value)))]
    (swap! game-state assoc :entered-actions (.. e -target -value))
    (swap! game-state assoc :desired-action des-act)))

(om/root
  (fn [app owner]
    (reify om/IRenderState
      (render-state [this state]
        (dom/div nil (dom/p nil (first (:console app)))
                     (dom/p nil (last (:console app)))
                     (dom/input #js {:type "text"
                                     :placeholder "What shall you do?"
                                     :autoFocus true
                                     :className "action-field"
                                     :ref "new-contact"
                                     :value (:entered-actions state)
                                     :onKeyDown #(when (= (.-key %) "Enter")
                                        (handle-enter owner))
                                     :onChange #(handle-change % owner state)})))))
  game-state
  {:target (. js/document (getElementById "interface"))})