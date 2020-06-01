import React from "react";
import style from "./main-button.module.css";

const MainButton = (props) => {
  return (
    <button className={style.but} onClick={props.onSubmit}>
      {props.text}
    </button>
  );
};

export default MainButton;
