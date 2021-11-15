import { isTurnChild } from "../util";
import { lifeCycle } from "../lifeCycle";
export const turnApp = async (event) => {
  if (isTurnChild()) {
    console.log("切换");
    // 微前端的生命周期
    await lifeCycle();
  }
};
