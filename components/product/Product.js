"use client"
import { product } from '@/data'
import Image from 'next/image'
import React, { useState } from 'react'
// console.log(product);
import { AiOutlineShoppingCart, AiOutlineEye } from "react-icons/ai";
import { Model, Star } from '../index'
import { motion, AnimatePresence } from 'framer-motion';


const Product = () => {
    const [products, setProducts] = useState("All");
    const [selected, setSelect] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const uniqeData = (data, cat) => {
        let newData = data.map((value, index) => {
            return value[cat];
        });

        return (newData = ["All", ...new Set(newData)]);
    }


    const categroydata = uniqeData(product, "category");

    const filteredProducts = product.filter((product) => {
        const categoryPass = products === 'All' || product.category === products;
        return categoryPass
    });
    const clickHander = (value, index) => {
        setProducts(value);
        setSelect(index)
    }

    const styles = `absolute top-0 left-0 pt-1 px-3 py-1 rounded-tl-2xl  rounded-br-2xl text-base text-white text-center`;

    return (
        <div className='px-3'>
            <div className='px-5 py-8 flex flex-col md:flex-row md:justify-between items-center '>
                <h1 className='text-2xl md:text-3xl font-semibold'>Popular Products</h1>
                <div className='flex flex-col flex-wrap md:flex-row items-center gap-2 md:gap-6 text-lg font-semibold cursor-pointer'>
                    {
                        categroydata.map((value, index) => {
                            return (

                                <h1 key={index} className={`transition-transhtmlForm hover:-translate-y-1 hover:text-[#3bb77e] ${selected == index ? " text-[#3bb77e] " : " "}`} onClick={() => clickHander(value, index)} >{value} </h1>

                            )
                        })
                    }
                </div>
            </div>

            <div
                

                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:px-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 xl:gap-5 '>
                
                    {
                        filteredProducts.map((value, index) => {
                            const rating=value.rating;
                            return (
                                <div
                                    
                                    key={index}
                                    className='max-w-sm px-2 md:px-0 border border-gray-300 rounded-2xl h-[420px] lg:min-w-[250px] xl:w-[245px] md:w-64  relative' >

                                    {
                                        rating <= 2 ? (<h1 className={` bg-[#3bb77e] ${styles} `}>save 35%</h1>) : rating <= 3 ? (<h1 className={` bg-pink-500 ${styles} `} >save 15%</h1>) : rating <= 4 ? (<h1 className={` bg-blue-400 ${styles} `}>Sale</h1>) : (<h1 className={` bg-orange-400 ${styles} `}>Best Sale</h1>)
                                    }
                                    <div className=' absolute top-10 left-3 right-3 border border-green-300  rounded-2xl bg-opacity-80 flex flex-row justify-center items-center gap-5 h-32 bg-[#3bb77e] transition ease-linear duration-300 opacity-0 hover:opacity-100 '>

                                        <button type='button' onClick={openModal} className="text-2xl "><AiOutlineEye /> </button>
                                        <Image src={"/logo/icon-heart.svg"} alt='icon ' width={25} height={25} />
                                        <Image src={"/logo/icon-compare.svg"} alt='icon ' width={25} height={25} />


                                    </div>
                                   
                                    <Model isOpen={isModalOpen} onClose={closeModal} value={value}  />
                                       
                                    
                                    <Image src={value.imgs} className='mx-auto' alt={value.descs} width={200} height={200} priority />
                                    <div className='px-5'>
                                        <h5 className='text-gray-400'>{value.titles} </h5>
                                        <h1 className='font-semibold hover:text-[#3bb77e]  '>{value.descs.substring(0, 70)} </h1>
                                        <Star star={rating} />
                                        <div className='flex flex-row justify-between items-center mt-8'>
                                            <h4 className='text-xl text-[#3bb77e]  '>${value.prices} </h4>
                                            <div className='flex group hover:bg-orange-400 transition duration-150 ease-in flex-row items-center gap-2 bg-[#3bb77e] text-white text-base px-3 py-1 rounded-md  cursor-pointer'>
                                                <AiOutlineShoppingCart className='group-hover:translate-x-1 transition duration-150 ease-linear' />

                                                <button type="button">cart</button>
                                            </div>

                                        </div>
                                    </div>


                                </div>
                            )
                        })
                    }
                
            </div>
        </div>
    )
}

export default Product
