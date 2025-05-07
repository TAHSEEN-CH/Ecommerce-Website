import React, { useState } from 'react';
import { IoHeart, IoRefresh, IoSearch } from "react-icons/io5";
import { useCart } from '../../context/CartContext';;

const newproducts = [
  { id: 1, image: "/shop/product(10).jpeg", hoverimage: "/shop/product(11).jpeg", title: "New Affordable Fire TV", price: "$38.50" },
  { id: 2, image: "/shop/product(12).jpeg", hoverimage: "/shop/product(13).jpeg", title: "Webcam, Cameras Optics, Output", price: "$18.48" },
  { id: 3, image: "/shop/product(14).jpeg", hoverimage: "/shop/product(15).jpeg", title: "Digital Air Fryer Stainless Steel", price: "$10.88" },
  { id: 4, image: "/shop/product(16).jpeg", hoverimage: "/shop/product(17).jpeg", title: "Bissel SportClean Pro Portable Carpet", price: "$55.10" },
  { id: 5, image: "/shop/product(18).jpeg", hoverimage: "/shop/product(19).jpeg", title: "Alexa-Compatiable Echo Devices ", price: "$38.50" },
  { id: 6, image: "/shop/product(15).jpeg", hoverimage: "/shop/product(13).jpeg", title: "Smart Echo Speaker", price: "$43.32" },
  { id: 7, image: "/shop/product(11).jpeg", hoverimage: "/shop/product(12).jpeg", title: "Echo Smart Voice Assistant", price: "$53.27" },
  { id: 8, image: "/shop/product(17).jpeg", hoverimage: "/shop/product(14).jpeg", title: "AI-Powered Echo Speaker", price: "$22.77" },
];

const ShopProduct = () => {
  const { addToCart } = useCart();
  const [sortType, setSortType] = useState("relevance");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // easier to test with 4 per page
  const [products, setProducts] = useState(newproducts);

  const totalPages = Math.ceil(products.length / postsPerPage);

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    setSortType(sortValue);
    let sorted = [...newproducts];

    if (sortValue === "low-to-high") {
      sorted.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
    } else if (sortValue === "high-to-low") {
      sorted.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
    }

    setProducts(sorted);
    setCurrentPage(1); // Reset to page 1 on sort
  };

  const currentProducts = products.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <div className="px-4 py-3 mt-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-50 py-4 px-4 max-w-[1150px] mx-auto gap-3">
        <p className="text-gray-800 font-medium text-sm">
          There Are {products.length} Products
        </p>
        <select
          value={sortType}
          onChange={handleSortChange}
          className="border border-gray-500 rounded-md px-3 py-1.5 text-sm text-gray-600"
        >
          <option value="relevance">Relevance</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>

      {/* Products */}
      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <div key={product.id} className="w-full max-w-xs mx-auto group pb-6 relative overflow-hidden">
            <div className="bg-gray-100 relative overflow-hidden">
              <img src={product.image} className="w-full h-full object-contain transition duration-500 group-hover:scale-90 group-hover:opacity-0" />
              <img src={product.hoverimage} className="w-full h-full object-contain absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-500 group-hover:scale-110" />
              <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full absolute top-2 left-2">Sale</span>
              <button className="bg-white p-2 rounded-full absolute right-2 top-2 hover:bg-yellow-500 transition">
                <IoHeart className="text-gray-600 hover:text-white" />
              </button>
              <div className="absolute right-2 top-14 space-y-2 opacity-0 group-hover:opacity-100 transition">
                <button className="bg-white p-2 rounded-full hover:bg-yellow-500 transition">
                  <IoSearch className="text-gray-600 hover:text-white" />
                </button>
                <button className="bg-white p-2 rounded-full hover:bg-yellow-500 transition">
                  <IoRefresh className="text-gray-600 hover:text-white" />
                </button>
              </div>
              <button onClick={() => addToCart(product)} className="w-[80%] bg-white rounded-full text-black absolute bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 opacity-0 group-hover:opacity-100 hover:bg-yellow-500 hover:text-white transition">
                Add To Cart
              </button>
            </div>
            <h3 className="text-center mt-4 font-semibold text-gray-800 hover:text-yellow-500">{product.title}</h3>
            <p className="text-center text-yellow-500 font-bold">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 mt-6">


        {[...Array(totalPages)].map((_, index) => {
          const pageNum = index + 1;
          return (
            <button
              key={pageNum}
              onClick={() => handlePageClick(pageNum)}
              className={`px-3 py-1.5 rounded-full transition hover:cursor-pointer ${currentPage === pageNum
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200 hover:bg-yellow-400"
                }`}
            >
              {pageNum}
            </button>
          );
        })}

      </div>
    </div>
  );
};

export default ShopProduct;
