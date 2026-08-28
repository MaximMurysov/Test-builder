import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import boundaries from 'eslint-plugin-boundaries';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: { boundaries },
    settings: {
      'import/resolver': {
        typescript: { project: './tsconfig.app.json' },
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      },
      'boundaries/elements': [
        { type: 'app', pattern: 'src/app/**' },
        { type: 'pages', pattern: 'src/pages/*', capture: ['slice'] },
        { type: 'widgets', pattern: 'src/widgets/*', capture: ['slice'] },
        { type: 'features', pattern: 'src/features/*', capture: ['slice'] },
        { type: 'entities', pattern: 'src/entities/*', capture: ['slice'] },
        { type: 'shared', pattern: 'src/shared/*', capture: ['segment'] },
      ],
    },
    rules: {
      ...boundaries.configs.recommended.rules,
      'boundaries/dependencies': [
        2,
        {
          default: 'disallow',
          policies: [
            {
              from: { element: { type: 'app' } },
              allow: {
                to: {
                  element: {
                    types: ['pages', 'widgets', 'features', 'entities', 'shared'],
                    fileInternalPath: 'index.ts',
                  },
                },
              },
            },
            {
              from: { element: { type: 'pages' } },
              allow: { to: { element: { types: ['widgets', 'features', 'entities', 'shared'] } } },
            },
            {
              from: { element: { type: 'widgets' } },
              allow: { to: { element: { types: ['features', 'entities', 'shared'] } } },
            },
            {
              from: { element: { type: 'features' } },
              allow: { to: { element: { types: ['entities', 'shared'] } } },
            },
            {
              from: { element: { type: 'entities' } },
              allow: { to: { element: { types: ['shared'] } } },
            },
          ],
        },
      ],
    },
  },
]);
