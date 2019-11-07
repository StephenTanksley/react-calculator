import React from "react";

const SpecialButton = (props) => { //we're importing props into this const.
  console.log("special", props)
  return ( //we're returning an element using those props.
    // <button className = 'special-button' onClick = {() => props.addSpecial(props.text)}> 
    <button className = 'special-button' onClick = {() => props.addSpecial(props.text)}>
    {props.text}
    </button>
  );
};

export default SpecialButton