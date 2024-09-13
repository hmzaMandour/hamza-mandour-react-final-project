import React from 'react';
import { Navbar } from '../../layouts/navbar';
import { Footer } from '../../layouts/footer';

export const Signin = () => {
    return (
        <div>
            <Navbar />
             <div className='flex bgdiv gap-9 pt-[22vh] pb-[7vh]'>
            <div className='flex flex-col gap-4 border border-[#888888] p-4'>
                <p className='text-[40px]'>New Customer</p>

                <p className='text-[20px] text-[#888888] font-semibold'>Register Account</p>

                <p className='text-[#888888] w-[40vw]'>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>

                <button className='bg-black text-white p-3 w-36'>CONTINUE</button>

            </div>




            <div className='border border-[#888888] p-4'>
                <p className='text-[40px]'>Returning Customer</p>

                <p className='text-[20px] text-[#888888] font-semibold'>I am a returning customer</p>

                <form action="" className='flex flex-col gap-2 '>
                    <label htmlFor="">Email</label>
                    <input type="email"  placeholder='email' className='text-[#888888] w-[40vw]'/>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='password'className='text-[#888888]' />
                    
                    <p className='text-[#616060] hover:text-[#e65540] cursor-pointer'>Forgot your password?</p>

                    <div className='flex gap-3'>
                        <button className='bg-black text-white p-3 w-32'>SIGN IN</button>
                        <button className='text-[#616060] hover:text-[#e65540]'>or Return to Store</button>

                    </div>
                </form>
            </div>
            </div>
            <Footer />
       </div>
    );
};

