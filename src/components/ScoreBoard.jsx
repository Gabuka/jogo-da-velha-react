export default function ScoreBoard({ scores }) {
    return (
      <div className="scoreboard">
        <p>Vitórias X: {scores.X}</p>
        <p>Vitórias O: {scores.O}</p>
      </div>
    );
  }
  