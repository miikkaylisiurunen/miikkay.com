const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-roboto-mono)', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        background: '#0C0E11',
        cardBackground: {
          DEFAULT: '#121418',
          lighter: '#1B1E22',
        },
      },
    },
  },
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
