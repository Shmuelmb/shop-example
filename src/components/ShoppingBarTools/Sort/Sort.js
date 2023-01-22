import React, { useContext, useEffect, useState } from "react";
import MyContext from "../../../MyContext";
import "./Sort.css";
import Slider from "@mui/material/Slider";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";

const Sort = () => {
  const { setChoosenSortPrice, priceList, setChoosenSort } =
    useContext(MyContext);

  const minDistance = priceList[0];
  const maxDistance = priceList[priceList.length - 1];
  const [value, setValue] = useState([200, 500]);
  return (
    <div className="collection-sort">
      <InputLabel>Sort by price:</InputLabel>
      <Slider
        value={value} // הערך שכרגע אני נמצא שם
        onChange={(event) => {
          setValue(event.target.value); // משנה כל רגע את הערך לפי הלחיצות שלי
          setChoosenSortPrice(event.target.value);
        }}
        valueLabelDisplay="auto" // מראה את המספר שאני נמצא בו
        min={minDistance}
        max={maxDistance}
      />
      <Button onClick={() => setChoosenSort("h2l")}>High to Low</Button>
      <Button onClick={() => setChoosenSort("l2h")}>Low to High</Button>
    </div>
  );
};

export default Sort;
