import React, { useState } from "react";

export const Context = React.createContext(null);

export const ContextProvider = (props) => {
  const productsArr = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: 4,
      title: "Blue Color",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const merch = [
    {
      id: 1,
      title: "T-Shirt",
      price: 19.99,
      imageUrl: "https://yourdesignstore.s3.amazonaws.com/uploads/yds/productImages/full/17155845641871Main-Product-Image-1-1.png",
    },
    {
      id: 2,
      title: "Coffee",
      price: 19.99,
      imageUrl: "https://www.nescafe.com/mena/sites/default/files/2023-08/Coffee%20Types%20Banner%20Desktop.jpg",
    },
  ];

  const [cartData, setCartData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [cartCount,setCartCount]= useState(0);

  const addToCart = (product) => {
    setCartData((prevCart) => {
      const existingProductIndex = prevCart.findIndex(item => item.id === product.id);
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    setTotalAmount((prevAmount) => prevAmount + product.price);
    setCartCount((cartCount)=>cartCount+1)
  };

  const removeFromCart = (productId) => {
    setCartData((prevCart) => {
      const existingProductIndex = prevCart.findIndex(item => item.id === productId);
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        const product = updatedCart[existingProductIndex];
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          updatedCart.splice(existingProductIndex, 1);
        }
        return updatedCart;
      }
      return prevCart;
    });

    setTotalAmount((prevAmount) => {
      const product = cartData.find(item => item.id === productId);
      return product ? prevAmount - product.price : prevAmount;
    });
    setCartCount((cartCount)=>cartCount-1)
  };

  return (
    <Context.Provider
      value={{
        musicData: productsArr,
        merch: merch,
        cartData: cartData,
        cartCount:cartCount,
        addToCart: addToCart,
        setCartData:setCartData,
        removeFromCart: removeFromCart,
        totalAmount: totalAmount,
        setTotalAmount:setTotalAmount,
        setCartCount:setCartCount

      }}
    >
      {props.children}
    </Context.Provider>
  );
};
