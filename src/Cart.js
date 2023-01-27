import React from "react";
import { GrClose } from "react-icons/gr";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { useGlobalContext } from "./context";
const Cart = ({ id, img, title, price, amount, removeItem }) => {
  const { increase, decrease } = useGlobalContext();
  return (
    <article className="cart-item">
      <div className="img-cart">
        <img src={img} alt={title} />
      </div>
      <div className="cart-item-info">
        <h4>{title}</h4>

        <div className="amount-container">
          <div className="amount-btns-wrapper">
            <button className="amount-btn" onClick={() => increase(id)}>
              <FiChevronUp />
            </button>
            <p className="amount">{amount}</p>

            <button className="amount-btn" onClick={() => decrease(id)}>
              <FiChevronDown />
            </button>
          </div>
          <button className="remove-btn" onClick={() => removeItem(id)}>
            <GrClose />
          </button>
        </div>
      </div>
      <div className="item-price">
        <h4 className="price">{price}$</h4>
      </div>
    </article>
  );
};

export default Cart;
