"use client"
import { product } from '@/data'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
// console.log(product);
import { AiOutlineShoppingCart, AiOutlineEye } from "react-icons/ai";
import { Model, Star } from '../index'
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import ProductItem from './ProductItem';

const Product = () => {
    const [products, setProducts] = useState("All");
    const [selected, setSelect] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pathname = usePathname();
    const [query, setQuery] = useState('');

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const uniqeData = (data, cat) => {
        let newData = data.map((value, index) => {
            return value[cat];
        });
        return (newData = ["All", ...new Set(newData)]);
    }
    const categroydata = uniqeData(product, "category");


    function filterProductData(product, pro, query) {

        if (query) {
            return product.filter((item) => {
                const queryItem = item.category.toLowerCase().includes(query.toLowerCase()) || item.titles.toLowerCase().includes(query.toLowerCase());
                return queryItem
            })
        }

        if (pro ) {
            return product.filter((item) => {
                return pro === 'All' || item.category === pro;
            })
        }



    }

    const filteredProducts = filterProductData(product, products, query)

    const clickHander = (value, index) => {
        setProducts(value);
        setSelect(index)
    }
    return (
        <div className='px-3'>
            {/* All product and category */}
            <div className='px-5 py-8 flex flex-col md:flex-row md:justify-between items-center '>
                <h1 className='text-2xl md:text-3xl font-semibold'>{pathname === '/shop' ? "All Products" : "Popular Products"}</h1>
                <div className='flex flex-col flex-wrap md:flex-row items-center gap-2 md:gap-6 text-lg font-semibold cursor-pointer'>
                    {
                        categroydata.map((value, index) => {
                            return (
                                <h1 key={index} className={`transition-transhtmlForm hover:-translate-y-1 hover:text-[#3bb77e] ${selected == index ? " text-[#3bb77e] " : " "}`} onClick={() => clickHander(value, index)} >{value} </h1>
                            )
                        })
                    }
                </div>
            </div>
            {/* search bar */}
            <div className='px-5'>
                <input
                    type="search"
                    name="search"
                    id="search"
                    className='w-full lg:w-1/2 h-10 rounded-md border  my-4 px-5 border-[#3bb77e]'
                    placeholder='Search Product'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)} />
            </div>
            <div>
                {
                    filteredProducts.length === 0 ? (
                        <div className='w-full min-h-screen flex flex-col items-center pt-14'>
                            <h1 className='text-4xl '>No Product found !</h1>
                            <Link href={"/"} className='text-2xl bg-green-700 text-white px-4 py-2 rounded-sm'>Go to home page</Link>
                        </div>
                    ) : (
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:px-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 xl:gap-5 '>
                            {
                                filteredProducts.map((value, index) => {
                                    return (
                                            <ProductItem value={value} key={value.ids} />
                                    )
                                })
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Product
