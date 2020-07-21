import React, { useState } from "react";
import style from "./messages.module.css";
import { connect } from "react-redux";
import Components from "../../../components/components";
import { Redirect } from "react-router-dom";
import { addMessage } from "../../../actions/messages-actions";

const Messages = (props) => {
  let messages = props.messages;
  let [newMessage, getnewMessage] = useState({});
  let isAutorized = props.isAutorized;

  const addMessage = () => {
    if (newMessage.user != null && newMessage.user != "") {
      props.addMessage(newMessage);
      getnewMessage({ ...newMessage, user: " ", text: " " });
    }
  };

  if (isAutorized) {
    return (
      <div className={style.messages}>
        <div className={style.addMessage}>
          <h3>Add new message:</h3>
          <Components.Input
            onChange={(p) => getnewMessage({ ...newMessage, user: p })}
            text={"user"}
            value={newMessage.user}
            required
          />
          <Components.TextArea
            onChange={(p) => getnewMessage({ ...newMessage, text: p })}
            text={"message text"}
            value={newMessage.text}
          />
          <Components.Button text={"Add"} onSubmit={addMessage} />
        </div>
        <div className={style.myMessages}>
          <h3>My messages:</h3>
          {messages.map((message) => (
            <div key={message.id}>
              <Components.MessageElement message={message} />
            </div>
          ))}
        </div>
      </div>
    );
  } else return <Redirect to="/login" />;
};

const mapStateToProps = (state) => {
  return {
    messages: state.messages.messages,
    isAutorized: state.users.isAutorized,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (message) => dispatch(addMessage(message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
