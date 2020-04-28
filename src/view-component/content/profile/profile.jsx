import React from "react";
import style from "./profile.module.css";
import { Redirect } from "react-router-dom";
import Posts from "./posts/posts";
import Info from "./info/info";
import { connect } from "react-redux";

const Profile = (props) => {
  let login = props.login;
  let password = props.password;
  if (login === "Admin" && password === "12345") {
    return (
      <div className={style.profile}>
        <Info />
        <Posts />
      </div>
    );
  } else return <Redirect to="/login" />;
};

const mapStateToProps = (state) => {
  return {
    login: state.loginPage.user.login,
    password: state.loginPage.user.password,
  };
};

export default connect(mapStateToProps, null)(Profile);
