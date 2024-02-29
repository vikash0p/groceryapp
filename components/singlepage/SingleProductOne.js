'use client'
import { DealsOfDays, product } from '@/data'
import Image from 'next/image'
import React from 'react'
import Star from '../product/Star'
import ProductItem from '../product/ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '@/redux-toolkit/slice/CartSlice'

export default function SingleProductOne({ params }) {
    const dispatch=useDispatch();
    console.log(params);
    const productData = product.filter((value) => value.ids === params);
    const dealsData = DealsOfDays.filter((value) => value.ids === params);

    // Combine the filtered arrays
    const combinedData = [...productData, ...dealsData];
    // console.log("🚀 ~ file: SingleProductOne.js:14 ~ combinedData:", combinedData);

    const combinationFullData=[...product,...DealsOfDays]
    // console.log("🚀 ~ file: SingleProductOne.js:17 ~ combinationFullData:", combinationFullData);
    return (
        <div className="">
            <div className='max-w-5xl mx-auto'>
                {
                    combinedData.length > 0 && combinedData.map((item) => {
                        return (
                            <div key={item.ids} className=''>
                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    <div className="">
                                        <Image
                                            src={item.imgs}
                                            alt={item.titles}
                                            width={800}
                                            height={400}
                                            className='object-contain w-96 h-96 bg-white'
                                        />
                                    </div>
                                    <div className="space-y-5">
                                        <h1 className='text-3xl font-bold'>{item.titles} </h1>
                                        <p className='text-gray-600'>{item.descs} </p>
                                        <p className='text-xl'><span >Price :</span> $ {item.prices} </p>
                                        <p className='text-xl'><span >Category :</span> {item.category} </p>
                                        <Star star={item.rating} />
                                        <div className='flex justify-between'>
                                            <button type="button" className='px-3 py-1 bg-green-700 text-white rounded-sm hover:bg-orange-600 transition-colors  duration-300 ease-linear' onClick={()=>{
                                                return dispatch(addToCart({
                                                    id:item.ids,
                                                    img:item.imgs,
                                                    title:item.titles,
                                                    desc:item.descs,
                                                    category:item.category,
                                                    price:item.prices,
                                                    qty:1,
                                                }))
                                            }}>Add to cart</button>
                                            <button type="button" className='px-3 py-1 bg-green-700 text-white rounded-sm hover:bg-orange-600 transition-colors  duration-300 ease-linear'>Wishlist</button>
                                        </div>
                                    </div>
                                </div>

                                <h1 className='text-4xl font-semibold pt-20 pb-10'>Similar Products</h1>
                                <div className='grid w-full min-h-screen grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 '>
                                    {

                                        combinationFullData.filter((value) => value.category === item.category).map((item) => {
                                            return (
                                                <ProductItem key={item.ids} value={item} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
