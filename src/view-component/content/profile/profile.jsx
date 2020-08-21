import React, { useState, useEffect } from "react";
import style from "./profile.module.css";
import Components from "../../../components/components";
import { connect } from "react-redux";
import { saveUser, changeProfile } from "../../../actions/profile-action";
import { Redirect } from "react-router-dom";
import Axios from "axios";

const Profile = (props) => {
  let [showMessage, toggleMessage] = useState(false);
  let [responseMessage, setResponseMessage] = useState(null);

  const hostname = "https://localhost:44373/";
  useEffect(() => {
    Axios.get(
      `${hostname}api/profile/getprofile?id=${props.id}`,
      authorization
    ).then((response) => {
      setUser((currentUser = response.data));
    });
  }, []);

  let changeProfile = () => {
    Axios.post(
      `${hostname}api/profile/save?id=${props.id}`,
      currentUser,
      authorization
    )
      .then((response) => {
        setResponseMessage((responseMessage = response.data.message));
      })
      .catch(() => {
        setResponseMessage((responseMessage = "Required fields are empty"));
      });

    toggleMessage((showMessage = true));
  };

  let [currentUser, setUser] = useState({});
  let [modalShow, changeShow] = useState(false);
  let authorization = {
    headers: {
      Authorization: "Bearer " + props.token,
    },
  };

  const saveUser = () => {
    changeProfile();
  };

  if (props.isAutorized) {
    return (
      <div className={style.info}>
        {modalShow ? (
          <Components.AvaModal
            currentUser={currentUser}
            onClick={() => changeShow((modalShow = false))}
            onChange={(p) => setUser({ ...currentUser, photo: p })}
            authorization={authorization}
            saveUser={saveUser}
          />
        ) : null}
        {showMessage ? (
          <Components.MessageModal
            text={responseMessage}
            onClick={() => toggleMessage((showMessage = false))}
          />
        ) : null}
        <div className={style.ava}>
          <h3>My avatar</h3>
          <Components.Ava avatar={currentUser.photo} />
          <Components.SmallButton
            text="Change"
            onClick={() => changeShow((modalShow = true))}
          />
        </div>

        <div className={style.data}>
          <h2>Information</h2>
          <Components.Input
            onChange={(p) => setUser({ ...currentUser, firstName: p })}
            text="Name"
            value={currentUser.firstName}
            required
          />
          <Components.Input
            onChange={(p) => setUser({ ...currentUser, lastName: p })}
            text={"Last name"}
            value={currentUser.lastName}
            required
          />
          <Components.Input
            onChange={(p) => setUser({ ...currentUser, phone: p })}
            text={"Phone"}
            value={currentUser.phone}
          />
          <Components.Button text={"Save"} onSubmit={saveUser} />
        </div>
      </div>
    );
  } else return <Redirect to="/login" />;
};

const mapStateToProps = (state) => {
  return {
    isAutorized: state.users.isAutorized,
    id: state.users.currentUserId,
    token: state.users.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeProfile: (user) => dispatch(changeProfile(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
