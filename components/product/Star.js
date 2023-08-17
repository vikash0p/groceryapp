import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'


const Star = ({ star }) => {

  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <>
        {
          star >= index ? <BsStarFill /> : star >= number ? <BsStarFill /> : <BsStar />
        }
      </>
    )

  })
  return (
    <div className=''>
      <h1 className='flex flex-row  mt-3 text-yellow-500'>{ratingStar} </h1>
    </div>
  )
}

export default Star
