import React from "react";
import { BiWallet } from "react-icons/bi";
import { BsHeadphones, BsTruck } from "react-icons/bs";
import { FiRotateCcw } from "react-icons/fi";


const facilities = [
  {
    icon: <BsTruck size={55} className="text-gray-600" />,
    title: "FREE SHIPPING",
    description: "Free shipping all orders",
  },
  {
    icon: <BsHeadphones size={55} className="text-gray-600" />,
    title: "ONLINE SUPPORT",
    description: "Support 24 hours a day",
  },
  {
    icon: <BiWallet size={55} className="text-gray-600" />,
    title: "100% MONEY BACK",
    description: "We ensure secure payment",
  },
  {
    icon: <FiRotateCcw size={55} className="text-gray-600" />,
    title: "MONEY RETURN",
    description: "30 days for free return",
  },
];

const Facilities = () => {
  return (
    <div className="w-full py-6 pb-16 ps-8  bg-white">
      <div className="max-w-7xl mx-auto px-8  grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10">
        {facilities.map((facility, index) => (
          <div key={index} className="flex items-center space-x-4">
            {facility.icon}
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-800">{facility.title}</h3>
              <p className="text-sm text-gray-700">{facility.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
