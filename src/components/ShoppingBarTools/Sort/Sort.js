import React, { useContext } from "react";
import MyContext from "../../../MyContext";
import "./Sort.css";

const Sort = () => {
  const { setChoosenSort } = useContext(MyContext);
  return (
    <div className="collection-sort">
      <label>Sort by:</label>
      <select onChange={(x) => setChoosenSort(x.target.value)}>
        <option value="Price: Low - High">Price: Low - High </option>
        <option value="Price: High - Low">Price: High - Low </option>
        <option value="Category">Category</option>
      </select>
    </div>
  );
};

export default Sort;
