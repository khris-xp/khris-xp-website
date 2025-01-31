import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        jamjuri: ['Bai Jamjuree', ' sans-serif'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light'],
    darkTheme: 'light',
  },
};
