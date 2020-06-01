import React from "react";
import style from "./main-textarea.module.css";

const MainTextArea = (props) => {
  return (
    <div>
      <legend>{props.text}</legend>
      <textarea
        name={props.name}
        value={props.value}
        type={props.type}
        onChange={props.onChange}
        maxLength={props.maxLength}
        defaultValue={props.defaultValue}
      ></textarea>
    </div>
  );
};

export default MainTextArea;
