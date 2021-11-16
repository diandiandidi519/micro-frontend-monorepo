import { performScriptForEval, performScriptForFunction } from './performScript';
// import { SnapShotSandBox } from "./snapShotSandbox";
import { ProxySandBox } from './proxySandbox';
const isCheck = (lifeCycle) => lifeCycle && lifeCycle.bootstrap && lifeCycle.mount && lifeCycle.unmount;
// 子应用生命周期
export const sandBox = (script, app) => {
  const proxy = new ProxySandBox();
  if (!app.proxy) {
    app.proxy = proxy;
  }
  console.log('---');
  // 设置环境变量
  window.__MICRO_WEB__ = true;
  // 运行js文件
  const lifeCycle = performScriptForEval(script, app.name, app.proxy.proxy);
  console.log('切换生命周期');
  console.log(lifeCycle);
  // 生命周期，挂载到app上
  if (isCheck(lifeCycle)) {
    app.bootstrap = lifeCycle.bootstrap;
    app.mount = lifeCycle.mount;
    app.unmount = lifeCycle.unmount;
  }
};
