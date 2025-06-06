import { FaBars, FaRegUser, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link} from "react-router-dom";
import { IoCartOutline, IoHomeOutline } from "react-icons/io5";


const Dashboard = () => {

  const [activePage, setActivePage] = useState(() => {
    return localStorage.getItem("dashboard") || "Dashboard";
  });
  const [isOpen, setIsOpen] = useState(false);

 

  return (
    <>
       <div className="flex h-full lg:h-[85vh] justify-center  flex-col lg:flex-row pt-12 pb-20 lg:p-0 md:min-h-[500px] gap-y-3 relative">
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
        <div className=" w-full bg-white py-10">
          <div class="flex flex-wrap gap-y-5">
            <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
              <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
                <div class="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                  <svg
                    class="h-8 w-8 text-white"
                    viewBox="0 0 28 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
  
                <div class="mx-5">
                  <h4 class="text-2xl font-semibold text-gray-700">4644</h4>
                  <div class="text-gray-500">New Users</div>
                </div>
              </div>
            </div>
  
            <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
              <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
                <div class="p-3 rounded-full bg-orange-600 bg-opacity-75">
                  <svg
                    class="h-8 w-8 text-white"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
  
                <div class="mx-5">
                  <h4 class="text-2xl font-semibold text-gray-700">3453</h4>
                  <div class="text-gray-500">Total Orders</div>
                </div>
              </div>
            </div>
  
            <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
              <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-slate-100">
                <div class="p-3 rounded-full bg-pink-600 bg-opacity-75">
                  <svg
                    class="h-8 w-8 text-white"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z"
                      stroke="currentColor"
                      stroke-width="2"
                    ></path>
                  </svg>
                </div>
  
                <div class="mx-5">
                  <h4 class="text-2xl font-semibold text-gray-700">678</h4>
                  <div class="text-gray-500">Available Products</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
