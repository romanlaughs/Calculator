import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";


export default function CalcMain() {
  const [currentDisplay, updateDisplay] = React.useState('');
  const [currentTotal, updateCurrentTotal] = React.useState('');
  const [history, addToHistory] = React.useState([]);

  // Need to create a separate display for actual display purposes while the currentDiplsay is more of an elemental storage
  // otherwise the current answer is added to the running total in calculations

  const addNumber = (e) => {
    const targetElement = e.target.value
    updateDisplay(targetElement);
  }

  const addOperator = (e) => {
    console.log(currentDisplay)
    const targetElement = e.target.value
    var update = currentTotal + currentDisplay + targetElement;
    updateCurrentTotal(update);
    updateDisplay('')
  }

  const getResult = () => {
    var update = currentTotal + currentDisplay;
    updateCurrentTotal(update);
    const answer = '' + eval(currentTotal + currentDisplay)
    console.log('answer', answer)
    updateDisplay(answer);
    updateCurrentTotal('')
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
      <input type ='text' name='value' onChange={addNumber} value={currentDisplay}/>
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
