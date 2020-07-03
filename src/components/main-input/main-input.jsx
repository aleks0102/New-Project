import React, { useState } from "react";
import style from "./main-input.module.css";

const MainInput = (props) => {
  let onChange = (e) => {
    let p = e.target.value;
    props.onChange(p);
  };

  return (
    <div>
      <label>{props.text}</label>
      {props.required == true && (props.value == "" || props.value == null) ? (
        <span className={style.valid}>Required</span>
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

export default MainInput;
