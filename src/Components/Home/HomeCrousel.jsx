import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
const HomeCrousel = () => {
  return (
    <div className="my-10">
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      className="testimonial"
    >
      <SwiperSlide className="py-8 ">
        <div className="text-center flex flex-col items-center lg:w-[49%] md:w-[80%] sm:w-[85%] h-[320px] m-auto px-2   ">
          <img src="/Home/profile.png" alt="" />
          <p className="text-[18px] text-[#656565] italic leading-[30px]">
            Phasellus rhoncus aliquam lacus vitae semper. Quisque pellentesque
            vestibulum dolor, varius maximus lectus ultricies a. In interdum,
            metus malesuada aliquam elementum, enim tellus aliquam mi, ac cursus
            ante lorem at libero.
          </p>
          <div>
            <div className="font-normal flex flex-col text-[16px] text-[#656565] mt-[27px]">
              <span>Nathanael Jaworski </span>
              <p>Customer</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="py-8">
        <div className="text-center flex flex-col items-center lg:w-[49%] md:w-[80%] sm:w-[85%] h-[320px] m-auto px-2">
          <img src="/Home/profile.png" alt="" />
          <p className="text-[18px] text-[#656565] italic leading-[30px]">
            Phasellus rhoncus aliquam lacus vitae semper. Quisque pellentesque
            vestibulum dolor, varius maximus lectus ultricies a. In interdum,
            metus malesuada aliquam elementum, enim tellus aliquam mi, ac cursus
            ante lorem at libero.
          </p>
          <div>
            <div className="font-normal flex flex-col text-[16px] text-[#656565] mt-[27px]">
              <span>Nathanael Jaworski </span>
              <p>Customer</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="py-8">
        <div className="text-center flex flex-col items-center lg:w-[49%] md:w-[80%] sm:w-[85%] h-[320px] m-auto px-2">
          <img src="/Home/profile.png" alt="" />
          <p className="text-[18px] text-[#656565] italic leading-[30px]">
            Phasellus rhoncus aliquam lacus vitae semper. Quisque pellentesque
            vestibulum dolor, varius maximus lectus ultricies a. In interdum,
            metus malesuada aliquam elementum, enim tellus aliquam mi, ac cursus
            ante lorem at libero.
          </p>
          <div>
            <div className="font-normal flex flex-col text-[16px] text-[#656565] mt-[27px]">
              <span>Nathanael Jaworski </span>
              <p>Customer</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default HomeCrousel;