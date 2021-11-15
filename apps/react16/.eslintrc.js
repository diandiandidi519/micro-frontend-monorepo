require('@rushstack/eslint-config/patch/modern-module-resolution');
module.exports = {
  extends: ['@rushstack/eslint-config/profile/web-app'],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
};
