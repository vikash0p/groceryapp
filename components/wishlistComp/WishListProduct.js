'use client'
import { addToCart } from '@/redux-toolkit/slice/CartSlice';
import { removeToWishlist } from '@/redux-toolkit/slice/WishlistSlice';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function WishListProduct() {
    const myWishlist = useSelector((state) => state.AllWishlist.wishlistArr);
    const dispatch = useDispatch();
    return (
        <div>
            {
                myWishlist.length <= 0 ? (
                    <div className='w-full min-h-screen flex flex-col justify-center items-center'>
                        <Image
                            src={'/logo/emptyWishlist.png'}
                            alt='empty image'
                            width={1000}
                            height={1000}
                            className='w-96 h-96 object-contain'
                        />
                        <Link href={'/shop'} className='px-3.5 py-1 bg-green-500 text-white text-xl '>Go to product page</Link>
                    </div>
                ) : (
                    <div>
                        <div className='w-full min-h-screen flex justify-center mt-10 gap-4'>
                            <div className="basis-[95%]  ">

                                <table className="table-auto min-w-full " >
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2">Image</th>
                                            <th className="px-4 py-2">Title</th>
                                            <th className="px-4 py-2">Description</th>
                                            <th className="px-4 py-2">Price</th>
                                            <th className="px-4 py-2">Remove</th>
                                            <th className="px-4 py-2">Add To Cart</th>
                                        </tr>
                                    </thead>
                                    {
                                        myWishlist.map((value, indx) => {
                                            return (
                                                <tbody key={value.id}>
                                                    <tr className='ps-1'>
                                                        <td className="border px-4 py-2"><Image src={value.img} alt={value.title} width={100} height={100} className="h-28 w-28 object-cover" /></td>
                                                        <td className="border px-4 py-2">{value.title} </td>
                                                        <td className="border px-4 py-2 ">{`${value.desc.substring(0, 30)}...`} </td>
                                                        <td className="border px-4 py-2">$ {value.price}</td>
                                                        <td className="border px-4 py-2">
                                                            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => {
                                                                dispatch(removeToWishlist(value.id))
                                                            }}>Remove</button>
                                                        </td>
                                                        <td className="border px-4 py-2">
                                                            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => {
                                                                return dispatch(addToCart({
                                                                    id: value.id,
                                                                    img: value.img,
                                                                    title: value.title,
                                                                    desc: value.desc,
                                                                    category: value.category,
                                                                    price: value.price,
                                                                    qty: 1,
                                                                }))
                                                            }}>addToCart</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            )
                                        })
                                    }
                                </table>

                            </div>

                        </div>
                    </div>
                )
            }
        </div >
    )
}
