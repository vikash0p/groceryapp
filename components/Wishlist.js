import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'


const Wishlist = () => {
  const myWishlist = useSelector((state) => state.AllWishlist.wishlistArr);

  return (
    <div>
        <div className="relative inline-flex items-center  text-sm font-medium text-center text-white rounded-l" >
          <Image src={"/logo/icon-heart.svg"} alt='icon ' width={25} height={25} />
          <span></span>
          <span className="sr-only">wishlist</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs  text-white bg-[#3bb77e] border-2 border-white rounded-full -top-3 -right-3 ">{myWishlist.length} </div>
        </div>
    </div>
  )
}

export default Wishlist
