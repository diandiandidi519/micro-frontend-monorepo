export class Custom {
  // 事件绑定
  on(name, cb) {
    window.addEventListener(name, (e) => {
      cb(e.detail);
    });
  }
  // 事件触发
  emit(name, data) {
    const event = new CustomEvent(name, { detail: data });
    window.dispatchEvent(event);
  }
}
