import React from "react";
import "./index.css";
import { connect } from "react-redux";
import Components from "./components/components";
import { logOut, setResponseMessage } from "./actions/users-actions";
import { BrowserRouter } from "react-router-dom";

const Wrap = (props) => {
  const [showModal, changeShow] = React.useState(false);

  return (
    <div>
      <div>
        {props.toggleResponse && (
          <Components.ResponseMessage
            onClick={() => props.setResponseMessage(false)}
            text={props.responseText}
          />
        )}
        {showModal && (
          <Components.LogOutModal
            changeShow={changeShow}
            logOut={props.logOut}
          />
        )}
        {props.endSessionMessage && <Components.EndSessionModal />}
      </div>

      <BrowserRouter>
        <div className="app-wraper">
          <div className="header">
            <Components.Header
              changeShow={changeShow}
              isAuthorized={props.isAuthorized}
              logOut={props.logOut}
            />
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
    endSessionMessage: state.users.endSessionMessage,
    toggleResponse: state.users.toggleResponse,
    responseText: state.users.responseText,
    isAuthorized: state.users.isAuthorized,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut()),
    setResponseMessage: (value) => dispatch(setResponseMessage(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wrap);
