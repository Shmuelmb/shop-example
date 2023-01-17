import React from "react";
import "./ShopMain.css";
import Products from "../Products/Products";
import ShoppingBarTools from "../ShoppingBarTools/ShoppingBarTools";
import MyContext from "../../MyContext";
import { useContext, useEffect } from "react";
const ShopMain = () => {
  const {
    setLoading,
    setCartList,
    setAllProducts,
    setProducts,
    addKeyForObjState,
  } = useContext(MyContext);
  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setAllProducts(data);
      setProducts(data);
      addKeyForObjState(setCartList, "Amount", 0, data);
      addKeyForObjState(setCartList, "DateCreated", 0, data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="ShopMain">
      <Products />
      <ShoppingBarTools />
    </div>
  );
};

export default ShopMain;
