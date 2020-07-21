import React from "react";
import style from "./warning.module.css";

export const Warning = (props) => {
  return (
    <div className={style.warning}>
      {props.text}
    </div>
  );
};
