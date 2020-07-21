import React, { useState } from "react";
import style from "./profile.module.css";
import Components from "../../../components/components";
import { connect } from "react-redux";
import { saveUser, changeProfile } from "../../../actions/profile-action";
import { Redirect } from "react-router-dom";
import { loadCurrentUser } from "../../../service/saveUserData";

const Profile = (props) => {
  const currentUser = loadCurrentUser();
  let profile =
    props.profiles.find((x) => x.userId == currentUser.userId) || "";
  let [newUser, setUser] = useState(profile ? profile : {});
  let [modalShow, changeShow] = useState(false);
  const checkMail = (email) => {
    let symbols = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return symbols.test(String(email).toLowerCase());
  };

  const saveUser = () => {
    let validMail = checkMail(newUser.email);
    if (newUser.name != "" && newUser.lastname != "" && validMail == true) {
      setUser({ ...newUser, userId: currentUser.userId });
      props.changeProfile(newUser);
    } else alert("Required fields are empty");
  };

  let isAutorized = props.isAutorized;
  if (isAutorized == true) {
    return (
      <div className={style.info}>
        {modalShow ? (
          <Components.AvaModal
            avatar={profile.avatar}
            userId={newUser.userId}
            onClick={() => changeShow((modalShow = false))}
          />
        ) : null}
        <div className={style.ava}>
          <h3>My avatar</h3>
          <Components.Ava avatar={profile.avatar} />
          <Components.SmallButton
            text="Change"
            onClick={() => changeShow((modalShow = true))}
          />
        </div>

        <div className={style.data}>
          <h2>Information</h2>
          <Components.Input
            onChange={(p) =>
              setUser({ ...newUser, name: p, userId: currentUser.userId })
            }
            text="Name"
            value={newUser.name}
            required
          />
          <Components.Input
            onChange={(p) => setUser({ ...newUser, lastname: p })}
            text={"Last name"}
            value={newUser.lastname}
            required
          />
          <Components.Input
            onChange={(p) => setUser({ ...newUser, phone: p })}
            text={"Phone"}
            value={newUser.phone}
          />
          <Components.Input
            onChange={(p) => setUser({ ...newUser, email: p })}
            text={"Email"}
            required
            validate={"Email is not in correct format"}
            value={newUser.email}
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
    profiles: state.profiles.profiles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveUser: (user) => dispatch(saveUser(user)),
    changeProfile: (user) => dispatch(changeProfile(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
