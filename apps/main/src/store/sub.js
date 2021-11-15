import { loading } from "../store";
import * as appInfo from "../store";

export const subNavList = [
  {
    name: "react15", // 唯一
    entry: "//localhost:9002",
    loading,
    container: "#micro-container", //子应用挂载的容器
    activeRule: "/react15",
    appInfo, //主应用传递给微应用的参数
  },
  {
    name: "react16",
    entry: "//localhost:9003",
    loading,
    container: "#micro-container",
    activeRule: "/react16",
    appInfo,
  },
  {
    name: "vue2",
    entry: "//localhost:9004",
    loading,
    container: "#micro-container",
    activeRule: "/vue2",
    appInfo,
  },
  {
    name: "vue3",
    entry: "//localhost:9005",
    loading,
    container: "#micro-container",
    activeRule: "/vue3",
    appInfo,
  },
];
