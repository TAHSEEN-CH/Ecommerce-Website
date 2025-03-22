import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar"; // Ensure Navbar is imported
import Footer from "./Components/Footer"; // Ensure Footer is imported
import Cart from "./Components/ShopOtherPages/Cart";
import ShopCheckout from "./Components/ShopOtherPages/ShopCheckout";




const Mainlayout = () =>{
  return(
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([{
  element:<Mainlayout/>,
  children:[
    {path:"/" ,element:<Home/>},
    {path:"/about" ,element:<About/>},
    {path:"/shop" ,element:<Shop/>},
    {path:"/blog" ,element:<Blog/>},
    {path:"/contact" ,element:<Contact/>},
    {path:"/cart", element:<Cart/>},
    {path:"/checkout",element:<ShopCheckout/>}
  ]
}])


function App(){
  return <RouterProvider router={router}/>;
}







export default App;
