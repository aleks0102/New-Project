import * as React from 'react'
import   "./textarea.css";
import { validateField } from "../../service/serviceFunctions";

const TextArea = (props:any) => {
  const onChange = (e:any) => {
    // validateField(e, props.required, style);
    props.onChange(e.target.value);
  };

  return (
    <div>
      {props.text && <p>{props.text}</p>}
      <textarea
        name={props.name}
        value={props.value}
        // type={props.type}
        onChange={onChange}
        maxLength={props.maxLength}
        // onClick={(e) => validateField(e, props.required, style)}
      ></textarea>
    </div>
  );
};

export default TextArea;
