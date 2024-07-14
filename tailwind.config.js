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
        'smm':{'min':'400px'},
        'smx':{'min':'830px'},
      },
      backgroundImage:{
        'hero': "url('https://i.makeagif.com/media/8-22-2017/tFTl2R.gif')",
        'hero2': "url('https://static.vecteezy.com/system/resources/previews/011/154/610/non_2x/white-quotes-box-speech-bubble-text-box-decoration-png.png')",
        'buying':"url('https://cdn.dribbble.com/users/249246/screenshots/2958948/shopping.gif')",
        'buyingbg':"url('https://kitabay.com/cdn/shop/articles/Bookshop.4e55c974dd9bc7189717.gif?v=1707726779')",
        'b':"url('https://kannadabookhouse.com/wp-content/uploads/2021/04/Bookshop.gif')",
        'c':"url('https://qph.cf2.quoracdn.net/main-qimg-1652f46816410466f5d7a216dbd7d944-lq')",
        'd':"url('https://static.vecteezy.com/system/resources/previews/009/865/736/non_2x/library-book-store-and-e-book-illustrations-of-a-man-and-a-woman-read-books-in-front-of-the-bookshelf-concepts-for-graphic-and-web-design-bookstore-and-library-e-book-vector.jpg')",
        'e':"url('https://static.vecteezy.com/system/resources/previews/025/441/194/non_2x/book-library-online-tiny-people-reading-books-big-text-book-literature-fans-e-book-media-library-learning-online-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg')",
        'back': "url('/src/Utilities/Image/B1.png')",
      },
      backgroundSize:{
        'half':'800px 350px',
        
      },
      
    },
  },
  variants: {
    
  },
  plugins: [],
}

