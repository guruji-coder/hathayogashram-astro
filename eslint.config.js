import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';

export default [
  js.configs.recommended,
  ...eslintPluginAstro.configs.all,
  prettierConfig,
  {
    languageOptions: {
      globals: {
        console: true,
        document: true,
        window: true,
        Astro: true,
      },
    },
  },
  {
    ignores: ['dist/', '.astro/', 'node_modules/', '*.config.js', '*.config.ts']
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      // '@typescript-eslint/no-unused-vars': 'off', // Turn off for now
      // '@typescript-eslint/no-explicit-any': 'off', // Turn off for now
      'no-unused-vars': 'off',
      'no-undef': 'off', // TypeScript handles this
    },
  },
  {
    files: ['**/*.astro'],
    rules: {
      'no-unused-vars': 'off',
      'no-undef': 'off',
      // '@typescript-eslint/no-unused-vars': 'off',
      'astro/no-unused-css-selector': 'off',
    },
  },
  {
    files: ['**/*.svelte'],
    plugins: {
      svelte: eslintPluginSvelte,
    },
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: typescriptParser,
        sourceType: 'module'
      }
    },
    processor: 'svelte/svelte',
    rules: {
      ...eslintPluginSvelte.configs.recommended.rules
    }
  },
  {
    ignores: ['dist/**/*', '.astro/**/*', 'node_modules/**/*', '*.config.js', '*.config.ts']
  }
];
