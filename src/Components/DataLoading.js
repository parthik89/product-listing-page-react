import React from "react";
import { useStateValue } from "../StateProvider";
import Product from "./Product";

function DataLoading(props) {
  const [{ products, cate, tit, searchItem }, dispatch] = useStateValue();

  let PP =
    products &&
    products.map((product, index) => {
      return <Product product={product} i={index.toString()} />;
    });

  return (
    <div key={props.key}>
      <div>{PP}</div>
    </div>
  );
}

export default DataLoading;
