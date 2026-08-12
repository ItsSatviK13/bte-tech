/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        card: '0 5px 15px rgba(0,0,0,0.04)',
      },
    },
  },
  plugins: [],
}

