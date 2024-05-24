import React from 'react';

function GameBoard({previousGuesses}) {
  console.log({previousGuesses})

  return <div className="guess-results">
    {previousGuesses.map(({label, id}) => (
      <p key={id} className="guess">{label}</p>
    ))}
</div>;
}

export default GameBoard;
