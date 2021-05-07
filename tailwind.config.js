module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        nav: {
          // DEFAULT: '#010123',
          DEFAULT: 'rgb(13 13 80)',
        },
        accent: {
          DEFAULT: '#DAA520',
          2: '#5c1ed6',
        },
      },
      fontFamily: {
        dm: ['DM Sans'],
        mont: ['Montserrat'],
        space: ['Space Mono'],
      },
      // fontSize: {
      //   md: '14px',
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
