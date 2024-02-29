"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Cart from './Cart';
import Wishlist from './Wishlist';


const Middlebar = () => {

    const [isOpen1, setIsOpen1] = useState(false);

    const dropdownVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const[selectValue,setSelectValue]=useState("")
    return (

        <section className='hidden md:h-[122px]  md:w-full md:flex md:flex-row md:justify-between md:items-center md:gap-3 lg:gap-5 md:px-2 md:border-b md:border-b-[#7e7e7e] md:border-opacity-50 ' >
            {/* 1.--------- logo-------------------- */}
            <div className=' md:basis-[15%] '>
                <Link href={"/"}>
                    <Image src={"/logo/logo.svg"} alt='logo' width={182} height={62} />
                </Link>
            </div>
            {/* 2.------------------searchbar------------------------------ */}
            <div className=' md:basis-[40%] bg-white border border-[#3bb77e] h-[50px]  '>

                <div className=''>
                    <div className="flex mt-3">
                        <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"></label>
                        <div>

                            <label htmlFor="countries" className="  text-sm font-medium "></label>
                            <select id="countries"  value={selectValue} className=" focus:outline-none bg-transparent px-1" onChange={(e)=>setSelectValue(e.target.value)}>
                                <option value="US">All Category</option>
                                <option value="CA">Milk & daries</option>
                                <option value="FR">petfood Toy</option>
                                <option value="DE">Dairy</option>
                            </select>

                        </div>
                        <div className='w-[1px] h-4  ms-2 mt-1 inline-block bg-[#7e7e7e]' />

                        <div className="relative w-full -mt-2">
                            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-black bg-transparent focus: outline-none " placeholder="Search htmlFor items" required />
                            <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-[#7e7e7e]  focus:outline-none ">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            {/* ----------------------------3th--------------- */}
            {/* ---------------compare------------------- */}
            <div className=' md:basis-[45%] '>
                <div className=" flex flex-row justify-between h-full items-center text-[#7e7e7e] ">
                    <Link href={"/"} >
                        <div className="relative inline-flex items-center  w-6 h-6 text-sm font-medium text-center text-white rounded-l" >
                            <Image src={"/logo/icon-compare.svg"} alt='icon ' width={25} height={25} />
                            <span></span>
                            <span className="sr-only">Notifications</span>
                            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs  text-white bg-[#3bb77e] border-2 border-white rounded-full -top-3 -right-3 ">3</div>
                        </div>
                        <span className=''>Compare</span>
                    </Link>
                    {/* -----------------------wishlist----------------- */}
                    <Link href={'/wishlist'}>
                        <Wishlist />
                    </Link>
                    {/* --------------Cart comp---------------------------- */}
                    <Link href={'/cart'}>
                        <Cart />

                    </Link>
                    {/* -----------------------------Register------------------------- */}

                    <div className="relative inline-block text-left  ">
                        <button
                            onMouseEnter={() => setIsOpen1(true)}

                            className=" px-4 py-2">
                            <span className='flex flex-row gap-1 '>
                                <Image src={"/logo/icon-user.svg"} alt='icon ' width={24} height={24} />
                                <span>Register</span>
                            </span>

                        </button>
                        {isOpen1 && (

                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={dropdownVariants}
                                className=" py-1  origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50" role="menu" aria-orientation="vertical" aria-labelledby="options-menu" onMouseLeave={() => setIsOpen1(!true)}  >

                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                    My Accout
                                </a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"> Order Traking</a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"> My Voucher</a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"> My wishlist</a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"> Setting </a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"> SignOut</a>


                            </motion.div>
                        )}
                    </div>






                </div>
            </div>
        </section>
    )
}

export default Middlebar
