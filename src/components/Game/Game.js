import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessForm from '../GuessForm/GuessForm';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const updateWords = (currentGuess) => {
  console.log({currentGuess})
}

function Game() {
  return <><GuessForm updateWords={updateWords}/></>;
}

export default Game;
