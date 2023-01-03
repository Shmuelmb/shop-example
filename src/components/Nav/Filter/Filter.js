import React from "react";
import "./Filter.css";

const Filter = ({ categories, onFilterChange }) => {
  return (
    <div className="collection-sort">
      <label>Filter by:</label>
      <select onChange={onFilterChange}>
        {categories.map((i, index) => (
          <option value={i} key={index}>
            {i}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Filter;
