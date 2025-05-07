import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import "animate.css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
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
import { CartProvider } from "./context/CartContext";
// <<<<<<< HEAD
// import AddToCART from "./Components/Home/AddToCART";

// import AddProduct from "./Pages/AddProduct";
// >>>>>>> cec0cd6f3a2f92dfbf22de7edd7725a0fd6ccf10

const Mainlayout = () => {
  return (
    <div>
      <CartProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </CartProvider>
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Mainlayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/adtoCart", element: <AddToCART /> },

      { path: "/privacypolicy", element: <PrivacyPolicy /> },
      { path: "/faq", element: <FaqPage /> },
      { path: "/comesoon", element: <ComeSoon /> }, //this one
      { path: "/bloglist", element: <BlogList /> },
      { path: "/shop", element: <ShopColumn /> },
      { path: "/shopcolumnsecond", element: <ShopColumnSecond /> },
      // { path: "/shop", element: <Shop /> },
      { path: "/singleproduct", element: <SingleProduct /> },

      { path: "/blog", element: <BlogGrid /> },
      { path: "/singleblog/:id", element: <SingleBlog /> },


      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },

      { path: "/adminpanel", element: <AdminPanel /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/products", element: <Products /> },

      // {path:"/users", element:< Users/>}
      { path: "/users", element: <Users /> },
      { path: "/addproduct", element: <AddProduct /> },
    ],
  },
  { path: "*", element: <NotPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
