import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessRow from '../GuessRow/GuessRow';
import { range } from '../../utils';

function GameBoard({previousGuesses}) {

  return <div className="guess-results">
    {range(NUM_OF_GUESSES_ALLOWED).map((item) => (
      <GuessRow key={item} rowGuess={previousGuesses[item]}/>
    ))}
</div>;
}

export default GameBoard;
