/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '0 20px 80px 25px #986D00',
      },
      backgroundImage: {
        'cloud': "url('./assets/img/cloud.png')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

