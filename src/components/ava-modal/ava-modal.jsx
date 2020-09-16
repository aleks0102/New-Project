import React from "react";
import ReactDOM from "react-dom";
import style from "./ava-modal.module.css";
import Components from "../components";
import { saveProfile, catchError } from "../../service/requests";

const AvaModal = (props) => {
  const modal = document.querySelector(".app-wraper");
  const [profile, setProfile] = React.useState(props.profile);

  const saveAvatar = () => {
    saveProfile(profile)
      .then((response) => {
        props.setResponseMessage(true, response.data.message);
        props.setCurrentProfile();
      })
      .catch((err) => {
        catchError(err, props.setResponseMessage, props.endSession);
      });
    props.setCurrentProfile();
  };

  const deleteAvatar = () => {
    setProfile({ ...profile, photo: null });
  };

  return ReactDOM.createPortal(
    <div className={style.modalBg} onClick={props.onClick}>
      <div className={style.modalWin} onClick={(e) => e.stopPropagation()}>
        <Components.Close onClick={props.onClick} />
        <Components.Ava avatar={profile.photo} />
        <Components.InputFiles
          onChange={(e) => {
            setProfile({ ...profile, photo: e });
          }}
          setResponseMessage={props.setResponseMessage}
        />
        <Components.SmallButton onClick={saveAvatar} text="save" />
        <Components.SmallButton onClick={deleteAvatar} text="delete" />
      </div>
    </div>,
    modal
  );
};

export default AvaModal;
