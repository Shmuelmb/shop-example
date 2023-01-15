import React, { useState, useEffect } from "react";
import "./ProductPage.css";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productid } = useParams();
  const [product, setProduct] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productid}`
      );
      const data = await response.json();
      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [product]);

  return (
    <div className="ProductPage">
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <h3>${product.price}</h3>
    </div>
  );
};

export default ProductPage;
