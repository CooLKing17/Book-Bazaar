import { motion } from "framer-motion";

const BookList = () => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}

      className="border-4 border-black font-serif w-60 text-center justify-center items-center p-2 rounded-xl m-2"
    >
      <img
        alt="img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgCDuC4Al_s-FleQae4_M3LL79MybceL6BeA&s"
      />
      <h1 className="font-bold">Book Name</h1>
      <p className="">Author Name</p>
      <p className="">Book info</p>
      <p className="">Book Price</p>
      <p className="">Book Rating</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add to Cart
      </button>
    </motion.div>
  );
};

export default BookList;
