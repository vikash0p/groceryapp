"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import { AiOutlineAppstore } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { link } from '@/data';
import Link from 'next/link';
// console.log(link)
import { Quicksand } from 'next/font/google'
const quicksand = Quicksand({
    subsets: ['latin'],
    display: 'swap',
})

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className=' hidden md:flex md:flex-row md:justify-between md:items-center md:w-full md:py-4  '>
            <div className='basis-[30%]'>
                <div className={`relative inline-block text-left bg-[#3bb77e] rounded-lg ms-2 text-white text-lg ${quicksand.className}`}>
                    <button onClick={() => setIsOpen((prev) => !prev)}
                        className="  px-4 py-2 ">
                        <span className='flex flex-row gap-1 '>
                            <AiOutlineAppstore className='mt-[6px]' />
                            <span>Browser All Category</span>
                            <svg className="w-2.5 h-2.5 ml-2.5 mt-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </span>


                    </button>
                    {isOpen && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={dropdownVariants}
                            exit={{

                                opacity: 0,
                                transition: {
                                    duration: .4,

                                }
                            }}
                            className="origin-top-right z-50 py-1 absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu"
                            onMouseLeave={() => setIsOpen(false)}>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"> Option 1</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"> Option 1</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"> Option 1</a>


                        </motion.div>
                    )}
                </div>

            </div>
            {/* all links */}
            <div className='basis-[70%] flex flex-row gap-6 justify-between items-center'>
                {
                    link.map((value,index) => <Link href={value.href} key={index} className={`text-lg ${quicksand.className}`}>{value.linkName} </Link>)
                }
                <div className='flex flex-row justify-start items-center gap-2'>
                    <Image src={"/logo/icon-headphone.svg"} alt='earphone' width={36} height={36} />
                    <div className='flex flex-col'>
                        <span className={`text-[#3bb77e] text-2xl pe-2 ${quicksand.className}`}>9990-127-407</span>
                        <span className='text-xs text-[#7e7e7e] ' >24/7 Support center</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
