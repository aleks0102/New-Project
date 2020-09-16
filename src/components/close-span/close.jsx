import React from "react";
import style from "./close.module.css";

export const Close = (props) => {
  return (
    <span className={style.close} onClick={props.onClick}>
      ×
    </span>
  );
};
