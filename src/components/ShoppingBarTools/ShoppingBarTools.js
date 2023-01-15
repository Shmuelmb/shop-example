import React from "react";
import Filter from "./Filter/Filter";
import Sort from "./Sort/Sort";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import "./ShoppingBarTools.css";
const ShoppingBarTools = () => {
  return (
    <div className="ShoppingBarTools">
      <Filter />
      <Sort />
      <ShoppingCart />
    </div>
  );
};

export default ShoppingBarTools;
