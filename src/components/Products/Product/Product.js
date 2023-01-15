import React from "react";
import "./Product.css";
import Buybtn from "./btns/Buybtn.js";
import Addbtn from "./btns/Addbtn.js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../../../MyContext";

const Product = ({ id, Urlimage, title, price, category }) => {
  const navigate = useNavigate("products");
  const { setProductID } = useContext(MyContext);
  return (
    <div className="product" category={category}>
      <img
        onClick={() => {
          navigate(`${id}`);
          setProductID(id);
        }}
        src={Urlimage}
        alt={title}
      />
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
