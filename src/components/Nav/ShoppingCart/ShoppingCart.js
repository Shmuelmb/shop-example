import React, { useContext, useEffect } from "react";
import MyContext from "../../../MyContext";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const { cartList, setCartList } = useContext(MyContext);
  const removeAmount = (arr, setArr, eventOfClick) => {
    const newArr = [...arr];
    const clickID = eventOfClick.target.id;
    newArr.map((ev) => {
      if (ev.id === parseInt(clickID)) {
        ev.Amount--;
        if (ev.Amount === 0) {
          ev.DateCreated = 0;
        }
      }
    });
    setArr(newArr);
  };
  const cartListCopy = [];
  cartList.map((i) => {
    if (i.Amount > 0) {
      cartListCopy.push(i);
      if (i.DateCreated === 0) {
        i.DateCreated = Date.now();
      }
    }
  });
  useEffect(() => {
    console.log(cartListCopy);
  }, [cartListCopy]);

  cartListCopy.sort((a, b) => a.DateCreated - b.DateCreated);

  return (
    <div className="shoppingCart">
      {cartListCopy.map((item, index) => (
        <div key={index} className="itemInCart">
          <img src={item.image} alt={item.title} />
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
