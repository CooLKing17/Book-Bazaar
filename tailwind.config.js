/** @type {import('tailwindcss').Config} */
// import B1 from './src/Utilities/Image/B1.png'
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      screens:{
        'unline': {'raw': '(text-decoration: underline)'},
        'sm':{'min':'875px'},
        'smx':{'min':'375px'},
        'mdx':{'max':'550px'},
        'mdy':{'max':'1100px'},

      },
      backgroundImage:{
        'hero': "url('https://i.makeagif.com/media/8-22-2017/tFTl2R.gif')",
        'back': "url('/src/Utilities/Image/B1.png')",
        'back2': "url('/src/Utilities/Image/B2.gif')",
        'back3': "url('/src/Utilities/Image/B4.png')",
        'back4': "url('/src/Utilities/Image/B5.png')",
        'back5': "url('/src/Utilities/Image/B3.webp')",

      },

      backgroundSize:{
        'half':'700px 300px',
        'half1':'400px 100px',
        'half2':'760px 310px',
        'mhalf':'400px 300px',
      },
      
    },
  },
  variants: {
    
  },
  plugins: [],
}

