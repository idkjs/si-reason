// Generated by ReScript, PLEASE EDIT WITH CARE

import * as List from "bs-platform/lib/es6/list.js";
import * as $$Array from "bs-platform/lib/es6/array.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Caml_array from "bs-platform/lib/es6/caml_array.js";
import * as Board$SiReason from "../board.bs.js";
import * as Column$SiReason from "./Column.bs.js";
import * as BoardBase$SiReason from "./BoardBase.bs.js";

function columnKey(x, y) {
  return "" + x + "-" + y;
}

function columnBaseTransform(param) {
  return "translate(" + (param[0].toString() + ("px, " + (param[1].toString() + "px)")));
}

var emptyColumnPositions = $$Array.make_matrix(Board$SiReason.numRows, Board$SiReason.numRows, [
      0,
      0
    ]);

function BoardView(Props) {
  var rotation = Props.rotation;
  var board = Props.board;
  var move = Props.move;
  var match = React.useReducer((function (param, action) {
          return {
                  columnPositions: $$Array.mapi((function (x, row) {
                          return $$Array.mapi((function (y, param) {
                                        var rect = document.getElementById(BoardBase$SiReason.markerId(x, y)).getBoundingClientRect();
                                        return [
                                                rect.left,
                                                rect.top
                                              ];
                                      }), row);
                        }), emptyColumnPositions)
                };
        }), {
        columnPositions: emptyColumnPositions
      });
  var dispatch = match[1];
  var state = match[0];
  React.useEffect((function () {
          var onAnimationFrame = function (param) {
            Curry._1(dispatch, /* UpdateColumnPositions */0);
            requestAnimationFrame(onAnimationFrame);
            
          };
          requestAnimationFrame(onAnimationFrame);
          
        }), []);
  return React.createElement("div", {
              className: "Board"
            }, React.createElement(BoardBase$SiReason.make, {
                  rotation: rotation,
                  winning: Board$SiReason.winner(board) !== undefined
                }), $$Array.of_list(List.map((function (param) {
                        var match = param[1];
                        var y = match[1];
                        var x = match[0];
                        var i = param[0];
                        return React.createElement("div", {
                                    key: columnKey(x, y),
                                    className: "Board-columnContainer",
                                    style: {
                                      zIndex: String(i),
                                      opacity: (i / 16 * 0.5 + 0.5).toString(),
                                      transform: columnBaseTransform(Caml_array.get(Caml_array.get(state.columnPositions, x), y))
                                    }
                                  }, React.createElement(Column$SiReason.make, {
                                        board: board,
                                        x: x,
                                        y: y,
                                        tryMove: (function (param) {
                                            if (Board$SiReason.isValidMove([
                                                    x,
                                                    y
                                                  ], board)) {
                                              return Curry._1(move, [
                                                          x,
                                                          y
                                                        ]);
                                            }
                                            
                                          }),
                                        winner: Board$SiReason.winner(board)
                                      }));
                      }), List.sort((function (param, param$1) {
                            var match = param$1[1];
                            var x2 = match[0];
                            var match$1 = param[1];
                            var x1 = match$1[0];
                            if (x1 === x2) {
                              return match$1[1] - match[1] | 0;
                            } else {
                              return x1 - x2 | 0;
                            }
                          }), List.mapi((function (i, param) {
                                return [
                                        i,
                                        [
                                          param[0],
                                          param[1]
                                        ]
                                      ];
                              }), List.sort((function (param, param$1) {
                                    var match = Caml_array.get(Caml_array.get(state.columnPositions, param[0]), param[1]);
                                    var match$1 = Caml_array.get(Caml_array.get(state.columnPositions, param$1[0]), param$1[1]);
                                    return (match[1] | 0) - (match$1[1] | 0) | 0;
                                  }), Board$SiReason.ijList))))));
}

var make = BoardView;

export {
  columnKey ,
  columnBaseTransform ,
  emptyColumnPositions ,
  make ,
  
}
/* emptyColumnPositions Not a pure module */
