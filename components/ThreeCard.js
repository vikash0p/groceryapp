import React from 'react'
import { threedata } from '@/data'
import Image from 'next/image';
// console.log(threedata);
import { BsArrowRightShort } from 'react-icons/bs';
import Link from 'next/link';


const ThreeCard = () => {
  return (
    <div className='w-full h-full flex flex-col  my-10 md:flex-row justify-center items-center gap-4 px-3 '>
      {
        threedata.map((value) => {
          return (
            <div key={value.id} className="w-full h-64 relative   ">
              <Image
                src={value.imgs}
                alt={value.title}
                className='object-cover rounded-xl'
                fill
                priority
                sizes="(min-width: 780px) calc(33.33vw - 19px), calc(100vw - 24px)"
              />
              <div className='group'>
                <h1 className=' absolute top-12 left-12 text-2xl w-1/2 font-semibold transition ease-in duration-200  group-hover:text-green-500 group-hover:-translate-y-3'>{value.title} </h1>
                <div className='bg-[#3bb77e] absolute bottom-12 left-12 flex flex-row transition ease-in duration-200  group-hover:bg-orange-400 rounded-sm justify-center items-center   h-7 px-3'>
                  <Link href={"/shop"} className='  text-white font-semibold text-sm text rounded-md '>shop Now  </Link>
                  <BsArrowRightShort className='text-white font-semibold text-lg transition ease-in duration-200 group-hover:translate-x-1' />
                </div>

              </div>



            </div>

          )
        })
      }
    </div>
  )
}

export default ThreeCard
