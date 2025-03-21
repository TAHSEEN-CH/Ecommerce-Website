import React from "react";
import HeroCart from "../CartComponent/HeroCart";
import ShippingShop from "../CartComponent/ShippingShop";
import ShopEstimate from "../CartComponent/ShopEstimate";
import CartImgo from "../CartComponent/CartImgo";


const Cart = () => {
  return (
    <div >
      <HeroCart/>
      <ShippingShop/>
      <ShopEstimate/>
      <CartImgo/>
    </div>
  );
};

export default Cart;
