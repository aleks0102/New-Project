import * as React from 'react'
import * as ReactDOM from 'react-dom'
import   "./ava-modal.css";
import Components from "../components";
import { saveProfile, catchError } from "../../service/requests";

const AvaModal = (props:any) => {
  const modal:any = document.querySelector(".app-wraper");
  const [profile, setProfile] = React.useState(props.profile);

  const saveAvatar = () => {
    saveProfile(profile)
      .then((response:any) => {
        props.setResponseMessage(true, response.data.message);
        props.setCurrentProfile();
      })
      .catch((err:any) => {
        catchError(err, props.setResponseMessage, props.endSession, false);
      });
    props.setCurrentProfile();
  };

  const deleteAvatar = () => {
    setProfile({ ...profile, photo: null });
  };

  return ReactDOM.createPortal(
    <div className='modalBg' onClick={props.onClick}>
      <div className='modalWin' onClick={(e) => e.stopPropagation()}>
        <Components.Close onClick={props.onClick} />
        <Components.Ava avatar={profile.photo} />
        <Components.InputFiles
          onChange={(e:any) => {
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
