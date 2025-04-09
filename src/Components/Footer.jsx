import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaTiktok, FaGithub } from "react-icons/fa";

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
              <li>Shipping & Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-gray-800">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li>My Account</li>
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
