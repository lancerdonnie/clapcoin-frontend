module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        nav: {
          DEFAULT: 'rgb(13 13 80)',
        },
        accent: {
          DEFAULT: '#DAA520',
          2: '#5c1ed6',
        },
        alt: {
          DEFAULT: '#010123',
        },
      },
      screens: {
        sm: { max: '640px' },
        md: { max: '768px' },
        lg: { max: '1024px' },
        xl: { max: '1280px' },
        '2xl': { max: '1536px' },
      },
      fontFamily: {
        dm: ['DM Sans'],
        mont: ['Montserrat'],
        space: ['Space Mono'],
        rubik: ['Rubik'],
        inter: ['Inter'],
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
