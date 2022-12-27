import React from 'react'
import './Sort.css'
const Sort = () => {
    return (
        <div className="collection-sort">
            <label>Filter by:</label>
            <select>
            <option value="/">All Jackets</option>
            <option value="/">2016</option>
            <option value="/">jacket</option>
            <option value="/">Jackets</option>
            <option value="/">layers</option>
            <option value="/">Obermeyer</option>
            <option value="/">Roxy</option>
            <option value="/">womens</option>
            </select>
        </div>
    )  
}

export default Sort