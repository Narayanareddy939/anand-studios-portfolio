/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        brand: {
          gold: '#C5A059',
          lightGold: '#E6D5B8',
          darkGold: '#9F7E3B',
          charcoal: '#1A1A1A',
          black: '#0F0F0F',
          ivory: '#FAF9F6',
          light: '#FFFFFF'
        }
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #1A1A1A 0%, #333333 100%)',
        'gradient-gold': 'linear-gradient(135deg, #C5A059 0%, #E6D5B8 50%, #9F7E3B 100%)',
      }
    },
  },
  plugins: [],
}
