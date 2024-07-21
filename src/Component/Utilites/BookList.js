import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BookList = ({ list }) => {
  console.log(list);
  return (
    <div  className="flex flex-nowrap overflow-x-auto overflow-hidden cursor-pointer p-2 hide-scrollbar">
      {list.map((book) => (
        <Link to="/InfoPage" >
        <motion.div whileHover={{ scale: 0.8 }} whileTap={{ scale: 0.7 }}
          key={book.bookName} // Assuming bookName is unique, else use a unique identifier
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="border-4 border-black font-serif w-60 text-center p-1 rounded-xl m-2 flex-shrink-0"
        >
          <div className=" flex justify-center items-center">
            <img
              alt="img"
              src={book.bookImages[0]} // Using the first image from bookImages array
              className="w-40 h-52 p-1 justify-center items-center"
            />
          </div>
          <div className="p-2 text-center">
            <h1 className="font-bold">{book.bookName}</h1>
            <p>{book.authorName}</p>
            <p>{book.bookPrice}</p>
            <p>{book.bookRating}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
              Add to Cart
            </button>
          </div>
        </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default BookList;
