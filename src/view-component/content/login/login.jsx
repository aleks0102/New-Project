import React, { useState } from "react";
import style from "./login.module.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logIn } from "../../../actions/login-action";
import Components from "../../../components/components";

const Login = (props) => {
  let isAutorized = props.isAutorized;
  let [user, getUserData] = useState(props.user);
  let [showRegistration, changeShow] = useState(false);

  const logIn = () => {
    if (user.login != null && user.password != null) props.logIn(user);
  };

  // if (isAutorized == true) {
  // return <Redirect to="/profile" />;
  // } else {
  return (
    <div className={style.loggedin}>
      {showRegistration ? (
        <Components.Registration
          onClick={() => changeShow((showRegistration = false))}
        />
      ) : null}
      <h2>Login</h2>
      <Components.MainInput
        type="text"
        text={"Your Name"}
        onChange={(p) => getUserData({ ...user, login: p })}
        value={user.login}
        required={user.login == ""}
      />
      <Components.MainInput
        required={user.password == ""}
        type="password"
        text={"Your pass"}
        onChange={(p) => getUserData({ ...user, password: p })}
        value={user.password}
      />
      <Components.MainButton text="Log in" onSubmit={logIn} />{" "}
      <p
        className={style.toReg}
        onClick={() => changeShow((showRegistration = true))}
      >
        Or click to: Registration
      </p>
    </div>
  );
};
// };

const mapStateToProps = (state) => {
  return {
    isAutorized: state.authData.isAutorized,
    user: state.authData.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (login, password) => dispatch(logIn(login, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
