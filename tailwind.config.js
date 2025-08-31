/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['"Space Grotesk"', "sans-serif"],
        kaushan: ['"Kaushan Script"', "cursive"],
        quicksand: ['"Quicksand"', "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
