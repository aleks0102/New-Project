import * as React from "react";
import * as ReactDOM from "react-dom";
import "./end-session-modal.module.css";
import Components from "../components";
import { login } from "../../service/requests";
import { loadUserName, saveStatus } from "../../service/saveUserData";

type EndSessionProps = {
  showEndSession: Function;
  logIn: Function;
  reload: boolean;
};

const EndSessionModal = (props: EndSessionProps) => {
  const modalNew = document.querySelector(".app-wraper") as HTMLElement;
  const [user, setUserData] = React.useState({
    username: loadUserName(),
    password: "",
  });

  const confirmPass = () => {
    console.log("work");

    login(user)
      .then((response: any) => {
        console.log(response);
        props.logIn(true);
        if (props.reload) window.location.reload();
        saveStatus(
          true,
          response.data.token,
          response.data.profile.id,
          response.data.username
        );
        props.showEndSession(false);
      })
      .catch(() => {
        closeWindow();
      });
  };
  const closeWindow = () => {
    props.showEndSession(false);
    props.logIn(false);
    saveStatus(false, null, null, null);
  };

  return ReactDOM.createPortal(
    <div className="modalBg" onClick={closeWindow}>
      <div className="modalWin" onClick={(e) => e.stopPropagation()}>
        <Components.Close onClick={closeWindow} />
        <div className="logOut">
          <h2>Session is over. Please, confirm password</h2>
          <h3>{user.username}</h3>
          <Components.Input
            type="password"
            text={"Your pass"}
            onChange={(p: any) => {
              setUserData({ ...user, password: p });
            }}
            value={user.password}
          />
          <Components.Button text="Log in" onClick={confirmPass} />
        </div>
      </div>
    </div>,
    modalNew
  );
};

export default EndSessionModal;
