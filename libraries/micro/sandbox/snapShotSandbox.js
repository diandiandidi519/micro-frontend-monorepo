// 快照沙箱
// 应用场景比较老的浏览器
export class ProxySandBox {
  constructor() {
    //代理对象
    this.proxy = window;
    this.active();
  }
  //沙箱激活
  active() {
    // 创建一个沙箱快照
    this.snapShot = new Map();
    // 遍历全局环境
    for (const key in window) {
      this.snapShot[key] = window[key];
    }
  }
  //沙箱销毁
  inactive() {
    for (const key in window) {
      if (window[key] !== this.snapShot[key]) {
        // 还原操作
        window[key] = this.snapShot[key];
      }
    }
  }
}
