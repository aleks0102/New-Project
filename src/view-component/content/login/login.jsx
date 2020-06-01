import React, { useState } from "react";
import style from "./login.module.css";
import { Redirect, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logIn } from "../../../actions/login-action";
import Components from "../../../components/components";

const Login = (props) => {
  let isAutorized = props.isAutorized;
  let [login, getLogin] = useState();
  let [pass, getPass] = useState();
  let [showRegistration, changeShow] = useState(false);

  const logIn = () => {
    props.logIn(login, pass);
  };

  if (isAutorized == true) {
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
        <Components.MainInput
          name="login"
          type="text"
          text={"Your Name"}
          onChange={(e) => getLogin((login = e.target.value))}
        />
        <Components.MainInput
          name="pass"
          type="password"
          text={"Your pass"}
          onChange={(e) => getPass((pass = e.target.value))}
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
  }
};

const mapStateToProps = (state) => {
  return {
    isAutorized: state.userData.isAutorized,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (login, password) => dispatch(logIn(login, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
