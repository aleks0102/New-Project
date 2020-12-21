import * as React from 'react'
import "./input.css";
import { validateField } from "../../service/serviceFunctions";

interface Props {
  onChange: Function;
  text: string;
  type: string;
  value: string | number | readonly string[] | undefined;
}

const Input = (props: Props) => {
  const onChange = (e: any) => {
    //  validateField(e, props.required, style);
    props.onChange(e.target.value);
  };

  return (
    <div>
      {props.text && <label>{props.text}</label>}
      <input
       // name={props.name}
        type={props.type}
        onChange={onChange}
       // maxLength={props.maxLength}
        value={props.value}
        //onClick={(e) => validateField(e, props.required, style)}
      />
    </div>
  );
};

export default Input;
