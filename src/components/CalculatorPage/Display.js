import React from 'react';
import './Display.css';

function Display({ input, result }) {
  return (
    <div id="calc-display">
      <div id="calc-input">{input}</div>
      <div id="calc-result">{result}</div>
    </div>
  );
}

export default Display;
