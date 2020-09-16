import React from "react";
import style from "./textarea.module.css";
import { validateField } from "../../service/serviceFunctions";

const TextArea = (props) => {
  const onChange = (e) => {
    validateField(e, props.required, style);
    props.onChange(e.target.value);
  };

  return (
    <div>
      {props.text && <p>{props.text}</p>}
      <textarea
        name={props.name}
        value={props.value}
        type={props.type}
        onChange={onChange}
        maxLength={props.maxLength}
        onClick={(e) => validateField(e, props.required, style)}
      ></textarea>
    </div>
  );
};

export default TextArea;
