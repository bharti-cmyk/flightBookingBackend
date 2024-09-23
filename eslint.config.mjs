import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import jest from "eslint-plugin-jest";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  {
    ignores: ["build/"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}", "tests/**/*.{js,jsx,tsx,ts}"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.strict,
  {
    files: ["tests/**/*.{js,ts,jsx,tsx}"],
    ...jest.configs["flat/recommended"],
    rules: {
      ...jest.configs["flat/recommended"].rules,
      "jest/prefer-expect-assertions": "off",
    },
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
    },
  },
  eslintPluginPrettierRecommended,
];
