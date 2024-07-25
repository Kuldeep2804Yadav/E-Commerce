import React, { useState } from "react";

export const Context = React.createContext(null);

export const ContextProvider = (props) => {
  const productsArr = [
    {
      id: 1,
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: 4,
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const merch = [
    {
      id: 1,
      title: "T-Shirt",
      price: 19.99,
      imageUrl:
        "https://yourdesignstore.s3.amazonaws.com/uploads/yds/productImages/full/17155845641871Main-Product-Image-1-1.png",
    },
    {
      id: 2,
      title: "Coffee",
      price: 19.99,
      imageUrl:
        "https://www.nescafe.com/mena/sites/default/files/2023-08/Coffee%20Types%20Banner%20Desktop.jpg",
    },
  ];
  const [totalAmount, setTotalAmount] = useState(0);
  const addToCart = (product) => {
    setCartData((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
   setTotalAmount((totalAmount)=>totalAmount+product.price)
  };

  const [CartData, setCartData] = useState([]);
  return (
    <Context.Provider
      value={{
        musicData: productsArr,
        merch: merch,
        CartData: CartData,
        addToCart: addToCart,
        totalAmount:totalAmount
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
