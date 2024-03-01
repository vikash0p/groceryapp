import { icons } from '@/data'
import React from 'react'
import Image from 'next/image'

// console.log(icons);
const AllIcons = () => {
    return (
        <div className='w-full px-3 gap-4 mb-9  h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 justify-between items-center '>
            {
                icons.map((value) => {
                    return (
                        <div key={value.id} className='bg-[#f4f6fa] w-full h-32 p-8 flex flex-row justify-between items-center gap-3 rounded-2xl '>
                            <Image
                                src={value.imgs}
                                alt={value.title}
                                width={70}
                                height={70}
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div>
                                <h3 className='text-lg font-semibold'>{value.title} </h3>
                                <h3 className='text-[#adadad] '>{value.des} </h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllIcons
