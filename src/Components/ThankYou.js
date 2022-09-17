import React from "react";
import "./ThankYou.css";
import arrow from "./Images/arrowIcon.png";
function ThankYou() {
  return (
    <div className="ThankYoubody">
      <img src={arrow} />
      <h1>Thank You!</h1>
      <h2> Your Order is Successfully submitted. </h2>
      <h4> Contect developer if you like his work 🙂 </h4>
    </div>
  );
}

export default ThankYou;
