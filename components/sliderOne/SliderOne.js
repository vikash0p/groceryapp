"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { cat } from '@/data';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import SliderCard from '../SliderCard';
import styles from './SliderOne.module.css'
import { motion } from 'framer-motion';


export default function App() {

  const SlideRef = useRef()

  const handleNext = () => {
    SlideRef.current.swiper.slidePrev()
  }
  const handlePrev = () => {
    SlideRef.current.swiper.slideNext()
  }

  return (
    <div className='px-2 my-9'>
      <div className='  flex flex-row justify-between items-center w-full h-12 px-5 my-4 '>
        <div>
          <p className='text-2xl md:text-4xl font-semibold'>Featured Categories</p>
        </div>
        <div className='flex flex-row gap-3'>
          <button type="button" onClick={handlePrev}>
            <BsArrowLeft className='text-xl w-10 h-10 bg-[#f2f3f4] text-[#7e7e7e] hover:bg-[#3bb77e] hover:text-white  px-2 rounded-full' />

          </button>
          <button type="button" onClick={handleNext}>
            <BsArrowRight className='text-xl w-10 h-10 bg-[#f2f3f4] text-[#7e7e7e] hover:bg-[#3bb77e] hover:text-white  px-2 rounded-full' />

          </button>
        </div>

      </div>
      <Swiper
        effect='slide'
        spaceBetween={10}
        loop={true}
        cssMode={true}
        navigation={false}
        pagination={
          {
            el: 'swiper-paginations',
            type: 'fraction'
          }
        }
        mousewheel={true}

        keyboard={true}
        zoom={{
          maxRatio: 5,
        }}
        ref={SlideRef}

        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        breakpoints={{
          400: {

            slidesPerView: 3,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
          1300: {
            slidesPerView: 10,
            spaceBetween: 20,

          },
        }}

        className=" mySwiper w-full h-48 transition-all duration-300 ease-in ">
        {
          cat.map(value => {
            return (
              <SwiperSlide className={`border scroll-smooth rounded-xl  backgroundColor`} key={value.id}>
                <SliderCard data={value} />
              </SwiperSlide>
            )
          })
        }


      </Swiper>
    </div>
  );
}
