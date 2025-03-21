import React, { useRef } from "react";
import { IoPencil } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { LuMinus } from "react-icons/lu";
import { GoPlus } from "react-icons/go";

// Corrected image paths
import glassesimg from "/ShopCartimg/glasses.avif";
import headphone from "/ShopCartimg/headphone.avif";
import laptop from "/ShopCartimg/laptop.avif";

const HeroCart = () => {
  const scrollRef = useRef(null);

  const TableData = [
    {
      id: "1",
      productImg: glassesimg,
      name: "Laptop",
      price: "23",
      quantity: "1",
      subtotal: "23$",
    },
    {
      id: "2",
      productImg: headphone,
      name: "Headphone",
      price: "78",
      quantity: "1",
      subtotal: "78$",
    },
    {
      id: "3",
      productImg: laptop,
      name: "Glasses",
      price: "89",
      quantity: "2",
      subtotal: "178$",
    },
  ];

  // Function to scroll table left/right
  const scrollTable = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-6 relative">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Cart Items</h1>

        {/* Left Scroll Button */}
        <button
          onClick={() => scrollTable("left")}
          className="absolute left-0 top-1/2 lg:hidden -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 transition z-10 hidden md:block"
        >
          <IoIosArrowBack size={20} />
        </button>

        {/* Scrollable Table Container */}
        <div className="overflow-x-auto scrollbar-hide relative" ref={scrollRef}>
          <table className="w-full min-w-[800px] border border-gray-200">
            <thead className="bg-gray-200 text-gray-700 uppercase">
              <tr className="h-[10vh]">
                <th className="px-6 py-4 text-left">Image</th>
                <th className="px-6 py-4 text-left">Product Name</th>
                <th className="px-6 py-4 text-left">Unit Price</th>
                <th className="px-6 py-4 text-left">Quantity</th>
                <th className="px-6 py-4 text-left">Subtotal</th>
                <th className="px-6 py-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {TableData.map((product) => (
                <tr key={product.id} className="text-center transition h-[10vh] lg:h-[30vh]">
                  <td className="px-6 py-4">
                    <img
                      src={product.productImg}
                      alt={product.name}
                      className="w-30 h-19 object-cover rounded-lg mx-auto"
                    />
                  </td>
                  <td className="px-6 py-4 text-gray-700 font-bold text-lg">{product.name}</td>
                  <td className="px-6 py-4 text-gray-700 text-lg">{product.price}$</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 w-24 mx-auto">
                      <button className="p-2 bg-red-300">
                        <LuMinus />
                      </button>
                      <input type="number" min="1" value={product.quantity} readOnly className="w-7 text-center" />
                      <button className="p-2 bg-gray-400">
                        <GoPlus />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700 text-lg">{product.subtotal}</td>
                  <td className="px-6 py-4 gap-4">
                    <button className="text-blue-500 hover:text-blue-700 p-2 transition">
                      <IoPencil size={24} />
                    </button>
                    <button className="p-2 transition">
                      <MdOutlineDelete size={24} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scrollTable("right")}
          className="absolute right-0 top-1/2 lg:hidden -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 transition z-10 hidden md:block"
        >
          <IoIosArrowForward size={20} />
        </button>
      </div>
    </div>
  );
};

export default HeroCart;
