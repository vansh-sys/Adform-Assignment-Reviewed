module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'promise-catch/throw-or-log': 'off',
    'no-restricted-syntax': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/prop-types': 'off',
    'no-unused-expressions': 'off',
    'linebreak-style': 'off',
    'global-require': 'off',
    'eslint linebreak-style': [0, "error", "windows"],
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading' : 'off',
    'react/jsx-filename-extension' : 'off',
    'no-undef' : 'off',
    'no-param-reassign' : 'off',
    'max-len' : 'off'

  },
};