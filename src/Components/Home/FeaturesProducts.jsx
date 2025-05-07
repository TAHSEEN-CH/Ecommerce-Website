import React from "react";
import { IoHeart, IoRefresh, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const product = [
  {
    id: 1,
    image: "/Home/product(5).jpg",
    hoverimage: "/Home/product(6).jpg",
    title: "New Affordable Fire TV",
    price: "$38.50",
    oldprice: "$42.50",
  },
  {
    id: 2,
    image: "/Home/product(7).jpg",
    hoverimage: "/Home/product(8).jpg",
    title: "Webcam, Cameras Optics, Output",
    price: "$38.50",
    oldprice: "$42.50",
    priceoff: "10%",
  },
  {
    id: 3,
    image: "/Home/product(2).jpg",
    hoverimage: "/Home/product(3).jpg",
    title: "Digital Air Fryer Stainless Steel",
    price: "$38.50",
    oldprice: "$48.50",
    priceoff: "7%",
  },
  {
    id: 4,
    image: "/Home/product(4).jpg",
    hoverimage: "/Home/product(9).jpg",
    title: "Bissel SportClean Pro Portable Carpet",
    price: "$38.50",
    oldprice: "$44.50",
  },
  {
    id: 5,
    image: "/Home/product(10).jpg",
    hoverimage: "/Home/product(1).jpg",
    title: "Alexa-Compatiable Echo Devices ",
    price: "$38.50",
    oldprice: "$44.50",
    priceoff: "5%",
  },
  {
    id: 6,
    image: "/Home/product(11).jpg",
    hoverimage: "/Home/product(9).jpg",
    title: "Piano Black Nespresso Vertuo Plus",
    price: "$38.50",
  },
  {
    id: 7,
    image: "/Home/product(8).jpg",
    hoverimage: "/Home/product(7).jpg",
    title: "Fashion Stainless Steel Smart Watch",
    price: "$40.50",
    oldprice: "$42.50",
    priceoff: "10%",
  },
  {
    id: 8,
    image: "/Home/product(6).jpg",
    hoverimage: "/Home/product(5).jpg",
    title: "New Affordable Fire TV",
    price: "$38.50",
  },
];

const FeaturesProducts = () => {
  return (
    <div className="px-6 lg:px-25 py-25">
      <h1 className="text-center text-gray-800 text-5xl max-md:text-4xl sm:text-nowrap font-bold pt-15 ">
        Features Products
      </h1>
      <p className="text-center text-lg max-md:text-md  font-semibold text-gray-700 mt-5 pb-12">
        Discover our latest collection of top-quality products at the best
        prices.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-y-6">
        {product.map((product) => (
          <div key={product.id} className="px-4">
            <div className="bg-white px- w-full max-w-xs mx-auto group pb-6 relative overflow-hidden">
              <div className="bg-gray-100 relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="bg-gray-100 w-full h-full object-contain transition duration-500 transform group-hover:rotate-6 group-hover:scale-90 group-hover:opacity-0"
                />
                <img
                  src={product.hoverimage}
                  alt={product.title}
                  className="bg-gray-100 w-full h-full object-contain absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-500 transform group-hover:scale-110"
                />
                <span className="bg-black rounded-full text-md text-white absolute font-semibold left-2 px-4.5 py-0.5 top-2">
                  Sale
                </span>
                <span className="bg-yellow-500 rounded-full text-md text-white absolute font-semibold left-3 top-10 px-4">
                  {product.priceoff}
                </span>
                <button className="bg-white p-3 rounded-full absolute duration-500 hover:bg-yellow-500 right-2 top-2 transition">
                  <IoHeart className="h-5 text-gray-500 w-5 duration-500 hover:text-white transition" />
                </button>
                <div className="flex flex-col absolute duration-500 gap-2 group-hover:opacity-100 opacity-0 right-2 top-15 transition">
                  <button className="bg-white p-3 rounded-full duration-500 hover:bg-yellow-500 transition">
                    <IoSearch className="h-5 text-gray-500 w-5 duration-500 hover:text-white transition" />
                  </button>
                  <button className="bg-white p-3 rounded-full duration-500 hover:bg-yellow-500 transition">
                    <IoRefresh className="h-5 text-gray-500 w-5 duration-500 hover:text-white transition" />
                  </button>
                </div>
                <Link to="/shop">
                  <button className="bg-yellow-500 rounded-full text-black -translate-x-1/2 absolute bottom-2 duration-500 group-hover:opacity-100 hover:text-yellow-500 hover:bg-white left-1/2 opacity-0 px-3 py-2 transform transition cursor-pointer">
                    See Products
                  </button>
                </Link>
              </div>
              <h3 className="text-center text-gray-800 text-lg font hover:text-yellow-500 mt-4 mb-1">
                {product.title}
              </h3>
              <div className="flex justify-center gap-1.5">
                <span className="text-xl text-yellow-500 font-bold">
                  {product.price}
                </span>
                <span className="line-through text-lg">{product.oldprice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesProducts;
