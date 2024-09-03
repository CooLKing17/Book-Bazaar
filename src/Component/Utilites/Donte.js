import { useState } from "react";
import { DonateBookData} from "../Logic and Connection/Logic1";
import { toast, ToastContainer } from "react-toastify";

const Donate = () => {
    const [donateData ,setdonateData]=useState({
        bookname:"",
        authorname:"",
        bookquantity:"",
        type:"",
        bookcondition:"",
        orphanagename:"",
        edition:"",
        description:"",
        language:"",
        bookpublisher:""
    })

    const donateDataInsert =(e)=>{
        const {name , value}=e.target;
        setdonateData({...donateData , [name]:value})
    }

    const DonateBook =async()=>{
        console.log(donateData);
        const response = await DonateBookData(donateData);
        console.log(response);
        toast.success(response.massage)
    }
    return (
        <div className="mt-20  px-4 flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
            <div className="w-full max-w-lg p-10 bg-white rounded-xl shadow-xl">
            <ToastContainer/>
                <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">Donate Book</h1>
                <form>
                    <div className="mb-5">
                        <label className="block text-gray-700 font-medium mb-2">Book Name</label>
                        <input type="text" name="bookname" value={donateData.bookname} onChange={donateDataInsert} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50" />
                    </div>
                    
                    <div className="mb-5">
                        <label className="block text-gray-700 font-medium mb-2">Author Name</label>
                        <input type="text" name="authorname" value={donateData.authorname} onChange={donateDataInsert} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50" />
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 font-medium mb-2">Book Quantity</label>
                        <input type="number" name="bookquantity" value={donateData.bookquantity} onChange={donateDataInsert} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50" />
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 font-medium mb-2">Book Type</label>
                        <input type="text" name="type" value={donateData.type} onChange={donateDataInsert} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50" /> 
                    </div>
                    
                    <div className="mb-5">
                    <label className="block text-gray-700 font-medium mb-2">Book Condition</label>
                    <select value={donateData.bookcondition} name="bookcondition" onChange={donateDataInsert} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50">
                        <option value="">Select an option</option>
                        <option value="new">New</option>
                        <option value="used">Used</option>
                    </select>
                </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 font-medium mb-2">Orphanage List</label>
                        <select name="orphanagename" value={donateData.orphanagename} onChange={donateDataInsert} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50">
                            <option value="">Select an option</option>
                            <option value="1">Orphanage 1</option>
                            <option value="2">Orphanage 2</option>
                            <option value="3">Orphanage 3</option>
                        </select>
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 font-medium mb-2">Edition</label>
                        <input type="text" name="edition" value={donateData.edition} onChange={donateDataInsert} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50" />
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 font-medium mb-2">Description</label>
                        <textarea name="description" value={donateData.description} onChange={donateDataInsert} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50" rows="3"></textarea>
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 font-medium mb-2">Language</label>
                        <input type="text" name="language" value={donateData.language} onChange={donateDataInsert} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2">Publisher</label>
                        <input type="text" name="bookpublisher" value={donateData.bookpublisher} onChange={donateDataInsert}className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50" />
                    </div>
                    
                    <button onClick={DonateBook} className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                        Donate Book
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Donate;
