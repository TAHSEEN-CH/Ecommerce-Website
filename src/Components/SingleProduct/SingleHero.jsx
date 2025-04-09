import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram } from "react-icons/fa";
import { BsShieldLock, BsTruck, BsArrowRepeat, BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

const SingleHero = () => {
  const product = {
    images: [
      "/Home/product(6).jpg",
      "/Home/product(2).jpg",
      "/Home/product(4).jpg",
      "/Home/product(5).jpg",
      "/Home/product(1).jpg",
   
    ],
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  //for Product quanniety 
  const [quantity, setQuantity] = useState(1);
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="container mx-auto px-4 lg:px-16 py-12 flex flex-col lg:flex-row  gap-y-10">
      {/* Left Side - Product Images */}
      <div className="lg:w-1/2 flex flex-col items-center">
        <div className="bg-gray-100 p-6 w-full max-w-md flex items-center justify-center overflow-hidden">
          <img src={selectedImage} alt="Product" className="h-full w-100 object-contain transition-transform duration-500 transform hover:scale-140" />
        </div>
        <div className="flex gap-2 mt-3 ">
          {product.images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(img)}
              className={`border rounded-md p-1 hover:border-yellow-500 cursor-pointer ${selectedImage === img ? "border-yellow-500 " : "border-gray-300 "
                }`}
            >
              <img src={img} alt="Thumbnail" className="w-18 h-17 object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Right Side - Static Product Section */}
      <div className="lg:w-2/3 space-y-5 md:px-3">
        <h2 className="text-3xl text-gray-800 font-semibold">New Affordable Fire TV</h2>
        <span className="text-gray-700 font-semibold text-xl">Reference:</span> <span>demo_17</span>

        {/* Static Star Rating */}
        <div className="flex items-center text-sm gap-1 mt-2 ">
          <BsStarFill className="text-yellow-500" />
          <BsStarFill className="text-yellow-500" />
          <BsStarFill className="text-yellow-500" />
          <BsStarFill className="text-yellow-500" />
          <BsStarHalf className="text-yellow-500" />
          <span className="ml-2 text-gray-500 hover:text-yellow-500 cursor-pointer">
            1 Read review
          </span>
        </div>

        <div className="text-xl font-bold text-yellow-500">
          $18.00 <span className="text-gray-500 text-lg line-through ml-2">$25.00</span>
        </div>
        <p>Aliquam nec urna nec magna cursus dapibus. Nullam id viverra neque. Etiam sit amet nisi ut odio dapibus posuere ultrices efficitur lorem.</p>

        {/* Quantity & Cart Button */}
        <div className="flex items-center gap-3">
          <div className="flex items-center border rounded px-2 py-1.5 text-lg">
            <button className="px-2" onClick={handleDecrease}>-</button>
            <span className="px-3">{quantity}</span>
            <button className="px-2" onClick={handleIncrease}>+</button>
          </div>
          <button className="bg-yellow-500 hover:bg-yellow-600 transition text-white px-5 py-2 rounded text-lg cursor-pointer">
            Add to Cart
          </button>
        </div>

        {/* Wishlist & Compare */}
        <div className="flex gap-4 mt-5 text-sm text-gray-600  ">
          <button className="flex items-center gap-1 hover:text-yellow-500 transition">
            <IoHeartOutline className="text-lg" /> Add to Wishlist
          </button>
          <button className="flex items-center gap-1 hover:text-yellow-500 transition">
            <HiOutlineSwitchHorizontal className="text-lg" /> Add to Compare
          </button>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-3 mt-5 text-gray-600 text-lg cursor-pointer border-b lg:w-3xl pb-5">
          <FaFacebookF className="hover:text-yellow-500 transition" />
          <FaTwitter className="hover:text-yellow-500 transition" />
          <FaGoogle className="hover:text-yellow-500 transition" />
          <FaInstagram className="hover:text-yellow-500 transition" />
        </div>

        {/* Policies */}
        <div className="mt-5 space-y-2 font-semibold text-gray-800">
          <div className="flex items-center gap-5">
            <span className="text-3xl"><BsShieldLock /></span>
            <span>Security Policy (Edit With Customer Reassurance Module)</span>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-3xl"><BsTruck /></span>
            <span>Delivery Policy (Edit With Customer Reassurance Module)</span>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-3xl"><BsArrowRepeat /></span>
            <span>Return Policy (Edit With Customer Reassurance Module)</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SingleHero;
