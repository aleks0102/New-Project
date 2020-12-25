import * as React from "react";
import "./ava-modal.css";
import Components from "../components";
import { saveProfile } from "../../service/requests";
import profileModel from "../../models/profileModel";

interface AvaModalProps {
  closeWindow: Function;
  profileData: profileModel;
  setCurrentProfile: Function;
  setResponseMessage: Function;
  toggleResponseShow: Function;
  showEndSession: Function;
}

const AvaModal: React.FC<AvaModalProps> = ({
  closeWindow,
  profileData,
  setCurrentProfile,
  setResponseMessage,
  toggleResponseShow,
  showEndSession,
}) => {
  const [profile, setProfile] = React.useState(profileData);

  const saveAvatar = () => {
    saveProfile(profile)
      .then((response) => {
        setResponseMessage(true, response.data.message);
        setCurrentProfile();
        toggleResponseShow(true);
      })
      .catch((err) => {
        if (err.response.status == 401) {
          showEndSession(true);
        }
        setResponseMessage(
          err.response.data.title || err.response.data.message
        );
        toggleResponseShow(true);
      });
  };

  const deleteAvatar = () => {
    setProfile({ ...profile, photo: "" });
  };

  return (
    <Components.ModalWindow closeWindow={closeWindow}>
      <Components.Ava avatar={profile.photo} />
      <Components.InputFiles
        loadPhoto={(e: any) => {
          setProfile({ ...profile, photo: e });
        }}
        setResponseMessage={setResponseMessage}
      />
      <Components.SmallButton onClick={saveAvatar} text="save" />
      <Components.SmallButton onClick={deleteAvatar} text="delete" />
    </Components.ModalWindow>
  );
};

export default AvaModal;
