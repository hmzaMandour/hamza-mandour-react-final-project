import React from 'react';
import images from '../../constant/images';

export const About = () => {
    return (
        <div className='flex flex-col gap-[5vh] md:gap-[8vh] pb-[5vh] md:pb-[8vh] pt-[10vh] md:pt-[14vh]'>
            <div
                className='flex justify-center items-center relative'
                style={{
                    backgroundImage: `url(${images.item2})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '20vh',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <p className='text-[30px] md:text-[50px] text-white font-bold text-center relative'>
                    ABOUT
                </p>
            </div>

            <div className='flex flex-col md:flex-row bgdiv gap-4 md:gap-7'>
                <div className='zoom-container w-full md:w-[50%]'>
                    <img src={images.product1} className='w-full h-auto zoom-hover' alt="" />
                </div>
                <div className='flex flex-col gap-5 md:gap-9 p-4 md:p-8 w-full md:w-[50%]'>
                    <p className='text-[20px] md:text-[25px]'>OUR STORY</p>
                    <p className='text-[#888888] text-base md:text-lg'>
                        Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.
                    </p>
                    <div className='flex flex-col gap-5 relative'>
                        <p className='text-[#888888] px-4 md:px-7'>
                            Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.
                        </p>
                        <p className='text-[#888888] px-4 md:px-7'>- Steve Jobs</p>
                        <div className='absolute top-0 bottom-0 left-[-1px] w-[1px] bg-gray-300 hidden md:block'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
