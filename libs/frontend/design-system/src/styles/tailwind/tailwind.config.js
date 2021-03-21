const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [`libs/frontend/**/*.html`, `libs/frontend/**/*.ts`],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      alpha: colors.coolGray,
      bravo: colors.indigo,
      charlie: colors.pink,
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      margin: ['responsive', 'last'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
