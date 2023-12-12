import React from 'react';

function Colors() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'grey',
        padding: '1.4em',
        color: 'whitesmoke',
        fontSize: '0.81rem',
      }}>
      <span
        style={{ borderBottom: '1px solid whitesmoke', padding: '0.4em 0' }}>
        Dark grey tiles means wrong Alphabet.
      </span>
      <span
        style={{ borderBottom: '1px solid whitesmoke', padding: '0.4em 0' }}>
        Dark green tiles means Perfect Alphabet.
      </span>
      <span
        style={{ borderBottom: '1px solid whitesmoke', padding: '0.4em 0' }}>
        Green tiles means right Alphabet but wrong position.
      </span>
    </div>
  );
}

export default Colors;
