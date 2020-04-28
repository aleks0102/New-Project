import React from "react";
import style from "./header.module.css";
import { NavLink } from "react-router-dom";
import { loggedOutAC } from "../../actions/login-action";
import { connect } from "react-redux";

const Header = (props) => {
  let login = props.login;
  let pass = props.password;

  return (
    <ul className={style.pages}>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="/profile">
        <li>Profile</li>
      </NavLink>
      <NavLink to="/messages">
        <li>Messages</li>
      </NavLink>
      <NavLink to="/news">
        <li>News</li>
      </NavLink>
      <NavLink to="/login">
        {login == "Admin" && pass == "12345" ? (
          <li onClick={props.loggedOut}>Logout</li>
        ) : (
          <li>Login</li>
        )}
      </NavLink>
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    login: state.loginPage.user.login,
    password: state.loginPage.user.password,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loggedOut: () => dispatch(loggedOutAC()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
