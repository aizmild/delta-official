/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite.{js,ts}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
