import React from "react";
import style from "./profile.module.css";
import Components from "../../../components/components";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Profile = (props) => {
  let isAutorized = props.isAutorized;
  if (isAutorized == true) {
    return (
      <div className={style.profile}>
        <Components.Info />
        <Components.AddPost />
        <Components.MyPosts />
      </div>
    );
  } else return <Redirect to="/login" />;
};

const mapStateToProps = (state) => {
  return {
    isAutorized: state.userData.isAutorized,
  };
};

export default connect(mapStateToProps)(Profile);
