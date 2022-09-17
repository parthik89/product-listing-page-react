import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./Components/Filter";
import Header from "./Components/Header";
import Product from "./Components/Product";
import axios from "axios";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import DataLoading from "./Components/DataLoading";
import ThankYou from "./Components/ThankYou";

function App() {
  const [{ products, cate, tit, searchItem }, dispatch] = useStateValue();

  const fetchdata = async () => {
    const { data } = await axios
      .get("https://dummyjson.com/products")
      .catch((err) => {
        console.log(err);
      });

    dispatch({
      type: "PRODUCTS",
      payload: data.products,
    });
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={[
              <Filter />,
              <div className="body">
                <Header />{" "}
              </div>,
              <div className="body">
                <DataLoading />
              </div>,
            ]}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>

          <Route path="/ThankYou" element={<ThankYou />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
