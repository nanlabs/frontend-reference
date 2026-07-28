import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';

export default [
  {
    ignores: [
      'node_modules/',
      'coverage/',
      'dist/',
      'build/',
      'dev-dist/',
      'public/',
      '__mocks__/',
      'src/theme/',
      'tools/',
      '**/*.d.ts',
      'dist-electron/',
      'release/',
      '.prettierrc.js',
      'postcss.config.js',
      'electron/',
    ],
  },
  {
    files: ['**/*.{ts,tsx}'],
    ignores: [
      'vite.config.ts',
      'vite.config.d.ts',
      'vitest.config.ts',
      'electron/**/*',
      '.storybook/**/*',
      'playwright.config.ts',
    ],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.node,
        ...globals.es2020,
      },
    },
  },
  {
    files: ['vite.config.ts'],
    ignores: ['**/*.d.ts'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.node.json',
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.node,
        ...globals.es2020,
      },
    },
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.node,
        ...globals.es2020,
      },
    },
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      react,
      prettier,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'prettier/prettier': 'error',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
];
