import React from "react";

const OperatorButton = (props) => {
  console.log(props)
  return (
    <button className="operator-button" onClick = {() => props.addOperator(props.operator.value)}>
      {props.operator.char}
    </button>
  );
};

export default OperatorButton