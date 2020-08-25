import React, { useState } from "react";
import ReactDOM from "react-dom";
import style from "./registration.module.css";
import Components from "../../../components/components";
import Axios from "axios";

const Registration = (props) => {
  let modal = document.querySelector(".app-wraper");
  let [newUser, setNewUser] = useState({});

  let saveUser = () => {
    Axios.post("https://localhost:44373/api/user/register", newUser)
      .then((response) => {
        if (response.status == 200) {
          props.onClick();
          props.setMessage("User has been created");
        }
      })
      .catch(() => {
        props.setMessage("Not all fields are filled in correctly");
      });

    props.showMessage();
  };

  return ReactDOM.createPortal(
    <div className={style.wrap} onClick={props.onClick}>
      <div className={style.form} onClick={(e) => e.stopPropagation()}>
        <Components.Close onClick={props.onClick} />
        <h2>Registration</h2>
        <div className={style.formGrid}>
          <div className={style.leftPart}>
            <Components.Input
              text={"Enter your username"}
              onChange={(p) => setNewUser({ ...newUser, username: p })}
              value={newUser.username}
              required
            />
            <Components.Input
              text={"Enter your email"}
              onChange={(p) => setNewUser({ ...newUser, email: p })}
              value={newUser.email}
              required
            />
            <Components.Input
              text={"Enter your firstName"}
              onChange={(p) => setNewUser({ ...newUser, firstName: p })}
              value={newUser.firstName}
              required
            />
          </div>
          <div className={style.rightPart}>
            <Components.Input
              text={"Enter your lastName"}
              onChange={(p) => setNewUser({ ...newUser, lastName: p })}
              value={newUser.lastName}
              required
            />
            <Components.Input
              text={"Enter your password"}
              type="password"
              onChange={(p) => setNewUser({ ...newUser, password: p })}
              value={newUser.password}
              required
            />

            <Components.Input
              text={"Confirm password"}
              type="password"
              onChange={(p) => setNewUser({ ...newUser, confirm: p })}
              value={newUser.confirm}
              required
            />
          </div>
        </div>
        <div className={style.submit}>
          <Components.Button text={"Save"} onSubmit={saveUser} />
        </div>
      </div>
    </div>,
    modal
  );
};

export default Registration;
