import React, {useRef, useState} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessForm from '../GuessForm/GuessForm';
import GameBoard from '../GameBoard/GameBoard';
import { checkGuess } from '../../game-helpers';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

const GAME_STATUS = {
  WON: "WON",
  LOST: "LOST"
}

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS))
  const [previousGuesses, setPreviousGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState('');
  const [runConfetti, setRunConfetti] = useState(false);

  const numOfGuesses = useRef(0);

  const { width, height } = useWindowSize()


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
      setRunConfetti(true)
      return;
    } 

    if(numOfGuesses.current === 6) {
      setGameStatus(GAME_STATUS.LOST)
      return;
    }
  }

  const loadNewGame = () => {
    setAnswer(sample(WORDS));
    setPreviousGuesses([]);
    setGameStatus('');
    setRunConfetti(false);
    numOfGuesses.current = 0;
    //could just run location.reload()? 
  }

  return <>
  <GameBoard previousGuesses={previousGuesses}/>
  <GuessForm handleNewWord={handleNewWord} gameStatus={gameStatus}/>
  {gameStatus === GAME_STATUS.WON && (
    <div className="happy banner">
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong>{` ${numOfGuesses.current} guesses!`}</strong>.
    </p>
    <button className="load-new-game-btn" onClick={loadNewGame}>Play again!</button>

  </div>

  )}
  {gameStatus === GAME_STATUS.LOST && (
    <div className="sad banner">
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    <button className="load-new-game-btn" onClick={loadNewGame}>Try again?</button>
  </div>
  )}
  {runConfetti && (
    <Confetti
    width={width}
    height={height}
    numberOfPieces={400}
    recycle={false}
  />

  )}
  </>;
}

export default Game;
