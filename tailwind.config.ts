/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#005BFF',
        secondary: '#52525B',
        tertiary: '#475467',
        medium: '#52525B',
        subtle: '#37475D'
      }
    },
    fontSize: {
      xs: '0.8rem',
      sm: '0.875rem',
      base: '1rem',
      xl: '1.25rem',
      heading: '2rem',
    }
  },
  plugins: [],
}

