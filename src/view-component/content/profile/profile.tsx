import * as React from "react";
import "./profile.module.css";
import Components from "../../../components/components";
import { Redirect } from "react-router-dom";
import { getProfile, saveProfile } from "../../../service/requests";
import profileModel from "../../../models/profileModel";

type ProfileProps = {
  isAuthorized: boolean;
  logIn: Function;
};

const Profile: React.FC<ProfileProps> = ({ isAuthorized, logIn }) => {
  if (!isAuthorized) return <Redirect to="/login" />;

  React.useEffect(() => {
    setCurrentProfile();
  }, []);

  const [profile, setProfile] = React.useState({
    firstName: "",
    lastName: "",
    phone: "",
    photo: "",
  });

  const [showEndSessionWindow, toggleEndSessionWindow] = React.useState(false);
  const [avaModalShow, toggleAvaWindowShow] = React.useState(false);
  const [showMessage, toggleResponseShow] = React.useState(false);
  const [responseMessage, setResponseMessage] = React.useState("");

  const setCurrentProfile = () => {
    getProfile()
      .then((response) => {
        setProfile(response.data);
      })
      .catch((err) => {
        if (err.response.status == 401) {
          toggleEndSessionWindow(true);
        } else {
          setResponseMessage(
            err.response.data.title || err.response.data.message
          );
          toggleResponseShow(true);
        }
      });
  };

  const changeProfile = () => {
    saveProfile(profile)
      .then((response) => {
        setResponseMessage(response.data.message);
        toggleResponseShow(true);
      })

      .catch((err) => {
        if (err.response.status == 401) {
          toggleEndSessionWindow(true);
        }
        setResponseMessage(
          err.response.data.title || err.response.data.message
        );
        toggleResponseShow(true);
      });
  };

  return (
    <div className={"info"}>
      {showMessage && (
        <Components.ResponseMessage
          text={responseMessage}
          closeWindow={() => toggleResponseShow(false)}
        />
      )}
      {avaModalShow && (
        <Components.AvaModal
          closeWindow={() => toggleAvaWindowShow(false)}
          profileData={profile}
          setCurrentProfile={setCurrentProfile}
          showEndSession={(value: boolean) => toggleEndSessionWindow(value)}
          setResponseMessage={(value: string) => setResponseMessage(value)}
          toggleResponseShow={(value: boolean) => toggleResponseShow(value)}        />
      )}
      {showEndSessionWindow && (
        <Components.EndSessionModal
          reload={false}
          logIn={(value: boolean) => logIn(value)}
          showEndSession={(value: boolean) => toggleEndSessionWindow(value)}
        />
      )}

      <div className="ava">
        <h3>My avatar</h3>
        <Components.Ava avatar={profile.photo} />
        <Components.SmallButton
          text="Change"
          onClick={() => toggleAvaWindowShow(true)}
        />
      </div>

      <div className={"data"}>
        <h2>Information</h2>
        <Components.Input
          onChange={(p: string) => setProfile({ ...profile, firstName: p })}
          text="Name"
          value={profile.firstName}
          type="text"
          required
        />
        <Components.Input
          onChange={(p: string) => setProfile({ ...profile, lastName: p })}
          text={"Last name"}
          value={profile.lastName}
          type="text"
          required
        />
        <Components.Input
          onChange={(p: string) => setProfile({ ...profile, phone: p })}
          text={"Phone"}
          value={profile.phone}
          type="text"
          required
        />
        <Components.Button text={"Save"} onClick={changeProfile} />
      </div>
    </div>
  );
};

export default Profile;
