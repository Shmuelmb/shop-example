import React, { useContext } from "react";
import MyContext from "../../../../MyContext";
import "./btn.css";

const Addbtn = ({ id }) => {
  const { setCartList, cartList } = useContext(MyContext);

  const addAmount = (arr, setArr, eventOfClick) => {
    const newArr = [...arr];
    const clickID = eventOfClick.target.id;
    newArr.map((ev) => {
      if (ev.id === parseInt(clickID)) {
        ev.Amount++;
        // הבעיה עם זה שכשאני יוסיף עוד פריט לרשימה מה שיקרה זה שהמוצר יעבור לסוף הרשימה ואני לא רוצה א זה
      }
    });
    setArr(newArr);
  };

  return (
    <button
      id={id}
      onClick={(event) => {
        addAmount(cartList, setCartList, event);
      }}
      className="btn addBtn">
      Add to cart
    </button>
  );
};

export default Addbtn;
