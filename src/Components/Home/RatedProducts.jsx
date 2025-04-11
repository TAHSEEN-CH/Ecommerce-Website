import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const products = [
  { id: 1, name: "Camera DSLR", price: "$500", rating: 4.5, image: "/shop/product(15).jpeg" },
  { id: 2, name: "Smart Watch", price: "$300", rating: 1.5, image: "/shop/product(17).jpeg" },
  { id: 3, name: "TV Remote", price: "$150", rating: 3.4, image: "/shop/product(11).jpeg" },
  { id: 4, name: "Fitness Tracker", price: "$200", rating: 4.5, image: "/shop/product(13).jpeg" },
  { id: 5, name: "Tablet", price: "$100", rating: 4.4, image: "/shop/product(12).jpeg" },
  { id: 6, name: "Cleaner", price: "$120", rating: 2.1, image: "/shop/product(16).jpeg" },
  { id: 7, name: "Air Fan", price: "$80", rating: 1.1, image: "/shop/product(19).jpeg" },
  { id: 8, name: "Gaming Mouse", price: "$90", rating: 2.9, image: "/shop/product(10).jpeg" },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center space-x-2 text-yellow-500">
      <div className="flex">
        {Array.from({ length: 5 }, (_, index) => (
          index < Math.floor(rating) ? <FaStar key={index} /> : <FaStarHalfAlt key={index} />
        ))}
      </div>
      <span className="text-gray-700 text-sm font-semibold">{rating}</span> {/* Shows numeric rating */}
    </div>
  );
};

const RatedProducts = () => {
  return (
    <section className="max-w-6xl mx-auto text-center py-12">
      <h2 className=" max-md:text-2xl text-4xl font-bold">Top Rated Products</h2>
      <p className="text-gray-800 text-lg font-medium mb-6 mt-4">Explore the best-rated products chosen by experts and customers.</p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="flex flex-row items-center border border-gray-50 m-2 sm:m-0 p-4 rounded-lg shadow-md text-left transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out gap-6 sm:gap-0">
            {/* Image Left */}
            <img src={product.image} alt={product.name} className="w-32 sm:w-24 h-24 object-cover rounded-md md:mr-4" />

            {/* Content Right */}
            <div>
              <StarRating rating={product.rating} />
              <h3 className="text-lg text-nowrap font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-800 font-semibold mt-2">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RatedProducts;