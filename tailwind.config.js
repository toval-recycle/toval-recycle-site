/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: { xs: '450px' },
      colors: {
        main: '#46A390',
        secondary: '#D9F8F1',
        third: '#124729',
        Fourth: '#A2FF86',
        fifth: '#ADE515',
      },
    },
  },
  plugins: [],
};
