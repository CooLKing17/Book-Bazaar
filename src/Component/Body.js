import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookList from "./Utilites/BookList";
import ScrollBar from "./Utilites/ScrollBar";
import SimmerEff from "./Utilites/SimmerEff";
import axios from "axios";
import { server } from "./Logic and Connection/Logic";
const bookId =5;
const Body = () => {
  const [bookList, setBookList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const getData = async () => {
  //   try {
  //     const response = await axios.get(`${server}/sellbook/getbookDetails/${bookId}`);
  //     console.log("GetProfile successful:", response.data);
  //     setBookList(response.data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching book details:", error);
  //     setIsLoading(false);
  //   }
  // };
    console.log(bookList.authorName)
  useEffect(() => {
    // getData();
  }, []);

  return (
    
    <div className="mt-20 px-4">
      <ScrollBar />
     
      {isLoading ? (
      <div className="flex flex-nowrap overflow-x-auto overflow-hidden cursor-pointer m-2 hide-scrollbar">
        <SimmerEff />
        </div>
      ) : (
      
          <div className="border-2 border-gray-300 m-1 rounded-lg bg-gray-50 shadow-lg" key={"index"}>
            <h1 className="m-1 justify-center items-center text-center font-serif text-3xl font-bold rounded-full p-1 bg-green-500 text-white">
              {bookList.category}
            </h1>
            <div className="flex flex-nowrap overflow-x-auto overflow-hidden cursor-pointer p-1 hide-scrollbar">
              <BookList list={bookList} />
            </div>
            <Link to="/catalist" className="flex mr-4 mb-2 justify-end items-end font-bold text-blue-600 hover:text-red-600 hover:underline">
              <img alt="more" src="https://cdn-icons-png.flaticon.com/128/14612/14612021.png" className="w-10"/>
            </Link>
          </div>
        )
      }
    </div>
  );
};

export default Body;
