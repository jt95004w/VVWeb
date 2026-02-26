import eslintPluginAstro from 'eslint-plugin-astro';
import globals from 'globals';

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.{js,mjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser
    }
  }
];
