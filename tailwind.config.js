/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#e501f0',
        primarylight: '#ea33f3',
        secondary: '#d671da',
        bluelight: '#19A8E0',
      },

      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
        kaushan: ['"Kaushan Script"', 'cursive'],
        quicksand: ['"Quicksand"', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
