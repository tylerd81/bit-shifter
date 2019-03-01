import React from 'react';
import './Bit.css';

const bit = (props) => {
  const {value, bitClicked} = props;
  let classes = "bit ";

  if(value === 1) {
    classes += "on";
  } else {
    classes += "off";
  }

  return(
    <div onClick={bitClicked} className={classes}>      
    </div>
  );
}

export default bit;