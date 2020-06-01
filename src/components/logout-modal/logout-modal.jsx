import React from "react";
import ReactDOM from "react-dom";
import style from "./news-modal.module.css";

export const LogOutModal = (props) => {
  let modalNew = document.querySelector(".app-wraper");

  return ReactDOM.createPortal(
    <div className={style.modalBg} onClick={props.onClick}>
      <div
        className={style.modalWin}
        onClick={(event) => event.stopPropagation()}
      >
        <p>{props.body}</p>
        <button onClick={props.onSubmit}>Yes</button>
        <button onClick={props.onClick}>No</button>
      </div>
    </div>,
    modalNew
  );
};
