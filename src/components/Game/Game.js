import React, {useRef, useState} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessForm from '../GuessForm/GuessForm';
import GameBoard from '../GameBoard/GameBoard';
import { checkGuess } from '../../game-helpers';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const GAME_STATUS = {
  WON: "WON",
  LOST: "LOST"
}



function Game() {
  const [previousGuesses, setPreviousGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState('');
  const numOfGuesses = useRef(0);

  const handleNewWord = (currentGuess) => {
    numOfGuesses.current = numOfGuesses.current + 1;
    const validatedNewGuess = checkGuess(currentGuess, answer);
    setPreviousGuesses([...previousGuesses, validatedNewGuess]);
    checkGameStatus(currentGuess);
  }

  const checkGameStatus = (currentGuess) => {
    const isAWinner = currentGuess === answer;
    if (isAWinner) {
      setGameStatus(GAME_STATUS.WON);
      return;
    } 

    if(numOfGuesses.current === 6) {
      setGameStatus(GAME_STATUS.LOST)
      return;
    }
  }

  return <>
  <GameBoard previousGuesses={previousGuesses}/>
  <GuessForm handleNewWord={handleNewWord} gameStatus={gameStatus}/>
  {gameStatus === GAME_STATUS.WON && (
    <div className="happy banner">
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong>{`${numOfGuesses.current} guesses!`}</strong>.
    </p>
  </div>
  )}
  {gameStatus === GAME_STATUS.LOST && (
    <div className="sad banner">
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  </div>
  )}
  </>;
}

export default Game;
