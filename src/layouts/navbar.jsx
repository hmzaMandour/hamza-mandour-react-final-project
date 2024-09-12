import React from 'react';
import { TbPointFilled } from "react-icons/tb";
import {  FaRegUserCircle } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";

export const Navbar = () => {
    return (
        <div>

            <nav className='flex items-center justify-around py-4'>
                <div className='flex items-end'>
                    <p className='text-[40px] font-bold'>Fashe</p>
                    <TbPointFilled className='text-red-700 text-3xl' />
                </div>
                <div>
                    <ul className='flex items-center gap-10'>
                        <li className='text-gray-700 text-[17px]'>Home</li>
                        <li className='text-gray-700 text-[17px]'>Shope</li>
                        <li className='text-gray-700 text-[17px]'>Sale</li>
                        <li className='text-gray-700 text-[17px]'>Features</li>
                        <li className='text-gray-700 text-[17px]'>Blog</li>
                        <li className='text-gray-700 text-[17px]'>About</li>
                        <li className='text-gray-700 text-[17px]'>Contact</li>
                    </ul>
                </div>
                <div className='flex items-center gap-6' >
                     <FaRegUserCircle className='text-[30px] text-gray-600 ' />
                     <IoBagOutline  className='text-[30px] text-gray-600' /> 
                </div>
            </nav>
            
        </div>
    );
};

