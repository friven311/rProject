module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      tsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint', 'react-native'],
  rules: {
    '@typescript-eslint/no-shadow': ['error'],
    'no-shadow': 'off',
    'no-undef': 'off',
    'react-native/no-unused-styles': ['error'],
    'linebreak-style': ['error', 'unix'],
    'react-native/split-platform-components': ['error'],
    'react-native/no-inline-styles': ['error'],
    'react-native/no-color-literals': ['error'],
    'react-native/no-raw-text': ['error'],
    'no-confusing-arrow': ['error', { allowParens: false }],
  },
};
