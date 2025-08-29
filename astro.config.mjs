import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  integrations: [
    svelte(),
    tailwind()
  ],
  vite: {
    optimizeDeps: {
      include: ['clsx', 'tailwind-merge']
    },
    resolve: {
      alias: {
        '$lib': fileURLToPath(new URL('./src/lib', import.meta.url)),
        '$constants': fileURLToPath(new URL('./src/constants', import.meta.url)),
        '$components': fileURLToPath(new URL('./src/components', import.meta.url))
      }
    }
  }
});