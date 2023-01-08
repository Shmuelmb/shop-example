import "./App.css";
import Nav from "./components/Nav/Nav.js";
import Products from "./components/Products/Products.js";
import { useState, useEffect } from "react";
import MyContext from "./MyContext";

function App() {
  // useState object
  const [choosenSort, setChoosenSort] = useState("");
  const [products, setProducts] = useState([]); // המוצרים עם השינויים שלהם
  const [allProducts, setAllProducts] = useState([]); // רשימת המוצרים ללא שינוים עליהם
  const [loading, setLoading] = useState(false);
  const [cartList, setCartList] = useState([]);

  // func
  const onFilterChange = (e) => {
    if (e.target.value === "All categories") {
      setProducts(allProducts);
    } else {
      setProducts(allProducts.filter((p) => p.category === e.target.value));
    }
  };

  function addKeyForObjState(arr, setArr, key, value, data) {
    const newArr = [...data];
    newArr.map((ev) => (ev[key] = value));
    setArr(newArr);
  }

  const createCategories = (arrayOfProcuts) =>
    arrayOfProcuts
      .map((p) => p.category)
      .filter((value, index, array) => array.indexOf(value) === index);

  // get data from api
  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setAllProducts(data);
      setProducts(data);
      addKeyForObjState(cartList, setCartList, "Amount", 0, data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(cartList);
  }, [cartList]);

  const categories = createCategories(allProducts);
  categories.unshift("All categories");
  return (
    <MyContext.Provider
      value={{
        products,
        loading,
        cartList,
        setCartList,
        categories,
        choosenSort,
        onFilterChange,
        setChoosenSort,
        allProducts,
        addKeyForObjState,
      }}>
      <div className="App">
        <Nav />
        <Products />
      </div>
    </MyContext.Provider>
    //  ללהוסיף כאן מייקונטקס ולשלוח את לואדינג לפרודוקס ושם לעשות תנאי ולבדוק את לואדינג אם הוא טרו אז להוסיף את הלואדינג המסתובב
  );
}

export default App;
