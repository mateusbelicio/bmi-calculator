/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#345FF6',
        },
        neutral: {
          300: '#D8E2E7',
          400: '#D8E2E7',
          500: '#253347',
        },
      },
    },
    fontSize: {
      xm: ['0.625rem', 1],
      sm: ['0.875rem', 1.5],
      base: ['1rem', 1.5],
      md: ['1.25rem', 1.1],
      lg: ['1.5rem', 1.1],
      xl: ['clamp(2.00rem, calc(1.49rem + 2.18vw), 3.00rem)', 1.1],
      '2xl': ['clamp(3.00rem, calc(2.49rem + 2.18vw), 4.00rem)', 1.1],
    },
    fontFamily: {
      sans: '"Inter", sans-serif',
    },
  },
  plugins: [],
  darkMode: 'class',
};
