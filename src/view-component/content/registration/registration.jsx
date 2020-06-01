import React, { useState } from "react";
import ReactDOM from "react-dom";

import style from "./registration.module.css";
import { connect } from "react-redux";
import Components from "../../../components/components";
import { registration } from "../../../actions/registration-actions";

const Registration = (props) => {
  let modal = document.querySelector(".app-wraper");
  let [login, getLogin] = useState(null);
  let [password, getPassword] = useState(null);
  let [passСonfirm, getPasswordConfirm] = useState(null);

  let newUser = {
    login,
    password,
  };

  let registration = () => {
    if (password === passСonfirm && login != null && password != null) {
      props.registration(newUser);
      props.onClick();
    } else alert("Passwords do not match or some fields are empty");
  };

  return ReactDOM.createPortal(
    <div className={style.wrap} onClick={props.onClick}>
      <div className={style.form} onClick={(e) => e.stopPropagation()}>
        <h2>Registration</h2>
        <Components.MainInput
          text={"Enter your login"}
          required
          onChange={(e) => getLogin((login = e.target.value))}
        />
        <Components.MainInput
          text={"Enter your password"}
          type="password"
          required
          onChange={(e) => getPassword((password = e.target.value))}
        />
        <Components.MainInput
          text={"Submit password"}
          type="password"
          required
          onChange={(e) => getPasswordConfirm((passСonfirm = e.target.value))}
        />
        <Components.MainButton text={"Save"} onSubmit={registration} />
      </div>
    </div>,
    modal
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    registration: (user) => dispatch(registration(user)),
  };
};

export default connect(null, mapDispatchToProps)(Registration);
