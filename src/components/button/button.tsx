import * as React from 'react'
import   "./button.css";

const Button = (props:any) => {
  return (
    <button className='but' onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
