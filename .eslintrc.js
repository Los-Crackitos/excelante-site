module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', 'react'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/extensions': ['.js', 'jsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', 'jsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    'react/jsx-props-no-spreading': [
      'error',
      {
        exceptions: ['Component'],
      },
    ],
  },
};
