import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import images from '../../constant/images';

export const Carousel1 = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[80vh]"
      >
        <SwiperSlide className='relative pt-[14vh]'>
          <img src={images.carousel1} className="h-[100%] w-full object-cover" />
          <div className='absolute top-[10rem] md:top-[15rem] flex flex-col items-center gap-5 left-[5rem] md:left-[32rem] text-center text-white'>
            <h5 className='text-base md:text-xl'>women collection 2018</h5>
            <h1 className='text-3xl md:text-6xl font-bold'>New Arrivals</h1>
            <button className='bg-white p-2 md:p-4 text-sm md:text-base px-4 md:px-6 text-black rounded-full'>shop now</button>
          </div>
        </SwiperSlide>

        <SwiperSlide className='relative'>
          <img src={images.carousel2} className="h-[100%] w-full object-cover" />
          <div className='absolute top-[10rem] md:top-[15rem] flex flex-col items-center gap-5 left-[5rem] md:left-[32rem] text-center text-white'>
            <h5 className='text-base md:text-xl'>women collection 2018</h5>
            <h1 className='text-3xl md:text-6xl font-bold'>New Arrivals</h1>
            <button className='bg-white p-2 md:p-4 text-sm md:text-base px-4 md:px-6 text-black rounded-full'>shop now</button>
          </div>
        </SwiperSlide>

        <SwiperSlide className='relative'>
          <img src={images.carousel3} className="h-[100%] w-full object-cover" />
          <div className='absolute top-[10rem] md:top-[15rem] flex flex-col items-center gap-5 left-[5rem] md:left-[32rem] text-center text-white'>
            <h5 className='text-base md:text-xl'>women collection 2018</h5>
            <h1 className='text-3xl md:text-6xl font-bold'>New Arrivals</h1>
            <button className='bg-white p-2 md:p-4 text-sm md:text-base px-4 md:px-6 text-black rounded-full'>shop now</button>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
};
