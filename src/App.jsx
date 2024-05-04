import GameBoard from "./Component/GameBoard";
import Player from "./Component/Player";
import { useState } from "react";
import Log from "./Component/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  function handleClickedBtn(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";
      
      if ((prevTurns.length > 0 && prevTurns[0].player === "X")) {
        currentPlayer = "O";
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
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
            symbol="O"
            isActive={activePlayer === "O"}
          ></Player>
        </ol>
        <GameBoard
          onClickedSquare={handleClickedBtn}
          turns={gameTurns}
        ></GameBoard>
      </div>
      <p>
        <Log></Log>
      </p>
    </main>
  );
}

export default App;
