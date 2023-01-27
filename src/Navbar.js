import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useGlobalContext } from "./context";
const Navbar = () => {
  const { amount } = useGlobalContext();
  return (
    <nav className="nav">
      <h1 className="nav-title">useReducer</h1>
      <div className="nav-icon">
        <span className="icon-desc">{amount}</span>
        <HiOutlineShoppingCart />
      </div>
    </nav>
  );
};

export default Navbar;
