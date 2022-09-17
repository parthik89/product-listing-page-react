import React, { useEffect, useState } from "react";
import "./Cart.css";
import CartHeader from "./CartHeader";
import { useStateValue } from "../StateProvider";
import CartSingle from "./CartSingle";
import { NavLink } from "react-router-dom";

function Cart() {
  const [{ products, cate, tit, searchItem, cart }, dispatch] = useStateValue();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart && cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  let unique;
  unique = [...new Map(cart.map((m) => [m.id, m])).values()];
  useEffect(() => {
    //    console.log(unique);
  }, [unique]);

  return (
    <div className="CartBody">
      <CartHeader />
      <div className="cartbiwse">
        <div className="cartcontent">
          {/* {cart.length > 0 &&
            cart.map((c) => {
              return <CartSingle product={c} />;
            })} */}
          {unique &&
            unique.map((c) => {
              return <CartSingle product={c} key={c.id} />;
            })}
        </div>
        <div className="subTotalBox">
          <div className="carth1">
            <h1 style={{ fontWeight: 500 }}>Cart totals</h1>
          </div>

          <div className="subTotal">
            <div>subtotal</div>
            <div>${total}</div>
          </div>
          <hr className="hr" />

          <div className="subTotal">
            <div>Total</div>
            <div>${total}</div>
          </div>

          <div className="cartCheckoutBtn">
            <button className="bigbtn">
              <NavLink to="/ThankYou" className="navlinkcart">
                PROCEED TO CHECKOUT
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
