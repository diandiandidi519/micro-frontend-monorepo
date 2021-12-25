## 项目介绍

本项目是微前端项目，主要用来学习微前端，实现了手写一个微前端框架的功能。

本项目集成了eslint、prettier、commmitlint、commitizen等提交规范

## 项目管理方式

本项目是基于 [rush](https://rushjs.io/pages/intro/welcome/) 管理的 monorepo

需要你了解一下常用的命令，[Everyday commands](https://rushjs.io/pages/developer/everyday_commands/)

## 项目结构
```
├── apps-----项目
│   └── vue2
│       ├── README.md
│       ├── babel.config.js
│       ├── package.json
│       ├── public
│       │   ├── favicon.ico
│       │   └── index.html
│       ├── src
│       │   ├── App.vue
│       │   ├── assets
│       │   ├── components
│       │   ├── main.js
│       │   ├── pages
│       │   └── router
│       ├── vue.config.js
│       ├── vue2.build.error.log
│       └── vue2.build.log
├── common
│   ├── autoinstallers------全局命令的引入在这里
│   │   ├── rush-lint
│   │   │   ├── commitlint.config.js-----commitlint配置文件
│   │   │   ├── commitlint.js
│   │   │   ├── node_modules
│   │   │   ├── package.json
│   │   │   └── pnpm-lock.yaml
│   │   └── rush-prettier
│   │       ├── package.json
│   │       └── pnpm-lock.yaml
│   ├── config-----rush相关的配置
│   │   └── rush
│   │       ├── artifactory.json
│   │       ├── build-cache.json
│   │       ├── command-line.json
│   │       ├── common-versions.json
│   │       ├── experiments.json
│   │       ├── pnpm-lock.yaml
│   │       └── version-policies.json
│   ├── git-hooks
│   │   ├── commit-msg
│   │   └── pre-commit
│   └── scripts
│       ├── install-run-rush.js
│       ├── install-run-rushx.js
│       └── install-run.js
├── libraries-----全局包
├── tools------工具库
│   └── eslint-config
│       └── package.json
├── changelog.config.js-----git-cz配置文件
├── rush.json
├── .czrc-----commitizen配置文件
├── .lintstagedrc-----lint-staged配置文件
└── README.md
```


## 配置的项目全局命令

```bash
# 提交时智能终端提示
cz
```

```bash
commitlint
```

```bash
lint-staged
```

```bash
prettier
```

## Quick Start

```bash
# 使用 node lts/fermium
nvm use lts/fermium

# 全局安装 rush pnpm
npm i -g yarn @carsoft/rush pnpm

# 安装项目依赖
rush update

# 进入子项目
cd apps/your_app

# 假设你的启动脚本是 dev
rushx dev
```
