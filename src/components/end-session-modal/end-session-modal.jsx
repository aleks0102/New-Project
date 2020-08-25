import React, { useState } from "react";
import ReactDOM from "react-dom";
import style from "./end-session-modal.module.css";
import Components from "../components";
import { connect } from "react-redux";
import { endSession, logOut, logIn } from "../../actions/users-actions";
import Axios from "axios";

const EndSessionModal = (props) => {
  let modalNew = document.querySelector(".app-wraper");
  let [user, getUserData] = useState({
    username: props.username,
    password: null,
  });

  let confirmPass = () => {
    const hostname = "https://localhost:44373";

    Axios.post(`${hostname}/api/user/authenticate`, user)
      .then((response) => {
        props.endSession(false);
        props.logIn(response.data);
      })
      .catch(() => {
        closeWindow();
      });
  };

  let closeWindow = () => {
    props.endSession(false);
    props.logOut();
  };

  return ReactDOM.createPortal(
    <div className={style.modalBg} onClick={closeWindow}>
      <div className={style.modalWin} onClick={(e) => e.stopPropagation()}>
        <Components.Close onClick={closeWindow} />
        <div className={style.logOut}>
          <h2>Session is over. Please, confirm password</h2>
          <h3>{props.username}</h3>
          <Components.Input
            type="password"
            text={"Your pass"}
            onChange={(p) => {
              getUserData({ ...user, password: p });
            }}
            value={user.password}
            required
          />
          <Components.Button text="Log in" onSubmit={confirmPass} />
        </div>
      </div>
    </div>,
    modalNew
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.users.username,
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
