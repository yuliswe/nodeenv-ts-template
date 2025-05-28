module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:jest/recommended',
    'plugin:react-native/all',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { tsconfigRootDir: __dirname, project: true },
  settings: {
    'import/resolver': {
      typescript: { project: `${__dirname}/tsconfig.json` },
      node: true,
    },
  },
  plugins: [
    'local-rules',
    '@typescript-eslint',
    'unused-imports',
    'jest',
    'react',
    'react-native',
    'react-hooks',
  ],
  ignorePatterns: [
    '**/*.js',
    '**/*.cjs',
    '**/*.mjs',
    '**/dist/**',
    '**/node_modules/**',
    '**/build/**',
    '**/.aws-sam/**',
    '**/__generated__/**',
  ],
  rules: {
    'local-rules/collapse-single-object-argument': 'warn',
    'local-rules/sort-function-argument-props': 'warn',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-types': ['error', { types: { '{}': false } }],
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      { allowNullish: true },
    ],
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'unused-imports/no-unused-imports-ts': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'require-yield': 'off',
    'prefer-const': 'error',
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: { object: true, array: false },
        AssignmentExpression: { object: true, array: false },
      },
    ],
    'object-shorthand': ['error', 'properties'],
    'no-useless-rename': 'error',
    'no-restricted-globals': [
      'error',
      {
        name: 'fetch',
        message:
          'Do not use fetch directly. Use the fetchWithTimeout helper instead.',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          { group: ['node:test'], message: 'Please use @jest/global instead.' },
          {
            importNames: ['graphql'],
            group: ['graphql'],
            message: 'Please use @/typed-graphql.',
          },
          {
            importNames: ['RequestContext'],
            group: ['node-fetch'],
            message: 'Did you mean to import it from @/RequestContext?',
          },
          {
            group: [
              '@/lambdaHandler',
              '**/lambdaHandler',
              '@/sqsHandler',
              '**/sqsHandler',
            ],
            message: 'Do not import the entrypoint module.',
          },
          {
            importNames: ['Animated'],
            group: ['react-native'],
            message:
              'Do not import Animated from react-native. Use react-native-reanimated instead.',
          },
          {
            importNames: ['SafeAreaView'],
            group: ['react-native'],
            message:
              'Do not import SafeAreaView from "react-native". Import from "react-native-safe-area-context" instead.',
          },
          {
            importNames: ['FlatList'],
            group: ['react-native'],
            message:
              'Do not import FlatList from react-native. Use src/components/react-wrappers/FlatList.tsx instead.',
          },
          {
            importNames: ['ScrollView'],
            group: ['react-native'],
            message:
              'Do not import ScrollView from react-native. Use src/components/react-wrappers/ScrollView.tsx instead.',
          },
          {
            group: ['./*', '../*'],
            message:
              'Do not use relative imports. Use absolute imports instead.',
          },
        ],
        paths: [
          {
            name: 'path',
            message: "Use 'node:path' instead of 'path' for Node.js built-ins.",
          },
          {
            name: 'fs',
            message: "Use 'node:fs' instead of 'fs' for Node.js built-ins.",
          },
          {
            name: 'os',
            message: "Use 'node:os' instead of 'os' for Node.js built-ins.",
          },
          {
            name: 'crypto',
            message:
              "Use 'node:crypto' instead of 'crypto' for Node.js built-ins.",
          },
          {
            name: 'process',
            message:
              "Use 'node:process' instead of 'process' for Node.js built-ins.",
          },
          {
            name: 'url',
            message: "Use 'node:url' instead of 'url' for Node.js built-ins.",
          },
          {
            name: 'child_process',
            message:
              "Use 'node:child_process' instead of 'child_process' for Node.js built-ins.",
          },
          {
            name: 'stream',
            message:
              "Use 'node:stream' instead of 'stream' for Node.js built-ins.",
          },
          {
            name: 'util',
            message: "Use 'node:util' instead of 'util' for Node.js built-ins.",
          },
          {
            name: 'events',
            message:
              "Use 'node:events' instead of 'events' for Node.js built-ins.",
          },
          {
            name: 'http',
            message: "Use 'node:http' instead of 'http' for Node.js built-ins.",
          },
          {
            name: 'https',
            message:
              "Use 'node:https' instead of 'https' for Node.js built-ins.",
          },
          {
            name: 'zlib',
            message: "Use 'node:zlib' instead of 'zlib' for Node.js built-ins.",
          },
          {
            name: 'buffer',
            message:
              "Use 'node:buffer' instead of 'buffer' for Node.js built-ins.",
          },
          {
            name: 'timers',
            message:
              "Use 'node:timers' instead of 'timers' for Node.js built-ins.",
          },
        ],
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector:
          "CallExpression[callee.object.name='sql'][callee.property.name='raw']",
        message:
          'Usage of sql.raw is not allowed. The input is not checked or escaped by Kysely in any way.',
      },
      {
        selector:
          "CallExpression[callee.object.name='sql'][callee.property.name='id']",
        message:
          'Usage of sql.id is not allowed. The input is not checked or escaped by Kysely in any way.',
      },
      {
        selector:
          "CallExpression[callee.object.name='sql'][callee.property.name='lit']",
        message:
          'Usage of sql.lit is not allowed. The input is not checked or escaped by Kysely in any way.',
      },
      {
        selector:
          "CallExpression[callee.object.name='sql'][callee.property.name='literal']",
        message:
          'Usage of sql.literal is not allowed. The input is not checked or escaped by Kysely in any way.',
      },
      {
        selector:
          "CallExpression[callee.object.name='sql'][callee.property.name='ref']",
        message:
          'Usage of sql.ref is not allowed. The input is not checked or escaped by Kysely in any way.',
      },
      {
        selector:
          "CallExpression[callee.object.name='sql'][callee.property.name='table']",
        message:
          'Usage of sql.table is not allowed. The input is not checked or escaped by Kysely in any way.',
      },
      {
        selector: "CallExpression[callee.name='expect']",
        message: 'Function expressions are not allowed in source files.',
      },
      {
        selector:
          "MemberExpression[object.name='process'][property.name='env']",
        message:
          'Do not use process.env directly. Use the Env helper module instead.',
      },
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name='log']",
        message: 'Reminder: remove console.log.',
      },
      {
        selector:
          "CallExpression[callee.object.name='router'][callee.property.name='back']",
        message:
          'Do not use router.back(). Use `routerDismissTo` or `routerBackOrDismissTo` instead.',
      },
    ],
    'react-native/no-raw-text': [
      'error',
      {
        skip: [
          'ThemePurpleButton',
          'ThemeOutlineButton',
          'ThemeLinkButton',
          'ThemeBlackButton',
          'ScreenTitle',
          'ScreenTitle2',
          'SmallThemePurpleButton',
          'SmallThemeWhiteButton',
          'Heading1',
          'Heading2',
          'Heading3',
          'Heading4',
          'Heading5',
        ],
      },
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
    'import/no-cycle': 'error',
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-relative-packages': 'error',
    'import/no-unused-modules': [
      'warn',
      {
        unusedExports: true,
        missingExports: false,
        ignoreUnusedTypeExports: false,
      },
    ],
    'import/no-named-as-default-member': 'off',
  },
  overrides: [
    {
      files: ['**/*.test.ts'],
      rules: {
        'no-restricted-syntax': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        'jest/no-restricted-matchers': [
          'error',
          {
            toMatchSnapshot:
              'Use toMatchInlineSnapshot instead of toMatchSnapshot.',
            toThrowErrorMatchingSnapshot:
              'Use toThrowErrorMatchingInlineSnapshot instead of toThrowErrorMatchingSnapshot.',
          },
        ],
      },
    },
    {
      files: ['**/migrations/**/*.ts'],
      rules: {
        'no-restricted-syntax': 'off',
        'import/no-unused-modules': 'off',
      },
    },
    {
      files: ['src/app/**/*.tsx'],
      rules: { 'import/no-unused-modules': 'off' },
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
    {
      files: ['**/tests/**/*.ts'],
      rules: {
        'no-restricted-syntax': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
      },
    },
  ],
};
