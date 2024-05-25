import React, {useState} from 'react';

function GuessForm({handleNewWord, gameStatus}) {
  const [currentGuess, setCurrentGuess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewWord(currentGuess);
    setCurrentGuess('');
  }
  return (
  <form className="guess-input-wrapper" onSubmit={(e) => {
handleSubmit(e)
  }}>
  <label htmlFor="guess-input">Venture a guess:</label>
  <input 
  id="guess-input" 
  type="text" 
  pattern="[a-zA-Z]{5}"
  minLength={5}
  maxLength={5}
  title="5 letter guess"
  disabled={gameStatus}
  value={currentGuess}
  onChange={e => setCurrentGuess(e.target.value.toUpperCase())}
  />
</form>
);
}

export default GuessForm;
