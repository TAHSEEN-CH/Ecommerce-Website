import React, { useState, useEffect } from "react";
import "animate.css";

const AnimatedComponent = ({ currentIndex }) => {
  const [animation, setAnimation] = useState("animate__fadeInUpBig");

  useEffect(() => {
    setAnimation("animate__zoomOut");
    const timeout = setTimeout(() => {
      setAnimation("animate__zoomIn");
    }, 600);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return animation;
};

const images = ["/Home/slider1.jpg", "/Home/slider2.jpg"];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const animation = AnimatedComponent({ currentIndex });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#e7e5e5] relative w-full h-[40vh] lg:h-[80vh] md:h-[45vh] overflow-hidden group rounded-lg shadow-lg">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1500 pointer-events-none ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="absolute left-10 top-1/4 md:left-25 lg:left-50 text-left z-10">
        {currentIndex === 0 && (
          <>
            <h1
              className={`text-gray-700 text-3xl lg:text-7xl md:text-6xl font-semibold animate__animated ${animation}`}
            >
              Camera Lens
            </h1>
            <h2
              className={`text-gray-700 text-3xl lg:text-7xl md:text-6xl font-semibold animate__animated ${animation}`}
            >
              & Photo
            </h2>
          </>
        )}
        {currentIndex === 1 && (
          <>
            <h1
              className={`text-gray-700 text-3xl lg:text-7xl md:text-6xl font-semibold animate__animated ${animation} animate__duration-1000 animate__delay-500`}
            >
              Home Security
            </h1>
            <h2
              className={`text-gray-700 text-3xl lg:text-7xl md:text-6xl font-semibold animate__animated ${animation} animate__duration-1500 animate__delay-1000`}
            >
              Camera 360°
            </h2>
          </>
        )}
        <p className="text-gray-700 text-sm md:text-xl lg:text-3xl mt-1 md:mt-5 lg:mt-5 w-[75%]">
          Avail 15% off on Making Charges for all Items
        </p>
        <button className="relative z-10 text-white bg-yellow-500 text-xl mt-2 px-2 py-1 md:py-3 md:px-7 lg:py-3 lg:px-7 lg:mt-7 md:mt-6 cursor-pointer hover:bg-yellow-600 transition">
          Shop Now
        </button>
      </div>

      <div className="absolute inset-0 flex items-center justify-between px-6 md:px-15 lg:px-22 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="w-9 h-9 md:h-10 md:w-10 lg:h-12 lg:w-12 flex items-center justify-center cursor-pointer bg-black/30 text-white rounded-full hover:bg-yellow-500 transition duration-300"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="w-9 h-9 md:h-10 md:w-10 lg:h-12 lg:w-12 flex items-center justify-center cursor-pointer bg-black/30 text-white rounded-full hover:bg-yellow-500 transition duration-300"
        >
          ❯
        </button>
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-4 h-4 rounded-full transition cursor-pointer hover:bg-yellow-500 ${
              index === currentIndex
                ? "bg-yellow-500"
                : "border border-gray-600"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
