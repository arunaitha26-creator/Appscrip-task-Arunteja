import React from 'react'
import {menData} from '../data/men'
import ProductCard from './ProductCard'


const Images = () => {
    

  return (
    <div className='images-container'>
        {
            menData.map((item) => {
                return(
                   <ProductCard image={item.image} name={item.type} />
                )
            })
        }
    </div>
  )
}

export default Images