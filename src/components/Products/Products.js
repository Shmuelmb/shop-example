import React from "react";
import "./Products.css";
import Product from "./Product/Product.js";
import { useContext } from "react";
import MyContext from "../../MyContext";
import Loading from "../Loading/Loading";

const sortedProductsPriceHigh2Low = (x) =>
  x.sort((p1, p2) => (p1.price < p2.price ? 1 : p1.price > p2.price ? -1 : 0));
const sortedProductsPriceLow2High = (x) =>
  x.sort((p1, p2) => (p1.price < p2.price ? -1 : p1.price > p2.price ? 1 : 0));
const sortedProductByCategory = (x) => x.sort((p1, p2) => p1.id - p2.id);

const Products = ({ choosenSort, products }) => {
  const { loading } = useContext(MyContext);

  if (choosenSort === "Price: Low - High") {
    sortedProductsPriceLow2High(products);
  } else if (choosenSort === "Price: High - Low") {
    sortedProductsPriceHigh2Low(products);
  } else {
    sortedProductByCategory(products);
  }
  return !loading ? (
    <div className="products">
      {products.map(function (event, index) {
        return (
          <Product
            category={event.category}
            key={index + 10}
            title={event.title}
            price={event.price}
            Urlimage={event.image}
          />
        );
      })}
    </div>
  ) : (
    <div>
      <Loading />
    </div>
  );
};

export default Products;
