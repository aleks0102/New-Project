import * as React from "react";
import * as ReactDOM from "react-dom";
import "./logout-modal.css";
import Components from "../components";
import { saveStatus } from "../../service/saveUserData";

type LogOutModalProps = {
  changeShow: Function;
  logOut: Function;
};

export const LogOutModal = ({ changeShow, logOut }: LogOutModalProps) => {
  const modalNew: any = document.querySelector(".app-wraper") as HTMLElement;

  return ReactDOM.createPortal(
    <div className="modalBg" onClick={() => changeShow()}>
      <div className="modalWin" onClick={(e: React.SyntheticEvent) => e.stopPropagation()}>
        <Components.Close onClick={() => changeShow()} />
        <div className="logOut">
          <p>Do you want to log out?</p>
          <Components.SmallButton
            onClick={() => {
              logOut(false);
              saveStatus(false, null, null, null);
              changeShow();
              window.location.reload();
            }}
            text={"Yes"}
          />
          <Components.SmallButton onClick={() => changeShow()} text={"No"} />
        </div>
      </div>
    </div>,
    modalNew
  );
};
