import React from 'react'
import './Product.css'
import Buybtn from './btns/Buybtn.js'
import Addbtn from './btns/Addbtn.js'
const Product = ({image, title,price}) => {
  return (
    <div className="product">
      <img
      src={image}
      alt = 'k'/>
      <div className="text">
        <p>{title}</p>
        <p>${price}</p>
      </div>
      <div className='btn'>
        <Buybtn/>
        <Addbtn/>
      </div>

  </div>
  )
}

export default Product