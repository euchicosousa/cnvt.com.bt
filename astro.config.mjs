// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [
          tailwindcss()
      ]
  },

  integrations: [react(), solidJs()]
});