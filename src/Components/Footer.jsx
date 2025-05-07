import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaTiktok, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-5 text-gray-700">
      <div className="max-w-6xl mx-auto">
        {/* Newsletter Section */}
        <div className="text-center mb-8 px-4">
          <h2 className="text-xl font-bold">Sign Up For Newsletters</h2>
          <p className="text-sm text-gray-600">
            Get e-mail updates about our latest shop and special offers.
          </p>
          <div className="mt-4 flex justify-center">
            <div className="relative w-full max-w-md">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full p-3 border bg-white border-gray-300 rounded-full focus:outline-none pr-28"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-yellow-500 text-white px-4 sm:px-5 rounded-full text-sm font-semibold">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-15 text-sm text-center ">
          <div className="flex flex-wrap ">
            <h3 className="font-semibold max-lg:mx-auto flex lg:ps-4  text-xl text-gray-800">My Account</h3>
            <div className="space-y-3  text-nowrap flex flex-wrap ">
              <p className="flex justify-center sm:justify-start items-center gap-2">
                <FaMapMarkerAlt className="text-lg" /> Your address goes here.
              </p>
              <p className="flex justify-center sm:justify-start items-center gap-2">
                <FaEnvelope className="text-lg" /> Mail Us: demo@example.com
              </p>
              <p className="flex justify-center sm:justify-start items-center gap-2">
                <FaPhone className="text-lg" /> Phone: 0123456789
              </p>
              <div className="flex justify-center sm:justify-start mt-3">
                <img src="./footer/listpic.webp" alt="Paypal" className="w-42 object-cover" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-gray-800">Categories</h3>
            <ul className="mt-3 space-y-2">
              <li>Ecommerce</li>
              <li>Shopify</li>
              <li>Prestashop</li>
              <li>Opencart</li>
              <li>Magento</li>
              <li>Jigoshop</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-gray-800">Information</h3>
            <ul className="mt-3 space-y-2">
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Returns & Exchanges</li>
              <li><Link to='/faq'>FAQ</Link></li>
              <li><Link to='/privacypolicy'>Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-gray-800">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li><Link to='/comesoon'>Coming Soon</Link></li>
              <li>Store Location</li>
              <li>Orders Tracking</li>
              <li>Return Policy</li>
              <li>Size Guide</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-12 text-sm text-gray-500 text-center sm:text-left">
          <div>
            Copyright © <span className="text-yellow-500">Celex</span> 2022. All rights reserved.
          </div>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-gray-600 text-xl cursor-pointer hover:text-blue-700 transition duration-200" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-500 text-xl cursor-pointer hover:text-blue-600 transition duration-200" />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="text-gray-600 text-xl cursor-pointer hover:text-gray-900 transition duration-200" />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-600 text-xl cursor-pointer hover:text-gray-900 transition duration-200" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;







// import React from 'react';
// import { FaTwitter, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-[#f0f0f0] text-[#1e1e1e] px-2 md:px-10 py-8 pt-12 max-lg:text-center">
//       <div className=" flex max-lg:flex-col gap-x-30 gap-y-10  max-w-7xl mx-auto ">
//         <div className=" max-w-lg lg:w-1/4  max-lg:mx-auto">
//           {/* Left Section */}
//           <div className="space-y-3  lg:space-y-6">
//             <h2 className="text-4xl font-extrabold">SHOP.CO</h2>
//             <p className="text-sm text-gray-600">
//               We have clothes that suits your style and which you're proud to wear. From women to men.
//             </p>
//             <div className="flex space-x-4 text-xl text-[#1e1e1e] max-lg:justify-center">
//               <FaTwitter className="cursor-pointer hover:text-blue-400 " />
//               <FaFacebookF className="cursor-pointer hover:text-blue-600" />
//               <FaInstagram className="cursor-pointer hover:text-pink-500" />
//               <FaTiktok className="cursor-pointer hover:text-black" />
//             </div>
//           </div>
//         </div>
//         {/* Columns */}
//         <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-8 gap-x-20 lg:text-start text-nowrap mx-auto'>
//           <div>
//             <h3 className="font-semibold mb-3.5">COMPANY</h3>
//             <ul className="space-y-2.5 text-sm text-gray-600 ">
//               <li className='cursor-pointer hover:text-gray-900'><a href="#">About</a></li>
//               <li className='cursor-pointer hover:text-gray-900'><a href="#">Features</a></li>
//               <li className='cursor-pointer hover:text-gray-900'><a href="#">Works</a></li>
//               <li className='cursor-pointer hover:text-gray-900'><a href="#">Career</a></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold mb-3.5">HELP</h3>
//             <ul className="space-y-2.5 text-sm text-gray-600">
//               <li className='cursor-pointer hover:text-gray-900'><a href="#">Customer Support</a></li>
//               <li className='cursor-pointer hover:text-gray-900'><a href="#">Delivery Details</a></li>
//               <li className='cursor-pointer hover:text-gray-900'><a href="#">Terms & Conditions</a></li>
//               <li className='cursor-pointer hover:text-gray-900'><a href="#">Privacy Policy</a></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold mb-3.5">FAQ</h3>
//             <ul className="space-y-2.5 text-sm text-gray-600">
//               <li className='cursor-pointer hover:text-gray-900'><a href="#">Account</a></li>
//               <li className='cursor-pointer hover:text-gray-900'><a href="#">Manage Deliveries</a></li>
//               <li className='cursor-pointer hover:text-gray-900'><a href="#">Orders</a></li>
//               <li className='cursor-pointer hover:text-gray-900'><a href="#">Payments</a></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold mb-3.5">RESOURCES</h3>
//             <ul className="space-y-2.5 text-sm text-gray-600 ">
//               <li className='cursor-pointer hover:text-gray-900'><a href="#">Free eBooks</a></li>
//               <li className='cursor-pointer hover:text-gray-900'><a href="#">Development Tutorial</a></li>
//               <li className='cursor-pointer hover:text-gray-900'><a href="#">How to - Blog</a></li>
//               <li className='cursor-pointer hover:text-gray-900'><a href="#">Youtube Playlist</a></li>
//             </ul>
//           </div>
//         </div>


//       </div>

//         {/* Bottom Bar */}
//         <div className="mt-10 max-w-7xl flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-5 mx-auto ">
//           <p className="text-sm text-gray-500">Shop.co © 2000-2025, All Rights Reserved</p>
//           <div className="flex space-x-3 mt-4 md:mt-0">
//             <img src="./footer/listpic.webp" alt="Visa" className="h-6" />

//           </div>
//         </div>
//     </footer>
//   );
// };

// export default Footer;

