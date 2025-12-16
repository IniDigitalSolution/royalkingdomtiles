/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./index.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Layfort', 'sans-serif'],
      },
      colors: {
        // Kajaria-inspired color palette
        primary: '#15508b', // Blue
        'primary-dark': '#0f3d6b',
        'primary-light': '#1a62a8',
        secondary: '#1a1a1a', // Near black
        teal: {
          DEFAULT: '#0d5563',
          dark: '#0a4650',
          darker: '#073a42',
        },
        gray: {
          light: '#F0F2EF',
          100: '#F0F2EF',
          200: '#e5e7e4',
          300: '#d1d3d0',
          400: '#9ca39b',
          500: '#6b726a',
          600: '#4a504a',
          700: '#353835',
          800: '#252725',
          900: '#1a1a1a',
        },
      },
    },
  },
  plugins: [],
}
