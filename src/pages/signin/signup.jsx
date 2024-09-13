import React from 'react';
import { Navbar } from '../../layouts/navbar';
import { Footer } from '../../layouts/footer';

export const Signup = () => {
    return (
        <div>
            <Navbar />

              <div className='pl-[5vw] pt-[15vh] pb-[5vh]'>
            <p className='text-[40px]'>Create Account</p>

            <p className='text-[20px] text-[#888888] font-semibold'>Your Personal Details</p>


            <form action="" className='flex flex-col gap-3'>

                <label htmlFor="">First Name</label>
                <input type="text" placeholder='First Name' className='w-[70vw]  border-[#f6f2f2] text-[#888888]' />
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder='Last Name'className='w-[70vw]  border-[#888888] text-[#888888]' />
                <label htmlFor="">Email</label>
                <input type="text" placeholder='Email' className='w-[70vw]  border-[#888888] text-[#888888]'/>
                <label htmlFor="">Password</label>
                <input type="text" placeholder='Password' className='w-[70vw]  border-[#888888] text-[#888888]'/>
                

                <div className='flex gap-3'>
                    <button className='bg-black text-white p-3 w-32'>CREATE</button>
                    <button className='text-[#616060] hover:text-[#e65540]'>or Return to Store</button>

                </div>
            </form>
            </div>
            
            <Footer />
      </div>
    );
};

