import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from "../../json/data.json";
import images from '../../constant/images';
import { Navbar } from '../../layouts/navbar';
import { Footer } from '../../layouts/footer';

export const Description = () => {
    const [count, setCount] = useState(1)
  let { id } = useParams();
  let findidx = data.find((e, i) => e.id == id);


    return (
      <>
        <Navbar />





    <div className="bg-gray-100 pt-12 pb-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex  -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={images[findidx.image]}
              alt="Product"
              className="w-full h-auto rounded-lg shadow-md mb-4"
              id="mainImage"
            />
          </div>

          <div className="w-full md:w-1/2 px-4">
                <h2 className="text-3xl font-bold mb-2">{ findidx.title}</h2>
            <div className="mb-4">
                <span className="text-2xl font-bold mr-2">{ findidx.price}</span>
            </div>
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
            </div>
            <p className="text-gray-700 mb-6">
              {findidx.about}
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Size:</h3>
              <div className="flex items-center gap-4">
                <button
                  className="size-10  border-2 border-gray-300 cursor-pointer hover:border-[#e65540] transition duration-300"
                  title="Black"
                  aria-label="Color option Black"
                >S</button>
                <button
                  className="size-10   border-2 border-gray-300 cursor-pointer hover:border-[#e65540] transition duration-300"
                  title="Blue"
                  aria-label="Color option Blue"
                >M</button>
                <button
                  className="size-10   border-2 border-gray-300 cursor-pointer hover:border-[#e65540] transition duration-300"
                  title="Red"
                  aria-label="Color option Red"
                 >L</button>
                 <button
                  className="size-10   border-2 border-gray-300 cursor-pointer hover:border-[#e65540] transition duration-300"
                  title="Red"
                  aria-label="Color option Red"
                >XL</button>
                </div>
                                            
                    <div className='flex items-center gap-x-4 pt-8'>
                        <div className='flex'>
                                   <button
                            onClick={() => count > 1 ? setCount(count - 1) : setCount(count)}
                            className="w-12 h-12 flex items-center justify-center bg-gray-200 border border-gray-300  text-xl font-semibold text-gray-700  active:scale-95"
                        >
                            -
                        </button>
                        
                        <h1 className="flex justify-center items-center font-bold w-12 h-12 text-center bg-white border border-gray-300  text-gray-800">
                            {count}
                        </h1>
                        
                        <button
                            onClick={() => setCount(count + 1)}
                            className="w-12 h-12 flex items-center justify-center bg-gray-200 border border-gray-300  text-xl font-semibold text-gray-700  "
                        >
                            +
                        </button>
                              </div>
                               <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-blue-600 transition duration-300">
              Add to Cart
            </button>
                    </div>

            </div>

            <div className="flex gap-[5vw] pt-11">
                <h3 className="text-gray-400 font-semibold mb-2">Brand: { findidx.brand}</h3>
                          <h3 className="text-gray-400 font-semibold flex gap-2 mb-2">Categories: {findidx.categories.map((e) =>
                              
                                   <p>{e},</p>
                              
                )}</h3>
                      </div>
                      <div className='pt-10 '>
                          <p className='text-lg font-semibold pb-6'>Descirption</p>
                          <p className='text-gray-400'>{ findidx.description}</p>
                      </div>

           
          </div>
        </div>
      </div>
    </div>
        


            <Footer />
            


 </>
  );
};

