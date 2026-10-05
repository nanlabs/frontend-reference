import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

// Keep ESLint 10 core and TypeScript rules here: eslint-config-next currently
// introduces an unfixed `braces` advisory and plugins whose peer ranges stop at ESLint 9.
const eslintConfig = defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
