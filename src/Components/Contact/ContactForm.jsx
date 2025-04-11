import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaGoogle,
  FaInstagram,
} from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info Section */}
        <div className="p-6  shadow-md rounded-sx bg-[#f5f5f5]">
          <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
          <div className="space-y-3 text-gray-600">
            <p className="flex items-center gap-4">
              <span className="text-lg font-semibold">Phone:</span> 0123456789
            </p>
            <p className="flex flex-wrap items-center gap-4 md:gap-x-2 gap-y-0">
              <span className="text-lg font-semibold ">Email:</span> demo@eple.com
            </p>
            <p className="flex flex-wrap items-center gap-4 md:gap-x-2 gap-y-0">
              <span className="text-lg font-semibold">Address:</span> Address goes here.
            </p>
          </div>
          <h3 className="text-lg font-semibold mt-6">Follow Us</h3>
          <div className="flex gap-3 mt-2">
            <FaFacebook className="text-gray-600 text-xl cursor-pointer hover:text-blue-700" />
            <FaTwitter className="text-gray-400 text-xl cursor-pointer hover:text-blue-500" />
            <FaYoutube className="text-gray-500 text-xl cursor-pointer hover:text-red-600" />
            <FaGoogle className="text-gray-500 text-xl cursor-pointer hover:text-orange-600" />
            <FaInstagram className="text-gray-500 text-xl cursor-pointer hover:text-pink-600" />
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="md:col-span-2 p-6 shadow-md rounded-sx bg-[#f5f5f5]">
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject*"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              name="message"
              placeholder="Your Message*"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
            <button
              type="submit"
              className="w-full sm:w-1/2 md:w-1/4 bg-yellow-500 text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
