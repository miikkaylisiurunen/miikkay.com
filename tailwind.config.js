const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
      },
    },
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
  },
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
