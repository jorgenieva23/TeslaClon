/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Gotham SSm A, sans-serif"],
      "din-bold": ["D-DIN-Bold", "Arial", "Verdana", "sans-serif"],
      "din-regular": ["D-DIN-Regular", "Arial", "Verdana", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
};
