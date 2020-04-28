import React from "react";
import style from "./main-textarea.module.css";

const MainTextArea = (props) => {
  return (
    <div>
      <legend>Input {props.text}:</legend>
      <textarea
        name={props.name}
        value={props.value}
        type={props.type}
        onChange={props.onChange}
        maxLength={props.maxLength}
        ref={props.refs}
      ></textarea>
    </div>
  );
};

export default MainTextArea;
