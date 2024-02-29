import SingleProductOne from '@/components/singlepage/SingleProductOne';
import { product } from '@/data';
import Image from 'next/image';
import React from 'react'

export default function SingleProduct({ params }) {
    console.log(params.id);
    return (
       <SingleProductOne params={params.id} />
    )
}
