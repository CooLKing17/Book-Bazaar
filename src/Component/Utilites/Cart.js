const Cart = () => {
  return (
    <div className="mt-20 px-4 m-2 p-4 border-2 border-green-500 rounded-xl">
      <h1 className="text-2xl font-serif font-bold mb-4 text-center">My Shopping Cart</h1>
      {/* Map function */}
      <div className="flex justify-between items-center p-4 mb-4 border-2 border-red-400 rounded-md bg-white shadow-sm">
        <div className="flex items-center">
          <img
            alt="Book cover"
            src="https://images-na.ssl-images-amazon.com/images/I/81gepf1eMqL.jpg"
            className="w-28 h-36 object-cover rounded-md"
          />
          <div className="ml-4">
            <h1 className="text-lg font-semibold">Book Name</h1>
            <h2 className="text-md text-gray-700">Author Name</h2>
            <h3 className="text-md text-gray-700">Price</h3>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center mb-2">
            <button className="bg-gray-200 px-2 py-1 rounded-l hover:bg-gray-300">-</button>
            <p className="px-4">Count</p>
            <button className="bg-gray-200 px-2 py-1 rounded-r hover:bg-gray-300">+</button>
          </div>
          <button className="bg-yellow-300 hover:bg-yellow-500 text-black font-semibold py-1 px-4 rounded mb-2">
            Add to Wishlist
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-4 rounded">
            Remove
          </button>
        </div>
      </div>
      <div className="flex justify-between mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
        <div>
          <p className="text-lg">Total items:</p>
          <p className="text-lg">Total Price:</p>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold mb-2">Amount Payable:</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
