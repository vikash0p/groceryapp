import Image from 'next/image';
import React from 'react'


const SliderCard = ({ data }) => {
  // console.log(data);
  const { id, items, imgs, title } = data

  return (
    <div className='  group h-full w-full flex flex-col transition ease-linear duration-200 justify-center hover:rounded-xl hover:border hover:border-[#3bb77e] hover:shadow-xl'>
      <Image
        src={imgs}
        alt='images'
        width={80}
        height={80}
        priority
        sizes="80px"
        className=' transition ease-out duration-300 m-auto group-hover:scale-110 ' />
      <div className='mb-8'>
        <h5 className='text-center font-semibold group-hover:text-[#3bb77e]' data-swiper-parallax="-100">{title} </h5>
        <p className='text-center text-opacity-50' data-swiper-parallax="-200"> {items} items</p>
      </div>

    </div>
  )
}

export default SliderCard
