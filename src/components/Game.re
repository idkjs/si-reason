type state = {
  rotation: int, /* In degrees */
  gameState: Engine.state
};

type actions =
  | Rotate(int)
  | Reset
  | Move((int, int));

let component = ReasonReact.reducerComponent("Game");

let make = (_children) => {
  ...component,
  initialState: () => {rotation: 0, gameState: Engine.initialState},
  reducer: (action, state) =>
    switch action {
    | Rotate(inc) =>
      ReasonReact.Update({...state, rotation: state.rotation + inc})
    | Reset =>
      ReasonReact.Update({rotation: 0, gameState: Engine.initialState})
    | Move((x, y)) =>
      ReasonReact.Update({
        ...state,
        gameState: Engine.move((x, y), state.gameState)
      })
    },
  render: ({state: {rotation, gameState}, reduce}) =>
    <div className="Game">
      <Sidebar
        gameState
        rotateClockwise=(reduce((_) => Rotate((-90))))
        rotateCounterClockwise=(reduce((_) => Rotate(90)))
        reset=(reduce((_) => Reset))
      />
      <BoardView
        rotation
        board=gameState.board
        move=(reduce(((x, y)) => Move((x, y))))
      />
    </div>
};
