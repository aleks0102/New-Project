import React from "react";
import style from "./login.module.css";
import MainButton from "../../../components/main-button/main-button";
import { Redirect } from "react-router-dom";
import MainInput from "../../../components/main-input/main-input";
import { connect } from "react-redux";
import { loggedInAC } from "../../../actions/login-action";

const Login = (props) => {
  let login = props.login;
  let password = props.password;
  let LoginValue = React.createRef();
  let PassValue = React.createRef();

  const loggedIn = () => {
    let newLogin = LoginValue.current.value;
    let newPassword = PassValue.current.value;
    props.logIn(newLogin, newPassword);
  };

  if (login === "Admin" && password === "12345") {
    return <Redirect to="/profile" />;
  } else {
    return (
      <div className={style.loggedin}>
        <h2>Logged in</h2>
        <MainInput
          name="login"
          type="text"
          text={"Your Name"}
          refs={LoginValue}
        />
        <MainInput
          name="pass"
          type="password"
          text={"Your pass"}
          refs={PassValue}
        />
        <MainButton text="LoggedIn" onSubmit={loggedIn} />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    login: state.loginPage.user.login,
    password: state.loginPage.user.password,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (login, password) => dispatch(loggedInAC(login, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
