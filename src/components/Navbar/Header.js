import React, { useContext, useState } from "react";
import "./Header.css";
import { Button, Navbar } from "react-bootstrap";
import Cart from "../Cart/Cart";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../ContextApi/Context";

function Header() {
  const [cartOpen, setCartOpen] = useState(false);
  const { cartCount, showCart } = useContext(Context);
  const navigate = useNavigate();

  const cartHandler = () => {
    setCartOpen(true);
  };

  return (
    <Navbar className="navbar position-fixed">
      <ul >
        <li>
          <NavLink to="/home">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/">SHOP</NavLink>
        </li>
        <li>
          <NavLink to="/about">ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us">Contact US</NavLink>
        </li>
        <li >
          <NavLink to="/login">LOGIN</NavLink>
        </li>
      </ul>
      
      {showCart && (
        <>
          <Button className="cart-button" onClick={cartHandler}>Cart</Button>
          <span className="text-white">{cartCount}</span>
          {cartOpen && <Cart setCartOpen={setCartOpen} />}
        </>
      )}
    </Navbar>
  );
}

export default Header;
