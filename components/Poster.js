import React from 'react'
import {BsSend} from 'react-icons/bs'

const Poster = () => {
  return (
    <div className='px-5 mb-8'>
          <div className='  w-full h-[480px] bg-[url("/banner/banner-9.png")] bg-contain bg-right bg-no-repeat  bg-blue-100 rounded-3xl'>
              <div className='flex w-full  md:w-1/2  h-full flex-col justify-center ps-6 md:ps-14 gap-6'>
                  <h1 className='text-4xl md:text-6xl font-semibold '>Dont &apos;t miss amazing Grocery Deals</h1>
                  <h3 className='md:text-3xl text-transparent md:text-[#7e7e7e] text-xl w-3/4 md:w-full hiddden '>Save up to 50% off on your first order</h3>

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
          </div>
    </div>
  )
}

export default Poster
