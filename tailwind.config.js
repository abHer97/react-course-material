/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      inset: {
        58: '14.5rem',
        59: '14.75rem',
      },
    },
  },
  plugins: [],
};
