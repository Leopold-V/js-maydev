module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    textColor: {
      'primary': '#dde0e2',
      'blue': '#7b78ff',
      'muted': '#c2c6ca',
      'gray': '#1a2634',
      'white': '#ffffff',
      'black': '#000000',
    },
    backgroundColor: {
      'gray': '#1a2634',
      'gray-light': '#2e3a48',
      'blue': '#7b78ff',
      'background': '#0d1219',
      'white': '#ffffff',
      'black': '#000000',
    },
    extend: {
      ringColor: {
        'primary': '#7b78ff',
      },
      borderColor: {
        'primary': '#7b78ff',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
