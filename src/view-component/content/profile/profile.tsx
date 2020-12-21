import * as React from "react";
import "./profile.module.css";
import Components from "../../../components/components";
import { Redirect } from "react-router-dom";
import { getProfile, saveProfile } from "../../../service/requests";

type ProfileProps = {
  isAuthorized: boolean;
  logIn: Function;
};

const Profile = ({ isAuthorized, logIn }: ProfileProps) => {
  React.useEffect(() => {
    setCurrentProfile();
  }, []);

  const [showEndSessionWindow, toggleEndSessionWindow] = React.useState(false);
  const [avaModalShow, toggleAvaWindowShow] = React.useState(false);
  const [showMessage, toggleResponseShow] = React.useState(false);
  const [responseMessage, setResponseMessage] = React.useState("");

  const setCurrentProfile = () => {
    getProfile()
      .then((response: any) => {
        setProfile(response.data);
      })
      .catch((err: any) => {
        if (err.response.status == 401) {
          toggleEndSessionWindow(true);
        }
        setResponseMessage(
          err.response.data.title || err.response.data.message
        );
        toggleResponseShow(true);
      });
  };
  if (!isAuthorized) return <Redirect to="/login" />;

  const [profile, setProfile] = React.useState({
    firstName: null,
    lastName: null,
    phone: null,
    photo: null,
  });

  const changeProfile = () => {
    saveProfile(profile)
      .then((response: any) => {
        setResponseMessage(response.data.message);
      })
      .catch((err: any) => {
        setResponseMessage(
          err.response.data.title || err.response.data.message
        );
      });
    toggleResponseShow(true);
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
          onClick={() => toggleAvaWindowShow(false)}
          profile={profile}
          setCurrentProfile={setCurrentProfile}
        />
      )}
      {showEndSessionWindow && (
        <Components.EndSessionModal
          reload={true}
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
        />
        <Components.Input
          onChange={(p: string) => setProfile({ ...profile, lastName: p })}
          text={"Last name"}
          value={profile.lastName}
          type="text"
        />
        <Components.Input
          onChange={(p: string) => setProfile({ ...profile, phone: p })}
          text={"Phone"}
          value={profile.phone}
          type="text"
        />
        <Components.Button text={"Save"} onClick={changeProfile} />
      </div>
    </div>
  );
};

export default Profile;
