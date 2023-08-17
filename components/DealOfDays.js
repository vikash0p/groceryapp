"use client";
import React, { useEffect, useState } from 'react'
import { DealsOfDays } from '@/data'
import Image from 'next/image';
import Star from './product/Star'
import { AiOutlineShoppingCart } from 'react-icons/ai';

const DealOfDays = () => {

    return (
        <div div className='mb-48'>
            <div className='px-3 w-full h-24 flex items-center text-4xl font-semibold'>
                <h1>Deals Of Days.</h1>
            </div>
            <div className='w-full h-full grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-3 '>
                {
                    DealsOfDays.map((value) => {
                        return (
                            <div key={value.id} className="w-full h-64 relative mb-32 xl:mb-0 last:mb-0  ">
                                <Image src={value.img} alt={value.title} className='object-cover rounded-xl' fill priority />

                                <div className='absolute -bottom-32  p-8 shadow-2xl rounded-2xl left-3 right-3 bg-white'>
                                    <h1 className='text-lg font-semibold'>{value.title} </h1>
                                    <Star star={value.rating} />
                                    <h2 className='mt-3'>By <span className='text-[#3bb77e]'>{value.comp} </span>  </h2>
                                    <div className='flex h-[36px] flex-row justify-between items-center mt-5'>
                                        <h4 className='text-xl text-[#3bb77e]  '>${value.price} </h4>
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

export default DealOfDays
