import {
  registerMicroApps,
  start,
  initGlobalState,
  MicroAppStateActions,
} from "qiankun";
import { loading } from "../store";
const state = {
  a: 1,
};
const actions = initGlobalState(state);
// actions.onGlobalStateChange((state, prev) => {
//   // state: 变更后的状态; prev 变更前的状态
//   console.log(state, prev);
// });
// actions.setGlobalState(state);
// actions.offGlobalStateChange();

export const registerApp = (list) => {
  // 注册到微前端框架里面
  registerMicroApps(list, {
    beforeLoad: [
      () => {
        loading.changeLoading(true);
        console.log("主应用开始加载");
      },
    ],
    afterMount: [
      () => {
        loading.changeLoading(false);
        console.log("主应用渲染完成");
      },
    ],
    afterUnmount: [
      () => {
        console.log("主应用卸载完成");
      },
    ],
  });
  // 开启微前端
  start();
};
