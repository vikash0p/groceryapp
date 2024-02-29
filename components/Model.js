"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {AiOutlineClose} from 'react-icons/ai';

const Model = ({ isOpen, onClose, value  }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed top-10 left-5 right-5 z-50 md:left-24 md:right-24 bottom-10 bg-gray-200 rounded-2xl overflow-y-scroll  ">
                    <div className='relative'>
                        <button type="button" className='absolute top-3 right-5 text-2xl p-3 bg-[#3bb77e] rounded-full text-white ' onClick={onClose}><AiOutlineClose/> </button>
                    </div>
                    <div className='p-5 mt-12  flex flex-col  gap-5 justify-center items-center'>
                        <Image src={value.imgs} alt='images' width={300} height={300} />
                        <h1 className='text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti adipisci atque eum totam, a commodi accusantium molestiae reiciendis minima eius, tenetur, doloribus sit voluptates incidunt corporis cumque vel recusandae. Aut.</h1>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Model;
