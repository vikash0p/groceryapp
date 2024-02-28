import { blogApi } from '@/data'
import Image from 'next/image'
import React from 'react'

export default function SinglePage({ params }) {
    console.log(params.id)
    return (
        <div className='max-w-5xl m-auto'>
            {
                blogApi.filter((value) => value.id == params.id).map((value, indx) => {
                    return (
                        <div className=" w-full flex flex-col gap-7  py-10" key={indx}>
                            <h1 className='text-3xl font-bold'>{value.title1} </h1>
                            <div className="space-x-4">
                                <span className=""> Sep 08, 2022</span>
                                <span className=""> 1 comment</span>
                            </div>
                            <Image
                                src={value.img1}
                                alt={value.title1}
                                width={800}
                                height={700}
                                priority
                                className='w-full h-[450px] object-cover'
                                sizes="(min-width: 1080px) 1024px, 95.26vw"
                            />
                            <h3 className='text-2xl font-semibold'>{value.desc} </h3>
                            <h3 className='t text-gray-600'>{value.para1} </h3>
                            <h3 className='t text-gray-600'>{value.para2} </h3>
                            <h2 className='text-3xl font-bold'>{value.title2} </h2>
                            <h2 className='text-2xl font-semibold'>{value.para3} </h2>
                            <Image
                                src={value.img2}
                                alt={value.desc}
                                width={450}
                                height={450}
                                className='w-full h-80 object-cover  '
                                sizes="(min-width: 1080px) 1024px, 95.26vw"

                            />
                            <p className='text-gray-600'>{value.para4} </p>
                            <p className='text-gray-600'>{value.para5} </p>

                        </div>
                    )
                })
            }
        </div>
    )
}
