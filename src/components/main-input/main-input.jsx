import React from "react";
import style from "./main-input.module.css";

const MainInput = (props) => {
  return (
    <div>
      <legend>Input {props.text}:</legend>
      <input
        name={props.name}
        value={props.value}
        type={props.type}
        onChange={props.onChange}
        maxLength={props.maxLength}
        ref={props.refs}
      />
    </div>
  );
};

export default MainInput;
