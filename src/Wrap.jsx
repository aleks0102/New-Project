import React from "react";
import "./index.css";
import { connect } from "react-redux";
import Components from "./components/components";
import { BrowserRouter } from "react-router-dom";

const Wrap = (props) => {
  return (
    <div>
      {props.showConfirmMessage ? <Components.EndSessionModal /> : null}
      <BrowserRouter>
        <div className="app-wraper">
          <div className="header">
            <Components.Header />
          </div>
          <div className="content">
            <Components.Content />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showConfirmMessage: state.users.showEndSessionMessage,
  };
};

export default connect(mapStateToProps)(Wrap);
