'use client'
import { decrementQty, incrementQty, removeToCart } from '@/redux-toolkit/slice/CartSlice'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


export default function CartProduct() {
    const product = useSelector((state) => state.AllCart.cartItem);
    const dispatch = useDispatch();

    const TotalPrice = product.reduce((acc, value) => {
        const productPrice = parseFloat(value.price) * parseFloat(value.qty);
        return acc + (isNaN(productPrice) ? 0 : productPrice)
    }, 0)

    const totalQuantity = product.reduce((acc, product) => {
        return acc + product.qty;
    }, 0);

    return (
        <div>
            {
                product.length <= 0 ? (
                    <div className='w-full min-h-screen flex flex-col justify-center items-center'>
                        <Image
                            src={'/logo/emptycart.png'}
                            alt='empty image'
                            width={1000}
                            height={1000}
                            className='w-96 h-96 object-contain'
                        />
                        <Link href={'/shop'} className='px-3.5 py-1 bg-green-500 text-white text-xl '>Go to product page</Link>
                    </div>
                ) : (
                    <div>
                        <div className='w-full min-h-screen flex gap-4'>
                            <div className=" basis-[75%] ">

                                <table class="table-auto min-w-full " >
                                    <thead>
                                        <tr>
                                            <th class="px-4 py-2">Image</th>
                                            <th class="px-4 py-2">Title</th>
                                            <th class="px-4 py-2">Description</th>
                                            <th class="px-4 py-2">Quantity</th>
                                            <th class="px-4 py-2">Price</th>
                                            <th class="px-4 py-2">Remove</th>
                                        </tr>
                                    </thead>
                                    {
                                        product.map((value, indx) => {
                                            return (
                                                <tbody key={value.id}>
                                                    <tr className='ps-1'>
                                                        <td class="border px-4 py-2"><Image src={value.img} alt={value.title} width={100} height={100} className="h-28 w-28 object-cover" /></td>
                                                        <td class="border px-4 py-2">{value.title} </td>
                                                        <td class="border px-4 py-2 ">{`${value.desc.substring(0, 30)}...`} </td>
                                                        <td class="border px-4 py-2">
                                                            <div className=' flex justify-between gap-1'>
                                                                <button type="button "
                                                                    className={`text-2xl bg-red-600 w-8 h-8 text-white ${value.qty <= 1 ? "bg-red-200" : ""}`}
                                                                    disabled={value.qty <= 1}
                                                                    onClick={() => {
                                                                        value.qty > 1 && dispatch(decrementQty(value.id))
                                                                    }}>-</button>
                                                                <h5>{value.qty} </h5>
                                                                <button type="button " className={`text-2xl bg-green-600 w-8 h-8 text-white ${value.qty > 9 ? "bg-green-200" : " "}`}
                                                                    onClick={() => value.qty <= 9 && dispatch(incrementQty(value.id))}
                                                                >+</button>
                                                            </div>
                                                        </td>
                                                        <td class="border px-4 py-2">$ {value.price}</td>
                                                        <td class="border px-4 py-2">
                                                            <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => {
                                                                dispatch(removeToCart(value.id))
                                                            }}>Remove</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            )
                                        })
                                    }
                                </table>

                            </div>
                            <div className="basis-[25%] h-screen bg-slate-600 text-white px-2 ">
                                <h2 className='text-2xl font-semibold '>Summary</h2>
                                <div class="overflow-x-auto">
                                    <table class="table-auto min-w-full mt-3">

                                        <tbody>
                                            <tr class="bg-gray-400 text-black">
                                                <td class="border px-4 py-2">SubTotal</td>
                                                <td class="border px-4 py-2">${TotalPrice} </td>
                                            </tr>
                                            <tr class="bg-gray-800 text-white">
                                                <td class="border px-4 py-2">Sales Tax</td>
                                                <td class="border px-4 py-2">$0.00</td>
                                            </tr>
                                            <tr class="bg-gray-400 text-black">
                                                <td class="border px-4 py-2"> total Items</td>
                                                <td class="border px-4 py-2">{product.length} </td>
                                            </tr>
                                            <tr class="bg-gray-800 text-white">
                                                <td class="border px-4 py-2">total Quantity</td>
                                                <td class="border px-4 py-2">{totalQuantity} </td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </div>
                                <div className='w-full h-[2px] bg-gray-950 my-5'></div>
                                <table class="table-auto min-w-full my-3">

                                    <tbody>
                                        <tr class="bg-gray-400 text-black">
                                            <td class="border px-4 py-2">Grand total</td>
                                            <td class="border px-4 py-2">${TotalPrice} </td>
                                        </tr>

                                    </tbody>

                                </table>
                                <div className='my-10'>
                                        <Link href={'/checkout'} className='bg-green-700  text-white px-4 py-2 hover:bg-green-800'>checkout</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >

    )
}
