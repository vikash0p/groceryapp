"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'




const Cart = () => {
    const cartProduct = useSelector((state) => state.AllCart.cartItem)

    return (
        <div>

            {/* -----------------------------cart------------------------- */}
            <div className="relative inline-block text-left">
                <button

                    className=" px-4 py-2">
                    <div className="relative inline-flex items-center  text-sm font-medium text-center text-white rounded-l" >
                        <Image
                            src={"/logo/icon-cart.svg"}
                            alt='icon '
                            width={25}
                            height={25}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs  text-white bg-[#3bb77e] border-2 border-white rounded-full -top-3 -right-3 ">{cartProduct.length}</div>
                    </div>
                    <span className='sr-only'>Cart</span>

                </button>
            </div>
        </div>
    )
}

export default Cart
