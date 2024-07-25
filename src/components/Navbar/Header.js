import React, { useState } from "react";
import "./Header.css";
import {Navbar } from "react-bootstrap";
import Cart from "../Cart/Cart";


function Header() {
  const [cartOpen,setCartOpen]= useState(false);
  const cartHandler=()=>{
    setCartOpen(true);
  }
  return (
    <Navbar className="navbar ">
      <ul>
        <li>HOME</li>
        <li>STORE</li>
        <li>ABOUT</li>
      </ul>
      <button onClick={cartHandler}> Cart</button>
      {cartOpen && <Cart setCartOpen={setCartOpen}/>}
     
    </Navbar>
  );
}

export default Header;
