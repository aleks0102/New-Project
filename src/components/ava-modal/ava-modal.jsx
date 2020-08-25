import React, { useState } from "react";
import ReactDOM from "react-dom";
import style from "./ava-modal.module.css";
import { connect } from "react-redux";
import Components from "../components";
import Axios from "axios";

const AvaModal = (props) => {
  const hostname = "https://localhost:44373/";

  let modalPost = document.querySelector(".app-wraper");
  let [file, setFile] = useState();
  let currentUser = props.currentUser;
  let changeAvaRequest = (currentUser) => {
    Axios.post(
      `${hostname}api/profile/save?id=${props.currentUserId}`,
      currentUser,
      props.authorization
    ).then((response) => console.log(response));
  };

  const changeAva = () => {
    let reader = new FileReader();
    if (file != null && file.size < 300000) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        let avatar = reader.result;
        changeAvaRequest();
        props.onChange(avatar);
        props.saveUser();
      };
    } else alert("Image not selected or very big");
  };

  const deleteAvatar = () => {
    props.onChange(null);
    props.saveUser();
  };

  return ReactDOM.createPortal(
    <div className={style.modalBg} onClick={props.onClick}>
      <div className={style.modalWin} onClick={(e) => e.stopPropagation()}>
        <Components.Close onClick={props.onClick} />
        <Components.Ava avatar={currentUser.photo} />
        <Components.InputFiles onChange={(p) => setFile((file = p))} />
        <Components.SmallButton onClick={changeAva} text="save" />
        <Components.SmallButton
          onClick={() => deleteAvatar(props.userId)}
          text="delete"
        />
      </div>
    </div>,
    modalPost
  );
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(null, mapDispatchToProps)(AvaModal);
