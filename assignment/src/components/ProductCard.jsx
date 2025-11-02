
import React from 'react'

const ProductCard = (props) => {
  return (
    <div className='single-product'> 
        <img src={props.image} alt={props.name} className='product-image'/>
        <p className='product-type'>{props.name}</p>
    </div>
  )
}

export default ProductCard