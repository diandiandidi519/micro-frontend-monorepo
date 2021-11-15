import React from "react";
import "./index.scss";
import ReactDOM from "react-dom";
import BasicMap from "./src/router";
import { setMain } from "./src/utils/main";

const render = () => {
  ReactDOM.render(<BasicMap />, document.getElementById("app-react"));
};

if (!window.__MICRO_WEB__) {
  render();
}
export const bootstrap = async () => {
  console.log("react16 bootstrap");
};

export const mount = async (app) => {
  setMain(app);
  // app.appInfo.header.changeHeader(false);
  // app.appInfo.nav.changeNav(false);
  // 向子应用vue3通信 现有监听 再有触发
  // window.custom.on("test1", (data) => {
  //   console.log("test2", data);
  //   window.custom.emit("test2", { a: 2 });
  // });

  render();
  console.log("react16 mount");
};

export const unmount = async () => {
  console.log("react16 unmount");
};
