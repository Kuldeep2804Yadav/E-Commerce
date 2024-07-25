import React, { useContext } from "react";
import "./Cart.css";
import { Context } from "../ContextApi/Context";

const Cart = (props) => {
  const { CartData,totalAmount } = useContext(Context);

  const cartCloseHandler = () => {
    props.setCartOpen(false);
  };

  return (
    <div className="cart">
      <div>
        <button className="close-button" onClick={cartCloseHandler}>
          X
        </button>
        <h1 className="cart-title">Cart</h1>
      </div>

      <div className="cart-header">
        <span>ITEM</span>
        <span>PRICE</span>
        <span>QUANTITY</span>
      </div>
      <div className="cart-content">
        {CartData.map((data, index) => (
          <div key={index} className="cart-item">
            <div className="item">
              <img src={data.imageUrl} alt={data.title} />
              <p>{data.title}</p>
            </div>
            <div className="price">{data.price}</div>
            <div className="quantity">
              <input type="number" value={data.quantity} readOnly />
              <button className="remove-button">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <span>Total : </span>
        <span>{totalAmount}</span>
      </div>
      <button className="purchase-button">PURCHASE</button>
    </div>
  );
};

export default Cart;
