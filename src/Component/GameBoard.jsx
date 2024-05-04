import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ onClickedSquare, turns }) {
  const gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  //const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleGameBtn(rowIndex, colIndex) {
  //   setGameBoard((prevState) => {
  //     const updatedBoard = [...prevState.map((item) => [...item])];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });
  //   //every time when some btn is clicked this function will execute(in app.jsx) and change player
  //   onClickedSquare();

  return (
    <div>
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button onClick={()=>onClickedSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
}
