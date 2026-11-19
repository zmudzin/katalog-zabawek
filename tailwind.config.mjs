/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        craft: {
          bg: '#F7F4EF',
          card: '#FFFFFF',
          border: '#E5E0D8',
          dark: '#1C1E21',
          muted: '#63605B',
          accent: '#D95D39',
          'accent-hover': '#C04D2A',
          olive: '#3F5E4D',
          'olive-hover': '#324C3E',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      aspectRatio: {
        '4/5': '4 / 5',
      }
    },
  },
  plugins: [],
};
