import { useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calculateWinner } from "./helper";
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const winner = calculateWinner(board);
  const handleClick: (p: number) => void = (index) => {
    const boardCopy: string[] = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    console.log(boardCopy[index]);
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
    console.log(boardCopy);
  };
  const handleResetGame: () => void = () => {
    setBoard(Array(9).fill(null));
  };
  return (
    <div>
      <Board cells={board} onClick={handleClick} />
      {winner && (
        <div className="game-winner">{winner ? `Winner is ${winner}` : ""}</div>
      )}
      <button className="game-reset" onClick={handleResetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default Game;
