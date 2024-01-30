/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          primary: '#F60621',
          primarydark: '#E00019',
          primarylight: '#F25869',
          secondary: '#999999',
          secondarydark: '#5F5F5F',
          secondarylight: '#EEEEEE',
          success: '#28A745',
          danger: '#DC3545',
          warning: '#FFC107',
          information: '#023668'
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}