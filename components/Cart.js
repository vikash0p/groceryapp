"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'




const Cart = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div>

            {/* -----------------------------cart------------------------- */}
            <div className="relative inline-block text-left">
                <button
                    onMouseEnter={() => setIsOpen(true)}
                    on
                    className=" px-4 py-2">
                    <div className="relative inline-flex items-center  text-sm font-medium text-center text-white rounded-l" >
                        <Image src={"/logo/icon-cart.svg"} alt='icon ' width={25} height={25} />
                        <span></span>
                        <span className="sr-only">Notifications</span>
                        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs  text-white bg-[#3bb77e] border-2 border-white rounded-full -top-3 -right-3 ">3</div>
                    </div>
                    <span>Cart</span>

                </button>
                {isOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={dropdownVariants}
                        className="origin-top-right py-1 absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50" role="menu" aria-orientation="vertical" aria-labelledby="options-menu" onMouseLeave={() => setIsOpen(false)} >

                        <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"> Option 1</a>
                        <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"> Option 1</a>
                        <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem"> Option 1</a>


                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default Cart
