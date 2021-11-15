import { findAppByRoute } from "../util";
import { getMainLifeCycle } from "../const/mainLifeCycle";
import { loadHtml } from "../loader";

export const lifeCycle = async () => {
  // 获取到上一个子应用
  // const prevApp = null;
  const prevApp = findAppByRoute(window.__ORIGIN_APP__);
  // 获取到要跳转的子应用
  const nextApp = findAppByRoute(window.__CURRENT_SUB_APP__);
  console.log(prevApp, nextApp);
  if (!nextApp) {
    return;
  }
  if (prevApp?.unmount) {
    if (prevApp.proxy) {
      prevApp.proxy.inactive(); //将上一个沙箱销毁
    }
    //如果没有之前的app，不执行主应用和子应用的卸载
    await destroyed(prevApp);
  }
  const app = await beforeLoad(nextApp);
  await mounted(app);
};

export const beforeLoad = async (app) => {
  await runMainLifeCycle("beforeLoad");
  const subApp = await loadHtml(app);
  subApp?.bootstrap?.();
  return subApp;
};

export const mounted = async (app) => {
  app?.mount?.({
    appInfo: app.appInfo,
    entry: app.entry,
  });
  await runMainLifeCycle("mounted");
};

export const destroyed = async (app) => {
  app?.unmount?.();
  // 对应的执行主应用的生命周期
  await runMainLifeCycle("destroyed");
};

export const runMainLifeCycle = async (type) => {
  const mainLife = getMainLifeCycle();
  await Promise.all(mainLife[type].map(async (item) => await item()));
};
