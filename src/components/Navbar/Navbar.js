import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>HOME</li>
        <li>STORE</li>
        <li>ABOUT</li>
      </ul>
      <button>Cart</button>
    </div>
  );
}

export default Navbar;
