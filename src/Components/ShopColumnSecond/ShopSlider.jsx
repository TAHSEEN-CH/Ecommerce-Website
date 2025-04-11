import React from "react";

const ShopSlider = () => {
  const logos = [
    "/about/s1.jpeg",
    "/about/s2.jpeg",
    "/about/s3.jpeg",
    "/about/s4.jpeg",
    "/about/s5.jpeg",
  ];

  return (
    <div className="bg-white py-10">
      {/* Border with reduced left & right width */}
      <div className="border-t-1 border-gray-300 max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-16 md:gap-20 lg:gap-24 xl:gap-32 py-6">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-8 sm:h-16 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopSlider;


