import React from "react";

const CheckoutHero = () => {
  return (
    <div className="w-[80vw] mx-auto  flex flex-col lg:flex-row ">
      {/* first div  */}
      <div className=" lg:w-[70%] w-full  p-5 ">
        <h1 className="text-3xl font-semibold">Billing Detail</h1>
        <div className="w-full flex justify-between gap-2">
          <span className="w-1/2">
            <label htmlFor="" className="w-full ">
              First Name
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 outline-none"
            />
          </span>
          <span>
            <label htmlFor="" className="w-full ">
              Last Name
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 outline-none"
            />
          </span>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="" className="w-full">
            Company Name
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 outline-none"
          />

          <div>
            <label htmlFor="" className="w-full">
              Country
            </label>
            <input
              type="text"
              placeholder="Enter Your Country Name"
              className="w-full p-2 border border-gray-300 outline-none"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 ">
          <label htmlFor="" className="w-full ">
            Street Address
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 outline-none"
            placeholder="House nubmer and street name"
          />
          <input
            type="text"
            className="w-full p-2 border border-gray-300 outline-none"
            placeholder="Apartment,suite,unit etc."
          />
        </div>
        <div className="w-full">
          <label htmlFor="" className="w-full">
            Town/City
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 outline-none"
          />
        </div>
        <div className="flex  gap-2">
          <span className="w-1/2">
            <label htmlFor="" className="w-full">
              State/country
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 outline-none"
            />
          </span>
          <span className="w-1/2">
            <label htmlFor="" className="w-full">
              Postcode/ZIP
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 outline-none"
            />
          </span>
        </div>
        <div className="flex  gap-2">
          <span className="w-1/2">
            <label htmlFor="" className="w-full">
              Phone
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 outline-none"
            />
          </span>
          <span className="w-1/2">
            <label htmlFor="" className="w-full">
              Email Address
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 outline-none"
            />
          </span>
        </div>

        <div className="w-full ">
          <input type="checkbox" className="mr-2" />
          <label htmlFor="">Create an account</label>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold">Additional information</h3>
          <label htmlFor="">Order notes</label>

          <textarea
            name="Note about your order, e.g. special notes for delivery"
            id="" className="w-full border border-gray-300 outline-none h-30"
          ></textarea>
        </div>
        <div className="w-full">
          <input type="checkbox" className="mr-2" />
          <label htmlFor="">Ship to different Address?</label>
        </div>
      </div>
      {/* second div  */}
      <div className="p-5 lg:w-[40%] w-full flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Your order</h1>
        <div className="p-10 w-full bg-gray-200">
          <div className="border-b w-full flex flex-row justify-between py-5 font-semibold">
            <span>Product</span>
            <span>Total</span>
          </div>
          <div className="border-b flex flex-col gap-2 py-5 ">
            <p className="w-full flex justify-between">
              <span>Product Name X 1</span>
              <span>$67</span>
            </p>
            <p className="w-full flex justify-between">
              <span>Product Name X 1</span>
              <span>$67</span>
            </p>
          </div>
          <div className="border-b w-full flex justify-between items-center py-5">
            <span className="font-semibold text-xl">Shipping</span>
            <span>Free Shipping</span>
          </div>
          <div className="border-b w-full flex justify-between items-center py-5">
            <span className="font-semibold text-xl">Total</span>
            <span className="text-lg text-yellow-700 font-semibold">$78</span>
          </div>

          <div className="flex flex-col py-5 gap-2">
            <div>
              <h3>Direct Bank Trnasfer</h3>
              {/* when click on above h3 tag this p tag dispaly otherwise it's hidden  */}
              <p className="hidden">
                Please send a check to Store Name, Store Street, Store Town,
                Store State / County, Store Postcode.
              </p>
            </div>
            <div>
              <h3>Check Payments</h3>
              {/* when click on above h3 tag this p tag dispaly otherwise it's hidden  */}
              <p className="hidden">
                Please send a check to Store Name, Store Street, Store Town,
                Store State / County, Store Postcode.
              </p>
            </div>
            <div>
              <h3>Cash on delivery</h3>
              {/* when click on above h3 tag this p tag dispaly otherwise it's hidden  */}
              <p className="hidden">
                Please send a check to Store Name, Store Street, Store Town,
                Store State / County, Store Postcode.
              </p>
            </div>
          </div>
        </div>
        <button className="w-full text-center py-5 font-semibold cursor-pointer hover:bg-yellow-200 text-2xl bg-yellow-300 ">
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default CheckoutHero;
