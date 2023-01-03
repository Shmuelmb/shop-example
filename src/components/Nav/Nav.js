import React from "react";
import "./Nav.css";
import Sort from "./Sort/Sort.js";
import Filter from "./Filter/Filter.js";

const Nav = ({ setChoosenSort, categories, onFilterChange }) => {
  return (
    <nav className="product-filter">
      <h1>Shop online</h1>
      <div className="sort">
        <Filter onFilterChange={onFilterChange} categories={categories} />
        <Sort setChoosenSort={setChoosenSort} />
      </div>
    </nav>
  );
};

export default Nav;
