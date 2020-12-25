import * as React from "react";
import * as ReactDOM from "react-dom";
import "./modal-window.css";

interface ModalWindowProps {
  closeWindow: Function;
}

const ModalWindow: React.FC<ModalWindowProps> = ({ children, closeWindow }) => {
  const modalNew: HTMLElement = document.querySelector(".app-wraper");
  return ReactDOM.createPortal(
    <div className="modalBg" onClick={() => closeWindow()}>
      <div className="modalWin" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={() => closeWindow()}>
          ×
        </span>
        <div>{children}</div>
      </div>
    </div>,
    modalNew
  );
};

export default ModalWindow;
