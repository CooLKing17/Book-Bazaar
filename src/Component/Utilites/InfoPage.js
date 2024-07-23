import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InfoPage = () => {
  const images = [
    "https://static.toiimg.com/thumb/msid-70784314,width-400,resizemode-4/70784314.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/026/722/501/small/illustration-image-nature-and-sustainability-eco-friendly-living-and-conservation-concept-art-of-earth-and-animal-life-in-different-environments-generative-ai-illustration-free-photo.jpg",
    "https://t4.ftcdn.net/jpg/06/40/09/37/360_F_640093709_RzqJtvGLNO8noYoWZeBl3TpSQHufrBZR.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROBfRauTwWTLXRb7IXBuF_89ygktuZgjdDYg&s",
    "https://imgv3.fotor.com/images/cover-photo-image/AI-illustration-of-a-dragon-by-Fotor-AI-text-to-image-generator.jpg",
    "https://i.pinimg.com/736x/70/57/f7/7057f75efe2c8aa5350a697133ab24fb.jpg"
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="w-full h-auto grid justify-items-center font-serif bg-gray-100 py-8 mt-20">
      <div className="flex flex-col lg:flex-row bg-white w-3/4 lg:w-2/3 h-auto shadow-lg rounded-lg overflow-hidden">
        <div className="w-full lg:w-1/2 p-4 flex flex-col">
          <img alt="Main" src={mainImage} className="mb-4 w-full h-80 object-cover rounded-lg shadow-md" />
          <div className="flex overflow-x-auto space-x-3  ">
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
          <h1 className="font-bold text-lg m-2">Product Detils:</h1>
            <p className="mb-1">ISBN-10: 1234567890</p>
            <p className="mb-1">ISBN-13: 123-4567890123</p>
            <p className="mb-1">Language: English</p>
            <p className="mb-1">Page Count: 350</p>
            <p className="mb-1">Publisher: Example Publisher</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-6 flex flex-col space-y-4">
          <div>
            <h1 className="font-bold text-4xl text-gray-800 mb-2">Book Name</h1>
            <h2 className="text-2xl text-gray-600 mb-1">Release Date</h2>
            <h2 className="text-2xl text-gray-600 mb-1">Author Name</h2>
            <h4 className="text-xl text-gray-500 mb-1">Rating</h4>
            <h3 className="text-xl text-gray-500 mb-1">Price</h3>
            <h4 className="text-xl text-gray-500 mb-1">Discount</h4>
            <h4 className="text-xl text-gray-500 mb-1">Save</h4>
            <h4 className="text-xl text-gray-500 mb-4">Edition</h4>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Description: This is a sample description of the book. It gives a brief overview of what the book is about, its main themes, and why it is worth reading.
            </p>
          </div>
          
          <div className="flex flex-col space-y-2 mt-4">
            <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition">Add to Cart</button>
            <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded transition">Buy Now</button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition">Add to Wish List</button>
          </div>
        </div>
      </div>
      <div className="mt-8 w-3/4 lg:w-2/3">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recommended</h2>
        {/* <BookList /> */}
      </div>
    </div>
  );
}

export default InfoPage;
