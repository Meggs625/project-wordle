import React, {useState} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessForm from '../GuessForm/GuessForm';
import GameBoard from '../GameBoard/GameBoard';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });



function Game() {
  const [previousGuesses, setPreviousGuesses] = useState([]);

  const updateWords = (currentGuess) => {
    const newGuess = {
      label: currentGuess,
      id: crypto.randomUUID(),
    }
  setPreviousGuesses([...previousGuesses, newGuess])
    
    console.log({newGuess})
  }
  return <>
  <GameBoard previousGuesses={previousGuesses}/>
  <GuessForm updateWords={updateWords}/>
  </>;
}

export default Game;
