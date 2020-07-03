import React, { useState } from "react";
import style from "./messages.module.css";
import { connect } from "react-redux";
import AllComponents from "../../../components/components";
import { Redirect } from "react-router-dom";
import { addMessage } from "../../../actions/messages-actions";

const Messages = (props) => {
  let messages = props.messages;
  let [newMessage, getnewMessage] = useState({});
  // let isAutorized = props.isAutorized;

  const addMessage = () => {
    props.addMessage(newMessage);
    getnewMessage({ ...newMessage, user: " ", text: " " });
  };

  // if (isAutorized == true) {
  return (
    <div className={style.messages}>
      <div className={style.addMessage}>
        <h3>Add new message:</h3>
        <AllComponents.MainInput
          onChange={(p) => getnewMessage({ ...newMessage, user: p })}
          text={"user"}
          value={newMessage.user}
          required
        />
        <AllComponents.MainTextArea
          onChange={(p) => getnewMessage({ ...newMessage, text: p })}
          text={"message text"}
          value={newMessage.text}
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
  // } else return <Redirect to="/login" />;
};

const mapStateToProps = (state) => {
  return {
    messages: state.messagesPage.messages,
    isAutorized: state.authData.isAutorized,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (message) => dispatch(addMessage(message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
