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

const EndSessionModal: React.FC<EndSessionProps> = ({
  showEndSession,
  logIn,
  reload,
}) => {
  const [user, setUserData] = React.useState({
    username: loadUserName(),
    password: "",
  });

  const confirmPass = () => {
    login(user)
      .then((response: any) => {
        logIn(true);
        if (reload) window.location.reload();
        saveStatus(
          true,
          response.data.token,
          response.data.profile.id,
          response.data.username
        );
        showEndSession(false);
      })
      .catch(() => {
        closeWindow();
      });
  };
  const closeWindow = () => {
    showEndSession(false);
    logIn(false);
    saveStatus(false, null, null, null);
  };

  return (
    <Components.ModalWindow closeWindow={closeWindow}>
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
    </Components.ModalWindow>
  );
};

export default EndSessionModal;
