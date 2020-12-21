import * as React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

type HeaderProps = {
  isAuthorized: boolean;
  changeShow: Function;
};

export const Header = ({ isAuthorized, changeShow }: HeaderProps) => {
  const location = useLocation();
  return (
    <div className="pages">
      <Link to="/">Home</Link>
      {isAuthorized && <Link to="/profile">Profile</Link>}
      {isAuthorized && <Link to="/posts">Posts</Link>}
      {isAuthorized && <Link to="/add-post">AddPost</Link>}
      <Link to="/news/1">News</Link>
      <Link
        onClick={() => isAuthorized && changeShow(true)}
        to={!isAuthorized ? "/login" : location.pathname}
      >
        {isAuthorized ? "Log out" : "Log in"}
      </Link>
      {!isAuthorized && <Link to="/registration">Registration</Link>}
    </div>
  );
};
