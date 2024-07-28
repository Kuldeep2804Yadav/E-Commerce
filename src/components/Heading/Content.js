import React, { useContext } from "react";
import "./Content.css";
import { Context } from "../ContextApi/Context";

function Content(props) {
  const{addToCart}=useContext(Context)
  const { title, imageUrl, price ,setCartCount,cartCount} = props.contentData;
 
  const handleAddToCart = () => {
    addToCart(props.contentData);
    
  };
 


  return (
    <div className="content">
      <h4>{title}</h4>
      <img src={imageUrl} alt="profile" />
      <div className="price-button">
        <p>${price}</p>
        <button className="bg-primary border-white" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Content;
