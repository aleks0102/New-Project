import React from "react";
import style from "./messages.module.css";
import MessageElement from "./messages.element";
import MainTextArea from "../../../components/main-textarea/textarea";
import MainButton from "../../../components/main-button/main-button";
import { addMessageAC } from "../../../actions/dialog-actions";
import { connect } from "react-redux";
import MainInput from "../../../components/main-input/main-input";

const Messages = (props) => {
  let messages = props.messages;
  let newMessageElement = React.createRef();
  let newUser = React.createRef();

  const addMessage = () => {
    let user = newUser.current.value;
    let text = newMessageElement.current.value;
    props.addMessage(user, text);
  };

  return (
    <div className={style.messages}>
      <div className={style.addMessage}>
        <h3>Add new message:</h3>
        <MainInput refs={newUser} text={"user"} />
        <MainTextArea refs={newMessageElement} text={"message text"} />
        <MainButton text={"Add"} onSubmit={addMessage} />
      </div>
      <div className={style.myMessages}>
        <h3>My messages:</h3>
        <div>
          {messages.map((message) => (
            <div key={message.id}>
              <MessageElement message={message} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    messages: state.dialogPage.messages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (user, text) => dispatch(addMessageAC(user, text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
