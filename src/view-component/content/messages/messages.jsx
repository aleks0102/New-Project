import React, { useState } from "react";
import style from "./messages.module.css";
import { addMessageAC } from "../../../actions/dialog-actions";
import { connect } from "react-redux";
import AllComponents from "../../../components/components";
import { Redirect } from "react-router-dom";

const Messages = (props) => {
  let messages = props.messages;
  let [user, getUser] = useState();
  let [text, getText] = useState();
  let isAutorized = props.isAutorized;

  const addMessage = () => {
    props.addMessage(user, text);
    getUser((user = " "));
    getText((text = " "));
  };

  if (isAutorized == true) {
    return (
      <div className={style.messages}>
        <div className={style.addMessage}>
          <h3>Add new message:</h3>
          <AllComponents.MainInput
            onChange={(e) => getUser((user = e.target.value))}
            text={"user"}
            value={user}
          />
          <AllComponents.MainTextArea
            onChange={(e) => getText((text = e.target.value))}
            text={"message text"}
            value={text}
          />
          <AllComponents.MainButton text={"Add"} onSubmit={addMessage} />
        </div>
        <div className={style.myMessages}>
          <h3>My messages:</h3>
          {messages.map((message) => (
            <div key={message.id}>
              <AllComponents.MessageElement message={message} />
            </div>
          ))}
        </div>
      </div>
    );
  } else return <Redirect to="/login" />;
};

const mapStateToProps = (state) => {
  return {
    messages: state.dialogPage.messages,
    isAutorized: state.userData.isAutorized,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (user, text) => dispatch(addMessageAC(user, text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
