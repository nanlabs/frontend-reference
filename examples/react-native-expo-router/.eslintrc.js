module.exports = {
  root: true,
  extends: ['universe/native', 'universe/shared/typescript-analysis', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
