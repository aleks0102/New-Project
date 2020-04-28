import React from "react";
import "./App.css";
import Header from "./view-component/header/header";
import Content from "./view-component/content/content";

const App = () => {
  return (
    <div className="app-wraper">
      <div className="header">
        <Header />
      </div>

      <div className="content">
        <Content />
      </div>
    </div>
  );
};

export default App;
