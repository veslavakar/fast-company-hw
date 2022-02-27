module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
  },

  plugins: ['react'],
  rules: {
    quotes: [
      'error',
      'double',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    indent: ['error', 4],
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never' },
    ],
  },
}
