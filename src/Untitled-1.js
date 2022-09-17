import React from "react";
import { useStateValue } from "../StateProvider";
import axios from "axios";
import Product from "./Product";

function Filter() {
  const [{ products, cate }, dispatch] = useStateValue();
  const categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
  ];

  //   let PP = products?.products.map((product) => {
  //     return <Product product={product} i={product.id} />;
  //   });

  let EV;

  const fetchhandleChange = async (e) => {
    const { data } = await axios.get(
      `https://dummyjson.com/products/category/${e}`
    );

    console.log(data);
    console.log("LLl");

    dispatch({
      type: "PRODUCTS_Cat",
      payload: data,
    });
  };
  console.log("DDDDDDD");
  console.log("QQQQQQQ");
  console.log(cate.products);

  const fetchhandleName = async (e) => {
    const { data } = await axios
      .get(`https://dummyjson.com/products/${e}`)
      .catch((err) => {
        console.log(err);
      });

    console.log(data);

    dispatch({
      type: "PRODUCTS_Cat",
      payload: data,
    });
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    fetchhandleChange(e.target.value);
  };

  const handleName = (e) => {
    console.log(e.target.value);
    fetchhandleName(e.target.value);

    // console.log(e.target.value);    // fetch(`https://dummyjson.com/products/${e.target.value}`)   //   .then((res) => res.json()) //   .then(console.log);
  };

  return (
    <>
      <div>
        <div>
          <select id="dropdown" onChange={handleChange}>
            <option value="select">select Categories</option>
            {categories &&
              categories.map((c, i) => {
                return (
                  <option value={c} key={i}>
                    {c}
                  </option>
                );
              })}
            {/* {products?.products.map((product, i = 0) => {
              return (
                <option value={product.category} key={product.id}>
                  {product.category}
                </option>
              );
            })} */}
          </select>
        </div>
        <div>
          <select id="dropdown" onChange={handleName}>
            <option value="select">select Name</option>
            {products &&
              products.products.map((product, i = 0) => {
                return (
                  <option value={product.id} key={product.id}>
                    {product.title}
                  </option>
                );
              })}
          </select>
        </div>
        <div>RESET</div>
      </div>

      <div>
        <div>
          Searh:
          <input />
        </div>
        <div>
          <button> Add To Cart</button>
        </div>
      </div>
      {cate.products.map((p) => (
        <Product product={p} i={p.value} />
      ))}
    </>
  );
}

export default Filter;
