import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterest, FaGooglePlusG } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

export const Footer = () => {
    return (
<div className="flex flex-col  lg:gap-32 pl-2 p-7 bg-[#f0f0f0]">
  <div className="flex flex-col  lg:flex-row lg:justify-around">
    <div className="flex flex-col gap-4 lg:gap-7">
      <p className="font-bold">GET IN TOUCH</p>
      <div>
        <p className="w-full text-sm lg:w-96 text-gray-600">
          Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
        </p>
      </div>
      <div className="flex gap-4 lg:gap-6">
        <FaFacebookF className="text-[20px] text-gray-700" />
        <FaTwitter className="text-[20px]" />
        <FaPinterest className="text-[20px]" />
        <FaGooglePlusG className="text-[20px]" />
        <CiInstagram className="text-[20px]" />
      </div>
    </div>
    <div className="flex flex-col gap-8 lg:gap-12 ">
      <p className="font-bold">CATEGORIES</p>
      <div >
        <p className="text-gray-600 text-sm">Men</p>
        <p className="text-gray-600 text-sm">Women</p>
        <p className="text-gray-600 text-sm">Dresses</p>
        <p className="text-gray-600 text-sm">Sunglasses</p>
      </div>
    </div>
    <div className="flex flex-col gap-8 lg:gap-12">
      <p className="font-bold">LINKS</p>
      <div>
        <p className="text-gray-600 text-sm">Search</p>
        <p className="text-gray-600 text-sm">About Us</p>
        <p className="text-gray-600 text-sm">Contact Us</p>
        <p className="text-gray-600 text-sm">Returns</p>
      </div>
    </div>
    <div className="flex flex-col gap-8 lg:gap-12">
      <p className="font-bold">HELP</p>
      <div>
        <p className="text-gray-600 text-sm">Track Order</p>
        <p className="text-gray-600 text-sm">Returns</p>
        <p className="text-gray-600 text-sm">Shipping</p>
        <p className="text-gray-600 text-sm">FAQs</p>
      </div>
    </div>
    <div className="flex flex-col gap-6 lg:gap-10">
      <p className="font-bold">NEWSLETTER</p>
      <div className="flex flex-col gap-2 lg:gap-4">
        <input
          className="border border-t-2 w-full lg:w-72 p-2"
          type="text"
          placeholder="Email Address"
        />
        <button className="bg-black w-full lg:w-44 text-white p-3 rounded-full">
          SUBSCRIBE
        </button>
      </div>
    </div>
  </div>
  <p className="text-center text-gray-600 text-sm">
    Copyright © 2022 Shopify Theme Developed by MassTechnologist All rights
    reserved.
  </p>
</div>

    );
};

