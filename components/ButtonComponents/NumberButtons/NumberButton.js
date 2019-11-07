import React from "react";

const NumberButton = (props) => { 
  console.log('NumberButton', props)
  return ( 
  <button className= 'numbers-button' onClick = {() => props.addNumber(props.text)}>
    {props.text}
  </button>
  );
};

export default NumberButton;




//jsx fragments - look this up.