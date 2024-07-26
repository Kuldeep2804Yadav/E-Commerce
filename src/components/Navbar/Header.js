import React, { useState } from "react";
import "./Header.css";
import { Navbar } from "react-bootstrap";
import Cart from "../Cart/Cart";
import { NavLink } from "react-router-dom";
import Heading from "../Home/Heading";

function Header() {
  const [cartOpen, setCartOpen] = useState(false);
  const cartHandler = () => {
    setCartOpen(true);
  };
  return (
    
      <Navbar className="navbar ">
        <ul>
          <li>
            <NavLink>HOME</NavLink>
          </li>
          <li>
            <NavLink>SHOP</NavLink>
          </li>
          <li>
            <NavLink to="./about">ABOUT</NavLink>
          </li>
        </ul>
        <button onClick={cartHandler}> Cart</button>
        {cartOpen && <Cart setCartOpen={setCartOpen} />}
      </Navbar>
      
    
  );
}

export default Header;
