import React, { useState } from "react";
import "./App.scss";
// STEP 4 - import the button and display components
// import Numbers from "./components/ButtonComponents/NumberButtons/Numbers"
import Numbers from "./components/ButtonComponents/NumberButtons/Number Component"

import Operators from "./components/ButtonComponents/OperatorButtons/Operators.js"
import Specials from "./components/ButtonComponents/SpecialButtons/Specials.js"

// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from './components/DisplayComponents/Display.js'

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  const [displayValue, setDisplayValue] = useState(" ")

  const addNumber = (number) => {
    setDisplayValue(displayValue => displayValue + number) 
  }

  const addOperator = (operator) => {
    if (operator === '='){
      setDisplayValue(displayValue => eval(displayValue));
    }else{
      setDisplayValue(displayValue => displayValue + " " + operator + " ")
    }
  }

  const addSpecial = (special) => {
    console.log(special);
    if (special === "C"){ 
      setDisplayValue(" ")
    }

    if (special === "+/-"){
      if (displayValue > 0){
        setDisplayValue(-Math.abs(displayValue))}
    }  
      if (displayValue < 0){
        setDisplayValue(Math.abs(displayValue))
    }


    if (special === "%"){
      setDisplayValue(displayValue / 100)
    }
  }

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display number = {displayValue} />      
      <div className = 'button-container'>
        <div className = 'left-container'>
          <Specials addSpecial = {addSpecial} />
          <Numbers addNumber = {addNumber}  />
        </div>  
        <div className = 'right-container'>
          <Operators addOperator={addOperator} />
        </div>
      </div>
      </div>
    </div>
  );
}
 
export default App;

//known bugs - if you prefix a number with 0 when trying to perform an operation, it will throw an error.scss
//ex - 085.9 + 2856 = ERROR. It doesn't know to ignore the first 0 yet.

//use flex-wrap to get the numbers 

//justify-content: space-between;