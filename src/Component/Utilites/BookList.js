import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { addCart, ratingStar } from "../Logic and Connection/Logic3";
import { toast, ToastContainer } from "react-toastify";

const BookList = ({ list }) => {
  console.log(list);

  const addBookCart = async (bookId) => {
    const data = await addCart(bookId);
    console.log(data);
    toast.success(data.massage)
  };

  return (
    <>
  <ToastContainer />
  {list.map((book) => (
    <Link
      to={`/InfoPage=card/${book.id}`}
      key={book.id}
      state={{ book }}
      className="m-2 w-60"
    >
      <motion.div
        whileHover={{ scale: 0.95 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          ease: [0.42, 0, 0.58, 1],
        }}
        className="border-2 border-green-500 bg-white font-serif w-full h-full text-center p-2 rounded-xl shadow-lg m-1 flex-shrink-0"
      >
        <div className="flex justify-center items-center mb-4">
          <img
            alt="Book cover"
            src={`data:image/jpeg;base64,${book.images?.[0]?.imageBase64 || ''}`}
            className="w-40 h-52 object-cover rounded-lg"
          />
        </div>
        <div className="text-center w-full">
          <h1 className="text-xl font-bold text-gray-800 mb-2 truncate">{book.name}</h1>
          <p className="text-gray-600 mb-1 truncate">{book.authorName}</p>

          <p className="text-gray-600 mb-1 truncate">{book.subType}</p>
          <p className="text-gray-500 mb-1 truncate">{book.language}</p>
          <p className="text-lg text-green-600 font-semibold mb-2 font-sans">₹ {book.sellingPrice}</p>
          <div className="flex justify-center mb-3">{ratingStar(book.rating)}</div>
          <button
            onClick={() => addBookCart(book.id)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </motion.div>
    </Link>
  ))}
</>

  );
};

export default BookList;
