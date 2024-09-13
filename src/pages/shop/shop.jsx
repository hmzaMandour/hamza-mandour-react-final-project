import React, { useState } from 'react';
import images from '../../constant/images';
import { useNavigate } from 'react-router-dom';
import data from "../../json/data.json";

export const Shop = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6; 
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(data.length / productsPerPage);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const navigate=useNavigate()
    return (
        <div className='flex flex-col gap-10 pb-[8vh]'>
            <div
                className='flex justify-center items-center relative'
                style={{
                    backgroundImage: `url(${images.product3})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '30vh',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className='absolute inset-0 bg-black opacity-50 ' ></div>

                <div className='flex flex-col'>
                    <p className='text-[50px] text-white font-bold text-center relative'>
                    BEST SELLER
                    </p>
                    <p className='text-[18px] text-white text-center relative'>Best Seller Collection 2018</p>
                </div>
            </div>




            <div className='flex gap-10 bgdiv'>
                <div className='flex flex-col gap-[6vh]'>
                    <div className='flex flex-col gap-[2vh]'>
                        <p className='text-[20px] font-bold'>Categories</p>
                        <div>
                            <p className='text-gray-500 hover:text-[#e65540]'>Best Seller (8 items)</p>
                            <p className='text-gray-500 hover:text-[#e65540]'>Featured (8 items)</p>
                            <p className='text-gray-500 hover:text-[#e65540]'>Men (8 items)</p>
                            <p className='text-gray-500 hover:text-[#e65540]'>Women (8 items)</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[2vh]'>
                        <p className='text-[20px] font-bold'>color</p>
                        <div>
                            <div className='flex gap-2 items-center'>
                                 <input type="checkbox" name="" id="black" />
                                  <label htmlFor="black" className='text-gray-500 hover:text-[#e65540]'>Black</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                 <input type="checkbox" name="" id="gray" />
                                  <label htmlFor="gary" className='text-gray-500 hover:text-[#e65540]'>Gray</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                 <input type="checkbox" name="" id="red" />
                                  <label htmlFor="red" className='text-gray-500 hover:text-[#e65540]'>Red</label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[2vh]'>
                        <p className='text-[20px] font-bold'>Price</p>
                        <div>
                            <div className='flex gap-2 items-center'>
                                 <input type="checkbox" name="" id="black" />
                                  <label htmlFor="black" className='text-gray-500 hover:text-[#e65540]'>0-20</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                 <input type="checkbox" name="" id="gray" />
                                 <label htmlFor="gary" className='text-gray-500 hover:text-[#e65540]'>20-50</label>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[2vh]'>
                        <p className='text-[20px] font-bold'>Size</p>
                        <div>
                            <div className='flex gap-2 items-center'>
                                 <input type="checkbox" name="" id="black" />
                                  <label htmlFor="black" className='text-gray-500 hover:text-[#e65540]'>L</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                 <input type="checkbox" name="" id="gray" />
                                  <label htmlFor="gary" className='text-gray-500 hover:text-[#e65540]'>M</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                 <input type="checkbox" name="" id="red" />
                                  <label htmlFor="red" className='text-gray-500 hover:text-[#e65540]'>S</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                 <input type="checkbox" name="" id="red" />
                                  <label htmlFor="red" className='text-gray-500 hover:text-[#e65540]'>XL</label>
                            </div>
                        </div>
                    </div>

                    <input type="text" placeholder='Search.....' className='p-3 w-64'/>
                    
                </div>





                <div className='flex flex-col gap-9'>
                    <div className="flex justify-center items-center gap-[17vw] ">
                        <div className='flex justify-center gap-3'>
                            <select
                        className="block p-2.5 w-[14vw] bg-white border border-gray-300 text-gray-900 text-sm rounded-lg"
                        name="input-sort"
                        id="input-sort"
                        >
                        <option className='text-gray-500' value="manual">Featured</option>
                        <option className='text-gray-500' value="best-selling">Best Selling</option>
                        <option className='text-gray-500' value="title-ascending">Alphabetically, A-Z</option>
                        <option className='text-gray-500' value="title-descending">Alphabetically, Z-A</option>
                        <option className='text-gray-500' value="price-ascending">Price, low to high</option>
                        <option className='text-gray-500' value="price-descending">Price, high to low</option>
                        <option className='text-gray-500' value="created-descending">Date, new to old</option>
                        <option className='text-gray-500' value="created-ascending">Date, old to new</option>
                        </select>
                        <select
                        id="input-limit"
                        className="block p-2.5 w-[14vw] bg-white border border-gray-300 text-gray-900 text-sm rounded-lg"
                        >
                        <option className='text-gray-500' value="10">10</option>
                        <option className='text-gray-500' value="20">20</option>
                        <option className='text-gray-500' value="30">30</option>
                        <option className='text-gray-500' value="all">All</option>
                        </select>
                        </div>
                        <p className='text-gray-500'>Showing 1 to 6 of 8 items</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                        {currentProducts.map((e, i) => (
                        <div key={e.id} className="px-4">
                            <div className="p-2">
                            <img
                                src={images[e.image]}
                                alt={e.title}
                                className="w-full h-auto object-cover"
                            />
                            </div>
                            <h1 onClick={()=>{navigate(`/desc/${e.id}`)}} className="pl-3 text-xl text-gray-400 pt-3 hover:text-[#f5bdb5] cursor-pointer">
                            {e.title}
                            </h1>
                            <h1 className="pl-3 text-xl text-gray-400">{e.price}</h1>
                        </div>
                        ))}
                    </div>

                    
                    <div className="flex justify-center mt-6">
                        <button
                        onClick={() => paginate(1)}
                        className={`px-3 py-1 border rounded-md mx-1 ${
                            currentPage === 1 ? "bg-gray-400" : "bg-white"
                        }`}
                        disabled={currentPage === 1}
                        >
                        1
                        </button>
                        <button
                        onClick={() => paginate(2)}
                        className={`px-3 py-1 border rounded-md mx-1 ${
                            currentPage === 2 ? "bg-gray-400" : "bg-white"
                        }`}
                        disabled={currentPage === 2}
                        >
                        2
                        </button>
                    </div>
                                </div>
            </div>
        </div>
    );
};

