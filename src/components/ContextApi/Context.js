import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./auth-Context";

export const Context = createContext(null);

export const ContextProvider = (props) => {
  const [cartData, setCartData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const Authctx = useContext(AuthContext);
  const { Userdata } = Authctx;

  const productsArr = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      review: [],
    },
    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      review: [],
    },
    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      review: [],
    },
    {
      id: 4,
      title: "Blue Color",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      review: [],
    },
  ];

  const merch = [
    {
      id: 5,
      title: "T-Shirt",
      price: 19.99,
      imageUrl: "https://yourdesignstore.s3.amazonaws.com/uploads/yds/productImages/full/17155845641871Main-Product-Image-1-1.png",
      review: [],
    },
    {
      id: 6,
      title: "Hexagon merch hoodie",
      price: 19.99,
      imageUrl: "https://images.unsplash.com/photo-1580465207981-1a228ab41c7e?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review: [],
    },
    {
      id: 7,
      title: "Impulso T-shirt",
      price: 30.99,
      imageUrl: "https://images.unsplash.com/photo-1627933540891-1fb6a397c89b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review: [],
    },
    {
      id: 8,
      title: "Rock Tour T-shirt",
      price: 25.19,
      imageUrl: "https://images.unsplash.com/photo-1561737846-9afa73d06f31?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://i.etsystatic.com/24508141/r/il/414623/6217679833/il_794xN.6217679833_5mf5.jpg",
      review: [],
    },
  ];

  const sanitizeEmail = (email) => {
    return email.replace(/[@.]/g, '');
  };

  const addToCartAxios = async (product) => {
    const sanitizedEmail = sanitizeEmail(Userdata.email);
    const url = `https://crudcrud.com/api/b978de527a484d6c8a5f21c34c2c6a63/cart${sanitizedEmail}`;
    try {
      const response = await axios.post(url, product);
      console.log("Product added to cart:", response.data);
    } catch (error) {
      console.error("Error adding product to cart:", error.response?.data || error.message);
    }
  };

  const getCartData = async () => {
    const sanitizedEmail = sanitizeEmail(Userdata.email);
    const url = `https://crudcrud.com/api/b978de527a484d6c8a5f21c34c2c6a63/cart${sanitizedEmail}`;
    try {
      const response = await axios.get(url);
      const cartItems = response.data;
      setCartData(cartItems);
      const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      setTotalAmount(totalAmount);
      setCartCount(cartItems.length);
    } catch (error) {
      console.error("Error fetching cart data:", error.response?.data || error.message);
    }
  };

  const addToCart = (product) => {
    if (Authctx.isLoggedIn) {
      addToCartAxios(product);
    }
    setCartData((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setTotalAmount((prevAmount) => prevAmount + product.price);
    setCartCount((prevCount) => prevCount + 1);
  };

  const removeFromCart = (productId) => {
    setCartData((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.id === productId);
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
      const product = cartData.find((item) => item.id === productId);
      return product ? prevAmount - product.price : prevAmount;
    });
    setCartCount((prevCount) => prevCount - 1);
  };

  useEffect(() => {
    if (Authctx.isLoggedIn) {
      getCartData();
    }
  }, [Authctx.isLoggedIn]);

  return (
    <Context.Provider
      value={{
        musicData: productsArr,
        merch: merch,
        cartData: cartData,
        cartCount: cartCount,
        addToCart: addToCart,
        setCartData: setCartData,
        removeFromCart: removeFromCart,
        totalAmount: totalAmount,
        setTotalAmount: setTotalAmount,
        setCartCount: setCartCount,
        setShowCart: setShowCart,
        showCart: showCart,
        setCartOpen: setCartOpen,
        cartOpen: cartOpen,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
