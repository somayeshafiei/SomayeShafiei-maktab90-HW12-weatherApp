/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00076b',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
