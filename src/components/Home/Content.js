import React from "react";
import "./Content.css";
import Button from "../UI/Button";

function Content(props) {
  const {name,img,price}=props.contentData;
  return (
    <div className="content">
      <h4>{name}</h4>
      <img src={img}/>
      <div className="price-button">
        <p>${price}</p>
        <Button title="Add To Cart"></Button>
      </div>
    </div>
  );
}

export default Content;
