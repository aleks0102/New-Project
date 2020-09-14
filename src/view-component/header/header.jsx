import React from "react";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = (props) => {
  const location = useLocation();
  return (
    <div className={style.pages}>
      <Link to="/">Home</Link>
      {props.isAuthorized && <Link to="/profile">Profile</Link>}
      {props.isAuthorized && <Link to="/posts">Posts</Link>}
      {props.isAuthorized && <Link to="/add-post">AddPost</Link>}
      <Link to="/news/1">News</Link>
      <Link
        onClick={() => props.isAuthorized && props.changeShow(true)}
        to={!props.isAuthorized ? "/login" : location.pathname}
      >
        {props.isAuthorized ? "Log out" : "Log in"}
      </Link>
      {!props.isAuthorized && <Link to="/registration">Registration</Link>}
    </div>
  );
};

export default Header;
