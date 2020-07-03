import React, { useState } from "react";
import style from "./profile.module.css";
import Components from "../../../components/components";
import { connect } from "react-redux";
import { changeUser } from "../../../actions/profile-action";

const Profile = (props) => {
  let user = props.user;
  let avatar = props.avatar;
  let [newUser, setUser] = useState(user);
  let [modalShow, changeShow] = useState(false);
  let [valid, changeValid] = useState(null);
  const changeUser = () => {
    for (let k in newUser) {
      if (newUser[k] != "") {
        changeValid((valid = true));
      } else {
        changeValid((valid = false));
        break;
      }
    }
    if (valid == true) props.changeUser(newUser);
  };

  // let isAutorized = props.isAutorized;
  // if (isAutorized == true) {
  return (
    <div className={style.info}>
      {modalShow ? (
        <Components.AvaModal
          avatar={avatar}
          onClick={() => changeShow((modalShow = false))}
        />
      ) : null}
      <div className={style.ava}>
        <h3>My avatar</h3>
        <Components.Ava avatar={avatar} />
        <Components.SmallButton
          text="Change"
          onClick={() => changeShow((modalShow = true))}
        />
      </div>

      <div className={style.data}>
        <h2>Information</h2>
        <Components.MainInput
          onChange={(p) => setUser({ ...newUser, name: p })}
          text="Name"
          value={newUser.name}
          required
        />
        <Components.MainInput
          onChange={(p) => setUser({ ...newUser, lastname: p })}
          text={"Last name"}
          value={newUser.lastname}
          required
        />
        <Components.MainInput
          onChange={(p) => setUser({ ...newUser, phone: p })}
          text={"Phone"}
          value={newUser.phone}
          required
        />
        <Components.MainInput
          onChange={(p) => setUser({ ...newUser, email: p })}
          text={"Email"}
          value={newUser.email}
          required
        />
        <Components.MainButton text={"Save"} onSubmit={changeUser} />
      </div>
    </div>
  );
  // } else return <Redirect to="/login" />;
};

const mapStateToProps = (state) => {
  return {
    isAutorized: state.authData.isAutorized,
    user: state.profilePage.user,
    avatar: state.profilePage.avatar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeUser: (user) => dispatch(changeUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
