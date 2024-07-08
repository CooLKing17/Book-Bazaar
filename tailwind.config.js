/** @type {import('tailwindcss').Config} */
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
        'smm':{'min':'400px'},
      },
      
    },
  },
  variants: {
    
  },
  plugins: [],
}

