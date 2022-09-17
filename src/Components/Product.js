import React, { useState } from "react";
import "./Product.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import { useStateValue } from "../StateProvider";
import green from "./Images/greenSmile.png";
import red from "./Images/redSmile.png";

function Product({ product, i }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [isChecked, setIsChecked] = useState(true);
  const [productCartList, setProductCartList] = useState([]);

  const [{ products, cate, tit, searchItem, cart }, dispatch] = useStateValue();

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const checkboxhandler = async (e) => {
    if (isChecked) {
      const { data } = await axios.get(
        `https://dummyjson.com/products/${e.target.value}`
      );

      dispatch({
        type: "ADD_TO_CART",
        payload: {
          id: data.id,
          title: data.title,
          image: data.images[0],
          price: data.price,
          qty: 1,
        },
      });
    }

    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div className="product" key={i}>
        <div>
          <img src={product.images[0]} />
        </div>
        <div className="titleName">
          <div>{product.title}</div>
        </div>{" "}
        <div className="category">
          {" "}
          <div> {product.category}</div>
        </div>
        <div className="stock">
          {" "}
          <div>
            {product.stock > 0 ? (
              <div className="imagegreen">
                <img src={green} />
                <div className="instock">
                  <p> In stock</p>
                </div>
              </div>
            ) : (
              <div className="imagegreen">
                <img src={red} />
                <div className="instock">
                  <p> In stock</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="price">
          {" "}
          <div>${product.price} </div>
        </div>
        <div className="rating">
          <div className="btnall">
            <div className="Divbtn1">
              <button className="btn1">1</button>
            </div>
            <div className="Divbtn2">
              <button className="btn2">
                {" "}
                <ShoppingCartIcon />{" "}
              </button>
            </div>
            <div>
              <Checkbox
                onChange={checkboxhandler}
                {...label}
                className="check"
                value={product.id}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
