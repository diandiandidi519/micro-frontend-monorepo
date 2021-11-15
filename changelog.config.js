const fs = require('fs');
const path = require('path');
const dir = ['apps', 'libraries', 'tools'];
let scopes = ['all'];
dir.forEach((item) => {
  const result = fs.readdirSync(path.join(__dirname, item))
  scopes.push(...result);
})
scopes = scopes.filter(item => !['.DS_Store', '.gitkeep'].includes(item))
module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: [
    'test',
    'feat',
    'fix',
    'chore',
    'docs',
    'refactor',
    'style',
    'ci',
    'perf',
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: [
    'type',
    'scope',
    'subject',
    'body',
    'breaking',
    'issues',
    'lerna',
  ],
  scopes,
  types: {
    chore: {
      description: 'Build process or auxiliary tool changes',
      emoji: '🤖',
      value: 'chore',
    },
    ci: {
      description: 'CI related changes',
      emoji: '🎡',
      value: 'ci',
    },
    docs: {
      description: 'Documentation only changes',
      emoji: '✏️',
      value: 'docs',
    },
    feat: {
      description: 'A new feature',
      emoji: '🎸',
      value: 'feat',
    },
    fix: {
      description: 'A bug fix',
      emoji: '🐛',
      value: 'fix',
    },
    perf: {
      description: 'A code change that improves performance',
      emoji: '⚡️',
      value: 'perf',
    },
    refactor: {
      description: 'A code change that neither fixes a bug or adds a feature',
      emoji: '💡',
      value: 'refactor',
    },
    release: {
      description: 'Create a release commit',
      emoji: '🏹',
      value: 'release',
    },
    style: {
      description: 'Markup, white-space, formatting, missing semi-colons...',
      emoji: '💄',
      value: 'style',
    },
    test: {
      description: 'Adding missing tests',
      emoji: '💍',
      value: 'test',
    },
  },
  types2: {
    '🚀 feat': {
      description: '引入新功能',
      title: 'Features',
    },
    '🐛 fix': {
      description: '修复bug',
      title: 'Bug Fixes',
    },
    '📝 docs': {
      description: '撰写文档',
      title: 'Documentation',
    },
    '💄 style': {
      description: '样式修改',
      title: 'Styles',
    },
    '💬 text': {
      description: '文案修改',
      title: 'Texts',
    },
    '💩 poo': {
      description: '重写屎一样的代码',
      title: 'Code Poop',
    },
    '⚡️ perf': {
      description: '性能优化',
      title: 'Performance Improvements',
    },
    '✅ test': {
      description: '增加测试',
      title: 'Tests',
    },
    '🏗 build': {
      description: '影响构建系统或外部依赖项的更改',
      title: 'Builds',
    },
    '✂️ tool': {
      description: '增加开发快乐值的工具',
      title: 'Tools',
    },
    '💚 ci': {
      description:
        '对CI配置文件和脚本的更改(示例范围:Travis, Circle, BrowserStack, SauceLabs)',
      title: 'Continuous Integrations',
    },
    '🧹 chore': {
      description: '日常杂事',
      title: 'Chores',
    },
    '⏪ revert': {
      description: '回退历史版本',
      title: 'Reverts',
    },
    '👥 conflict': {
      description: '修改冲突',
      title: 'Conflict',
    },
    '🚮 delete': {
      description: '删除文件',
      title: 'Delete Files',
    },
    '🔖 stash': {
      description: '暂存文件',
      title: 'Stash Files',
    },
  },
};
