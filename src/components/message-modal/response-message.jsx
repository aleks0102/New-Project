import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import style from "./message-modal.module.css";

const ResponseMessage = (props) => {
  const message = document.querySelector(".app-wraper");

  useEffect(() => {
    setTimeout(props.onClick, 3000);
  }, []);

  return ReactDOM.createPortal(
    <div className={style.wrap} onClick={props.onClick}>
      <span className={style.close}>×</span>
      <p>{props.text}</p>
    </div>,
    message
  );
};

export default ResponseMessage;
