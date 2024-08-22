import React from 'react';
import './Display.css';

function Display({ input, result }) {
  return (
    <div id="display">
      <div id="input">{input}</div>
      <div id="result">{result}</div>
    </div>
  );
}

export default Display;
