import { Link } from "react-router-dom";
import BookList from "./Utilites/BookList";
import ScrollBar from "./Utilites/ScrollBar";
import React from "react";
import SimmerEff from "./Utilites/SimmerEff";

// import InfoPage from "./Utilites/InfoPage";

const list = {
  comic:[
       
    {
      bookName: "To Kill a Mockingbird",
      authorName: "Harper Lee",
      bookInfo: "A novel about the serious issues of rape and racial inequality told through the eyes of a young girl in the Deep South during the 1930s.",
      bookPrice: "$10.99",
      bookRating: "4.8/5",
      bookImages: [
        "https://images-na.ssl-images-amazon.com/images/I/81gepf1eMqL.jpg"
      ]
    },
    {
      bookName: "1984",
      authorName: "George Orwell",
      bookInfo: "A dystopian novel set in a totalitarian society ruled by Big Brother, exploring themes of surveillance, truth, and individualism.",
      bookPrice: "$9.99",
      bookRating: "4.7/5",
      bookImages: [
        "https://m.media-amazon.com/images/I/51BIA4rraeL._AC_UF1000,1000_QL80_.jpg"
      ]
    },
    {
      bookName: "Pride and Prejudice",
      authorName: "Jane Austen",
      bookInfo: "A classic romantic novel that deals with issues of class, marriage, and morality in 19th-century England.",
      bookPrice: "$8.99",
      bookRating: "4.6/5",
      bookImages: [
        "https://images-na.ssl-images-amazon.com/images/I/91HHqVTAJQL.jpg"
      ]
    },
    {
      bookName: "The Great Gatsby",
      authorName: "F. Scott Fitzgerald",
      bookInfo: "A story about the young and mysterious millionaire Jay Gatsby and his quixotic passion for the beautiful Daisy Buchanan during the Jazz Age.",
      bookPrice: "$10.49",
      bookRating: "4.5/5",
      bookImages: [
        "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg"
      ]
    },
    {
      bookName: "Moby Dick",
      authorName: "Herman Melville",
      bookInfo: "The narrative of Captain Ahab's obsessive quest to kill the white whale, Moby Dick.",
      bookPrice: "$11.99",
      bookRating: "4.4/5",
      bookImages: [
        "https://images-na.ssl-images-amazon.com/images/I/81A-mvlo+QL.jpg"
      ]
    },
    {
      bookName: "War and Peace",
      authorName: "Leo Tolstoy",
      bookInfo: "A novel that intertwines the lives of private and public individuals during the time of the Napoleonic wars.",
      bookPrice: "$14.99",
      bookRating: "4.6/5",
      bookImages: [
        "https://images-na.ssl-images-amazon.com/images/I/91A5cRjvCwL.jpg"
      ]
    },
    {
      bookName: "The Catcher in the Rye",
      authorName: "J.D. Salinger",
      bookInfo: "A story about teenage angst and alienation, narrated by the iconic character Holden Caulfield.",
      bookPrice: "$9.99",
      bookRating: "4.3/5",
      bookImages: [
        "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg"
      ]
    },
    {
      bookName: "Great Expectations",
      authorName: "Charles Dickens",
      bookInfo: "The story of the orphan Pip, writing his life from his early days of childhood until adulthood.",
      bookPrice: "$10.99",
      bookRating: "4.4/5",
      bookImages: [
        "https://images-na.ssl-images-amazon.com/images/I/81Wh2c6TnBL.jpg"
      ]
    },
    {
      bookName: "Brave New World",
      authorName: "Aldous Huxley",
      bookInfo: "A dystopian social science fiction novel and a warning about the dangers of a future world state.",
      bookPrice: "$8.99",
      bookRating: "4.2/5",
      bookImages: [
        "https://images-na.ssl-images-amazon.com/images/I/81aY80b9cL.jpg"
    ]
  },
  {
    bookName: "Crime and Punishment",
    authorName: "Fyodor Dostoevsky",
    bookInfo: "A psychological drama exploring the moral dilemmas faced by the protagonist, Raskolnikov, after he commits a murder.",
    bookPrice: "$12.99",
    bookRating: "4.5/5",
    bookImages: [
      "https://images-na.ssl-images-amazon.com/images/I/81e0a6HD38L.jpg"
    ]
  },
  {
    bookName: "Jane Eyre",
    authorName: "Charlotte Brontë",
    bookInfo: "A novel about the emotional and moral development of the orphaned protagonist, Jane Eyre.",
    bookPrice: "$9.49",
    bookRating: "4.6/5",
    bookImages: [
      "https://images-na.ssl-images-amazon.com/images/I/81t2CVWEKHL.jpg"
    ]
  }

  ],

     logic :[
        
        
    {
        bookName: "Wuthering Heights",
        authorName: "Emily Brontë",
        bookInfo: "A story of passion and revenge on the Yorkshire moors.",
        bookPrice: "$10.49",
        bookRating: "4.4/5",
        bookImages: [
          "https://images-na.ssl-images-amazon.com/images/I/91v2nNqMT-L.jpg"
        ]
      },
      {
        bookName: "The Odyssey",
        authorName: "Homer",
        bookInfo: "An epic poem about the adventures of Odysseus as he returns home from the Trojan War.",
        bookPrice: "$13.99",
        bookRating: "4.7/5",
        bookImages: [
          "https://images-na.ssl-images-amazon.com/images/I/81tC9zAxsmL.jpg"
        ]
      },
      {
        bookName: "The Brothers Karamazov",
        authorName: "Fyodor Dostoevsky",
        bookInfo: "A philosophical novel set in 19th-century Russia, dealing with questions of faith, doubt, and reason.",
        bookPrice: "$14.99",
        bookRating: "4.8/5",
        bookImages: [
          "https://images-na.ssl-images-amazon.com/images/I/81OQd1TwHTL.jpg"
        ]
      },
      {
        bookName: "Anna Karenina",
        authorName: "Leo Tolstoy",
        bookInfo: "A complex novel exploring a diverse range of topics, from love to politics, within Russian society.",
        bookPrice: "$13.49",
        bookRating: "4.7/5",
        bookImages: [
          "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg"
        ]
      },
      {
        bookName: "The Hobbit",
        authorName: "J.R.R. Tolkien",
        bookInfo: "A fantasy novel that follows the quest of home-loving Bilbo Baggins to win a share of the treasure guarded by Smaug the dragon.",
        bookPrice: "$11.99",
        bookRating: "4.8/5",
        bookImages: [
          "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg"
        ]
      },
      {
        bookName: "Fahrenheit 451",
        authorName: "Ray Bradbury",
        bookInfo: "A dystopian novel about a future American society where books are outlawed and 'firemen' burn any that are found.",
        bookPrice: "$10.49",
        bookRating: "4.6/5",
        bookImages: [
          "https://images-na.ssl-images-amazon.com/images/I/71OFqSRFDgL.jpg"
        ]
      },
      {
        bookName: "Catch-22",
        authorName: "Joseph Heller",
        bookInfo: "A satirical novel set during World War II, about the absurdity of war and the bureaucratic lunacy of the military.",
        bookPrice: "$9.99",
        bookRating: "4.5/5",
        bookImages: [
          "https://images-na.ssl-images-amazon.com/images/I/91VGf-+uXWL.jpg"
        ]
      },
      {
        bookName: "The Alchemist",
        authorName: "Paulo Coelho",
        bookInfo: "A philosophical book that tells the story of Santiago, a shepherd boy who dreams of traveling the world in search of a treasure.",
        bookPrice: "$12.99",
        bookRating: "4.7/5",
        bookImages: [
          "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg"
        ]
      },
      {
        bookName: "The Adventures of Huckleberry Finn",
        authorName: "Mark Twain",
        bookInfo: "A novel about a young boy, Huck, and his adventures as he travels down the Mississippi River.",
        bookPrice: "$8.99",
        bookRating: "4.4/5",
        bookImages: [
          "https://images-na.ssl-images-amazon.com/images/I/81yVAlHkfPL.jpg"
        ]
      }
]
};

const Body = () => {
  const isLoading = false; // Add a state or prop to manage loading state

  return (
    <div className="mt-20 px-4">
      <ScrollBar />
      
      {isLoading ? (
      <div className="flex flex-nowrap overflow-x-auto overflow-hidden cursor-pointer m-2 hide-scrollbar">
        <SimmerEff />
        </div>
      ) : (
        Object.entries(list).map(([category, books]) => (
          <div className="border-2 border-gray-300 m-1 rounded-lg bg-gray-50 shadow-lg" key={category}>
            <h1 className="m-1 justify-center items-center text-center font-serif text-3xl font-bold rounded-full p-1 bg-green-500 text-white">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h1>
            <div className="flex flex-nowrap overflow-x-auto overflow-hidden cursor-pointer p-1 hide-scrollbar">
            <BookList list={books} />
            </div>
            <Link to="/catalist" className="flex mr-4 mb-2 justify-end items-end font-bold text-blue-600 hover:text-red-600 hover:underline">
              <img alt="more" src="https://cdn-icons-png.flaticon.com/128/14612/14612021.png" className="w-10"/>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Body;

