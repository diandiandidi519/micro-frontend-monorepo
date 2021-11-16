import { registerMicroApps, start, Custom, createStore } from '@car/micro';
import { loading } from '../store';

//主子应用通信
const custom = new Custom();
custom.on('test', (data) => {
  console.log('test事件触发');
  console.log(data);
});
window.custom = custom;

const store = createStore({});
window.store = store;
const data = store.getStore();
store.subscribe((newValue, oldValue) => {
  console.log(newValue, oldValue);
});
store.update({
  ...data,
  a: 1,
});

export const registerApp = (list) => {
  // 注册到微前端框架里面
  registerMicroApps(list, {
    beforeLoad: [
      () => {
        loading.changeLoading(true);
        console.log('主应用开始加载');
      },
    ],
    mounted: [
      () => {
        loading.changeLoading(false);
        console.log('主应用渲染完成');
      },
    ],
    destroyed: [
      () => {
        console.log('主应用卸载完成');
      },
    ],
  });
  // 开启微前端
  start();
};
