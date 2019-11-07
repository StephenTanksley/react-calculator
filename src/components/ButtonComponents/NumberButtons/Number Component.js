import React, { useState } from "react";
// import NumberButton from './NumberButton.js'
//import any components needed

// import { numbers } from '../../../data.js'
//Import your array data to from the provided data file
//I can use this to explain the concept quickly. Don't have to use the import for the video. "We could use a import to do this if we had data "


//THIS IS THE FILE I MAKE THE YOUTUBE VIDEO ABOUT


const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [buttonNumbers, setButtonNumbers] = useState(numbers);
  console.log('Numbers', props)

  return (
    <div>
      {buttonNumbers.map(number => {
      return <button className= 'numbers-button' onClick = {() => props.addNumber(number)}>
      {number}
    </button>
      })}
    </div> 
  );
};

export default Numbers;