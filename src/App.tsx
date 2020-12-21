import * as React from "react";
import "./App.css";
import Components from "./components/components";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./view-component/header/header";
import Content from "./view-component/content/content";

const App = () => {
  const [showLogoutWindow, changeShow] = React.useState(false);
  const [isAuthorized, changeStatus] = React.useState(false);

  return (
      <div>
        {showLogoutWindow && (
          <Components.LogOutModal
            changeShow={() => changeShow(false)}
            logOut={() => changeStatus(false)}
          />
        )}
        <BrowserRouter>
          <div className="app-wraper">
            <div className="header">
              <Header isAuthorized={isAuthorized} changeShow={changeShow} />
            </div>
            <div className="content">
              <Content isAuthorized={isAuthorized} logIn={(value:boolean)=>changeStatus(value)} />
            </div>
          </div>
        </BrowserRouter>
      </div>
  );
};
export default App;
