import React from "react";
import style from "./small-button.module.css";

const SmallButton = props => {
  return (
    <button className={style.sbutt} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default SmallButton;
