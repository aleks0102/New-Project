import React, { useState } from "react";
import style from "./main-textarea.module.css";

const MainTextArea = (props) => {
  let onChange = (e) => {
    let p = e.target.value;
    props.onChange(p);
  };

  return (
    <div>
      <p>{props.text}</p>
      <textarea
        name={props.name}
        value={props.value}
        type={props.type}
        onChange={onChange}
        maxLength={props.maxLength}
      ></textarea>
    </div>
  );
};

export default MainTextArea;
