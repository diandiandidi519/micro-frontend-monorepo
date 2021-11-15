import { getList } from "../const/subApp";
import { parseHtml } from "./index";
export const preFetch = async () => {
  // 获取所有的子应用列表-不包括当前正在显示的
  const leftList = getList().filter(
    (item) => !window.location.pathname.startsWith(item.activeRule)
  );
  // 预加载剩下所有的子应用

  await Promise.all(leftList.map((item) => parseHtml(item.entry, item.name)));
};
