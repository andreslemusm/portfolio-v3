import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import prettier from "eslint-config-prettier";
import stylistic from "@stylistic/eslint-plugin";
import functional from "eslint-plugin-functional";
import importX from "eslint-plugin-import-x";
import jestDom from "eslint-plugin-jest-dom";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import testingLibrary from "eslint-plugin-testing-library";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig(
  // Global ignores
  {
    ignores: [
      ".DS_Store",
      "node_modules/",
      "package-lock.json",
      ".react-router/",
      "build/",
      ".vercel/",
    ],
  },

  // Base config for JS files
  {
    files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2023,
      },
      sourceType: "module",
    },
  },

  // TypeScript and React files
  {
    files: ["**/*.ts", "**/*.tsx"],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "@stylistic": stylistic,
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      "import-x": importX,
      unicorn,
      functional,
      "testing-library": testingLibrary,
      "jest-dom": jestDom,
    },
    settings: {
      react: {
        version: "detect",
      },
      "import-x/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
      },
    },
    rules: {
      // ESLint built-in rules
      "@stylistic/line-comment-position": ["error", "above"],
      "@stylistic/multiline-comment-style": ["error", "starred-block"],
      "no-console": "error",
      "@stylistic/padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "return" },
      ],
      "prefer-arrow-callback": "error",
      "sort-imports": [
        "error",
        {
          memberSyntaxSortOrder: ["single", "all", "multiple", "none"],
        },
      ],
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["valibot"],
              message: "Please use '~/utils/validations' instead",
            },
          ],
        },
      ],

      // React rules
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      "react/jsx-fragments": ["error", "element"],
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "react/destructuring-assignment": ["error", "always"],
      "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],

      // React Hooks rules
      ...reactHooks.configs.recommended.rules,

      // JSX A11y rules
      ...jsxA11y.flatConfigs.strict.rules,
      "jsx-a11y/label-has-associated-control": [
        "error",
        {
          controlComponents: ["Input", "Textarea"],
        },
      ],
      "jsx-a11y/label-has-for": "off",

      // Import rules (using import-x)
      "import-x/export": "error",
      "import-x/exports-last": "error",
      "import-x/first": "error",
      "import-x/group-exports": "error",
      "import-x/newline-after-import": "error",
      "import-x/no-absolute-path": "error",
      "import-x/no-cycle": ["error", { ignoreExternal: true }],
      "import-x/no-deprecated": "error",
      "import-x/no-duplicates": "error",
      "import-x/no-extraneous-dependencies": [
        "error",
        { optionalDependencies: false },
      ],
      "import-x/no-named-as-default": "error",
      "import-x/no-named-default": "error",
      "import-x/no-namespace": "error",
      "import-x/no-self-import": "error",
      "import-x/no-useless-path-segments": ["error", { noUselessIndex: true }],
      "import-x/no-webpack-loader-syntax": "error",

      // TypeScript rules
      "@typescript-eslint/array-type": ["error", { default: "generic" }],
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/unbound-method": "off",
      "@typescript-eslint/prefer-readonly-parameter-types": "off",

      // Unicorn rules
      "unicorn/filename-case": [
        "error",
        {
          case: "kebabCase",
          ignore: [/.\$/, /._/],
        },
      ],

      // Functional rules
      ...functional.configs.strict.rules,
      "functional/immutable-data": "off",
      "functional/prefer-readonly-type": "off",
      "functional/no-mixed-types": "off",
      "functional/prefer-immutable-types": "off",
      "functional/no-throw-statements": "off",
      "functional/type-declaration-immutability": "off",
      "functional/functional-parameters": "off",
      "functional/no-conditional-statements": "off",
      "functional/no-expression-statements": "off",
      "functional/no-return-void": "off",
      "functional/no-try-statements": "off",

      // Testing Library rules
      ...testingLibrary.configs["flat/react"].rules,
      "testing-library/consistent-data-testid": [
        "error",
        {
          testIdPattern: "^test-id-([a-z]*)?$",
        },
      ],
      "testing-library/prefer-user-event": "error",

      // Jest DOM rules
      ...jestDom.configs["flat/recommended"].rules,
    },
  },

  // Prettier config (must be last to override formatting rules)
  prettier,
);
