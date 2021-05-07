module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        nav: {
          DEFAULT: '#010123',
        },
      },
      fontFamily: {
        dm: ['DM Sans'],
        mont: ['Montserrat'],
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
