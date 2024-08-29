import { useEffect, useState } from "react";
import { GetOrderData } from "../Logic and Connection/Logic3";

const Cart = () => {
  const [fbooks, setBooks] = useState([]);
  const [tbooks, setTBooks] = useState([]);
  
  useEffect(() => {
    const fetch = async () => {
      const response = await GetOrderData();
      console.log(response[0]);
      setBooks(response[0].orderBookDto);
      setTBooks(response[1].orderBookDto);
    };
    fetch();
  }, []);

  return (
    <div className="mt-20 px-4 m-2 p-4 border-2 border-green-500 rounded-xl">
      <h1 className="text-2xl font-serif font-bold mb-4 text-center">My Shopping Cart</h1>

      {/* First list of books */}
      {fbooks && fbooks.length > 0 ? (
        fbooks.map((book) => (
          <div
            key={book.id}
            className="flex justify-between items-center p-4 mb-4 border-2 border-red-400 rounded-md bg-white shadow-sm"
          >
            <div className="flex items-center">
              <img
                alt="Book cover"
                src={`data:image/jpeg;base64,${book.images?.[1]?.imageBase64 || book.images?.[0]?.imageBase64 || ""}`}
                className="w-28 h-36 object-cover rounded-md"
              />
              <div className="ml-4">
                <h1 className="text-lg font-semibold">{book.name}</h1>
                <h2 className="text-md text-gray-700">{book.authorName}</h2>
                <h3 className="text-md text-gray-700">{book.sellingPrice}</h3>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center mb-2">
                <button className="bg-gray-200 px-2 py-1 rounded-l hover:bg-gray-300">-</button>
                <p className="px-4">{book.quantity}</p>
                <button className="bg-gray-200 px-2 py-1 rounded-r hover:bg-gray-300">+</button>
              </div>
              <button className="bg-yellow-300 hover:bg-yellow-500 text-black font-semibold py-1 px-4 rounded mb-2">
                Buy Now
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-4 rounded">
                Remove 
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">Your cart is empty.</p>
      )}

      {/* Second list of books and summary section */}
      <div className=" mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
        {tbooks && tbooks.length > 0 ? (
          tbooks.map((book) => (
            <div
              key={book.id}
              className="flex justify-between items-center p-4 mb-4 border-2 border-blue-400 rounded-md bg-white shadow-sm"
            >
              <div className="flex items-center">
                <img
                  alt="Book cover"
                  src={`data:image/jpeg;base64,${book.images?.[1]?.imageBase64 || book.images?.[0]?.imageBase64 || ""}`}
                  className="w-28 h-36 object-cover rounded-md"
                />
                <div className="ml-4">
                  <h1 className="text-lg font-semibold">{book.name}</h1>
                  <h2 className="text-md text-gray-700">{book.authorName}</h2>
                  <h3 className="text-md text-gray-700">{book.sellingPrice}</h3>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center mb-2">
                  <button className="bg-gray-200 px-2 py-1 rounded-l hover:bg-gray-300">-</button>
                  <p className="px-4">{book.quantity}</p>
                  <button className="bg-gray-200 px-2 py-1 rounded-r hover:bg-gray-300">+</button>
                </div>
                <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-4 rounded">
                  Cancel Order
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No additional items found.</p>
        )}

        {/* Summary section */}
          <div>
            <p className="text-lg">Total items: {fbooks.length + tbooks.length}</p>
            <p className="text-lg">Total Price: {/* calculate total price here */}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold mb-2">Amount Payable: {/* calculate amount payable here */}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
              Buy All
            </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
