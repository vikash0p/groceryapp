import { Product } from '@/components'
import React from 'react'

export const metadata = {
  title: 'products grocery',
  description: "Grocery stores, the quintessential lifelines of households, offer an array of essentials ranging from fresh produce to pantry staples. With aisles brimming with options, they cater to diverse culinary needs, ensuring convenience and sustenance for communities worldwide."

}
export default function Shop() {
  return (
    <div className=''>
        <Product />
    </div>
  )
}
