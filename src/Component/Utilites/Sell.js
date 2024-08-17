import { useState } from "react";
import axios from "axios"; // Make sure to import axios
import { server } from "../Logic and Connection/Logic";
const Sell = () => {
  const [formData, setFormData] = useState({
    name: "",
    releaseDate: "",
    authorName: "",
    rating: "",
    type: "",
    subType:"",
    bookCondition: "",
    condition:"",
    originalPrice: "",
    sellingPrice: "",
    edition: "",
    description: "",
    isbn10: "",
    isbn13: "",
    language: "",
    missingPages: "",
    totalPages: "",
    bookpublisher: "",
    quantity: "",
  });

  
  const [files, setFiles] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Save book details
      console.log(formData)
      const bookResponse = await axios.post(
        `${server}/sellbook/addBook`,
        formData
      );
      const bookId = bookResponse.data.id;

      // Prepare image data
      const data = new FormData();
      for (let i = 0; i < files.length; i++) {
        data.append("files", files[i]);
      }
      // data.append("email", formData.email);

      // Upload images
      await axios.post(`${server}/sellbook/uploadImage/${bookId}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Book and images uploaded successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error uploading book and images", error);
      alert("Failed to upload book and images");
    }
  };
  const categories = [
    {
      type: "Select an option",
      branches: []
    },
    {
      type: "Fiction",
      branches: [
        "Select an option",
        "Literary Fiction",
        "Mystery/Thriller/Crime",
        "Science Fiction",
        "Fantasy",
        "Historical Fiction",
        "Romance",
        "Horror"
      ]
    },
    {
      type: "Non-Fiction",
      branches: [
        "Select an option",
        "Biography/Autobiography/Memoir",
        "Self-Help",
        "Travel",
        "Cookbooks",
        "Health/Wellness",
        "History",
        "Science/Nature",
        "True Crime",
        "Educational"
      ]
    },
    {
      type: "Educational",
      branches: []
    },
    {
      type: "Other Formats",
      branches: [
        "Select an option",
        "Journal/Notebook",
        "Comic Book",
        "Graphic Novel"
      ]
    },
    {
      type: "Specialized Categories",
      branches: [
          "Select an option",
          "Reference",
          "Poetry",
          "Religious/Spiritual",
          "Magazines",
          "Zines"]
    }
  ];
  const selectedCategory = categories.find(cat => cat.type === formData.type);
  return (
    <div className="mt-20 px-4 flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="w-full max-w-lg p-10 bg-white rounded-xl shadow-xl">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
          Sell Book
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Book Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Release Date
            </label>
            <input
              type="date"
              name="releaseDate"
              value={formData.releaseDate}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Author Name
            </label>
            <input
              type="text"
              name="authorName"
              value={formData.authorName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Rating
            </label>
            <input
              type="text"
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Select Category
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            >
               {categories.map((cat, index) => (
            <option key={index} value={cat.type}>
              {cat.type}
            </option>
          ))}
            </select>
          </div>
          
      {selectedCategory && selectedCategory.branches.length > 0 ? (
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Type
          </label>
          <select
            name="branch"
            value={formData.subType}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
          >
            {selectedCategory.branches.map((subType, index) => (
              <option key={index} value={subType}>
                {subType}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Type
          </label>
          <input
            type="text"
            name="branch"
            value={formData.subType}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            placeholder="Enter type"
          />
        </div>
      )}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Book Condition
            </label>
            <select
              name="bookCondition"
              value={formData.bookCondition}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            >
              <option value="">Select an option</option>
              <option value="New">New</option>
              <option value="Used">Used</option>
            </select>
          </div>
          {formData.bookCondition === "Used" && (
            <div className="mb-5">
              <label className="block text-gray-700 font-medium mb-2">
                Condition
              </label>
              <select
                name="condition"
                value={formData.condition}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              >
                <option value="">Select an option</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Poor">Poor</option>
              </select>
            </div>
          )}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Original Price
            </label>
            <input
              type="text"
              name="originalPrice"
              value={formData.originalPrice}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Selling Price
            </label>
            <input
              type="text"
              name="sellingPrice"
              value={formData.sellingPrice}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Edition
            </label>
            <input
              type="text"
              name="edition"
              value={formData.edition}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              rows="3"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              ISBN-10
            </label>
            <input
              type="text"
              name="isbn10"
              value={formData.isbn10}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              ISBN-13
            </label>
            <input
              type="text"
              name="isbn13"
              value={formData.isbn13}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Language
            </label>
            <input
              type="text"
              name="language"
              value={formData.language}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Missing Pages
            </label>
            <input
              type="text"
              name="missingPages"
              value={formData.missingPages}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Total Pages
            </label>
            <input
              type="text"
              name="totalPages"
              value={formData.totalPages}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Publisher
            </label>
            <input
              type="text"
              name="bookpublisher"
              value={formData.bookpublisher}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Book Quantity
            </label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Upload Images
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
            <p className="text-gray-600 mt-2">You can upload up to 5 images.</p>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sell;
