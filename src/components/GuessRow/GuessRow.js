import React from 'react';
import { range } from '../../utils';

function GuessRow({rowGuess}) {
  return (
  <div>
  <p className="guess">
    {range(5).map((val) => (
      <span key={val} className={`cell ${rowGuess ? rowGuess[val].status : ''}`}>{rowGuess ? rowGuess[val].letter : null}</span>
    ))}
  </p>
  </div>)
}

export default GuessRow;
