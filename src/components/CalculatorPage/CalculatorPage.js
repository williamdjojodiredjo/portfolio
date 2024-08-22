import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import './CalculatorPage.css';
import NavBar from '../NavBar/NavBar';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const calculateResult = (input) => {
    try {
      // Regular expressions to split the input into numbers and operators
      const numbers = input.split(/[-+*/]/).map(Number);
      const operators = input.replace(/[0-9]|\./g, '').split('');

      let currentResult = numbers[0];

      for (let i = 0; i < operators.length; i++) {
        switch (operators[i]) {
          case '+':
            currentResult += numbers[i + 1];
            break;
          case '-':
            currentResult -= numbers[i + 1];
            break;
          case '*':
            currentResult *= numbers[i + 1];
            break;
          case '/':
            currentResult /= numbers[i + 1];
            break;
          default:
            break;
        }
      }

      return currentResult;
    } catch (error) {
      return 'Error';
    }
  };

  const handleButtonClick = (value) => {
    if (value === '=') {
      setResult(calculateResult(input));
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div>
      <NavBar />
      <div id="calculator-wrapper">
        <div id="calculator">
          <Display input={input} result={result} />
          <div id="buttons">
            {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((buttonValue) => (
              <Button key={buttonValue} value={buttonValue} onClick={handleButtonClick} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
