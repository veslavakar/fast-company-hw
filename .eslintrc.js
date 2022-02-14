module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
  },

  plugins: ['react'],
  rules: {
    indent: ['error', 4],
    'space-before-function-paren': ['error', 'never'],
  },
}