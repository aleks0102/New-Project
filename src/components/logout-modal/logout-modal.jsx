import React from "react";
import ReactDOM from "react-dom";
import style from "./logout-modal.module.css";
import Components from "../components";

export const LogOutModal = (props) => {
  let modalNew = document.querySelector(".app-wraper");

  return ReactDOM.createPortal(
    <div className={style.modalBg} onClick={props.onClick}>
      <div className={style.modalWin} onClick={(e) => e.stopPropagation()}>
        <Components.Close onClick={props.onClick} />
        <div className={style.logOut}>
          <p>{props.body}</p>
          <Components.SmallButton onClick={props.onSubmit} text={"Yes"} />
          <Components.SmallButton onClick={props.onClick} text={"No"} />
        </div>
      </div>
    </div>,
    modalNew
  );
};
