import "./App.css";
import Nav from "./components/Nav/Nav.js";
import Products from "./components/Products/Products.js";
import { useState, useEffect } from "react";
import MyContext from "./MyContext";

function App() {
  const [choosenSort, setChoosenSort] = useState("");
  const [products, setProducts] = useState([]); // המוצרים עם השינויים שלהם
  const [allProducts, setAllProducts] = useState([]); // רשימת המוצרים ללא שינוים עליהם
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setAllProducts(data);
      setProducts(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const categories = allProducts
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);
  categories.unshift("All categories");

  const onFilterChange = (e) => {
    if (e.target.value === "All categories") {
      setProducts(allProducts);
    } else {
      setProducts(allProducts.filter((p) => p.category === e.target.value));
    }
  };

  return (
    <MyContext.Provider value={{ loading }}>
      <div className="App">
        <Nav
          onFilterChange={onFilterChange}
          setChoosenSort={setChoosenSort}
          categories={categories}
        />
        <Products
          products={products}
          choosenSort={choosenSort}
          categories={categories}
        />
      </div>
    </MyContext.Provider>
    //  ללהוסיף כאן מייקונטקס ולשלוח את לואדינג לפרודוקס ושם לעשות תנאי ולבדוק את לואדינג אם הוא טרו אז להוסיף את הלואדינג המסתובב
  );
}

export default App;
