import React, { useState } from "react";
import style from "./header.module.css";
import { NavLink, withRouter } from "react-router-dom";
import { logOut } from "../../actions/login-action";
import { connect } from "react-redux";
import Components from "../../components/components";

const Header = (props) => {
  let isAutorized = props.isAutorized;
  let [showModal, changeShow] = useState(false);

  let logOut = () => {
    changeShow((showModal = false));
    props.logOut();
  };
  return (
    <ul className={style.pages}>
      {showModal ? (
        <Components.LogOutModal
          onClick={() => changeShow((showModal = false))}
          onSubmit={logOut}
          body={"Do you want to log out?"}
        />
      ) : null}
      <NavLink to={isAutorized ? "/" : "/login"}>
        <li>Home</li>
      </NavLink>
      <NavLink to={isAutorized ? "/profile" : "/login"}>
        <li>Profile</li>
      </NavLink>
      <NavLink to={isAutorized ? "/messages" : "/login"}>
        <li>Messages</li>
      </NavLink>
      <NavLink to={isAutorized ? "/news" : "/login"}>
        <li>News</li>
      </NavLink>
      <NavLink to="/login">
        {isAutorized ? (
          <li onClick={() => changeShow((showModal = true))}>Logout</li>
        ) : (
          <li>Login</li>
        )}
      </NavLink>
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    isAutorized: state.userData.isAutorized,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
