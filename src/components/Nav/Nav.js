import React from 'react'
import './Nav.css'
import Sort from './Sort/Sort.js'
import Filter from './Filter/Filter.js'
const Nav = () => {
    return (
        <nav className = "product-filter" >
        <h1>Jackets</h1>
        <div className = "sort" >
            <Filter />
            <Sort />
        </div>
      </nav>
    )


}

export default Nav