import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Components from "./components/components";

ReactDOM.render(
  <Provider store={store}>
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
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
