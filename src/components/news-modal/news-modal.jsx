import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import style from "./news-modal.module.css";

export const NewsModal = (props) => {
  let modalNew = document.querySelector(".app-wraper");

  return ReactDOM.createPortal(
    <div className={style.modalBg} onClick={props.onClick}>
      <div
        className={style.modalWin}
        onClick={(event) => event.stopPropagation()}
      >
        <h2> {props.title}</h2>
        <p>{props.body}</p>
        <button onClick={props.onClick}>Close</button>
      </div>
    </div>,
    modalNew
  );
};
