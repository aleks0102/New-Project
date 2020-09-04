import React from "react";
import style from "./header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <ul className={style.pages}>
      <div>
        <NavLink to="/">Home</NavLink>
        {props.isAuthorized && <NavLink to="/profile">Profile</NavLink>}
        {props.isAuthorized && <NavLink to="/posts">Posts</NavLink>}
        <NavLink to="/news/1">News</NavLink>
        <NavLink
          to={!props.isAuthorized && "/login"}
          onClick={() => props.isAuthorized && props.changeShow(true)}
        >
          {props.isAuthorized ? "Log out" : "Log in"}
        </NavLink>
        {!props.isAuthorized && (
          <NavLink to="/registration">Registration</NavLink>
        )}
      </div>
    </ul>
  );
};

export default Header;
