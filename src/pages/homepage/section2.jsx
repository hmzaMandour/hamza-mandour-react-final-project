import React from 'react';
import images from '../../constant/images';

export const Section2 = () => {
    return (
        <div className='flex flex-col sm:flex-row gap-2 justify-center'>
            <div className='sm:w-full md:w-[30vw] md:h-[100vh] h-auto flex gap-2 flex-col'>
                <div className='w-full h-[60%] bg-yellow-500 relative zoom-container'>
                    <img src={images.banner2} className='w-full h-full object-cover zoom-hover' alt="Banner 2" />
                    <button className='bg-white hover:bg-[#e65540] hover:text-white p-3 w-36 text-lg absolute top-[21rem] left-[8rem]'>DRESSES</button>
                </div>
                <div className='w-full h-[40%] bg-red-800 relative zoom-container'>
                    <img src={images.banner7} className='w-full h-full object-cover zoom-hover' alt="Banner 7" />
                    <button className='bg-white hover:bg-[#e65540] hover:text-white p-3 w-36 text-lg absolute top-[13rem] left-[8rem]'>SUNGLASSES</button>
                </div>
            </div>

            <div className='sm:w-full md:w-[30vw] md:h-[100vh] h-auto flex gap-2 flex-col'>
                <div className='w-full h-[40%] bg-green-950 relative zoom-container'>
                    <img src={images.item3} className='w-full h-full object-cover zoom-hover' alt="Gallery 1" />
                    <button className='bg-white hover:bg-[#e65540] hover:text-white p-3 w-36 text-lg absolute top-[13rem] left-[8rem]'>WATCHES</button>
                </div>
                <div className='w-full h-[60%] bg-red-300 relative zoom-container'>
                    <img src={images.banner3} className='w-full h-full object-cover zoom-hover' alt="Banner 3" />
                    <button className='bg-white hover:bg-[#e65540] hover:text-white p-3 w-36 text-lg absolute top-[21rem] left-[8rem]'>FOOTWEAR</button>
                </div>
            </div>

            <div className='sm:w-full md:w-[30vw] md:h-[100vh] h-auto flex gap-2 flex-col'>
                <div className='w-full h-[60%] bg-yellow-500 relative zoom-container'>
                    <img src={images.banner6} className='w-full h-full object-cover zoom-hover' alt="Banner 6" />
                    <button className='bg-white hover:bg-[#e65540] hover:text-white p-3 w-36 text-lg absolute top-[21rem] left-[8rem]'>BAGS</button>
                </div>
                <div className='w-full h-[40%] bg-red-800 relative zoom-container'>
                    <img src={images.banner8} className='w-full h-full object-cover zoom-hover' alt="Banner 8" />
                    <button className='bg-white hover:bg-[#e65540] hover:text-white p-3 w-36 text-lg absolute top-[13rem] left-[8rem]'>ACCESSORIES</button>
                </div>
            </div>
        </div>
    );
};
