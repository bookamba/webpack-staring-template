import { fixupConfigRules } from '@eslint/compat'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  {
    ignores: ['**/dist', '**/node_modules', '**/webpack.*', '**/config/webpack.*', '**/config'],
  },
  ...fixupConfigRules(compat.extends('eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:prettier/recommended')),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      ecmaVersion: 2022,
      sourceType: 'module',
    },

    settings: {
      'import/resolver': {
        webpack: {
          config: './config/webpack.common.js',
        },
      },
    },

    rules: {
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
        },
      ],

      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],

      'prefer-const': 'warn',
      'no-var': 'error',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'multi-line'],
      'prefer-template': 'warn',

      'no-use-before-define': [
        'error',
        {
          functions: false,
          classes: true,
        },
      ],

      'no-shadow': 'warn',

      camelcase: [
        'warn',
        {
          properties: 'never',
        },
      ],

      'max-len': [
        'warn',
        {
          code: 200,
          ignoreUrls: true,
        },
      ],

      'import/order': [
        'warn',
        {
          'newlines-between': 'always',

          alphabetize: {
            order: 'asc',
          },
        },
      ],
    },
  },
]
