import React, { useEffect, useRef, useState } from 'react';

const WordInput = ({ handleSubmitGuess, gameState }) => {
  const [inputs, setInputs] = useState('')
  const ref = useRef(null)

  useEffect(() => {
    ref.current.focus()
  }, [])
  
  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          if (inputs.length < 5) {
            return;
          }

          handleSubmitGuess(inputs);
          setInputs('');
        }}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={inputs}
          required
          ref={ref}
          // autoFocus
          disabled={gameState !== 'running'}
          minLength={5}
          maxLength={5}
          onChange={(event) => {
            setInputs(event.target.value.toUpperCase());
          }}
        />
        {}
      </form>
    </>
  );
};

export default WordInput;
