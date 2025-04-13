export default function Status({ currentPlayer, winner, isDraw }) {
    if (winner) return <p className="status">Vencedor: {winner}</p>;
    if (isDraw) return <p className="status">Empate!</p>;
    return <p className="status">Vez do jogador: {currentPlayer}</p>;
  }
  