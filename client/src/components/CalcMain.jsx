import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";


export default function CalcMain() {
  const [currentDisplay, updateDisplay] = React.useState('');
  const [currentTotal, updateCurrentTotal] = React.useState('');
  const [history, addToHistory] = React.useState([]);

  const addElementToCalculation = (element) => {
    var update = currentTotal + element;
    updateCurrentTotal(update);
  }

  const addNumber = (e) => {
    const targetElement = e.target.value
    updateDisplay(targetElement);
    addElementToCalculation(targetElement);
  }

  const addOperator = (e) => {
    const targetElement = e.target.value
    addElementToCalculation(targetElement);
    updateDisplay('')
  }

  const getResult = () => {
    const answer = '' + eval(currentTotal)
    console.log('answer', answer)
    updateDisplay(answer);
    const currentHistory = history;
    currentHistory.push(answer)
    addToHistory(currentHistory);
  }

  const clearValue = () => {
    updateCurrentTotal('');
    updateDisplay('');
  }


  return (
    <div>
      Calculator App
      <div>
      <input type = 'text'onChange={addNumber} value={currentDisplay}/>
       <button value='+' onClick={addOperator}> + </button>
       <button value='-' onClick={addOperator}> - </button>
       <button value='*' onClick={addOperator}> * </button>
       <button value='/' onClick={addOperator}> / </button>
       <button onClick={clearValue}> C </button>

       <div>Display: {currentDisplay}</div>

       <button type='submit' onClick={getResult}> = </button>

       <div>Total: {currentTotal}</div>

      </div>
    </div>
  )
}
