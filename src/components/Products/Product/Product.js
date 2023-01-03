import React from "react";
import "./Product.css";
import Buybtn from "./btns/Buybtn.js";
import Addbtn from "./btns/Addbtn.js";

const Product = ({ Urlimage, title, price, category }) => {
  return (
    <div className="product" category={category}>
      <img src={Urlimage} alt={title} />
      <div className="text">
        <p>{title}</p>
        <p>${price}</p>
      </div>
      <div className="btn">
        <Buybtn />
        <Addbtn />
      </div>
    </div>
  );
};

export default Product;
