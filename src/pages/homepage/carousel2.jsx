import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import images from '../../constant/images';

export const Carousel2 = () => {
    return (
        <div>
            <p className='text-[35px] font-semibold text-center'>FEATURED PRODUCTS</p>

            <div>
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
            <SwiperSlide className=' '>
                        <div className='flex items-center justify-center gap-10 '>
                          
                            <div >
                                 <img src={images.itemcart1} className='' alt="" />
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, veritatis.</p>
                                
                           </div>
                             <div>
                                 <img src={images.itemcart1} className='' alt="" />
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, veritatis.</p>
                                
                           </div>
                            <div>
                                 <img src={images.itemcart1} className='' alt="" />
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, veritatis.</p>
                                
                           </div>
                             <div>
                                 <img src={images.itemcart1} className='' alt="" />
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, veritatis.</p>
                                
                           </div>
                        </div>  
            </SwiperSlide>
            <SwiperSlide className=''>
                 <div className='flex gap-3 justify-center items-center '>
                             <div >
                                 <img src={images.item4} className='' alt="" />
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, veritatis.</p>
                                
                           </div>
                            <div>
                                 <img src={images.item4} className='' alt="" />
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, veritatis.</p>
                                
                           </div>
                            <div>
                                 <img src={images.item4} className='' alt="" />
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, veritatis.</p>
                                
                           </div>
                            <div>
                                 <img src={images.item4} className='' alt="" />
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, veritatis.</p>
                                
                           </div>
                        </div>  
            </SwiperSlide>
          

      </Swiper>
            </div>
        </div>
    );
};

