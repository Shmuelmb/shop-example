import React, { useEffect, useState } from "react";
import "./Products.css";
import Product from "./Product/Product.js";
import { useContext } from "react";
import MyContext from "../../MyContext";
import Loading from "../Loading/Loading";

const sortedProductsPriceHigh2Low = (x) => {
  x.sort((p1, p2) => (p1.price < p2.price ? 1 : p1.price > p2.price ? -1 : 0));
};
const sortedProductsPriceLow2High = (x) => {
  x.sort((p1, p2) => (p1.price < p2.price ? -1 : p1.price > p2.price ? 1 : 0));
};
// const sortedProductByCategory = (x) => x.sort((p1, p2) => p1.id - p2.id);   this is the old style of sort

const Products = () => {
  const {
    loading,
    products,
    choosenSortPrice,
    isChoosenSortH2L,
    searchValue,
    setPriceList,
    productsFilter,
    setProductsFilter,
  } = useContext(MyContext);

  useEffect(() => {
    //ACTIONS FOR sortByPrice
    const priceListLocal = products.filter(
      (ev) => ev.price >= choosenSortPrice[0] && ev.price <= choosenSortPrice[1]
    );
    setProductsFilter(priceListLocal);

    //Actions for High to low button
    if (isChoosenSortH2L === false) {
      sortedProductsPriceLow2High(productsFilter);
    } else if (isChoosenSortH2L) {
      sortedProductsPriceHigh2Low(productsFilter);
    }

    //Actions for search bar
    if (searchValue.length > 0) {
      const titlePrice = [...productsFilter].filter((ev) =>
        ev.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setProductsFilter(titlePrice);
    }
  }, [choosenSortPrice, isChoosenSortH2L, products, searchValue]);

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
            id={event._id}
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
