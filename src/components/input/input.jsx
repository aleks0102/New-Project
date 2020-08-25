import React from "react";
import style from "./input.module.css";

const Input = (props) => {
  let onChange = (e) => {
    validateField(e);
    let p = e.target.value;
    props.onChange(p);
  };

  let validateField = (e) => {
    if (e.target.value == "" && props.required) {
      e.target.className = style.validate;
    } else e.target.className = null;
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
