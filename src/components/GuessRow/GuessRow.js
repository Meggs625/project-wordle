import React from 'react';
import { range } from '../../utils';

function GuessRow({rowGuess}) {
  return (
  <div>
  <p className="guess">
    {(rowGuess ? rowGuess.label.split("") : range(5)).map((item, idx) => (
      <span key={idx} className="cell">{Number.isInteger(item) ? "": item}</span>
    ))}
  </p>
  </div>)
}

export default GuessRow;
