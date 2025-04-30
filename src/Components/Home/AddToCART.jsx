import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaMinus, FaPlus } from "react-icons/fa";

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

const AddToCART = () => {
  const [count, setcount] = useState(1);
  const handleIncrease = () => setcount((prev) => prev + 1);
  const handleDecrease = () => {
    if (count > 1) setcount((prev) => prev - 1);
  };

  const [nav, setNav] = useState("new");
  const [cartItems, setCartItems] = useState([]);

  const productList = nav === "new" || nav === "onSale" ? newproducts : bestproducts;

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const handleDelete = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  const calculateTotalPrice = () => {
    return cartItems
      .reduce((acc, item) => acc + parseFloat(item.price.replace("$", "")), 0)
      .toFixed(2);
  };

  return (
    <div className="bg-white text-center text-gray-800 mt-22 pb-15 border">
      <div className="flex justify-center p-3 text-5xl font-bold gap-2 items-center">
        <h1>Our Products</h1>
      </div>

      <nav className="flex bg-white h-[70px] justify-center text-black items-center">
        <ul className="flex justify-center font-semibold text-gray-700 lg:text-xl md:text-xl md:gap-6 gap-3 lg:gap-6">
          {["new", "best", "onSale", "sale"].map((item) => (
            <li
              key={item}
              onClick={() => setNav(item)}
              className={`cursor-pointer transition ${
                nav === item ? "text-yellow-500" : "hover:text-yellow-500"
              }`}
            >
              {item === "new"
                ? "New Arrivals"
                : item === "best"
                ? "Best Sellers"
                : item === "onSale"
                ? "On Sales"
                : "Sale Items"}
            </li>
          ))}
        </ul>
      </nav>

      {/* Swiper Centered */}
      <div className="py-10 lg:px-15 md:px-8 flex justify-center">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          navigation
          loop={true}
          speed={1100}
          centeredSlides={true}
          className="overflow-hidden max-w-[1280px] w-full"
          breakpoints={{
            320: { slidesPerView: 1, centeredSlides: true },
            640: { slidesPerView: 1, centeredSlides: true },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3, centeredSlides: true },
            1280: { slidesPerView: 4 },
          }}
        >
          <style jsx>{`
            .swiper-button-next,
            .swiper-button-prev {
              width: 35px !important;
              height: 35px !important;
              background-color: white;
              border-radius: 50%;
            }
            .swiper-button-next::after,
            .swiper-button-prev::after {
              font-size: 20px !important;
              color: gray;
            }
            .swiper-button-next:hover,
            .swiper-button-prev:hover {
              background-color: #facc15;
            }
            .swiper-button-next:hover::after,
            .swiper-button-prev:hover::after {
              color: white;
            }
          `}</style>

          {productList.map((product) => (
            <SwiperSlide key={product.id} className="flex justify-center">
              <div className="bg-white px-2 w-full max-w-xs mx-auto group pb-6 relative overflow-hidden">
                <div className="bg-gray-100 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full transition group-hover:opacity-0"
                  />
                  <img
                    src={product.hoverimage}
                    alt={product.title}
                    className="w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition"
                  />
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-white rounded-full text-black -translate-x-1/2 absolute bottom-2 group-hover:opacity-100 hover:bg-yellow-500 hover:text-white left-1/2 opacity-0 px-6 py-2 transform transition"
                  >
                    Add To Cart
                  </button>
                </div>
                <h3 className="text-lg font-semibold mt-4 hover:text-yellow-500">
                  {product.title}
                </h3>
                <span className="text-xl text-yellow-500 font-bold">
                  {product.price}
                </span>
                {product.oldprice && (
                  <span className="line-through text-lg ms-1">
                    {product.oldprice}
                  </span>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Cart & Summary */}
      <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-6 px-4">
        <div className="w-full lg:w-[60%] p-6 mx-auto border mt-10 rounded-lg shadow-sm overflow-x-scroll">
          <h2 className="text-2xl font-bold mb-4">ADD To Cart Details</h2>
          <table className="min-w-full table-auto border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-yellow-100 text-gray-700">
              <tr>
                <th className="py-3 px-4 border">Image</th>
                <th className="py-3 px-4 border">Title</th>
                <th className="py-3 px-4 border">Add</th>
                <th className="py-3 px-4 border">Price</th>
                <th className="py-3 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, idx) => (
                <tr key={idx} className="text-center">
                  <td className="border px-4 py-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="border px-4 py-2">{item.title}</td>
                  <td className="flex items-center justify-center gap-4 p-3 mt-7">
                    <span
                      className="bg-red-600 py-1 px-2 text-white rounded cursor-pointer hover:bg-red-700"
                      onClick={handleDecrease}
                    >
                      <FaMinus />
                    </span>
                    <span className="font-semibold text-lg">{count}</span>
                    <span
                      className="bg-red-600 py-1 px-2 text-white rounded cursor-pointer hover:bg-red-700"
                      onClick={handleIncrease}
                    >
                      <FaPlus />
                    </span>
                  </td>
                  <td className="border px-4 py-2">{item.price}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleDelete(idx)}
                      className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {cartItems.length === 0 && (
                <tr>
                  <td colSpan="5" className="py-4 text-center text-gray-500">
                    No items in cart.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="sticky border border-gray-400 top-28 h-fit p-5 py-10 flex flex-col gap-6 bg white shadow-md rounded-md w-full sm:w-[300px] mx-auto sm:mx-0 mt-10">
          <h3 className="font-bold text-2xl">Your Details</h3>
          <div className="flex justify-center items-center">
            <div className="font-semibold bg-red-500 text-white px-3 py-2 rounded hover:bg-red-400 text-lg">
              Total Items: {cartItems.length}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="font-semibold bg-red-500 text-white px-3 py-2 rounded hover:bg-red-400 text-lg">
              Total Price: ${calculateTotalPrice()}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-green-500 text-white px-6 py-2 rounded cursor-pointer hover:bg-green-600">
              Proceed to Buy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCART;
