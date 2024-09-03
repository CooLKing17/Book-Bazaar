import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookList from "./Utilites/BookList";
import ScrollBar from "./Utilites/ScrollBar";
import SimmerEff from "./Utilites/SimmerEff";
import { getData } from "./Logic and Connection/Logic1";

const Body = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [bookList, setBookList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setBookList(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();
  }, []);
  
  console.log(bookList);

  return (
    <div className="mt-20 px-4">
      <ScrollBar />
      
      {isLoading ? (
        <div className="flex flex-nowrap overflow-x-auto overflow-hidden cursor-pointer m-2 hide-scrollbar">
          <SimmerEff />
        </div>
      ) : (
        bookList && bookList.map((category, index) => (
          <div
            key={index}
            className="border-2 border-gray-300 m-1 rounded-lg bg-gray-50 shadow-lg"
          >
            <h1 className="m-1 text-center font-serif text-2xl md:text-3xl font-bold rounded-full p-2 bg-green-500 text-white">
              {category.bookType}
            </h1>
            <div className="flex flex-nowrap overflow-x-auto overflow-hidden cursor-pointer p-1 hide-scrollbar">
              <BookList list={category.sellBookDTOs} />
            </div>
            <div className="flex justify-end items-center mr-4 mb-2">
              <Link
                to="/catalist"
                className="flex items-center font-bold text-blue-600 hover:text-red-600 hover:underline"
              >
                <span className="mr-2">See More</span>
                <img
                  alt="more"
                  src="https://cdn-icons-png.flaticon.com/128/14612/14612021.png"
                  className="w-6 md:w-10"
                />
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Body;
