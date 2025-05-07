import React, { useState } from "react";
import { IoHeart, IoRefresh, IoSearch } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const newproducts = [
  {
    id: 1,
    image: "/Home/product(5).jpg",
    hoverimage: "/Home/product(6).jpg",
    title: "New Affordable Fire TV",
    price: "$38.50",
  },
  {
    id: 2,
    image: "/Home/product(7).jpg",
    hoverimage: "/Home/product(8).jpg",
    title: "Webcam, Cameras Optics, Output",
    price: "$38.50",
  },
  {
    id: 3,
    image: "/Home/product(2).jpg",
    hoverimage: "/Home/product(3).jpg",
    title: "Digital Air Fryer Stainless Steel",
    price: "$38.50",
  },
  {
    id: 4,
    image: "/Home/product(4).jpg",
    hoverimage: "/Home/product(9).jpg",
    title: "Bissel SportClean Pro Portable Carpet",
    price: "$38.50",
  },
  {
    id: 5,
    image: "/Home/product(10).jpg",
    hoverimage: "/Home/product(1).jpg",
    title: "Alexa-Compatiable Echo Devices ",
    price: "$38.50",
  },
];
const bestproducts = [
  {
    id: 1,
    image: "/Home/product(5).jpg",
    hoverimage: "/Home/product(6).jpg",
    title: "New Affordable Fire TV",
    price: "$38.50",
    oldprice: "$42.50",
    priceoff: "5%",
  },
  {
    id: 2,
    image: "/Home/product(7).jpg",
    hoverimage: "/Home/product(8).jpg",
    title: "Webcam, Cameras Optics, Output",
    price: "$38.50",
  },
  {
    id: 3,
    image: "/Home/product(2).jpg",
    hoverimage: "/Home/product(3).jpg",
    title: "Digital Air Fryer Stainless Steel",
    price: "$38.50",
    oldprice: "$48.50",
    priceoff: "10%",
  },
  {
    id: 4,
    image: "/Home/product(4).jpg",
    hoverimage: "/Home/product(9).jpg",
    title: "Bissel SportClean Pro Portable Carpet",
    price: "$38.50",
    oldprice: "$44.50",
    priceoff: "7%",
  },
  {
    id: 5,
    image: "/Home/product(10).jpg",
    hoverimage: "/Home/product(1).jpg",
    title: "Alexa-Compatiable Echo Devices ",
    price: "$38.50",
  },
];


const Projects = () => {
  const [nav, setNav] = useState("new");

  return (
    <div className="bg-white text-center text-gray-800 mt-22 pb-15">
      <div className="flex justify-center p-3 md:text-4xl font-bold gap-2 items-center">
        <h1>Our Products</h1>
      </div>

      <nav className="flex bg-white h-[70px] justify-center text-black items-center">
        <ul className="flex justify-center font-semibold text-gray-700 lg:text-xl md:text-xl md:gap-6 gap-3 lg:gap-6">
          <li
            onClick={() => setNav("new")}
            className={`cursor-pointer transition ${nav === "new" ? "text-yellow-500" : "hover:text-yellow-500"
              }`}
          >
            New Arrivals
          </li>
          <li
            onClick={() => setNav("best")}
            className={`cursor-pointer transition ${nav === "best" ? "text-yellow-500" : "hover:text-yellow-500"
              }`}
          >
            Best Sellers
          </li>
          <li
            onClick={() => setNav("onSale")}
            className={`cursor-pointer transition ${nav === "onSale" ? "text-yellow-500" : "hover:text-yellow-500"
              }`}
          >
            On Sales
          </li>
          <li
            onClick={() => setNav("sale")}
            className={`cursor-pointer transition ${nav === "sale" ? "text-yellow-500" : "hover:text-yellow-500"
              }`}
          >
            Sale Items
          </li>
        </ul>
      </nav>

      {nav === "new" || nav === "onSale" ? (
        <div className="py-10 lg:px-15 md:px-8">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            navigation
            pagination={false}
            loop={true}
            speed={1100}
            centeredSlides={true} // Ensure slides are centered
            className="overflow-hidden flex justify-center"
            breakpoints={{
              320: { slidesPerView: 1, centeredSlides: true }, // Mobile: 1 card centered
              640: { slidesPerView: 1, centeredSlides: true }, // Small screens (sm)
              768: { slidesPerView: 2, centeredSlides: false }, // Medium screens (md)
              1024: { slidesPerView: 3, centeredSlides: true }, // Large screens (lg)
              1280: { slidesPerView: 4, centeredSlides: false }, // Extra-large screens (xl)
            }}
            style={{ maxWidth: "100vw" }} // Ensure full responsiveness
          >
            {/* Reduce the size of Swiper buttons */}
            <style jsx>{`
              .swiper-button-next,
              .swiper-button-prev {
                width: 35px !important;
                height: 35px !important;
                background-color: white;
                border-radius: 50%;
                transition: all 0.3s ease-in-out;
              }
              .swiper-button-next::after,
              .swiper-button-prev::after {
                font-size: 20px !important;
                color: gray;
              }
              .swiper-button-next:hover,
              .swiper-button-prev:hover {
                background-color: #facc15;
                border-color: #facc15;
              }
              .swiper-button-next:hover::after,
              .swiper-button-prev:hover::after {
                color: white;
              }
            `}</style>

            {newproducts.map((product) => (
              <SwiperSlide key={product.id} className="flex justify-center">
                <div className="bg-white px-2 w-full max-w-xs mx-auto group pb-6 relative overflow-hidden">
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
                    <span className=" bg-yellow-500 rounded-full text-md text-white absolute font-semibold left-3 top-10 px-4 ">
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
                    <Link to='/shop'>
                      <button className="bg-white rounded-full text-black -translate-x-1/2 absolute bottom-2 duration-500 group-hover:opacity-100 hover:bg-yellow-500 hover:text-white left-1/2 opacity-0 px-6 py-2 transform transition">
                        See Products
                      </button>
                    </Link>
                  </div>
                  <h3 className="text-center text-gray-800 text-lg font hover:text-yellow-500 mt-4">
                    {product.title}
                  </h3>
                  <p className="text-center text-xl text-yellow-500 font-bold mt-1">
                    {product.price}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="py-10 lg:px-15 md:px-8">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            navigation
            pagination={false}
            loop={true}
            speed={1100}
            centeredSlides={true} // Ensure slides are centered
            className="overflow-hidden flex justify-center"
            breakpoints={{
              320: { slidesPerView: 1, centeredSlides: true }, // Mobile: 1 card centered
              640: { slidesPerView: 1, centeredSlides: true }, // Small screens (sm)
              768: { slidesPerView: 2, centeredSlides: false }, // Medium screens (md)
              1024: { slidesPerView: 3, centeredSlides: true }, // Large screens (lg)
              1280: { slidesPerView: 4, centeredSlides: false }, // Extra-large screens (xl)
            }}
            style={{ maxWidth: "100vw" }} // Ensure full responsiveness
          >
            {/* Reduce the size of Swiper buttons */}
            <style jsx>{`
              .swiper-button-next,
              .swiper-button-prev {
                width: 35px !important;
                height: 35px !important;
                background-color: white;
                border-radius: 50%;
                transition: all 0.3s ease-in-out;
              }
              .swiper-button-next::after,
              .swiper-button-prev::after {
                font-size: 20px !important;
                color: gray;
              }
              .swiper-button-next:hover,
              .swiper-button-prev:hover {
                background-color: #facc15;
                border-color: #facc15;
              }
              .swiper-button-next:hover::after,
              .swiper-button-prev:hover::after {
                color: white;
              }
            `}</style>
            {bestproducts.map((product) => (
              <SwiperSlide key={product.id} className="flex justify-center">
                <div className="bg-white px-2 w-full max-w-xs mx-auto group pb-6 relative overflow-hidden">
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
                    <span className=" bg-yellow-500 rounded-full text-md text-white absolute font-semibold left-3 top-10 px-4 ">
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
                    <button className="bg-white rounded-full text-black -translate-x-1/2 absolute bottom-2 duration-500 group-hover:opacity-100 hover:bg-yellow-500 hover:text-white left-1/2 opacity-0 px-6 py-2 transform transition">
                      Add To Cart
                    </button>
                  </div>
                  <h3 className="text-center text-gray-800 text-lg font hover:text-yellow-500 mt-4 mb-1">
                    {product.title}
                  </h3>
                  <span className="text-center text-xl text-yellow-500 font-bold">
                    {product.price}{" "}
                  </span>
                  <span className="line-through text-lg ms-1">
                    {product.oldprice}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default Projects;
