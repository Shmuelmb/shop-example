import React from "react";
import "./Filter.css";
import MyContext from "../../../MyContext";
import { useContext } from "react";


const Filter = () => {
  const { onFilterChange, categories } = useContext(MyContext);
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
