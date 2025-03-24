import React, { useState } from 'react';

// Composant enfant qui affiche le score d'un joueur
function Score({ playerName, score }) {
  return (
    <div>
      <h3>{playerName}</h3>
      <p>Score: {score}</p>
    </div>
  );
}

// Composant parent qui gère les scores et les passe en props
function Scoreboard() {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  // Fonction pour augmenter les scores
  const increaseScore = (player) => {
    if (player === 'player1') {
      setPlayer1Score(player1Score + 1);
    } else if (player === 'player2') {
      setPlayer2Score(player2Score + 1);
    }
  };

  return (
    <div>
      <h1>Scoreboard</h1>
      <Score playerName="Player 1" score={player1Score} />
      <Score playerName="Player 2" score={player2Score} />
      
      <div>
        <button onClick={() => increaseScore('player1')}>Increase Player 1 Score</button>
        <button onClick={() => increaseScore('player2')}>Increase Player 2 Score</button>
      </div>
    </div>
  );
}

export default Scoreboard;
