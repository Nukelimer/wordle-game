import React from 'react';

function Colors() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        
        padding: '1.4em',
        color: 'whitesmoke',
        fontSize: '0.81rem',
      }}>
      <span
        style={{ border: '1px solid hsl(0deg 0% 10%)', padding: '0.4em',color:'hsl(0deg 0% 10%)' }}>
        Dark grey tiles means wrong Alphabet.
      </span>
      <span
        style={{border: '1px solid hsl(150deg 70% 30%)', padding: '0.4em ', color:'hsl(150deg 70% 30%)' }}>
        Dark green tiles means Perfect Alphabet.
      </span>
      <span
        style={{ border: '1px solid hsl(50deg 100% 30%)', padding: '0.4em', color: 'hsl(50deg 100% 30%)'}}>
        Brown tiles means right Alphabet but wrong position.
      </span>
    </div>
  );
}

export default Colors;
