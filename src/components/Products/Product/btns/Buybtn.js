import React from "react";
import "./btn.css";
const Buybtn = ({ title, id }) => {
  return (
    <button name={title} id={id} className="btn buyBtn">
      Buy Now!
    </button>
  );
};

export default Buybtn;
