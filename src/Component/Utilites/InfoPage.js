import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const InfoPage = () => {
  const location = useLocation();
  const book = location.state?.book;
  const images = book?.images?.map(
    (img) => `data:image/jpeg;base64,${img.imageBase64}`
  ) || [
    "https://static.toiimg.com/thumb/msid-70784314,width-400,resizemode-4/70784314.jpg",
    // Add more fallback images here if necessary
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="w-full h-auto grid justify-items-center font-serif bg-gray-100 py-8 mt-20">
      <div className="flex flex-col lg:flex-row bg-white w-3/4 lg:w-2/3 h-auto shadow-lg rounded-lg overflow-hidden">
        <div className="w-full lg:w-1/2 p-4 flex flex-col">
          <img
            alt="Main"
            src={mainImage}
            className="mb-4 w-full h-80 object-cover rounded-lg shadow-md"
          />
          <div className="flex overflow-x-auto space-x-3">
            {images.map((img, index) => (
              <motion.img
                whileHover={{ scale: 0.8 }}
                whileTap={{ scale: 0.6 }}
                key={index}
                className="cursor-pointer w-16 h-16 object-cover rounded-md border-2 border-transparent hover:border-blue-500"
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
          <div className="text-gray-600 m-2 text-start">
          <h1 className="font-bold text-4xl text-gray-800 mb-2">
              {book?.name}
            </h1>
            <h2 className="text-xl text-gray-600 mb-1">
              Release Date:{book?.releaseDate}
            </h2>
            <h2 className="text-xl text-gray-600 mb-1">
              Author Name: {book?.authorName}
            </h2>
            <h4 className="text-xl text-gray-500 mb-1">
              Publisher: {book?.bookpublisher}
            </h4>
            <h3 className="text-xl text-gray-500 mb-1">
              Reating: {book?.rating}
            </h3></div>
        </div>
        <div className="w-full lg:w-1/2 p-6 flex flex-col space-y-4">
          <div>
           
            <h4 className="text-xl text-gray-500 mb-1">
              Edition: {book?.edition}
            </h4>
            <h4 className="text-xl text-gray-500 mb-1">
               Type:{" "}
              {book?.type }
            </h4>
            <h4 className="text-xl text-gray-500 mb-1">
              Sub Type:{" "}
              {book?.subType }
            </h4>
            <h4 className="text-xl text-gray-500 mb-1">
              Book Condition:{" "}
              {book?.bookCondition}
            </h4>
            <h4 className="text-xl text-gray-500 mb-1">
              Original Price:{" "}
              {book?.originalPrice }
            </h4>
            <h4 className="text-xl text-gray-500 mb-1">
              Sealing Price:{" "}
              {book?.sellingPrice }
            </h4>
            <h1 className="font-bold text-lg m-2">Product Details:</h1>
            <p className="mb-1">ISBN-10: {book?.isbn10}</p>
            <p className="mb-1">ISBN-13: {book?.isbn13}</p>
            <p className="mb-1">Language: {book?.language}</p>
            <p className="mb-1">Page Count: {book?.totalPages}</p>
            <p className="mb-1">Missing Pages: {book?.missingPages}</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Description:{" "}
              {book?.description || "Good book for reading  " }
            </p>
          </div>

          <div className="flex flex-col space-y-2 mt-4">
            <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition">
              Add to Cart
            </button>
            <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded transition">
              Buy Now
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition">
              Add to Wish List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
