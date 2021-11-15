const rushLib = require('@microsoft/rush-lib');

const rushConfiguration = rushLib.RushConfiguration.loadFromDefaultLocation();
const uniq = (arr) => [...new Set(arr)];

const scopes = uniq(
  rushConfiguration.projects.reduce(
    (s, project) => {
      return [...s, project.packageName.split('/').pop(), project.projectFolder.split('/').pop()];
    },
    ['all'],
  ),
);

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', scopes],
    'scope-empty': [2, 'never'],
  },
};
