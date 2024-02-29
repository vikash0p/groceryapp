import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'


const Star = ({ star }) => {

  const ratingStar = Array.from({ length: 5 }, (elem, index) => {

    return star >= index + 1 ? <BsStarFill /> : star >= index + 0.5 ? <BsStarHalf /> : <BsStar />


  })
  return (
    <div className=''>
      <h1 className='flex flex-row gap-1 text-lg  mt-3 text-yellow-500'>{ratingStar} </h1>
    </div>
  )
}

export default Star
