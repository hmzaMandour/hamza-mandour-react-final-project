import React from 'react';
import images from '../../constant/images';

export const Blogsection = () => {
    return (
        <div className='flex flex-col gap-8'>
            <p className='text-[35px] font-semibold text-center'>OUR BLOG</p>
            
            <div className='bgdiv grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                
                <div className='flex flex-col justify-center gap-5'>
                    <div className='zoom-container'>
                        <img src={images.blog1} className='blog-img zoom-hover' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='text-[18px] font-semibold'>Black Friday Guide: Best Sales & Discount Codes</p>
                        <p className='text-[15px] text-gray-400'>by fashe-theme Admin on Dec 28, 2017</p>
                        <p className='text-[15px] text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                    </div>
                </div>

                <div className='flex flex-col justify-center gap-5'>
                    <div className='zoom-container'>
                        <img src={images.blog2} className='blog-img zoom-hover' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='text-[18px] font-semibold'>The White Sneakers Nearly Every Fashion Girl Owns</p>
                        <p className='text-[15px] text-gray-400'>by fashe-theme Admin on Dec 28, 2017</p>
                        <p className='text-[15px] text-gray-400'>Duis ut velit gravida nibh bibendum commodo. Suspendisse pellentesque mattis augue id euismod. Interdum et...</p>
                    </div>
                </div>

                <div className='flex flex-col justify-center gap-5'>
                    <div className='zoom-container'>
                        <img src={images.blog3} className='blog-img zoom-hover' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='text-[19px] font-semibold'>New York SS 2018 Street Style: By Annina Mislin</p>
                        <p className='text-[15px] text-gray-400'>by fashe-theme Admin on Dec 28, 2017</p>
                        <p className='text-[15px] text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
