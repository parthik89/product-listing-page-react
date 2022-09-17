import React from "react";
import "./CartHeader.css";

function Cart() {
  return (
    <div className="CartHeader">
      <div className="CartLeft">
        <div>
          <b> Product</b>
        </div>
        <div>
          <b> Price</b>
        </div>
        <div>
          <b> Quantity</b>
        </div>
        <div>
          <b> Subtotal</b>
        </div>
      </div>
      <div>
        <b></b>
      </div>
    </div>
  );
}

export default Cart;
