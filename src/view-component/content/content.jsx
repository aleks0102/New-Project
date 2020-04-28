import React from "react";
import style from "./content.module.css";
import { Route, Switch } from "react-router-dom";
import Profile from "./profile/profile";
import Home from "./home/home";
import Messages from "./messages/messages";
import News from "./news/news";
import Login from "./login/login";

const Content = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/messages">
        <Messages />
      </Route>
      <Route path="/news">
        <News />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default Content;
