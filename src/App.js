import "./App.css";
import ProductsInfo from "./pages/ProductList";
import Home from "./pages/Home";
import { GlobalProvider } from "./context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import CartItems from "./components/CartItems";
import axios from "axios";
// import dotenv from "dotenv";
function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(null);

  const loadData = () => {
    console.log("ggg", process.env.REACT_APP_BASE_API_URL);
    axios
      .get(`${process.env.REACT_APP_BASE_API_URL}/product?page=${page}`)
      .then(({ data: newData }) => {
        setTotal(newData.pagination.total);
        let products = [...data];
        products.push(...newData.data);
        setData(products);
      });
  };

  useEffect(() => {
    loadData();
  }, [page]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <GlobalProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Home data={data} loadMore={loadMore} total={total} />}
            />
            <Route path="/cart-item" element={<CartItems />} />
            <Route path="/product/:id" element={<ProductsInfo data={data} />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
