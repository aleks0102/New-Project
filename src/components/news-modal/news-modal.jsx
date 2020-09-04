import React from "react";
import ReactDOM from "react-dom";
import style from "./news-modal.module.css";
import Components from "../components";

export const NewsModal = (props) => {
  const modalNew = document.querySelector(".app-wraper");
  return ReactDOM.createPortal(
    <div className={style.modalBg} onClick={props.onClick}>
      <div className={style.modalWin} onClick={(e) => e.stopPropagation()}>
        <Components.Close onClick={props.onClick} />
        <h2> {props.title}</h2>
        <p>{props.body}</p>
      </div>
    </div>,
    modalNew
  );
};
