import React, { useState } from "react";
import ReactDOM from "react-dom";
import style from "./ava-modal.module.css";
import { connect } from "react-redux";
import { changeAvatar, deleteAvatar } from "../../actions/profile-action";
import Components from "../components";

const AvaModal = (props) => {
  let modalPost = document.querySelector(".app-wraper");
  let avatar = props.avatar;
  let [file, setFile] = useState();

  const changeAva = () => {
    let reader = new FileReader();
    if (file != null && file.size < 300000) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        let avatar = reader.result;
        props.changeAva(avatar);
      };
    } else alert("Image not selected or very big");
  };

  const deleteAvatar = () => {
    props.deleteAva();
  };

  return ReactDOM.createPortal(
    <div className={style.modalBg} onClick={props.onClick}>
      <div className={style.modalWin} onClick={(e) => e.stopPropagation()}>
        <Components.Close onClick={props.onClick} />
        <Components.Ava avatar={avatar} />
        <Components.InputFiles onChange={(p) => setFile((file = p))} />
        <Components.SmallButton onClick={changeAva} text="save" />
        <Components.SmallButton onClick={deleteAvatar} text="delete" />
      </div>
    </div>,
    modalPost
  );
};

let mapDispatchToProps = (dispatch) => {
  return {
    changeAva: (avatar) => dispatch(changeAvatar(avatar)),
    deleteAva: () => dispatch(deleteAvatar()),
  };
};

export default connect(null, mapDispatchToProps)(AvaModal);
