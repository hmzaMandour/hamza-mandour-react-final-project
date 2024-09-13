import React from 'react';
import images from '../../constant/images';
import data from "../../json/data.json";

export const Section3 = () => {
    const randomIndex = Math.floor(Math.random() * data.length); 
    const randomElement = data[randomIndex];
    return (
        <div className=' bg-[#f2f2f2] flex bgdiv gap-7 p-5'>
            <div className='w-[50%] p-5   h-[70vh]'>
                <div className='zoom-container '>
                    <img src={images.banner4} className=' h-[60vh] zoom-hover' alt="" />
                </div>
                <div className=' '>
                    <p className='text-center text-white font-semibold text-[40px]'>The Beauty</p>
                    <p className='text-center text-white text-[65px] font-bold'>Lookbook</p>
                    <p className='text-center text-white font-semibold text-[30px] '>View Collection</p>
                </div>
            </div>



            <div className='w-[50%] flex flex-col p-5 bg-white  items-center  h-[70vh]'>
                <img className='w-[100%] h-[80%] ' src={images[randomElement.image]} alt="" />
                <div>
                    <h1 className='text-black text-center '>{randomElement.title}</h1>
                    <h1 className='text-black text-center '>{randomElement.price}</h1>
                </div>
                <div className='flex gap-x-4'>
                    <div className='border border-black text-black p-3  text-center'>-2082 days</div>
                    <div className='border border-black text-black p-3   text-center'>-18 hrs</div>
                    <div className='border border-black text-black p-3   text-center'>-59 mins</div>
                    <div className='border border-black text-black p-3   text-center'>-11 secs</div>
                </div>
            </div>
        </div>
    );
};

