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
// const sortedProductByCategory = (x) => x.sort((p1, p2) => p1.id - p2.id);   this is the old style of sort

const Products = () => {
  const { loading, products, choosenSortPrice, choosenSort } =
    useContext(MyContext);

  const productsFilter = products.filter(
    (ev) => ev.price >= choosenSortPrice[0] && ev.price <= choosenSortPrice[1]
  );

  if (choosenSort === "h2l") {
    sortedProductsPriceHigh2Low(productsFilter);
  } else if (choosenSort === "l2h") {
    sortedProductsPriceLow2High(productsFilter);
  }
  console.log(productsFilter);
  return !loading ? (
    <div className="products">
      {productsFilter.map((event, index) => {
        return (
          <Product
            category={event.category}
            key={index + 10}
            title={event.title}
            price={event.price}
            Urlimage={event.image}
            id={event.id}
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
