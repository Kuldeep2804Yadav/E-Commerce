import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Content.css";
import { Context } from "../ContextApi/Context";

function Content(props) {
  const { addToCart } = useContext(Context);
  const { id, title, imageUrl, price } = props.contentData;

  const handleAddToCart = () => {
    addToCart(props.contentData);
  };

  return (
    <div className="content">
      <h4>{title}</h4>
      <div className="image-container">
        <Link to={`/product/${id}`}>
          <img src={imageUrl} alt="profile" />
        </Link>
      </div>
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