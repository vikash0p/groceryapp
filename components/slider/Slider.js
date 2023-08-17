"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import styles from './Slider.module.css'
import { BsSend } from 'react-icons/bs';
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

export default function Slider() {

    return (
        <>

            <Swiper
                cssMode={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',

                }}
                speed={500}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    waitForTransition: true,

                }}
                mousewheel={true}
                keyboard={true}
                swiper
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper w-[98%] md:h-[467px] h-96 mt-6   "
            >

                <SwiperSlide className='  w-full h-full bg-[url("/logo/slider-1.png")] bg-cover bg-center bg-no-repeat transition duration-300 ease-linear rounded-3xl'>
                    <div className='flex w-full  md:w-1/2  h-full flex-col justify-center ps-6 md:ps-14 gap-6'>
                        <h1 className='text-4xl md:text-6xl font-semibold '>Dont &apos;t miss amazing Grocery Deals</h1>
                        <h3 className='md:text-3xl text-[#7e7e7e] text-xl w-3/4 md:w-full '>Save up to 50% off on your first order</h3>

                        <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                        <div className="relative  ">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                <BsSend />
                            </div>
                            <div className=' w-[95%] md:w-[70%] relative'>
                                <input type="text" id="email-address-icon" className=" placeholder:text-[#7e7e7e] placeholder:text-sm 
                                placeholder:font-semibold text-sm rounded-full h-12 md:h-16 pe-7 w-[100%] pl-10 p-2.5 focus:outline-none " placeholder="Enter your email" />
                                <button type='button ' className=' absolute bottom-0 right-0 top-0 text-white font-semibold px-3 md:px-9 bg-[#3bb77e] rounded-full ' >Subscribe</button>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='  w-full h-full bg-[url("/logo/slider-2.png")] bg-cover bg-center bg-no-repeat transition duration-300 ease-linear rounded-3xl'>
                    <div className='flex w-full  md:w-1/2  h-full flex-col justify-center ps-6 md:ps-14 gap-6'>
                        <h1 className='text-4xl md:text-6xl font-semibold '>Dont &apos;t miss amazing Grocery Deals</h1>
                        <h3 className='md:text-3xl text-[#7e7e7e] text-xl w-3/4 md:w-full '>Save up to 50% off on your first order</h3>

                        <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                        <div className="relative  ">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                <BsSend />
                            </div>
                            <div className=' w-[95%] md:w-[70%] relative'>
                                <input type="text" id="email-address-icon" className=" placeholder:text-[#7e7e7e] placeholder:text-sm 
                                placeholder:font-semibold text-sm rounded-full h-12 md:h-16 pe-7 w-[100%] pl-10 p-2.5 focus:outline-none " placeholder="Enter your email" />
                                <button type='button ' className=' absolute bottom-0 right-0 top-0 text-white font-semibold px-3 md:px-9 bg-[#3bb77e] rounded-full ' >Subscribe</button>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>


                <div className={`swiper-button-prev ${styles.buttonPrev}`}></div>
                <div className={`swiper-button-next ${styles.buttonNext}`}></div>
                <div className={`swiper-pagination ${styles.pagination}`}>

                </div>
            </Swiper >
        </>
    );
}
