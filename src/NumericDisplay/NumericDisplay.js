import React from 'react';
import "./NumericDisplay.css";
const NumericDisplay = ({byte, hex, leading}) => {
  let bits = [...byte];
  bits.reverse();
  let decimalVal = bits.reduce((acc, cur, idx) =>  {
    return acc + (Math.pow(2, idx) * cur);
  });

  if(hex === true) {
    decimalVal = decimalVal.toString(16).toUpperCase();
  }

  if(typeof leading !== 'undefined') {
    decimalVal = `${leading}: ${decimalVal}`;
  }
  
  return (
    <div className="numeric-display">
      <h2>
        {decimalVal}
      </h2>
    </div>
  );
}

export default NumericDisplay;