import GameBoard from "./Component/GameBoard";
import Player from "./Component/Player";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleClickedBtn() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "0" : "X"));
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          ></Player>
          <Player
            initialName="Player 2"
            symbol="0"
            isActive={activePlayer === "0"
        }
          ></Player>
        </ol>
        <GameBoard onClickedSquare={handleClickedBtn} activePlayerSymbol={activePlayer}></GameBoard>
      </div>
      <p>logs</p>
    </main>
  );
}

export default App;
