import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";


export default function CalcMain() {
  const [currentDisplay, updateDisplay] = React.useState('');
  const [currentTotal, updateCurrentTotal] = React.useState('');
  const [history, addToHistory] = React.useState([]);

  React.useEffect(() => {
    if (currentDisplay.includes('=')) {
      var fix = currentDisplay.replace('=', '')
      console.log('FIX', fix);
      updateDisplay(fix);
    }
  }, [currentDisplay])


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

  const calculateSalary = () => {
    var money = prompt('Please enter your Hourly Wage')
    var numCheck = removeCommasAndMakeNumber(money);
    var salary = (numCheck * 80) * 26;
    alert(`Your Annual Salary is: $${salary.toFixed(2)}`)
    updateDisplay('' + salary.toFixed(2))
    return;
  }

  const calculateHourly = () => {
    var money = prompt('Please enter your Annual Salary')
    var numCheck = removeCommasAndMakeNumber(money);
    var hourly = (numCheck/26) / 80;
    alert(`Your Hourly Wage is: $${hourly.toFixed(2)}`)
    updateDisplay('' + hourly.toFixed(2))
    return;
  }


  const handleKeyPress = (e) => {
    console.log('KEY PRESS', e.key)
    if (e.key === '=') {
      getResult();
    }
  }


  const removeCommasAndMakeNumber = (string) => {
    if (typeof string === 'number') {
      return string;
    }
    var result = '';
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== ',' && string[i] !== '$' && string[i] !== '%') {
        result += string[i];
      }
    }
    return Number(result);
  }

  const gramsToLBS = () => {
    var grams = prompt('Please enter the weight in grams');
    var pounds = (removeCommasAndMakeNumber(grams) * 0.00220462);
    alert(`That is ${pounds.toFixed(2)} pounds!`)
    updateDisplay('' + pounds.toFixed(2))
  }

  const getSalePrice = () => {
    var price = prompt('How much is the item before the disount?');
    var sale = prompt('How much is the price marked down?');
    var priceCheck = removeCommasAndMakeNumber(price);
    var saleCheck = removeCommasAndMakeNumber(sale);
    var salePrice = priceCheck - (priceCheck * (saleCheck/100));
    alert(`Your item that is normally $${priceCheck.toFixed(2)}, would be $${salePrice.toFixed(2)} before taxes.`)
    updateDisplay('' + salePrice.toFixed(2));
    return;
  }

  const clearValue = () => {
    updateCurrentTotal('');
    updateDisplay('');
  }


  return (
    <div onKeyPress={handleKeyPress}>
      Calculator App
      <div>
      <input type ='text' name='value' onChange={addNumber} value={currentDisplay}/>
      <div>
        <button value='+' onClick={addOperator}> + </button>
        <button value='-' onClick={addOperator}> - </button>
        <button value='*' onClick={addOperator}> * </button>
        <button value='/' onClick={addOperator}> / </button>
        <button onClick={clearValue}> C </button>
      </div>
      <div>
      <button type='submit' onClick={getResult}> = </button>
      </div>
      <div>
        <button value='Salary' onClick={calculateSalary}>Annual Salary</button>
      </div>
      <div>
        <button value='Hourly' onClick={calculateHourly}>Hourly Wage</button>
      </div>
      <div>
        <button value='GramsToLBS' onClick={gramsToLBS}>Grams to Pounds</button>
      </div>
      <div>
        <button value='Sale' onClick={getSalePrice}>Get Sale Price</button>
      </div>


       <div>Display: {currentDisplay}</div>

       <div>Total: {currentTotal}</div>

      </div>
    </div>
  )
}
