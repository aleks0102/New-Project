import React from "react";
import ReactDOM from "react-dom";
import style from "./end-session-modal.module.css";
import Components from "../components";
import { connect } from "react-redux";
import { endSession, logOut, logIn } from "../../actions/users-actions";
import { login } from "../../service/requests";
import { loadUserName } from "../../service/saveUserData";

const EndSessionModal = (props) => {
  const modalNew = document.querySelector(".app-wraper");
  const [user, setUserData] =  React.useState({
    username: loadUserName(),
    password: null,
  });

  const confirmPass = () => {
    login(user)
      .then((response) => {
        if (props.needToReload) window.location.reload(true);
        props.endSession(false);
        props.logIn(response.data);
      })
      .catch(() => {
        closeWindow();
      });
  };

  const closeWindow = () => {
    props.endSession(false);
    props.logOut();
  };

  return ReactDOM.createPortal(
    <div className={style.modalBg} onClick={closeWindow}>
      <div className={style.modalWin} onClick={(e) => e.stopPropagation()}>
        <Components.Close onClick={closeWindow} />
        <div className={style.logOut}>
          <h2>Session is over. Please, confirm password</h2>
          <h3>{user.username}</h3>
          <Components.Input
            type="password"
            text={"Your pass"}
            onChange={(p) => {
              setUserData({ ...user, password: p });
            }}
            value={user.password}
            required
          />
          <Components.Button text="Log in" onClick={confirmPass} />
        </div>
      </div>
    </div>,
    modalNew
  );
};

const mapStateToProps = (state) => {
  return {
    needToReload: state.users.needToReload,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (data) => dispatch(logIn(data)),
    logOut: () => dispatch(logOut()),
    endSession: (value) => dispatch(endSession(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EndSessionModal);
