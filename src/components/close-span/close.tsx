import * as React from 'react'
import   "./close.css";

export const Close = (props:any) => {
  return (
    <span className='close' onClick={props.onClick}>
      ×
    </span>
  );
};
