import Image from 'next/image'
import React from 'react'
import Star from './Star'
import Link from 'next/link'

export default function ProductItem({ value }) {

    const { rating } = value
    const styles = `absolute top-0 left-0 pt-1 px-3 py-1 rounded-tl-2xl  rounded-br-2xl text-base text-white text-center`;

    return (
        <div
            key={value.ids}
            className='max-w-sm px-2 md:px-0 border border-gray-300 rounded-2xl h-[420px] lg:min-w-[250px] xl:w-[245px] md:w-64  relative' >
            {
                rating <= 2 ? (<h1 className={` bg-[#3bb77e] ${styles} `}>save 35%</h1>) : rating <= 3 ? (<h1 className={` bg-pink-500 ${styles} `} >save 15%</h1>) : rating <= 4 ? (<h1 className={` bg-blue-400 ${styles} `}>Sale</h1>) : (<h1 className={` bg-orange-400 ${styles} `}>Best Sale</h1>)
            }
            {/* <div className=' absolute top-10 left-3 right-3 border border-green-300  rounded-2xl bg-opacity-80 flex flex-row justify-center items-center gap-5 h-32 bg-[#3bb77e] transition ease-linear duration-300 opacity-0 hover:opacity-100 '>
                                                <Link href={`/${value.ids}`} className='bg-green-300 px-2 py-1 rounded-sm '>
                                                    <button type='button' onClick={openModal} className="text-2xl "><AiOutlineEye /> </button>

                                                </Link>

                                                <Image src={"/logo/icon-heart.svg"} alt='icon ' width={25} height={25} />
                                                <Image src={"/logo/icon-compare.svg"} alt='icon ' width={25} height={25} />
                                            </div>
                                            <Model isOpen={isModalOpen} onClose={closeModal} value={value} /> */}
            <Image
                src={value.imgs}
                className='mx-auto object-contain'
                alt={value.descs}
                width={200}
                height={200}
                priority
                sizes="200px"
            />
            <div className='px-5'>
                <h5 className='text-gray-400'>{value.titles} </h5>
                <h5 className=''>{value.category} </h5>
                <h1 className='font-semibold hover:text-[#3bb77e]  '>{value.descs.substring(0, 50)} </h1>
                <Star star={rating} key={value.ids} />
                <div className='flex flex-row justify-between items-center mt-8'>
                    <h4 className=' text-[#3bb77e]  '>$ {value.prices} </h4>
                    {/* <div className='flex group hover:bg-orange-400 transition duration-150 ease-in flex-row items-center gap-2 bg-[#3bb77e] text-white text-base px-3 py-1 rounded-md  cursor-pointer'>
                                                        <AiOutlineShoppingCart className='group-hover:translate-x-1 transition duration-150 ease-linear' />
                                                        <button type="button">cart</button>
                                                    </div> */}
                    <Link href={`/${value.ids}`} className='bg-green-300 px-2 py-1 rounded-sm hover:bg-orange-500 hover:text-white transition-colors '>view</Link>
                </div>
            </div>
        </div>
    )
}
