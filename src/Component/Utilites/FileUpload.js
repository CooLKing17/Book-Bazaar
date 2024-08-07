import React from 'react';

const FileUpload = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-2xl font-semibold text-gray-800 mb-8">Image Upload</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-2/3 lg:w-1/2">
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Upload Images
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
          />
          <p className="text-gray-600 mt-2">You can upload up to 5 images.</p>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
