import React from "react";
import style from "./button.module.css";

const Button = (props) => {
  return (
    <button className={style.but} onClick={props.onSubmit}>
      {props.text}
    </button>
  );
};

export default Button;
