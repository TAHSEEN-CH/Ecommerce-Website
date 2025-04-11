import { useEffect, useState } from "react";
import { FaBars, FaEllipsisV, FaRegUser, FaTimes } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { IoCartOutline, IoHomeOutline } from "react-icons/io5";
import productData from "../api/products.json";

const Products = () => {
  const location = useLocation();
  const [products, setProducts] = useState(productData.products);
  const [activeProductId, setActiveProductId] = useState(null);
  const [activePage, setActivePage] = useState(() => localStorage.getItem("activePage") || "Dashboard");
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/") {
      setActivePage("Dashboard");
    } else if (currentPath === "/products") {
      setActivePage("Products");
    } else if (currentPath === "/users") {
      setActivePage("Users");
    }
  }, [location.pathname]);

  useEffect(() => {
    localStorage.setItem("activePage", activePage);
  }, [activePage]);

  const handleToggle = (id) => {
    setActiveProductId((prevId) => (prevId === id ? null : id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const productName = form.productName.value;
    const category = form.category.value;
    const price = form.price.value;
    const description = form.description.value;
    const images = form.images.files;

    if (images.length !== 4) {
      alert("Please select exactly 4 images.");
      return;
    }

    console.log({
      productName,
      category,
      price,
      description,
      images: Array.from(images),
    });

    form.reset();
    setShowModal(false); // Close modal after submit
  };


  return (
    <>
      <div className="flex h-full lg:h-[85vh] justify-center  flex-col lg:flex-row pt-12 pb-20 lg:p-0 lg:mt-0 gap-y-3 relative">
        <div className="shadow-lg ">
          {/* Toggle button for small screens */}
          <button
            className=" top-4 absolute  left-4 p-2  lg:hidden text-white bg-gray-800 rounded-lg z-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes className="h-5 w-5 md:h-6 md:w-6" /> : <FaBars className="h-5 w-5 md:h-6 md:w-6" />}
          </button>

          {/* Sidebar */}
          <aside
            className={`absolute top-0 left-0 z-40 h-full lg:h-full w-64 md:w-80 lg:w-100 px-2 py-14 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out
              ${isOpen ? "translate-x-0" : "-translate-x-full"} 
              lg:translate-x-0 lg:static`}
          >
            <div className="p-4 border-b border-gray-800 flex flex-col lg:flex-row justify-between items-center">
              <img
                src="https://tailwindflex.com/images/logo.svg"
                alt="Logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold lg:block">Admin Pro</span>
            </div>

            <div className="p-4">
              <input
                type="text"
                className="w-full bg-gray-800 text-white rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Search..."
              />
            </div>

            <nav className="mt-5 px-2">
              <div className="space-y-4">
                <Link
                  to="/dashboard"
                  onClick={() => setActivePage("Dashboard")}
                  className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg ${activePage === "Dashboard"
                    ? "bg-gray-800"
                    : "hover:bg-gray-700"
                    } text-white group transition-all duration-200`}
                >
                  <IoHomeOutline className="h-5 w-5 mr-3" />
                  <p>Dashboard</p>
                </Link>

                <Link
                  to="/products"
                  onClick={() => setActivePage("Products")}
                  className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg ${activePage === "Products"
                    ? "bg-gray-800"
                    : "hover:bg-gray-700"
                    } text-white group transition-all duration-200`}
                >
                  <IoCartOutline className="h-5 w-5 mr-3" />
                  Products
                </Link>

                <Link
                  to="/users"
                  onClick={() => setActivePage("Users")}
                  className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg ${activePage === "Users"
                    ? "bg-gray-800"
                    : "hover:bg-gray-700"
                    } text-white group transition-all duration-200`}
                >
                  <FaRegUser className="h-5 w-5 mr-3" />
                  Users
                </Link>
              </div>
            </nav>

            <div className="mt-5 p-4 border-t border-gray-800">
              <div className="flex items-center">
                <img
                  className="h-8 w-8 rounded-full"
                  src="/user/user.png"
                  alt="User"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">John Doe</p>
                  <p className="text-xs text-gray-400">Admin</p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Main content */}
        <div class=" w-full">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
              <h2 className="text-xl font-semibold">Product List</h2>
              <button
                onClick={() => setShowModal(true)}
                className="bg-gray-900 text-white px-4 rounded-xl py-2 cursor-pointer flex items-center"
              >
                <CiCirclePlus className="mr-2 text-[20px] font-bold" /> Add Product
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-gray-200 rounded-lg hidden md:table">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="py-3 px-4 text-left">Name</th>
                    <th className="py-3 px-4 text-left">Status</th>
                    <th className="py-3 px-4 text-left">Price</th>
                    <th className="py-3 px-4 text-left hidden md:table-cell">
                      Total Sales
                    </th>
                    <th className="py-3 px-4 text-left hidden lg:table-cell">
                      Created At
                    </th>
                    <th className="py-3 px-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr
                      key={product.id}
                      className="border-b hover:bg-gray-50 transition"
                    >
                      <td className="py-3 px-4 flex items-center space-x-3 space-y-2">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-10 h-10 rounded-md object-cover"
                        />
                        <span className="text-gray-800 font-medium">
                          {product.name}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2 py-1 rounded-md text-sm ${product.status === "Active"
                            ? "bg-green-200 text-green-800"
                            : "bg-red-200 text-red-800"
                            }`}
                        >
                          {product.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">{product.price}</td>
                      <td className="py-3 px-4 hidden md:table-cell">
                        {product.sales}
                      </td>
                      <td className="py-3 px-4 hidden lg:table-cell">
                        {product.createdAt}
                      </td>
                      <td className="py-3 px-4 text-center relative">
                        <button
                          onClick={() => handleToggle(product.id)}
                          className="p-2 z-0 rounded-full hover:bg-gray-200 transition"
                        >
                          <FaEllipsisV className="text-gray-500" />
                        </button>
                        {activeProductId === product.id && (
                          <div className="absolute z-10 right-0 mt-2 w-24 bg-white border border-gray-200 shadow-lg rounded-md p-2">
                            <button className="block w-full text-left px-3 py-1 text-gray-700 hover:bg-gray-100">
                              Edit
                            </button>
                            <button className="block w-full text-left px-3 py-1 text-gray-700 hover:bg-gray-100">
                              Remove
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="md:hidden">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-gray-50 p-4 mb-4 rounded-lg shadow"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 rounded-md object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p className="text-sm text-gray-600">
                          Price: {product.price}
                        </p>
                        <span
                          className={`px-2 py-1 rounded-md text-sm ${product.status === "Active"
                            ? "bg-green-200 text-green-800"
                            : "bg-red-200 text-red-800"
                            }`}
                        >
                          {product.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-end mt-2">
                      <button
                        onClick={() => handleToggle(product.id)}
                        className="p-2 rounded-full hover:bg-gray-200 transition"
                      >
                        <FaEllipsisV className="text-gray-500" />
                      </button>
                      {activeProductId === product.id && (
                        <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-200 shadow-lg rounded-md p-2">
                          <button className="block w-full text-left px-3 py-1 text-gray-700 hover:bg-gray-100">
                            Edit
                          </button>
                          <button className="block w-full text-left px-3 py-1 text-gray-700 hover:bg-gray-100">
                            Remove
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Add NewProduct Model */}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-150 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-[600px] p-6 rounded-xl shadow-lg relative m-4">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-xl font-bold text-gray-600 hover:text-red-500 cursor-pointer"
            >
              &times;
            </button>

            <h1 className="text-3xl text-center font-bold text-gray-800 mb-6">
              Add New Product
            </h1>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Image Input */}
              {/* Basic Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="font-medium mb-1 block">Product Name</label>
                  <input
                    name="productName"
                    type="text"
                    placeholder="Enter Product Name"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="font-medium mb-1 block">Product Price</label>
                  <input
                    name="price"
                    type="text"
                    placeholder="Price $"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <label className="font-medium mb-1 block">Product Images</label>
                  <input
                    name="images"
                    type="file"
                    accept="image/*"
                    multiple
                    required
                    className="w-full border border-gray-300 rounded px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <p className="text-sm text-gray-500 mt-1">You must select exactly 4 images.</p>
                </div>
                <div>
                  <label className="font-medium mb-1 block">Category</label>
                  <select
                    name="category"
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Select a category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Home & Kitchen">Home & Kitchen</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Sports">Sports</option>
                    <option value="Books">Books</option>
                    <option value="Toys">Toys</option>
                    <option value="Grocery">Grocery</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <label className="font-medium mb-2 block">Description</label>
                <textarea
                  name="description"
                  placeholder="Enter product description..."
                  rows={4}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 transition text-white py-3 rounded-lg font-semibold text-lg shadow"
                >
                  Submit Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;