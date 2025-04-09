import React from "react";
import "./PrivacySlider";

const PrivacySlider = () => {
  const logos = [
    "/about/s1.jpeg",
    "/about/s2.jpeg",
    "/about/s3.jpeg",
    "/about/s4.jpeg",
    "/about/s5.jpeg",
  ];

  return (
    <div className="py-6">
      {/* Border with reduced left & right width */}
      <div className="border-t border-gray-300 max-w-6xl mx-auto overflow-hidden py-6">
      <div className="whitespace-nowrap flex items-center animate-marquee-alternate mt-4">
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="h-8 sm:h-16 mx-6 object-contain"
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default PrivacySlider;


