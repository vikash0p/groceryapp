import Image from 'next/image';
import React from 'react'
import Star from './product/Star';
import { AiOutlineShoppingCart } from "react-icons/ai";



const SliderthreeCard = ({data}) => {

    const {ids,imgs,titles,descs,rating,prices,category}=data;
    // console.log(rating);


  const styles =`absolute top-0 left-0 pt-1 px-3 py-1 rounded-tl-2xl  rounded-br-2xl text-base text-white text-center`;
  return (
    <div className='border border-gray-300 h-full  rounded-2xl relative'>
      <div className={` `}>
      {
          rating <= 2 ? (<h1 className={` bg-[#3bb77e] ${styles} `}>save 35%</h1>) : rating <= 3 ? (<h1 className={` bg-pink-500 ${styles} `} >save 15%</h1>) : rating <= 4 ? (<h1 className={` bg-blue-400 ${styles} `}>Sale</h1>) : (<h1 className={` bg-orange-400 ${styles} `}>Best Sale</h1>)
      }
      </div>
      <Image src={imgs} alt='images' width={200} height={200} className='mx-auto' priority />
      <div className='px-7'>
              <h5>{titles} </h5>
              <p>{descs.substring(0, 50)} </p>
              <Star star={rating} key={ids} />
              <div className='mt-4 '>
                  <h4 className='text-xl text-[#3bb77e]  '>${prices} </h4>
                  <div className='flex mt-3 absolute left-2 right-2 bottom-8 group hover:bg-orange-400 transition duration-150 ease-in flex-row justify-center items-center gap-2 bg-[#3bb77e] text-white text-xl px-3 py-2 rounded-md  cursor-pointer'>
                      <AiOutlineShoppingCart className='group-hover:translate-x-1 transition duration-150 ease-linear' />
                      <button type="button">cart</button>
                  </div>

              </div>
      </div>

    </div>
  )
}

export default SliderthreeCard
