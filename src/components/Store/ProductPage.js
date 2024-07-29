import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";
import Heading from "../Heading/Heading";
import { Context } from "../ContextApi/Context";

const ProductPage = () => {
  const { musicData, merch } = useContext(Context);
  const [userData, setUserData] = useState({ userName: "", userComment: "" });
  const userHandler = (e) => {
    const { value, name } = e.target;
    setUserData({ ...userData, [name]: value });
  };
 

  const allProducts = [...musicData, ...merch];

  const { productId } = useParams();

  const product = allProducts.find((product) => 
    product.id === parseInt(productId, 10));
  const userformSubmitHandler = (e) => {
    e.preventDefault();
    product.review.push(userData);
    setUserData({ userName: "", userComment: "" })
    alert("your Comment Has SuccessFully Submitted")
  };
  

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-page">
      <Heading />
      <h2>{product.title}</h2>
      <div className="product-images">
        <img src={product.imageUrl} alt={`Product ${product.id}`} />
      </div>
      <form onSubmit={userformSubmitHandler}>
        <p>userName</p>
        <input
          type="text"
          name="userName"
          value={userData.userName}
          onChange={userHandler}
        />
        <p>Comment</p>
        <input
          type="text"
          name="userComment"
          value={userData.userComment}
          onChange={userHandler}
        />
        <button type="submit">submit</button>
      </form>

      <div className="product-reviews">
        <h3>Reviews</h3>
        <hr className="hr" />
        {product.review &&
          product.review.map((review, index) => (
            <div key={index} className="review">
            UserName:<h4>{review.user}</h4>
            Comment: <p> {review.comment}</p>
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductPage;
