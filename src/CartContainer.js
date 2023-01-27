import React from "react";
import CartItem from "./Cart";
import { useGlobalContext } from "./context";
const CartContainer = () => {
  const { cart } = useGlobalContext();
  console.log(cart);
  return (
    <section className="cart-container">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          total <span>$0.00</span>
        </div>
        <button className="btn clear-btn">clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
