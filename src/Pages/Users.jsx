import { CiCirclePlus } from "react-icons/ci";
import { FaEllipsisV, FaBars, FaRegUser, FaTimes } from "react-icons/fa";
import user from "../api/users.json";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoCartOutline, IoHomeOutline } from "react-icons/io5";

const Users = () => {
  const [users, setUsers] = useState(user.user);
  const [activeUserId, setActiveUserId] = useState(null);
  const [activePage, setActivePage] = useState(() => {
    return localStorage.getItem("activePage") || "Dashboard";
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/") {
      setActivePage("Dashboard");
    } else if (currentPath === "/products") {
      setActivePage("Products");
    } else if (currentPath === "/users") {
      setActivePage("Users");
    }
    localStorage.setItem("activePage", activePage);
  }, [location.pathname, activePage]);


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
        <div className="bg-white p-6 w-full">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-semibold">User List</h2>
            <Link
              to="/add-users"
              className="bg-gray-900 text-white px-4 rounded-xl py-2 cursor-pointer flex items-center"
            >
              <CiCirclePlus className="mr-2 text-[20px] font-bold" /> Add User
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="hidden md:table w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-left">Profile</th>
                  <th className="p-4 text-left text-nowrap">First Name</th>
                  <th className="p-4 text-left text-nowrap">Last Name</th>
                  <th className="p-4 text-left">Number</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="border-b p-3">
                      <img
                        src={user.image}
                        alt={user.firstName}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    </td>
                    <td className="border-b p-3">{user.firstName}</td>
                    <td className="border-b p-3">{user.lastName}</td>
                    <td className="border-b p-3">{user.number}</td>
                    <td className="border-b p-3">{user.email}</td>
                    <td className="border-b p-3 text-center relative">
                      <button
                        onClick={() => handleToggle(user.id)}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        <FaEllipsisV />
                      </button>
                      {activeUserId === user.id && (
                        <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-200 shadow-lg rounded-md p-2">
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

            {/* Mobile View */}
            <div className="md:hidden space-y-4">
              {users.map((user) => (
                <div key={user.id} className="border p-4 rounded-lg shadow-md">
                  <div className="flex flex-col text-center items-center space-x-4">
                    <img
                      src={user.image}
                      alt={user.firstName}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-gray-800 font-semibold">
                        {user.firstName} {user.lastName}
                      </p>
                      <p className="text-gray-600 text-sm">{user.email}</p>
                      <p className="text-gray-600 text-sm">{user.number}</p>
                    </div>
                  </div>
                  <div className="mt-3 text-right">
                    <button
                      onClick={() => handleToggle(user.id)}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <FaEllipsisV />
                    </button>
                    {activeUserId === user.id && (
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
    </>
  );
};

export default Users;
