import React from "react";
import "./Nav.css";
import Sort from "./Sort/Sort.js";
import Filter from "./Filter/Filter.js";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const Nav = () => {
  return (
    <nav className="nav">
      <h1>Shop online</h1>
      <Filter />
      <Sort />
      <ShoppingCart />
    </nav>
  );
};

export default Nav;
