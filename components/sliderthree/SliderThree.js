"use client"
import React from 'react'
import styles from './SlilderThree.module.css'
import Image from 'next/image'
import { BsArrowRightShort } from 'react-icons/bs'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'




import { Pagination, Navigation,Autoplay } from 'swiper/modules';
import { product } from '@/data'
import SliderthreeCard from '../SliderthreeCard'





const SliderThree = () => {
  return (
    <>
    <div className='w-full h-24 flex items-center px-3'>
      <h1 className='text-4xl font-semibold'>Daily Best Sells</h1>
    </div>
    <div className='w-full h-full flex flex-col gap-3 px-3 md:flex-row  '>
      <section className=' md:basis-1/4 w-full h-[480px] relative rounded-2xl'>
        <Image src={"/banner/banner-4.png"} className='rounded-2xl' alt='bannerImage' fill priority />
        <div className='absolute top-[15%] w-[70%] left-8 group '>
          <h1 className='text-5xl font-bold group-hover:text-orange-400'>Bring nature into your room.</h1>
          <div className='bg-[#3bb77e] mt-11 w-32 flex flex-row transition ease-in duration-200  group-hover:bg-orange-400 rounded-sm justify-center items-center   h-8 px-3'>
            <button type="button" className='  text-white font-semibold text-sm text rounded-md '>shop Now  </button>
            <BsArrowRightShort className='text-white font-semibold text-lg transition ease-in duration-200 group-hover:translate-x-1' />
          </div>

        </div>
      </section>

      <div className='md:basis-3/4  w-[100%] md:w-[66%] m-auto h-[480px] '>
        <Swiper
         
          loop={true}
          pagination={{
            type: 'fraction',
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',

          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            waitForTransition: true,

          }}
          modules={[Pagination, Navigation,Autoplay]}
          breakpoints={{
            300: {

              slidesPerView: 1,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            900: {
              slidesPerView:3 ,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            
          }}
          className="mySwiper w-full h-full"
        >
          {
            product.map((value, index, array) => {
              return (
                <SwiperSlide key={value.id} className='w-full h-full  '>
                  <SliderthreeCard  data={value} />
                </SwiperSlide>
              )
            })
          }
          <div className={`swiper-button-prev ${styles.buttonPrev}`}></div>
          <div className={`swiper-button-next ${styles.buttonNext}`}></div>
          {/* <div className={`swiper-pagination ${styles.pagination}`}></div> */}
        </Swiper>
       
      </div>
    </div>
    </>
  )
}

export default SliderThree
