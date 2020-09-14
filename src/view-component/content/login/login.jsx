import React from "react";
import style from "./login.module.css";
import { Redirect, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Components from "../../../components/components";
import { logIn, setResponseMessage } from "../../../actions/users-actions";
import { login, catchError } from "../../../service/requests";

const Login = (props) => {
  const [user, getUserData] = React.useState({ username: null, password: null });
  if (props.isAuthorized) return <Redirect to="/profile" />;

  const onLogin = () => {
    login(user, props.logIn)
      .then((response) => {
        props.logIn(response.data);
      })
      .catch((err) => {
        catchError(err, props.setResponseMessage);
      });
  };

  return (
    <div className={style.login}>
      <div className={style.formBox}>
        <h2>Login</h2>
        <Components.Input
          text={"Username"}
          onChange={(p) => {
            getUserData({ ...user, username: p });
          }}
          value={user.login}
          required
        />
        <Components.Input
          type="password"
          text={"Password"}
          onChange={(p) => {
            getUserData({ ...user, password: p });
          }}
          value={user.password}
          required
        />
        <Components.Button text="Log in" onClick={onLogin} />
      </div>
      <NavLink className={style.toReg} to="/registration">
        To registration
      </NavLink>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthorized: state.users.isAuthorized,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (data) => dispatch(logIn(data)),
    setResponseMessage: (value, text) =>
      dispatch(setResponseMessage(value, text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
