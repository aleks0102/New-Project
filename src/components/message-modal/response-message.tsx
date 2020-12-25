import * as React from "react";
import * as ReactDOM from "react-dom";
import "./message-modal.css";

type ResponseMessageProps = {
  closeWindow: Function;
  text: string;
};

const ResponseMessage: React.FC<ResponseMessageProps> = ({
  closeWindow,
  text,
}) => {
  const message: HTMLElement = document.querySelector(".app-wraper");

  React.useEffect(() => {
    setTimeout(closeWindow, 3000);
  }, []);

  return ReactDOM.createPortal(
    <div className="wrap" onClick={() => closeWindow()}>
      <p>{text}</p>
    </div>,
    message
  );
};

export default ResponseMessage;
