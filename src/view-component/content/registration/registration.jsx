import React, { useState } from "react";
import ReactDOM from "react-dom";

import style from "./registration.module.css";
import { connect } from "react-redux";
import Components from "../../../components/components";
import { registration } from "../../../actions/registration-actions";

const Registration = (props) => {
  let modal = document.querySelector(".app-wraper");
  let [newUser, setNewUser] = useState(0);

  let registration = () => {
    if (
      newUser.password === newUser.passСonfirm &&
      newUser.login != null &&
      newUser.password != null
    ) {
      props.registration(newUser);
      props.onClick();
    } else return null;
  };

  return ReactDOM.createPortal(
    <div className={style.wrap} onClick={props.onClick}>
      <div className={style.form} onClick={(e) => e.stopPropagation()}>
        <Components.Close onClick={props.onClick} />
        <h2>Registration</h2>
        <Components.MainInput
          text={"Enter your login"}
          onChange={(p) => setNewUser({ ...newUser, login: p })}
          value={newUser.login}
          required
        />
        <Components.MainInput
          text={"Enter your password"}
          type="password"
          required={newUser.password == ""}
          onChange={(p) => setNewUser({ ...newUser, password: p })}
          value={newUser.password}
          required
        />
        <Components.MainInput
          text={"Submit password"}
          type="password"
          required={newUser.password == ""}
          onChange={(p) => setNewUser({ ...newUser, passСonfirm: p })}
          value={newUser.passСonfirm}
          required
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
