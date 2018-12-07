import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  state = {
    displayValue: '0',
    numbers: [],
    operators: [],
    selectedOperator: '',
    storesValue: ''
  }

  callOperator = () => {
    console.log('call operation');
  }

  selectedOperator = () => {
    console.log('set operation');
  }

  updateDisplay = () => {
    console.log('update display');
  }

  render = () => {
    return (
      <div className="calculator-container" />
    )
  }
}

export default Calculator;