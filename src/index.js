import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";
import Wrap from "./Wrap";

ReactDOM.render(
  <Provider store={store}>
    <Wrap />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
