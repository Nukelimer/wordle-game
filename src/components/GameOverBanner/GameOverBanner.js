import React from 'react';

function GameOverBanner({ gameState , answer, numberOfGuesses}) {
  if (gameState == 'won') {
    return (
      <div className="happy banner">
        <p>
          <strong>Idan🤓 </strong>you got it in
          <strong> {numberOfGuesses < 2 ? `${numberOfGuesses } guess` : `${numberOfGuesses } guesses` }</strong>.
        </p>
      </div>
    );
  } else if (gameState == 'lost') {
    return (
      <div className={`sad banner`}>
      <p>
          You for serious for school oh, anyway, sorry, the correct answer is <strong>{answer }</strong>.
      </p>
    </div>
    )
  }
}

export default GameOverBanner;
