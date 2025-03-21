import React, { useState } from "react";
import { Link } from "react-router-dom";
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

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [shopLinksVisible, setShopLinksVisible] = useState(false); // Fixed typo
  const [blogshow, setblogshow] = useState(false);
  const [plusShop, setplusShop] = useState(false);

  // shops 1 links States
  const [Shop1State, setShop1State] = useState(false);
  // shop  links 2 state
  const [Shop3State, setShop3State] = useState(false);
  // shop  links 3 state
  const [Shop4State, setShop4State] = useState(false);
  // shop  links 4 state
  const [Shop5State, setShop5State] = useState(false);

  // Blog link state
  const [blogplus, setblogplus] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  const ShopToggle = () => {
    setplusShop(!plusShop);
  };
  const ShopTogglle = () => {
    setShop1State(!Shop1State);
  };
  const Togle3 = () => {
    setShop3State(!Shop3State);
  };
  const Togle4 = () => {
    setShop4State(!Shop4State);
  };
  const Togle5 = () => {
    setShop5State(!Shop5State);
  };
  const Togle6 = () => {
    setShop5State(!Shop5State);
  };
  // Blog LInk funciton

  const BlogToggle = () => {
    setblogplus(!blogplus);
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
            <BsFillBasketFill className="cursor-pointer hover:text-yellow-300" />
            {/* Menu Toggle Button */}
            <IoIosMenu
              className="text-3xl lg:hidden cursor-pointer hover:text-gray-700"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu (Slide-in effect) */}
      {menu && (
        <div className=" z-1 left-0 w-[80vw] md:w-[60vw] lg:hidden min-h-screen  bg-gray-200 shadow-lg transition-transform transform translate-x-0 p-4 overflow-auto">
          {/* Close Button */}
          <div className="flex justify-end">
            <RxCross1
              className="text-3xl cursor-pointer"
              onClick={toggleMenu}
            />
          </div>

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
              onClick={() => ShopToggle()}
              className="flex justify-between  items-center p-1 border-b border-gray-400 hover:text-yellow font-bold transition duration-300"
            >
              <Link to="#" className="">
                Shop
              </Link>
              <BsPlusSquare className="text-xl hover:rotate-90 transition-transform duration-300" />
            </li>
            {plusShop && (
              <ul className="flex  flex-col gap-1 w-[98%]  ml-3 ">
                <li
                  onClick={() => ShopTogglle()}
                  className="flex justify-between hover:bg-amber-400  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300"
                >
                  <Link to="">Shop Page</Link>
                  <BsPlusSquare className="text-xl hover:rotate-90 transition-transform duration-300" />
                </li>
                {/* Shop Pages LInk  */}
                {Shop1State && (
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

                {/* shops state 4  */}
                <li
                  onClick={() => Togle3()}
                  className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300"
                >
                  <Link to=""> Product Details Page</Link>
                  <BsPlusSquare className="text-xl hover:rotate-90 transition-transform duration-300" />
                </li>
                {Shop3State && (
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

                {/* shops state 4  */}
                <li
                  onClick={() => Togle4()}
                  className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300"
                >
                  <Link to="">Single Product Page</Link>
                  <BsPlusSquare className="text-xl hover:rotate-90 transition-transform duration-300" />
                </li>
                {Shop4State && (
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
                {/* shops state 4  */}
                <li
                  onClick={() => Togle5()}
                  className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300"
                >
                  <Link to="">Other Pages</Link>
                  <BsPlusSquare className="text-xl hover:rotate-90 transition-transform duration-300" />
                </li>
                {Shop5State && (
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

            {/* Blog LINK  */}
            <li
              onClick={() => BlogToggle()}
              className="flex justify-between  items-center p-1 border-b border-gray-400 hover:text-yellow font-bold transition duration-300"
            >
              <Link to="#" className="">
                Blog
              </Link>
              <BsPlusSquare className="text-xl hover:rotate-90 transition-transform duration-300" />
            </li>
            {blogplus && (
              <ul className="flex  flex-col gap-1 w-[98%]  ml-3 ">
                <li
                  onClick={() => ShopTogglle()}
                  className="flex justify-between hover:bg-amber-400  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300"
                >
                  <Link to="">Blog Page</Link>
                  <BsPlusSquare className="text-xl hover:rotate-90 transition-transform duration-300" />
                </li>
                {/* Shop Pages LInk  */}
                {Shop1State && (
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

                {/* shops state 4  */}
                <li
                  onClick={() => Togle3()}
                  className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300"
                >
                  <Link to=""> Blog Details Page</Link>
                  <BsPlusSquare className="text-xl hover:rotate-90 transition-transform duration-300" />
                </li>
                {Shop3State && (
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

                {/* shops state 4  */}
                <li
                  onClick={() => Togle4()}
                  className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300"
                >
                  <Link to="">Blog Product Page</Link>
                  <BsPlusSquare className="text-xl hover:rotate-90 transition-transform duration-300" />
                </li>
                {Shop4State && (
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
                {/* shops state 4  */}
                <li
                  onClick={() => Togle5()}
                  className="flex justify-between  items-center p-1 border-b border-gray-300 hover:text-yellow  transition duration-300"
                >
                  <Link to="">Blog Other Pages</Link>
                  <BsPlusSquare className="text-xl hover:rotate-90 transition-transform duration-300" />
                </li>
                {Shop5State && (
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
          <div className="absolute  bottom-2 flex justify-center items-center w-[90%] ">
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
          className="w-[80vw] absolute z-1 top-[4.5rem] left-[20px] h-[40vh] bg-gradient-to-r from-gray-200 to-gray-100 rounded-xl flex justify-around pt-3"
          onMouseEnter={() => setShopLinksVisible(true)}
          onMouseLeave={() => setShopLinksVisible(false)}
        >
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-semibold">Shop Page</h1>
            <ul className="flex flex-col gap-3">
              <li>
                <Link className="hover:text-[#F0B100]" to="">
                  Shop1 Detail
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F0B100]" to="">
                  Shop1 Detail
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F0B100]" to="">
                  Shop1 Detail
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F0B100]" to="">
                  Shop1 Detail
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-semibold"> Prodcut Detail Page</h1>
            <ul className="flex flex-col gap-3">
              <li>
                <Link className="hover:text-[#F0B100]" to="">
                  Shop1 Detail
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F0B100]" to="">
                  Shop1 Detail
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F0B100]" to="">
                  Shop1 Detail
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F0B100]" to="">
                  Shop1 Detail
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-semibold">Single Product Page</h1>
            <ul className="flex flex-col gap-3">
              <li>
                <Link className="hover:text-[#F0B100]" to="">
                  Shop1 Detail
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F0B100]" to="">
                  Shop1 Detail
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F0B100]" to="">
                  Shop1 Detail
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F0B100]" to="">
                  Shop1 Detail
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
                <Link className="hover:text-[#F0B100]" to="">
                  Checkout Page
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F0B100]" to="">
                  Wishlist Page
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#F0B100]" to="">
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
          className="w-[20vw] absolute z-1 top-[4.5rem] left-[45rem] h-[20vh] rounded-xl bg-gradient-to-r  from-gray-200 to-gray-100 "
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
