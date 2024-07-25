import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];

  const cartCloseHandler=()=>{
    props.setCartOpen(false);
    
  }

  return (
    <div className="cart">
      <div>
        <button className="close-button" onClick={cartCloseHandler}>X</button>
        <h1 className="cart-title">Cart</h1>
      </div>

      <div className="cart-header">
        <span>ITEM</span>
        <span>PRICE</span>
        <span>QUANTITY</span>
      </div>
      <div className="cart-content">
        {cartElements.map((data, index) => (
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
        <span>{0}</span>
      </div>
      <button className="purchase-button">PURCHASE</button>
    </div>
  );
};

export default Cart;
