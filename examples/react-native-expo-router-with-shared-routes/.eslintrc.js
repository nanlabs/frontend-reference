module.exports = {
  root: true,
  extends: ['universe/native', 'universe/shared/typescript-analysis', 'plugin:prettier/recommended'],
  ignorePatterns: ['.eslintrc.js'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
