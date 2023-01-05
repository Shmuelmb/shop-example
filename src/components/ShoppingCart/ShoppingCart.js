import React, { useContext } from "react";
import MyContext from "../../MyContext";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const { cartList, setCartList } = useContext(MyContext);
  const removeAmount = (arr, setArr, eventOfClick) => {
    const newArr = [...arr];
    const clickID = eventOfClick.target.id;
    newArr.map((ev) => ev.id === parseInt(clickID) && ev.Amount--);
    setArr(newArr);
  };

  return (
    <div className="shoppingCart">
      {cartList.map(
        (item, index) =>
          item.Amount > 0 && (
            <div key={index} className="itemInCart">
              <p>
                {item.title} Amount: {item.Amount}
              </p>
              <button
                id={item.id}
                onClick={(event) => removeAmount(cartList, setCartList, event)}>
                -
              </button>
            </div>
          )
      )}
    </div>
  );
};

export default ShoppingCart;
