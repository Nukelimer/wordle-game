import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
export const ALLOWED_GUESSES = 6;
const PreviousInputs = ({ temporaryInput, answer }) => {
  return (
    <>
      <div className="guess-results">
        {range(ALLOWED_GUESSES).map((num, id) => {
          return <Guess key={num} value={temporaryInput[num]} answer={answer}/>;
        })}
      </div>
    </>
  );
};

export default PreviousInputs;
