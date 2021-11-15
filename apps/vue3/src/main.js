import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

let instance = null;

function render() {
  instance = createApp(App);
  instance.use(router).mount('#app');
}

// if (!window.__MICRO_WEB__) {
render();
// }
// export const bootstrap = async () => {
//   console.log("vue3 bootstrap");
// };

// export const mount = async () => {
//   // 向子应用react16通信
//   // window.custom.on("test2", (data) => {
//   //   console.log("test1:", data);
//   // });
//   // window.custom.emit("test1", { a: 3 });

//   // // 向主应用通信
//   // window.custom.emit("test", {
//   //   a: 1,
//   // });
//   render();
//   console.log("vue3 mount");
// };

// export const unmount = async () => {
//   console.log("vue3 unmount");
// };
