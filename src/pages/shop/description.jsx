import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from "../../json/data.json";
import images from '../../constant/images';
import { Navbar } from '../../layouts/navbar';
import { Footer } from '../../layouts/footer';

export const Description = () => {
    const [count, setCount] = useState(1);
    let { id } = useParams();
    let findidx = data.find((e) => e.id == id);

    return (
        <>
            <Navbar />
            <div className="bg-gray-100 pt-[15vh] md:pt-[15vh] pb-[12vh] md:pb-[12vh]">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
                            <img
                                src={images[findidx.image]}
                                alt="Product"
                                className="w-full h-auto rounded-lg shadow-md"
                                id="mainImage"
                            />
                        </div>

                        <div className="w-full md:w-1/2 px-4">
                            <h2 className="text-2xl md:text-3xl font-bold mb-2">{findidx.title}</h2>
                            <div className="mb-4">
                                <span className="text-xl md:text-2xl font-bold mr-2">{findidx.price}</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="ml-2 text-gray-600 text-sm md:text-base">4.5 (120 reviews)</span>
                            </div>
                            <p className="text-gray-700 mb-6 text-sm md:text-base">
                                {findidx.about}
                            </p>

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-2">Size:</h3>
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        className="w-12 h-12 border-2 border-gray-300 cursor-pointer hover:border-[#e65540] transition duration-300"
                                        title="Small"
                                        aria-label="Size option Small"
                                    >S</button>
                                    <button
                                        className="w-12 h-12 border-2 border-gray-300 cursor-pointer hover:border-[#e65540] transition duration-300"
                                        title="Medium"
                                        aria-label="Size option Medium"
                                    >M</button>
                                    <button
                                        className="w-12 h-12 border-2 border-gray-300 cursor-pointer hover:border-[#e65540] transition duration-300"
                                        title="Large"
                                        aria-label="Size option Large"
                                    >L</button>
                                    <button
                                        className="w-12 h-12 border-2 border-gray-300 cursor-pointer hover:border-[#e65540] transition duration-300"
                                        title="Extra Large"
                                        aria-label="Size option Extra Large"
                                    >XL</button>
                                </div>
                                
                                <div className='flex items-center gap-x-4 pt-6 md:pt-8'>
                                    <div className='flex'>
                                        <button
                                            onClick={() => count > 1 ? setCount(count - 1) : setCount(count)}
                                            className="w-10 h-10 flex items-center justify-center bg-gray-200 border border-gray-300 text-xl font-semibold text-gray-700 active:scale-95"
                                        >
                                            -
                                        </button>
                                        <h1 className="flex justify-center items-center font-bold w-10 h-10 text-center bg-white border border-gray-300 text-gray-800">
                                            {count}
                                        </h1>
                                        <button
                                            onClick={() => setCount(count + 1)}
                                            className="w-10 h-10 flex items-center justify-center bg-gray-200 border border-gray-300 text-xl font-semibold text-gray-700"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button className="bg-black text-white px-6 py-2 md:px-8 md:py-3 rounded-full hover:bg-blue-600 transition duration-300">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 md:flex-row md:gap-8 pt-6 md:pt-8">
                                <h3 className="text-gray-400 font-semibold mb-2">Brand: {findidx.brand}</h3>
                                <h3 className="text-gray-400 font-semibold mb-2">
                                    Categories: {findidx.categories.join(', ')}
                                </h3>
                            </div>
                            <div className='pt-6 md:pt-8'>
                                <p className='text-lg font-semibold pb-4'>Description</p>
                                <p className='text-gray-400 text-sm md:text-base'>{findidx.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
