"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { VscChromeClose } from 'react-icons/vsc';
import Cart from './Cart';
import { GoLocation } from 'react-icons/go';
import { AiOutlineUser } from 'react-icons/ai';
import { SlEarphonesAlt } from 'react-icons/sl';
import { media } from '@/data';
import Wishlist from './Wishlist';



const OffCanvasMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='' >
            <div className='flex flex-row justify-between gap-2 px-2 sm:ps-6 items-center border-b border-b-gray-300 shadow-md  w-full h-[72px] md:hidden' >
                <button className=" text-2xl  rounded-md  " onClick={toggleMenu} > <RxHamburgerMenu /> </button>
                <Link href={"/"}>
                    <Image src={"/logo/logo.svg"} alt='logo' width={132} height={24} />
                </Link>
                <div className='flex flex-row items-center'>
                    <Wishlist />
                    <Cart />
                </div>
            </div>


            <div className={`fixed top-0 left-0 h-full w-80 bg-slate-50  z-50  transhtmlForm transition-transhtmlForm ${isOpen ? 'translate-x-0 ' : '-translate-x-full'}`} >
                <div className='flex flex-row justify-between gap-2 px-2 items-center  border-b  border-b-gray-400  bg-transparent  w-full h-[72px]'>
                    <Link href={"/"}><Image src={"/logo/logo.svg"} alt='logo' width={132} height={24} /></Link>
                    <button className="mb-4 p-2 bg-[#3bb77e] text-white transition ease-linear duration-150 rounded-full hover:rotate-180 " onClick={toggleMenu} > <VscChromeClose className='' /></button>
                </div>
                <div className='px-5'>
                    <div className="relative w-full mx-auto bg-gray-200 rounded-sm my-4 ">
                        <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-black bg-transparent focus: outline-none placeholder:text-black" placeholder="Search htmlFor items..." required />
                        <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-black focus:outline-none ">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>

                    <ul className="space-y-2">
                        <li>
                            <a href="#" className=" hover:text-gray-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className=" hover:text-gray-300">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className=" hover:text-gray-300">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className=" hover:text-gray-300">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className='border my-6 ps-3 py-5 rounded-lg border-opacity-50 border-gray-300 h-full w-full flex flex-col justify-center gap-3'>
                        <Link href={"/"} className='flex flex-row gap-3 items-center' >
                            <GoLocation />
                            <span>Our Location</span>
                        </Link>
                        <Link href={"/"} className='flex flex-row gap-3 items-center' >
                            <AiOutlineUser />
                            <span>Log In / Sig Up</span>
                        </Link>
                        <Link href={"/"} className='flex flex-row gap-3 items-center'>
                            <SlEarphonesAlt />
                            <span>(+91)-9990127407 </span>
                        </Link>
                    </div>

                    <div>
                        <h1 className='font-semibold text-lg'>follow Us</h1>
                        <div className='flex flex-row justify-start gap-4 items-center mt-2'>
                            {
                                media.map((value) => {
                                    return (
                                        <Link href={value.link} className='bg-[#3bb77e] p-2 text-white rounded-full' key={value.id}>
                                            <h2>{value.icon} </h2>
                                        </Link>
                                    )
                                })
                            }
                        </div>

                    </div>
                    <h5 className='text-gray-500 text-sm my-10'>Copyright 2022 © Nest. All rights reserved. Powered by Vikash0p.</h5>

                </div>


            </div>
        </div>
    );
};

export default OffCanvasMenu;
