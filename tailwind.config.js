/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'cubano': ['Cubano', 'sans-serif'],
        'montserrat':['Montserrat', 'sans-serif'],
        'inter':['Inter', 'sans-serif'],
      },
      fontSize: {
        'xxl': '13rem'
      },
      colors: {
        'turquoise': '#B6D8DE',
        'dark-turquoise': '#6FB3BE',
        'light-turquoise-1': '#64A6A8',
        'light-turquoise-2': '#97C8C9',
        'light-turquoise-3': '#CCE1E2',

      },
      spacing: {
        '100': '50rem',
      }
    },
  },
  plugins: [],
}
