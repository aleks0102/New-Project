import React, { useState } from "react";
import ReactDOM from "react-dom";
import style from "./ava-modal.module.css";
import Components from "../components";

const AvaModal = (props) => {
  const modal = document.querySelector(".app-wraper");
  const [file, setFile] = useState(null);

  const changeAva = () => {
    const reader = new FileReader();
    if (file != null && file.size < 300000) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const avatar = reader.result;
        props.onChange(avatar);
        props.changeProfile();
      };
    } else props.setResponseMessage(true, "Image is not selected or very big");
  };

  const deleteAvatar = () => {
    props.changeProfile();
    props.onChange(null);
  };

  return ReactDOM.createPortal(
    <div className={style.modalBg} onClick={props.onClick}>
      <div className={style.modalWin} onClick={(e) => e.stopPropagation()}>
        <Components.Close onClick={props.onClick} />
        <Components.Ava avatar={props.photo} />
        <Components.InputFiles onChange={(p) => setFile(p)} />
        <Components.SmallButton onClick={changeAva} text="save" />
        <Components.SmallButton onClick={() => deleteAvatar()} text="delete" />
      </div>
    </div>,
    modal
  );
};

export default AvaModal;
