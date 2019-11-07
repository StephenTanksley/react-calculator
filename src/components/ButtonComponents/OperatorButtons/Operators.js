import React from "react";
import OperatorButton from './OperatorButton.js'
import { operators } from '../../../data.js'

//importing all the necessary components up here.

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  // const [operatorState, setOperatorState] = useState(operators);

  return (
    <div className = 'operator-container'>
      
      {operators.map(operator => <OperatorButton operator = {operator} 
                                                 key={operator.char} 
                                                 addOperator = {props.addOperator}
                                                 className = {operator}/>)}

    </div>
  );
};

export default Operators