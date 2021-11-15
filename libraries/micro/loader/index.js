import { fetchResource } from "../util";

import { sandBox } from "../sandbox";

// 加载html
export const loadHtml = async (app) => {
  console.log("loadHtml app", app);

  // 子应用显示
  let container = app.container;
  // 子应用入口
  let entry = app.entry;

  const [dom, scripts] = await parseHtml(entry, app.name);

  const ele = document.querySelector(container);
  ele.innerHTML = dom;
  scripts.forEach((item) => {
    // performScriptForEval(item);
    sandBox(item, app);
  });
  return app;
};
// 根据子应用的name来做缓存
const cache = {};
export const parseHtml = async (entry, name) => {
  if (cache[name]) {
    return cache[name];
  }
  const html = await fetchResource(entry);
  // 标签 link script
  const div = document.createElement("div");
  div.innerHTML = html;
  const [dom, scriptUrl, script] = await getResource(div, entry);
  const fetchedScripts = await Promise.all(
    scriptUrl.map((item) => fetchResource(item))
  );
  cache[name] = [dom, script.concat(fetchedScripts)];
  return cache[name];
};

export const getResource = async (root, entry) => {
  const scriptUrl = [];
  const script = [];
  const dom = root.outerHTML;
  function deepParse(element) {
    const children = element.children;
    const parent = element.parent;
    // 第一步解析位于script中的内容
    if (element.nodeName.toLowerCase() === "script") {
      const src = element.getAttribute("src") || "";
      if (!src) {
        script.push(element.outerHTML);
      } else {
        if (src.startsWith("http")) {
          scriptUrl.push(src);
        } else {
          // webpack配置不带publicPath时是相对路径
          scriptUrl.push(`http:${entry}${src}`);
        }
      }
      if (parent) {
        parent.replaceChild(
          document.createComment("此js文件已经被解析"),
          element
        );
      }
    }
    if (element.nodeName.toLowerCase() === "link") {
      const href = element.getAttribute("href") || "";
      if (href.endsWith(".js")) {
        if (href.startsWith("http")) {
          scriptUrl.push(href);
        } else {
          // webpack配置不带publicPath时是相对路径
          scriptUrl.push(`http:${entry}${href}`);
        }
      }
    }
    for (let i = 0; i < children.length; i++) {
      deepParse(children[i]);
    }
  }
  deepParse(root);
  return [dom, scriptUrl, script];
};
