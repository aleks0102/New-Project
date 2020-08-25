import React, { useState } from "react";
import style from "./login.module.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Components from "../../../components/components";
import { logIn } from "../../../actions/users-actions";
import Axios from "axios";

const Login = (props) => {
  let [user, getUserData] = useState({});
  let [showRegistration, changeShow] = useState(false);
  let [showMessage, toggleMessage] = useState(false);
  let [responseMessage, setResponseMessage] = useState(null);
  let isAutorized = props.isAutorized;

  const logIn = () => {
    const hostname = "https://localhost:44373";

    Axios.post(`${hostname}/api/user/authenticate`, user)
      .then((response) => {
        console.log(response.data);
        props.logIn(response.data);
      })
      .catch(() => {
        setResponseMessage(
          (responseMessage = "Login or password is incorrect")
        );
        toggleMessage((showMessage = true));
      });
  };

  if (isAutorized) {
    return <Redirect to="/profile" />;
  } else {
    return (
      <div className={style.loggedin}>
        {showRegistration ? (
          <Components.Registration
            showMessage={() => toggleMessage((showMessage = true))}
            setMessage={(m) => setResponseMessage((responseMessage = m))}
            onClick={() => changeShow((showRegistration = false))}
          />
        ) : null}
        {showMessage ? (
          <Components.MessageModal
            onClick={() => toggleMessage((showMessage = false))}
            text={responseMessage}
          />
        ) : null}
        <h2>Login</h2>
        <Components.Input
          type="text"
          text={"Your Name"}
          onChange={(p) => {
            getUserData({ ...user, username: p });
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
          }}
          value={user.password}
          required
        />
        <Components.Button text="Log in" onSubmit={logIn} />
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
    logIn: (data) => dispatch(logIn(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
