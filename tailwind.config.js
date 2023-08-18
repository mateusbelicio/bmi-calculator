/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#8FAECF',
          300: '#587DFF',
          400: '#345FF6',
        },
        neutral: {
          300: '#D8E2E7',
          400: '#5E6E85',
          500: '#253347',
        },
      },
      boxShadow: {
        DEFAULT: '1rem 2rem 3.5rem 0 rgb(0 0 0 / 0.25);',
        radio: '0 0 0 0.5rem rgb(52 95 246 / 0.15)',
      },
      gridTemplateColumns: {
        fit: 'repeat(auto-fit, minmax(20rem, 1fr))',
        fill: 'repeat(auto-fill, 20rem)',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1160px',
    },
    fontSize: {
      xm: ['0.625rem', 1],
      sm: ['0.875rem', 1.5],
      base: ['1rem', 1.5],
      md: ['1.25rem', 1.1],
      lg: ['1.5rem', 1.2],
      xl: ['clamp(2.00rem, calc(0.04rem + 4.08vw), 3.00rem)', 1.1],
      '2xl': ['clamp(3.00rem, calc(1.04rem + 4.08vw), 4.00rem)', 1.1],
    },
    fontFamily: {
      sans: '"Inter", sans-serif',
    },
  },
  plugins: [],
  darkMode: 'class',
};
