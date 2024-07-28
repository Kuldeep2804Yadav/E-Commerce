import React, { useContext, useState } from "react";
import "./Header.css";
import { Navbar } from "react-bootstrap";
import Cart from "../Cart/Cart";
import { NavLink } from "react-router-dom";
import { Context } from "../ContextApi/Context";

function Header() {
  const [cartOpen, setCartOpen] = useState(false);
  const {cartCount}=useContext(Context)
  const cartHandler = () => {
    setCartOpen(true);
  };
  return (
    
      <Navbar className="navbar ">
        <ul>
          <li>
            <NavLink to={'./home'}>HOME</NavLink>
          </li>
          <li>
            <NavLink to={"./"}>SHOP</NavLink>
          </li>
          <li>
            <NavLink to="./about">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="./contactUs">ContactUS</NavLink>
          </li>
          
        </ul>
        
        <button onClick={cartHandler}> Cart</button>
        <span className="text-white">{cartCount}</span>
        {cartOpen && <Cart setCartOpen={setCartOpen} />}
      </Navbar>
      
    
  );
}

export default Header;
