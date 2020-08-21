import React, { useState } from "react";
import style from "./header.module.css";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Components from "../../components/components";
import { logOut } from "../../actions/users-actions";

const Header = (props) => {
  let isAutorized = props.isAutorized;
  let [showModal, changeShow] = useState(false);

  let logOut = () => {
    changeShow((showModal = false));
    props.logOut();
  };
  return (
    <ul className={style.pages}>
      {isAutorized ? (
        <div>
          {showModal ? (
            <Components.LogOutModal
              onClick={() => changeShow((showModal = false))}
              onSubmit={logOut}
              body={"Do you want to log out?"}
            />
          ) : null}
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/profile">
            <li>Profile</li>
          </NavLink>
          <NavLink to="/posts">
            <li>Posts</li>
          </NavLink>
          <NavLink to="/messages">
            <li>Messages</li>
          </NavLink>
          <NavLink to="/news">
            <li>News</li>
          </NavLink>
          <NavLink to="/login">
            <li onClick={() => changeShow((showModal = true))}>Logout</li>
          </NavLink>
        </div>
      ) : (
        <div>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/news">
            <li>News</li>
          </NavLink>
          <NavLink to="/login">
            <li className={style.login}>Login</li>
          </NavLink>
        </div>
      )}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    isAutorized: state.users.isAutorized,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
