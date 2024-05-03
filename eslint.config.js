// /** @type {import('eslint'.Linter.Config)} */
// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//     node: true,
//   },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:@typescript-eslint/recommended',
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//   ecmaFeatures: {
//     jsx: true,
//   },
//   ecmaVersion: 'latest',
//   sourceType: 'module',
// },
//   plugins: ['react', 'react-hooks', '@typescript-eslint'],
//   rules: {
//     'react/react-in-jsx-scope': 'off',
//     '@typescript-eslint/no-var-requires': 'off',
//   },
//   settings: {
// react: {
//   version: 'detect',
// },
//   },
// };

import jsPlugin from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';

/** @type {import('eslint'.Linter.FlatConfig[])} */
const eslintConfig = [
  {
    files: ['**/*.{ts}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        globals: {
          ...globals.browser,
          ...globals.es2021,
          ...globals.node,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      // ...reactHooksPlugin.rules,
      ...jsPlugin.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    ignores: ['node_modules', 'dist', 'coverage', 'public', '*.d.ts', 'stats.html', '*.md'],
  },
];

export default eslintConfig;
