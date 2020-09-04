import React from "react";
import ReactDOM from "react-dom";
import style from "./logout-modal.module.css";
import Components from "../components";

export const LogOutModal = (props) => {
  const modalNew = document.querySelector(".app-wraper");

  return ReactDOM.createPortal(
    <div className={style.modalBg} onClick={() => props.changeShow(false)}>
      <div className={style.modalWin} onClick={(e) => e.stopPropagation()}>
        <Components.Close onClick={() => props.changeShow(false)} />
        <div className={style.logOut}>
          <p>Do you want to log out?</p>
          <Components.SmallButton
            onClick={() => {
              props.changeShow(false);
              props.logOut();
            }}
            text={"Yes"}
          />
          <Components.SmallButton
            onClick={() => props.changeShow(false)}
            text={"No"}
          />
        </div>
      </div>
    </div>,
    modalNew
  );
};
