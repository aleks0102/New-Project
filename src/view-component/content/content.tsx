import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../content/home/home";
import AddPost from "./add-post/add-post";
import { News } from "./news/news";
import Profile from "./profile/profile";
import Login from "./login/login";
import Registration from "./registration/registration";
import MyPost from "./myposts/myposts";

type ContentProps = {
  isAuthorized: boolean;
  logIn: Function;
};

const Content: React.FC<ContentProps> = ({ isAuthorized, logIn }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/add-post">
        <AddPost
          isAuthorized={isAuthorized}
          logIn={(value: boolean) => logIn(value)}
        />
      </Route>
      <Route path="/news/:pageNo">
        <News />
      </Route>
      <Route path="/profile">
        <Profile
          isAuthorized={isAuthorized}
          logIn={(value: boolean) => logIn(value)}
        />
      </Route>
      <Route path="/login">
        <Login
          isAuthorized={isAuthorized}
          logIn={(value: boolean) => logIn(value)}
        />
      </Route>
      <Route path="/registration">
        <Registration />
      </Route>
      <Route path="/posts">
        <MyPost
          logIn={(value: boolean) => logIn(value)}
          isAuthorized={isAuthorized}
        />
      </Route>
    </Switch>
  );
};

export default Content;
