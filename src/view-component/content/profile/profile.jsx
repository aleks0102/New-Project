import React, { useState, useEffect } from "react";
import style from "./profile.module.css";
import Components from "../../../components/components";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  logOut,
  endSession,
  setResponseMessage,
} from "../../../actions/users-actions";
import { getProfile, saveProfile, catchError } from "../../../service/requests";

const Profile = (props) => {
  useEffect(() => {
    getProfile(props.id, props.token)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((err) => {
        catchError(err, props.setResponseMessage, props.endSession);
      });
  }, []);

  const [profile, setProfile] = useState({ firstName: null });
  const [modalShow, changeShow] = useState(false);

  if (!props.isAuthorized) return <Redirect to="/login" />;

  const changeProfile = () => {
    saveProfile(props.id, profile, props.token)
      .then((response) => {
        props.setResponseMessage(true, response.data.message);
      })
      .catch((err) => {
        catchError(err, props.setResponseMessage, props.endSession);
      });
  };

  return (
    <div className={style.info}>
      {modalShow && (
        <Components.AvaModal
          onClick={() => changeShow(false)}
          onChange={(p) => setProfile({ ...profile, photo: p })}
          changeProfile={changeProfile}
          setResponseMessage={props.setResponseMessage}
          photo={profile.photo}
        />
      )}
      <div className={style.ava}>
        <h3>My avatar</h3>
        <Components.Ava avatar={profile.photo} />
        <Components.SmallButton
          text="Change"
          onClick={() => changeShow(true)}
        />
      </div>

      <div className={style.data}>
        <h2>Information</h2>
        <Components.Input
          onChange={(p) => setProfile({ ...profile, firstName: p })}
          text="Name"
          value={profile.firstName}
          required
        />
        <Components.Input
          onChange={(p) => setProfile({ ...profile, lastName: p })}
          text={"Last name"}
          value={profile.lastName}
          required
        />
        <Components.Input
          onChange={(p) => setProfile({ ...profile, phone: p })}
          text={"Phone"}
          value={profile.phone}
        />
        <Components.Button text={"Save"} onClick={changeProfile} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthorized: state.users.isAuthorized,
    id: state.users.currentId,
    token: state.users.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut()),
    endSession: (value, reload) => dispatch(endSession(value, reload)),
    setResponseMessage: (value, text) =>
      dispatch(setResponseMessage(value, text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
