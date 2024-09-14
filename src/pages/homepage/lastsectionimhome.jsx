import React from 'react';

export const Lastsectionimhome = () => {
    return (
        <div className='flex flex-col gap-[15vh]'>
            <p className='text-[35px] font-semibold text-center'>@ FOLLOW US ON INSTAGRAM</p>
            <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-[10vw]'>
                <div className='text-center'>
                    <p className='text-[#555a60] text-[20px]'>Free Delivery Worldwide</p>
                    <p className='text-gray-500'>Mirum est notare quam littera gothica</p>
                </div>
                <div className='relative text-center'>
                    <p className='text-[#555a60] text-[20px]'>30 Days Return</p>
                    <p className='text-gray-500 px-6'>Simply return it within 30 days for an exchange.</p>
                    <div className='absolute top-0 bottom-0 left-[-1px] w-[1px] bg-gray-300 hidden md:block'></div>
                    <div className='absolute top-0 bottom-0 right-[-1px] w-[1px] bg-gray-300 hidden md:block'></div>
                </div>
                <div className='text-center'>
                    <p className='text-[#555a60] text-[20px]'>Store Opening</p>
                    <p className='text-gray-500'>Shop open from Monday to Sunday</p>
                </div>
            </div>
        </div>
    );
};
