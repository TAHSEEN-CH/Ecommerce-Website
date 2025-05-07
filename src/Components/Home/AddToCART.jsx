import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useCart } from '../../context/CartContext';

const AddToCART = () => {
  const { cartItems, increaseQty, decreaseQty, removeItem } = useCart();


  const calculateTotalPrice = () => {
    return cartItems
      .reduce(
        (acc, item) => acc + item.quantity * parseFloat(item.price.replace("$", "")),
        0
      )
      .toFixed(2);
  };



  return (
    <div className="bg-white text-center text-gray-800 mt-22 pb-15 border">

      {/* Cart & Summary */}
      <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-6 px-4">
        <div className="w-full lg:w-[60%] p-6 mx-auto border mt-10 rounded-lg shadow-sm overflow-x-scroll">
          <h2 className="text-2xl font-bold mb-4">ADD To Cart Details</h2>
          <table className="min-w-full table-auto border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-yellow-100 text-gray-700">
              <tr>
                <th className="py-3 px-4 border">Image</th>
                <th className="py-3 px-4 border">Title</th>
                <th className="py-3 px-4 border">Add</th>
                <th className="py-3 px-4 border">Price</th>
                <th className="py-3 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, idx) => (
                <tr key={idx} className="text-center">
                  <td className="border px-4 py-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="border px-4 py-2">{item.title}</td>
                  <td className="flex items-center justify-center gap-4 p-3 mt-7">
                    <span
                      className="bg-red-600 py-1 px-2 text-white rounded cursor-pointer hover:bg-red-700"
                      onClick={() => decreaseQty(item.id)}
                    >
                      <FaMinus />
                    </span>
                    <span className="font-semibold text-lg">{item.quantity}</span>
                    <span
                      className="bg-red-600 py-1 px-2 text-white rounded cursor-pointer hover:bg-red-700"
                      onClick={() => increaseQty(item.id)}
                    >
                      <FaPlus />
                    </span>
                  </td>
                  <td className="border px-4 py-2">{item.price}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {cartItems.length === 0 && (
                <tr>
                  <td colSpan="5" className="py-4 text-center text-gray-500">
                    No items in cart.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="sticky border border-gray-400 top-28 h-fit p-5 py-10 flex flex-col gap-6 bg white shadow-md rounded-md w-full sm:w-[300px] mx-auto sm:mx-0 mt-10">
          <h3 className="font-bold text-2xl">Your Details</h3>
          <div className="flex justify-center items-center">
            <div className="font-semibold bg-red-500 text-white px-3 py-2 rounded hover:bg-red-400 text-lg">
              Total Items: {cartItems.length}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="font-semibold bg-red-500 text-white px-3 py-2 rounded hover:bg-red-400 text-lg">
              Total Price: ${calculateTotalPrice()}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-green-500 text-white px-6 py-2 rounded cursor-pointer hover:bg-green-600">
              Proceed to Buy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCART;
