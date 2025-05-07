import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { BsFillBasketFill } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx"; // Added close icon
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };


  return (
    <>
      {/* Navbar */}
      <div className="w-full flex justify-center items-center shadow-xl">
        <div className="w-[80vw] mx-auto flex py-6 justify-between items-center">
          {/* Logo */}
          <h1 className="md:text-4xl text-2xl font-bold text-gray-800">
            Celex
          </h1>

          {/* Navigation */}
          <ul className="hidden lg:flex text-lg space-x-8 font-bold p-3">
            <li className="h-10 transition-all duration-300 ">
              <Link
                to="/"
                className="flex items-center hover:text-[#F0B100] gap-1 text-gray-700"
                onClick={() => setMenu(false)}
              >
                Home
              </Link>
            </li>
            <li
              className="h-10 transition-all duration-300"
            >
              <Link
                to="/shop"
                className="flex items-center hover:text-[#F0B100] gap-1 text-gray-700"
                onClick={() => setMenu(false)}
              >
                Shop
              </Link>
            </li>
            <li
              className="h-10 transition-all duration-300"
              onClick={() => setMenu(false)}
            >
              <Link
                to="/blog"
                className="flex items-center hover:text-[#F0B100] gap-1 text-gray-700"
                onClick={() => setMenu(false)}
              >
                Blog
              </Link>
            </li>

            <li className="h-10 transition-all duration-300">
              <Link
                to="/about"
                className="flex items-center hover:text-[#F0B100] gap-1 text-gray-700"
                onClick={() => setMenu(false)}
              >
                About
              </Link>
            </li>

            <li className="h-10 transition-all duration-300">
              <Link
                to="/contact"
                className="flex items-center hover:text-[#F0B100] gap-1 text-gray-700"
                onClick={() => setMenu(false)}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Icons & Menu Button */}
          <div className="flex gap-x-5 md:text-2xl text-md justify-center items-center">

            {/* ad to Cart Page Render Icond is here  */}
            <Link to='/adtoCart' className="relative text-2xl transition-all duration-600 ease-in-out" onClick={() => setMenu(false)}>
              <BsFillBasketFill
                className="cursor-pointer hover:text-yellow-300" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-300 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>

            <span className="relative  ">
              <span className="absolute top-[-13px]">
                {/* Menu Toggle Button */}
                {!menu && (
                  <IoIosMenu
                    className="text-3xl lg:hidden cursor-pointer hover:text-gray-700"
                    onClick={toggleMenu}
                  />
                )}
              </span>
              {/* Close Button */}
              <span className="flex justify-end absolute top-[-10px]  hover:text-gray-700 ">
                {menu && (
                  <RxCross1
                    className="text-3xl lg:hidden cursor-pointer"
                    onClick={toggleMenu}
                  />
                )}
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Slide-in effect) */}
      {menu && (
        <div className=" left-0 w-full md:w-[60vw] lg:hidden h-screen absolute top-20 z-[50] overflow-y-auto    bg-white shadow-lg transition-transform transform translate-x-0 p-4 overflow-auto">
          {/* Menu List */}
          <ul className="flex flex-col justify-center text-xl gap-2 mt-6">
            <li className="flex justify-between items-center p-1 border-b border-gray-400 hover:text-white transition duration-300">
              <Link to="/" className="text-gray-900" onClick={() => setMenu(false)}>
                Home
              </Link>
            </li>
            <li
              className="flex justify-between relative  items-center p-1 border-b border-gray-400 hover:text-yellow  transition duration-300"
            >
              <Link to="/shop" className="" onClick={() => setMenu(false)}>
                Shop
              </Link>
            </li>

            {/* Blog LINK  */}
            <li
              className=" relative flex justify-between  items-center p-1 border-b border-gray-400 hover:text-yellow transition duration-300"
            >
              <Link to="/blog" className="" onClick={() => setMenu(false)}>
                Blog
              </Link>
            </li>
            <li className="flex justify-between items-center p-1 border-b border-gray-400 hover:text-white transition duration-300">
              <Link to="/about" className="text-gray-900" onClick={() => setMenu(false)}>
                About
              </Link>
            </li>
            <li className="flex justify-between items-center p-1 border-b border-gray-400 hover:text-white transition duration-300">
              <Link to="/contact" className="text-gray-900" onClick={() => setMenu(false)}>
                Contact
              </Link>
            </li>
          </ul>
          {/* Social Icons */}
          <div className=" flex justify-center items-center mt-10">
            <ul className="flex justify-around text-xl gap-5 text-white">
              <li className="hover:scale-110 transition-transform duration-300">
                <Link
                  to="#"
                  className="w-8 h-8 flex justify-center items-center rounded-full bg-blue-600 text-white text-2xl shadow-lg hover:shadow-xl"
                >
                  <ImFacebook />
                </Link>
              </li>

              <li className="hover:scale-110 transition-transform duration-300">
                <Link
                  to="#"
                  className="w-8 h-8 flex justify-center items-center rounded-full bg-gray-900 text-white text-2xl shadow-lg hover:shadow-xl"
                >
                  <FaXTwitter />
                </Link>
              </li>

              <li className="hover:scale-110 transition-transform duration-300">
                <Link
                  to="#"
                  className="w-8 h-8 flex justify-center items-center rounded-full bg-green-500 text-white text-2xl shadow-lg hover:shadow-xl"
                >
                  <FaWhatsapp />
                </Link>
              </li>

              <li className="hover:scale-110 transition-transform duration-300">
                <Link
                  to="#"
                  className="w-8 h-8 flex justify-center items-center rounded-full bg-red-600 text-white text-2xl shadow-lg hover:shadow-xl"
                >
                  <AiOutlineYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
