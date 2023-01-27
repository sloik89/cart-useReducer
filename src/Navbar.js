import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
const Navbar = () => {
  return (
    <nav className="nav">
      <h1 className="nav-title">useReducer</h1>
      <div className="nav-icon">
        <span className="icon-desc">3</span>
        <HiOutlineShoppingCart />
      </div>
    </nav>
  );
};

export default Navbar;
