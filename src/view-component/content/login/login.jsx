import React, { useState } from "react";
import style from "./login.module.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Components from "../../../components/components";
import { loadUsers } from "../../../service/saveUserData";
import { setCurrentUser, logIn } from "../../../actions/users-actions";

const Login = (props) => {
  let [user, getUserData] = useState({});
  let [showRegistration, changeShow] = useState(false);
  let [showWarning, toggleWarning] = useState(false);

  let isAutorized = props.isAutorized;
  let users = loadUsers() || [];

  const logIn = () => {
    let currentUser =
      users.find((x) => x.login == user.login && x.password == user.password) ||
      null;
    if (currentUser != null) {
      props.logIn(currentUser.userId);
      props.setCurrentUser(currentUser);
    } else {
      toggleWarning((showWarning = true));
    }
  };

  if (isAutorized) {
    return <Redirect to="/profile" />;
  } else {
    return (
      <div className={style.loggedin}>
        {showRegistration ? (
          <Components.Registration
            onClick={() => changeShow((showRegistration = false))}
          />
        ) : null}
        <h2>Login</h2>
        <Components.Input
          type="text"
          text={"Your Name"}
          onChange={(p) => {
            getUserData({ ...user, login: p });
            toggleWarning((showWarning = false));
          }}
          value={user.login}
          required
        />
        <Components.Input
          required={user.password == ""}
          type="password"
          text={"Your pass"}
          onChange={(p) => {
            getUserData({ ...user, password: p });
            toggleWarning((showWarning = false));
          }}
          value={user.password}
          required
        />
        {showWarning == true ? (
          <Components.Warning text="Login or password is incorrect" />
        ) : null}
        <Components.Button text="Log in" onSubmit={logIn} />{" "}
        <p
          className={style.toReg}
          onClick={() => changeShow((showRegistration = true))}
        >
          Or click to: Registration
        </p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    isAutorized: state.users.isAutorized,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (userId) => dispatch(logIn(userId)),
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
