import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import "animate.css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar"; // Ensure Navbar is imported
import Footer from "./Components/Footer"; // Ensure Footer is imported
import Cart from "./Components/ShopOtherPages/Cart";
import SingleProduct from "./Pages/SingleProduct";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import NotPage from "./Pages/NotPage";
import FaqPage from "./Pages/FaqPage";
import ComeSoon from "./Pages/ComeSoon";
import BlogGrid from "./Pages/BlogGrid";
import BlogList from "./Pages/BlogList";
import SingleBlog from "./Pages/SingleBlog";
import ShopColumn from "./Pages/ShopColumn";
import ShopColumnSecond from "./Pages/ShopColumnSecond";

import AdminPanel from "./Pages/AdminPanel";
import Dashboard from "./Pages/Dashboard";
import Products from "./Pages/Products";
import Users from "./Pages/Users";
import AddToCART from "./Components/Home/AddToCART";
import AddProduct from "./Pages/AddProduct";
// <<<<<<< HEAD
// import AddToCART from "./Components/Home/AddToCART";

// import AddProduct from "./Pages/AddProduct";
// >>>>>>> cec0cd6f3a2f92dfbf22de7edd7725a0fd6ccf10

const Mainlayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Mainlayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      // {path:"adtoCart",element:<AddToCART/>},
      { path: "adtoCart", element: <AddToCART /> },
      { path: "/privacypolicy", element: <PrivacyPolicy /> },
      { path: "/notpage", element: <NotPage /> },
      { path: "/faqpage", element: <FaqPage /> },
      { path: "/comesoon", element: <ComeSoon /> },
      { path: "/bloggrid", element: <BlogGrid /> },
      { path: "/bloglist", element: <BlogList /> },
      { path: "/singleblog", element: <SingleBlog /> },
      { path: "/shopcolumn", element: <ShopColumn /> },
      { path: "/shopcolumnsecond", element: <ShopColumnSecond /> },

      { path: "/shop", element: <Shop /> },

      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      { path: "/singleproduct", element: <SingleProduct /> },

      { path: "/adminpanel", element: <AdminPanel /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/products", element: <Products /> },

      // {path:"/users", element:< Users/>}
      { path: "/users", element: <Users /> },
      { path: "/addproduct", element: <AddProduct /> },

      { path: "/about", element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;



