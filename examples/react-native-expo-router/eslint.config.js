const { fixupConfigRules } = require('@eslint/compat');
const { defineConfig } = require('eslint/config');
const native = require('eslint-config-universe/flat/native');
const typescriptAnalysis = require('eslint-config-universe/flat/shared/typescript-analysis');
const compatibleUniverse = fixupConfigRules([...native, ...typescriptAnalysis]);

module.exports = defineConfig(
  {
    ignores: [
      '**/node_modules/**',
      '**/coverage/**',
      '**/dist/**',
      '**/dev-dist/**',
      '**/public/**',
      '**/mocks/**',
      'jest.config.js',
      'postcss.config.js',
      'babel.config.js',
      '**/*.d.ts',
      'src/theme/**',
      'tools/**',
      'docs/**',
    ],
  },
  ...compatibleUniverse,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
);
