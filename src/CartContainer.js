import React from "react";
import CartItem from "./Cart";
import { useGlobalContext } from "./context";
const CartContainer = () => {
  const { cart, total, loading, clearCart, removeItem } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <section className="cart-container">
        <h1>Your bag is empty</h1>
      </section>
    );
  }
  return (
    <section className="cart-container">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} removeItem={removeItem} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          total <span>${total}</span>
        </div>
        <button className="btn clear-btn" onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
