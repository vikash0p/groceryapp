import AboutHeader from '@/components/about/AboutHeader'
import React from 'react'

export const metadata = {
  title: 'About Grocery',
  description: 'A grocery store is a retail establishment that sells a wide variety of food and household products to consumers.These stores typically offer fresh produce, meats, dairy products, canned goods, snacks, beverages, and cleaning supplies.Customers visit groceries regularly for their everyday shopping needs.'

}

export default function About() {
  return (
    <div className='w-full min-h-screen justify-center items-center flex'>
      <AboutHeader />
    </div>
  )
}
