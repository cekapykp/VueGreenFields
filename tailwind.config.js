/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF5733',
        secondary: '#33FF57',
        customColor: '#3366FF'
      }
    },
    fontFamily: {
      GTAmericaExpandedBold: ['"GT America Expanded Bold"', 'sans-serif'],
      GTAmericaRegular: ['"GT America Regular"', 'sans-serif'],
      GTAmericaExpandedBlack: ['"GT America Expanded Black"', 'sans-serif'],
      GTMonoThin: ['"GT Mono Thin"', 'sans-serif']
    }
  },
  plugins: []
}
