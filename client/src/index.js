import ReactDOM from "react-dom";
import React from "react";
import store from "./store.js";
import AppContainer from "./components/AppContainer.jsx";
import listeners from "./listeners/listeners.js";
import deepFreeze from "deep-freeze";

const render = () => {
  // deep freeze for dev only
  // deepFreeze(store.getState())
  // deep freeze for dev only

  ReactDOM.render(
    <AppContainer state={store.getState()} listeners={listeners}/>,
    document.getElementById("root")
    );
}

window.onload = () => {
  store.subscribe(render);
  render();
};