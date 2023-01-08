import React, { useContext } from "react";
import MyContext from "../../../../MyContext";
import "./btn.css";

const Addbtn = ({ id }) => {
  const addAmount = (arr, setArr, eventOfClick) => {
    const newArr = [...arr];
    const clickID = eventOfClick.target.id;
    newArr.map((ev) => ev.id === parseInt(clickID) && ev.Amount++);
    setArr(newArr);
  };
  const { setCartList, cartList } = useContext(MyContext);

  return (
    <button
      id={id}
      onClick={(event) => addAmount(cartList, setCartList, event)}
      className="btn addBtn">
      Add to cart
    </button>
  );
};

export default Addbtn;
