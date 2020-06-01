import React from "react";
import style from "./main-input.module.css";

const MainInput = (props) => {
  return (
    <div>
      <label>
        {props.labelText ? props.labelText + ": " + props.text : props.text}
      </label>
      <input
        required=""
        name={props.name}
        defaultValue={props.defaultValue}
        type={props.type}
        onChange={props.onChange}
        maxLength={props.maxLength}
        value={props.value}
      />
    </div>
  );
};

export default MainInput;
