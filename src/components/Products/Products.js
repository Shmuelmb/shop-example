import React from 'react'
import './Products.css'
import Product from './Product/Product.js'
import Data from '../../data/Data.js'
const Products = () => {
  return (
        <div className="products">
          {Data.map((event)=>
            <Product image={event.image} title={event.title} price={event.price}/>
          )}


        </div>
  )
}

export default Products