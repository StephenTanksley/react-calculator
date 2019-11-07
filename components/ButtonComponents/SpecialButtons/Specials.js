import React from "react";
import { specials } from '../../../data.js'
import SpecialButton from './SpecialButton.js'

//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  // const [specialButton, setSpecialButton] = useState()

  return (
    <div className = 'special-container '>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

       {specials.map(special => <SpecialButton text = {special} 
                                               key={special}
                                               addSpecial={props.addSpecial}
      /> )}
    </div>
  );
};

export default Specials