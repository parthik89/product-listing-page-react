import React from "react";
import { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";

function Data() {
  const [products, setProducts] = useState();
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((r) => setProducts({ products: r }))
      .then(
        dispatch({
          type: "PRODUCTS",
          item: products,
        })
      );
  }, []);
  console.log("😍😍");
  console.log(products);
  return <div></div>;
}
export default Data;
