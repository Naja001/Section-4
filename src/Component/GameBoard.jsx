import { useState } from "react";


export default function GameBoard({ onClickedSquare, board }) {
  
 
  return (
    <div>
      <ol id="game-board">
        {board.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button onClick={()=>onClickedSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
}
