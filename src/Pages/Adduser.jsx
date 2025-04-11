import React from "react";

const AddUser = () => {
  return (
    <div className="w-[full] min-h-screen flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-[600px] bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-4xl text-center font-bold text-gray-800 mb-6">
          Add User
        </h1>

        <div className="space-y-5">
          {/* Image Input */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Select Image</label>
            <input
              type="file"
              className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition"
              accept="image/*"
            />
          </div>

          {/* Product Name & Price */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col w-full md:w-1/2 gap-2">
              <label className="text-gray-700 font-medium">First Name</label>
              <input
                type="text"
                className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Enter First Name"
              />
            </div>
            <div className="flex flex-col w-full md:w-1/2 gap-2">
              <label className="text-gray-700 font-medium">Last Name</label>
              <input
                type="text"
                className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Enter Last Name"
              />
            </div>
          </div>

          {/* Product Status */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Contact No.</label>
            <input
              type="text"
              placeholder="Enter your contact Number"
              className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium"> Email Address</label>
            <input
              type="email"
              className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Enter Your Email Address"
            />
          </div>
          {/* Submit Button */}
          <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold rounded-lg shadow-md hover:opacity-90 transition">
            ADD User
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;