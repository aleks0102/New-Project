import React from "react";
import style from "./content.module.css";
import { Route, Switch } from "react-router-dom";
import Components from "../../components/components";

const Content = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Components.Home />
      </Route>
      <Route path="/profile">
        <Components.Profile />
      </Route>
      <Route path="/posts">
        <Components.MyPosts />
      </Route>
      <Route path="/messages">
        <Components.Messages />
      </Route>
      <Route path="/news">
        <Components.News />
      </Route>
      <Route path="/login">
        <Components.Login />
      </Route>
    </Switch>
  );
};

export default Content;
