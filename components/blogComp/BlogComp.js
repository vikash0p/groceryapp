import { blogApi } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BlogComp() {
    return (
        <div className='w-full flex flex-col lg:flex-row '>
            {/* section 1 */}
            <div className="basis-[75%] space-y-6 rounded-xl ps-4">
                {
                    blogApi.map((value, index, arr) => {
                        return (

                            <div key={index} className="flex flex-col lg:flex-row gap-4 bg-gray-100 rounded-lg ">
                                <Image
                                    className="object-cover w-96 h-80 rounded-ss-lg"
                                    src={value.img1}
                                    alt={value.title1}
                                    width={400}
                                    height={400}
                                    sizes="(min-width: 440px) 384px, calc(83.33vw + 34px)"

                                />
                                <div className="flex flex-col gap-5 pt-10  leading-normal">
                                    <h5 className="text-3xl font-bold">{value.title1}</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{value.desc} </p>
                                    <div className="flex justify-between px-3">
                                        <div className="flex gap-5">
                                            <div className="">sep 08, 2022</div>
                                            <div className="">1 comment </div>
                                        </div>
                                        <div className="">
                                            <Link href={`/blog/${value.id}`} className='text-xl'>Read more ➡️</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
            {/*section 2 */}
            <div className='basis-[25%]'>

            </div>
        </div>
    )
}
