import { product } from '@/data'
import Image from 'next/image'
import React from 'react'
import Star from '../product/Star'
import ProductItem from '../product/ProductItem'

export default function SingleProductOne({ params }) {
    return (
        <div className="">
            <div className='max-w-5xl mx-auto'>
                {
                    product.filter((value) => value.ids === params).map((item) => {
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
                                            <button type="button" className='px-3 py-1 bg-gray-700 text-white rounded-sm'>Add to cart</button>
                                            <button type="button" className='px-3 py-1 bg-gray-700 text-white rounded-sm'>Wishlist</button>

                                        </div>
                                    </div>
                                </div>

                                <h1 className='text-4xl font-semibold pt-20 pb-10'>Similar Products</h1>
                                <div className='grid w-full min-h-screen grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 '>
                                    {
                                        product.filter((value)=>value.category === item.category).map((item)=>{
                                            return(
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
