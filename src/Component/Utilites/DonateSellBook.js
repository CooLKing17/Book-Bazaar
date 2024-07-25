import React from 'react';

const DonateSell = ({ isSold }) => {
    
  return (
    <div className="mt-20 container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">
        {isSold ? 'Sold Book Information' : 'Donated Book Information'}
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Book Name</th>
              <th className="py-3 px-6 text-left">Edition</th>
              <th className="py-3 px-6 text-left">Type</th>
              <th className="py-3 px-6 text-left">Language</th>
              <th className="py-3 px-6 text-left">Book Condition</th>
              <th className="py-3 px-6 text-left">Uploaded Date</th>
              <th className="py-3 px-6 text-left">
                {isSold ? 'Sold Status' : 'Status'}
              </th>
              <th className="py-3 px-6 text-left">Book Quantity</th>
              <th className="py-3 px-6 text-left">
                {isSold ? 'Price' : 'Orphanage Name'}
              </th>
              {isSold && (
                <th className="py-3 px-6 text-left">Actions</th>
              )}
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">Book Name</td>
              <td className="py-3 px-6 text-left">Edition</td>
              <td className="py-3 px-6 text-left">Type</td>
              <td className="py-3 px-6 text-left">Language</td>
              <td className="py-3 px-6 text-left">Book Condition</td>
              <td className="py-3 px-6 text-left">Uploaded Date</td>
              <td className="py-3 px-6 text-left">
                {isSold ? 'Sold' : 'Not Sold'}
              </td>
              <td className="py-3 px-6 text-left">Book Quantity</td>
              <td className="py-3 px-6 text-left">
                {isSold ? 'Price' : 'Orphanage Name'}
              </td>
              {isSold && (
                <td className="py-3 px-6 text-left">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded">
                    Delete
                  </button>
                </td>
              )}
            </tr>
            {/* Repeat the above <tr> block for more rows */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonateSell;
