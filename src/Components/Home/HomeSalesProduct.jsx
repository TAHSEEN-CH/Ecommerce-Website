import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const images = [
  { src: "/Home/card1.jpg", title: "Headphones", off: "-7%" },
  { src: "/Home/card2.jpg", title: "Speaker", off: "Sale" },
  { src: "/Home/card3.jpg", title: "Laser Light", off: "-7%" },
  { src: "/Home/card4.jpg", title: "VR 3D Box", off: "Sale" },
  { src: "/Home/card3.jpg", title: "Laser Light", off: "-7%" },
];

const HomeSalesProduct = () => {
  return (
    <div className="px-8">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={4}
        slidesPerGroup={1}
        autoplay={{ delay: 2000 }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="mySwiper]"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center relative mb-15 mx-auto pb-12">
              <div className="w-full overflow-hidden">
                <img
                  className="hover:scale-110 transition duration-300"
                  src={item.src}
                  alt={item.title}
                />
              </div>
              <p className="absolute top-5 left-5 bg-yellow-500 text-white px-3 py-1 rounded-3xl">
                {item.off}
              </p>
              <div className="absolute bottom-5 text-center">
                <h2 className="text-[20px] uppercase text-[#3b3b3b]">
                  {item.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSalesProduct;