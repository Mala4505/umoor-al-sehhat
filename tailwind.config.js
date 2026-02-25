
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        'app-bg': '#F0FDF4',
        'card-bg': '#D1FAE5',
        'accent': '#059669',
        'accent-dark': '#047857',
        'text-primary': '#064E3B',
        'text-secondary': '#6B7280',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
