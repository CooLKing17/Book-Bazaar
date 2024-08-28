import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { DeleteBook, EditBook, GetData } from "../Logic and Connection/Logic1";

const DonateSell = () => {
  const location = useLocation();
  const isSold = location.state?.isSold;
  console.log(isSold);
  const [isEdit, setEdit] = useState(true);
  const [donateData, setDonateData] = useState([]);
  const [sellingData, setSellingData] = useState([]);
  const[bookId,setBookid]=useState();
  const [data, setData] = useState({
    quantity:"",
    description:"",
    missingPages:"",
    sellingPrice:""
  });

  useEffect(() => {
    const fetchData = async () => {
      let endpoint = "";
      if (isSold) {
        endpoint = "sellBook/api/getBookList";
      } else {
        endpoint = "donateBook/api/getDonatebookdetails";
      }
      const result = await GetData(endpoint);
      if (isSold) {
        setSellingData(result);
      } else {
        setDonateData(result);
      }
    };

    fetchData();
  }, [isSold]);

  

  const handleditBook=async()=>{

    const data1 = await EditBook(bookId,data)
    if(data1){
      const sellbook = "sellBook/api/getBookList";
      const response = await GetData(sellbook);
      setSellingData(response);
    }
    setEdit(true)
  }

  const Deletebooks= async()=>{
      const feedback = await DeleteBook(bookId);
      if(feedback){
        const sellbook = "sellBook/api/getBookList";
        const response = await GetData(sellbook);
        setSellingData(response);
      }
      
  }

  return (
    <div className="mt-20 container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">
        {isSold ? "Sold Book Information" : "Donated Book Information"}
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
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Book Quantity</th>
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-left">
                {isSold ? "Missing Pages" : ""}
              </th>
              <th className="py-3 px-6 text-left">
                {isSold ? "Price" : "Orphanage Name"}
              </th>
              {isSold && <th className="py-3 px-6 text-left">Actions</th>}
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {(isSold ? sellingData : donateData).map((book) => (
              <tr key={book.id} onClick={()=>setBookid(book.id)}  className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{book.name}</td>
                <td className="py-3 px-6 text-left">{book.edition}</td>
                <td className="py-3 px-6 text-left">{book.type}</td>
                <td className="py-3 px-6 text-left">{book.language}</td>
                <td className="py-3 px-6 text-left">{book.bookCondition}</td>
                <td className="py-3 px-6 text-left">{book.releaseDate}</td>
                <td className="py-3 px-6 text-left">
                  {isSold ? "Status" : "Pending"}
                </td>
                <td className="py-3 px-6 text-left">
                  {isEdit ? (
                    book.quantity ?? 'N/A'
                  ) : (
                    <input
                      type="number"
                      name="quantity"
                      value={data.quantity || book.quantity || ''}
                      onChange={(e)=>setData({...data, quantity:e.target.value})}
                      />
                  )}
                </td>
                <td className="py-3 px-6 text-left">
                  {isEdit ? (
                    book.description ?? 'N/A'
                  ) : (
                    <input
                      type="text"
                      name="description"
                      value={data.description || book.description || ''}
                      onChange={(e)=>setData({...data, description:e.target.value})}
                    />
                  )}
                </td>
                <td className="py-3 px-6 text-left">
                  {isEdit ? (
                    book.missingPages ?? 'N/A'
                  ) : (
                    <input
                      type="number"
                      name="missingPages"
                      value={data.missingPages || book.missingPages || ''}
                      onChange={(e)=>setData({...data, missingPages:e.target.value})}
                    />
                  )}
                </td>
                <td className="py-3 px-6 text-left">
                  {isEdit ? (
                    book.sellingPrice ?? 'N/A'
                  ) : (
                    <input
                      type="number"
                      name="sellingPrice"
                      value={data.sellingPrice || book.sellingPrice || ''}
                      onChange={(e)=>setData({...data, sellingPrice:e.target.value})}
                    />
                  )}
                </td>
                {isSold && (
                  <td className="py-3 px-6 text-left">
                    {isEdit ? (
                      <button
                        onClick={() => setEdit(false)}
                        className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                      >
                        Edit
                      </button>
                    ) : (
                      <button
                        onClick={handleditBook}
                        className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                      >
                        Save
                      </button>
                    )}
                    <button onClick={Deletebooks} className="bg-red-500 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonateSell;
