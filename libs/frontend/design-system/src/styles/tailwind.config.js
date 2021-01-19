const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    `libs/frontend/design-system/src/**/*.html`,
    `libs/frontend/design-system/src/**/*.ts`
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
