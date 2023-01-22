import React from "react";
import "./Filter.css";
import MyContext from "../../../MyContext";
import { useContext, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

const Filter = () => {
  const { onFilterChange, categories } = useContext(MyContext);
  const [label, setLabel] = useState(categories[0]);
  const handleChange = (event) => {
    setLabel(event.target.value);
  };
  return (
    <div className="collection-sort">
      <InputLabel>Filter by:</InputLabel>
      <Select
        onChange={(event) => {
          handleChange(event);
          onFilterChange(event);
        }}
        value={label}
        className="filter">
        {categories.map((i, index) => (
          <MenuItem value={i} key={index}>
            {i}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};
export default Filter;
