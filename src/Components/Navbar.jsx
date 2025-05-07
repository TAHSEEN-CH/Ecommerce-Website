import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SlArrowDown } from "react-icons/sl";
import { IoMdSettings } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { BsFillBasketFill, BsPlusSquare } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx"; // Added close icon
import ShopPlus from "./ShopPlus";
import { AiOutlineMinus } from "react-icons/ai";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const MovetoADtoCart = () => {
    navigate("/adtoCart");
  };

  const [menu, setMenu] = useState(false);
  const [shopLinksVisible, setShopLinksVisible] = useState(false); // Fixed typo
  const [blogshow, setblogshow] = useState(false);
  // it show bog 4 page
  const [plusShop, setplusShop] = useState(false);
  // it show shop 4 page

  // Shop Page STATES

  // shops 1 links States
  const [Shop1State, setShop1State] = useState(false);
  // shop  links 2 state
  const [Shop3State, setShop3State] = useState(false);
  // shop  links 3 state
  const [Shop4State, setShop4State] = useState(false);
  // shop  links 4 state
  const [Shop5State, setShop5State] = useState(false);
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // Blog Page STATES

  // shops 1 links States
  const [blog1State, setblog1state] = useState(false);
  const [blog2State, setblog2state] = useState(false);
  const [blog3State, setblog3state] = useState(false);
  const [blog4State, setblog4state] = useState(false);

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // Blog link state
  const [blogplus, setblogplus] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  // Main Shop function
  const MainShopfunc = () => {
    setplusShop(!plusShop);
    setblogplus(false);
    // All State of Blog becomes false when Shop page is click
    setblog1state(false);
    setblog2state(false);
    setblog3state(false);
    setblog4state(false);
  };
  // His Shop Child
  const shopChild1 = () => {
    setShop1State(!Shop1State);
    setShop3State(false);
    setShop5State(false);
    setShop4State(false);
  };
  const shopChild2 = () => {
    setShop3State(!Shop3State);
    setShop5State(false);
    setShop4State(false);
    setShop1State(false);
  };
  const shopChild3 = () => {
    setShop4State(!Shop4State);
    setShop3State(false);
    setShop5State(false);
    setShop1State(false);
  };
  const shopChild4 = () => {
    setShop5State(!Shop5State);
    setShop4State(false);
    setShop3State(false);
    setShop1State(false);
  };

  // Blog Main funciton

  const MainBlogfunc = () => {
    setblogplus(!blogplus);
    setplusShop(false);
    // All States of Shop Page becomes false when the Blog page is clicked
    setShop1State(false);
    setShop3State(false);
    setShop5State(false);
    setShop4State(false);
  };
  // His Blog Child
  const childBlog1 = () => {
    setblog1state(!blog1State);
    setblog2state(false);
    setblog3state(false);
    setblog4state(false);
  };
  const childBlog2 = () => {
    setblog1state(false);
    setblog2state(!blog2State);
    setblog3state(false);
    setblog4state(false);
  };
  const childBlog3 = () => {
    setblog1state(false);
    setblog2state(false);
    setblog3state(!blog3State);
    setblog4state(false);
  };
  const childBlog4 = () => {
    setblog1state(false);
    setblog2state(false);
    setblog3state(false);
    setblog4state(!blog4State);
  };

  const shopLinks = [
    {
      title: "Shop Page",
      links: ["Shop3 Detail", "Shop3 Detail", "Shop3 Detail", "Shop3 Detail"],
    },
    {
      title: "Shop Details Page",
      links: [
        "Product Single",
        "Product Variable",
        "Product Detail",
        "Product Detail",
      ],
    },
    {
      title: "Shop Single Product",
      links: ["Single Product", "Shop3 Detail", "Shop3 Detail", "Shop3 Detail"],
    },
    {
      title: "Other Pages",
      links: [
        "Cart Page",
        "Checkout Page",
        "Whishlist Page",
        "Empty Card Page",
      ],
    },
  ];

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
              >
                Home <SlArrowDown className="text-xs" />
              </Link>
            </li>
            <li className="h-10 transition-all duration-300">
              <Link
                to="/about"
                className="flex items-center hover:text-[#F0B100] gap-1 text-gray-700"
              >
                About Us <SlArrowDown className="text-xs" />
              </Link>
            </li>
            <li
              className="h-10 transition-all duration-300"
              onMouseEnter={() => setShopLinksVisible(true)}
              onMouseLeave={() => setShopLinksVisible(false)}
            >
              <Link
                to="/shop"
                className="flex items-center hover:text-[#F0B100] gap-1 text-gray-700"
              >
                Shop <SlArrowDown className="text-xs" />
              </Link>
            </li>
            <li
              className="h-10 transition-all duration-300"
              onMouseEnter={() => setblogshow(true)}
              onMouseLeave={() => setblogshow(false)}
            >
              <Link
                to="/blog"
                className="flex items-center hover:text-[#F0B100] gap-1 text-gray-700"
              >
                Blog <SlArrowDown className="text-xs" />
              </Link>
            </li>

            <li className="h-10 transition-all duration-300">
              <Link
                to="/contact"
                className="flex items-center hover:text-[#F0B100] gap-1 text-gray-700"
              >
                Contact <SlArrowDown className="text-xs" />
              </Link>
            </li>
          </ul>

          {/* Icons & Menu Button */}
          <div className="flex gap-x-5 md:text-2xl text-md justify-center items-center">
            <IoMdSettings className="cursor-pointer hover:text-yellow-300" />
            <FaHeart className="cursor-pointer hover:text-yellow-300" />

            {/* ad to Cart Page Render Icond is here  */}
            <Link to='/adtoCart' className="relative text-2xl transition-all duration-600 ease-in-out">
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
              <Link to="#" className="text-gray-900">
                Home
              </Link>
            </li>

            <li className="flex justify-between items-center p-1 border-b border-gray-400 hover:text-white transition duration-300">
              <Link to="#" className="text-gray-900">
                About Us
              </Link>
            </li>

            <li
              onClick={() => MainShopfunc()}
              className="flex justify-between relative  items-center p-1 border-b border-gray-400 hover:text-yellow font-bold transition duration-300"
            >
              <Link to="#" className="">
                Shop
              </Link>
              {!plusShop && (
                <BsPlusSquare className="absolute top-2 right-0 text-xl hover:rotate-90 transition-transform duration-300" />
              )}
              {plusShop && (
                <AiOutlineMinus className="absolute top-2 right-0  text-xl hover:rotate-90 transition-transform duration-300" />
              )}
            </li>
            {plusShop && (
              <ul className="flex  flex-col gap-1 w-[98%]  ml-3 ">
                <li
                  onClick={() => shopChild1()}
                  className="flex justify-between hover:bg-amber-400  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300"
                >
                  <Link to="">Shop Page</Link>

                  {!Shop1State && (
                    <BsPlusSquare className="text-xl hover:rotate-90 transition-transform duration-300" />
                  )}
                  {Shop1State && (
                    <AiOutlineMinus className="text-xl hover:rotate-90 transition-transform duration-300" />
                  )}
                </li>
                {/* Shop Pages LInk  */}
                {Shop1State && (
                  <ul className="flex  flex-col gap-1 w-[98%]  ml-3 ">
                    <li className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300">
                      <Link to="">Jahanum1</Link>
                    </li>
                    <li className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300">
                      <Link to="">Page2</Link>
                    </li>
                    <li className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300">
                      <Link to="">Page3</Link>
                    </li>
                  </ul>
                )}

                {/* shops state 4  */}
                <li
                  onClick={() => shopChild2()}
                  className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300"
                >
                  <Link to=""> Product Details Page</Link>
                  {!Shop3State && (
                    <BsPlusSquare className="text-xl hover:rotate-90 transition-transform duration-300" />
                  )}
                  {Shop3State && (
                    <AiOutlineMinus className="text-xl hover:rotate-90 transition-transform duration-300" />
                  )}
                </li>
                {Shop3State && (
                  <ul className="flex  flex-col gap-1 w-[98%]  ml-3 ">
                    <li className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300">
                      <Link to="">Jahanum2</Link>
                    </li>
                    <li className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300">
                      <Link to="">Page2</Link>
                    </li>
                    <li className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300">
                      <Link to="">Page3</Link>
                    </li>
                  </ul>
                )}

                {/* shops state 4  */}
                <li
                  onClick={() => shopChild3()}
                  className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300"
                >
                  <Link to="">Single Product Page</Link>
                  {!Shop4State && (
                    <BsPlusSquare className="text-xl hover:rotate-90 transition-transform duration-300" />
                  )}
                  {Shop4State && (
                    <AiOutlineMinus className="text-xl hover:rotate-90 transition-transform duration-300" />
                  )}
                </li>
                {Shop4State && (
                  <ul className="flex  flex-col gap-1 w-[98%]  ml-3 ">
                    <li className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300">
                      <Link to="">Jahanum3</Link>
                    </li>
                    <li className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300">
                      <Link to="">Page2</Link>
                    </li>
                    <li className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300">
                      <Link to="">Page3</Link>
                    </li>
                  </ul>
                )}
                {/* shops state 4  */}
                <li
                  onClick={() => shopChild4()}
                  className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300"
                >
                  <Link to="">Other Pages</Link>
                  {!Shop5State && (
                    <BsPlusSquare className="text-xl hover:rotate-90 transition-transform duration-300" />
                  )}
                  {Shop5State && (
                    <AiOutlineMinus className="text-xl hover:rotate-90 transition-transform duration-300" />
                  )}
                </li>
                {Shop5State && (
                  <ul className="flex  flex-col gap-1 w-[98%]  ml-3 ">
                    <li className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300">
                      <Link to="">Jahanum4</Link>
                    </li>
                    <li className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300">
                      <Link to="">Page2</Link>
                    </li>
                    <li className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300">
                      <Link to="">Page3</Link>
                    </li>
                  </ul>
                )}
              </ul>
            )}

            {/* Blog LINK  */}
            <li
              onClick={() => MainBlogfunc()}
              className=" relative flex justify-between  items-center p-1 border-b border-gray-400 hover:text-yellow font-bold transition duration-300"
            >
              <Link to="#" className="">
                Blog
              </Link>
              {!blogplus && (
                <BsPlusSquare className=" absolute top-2 right-0  text-xl hover:rotate-90 transition-transform duration-300" />
              )}
              {/* {!blogplus &&
             plusShop(false)           
                
              } */}
              {blogplus && (
                <AiOutlineMinus className="absolute top-2 right-0  text-xl hover:rotate-90 transition-transform duration-300" />
              )}
            </li>
            {blogplus && (
              <ul className="flex  flex-col gap-1 w-[98%]  ml-3 ">
                <li
                  onClick={() => childBlog1()}
                  className="flex justify-between hover:bg-amber-400  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300"
                >
                  <Link to="">Blog Page</Link>
                  {!blog1State && (
                    <BsPlusSquare className="text-xl hover:rotate-90 transition-transform duration-300" />
                  )}
                  {blog1State && (
                    <AiOutlineMinus className="text-xl hover:rotate-90 transition-transform duration-300" />
                  )}
                </li>
                {/* Blog 1 State  */}
                {blog1State && (
                  <ul className="flex  flex-col gap-1 w-[98%]  ml-3 ">
                    <li className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300">
                      <Link to="">page1</Link>
                    </li>
                    <li className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300">
                      <Link to="">Page2</Link>
                    </li>
                    <li className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300">
                      <Link to="">Page3</Link>
                    </li>
                  </ul>
                )}

                {/* blog 2 page   */}
                <li
                  onClick={() => childBlog2()}
                  className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300"
                >
                  <Link to=""> Blog Details Page</Link>
                  {!blog2State && (
                    <BsPlusSquare className="text-xl hover:rotate-90 transition-transform duration-300" />
                  )}
                  {blog2State && (
                    <AiOutlineMinus className="text-xl hover:rotate-90 transition-transform duration-300" />
                  )}
                </li>
                {/* blog 2 state  */}
                {blog2State && (
                  <ul className="flex  flex-col gap-1 w-[98%]  ml-3 ">
                    <li className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300">
                      <Link to="">page1</Link>
                    </li>
                    <li className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300">
                      <Link to="">Page2</Link>
                    </li>
                    <li className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300">
                      <Link to="">Page3</Link>
                    </li>
                  </ul>
                )}

                {/* Blog 3 Page */}
                <li
                  onClick={() => childBlog3()}
                  className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300"
                >
                  <Link to="">Blog Product Page</Link>
                  {!blog3State && (
                    <BsPlusSquare className="text-xl hover:rotate-90 transition-transform duration-300" />
                  )}
                  {blog3State && (
                    <AiOutlineMinus className="text-xl hover:rotate-90 transition-transform duration-300" />
                  )}
                </li>

                {/* blog 3 state  */}
                {blog3State && (
                  <ul className="flex  flex-col gap-1 w-[98%]  ml-3 ">
                    <li className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300">
                      <Link to="">page1</Link>
                    </li>
                    <li className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300">
                      <Link to="">Page2</Link>
                    </li>
                    <li className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300">
                      <Link to="">Page3</Link>
                    </li>
                  </ul>
                )}
                {/* Blog 4 Page  */}
                <li
                  onClick={() => childBlog4()}
                  className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300"
                >
                  <Link to="">Blog Other Pages</Link>
                  {!blog4State && (
                    <BsPlusSquare className="text-xl hover:rotate-90 transition-transform duration-300" />
                  )}
                  {blog4State && (
                    <AiOutlineMinus className="text-xl hover:rotate-90 transition-transform duration-300" />
                  )}
                </li>
                {/* blog 4 State  */}
                {blog4State && (
                  <ul className="flex  flex-col gap-1 w-[98%]  ml-3 ">
                    <li className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300">
                      <Link to="">page1</Link>
                    </li>
                    <li className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300">
                      <Link to="">Page2</Link>
                    </li>
                    <li className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300">
                      <Link to="">Page3</Link>
                    </li>
                  </ul>
                )}
              </ul>
            )}

            <li className="flex justify-between items-center p-1 border-b border-gray-400 hover:text-white transition duration-300">
              <Link to="#" className="text-gray-900">
                Contact Us
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

      {/* Shop Links Dropdown */}
      {shopLinksVisible && (
        <div
          className="w-[80vw] absolute top-[4.5rem] left-[20px] h-[39vh] z-89 bg-white from-gray-200 to-gray-100 rounded-xl flex justify-around pt-3"
          onMouseEnter={() => setShopLinksVisible(true)}
          onMouseLeave={() => setShopLinksVisible(false)}
        >
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-semibold">Shop Page</h1>
            <ul className="flex flex-col gap-3">
              <li>
                <Link className="hover:text-[#F0B100]" to="">
                  Shop Column 3
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F0B100]" to="">
                  Shop1 Column 4
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F0B100]" to="">
                  Shop Column Left Slider
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F0B100]" to="">
                  Shop1 Column Right Slider
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-semibold"> Prodcut Detail Page</h1>
            <ul className="flex flex-col gap-3">
              <li>
                <Link className="hover:text-[#F0B100]" to="">
                  Product Single
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F0B100]" to="">
                  Product Variable
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F0B100]" to="">
                  Product Affiliate
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F0B100]" to="">
                  Product Group
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-semibold">Single Product Page</h1>
            <ul className="flex flex-col gap-3">
              <li>
                <Link className="hover:text-[#F0B100]" to="/teampage">
                  {/* Produt Slider  */}
                  Team Page
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F0B100]" to="addproduct">
                  {/* Product Gallery Left */}
                  Add Product Form
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F0B100]" to="/adduser">
                  {/* Product Gallery Right */}
                  Add User Form
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F0B100]" to="">
                  Product Sticky Left
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F0B100]" to="">
                  Product Sticky Right
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-semibold">Other Pages</h1>
            <ul className="flex flex-col gap-3">
              <li>
                <Link className="hover:text-[#F0B100]" to="/cart">
                  Cart Page
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F0B100]" to="/checkout">
                  Checkout Page
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F0B100]" to="/whishlist">
                  Wishlist Page
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F0B100]" to="/emptyCard">
                  Empty Cart Page
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Blog Links Dropdown */}
      {blogshow && (
        <div
          className="w-[20vw] absolute z-1 top-[4.5rem] left-[45rem] h-[20vh] rounded-xl bg-white "
          onMouseEnter={() => setblogshow(true)}
          onMouseLeave={() => setblogshow(false)}
        >
          <ul className="p-2 flex flex-col justify-center gap-5 font-semibold">
            <li className="border-b border-gray-100 hover:border-gray-300 p-1">
              <Link to="#" className="hover:text-[#F0B100] ">
                Blog1
              </Link>
            </li>
            <li className="border-b border-gray-100 hover:border-gray-300 p-1">
              <Link to="#" className="hover:text-[#F0B100]">
                Blog2
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* {plusShop && <ShopPlus/> } */}
    </>
  );
};

export default Navbar;
