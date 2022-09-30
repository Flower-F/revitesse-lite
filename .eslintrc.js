const { defineConfig } = require('eslint-define-config')

const options = defineConfig({
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    '@antfu/eslint-config-ts',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['jsx-a11y', 'react', 'react-hooks', 'simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/order': 'off',
    'sort-imports': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs'],
    'curly': ['error', 'all'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
})

module.exports = options
