import React from "react";
import "./ShopMain.css";
import Products from "../Products/Products";
import ShoppingBarTools from "../ShoppingBarTools/ShoppingBarTools";
const ShopMain = () => {
  return (
    <div className="ShopMain">
      <Products />
      <ShoppingBarTools />
    </div>
  );
};

export default ShopMain;
