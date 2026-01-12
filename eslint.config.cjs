module.exports = [
  {
    files: ["**/*.{js,ts,tsx}"],
    ignores: ["**/node_modules/**", "**/.expo/**", "web-build/**"],

    languageOptions: {
      // <-- require the parser module, not the path string
      parser: require("@typescript-eslint/parser"),
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        // add `project: './tsconfig.json'` only if you want type-aware rules
      },
      globals: { Atomics: "readonly", SharedArrayBuffer: "readonly" },
    },

    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
      react: require("eslint-plugin-react"),
      "react-hooks": require("eslint-plugin-react-hooks"),
      prettier: require("eslint-plugin-prettier"),
    },

    settings: { react: { version: "detect" } },

    rules: {
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
    },
  },
];
