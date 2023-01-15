import React, { useContext } from "react";
import MyContext from "../../../MyContext";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const { cartList, setCartList } = useContext(MyContext);
  const removeAmount = (arr, setArr, eventOfClick) => {
    const newArr = [...arr];
    const clickID = eventOfClick.target.id;
    newArr.map((ev) => ev.id === parseInt(clickID) && ev.Amount--);
    setArr(newArr);
  };
  const l = [];
  for (let i = 0; i < cartList.length - 1; i++) {
    cartList[i].Amount > 0 && l.push(cartList[i]);
  }

  console.log(l);
  return (
    <div className="shoppingCart">
      {l.map((item, index) => (
        <div key={index} className="itemInCart">
          <p>{item.title}</p>
          <p className="p2"> Amount: {item.Amount}</p>
          <button
            id={item.id}
            onClick={(event) => removeAmount(cartList, setCartList, event)}>
            -
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
