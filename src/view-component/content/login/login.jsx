import React, { useState } from "react";
import style from "./login.module.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logIn } from "../../../actions/login-action";
import Components from "../../../components/components";
import { loadUsers } from "../../../service/setUsers";

const Login = (props) => {
  let isAutorized = props.isAutorized;
  let [user, getUserData] = useState({});
  let [showRegistration, changeShow] = useState(false);

  let users = loadUsers() || [] ;
  const logIn = () => {
    
    let currentUser =
      users.find((x) => x.login == user.login && x.password == user.password) ||
      null;
    if (currentUser != null) {
      props.logIn();
    } 
  };

  // if (isAutorized == true) {
  //   return <Redirect to="/profile" />;
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
          required
        />
        <Components.MainInput
          required={user.password == ""}
          type="password"
          text={"Your pass"}
          onChange={(p) => getUserData({ ...user, password: p })}
          value={user.password}
          required
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
// };

const mapStateToProps = (state) => {
  return {
    isAutorized: state.authData.isAutorized,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (validUser) => dispatch(logIn(validUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
