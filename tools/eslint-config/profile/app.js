// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    'no-unused-vars': 0,
  },
};
