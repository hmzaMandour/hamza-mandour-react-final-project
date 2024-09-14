import React, { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoBagOutline } from 'react-icons/io5';
import { TbPointFilled } from 'react-icons/tb';
import { FiMenu } from 'react-icons/fi'; // Icon for the menu toggle
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
   <div>
         <nav className="flex bg-white items-center justify-between py-4 px-4 lg:px-8 fixed z-40 w-[100vw] shadow-md">
            <div className='flex items-center gap-[15vw]'>
            <div className="flex items-end">
              <p className="text-[30px] lg:text-[40px] font-bold">Fashe</p>
              <TbPointFilled className="text-red-700 text-2xl lg:text-3xl" />
            </div>

            <button
              onClick={toggleMenu}
              className="lg:hidden block text-gray-600 text-2xl"
            >
              <FiMenu />
            </button>

            <ul
              className={`${
                isMenuOpen ? 'flex' : 'hidden'
              } lg:flex flex-col lg:flex-row items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 absolute lg:static top-16 left-0 w-full lg:bg-transparent p-4 lg:p-0`}
            >
              <li onClick={() => { navigate(`/`) }} className="text-gray-700 text-[14px] sm:text-[16px] lg:text-[17px] cursor-pointer hover:text-[#e65540]">Home</li>
              <li onClick={() => { navigate(`/shoppage`) }} className="text-gray-700 text-[14px] sm:text-[16px] lg:text-[17px] cursor-pointer hover:text-[#e65540]">Shop</li>
              <li className="text-gray-700 text-[14px] sm:text-[16px] lg:text-[17px] cursor-pointer hover:text-[#e65540]">Sale</li>
              <li className="text-gray-700 text-[14px] sm:text-[16px] lg:text-[17px] cursor-pointer hover:text-[#e65540]">Features</li>
              <li className="text-gray-700 text-[14px] sm:text-[16px] lg:text-[17px] cursor-pointer hover:text-[#e65540]">Blog</li>
              <li onClick={() => { navigate(`/Aboutpage`) }} className="text-gray-700 text-[14px] sm:text-[16px] lg:text-[17px] cursor-pointer hover:text-[#e65540]">About</li>
              <li onClick={() => { navigate(`/contactpage`) }} className="text-gray-700 text-[14px] sm:text-[16px] lg:text-[17px] cursor-pointer hover:text-[#e65540]">Contact</li>
            </ul>
          </div>

          <div className="flex items-center gap-4 sm:gap-5 md:gap-6">
            <FaRegUserCircle onClick={() => { navigate(`/signin`) }} className=" cursor-pointer text-[20px] sm:text-[25px] lg:text-[30px] text-gray-600" />
            <IoBagOutline className="text-[20px] sm:text-[25px] lg:text-[30px] text-gray-600" />
          </div>
        </nav>
</div>

  );
};

