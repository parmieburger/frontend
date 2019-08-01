module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: ['prettier'],
  env: {
    browser: true
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  }
};
