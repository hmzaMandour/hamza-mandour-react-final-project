import React from "react";
import images from "../../constant/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import data from "../../json/data.json";

export const Carousel2 = () => {
  return (
    <div>
      <p className="text-[35px] font-semibold text-center pt-[6rem] pb-10">
        FEATURED PRODUCTS
      </p>
      <div>
        <Swiper
      
        slidesPerView={4} 
        slidesPerGroup={4}
        spaceBetween={30} 
        loop={true} 
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
          {data.map((e, i) => (
            <SwiperSlide key={i} className="px-2">
              <div className="p-2">
                <img
                  src={images[e.image]}
                  alt={e.title}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h1 className="pl-3 text-xl text-gray-400 pt-3 hover:text-[#f5bdb5] cursor-pointer">
                {e.title}
              </h1>
              <h1 className="pl-3 text-xl text-gray-400">{e.price}</h1>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
