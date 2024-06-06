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
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        flipBack: {
          '0%': { transform: 'rotateY(180deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
      },
      animation: {
        flipCard: 'flip 0.6s forwards',
        flipBack: 'flip-back 0.6s forwards',
      },
      fontFamily: {
        'Honk': ['Honk', 'sans']
      },
    },
    plugins: [],
  }
}

