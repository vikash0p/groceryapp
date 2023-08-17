"use client";
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const Topbar = () => {
    const [dataArray, setDataArray] = useState(["Trendy 25silver jewelry, save up 35% off today", "100% Secure delivery without contacting the courie", "Supper Value Deals - Save more"]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % dataArray.length)
        }, 2000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <section className=' hidden lg:flex lg:flex-row lg:justify-between lg:gap-4 lg:items-center lg:h-12 lg:px-1 border-b border-b-gray-300  '>
            <div className="flex-1 flex flex-row justify-between text-[#7e7e7e] ">
                <Link href={"/"} >About Us</Link>
                <vr className='w-[1px] h-4  mt-1 inline-block bg-[#7e7e7e]' />
                <Link href={"/"} >My Account</Link>
                <vr className='w-[1px] h-4  mt-1 inline-block bg-[#7e7e7e]' />
                <Link href={"/"} >whitlist</Link>
                <vr className='w-[1px] h-4  mt-1 inline-block bg-[#7e7e7e]' />
                <Link href={"/"} >Order Tracking</Link>
            </div>
            <div className=" md:flex-none lg:flex-1   ">

                <h3 className='text-center transition-all transhtmlForm 2s ease-in text-[#7e7e7e] font-semibold'>{dataArray[currentIndex]}</h3>

            </div>
            <div className="flex-1 flex flex-row justify-between items-center gap-3 text-[#7e7e7e]">
                <div>Need help? Call Us: <span className='text-[#3bb77e]'>+1800 900</span></div>
                <vr className='w-[1px] h-4  mt-1 inline-block bg-[#7e7e7e]' />

                <div>

                    <label htmlFor="countries" className="  text-sm font-medium "></label>
                    <select id="countries" className=" focus:outline-none bg-transparent">
                        <option selected>English</option>
                        <option defaultValue="US">Hindi</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>

                </div>
                <vr className='w-[1px] h-4  mt-1 inline-block bg-[#7e7e7e]' />

                <div>

                    <label htmlFor="countries" className="  text-sm font-medium "></label>
                    <select id="countries" className=" focus:outline-none bg-transparent">
                        <option selected>USD</option>
                        <option defaultValue="US">INR</option>
                        <option value="CA">Canada</option>

                    </select>

                </div>

            </div>
        </section>
    )
}

export default Topbar
