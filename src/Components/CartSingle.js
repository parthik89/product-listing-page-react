import React, { useState } from "react";
import "./CartSingle.css";
import { useStateValue } from "../StateProvider";

function CartSingle({ product, key }) {
  const [count, setCount] = useState(1);

  const [{ products, cate, tit, searchItem, cart }, dispatch] = useStateValue();

  const changeqty = (id, qty) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        id,
        qty,
      },
    });
  };

  return (
    <div key={key}>
      <div className="cartSingle">
        <div>
          <div className="cartsingleImg">
            <img src={product.image} />
          </div>
        </div>

        <div className="cartTitle">
          <div>{product.title}</div>
        </div>

        <div className="cartprice">
          <div>{product.price}</div>
        </div>

        <div className="cartbtns">
          <button
            disabled={count < 1}
            onClick={() => changeqty(product.id, product.qty - 1)}
          >
            <b> - </b>
          </button>

          <div> {product.qty} </div>

          <button
            value={product.id}
            onClick={() => changeqty(product.id, product.qty + 1)}
          >
            <b> + </b>
          </button>
        </div>

        <div className="cartprice">
          <div className="Bold"> {Number(product.price) * product.qty}</div>
        </div>
      </div>
      <hr className="hr" />
    </div>
  );
}

export default CartSingle;
