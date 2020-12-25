import * as React from "react";
import "./logout-modal.css";
import Components from "../components";
import { saveStatus } from "../../service/saveUserData";

type LogOutModalProps = {
  changeShow: Function;
  logOut: Function;
};

export const LogOutModal: React.FC<LogOutModalProps> = ({
  changeShow,
  logOut,
}) => {
  return (
    <Components.ModalWindow closeWindow={changeShow}>
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
    </Components.ModalWindow>
  );
};
