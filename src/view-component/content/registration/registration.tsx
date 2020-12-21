import * as React from "react";
import "./registration.css";
import Components from "../../../components/components";
import { registrate } from "../../../service/requests";

interface NewUser {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirm: string;
}

const Registration = () => {
  const [newUser, setNewUser] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirm: "",
  } as NewUser);

  const [responseMessage, setResponseMessage] = React.useState("");
  const [showMessage, toggleShow] = React.useState(false);

  const saveUser = () => {
    registrate(newUser)
      .then((response: any) => {
        console.log(typeof response);
        setResponseMessage(response.data.message);
      })
      .catch((err: any) => {
        setResponseMessage(
          err.response.data.title || err.response.data.message
        );
      });
    toggleShow(true);
  };
  return (
    <div className="form">
      {showMessage && (
        <Components.ResponseMessage
          text={responseMessage}
          closeWindow={() => toggleShow(false)}
        />
      )}
      <h2>Registration</h2>
      <div className="formGrid">
        <div className="leftPart">
          <Components.Input
            text={"Enter your username"}
            onChange={(p: string) => setNewUser({ ...newUser, username: p })}
            value={newUser.username}
            type="text"
          />
          <Components.Input
            text={"Enter your email"}
            onChange={(p: string) => setNewUser({ ...newUser, email: p })}
            value={newUser.email}
            type="text"
          />
          <Components.Input
            text={"Enter your firstName"}
            onChange={(p: string) => setNewUser({ ...newUser, firstName: p })}
            value={newUser.firstName}
            type="text"
          />
        </div>
        <div className="rightPart">
          <Components.Input
            text={"Enter your lastName"}
            onChange={(p: string) => setNewUser({ ...newUser, lastName: p })}
            value={newUser.lastName}
            type="text"
          />
          <Components.Input
            text={"Enter your password"}
            type="password"
            onChange={(p: string) => setNewUser({ ...newUser, password: p })}
            value={newUser.password}
          />

          <Components.Input
            text={"Confirm password"}
            type="password"
            onChange={(p: string) => setNewUser({ ...newUser, confirm: p })}
            value={newUser.confirm}
          />
        </div>
      </div>
      <div className="submit">
        <Components.Button text={"Save"} onClick={saveUser} />
      </div>
    </div>
  );
};

export default Registration;
