/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flipCard: {
          '0%': { transform: 'rotateX(0)' },
          '100%': { transform: 'rotateY(180deg)' }
        },
        hideImage: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' }
        }
      },
      fontFamily: {
        'Honk': ['Honk', 'sans']
      },
    },
    plugins: [],
  }
}

