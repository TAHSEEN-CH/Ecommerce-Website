import React from "react";
import { Link } from "react-router-dom";


let cardData = [
    {
      img: "/Home/Headline(1).png",
      productName: "Bluetooth Speaker",
    },
    {
      img: "/Home/Headline(2).png",
      productName: "Bluetooth Speaker",
    },
    {
      img: "/Home/Headline(3).png",
      productName: "New Flying Drone",
    },
  ];
  
  const Headline = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 md:px-[25px] gap-8 justify-center my-5 px-4">
        {cardData.map((item) => (
          <div className="flex flex-col sm:w-full md:flex-row items-center gap-8 py-4 md:px-4 lg:px-10 justify-between  bg-[#efefef]">
            <img
              className="w-[150px] hover:rotate-10 duration-500 hover:scale-125 transition"
              src={item.img}
              alt=""
            />
            <div className="leading-8 lg:text-right md:text-right text-center">
              <p className="text-[16px]">NEW ARRIVAL</p>
              <h3 className="font-medium leading-[26px] w-[104px] text-[20px]">
                {item.productName}
              </h3>
              <Link to="/adtoCart" className="underline hover:text-yellow-500">
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Headline;