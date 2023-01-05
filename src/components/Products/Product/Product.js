import React from "react";
import "./Product.css";
import Buybtn from "./btns/Buybtn.js";
import Addbtn from "./btns/Addbtn.js";

const Product = ({ id, Urlimage, title, price, category }) => {
  return (
    <div className="product" category={category}>
      <img src={Urlimage} alt={title} />
      <div className="text">
        <p>{title}</p>
        <p>${price}</p>
      </div>
      <div className="btns">
        <Buybtn title={title} id={id} />
        <Addbtn id={id} />
      </div>
    </div>
  );
};

export default Product;
