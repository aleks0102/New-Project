import React from "react";
import style from "./registration.module.css";
import Components from "../../../components/components";
import { connect } from "react-redux";
import { setResponseMessage } from "../../../actions/users-actions";
import { registrate, catchError } from "../../../service/requests";

const Registration = (props) => {
  const [newUser, setNewUser] = React.useState({
    username: null,
    lastName: null,
    email: null,
    phone: null,
    password: null,
    confirm: null,
  });

  const saveUser = () => {
    registrate(newUser)
      .then((response) => {
        props.setResponseMessage(true, response.data.message);
      })
      .catch((err) => {
        catchError(err, props.setResponseMessage);
      });
  };
  return (
    <div className={style.form} onClick={props.onClick}>
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
        <Components.Button text={"Save"} onClick={saveUser} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setResponseMessage: (value, text) =>
      dispatch(setResponseMessage(value, text)),
  };
};

export default connect(null, mapDispatchToProps)(Registration);
