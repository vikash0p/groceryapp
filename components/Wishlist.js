import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Wishlist = () => {
  return (
    <div>
      <Link href={"/"} >
        <div className="relative inline-flex items-center  text-sm font-medium text-center text-white rounded-l" >
          <Image src={"/logo/icon-heart.svg"} alt='icon ' width={25} height={25} />
          <span></span>
          <span className="sr-only">whitlist</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs  text-white bg-[#3bb77e] border-2 border-white rounded-full -top-3 -right-3 ">6</div>
        </div>
        <span>Wishlist</span>
      </Link>
    </div>
  )
}

export default Wishlist
