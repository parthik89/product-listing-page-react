import React, { useState } from "react";
import { useStateValue } from "../StateProvider";
import axios from "axios";
import Product from "./Product";
import "./Filter.css";
import UndoIcon from "@mui/icons-material/Undo";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";

function Filter() {
  const [search, setSearch] = useState("");

  const [{ products, cate, tit, searchItem }, dispatch] = useStateValue();
  const categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
  ];

  const fetchhandleChange = async (e) => {
    const { data } = await axios.get(
      `https://dummyjson.com/products/category/${e}`
    );

    dispatch({
      type: "PRODUCTS",
      payload: data.products,
    });
  };

  const fetchhandleName = async (e) => {
    const { data } = await axios.get(`https://dummyjson.com/products/${e}`);

    dispatch({
      type: "PRODUCTS",
      payload: [data],
    });
  };

  const fetchSearchAPI = async (e) => {
    const { data } = await axios
      .get(`https://dummyjson.com/products/search?q=${e}`)
      .catch((err) => console.log(err));
    dispatch({
      type: "PRODUCTS",
      payload: data.products,
    });
  };

  const resetFilter = async () => {
    const { data } = await axios
      .get("https://dummyjson.com/products")
      .catch((err) => console.log(err));

    dispatch({
      type: "PRODUCTS",
      payload: data.products,
    });
  };

  const fetchSearch = (e) => {
    fetchSearchAPI(e.target.value);
  };

  const handleChange = (e) => {
    fetchhandleChange(e.target.value);
  };

  const handleName = (e) => {
    fetchhandleName(e.target.value);
  };

  return (
    <div>
      <div className="FiltrHeader">
        <div className="LeftFilter">
          <div>
            <select
              id="dropdown"
              onChange={handleChange}
              className="selectFilter"
            >
              <option value="select">select Categories</option>
              {categories
                ? categories.map((c, i) => {
                    return (
                      <option value={c} key={i}>
                        {c}
                      </option>
                    );
                  })
                : "HANDLE CATEGORY ERROR"}
            </select>
          </div>
          <div>
            <select
              id="dropdown"
              onChange={handleName}
              className="selectFilter"
            >
              <option value="select">select Name</option>
              {products && products
                ? products.map((product) => {
                    return (
                      <option value={product.id} key={product.id}>
                        {product.title}
                      </option>
                    );
                  })
                : "HANDLE NAME ERROR"}
            </select>
          </div>
          <div>
            {" "}
            <a onClick={resetFilter} className="LinkReset">
              {" "}
              <UndoIcon />
              RESET{" "}
            </a>
          </div>
        </div>
        <div className="RightFilter">
          <div>
            Searh:
            <input
              onChange={fetchSearch}
              type="search"
              placeholder="Search product"
              className="InputFilter"
            />
          </div>

          <div>
            <button className="btn">
              {" "}
              <NavLink to="/cart" className="navlink">
                {" "}
                <b>Add To Cart</b>{" "}
              </NavLink>
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
