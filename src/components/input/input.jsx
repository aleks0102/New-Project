import React from "react";
import style from "./input.module.css";
import { validateField } from "../../service/serviceFunctions";

const Input = (props) => {
  const onChange = (e) => {
    validateField(e, props.required, style);
    props.onChange(e.target.value);
  };

  return (
    <div>
      <label>{props.text}</label>
      <input
        name={props.name}
        type={props.type}
        onChange={onChange}
        maxLength={props.maxLength}
        value={props.value}
        onClick={validateField}
      />
    </div>
  );
};

export default Input;
