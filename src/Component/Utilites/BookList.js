import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BookList = ({ list }) => {
  console.log(list);
  return (
    <>
      {/* {list.map((book) => ( */}
        <Link to="/InfoPage" data={list} className="m-2  w-60">
        <motion.div whileHover={{ scale: 0.8 }} whileTap={{ scale: 0.7 }}
          key={list.name} // Assuming bookName is unique, else use a unique identifier
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="border-2 border-green-500 font-serif  w-60 h-full  text-center p-1 rounded-xl m-1 flex-shrink-0"
        >
          <div className=" flex justify-center items-center">
            <img
              alt="img"
              src={`data:image/jpeg;base64,${list.images[2].imageBase64}`} // Using the first image from bookImages array
              className="w-40 h-52 p-1 justify-center items-center"
            />
          </div>
          <div className="p-2 text-center">
            <h1 className="font-bold">{list.name}</h1>
            <p>{list.authorName}</p>
            <p>{list.language}</p>
            <p>{list.sellingPrice}</p>
            <p>{list.rating}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 ">
              Add to Cart
            </button>
          </div>
        </motion.div>
        </Link>
      {/* ))} */}
    </>
  );
};

export default BookList;
