import React from "react";
const MessageElement = (props) => {
  const message = props.message;
  return (
    <div>
      <h2>{message.user}</h2>
      <p>{message.message}</p>
      <span>{message.date}</span>
    </div>
  );
};

export default MessageElement;
