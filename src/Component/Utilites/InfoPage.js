import React, { useState } from 'react';
// import BookList from './BookList';
import { motion } from 'framer-motion';

const InfoPage = () => {
    const images = [
        "https://static.toiimg.com/thumb/msid-70784314,width-400,resizemode-4/70784314.jpg",
        "https://static.vecteezy.com/system/resources/thumbnails/026/722/501/small/illustration-image-nature-and-sustainability-eco-friendly-living-and-conservation-concept-art-of-earth-and-animal-life-in-different-environments-generative-ai-illustration-free-photo.jpg",
"        https://t4.ftcdn.net/jpg/06/40/09/37/360_F_640093709_RzqJtvGLNO8noYoWZeBl3TpSQHufrBZR.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROBfRauTwWTLXRb7IXBuF_89ygktuZgjdDYg&s",
        "https://imgv3.fotor.com/images/cover-photo-image/AI-illustration-of-a-dragon-by-Fotor-AI-text-to-image-generator.jpg",
        "https://i.pinimg.com/736x/70/57/f7/7057f75efe2c8aa5350a697133ab24fb.jpg"
    ];

    const [mainImage, setMainImage] = useState(images[0]);

    return (
        <div className="w-full h-auto grid justify-items-center bg-gray-100 py-8 mt-20">
            <div className="flex bg-white w-3/4 h-auto shadow-lg rounded-lg overflow-hidden">
                <div className="w-5/12 p-4 flex flex-col items-center">
                    <img alt="" src={mainImage} className="mb-4 w-full h-80 object-cover rounded-lg shadow-md" />
                    <div className="flex overflow-x-auto space-x-1  ">
                        {images.map((img, index) => (
                            <motion.img  whileHover={{ scale: 0.8 }} whileTap={{ scale: 0.6 }}
                                key={index}
                                className="cursor-pointer w-16 h-16 object-cover rounded-md border-2 border-transparent hover:border-blue-500"
                                src={img}
                                alt=""
                                onClick={() => setMainImage(img)}
                            />
                        ))}
                    </div>
                </div>
                <div className="w-7/12 p-6">
                    <h1 className="font-bold text-4xl text-gray-800 mb-4">Book Name</h1>
                    <h2 className="text-2xl text-gray-600 mb-2">Author Name</h2>
                    <h3 className="text-xl text-gray-500 mb-2">Price</h3>
                    <h4 className="text-xl text-gray-500 mb-2">Rating</h4>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Description: njgifngfdf k vfndkvv kj vlnf knfnkljngf lndflkjvnf dfdfkjndfdg lkjnidfgi nfddiudv jnfigfhf knfhdfiu kjdnfgihudfigh kjndfigndfiuh kjnfgiudgfdgfndfkgnjdfihg kdjndfingidfgdg dkjgnidngdfng kjngidngdfg digndfifgndfg dkjngdigudgdg khifg ingjigdgf igdug idgd jnnfgndjg njdgndf njkjdf jnnjg infg nijng jndf jndf ing
                    </p>
                </div>
            </div>
            <div className="mt-8 w-3/4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Recommended</h2>
                {/* <BookList /> */}
            </div>
        </div>
    );
}

export default InfoPage;
