import Square from "./Square";

export default function Board({ squares, onSquareClick }) {
  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square key={index} value={value} onClick={() => onSquareClick(index)} />
      ))}
    </div>
  );
}
