import React from "react";
import style from "./input.module.css";

const Input = (props) => {
  let onChange = (e) => {
    let p = e.target.value;
    props.onChange(p);
  };

  return (
    <div>
      <label>{props.text}</label>
      {props.required == true && (props.value == "" || props.value == null) ? (
        <span className={style.valid}>
          {props.validate ? props.validate : "Required"}
        </span>
      ) : null}
      <input
        name={props.name}
        type={props.type}
        onChange={onChange}
        maxLength={props.maxLength}
        value={props.value}
      />
    </div>
  );
};

export default Input;
