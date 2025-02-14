// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as About$SiReason from "./About.bs.js";
import * as Engine$SiReason from "../engine.bs.js";
import * as Sidebar$SiReason from "./Sidebar.bs.js";
import * as BoardView$SiReason from "./BoardView.bs.js";

function Game(Props) {
  var match = React.useReducer((function (state, action) {
          if (typeof action === "number") {
            switch (action) {
              case /* Reset */0 :
                  return {
                          rotation: 0,
                          gameState: Engine$SiReason.initialState,
                          showAbout: false
                        };
              case /* OpenAbout */1 :
                  return {
                          rotation: state.rotation,
                          gameState: state.gameState,
                          showAbout: true
                        };
              case /* CloseAbout */2 :
                  return {
                          rotation: state.rotation,
                          gameState: state.gameState,
                          showAbout: false
                        };
              
            }
          } else {
            if (action.TAG === /* Rotate */0) {
              return {
                      rotation: state.rotation + action._0 | 0,
                      gameState: state.gameState,
                      showAbout: state.showAbout
                    };
            }
            var match = action._0;
            return {
                    rotation: state.rotation,
                    gameState: Engine$SiReason.move([
                          match[0],
                          match[1]
                        ], state.gameState),
                    showAbout: state.showAbout
                  };
          }
        }), {
        rotation: 0,
        gameState: Engine$SiReason.initialState,
        showAbout: false
      });
  var state = match[0];
  var gameState = state.gameState;
  var dispatch = match[1];
  return React.createElement("div", {
              className: "Game"
            }, React.createElement(Sidebar$SiReason.make, {
                  gameState: gameState,
                  rotateClockwise: (function (_e) {
                      return Curry._1(dispatch, {
                                  TAG: /* Rotate */0,
                                  _0: -90
                                });
                    }),
                  rotateCounterClockwise: (function (_e) {
                      return Curry._1(dispatch, {
                                  TAG: /* Rotate */0,
                                  _0: 90
                                });
                    }),
                  reset: (function (_e) {
                      return Curry._1(dispatch, /* Reset */0);
                    }),
                  openAbout: (function (_e) {
                      return Curry._1(dispatch, /* OpenAbout */1);
                    })
                }), React.createElement(BoardView$SiReason.make, {
                  rotation: state.rotation,
                  board: gameState.board,
                  move: (function (param) {
                      return Curry._1(dispatch, {
                                  TAG: /* Move */1,
                                  _0: [
                                    param[0],
                                    param[1]
                                  ]
                                });
                    })
                }), state.showAbout ? React.createElement(About$SiReason.make, {
                    close: (function (_e) {
                        return Curry._1(dispatch, /* CloseAbout */2);
                      })
                  }) : null);
}

var make = Game;

export {
  make ,
  
}
/* react Not a pure module */
