import React, { useState } from "react";
import { IoHeart, IoRefresh, IoSearch } from "react-icons/io5";

const FilterSidebar = () => {

    const newproducts = [
        { id: 1, image: "/shop/product(10).jpeg", hoverimage: "/shop/product(11).jpeg", title: "New Affordable Fire TV", price: "$38.50" },
        { id: 2, image: "/shop/product(12).jpeg", hoverimage: "/shop/product(13).jpeg", title: "Webcam, Cameras Optics, Output", price: "$18.48" },
        { id: 3, image: "/shop/product(14).jpeg", hoverimage: "/shop/product(15).jpeg", title: "Digital Air Fryer Stainless Steel", price: "$10.88" },
        { id: 4, image: "/shop/product(16).jpeg", hoverimage: "/shop/product(17).jpeg", title: "Bissel SportClean Pro Portable Carpet", price: "$55.10" },
        { id: 5, image: "/shop/product(18).jpeg", hoverimage: "/shop/product(19).jpeg", title: "Alexa-Compatiable Echo Devices ", price: "$38.50" },
        { id: 6, image: "/shop/product(11).jpeg", hoverimage: "/shop/product(12).jpeg", title: "Echo Smart Voice Assistant", price: "$53.27" },
        { id: 7, image: "/shop/product(17).jpeg", hoverimage: "/shop/product(14).jpeg", title: "AI-Powered Echo Speaker", price: "$22.77" },
        { id: 8, image: "/shop/product(16).jpeg", hoverimage: "/shop/product(12).jpeg", title: "Digital Air Fryer Stainless Steel", price: "$10.88" },
        { id: 9, image: "/shop/product(19).jpeg", hoverimage: "/shop/product(15).jpeg", title: "Echo Wireless Home Assistant", price: "$22.26" },
    ];


    const [price, setPrice] = useState(100);
    const [selectedSize, setSelectedSize] = useState([]);
    const [selectedColor, setSelectedColor] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState([]);
    const [products, setProducts] = useState(newproducts);
    const [sortType, setSortType] = useState("relevance");
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9; // Har page par 9 products honge


    const sizes = ["Large", "Medium", "Small", "Extra Large"];
    const colors = [
        { name: "Grey", code: "#808080" },
        { name: "White", code: "#FFFFFF" },
        { name: "Black", code: "#000000" },
        { name: "Camel", code: "#C19A6B" },
    ];
    const brands = ["Blade Design", "Graphic Corner"];

    const toggleSelection = (item, list, setList) => {
        setList(
            list.includes(item) ? list.filter((i) => i !== item) : [...list, item]
        );
    };

    // Sorting function
    const handleSortChange = (e) => {
        const sortValue = e.target.value;
        setSortType(sortValue);
        let sortedProducts = [...newproducts];

        if (sortValue === "low-to-high") {
            sortedProducts.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
        } else if (sortValue === "high-to-low") {
            sortedProducts.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
        }

        setProducts(sortedProducts);
    };

    return (
        <div className="flex flex-col justify-center mt-18 max-md:mt-0 p-5 gap-6 mb-10 lg:flex-row  ">
            {/* Left side */}
            <div className="lg:w-1/3  md:px-10   mt-14">
                {/* Category Section */}
                <div className="mb-6">
                    <h3 className="text-lg font-bold mb-2 uppercase text-gray-700">
                        Category
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex justify-between hover:text-yellow-500">
                            <span>Accessories</span> <span>(5)</span>
                        </li>
                        <li className="flex justify-between hover:text-yellow-500">
                            <span>Automation</span> <span>(3)</span>
                        </li>
                        <li className="flex justify-between hover:text-yellow-500">
                            <span>Boxes</span> <span>(2)</span>
                        </li>
                        <li className="flex justify-between hover:text-yellow-500">
                            <span>Sensors</span> <span>(8)</span>
                        </li>
                        <li className="flex justify-between hover:text-yellow-500">
                            <span>Fittings</span> <span>(6)</span>
                        </li>
                        <li className="flex justify-between hover:text-yellow-500">
                            <span>Ballasts</span> <span>(3)</span>
                        </li>
                    </ul>
                </div>

                {/* Price Filter */}
                <div className="mb-6">
                    <h3 className="text-lg font-bold mb-2 uppercase text-gray-700">
                        Filter By
                    </h3>
                    <label className="text-gray-700 block mb-1">Price: ${price}</label>
                    <input
                        type="range"
                        min="50"
                        max="1000"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full accent-yellow-500"
                    />
                </div>

                {/* Size Filter */}
                <div className="mb-6">
                    <h3 className="text-lg font-bold mb-2 uppercase text-gray-700">Size</h3>
                    {sizes.map((size, index) => (
                        <div key={index} className="flex items-center space-x-2 text-gray-700">
                            <input
                                type="checkbox"
                                checked={selectedSize.includes(size)}
                                onChange={() => toggleSelection(size, selectedSize, setSelectedSize)}
                                className="accent-yellow-500"
                            />
                            <label>
                                {size} <span className="text-gray-500">({index + 4})</span>
                            </label>
                        </div>
                    ))}
                </div>

                {/* Color Filter */}
                <div className="mb-6">
                    <h3 className="text-lg font-bold mb-2 uppercase text-gray-700">Color</h3>
                    <div className="flex space-x-2">
                        {colors.map((color, index) => (
                            <div
                                key={index}
                                onClick={() => toggleSelection(color.name, selectedColor, setSelectedColor)}
                                className={`w-6 h-6 rounded cursor-pointer border-2 ${selectedColor.includes(color.name) ? "border-yellow-500" : "border-gray-400"
                                    }`}
                                style={{ backgroundColor: color.code }}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Brand Filter */}
                <div className="mb-6">
                    <h3 className="text-lg font-bold mb-2 uppercase text-gray-700">Brand</h3>
                    {brands.map((brand, index) => (
                        <div key={index} className="flex items-center space-x-2 text-gray-700">
                            <input
                                type="checkbox"
                                checked={selectedBrand.includes(brand)}
                                onChange={() => toggleSelection(brand, selectedBrand, setSelectedBrand)}
                                className="accent-yellow-500"
                            />
                            <label>
                                {brand} <span className="text-gray-500">({index + 5})</span>
                            </label>
                        </div>
                    ))}
                </div>

                {/* Tags Section */}
                <div className="mb-6">
                    <h3 className="text-lg font-bold mb-2 uppercase text-gray-700">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                        {["Ebooks", "Video", "Accessories", "Digital", "Audio & Music", "Photography"].map((tag, index) => (
                            <span
                                key={index}
                                className="bg-gray-200 hover:bg-yellow-500 hover:text-white px-3 py-1 text-sm rounded-full cursor-pointer"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
            <div>

                {/* Right side */}
                {/* Header Section */}
                <div className="w-full ">
                    <div className="flex  gap-4 justify-between items-center bg-gray-100 mb-5   p-6">
                        <p className="text-gray-800 max-md:px-3 font-medium text-sm md:text-base text-center text-nowrap sm:text-left ">
                            There Are {products.length} Products
                        </p>
                        <select
                            value={sortType}
                            onChange={handleSortChange}
                            className="border border-gray-50 rounded-md px-3 py-1.5 text- text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-300 w-full sm:w-auto "
                        >
                            <option  className="max-md:text-[12px]" value="relevance">Relevance</option>
                            <option  className="max-md:text-[12px]" value="low-to-high">Price: Low to High</option>
                            <option  className="max-md:text-[12px]" value="high-to-low">Price: High to Low</option>
                        </select>
                    </div>


                    {/* Product Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                        {products.slice(0, postsPerPage).map((product) => (
                            <div key={product.id} className="px-2 w-full max-w-xs mx-auto group pb-6 relative overflow-hidden">
                                <div className="bg-gray-100 relative overflow-hidden">
                                    <img src={product.image} alt={product.title} className="bg-gray-100 w-full h-full object-contain transition duration-500 transform group-hover:rotate-6 group-hover:scale-90 group-hover:opacity-0" />
                                    <img src={product.hoverimage} alt={product.title} className="bg-gray-100 w-full h-full object-contain absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-500 transform group-hover:scale-110" />

                                    <span className="bg-black rounded-full text-md text-white absolute font-semibold left-2 px-4.5 py-0.5 top-2">Sale</span>
                                    <span className=" bg-yellow-500 rounded-full text-md text-white absolute font-semibold left-3 top-10 px-4 ">{product.priceoff}</span>
                                    <button className="bg-white p-3 rounded-full absolute duration-300 hover:bg-yellow-500 right-2 top-2 transition">
                                        <IoHeart className="h-5 text-gray-500 w-5 duration-300 hover:text-white transition" />
                                    </button>
                                    <div className="flex flex-col absolute duration-300 gap-2 group-hover:opacity-100 opacity-0 right-2 top-15 transition">
                                        <button className="bg-white p-3 rounded-full duration-300 hover:bg-yellow-500 transition">
                                            <IoSearch className="h-5 text-gray-500 w-5 duration-300 hover:text-white transition" />
                                        </button>
                                        <button className="bg-white p-3 rounded-full duration-300 hover:bg-yellow-500 transition">
                                            <IoRefresh className="h-5 text-gray-500 w-5 duration-300 hover:text-white transition" />
                                        </button>
                                    </div>
                                    <button className="bg-white rounded-full  text-black -translate-x-1/2 absolute bottom-2 duration-300 group-hover:opacity-100 hover:bg-yellow-500 hover:text-white left-1/2 opacity-0 px-6 py-2 transform transition ">
                                        Add To Cart
                                    </button>
                                </div>
                                <h3 className="text-center text-gray-800 text-lg font hover:text-yellow-500 mt-4 mb-1">{product.title}</h3>
                                <div className="text-center">
                                    <span className="text-xl text-yellow-500 font-bold">{product.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center space-x-2">
                        <button
                            className={`px-3 py-2 rounded-full ${currentPage === 1 ? "bg-yellow-500 hover:text-white" : "bg-gray-200"}`}
                            onClick={() => setCurrentPage(1)}
                        >
                            1
                        </button>
                        <button
                            className={`px-3 py-2 rounded-full ${currentPage === 2 ? "bg-yellow-500 hover:text-white" : "bg-gray-200"}`}
                            onClick={() => setCurrentPage(2)}
                        >
                            2
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;
