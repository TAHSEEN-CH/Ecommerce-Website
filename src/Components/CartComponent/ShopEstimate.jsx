import React from "react";

const ShopEstimate = () => {
  return (
    <div className="w-full py-10 bg-gray-00">
      <div className="w-[90vw] mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 bg-white p-8  rounded-lg">
        
        {/* Estimate Shipping And Tax */}
        <div className="border border-gray-200 p-6 bg-gray-200">
          <h1 className="text-xl font-semibold mb-3">Estimate Shipping And Tax</h1>
          <p className="text-gray-600 text-sm mb-4">Enter your destination to get a shipping estimate.</p>
          <div className="flex flex-col gap-3">
            <label className="text-gray-700 text-sm">Country</label>
            <input type="text" className="w-full bg-white p-2 outline-none" placeholder="Enter country" />
            <label className="text-gray-700 text-sm">Region/State</label>
            <input type="text" className="w-full bg-white p-2 outline-none" placeholder="Enter region/state" />
            <label className="text-gray-700 text-sm">Zip/Postal Code</label>
            <input type="text" className="w-full bg-white p-2 outline-none" placeholder="Enter postal code" />
          </div>
          <button className="w-full cursor-pointer mt-4 py-4 bg-yellow-500 hover:bg-yellow-400 text-white font-bold transition">
            GET A QUOTE
          </button>
        </div>

        {/* Use Coupon Code */}
        <div className="border-gray-200 p-6 bg-gray-200">
          <h1 className="text-xl font-semibold mb-3">Use Coupon Code</h1>
          <p className="text-gray-600 text-sm mb-4">Enter your coupon code if you have one.</p>
          <input type="text" className="w-full bg-white p-2 outline-none mb-2" placeholder="Enter coupon code" />
          <button className="w-[70%] cursor-pointer py-4 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold transition">
            APPLY COUPON
          </button>
        </div>

        {/* Cart Total - Takes full width on md */}
        <div className="md:col-span-2 lg:col-span-1 p-6 bg-gray-200">
          <h1 className="text-xl font-semibold mb-3">Cart Total</h1>
          <div className="flex justify-between text-gray-700 text-md py-2">
            <p>Total Products</p>
            <p className="font-semibold">$260</p>
          </div>
          <div className="py-2">
            <p className="text-gray-700 text-md">Total Shipping</p>
            <div className="mt-2">
              <div className="flex justify-between text-gray-600 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="cursor-pointer" />
                  <span>Standard</span>
                </label>
                <span>$20</span>
              </div>
              <div className="flex justify-between text-gray-600 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="cursor-pointer" />
                  <span>Express</span>
                </label>
                <span>$40</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-2xl text-yellow-600 font-bold py-4">
            <span>Grand Total</span>
            <span>$280</span>
          </div>
          <button className="w-full cursor-pointer py-4 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold transition">
            PROCEED TO CHECKOUT
          </button>
        </div>

      </div>
    </div>
  );
};

export default ShopEstimate;
 