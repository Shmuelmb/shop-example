import "./App.css";
import { useState } from "react";
import MyContext from "./MyContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopMain from "./components/ShopMain/ShopMain";
import NotFound from "./components/NotFound/NotFound";
import AboutMe from "./components/AboutMe/AboutMe";
import Nav from "./components/Nav/Nav";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import ProductPage from "./components/ProductPage/ProductPage";

function App() {
  // useState object
  const [choosenSort, setChoosenSort] = useState("");
  const [products, setProducts] = useState([]); // המוצרים עם השינויים שלהם
  const [allProducts, setAllProducts] = useState([]); // רשימת המוצרים ללא שינוים עליהם
  const [loading, setLoading] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [productID, setProductID] = useState("");

  // func
  const onFilterChange = (e) => {
    if (e.target.value === "All categories") {
      setProducts(allProducts);
    } else {
      setProducts(allProducts.filter((p) => p.category === e.target.value));
    }
  };

  const addKeyForObjState = (setArr, key, value, data) => {
    const newArr = [...data];
    newArr.map((ev) => (ev[key] = value));
    setArr(newArr);
  };

  const createCategories = (arrayOfProcuts) =>
    arrayOfProcuts
      .map((p) => p.category)
      .filter((value, index, array) => array.indexOf(value) === index);

  const categories = createCategories(allProducts);
  categories.unshift("All categories");

  return (
    <BrowserRouter>
      <MyContext.Provider
        value={{
          addKeyForObjState,
          setProducts,
          setAllProducts,
          setLoading,
          productID,
          setProductID,
          products,
          loading,
          cartList,
          setCartList,
          categories,
          choosenSort,
          onFilterChange,
          setChoosenSort,
          allProducts,
        }}>
        <Nav />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="products" element={<ShopMain />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="products/:productid" element={<ProductPage />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
