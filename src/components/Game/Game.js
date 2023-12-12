import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import WordInput from '../WordInput/WordInput';
import PreviousInputs from '../PreviousInput/PreviousInputs';
import { ALLOWED_GUESSES } from '../PreviousInput/PreviousInputs';
import GameOverBanner from '../GameOverBanner/GameOverBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [temporaryInput, setTemporaryInput] = useState([]);
  const [gameState, setGameState] = useState('running');

  const handleSubmitGuess = (guess) => {
    const nextLength = [...temporaryInput, guess];
    setTemporaryInput(nextLength);
    if (guess === answer) {
      setGameState('won');
    } else if (nextLength.length >= ALLOWED_GUESSES) {
      setGameState('lost');
    }
  };
  return (
    <>
      <PreviousInputs temporaryInput={temporaryInput} answer={answer} />
      <WordInput handleSubmitGuess={handleSubmitGuess} gameState={gameState} />
      {gameState !== 'running' && <GameOverBanner gameState={gameState} answer={answer} numberOfGuesses={temporaryInput.length} />}
    </>
  );
}

export default Game;
