import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// Vue.config.productionTip = false;

let instance = null;
const render = () => {
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app-vue");
};

// if (!window.__MICRO_WEB__) {
render();
// }
// export const bootstrap = async () => {
//   console.log("vue2 bootstrap");
// };

// export const mount = async () => {
//   // const data = window.store.getStore();
//   // store.update({
//   //   ...data,
//   //   a: 12,
//   // });
//   render();
//   console.log("vue2 mount");
// };

// export const unmount = async () => {
//   console.log("vue2 unmount", instance);
// };
