module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    textColor: {
      'primary': '#f9fafa',
      'secondary': '#7b78ff',
      'muted': '#c2c6ca'
    },
    
    backgroundColor: {
      'primary': '#1a2634',
      'secondary': '#7b78ff',
      'background': '#0d1219'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
