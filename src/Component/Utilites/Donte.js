const Donate = () => {
    return (
        <div className="mt-20  px-4 flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
            <div className="w-full max-w-lg p-10 bg-white rounded-xl shadow-xl">
                <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">Donate Book</h1>
                <form>
                    <div className="mb-5">
                        <label className="block text-gray-700 font-medium mb-2">Book Name</label>
                        <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50" />
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 font-medium mb-2">Release Date</label>
                        <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50" />
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 font-medium mb-2">Author Name</label>
                        <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50" />
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 font-medium mb-2">Book Quantity</label>
                        <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50" />
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 font-medium mb-2">Select Type</label>
                        <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50">
                            <option value="">Select an option</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Novel">Novel</option>
                            <option value="Comic">Comic</option>
                        </select>
                    </div>
                    {/* The conditional rendering logic needs to be fixed to work properly */}
                    {/* Assuming the state management for the select input is set up correctly */}
                    {/* Example with a state variable "selectedType" */}
                    {"selectedType" === 'Engineering' && (
                        <div className="mb-5">
                            <label className="block text-gray-700 font-medium mb-2">Branch</label>
                            <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50">
                                <option value="">Select an option</option>
                                <option value="Mechanical">Mechanical</option>
                                <option value="Civil">Civil</option>
                                <option value="CS">CS</option>
                                <option value="IT">IT</option>
                                <option value="Chemical">Chemical</option>
                            </select>
                        </div>
                    )}
                    <div className="mb-5">
                    <label className="block text-gray-700 font-medium mb-2">Book Condition</label>
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50">
                        <option value="">Select an option</option>
                        <option value="Engineering">New</option>
                        <option value="Novel">old</option>
                    </select>
                </div>
                {"" === 'Engineering' && (
                    <div className="mb-5">
                        <label className="block text-gray-700 font-medium mb-2">Old</label>
                        <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50">
                            <option value="">Select an option</option>
                            <option value="Mechanical">Good</option>
                            <option value="Civil">Fair</option>
                            <option value="CS">Poor</option>
                            
                        </select>
                    </div>
                )}
                    <div className="mb-5">
                        <label className="block text-gray-700 font-medium mb-2">Orphanage List</label>
                        <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50">
                            <option value="">Select an option</option>
                            <option value="1">Orphanage 1</option>
                            <option value="2">Orphanage 2</option>
                            <option value="3">Orphanage 3</option>
                        </select>
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 font-medium mb-2">Edition</label>
                        <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50" />
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 font-medium mb-2">Description</label>
                        <textarea className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50" rows="3"></textarea>
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 font-medium mb-2">Language</label>
                        <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2">Publisher</label>
                        <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-2">Upload Images</label>
                        <input 
                            type="file" 
                            accept="image/*" 
                            multiple 
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50" 
                        />
                        <p className="text-gray-600 mt-2">You can upload up to 5 images.</p>
                    </div>
                    <button className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                        Donate Book
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Donate;
