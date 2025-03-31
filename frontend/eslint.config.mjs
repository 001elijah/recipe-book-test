import { fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import eslintJs from '@eslint/js'
import eslintPluginNext from '@next/eslint-plugin-next'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import path from 'node:path'
import url from 'node:url'
import typescriptEslint from 'typescript-eslint'

export default [
  eslintJs.configs.recommended,
  ...new FlatCompat({ baseDirectory: path.dirname(url.fileURLToPath(import.meta.url)) }).extends('eslint-config-standard'),
  eslintPluginPerfectionist.configs['recommended-natural'],
  eslintPluginReact.configs.flat.recommended,
  ...typescriptEslint.configs.recommended,
  eslintConfigPrettier,
  {
    plugins: {
      '@next/next': fixupPluginRules(eslintPluginNext),
      prettier: eslintPluginPrettier,
      'react-hooks': fixupPluginRules(eslintPluginReactHooks)
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      camelcase: 'off',
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              importNames: ['default', 'FC'],
              message: 'React default import is not needed with React 17+',
              name: 'react'
            }
          ]
        }
      ],
      'perfectionist/sort-imports': ['error', { newlinesBetween: 'never' }],
      'prettier/prettier': ['error', { arrowParens: 'avoid', endOfLine: 'lf', printWidth: 160, semi: false, singleQuote: true, trailingComma: 'none' }],
      'react/react-in-jsx-scope': 'off',
      ...eslintPluginNext.configs.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    ignores: ['.next', 'node_modules']
  }
]
