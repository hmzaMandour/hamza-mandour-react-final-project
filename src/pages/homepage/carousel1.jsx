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
       <SwiperSlide className='relative '>
                <img src={images.carousel1} className="h-[100%] object-cover"   />
                <div className='absolute top-[11rem] flex flex-col items-center gap-5 left-[28rem] text-center text-3xl text-white'>
                    <h5 className='text-xl'>women collection 2018</h5>
                    <h1  className='text-6xl font-bold'>New Arrivals</h1>
                    <button className='bg-white  p-4 text-sm px-6  text-black rounded-full'>shop now</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <img src={images.carousel2} className="h-[100%] object-cover"/> 
                <div className='absolute top-[11rem] flex flex-col items-center gap-5 left-[28rem] text-center text-3xl text-white'>
                    <h5 className='text-xl'>women collection 2018</h5>
                    <h1  className='text-6xl font-bold'>New Arrivals</h1>
                    <button className='bg-white  p-4 text-sm px-6  text-black rounded-full'>shop now</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <img src={images.carousel3} className="h-[100%] object-cover"/>
                <div className='absolute top-[11rem] flex flex-col items-center gap-5 left-[28rem] text-center text-3xl text-white'>
                    <h5 className='text-xl'>women collection 2018</h5>
                    <h1  className='text-6xl font-bold'>New Arrivals</h1>
                    <button className='bg-white  p-4 text-sm px-6  text-black rounded-full'>shop now</button>
                </div>
            </SwiperSlide>

      </Swiper>
    </>
  );
};








