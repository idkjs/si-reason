let se = React.string;

[@react.component]
let make =
    (
      ~gameState: Engine.state,
      ~rotateClockwise,
      ~rotateCounterClockwise,
      ~reset,
      ~openAbout,
    ) => {
  <div className="Sidebar">
    <div className="Sidebar-title"> {se("SI")} </div>
    <div className="Sidebar-section">
      {[(Board.P1, "Player 1"), (Board.P2, "Player 2")]
       |> List.mapi((i, (player, name)) =>
            <div
              key={string_of_int(i)}
              className={Util.cx([
                ("Sidebar-subSection", true),
                ("Sidebar-player", true),
                ("Sidebar-player--active", gameState.player == player),
                (
                  "Sidebar-player--winner",
                  switch (Board.winner(gameState.board)) {
                  | Some((winner, _)) when winner == player => true
                  | _ => false
                  },
                ),
              ])}>
              <div
                className={
                  switch (player) {
                  | P1 => "Sidebar-playerBead Sidebar-playerBead--p1"
                  | P2 => "Sidebar-playerBead Sidebar-playerBead--p2"
                  }
                }
              />
              {se(name)}
            </div>
          )
       |> Array.of_list
       |> React.array}
    </div>
    <div className="Sidebar-section">
      <div
        className="Sidebar-rotateBtn icon-rotate-left"
        onClick=rotateClockwise
      />
      <div
        className="Sidebar-rotateBtn icon-rotate-right"
        onClick=rotateCounterClockwise
      />
    </div>
    <div className="Sidebar-info">
      <div className="Sidebar-subSection">
        <span className="Sidebar-link" onClick=reset> {se("New game")} </span>
      </div>
      <div className="Sidebar-subSection">
        <span className="Sidebar-link" onClick=openAbout>
          {se("About")}
        </span>
      </div>
    </div>
  </div>;
};
