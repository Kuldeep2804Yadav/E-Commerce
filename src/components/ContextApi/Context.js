import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../AuthContext/authContext";

export const Context = createContext(null);

export const ContextProvider = (props) => {
  const { token } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState(null);
  const [cartData, setCartData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [showCart, setShowCart] = useState(false);

  const productsArr = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      review: []
    },
    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      review: []
    },
    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      review: []
    },
    {
      id: 4,
      title: "Blue Color",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      review: []
    },
  ];

  const merch = [
    {
      id: 5,
      title: "T-Shirt",
      price: 19.99,
      imageUrl: "https://yourdesignstore.s3.amazonaws.com/uploads/yds/productImages/full/17155845641871Main-Product-Image-1-1.png",
      review: []
    },
    {
      id: 6,
      title: "Coffee",
      price: 19.99,
      imageUrl: "https://www.nescafe.com/mena/sites/default/files/2023-08/Coffee%20Types%20Banner%20Desktop.jpg",
      review: []
    },
  ];

  const normalizeEmail = (email) => email.replace(/[@.]/g, "");

  const storeCartData = async () => {
    if (userEmail) {
      const normalizedEmail = normalizeEmail(userEmail);
      try {
        await axios.put(`https://crudcrud.com/api/YOUR_UNIQUE_ENDPOINT/${normalizedEmail}`, { cartData });
      } catch (error) {
        console.error("Error storing cart data:", error);
      }
    }
  };

  const retrieveCartData = async (email) => {
    const normalizedEmail = normalizeEmail(email);
    try {
      const response = await axios.get(`https://crudcrud.com/api/YOUR_UNIQUE_ENDPOINT/${normalizedEmail}`);
      if (response.data) {
        const storedCartData = response.data.cartData || [];
        setCartData(storedCartData);
        let total = 0;
        let count = 0;
        storedCartData.forEach(item => {
          total += item.price * item.quantity;
          count += item.quantity;
        });
        setTotalAmount(total);
        setCartCount(count);
      }
    } catch (error) {
      console.error("Error retrieving cart data:", error);
    }
  };

  useEffect(() => {
    if (userEmail) {
      retrieveCartData(userEmail);
    }
  }, [userEmail]);

  useEffect(() => {
    if (userEmail) {
      storeCartData();
    }
  }, [cartData]);

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }, []);

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
    setCartCount((cartCount) => cartCount + 1);
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
    setCartCount((cartCount) => cartCount - 1);
  };

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
        setUserEmail: setUserEmail
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
