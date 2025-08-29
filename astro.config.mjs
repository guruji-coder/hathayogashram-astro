import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  site: 'https://hathayogashram.com',
  integrations: [
    svelte(),
    tailwind(),
    sitemap({
      customPages: [
        'https://hathayogashram.com/200-hour-yoga-teacher-training',
        'https://hathayogashram.com/300-hour-yoga-teacher-training',
        'https://hathayogashram.com/yoga-philosophy',
        'https://hathayogashram.com/accommodation',
        'https://hathayogashram.com/gallery',
        'https://hathayogashram.com/testimonials',
        'https://hathayogashram.com/contact',
        'https://hathayogashram.com/our-teachers',
        'https://hathayogashram.com/blog'
      ],
      serialize(item) {
        // Set priority based on page importance
        if (item.url.includes('/200-hour') || item.url.includes('/300-hour')) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        } else if (item.url === 'https://hathayogashram.com/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/blog/')) {
          item.priority = 0.7;
          item.changefreq = 'weekly';
        } else {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        return item;
      }
    })
  ],
  vite: {
    optimizeDeps: {
      include: ['clsx', 'tailwind-merge']
    },
    resolve: {
      alias: {
        '$lib': fileURLToPath(new URL('./src/lib', import.meta.url)),
        '$constants': fileURLToPath(new URL('./src/constants', import.meta.url)),
        '$components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '$schemas': fileURLToPath(new URL('./src/schemas', import.meta.url))
      }
    }
  },
  // Performance optimizations
  build: {
    inlineStylesheets: 'auto'
  },
  // Image optimization
  image: {
    domains: ['hathayogashram.com'],
    remotePatterns: [{ protocol: 'https' }]
  }
});