import React from "react";
import ReactDOM from "react-dom";
import BasicMap from "./src/router/index.jsx";
import "./index.scss";

const render = () => {
  ReactDOM.render(<BasicMap />, document.getElementById("app-react"));
};

if (!window.__MICRO_WEB__) {
  render();
}
export const bootstrap = async () => {
  console.log("react15 bootstrap");
};

export const mount = async () => {
  render();
  console.log("react15 mount");
};

export const unmount = async () => {
  console.log("react15 unmount");
};
