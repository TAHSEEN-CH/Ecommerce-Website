import React from 'react';

const ShippingShop = () => {
  return (
    <div className="w-full font-semibold p-10">
      <div className="w-[80vw] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <button className="px-5 py-3 bg-gray-100 hover:bg-yellow-300 transition border border-gray-200">
          CONTINUE SHOPPING
        </button>
        <div className="flex items-center gap-4">
          <button className="px-5 py-3 bg-gray-100 hover:bg-yellow-300 transition border border-gray-200">
            UPDATE SHOPPING CART
          </button>
          <button className="px-5 py-3 bg-yellow-300 hover:bg-gray-100 transition border border-gray-200">
            CLEAN SHOPPING CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShippingShop;
