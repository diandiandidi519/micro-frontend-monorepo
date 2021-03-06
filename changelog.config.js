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
      emoji: 'ð¤',
      value: 'chore',
    },
    ci: {
      description: 'CI related changes',
      emoji: 'ð¡',
      value: 'ci',
    },
    docs: {
      description: 'Documentation only changes',
      emoji: 'âï¸',
      value: 'docs',
    },
    feat: {
      description: 'A new feature',
      emoji: 'ð¸',
      value: 'feat',
    },
    fix: {
      description: 'A bug fix',
      emoji: 'ð',
      value: 'fix',
    },
    perf: {
      description: 'A code change that improves performance',
      emoji: 'â¡ï¸',
      value: 'perf',
    },
    refactor: {
      description: 'A code change that neither fixes a bug or adds a feature',
      emoji: 'ð¡',
      value: 'refactor',
    },
    release: {
      description: 'Create a release commit',
      emoji: 'ð¹',
      value: 'release',
    },
    style: {
      description: 'Markup, white-space, formatting, missing semi-colons...',
      emoji: 'ð',
      value: 'style',
    },
    test: {
      description: 'Adding missing tests',
      emoji: 'ð',
      value: 'test',
    },
  },
  types2: {
    'ð feat': {
      description: 'å¼å¥æ°åè½',
      title: 'Features',
    },
    'ð fix': {
      description: 'ä¿®å¤bug',
      title: 'Bug Fixes',
    },
    'ð docs': {
      description: 'æ°åææ¡£',
      title: 'Documentation',
    },
    'ð style': {
      description: 'æ ·å¼ä¿®æ¹',
      title: 'Styles',
    },
    'ð¬ text': {
      description: 'ææ¡ä¿®æ¹',
      title: 'Texts',
    },
    'ð© poo': {
      description: 'éåå±ä¸æ ·çä»£ç ',
      title: 'Code Poop',
    },
    'â¡ï¸ perf': {
      description: 'æ§è½ä¼å',
      title: 'Performance Improvements',
    },
    'â test': {
      description: 'å¢å æµè¯',
      title: 'Tests',
    },
    'ð build': {
      description: 'å½±åæå»ºç³»ç»æå¤é¨ä¾èµé¡¹çæ´æ¹',
      title: 'Builds',
    },
    'âï¸ tool': {
      description: 'å¢å å¼åå¿«ä¹å¼çå·¥å·',
      title: 'Tools',
    },
    'ð ci': {
      description:
        'å¯¹CIéç½®æä»¶åèæ¬çæ´æ¹(ç¤ºä¾èå´:Travis, Circle, BrowserStack, SauceLabs)',
      title: 'Continuous Integrations',
    },
    'ð§¹ chore': {
      description: 'æ¥å¸¸æäº',
      title: 'Chores',
    },
    'âª revert': {
      description: 'åéåå²çæ¬',
      title: 'Reverts',
    },
    'ð¥ conflict': {
      description: 'ä¿®æ¹å²çª',
      title: 'Conflict',
    },
    'ð® delete': {
      description: 'å é¤æä»¶',
      title: 'Delete Files',
    },
    'ð stash': {
      description: 'æå­æä»¶',
      title: 'Stash Files',
    },
  },
};
