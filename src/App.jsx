import { useState } from "react";
import Board from "./components/Board";
import Status from "./components/Status";
import ScoreBoard from "./components/ScoreBoard";
import "./index.css";

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0 });

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(Boolean);

  function handleClick(index) {
    if (squares[index] || winner) return;
    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);

    const result = calculateWinner(newSquares);
    if (result) {
      setScores((prev) => ({
        ...prev,
        [result]: prev[result] + 1,
      }));
    }
  }

  function handleReset() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="container">
      <h1>Jogo da Velha</h1>
      <ScoreBoard scores={scores} />
      <Status currentPlayer={xIsNext ? "X" : "O"} winner={winner} isDraw={isDraw} />
      <Board squares={squares} onSquareClick={handleClick} />
      <button className="reset-btn" onClick={handleReset}>Reiniciar</button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
