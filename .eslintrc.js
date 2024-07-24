module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: 'off',
    'arrow-body-style': 'off',
    'vue/max-attributes-per-line': 'off',
    'func-names': 'off',
    'consistent-return': 'off',
    'object-curly-newline': 'off',
    'max-len': 'off',
    'import/order': 'off',
  },
};
